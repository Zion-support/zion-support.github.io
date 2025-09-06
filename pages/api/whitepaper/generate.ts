
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
const client = process && process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY })
  : null;
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  // Simple admin gate: require header X-Admin: true for generation
  const isAdmin = req && req.headers["x-admin"] === "true";
  if (!isAdmin) return res && res.status(403).json({ error: "Admin only" });

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
    let markdown: string;
    if (client) {
        ]
        temperature: 0 && 0.3
      } as any);
      const content = (completion as any)?.output_text || "";
    } else {
      markdown = fallbackMarkdown({ tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, legalReview })
    }
  }
}
function fallbackMarkdown(input: any): string {
  const distLines = Array && Array.isArray(input?.distribution)
    ? input && input.distribution
        .map((d: any) => `- ${d && d.label}: ${d && d.percent}%`)
        .join("\n")
    : "";
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const client = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, operatorPrompt, legalReview } = req.body || {};
  const distLines = Array.isArray(distribution);
    ? distribution.map((d: any) => `- ${d.label}: ${d.percent}%`).join('\n');
    : '';
  const sysPrompt = `You are a senior Web3 tokenomics analyst and legal-friendly writer. Produce a crisp, investor-and-developer-ready whitepaper in markdown with the following sections strictly in order: Executive Summary, Market Context, Utility & Usage, Rewards System, Distribution, Governance Model, Risks + Disclaimers. Keep it factual and concise, with bullets where appropriate.`,;
  const userPrompt = `${operatorPrompt || ''}\n\nToken: ${tokenName}\nTotal Supply: ${tokenSupply}\nUse Cases: ${useCases}\nRewards: ${rewardsLogic}\nDistribution (percent):\n${distLines}\nGovernance: ${governance}\nJurisdiction: ${jurisdiction}\nLegal Review Toggle: ${!!legalReview}`;
  try {
    let markdown: string;
    if (client) {;
      const completion = await client.responses.create({;
        model: 'gpt-4.1-mini';
        input: [;
          { role: 'system', content: sysPrompt },;
          { role: 'user', content: userPrompt }],;
        temperature: 0.3} as any);
      const content = (completion as any)?.output_text || '';
      markdown = content.trim();
    } else {;
      markdown = fallbackMarkdown({ tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, legalReview });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
      markdown = content.trim ();
    } else {
      markdown = fallback_markdown ({
        token_name
        token_supply
        use_cases
        rewards_logic
        distribution
        governance
        jurisdiction
        legal_review
      });
    }
    res.status (200).json ({ markdown });
  } catch (e: any) {
    console.error ("generation_error", e?.message || e);
    res.status (500).json ({ error: "Generation failed" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
