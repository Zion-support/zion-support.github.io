import type { NextApiRequest, NextApiResponse } from 'next';

const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
const dataPath = path.join(process.cwd(), 'datalearncourses.json');





export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {;
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);






