import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
function summarizeModules(
  modules: Record<string, boolean>,
  bonus: Record<string, boolean>
) {
  const active = [
    ...Object.entries(modules)
      .filter(([, v]) => v)
      .map(([k]) => `/${k}`),
    ...Object.entries(bonus)
      .filter(([, v]) => v)
      .map(([k]) => `/${k}`),
  ];
  return active.length ? active.sort().join(', ') : 'None';
}

function missionParagraph(
  region: string,
  instanceName: string,
  modules: Record<string, boolean>,
  bonus: Record<string, boolean>
) {
  const activeCount =
    Object.values(modules).filter(Boolean).length +
    Object.values(bonus).filter(Boolean).length;
  return `"${instanceName}" activates a unified Zion OS in ${region}, connecting marketplace, intelligence, learning, and governance into one sovereign digital economy. With ${activeCount} modules enabled, the deployment aligns talent, capital, and builders to accelerate proposals into shipped outcomes while preserving community ownership and transparent coordination.`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const {
      instanceName,
      defaultLanguage = 'en',
      deploymentRegion,
      tokenActivation = false,
      governanceMode = 'democratic',
      branding = {},
      modules = {},
<<<<<<< HEAD
      bonusModules = {},
    } = body;

    if (!instanceName || !deploymentRegion) {
      return res.status(400).json({
        error: 'Missing required fields: instanceName, deploymentRegion',
=======
      bonusModules = {}
    } = body;

    if (!instanceName || !deploymentRegion) {
      return res.status(400).json({ 
        error: 'Missing required fields: instanceName, deploymentRegion' 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      });
    }

    // Simulated provisioning operations
    const now = new Date().toISOString();
    const provisionId = `zion-${instanceName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`;
    
    const outputActions = {
      zionGPT: {
        initialized: true,
<<<<<<< HEAD
        routes: ['/gpt', '/gpt/router'],
        agents: ['proposal-writer', 'resume-generator'],
=======
        routes: ['/gpt/gpt/router'],
        agents: ['proposal-writer', 'resume-generator']
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
      daoAndToken: {
        token: tokenActivation ? 'ZION$' : 'disabled',
        treasury: tokenActivation ? `${provisionId}-treasury` : null,
<<<<<<< HEAD
        governanceMode,
        votingDashboard: '/dao',
=======
        votingDashboard: '/dao'
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
      assets: {
        whitepaper: '/whitepaper',
        roadmap: '/roadmap',
        book: {
          pdf: '/book/manifesto.pdf',
<<<<<<< HEAD
          trailerScript: '/trailer/script',
        },
        summit: '/summit',
      },
      publicPages: [
        '/about',
        '/manifesto',
        '/constitution',
        '/partners',
        '/academy',
        '/marketplace',
        '/dao',
        `/nation/${defaultLanguage || 'en'}`,
      ],
=======
          trailerScript: '/trailer/script'
        },
        summit: '/summit'
      },
      publicPages: []
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
    };

    res.status(200).json({
      success: true,
      provisionId,
<<<<<<< HEAD
      instanceName,
      region: deploymentRegion,
      language: defaultLanguage || 'en',
      governanceMode,
      tokenActivation,
      branding,
      modules,
      bonusModules,
      createdAt: now,
      version: 'Zion OS v1.0.0',
    };

    const operator = {
      activeModulesSummary: summarizeModules(modules, bonusModules),
      mission: missionParagraph(
        deploymentRegion,
        instanceName,
        modules,
        bonusModules
      ),
    };

    const access = {
      roles: ['Founder', 'Superadmin', 'DAO Multisig'],
      export: {
        type: 'application/json',
        href: `/api/deploy/export?id=${encodeURIComponent(provisionId)}`,
      },
    };

    return res.status(200).json({ outputActions, deployLog, access, operator });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Internal error' });
=======
      timestamp: now,
      actions: outputActions
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Genesis provisioning failed' 
    });
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  }
}
