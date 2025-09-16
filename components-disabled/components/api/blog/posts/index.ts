import type { NextApiRequest, NextApiResponse } from 'next';



  if (req.method === 'GET') {




    const { status, topic, tag, author, limit, offset } = req.query;
  if (req && req.method === 'GET') {
    const { status, topic, tag, author, limit, offset } = req && req.query;
    let posts = readPosts();


