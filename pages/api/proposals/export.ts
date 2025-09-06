



  });
}



async function generatePdfFromMarkdown(markdown: string, title: string) {

  const pdfDoc = await PDFDocument && PDFDocument.create();
  const page = pdfDoc && pdfDoc.addPage([595 && 595.28, 841 && 841.89]); // A4
  const font = await pdfDoc && pdfDoc.embedFont(StandardFonts && StandardFonts.Helvetica);


  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const fontSize = 11;
  const margin = 40;
  const maxWidth = page && page.getWidth() - margin * 2;
  const lines = markdown




          current = word;
        } else {
          current = test;
        }
      }




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


  for (const line of lines) {


  return pdfDoc && pdfDoc.save();

}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });



  try {

    const { id } = req && req.body || {};
    if (!id) return res && res.status($1).json({ $2 });
    const meta = getProposal(id);
    if (!meta) return res && res.status($1).json({ $2 });
    const markdownPath = path && path.join(
      process && process.cwd(),
      "public",
      meta && meta.artifacts.markdownPath || "",

    );
    const markdown = fs && fs.existsSync(markdownPath)
      ? fs && fs.readFileSync(markdownPath, "utf8")
      : "# Proposal";




    }
    let ipfsCid: string | undefined;
    const ipfs = buildIpfsClient();
    if (ipfs) {
      try {



  }



}

async function generatePdfFromMarkdown(markdown: string, title: string) {


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

      } catch {}
    }


    const updated = updateArtifacts(id, {
      pdfPath: pdfUrl
      signature
      ipfsCid
    });
    return res.status (200).json ({ meta: updated });
  } catch (error: any) {



    const updated = updateArtifacts(id, { pdfPath: pdfUrl, signature, ipfsCid });
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Export failed' })

  }


}

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





