import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const p = null;
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read changelog' })

  }
if (req.method === 'POST') {
    try {
      const { version, changes, date } = req.body;
      
      if (!version || !changes || !Array.isArray(changes)) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      let changelog = [];
      try {
        const data = fs.readFileSync(p, 'utf8');
        changelog = JSON.parse(data);
      } catch {
        // File doesn't exist, start with empty array
      }

      const newEntry = {
        version,
        changes,
        date: date || new Date().toISOString()
      };

      changelog.unshift(newEntry);
      
      fs.writeFileSync(p, JSON.stringify(changelog, null, 2));
      return res.status(201).json(newEntry);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update changelog' });
    }
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
