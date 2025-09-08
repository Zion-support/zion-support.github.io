



  if (!fs.existsSync(dir)) return res.status(200).json([]);

const files = fs.readdirSync(dir).map((name) => ({ name }));
  if (!fs.existsSync(dir)) return res.status(200).json([]);


export default function handler(req: NextApiRequest, res: NextApiResponse) {"
  const section = String(req.query.section |\"General\");

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
"
const section = String(req.query.section || \"General\");
"
const dir = resolveDataPath(path.join(\"dataroom\", section));
  if (!fs.existsSync(dir)) return res.status(200).json([]);}
}











