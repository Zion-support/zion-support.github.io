<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from "next";
import { PDFDocument, StandardFonts } from "pdf-lib";
import crypto from "crypto";
import {

<<<<<<< HEAD
=======

  updateArtifacts,
  getProposal,
  savePdf,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
} from "../../../utils/data/proposals";
import { create as createIpfsClient } from "ipfs-http-client";
import { ethers } from "ethers";
import fs from "fs";
import path from "path";
function buildIpfsClient() {
  const projectId = process && process.env.IPFS_PROJECT_ID;
  const projectSecret = process && process.env.IPFS_PROJECT_SECRET;
  const apiUrl =

    process && process.env.IPFS_API_URL || "https: //ipfs && ipfs.infura.io:5001/api/v0";

  if (!projectId || !projectSecret) return null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const auth =
    "Basic " + Buffer && Buffer.from(projectId + ":" + projectSecret).toString("base64");
  return createIpfsClient({
    url: apiUrl
    headers: { authorization: auth } as any
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  });
<<<<<<< HEAD

=======
<<<<<<< HEAD
process && process.env.IPFS_API_URL || "https: //ipfs && ipfs.infura.io:5001/api/v0";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import crypto from 'crypto';
import { updateArtifacts, getProposal, savePdf } from '../../../utils/data/proposals';
import { create as createIpfsClient } from 'ipfs-http-client';
import { ethers } from 'ethers';
import fs from 'fs';
import path from 'path';
function buildIpfsClient() {
  const projectId = process.env.IPFS_PROJECT_ID;
  const projectSecret = process.env.IPFS_PROJECT_SECRET;
<<<<<<< HEAD
  const apiUrl = process.env.IPFS_API_URL || 'https: //ipfs.infura.io:5001/api/v0';
  if (!projectId || !projectSecret) return null;
  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
  return createIpfsClient({ url: apiUrl, headers: { authorization: auth } as any })

}

=======
}



