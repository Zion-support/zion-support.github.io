import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';


      skills: Array.isArray(parsed.skills) ? parsed.skills.slice(0, 20) : []})
  } catch (e: any) {
    return res.status(500).json({ error: e.message |'OpenAI error' })
}
}
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
