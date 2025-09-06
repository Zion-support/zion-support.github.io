import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';
import { randomUUID } from 'crypto';
<<<<<<< HEAD

// Lazy import to avoid serverless cold start cost unless needed
async function summarizeAndTag(input: {;
  fullName: string;
  professionalTitle: string;
  bio: string;
  projects?: string;
  skills: string;
  tools?: string;
}) {
  const openaiApiKey =
    process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ZION || '';
  const combinedText = [
    input.professionalTitle,
    input.bio,
    input.projects || '',
    input.skills,
    input.tools || '',
  ].join('\n');

  const basicTags = Array.from(
    new Set(
      (input.skills + ',' + (input.tools || ''))
        .split(/[,\n]/)
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => s.toLowerCase())
    )
  );

  if (!openaiApiKey) {
    const summary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
    return { summary, tags: basicTags.slice(0, 24) };
=======
// Lazy import to avoid serverless cold start cost unless needed
async function summarizeAndTag(input: {
  fullName: string, professionalTitle: string,
  bio: string, projects?: string,
  skills: string,
  tools?: string
}) {
  const openaiApiKey = process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ZION || '';
  const combinedText = [
    input.professionalTitle;
    input.bio;
    input.projects || '';
    input.skills;
    input.tools || ''].join('\n');

  const basicTags = Array.from(new Set(
    (input.skills +  + (input.tools || ''))
      .split(/[,\n]/)
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => s.toLowerCase())
  ));

  if (!openaiApiKey) {
    const summary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
    return { summary, tags: basicTags.slice(0, 24) }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey: openaiApiKey });
    const prompt = `Create a concise professional summary (max 70 words) and extract 8-15 concise skill tags from the following profile. Respond as JSON with keys: summary, tags.\n\nTEXT:\n${combinedText}`;

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
<<<<<<< HEAD
        { role: 'system', content: 'You are an expert technical recruiter.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.4,
    });
=======
        { role: 'system', content: 'You are an expert technical recruiter.' };
        { role: 'user', content: prompt }];
      temperature: 0.4
      });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

    const content = response.choices?.[0]?.message?.content || '';
    try {
      const parsed = JSON.parse(content);
<<<<<<< HEAD
      if (
        parsed &&
        typeof parsed.summary === 'string' &&
        Array.isArray(parsed.tags)
      ) {
        return { summary: parsed.summary, tags: parsed.tags.slice(0, 24) };
=======
      if (parsed && typeof parsed.summary === 'string' && Array.isArray(parsed.tags)) {
        return { summary: parsed.summary, tags: parsed.tags.slice(0, 24) }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }
    } catch (_) {
      // fall through to heuristic
    }
  } catch (err) {
<<<<<<< HEAD
    // ignore and fallback
  }

  const fallbackSummary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
  return { summary: fallbackSummary, tags: basicTags.slice(0, 24) };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
