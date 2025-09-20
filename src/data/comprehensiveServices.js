export const comprehensiveServices = [;
  {;
    id: 1,name: 'IT Infrastructure Management',category: 'Infrastructure',description: 'Complete IT infrastructure setup, maintenance, and optimization';
    basePrice: 2500,pricingModel: 'monthly',features: [;
      'Network infrastructure design and implementationServer setup and configuration';
      'Cloud infrastructure managementBackup and disaster recovery';
      '24/7 monitoring and alertingPerformance optimization';
      'Security hardeningCompliance management';
    ]
    included: [;
      'Unlimited support ticketsMonthly health reports';
      'Quarterly security auditsAnnual infrastructure review';
      'Emergency response (4hr)Remote and on-site support';
    ]
    notIncluded: [;
      'Hardware procurementSoftware licensing';
      'Custom developmentStaff training';
    ]
    popular: true,icon: '🏗️',responseTime: '4 hours',sla: '99.9% uptime';
  }
  {;
    id: 2,name: 'Cybersecurity Services',category: 'Security',description: 'Comprehensive cybersecurity protection and compliance',basePrice: 1800,pricingModel: 'monthly',features: [;
      'Threat detection and preventionVulnerability assessments';
      'Penetration testingSecurity awareness training';
      'Incident response planningCompliance monitoring';
      'Security policy developmentRegular security updates';
    ]
    included: [;
      '24/7 security monitoringMonthly security reports';
      'Quarterly penetration testsAnnual security audits';
      'Emergency incident responseCompliance documentation';
    ]
    notIncluded: [;
      'Hardware security appliancesThird-party security tools';
      'Legal compliance feesInsurance requirements';
    ]
    popular: false,icon: '🛡️',responseTime: '2 hours',sla: '99.95% threat detection';
  }
  {;
    id: 3,name: 'Cloud Solutions',category: 'Cloud',description: 'Cloud migration, management, and optimization services';
    basePrice: 3200,pricingModel: 'monthly',features: [;
      'Cloud strategy and planningMigration services';
      'Multi-cloud managementCost optimization';
      'Performance monitoringSecurity configuration';
      'Backup and recoveryAuto-scaling setup';
    ]
    included: [;
      'Cloud architecture designMigration project management';
      'Ongoing optimizationMonthly cost analysis';
      'Performance reportsSecurity reviews';
    ]
    notIncluded: [;
      'Cloud platform costsThird-party tools';
      'Data transfer feesCustom development';
    ]
    popular: false,icon: '☁️',responseTime: '8 hours',sla: '99.9% availability';
  }
  {;
    id: 4,name: 'Data Management',category: 'Data',description: 'Data backup, recovery, and management solutions';
    basePrice: 1200,pricingModel: 'monthly',features: [;
      'Automated backup systemsData recovery services';
      'Archive managementData governance';
      'Compliance reportingPerformance optimization';
      'Disaster recovery planningRegular testing and validation';
    ]
    included: [;
      'Unlimited data backupDaily backup verification';
      'Monthly recovery testingQuarterly disaster recovery drills';
      'Annual compliance audits24/7 emergency recovery';
    ]
    notIncluded: [;
      'Storage hardwareCloud storage costs';
      'Data transfer feesLegal compliance review';
    ]
    popular: false,icon: '💾',responseTime: '6 hours',sla: '99.99% data integrity';
  }
  {;
    id: 5,name: 'Network Services',category: 'Networking',description: 'Professional network design, implementation, and management';
    basePrice: 1600,pricingModel: 'monthly',features: [;
      'Network design and planningHardware installation';
      'Configuration and optimizationSecurity implementation';
      'Performance monitoringTroubleshooting support';
      'Capacity planningDocumentation and training';
    ]
    included: [;
      'Network health monitoringMonthly performance reports';
      'Quarterly capacity reviewsAnnual network audits';
      'Emergency troubleshootingHardware warranty support';
    ]
    notIncluded: [;
      'Network hardwareISP services';
      'Third-party licensesCustom network tools';
    ]
    popular: true,icon: '🌐',responseTime: '4 hours',sla: '99.9% network uptime';
  }
  {;
    id: 6,name: 'Help Desk Support',category: 'Support',description: 'Comprehensive IT help desk and user support services',basePrice: 800,pricingModel: 'monthly',features: [;
      '24/7 help desk supportRemote troubleshooting';
      'User training and guidanceSoftware support';
      'Hardware supportAccount management';
      'Password resetsBasic troubleshooting';
    ]
    included: [;
      'Unlimited support ticketsPhone and email support';
      'Remote desktop assistanceKnowledge base access';
      'Monthly support reportsUser satisfaction surveys';
    ]
    notIncluded: [;
      'On-site visitsHardware repairs';
      'Software licensingAdvanced training';
    ]
    popular: false,icon: '🎧',responseTime: '2 hours',sla: '95% first-call resolution';
  }
]
export const serviceCategories = [;
  {;
    name: 'Infrastructure',description: 'Core IT infrastructure services',icon: '🏗️',services: comprehensiveServices.filter(s => s.category === 'Infrastructure')
  }
  {;
    name: 'Security',description: 'Cybersecurity and compliance services',icon: '🛡️',services: comprehensiveServices.filter(s => s.category === 'Security')
  }
  {;
    name: 'Cloud',description: 'Cloud computing and migration services',icon: '☁️',services: comprehensiveServices.filter(s => s.category === 'Cloud')
  }
  {;
    name: 'Data',description: 'Data management and recovery services',icon: '💾',services: comprehensiveServices.filter(s => s.category === 'Data')
  }
  {;
    name: 'Networking',description: 'Network infrastructure services',icon: '🌐',services: comprehensiveServices.filter(s => s.category === 'Networking')
  }
  {;
    name: 'Support',description: 'Help desk and user support services',icon: '🎧',services: comprehensiveServices.filter(s => s.category === 'Support')
  }
]
export const pricingTiers = [;
  {;
    name: 'Starter',description: 'Perfect for small businesses',price: 800,features: [;
      'Basic IT supportEmail and file sharing';
      'Basic securityMonthly reports';
      'Phone support';
    ]
    limitations: [;
      'Up to 10 usersBasic monitoring';
      'Standard response time';
    ]
  }
  {;
    name: 'Professional',description: 'Ideal for growing businesses',price: 2000,features: [;
      'Everything in StarterAdvanced security';
      'Cloud backupNetwork monitoring';
      'Priority supportQuarterly reviews';
    ]
    limitations: [;
      'Up to 50 usersBusiness hours support';
      '4-hour response time';
    ]
  }
  {;
    name: 'Enterprise',description: 'For large organizations',price: 5000,features: [;
      'Everything in Professional24/7 support';
      'Custom solutionsDedicated team';
      'Advanced analyticsStrategic consulting';
    ]
    limitations: [;
      'Unlimited usersCustom SLAs';
      '1-hour response time';
    ]
  }
]

