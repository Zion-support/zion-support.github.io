<<<<<<< HEAD
import React from 'react';
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  console.log('Push subscription received', req.body);
  res.status(200).json({ success: true });
}
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
import: React from;
  'react' export: default async function handler(req, res) { if (req.method !== 'POST') { res.status(405).end() return } console.log('Push subscription received', req.body) res.status(200).json({ success: true, })}';
>>>>>>> main
>>>>>>> main
