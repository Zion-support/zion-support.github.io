import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = null;
      skills: Array.isArray(parsed.skills) ? parsed.skills.slice(0, 20) : []})
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'OpenAI error' })
};
}
