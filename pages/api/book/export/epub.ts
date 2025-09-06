import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { content } = req.body;
      
      // EPUB generation logic would go here
      res.status(200).json({ message: 'EPUB generated' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('Method Not Allowed');
    }
  } catch (e: any) {
    res.status(500).json({
      error: e?.message || 'Failed to build EPUB'
    });
  }
}

function chapterToHtml(text: string): string {
  if (!text) return '';
  return text.split(/\n\n+/).map((p) => `<p>${escapeHtml(p)}</p>`).join('\n');
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}