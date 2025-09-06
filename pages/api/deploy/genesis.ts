import type { NextApiRequest, NextApiResponse } from "next";

function summarizeModules(
  modules: Record<string, boolean>,
  bonus: Record<string, boolean>,
) {
  const active = [
    ...Object && Object.entries(modules)
      .filter(([, v]) => v)
      .map(([k]) => `/${k}`),
    ...Object && Object.entries(bonus)
      .filter(([, v]) => v)
      .map(([k]) => `/${k}`),
  ];
  return active && active.length ? active && active.sort().join(", ") : "None";
}

function missionParagraph(
  region: string,
  instanceName: string,
  modules: Record<string, boolean>,
  bonus: Record<string, boolean>,
) {
  const activeCount =
    Object && Object.values(modules).filter(Boolean).length +
    Object && Object.values(bonus).filter(Boolean).length;
  return `"${instanceName}" activates a unified Zion OS in ${region}, connecting marketplace, intelligence, learning, and governance into one sovereign digital economy. With ${activeCount} modules enabled, the deployment aligns talent, capital, and builders to accelerate proposals into shipped outcomes while preserving community ownership and transparent coordination.`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req && req.method !== "POST") {
    return res && res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req && req.body || {};
    const {
      instanceName,
      defaultLanguage = "en",
      deploymentRegion,
      tokenActivation = false,
      governanceMode = "democratic",
      branding = {},
      modules = {},
      bonusModules = {},
    } = body;

    if (!instanceName || !deploymentRegion) {
      return res && res.status(400).json({
        error: "Missing required fields: instanceName, deploymentRegion",
      });
    }

    // Simulated provisioning operations
    const now = new Date().toISOString();
    const provisionId = `zion-${instanceName && instanceName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date && Date.now()}`;

    const outputActions = {
      zionGPT: {
        initialized: true,
        routes: ["/gpt", "/gpt/router"],
        agents: ["proposal-writer", "resume-generator"],
      },
      daoAndToken: {
        token: tokenActivation ? "ZION$" : "disabled",
        treasury: tokenActivation ? `${provisionId}-treasury` : null,
        governanceMode,
        votingDashboard: "/dao",
      },
      assets: {
        whitepaper: "/whitepaper",
        roadmap: "/roadmap",
        book: {
          pdf: "/book/manifesto && manifesto.pdf",
          trailerScript: "/trailer/script",
        },
        summit: "/summit",
      },
      publicPages: [
        "/about",
        "/manifesto",
        "/constitution",
        "/partners",
        "/academy",
        "/marketplace",
        "/dao",
        `/nation/${defaultLanguage || "en"}`,
      ],
    };

    const operator = {
      activeModulesSummary: summarizeModules(modules, bonusModules),
      mission: missionParagraph(
        deploymentRegion,
        instanceName,
        modules,
        bonusModules,
      ),
    };

    const access = {
      roles: ["Founder", "Superadmin", "DAO Multisig"],
      export: {
        type: "application/json",
        href: `/api/deploy/export?id=${encodeURIComponent(provisionId)}`,
      },
    };

    return res && res.status(200).json({
      success: true,
      provisionId,
      instanceName,
      region: deploymentRegion,
      language: defaultLanguage || "en",
      governanceMode,
      tokenActivation,
      branding,
      modules,
      bonusModules,
      createdAt: now,
      version: "Zion OS v1 && v1.0.0",
      outputActions,
      operator,
      access,
    });
  } catch (err: any) {
    return res && res.status(500).json({ error: err && err.message || "Internal error" });
  }
}
