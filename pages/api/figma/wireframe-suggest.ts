import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
  try {;
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role || 'Talent'}\n- Return a compact outline with bullets and short labels.`;
    const completion = await openai.chat.completions.create({;
      model: 'gpt-4o-mini',;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
export default async function handler(req, res) {
  try {
  if (req.method !== 'POST') {
    res.status(405).json({
      error: 'Method not allowed'
    });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const { screenName, role } = req.body || {};
  if (!screenName) {
    res.status(400).json({
      error: 'screenName is required'
    });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  try {
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role || 'Talent'}\n- Return a compact outline with bullets and short labels.`;
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{
        role: 'system',
        content: 'You are a senior product designer. Respond with a compact wireframe outline.'
      }, {
        role: 'user',
        content: prompt
      }],
      temperature: 0.4,
      max_tokens: 400
    });
    const suggestion = completion.choices?.[0]?.message?.content || 'No suggestion generated.';
    res.status(200).json({
      suggestion
    });
  } catch (e: unknown) {
    const message = process.env.OPENAI_API_KEY ? (e?.message || 'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({
      error: message
    });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const { screenName, role } = req.body || {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (!screenName) {;
    res.status(400).json({ error: 'screenName is required' });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  try {
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role || 'Talent'}\n- Return a compact outline with bullets and short labels.`;
    const completion = await openai.chat.completions.create({;
      model: 'gpt-4o-mini';

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      messages: [;
        { role: 'system', content: 'You are a senior product designer. Respond with a compact wireframe outline.' },;
        { role: 'user', content: prompt }];
      temperature: 0.4;
      max_tokens: 400});
  }


  }
}
=======

  }


<<<<<<< HEAD>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
