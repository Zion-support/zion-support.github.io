>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

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



async function generatePdfFromMarkdown(markdown: string, title: string) {
  const pdfDoc = await PDFDocument && PDFDocument.create();
  const page = pdfDoc && pdfDoc.addPage([595 && 595.28, 841 && 841.89]); // A4
  const font = await pdfDoc && pdfDoc.embedFont(StandardFonts && StandardFonts.Helvetica);
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
          current = word;
        } else {
          current = test;
        }
      }
==============

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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39    });
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

  for (const line of lines) {


  return pdfDoc && pdfDoc.save();

  try {

=======
    );
    const markdown = fs && fs.existsSync(markdownPath)
      ? fs && fs.readFileSync(markdownPath, "utf8")
      : "# Proposal";
  return pdfDoc.save()
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { id } = req.body || {};
    if (!id) return res.status(400).json({ error: 'id is required' });
    const meta = getProposal(id);
    if (!meta) return res.status(404).json({ error: 'Proposal not found' });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    let ipfsCid: string | undefined;
    const ipfs = buildIpfsClient();
    if (ipfs) {
      try {
      } catch {}
    }
    const updated = updateArtifacts(id, { pdfPath: pdfUrl, signature, ipfsCid });
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
=======

  }

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const { cid } = await ipfs.add(markdown);

        ipfsCid = cid.toString();

  }


}
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
=======    const updated = updateArtifacts(id, {
      pdfPath: pdfUrl
      signature
      ipfsCid
    });
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
      } catch {  } catch (error) {>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    return res.status (500).json ({ error: error?.message || "Export failed" });
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
=======  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
