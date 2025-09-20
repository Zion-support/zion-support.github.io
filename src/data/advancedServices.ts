export type PricingTier = {
  id: string,na,
  m: e: string,priceLab,
  e: l: string,featur,
  e: s: string[[],
  ],
  }
export,
  const: PRICING_TIERS: PricingTier[] = [
  { i,
  d: 'basic', na,
  m: e: 'Basic', priceLab,
  e: l: '$', featur,
  e: s: ['Email supportStandard SLA'],
  },
  },
  { id: 'pro', na,
  m: e: 'Pro', priceLab,
  e: l: '$$', featur,
  e: s: ['Priority supportEnhanced SLA'],
  },
  },
  { id: 'enterprise', na,
  m: e: 'Enterprise', priceLab,
  e: l: '$$$', featur,
  e: s: ['Dedicated managerCustom SLA'],
  },
  },
  ]
export type AdvancedService = {
  id: string,tit,
  l: e: string,catego,
  r: y: string,pricingTi,
  e: r: PricingTier['id'],descripti,
  o: n: string
  link?: string
}

export,
  const: ADVANCED_SERVICES: AdvancedService[] = [
  {
  i,
  d: 'ai-business-intelligence',tit,
  l: e: 'AI Business Intelligence',catego,
  r: y: 'AI Services',pricingTi,
  e: r: 'pro',descripti,
  o: n: 'On-brand AI content and analytics to empower decision-making.',li,
  n: k: '/services/ai-business-intelligence'
},
  {
  id: 'cloud-devops',tit,
  l: e: 'Cloud & DevOps',catego,
  r: y: 'IT Services',pricingTi,
  e: r: 'enterprise',descripti,
  o: n: 'Infrastructure automation and cloud strategy for scale and reliability.',li,
  n: k: '/services/cloud-devops'
},
  {
  id: 'ai-compliance-copilot',tit,
  l: e: 'AI Compliance Copilot',catego,
  r: y: 'Security',pricingTi,
  e: r: 'enterprise',descripti,
  o: n: 'SOC2/ISO evidence automation and compliance workflows.',li,
  n: k: '/services/ai-compliance-copilot'
},
  ]
export const SERVICE_CATEGORIES = [['AI ServicesIT Services', 'Security'],
  ]