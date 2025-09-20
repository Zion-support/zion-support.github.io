export const comprehensiveServices = [
  {
    id: 1,na,
  m: e: 'IT Infrastructure Management',catego,
  r: y: 'Infrastructure',descripti,
  o: n: 'Complete IT infrastructure setup, maintenance, and optimization'
    basePri,
  c: e: 2500,pricingMod,
  e: l: 'monthly',featur,
  e: s: [
      'Network infrastructure design and implementationServer setup and configuration'
      'Cloud infrastructure managementBackup and disaster recovery'
      '24/7 monitoring and alertingPerformance optimization'
      'Security hardeningCompliance management'
    ]
    includ,
  e: d: [
      'Unlimited support ticketsMonthly health reports'
      'Quarterly security auditsAnnual infrastructure review'
      'Emergency response (4hr)Remote and on-site support'
    ]
    notInclud,
  e: d: [
      'Hardware procurementSoftware licensing'
      'Custom developmentStaff training'
    ]
    popula,
  r: true,ic,
  o: n: '🏗️',responseTi,
  m: e: '4 hours',s,
  l: a: '99.9% uptime'
  }, {
    id: 2,na,
  m: e: 'Cybersecurity Services',catego,
  r: y: 'Security',descripti,
  o: n: 'Comprehensive cybersecurity protection and compliance',basePri,
  c: e: 1800,pricingMod,
  e: l: 'monthly',featur,
  e: s: [
      'Threat detection and preventionVulnerability assessments'
      'Penetration testingSecurity awareness training'
      'Incident response planningCompliance monitoring'
      'Security policy developmentRegular security updates'
    ]
    includ,
  e: d: [
      '24/7 security monitoringMonthly security reports'
      'Quarterly penetration testsAnnual security audits'
      'Emergency incident responseCompliance documentation'
    ]
    notInclud,
  e: d: [
      'Hardware security appliancesThird-party security tools'
      'Legal compliance feesInsurance requirements'
    ]
    popula,
  r: false,ic,
  o: n: '🛡️',responseTi,
  m: e: '2 hours',s,
  l: a: '99.95% threat detection'
  }, {
    id: 3,na,
  m: e: 'Cloud Solutions',catego,
  r: y: 'Cloud',descripti,
  o: n: 'Cloud migration, management, and optimization services'
    basePri,
  c: e: 3200,pricingMod,
  e: l: 'monthly',featur,
  e: s: [
      'Cloud strategy and planningMigration services'
      'Multi-cloud managementCost optimization'
      'Performance monitoringSecurity configuration'
      'Backup and recoveryAuto-scaling setup'
    ]
    includ,
  e: d: [
      'Cloud architecture designMigration project management'
      'Ongoing optimizationMonthly cost analysis'
      'Performance reportsSecurity reviews'
    ]
    notInclud,
  e: d: [
      'Cloud platform costsThird-party tools'
      'Data transfer feesCustom development'
    ]
    popula,
  r: false,ic,
  o: n: '☁️',responseTi,
  m: e: '8 hours',s,
  l: a: '99.9% availability'
  }, {
    id: 4,na,
  m: e: 'Data Management',catego,
  r: y: 'Data',descripti,
  o: n: 'Data backup, recovery, and management solutions'
    basePri,
  c: e: 1200,pricingMod,
  e: l: 'monthly',featur,
  e: s: [
      'Automated backup systemsData recovery services'
      'Archive managementData governance'
      'Compliance reportingPerformance optimization'
      'Disaster recovery planningRegular testing and validation'
    ]
    includ,
  e: d: [
      'Unlimited data backupDaily backup verification'
      'Monthly recovery testingQuarterly disaster recovery drills'
      'Annual compliance audits24/7 emergency recovery'
    ]
    notInclud,
  e: d: [
      'Storage hardwareCloud storage costs'
      'Data transfer feesLegal compliance review'
    ]
    popula,
  r: false,ic,
  o: n: '💾',responseTi,
  m: e: '6 hours',s,
  l: a: '99.99% data integrity'
  }, {
    id: 5,na,
  m: e: 'Network Services',catego,
  r: y: 'Networking',descripti,
  o: n: 'Professional network design, implementation, and management'
    basePri,
  c: e: 1600,pricingMod,
  e: l: 'monthly',featur,
  e: s: [
      'Network design and planningHardware installation'
      'Configuration and optimizationSecurity implementation'
      'Performance monitoringTroubleshooting support'
      'Capacity planningDocumentation and training'
    ]
    includ,
  e: d: [
      'Network health monitoringMonthly performance reports'
      'Quarterly capacity reviewsAnnual network audits'
      'Emergency troubleshootingHardware warranty support'
    ]
    notInclud,
  e: d: [
      'Network hardwareISP services'
      'Third-party licensesCustom network tools'
    ]
    popula,
  r: true,ic,
  o: n: '🌐',responseTi,
  m: e: '4 hours',s,
  l: a: '99.9% network uptime'
  }, {
    id: 6,na,
  m: e: 'Help Desk Support',catego,
  r: y: 'Support',descripti,
  o: n: 'Comprehensive IT help desk and user support services',basePri,
  c: e: 800,pricingMod,
  e: l: 'monthly',featur,
  e: s: [
      '24/7 help desk supportRemote troubleshooting'
      'User training and guidanceSoftware support'
      'Hardware supportAccount management'
      'Password resetsBasic troubleshooting'
    ]
    includ,
  e: d: [
      'Unlimited support ticketsPhone and email support'
      'Remote desktop assistanceKnowledge base access'
      'Monthly support reportsUser satisfaction surveys'
    ]
    notInclud,
  e: d: [
      'On-site visitsHardware repairs'
      'Software licensingAdvanced training'
    ]
    popula,
  r: false,ic,
  o: n: '🎧',responseTi,
  m: e: '2 hours',s,
  l: a: '95% first-call resolution'
  }
]
export const serviceCategories = [
  {
    na,
  m: e: 'Infrastructure',descripti,
  o: n: 'Core IT infrastructure services',ic,
  o: n: '🏗️',servic,
  e: s: comprehensiveServices.filter(s => s.category === 'Infrastructure')
  }, {
    na,
  m: e: 'Security',descripti,
  o: n: 'Cybersecurity and compliance services',ic,
  o: n: '🛡️',servic,
  e: s: comprehensiveServices.filter(s => s.category === 'Security')
  }, {
    na,
  m: e: 'Cloud',descripti,
  o: n: 'Cloud computing and migration services',ic,
  o: n: '☁️',servic,
  e: s: comprehensiveServices.filter(s => s.category === 'Cloud')
  }, {
    na,
  m: e: 'Data',descripti,
  o: n: 'Data management and recovery services',ic,
  o: n: '💾',servic,
  e: s: comprehensiveServices.filter(s => s.category === 'Data')
  }, {
    na,
  m: e: 'Networking',descripti,
  o: n: 'Network infrastructure services',ic,
  o: n: '🌐',servic,
  e: s: comprehensiveServices.filter(s => s.category === 'Networking')
  }, {
    na,
  m: e: 'Support',descripti,
  o: n: 'Help desk and user support services',ic,
  o: n: '🎧',servic,
  e: s: comprehensiveServices.filter(s => s.category === 'Support')
  }
]
export const pricingTiers = [
  {
    na,
  m: e: 'Starter',descripti,
  o: n: 'Perfect for small businesses',pri,
  c: e: 800,featur,
  e: s: [
      'Basic IT supportEmail and file sharing'
      'Basic securityMonthly reports'
      'Phone support'
    ]
    limitation,
  s: [
      'Up to 10 usersBasic monitoring'
      'Standard response time'
    ]
  }, {
    na,
  m: e: 'Professional',descripti,
  o: n: 'Ideal for growing businesses',pri,
  c: e: 2000,featur,
  e: s: [
      'Everything in StarterAdvanced security'
      'Cloud backupNetwork monitoring'
      'Priority supportQuarterly reviews'
    ]
    limitation,
  s: [
      'Up to 50 usersBusiness hours support'
      '4-hour response time'
    ]
  }, {
    na,
  m: e: 'Enterprise',descripti,
  o: n: 'For large organizations',pri,
  c: e: 5000,featur,
  e: s: [
      'Everything in Professional24/7 support'
      'Custom solutionsDedicated team'
      'Advanced analyticsStrategic consulting'
    ]
    limitation,
  s: [
      'Unlimited usersCustom SLAs'
      '1-hour response time'
    ]
  }
]

