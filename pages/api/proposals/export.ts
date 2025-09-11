<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import type { NextApiRequest, NextApiResponse } from "next";
import { PDFDocument, StandardFonts } from "pdf-lib";
import crypto from "crypto";
import {


  updateArtifacts,
  getProposal,
  savePdf,;


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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const auth =
    "Basic " + Buffer && Buffer.from(projectId + ":" + projectSecret).toString("base64");
  return createIpfsClient({
    url: apiUrl
    headers: { authorization: auth } as any
  });
<<<<<<< HEAD
}



<<<<<<< HEAD
  const apiUrl = process.env.IPFS_API_URL || 'https://ipfs.infura.io:5001/api/v0';
  if (!projectId || !projectSecret) return null;
  const auth =
    "Basic " + Buffer && Buffer.from(projectId + ":" + projectSecret).toString("base64");
  return createIpfsClient({
    url: apiUrl
    headers: { authorization: auth } as any
  });
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
}



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
async function generatePdfFromMarkdown(markdown: string, title: string) {
  const pdfDoc = await PDFDocument && PDFDocument.create();
  const page = pdfDoc && pdfDoc.addPage([595 && 595.28, 841 && 841.89]); // A4
  const font = await pdfDoc && pdfDoc.embedFont(StandardFonts && StandardFonts.Helvetica);
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
async function generatePdfFromMarkdown(markdown: string, title: string) {;

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const fontSize = 11;
  const margin = 40;
  const maxWidth = page && page.getWidth() - margin * 2;
  const lines = markdown
<<<<<<< HEAD
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          current = word;
        } else {
          current = test;
        }
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    });
  let y = page && page.getHeight() - margin;
  page && page.drawText(title, { x: margin, y, size: 16, font });
=======

    });
  let y = page && page.getHeight() - margin;
  page && page.drawText(title, { x: margin, y, size: 16, font });
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (wrapped.push (current)) {
  $2
}
      return wrapped.length ? wrapped : [" "];
    });
  let coordinate_y = page.get_height () - margin;
  page.draw_text (title, { coordinate_x: margin, y, size: 16, font });
<<<<<<< HEAD
  y -= 24;
<<<<<<< HEAD
  for (const line of lines) {
  return pdfDoc && pdfDoc.save();
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  y -= 24;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  for (const line of lines) {


  return pdfDoc && pdfDoc.save();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  for (const line of lines) {
    if (y < margin + 12) {
      y = page.getHeight() - margin;
      pdfDoc.addPage()
    }
    page.drawText(line, { x: margin, y, size: fontSize, font });
    y -= 14
  }

<<<<<<< HEAD
}

  try {

<<<<<<< HEAD
  try {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  if (req.method !== "POST") return res.status($1).json({ $2 });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  try {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const { id } = req && req.body || {};
    if (!id) return res && res.status($1).json({ $2 });
    const meta = getProposal(id);
    if (!meta) return res && res.status($1).json({ $2 });
    const markdownPath = path && path.join(
      process && process.cwd(),
      "public",
      meta && meta.artifacts.markdownPath || "",
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
    const markdown = fs && fs.existsSync(markdownPath)
      ? fs && fs.readFileSync(markdownPath, "utf8")
      : "# Proposal";
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return pdfDoc.save()
}
=======

  return pdfDoc.save()
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { id } = req.body || {};
    if (!id) return res.status(400).json({ error: 'id is required' });
    const meta = getProposal(id);
    if (!meta) return res.status(404).json({ error: 'Proposal not found' });
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const markdownPath = path.join(process.cwd(), 'public', meta.artifacts.markdownPath || '');
    const markdown = fs.existsSync(markdownPath) ? fs.readFileSync(markdownPath, 'utf8') : '# Proposal';
    const pdfBytes = await generatePdfFromMarkdown(markdown, meta.title);
    const pdfUrl = savePdf(id, pdfBytes);
<<<<<<< HEAD
    const hasher = crypto.createHash('sha256');
    hasher.update(markdown);
    const digest = '0x' + hasher.digest('hex');
=======

    const hasher = crypto.createHash('sha256');
    hasher.update(markdown);
    const digest = '0x' + hasher.digest('hex');

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    let signature: string | undefined;
    const privateKey = process.env.WEB3_SIGNER_PRIVATE_KEY;
    if (privateKey) {
      const wallet = new ethers.Wallet(privateKey);
      signature = await wallet.signMessage(ethers.getBytes(digest))
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    let ipfsCid: string | undefined;
    const ipfs = buildIpfsClient();
    if (ipfs) {
      try {
<<<<<<< HEAD
<<<<<<< HEAD
    return res && res.status(200).json({ meta: updated });
        const { cid } = await ipfs.add(markdown);

      } catch {}
    }
    const updated = updateArtifacts(id, { pdfPath: pdfUrl, signature, ipfsCid });
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  }

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const { cid } = await ipfs.add(markdown);

        ipfsCid = cid.toString();

  }


}
<<<<<<< HEAD
<<<<<<< HEAD
    return res && res.status(500).json({ error: error?.message || "Export failed" });
  }
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    const updated = update_artifacts (id, {
      pdf_path: pdf_url,
      signature,
      ipfs_cid,
    });
    return res.status (200).json ({ meta: updated });
  } catch (error: any) {
    return res.status (500).json ({ error: error?.message || "Export failed" });
<<<<<<< HEAD

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


import type { NextApiRequest, NextApiResponse } from "next";
import { PDFDocument, StandardFonts } from "pdf-lib";
import crypto from "crypto";
import {
  updateArtifacts
  getProposal
  savePdf
  updateArtifacts,
  getProposal,
  savePdf,;
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
}

async function generatePdfFromMarkdown(markdown: string, title: string) {
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ export: 'PDF export' });
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
}
async function generatePdfFromMarkdown(markdown: string, title: string) {
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
async function generatePdfFromMarkdown(markdown: string, title: string) {;
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
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  if (req.method !== "POST") return res.status($1).json({ $2 });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return pdfDoc.save();
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status($1).json({ $2 });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default async function handler(req, res) {
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
        ipfsCid = cid.toString()
        ipfsCid = cid.toString();
      } catch {}
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const updated = updateArtifacts(id, {
      pdfPath: pdfUrl
      signature
      ipfsCid
    });
<<<<<<< HEAD
    return res.status(200).json({ meta: updated });

  } catch (error: any) {
    return res.status(500).json({ error: error?.message |"Export failed" });

    return res.status(500).json({ error: error?.message || "Export failed" });
      } catch {  } catch (error) {
=======
    return res.status (200).json ({ meta: updated });
  } catch (error: any) {

=======
    return res.status(500).json({ error: error?.message || "Export failed" });
=======
      } catch {  } catch (error) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    const updated = updateArtifacts(id, { pdfPath: pdfUrl, signature, ipfsCid });
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Export failed' })
  }
}
<<<<<<< HEAD
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    return res.status (500).json ({ error: error?.message || "Export failed" });
  }
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  }
}
  }
}
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
