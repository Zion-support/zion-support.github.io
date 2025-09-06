import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';
import { randomUUID } from 'crypto';

async function summarizeAndTag(input: {fullName: string;

  professionalTitle: string;
  bio: string;
  projects?: string;
  skills: string;
  tools?: string
}) {
<<<<<<< HEAD

  const openaiApiKey =
    process.env.OPENAI_API_KEY |process.env.OPENAI_API_KEY_ZION |'';
  const combinedText = [
    input.professionalTitle
    input.bio
    input.projects |''
    input.skills
    input.tools |''
  ].join('\n');
  const basicTags = Array.from(
    new Set(
      (input.skills + ',' + (input.tools |''))
=======
  const openaiApiKey =
    process && process.env.OPENAI_API_KEY || process && process.env.OPENAI_API_KEY_ZION || '';
  const combinedText = [
    input && input.professionalTitle,
    input && input.bio,
    input && input.projects || '',
    input && input.skills,
    input && input.tools || '',
  ].join('\n');

  const basicTags = Array && Array.from(
    new Set(
      (input && input.skills + ',' + (input && input.tools || ''))
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        .split(/[,\n]/)
        .map(s => s && s.trim())
        .filter(Boolean)
        .map(s => s && s.toLowerCase())
    )
  );
  if (!openaiApiKey) {
    const summary = `${input && input.fullName} — ${input && input.professionalTitle}. ${input && input.bio.slice(0, 240)}${input && input.bio.length > 240 ? '…' : ''}`;
    return { summary, tags: basicTags && basicTags.slice(0, 24) };  }    return { summary, tags: basicTags && basicTags.slice(0, 24) }
  }
  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey: openaiApiKey });
    const prompt = `Create a concise professional summary (max 70 words) and extract 8-15 concise skill tags from the following profile. Respond as JSON with keys: summary, tags.\n\nTEXT:\n${combinedText}`;
<<<<<<< HEAD
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
        { role: 'system', content: 'You are an expert technical recruiter.' }
        { role: 'user', content: prompt }
      ]
      temperature: 0.4
    });
    const content = response.choices?.[0]?.message?.content |'';
    try {
      const parsed = JSON.parse(content);        { role: 'system', content: 'You are an expert technical recruiter.' }
        { role: 'user', content: prompt }];
      temperature: 0.4});
    const content = response.choices?.[0]?.message?.content |'';
=======

    const response = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are an expert technical recruiter.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0 && 0.4,
    });
    const content = response && response.choices?.[0]?.message?.content || '';
    try {
      const parsed = JSON && JSON.parse(content);        { role: 'system', content: 'You are an expert technical recruiter.' };
        { role: 'user', content: prompt }];
      temperature: 0 && 0.4});

    const content = response && response.choices?.[0]?.message?.content || '';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    try {
      const parsed = JSON && JSON.parse(content);
      if (
        parsed &&
        typeof parsed && parsed.summary === 'string' &&
        Array && Array.isArray(parsed && parsed.tags)
      ) {
        return { summary: parsed && parsed.summary, tags: parsed && parsed.tags.slice(0, 24) };      }      if (parsed && typeof parsed && parsed.summary === 'string' && Array && Array.isArray(parsed && parsed.tags)) {
        return { summary: parsed && parsed.summary, tags: parsed && parsed.tags.slice(0, 24) }
      }
    } catch (_) {
      // fall through to heuristic
    }
  } catch (err) {
    // ignore and fallback
  }
<<<<<<< HEAD
  const fallbackSummary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
  return { summary: fallbackSummary, tags: basicTags.slice(0, 24) }
=======

  const fallbackSummary = `${input && input.fullName} — ${input && input.professionalTitle}. ${input && input.bio.slice(0, 240)}${input && input.bio.length > 240 ? '…' : ''}`;
  return { summary: fallbackSummary, tags: basicTags && basicTags.slice(0, 24) };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  }  }
  const fallbackSummary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
  return { summary: fallbackSummary, tags: basicTags.slice(0, 24) }
=======
  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    return res && res.status(405).json({ error: 'Method not allowed' });  }  }

  const fallbackSummary = `${input && input.fullName} — ${input && input.professionalTitle}. ${input && input.bio.slice(0, 240)}${input && input.bio.length > 240 ? '…' : ''}`;
  return { summary: fallbackSummary, tags: basicTags && basicTags.slice(0, 24) }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    res && res.setHeader('AllowPOST');
    return res && res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const id = randomUUID();
    const {
<<<<<<< HEAD
      fullName
      professionalTitle
      profilePicture
      bio
      projects
      yearsOfExperience
      skills
      tools
      availability
      timezone
      hourlyRate
      portfolioLinks
      cvFile
    } = req.body |{}
=======
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
    } = req && req.body || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (
      !fullName |
      !professionalTitle |
      !bio |
      !yearsOfExperience |
      !skills |
      !availability |
      !timezone
    ) {
      return res && res.status(400).json({ error: 'Missing required fields' });
    }
