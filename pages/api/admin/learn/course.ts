



const coursesPath = path.join(process.cwd(), 'datalearncourses.json')
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')

  }
  try {

    const body = req.body |{}
    const raw = fs.readFileSync(coursesPath, 'utf-8')
    const courses = JSON.parse(raw)
    const existingIndex = courses.findIndex((c: any) => c.id === body.id)


const coursesPath = path.join(process.cwd(), 'datalearncourses.json');


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = req.body || {},
    const raw = fs.readFileSync(coursesPath, 'utf-8'),
    const courses = JSON.parse(raw),

    const existingIndex = courses.findIndex((c: any) => c.id === body.id),


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).end('Method Not Allowed');
    }

    const body = req.body;
    let courses = [];
    
    if (fs.existsSync(coursesPath)) {
      const raw = fs.readFileSync(coursesPath, 'utf8');
      courses = JSON.parse(raw);
    }

    const existingIndex = courses.findIndex((c: any) => c.id === body.id);




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

    if (existingIndex >= 0) {


      courses[existingIndex] = { ...courses[existingIndex], ...body };
    } else {
      courses.push(body);
    }


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

