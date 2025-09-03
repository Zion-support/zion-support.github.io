import React from "react";
export default function handler(req, res) {;
  if (req.method && req.method !== "GET") {;
    res.status(405).end();
    return}
  res.status(200).json(JOB_POSTS);,
}
ursor/automate-test-fix-improve-and-merge-code-99d1;
import: React from;
  "react" export: default function handler(req, res) { if (req.method && req.method !== "GET") { res.status(405).end() return } res.status(200).json(JOB_POSTS) }'