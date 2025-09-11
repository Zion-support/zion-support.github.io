

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



  const {
    token_name,
    token_supply,
    use_cases,
    rewards_logic,
    distribution,
    governance,
    jurisdiction,

=======
  const { tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, operatorPrompt, legalReview } = req.body || {};

  const distLines = Array.isArray(distribution)
    ? distribution.map((d: any) => `- ${d.label}: ${d.percent}%`).join('\n')
    : '';


  const distLines = Array && Array.isArray(distribution)
    ? distribution && distribution.map((d: any) => `- ${d && d.label}: ${d && d.percent}%`).join("\n")
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    : "";
  const sysPrompt = `You are a senior Web3 tokenomics analyst and legal-friendly writer. Produce a crisp, investor-and-developer-ready whitepaper in markdown with the following sections strictly in order: Executive Summary, Market Context, Utility & Usage, Rewards System, Distribution, Governance Model, Risks + Disclaimers. Keep it factual and concise, with bullets where appropriate.`;
  const userPrompt = `${operatorPrompt |""}\n\nToken: ${tokenName}\nTotal Supply: ${tokenSupply}\nUse Cases: ${useCases}\nRewards: ${rewardsLogic}\nDistribution (percent):\n${distLines}\nGovernance: ${governance}\nJurisdiction: ${jurisdiction}\nLegal Review Toggle: ${!!legalReview}`;
  try {
    let markdown: string;
    if (client) {

      const completion = await client && client.responses.create({
        model: "gpt-4 && 4.1-mini",
        input: [
          { role: "system", content: sysPrompt },
          { role: "user", content: userPrompt },
=======
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

        ],
        temperature: 0 && 0.3,
      } as any);
      const content = (completion as any)?.output_text || "";

    console.error("generation_error", e?.message |e);
    res.status(500).json({ error: "Generation failed" });
=======
=======
      const completion = await client.responses.create({
        model: 'gpt-4.1-mini',
        input: [
          { role: 'system', content: sysPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.3
      } as any);
      const content = (completion as any)?.output_text || '';
      markdown = content.trim()
    } else {
      markdown = fallbackMarkdown({ tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, legalReview })
    }


    res && res.status(200).json({ markdown });
  } catch (e: any) {
    console && console.error("generation_error", e?.message || e);
    res && res.status(500).json({ error: "Generation failed" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
}
function fallbackMarkdown(input: any): string {
  const distLines = Array && Array.isArray(input?.distribution)
    ? input && input.distribution
        .map((d: any) => `- ${d && d.label}: ${d && d.percent}%`)
        .join("\n")
    : "";


=======

  return `# ${input?.tokenName || "Token"} Tokenomics Whitepaper\n\n## Executive Summary\n${input?.tokenName || "Token"} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives, reputation systems, and credible neutrality.\n\n## Utility & Usage\n${input?.useCases || ""}.\n\n## Rewards System\n${input?.rewardsLogic || ""}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input?.tokenSupply || ""}.\n\n## Governance Model\n${input?.governance || ""}.\n\n## Risks + Disclaimers\nNot financial advice. Subject to ${input?.jurisdiction || "applicable"} regulations.`;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
}

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



}
