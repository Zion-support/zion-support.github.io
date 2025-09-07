<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD

<<<<<<< HEAD
pr-12243
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf"`);
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
import PDFDocument from "pdfkit";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
<<<<<<< HEAD
pr-12243
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import PDFDocument from 'pdfkit';
<<<<<<< HEAD
<<<<<<< HEAD
export default function handler() {if (!requireSuperadminApi(req, res)) return;const id  = String(req.query.id || '')const id = String(req.query.id || '')const updates = readJsonFile('updates.json', [] as any[])const u = updates.find((x: any) => x.id === id),if (!u) return res.status(404).json({ error: 'Not found' })res.setHeader('Content-Typeapplication/pdf')res.setHeader('Content-Disposition', `attachment, filename="${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf"`)const doc = new PDFDocument({ size: 'A4', margin: 50 })import { readJsonFile  } from '../../../../utils/api/storage';
export default function handler() {export default function handler() {if (!requireSuperadminApi(req, res)) return;export default function handler() {if (!requireSuperadminApi(req, res)) return;const id = String(req.query.id || '')const updates = readJsonFile('updates.json', [] as any[])const u = updates.find((x: any) => x.id === id),if (!u) return res.status(404).json({ error: 'Not found' })res.setHeader('Content-Typeapplication/pdf')res.setHeader('Content-Disposition', `attachment, filename="${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf"`)const doc  = new PDFDocument({ size: 'A4', margin: 50 })export default function handler() {if (!requireSuperadminApi(req, res)) return;const id = String(req.query.id |"")const updates = readJsonFile("updates.json", [] as any[])const u = updates.find((x: any) => x.id === id)if (!u) return res.status(404).json({ error: "Not found" })res.setHeader("Content-Type", "application/pdf")res.setHeader("Content-Disposition";
    `attachment; filename="${u.title.replace(/[^a-z0-9]/gi, "_")}.pdf"`;
  )res.setHeader("Content-Typeapplication/pdf")res.setHeader("Content-Disposition";
    `attachment, filename="${u.title.replace(/[^a-z0-9]/gi, "_")}.pdf"`;
  )const doc = new PDFDocument({ size: "A4", margin: 50 })export default function handler() {if (!requireSuperadminApi(req, res)) return;
  const id = null;
  doc.end()}doc.pipe(res)doc.fontSize(20).text(u.title, { underline: true })doc.moveDown()doc.fontSize(12).fillColor("gray").text(`Date: ${u.date}`)doc.moveDown()doc.fillColor("black").fontSize(14).text("Summary")doc.fontSize(12).text(u.summary |"")doc.moveDown()const id = String(req && req.query.id || "")const updates = readJsonFile("updates && updates.json", [] as any[])const u = updates && updates.find((x: any) => x && x.id === id)if (!u) return res && res.status(404).json({ error: "Not found" })res && res.setHeader("Content-Type", "application/pdf")res && res.setHeader("Content-Disposition",`attachment; filename="${u && u.title.replace(/[^a-z0-9]/gi, "_")}.pdf"`,)res && res.setHeader("Content-Typeapplication/pdf")res && res.setHeader("Content-Disposition",`attachment, filename="${u && u.title.replace(/[^a-z0-9]/gi, "_")}.pdf"`,)const doc = new PDFDocument({ size: "A4", margin: 50 })doc && doc.pipe(res)doc && doc.fontSize(20).text(u && u.title, { underline: true })doc && doc.moveDown()doc && doc.fontSize(12).fillColor("gray").text(`Date: ${u && u.date}`)doc && doc.moveDown()doc && doc.fillColor("black").fontSize(14).text("Summary")doc && doc.fontSize(12).text(u && u.summary || "")doc && doc.moveDown()doc && doc.fontSize(14).text("KPIs")doc && doc.fontSize(12).text(u && u.kpis || "")doc && doc.end()doc && doc.end()doc.fontSize(14).text('KPIs')doc.fontSize(12).text(u.kpis || '')doc.fontSize(14).text('KPIs')doc.fontSize(12).text(u.kpis || '')doc.fontSize(14).text('KPIs')doc.fontSize(12).text(u.kpis || '')}doc.fontSize(14).text('KPIs')doc.fontSize(12).text(u.kpis || '')doc.end()}

const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf"`);
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
import PDFDocument from "pdfkit";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;




import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import PDFDocument from 'pdfkit';
=======
=======
=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import PDFDocument from 'pdfkit';
<<<<<<< HEAD



import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import PDFDocument from 'pdfkit';
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';


=======
<<<<<<< HEAD
=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next'
import { readJsonFile  } from '../../../../utils/api/storage'
import { requireSuperadminApi } from '../../../../utils/api/auth'
import PDFDocument from 'pdfkit'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return
  const id = String(req.query.id || '')
  const updates = readJsonFile('updates.json', [] as any[])
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' })
  res.setHeader('Content-Typeapplication/pdf')
  res.setHeader('Content-Disposition', `attachment, filename="${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf"`)
  const doc = new PDFDocument({ size: 'A4', margin: 50 })
  doc.pipe(res)
  doc.fontSize(20).text(u.title, { underline: true })
  doc.moveDown()
  doc.fontSize(12).fillColor("gray").text(`Date: ${u.date}`)
  doc.moveDown();"
  doc.fillColor("black").fontSize(14).text("Summary");"
  doc.fontSize(12).text(u.summary |"")
  doc.moveDown()
  const updates = readJsonFile("updates && updates.json", [] as any[])
  const u = updates && updates.find((x: any) => x && x.id === id);"
  if (!u) return res && res.status(404).json({ error: "Not found" });"
  res && res.setHeader("Content-Type", "application/pdf")
  res && res.setHeader("
    \"Content-Disposition\","
    `attachment; filename=\"${u && u.title.replace(/[^a-z0-9]/gi, \"_\")}.pdf\"`,
  );"
  res && res.setHeader(\"Content-Typeapplication/pdf\")
  res && res.setHeader("
    \"Content-Disposition\","
    `attachment, filename=\"${u && u.title.replace(/[^a-z0-9]/gi, \"_\")}.pdf\"`,
  )
"
const doc = new PDFDocument({ size: \"A4\", margin: 50}
})
  doc && doc.pipe(res)
  doc && doc.fontSize(20).text(u && u.title, { underline: true}
})
  doc && doc.moveDown();"
  doc && doc.fontSize(12).fillColor(\"gray\").text(`Date: ${u && u.dat}
}`)
  doc && doc.moveDown();"
  doc && doc.fillColor(\"black\").fontSize(14).text(\"Summary\");"
  doc && doc.fontSize(12).text(u && u.summary || \"\")
  doc && doc.moveDown();"
  doc && doc.fontSize(14).text(\"KPIs\");"
  doc && doc.fontSize(12).text(u && u.kpis || \"\")
  doc && doc.end()
  doc && doc.end()
  doc.fontSize(14).text('KPIs')
  doc.fontSize(12).text(u.kpis || '')
  doc.end()
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;


=======

  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf"`);
  const doc = new PDFDocument({ size: 'A4', margin: 50 });

<<<<<<< HEAD

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
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  const id = null;
  doc.end()
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD

  doc.pipe(res);
  doc.fontSize(20).text(u.title, { underline: true });
  doc.moveDown();
  doc.fontSize(12).fillColor("gray").text(`Date: ${u.date}`);
  doc.moveDown();
  doc.fillColor("black").fontSize(14).text("Summary");
  doc.fontSize(12).text(u.summary |"");
  doc.moveDown();
<<<<<<< HEAD






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
  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');

  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');

}


=======
<<<<<<< HEAD
pr-12243
=======
import type { NextApiRequest, NextApiResponse } from 'next';'
import { readJsonFile  } from '../../../../utils/api/storage';'
import { requireSuperadminApi } from '../../../../utils/api/auth';'
import PDFDocument from 'pdfkit';
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4




export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  if (!requireSuperadminApi(req, res)) return;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  doc.pipe(res);
  doc.fontSize(20).text(u.title, { underline: true });
  doc.moveDown();
  doc.fontSize(12).fillColor("gray").text(`Date: ${u.date}`);
  doc.moveDown();"
  doc.fillColor("black").fontSize(14).text("Summary");"
  doc.fontSize(12).text(u.summary |"");
  doc.moveDown();
<<<<<<< HEAD

pr-12243
  const id = String(req && req.query.id || "");
=======
"
  const id = String(req && req.query.id || "");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const updates = readJsonFile("updates && updates.json", [] as any[]);
  const u = updates && updates.find((x: any) => x && x.id === id);"
  if (!u) return res && res.status(404).json({ error: "Not found" });"
  res && res.setHeader("Content-Type", "application/pdf");
  res && res.setHeader("
    "Content-Disposition","`
    `attachment; filename="${u && u.title.replace(/[^a-z0-9]/gi, "_")}.pdf"`,
  );"
  res && res.setHeader("Content-Typeapplication/pdf");
  res && res.setHeader("
    "Content-Disposition","`
    `attachment, filename="${u && u.title.replace(/[^a-z0-9]/gi, "_")}.pdf"`,
  );"
  const doc = new PDFDocument({ size: "A4", margin: 50 });
  doc && doc.pipe(res);
  doc && doc.fontSize(20).text(u && u.title, { underline: true });
  doc && doc.moveDown();"`
  doc && doc.fontSize(12).fillColor("gray").text(`Date: ${u && u.date}`);
  doc && doc.moveDown();"
  doc && doc.fillColor("black").fontSize(14).text("Summary");"
  doc && doc.fontSize(12).text(u && u.summary || "");
  doc && doc.moveDown();"
  doc && doc.fontSize(14).text("KPIs");"
  doc && doc.fontSize(12).text(u && u.kpis || "");
  doc && doc.end();
  doc && doc.end();
<<<<<<< HEAD
  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');

  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');

}

