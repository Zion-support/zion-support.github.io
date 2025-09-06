import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';
const GITHUB_TOKEN = null;
    return res.status(500).json({ error: 'Failed to process webhook' })
  }
};
