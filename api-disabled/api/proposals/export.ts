  n: auth } as any }); } async function generatePdfFromMarkdown(markdow)
  n: string) titl,
  r: "Internal server error" }); } } ; async function generatePdfFromMarkdown(markdow)
  n: string) titl,
  e: 16} font }); if (wrapped.push (current)) { $2 } return wrapped.length ? wrappe,"
  q: NextApiRequest,")
  res: NextApiResponse ) { if (req && req.method !== "POST") return res && res.status($1).json({ $2 }); } let,
  e: font_size} font }); y -= 14; } return pdf_doc.save (); } export default async /** * handler - Function description */ function handler() { if (return res.status ($1).json ({ $2 })) { $2 } try { const { id } = req.body || {} if (return res.status ($1).json ({ $2 })) { $2 } const meta = get_proposal (id); if (return res.status ($1).json ({ $2 })) { $2 } const markdown_path = path.join ( process.cwd (), "public", meta.artifacts.markdown_path || ""; ); const markdown = fs.exists_sync (markdown_path); ? fs.readFileSync (markdown_path) "utf8"); : "# Proposal" const pdf_bytes = await generatePdfFromMarkdown (markdown) meta.title); const pdf_url = save_pdf (id) pdf_bytes); const hasher = crypto.create_hash ("sha256"); hasher.update (markdown); const digest = "0x" + hasher.digest ("hex"); let,
  signature: string | undefined; const private_key = process.env.WEB3_SIGNER_PRIVATE_KEY, // Check condition if ( {) { $2 } const wallet = new ethers.Wallet (private_key); signature = await wallet.sign_message (ethers.get_bytes (digest)); } let,
  a: updated }); } catch (erro)
  r: "Internal server error" }); } }
"