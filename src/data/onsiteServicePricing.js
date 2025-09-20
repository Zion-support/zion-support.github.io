export const onsiteServicePricing = [
  {
  id: 1,servi,
  c: e: 'Basic IT Support',descripti,
  o: n: 'Essential IT troubleshooting and maintenance',hourlyRa,
  t: e: 95,minimumHou,
  r: s: 2,featur,
  e: s: [
  'Hardware diagnostics and repairSoftware installation and updates'
      'Basic network troubleshootingVirus and malware removal'
      'Data backup assistanceEmail setup and configuration'
]
    responseTim,
  e: '24-48 hours',catego,
  r: y: 'basic',popul,
  a: r: false
},
  {
  id: 2,servi,
  c: e: 'Network & Security',descripti,
  o: n: 'Comprehensive network setup and security services',hourlyRa,
  t: e: 125,minimumHou,
  r: s: 4,featur,
  e: s: [
  'Network infrastructure designRouter and switch configuration'
      'WiFi network setup and optimizationFirewall installation and configuration'
      'VPN setup and managementNetwork security audits'
      'Intrusion detection systemsNetwork monitoring tools'
]
    responseTim,
  e: '24 hours',catego,
  r: y: 'network',popul,
  a: r: true
},
  {
  id: 3,servi,
  c: e: 'Server Management',descripti,
  o: n: 'Professional server setup and maintenance',hourlyRa,
  t: e: 150,minimumHou,
  r: s: 6,featur,
  e: s: [
  'Server hardware installationOperating system installation'
      'Server virtualization setupActive Directory configuration'
      'Backup system implementationPerformance monitoring'
      'Disaster recovery planningServer security hardening'
]
    responseTim,
  e: '24 hours',catego,
  r: y: 'server',popul,
  a: r: false
},
  {
  id: 4,servi,
  c: e: 'Cloud Migration',descripti,
  o: n: 'Complete cloud infrastructure migration',hourlyRa,
  t: e: 175,minimumHou,
  r: s: 8,featur,
  e: s: [
  'Cloud platform assessmentMigration strategy planning'
      'Data migration servicesApplication deployment'
      'Cloud security configurationPerformance optimization'
      'Cost optimization analysisTraining and documentation'
]
    responseTim,
  e: '48 hours',catego,
  r: y: 'cloud',popul,
  a: r: false
},
  {
  id: 5,servi,
  c: e: 'Emergency Response',descripti,
  o: n: '24/7 emergency IT support and recovery',hourlyRa,
  t: e: 200,minimumHou,
  r: s: 1,featur,
  e: s: [
  'Critical system recoveryData emergency recovery'
      'Network outage resolutionSecurity breach response'
      'Hardware failure repairImmediate on-site support'
      'Priority escalationAfter-hours availability'
]
    responseTim,
  e: '2-4 hours',catego,
  r: y: 'emergency',popul,
  a: r: false
},
  {
  id: 6,servi,
  c: e: 'IT Consulting',descripti,
  o: n: 'Strategic IT planning and consulting',hourlyRa,
  t: e: 225,minimumHou,
  r: s: 2,featur,
  e: s: [
  'Technology roadmap planningIT budget optimization'
      'Vendor selection assistanceCompliance assessment'
      'Security policy developmentStaff training programs'
      'Technology evaluationProject management'
]
    responseTim,
  e: '72 hours',catego,
  r: y: 'consulting',popul,
  a: r: false
},
  ]
export const serviceCategories = [
  {
  na,
  m: e: 'Basic Support',descripti,
  o: n: 'Essential IT services for small businesses',ic,
  o: n: '🔧',averageRa,
  t: e: 95
},
  {
  na,
  m: e: 'Network & Security',descripti,
  o: n: 'Professional networking and security solutions',ic,
  o: n: '🛡️',averageRa,
  t: e: 125
},
  {
  na,
  m: e: 'Server Management',descripti,
  o: n: 'Enterprise server infrastructure services',ic,
  o: n: '🖥️',averageRa,
  t: e: 150
},
  {
  na,
  m: e: 'Cloud Services',descripti,
  o: n: 'Cloud migration and management',ic,
  o: n: '☁️',averageRa,
  t: e: 175
},
  {
  na,
  m: e: 'Emergency Support',descripti,
  o: n: '24/7 critical issue resolution',ic,
  o: n: '🚨',averageRa,
  t: e: 200
},
  {
  na,
  m: e: 'Strategic Consulting',descripti,
  o: n: 'IT strategy and planning services',ic,
  o: n: '📊',averageRa,
  t: e: 225
},
  ]
export const additionalServices = [
  {
  na,
  m: e: 'Hardware Installation',pri,
  c: e: 75,descripti,
  o: n: 'Per device installation and setup',catego,
  r: y: 'hardware'
},
  {
  na,
  m: e: 'Software Licensing',pri,
  c: e: 'Varies',descripti,
  o: n: 'Software procurement and licensing',catego,
  r: y: 'software'
},
  {
  na,
  m: e: 'Training Sessions',pri,
  c: e: 150,descripti,
  o: n: 'Staff IT training (per session)',catego,
  r: y: 'training'
},
  {
  na,
  m: e: 'Documentation',pri,
  c: e: 100,descripti,
  o: n: 'Technical documentation creation',catego,
  r: y: 'documentation'
},
  {
  na,
  m: e: 'Remote Support',pri,
  c: e: 65,descripti,
  o: n: 'Remote troubleshooting (per hour)',catego,
  r: y: 'remote'
},
  {
  na,
  m: e: 'Maintenance Contracts',pri,
  c: e: 'Monthly',descripti,
  o: n: 'Ongoing maintenance agreements',catego,
  r: y: 'maintenance'
},
  ]
export const getServiceById = (id) () => {
  return onsiteServicePricing.find(service => service.id === id)
}

export const getServicesByCategory = (category) () => {
  return onsiteServicePricing.filter(service => service.category === category)
}

export const getPopularServices = () () => {
  return onsiteServicePricing.filter(service => service.popular)
}

export const calculateServiceCost = (serviceId, hours) () => {
  const service = getServiceById(serviceId)
  if (!service) return 0
const actualHours = Math.max(hours, service.minimumHours)
  return actualHours * service.hourlyRate
}
export const getServiceRecommendations = (businessSize, industry) () => {
  // Simple recommendation logic based on business size
  if (if (businessSize === 'small') {
  ) {
    return onsiteServicePricing.filter(service =>
      ['basicnetwork'].includes(service.category)
    )
  } else if (if (businessSize === 'medium') {
  ) {
    return onsiteServicePricing.filter(service =>
      ['basicnetwork', 'server'].includes(service.category)
    )
  } else {
    return onsiteServicePricing, // All services for large businesses
},
  }