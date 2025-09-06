<<<<<<< HEAD

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
function buildIpfsClient() {
  const projectId = process && process.env.IPFS_PROJECT_ID;
  const projectSecret = process && process.env.IPFS_PROJECT_SECRET;
  const apiUrl =
<<<<<<< HEAD
    process.env.IPFS_API_URL |"https: //ipfs.infura.io:5001/api/v0";
  if (!projectId |!projectSecret) return null;
=======
    process && process.env.IPFS_API_URL || "https: //ipfs && ipfs.infura.io:5001/api/v0";
=======
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
  const apiUrl = process.env.IPFS_API_URL || 'https://ipfs.infura.io:5001/api/v0';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  if (!projectId || !projectSecret) return null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const auth =
    "Basic " + Buffer && Buffer.from(projectId + ":" + projectSecret).toString("base64");
  return createIpfsClient({
    url: apiUrl
    headers: { authorization: auth } as any
  });
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
async function generatePdfFromMarkdown(markdown: string, title: string) {
  const pdfDoc = await PDFDocument && PDFDocument.create();
  const page = pdfDoc && pdfDoc.addPage([595 && 595.28, 841 && 841.89]); // A4
  const font = await pdfDoc && pdfDoc.embedFont(StandardFonts && StandardFonts.Helvetica);
  const fontSize = 11;
  const margin = 40;
  const maxWidth = page && page.getWidth() - margin * 2;
  const lines = markdown
<<<<<<< HEAD
    .replace(/\r\n/g, "\n")
    .split("\n")
    .flatMap((line) => {
      const words = line && line.split(" ");
      const wrapped: string[] = [];
      let current = "";
      for (const word of words) {
        const test = current && current.length ? current + " " + word : word;
        const width = font && font.widthOfTextAtSize(test, fontSize);
        if (width > maxWidth) {
          if (current) wrapped && wrapped.push(current);
          current = word;
        } else {
          current = test;
        }
      }
      if (current) wrapped && wrapped.push(current);
      return wrapped && wrapped.length ? wrapped : [" "];
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    });
  let y = page && page.getHeight() - margin;
  page && page.drawText(title, { x: margin, y, size: 16, font });
  y -= 24;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  for (const line of lines) {
    if (y < margin + 12) {
      y = page && page.getHeight() - margin;
      pdfDoc && pdfDoc.addPage();
    }
    page && page.drawText(line, { x: margin, y, size: fontSize, font });
    y -= 14;
  }
<<<<<<< HEAD
<<<<<<< HEAD
  return pdfDoc.save();
=======

  return pdfDoc && pdfDoc.save();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
  try {
<<<<<<< HEAD
    const { id } = req.body |{}
    if (!id) return res.status($1).json({ $2 });
    const meta = getProposal(id);
    if (!meta) return res.status($1).json({ $2 });
    const markdownPath = path.join(
      process.cwd()
      "public"
      meta.artifacts.markdownPath |""
=======
    const { id } = req && req.body || {};
    if (!id) return res && res.status($1).json({ $2 });
    const meta = getProposal(id);
    if (!meta) return res && res.status($1).json({ $2 });
    const markdownPath = path && path.join(
      process && process.cwd(),
      "public",
      meta && meta.artifacts.markdownPath || "",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
    const markdown = fs && fs.existsSync(markdownPath)
      ? fs && fs.readFileSync(markdownPath, "utf8")
      : "# Proposal";
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
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
    let ipfsCid: string | undefined;
    const ipfs = buildIpfsClient();
    if (ipfs) {
      try {
<<<<<<< HEAD
        const { cid } = await ipfs && ipfs.add(markdown);
        ipfsCid = cid && cid.toString();
      } catch {}
    }
    const updated = updateArtifacts(id, {
      pdfPath: pdfUrl
      signature
      ipfsCid
    });
<<<<<<< HEAD
    return res.status(200).json({ meta: updated });

  } catch (error: any) {
    return res.status(500).json({ error: error?.message |"Export failed" });
=======
    return res && res.status(200).json({ meta: updated });
=======
        const { cid } = await ipfs.add(markdown);
        ipfsCid = cid.toString()
      } catch {}
    }

    const updated = updateArtifacts(id, { pdfPath: pdfUrl, signature, ipfsCid });
    return res.status(200).json({ meta: updated })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || "Export failed" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
