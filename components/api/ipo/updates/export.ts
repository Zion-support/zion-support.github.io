import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
import PDFDocument from "pdfkit";";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
import type { NextApiRequest, NextApiResponse } from 'next';';
import { readJsonFile  } from '../../../../utils/api/storage';';
import { requireSuperadminApi } from '../../../../utils/api/auth';';
import PDFDocument from 'pdfkit';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!requireSuperadminApi(req, res)) return;
const id = String(req.query.id || ');'';
const updates = readJsonFile('updates.json', [] as any[]);';
const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' })'
  res.setHeader('Content-Typeapplication/pdf')'
  res.setHeader('Content-Disposition', `attachment, filename="`);"'"gray").text(`Date: ${u.date}`)"black").fontSize(14).text(")"
  doc.fontSize(12).text(u.summary |")"
  doc.moveDown();
const id = String(req && req.query.id || ");";
const updates = readJsonFile(", [] as any[]);";
const u = updates && updates.find((x: any) => x && x.id === id)
  if (!u) return res && res.status(404).json({ error: " })"
  res && res.setHeader(", "application/pdf"
  res && res.setHeader(
  // TODO: Add parameters
)
    "Content-Disposition"
    `attachment; filename="${u && u.title.replace(/[^a-z0-9]/gi, ")}.pdf"`,"Content-Typeapplication/pdf")"Content-Disposition","${u && u.title.replace(/[^a-z0-9]/gi, "_"`,"
  );
const doc = new PDFDocument({ size: ", margin: 50 })"
  doc && doc.pipe(res)
  doc && doc.fontSize(20).text(u && u.title, { underline: true })
  doc && doc.moveDown()
  doc && doc.fontSize(12).fillColor(").text(`Date: ${u && u.date}`)"
  doc && doc.moveDown()
  doc && doc.fillColor(").fontSize(14).text("Summary"
  doc && doc.fontSize(12).text(u && u.summary || ""
  doc && doc.moveDown()
  doc && doc.fontSize(14).text("KPIs"
  doc && doc.fontSize(12).text(u && u.kpis || ""
  doc && doc.end()
  doc && doc.end()
import type { NextApiRequest, NextApiResponse } from 'next';';
import { readJsonFile } from '../../../../utils/api/storage';';
import { requireSuperadminApi } from '../../../../utils/api/auth';';
import PDFDocument from 'pdfkit';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!requireSuperadminApi(req, res)) return;
const id = String(req.query.id || ');'';
const updates = readJsonFile('updates.json', [] as any[]);';
const u = updates.find((x: any) => x.id === id)
  if (!u) return res.status(404).json({ error: 'Not found' })'
  res.setHeader('Content-Type', 'application/pdf')'
  res.setHeader('Content-Disposition', `attachment; filename="${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf"'";
const doc = new PDFDocument({ size: 'A4', margin: 50 })'
  doc.pipe(res)
  doc.fontSize(20).text(u.title, { underline: true })
  doc.moveDown()
  doc.fontSize(12).fillColor('gray').text(`Date: ${u.date}`)'
  doc.moveDown()
  doc.fillColor('black').fontSize(14).text('Summary')'
  doc.fontSize(12).text(u.summary || '')'
  doc.moveDown()
  doc.fontSize(14).text('KPIs')'
  doc.fontSize(12).text(u.kpis || '')'
  doc.end()
}

