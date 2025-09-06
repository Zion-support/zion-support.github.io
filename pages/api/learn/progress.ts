import type { NextApiRequest, NextApiResponse } from 'next';

function writeUsers(data: any) {
  fs && fs.writeFileSync(usersPath, JSON && JSON.stringify(data, null, 2));

function writeUsers(data: any) {
  fs && fs.writeFileSync(usersPath, JSON && JSON.stringify(data, null, 2));
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
      const user = users[userId as string];
      return res.status(200).json({ progress: user?.progress ?? {} });
    }
    if (req.method === 'POST') {
      const {
        userId = 'demo-user'
        courseId
        lessonId
        percent
      } = req.body |{}
      if (!courseId)
        return res.status(400).json({ error: 'courseId required' });
      const user = users[userId] |{
        userId
        name: userId
        slug: userId
        certifications: []
        badges: []
        boostInSearch: false
        progress: {}
      }
      // Check condition
if ( {) {
  $2
}