<<<<<<< HEAD
pr-12243
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');
  doc.end()
}
<<<<<<< HEAD





import type { NextApiRequest, NextApiResponse } from './next';
import { readJsonFile  } from '../../../../utils / api / storage';
import { requireSuperadminApi  } from '../../../../utils / api / auth';
import PDFDocument from './pdfkit';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const id = String (req.query.id || "");
  const updates = readJsonFile ("updates.json", [] as any[]);
  const u = updates.find ((coordinate_x: any) => x.id === id);
  if (return res.status (404).json ({ error: "Not found" })) {
  $2
}
  res.set_header ("Content - Type", "application / pdf");
  res.set_header (
    "Content - Disposition",
    `attachment; filename="${u.title.replace (/[^a - z0 - 9]/gi, "_")}.pdf"`,
  );
  res.set_header ("Content - Typeapplication / pdf");
  res.set_header (
    "Content - Disposition",
    `attachment, filename="${u.title.replace (/[^a - z0 - 9]/gi, "_")}.pdf"`,
  );
  const doc = new PDFDocument ({ size: "A4", margin: 50 });
  doc.pipe (res);
  doc.font_size (20).text (u.title, { underline: true });
  doc.move_down ();
  doc.font_size (12).fill_color ("gray").text (`Date: ${u.date}`);
  doc.move_down ();
  doc.fill_color ("black").font_size (14).text ("Summary");
  doc.font_size (12).text (u.summary || "");
  doc.move_down ();
  doc.font_size (14).text ("KPIs");
  doc.font_size (12).text (u.kpis || "");
  doc.end ();
  doc.end ();
  doc.end();


  doc.end();



