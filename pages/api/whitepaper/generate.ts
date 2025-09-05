<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import OpenAI from 'openai',
const client = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null,

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),

  // Simple admin gate: require header X-Admin: true for generation
  const isAdmin = req.headers['x-admin'] === 'true',
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' }),

  const { tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, operatorPrompt, legalReview } = req.body || {},

  const distLines = Array.isArray(distribution)
    ? distribution.map((d: any) => `- ${d.label}: ${d.percent}%`).join('\n')
    : '',

  const sysPrompt = `You are a senior Web3 tokenomics analyst and legal-friendly writer. Produce a crisp, investor-and-developer-ready whitepaper in markdown with the following sections strictly in order: Executive Summary, Market Context, Utility & Usage, Rewards System, Distribution, Governance Model, Risks + Disclaimers. Keep it factual and concise, with bullets where appropriate.`,
  const userPrompt = `${operatorPrompt || ''}\n\nToken: ${tokenName}\nTotal Supply: ${tokenSupply}\nUse Cases: ${useCases}\nRewards: ${rewardsLogic}\nDistribution (percent):\n${distLines}\nGovernance: ${governance}\nJurisdiction: ${jurisdiction}\nLegal Review Toggle: ${!!legalReview}`,

  try {
    let markdown: string,
    if (client) {
      const completion = await client.responses.create({
        model: 'gpt-4.1-mini',
        input: [
          { role: 'system', content: sysPrompt },
          { role: 'user', content: userPrompt }],
        temperature: 0.3} as any),
      const content = (completion as any)?.output_text || '',
      markdown = content.trim()
    } else {
      markdown = fallbackMarkdown({ tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, legalReview })
    }

    res.status(200).json({ markdown })
  } catch (e: any) {
    console.error('generation_error', e?.message || e),
    res.status(500).json({ error: 'Generation failed' })
  }
}

function fallbackMarkdown(input: any): string {
  const distLines = Array.isArray(input?.distribution)
    ? input.distribution.map((d: any) => `- ${d.label}: ${d.percent}%`).join('\n')
    : '',
  return `# ${input?.tokenName || 'Token'} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName || 'Token'} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases || ''}.\n\n## Rewards System\n${input?.rewardsLogic || ''}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input?.tokenSupply || ''}.\n\n## Governance Model\n${input?.governance || ''}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction || 'applicable'} regulations.`
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

const _client = process.env.OPENAI_API_KEY ? new OpenAI({_apiKey: process.env.OPENAI_API_KEY}) : null;

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  // Simple admin gate: require header X-Admin: true for generation
  const _isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({_error: 'Admin only'});

  const {_tokenName, _tokenSupply, _useCases, _rewardsLogic, _distribution, _governance, _jurisdiction, _operatorPrompt, _legalReview} = req.body || {};

  const _distLines = Array.isArray(distribution)
    ? distribution.map(_(d: unknown) => `- ${_d.label}: ${_d.percent}%`).join('\n')
    : '';

  const _sysPrompt = `You are a senior Web3 tokenomics analyst and legal-friendly writer. Produce a crisp, investor-and-developer-ready whitepaper in markdown with the following sections strictly in order: Executive Summary, Market Context, Utility & Usage, Rewards System, Distribution, Governance Model, Risks + Disclaimers. Keep it factual and concise, with bullets where appropriate.`;
  const _userPrompt = `${_operatorPrompt || ''}\n\nToken: ${_tokenName}\nTotal Supply: ${_tokenSupply}\nUse Cases: ${_useCases}\nRewards: ${_rewardsLogic}\nDistribution (percent):\n${_distLines}\nGovernance: ${_governance}\nJurisdiction: ${_jurisdiction}\nLegal Review Toggle: ${_!!legalReview}`;

  try {_let markdown: string;
    if (client) {
      const _completion = await client.responses.create({
        model: 'gpt-4.1-mini', _input: [
          { role: 'system', _content: sysPrompt},
          {_role: 'user', _content: userPrompt}],
        temperature: 0.3} as any);
      const _content = (completion as any)?.output_text || '';
      markdown = content.trim();
    } else {_markdown = fallbackMarkdown({ tokenName, _tokenSupply, _useCases, _rewardsLogic, _distribution, _governance, _jurisdiction, _legalReview});
    }

    res.status(200).json({_markdown});
  } catch (e: unknown) {_res.status(500).json({ error: 'Generation failed'});
  }
}

function fallbackMarkdown(_input: unknown): string {_const _distLines = Array.isArray(input?.distribution)
    ? input.distribution.map(_(d: unknown) => `- ${d.label}: ${_d.percent}%`).join('\n')
    : '';
  return `# ${_input?.tokenName || 'Token'} Tokenomics Whitepaper\n\n## Executive Summary\n${_input?.tokenName || 'Token'} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${_input?.useCases || ''}.\n\n## Rewards System\n${_input?.rewardsLogic || ''}.\n\n## Distribution\n${_distLines}\n\nTotal Supply: ${_input?.tokenSupply || ''}.\n\n## Governance Model\n${_input?.governance || ''}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${_input?.jurisdiction || 'applicable'} regulations.`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}