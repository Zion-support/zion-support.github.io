<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next',;

import fs from 'fs',;
import path from 'path',;
=======
import { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')
  }
  const { userId = 'demo-user', courseId, enableBoost } = req.body |{}
  if (!courseId) return res.status(400).json({ error: 'courseId required' })
  try {

/**
 * read_json - Function description
 */
function read_json() {
  return JSON.parse (fs.readFileSync (p, 'utf - 8'));
}

/**
 * write_json - Function description
 */
function write_json() {
  fs.writeFileSync (p, JSON.stringify (data, null, 2));
}
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}

=======
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
