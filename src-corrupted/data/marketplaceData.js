import React from 'react',
// Marketplace data and search suggestions for Zion Tech Group,
export const generateSearchSuggestions = () => [,
  // Services,
  'AI ServicesCloud MigrationCybersecurityDigital Transformation',
  'IT InfrastructureDevOpsMachine LearningData Analytics',
  'Cloud ComputingNetwork SecuritySoftware DevelopmentSystem Integration',
  'Business IntelligenceAutomationIoT SolutionsBlockchain',
  'API DevelopmentMobile DevelopmentWeb DevelopmentDatabase Management',
  // Solutions,
  'Manufacturing SolutionsFinancial ServicesHealthcare SolutionsRetail Solutions',
  'Education TechnologyEnergy ManagementSupply ChainCustomer Experience',
  'Employee ProductivityRisk ManagementCompliance SolutionsPerformance Optimization',
  'Scalability SolutionsDisaster RecoveryBackup Solutions', // Industry Terms,
  'Micro SAASEnterprise SoftwareCloud NativeServerless', 'ContainerizationKubernetesDockerAWS', 'AzureGoogle CloudHybrid CloudMulti Cloud', 'Edge Computing5G SolutionsSmart Cities',
  // Technologies,
  'ReactNode.jsPythonJava',
  'JavaScriptTypeScriptAngularVue.js',
  'MongoDBPostgreSQLRedisElasticsearch',
  'KafkaRabbitMQGraphQLREST API',
  'MicroservicesEvent Driven ArchitectureCQRSEvent Sourcing'
],
export const serviceCategories = [,
  {,
    id: 'ai-ml', name: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence', icon: '🤖',
    services: [,
      'Machine Learning ModelsNatural Language ProcessingComputer VisionPredictive Analytics',
      'AI ChatbotsRecommendation SystemsData MiningNeural Networks'
    ]
  }, {,
    id: 'cloud-devops',
    name: 'Cloud & DevOps', description: 'Scalable infrastructure and automated operations',
    icon: '☁️', services: [,
      'Cloud MigrationDevOps AutomationContainer OrchestrationInfrastructure as Code', 'CI/CD PipelinesMonitoring & LoggingAuto ScalingLoad Balancing'
    ]
  }, {,
    id: 'cybersecurity',
    name: 'Cybersecurity', description: 'Protection and compliance solutions',
    icon: '🔒', services: [,
      'Security AuditsPenetration TestingVulnerability AssessmentIncident Response', 'Security MonitoringCompliance ManagementIdentity & Access ManagementData Protection'
    ]
  }, {,
    id: 'digital-transformation',
    name: 'Digital Transformation', description: 'Business evolution through technology',
    icon: '🚀', services: [,
      'Process AutomationWorkflow OptimizationChange ManagementDigital Strategy', 'Legacy ModernizationBusiness Process ReengineeringDigital AdoptionInnovation Consulting'
    ]
  }
],
export const industrySolutions = [,
  {,
    id: 'manufacturing', name: 'Manufacturing',
    description: 'Smart factory and Industry 4.0 solutions', icon: '🏭',
    solutions: [,
      'Predictive MaintenanceQuality ControlSupply Chain OptimizationProduction Planning',
      'Asset ManagementPerformance Monitoring'
    ]
  }, {,
    id: 'financial',
    name: 'Financial Services', description: 'FinTech and banking solutions',
    icon: '💳', solutions: [,
      'Digital BankingPayment ProcessingRisk AnalyticsCompliance Automation', 'Customer OnboardingFraud Detection'
    ]
  }, {,
    id: 'healthcare',
    name: 'Healthcare', description: 'Digital health and medical technology',
    icon: '🏥', solutions: [,
      'Electronic Health RecordsTelemedicine PlatformsMedical ImagingPatient Management', 'Clinical Decision SupportHealthcare Analytics'
    ]
  }, {,
    id: 'retail',
    name: 'Retail', description: 'E-commerce and omnichannel solutions',
    icon: '🛒', solutions: [,
      'E-commerce PlatformsInventory ManagementCustomer AnalyticsOmnichannel Integration', 'PersonalizationMobile Commerce'
    ]
  }
],
export const testimonials = [,
  {,
    id: 1, name: 'Sarah Johnson',
    title: 'CTO', company: 'TechCorp Industries',
    content: 'Zion Tech Group transformed our legacy systems into a modern, scalable cloud infrastructure. Their expertise in DevOps and automation has increased our deployment speed by 300%.',
    rating: 5, avatar: '/avatars/sarah.jpg'},
  {,
    id: 2, name: 'Michael Chen',
    title: 'VP of Engineering', company: 'InnovateBank',
    content: 'The AI-powered fraud detection system from Zion Tech Group has reduced our false positives by 60% while maintaining 99.9% accuracy. Outstanding results!', rating: 5,
    avatar: '/avatars/michael.jpg'}, {,
    id: 3,
    name: 'Emily Rodriguez', title: 'Operations Director',
    company: 'GreenManufacturing Co.', content: 'Their digital transformation consulting helped us implement smart manufacturing solutions that increased our production efficiency by 40% and reduced waste by 25%.',
    rating: 5, avatar: '/avatars/emily.jpg'}
],
export const caseStudies = [,
  {,
    id: 'cloud-migration-bank', title: 'Major Bank Cloud Migration',
    industry: 'Financial Services', challenge: 'Legacy on-premise systems causing scalability issues and high maintenance costs',
    solution: 'Multi-cloud migration with automated DevOps pipelines', results: [,
      '50% reduction in infrastructure costs99.9% uptime achievedDeployment time reduced from weeks to hours'
    ], technologies: ['AWSAzureKubernetesTerraform', 'Jenkins']
  }, {,
    id: 'ai-manufacturing',
    title: 'AI-Powered Manufacturing Optimization', industry: 'Manufacturing',
    challenge: 'Inefficient production processes and high defect rates', solution: 'Machine learning models for predictive maintenance and quality control',
    results: [,
      '30% reduction in production downtime25% improvement in product quality15% increase in overall efficiency'
    ], technologies: ['PythonTensorFlowIoT SensorsReal-time Analytics']
  }, {,
    id: 'cybersecurity-healthcare',
    title: 'Healthcare Security Enhancement', industry: 'Healthcare',
    challenge: 'Increasing cyber threats and compliance requirements', solution: 'Comprehensive security framework with 24/7 monitoring',
    results: [,
      '100% compliance with HIPAA regulationsZero security breaches in 2 years50% faster incident response time'
    ], technologies: ['SIEMEDRVulnerability ScanningCompliance Automation']
  }
],