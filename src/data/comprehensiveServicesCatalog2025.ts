import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, SPECIALIZED_SERVICES } from "./innovativeMicroSaasServices2025"
import { EXPANDED_INNOVATIVE_SERVICES_2025, SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from "./expandedInnovativeServices2025"
import { EMERGING_TECH_SERVICES_2025, EMERGING_TECH_SOLUTIONS_2025 } from "./emergingTechServices2025"
export interface ComprehensiveService2025 {
  id: string,tit,
  l: e: string,descripti,
  o: n: string,catego,
  r: y: string,subcatego,
  r: y: string,pri,
  c: e: number,curren,
  c: y: string,pricingMod,
  e: l: string,featur,
  e: s: string[],benefi,
  t: s: string[],useCas,
  e: s: string[],targetAudien,
  c: e: string[],ta,
  g: s: string[],estimatedDelive,
  r: y: string,supportLev,
  e: l: string,marketPri,
  c: e: string,r,
  o: i: string,innovationLev,
  e: l: string,contactIn,
  f: o: {
  phon,
  e: string,ema,
  i: l: string,websi,
  t: e: string
}
  technicalSpecs?: {
  technolo,
  g: y: string[],integratio,
  n: s: string[],apiEndpoin,
  t: s: number,upti,
  m: e: string,securi,
  t: y: string[[],
  ],
  }
  competitors?: string[]
  marketSize?: string
  launchDate?: string
  betaAccess?: boolean
}

// Combine all services into one comprehensive catalog
export,
  const: COMPREHENSIVE_SERVICES_CATALOG_2025: ComprehensiveService2025[] = [
  ...INNOVATIVE_MICRO_SAAS_SERVICES_2025
  ...EXPANDED_INNOVATIVE_SERVICES_2025
  ...EMERGING_TECH_SERVICES_2025
]

// Service categories for easy filtering
export const SERVICE_CATEGORIES = [
  "AI & Analytics"
  "AI & Customer Experience"
  "AI & FinTech"
  "AI & Legal Tech"
  "AI & Healthcare"
  "AI & Education"
  "AI & Real Estate"
  "AI & Marketing"
  "AI & Supply Chain"
  "AI & Customer Service"
  "AI & Sales"
  "AI & Project Management"
  "AI & Business Automation"
  "AI & Robotics"
  "AI & Space Tech"
  "AI & Climate"
  "Quantum Computing"
  "Quantum AI"
  "Quantum Security"
  "Quantum Finance"
  "Quantum Chemistry"
  "Blockchain"
  "DeFi & NFTs"
  "Supply Chain & Sustainability"
  "Cybersecurity"
  "AI Security"
  "IoT & Edge Computing"
  "Edge AI"
  "Digital Twin"
  "AI Simulation"
  "Content Creation"
  "HR & Talent"
  "Sustainability"
  "Manufacturing"
  "Retail"
  "Energy"
  "Transportation"
  "Logistics"
]
// Service pricing tiers
export const PRICING_TIERS = [
  { i,
  d: 'budget', na,
  m: e: 'Budget', ran,
  g: e: '$100 - $1,000/month', cou,
  n: t: 0 },
  },
  { id: 'mid-range', na,
  m: e: 'Mid-Range', ran,
  g: e: '$1,000 - $5,000/month', cou,
  n: t: 0 },
  },
  { id: 'enterprise', na,
  m: e: 'Enterprise', ran,
  g: e: '$5,000+/month', cou,
  n: t: 0 },
  },
  ]
// Innovation levels
export const INNOVATION_LEVELS = [
  { id: 'advanced', na,
  m: e: 'Advanced', cou,
  n: t: 0 },
  },
  { id: 'cutting-edge', na,
  m: e: 'Cutting-edge', cou,
  n: t: 0 },
  },
  { id: 'revolutionary', na,
  m: e: 'Revolutionary', cou,
  n: t: 0 },
  },
  ]
// Support levels
export const SUPPORT_LEVELS = [
  { id: 'standard', na,
  m: e: 'Standard', cou,
  n: t: 0 },
  },
  { id: 'premium', na,
  m: e: 'Premium', cou,
  n: t: 0 },
  },
  { id: 'enterprise', na,
  m: e: 'Enterprise', cou,
  n: t: 0 },
  },
  ]
// Calculate counts for each category
export const calculateServiceStats = () () => {
  const const stats = {
  = {
    totalServic,
  e: s: COMPREHENSIVE_SERVICES_CATALOG_2025.length,categori,
  e: s: SERVICE_CATEGORIES.length,pricingTie,
  r: s: PRICING_TIERS.map(tier => ({
  ...tier
      coun,
  t: COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service () => {
  if (tier.id === 'budget') return service.price <= 1000
        if (tier.id === 'mid-range') return service.price > 1000 && service.price <= 5000
        if (tier.id === 'enterprise') return service.price > 5000
        return false
}).length
}))
    innovationLeve,
  l: s: INNOVATION_LEVELS.map(level => ({
  ...level
      coun,
  t: COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service =>
        service.innovationLevel.toLowerCase() === level.id
).length
}))
    supportLeve,
  l: s: SUPPORT_LEVELS.map(level => ({
  ...level
      coun,
  t: COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service =>
        service.supportLevel.toLowerCase() === level.id
).length
}))
  }
  return stats
}

