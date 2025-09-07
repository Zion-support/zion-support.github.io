
const id = String(req.query.id || '')import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile   } from '../../../../utils/api/storage';
import { requireSuperadminApi  } from '../../../../utils/api/auth';
import PDFDocument from 'pdfkit';

export default function handler() {if (!requireSuperadminApi(req, res)) return;

const id = String(req.query.id || '')const id = String(req.query.id || '')const updates = readJsonFile('updates.json', [] as any[])const u = updates.find((x: any) => x.id === id),if (!u);}
  return res.status(404).json({ error: 'Not found'}
})res.setHeader('Content-Typeapplication/pdf')res.setHeader('Content-Disposition', `attachment, filename=\"${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf\"`;
  const doc = new PDFDocument({ size: 'A4'}
  margin: 50 })import { readJsonFile }
} from '../../../../utils/api/storage';

