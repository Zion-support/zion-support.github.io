export const SERVICE_COMPARISONS = [
    {
        id: 'ai-services',
        title: 'AI Services Comparison',
        description: 'Compare our AI services to find the perfect solution for your business needs',
        services: [
            {
                name: 'AI-Powered Business Process Automation Suite',
                price: '$299/month',
                features: [
                    'Intelligent workflow automation',
                    'Document processing and data extraction',
                    'Customer service automation',
                    'Inventory management optimization',
                    'Financial process automation',
                    'Real-time analytics and reporting',
                    '24/7 support and monitoring'
                ],
                benefits: [
                    'Reduce operational costs by 40-60%',
                    'Increase productivity by 300%',
                    'ROI within 3 months',
                    'Scalable automation solutions'
                ],
                bestFor: 'Medium to large businesses looking to automate complex processes',
                industryFit: ['Manufacturing', 'Healthcare', 'Finance', 'Retail']
            },
            {
                name: 'Enterprise AI Content Generation Platform',
                price: '$199/month',
                features: [
                    'Multi-language content generation',
                    'SEO-optimized articles and blogs',
                    'Social media content creation',
                    'Email marketing automation',
                    'Brand voice customization',
                    'Content calendar management',
                    'Performance analytics'
                ],
                benefits: [
                    'Save 80% on content creation time',
                    'Improve SEO rankings by 200%',
                    'Consistent brand messaging',
                    'Scale content production'
                ],
                bestFor: 'Businesses needing high-volume, quality content',
                industryFit: ['E-commerce', 'SaaS', 'Marketing', 'Media']
            },
            {
                name: 'AI Customer Behavior Analytics & Insights Platform',
                price: '$449/month',
                features: [
                    'Real-time customer journey mapping',
                    'Predictive analytics and forecasting',
                    'Personalized recommendation engines',
                    'Churn prediction and prevention',
                    'Customer lifetime value optimization',
                    'A/B testing and optimization',
                    'Advanced segmentation'
                ],
                benefits: [
                    'Increase customer retention by 35%',
                    'Boost customer lifetime value by 200%',
                    'Reduce churn by 50%',
                    'Improve conversion rates'
                ],
                bestFor: 'Customer-focused businesses wanting to optimize experiences',
                industryFit: ['E-commerce', 'SaaS', 'Banking', 'Healthcare']
            }
        ]
    },
    {
        id: 'cybersecurity-services',
        title: 'Cybersecurity Services Comparison',
        description: 'Choose the right cybersecurity solution to protect your business',
        services: [
            {
                name: 'Zero-Trust Security Architecture Implementation',
                price: '$2,500 (project-based)',
                features: [
                    'Identity and access management',
                    'Network segmentation',
                    'Continuous monitoring and validation',
                    'Multi-factor authentication',
                    'Device compliance checking',
                    'Security policy enforcement',
                    'Compliance reporting'
                ],
                benefits: [
                    'Reduce security incidents by 90%',
                    'Meet compliance requirements',
                    'Protect against insider threats',
                    'Improve visibility and control'
                ],
                bestFor: 'Enterprises requiring comprehensive security architecture',
                industryFit: ['Finance', 'Healthcare', 'Government', 'Manufacturing']
            },
            {
                name: 'AI-Powered Advanced Threat Detection System',
                price: '$899/month',
                features: [
                    'Behavioral analytics',
                    'Anomaly detection',
                    'Automated incident response',
                    'Threat intelligence integration',
                    '24/7 monitoring and alerting',
                    'Machine learning models',
                    'Real-time threat blocking'
                ],
                benefits: [
                    'Detect threats 10x faster',
                    'Reduce false positives by 80%',
                    '24/7 automated protection',
                    'Proactive threat hunting'
                ],
                bestFor: 'Businesses needing advanced threat detection and response',
                industryFit: ['Technology', 'Finance', 'Healthcare', 'E-commerce']
            },
            {
                name: 'Quantum-Resistant Security Implementation',
                price: '$1,500/month',
                features: [
                    'Quantum-resistant algorithm implementation',
                    'Cryptographic key management',
                    'Secure communication protocols',
                    'Future-proof security architecture',
                    'Migration planning and execution',
                    'Compliance and certification',
                    'Ongoing security updates'
                ],
                benefits: [
                    'Future-proof against quantum attacks',
                    'Unbreakable encryption security',
                    'Regulatory compliance',
                    'Long-term security investment'
                ],
                bestFor: 'Organizations preparing for quantum computing era',
                industryFit: ['Government', 'Finance', 'Healthcare', 'Critical Infrastructure']
            }
        ]
    },
    {
        id: 'cloud-services',
        title: 'Cloud Services Comparison',
        description: 'Select the optimal cloud solution for your infrastructure needs',
        services: [
            {
                name: 'Multi-Cloud Management & Optimization Platform',
                price: '$399/month',
                features: [
                    'Cross-cloud resource management',
                    'Cost optimization and monitoring',
                    'Automated scaling and load balancing',
                    'Security policy enforcement',
                    'Performance monitoring and alerting',
                    'Unified dashboard',
                    'API integration'
                ],
                benefits: [
                    'Reduce cloud costs by 30-40%',
                    'Unified management interface',
                    'Improved security posture',
                    'Enhanced performance'
                ],
                bestFor: 'Businesses using multiple cloud providers',
                industryFit: ['Technology', 'E-commerce', 'SaaS', 'Media']
            },
            {
                name: 'Enterprise DevOps Automation & CI/CD Pipeline',
                price: '$599/month',
                features: [
                    'Continuous integration and deployment',
                    'Automated testing and quality gates',
                    'Infrastructure as Code (IaC)',
                    'Container orchestration',
                    'Monitoring and logging',
                    'Environment management',
                    'Team collaboration tools'
                ],
                benefits: [
                    'Deploy 10x faster',
                    'Reduce deployment failures by 90%',
                    'Automated quality gates',
                    'Improved team productivity'
                ],
                bestFor: 'Development teams needing streamlined deployment',
                industryFit: ['Technology', 'Fintech', 'SaaS', 'E-commerce']
            },
            {
                name: 'Cloud Security Automation',
                price: '$299/month',
                features: [
                    'Automated security scanning',
                    'Compliance monitoring and reporting',
                    'Threat detection and response',
                    'Access management automation',
                    'Data protection and encryption',
                    'Security policy enforcement',
                    'Incident response automation'
                ],
                benefits: [
                    'Automated security controls',
                    'Continuous compliance',
                    'Reduced security risks',
                    'Improved audit readiness'
                ],
                bestFor: 'Organizations prioritizing cloud security',
                industryFit: ['Finance', 'Healthcare', 'Government', 'E-commerce']
            }
        ]
    }
];

