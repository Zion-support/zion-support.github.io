import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


  if (!talentSlug || !requesterName || !requesterEmail || !projectInfo) {

  }

  const { talentSlug, requesterName, requesterEmail, projectInfo } =
    req && req.body || {};  const { talentSlug, requesterName, requesterEmail, projectInfo } = req && req.body || {};
  if (!talentSlug || !requesterName || !requesterEmail || !projectInfo) {

    return res.status(400).json({ error: 'Missing required fields' });
  }