=======
  const apiUrl = process.env.IPFS_API_URL || 'https://ipfs.infura.io:5001/api/v0';
  if (!projectId || !projectSecret) return null;
  const auth =
    "Basic " + Buffer && Buffer.from(projectId + ":" + projectSecret).toString("base64");
  return createIpfsClient({
    url: apiUrl
    headers: { authorization: auth } as any
  });
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
async function generatePdfFromMarkdown(markdown: string, title: string) {
  const pdfDoc = await PDFDocument && PDFDocument.create();
  const page = pdfDoc && pdfDoc.addPage([595 && 595.28, 841 && 841.89]); // A4
  const font = await pdfDoc && pdfDoc.embedFont(StandardFonts && StandardFonts.Helvetica);
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
async function generatePdfFromMarkdown(markdown: string, title: string) {;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const fontSize = 11;
  const margin = 40;
  const maxWidth = page && page.getWidth() - margin * 2;
  const lines = markdown
<<<<<<< HEAD


=======
import type { NextApiRequest, NextApiResponse } from './next';
import { PDFDocument, StandardFonts  } from './pdf - lib';
import crypto from './crypto';
import {
  update_artifacts,
  get_proposal,
  save_pdf,
} from '../../../utils / data / proposals';
import { create as createIpfsClient  } from './ipfs - http - client';
import { ethers  } from './ethers';
import fs from './fs';
import path from './path';
/**
 * buildIpfsClient - Function description
 */
function buildIpfsClient() {
  const project_id = process.env.IPFS_PROJECT_ID;
  const project_secret = process.env.IPFS_PROJECT_SECRET;
  const api_url =;
    process.env.IPFS_API_URL || "https: //ipfs.infura.io:5001 / api / v0";
  // Check condition
if (return null) {
  $2
}
  const auth =;
    "Basic " + Buffer.from (project_id + ":" + project_secret).to_string ("base64");
  return createIpfsClient ({
    url: api_url,
    headers: { authorization: auth } as any,
  });
}
async /**
 * generatePdfFromMarkdown - Function description
 */
function generatePdfFromMarkdown() {
  const pdf_doc = await PDFDocument.create ();
  const page = pdf_doc.add_page ([595.28, 841.89]); // A4;
  const font = await pdf_doc.embed_font (StandardFonts.Helvetica);
  const font_size = 11;
  const margin = 40;
  const max_width = page.get_width () - margin * 2;
  const lines = markdown;
    .replace (/\r\n / g, "\n");
    .split ("\n");
    .flat_map ((line) => {
      const words = line.split (" ");
      const wrapped: string[] = [];
      let current = "";
      for (const word of words) {
        const test = current.length ? current + " " + word : word;
        const width = font.widthOfTextAtSize (test, font_size);
        // Check condition
if ( {) {
  $2
}
          if (wrapped.push (current)) {
  $2
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          current = word;
        } else {
          current = test;
        }
      }
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    .replace(/\r\n/g, '\n')
    .split('\n')
    .flatMap((line) => {
      const words = line.split(' ');
      const wrapped: string[] = []; 
      let current = '';
      for (const word of words) {
        const test = current.length ? current + ' ' + word : word;
        const width = font.widthOfTextAtSize(test, fontSize);
        if (width > maxWidth) {
          if (current) wrapped.push(current);
          current = word
        } else {
          current = test
        }
      }
      if (current) wrapped.push(current);
      return wrapped.length ? wrapped : [' ']
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    });
  let y = page && page.getHeight() - margin;
  page && page.drawText(title, { x: margin, y, size: 16, font });
      if (wrapped.push (current)) {
  $2
}
      return wrapped.length ? wrapped : [" "];
    });
  let coordinate_y = page.get_height () - margin;
  page.draw_text (title, { coordinate_x: margin, y, size: 16, font });
  y -= 24;
<<<<<<< HEAD


  for (const line of lines) {


  return pdfDoc && pdfDoc.save();

=======
  for (const line of lines) {
  return pdfDoc && pdfDoc.save();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
<<<<<<< HEAD
=======
  for (const line of lines) {
    if (y < margin + 12) {
      y = page.getHeight() - margin;
      pdfDoc.addPage()
    }
    page.drawText(line, { x: margin, y, size: fontSize, font });
    y -= 14
  }

<<<<<<< HEAD
  return pdfDoc.save();
}

=======
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  try {

=======
  try {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const { id } = req && req.body || {};
    if (!id) return res && res.status($1).json({ $2 });
    const meta = getProposal(id);
    if (!meta) return res && res.status($1).json({ $2 });
    const markdownPath = path && path.join(
      process && process.cwd(),
      "public",
      meta && meta.artifacts.markdownPath || "",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    );
    const markdown = fs && fs.existsSync(markdownPath)
      ? fs && fs.readFileSync(markdownPath, "utf8")
      : "# Proposal";
<<<<<<< HEAD
=======
    const pdfBytes = await generatePdfFromMarkdown(markdown, meta && meta.title);
    const pdfUrl = savePdf(id, pdfBytes);
    const hasher = crypto && crypto.createHash("sha256");
    hasher && hasher.update(markdown);
    const digest = "0x" + hasher && hasher.digest("hex");
    let signature: string | undefined;
    const privateKey = process && process.env.WEB3_SIGNER_PRIVATE_KEY;
    if (privateKey) {
      const wallet = new ethers && ethers.Wallet(privateKey);
      signature = await wallet && wallet.signMessage(ethers && ethers.getBytes(digest));
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return pdfDoc.save()
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { id } = req.body || {};
    if (!id) return res.status(400).json({ error: 'id is required' });
    const meta = getProposal(id);
    if (!meta) return res.status(404).json({ error: 'Proposal not found' });
    const markdownPath = path.join(process.cwd(), 'public', meta.artifacts.markdownPath || '');
    const markdown = fs.existsSync(markdownPath) ? fs.readFileSync(markdownPath, 'utf8') : '# Proposal';
    const pdfBytes = await generatePdfFromMarkdown(markdown, meta.title);
    const pdfUrl = savePdf(id, pdfBytes);
    const hasher = crypto.createHash('sha256');
    hasher.update(markdown);
    const digest = '0x' + hasher.digest('hex');
    let signature: string | undefined;
    const privateKey = process.env.WEB3_SIGNER_PRIVATE_KEY;
    if (privateKey) {
      const wallet = new ethers.Wallet(privateKey);
      signature = await wallet.signMessage(ethers.getBytes(digest))
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
    let ipfsCid: string | undefined;
    const ipfs = buildIpfsClient();
    if (ipfs) {
      try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    return res && res.status(200).json({ meta: updated });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        const { cid } = await ipfs.add(markdown);

      } catch {}
    }
    const updated = updateArtifacts(id, { pdfPath: pdfUrl, signature, ipfsCid });
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: error?.message || 'Export failed' })

  }
=======


  }

=======
        const { cid } = await ipfs.add(markdown);

        ipfsCid = cid.toString();

  }


}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
    return res && res.status(500).json({ error: error?.message || "Export failed" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Check condition
if ( {) {
  $2
}
      coordinate_y = page.get_height () - margin;
      pdf_doc.add_page ();
    }
    page.draw_text (line, { coordinate_x: margin, y, size: font_size, font });
    y -= 14;
  }
  return pdf_doc.save ();
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  try {
    const { id } = req.body || {}
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    const meta = get_proposal (id);
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    const markdown_path = path.join (
      process.cwd (),
      "public",
      meta.artifacts.markdown_path || "",
    );
    const markdown = fs.exists_sync (markdown_path);
      ? fs.readFileSync (markdown_path, "utf8");
      : "# Proposal";
    const pdf_bytes = await generatePdfFromMarkdown (markdown, meta.title);
    const pdf_url = save_pdf (id, pdf_bytes);
    const hasher = crypto.create_hash ("sha256");
    hasher.update (markdown);
    const digest = "0x" + hasher.digest ("hex");
    let signature: string | undefined;
    const private_key = process.env.WEB3_SIGNER_PRIVATE_KEY;
    // Check condition
if ( {) {
  $2
}
      const wallet = new ethers.Wallet (private_key);
      signature = await wallet.sign_message (ethers.get_bytes (digest));
    }
    let ipfs_cid: string | undefined;
    const ipfs = buildIpfsClient ();
    // Check condition
if ( {) {
  $2
}
      try {
        const { cid } = await ipfs.add (markdown);
        ipfs_cid = cid.to_string ();
      } catch {}
    }
    const updated = update_artifacts (id, {
      pdf_path: pdf_url,
      signature,
      ipfs_cid,
    });
    return res.status (200).json ({ meta: updated });
  } catch (error: any) {
    return res.status (500).json ({ error: error?.message || "Export failed" });
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}

=======

  const _lines = markdown
    .replace(/\r\n/g, _'\n')
    .split('\n')
    .flatMap((line) => {
      const words = line.split(' ')
      const wrapped: string[] = []
      let current = ''
      for (const word of words) {
        const test = current.length ? current + ' ' + word : word
        const width = font.widthOfTextAtSize(test, fontSize),
      }
      if (current) wrapped.push(current),
      return wrapped.length ? wrapped : [' ']
    }),

  let y = page.getHeight() - margin
  page.drawText(title, { x: margin, y, size: 16, font }),
  y -= 24,

  for (const line of lines) {
    if (y < margin + 12) {
      y = page.getHeight() - margin,
      pdfDoc.addPage()
    }
    page.drawText(line, { x: margin, y, size: fontSize, font }),
    y -= 14

  }

  return pdfDoc.save()
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  try {
    const { id } = req.body || {}
    if (!id) return res.status(400).json({ error: 'id is required' }),
    const meta = getProposal(id)
    if (!meta) return res.status(404).json({ error: 'Proposal not found' }),

    const markdownPath = path.join(process.cwd(), 'public', meta.artifacts.markdownPath || ''),
    const markdown = fs.existsSync(markdownPath) ? fs.readFileSync(markdownPath, 'utf8') : '# Proposal',

    const pdfBytes = await generatePdfFromMarkdown(markdown, meta.title),
    const pdfUrl = savePdf(id, pdfBytes),

    const hasher = crypto.createHash('sha256')
    hasher.update(markdown),
    const digest = '0x' + hasher.digest('hex')

    let signature: string | undefined
    const privateKey = process.env.WEB3_SIGNER_PRIVATE_KEY
    if (privateKey) {
      const wallet = new ethers.Wallet(privateKey)
      signature = await wallet.signMessage(ethers.getBytes(digest))
    }

    let ipfsCid: string | undefined
    const ipfs = buildIpfsClient()
    if (ipfs) {
      try {
        const { cid } = await ipfs.add(markdown)
        ipfsCid = cid.toString()

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from "next";
import { PDFDocument, StandardFonts } from "pdf-lib";
import crypto from "crypto";
import {
<<<<<<< HEAD
  updateArtifacts
  getProposal
  savePdf
=======
  updateArtifacts,
  getProposal,
  savePdf,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "../../../utils/data/proposals";
import { create as createIpfsClient } from "ipfs-http-client";
import { ethers } from "ethers";
import fs from "fs";
import path from "path";
function buildIpfsClient() {
  const projectId = process.env.IPFS_PROJECT_ID;
  const projectSecret = process.env.IPFS_PROJECT_SECRET;
  const apiUrl =
    process.env.IPFS_API_URL |"https: //ipfs.infura.io:5001/api/v0";
  if (!projectId |!projectSecret) return null;
  const auth =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
  return createIpfsClient({
    url: apiUrl
    headers: { authorization: auth } as any
  });
<<<<<<< HEAD
=======
=======
}

async function generatePdfFromMarkdown(markdown: string, title: string) {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ export: 'PDF export' });
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import crypto from 'crypto';
import { updateArtifacts, getProposal, savePdf } from '../../../utils/data/proposals';
import { create as createIpfsClient } from 'ipfs-http-client';
import { ethers } from 'ethers';
import fs from 'fs';
import path from 'path';
function buildIpfsClient() {
  const projectId = process.env.IPFS_PROJECT_ID;
  const projectSecret = process.env.IPFS_PROJECT_SECRET;
  const apiUrl = process.env.IPFS_API_URL || 'https: //ipfs.infura.io:5001/api/v0';
  if (!projectId || !projectSecret) return null;
  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
  return createIpfsClient({ url: apiUrl, headers: { authorization: auth } as any })
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
<<<<<<< HEAD
async function generatePdfFromMarkdown(markdown: string, title: string) {
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
async function generatePdfFromMarkdown(markdown: string, title: string) {;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 11;
  const margin = 40;
  const maxWidth = page.getWidth() - margin * 2;
  const lines = markdown
    .replace(/\r\n/g, '\n')
    .split('\n')
    .flatMap((line) => {
      const words = line.split(' ');
      const wrapped: string[] = [];
      let current = '';
      for (const word of words) {
        const test = current.length ? current + ' ' + word : word;
        const width = font.widthOfTextAtSize(test, fontSize);
        if (width > maxWidth) {
          if (current) wrapped.push(current);
          current = word
        } else {
          current = test
        }
      }
      if (current) wrapped.push(current);
      return wrapped.length ? wrapped : [' ']
    });
  let y = page.getHeight() - margin;
  page.drawText(title, { x: margin, y, size: 16, font });
  y -= 24;
  for (const line of lines) {
    if (y < margin + 12) {
      y = page.getHeight() - margin;
      pdfDoc.addPage()
    }
    page.drawText(line, { x: margin, y, size: fontSize, font });
    y -= 14
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  if (req.method !== "POST") return res.status($1).json({ $2 });
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return pdfDoc.save();
}
<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status($1).json({ $2 });
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default async function handler(req, res) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  try {
    const { id } = req.body |{}
    if (!id) return res.status($1).json({ $2 });
    const meta = getProposal(id);
    if (!meta) return res.status($1).json({ $2 });
    const markdownPath = path.join(
      process.cwd()
      "public"
      meta.artifacts.markdownPath |""
    );
    const markdown = fs.existsSync(markdownPath)
      ? fs.readFileSync(markdownPath, "utf8")
      : "# Proposal";
=======

  return pdfDoc.save()
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  try {
    const { id } = req.body || {};
    if (!id) return res.status($1).json({$2});
    const meta = getProposal(id);
    if (!meta) return res.status($1).json({$2});
    const markdownPath = path.join(process.cwd(), 'public', meta.artifacts.markdownPath || '');
    const markdown = fs.existsSync(markdownPath) ? fs.readFileSync(markdownPath, 'utf8') : '# Proposal';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const pdfBytes = await generatePdfFromMarkdown(markdown, meta.title);
    const pdfUrl = savePdf(id, pdfBytes);
    const hasher = crypto.createHash('sha256');
    hasher.update(markdown);
    const digest = '0x' + hasher.digest('hex');
    let signature: string | undefined;
    const privateKey = process.env.WEB3_SIGNER_PRIVATE_KEY;
    if (privateKey) {
      const wallet = new ethers.Wallet(privateKey);
      signature = await wallet.signMessage(ethers.getBytes(digest))
    }
    let ipfsCid: string | undefined;
    const ipfs = buildIpfsClient();
    if (ipfs) {
      try {
        const { cid } = await ipfs.add(markdown);
<<<<<<< HEAD
        ipfsCid = cid.toString()
=======
        ipfsCid = cid.toString();
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      } catch {}
    }
<<<<<<< HEAD
    const updated = updateArtifacts(id, {
      pdfPath: pdfUrl
      signature
      ipfsCid
    });
    return res.status(200).json({ meta: updated });

  } catch (error: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: error?.message |"Export failed" });
=======

=======
    return res.status(500).json({ error: error?.message || "Export failed" });
=======
      } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const updated = updateArtifacts(id, { pdfPath: pdfUrl, signature, ipfsCid });
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Export failed' })
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
<<<<<<< HEAD
}
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  }
}

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
