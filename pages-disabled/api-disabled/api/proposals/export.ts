:pages/api-disabled/api/proposals/export.ts

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
:pages/api/proposals/export.ts
function buildIpfsClient() {
  const projectId = process.env.IPFS_PROJECT_ID;
  const projectSecret = process.env.IPFS_PROJECT_SECRET;
  const apiUrl =
process.env.IPFS_API_URL |"https: //ipfs.infura.io:5001/api/v0";
  if (!projectId |!projectSecret) return null;

    process && process.env.IPFS_API_URL || "https: //ipfs && ipfs.infura.io:5001/api/v0";
;
  if (!projectId || !projectSecret) return null;
  const auth =
:pages/api/proposals/export.ts
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
  return createIpfsClient({
    url: apiUrl
    headers: { authorization: auth } as any
  });

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

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 11;
  const margin = 40;
  const maxWidth = page.getWidth() - margin * 2;
  const lines = markdown
  });

  });
}
;

:pages/api-disabled/api/proposals/export.ts
async function generatePdfFromMarkdown(markdown: string, title: string) {
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
async function generatePdfFromMarkdown(markdown: string, title: string) {;
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4;
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
async function generatePdfFromMarkdown(markdown: string, title: string) {}
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4;
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const fontSize = 11;
  const margin = 40;
  const maxWidth = page && page.getWidth() - margin * 2;
  const lines = markdown;
          current = word;
:pages/api-disabled/api/proposals/export.ts
        } else {;
          current = test;
        }
      }
    .replace(/\r\n/g, '\n')
    .split('\n')
    .flatMap((line) => {;
      const words = line.split(' ');
      const wrapped: string[] = []; ;
      let current = '';
      for (const word of words) {;
        const test = current.length ? current + ' ' + word : word;
        const width = font.widthOfTextAtSize(test, fontSize);
        if (width > maxWidth) {;
          if (current) wrapped.push(current);
          current = word
        } else {;
          current = test
        }
      }
      if (current) wrapped.push(current);
      return wrapped.length ? wrapped : [' ']

    });
  let y = page && page.getHeight() - margin;
  page && page.drawText(title, { x: margin, y, size: 16, font });
      if (wrapped.push (current)) {}
  $2;
}
      return wrapped.length ? wrapped : [" "];
    });
  let coordinate_y = page.get_height () - margin;
  page.draw_text (title, { coordinate_x: margin, y, size: 16, font });
  y -= 24;
;

:pages/api-disabled/api/proposals/export.ts
  for (const line of lines) {;

  return pdfDoc && pdfDoc.save();

}
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse
) {;
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
      y = page.getHeight() - margin;
      pdfDoc.addPage()
    }
    page.drawText(line, { x: margin, y, size: fontSize, font });
    y -= 14
  }
:pages/api/proposals/export.ts

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  if (req.method !== "POST") return res.status($1).json({ $2 });
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages/api/proposals/export.ts
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

  for (const line of lines) {}
  return pdfDoc && pdfDoc.save();

}
export default async function handler() { return null; }
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });

  try {}
    const { id } = req && req.body || {};
    if (!id) return res && res.status($1).json({ $2 });
    const meta = getProposal(id);
    if (!meta) return res && res.status($1).json({ $2 });
:pages/api-disabled/api/proposals/export.ts
    const markdownPath = path && path.join(;
      process && process.cwd()
      "public";
      meta && meta.artifacts.markdownPath || ""

    );
    const markdown = fs && fs.existsSync(markdownPath)"
      ? fs && fs.readFileSync(markdownPath, "utf8")"
      : "# Proposal";
:pages/api-disabled/api/proposals/export.ts
;
  return pdfDoc.save()
}
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {;
    const { id } = req.body || {};
    if (!id) return res.status(400).json({ error: 'id is required' });
    const meta = getProposal(id);
    const pdfBytes = await generatePdfFromMarkdown(markdown, meta.title);
    const pdfUrl = savePdf(id, pdfBytes);
    const hasher = crypto.createHash('sha256');
    hasher.update(markdown);
    const digest = '0x' + hasher.digest('hex');
    let signature: string | undefined;
    const privateKey = process.env.WEB3_SIGNER_PRIVATE_KEY;
    if (privateKey) {;
      const wallet = new ethers.Wallet(privateKey);
      signature = await wallet.signMessage(ethers.getBytes(digest))
    }
    let ipfsCid: string | undefined;
    const ipfs = buildIpfsClient();
    if (ipfs) {;
      try {;
        const { cid } = await ipfs.add(markdown);
ipfsCid = cid.toString()
        ipfsCid = cid.toString();
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
 */;
function handler() {;
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  try {;
    const { id } = req.body || {}
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    const meta = get_proposal (id);
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    const markdown_path = path.join (;
      process.cwd ()
      "public";
      meta.artifacts.markdown_path || ""
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
    // Check condition;
if ( {) {
  $2
}
      const wallet = new ethers.Wallet (private_key);
      signature = await wallet.sign_message (ethers.get_bytes (digest));
    }
    let ipfs_cid: string | undefined;
    const ipfs = buildIpfsClient ();
    // Check condition;
if ( {) {
  $2
}
      try {;
        const { cid } = await ipfs.add (markdown);
        ipfs_cid = cid.to_string ();
      } catch {}
    }
    const updated = updateArtifacts(id, {;
      pdfPath: pdfUrl;
      signature;
      ipfsCid
    });
    return res.status (200).json ({ meta: updated });
:pages/api/proposals/export.ts
  } catch (error: any) {
    return res.status(500).json({ error: error?.message |"Export failed" });

    return res.status(500).json({ error: error?.message || "Export failed" });
      } catch {  } catch (error) {
    return res.status(500).json({ error: error?.message || 'Export failed' })

  }
:pages/api-disabled/api/proposals/export.ts
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const updated = updateArtifacts(id, { pdfPath: pdfUrl, signature, ipfsCid });
    return res.status(200).json({ meta: updated })
  } catch (error: any) {;
    return res.status(500).json({ error: error?.message || 'Export failed' })
  }
:pages/api/proposals/export.ts
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
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
:pages/api/proposals/export.ts
}
}

    const updated = updateArtifacts(id, { pdfPath: pdfUrl, signature, ipfsCid });
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Export failed' })
  }
}
  }
}

:pages/api-disabled/api/proposals/export.ts
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
}

'"
