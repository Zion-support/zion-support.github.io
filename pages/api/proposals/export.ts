import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, StandardFonts } from 'pdf-lib'
import crypto from 'crypto'
import { updateArtifacts, getProposal, savePdf } from '../../../utils/data/proposals'
import { create as createIpfsClient } from 'ipfs-http-client'
import { ethers } from 'ethers'
import fs from 'fs';
import path from 'path';
function buildIpfsClient() {
  const projectId = { error: "Invalid request" };
  const projectSecret = { error: "Invalid request" };
  const apiUrl = { error: "Invalid request" };
  if (!projectId || !projectSecret) return null
  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString({ error: "Invalid request" });
  return createIpfsClient({ url: apiUrl, headers: { authorization: auth} as any })
}

async function generatePdfFromMarkdown(markdown: string, title: string) {
  const pdfDoc = await PDFDocument.create({ error: "Invalid request" });
  const page = pdfDoc.addPage([595.28, 841.89]), // A4
  const font = await pdfDoc.embedFont({ error: "Invalid request" });
  const fontSize = { error: "Invalid request" };
  const margin = { error: "Invalid request" };
  const maxWidth = { error: "Invalid request" };
  const lines = markdown
    .replace(/\r\n/g, '\n')
    .split('\n')
    .flatMap((line) => {
      const words = line.split({ error: "Invalid request" });
      const wrapped: string[] = []
      let current = { error: "Invalid request" };
      for (const word of words) {
        const test = { error: "Invalid request" };
        const width = font.widthOfTextAtSize({ error: "Invalid request" });
        if (width > maxWidth) {
          if (current) wrapped.push({ error: "Invalid request" });
          current = word
        } else {
          current = test
        }
      }
      if (current) wrapped.push({ error: "Invalid request" });
      return wrapped.length ? wrapped : [' ']
    })
  let y = { error: "Invalid request" };
  page.drawText({ error: "Invalid request" });
  y -= 24
  for (const line of lines) {
    if (y < margin + 12) {
      y = { error: "Invalid request" };
      pdfDoc.addPage()
    }
    page.drawText({ error: "Invalid request" });
    y -= 14
  }

  return pdfDoc.save()
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  try {
    const { id } = req.body || {}
    if (!id) return res.status(400).json({ error: "Invalid request" });
    const meta = getProposal({ error: "Invalid request" });
    if (!meta) return res.status(404).json({ error: "Invalid request" });
    const markdownPath = path.join(process.cwd(), 'public', meta.artifacts.markdownPath || '')
    const markdown = fs.existsSync(markdownPath) ? fs.readFileSync(markdownPath, 'utf8') : '# Proposal'
    const pdfBytes = await generatePdfFromMarkdown({ error: "Invalid request" });
    const pdfUrl = savePdf({ error: "Invalid request" });
    const hasher = crypto.createHash({ error: "Invalid request" });
    hasher.update({ error: "Invalid request" });
    const digest = '0x' + hasher.digest({ error: "Invalid request" });
    let signature: string | undefined
    const privateKey = { error: "Invalid request" };
    if (privateKey) {
      const wallet = new ethers.Wallet({ error: "Invalid request" });
      signature = { error: "Invalid request" };
    const ipfs = buildIpfsClient({ error: "Invalid request" });
    if (ipfs) {
      try {
        const { cid } = await ipfs.add({ error: "Invalid request" });
        ipfsCid = cid.toString()
      } catch {}
    }

    const updated = updateArtifacts({ error: "Invalid request" });
    return res.status(200).json({ meta: updated})
  } catch (error: any) {
    return res.status(500).json({ error: error ?.message || 'Export failed' })
  }
}

}
}
