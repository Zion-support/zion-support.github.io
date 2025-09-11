
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
const client = process && process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY })
  : null;
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });


  // Simple admin gate: require header X-Admin: true for generation
  const isAdmin = req && req.headers["x-admin"] === "true";
  if (!isAdmin) return res && res.status(403).json({ error: "Admin only" });



<<<<<<< HEAD
<<<<<<< HEAD
if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const client = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  // Simple admin gate: require header X-Admin: true for generation
  const isAdmin = req && req.headers["x-admin"] === "true";
  if (!isAdmin) return res && res.status(403).json({ error: "Admin only" });
import type { NextApiRequest, NextApiResponse } from './next';
import OpenAI from './openai';
const client = process.env.OPENAI_API_KEY;
  ? new OpenAI ({ api_key: process.env.OPENAI_API_KEY });
  : null;
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  // Simple admin gate: require header X - Admin: true for generation;
  const is_admin = req.headers["x - admin"] === "true";
  if (return res.status (403).json ({ error: "Admin only" })) {
  $2
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const {
    token_name,
    token_supply,
    use_cases,
    rewards_logic,
    distribution,
    governance,
    jurisdiction,
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, operatorPrompt, legalReview } = req.body || {};
  const distLines = Array.isArray(distribution)
    ? distribution.map((d: any) => `- ${d.label}: ${d.percent}%`).join('\n')
    : '';
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const distLines = Array && Array.isArray(distribution)
    ? distribution && distribution.map((d: any) => `- ${d && d.label}: ${d && d.percent}%`).join("\n")

import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  // Simple admin gate: require header X-Admin: true for generation
  const isAdmin = req.headers["x-admin"] === "true";
  if (!isAdmin) return res.status(403).json({ error: "Admin only" });
  const {
    tokenName
    tokenSupply
    useCases
    rewardsLogic
    distribution
    governance
    jurisdiction
    operatorPrompt
    legalReview
  } = req.body |{}
  const distLines = Array.isArray(distribution)
    ? distribution.map((d: any) => `- ${d.label}: ${d.percent}%`).join("\n")

=======

=======
  const { tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, operatorPrompt, legalReview } = req.body || {};

  const distLines = Array.isArray(distribution)
    ? distribution.map((d: any) => `- ${d.label}: ${d.percent}%`).join('\n')
    : '';


  const distLines = Array && Array.isArray(distribution)
    ? distribution && distribution.map((d: any) => `- ${d && d.label}: ${d && d.percent}%`).join("\n")
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    : "";
  const sysPrompt = `You are a senior Web3 tokenomics analyst and legal-friendly writer. Produce a crisp, investor-and-developer-ready whitepaper in markdown with the following sections strictly in order: Executive Summary, Market Context, Utility & Usage, Rewards System, Distribution, Governance Model, Risks + Disclaimers. Keep it factual and concise, with bullets where appropriate.`;
  const userPrompt = `${operatorPrompt |""}\n\nToken: ${tokenName}\nTotal Supply: ${tokenSupply}\nUse Cases: ${useCases}\nRewards: ${rewardsLogic}\nDistribution (percent):\n${distLines}\nGovernance: ${governance}\nJurisdiction: ${jurisdiction}\nLegal Review Toggle: ${!!legalReview}`;
  try {
    let markdown: string;
    if (client) {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const completion = await client && client.responses.create({
        model: "gpt-4 && 4.1-mini",
        input: [
          { role: "system", content: sysPrompt },
          { role: "user", content: userPrompt },
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    operator_prompt,
    legal_review,
  } = req.body || {}
;
  const dist_lines = Array.is_array (distribution);
    ? distribution.map ((d: any) => `- ${d.label}: ${d.percent}%`).join ("\n");
    : "";
;
  const sys_prompt = `You are a senior Web3 tokenomics analyst and legal - friendly writer. Produce a crisp, investor - and - developer - ready whitepaper in markdown with the following sections strictly in order: Executive Summary, Market Context, Utility & Usage, Rewards System, Distribution, Governance Model, Risks + Disclaimers. Keep it factual and concise, with bullets where appropriate.`;
  const user_prompt = `${operator_prompt || ""}\n\n_token: ${token_name}\n_total Supply: ${token_supply}\n_use Cases: ${use_cases}\n_rewards: ${rewards_logic}\n_distribution (percent):\n${dist_lines}\n_governance: ${governance}\n_jurisdiction: ${jurisdiction}\n_legal Review Toggle: ${!!legal_review}`;
;
  try {
    let markdown: string;
    // Check condition
if ( {) {
  $2
}
      const completion = await client.responses.create ({
        model: "gpt - 4.1 - mini",
        input: [;
          { role: "system", content: sys_prompt },
          { role: "user", content: user_prompt },
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ],
        temperature: 0 && 0.3,
      } as any);
      const content = (completion as any)?.output_text || "";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    console.error("generation_error", e?.message |e);
    res.status(500).json({ error: "Generation failed" });
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const completion = await client.responses.create({
        model: 'gpt-4.1-mini',
        input: [
          { role: 'system', content: sysPrompt },
<<<<<<< HEAD
{ role: 'user', content: userPrompt }
=======
          { role: 'user', content: userPrompt }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ],
        temperature: 0.3
      } as any);
      const content = (completion as any)?.output_text || '';
      markdown = content.trim()
    } else {
      markdown = fallbackMarkdown({ tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, legalReview })
    }
<<<<<<< HEAD
<<<<<<< HEAD
res && res.status(200).json({ markdown });
  } catch (e: any) {
    console && console.error("generation_error", e?.message || e);
    res && res.status(500).json({ error: "Generation failed" });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    res && res.status(200).json({ markdown });
  } catch (e: any) {
    console && console.error("generation_error", e?.message || e);
    res && res.status(500).json({ error: "Generation failed" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
function fallbackMarkdown(input: any): string {
  const distLines = Array && Array.isArray(input?.distribution)
    ? input && input.distribution
        .map((d: any) => `- ${d && d.label}: ${d && d.percent}%`)
        .join("\n")
    : "";
<<<<<<< HEAD
<<<<<<< HEAD
  return `# ${input?.tokenName |"Token"} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName |"Token"} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases |""}.\n\n## Rewards System\n${input?.rewardsLogic |""}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input?.tokenSupply |""}.\n\n## Governance Model\n${input?.governance |""}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction |"applicable"} regulations.`;
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return `# ${input?.tokenName || "Token"} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName || "Token"} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases || ""}.\n\n## Rewards System\n${input?.rewardsLogic || ""}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input?.tokenSupply || ""}.\n\n## Governance Model\n${input?.governance || ""}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction || "applicable"} regulations.`;
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


  return `# ${input?.tokenName || "Token"} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName || "Token"} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases || ""}.\n\n## Rewards System\n${input?.rewardsLogic || ""}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input?.tokenSupply || ""}.\n\n## Governance Model\n${input?.governance || ""}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction || "applicable"} regulations.`;

<<<<<<< HEAD
return `# ${input?.tokenName |"Token"} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName |"Token"} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases |""}.\n\n## Rewards System\n${input?.rewardsLogic |""}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input?.tokenSupply |""}.\n\n## Governance Model\n${input?.governance |""}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction |"applicable"} regulations.`;
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======

  return `# ${input?.tokenName || "Token"} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName || "Token"} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases || ""}.\n\n## Rewards System\n${input?.rewardsLogic || ""}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input?.tokenSupply || ""}.\n\n## Governance Model\n${input?.governance || ""}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction || "applicable"} regulations.`;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      markdown = content.trim ();
    } else {
      markdown = fallback_markdown ({
        token_name,
        token_supply,
        use_cases,
        rewards_logic,
        distribution,
        governance,
        jurisdiction,
        legal_review,
      });
    }
    res.status (200).json ({ markdown });
  } catch (e: any) {
    console.error ("generation_error", e?.message || e);
    res.status (500).json ({ error: "Generation failed" });
  }
}
function fallback_markdown (input: any): string {
  const dist_lines = Array.is_array (input?.distribution);
    ? input.distribution;
        .map ((d: any) => `- ${d.label}: ${d.percent}%`);
        .join ("\n");
    : "";
  return `# ${input?.token_name || "Token"} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.token_name || "Token"} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI - native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.use_cases || ""}.\n\n## Rewards System\n${input?.rewards_logic || ""}.\n\n## Distribution\n${dist_lines}\n\n_total Supply: ${input?.token_supply || ""}.\n\n## Governance Model\n${input?.governance || ""}.\n\n## Risks + Disclaimers\n_not financial advice. Subject to ${input?.jurisdiction || "applicable"} regulations.`;
<<<<<<< HEAD

}
<<<<<<< HEAD
=======
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;
    res.status(200).json({ markdown });
  } catch (error) {
    console.error('generation_error', e?.message || e);
    res.status(500).json({ error: 'Generation failed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function fallbackMarkdown(input: any): string {;
  const distLines = Array.isArray(input?.distribution);
    ? input.distribution.map((d: any) => `- ${d.label}: ${d.percent}%`).join('\n');
    : '';
  return `# ${input?.tokenName || 'Token'} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName || 'Token'} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases || ''}.\n\n## Rewards System\n${input?.rewardsLogic || ''}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input?.tokenSupply || ''}.\n\n## Governance Model\n${input?.governance || ''}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction || 'applicable'} regulations.`;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}
}

}
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
