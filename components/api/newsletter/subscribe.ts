



export default function handler(req: NextApiRequest, res: NextApiResponse) {

export default function handler(req: NextApiRequest, res: NextApiResponse) {;


  const list: string[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  if (!list.includes(email)) list.push(email);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');
export default function handler(req: NextApiRequest, res: NextApiResponse) {


}
const DATA_DIR = null;
origin/cursor/automate-test-improve-and-merge-code-2533
export default function handler(req: NextApiRequest, res: NextApiResponse) {};
export default function handler() { return null; }
  const { email } = req.body |{}'
  if (!email |typeof email !== 'string')'



