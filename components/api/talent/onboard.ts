import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';

// Lazy import to avoid serverless cold start cost unless needed
async function summarizeAndTag(_input: {_fullName: string;
  professionalTitle: string;
  bio: string;
  projects?: string;
  skills: string;
  tools?: string;}) {_const _openaiApiKey = process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ZION || '';
  const _combinedText = [
    input.professionalTitle, _input.bio, _input.projects || '', _input.skills, _input.tools || ''].join('\n');

  const _basicTags = Array.from(new Set(
    (input.skills + ', _' + (input.tools || ''))
      .split(/[, _\n]/)
      .map(_(s) => s.trim())
      .filter(Boolean)
      .map(_(s) => s.toLowerCase())
  ));

  if (!openaiApiKey) {
    const _summary = `${input.fullName} — ${_input.professionalTitle}. ${_input.bio.slice(0, _240)}${_input.bio.length > 240 ? '…' : ''}`;
    return {_summary, _tags: basicTags.slice(0, _24)};
  }

  try {_const { OpenAI} = await import('openai');
    const _client = new OpenAI({_apiKey: openaiApiKey});
    const _prompt = `Create a concise professional summary (max 70 words) and extract 8-15 concise skill tags from the following profile. Respond as JSON with keys: summary, tags.\n\nTEXT:\n${_combinedText}`;

    const _response = await client.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: 'You are an expert technical recruiter.'},
        {_role: 'user', _content: prompt}],
      temperature: 0.4});

    const _content = response.choices?.[0]?.message?.content || '';
    try {_const _parsed = JSON.parse(content);
      if (parsed && typeof parsed.summary === 'string' && Array.isArray(parsed.tags)) {
        return { summary: parsed.summary, _tags: parsed.tags.slice(0, _24)};
      }
    } catch (_) {_// fall through to heuristic}
  } catch (err) {_// ignore and fallback}

  const _fallbackSummary = `${_input.fullName} — ${_input.professionalTitle}. ${_input.bio.slice(0, _240)}${_input.bio.length > 240 ? '…' : ''}`;
  return {_summary: fallbackSummary, _tags: basicTags.slice(0, _24)};
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method not allowed'});
  }

  try {_const _id = randomUUID();
    const {
      fullName, _professionalTitle, _profilePicture, _bio, _projects, _yearsOfExperience, _skills, _tools, _availability, _timezone, _hourlyRate, _portfolioLinks, _cvFile} = req.body || {};

    if (!fullName || !professionalTitle || !bio || !yearsOfExperience || !skills || !availability || !timezone) {_return res.status(400).json({ error: 'Missing required fields'});
    }

    const _uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    const _dataDir = path.join(process.cwd(), 'data', 'talent-submissions');
    await fse.ensureDir(uploadsDir);
    await fse.ensureDir(dataDir);

    let savedProfileImagePath: string | null = null;
    if (profilePicture?.base64 && profilePicture?.name) {_const _ext = path.extname(profilePicture.name) || '.png';
      const _filename = `${id}-profile${_ext}`;
      const _filePath = path.join(uploadsDir, filename);
      const _base64Data = profilePicture.base64.split(',')[1];
      if (base64Data) {_await fse.writeFile(filePath, _Buffer.from(base64Data, _'base64'));
        savedProfileImagePath = `/uploads/${filename}`;
      }
    }

    let savedCvPath: string | null = null;
    if (cvFile?.base64 && cvFile?.name) {_const _ext = path.extname(cvFile.name) || '.pdf';
      const _filename = `${id}-cv${_ext}`;
      const _filePath = path.join(uploadsDir, filename);
      const _base64Data = cvFile.base64.split(',')[1];
      if (base64Data) {_await fse.writeFile(filePath, _Buffer.from(base64Data, _'base64'));
        savedCvPath = `/uploads/${filename}`;
      }
    }

    const {_summary, _tags} = await summarizeAndTag({_fullName, _professionalTitle, _bio, _projects, _skills, _tools});

    const _record = {_id, _createdAt: new Date().toISOString(), _fullName, _professionalTitle, _bio, _projects, _yearsOfExperience: Number(yearsOfExperience) || 0, _skills, _tools, _availability, _timezone, _hourlyRate: hourlyRate ? Number(hourlyRate) : null, _portfolioLinks, _assets: {
        profileImage: savedProfileImagePath, _cv: savedCvPath},
      ai: {_summary, _tags}};

    const _perRecordPath = path.join(dataDir, `${_id}.json`);
    await fse.writeJSON(perRecordPath, record, {_spaces: 2});

    const _aggregatePath = path.join(process.cwd(), 'data', 'talent-submissions.json');
    let aggregate: unknown[] = [];
    if (fs.existsSync(aggregatePath)) {_try {
        const _content = await fse.readJSON(aggregatePath);
        if (Array.isArray(content)) aggregate = content;} catch (_) {_// ignore}
    }
    aggregate.push(record);
    await fse.writeJSON(aggregatePath, aggregate, {_spaces: 2});

    // Placeholder: trigger operator workflow hook (could be a message queue or cron pickup)
    // For now, just return success with AI data

    return res.status(200).json({_ok: true, _id, _summary, _tags});
  } catch (error) {_return res.status(500).json({ error: 'Internal server error'});
  }
}