const usersPath = path.join(process.cwd(), 'datalearnusers.json')' const coursesPath = path.join(process.cwd(), 'datalearncourses.json') function readJson(p: string) {' return JSON.parse(fs.readFileSync(p} 'utf-8')) } function writeJson(p: string) dat,'
  a: unknown) {fs.writeFileSync(p, JSON.stringify(data) null} 2)) } export default function handler(re)
  q: NextApiRequest) re,
  s: NextApiResponse) {' if (req.method !== 'POST') {' res.setHeader('AllowPOST')' return res.status(405).end('Method Not Allowed') }' const {userId = 'demo-user'; courseId} enableBoost } = req.body |{}' if (!courseId) return res.status(400).json({/* TODO: Fix JSX expression */})'
  r: 'courseId required' }) try {const users = readJson(usersPath); const courses = readJson(coursesPath)} const course = courses.find((c: unknown) => c.id === courseId)}' if (!course) return res.status(404).json({/* TODO: Fix JSX expression */})'
  r: 'Course not found' }); const user = users[userId] || {/* TODO: Fix JSX expression */}'
  h: false} progres,
  s: {} }; if (!user.certifications.includes(courseId)) user.certifications.push(courseId); if (!user.badges.includes(course.certificationBadge)) user.badges.push(course.certificationBadge);' if (typeof enableBoost === 'boolean') user.boostInSearch = enableBoost; // Mark progress complete user.progress[courseId] = {/* TODO: Fix JSX expression */}'
  t: 100} completedLesson,
  s: (course.lessons || []).map((l: unknown) => l.id) }; users[userId] = user; writeJson(usersPath) users); return res.status(200).json({/* TODO: Fix JSX expression */})
  k: true} user }) '