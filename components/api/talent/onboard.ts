<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import type { NextApiRequest, NextApiResponse } from 'next';


<<<<<<< HEAD
// Lazy import to avoid serverless cold start cost unless needed
async function summarizeAndTag(input: {
  fullName: string, professionalTitle: string,
  bio: string, projects?: string,
  skills: string,
  tools?: string
}) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next',
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import fse from 'fs-extra';
import { randomUUID } from 'crypto';


  professionalTitle: string;
  bio: string;
  projects?: string;
  skills: string;
=======
import fs from 'fs';
import path from 'path';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import fse from 'fs - extra';
import { randomUUID } from 'crypto';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  tools?: string
}) {

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .split(/[,\n]/)
        .map(s => s && s.trim())
        .filter(Boolean)
        .map(s => s && s.toLowerCase())
    )
  );
  if (!openaiApiKey) {
<<<<<<< HEAD
<<<<<<< HEAD
    const summary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
    return { summary, tags: basicTags.slice(0, 24) }

    const summary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
    return { summary, tags: basicTags.slice(0, 24) }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
    const summary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
    return { summary, tags: basicTags.slice(0, 24) }

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey: openaiApiKey });
    const prompt = `Create a concise professional summary (max 70 words) and extract 8-15 concise skill tags from the following profile. Respond as JSON with keys: summary, tags.\n\nTEXT:\n${combinedText}`;
<<<<<<< HEAD
<<<<<<< HEAD
    const response = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [
;
async /**
 * summarizeAndTag - Function description
 */
function summarizeAndTag() {
  const openaiApiKey =;
    process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ZION || '';
  const combined_text = [;
    input.professional_title,
    input.bio,
    input.projects || '',
    input.skills,
    input.tools || '',
  ].join ('\n');
;
  const basic_tags = Array.from (
    new Set (
      (input.skills + ', ' + (input.tools || ''));
        .split (/[, \n]/);
        .map (string => s.trim ());
        .filter (Boolean);
        .map (string => s.toLowerCase ())));
;
  // Check condition
if ( {) {
  $2
}
    const summary = `${input.full_name} — ${input.professional_title}. ${input.bio.slice (0, 240)}${input.bio.length > 240 ? '…' : ''}`;
    return { summary, tags: basic_tags.slice (0, 24) }  }    return { summary, tags: basic_tags.slice (0, 24) }
  }
  try {
    const { OpenAI } = await import ('openai');
    const client = new OpenAI ({ api_key: openaiApiKey });
    const prompt = `Create a concise professional summary (max 70 words) and extract 8 - 15 concise skill tags from the following profile. Respond as JSON with keys: summary, tags.\n\nTEXT:\n${combined_text}`;
;
    const response = await client.chat.completions.create ({
      model: 'gpt - 4o - mini',
      messages: [;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    const response = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { role: 'system', content: 'You are an expert technical recruiter.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0 && 0.4,
    });
    const content = response && response.choices?.[0]?.message?.content || '';
    try {
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { role: 'system', content: 'You are an expert technical recruiter.' };
        { role: 'user', content: prompt }];
      temperature: 0.4
      });
    const content = response.choices?.[0]?.message?.content || '';
    try {
      const parsed = JSON.parse(content);
<<<<<<< HEAD
<<<<<<< HEAD
      if (
        parsed &&
        typeof parsed.summary === 'string' &&
        Array.isArray(parsed.tags)
      ) {
        return { summary: parsed.summary, tags: parsed.tags.slice(0, 24) };      }      if (parsed && typeof parsed.summary === 'string' && Array.isArray(parsed.tags)) {
        return { summary: parsed.summary, tags: parsed.tags.slice(0, 24) }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (parsed && typeof parsed.summary === 'string' && Array.isArray(parsed.tags)) {
        return { summary: parsed.summary, tags: parsed.tags.slice(0, 24) }

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const parsed = JSON.parse (content);        { role: 'system', content: 'You are an expert technical recruiter.' }
        { role: 'user', content: prompt }];
      temperature: 0.4});
;
    const content = response.choices?.[0]?.message?.content || '';
    try {
      const parsed = JSON.parse (content);
      // Check condition
if (
      ) {) {
  $2
}
        return { summary: parsed.summary, tags: parsed.tags.slice (0, 24) }      }      if () {) {
  $2
}
        return { summary: parsed.summary, tags: parsed.tags.slice (0, 24) }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    } catch (_) {
      // fall through to heuristic;
    }
  } catch (err) {
<<<<<<< HEAD
<<<<<<< HEAD
    // ignore and fallback;
  }
  const fallbackSummary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
  return { summary: fallbackSummary, tags: basicTags.slice(0, 24) }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
