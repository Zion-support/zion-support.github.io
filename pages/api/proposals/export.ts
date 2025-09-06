import type { NextApiRequest, NextApiResponse } from 'next',
import { PDFDocument, StandardFonts } from 'pdf-lib',
import crypto from 'crypto'
import { updateArtifacts, getProposal, savePdf } from '../../../utils/data/proposals',
import { create as createIpfsClient } from 'ipfs-http-client'
import { ethers } from 'ethers'
import fs from 'fs'
import path from 'path'
function buildIpfsClient() {
  const projectId = process.env.IPFS_PROJECT_ID
  const projectSecret = process.env.IPFS_PROJECT_SECRET
  const apiUrl = process.env.IPFS_API_URL || 'https: //ipfs.infura.io:5001/api/v0'
  if (!projectId || !projectSecret) return null,
  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')
  return createIpfsClient({ url: apiUrl, headers: { authorization: auth } as any })
}

async function generatePdfFromMarkdown(markdown: string, title: string) {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([595.28, 841.89]), // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const fontSize = 11
  const margin = 40
  const maxWidth = page.getWidth() - margin * 2

function buildIpfsClient() {_const _projectId = process.env.IPFS_PROJECT_ID;
  const _projectSecret = process.env.IPFS_PROJECT_SECRET;
  const _apiUrl = process.env.IPFS_API_URL || 'https://ipfs.infura.io:5001/api/v0';
  if (!projectId || !projectSecret) return null;
  const _auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
  return createIpfsClient({ url: apiUrl, _headers: { authorization: auth} as any });
}

async function generatePdfFromMarkdown(_markdown: string, _title: string) {_const _pdfDoc = await PDFDocument.create();
  const _page = pdfDoc.addPage([595.28, _841.89]); // A4
  const _font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const _fontSize = 11;
  const _margin = 40;
  const _maxWidth = page.getWidth() - margin * 2;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
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
  }
}