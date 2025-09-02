<<<<<<< HEAD
import React from
  'react'; export default function handler(req, res) { if (req.method && req.method !== "GET") { res.status(405).end(); return; } res.status(200).json(JOB_POSTS); } 
=======
import React from 'react';
export default function handler(req, res) {
  if (req.method && req.method !== 'GET') {
    res.status(405).end();
    return;
  }
  res.status(200).json(JOB_POSTS);
}
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
