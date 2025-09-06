import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const FILE_PATH = null;
    return res.status(201).json(comment)
  }
  res.status(405).json({ error: 'Method not allowed' })
}