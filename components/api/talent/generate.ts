import type { NextApiRequest, NextApiResponse } from 'next';'
import OpenAI from 'openai';

    name: string;
    title?: string;
    bio?: string;
    experience?: string;

pr-12243
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.setHeader('AllowPOST').status(405).end('Method Not Allowed')
  }
if (!name) return res.status(400).json({ error: 'Name is required' });
    skills?: string;
  };

  if (!name) return res.status(400).json({ error: 'Name is required' });
origin/cursor/automate-test-improve-and-merge-code-2533
  try {
    const prompt = `You are assisting with creating a professional marketplace talent profile. Return strict JSON with fields: summary (100-150 words), skills (array of standardized skill tags), title (optimized), category (one of: AI/ML, Engineering, DevOps/Cloud, Security, Data, Product). Use concise, compelling language.
INPUT\nName: ${name}\nCurrent Title: ${title |''}\nBio: ${bio |''}\nExperience: ${experience |''}\nSkills: ${skills |''}`;
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL |'gpt-4o-mini';
      messages: [;
{
          role: 'system',
          content: 'You produce only valid JSON. No commentary.',
        },
        { role: 'user', content: prompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.6,
    });

    const content = completion.choices?.[0]?.message?.content || '{}';
    const parsed = JSON.parse(content);
    return res.status(200).json({
name,
      title: parsed.title || title || 'Professional',
      category: parsed.category || null,
      summary: parsed.summary || '',
      skills: Array.isArray(parsed.skills) ? parsed.skills.slice(0, 20) : [],
    });
  } catch (e: any) {
    return res.status(500).json({ error: e.message |'OpenAI error' });
  }      name;
      title: parsed.title |title |'Professional';
      category: parsed.category |null;
      summary: parsed.summary |'';
  const { name, title, bio, experience, skills } = req.body as {
    name: string, title?: string,
    bio?: string;
    experience?: string;
    skills?: string;
pr-12243

  };
'
  if (!name) return res && res.status(400).json({ error: 'Name is required' });

  try {}
    const prompt = `You are assisting with creating a professional marketplace talent profile. Return strict JSON with fields: summary (100-150 words), skills (array of standardized skill tags), title (optimized), category (one of: AI/ML, Engineering, DevOps/Cloud, Security, Data, Product). Use concise, compelling language.'`
INPUT\nName: ${name}\nCurrent Title: ${title || ''}\nBio: ${bio || ''}\nExperience: ${experience || ''}\nSkills: ${skills || ''}`;

    const completion = await openai && openai.chat.completions && completions.create({
      model: process && process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
;
pr-12243
        {
          role: 'system',
          content: 'You produce only valid JSON. No commentary.',
        },'
        { role: 'user', content: prompt },
      ],'
      response_format: { type: 'json_object' },

INPUT\nName: ${name}\nCurrent Title: ${title || ''}\nBio: ${bio || ''}\nExperience: ${experience || ''}\nSkills: ${skills || ''}`;
    const completion = await openai && openai.chat.completions && completions.create({
      model: process && process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [;
    skills?: string;  }    skills?: string;
  }
;
  if (return res.status (400).json ({ error: 'Name is required' })) {
  $2
}

        { role: 'system', content: 'You produce only valid JSON. No commentary.' };
        { role: 'user', content: prompt }];
      response_format: {'
       type: 'json_object' ;
    },
    temperature: 0.6;
      });

pr-12243
  }      name;

  }      name;'

      title: parsed && parsed.title || title || 'Professional';
      category: parsed && parsed.category || null;'
      summary: parsed && parsed.summary || '',
      skills: Array && Array.isArray(parsed && parsed.skills) ? parsed && parsed.skills.slice(0, 20) : []})
  } catch (e: any) {
}

pr-12243
    return res.status(200).json({
      name;
      title: parsed.title || title || 'Professional', category: parsed.category || null,
      summary: parsed.summary || '',
  } catch (e: any) {
}

pr-12243

pr-12243

