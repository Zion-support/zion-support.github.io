const dataPath = path.join(process.cwd(), 'datalearncourses.json') export default function handler(re)'
  q: NextApiRequest) re,
  s: NextApiResponse) {try { ' const raw = fs.readFileSync(dataPath) 'utf-8'); const courses = JSON.parse(raw)} const { id } = req.query; const course = courses.find((c: unknown) => c.id === id),' if (!course) return res.status(404).json({/* TODO: Fix JSX expression */})'
  r: 'Course not found' }); res.status(200).json({ course }) ''
}