export const PRICING_CALCULATORS = [
    {
        id: 'ai-roi-calculator',
        title: 'AI Services ROI Calculator',
        description: 'Calculate the potential return on investment for our AI services',
        inputs: [
            {
                name: 'currentEmployees',
                label: 'Current Number of Employees',
                type: 'number',
                required: true,
                placeholder: 'Enter number of employees'
            },
            {
                name: 'averageSalary',
                label: 'Average Employee Salary ($)',
                type: 'number',
                required: true,
                placeholder: 'Enter average salary'
            },
            {
                name: 'currentProductivity',
                label: 'Current Productivity Level (%)',
                type: 'number',
                required: true,
                placeholder: 'Enter current productivity percentage',
                default: 70
            },
            {
                name: 'serviceType',
                label: 'AI Service Type',
                type: 'select',
                required: true,
                options: [
                    { value: 'automation', label: 'Business Process Automation' },
                    { value: 'content', label: 'Content Generation Platform' },
                    { value: 'analytics', label: 'Customer Analytics Platform' }
                ]
            }
        ],
        calculations: {
            automation: {
                timeSavings: 0.75,
                costReduction: 0.5,
                productivityIncrease: 3.0
            },
            content: {
                timeSavings: 0.8,
                costReduction: 0.8,
                productivityIncrease: 2.0
            },
            analytics: {
                timeSavings: 0.6,
                costReduction: 0.4,
                productivityIncrease: 2.5
            }
        },
        results: [
            {
                name: 'monthlySavings',
                label: 'Monthly Cost Savings',
                formula: '(averageSalary * currentEmployees * 0.3 * costReduction) / 12'
            },
            {
                name: 'productivityGains',
                label: 'Productivity Gains Value',
                formula: '(averageSalary * currentEmployees * (productivityIncrease - 1) * 0.3) / 12'
            },
            {
                name: 'roi',
                label: 'ROI Percentage',
                formula: '((monthlySavings + productivityGains) * 12 - serviceCost) / serviceCost * 100'
            }
        ]
    },
    {
        id: 'security-cost-calculator',
        title: 'Cybersecurity Cost Calculator',
        description: 'Calculate the cost of security incidents vs. prevention',
        inputs: [
            {
                name: 'companySize',
                label: 'Company Size',
                type: 'select',
                required: true,
                options: [
                    { value: 'small', label: 'Small (1-50 employees)' },
                    { value: 'medium', label: 'Medium (51-200 employees)' },
                    { value: 'large', label: 'Large (200+ employees)' }
                ]
            },
            {
                name: 'industry',
                label: 'Industry',
                type: 'select',
                required: true,
                options: [
                    { value: 'finance', label: 'Financial Services' },
                    { value: 'healthcare', label: 'Healthcare' },
                    { value: 'technology', label: 'Technology' },
                    { value: 'retail', label: 'Retail/E-commerce' },
                    { value: 'manufacturing', label: 'Manufacturing' },
                    { value: 'other', label: 'Other' }
                ]
            },
            {
                name: 'annualRevenue',
                label: 'Annual Revenue ($)',
                type: 'number',
                required: true,
                placeholder: 'Enter annual revenue'
            }
        ],
        calculations: {
            small: { avgIncidentCost: 50000, incidentFrequency: 0.3 },
            medium: { avgIncidentCost: 150000, incidentFrequency: 0.5 },
            large: { avgIncidentCost: 400000, incidentFrequency: 0.7 },
            finance: { riskMultiplier: 2.0 },
            healthcare: { riskMultiplier: 1.8 },
            technology: { riskMultiplier: 1.5 },
            retail: { riskMultiplier: 1.2 },
            manufacturing: { riskMultiplier: 1.3 },
            other: { riskMultiplier: 1.0 }
        },
        results: [
            {
                name: 'expectedAnnualLoss',
                label: 'Expected Annual Loss from Security Incidents',
                formula: 'avgIncidentCost * incidentFrequency * riskMultiplier'
            },
            {
                name: 'preventionSavings',
                label: 'Annual Savings with Security Prevention',
                formula: 'expectedAnnualLoss * 0.9'
            },
            {
                name: 'roi',
                label: 'ROI of Security Investment',
                formula: '(preventionSavings - securityCost) / securityCost * 100'
            }
        ]
    },
    {
        id: 'cloud-optimization-calculator',
        title: 'Cloud Optimization Calculator',
        description: 'Calculate potential savings from cloud optimization',
        inputs: [
            {
                name: 'monthlyCloudSpend',
                label: 'Current Monthly Cloud Spending ($)',
                type: 'number',
                required: true,
                placeholder: 'Enter monthly cloud costs'
            },
            {
                name: 'resourceUtilization',
                label: 'Current Resource Utilization (%)',
                type: 'number',
                required: true,
                placeholder: 'Enter current utilization percentage',
                default: 60
            },
            {
                name: 'deploymentFrequency',
                label: 'Deployment Frequency (per month)',
                type: 'number',
                required: true,
                placeholder: 'Enter deployments per month',
                default: 10
            },
            {
                name: 'teamSize',
                label: 'DevOps Team Size',
                type: 'number',
                required: true,
                placeholder: 'Enter team size'
            }
        ],
        calculations: {
            costOptimization: 0.35,
            utilizationImprovement: 0.6,
            deploymentSpeedup: 10,
            teamEfficiency: 0.5
        },
        results: [
            {
                name: 'monthlySavings',
                label: 'Monthly Cost Savings',
                formula: 'monthlyCloudSpend * costOptimization'
            },
            {
                name: 'annualSavings',
                label: 'Annual Cost Savings',
                formula: 'monthlySavings * 12'
            },
            {
                name: 'productivityGains',
                label: 'Productivity Gains Value',
                formula: '(deploymentFrequency * teamSize * 500) * (deploymentSpeedup - 1)'
            },
            {
                name: 'roi',
                label: 'ROI Percentage',
                formula: '(monthlySavings + productivityGains) * 12 / serviceCost * 100'
            }
        ]
    }
];