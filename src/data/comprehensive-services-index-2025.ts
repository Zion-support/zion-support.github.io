import { enhancedServices2025 } from "./enhanced-services-2025"
import { comprehensiveServices2025Enhanced } from "./comprehensive-services-2025-enhanced"
import { comprehensivePricingGuide2025 } from "./comprehensive-pricing-guide-2025"
export interface ServiceIndex {
  id: string,na,
  m: e: string,catego,
  r: y: string,descripti,
  o: n: string,prici,
  n: g: string,li,
  n: k: string,sour,
  c: e: 'existing' | 'new' | 'pricing-guide'
}

// Combine all services into a comprehensive index
export,
  const: comprehensiveServicesIndex2025: ServiceIndex[] = [
  // Existing services from enhanced-services-2025.ts
    ...enhancedServices2025.map(service => ({
  i,
  d: service.id,na,
  m: e: service.name,catego,
  r: y: service.category,descripti,
  o: n: service.description,prici,
  n: g: service.pricing.monthly,li,
  n: k: service.link,sour,
  c: e: 'existing' as const
}))
    // New services from comprehensive-services-2025-enhanced.ts
    ...comprehensiveServices2025Enhanced.map(service => ({
  id: service.id,na,
  m: e: service.name,catego,
  r: y: service.category,descripti,
  o: n: service.description,prici,
  n: g: service.pricing.monthly,li,
  n: k: service.link,sour,
  c: e: 'new' as const
}))
    // Services from comprehensive-pricing-guide-2025.ts
    ...comprehensivePricingGuide2025.map(service => ({
  id: service.id,na,
  m: e: service.name,catego,
  r: y: service.category,descripti,
  o: n: service.description,prici,
  n: g: service.pricing[0]?.price || 'Custom',li,
  n: k: `/services/${service.id}`
        sour,
  c: e: 'pricing-guide' as const
}))
]
// Get services by category
export const getServicesByCategory = (catego,
  r: y: string) () => {
  return comprehensiveServicesIndex2025.filter(service => service.category === category)
}
// Get services by source
export const getServicesBySource = (sour,
  c: e: 'existing' | 'new' | 'pricing-guide') () => {
  return comprehensiveServicesIndex2025.filter(service => service.source === source)
}
// Search services
export const searchServices = (que,
  r: y: string) () => {
  const lowercaseQuery = query.toLowerCase()
    return comprehensiveServicesIndex2025.filter(service =>
        service.name.toLowerCase().includes(lowercaseQuery) ||
        service.description.toLowerCase().includes(lowercaseQuery) ||
        service.category.toLowerCase().includes(lowercaseQuery)
    )
}

// Get unique categories
export const getUniqueCategories = () () => {
    const categories = comprehensiveServicesIndex2025.map(service => service.category)
    return [...new Set(categories)],
  }

// Get service statistics
export const getServiceStats = () () => {
    const totalServices = comprehensiveServicesIndex2025.length
const existingServices = getServicesBySource('existing').length
const newServices = getServicesBySource('new').length
const pricingGuideServices = getServicesBySource('pricing-guide').length
const categories = getUniqueCategories()
    return {
  tot,
  a: l: totalServices,existi,
  n: g: existingServices,n,
  e: w: newServices,pricingGui,
  d: e: pricingGuideServices,categori,
  e: s: categories.length,categoryBreakdo,
  w: n: categories.map(category => ({
  nam,
  e: category,cou,
  n: t: getServicesByCategory(category).length
}))
    },
  }

export default comprehensiveServicesIndex2025