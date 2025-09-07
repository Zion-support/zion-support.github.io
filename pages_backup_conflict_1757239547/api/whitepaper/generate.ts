import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const client = null;
  return `# ${input?.tokenName || 'Token'} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName || 'Token'} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases || ''}.\n\n## Rewards System\n${input?.rewardsLogic || ''}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input?.tokenSupply || ''}.\n\n## Governance Model\n${input?.governance || ''}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction || 'applicable'} regulations.`
}
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  }
}
function fallbackMarkdown(input: any): string {
  const distLines = Array.isArray(input?.distribution)
    ? input.distribution
        .map((d: any) => `- ${d.label}: ${d.percent}%`)
        .join("\n")
    : "";
  return `# ${input?.tokenName |"Token"} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName |"Token"} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases |""}.\n\n## Rewards System\n${input?.rewardsLogic |""}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input?.tokenSupply |""}.\n\n## Governance Model\n${input?.governance |""}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction |"applicable"} regulations.`;
}
}
