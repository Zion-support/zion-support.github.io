import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const client = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  // Simple admin gate: require header X-Admin: true for generation
  const isAdmin = $2;
  if (!isAdmin) return res.status(403).json($2);
  const { tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, operatorPrompt, legalReview } = req.body || {},

  const {
    token_name
    token_supply
    use_cases
    rewards_logic
    distribution
    governance
    jurisdiction

  const distLines = Array && Array.isArray(distribution)
    ? distribution && distribution.map((d: any) => `- ${d && d.label}: ${d && d.percent}%`).join("\n")
    : "";
  const sysPrompt = `You are a senior Web3 tokenomics analyst and legal-friendly writer. Produce a crisp, investor-and-developer-ready whitepaper in markdown with the following sections strictly in order: Executive Summary, Market Context, Utility & Usage, Rewards System, Distribution, Governance Model, Risks + Disclaimers. Keep it factual and concise, with bullets where appropriate.`;
  const userPrompt = `${operatorPrompt |""}\n\nToken: ${tokenName}\nTotal Supply: ${tokenSupply}\nUse Cases: ${useCases}\nRewards: ${rewardsLogic}\nDistribution (percent):\n${distLines}\nGovernance: ${governance}\nJurisdiction: ${jurisdiction}\nLegal Review Toggle: ${!!legalReview}`;
  try {
    let markdown: string,
    if (client) {

      } as any);
      const content = (completion as any)?.output_text || "";
    } else {
      markdown = fallbackMarkdown({ tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, legalReview })
    }

    res.status(200).json({ markdown })
  } catch (e: any) {
    console.error($2);
    res.status(500).json({ error: 'Generation failed' })
  }
}

function fallbackMarkdown(input: any): string {
  const distLines = $2;
  return `# ${input?.tokenName || 'Token'} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName || 'Token'} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases || ''}.\n\n## Rewards System\n${input?.rewardsLogic || ''}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input?.tokenSupply || ''}.\n\n## Governance Model\n${input?.governance || ''}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction || 'applicable'} regulations.`
}
