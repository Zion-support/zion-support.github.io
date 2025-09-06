import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
  if (req.method != 'POST') return res.status(405).json({ error: any
  const isAdmin = req.headers['x-admin'] = = 'true'
  if (!isAdmin) return res.status(403).json({ error: any
    ? distribution.map(d:any) => `- ${d.label} ${d.percent}%`).join('\n'
    : any
  const userPrompt = `${operatorPrompt || ''
        model: any
          { role: any
          { role: any
      const content = (completion as any)?.output_text || ''
    console.error('generation_error'
    res.status(500).json({ error: any
    ? input.distribution.map(d:any) => `- ${d.label} ${d.percent}%`).join('\n'
    : any
  return `# ${input?.tokenName || 'Token'} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName || 'Token'} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases || ''}.\n\n## Rewards System\n${input?.rewardsLogic || ''}.\n\n## Distribution\n${distLines}\n\nTotal Supply:${input?.tokenSupply || ''}.\n\n## Governance Model\n${input?.governance || ''}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction || 'applicable'