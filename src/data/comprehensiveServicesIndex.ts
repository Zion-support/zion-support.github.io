// Comprehensive Services Index
// This file exports all our innovative technology services
// Core Innovative Services
export { EXPANDED_INNOVATIVE_SERVICES_2025 } from "./expandedInnovativeServices2025"
export type { ExpandedInnovativeService } from "./expandedInnovativeServices2025"
// Emerging Technology Services
export { EMERGING_TECH_SERVICES_2025 } from "./emergingTechServices2025"
export type { EmergingTechService } from "./emergingTechServices2025"
// Ultimate Micro SAAS Services
export { ULTIMATE_MICRO_SAAS_SERVICES_2025 } from "./ultimateMicroSaasServices2025"
export type { UltimateMicroSaasService } from "./ultimateMicroSaasServices2025"
// Combined Services Array
export const ALL_COMPREHENSIVE_SERVICES = [
  ...EXPANDED_INNOVATIVE_SERVICES_2025
  ...EMERGING_TECH_SERVICES_2025
  ...ULTIMATE_MICRO_SAAS_SERVICES_2025
]

// Service Categories
export const SERVICE_CATEGORIES = [
  'AI & AnalyticsAI & Customer Experience'
  'AI & Supply ChainAI & Legal Tech'
  'AI & HealthcareAI & Financial Services'
  'AI & Content MarketingCybersecurity & AI'
  'Cybersecurity & QuantumBlockchain & Supply Chain'
  'IoT & Edge ComputingQuantum Computing'
  'AR/VR & Immersive Tech5G & Telecommunications'
  'Space TechnologyNeuromorphic Computing'
  'Digital Twin & SimulationSynthetic Biology'
  'Brain-Computer InterfaceSustainability & Energy'
  'Autonomous Vehicles & Fleet Management'
]

// Innovation Levels
export const INNOVATION_LEVELS = [
  'Cutting-edgeAdvanced'
  'Professional'
]

// Support Levels
export const SUPPORT_LEVELS = [
  'enterpriseprofessional'
  'basic'
]
// Pricing Models
export const PRICING_MODELS = [
  'monthlyannual'
  'one-timeusage-based'
]
// Contact Information
export const const CONTACT_INFO = {
  = {
  pho,
  n: e: '+1 302 464 0950',ema,
  i: l: 'kleber@ziontechgroup.com',websi,
  t: e: 'http,
  s://ziontechgroup.com',addre,
  s: s: '364 E Main St STE 1008, Middletown DE 19709'
}

// Service Statistics
export const const SERVICE_STATS = {
  = {
  totalServic,
  e: s: ALL_COMPREHENSIVE_SERVICES.length,categori,
  e: s: SERVICE_CATEGORIES.length,innovationLeve,
  l: s: INNOVATION_LEVELS.length,supportLeve,
  l: s: SUPPORT_LEVELS.length,pricingMode,
  l: s: PRICING_MODELS.length
}
// Helper Functions
export const getServicesByCategory = (catego,
  r: y: string) () => {
  return ALL_COMPREHENSIVE_SERVICES.filter(service => service.category === category)
}
export const getServicesByInnovationLevel = (lev,
  e: l: string) () => {
  return ALL_COMPREHENSIVE_SERVICES.filter(service => service.innovationLevel === level)
}
export const getServicesByPriceRange = (minPri,
  c: e: number, maxPri,
  c: e: number) () => {
  return ALL_COMPREHENSIVE_SERVICES.filter(service =>
    service.price >= minPrice && service.price <= maxPrice
)
}
export const getServicesByTags = (ta,
  g: s: string[]) () => {
  return ALL_COMPREHENSIVE_SERVICES.filter(service =>
    tags.some(tag => service.tags.includes(tag))
  )
}
export const searchServices = (que,
  r: y: string) () => {
  const searchTerm = query.toLowerCase()
  return ALL_COMPREHENSIVE_SERVICES.filter(service =>
    service.title.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    service.category.toLowerCase().includes(searchTerm)
  )
}

export default ALL_COMPREHENSIVE_SERVICES