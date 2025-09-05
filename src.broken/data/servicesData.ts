<<<<<<< HEAD
import { ServiceCategory, ITService, AIService, MicroSAAS } from '@/types/services',

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions for business automation and insights',
    icon: '🤖',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    id: 'it-services',
    name: 'IT Infrastructure & Support',
    description: 'Comprehensive IT services for modern business operations',
    icon: '🖥️',
    color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    description: 'Specialized software-as-a-service tools for specific business needs',
    icon: '☁️',
    color: 'bg-gradient-to-r from-green-500 to-emerald-500'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Compliance',
    description: 'Advanced security solutions to protect your digital assets',
    icon: '🔒',
    color: 'bg-gradient-to-r from-red-500 to-orange-500'
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics & BI',
    description: 'Transform data into actionable business intelligence',
    icon: '📊',
    color: 'bg-gradient-to-r from-indigo-500 to-purple-500'
  },
  {
    id: 'cloud-solutions',
    name: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and development operations',
    icon: '☁️',
    color: 'bg-gradient-to-r from-sky-500 to-blue-500'
  }
],

export const AI_SERVICES: AIService[] = [
  {
    id: 'ai-customer-service',
    title: 'AI Customer Service Automation',
    description: 'Intelligent chatbot system with natural language processing for 24/7 customer support',
    category: 'AI & Machine Learning',
    provider: {
      id: 'zion-ai',
      name: 'Zion AI Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.8,
      reviewCount: 156,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['AICustomer ServiceAutomation']
    },
    pricing: {
      basic: {
        price: 299,
        currency: '$',
        period: 'month',
        features: ['Up to 1,000 conversations/monthBasic NLPEmail supportStandard templates']
      },
      professional: {
        price: 799,
        currency: '$',
        period: 'month',
        features: ['Up to 10,000 conversations/monthAdvanced NLPPhone supportCustom brandingAnalytics dashboard'],
        popular: true
      },
      enterprise: {
        price: 2499,
        currency: '$',
        period: 'month',
        features: ['Unlimited conversationsCustom AI trainingDedicated supportAPI accessWhite-label solution']
      }
=======

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {_id: 'ai-services', _name: 'AI & Machine Learning', _description: 'Cutting-edge artificial intelligence solutions for business automation and insights', _icon: '🤖', _color: 'bg-gradient-to-r from-purple-500 to-pink-500'},
  {_id: 'it-services', _name: 'IT Infrastructure & Support', _description: 'Comprehensive IT services for modern business operations', _icon: '🖥️', _color: 'bg-gradient-to-r from-blue-500 to-cyan-500'},
  {_id: 'micro-saas', _name: 'Micro SAAS Solutions', _description: 'Specialized software-as-a-service tools for specific business needs', _icon: '☁️', _color: 'bg-gradient-to-r from-green-500 to-emerald-500'},
  {_id: 'cybersecurity', _name: 'Cybersecurity & Compliance', _description: 'Advanced security solutions to protect your digital assets', _icon: '🔒', _color: 'bg-gradient-to-r from-red-500 to-orange-500'},
  {_id: 'data-analytics', _name: 'Data Analytics & BI', _description: 'Transform data into actionable business intelligence', _icon: '📊', _color: 'bg-gradient-to-r from-indigo-500 to-purple-500'},
  {_id: 'cloud-solutions', _name: 'Cloud & DevOps', _description: 'Scalable cloud infrastructure and development operations', _icon: '☁️', _color: 'bg-gradient-to-r from-sky-500 to-blue-500'}
];

export const AI_SERVICES: AIService[] = [
  {_id: 'ai-customer-service', _title: 'AI Customer Service Automation', _description: 'Intelligent chatbot system with natural language processing for 24/7 customer support', _category: 'AI & Machine Learning', _provider: {
      id: 'zion-ai', _name: 'Zion AI Solutions', _logo: 'https://ziontechgroup.com/assets/logo.png', _rating: 4.8, _reviewCount: 156, _location: 'Middletown, _DE', _verified: true, _specialties: ['AI', _'Customer Service', _'Automation']},
    pricing: {_basic: {
        price: 299, _currency: '$', _period: 'month', _features: ['Up to 1, _000 conversations/month', _'Basic NLP', _'Email support', _'Standard templates']},
      professional: {_price: 799, _currency: '$', _period: 'month', _features: ['Up to 10, _000 conversations/month', _'Advanced NLP', _'Phone support', _'Custom branding', _'Analytics dashboard'], _popular: true},
      enterprise: {_price: 2499, _currency: '$', _period: 'month', _features: ['Unlimited conversations', _'Custom AI training', _'Dedicated support', _'API access', _'White-label solution']}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    },
    features: ['Natural Language ProcessingMulti-language supportIntegration with CRM systemsSentiment analysisAutomated ticket routing'],
    benefits: ['24/7 customer supportReduced response timeCost savingsImproved customer satisfactionScalable solution'],
    useCases: ['E-commerce supportHelp desk automationLead qualificationFAQ handlingAppointment booking'],
    technologies: ['GPT-4BERTTensorFlowPythonReact'],
    deploymentTime: '2-4 weeks',
    support: ['Email supportPhone supportDocumentationTraining sessionsAPI documentation'],
    integrations: ['SalesforceHubSpotZendeskSlackMicrosoft Teams'],
    security: ['SOC 2 Type IIGDPR compliantEnd-to-end encryptionRegular security audits'],
    compliance: ['GDPRCCPAHIPAASOC 2'],
    images: ['https://images.unsplash.com/photo-1557555187-807fa78b1c7e?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-customer-service',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-customer-service',
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['AICustomer ServiceAutomationNLPChatbot'],
    aiScore: 95,
    marketTrend: 'rising',
    industryFocus: ['E-commerceHealthcareFinanceEducation'],
    aiModel: 'GPT-4 + Custom BERT',
    accuracy: 94.2,
    trainingData: '10M+ customer interactions',
    customization: true,
    apiAccess: true,
    realTimeProcessing: true
  },
<<<<<<< HEAD
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation Suite',
    description: 'Advanced AI-powered content creation for blogs, marketing materials, and social media',
    category: 'AI & Machine Learning',
    provider: {
      id: 'zion-content',
      name: 'Zion Content AI',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.7,
      reviewCount: 89,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['Content CreationAI WritingMarketing']
    },
    pricing: {
      basic: {
        price: 199,
        currency: '$',
        period: 'month',
        features: ['Up to 50 articles/monthBasic templatesSEO optimizationEmail support']
      },
      professional: {
        price: 499,
        currency: '$',
        period: 'month',
        features: ['Up to 200 articles/monthCustom templatesAdvanced SEOPriority supportAnalytics'],
        popular: true
      },
      enterprise: {
        price: 1499,
        currency: '$',
        period: 'month',
        features: ['Unlimited contentCustom AI trainingDedicated writerAPI accessWhite-label']
      }
=======
  {_id: 'ai-content-generation', _title: 'AI Content Generation Suite', _description: 'Advanced AI-powered content creation for blogs, _marketing materials, _and social media', _category: 'AI & Machine Learning', _provider: {
      id: 'zion-content', _name: 'Zion Content AI', _logo: 'https://ziontechgroup.com/assets/logo.png', _rating: 4.7, _reviewCount: 89, _location: 'Middletown, _DE', _verified: true, _specialties: ['Content Creation', _'AI Writing', _'Marketing']},
    pricing: {_basic: {
        price: 199, _currency: '$', _period: 'month', _features: ['Up to 50 articles/month', _'Basic templates', _'SEO optimization', _'Email support']},
      professional: {_price: 499, _currency: '$', _period: 'month', _features: ['Up to 200 articles/month', _'Custom templates', _'Advanced SEO', _'Priority support', _'Analytics'], _popular: true},
      enterprise: {_price: 1499, _currency: '$', _period: 'month', _features: ['Unlimited content', _'Custom AI training', _'Dedicated writer', _'API access', _'White-label']}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    },
    features: ['Multi-format content generationSEO optimizationBrand voice customizationPlagiarism detectionContent scheduling'],
    benefits: ['10x faster content creationImproved SEO rankingsConsistent brand voiceCost-effective contentScalable production'],
    useCases: ['Blog writingSocial media postsEmail campaignsProduct descriptionsTechnical documentation'],
    technologies: ['GPT-4ClaudeBERTPythonNode.js'],
    deploymentTime: '1-2 weeks',
    support: ['Email supportChat supportContent strategy consultationTraining sessions'],
    integrations: ['WordPressHubSpotMailchimpBufferHootsuite'],
    security: ['SOC 2 Type IIGDPR compliantContent encryptionAccess controls'],
    compliance: ['GDPRCCPACopyright compliance'],
    images: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-content',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-content',
    createdAt: '2024-02-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['AIContent CreationWritingSEOMarketing'],
    aiScore: 92,
    marketTrend: 'rising',
    industryFocus: ['MarketingPublishingE-commerceEducation'],
    aiModel: 'GPT-4 + Claude + Custom Models',
    accuracy: 91.8,
    trainingData: '5M+ articles and content pieces',
    customization: true,
    apiAccess: true,
    realTimeProcessing: true
  },
<<<<<<< HEAD
  {
    id: 'ai-data-analytics',
    title: 'AI-Powered Business Intelligence',
    description: 'Intelligent data analysis and predictive insights for data-driven decision making',
    category: 'AI & Machine Learning',
    provider: {
      id: 'zion-analytics',
      name: 'Zion Analytics',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.9,
      reviewCount: 234,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['Data AnalyticsBusiness IntelligencePredictive Analytics']
    },
    pricing: {
      basic: {
        price: 399,
        currency: '$',
        period: 'month',
        features: ['Up to 10GB dataBasic dashboardsStandard reportsEmail support']
      },
      professional: {
        price: 999,
        currency: '$',
        period: 'month',
        features: ['Up to 100GB dataAdvanced dashboardsPredictive analyticsPriority supportCustom reports'],
        popular: true
      },
      enterprise: {
        price: 2999,
        currency: '$',
        period: 'month',
        features: ['Unlimited dataCustom AI modelsDedicated analystAPI accessWhite-label solution']
      }
=======
  {_id: 'ai-data-analytics', _title: 'AI-Powered Business Intelligence', _description: 'Intelligent data analysis and predictive insights for data-driven decision making', _category: 'AI & Machine Learning', _provider: {
      id: 'zion-analytics', _name: 'Zion Analytics', _logo: 'https://ziontechgroup.com/assets/logo.png', _rating: 4.9, _reviewCount: 234, _location: 'Middletown, _DE', _verified: true, _specialties: ['Data Analytics', _'Business Intelligence', _'Predictive Analytics']},
    pricing: {_basic: {
        price: 399, _currency: '$', _period: 'month', _features: ['Up to 10GB data', _'Basic dashboards', _'Standard reports', _'Email support']},
      professional: {_price: 999, _currency: '$', _period: 'month', _features: ['Up to 100GB data', _'Advanced dashboards', _'Predictive analytics', _'Priority support', _'Custom reports'], _popular: true},
      enterprise: {_price: 2999, _currency: '$', _period: 'month', _features: ['Unlimited data', _'Custom AI models', _'Dedicated analyst', _'API access', _'White-label solution']}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    },
    features: ['Predictive analyticsNatural language queriesAutomated insightsReal-time dashboardsCustom ML models'],
    benefits: ['Faster decision makingPredictive insightsAutomated reportingCost reductionCompetitive advantage'],
    useCases: ['Sales forecastingCustomer segmentationRisk assessmentPerformance optimizationMarket analysis'],
    technologies: ['TensorFlowPyTorchScikit-learnPythonReact'],
    deploymentTime: '3-6 weeks',
    support: ['Email supportPhone supportData consultationTraining sessionsCustom development'],
    integrations: ['SalesforceHubSpotGoogle AnalyticsMySQLPostgreSQL'],
    security: ['SOC 2 Type IIGDPR compliantData encryptionAccess controlsAudit logs'],
    compliance: ['GDPRCCPASOC 2HIPAA'],
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-analytics',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-analytics',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['AIAnalyticsBusiness IntelligencePredictive AnalyticsData Science'],
    aiScore: 96,
    marketTrend: 'rising',
    industryFocus: ['FinanceHealthcareRetailManufacturing'],
    aiModel: 'Custom ML Models + TensorFlow',
    accuracy: 93.5,
    trainingData: '100M+ data points across industries',
    customization: true,
    apiAccess: true,
    realTimeProcessing: true
  }
],

export const IT_SERVICES: ITService[] = [
<<<<<<< HEAD
  {
    id: 'onsite-it-support',
    title: 'Onsite IT Support & Infrastructure',
    description: 'Comprehensive onsite IT services including network setup, hardware maintenance, and technical support',
    category: 'IT Infrastructure & Support',
    provider: {
      id: 'zion-it',
      name: 'Zion IT Services',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.8,
      reviewCount: 178,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['IT SupportInfrastructureNetwork Security']
    },
    pricing: {
      basic: {
        price: 150,
        currency: '$',
        period: 'hour',
        features: ['Basic troubleshootingHardware installationSoftware setupEmail support']
      },
      professional: {
        price: 125,
        currency: '$',
        period: 'hour',
        features: ['Advanced troubleshootingNetwork configurationSecurity setupPhone supportRemote assistance'],
        popular: true
      },
      enterprise: {
        price: 100,
        currency: '$',
        period: 'hour',
        features: ['Full IT management24/7 monitoringDedicated technicianEmergency responseSLA guarantee']
      }
=======
  {_id: 'onsite-it-support', _title: 'Onsite IT Support & Infrastructure', _description: 'Comprehensive onsite IT services including network setup, _hardware maintenance, _and technical support', _category: 'IT Infrastructure & Support', _provider: {
      id: 'zion-it', _name: 'Zion IT Services', _logo: 'https://ziontechgroup.com/assets/logo.png', _rating: 4.8, _reviewCount: 178, _location: 'Middletown, _DE', _verified: true, _specialties: ['IT Support', _'Infrastructure', _'Network Security']},
    pricing: {_basic: {
        price: 150, _currency: '$', _period: 'hour', _features: ['Basic troubleshooting', _'Hardware installation', _'Software setup', _'Email support']},
      professional: {_price: 125, _currency: '$', _period: 'hour', _features: ['Advanced troubleshooting', _'Network configuration', _'Security setup', _'Phone support', _'Remote assistance'], _popular: true},
      enterprise: {_price: 100, _currency: '$', _period: 'hour', _features: ['Full IT management', _'24/7 monitoring', _'Dedicated technician', _'Emergency response', _'SLA guarantee']}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    },
    features: ['Network setup & configurationHardware installation & maintenanceSoftware deploymentSecurity implementationBackup solutions'],
    benefits: ['Reduced downtimeImproved securityCost-effective IT managementExpert technical supportScalable solutions'],
    useCases: ['Office setupNetwork expansionSecurity upgradesHardware upgradesDisaster recovery'],
    technologies: ['CiscoMicrosoftVMwareLinuxWindows Server'],
    deploymentTime: '1-3 days',
    support: ['Onsite supportRemote assistance24/7 emergency supportPreventive maintenanceTraining sessions'],
    integrations: ['Active DirectoryOffice 365Google WorkspaceVPN solutionsBackup systems'],
    security: ['Firewall configurationVPN setupAccess controlsSecurity auditsCompliance monitoring'],
    compliance: ['SOC 2HIPAAPCI DSSGDPR'],
    images: ['https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/onsite-it',
    documentationUrl: 'https://docs.ziontechgroup.com/onsite-it',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['IT SupportInfrastructureNetworkHardwareSecurity'],
    aiScore: 85,
    marketTrend: 'stable',
    industryFocus: ['HealthcareFinanceEducationManufacturing'],
    serviceType: 'onsite',
    responseTime: '4 hours',
    coverage: ['DelawareMarylandPennsylvaniaNew Jersey'],
    emergencySupport: true,
    sla: '99.9% uptime guarantee'
  },
<<<<<<< HEAD
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Optimization',
    description: 'Seamless migration to cloud platforms with optimization for performance and cost efficiency',
    category: 'IT Infrastructure & Support',
    provider: {
      id: 'zion-cloud',
      name: 'Zion Cloud Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.9,
      reviewCount: 145,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['Cloud MigrationAWSAzureGoogle Cloud']
    },
    pricing: {
      basic: {
        price: 5000,
        currency: '$',
        period: 'project',
        features: ['Basic migration planningSingle application migrationBasic testingEmail support']
      },
      professional: {
        price: 15000,
        currency: '$',
        period: 'project',
        features: ['Comprehensive migrationMultiple applicationsPerformance optimizationPhone supportTraining'],
        popular: true
      },
      enterprise: {
        price: 50000,
        currency: '$',
        period: 'project',
        features: ['Full enterprise migrationCustom optimizationDedicated team24/7 supportSLA guarantee']
      }
=======
  {_id: 'cloud-migration', _title: 'Cloud Migration & Optimization', _description: 'Seamless migration to cloud platforms with optimization for performance and cost efficiency', _category: 'IT Infrastructure & Support', _provider: {
      id: 'zion-cloud', _name: 'Zion Cloud Solutions', _logo: 'https://ziontechgroup.com/assets/logo.png', _rating: 4.9, _reviewCount: 145, _location: 'Middletown, _DE', _verified: true, _specialties: ['Cloud Migration', _'AWS', _'Azure', _'Google Cloud']},
    pricing: {_basic: {
        price: 5000, _currency: '$', _period: 'project', _features: ['Basic migration planning', _'Single application migration', _'Basic testing', _'Email support']},
      professional: {_price: 15000, _currency: '$', _period: 'project', _features: ['Comprehensive migration', _'Multiple applications', _'Performance optimization', _'Phone support', _'Training'], _popular: true},
      enterprise: {_price: 50000, _currency: '$', _period: 'project', _features: ['Full enterprise migration', _'Custom optimization', _'Dedicated team', _'24/7 support', _'SLA guarantee']}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    },
    features: ['Migration planning & strategyApplication assessmentPerformance optimizationCost optimizationSecurity implementation'],
    benefits: ['Reduced infrastructure costsImproved scalabilityEnhanced securityBetter performanceDisaster recovery'],
    useCases: ['Legacy system migrationData center consolidationApplication modernizationDisaster recovery setupCost optimization'],
    technologies: ['AWSAzureGoogle CloudDockerKubernetes'],
    deploymentTime: '4-12 weeks',
    support: ['Project managementTechnical supportTraining sessionsPost-migration supportPerformance monitoring'],
    integrations: ['Active DirectoryOffice 365SAPOracleCustom applications'],
    security: ['Identity managementEncryptionCompliance monitoringSecurity auditsAccess controls'],
    compliance: ['SOC 2HIPAAPCI DSSGDPRFedRAMP'],
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/cloud-migration',
    documentationUrl: 'https://docs.ziontechgroup.com/cloud-migration',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['Cloud MigrationAWSAzureOptimizationDevOps'],
    aiScore: 88,
    marketTrend: 'rising',
    industryFocus: ['FinanceHealthcareManufacturingRetail'],
    serviceType: 'hybrid',
    responseTime: '24 hours',
    coverage: ['Global'],
    emergencySupport: true,
    sla: '99.95% uptime guarantee'
  }
],

export const MICRO_SAAS_SERVICES: MicroSAAS[] = [
<<<<<<< HEAD
  {
    id: 'project-management-saas',
    title: 'Smart Project Management Platform',
    description: 'Intelligent project management with AI-powered task automation, team collaboration, and progress tracking',
    category: 'Micro SAAS Solutions',
    provider: {
      id: 'zion-projects',
      name: 'Zion Project Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.7,
      reviewCount: 267,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['Project ManagementTeam CollaborationAI Automation']
    },
    pricing: {
      basic: {
        price: 29,
        currency: '$',
        period: 'month',
        features: ['Up to 10 usersBasic project templatesTask managementEmail support']
      },
      professional: {
        price: 79,
        currency: '$',
        period: 'month',
        features: ['Up to 50 usersAdvanced templatesAI automationPriority supportAnalytics'],
        popular: true
      },
      enterprise: {
        price: 199,
        currency: '$',
        period: 'month',
        features: ['Unlimited usersCustom automationDedicated supportAPI accessWhite-label']
      }
=======
  {_id: 'project-management-saas', _title: 'Smart Project Management Platform', _description: 'Intelligent project management with AI-powered task automation, _team collaboration, _and progress tracking', _category: 'Micro SAAS Solutions', _provider: {
      id: 'zion-projects', _name: 'Zion Project Solutions', _logo: 'https://ziontechgroup.com/assets/logo.png', _rating: 4.7, _reviewCount: 267, _location: 'Middletown, _DE', _verified: true, _specialties: ['Project Management', _'Team Collaboration', _'AI Automation']},
    pricing: {_basic: {
        price: 29, _currency: '$', _period: 'month', _features: ['Up to 10 users', _'Basic project templates', _'Task management', _'Email support']},
      professional: {_price: 79, _currency: '$', _period: 'month', _features: ['Up to 50 users', _'Advanced templates', _'AI automation', _'Priority support', _'Analytics'], _popular: true},
      enterprise: {_price: 199, _currency: '$', _period: 'month', _features: ['Unlimited users', _'Custom automation', _'Dedicated support', _'API access', _'White-label']}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    },
    features: ['AI-powered task automationReal-time collaborationProgress trackingResource managementTime tracking'],
    benefits: ['Improved productivityBetter team coordinationReduced project delaysCost savingsData-driven insights'],
    useCases: ['Software developmentMarketing campaignsEvent planningProduct launchesClient projects'],
    technologies: ['ReactNode.jsPostgreSQLRedisAI/ML'],
    deploymentTime: '1-2 weeks',
    support: ['Email supportChat supportVideo tutorialsTraining sessionsAPI documentation'],
    integrations: ['SlackMicrosoft TeamsGoogle WorkspaceGitHubJira'],
    security: ['SOC 2 Type IIGDPR compliantData encryptionAccess controlsRegular backups'],
    compliance: ['GDPRCCPASOC 2'],
    images: ['https://images.unsplash.com/photo-1559027615-ce3b7d81f40a?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/project-management',
    documentationUrl: 'https://docs.ziontechgroup.com/project-management',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['Project ManagementTeam CollaborationAI AutomationProductivityAnalytics'],
    aiScore: 89,
    marketTrend: 'rising',
    industryFocus: ['TechnologyMarketingConsultingEducation'],
    userLimit: 1000,
    whiteLabel: true,
    apiRateLimit: '1000 requests/hour',
    dataRetention: '7 years',
    backupFrequency: 'Daily',
    uptime: 99.9
  },
<<<<<<< HEAD
  {
    id: 'crm-saas',
    title: 'AI-Powered CRM System',
    description: 'Intelligent customer relationship management with AI-driven insights, automation, and predictive analytics',
    category: 'Micro SAAS Solutions',
    provider: {
      id: 'zion-crm',
      name: 'Zion CRM Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.8,
      reviewCount: 189,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['CRMSales AutomationAI Analytics']
    },
    pricing: {
      basic: {
        price: 49,
        currency: '$',
        period: 'month',
        features: ['Up to 5 usersBasic contact managementEmail integrationEmail support']
      },
      professional: {
        price: 99,
        currency: '$',
        period: 'month',
        features: ['Up to 25 usersAdvanced automationAI insightsPriority supportAnalytics'],
        popular: true
      },
      enterprise: {
        price: 249,
        currency: '$',
        period: 'month',
        features: ['Unlimited usersCustom AI modelsDedicated supportAPI accessWhite-label']
      }
=======
  {_id: 'crm-saas', _title: 'AI-Powered CRM System', _description: 'Intelligent customer relationship management with AI-driven insights, _automation, _and predictive analytics', _category: 'Micro SAAS Solutions', _provider: {
      id: 'zion-crm', _name: 'Zion CRM Solutions', _logo: 'https://ziontechgroup.com/assets/logo.png', _rating: 4.8, _reviewCount: 189, _location: 'Middletown, _DE', _verified: true, _specialties: ['CRM', _'Sales Automation', _'AI Analytics']},
    pricing: {_basic: {
        price: 49, _currency: '$', _period: 'month', _features: ['Up to 5 users', _'Basic contact management', _'Email integration', _'Email support']},
      professional: {_price: 99, _currency: '$', _period: 'month', _features: ['Up to 25 users', _'Advanced automation', _'AI insights', _'Priority support', _'Analytics'], _popular: true},
      enterprise: {_price: 249, _currency: '$', _period: 'month', _features: ['Unlimited users', _'Custom AI models', _'Dedicated support', _'API access', _'White-label']}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    },
    features: ['AI-powered lead scoringAutomated follow-upsSales forecastingPipeline managementCustomer insights'],
    benefits: ['Increased salesBetter customer relationshipsAutomated workflowsData-driven decisionsImproved efficiency'],
    useCases: ['Sales managementCustomer supportLead generationAccount managementSales forecasting'],
    technologies: ['ReactNode.jsPostgreSQLRedisAI/ML'],
    deploymentTime: '1-2 weeks',
    support: ['Email supportPhone supportVideo tutorialsTraining sessionsCustom development'],
    integrations: ['GmailOutlookSlackZapierSalesforce'],
    security: ['SOC 2 Type IIGDPR compliantData encryptionAccess controlsAudit logs'],
    compliance: ['GDPRCCPASOC 2'],
    images: ['https://images.unsplash.com/photo-1518441902114-f0ce5d1fb743?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/crm',
    documentationUrl: 'https://docs.ziontechgroup.com/crm',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['CRMSales AutomationAI AnalyticsLead ManagementCustomer Insights'],
    aiScore: 91,
    marketTrend: 'rising',
    industryFocus: ['SalesMarketingReal EstateConsulting'],
    userLimit: 500,
    whiteLabel: true,
    apiRateLimit: '2000 requests/hour',
    dataRetention: '10 years',
    backupFrequency: 'Real-time',
    uptime: 99.95
  },
<<<<<<< HEAD
  {
    id: 'hr-management-saas',
    title: 'HR Management & Talent Platform',
    description: 'Comprehensive HR solution with AI-powered recruitment, employee management, and performance analytics',
    category: 'Micro SAAS Solutions',
    provider: {
      id: 'zion-hr',
      name: 'Zion HR Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.6,
      reviewCount: 134,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['HR ManagementRecruitmentPerformance Analytics']
    },
    pricing: {
      basic: {
        price: 39,
        currency: '$',
        period: 'month',
        features: ['Up to 25 employeesBasic HR functionsEmployee portalEmail support']
      },
      professional: {
        price: 89,
        currency: '$',
        period: 'month',
        features: ['Up to 100 employeesAI recruitmentPerformance trackingPriority supportAnalytics'],
        popular: true
      },
      enterprise: {
        price: 199,
        currency: '$',
        period: 'month',
        features: ['Unlimited employeesCustom AI modelsDedicated supportAPI accessWhite-label']
      }
=======
  {_id: 'hr-management-saas', _title: 'HR Management & Talent Platform', _description: 'Comprehensive HR solution with AI-powered recruitment, _employee management, _and performance analytics', _category: 'Micro SAAS Solutions', _provider: {
      id: 'zion-hr', _name: 'Zion HR Solutions', _logo: 'https://ziontechgroup.com/assets/logo.png', _rating: 4.6, _reviewCount: 134, _location: 'Middletown, _DE', _verified: true, _specialties: ['HR Management', _'Recruitment', _'Performance Analytics']},
    pricing: {_basic: {
        price: 39, _currency: '$', _period: 'month', _features: ['Up to 25 employees', _'Basic HR functions', _'Employee portal', _'Email support']},
      professional: {_price: 89, _currency: '$', _period: 'month', _features: ['Up to 100 employees', _'AI recruitment', _'Performance tracking', _'Priority support', _'Analytics'], _popular: true},
      enterprise: {_price: 199, _currency: '$', _period: 'month', _features: ['Unlimited employees', _'Custom AI models', _'Dedicated support', _'API access', _'White-label']}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    },
    features: ['AI-powered recruitmentEmployee onboardingPerformance managementTime trackingBenefits administration'],
    benefits: ['Faster hiringBetter employee retentionImproved performanceCompliance automationCost savings'],
    useCases: ['RecruitmentEmployee managementPerformance reviewsTime trackingBenefits management'],
    technologies: ['ReactNode.jsPostgreSQLRedisAI/ML'],
    deploymentTime: '2-3 weeks',
    support: ['Email supportPhone supportHR consultationTraining sessionsCompliance support'],
    integrations: ['ADPPaychexSlackMicrosoft TeamsGoogle Workspace'],
    security: ['SOC 2 Type IIGDPR compliantData encryptionAccess controlsAudit logs'],
    compliance: ['GDPRCCPASOC 2HIPAA'],
    images: ['https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/hr-management',
    documentationUrl: 'https://docs.ziontechgroup.com/hr-management',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['HR ManagementRecruitmentPerformance AnalyticsEmployee PortalCompliance'],
    aiScore: 87,
    marketTrend: 'stable',
    industryFocus: ['TechnologyHealthcareFinanceManufacturing'],
    userLimit: 2000,
    whiteLabel: true,
    apiRateLimit: '1500 requests/hour',
    dataRetention: '7 years',
    backupFrequency: 'Daily',
    uptime: 99.9
  }
],

export const CYBERSECURITY_SERVICES: ITService[] = [
<<<<<<< HEAD
  {
    id: 'security-audit',
    title: 'Comprehensive Security Audit & Penetration Testing',
    description: 'In-depth security assessment including vulnerability scanning, penetration testing, and compliance verification',
    category: 'Cybersecurity & Compliance',
    provider: {
      id: 'zion-security',
      name: 'Zion Security Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.9,
      reviewCount: 98,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['CybersecurityPenetration TestingCompliance']
    },
    pricing: {
      basic: {
        price: 2500,
        currency: '$',
        period: 'audit',
        features: ['Basic vulnerability scanSecurity reportRemediation guidanceEmail support']
      },
      professional: {
        price: 7500,
        currency: '$',
        period: 'audit',
        features: ['Full penetration testingCompliance assessmentDetailed reportPhone supportFollow-up consultation'],
        popular: true
      },
      enterprise: {
        price: 25000,
        currency: '$',
        period: 'audit',
        features: ['Comprehensive security auditCustom testing scenariosDedicated team24/7 supportOngoing monitoring']
      }
=======
  {_id: 'security-audit', _title: 'Comprehensive Security Audit & Penetration Testing', _description: 'In-depth security assessment including vulnerability scanning, _penetration testing, _and compliance verification', _category: 'Cybersecurity & Compliance', _provider: {
      id: 'zion-security', _name: 'Zion Security Solutions', _logo: 'https://ziontechgroup.com/assets/logo.png', _rating: 4.9, _reviewCount: 98, _location: 'Middletown, _DE', _verified: true, _specialties: ['Cybersecurity', _'Penetration Testing', _'Compliance']},
    pricing: {_basic: {
        price: 2500, _currency: '$', _period: 'audit', _features: ['Basic vulnerability scan', _'Security report', _'Remediation guidance', _'Email support']},
      professional: {_price: 7500, _currency: '$', _period: 'audit', _features: ['Full penetration testing', _'Compliance assessment', _'Detailed report', _'Phone support', _'Follow-up consultation'], _popular: true},
      enterprise: {_price: 25000, _currency: '$', _period: 'audit', _features: ['Comprehensive security audit', _'Custom testing scenarios', _'Dedicated team', _'24/7 support', _'Ongoing monitoring']}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    },
    features: ['Vulnerability assessmentPenetration testingCompliance verificationSecurity reportingRemediation guidance'],
    benefits: ['Identify security gapsMeet compliance requirementsReduce security risksImprove security postureProtect customer data'],
    useCases: ['Security complianceRisk assessmentIncident responseSecurity trainingCompliance audits'],
    technologies: ['NessusMetasploitBurp SuiteWiresharkCustom tools'],
    deploymentTime: '2-4 weeks',
    support: ['Email supportPhone supportSecurity consultationTraining sessionsIncident response'],
    integrations: ['SIEM systemsFirewall managementVulnerability scannersCompliance tools'],
    security: ['Secure testing environmentData protectionAccess controlsAudit logsConfidentiality agreements'],
    compliance: ['SOC 2HIPAAPCI DSSGDPRISO 27001'],
    images: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/security-audit',
    documentationUrl: 'https://docs.ziontechgroup.com/security-audit',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['CybersecurityPenetration TestingComplianceSecurity AuditRisk Assessment'],
    aiScore: 90,
    marketTrend: 'rising',
    industryFocus: ['FinanceHealthcareGovernmentTechnology'],
    serviceType: 'hybrid',
    responseTime: '24 hours',
    coverage: ['Global'],
    emergencySupport: true,
    sla: '99.99% security guarantee'
  }
],

export const DATA_ANALYTICS_SERVICES: AIService[] = [
<<<<<<< HEAD
  {
    id: 'business-intelligence',
    title: 'Advanced Business Intelligence Platform',
    description: 'Comprehensive BI solution with real-time dashboards, predictive analytics, and automated reporting',
    category: 'Data Analytics & BI',
    provider: {
      id: 'zion-bi',
      name: 'Zion Business Intelligence',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.8,
      reviewCount: 156,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['Business IntelligenceData AnalyticsPredictive Analytics']
    },
    pricing: {
      basic: {
        price: 599,
        currency: '$',
        period: 'month',
        features: ['Up to 50GB dataBasic dashboardsStandard reportsEmail support']
      },
      professional: {
        price: 1299,
        currency: '$',
        period: 'month',
        features: ['Up to 500GB dataAdvanced dashboardsPredictive analyticsPriority supportCustom reports'],
        popular: true
      },
      enterprise: {
        price: 3999,
        currency: '$',
        period: 'month',
        features: ['Unlimited dataCustom AI modelsDedicated analystAPI accessWhite-label solution']
      }
=======
  {_id: 'business-intelligence', _title: 'Advanced Business Intelligence Platform', _description: 'Comprehensive BI solution with real-time dashboards, _predictive analytics, _and automated reporting', _category: 'Data Analytics & BI', _provider: {
      id: 'zion-bi', _name: 'Zion Business Intelligence', _logo: 'https://ziontechgroup.com/assets/logo.png', _rating: 4.8, _reviewCount: 156, _location: 'Middletown, _DE', _verified: true, _specialties: ['Business Intelligence', _'Data Analytics', _'Predictive Analytics']},
    pricing: {_basic: {
        price: 599, _currency: '$', _period: 'month', _features: ['Up to 50GB data', _'Basic dashboards', _'Standard reports', _'Email support']},
      professional: {_price: 1299, _currency: '$', _period: 'month', _features: ['Up to 500GB data', _'Advanced dashboards', _'Predictive analytics', _'Priority support', _'Custom reports'], _popular: true},
      enterprise: {_price: 3999, _currency: '$', _period: 'month', _features: ['Unlimited data', _'Custom AI models', _'Dedicated analyst', _'API access', _'White-label solution']}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    },
    features: ['Real-time dashboardsPredictive analyticsAutomated reportingData visualizationCustom AI models'],
    benefits: ['Faster insightsPredictive capabilitiesAutomated reportingBetter decisionsCompetitive advantage'],
    useCases: ['Sales analyticsCustomer insightsOperational efficiencyFinancial analysisMarket research'],
    technologies: ['Power BITableauPythonRMachine Learning'],
    deploymentTime: '4-8 weeks',
    support: ['Email supportPhone supportData consultationTraining sessionsCustom development'],
    integrations: ['SalesforceHubSpotSAPOracleCustom databases'],
    security: ['SOC 2 Type IIGDPR compliantData encryptionAccess controlsAudit logs'],
    compliance: ['GDPRCCPASOC 2HIPAA'],
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/business-intelligence',
    documentationUrl: 'https://docs.ziontechgroup.com/business-intelligence',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['Business IntelligenceData AnalyticsPredictive AnalyticsDashboardsReporting'],
    aiScore: 94,
    marketTrend: 'rising',
    industryFocus: ['FinanceHealthcareRetailManufacturing'],
    aiModel: 'Custom ML Models + TensorFlow + PyTorch',
    accuracy: 95.2,
    trainingData: '500M+ data points across industries',
    customization: true,
    apiAccess: true,
    realTimeProcessing: true
  }
],

export const CLOUD_SOLUTIONS: ITService[] = [
<<<<<<< HEAD
  {
    id: 'devops-automation',
    title: 'DevOps Automation & CI/CD Pipeline',
    description: 'Complete DevOps solution with automated deployment, monitoring, and infrastructure management',
    category: 'Cloud & DevOps',
    provider: {
      id: 'zion-devops',
      name: 'Zion DevOps Solutions',
      logo: 'https://ziontechgroup.com/assets/logo.png',
      rating: 4.7,
      reviewCount: 123,
      location: 'Middletown, DE',
      verified: true,
      specialties: ['DevOpsCI/CDCloud Infrastructure']
    },
    pricing: {
      basic: {
        price: 299,
        currency: '$',
        period: 'month',
        features: ['Basic CI/CD pipelineGit integrationBasic monitoringEmail support']
      },
      professional: {
        price: 799,
        currency: '$',
        period: 'month',
        features: ['Advanced automationFull monitoringInfrastructure as codePriority supportTraining'],
        popular: true
      },
      enterprise: {
        price: 2499,
        currency: '$',
        period: 'month',
        features: ['Custom automationDedicated team24/7 monitoringAPI accessWhite-label solution']
      }
=======
  {_id: 'devops-automation', _title: 'DevOps Automation & CI/CD Pipeline', _description: 'Complete DevOps solution with automated deployment, _monitoring, _and infrastructure management', _category: 'Cloud & DevOps', _provider: {
      id: 'zion-devops', _name: 'Zion DevOps Solutions', _logo: 'https://ziontechgroup.com/assets/logo.png', _rating: 4.7, _reviewCount: 123, _location: 'Middletown, _DE', _verified: true, _specialties: ['DevOps', _'CI/CD', _'Cloud Infrastructure']},
    pricing: {_basic: {
        price: 299, _currency: '$', _period: 'month', _features: ['Basic CI/CD pipeline', _'Git integration', _'Basic monitoring', _'Email support']},
      professional: {_price: 799, _currency: '$', _period: 'month', _features: ['Advanced automation', _'Full monitoring', _'Infrastructure as code', _'Priority support', _'Training'], _popular: true},
      enterprise: {_price: 2499, _currency: '$', _period: 'month', _features: ['Custom automation', _'Dedicated team', _'24/7 monitoring', _'API access', _'White-label solution']}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    },
    features: ['CI/CD pipeline automationInfrastructure as codeMonitoring & alertingAuto-scalingSecurity scanning'],
    benefits: ['Faster deploymentsReduced errorsBetter scalabilityCost optimizationImproved security'],
    useCases: ['Software deploymentInfrastructure managementApplication monitoringSecurity automationPerformance optimization'],
    technologies: ['DockerKubernetesJenkinsTerraformAWS/Azure'],
    deploymentTime: '2-4 weeks',
    support: ['Email supportPhone supportDevOps consultationTraining sessionsCustom development'],
    integrations: ['GitHubGitLabAWSAzureGoogle Cloud'],
    security: ['SOC 2 Type IIGDPR compliantSecurity scanningAccess controlsAudit logs'],
    compliance: ['SOC 2GDPRISO 27001'],
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500'],
    demoUrl: 'https://ziontechgroup.com/demo/devops-automation',
    documentationUrl: 'https://docs.ziontechgroup.com/devops-automation',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-12-19T00:00:00.000Z',
    tags: ['DevOpsCI/CDAutomationCloud InfrastructureMonitoring'],
    aiScore: 86,
    marketTrend: 'rising',
    industryFocus: ['TechnologyFinanceHealthcareE-commerce'],
    serviceType: 'remote',
    responseTime: '4 hours',
    coverage: ['Global'],
    emergencySupport: true,
    sla: '99.9% uptime guarantee'
  }
],

export const _ALL_SERVICES = [
  ...AI_SERVICES,
  ...IT_SERVICES,
  ...MICRO_SAAS_SERVICES,
  ...CYBERSECURITY_SERVICES,
  ...DATA_ANALYTICS_SERVICES,
  ...CLOUD_SOLUTIONS
],