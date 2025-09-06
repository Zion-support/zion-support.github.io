import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { companyName, industry, stage, funding } = req.body || {};
  if (!companyName || !industry) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const slides = generateSlides(companyName, industry, stage, funding);
  return res.status(200).json({ slides });
}

function generateSlides(companyName: string, industry: string, stage: string, funding: string) {
  const slides = [
    {
      title: 'Company Overview',
      content: `${companyName} is a ${stage} stage company in the ${industry} industry. ${funding ? `We have raised ${funding} in funding.` : ''}`,
    },
    {
      title: 'Problem Statement',
      content: 'Describe the key problem your company solves in the market.',
    },
    {
      title: 'Solution',
      content: 'Explain how your product or service addresses the problem.',
    },
    {
      title: 'Market Opportunity',
      content: 'Outline the market size and opportunity in your industry.',
    },
    {
      title: 'Business Model',
      content: 'Describe how your company generates revenue.',
    },
    {
      title: 'Competitive Advantage',
      content: 'Highlight what makes your company unique.',
    },
    {
      title: 'Financial Projections',
      content: 'Show your revenue projections and key metrics.',
    },
    {
      title: 'Team',
      content: 'Introduce your key team members and their expertise.',
    },
    {
      title: 'Funding Ask',
      content: 'Specify how much funding you need and how you will use it.',
    },
  ];

  return slides;
}