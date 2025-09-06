<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, StandardFonts } from '[^']*';
import crypto from 'crypto';
import { updateArtifacts, getProposal, savePdf } from '[^']*';
import { create as createIpfsClient } from '[^']*';
import { ethers } from '[^']*';
import fs from 'fs';
import path from 'path';
function buildIpfsClient() {
  const projectId = null;
    return res.status(200).json({ meta: updated })
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { PDFDocument, StandardFonts } from "pdf-lib";
import crypto from "crypto";
import {
  updateArtifacts
  getProposal
  savePdf
} from "../../../utils/data/proposals";
import { create as createIpfsClient } from "ipfs-http-client";
import { ethers } from "ethers";
import fs from "fs";
import path from "path";
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import crypto from 'crypto';
import {
  updateArtifacts,
  getProposal,
  savePdf,;
} from '../../../utils/data/proposals';
import { create as createIpfsClient } from 'ipfs-http-client';
import { ethers } from 'ethers';
import fs from 'fs';
import path from 'path';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
}
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
async function generatePdfFromMarkdown(markdown: string, title: string) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 11;
  const margin = 40;
  const maxWidth = page.getWidth() - margin * 2;
  const lines = markdown
<<<<<<< HEAD
    .replace(/\r\n/g, "\n")
    .split("\n")
    .flatMap((line) => {
      const words = line.split(" ");
=======
    .replace(/\r\n/g, '\n')
    .split('\n')
    .flatMap(line => {
      const words = line.split(' ');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      const wrapped: string[] = [];
      let current = "";
      for (const word of words) {
        const test = current.length ? current + " " + word : word;
        const width = font.widthOfTextAtSize(test, fontSize);
        if (width > maxWidth) {
          if (current) wrapped.push(current);
          current = word;
        } else {
          current = test;
        }
      }
      if (current) wrapped.push(current);
<<<<<<< HEAD
      return wrapped.length ? wrapped : [" "];
=======
      return wrapped.length ? wrapped : [' '];
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    });
  let y = page.getHeight() - margin;
  page.drawText(title, { x: margin, y, size: 16, font });
  y -= 24;
<<<<<<< HEAD
  for (const line of lines) {
    if (y < margin + 12) {
      y = page.getHeight() - margin;
      pdfDoc.addPage();
    }
    page.drawText(line, { x: margin, y, size: fontSize, font });
    y -= 14;
  }
  return pdfDoc.save();
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status($1).json({ $2 });
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

    page.drawText(line, { x: margin, y, size: fontSize, font });
    y -= 14;
  }

  return pdfDoc.save();
}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { id } = req.body || {};
    if (!id) return res.status(400).json({ error: 'id is required' });
    
}

const meta = getProposal(id);
    if (!meta) return res.status(404).json({ error: 'Proposal not found' });

    
}

const markdownPath = path.join(
      process.cwd(),
      'public',
      meta.artifacts.markdownPath || ''
    );
    const markdown = fs.existsSync(markdownPath)
      ? fs.readFileSync(markdownPath, 'utf8')
      : '# Proposal';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const pdfBytes = await generatePdfFromMarkdown(markdown, meta.title);
    const pdfUrl = savePdf(id, pdfBytes);
    const hasher = crypto.createHash("sha256");
    hasher.update(markdown);
    const digest = "0x" + hasher.digest("hex");
    let signature: string | undefined;
    const privateKey = process.env.WEB3_SIGNER_PRIVATE_KEY;
    if (privateKey) {
      const wallet = new ethers.Wallet(privateKey);
      signature = await wallet.signMessage(ethers.getBytes(digest));
    }
<<<<<<< HEAD
    let ipfsCid: string | undefined;
=======
}

let ipfsCid: string | undefined;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const ipfs = buildIpfsClient();
    if (ipfs) {
      try {
        const { cid } = await ipfs.add(markdown);
        ipfsCid = cid.toString();
      } catch {}
    }
    const updated = updateArtifacts(id, {
      pdfPath: pdfUrl
      signature
      ipfsCid
    });
    return res.status(200).json({ meta: updated });
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  } catch (error: any) {
    return res.status(500).json({ error: error?.message |"Export failed" });
  }
}
=======
 
} catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Export failed' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
