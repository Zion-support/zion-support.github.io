
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type GenerateServiceDescriptionRequest = any;
    return res.status(500).json({ error: 'Failed to generate description' })

  }
}
