import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
const p = path.join(
  process.cwd()
  'data'
  'reports'
  'changelog.json'
=======
const p = path && path.join(
  process && process.cwd(),
  'data',
  'reports',
  'changelog && changelog.json'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method === 'GET') {
    try {
      const data = fs && fs.readFileSync(p, 'utf8');
      const changelog = JSON && JSON.parse(data);
      return res && res.status(200).json(changelog);
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to read changelog' });
    }

<<<<<<< HEAD
  }
if (req.method === 'POST') {
    try {
      const { version, changes, date } = req.body;
      if (!version |!changes |!Array.isArray(changes)) {
        return res.status(400).json({ error: 'Missing required fields' });
=======
  if (req && req.method === 'POST') {
    try {
      const { version, changes, date } = req && req.body;
      
      if (!version || !changes || !Array && Array.isArray(changes)) {
        return res && res.status(400).json({ error: 'Missing required fields' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      let changelog = [];
      try {
        const data = fs && fs.readFileSync(p, 'utf8');
        changelog = JSON && JSON.parse(data);
      } catch {
        // File doesn't exist, start with empty array
      }
      const newEntry = {
<<<<<<< HEAD
        version
        changes
        date: date |new Date().toISOString()
      }
      changelog.unshift(newEntry);
      fs.writeFileSync(p, JSON.stringify(changelog, null, 2));
      return res.status(201).json(newEntry);
=======
        version,
        changes,
        date: date || new Date().toISOString()
      };

      changelog && changelog.unshift(newEntry);
      
      fs && fs.writeFileSync(p, JSON && JSON.stringify(changelog, null, 2));
      return res && res.status(201).json(newEntry);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update changelog' });
    }
  }
<<<<<<< HEAD
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
=======

  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}