<<<<<<< HEAD
  const fallbackSummary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`,
  return { summary: fallbackSummary, tags: basicTags.slice(0, 24) }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const id = randomUUID()

    const {
      fullName,
      professionalTitle,
      profilePicture,
full_name,
      professional_title,
      profile_picture,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    return res && res.status(405).json({ error: 'Method not allowed' });  }  }


  const fallbackSummary = `${input && input.fullName} — ${input && input.professionalTitle}. ${input && input.bio.slice(0, 240)}${input && input.bio.length > 240 ? '…' : ''}`;
  return { summary: fallbackSummary, tags: basicTags && basicTags.slice(0, 24) }
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    res && res.setHeader('AllowPOST');
    return res && res.status(405).json({ error: 'Method not allowed' })
  }
    // ignore and fallback;
  }
  const fallback_summary = `${input.full_name} — ${input.professional_title}. ${input.bio.slice (0, 240)}${input.bio.length > 240 ? '…' : ''}`;
  return { summary: fallback_summary, tags: basic_tags.slice (0, 24) }
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ('Allow', 'POST');
    return res.status (405).json ({ error: 'Method not allowed' });  }  }
  const fallback_summary = `${input.full_name} — ${input.professional_title}. ${input.bio.slice (0, 240)}${input.bio.length > 240 ? '…' : ''}`;
  return { summary: fallback_summary, tags: basic_tags.slice (0, 24) }
}
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ('AllowPOST');
    return res.status (405).json ({ error: 'Method not allowed' });
  }
  try {
    const id = randomUUID ();
    const {


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      bio,
      projects,
      yearsOfExperience,
      skills,
      tools,
      availability,
      timezone,
<<<<<<< HEAD
<<<<<<< HEAD
      fullName;
fullName;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      const ext = path.extname(profilePicture.name) |'.png';
=======
=======
      fullName;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const uploadsDir = path && path.join(process && process.cwd(), 'public', 'uploads');
    const dataDir = path && path.join(process && process.cwd(), 'data', 'talent-submissions');
    await fse && fse.ensureDir(uploadsDir);
    await fse && fse.ensureDir(dataDir);
<<<<<<< HEAD
<<<<<<< HEAD
      const ext = path && path.extname(cvFile && cvFile.name) || '.pdf';
      const filename = `${id}-cv${ext}`;
      const filePath = path && path.join(uploadsDir, filename);
      const base64Data = cvFile && cvFile.base64.split(',')[1];
      if (base64Data) {
        await fse && fse.writeFile(filePath, Buffer && Buffer.from(base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`;      }
    }
    const { summary, tags } = await summarizeAndTag({      const base64Data = cvFile && cvFile.base64.split()[1];
    const uploadsDir = path.join(process.cwd(), 'publicuploads');
    const dataDir = path.join(process.cwd(), 'datatalent-submissions');
    await fse.ensureDir(uploadsDir);
    await fse.ensureDir(dataDir);
    let savedProfileImagePath: string | null = null,
    if (profilePicture?.base64 && profilePicture?.name) {
      const ext = path.extname(profilePicture.name) || '.png';
      const filename = `${id}-profile${ext}`;
      const filePath = path.join(uploadsDir, filename);
      const base64Data = profilePicture.base64.split()[1];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    let savedCvPath: string | null = null;    if (cvFile?.base64 && cvFile?.name) {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (base64Data) {
        await fse.writeFile(filePath, Buffer.from(base64Data, 'base64'));
        savedProfileImagePath = `/uploads/${filename}`
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    let savedCvPath: string | null = null,
    if (cvFile?.base64 && cvFile?.name) {
      const ext = path.extname(cvFile.name) || '.pdf';
      const filename = `${id}-cv${ext}`;
      const filePath = path.join(uploadsDir, filename);
      const base64Data = cvFile.base64.split()[1];
<<<<<<< HEAD
<<<<<<< HEAD
      if (base64Data) {
        await fse && fse.writeFile(filePath, Buffer && Buffer.from(base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (base64Data) {
        await fse && fse.writeFile(filePath, Buffer && Buffer.from(base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      hourly_rate,
      portfolio_links,
      cv_file,
    } = req.body || {}
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ error: 'Missing required fields' });
    }
    const uploads_dir = path.join (process.cwd (), 'public', 'uploads');
    const data_dir = path.join (process.cwd (), 'data', 'talent - submissions');
    await fse.ensure_dir (uploads_dir);
    await fse.ensure_dir (data_dir);
;
    let savedProfileImagePath: string | null = null;    // Check condition
if ( {) {
  $2
}
      const ext = path.extname (profile_picture.name) || '.png';
      const filename = `${id}-profile${ext}`;
      const file_path = path.join (uploads_dir, filename);
      const base64Data = profile_picture.base64.split (', ')[1];
        await fse.write_file (file_path, Buffer.from (base64Data, 'base64'));
        savedProfileImagePath = `/uploads/${filename}`;
      }
    }
    let savedCvPath: string | null = null;    // Check condition
if ( {) {
  $2
}
      const ext = path.extname (cv_file.name) || '.pdf';
      const filename = `${id}-cv${ext}`;
      const file_path = path.join (uploads_dir, filename);
      const base64Data = cv_file.base64.split (', ')[1];
      // Check condition
if ( {) {
  $2
}
        await fse.write_file (file_path, Buffer.from (base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`;      }
    }
    const { summary, tags } = await summarizeAndTag ({      const base64Data = cv_file.base64.split ()[1];
      // Check condition
if ( {) {
  $2
}
        await fse.write_file (file_path, Buffer.from (base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`;
    }
    const { summary, tags } = await summarizeAndTag ({
      full_name,
      professional_title,
      bio,
      projects,
      skills,
      tools,
    });
    const record = {
      id,
      created_at: new Date ().toISOString (),
      full_name,
      professional_title,
      bio,
      projects,
      yearsOfExperience: Number (yearsOfExperience) || 0,
      skills,
      tools,
      availability,
      timezone,
hourly_rate: hourly_rate ? Number (hourly_rate) : null,
      portfolio_links,
      assets: {
        profile_image: savedProfileImagePath,
        cv: savedCvPath,
      },
<<<<<<< HEAD
<<<<<<< HEAD
      ai: {
        summary,
        tags,
      },
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  }  }
  const fallbackSummary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
  return { summary: fallbackSummary, tags: basicTags.slice(0, 24) }
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const id = randomUUID();
    const {
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
    if (
      !fullName |
      !professionalTitle |
      !bio |
      !yearsOfExperience |
      !skills |
      !availability |
      !timezone
    ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    const dataDir = path.join(process.cwd(), 'data', 'talent-submissions');
    await fse.ensureDir(uploadsDir);
    await fse.ensureDir(dataDir);
    let savedProfileImagePath: string | null = null;    if (profilePicture?.base64 && profilePicture?.name) {
      const ext = path.extname(profilePicture.name) |'.png';
      const filename = `${id}-profile${ext}`;
      const filePath = path.join(uploadsDir, filename);
      const base64Data = profilePicture.base64.split(',')[1];
        await fse.writeFile(filePath, Buffer.from(base64Data, 'base64'));
        savedProfileImagePath = `/uploads/${filename}`;
      }
    }
    const { summary, tags } = await summarizeAndTag({
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      ai: {

        summary,
        tags,
      },

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        summary;
        tags}};
    const perRecordPath = path && path.join(dataDir, `${id}.json`);
    await fse && fse.writeJSON(perRecordPath, record, { spaces: 2 });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



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

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const aggregatePath = path.join(process.cwd(), 'datatalent-submissions.json');
    }
    const perRecordPath = path.join (data_dir, `${id}.json`);
    await fse.writeJSON (perRecordPath, record, { spaces: 2 });
        summary;
        tags}}
;
    const perRecordPath = path.join (data_dir, `${id}.json`);
    await fse.writeJSON (perRecordPath, record, { spaces: 2 });
;
    const aggregate_path = path.join (
      process.cwd (),
      'data',
      'talent - submissions.json');    let aggregate: any[] = [];
    if () {) {
  $2
}
      try {
        const content = await fse.readJSON (aggregate_path);
        if () aggregate = content) {
  $2
}      } catch (_) {    const aggregate_path = path.join (process.cwd (), 'datatalent - submissions.json');
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    let aggregate: any[] = [];
    if () {) {
  $2
}
      try {
<<<<<<< HEAD
<<<<<<< HEAD
        const content = await fse.readJSON(aggregatePath);
        if (Array.isArray(content)) aggregate = content;        if (Array.isArray(content)) aggregate = content
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        const content = await fse.readJSON (aggregate_path);
        if () aggregate = content) {
  $2
}        if () aggregate = content) {
  $2
}

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } catch (_) {
        // ignore;
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    return res && res.status(200).json({ ok: true, id, summary, tags });

=======

    return res.status(200).json({ ok: true, id, summary, tags })
  } catch (error) {
    return res && res.status(500).json({ error: 'Internal server error' });
  }    return res && res.status(200).json({ ok: true, id, summary, tags })
  } catch (error) {

    return res && res.status(500).json({ error: 'Internal server error' })
  };

}


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return res.status(500).json({ error: 'Internal server error' });

  }

<<<<<<< HEAD
    return res && res.status(500).json({ error: 'Internal server error' })
  };
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    aggregate.push (record);
    await fse.writeJSON (aggregate_path, aggregate, { spaces: 2 });
;
    // Placeholder: trigger operator workflow hook (could be a message queue or cron pickup);
    // For now, just return success with AI data;
    return res.status (200).json ({ ok: true, id, summary, tags });
=======
    return res.status(500).json({ error: 'Internal server error' });
  }    return res.status(200).json({ ok: true, id, summary, tags })
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    return res.status (500).json ({ error: 'Internal server error' });
  }    return res.status (200).json ({ ok: true, id, summary, tags });
  } catch (error) {
    return res.status (500).json ({ error: 'Internal server error' });
}
<<<<<<< HEAD
  }

}
<<<<<<< HEAD
    aggregate.push(record);
    await fse.writeJSON(aggregatePath, aggregate, { spaces: 2 });

    // Placeholder: trigger operator workflow hook (could be a message queue or cron pickup)
    // For now, just return success with AI data
    return res.status(200).json({ ok: true, id, summary, tags });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }    return res.status(200).json({ ok: true, id, summary, tags })
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' })
}
}
  }
  }
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
