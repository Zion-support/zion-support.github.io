<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next',;

import fs from 'fs',;
import path from 'path',;
async function fetchFromGitHub(): Promise<any[]> {
  try {

      } catch {
        // ignore
      }
    }
    return results
  } catch {
    return []
  }
}

  return res.status(200).json({ logs: remote })
};

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      return res.status(405).end('Method Not Allowed');
    }
    
    const files: string[] = [];
    if (files.length > 0) {
      const logs = files.slice(0, 50).map((f) => {
        try {
          return { file: f, content: '' };
        } catch {
          return { file: f, error: 'Failed to read' };
        }
      });
      res.status(200).json({ logs });
    } else {
      res.status(200).json({ logs: [] });
    }
  } catch {
    // fall through to GitHub
    res.status(500).json({ error: 'Internal server error' });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