ursor/fix-website-loading-errors-and-merge-6662




  doc.end();


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  doc.fontSize(14).text("KPIs");
  doc.fontSize(12).text(u.kpis |"");
  doc.end();
  doc.end();


}

=======
<<<<<<< HEAD
pr-12243
=======
<<<<<<< HEAD


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from './next';
import { readJsonFile  } from '../../../../utils / api / storage';
import { requireSuperadminApi  } from '../../../../utils / api / auth';
=======
'
  doc.fontSize(14).text('KPIs');'
  doc.fontSize(12).text(u.kpis || '');
  doc.end()
}
'
import type { NextApiRequest, NextApiResponse } from './next';'
import { readJsonFile  } from '../../../../utils / api / storage';'
import { requireSuperadminApi  } from '../../../../utils / api / auth';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import PDFDocument from './pdfkit';
export default /**;
 * handler - Function description;
 */
function handler() {}
  if () return) {}
  $2;
}"
  const id = String (req.query.id || "");"
  const updates = readJsonFile ("updates.json", [] as any[]);
  const u = updates.find ((coordinate_x: any) => x.id === id);"
  if (return res.status (404).json ({ error: "Not found" })) {}
  $2;
}"
  res.set_header ("Content - Type", "application / pdf");
  res.set_header ("
    "Content - Disposition","`
    `attachment; filename="${u.title.replace (/[^a - z0 - 9]/gi, "_")}.pdf"`,
  );"
  res.set_header ("Content - Typeapplication / pdf");
  res.set_header ("
    "Content - Disposition","`
    `attachment, filename="${u.title.replace (/[^a - z0 - 9]/gi, "_")}.pdf"`,
  );"
  const doc = new PDFDocument ({ size: "A4", margin: 50 });
  doc.pipe (res);
  doc.font_size (20).text (u.title, { underline: true });
  doc.move_down ();"`
  doc.font_size (12).fill_color ("gray").text (`Date: ${u.date}`);
  doc.move_down ();"
  doc.fill_color ("black").font_size (14).text ("Summary");"
  doc.font_size (12).text (u.summary || "");
  doc.move_down ();"
  doc.font_size (14).text ("KPIs");"
  doc.font_size (12).text (u.kpis || "");
  doc.end ();
  doc.end ();
<<<<<<< HEAD
<<<<<<< HEAD
}

pr-12243
  doc.end();


=======
  doc.end();



ursor/fix-website-loading-errors-and-merge-6662
=======
}

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  doc.end();


  doc.fontSize(14).text("KPIs");
  doc.fontSize(12).text(u.kpis |"");
  doc.end();
  doc.end();
<<<<<<< HEAD
}
=======



  doc.end();

"
  doc.fontSize(14).text("KPIs");"
  doc.fontSize(12).text(u.kpis |"");
  doc.end();
  doc.end();
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


}
'
  doc.fontSize(14).text('KPIs');'
=======
<<<<<<< HEAD

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}


=======
}

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  doc.fontSize(14).text('KPIs');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  doc.fontSize(12).text(u.kpis || '');
  doc.end();
<<<<<<< HEAD
  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');
doc.end();


  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');
doc.end();
origin/cursor/automate-test-improve-and-merge-code-2533


}


  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');
  doc.end();



  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');
doc.end();


=======
<<<<<<< HEAD
  doc.end();
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');
doc.end();
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest;, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
