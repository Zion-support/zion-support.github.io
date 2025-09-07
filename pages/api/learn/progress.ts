import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const usersPath = path.join(process.cwd(), 'data', 'learn', 'users.json');

function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
  } catch {
    return [];
  }
}

function writeUsers(data: any) {
  const dir = path.dirname(usersPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userId } = req.query as { userId?: string };
    if (!userId) {
      return res.status(400).json({ error: 'User ID required' });
    }

    const users = readUsers();
    const user = users.find((u: any) => u.id === userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const progress = {
      userId: user.id,
      completedCourses: user.completedCourses || [],
      totalCourses: user.totalCourses || 0,
      progressPercentage: user.completedCourses ? (user.completedCourses.length / (user.totalCourses || 1)) * 100 : 0
    };

    res.status(200).json(progress);
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}