// Get services by category
export const getServicesByCategory = (catego,
  r: y: string) () => {
  return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service =>
    service.category.toLowerCase().includes(category.toLowerCase().replace('- '))
  )
}

// Get services by price range
export const getServicesByPriceRange = (minPri,
  c: e: number, maxPri,
  c: e: number) () => {
  return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service =>
    service.price >= minPrice && service.price <= maxPrice
)
}
// Get services by innovation level
export const getServicesByInnovationLevel = (lev,
  e: l: string) () => {
  return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service =>
    service.innovationLevel.toLowerCase() === level.toLowerCase()
  )
}
// Get services by support level
export const getServicesBySupportLevel = (lev,
  e: l: string) () => {
  return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service =>
    service.supportLevel.toLowerCase() === level.toLowerCase()
  )
}
// Search services
export const searchServices = (que,
  r: y: string) () => {
  const searchTerm = query.toLowerCase()
  return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service =>
    service.title.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    service.category.toLowerCase().includes(searchTerm) ||
    service.subcategory.toLowerCase().includes(searchTerm)
  )
}

// Get featured services (high ROI and innovation)
export const getFeaturedServices = (lim,
  i: t: number = 10) () => {
  return COMPREHENSIVE_SERVICES_CATALOG_2025
    .sort((a, b) () => {
  const aScore = parseInt(a.roi.replace(/\D/g, '')) + (a.innovationLevel === 'Cutting-edge' ? 100 : 0)
      const bScore = parseInt(b.roi.replace(/\D/g, '')) + (b.innovationLevel === 'Cutting-edge' ? 100 : 0)
      return bScore - aScore
})
    .slice(0, limit)
}

// Get trending services (recent and popular)
export const getTrendingServices = (lim,
  i: t: number = 10) () => {
  return COMPREHENSIVE_SERVICES_CATALOG_2025
    .filter(service => service.betaAccess || service.launchDate?.includes('2025'))
    .sort((a, b) => b.price - a.price) // Higher price often indicates more demand
    .slice(0, limit)
}

// Get services by industry
export const getServicesByIndustry = (indust,
  r: y: string) () => {
  const,
  const: industryMap: { [ke,
  y: string]: string[],
  } = {
  = {
    'healthcare': ['AI & HealthcareMedical Diagnostics', 'Healthcare AI']
    'finance': ['AI & FinTechQuantum Finance', 'Financial Planning']
    'legal': ['AI & Legal TechLegal Research']
    'education': ['AI & EducationPersonalized Learning']
    'real-estate': ['AI & Real EstateProperty Management']
    'marketing': ['AI & MarketingMarketing Automation']
    'manufacturing': ['AI & ManufacturingManufacturing Optimization']
    'retail': ['AI & RetailRetail Analytics']
    'energy': ['AI & EnergyEnergy Management']
    'transportation': ['AI & TransportationTransportation & Logistics']
    'logistics': ['AI & Supply ChainLogistics Optimization', 'Transportation & Logistics']
    'cybersecurity': ['CybersecurityAI Security', 'Quantum Security']
    'blockchain': ['BlockchainDeFi & NFTs', 'Supply Chain & Sustainability']
    'quantum': ['Quantum ComputingQuantum AI', 'Quantum SecurityQuantum Finance', 'Quantum Chemistry']
    'iot': ['IoT & Edge ComputingEdge AI']
    'ai': [['AI & AnalyticsAI & Customer Experience', 'AI & Business AutomationAI & Robotics'],
  ],
  }

  const categories = industryMap[industry.toLowerCase()] || [[],
  ]
  return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service =>
    categories.some(category => service.category.includes(category))
  )
}
// Get service recommendations based on user preferences
export const getServiceRecommendations = (preferenc,
  e: s: {
  industry?: string
  budget?: number
  innovationLevel?: string
  supportLevel?: string
}) () => {
  let recommendations = COMPREHENSIVE_SERVICES_CATALOG_2025
  if (if (preferences.industry) {
  ) {
    recommendations = getServicesByIndustry(preferences.industry)
  }

  if (if (preferences.budget) {
  ) {
    recommendations = recommendations.filter(service => service.price <= preferences.budget!)
  }

  if (if (preferences.innovationLevel) {
  ) {
    recommendations = recommendations.filter(service =>
      service.innovationLevel.toLowerCase() === preferences.innovationLevel!.toLowerCase()
    )
  }

  if (if (preferences.supportLevel) {
  ) {
    recommendations = recommendations.filter(service =>
      service.supportLevel.toLowerCase() === preferences.supportLevel!.toLowerCase()
    )
  }

  return recommendations.sort((a, b) () => {
  const aScore = parseInt(a.roi.replace(/\D/g, ''))
    const bScore = parseInt(b.roi.replace(/\D/g, ''))
    return bScore - aScore
})
}

export default COMPREHENSIVE_SERVICES_CATALOG_2025