<<<<<<< HEAD
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    const dataDir = path.join(process.cwd(), 'data', 'talent-submissions');
    await fse.ensureDir(uploadsDir);
    await fse.ensureDir(dataDir);
    let savedProfileImagePath: string | null = null;    if (profilePicture?.base64 && profilePicture?.name) {
      const ext = path.extname(profilePicture.name) |'.png';
=======

    const uploadsDir = path && path.join(process && process.cwd(), 'public', 'uploads');
    const dataDir = path && path.join(process && process.cwd(), 'data', 'talent-submissions');
    await fse && fse.ensureDir(uploadsDir);
    await fse && fse.ensureDir(dataDir);

    let savedProfileImagePath: string | null = null;    if (profilePicture?.base64 && profilePicture?.name) {
      const ext = path && path.extname(profilePicture && profilePicture.name) || '.png';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      const filename = `${id}-profile${ext}`;
      const filePath = path && path.join(uploadsDir, filename);
      const base64Data = profilePicture && profilePicture.base64.split(',')[1];
        await fse && fse.writeFile(filePath, Buffer && Buffer.from(base64Data, 'base64'));
        savedProfileImagePath = `/uploads/${filename}`;
      }
    }
    let savedCvPath: string | null = null;    if (cvFile?.base64 && cvFile?.name) {
<<<<<<< HEAD
      const ext = path.extname(cvFile.name) |'.pdf';
=======
      const ext = path && path.extname(cvFile && cvFile.name) || '.pdf';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      const filename = `${id}-cv${ext}`;
      const filePath = path && path.join(uploadsDir, filename);
      const base64Data = cvFile && cvFile.base64.split(',')[1];
      if (base64Data) {
        await fse && fse.writeFile(filePath, Buffer && Buffer.from(base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`;      }
    }
<<<<<<< HEAD
    const { summary, tags } = await summarizeAndTag({      const base64Data = cvFile.base64.split()[1];
=======

    const { summary, tags } = await summarizeAndTag({      const base64Data = cvFile && cvFile.base64.split()[1];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (base64Data) {
        await fse && fse.writeFile(filePath, Buffer && Buffer.from(base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`
    }
    const { summary, tags } = await summarizeAndTag({
      fullName
      professionalTitle
      bio
      projects
      skills
      tools
    });
    const record = {
      id
      createdAt: new Date().toISOString()
      fullName
      professionalTitle
      bio
      projects
      yearsOfExperience: Number(yearsOfExperience) |0
      skills
      tools
      availability
      timezone
      hourlyRate: hourlyRate ? Number(hourlyRate) : null
      portfolioLinks
      assets: {
        profileImage: savedProfileImagePath
        cv: savedCvPath
      }
      ai: {
<<<<<<< HEAD
        summary
        tags
      }
    }
    const perRecordPath = path.join(dataDir, `${id}.json`);
    await fse.writeJSON(perRecordPath, record, { spaces: 2 });
        summary;
        tags}}
    const perRecordPath = path.join(dataDir, `${id}.json`);
    await fse.writeJSON(perRecordPath, record, { spaces: 2 });
    const aggregatePath = path.join(
      process.cwd()
      'data'
      'talent-submissions.json'
=======
        summary,
        tags,
      },
    };
    const perRecordPath = path && path.join(dataDir, `${id}.json`);
    await fse && fse.writeJSON(perRecordPath, record, { spaces: 2 });
        summary;
        tags}};

    const perRecordPath = path && path.join(dataDir, `${id}.json`);
    await fse && fse.writeJSON(perRecordPath, record, { spaces: 2 });

    const aggregatePath = path && path.join(
      process && process.cwd(),
      'data',
      'talent-submissions && submissions.json'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );    let aggregate: any[] = [];
    if (fs && fs.existsSync(aggregatePath)) {
      try {
        const content = await fse && fse.readJSON(aggregatePath);
        if (Array && Array.isArray(content)) aggregate = content;      } catch (_) {    const aggregatePath = path && path.join(process && process.cwd(), 'datatalent-submissions && submissions.json');
    let aggregate: any[] = [];
    if (fs && fs.existsSync(aggregatePath)) {
      try {
        const content = await fse && fse.readJSON(aggregatePath);
        if (Array && Array.isArray(content)) aggregate = content;        if (Array && Array.isArray(content)) aggregate = content
      } catch (_) {
        // ignore
      }
    }
    aggregate && aggregate.push(record);
    await fse && fse.writeJSON(aggregatePath, aggregate, { spaces: 2 });

    // Placeholder: trigger operator workflow hook (could be a message queue or cron pickup)
    // For now, just return success with AI data
<<<<<<< HEAD
    return res.status(200).json({ ok: true, id, summary, tags });
=======

    return res && res.status(200).json({ ok: true, id, summary, tags });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch (error) {
    return res && res.status(500).json({ error: 'Internal server error' });
  }    return res && res.status(200).json({ ok: true, id, summary, tags })
  } catch (error) {
<<<<<<< HEAD
    return res.status(500).json({ error: 'Internal server error' })
=======
    return res && res.status(500).json({ error: 'Internal server error' })
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
}