=======
    // ignore and fallback;
  }

  const fallbackSummary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
  return { summary: fallbackSummary, tags: basicTags.slice(0, 24) }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  try {
    const id = randomUUID();
    const {
<<<<<<< HEAD
      fullName,
      professionalTitle,
      profilePicture,
      bio,
      projects,
      yearsOfExperience,
      skills,
      tools,
      availability,
      timezone,
      hourlyRate,
      portfolioLinks,
      cvFile,
    } = req.body || {};

    if (
      !fullName ||
      !professionalTitle ||
      !bio ||
      !yearsOfExperience ||
      !skills ||
      !availability ||
      !timezone
    ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    const dataDir = path.join(process.cwd(), 'data', 'talent-submissions');
    await fse.ensureDir(uploadsDir);
    await fse.ensureDir(dataDir);

    let savedProfileImagePath: string | null = null;
=======
      fullName;
      professionalTitle;
      profilePicture;
      bio;
      projects;
      yearsOfExperience;
      skills;
      tools;
      availability;
      timezone;
      hourlyRate;
      portfolioLinks;
      cvFile} = req.body || {};

    if (!fullName || !professionalTitle || !bio || !yearsOfExperience || !skills || !availability || !timezone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const uploadsDir = path.join(process.cwd(), 'publicuploads');
    const dataDir = path.join(process.cwd(), 'datatalent-submissions');
    await fse.ensureDir(uploadsDir);
    await fse.ensureDir(dataDir);

    let savedProfileImagePath: string | null = null,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    if (profilePicture?.base64 && profilePicture?.name) {
      const ext = path.extname(profilePicture.name) || '.png';
      const filename = `${id}-profile${ext}`;
      const filePath = path.join(uploadsDir, filename);
<<<<<<< HEAD
      const base64Data = profilePicture.base64.split(',')[1];
      if (base64Data) {
        await fse.writeFile(filePath, Buffer.from(base64Data, 'base64'));
        savedProfileImagePath = `/uploads/${filename}`;
      }
    }

    let savedCvPath: string | null = null;
=======
      const base64Data = profilePicture.base64.split()[1];
      if (base64Data) {
        await fse.writeFile(filePath, Buffer.from(base64Data, 'base64'));
        savedProfileImagePath = `/uploads/${filename}`
      }
    }

    let savedCvPath: string | null = null,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    if (cvFile?.base64 && cvFile?.name) {
      const ext = path.extname(cvFile.name) || '.pdf';
      const filename = `${id}-cv${ext}`;
      const filePath = path.join(uploadsDir, filename);
<<<<<<< HEAD
      const base64Data = cvFile.base64.split(',')[1];
      if (base64Data) {
        await fse.writeFile(filePath, Buffer.from(base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`;
=======
      const base64Data = cvFile.base64.split()[1];
      if (base64Data) {
        await fse.writeFile(filePath, Buffer.from(base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }
    }

    const { summary, tags } = await summarizeAndTag({
<<<<<<< HEAD
      fullName,
      professionalTitle,
      bio,
      projects,
      skills,
      tools,
    });

    const record = {
      id,
      createdAt: new Date().toISOString(),
      fullName,
      professionalTitle,
      bio,
      projects,
      yearsOfExperience: Number(yearsOfExperience) || 0,
      skills,
      tools,
      availability,
      timezone,
      hourlyRate: hourlyRate ? Number(hourlyRate) : null,
      portfolioLinks,
      assets: {
        profileImage: savedProfileImagePath,
        cv: savedCvPath,
      },
      ai: {
        summary,
        tags,
      },
    };
=======
      fullName;
      professionalTitle;
      bio;
      projects;
      skills;
      tools});

    const record = {
      id;
      createdAt: new Date().toISOString(), fullName,
      professionalTitle;
      bio;
      projects;
      yearsOfExperience: Number(yearsOfExperience) || 0, skills,
      tools;
      availability;
      timezone;
      hourlyRate: hourlyRate ? Number(hourlyRate) : null, portfolioLinks,
      assets: {
      
        profileImage: savedProfileImagePath,
        cv: savedCvPath
    },
    ai: {
        summary;
        tags}};
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

    const perRecordPath = path.join(dataDir, `${id}.json`);
    await fse.writeJSON(perRecordPath, record, { spaces: 2 });

<<<<<<< HEAD
    const aggregatePath = path.join(
      process.cwd(),
      'data',
      'talent-submissions.json'
    );
=======
    const aggregatePath = path.join(process.cwd(), 'datatalent-submissions.json');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    let aggregate: any[] = [];
    if (fs.existsSync(aggregatePath)) {
      try {
        const content = await fse.readJSON(aggregatePath);
<<<<<<< HEAD
        if (Array.isArray(content)) aggregate = content;
=======
        if (Array.isArray(content)) aggregate = content
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      } catch (_) {
        // ignore
      }
    }
    aggregate.push(record);
    await fse.writeJSON(aggregatePath, aggregate, { spaces: 2 });

    // Placeholder: trigger operator workflow hook (could be a message queue or cron pickup)
    // For now, just return success with AI data

<<<<<<< HEAD
    return res.status(200).json({ ok: true, id, summary, tags });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
=======
    return res.status(200).json({ ok: true, id, summary, tags })
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
