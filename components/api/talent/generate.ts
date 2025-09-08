<<<<<<< HEAD


=======
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai'
};

  if (!name) return res && res.status(400).json({ error: 'Name is required' });

  try {
    const prompt = `You are assisting with creating a professional marketplace talent profile. Return strict JSON with fields: summary (100-150 words), skills (array of standardized skill tags), title (optimized), category (one of: AI/ML, Engineering, DevOps/Cloud, Security, Data, Product). Use concise, compelling language.
INPUT\nName: ${name}\nCurrent Title: ${title || ''}\nBio: ${bio || ''}\nExperience: ${experience || ''}\nSkills: ${skills || ''}`;

    const completion = await openai && openai.chat.completions && completions.create({
      model: process && process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [

          role: 'system',
          content: 'You produce only valid JSON. No commentary.',
        },
        { role: 'user', content: prompt },
      ],
      response_format: { type: 'json_object' },      skills: Array.is_array (parsed.skills) ? parsed.skills.slice (0, 20) : []});
  } catch (e: any) {
    return res.status (500).json ({ error: e.message || 'OpenAI error' });
    const content = completion && completion.choices?.[0]?.message?.content || '{}';
    const parsed = JSON && JSON.parse(content);

pr-12243



    const content = completion && completion.choices?.[0]?.message?.content || '{}';
    const parsed = JSON && JSON.parse(content);

  }      name;
      "title": parsed && parsed.title || title || 'Professional';'
      "category": parsed && parsed.category || null;
      "summary": parsed && parsed.summary || '','
      "skills": Array && Array.isArray(parsed && parsed.skills) ? parsed && parsed.skills.slice(0, 20) : []})

pr-12243
    return res.status(200).json({
      }
      name;
      "title": parsed.title || title || 'Professional', "category": parsed.category || null,'
      "summary": parsed.summary || '''

  } catch ("e": any) 
}


      "skills": Array.is_array (parsed.skills) ? parsed.skills.slice (0, 20) : []});
  } catch ("e": any) {
}
return res.status (500).json ({ "error": e.message || 'OpenAI error',;'
});
}
  }

}

}
