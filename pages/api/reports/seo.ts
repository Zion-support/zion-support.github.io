import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

    try {
      const data = fs.readFileSync (p, 'utf8');
      const seo = JSON.parse (data);
      return res.status (200).json (seo);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read SEO report' });
    }

  }
    try {
      const report = {
        keywords: keywords |[]
        rankings: rankings |[]
        issues: issues |[]
        recommendations: recommendations |[]
        generatedAt: new Date().toISOString()
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update SEO report' });
    }
  }