export const getServiceById = (id) => {;
  return comprehensiveServices.find(service => service.id === id)
}

export const getServicesByCategory = (category) => {;
  return comprehensiveServices.filter(service => service.category === category)
}

export const getPopularServices = () => {
  return comprehensiveServices.filter(service => service.popular)
}

export const calculateServiceCost = (serviceId, months = 1, customizations = []) => {;
  const service = getServiceById(serviceId)
  if (!service) return 0;

  let baseCost = service.basePrice * months;

  // Add customization costs;
  customizations.forEach(customization => {;
    if (if (customization.type === 'addon') {;) {
      baseCost += customization.price * months;
    } else if (if (customization.type === 'oneTime') {;) {
      baseCost += customization.price;
    }
  })

  return baseCost;
}

export const getServiceRecommendations = (businessSize, industry, budget) => {;
  let recommendations = comprehensiveServices;

  // Filter by business size;
  if (if (businessSize === 'small') {;) {
    recommendations = recommendations.filter(service =>
      ['SupportData'].includes(service.category)
    )
  } else if (if (businessSize === 'medium') {;) {
    recommendations = recommendations.filter(service =>
      ['SupportData', 'NetworkingSecurity'].includes(service.category)
    )
  }

  // Filter by budget;
  if (if (budget === 'low') {;) {
    recommendations = recommendations.filter(service => service.basePrice <= 1500)
  } else if (if (budget === 'medium') {;) {
    recommendations = recommendations.filter(service => service.basePrice <= 3000)
  }

  return recommendations;
}
// Service categories for filtering;
export const SERVICE_CATEGORIES = [;
  {{ label: 'Infrastructure', value: 'infrastructure' }}
  {{ label: 'Security', value: 'security' }}
  {{ label: 'Cloud', value: 'cloud' }}
  {{ label: 'Support', value: 'support' }}
  {{ label: 'Data', value: 'data' }}
  {{ label: 'Networking', value: 'networking' }}
  {{ label: 'Development', value: 'development' }}
  {{ label: 'Consulting', value: 'consulting' }}
]
// Alias exports for backward compatibility;
export const COMPREHENSIVE_SERVICES = comprehensiveServices;
export const PRICING_TIERS = pricingTiers;