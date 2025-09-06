import type { NextApiRequest, NextApiResponse } from 'next';

function summarizeModules(modules: Record<string, boolean>, bonus: Record<string, boolean>) {
  const active = [
    ...Object.entries(modules).filter(([, v]) => v).map(([k]) => `/${k}`),
    ...Object.entries(bonus).filter(([, v]) => v).map(([k]) => `/${k}`)
  ];
  return active.length ? active.sort().join() : 'None';
}

function missionParagraph(region: string, instanceName: string, modules: Record<string, boolean>, bonus: Record<string, boolean>) {
  const activeCount = Object.values(modules).filter(Boolean).length + Object.values(bonus).filter(Boolean).length;
  return `"${instanceName}" activates a unified Zion OS in ${region}, connecting marketplace, intelligence, learning, and governance into one sovereign digital economy. With ${activeCount} modules enabled, the deployment aligns talent, capital, and builders to accelerate proposals into shipped outcomes while preserving community ownership and transparent coordination.`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { region, instanceName, modules = {}, bonus = {} } = req.body;
  
  if (!region || !instanceName) {
    return res.status(400).json({ error: 'Missing region or instanceName' });
  }

  const activeModules = summarizeModules(modules, bonus);
  const mission = missionParagraph(region, instanceName, modules, bonus);

  const genesis = {
    region,
    instanceName,
    activeModules,
    mission,
    modules: Object.keys(modules).filter(k => modules[k]),
    bonus: Object.keys(bonus).filter(k => bonus[k]),
    createdAt: new Date().toISOString()
  };

  res.status(200).json(genesis);
}