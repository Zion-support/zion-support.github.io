

import type { NextApiRequest, NextApiResponse } from 'next';


import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';


// Lazy import to avoid serverless cold start cost unless needed
async function summarizeAndTag(input: {
  fullName: string, professionalTitle: string,
  bio: string, projects?: string,
  skills: string,
  tools?: string
}) {
import type { NextApiRequest, NextApiResponse } from 'next',
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';
import { randomUUID } from 'crypto';


  professionalTitle: string;
  bio: string;
  projects?: string;
  skills: string;
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

        .split(/[,\n]/)
        .map(s => s && s.trim())
        .filter(Boolean)
        .map(s => s && s.toLowerCase())
    )
  );
  if (!openaiApiKey) {

    const summary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
    return { summary, tags: basicTags.slice(0, 24) }

    const summary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`;
    return { summary, tags: basicTags.slice(0, 24) }
  }
  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey: openaiApiKey });
    const prompt = `Create a concise professional summary (max 70 words) and extract 8-15 concise skill tags from the following profile. Respond as JSON with keys: summary, tags.\n\nTEXT:\n${combinedText}`;


    const response = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [

        { role: 'system', content: 'You are an expert technical recruiter.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.4,
    });

const content = response.choices?.[0]?.message?.content || '';
    try {

        { role: 'system', content: 'You are an expert technical recruiter.' };
        { role: 'user', content: prompt }];
      temperature: 0.4
      });

    const content = response.choices?.[0]?.message?.content || '';
    try {
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed.summary === 'string' && Array.isArray(parsed.tags)) {
        return { summary: parsed.summary, tags: parsed.tags.slice(0, 24) }

      const parsed = JSON.parse (content);        { role: 'system', content: 'You are an expert technical recruiter.' }
        { role: 'user', content: prompt }];
      temperature: 0.4});
;'
    const content = response.choices?.[0]?.message?.content || '';
    try {}
      const parsed = JSON.parse (content);
      // Check condition;
if (
      ) {) {}
  $2;
}
        return { summary: parsed.summary, tags: parsed.tags.slice (0, 24) }      }      if () {) {}
  $2;
}
        return { summary: parsed.summary, tags: parsed.tags.slice (0, 24) }
      }
    } catch (_) {
      // fall through to heuristic;
    }
  } catch (err) {


export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

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


      fullName,
      professionalTitle,
      profilePicture,
full_name,
      professional_title,
      profile_picture,
      bio,
      projects,
      yearsOfExperience,
      skills,
      tools,
      availability,
      timezone,

      const ext = path.extname(profilePicture.name) |'.png';
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


    const uploadsDir = path && path.join(process && process.cwd(), 'public', 'uploads');
    const dataDir = path && path.join(process && process.cwd(), 'data', 'talent-submissions');
    await fse && fse.ensureDir(uploadsDir);
    await fse && fse.ensureDir(dataDir);


    let savedCvPath: string | null = null;    if (cvFile?.base64 && cvFile?.name) {

      const filename = `${id}-cv${ext}`;
      const filePath = path && path.join(uploadsDir, filename);
      const base64Data = cvFile && cvFile.base64.split(',')[1];
      if (base64Data) {
        await fse && fse.writeFile(filePath, Buffer && Buffer.from(base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`;      }
    }
    const uploadsDir = path.join(process.cwd(), 'publicuploads');
    const dataDir = path.join(process.cwd(), 'datatalent-submissions');
>>>>>>> origin/cursor/delete-old-data-records-6bba


    let savedProfileImagePath: string | null = null,
    if (profilePicture?.base64 && profilePicture?.name) {
      const ext = path.extname(profilePicture.name) || '.png';
      const filename = `${id}-profile${ext}`;
      const filePath = path.join(uploadsDir, filename);
      const base64Data = profilePicture.base64.split()[1];
      if (base64Data) {
        await fse.writeFile(filePath, Buffer.from(base64Data, 'base64'));
        savedProfileImagePath = `/uploads/${filename}`
      }

    }


    let savedCvPath: string | null = null,
    if (cvFile?.base64 && cvFile?.name) {
      const ext = path.extname(cvFile.name) || '.pdf';
      const filename = `${id}-cv${ext}`;
      const filePath = path.join(uploadsDir, filename);
      const base64Data = cvFile.base64.split()[1];

      if (base64Data) {
        await fse && fse.writeFile(filePath, Buffer && Buffer.from(base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`

      if (base64Data) {
        await fse && fse.writeFile(filePath, Buffer && Buffer.from(base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`
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
=======
const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

const dataDir = path.join(process.cwd(), 'data', 'talent-submissions');
    await fse.ensureDir(uploadsDir);
    await fse.ensureDir(dataDir);

    let savedProfileImagePath: string | null = null;
    if (profilePicture?.base64 && profilePicture?.name) {

>>>>>>> origin/cursor/delete-old-data-records-6bba
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


      ai: {

        summary,
        tags,
      },

      if (base64Data) {
        await fse && fse.writeFile(filePath, Buffer && Buffer.from(base64Data, 'base64'));
        savedCvPath = `/uploads/${filename}`
      ai: {
        summary;
        tags}};

    const perRecordPath = path && path.join(dataDir, `${id}.json`);
    await fse && fse.writeJSON(perRecordPath, record, { spaces: 2 });



    const aggregatePath = path && path.join(
      process && process.cwd(),
      'data',
      'talent-submissions && submissions.json'
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

    let aggregate: any[] = [];
    if () {) {
  $2
}
      try {

        const content = await fse.readJSON (aggregate_path);
        if () aggregate = content) {
  $2
}        if () aggregate = content) {
  $2
}

        const content = await fse.readJSON(aggregatePath);
        if (Array.isArray(content)) aggregate = content;        if (Array.isArray(content)) aggregate = content
      } catch (_) {
        // ignore;
      }
    }



    return res && res.status(200).json({ ok: true, id, summary, tags });

  } catch (error) {
    return res && res.status(500).json({ error: 'Internal server error' });
  }    return res && res.status(200).json({ ok: true, id, summary, tags })
  } catch (error) {
}


    return res.status(500).json({ error: 'Internal server error' });

  }

    return res && res.status(500).json({ error: 'Internal server error' })
  };

}
    aggregate.push (record);
    await fse.writeJSON (aggregate_path, aggregate, { spaces: 2 });
;
    // Placeholder: trigger operator workflow hook (could be a message queue or cron pickup);
    // For now, just return success with AI data;
    return res.status (200).json ({ ok: true, id, summary, tags });
  } catch (error) {
    return res.status (500).json ({ error: 'Internal server error' });
  }    return res.status (200).json ({ ok: true, id, summary, tags });
  } catch (error) {
    return res.status (500).json ({ error: 'Internal server error' });
}
}
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
}
  }
  }
  }
}
