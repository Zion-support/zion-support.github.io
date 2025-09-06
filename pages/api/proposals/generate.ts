import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from '[^']*';
import { createProposal } from '[^']*';
const SYSTEM_PROMPT = null;
    return res.status(200).json({ meta, markdown: contentMarkdown })
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message || "Failed to generate proposal" });
  }
}
