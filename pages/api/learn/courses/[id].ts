import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const dataPath = null;
    res.status(200).json({ course })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load course' })
  }
};