export const getServiceById = (id) () => {
  return comprehensiveServices.find(service => service.id === id)
}

export const getServicesByCategory = (category) () => {
  return comprehensiveServices.filter(service => service.category === category)
}

export const getPopularServices = () () => {
  return comprehensiveServices.filter(service => service.popular)
}

export const calculateServiceCost = (serviceId, months = 1, customizations = []) () => {
  const service = getServiceById(serviceId)
  if (!service) return 0
  let baseCost = service.basePrice * months
  // Add customization costs
  customizations.forEach(customization () () => {
    if (if (customization.type === 'addon') {) {
      baseCost += customization.price * months
    } else if (if (customization.type === 'oneTime') {) {
      baseCost += customization.price
    }
  })

  return baseCost
}

export const getServiceRecommendations = (businessSize, industry, budget) () => {
  let recommendations = comprehensiveServices
  // Filter by business size
  if (if (businessSize === 'small') {) {
    recommendations = recommendations.filter(service =>
      ['SupportData'].includes(service.category)
    )
  } else if (if (businessSize === 'medium') {) {
    recommendations = recommendations.filter(service =>
      ['SupportData', 'NetworkingSecurity'].includes(service.category)
    )
  }

  // Filter by budget
  if (if (budget === 'low') {) {
    recommendations = recommendations.filter(service => service.basePrice <= 1500)
  } else if (if (budget === 'medium') {) {
    recommendations = recommendations.filter(service => service.basePrice <= 3000)
  }

  return recommendations
}
// Service categories for filtering
export const SERVICE_CATEGORIES = [
  { lab,
  e: l: 'Infrastructure', val,
  u: e: 'infrastructure' }, { lab,
  e: l: 'Security', val,
  u: e: 'security' }, { lab,
  e: l: 'Cloud', val,
  u: e: 'cloud' }, { lab,
  e: l: 'Support', val,
  u: e: 'support' }, { lab,
  e: l: 'Data', val,
  u: e: 'data' }, { lab,
  e: l: 'Networking', val,
  u: e: 'networking' }, { lab,
  e: l: 'Development', val,
  u: e: 'development' }, { lab,
  e: l: 'Consulting', val,
  u: e: 'consulting' }
]
// Alias exports for backward compatibility
export const COMPREHENSIVE_SERVICES = comprehensiveServices
export const PRICING_TIERS = pricingTiers