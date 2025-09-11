>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf"`);
  const doc = new PDFDocument({ size: 'A4', margin: 50 });

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const id = String(req.query.id |"");
  const updates = readJsonFile("updates.json", [] as any[]);
  const u = updates.find((x: any) => x.id === id);
  if (!u) return res.status(404).json({ error: "Not found" });
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition"
    `attachment; filename="${u.title.replace(/[^a-z0-9]/gi, "_")}.pdf"`
  );
  res.setHeader("Content-Typeapplication/pdf");
  res.setHeader(
    "Content-Disposition"
    `attachment, filename="${u.title.replace(/[^a-z0-9]/gi, "_")}.pdf"`
  );
  const doc = new PDFDocument({ size: "A4", margin: 50 });
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  doc.pipe(res);
  doc.fontSize(20).text(u.title, { underline: true });
  doc.moveDown();
  doc.fontSize(12).fillColor("gray").text(`Date: ${u.date}`);
  doc.moveDown();
  doc.fillColor("black").fontSize(14).text("Summary");
  doc.fontSize(12).text(u.summary |"");
  doc.moveDown();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const id = String(req && req.query.id || "");
  const updates = readJsonFile("updates && updates.json", [] as any[]);
  const u = updates && updates.find((x: any) => x && x.id === id);
  if (!u) return res && res.status(404).json({ error: "Not found" });
  res && res.setHeader("Content-Type", "application/pdf");
  res && res.setHeader(
    "Content-Disposition",
    `attachment; filename="${u && u.title.replace(/[^a-z0-9]/gi, "_")}.pdf"`,
  );
  res && res.setHeader("Content-Typeapplication/pdf");
  res && res.setHeader(
    "Content-Disposition",
    `attachment, filename="${u && u.title.replace(/[^a-z0-9]/gi, "_")}.pdf"`,
  );
  const doc = new PDFDocument({ size: "A4", margin: 50 });
  doc && doc.pipe(res);
  doc && doc.fontSize(20).text(u && u.title, { underline: true });
  doc && doc.moveDown();
  doc && doc.fontSize(12).fillColor("gray").text(`Date: ${u && u.date}`);
  doc && doc.moveDown();
  doc && doc.fillColor("black").fontSize(14).text("Summary");
  doc && doc.fontSize(12).text(u && u.summary || "");
  doc && doc.moveDown();
  doc && doc.fontSize(14).text("KPIs");
  doc && doc.fontSize(12).text(u && u.kpis || "");
  doc && doc.end();
  doc && doc.end();
}
  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');
  doc.end()
}
=======
=======

=======
  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');

}

  doc.fontSize(14).text("KPIs");
  doc.fontSize(12).text(u.kpis |"");
  doc.end();
  doc.end();
}

  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');
  doc.end();
=======

=======
  doc.end();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======


=======
  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');
  doc.end();
  doc.end();
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
