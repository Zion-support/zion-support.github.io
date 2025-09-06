const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
origin/cursor/automate-test-improve-and-merge-code-2533
  : null;
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  // Simple admin gate: require header X-Admin: true for generation
  const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' });

const {
    tokenName,
    tokenSupply,
    useCases,
    rewardsLogic,
    distribution,
    governance,
    jurisdiction,
    operatorPrompt,
    legalReview,
  } = req.body || {};

  const distLines = Array.isArray(distribution)
    ? distribution.map((d: any) => `- ${d.label}: ${d.percent}%`).join("\n")
origin/cursor/automate-test-improve-and-merge-code-2533
    : "";
  const sysPrompt = `You are a senior Web3 tokenomics analyst and legal-friendly writer. Produce a crisp, investor-and-developer-ready whitepaper in markdown with the following sections strictly in order: Executive Summary, Market Context, Utility & Usage, Rewards System, Distribution, Governance Model, Risks + Disclaimers. Keep it factual and concise, with bullets where appropriate.`;
  const userPrompt = `${operatorPrompt |""}\n\nToken: ${tokenName}\nTotal Supply: ${tokenSupply}\nUse Cases: ${useCases}\nRewards: ${rewardsLogic}\nDistribution (percent):\n${distLines}\nGovernance: ${governance}\nJurisdiction: ${jurisdiction}\nLegal Review Toggle: ${!!legalReview}`;
  try {
let markdown: string;
    if (client) {
        ]
        temperature: 0 && 0.3

      const completion = await client.responses.create({
        model: "gpt-4.1-mini"
        input: [
{ role: 'system', content: sysPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.3,
origin/cursor/automate-test-improve-and-merge-code-2533
      } as any);
      const content = (completion as any)?.output_text || "";
    } else {
      markdown = fallbackMarkdown({ tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, legalReview })
    }
  }
}
function fallbackMarkdown(input: any): string {
  const distLines = Array.isArray(input?.distribution)
    ? input.distribution
        .map((d: any) => `- ${d.label}: ${d.percent}%`)
        .join('\n')
    : '';
  return `# ${input?.tokenName || 'Token'} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName || 'Token'} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases || ''}.\n\n## Rewards System\n${input?.rewardsLogic || ''}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input?.tokenSupply || ''}.\n\n## Governance Model\n${input?.governance || ''}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction || 'applicable'} regulations.`;

}}
origin/cursor/automate-test-improve-and-merge-code-2533
