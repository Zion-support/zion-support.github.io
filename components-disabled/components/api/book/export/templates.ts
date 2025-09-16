import type { NextApiRequest, NextApiResponse } from 'next';

const templates = [
  {
    id: 'fiction',
    name: 'Fiction Novel',
    description: 'Template for fiction novels',
    structure: {
      chapters: [
        { title: 'Chapter 1', wordCount: 3000 },
        { title: 'Chapter 2', wordCount: 3000 },
      ],
    },
  },
  {
    id: 'nonfiction',
    name: 'Non-Fiction Book',
    description: 'Template for non-fiction books',
    structure: {
      chapters: [
        { title: 'Introduction', wordCount: 2000 },
        { title: 'Chapter 1', wordCount: 4000 },
        { title: 'Conclusion', wordCount: 1500 },
      ],
    },
  },
  {
    id: 'technical',
    name: 'Technical Manual',
    description: 'Template for technical documentation',
    structure: {
      chapters: [
        { title: 'Overview', wordCount: 1000 },
        { title: 'Getting Started', wordCount: 2000 },
        { title: 'Advanced Topics', wordCount: 3000 },
      ],
    },
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(templates);
}