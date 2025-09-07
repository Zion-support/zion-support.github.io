import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import path from 'path';
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

}