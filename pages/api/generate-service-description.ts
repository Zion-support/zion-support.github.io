import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { serviceName, description, features } = req.body;

  if (!serviceName) {
    return res.status(400).json({ error: 'Service name is required' });
  }

  try {
    // Mock AI generation - replace with actual OpenAI integration
    const generatedDescription = `# ${serviceName}

## Overview
${description || 'A comprehensive service solution designed to meet your business needs.'}

## Key Features
${features ? features.map((f: string) => `- ${f}`).join('\n') : '- Advanced functionality\n- Scalable architecture\n- Enterprise-grade security'}

## Benefits
- Streamlined operations
- Enhanced productivity
- Cost-effective solution
- 24/7 support

## Getting Started
Contact our team to learn more about implementing this service for your organization.

---
*This description was generated automatically. Please review and customize as needed.*`;

    return res.status(200).json({ 
      description: generatedDescription,
      serviceName,
      generatedAt: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Service description generation error:', error);
    return res.status(500).json({ error: 'Failed to generate description' });
  }
}