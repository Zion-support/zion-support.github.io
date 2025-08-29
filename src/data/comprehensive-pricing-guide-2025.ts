export interface PricingTier {
    name: string;
    price: string;
    billing: 'monthly' | 'yearly' | 'one-time';
    features: string[];
    popular?: boolean;
    savings?: string;
}

export interface ServicePricing {
    id: string;
    name: string;
    category: string;
    description: string;
    pricing: PricingTier[];
    features: string[];
    benefits: string[];
    roi: string;
    trialDays: number;
    setupTime: string;
    marketPosition: string;
    competitors: string[];
    contactInfo: {
        mobile: string;
        email: string;
        address: string;
        website: string;
    };
}

const CONTACT = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
};

export const comprehensivePricingGuide2025: ServicePricing[] = [
    // FINANCIAL TECHNOLOGY SERVICES
    {
        id: 'ai-powered-invoice-factoring-platform',
        name: 'AI-Powered Invoice Factoring Platform',
        category: 'Fintech',
        description: 'Automated invoice factoring platform with AI credit risk assessment and instant funding approval.',
        pricing: [
            {
                name: 'Starter',
                price: '$299',
                billing: 'monthly',
                features: [
                    'Up to $100K monthly factoring',
                    'AI credit risk assessment',
                    'Basic reporting dashboard',
                    'Email support',
                    'Integration with QuickBooks'
                ]
            },
            {
                name: 'Professional',
                price: '$599',
                billing: 'monthly',
                features: [
                    'Up to $500K monthly factoring',
                    'Advanced risk analytics',
                    'Real-time reporting',
                    'Priority support',
                    'Multi-currency support',
                    'API access'
                ],
                popular: true,
                savings: 'Save 20% with annual billing'
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                billing: 'monthly',
                features: [
                    'Unlimited factoring volume',
                    'Custom risk models',
                    'Dedicated account manager',
                    'White-label solutions',
                    'Advanced compliance tools',
                    '24/7 phone support'
                ]
            }
        ],
        features: [
            'AI credit risk assessment',
            'Instant funding approval',
            'Automated collections',
            'Real-time reporting dashboard',
            'Multi-currency support',
            'Integration with major accounting software'
        ],
        benefits: [
            'Improve cash flow by 60%',
            'Reduce payment delays by 80%',
            'Lower financing costs by 30%',
            'Automated risk management'
        ],
        roi: 'Average 3-5x ROI through improved cash flow and reduced financing costs',
        trialDays: 14,
        setupTime: '24 hours',
        marketPosition: 'AI-first invoice factoring solution for small to medium businesses',
        competitors: ['BlueVine', 'Fundbox', 'Kabbage'],
        contactInfo: CONTACT
    },
    {
        id: 'crypto-payment-gateway-saas',
        name: 'Crypto Payment Gateway SaaS',
        category: 'Fintech',
        description: 'Enterprise-grade crypto payment gateway with automatic fiat conversion and fraud protection.',
        pricing: [
            {
                name: 'Basic',
                price: '$199',
                billing: 'monthly',
                features: [
                    'Up to 50 cryptocurrencies',
                    'Basic fraud detection',
                    'Standard settlement (24h)',
                    'Email support',
                    'Shopify integration'
                ]
            },
            {
                name: 'Professional',
                price: '$399',
                billing: 'monthly',
                features: [
                    '100+ cryptocurrencies',
                    'Advanced fraud detection',
                    'Real-time settlement',
                    'Priority support',
                    'Multiple platform integrations',
                    'Analytics dashboard'
                ],
                popular: true,
                savings: 'Save 25% with annual billing'
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                billing: 'monthly',
                features: [
                    'Custom cryptocurrency support',
                    'Custom fraud models',
                    'Instant settlement',
                    'Dedicated support team',
                    'White-label solutions',
                    'Custom compliance tools'
                ]
            }
        ],
        features: [
            '100+ cryptocurrency support',
            'Instant fiat conversion',
            'Regulatory compliance tools',
            'Fraud detection system',
            'Multi-wallet integration',
            'Real-time settlement'
        ],
        benefits: [
            'Expand to global markets instantly',
            'Reduce payment processing fees by 40%',
            'Eliminate chargeback risks',
            'Access to crypto-savvy customers'
        ],
        roi: 'Increase revenue by 15-25% through new market access and lower fees',
        trialDays: 7,
        setupTime: '48 hours',
        marketPosition: 'Enterprise crypto payment solution for e-commerce and SaaS companies',
        competitors: ['Coinbase Commerce', 'BitPay', 'CoinPayments'],
        contactInfo: CONTACT
    },

    // HEALTHCARE TECHNOLOGY SERVICES
    {
        id: 'ai-telemedicine-platform',
        name: 'AI Telemedicine Platform',
        category: 'Healthtech',
        description: 'Advanced telemedicine platform with AI symptom analysis and intelligent patient routing.',
        pricing: [
            {
                name: 'Clinic',
                price: '$399',
                billing: 'monthly',
                features: [
                    'Up to 100 patients/month',
                    'AI symptom checker',
                    'Video consultations',
                    'Basic EHR integration',
                    'Email support'
                ]
            },
            {
                name: 'Hospital',
                price: '$999',
                billing: 'monthly',
                features: [
                    'Up to 1000 patients/month',
                    'Advanced AI diagnostics',
                    'Full EHR integration',
                    'Priority support',
                    'Custom branding',
                    'Analytics dashboard'
                ],
                popular: true,
                savings: 'Save 30% with annual billing'
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                billing: 'monthly',
                features: [
                    'Unlimited patients',
                    'Custom AI models',
                    'Multi-system integration',
                    'Dedicated support team',
                    'White-label solutions',
                    'Custom compliance features'
                ]
            }
        ],
        features: [
            'AI symptom checker',
            'Video consultation platform',
            'Electronic health records integration',
            'Prescription management',
            'Insurance verification',
            'Multi-language support'
        ],
        benefits: [
            'Reduce wait times by 70%',
            'Improve patient satisfaction by 40%',
            'Lower healthcare costs by 25%',
            '24/7 availability'
        ],
        roi: 'Increase patient capacity by 3-4x while reducing operational costs',
        trialDays: 14,
        setupTime: '2 weeks',
        marketPosition: 'AI-enhanced telemedicine solution for healthcare providers',
        competitors: ['Teladoc', 'Amwell', 'MDLive'],
        contactInfo: CONTACT
    },

    // EDUCATION TECHNOLOGY SERVICES
    {
        id: 'ai-personalized-learning-platform',
        name: 'AI Personalized Learning Platform',
        category: 'Edutech',
        description: 'Intelligent learning platform with adaptive algorithms and personalized educational experiences.',
        pricing: [
            {
                name: 'School',
                price: '$149',
                billing: 'monthly',
                features: [
                    'Up to 500 students',
                    'Basic adaptive learning',
                    'Progress tracking',
                    'Parent dashboard',
                    'Email support'
                ]
            },
            {
                name: 'District',
                price: '$399',
                billing: 'monthly',
                features: [
                    'Up to 5000 students',
                    'Advanced AI algorithms',
                    'Comprehensive analytics',
                    'Priority support',
                    'Custom content creation',
                    'Integration with LMS'
                ],
                popular: true,
                savings: 'Save 25% with annual billing'
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                billing: 'monthly',
                features: [
                    'Unlimited students',
                    'Custom AI models',
                    'Advanced analytics',
                    'Dedicated support team',
                    'White-label solutions',
                    'Custom integrations'
                ]
            }
        ],
        features: [
            'Adaptive learning algorithms',
            'Personalized content delivery',
            'Progress tracking analytics',
            'Multi-modal learning support',
            'Parent/teacher dashboards',
            'Gamification elements'
        ],
        benefits: [
            'Improve learning outcomes by 40%',
            'Reduce learning time by 30%',
            'Increase student engagement by 60%',
            'Personalized attention for every student'
        ],
        roi: 'Improve student performance and retention rates significantly',
        trialDays: 30,
        setupTime: '1 week',
        marketPosition: 'AI-powered personalized learning pioneer for educational institutions',
        competitors: ['DreamBox', 'Knewton', 'Smart Sparrow'],
        contactInfo: CONTACT
    },

    // MARKETING TECHNOLOGY SERVICES
    {
        id: 'ai-content-optimization-engine',
        name: 'AI Content Optimization Engine',
        category: 'Martech',
        description: 'Intelligent content optimization platform with AI-powered suggestions and A/B testing.',
        pricing: [
            {
                name: 'Creator',
                price: '$179',
                billing: 'monthly',
                features: [
                    'Up to 100 content pieces/month',
                    'Basic AI optimization',
                    'A/B testing (2 variants)',
                    'Basic analytics',
                    'Email support'
                ]
            },
            {
                name: 'Agency',
                price: '$399',
                billing: 'monthly',
                features: [
                    'Up to 1000 content pieces/month',
                    'Advanced AI optimization',
                    'A/B testing (5 variants)',
                    'Comprehensive analytics',
                    'Priority support',
                    'Team collaboration tools',
                    'API access'
                ],
                popular: true,
                savings: 'Save 20% with annual billing'
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                billing: 'monthly',
                features: [
                    'Unlimited content pieces',
                    'Custom AI models',
                    'Advanced A/B testing',
                    'Custom analytics',
                    'Dedicated support team',
                    'White-label solutions'
                ]
            }
        ],
        features: [
            'Content performance analytics',
            'AI-powered optimization suggestions',
            'Automated A/B testing',
            'SEO optimization tools',
            'Social media integration',
            'Conversion tracking'
        ],
        benefits: [
            'Increase content engagement by 45%',
            'Improve conversion rates by 30%',
            'Reduce content creation time by 40%',
            'Data-driven content decisions'
        ],
        roi: 'Improve marketing ROI by 2-3x through better content performance',
        trialDays: 21,
        setupTime: '1 week',
        marketPosition: 'AI-powered content optimization leader for marketing teams',
        competitors: ['Optimizely', 'VWO', 'Google Optimize'],
        contactInfo: CONTACT
    },

    // AI SERVICES
    {
        id: 'ai-threat-intelligence-platform',
        name: 'AI Threat Intelligence Platform',
        category: 'AI Services',
        description: 'Advanced threat intelligence platform with AI-powered detection and automated response.',
        pricing: [
            {
                name: 'Security Team',
                price: '$399',
                billing: 'monthly',
                features: [
                    'Up to 1000 endpoints',
                    'Basic threat detection',
                    'Email alerts',
                    'Basic reporting',
                    'Email support'
                ]
            },
            {
                name: 'SOC',
                price: '$999',
                billing: 'monthly',
                features: [
                    'Up to 10000 endpoints',
                    'Advanced threat detection',
                    'Real-time alerts',
                    'Comprehensive reporting',
                    'Priority support',
                    'API integration',
                    'Custom threat feeds'
                ],
                popular: true,
                savings: 'Save 30% with annual billing'
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                billing: 'monthly',
                features: [
                    'Unlimited endpoints',
                    'Custom AI models',
                    'Advanced automation',
                    'Dedicated support team',
                    'White-label solutions',
                    'Custom integrations'
                ]
            }
        ],
        features: [
            'Real-time threat detection',
            'AI-powered threat analysis',
            'Automated response actions',
            'Threat intelligence sharing',
            'Compliance reporting',
            '24/7 monitoring'
        ],
        benefits: [
            'Detect threats 90% faster',
            'Reduce false positives by 70%',
            'Improve incident response time by 80%',
            'Proactive threat prevention'
        ],
        roi: 'Prevent costly security breaches and reduce incident response costs',
        trialDays: 14,
        setupTime: '2 weeks',
        marketPosition: 'AI-powered threat intelligence leader for enterprise security',
        competitors: ['Recorded Future', 'ThreatConnect', 'Anomali'],
        contactInfo: CONTACT
    },

    // IT SERVICES
    {
        id: 'automated-compliance-monitoring',
        name: 'Automated Compliance Monitoring',
        category: 'IT Services',
        description: 'Intelligent compliance monitoring platform with automated reporting and violation alerts.',
        pricing: [
            {
                name: 'Compliance Team',
                price: '$299',
                billing: 'monthly',
                features: [
                    'Up to 5 regulations',
                    'Basic monitoring',
                    'Monthly reports',
                    'Email alerts',
                    'Email support'
                ]
            },
            {
                name: 'Legal Department',
                price: '$699',
                billing: 'monthly',
                features: [
                    'Up to 20 regulations',
                    'Advanced monitoring',
                    'Real-time alerts',
                    'Comprehensive reporting',
                    'Priority support',
                    'Custom dashboards',
                    'API access'
                ],
                popular: true,
                savings: 'Save 25% with annual billing'
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                billing: 'monthly',
                features: [
                    'Unlimited regulations',
                    'Custom monitoring rules',
                    'Advanced automation',
                    'Dedicated support team',
                    'White-label solutions',
                    'Custom integrations'
                ]
            }
        ],
        features: [
            'Multi-regulation support',
            'Automated compliance checking',
            'Real-time violation alerts',
            'Automated report generation',
            'Audit trail management',
            'Integration with security tools'
        ],
        benefits: [
            'Reduce compliance costs by 40%',
            'Improve audit readiness by 90%',
            'Eliminate manual reporting by 80%',
            'Continuous compliance monitoring'
        ],
        roi: 'Reduce compliance overhead and avoid costly regulatory fines',
        trialDays: 21,
        setupTime: '3 weeks',
        marketPosition: 'Automated compliance monitoring solution for regulated industries',
        competitors: ['LogicGate', 'MetricStream', 'ServiceNow GRC'],
        contactInfo: CONTACT
    },

    // MICRO SAAS SERVICES
    {
        id: 'ai-project-resource-optimizer',
        name: 'AI Project Resource Optimizer',
        category: 'Micro SaaS',
        description: 'AI-powered project management platform with intelligent resource allocation and optimization.',
        pricing: [
            {
                name: 'Team Lead',
                price: '$199',
                billing: 'monthly',
                features: [
                    'Up to 10 team members',
                    'Basic resource optimization',
                    'Project templates',
                    'Email support',
                    'Basic analytics'
                ]
            },
            {
                name: 'Project Manager',
                price: '$399',
                billing: 'monthly',
                features: [
                    'Up to 50 team members',
                    'Advanced AI optimization',
                    'Custom project templates',
                    'Priority support',
                    'Advanced analytics',
                    'API integration',
                    'Custom workflows'
                ],
                popular: true,
                savings: 'Save 20% with annual billing'
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                billing: 'monthly',
                features: [
                    'Unlimited team members',
                    'Custom AI models',
                    'Advanced automation',
                    'Dedicated support team',
                    'White-label solutions',
                    'Custom integrations'
                ]
            }
        ],
        features: [
            'Resource allocation optimization',
            'Project timeline prediction',
            'Risk assessment and mitigation',
            'Team performance analytics',
            'Automated scheduling',
            'Integration with project tools'
        ],
        benefits: [
            'Reduce project delays by 40%',
            'Optimize resource utilization by 35%',
            'Improve project success rates by 50%',
            'Predict and prevent bottlenecks'
        ],
        roi: 'Complete projects 20-30% faster with better resource utilization',
        trialDays: 21,
        setupTime: '2 weeks',
        marketPosition: 'AI-powered project optimization solution for project managers',
        competitors: ['Monday.com', 'Asana', 'ClickUp'],
        contactInfo: CONTACT
    }
];

export default comprehensivePricingGuide2025;