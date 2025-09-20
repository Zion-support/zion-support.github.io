export type ServiceItem = {
	id: string,title: string,description: string,category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems',price: string, // average market starting price
	billing: 'month' | 'project' | 'hour',features: string[],ctaLabel: string,href: string, // internal path or external URL
	external?: boolean
},
export type ServiceCategory = {
	name: string,slug: string,items: ServiceItem[]
};
export const servicesCatalog: ServiceCategory[] = [
	{
		name: 'Micro SaaS',slug: 'micro-saas',items: [
			{
				id: 'smart-contract-risk-scanner',title: 'Smart Contract Risk Scanner',description: 'Continuous vulnerability scanning and risk assessment for blockchain smart contracts with automated security recommendations.',category: 'Micro SaaS',price: '$299',billing: 'month',features: [
					'Real-time vulnerability detectionAutomated security scoring',
					'Compliance reportingIntegration with major blockchains',
					'24/7 monitoring dashboard'
				],
				ctaLabel: 'Start Free Trial',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'ai-content-optimizer',title: 'AI Content Optimizer Pro',description: 'Advanced content optimization using AI to improve SEO, readability, and engagement across all digital platforms.',
				category: 'Micro SaaS',price: '$199',billing: 'month',features: [
					'AI-powered SEO optimizationContent readability scoring',
					'Multi-language supportPerformance analytics',
					'Automated A/B testing'
				],
				ctaLabel: 'Get Started',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-workflow-automation',title: 'Quantum Workflow Automation',description: 'Next-generation workflow automation leveraging quantum computing principles for complex business process optimization.',category: 'Micro SaaS',price: '$499',billing: 'month',features: [
					'Quantum-inspired algorithmsComplex process modeling',
					'Real-time optimizationPredictive analytics',
					'Enterprise integration'
				],
				ctaLabel: 'Schedule Demo',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'edge-ai-inference-engine',title: 'Edge AI Inference Engine',description: 'Lightweight AI inference engine optimized for edge devices, enabling real-time AI processing without cloud dependency.',
				category: 'Micro SaaS',price: '$399',billing: 'month',features: [
					'Edge-optimized modelsLow latency processing',
					'Offline capabilityModel compression',
					'Cross-platform support'
				],
				ctaLabel: 'Deploy Now',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'autonomous-crm-optimizer',title: 'Autonomous CRM Optimizer',description: 'AI-powered CRM system that automatically optimizes customer relationships, sales processes, and marketing campaigns.',
				category: 'Micro SaaS',price: '$599',billing: 'month',features: [
					'Autonomous lead scoringPredictive customer behavior',
					'Automated follow-upsRevenue optimization',
					'Multi-channel integration'
				],
				ctaLabel: 'Optimize CRM',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-supply-chain-optimizer',title: 'Quantum Supply Chain Optimizer',description: 'Revolutionary supply chain optimization using quantum algorithms for complex logistics and inventory management.',category: 'Micro SaaS',price: '$799',billing: 'month',features: [
					'Quantum route optimizationReal-time inventory tracking',
					'Predictive demand forecastingCost optimization',
					'Risk assessment'
				],
				ctaLabel: 'Optimize Supply Chain',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'soc2-compliance-automation-saas',title: 'SOC 2 Compliance Automation SaaS',description: 'Automate evidence collection, policy mapping, and control monitoring to pass SOC 2 audits faster.',
				category: 'Micro SaaS',price: '$249',billing: 'month',features: [
					'Automated evidence collectionControl health dashboards',
					'Policy templates & mappingIntegrations: AWS, GCP, Azure, Jira, GitHub',
					'Audit-ready export'
				],
				ctaLabel: 'Start Compliance',href: 'https://ziontechgroup.com/services'
			};
			{
				id: 'mlops-observability',title: 'MLOps Observability & Drift Monitor',description: 'Track model performance, detect data drift, and automate retraining triggers with guardrails.',
				category: 'Micro SaaS',price: '$299',billing: 'month',features: [
					'Latency, accuracy, bias metricsDrift and anomaly alerts',
					'Rollback and canary controlsIntegration: SageMaker, Vertex AI, OpenAI',
					'Compliance logging'
				],
				ctaLabel: 'Monitor Models',href: 'https://ziontechgroup.com/services'
			}
			;
			{
				id: 'gdpr-dsar-portal',title: 'GDPR DSAR Portal',description: 'Secure intake, verification, and fulfillment of Data Subject Access Requests with audit trails.',
				category: 'Micro SaaS',price: '$129',billing: 'month',features: [
					'Identity verificationData discovery connectors',
					'Audit logs and exportsSelf-service portal and SLA tracking',
					'Webhook automation'
				],
				ctaLabel: 'Launch Portal',href: 'https://ziontechgroup.com/services/gdpr-dsar-portal'
			};
			{
				id: 'email-deliverability-monitor-saas',title: 'Email Deliverability Monitor',description: 'Inbox placement checks, DMARC/SPF/DKIM validation, and reputation alerts for marketing and transactional mail.',
				category: 'Micro SaaS',price: '$39',billing: 'month',features: [
					'DMARC/SPF/DKIM verificationInbox placement and blocklist tracking',
					'Recommendations and weekly reportsIntegrations: SES, SendGrid, Mailgun',
					'Alerts to Slack/Email'
				],
				ctaLabel: 'Improve Inbox Rate',href: 'https://ziontechgroup.com/services/email-deliverability-monitor'
			};
			{
				id: 'pdf-render-api-saas',title: 'PDF Render API',description: 'Reliable HTML-to-PDF at scale with templates, assets, and async callbacks.',
				category: 'Micro SaaS',price: '$29',billing: 'month',features: [
					'Chromium renderer with fontsAsync rendering and webhooks',
					'Templates and asset hostingStorage destinations (S3/GCS/Azure)',
					'Usage analytics and quotas'
				],
				ctaLabel: 'Generate PDFs',href: 'https://ziontechgroup.com/services/pdf-render-api'
			}
		]
	};
	{
		name: 'AI Solutions',slug: 'ai-solutions',items: [
			{
				id: 'autonomous-business-manager',title: 'Autonomous Business Manager',description: 'AI-powered business management system that autonomously handles operations, decision-making, and strategic planning.',
				category: 'AI Solutions',price: '$2,999',
				billing: 'month',features: [
					'Autonomous decision makingPredictive business modeling',
					'Resource optimizationRisk assessment',
					'Continuous learning'
				],
				ctaLabel: 'Request Demo',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'consciousness-simulation-platform',title: 'Consciousness Simulation Platform',description: 'Advanced AI platform for simulating and understanding consciousness, enabling breakthrough research in cognitive science.',
				category: 'AI Solutions',price: '$5,999',
				billing: 'month',features: [
					'Neural network simulationConsciousness modeling',
					'Research toolsData visualization',
					'Collaborative workspace'
				],
				ctaLabel: 'Research Access',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-neural-network',title: 'Quantum Neural Network Platform',description: 'Revolutionary platform combining quantum computing with neural networks for unprecedented AI capabilities.',category: 'AI Solutions',price: '$8,999',
				billing: 'month',features: [
					'Quantum neural processingHybrid classical-quantum',
					'Advanced training algorithmsQuantum advantage',
					'Research collaboration'
				],
				ctaLabel: 'Quantum Access',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'ai-autonomous-vehicles',title: 'AI Autonomous Vehicle Platform',description: 'Complete autonomous vehicle management system with AI-driven navigation, safety, and fleet optimization.',
				category: 'AI Solutions',price: '$4,999',
				billing: 'month',features: [
					'Autonomous navigationSafety monitoring',
					'Fleet managementPredictive maintenance',
					'Regulatory compliance'
				],
				ctaLabel: 'Vehicle Integration',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'enterprise-rag-search',title: 'Enterprise RAG Search Platform',description: 'Private, secure Retrieval-Augmented Generation over your docs, wikis, tickets, and data.',
				category: 'AI Solutions',price: '$3,499',
				billing: 'month',features: [
					'Hybrid vector + keyword searchPII redaction and access control',
					'Grounding citationsPlugins: Confluence, Google Drive, SharePoint',
					'On-prem or VPC deployment'
				],
				ctaLabel: 'Launch Secure Chat',href: 'https://ziontechgroup.com/services'
			};
			{
				id: 'agentic-copilot-suite',title: 'Agentic Copilot Suite (Sales, Support, DevOps)',
				description: 'Task-driven AI agents that execute workflows across CRM, ticketing, CI/CD, and cloud.',
				category: 'AI Solutions',price: '$4,999',
				billing: 'month',features: [
					'Guardrailed tool useHuman-in-the-loop approvals',
					'Observability and audit trailsConnectors: Salesforce, Zendesk, GitHub, AWS',
					'Okta and SSO ready'
				],
				ctaLabel: 'Deploy Copilots',href: 'https://ziontechgroup.com/services'
			};
			// New Innovative AI Services Added
			{
				id: 'quantum-consciousness-simulation-2030',title: 'Quantum Consciousness Simulation Platform 2030',description: 'Revolutionary quantum computing platform that simulates human consciousness, enabling breakthrough research in cognitive science, psychology, and artificial general intelligence.',
				category: 'AI Solutions',price: '$25,000',
				billing: 'month',features: [
					'Quantum neural network simulationConsciousness modeling algorithms',
					'Real-time cognitive state analysisMulti-dimensional consciousness mapping',
					'Quantum memory and learning systemsConsciousness transfer protocols',
					'Advanced research tools and APIsCollaborative research workspace',
					'Real-time visualization and analyticsQuantum-classical hybrid processing'
				],
				ctaLabel: 'Research Access',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'autonomous-healthcare-diagnostics-2026',title: 'Autonomous Healthcare Diagnostics Platform 2026',description: 'AI-powered autonomous healthcare diagnostics platform that provides real-time medical imaging analysis, disease prediction, and treatment recommendations with FDA approval and HIPAA compliance.',
				category: 'AI Solutions',price: '$7,999',
				billing: 'month',features: [
					'AI-powered medical imaging analysisReal-time disease detection and classification',
					'Predictive health analyticsAutomated radiology reporting',
					'Treatment recommendation enginePatient risk assessment',
					'Clinical decision supportHIPAA-compliant data handling',
					'FDA-approved algorithmsMulti-modality imaging support'
				],
				ctaLabel: 'Healthcare Integration',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-creative-ai-studio-2026',title: 'Quantum Creative AI Studio 2026',description: 'Revolutionary quantum-powered creative AI platform that generates high-quality content, designs, and creative assets with unprecedented creativity and originality.',
				category: 'AI Solutions',price: '$3,999',
				billing: 'month',features: [
					'Quantum-powered content generationAI-driven design creation',
					'Multi-format content generationBrand consistency automation',
					'Creative asset optimizationReal-time collaboration tools',
					'Version control and managementPerformance analytics',
					'Mobile app for creatorsAPI integration capabilities'
				],
				ctaLabel: 'Creative Access',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'synthetic-data-generator',title: 'Synthetic Data Generator',description: 'Privacy-safe synthetic data for analytics, testing, and ML with differential privacy.',
				category: 'AI Solutions',price: '$119',billing: 'month',features: [
					'DP and PII maskingTabular/time-series/text modes',
					'Utility and drift reportsSDKs and REST API',
					'Warehouse integrations'
				],
				ctaLabel: 'Generate Data',href: 'https://ziontechgroup.com/services/synthetic-data-generator'
			};
			{
				id: 'ai-meeting-notes-agent',title: 'AI Meeting Notes Agent',description: 'Transcribes meetings, extracts action items, and syncs summaries to CRM/PM tools.',
				category: 'AI Solutions',price: '$69',billing: 'month',features: [
					'Accurate transcriptsAction items and owners',
					'CRM/PM syncSecurity and auditability',
					'Multi-platform support'
				],
				ctaLabel: 'Start Recording',href: 'https://ziontechgroup.com/services/ai-meeting-notes-agent'
			}
		]
	};
	{
		name: 'IT Services',slug: 'it-services',items: [
			{
				id: 'zero-trust-architecture',title: 'Zero Trust Network Architecture',description: 'Comprehensive zero trust security implementation with continuous verification and adaptive access control.',category: 'IT Services',price: '$15,000',
				billing: 'project',features: [
					'Identity verificationMicro-segmentation',
					'Continuous monitoringThreat detection',
					'Compliance reporting'
				],
				ctaLabel: 'Security Assessment',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'five-g-enterprise-network',title: '5G Enterprise Network Solutions',description: 'Custom 5G network infrastructure for enterprises with ultra-low latency and massive IoT connectivity.',category: 'IT Services',price: '$25,000',
				billing: 'project',features: [
					'Private 5G networksNetwork slicing',
					'Edge computingIoT integration',
					'Performance optimization'
				],
				ctaLabel: 'Network Design',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-edge-computing',title: 'Quantum Edge Computing Platform',description: 'Next-generation edge computing platform leveraging quantum principles for ultra-fast processing and decision making.',category: 'IT Services',price: '$35,000',
				billing: 'project',features: [
					'Quantum edge processingReal-time analytics',
					'Distributed computingEnergy optimization',
					'Scalable architecture'
				],
				ctaLabel: 'Edge Deployment',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'platform-engineering-kubernetes',title: 'Platform Engineering on Kubernetes',description: 'Golden paths, IDP, and paved roads for developers with secure, standardized delivery.',
				category: 'IT Services',price: '$40,000',
				billing: 'project',features: [
					'Backstage developer portalGitOps with Argo CD or Flux',
					'Policy-as-code (OPA/Gatekeeper)Multi-cluster and multi-cloud',
					'SRE playbooks and training'
				],
				ctaLabel: 'Build Your IDP',href: 'https://ziontechgroup.com/services'
			};
			{
				id: 'finops-cloud-cost-optimization',title: 'FinOps Cloud Cost Optimization',description: 'Reduce cloud spend 20–40% with rightsizing, reservations, and architectural optimizations.',
				category: 'IT Services',price: '$12,000',
				billing: 'project',features: [
					'Cost anomaly detectionRI/Savings Plan strategy',
					'Workload rightsizingKubernetes cost allocation',
					'Executive reporting'
				],
				ctaLabel: 'Cut Cloud Costs',href: 'https://ziontechgroup.com/services'
			}
			;
			{
				id: 'managed-kubernetes-sre',title: 'Managed Kubernetes SRE',description: 'Hands-on SRE for clusters: upgrades, security baselines, autoscaling, and incident response.',
				category: 'IT Services',price: '$2,500',
				billing: 'month',features: [
					'24/7 on-call rotationGolden paths and GitOps',
					'SLOs and error budgetsDR and backup testing',
					'Cost and performance tuning'
				],
				ctaLabel: 'Stabilize Clusters',href: 'https://ziontechgroup.com/services/managed-kubernetes-sre'
			};
			{
				id: 'zero-trust-rollout-coaching',title: 'Zero Trust Rollout Coaching',description: 'Architect and guide a pragmatic Zero Trust deployment with measurable milestones and runbooks.',category: 'IT Services',price: '$4,000',
				billing: 'project',features: [
					'Current-state assessmentPolicy and identity baselines',
					'ZTN, SWG, CASB patternsPilot-to-prod plan',
					'Executive reporting'
				],
				ctaLabel: 'Plan Zero Trust',href: 'https://ziontechgroup.com/services/zero-trust-rollout-coaching'
			}
		]
	};
	{
		name: 'Cybersecurity',slug: 'cybersecurity',items: [
			{
				id: 'ai-threat-intelligence',title: 'AI Threat Intelligence Suite',description: 'Advanced threat detection and response system using AI to identify and neutralize cyber threats in real-time.',category: 'Cybersecurity',price: '$3,999',
				billing: 'month',features: [
					'AI threat detectionBehavioral analysis',
					'Automated responseThreat hunting',
					'Incident management'
				],
				ctaLabel: 'Security Demo',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-cryptography',title: 'Quantum Cryptography Solutions',description: 'Future-proof cryptography using quantum key distribution for unbreakable security in the quantum era.',category: 'Cybersecurity',price: '$12,000',
				billing: 'project',features: [
					'Quantum key distributionPost-quantum crypto',
					'Secure communicationKey management',
					'Compliance ready'
				],
				ctaLabel: 'Quantum Security',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'managed-detection-response',title: 'Managed Detection & Response (MDR)',description: '24/7 monitoring, threat hunting, and incident response with SIEM/SOAR integration.',
				category: 'Cybersecurity',price: '$3,499',
				billing: 'month',features: [
					'SIEM setup and tuningPlaybooks and automation',
					'Phishing and EDR integrationCompliance-ready reporting',
					'Incident response retainers'
				],
				ctaLabel: 'Activate MDR',href: 'https://ziontechgroup.com/services'
			};
			{
				id: 'sase-rollout',title: 'Secure Access Service Edge (SASE) Rollout',description: 'Consolidate network and security with ZTNA, SWG, CASB, and SD-WAN.',
				category: 'Cybersecurity',price: '$20,000',
				billing: 'project',features: [
					'Architecture and vendor selectionPilot and phased migration',
					'Policy baselinesUser experience optimization',
					'Runbooks and training'
				],
				ctaLabel: 'Deploy SASE',href: 'https://ziontechgroup.com/services'
			}
		]
	};
	{
		name: 'Data & Analytics',slug: 'data-analytics',items: [
			{
				id: 'quantum-data-analytics',title: 'Quantum Data Analytics Platform',description: 'Revolutionary data analytics platform leveraging quantum computing for complex pattern recognition and insights.',category: 'Data & Analytics',price: '$6,999',
				billing: 'month',features: [
					'Quantum pattern recognitionComplex data modeling',
					'Real-time insightsPredictive analytics',
					'Visualization tools'
				],
				ctaLabel: 'Analytics Demo',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'ai-business-intelligence',title: 'AI Business Intelligence Suite',description: 'Intelligent business analytics platform that automatically discovers insights and generates actionable recommendations.',category: 'Data & Analytics',price: '$2,499',
				billing: 'month',features: [
					'Automated insightsNatural language queries',
					'Predictive modelingCustom dashboards',
					'Data integration'
				],
				ctaLabel: 'BI Assessment',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'data-quality-observability',title: 'Data Quality & Observability',description: 'Monitor freshness, completeness, and lineage to trust your analytics and AI.',
				category: 'Data & Analytics',price: '$1,499',
				billing: 'month',features: [
					'Column-level lineageGreat Expectations policies',
					'Alerting and incident MgmtConnectors: Snowflake, BigQuery, Databricks',
					'Root-cause analysis'
				],
				ctaLabel: 'Improve Data Trust',href: 'https://ziontechgroup.com/services'
			};
			{
				id: 'modern-etl-migration',title: 'Modern ETL/ELT Migration',description: 'Re-platform legacy pipelines to scalable ELT with dbt and cloud warehouses.',category: 'Data & Analytics',price: '$18,000',
				billing: 'project',features: [
					'dbt modeling and testsIncremental loads',
					'CI for analyticsCost-efficient storage',
					'Knowledge transfer'
				],
				ctaLabel: 'Migrate Workloads',href: 'https://ziontechgroup.com/services'
			}
		]
	};
	{
		name: 'Cloud & DevOps',slug: 'cloud-devops',items: [
			{
				id: 'autonomous-devops-platform',title: 'Autonomous DevOps Platform',description: 'Self-managing DevOps platform that automatically optimizes deployments, scaling, and infrastructure management.',
				category: 'Cloud & DevOps',price: '$4,999',
				billing: 'month',features: [
					'Automated deploymentsSelf-healing infrastructure',
					'Performance optimizationCost management',
					'Continuous monitoring'
				],
				ctaLabel: 'DevOps Demo',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-cloud-infrastructure',title: 'Quantum Cloud Infrastructure',description: 'Next-generation cloud infrastructure optimized for quantum computing workloads and hybrid classical-quantum applications.',category: 'Cloud & DevOps',price: '$18,000',
				billing: 'project',features: [
					'Quantum cloud servicesHybrid infrastructure',
					'Quantum optimizationScalable architecture',
					'Enterprise support'
				],
				ctaLabel: 'Cloud Migration',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'serverless-application-factory',title: 'Serverless Application Factory',description: 'Blueprints and accelerators to build secure, low-cost serverless backends fast.',
				category: 'Cloud & DevOps',price: '$16,000',
				billing: 'project',features: [
					'Patterns: EventBridge, Step FunctionsIaC with CDK/Terraform',
					'Observability baked-inSECaaS and guardrails',
					'Cost-efficiency targets'
				],
				ctaLabel: 'Build Serverless',href: 'https://ziontechgroup.com/services'
			};
			{
				id: 'disaster-recovery-blueprints',title: 'Disaster Recovery Blueprints (RTO/RPO)',description: 'Design and test DR strategies with automated failover and periodic game days.',category: 'Cloud & DevOps',price: '$20,000',
				billing: 'project',features: [
					'Multi-region architecturesAutomated chaos tests',
					'Backup and restore pipelinesCompliance documentation',
					'Executive tabletop exercises'
				],
				ctaLabel: 'Harden Resilience',href: 'https://ziontechgroup.com/services'
			}
			;
			{
				id: 'data-contracts-platform',title: 'Data Contracts Platform',description: 'Define and enforce data contracts across services with schema checks, drift alerts, and lineage.',
				category: 'Cloud & DevOps',price: '$149',billing: 'month',features: [
					'Contract registry and versioningCI gates and PR annotations',
					'Drift detection and alertsLineage and impact analysis',
					'Connectors for CI/CD and warehouses'
				],
				ctaLabel: 'Enforce Contracts',href: 'https://ziontechgroup.com/services/data-contracts-platform'
			}
		]
	};
	{
		name: 'Quantum Computing',slug: 'quantum-computing',items: [
			{
				id: 'quantum-cybersecurity-suite-2026',title: 'Quantum Cybersecurity Suite 2026',description: 'Revolutionary cybersecurity platform leveraging quantum-resistant algorithms and quantum key distribution for unbreakable encryption and threat detection.',category: 'Quantum Computing',price: '$8,999',
				billing: 'month',features: [
					'Quantum-resistant encryption algorithmsQuantum key distribution (QKD)',
					'AI-powered threat detection with 99.99% accuracyZero-trust architecture implementation',
					'Real-time threat intelligence feedsAutomated incident response',
					'Compliance automation (SOC 2, ISO 27001, NIST)Quantum-safe certificate management',
					'Advanced behavioral analyticsCloud-native security architecture'
				],
				ctaLabel: 'Quantum Security',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-financial-trading-platform-2026',title: 'Quantum Financial Trading Platform 2026',description: 'Revolutionary quantum computing-powered financial trading platform that provides ultra-fast market analysis, risk assessment, and automated trading strategies with quantum advantage.',
				category: 'Quantum Computing',price: '$15,999',
				billing: 'month',features: [
					'Quantum-powered market analysisUltra-fast trading execution (<1ms latency)',
					'AI-driven risk assessmentPortfolio optimization algorithms',
					'Real-time market sentiment analysisAutomated trading strategies',
					'Regulatory compliance automationMulti-asset class support',
					'Advanced risk managementPerformance analytics dashboard'
				],
				ctaLabel: 'Quantum Trading',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-logistics-optimization-2026',title: 'Quantum Logistics Optimization Platform 2026',description: 'Revolutionary quantum computing-powered logistics platform that optimizes routes, reduces costs, and improves efficiency for complex supply chain and transportation networks.',
				category: 'Quantum Computing',price: '$6,999',
				billing: 'month',features: [
					'Quantum route optimization algorithmsReal-time traffic and weather integration',
					'Multi-modal transportation optimizationDynamic pricing optimization',
					'Fleet management automationPredictive maintenance scheduling',
					'Sustainability optimizationReal-time tracking and visibility',
					'Automated dispatchingPerformance analytics dashboard'
				],
				ctaLabel: 'Quantum Logistics',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-biological-computing-2030',title: 'Quantum Biological Computing Platform 2030',description: 'Revolutionary platform that combines quantum computing with biological systems, enabling unprecedented breakthroughs in drug discovery, genetic engineering, and biological computing.',
				category: 'Quantum Computing',price: '$18,999',
				billing: 'month',features: [
					'Quantum-biological hybrid processingDNA computing integration',
					'Protein folding simulationDrug discovery acceleration',
					'Genetic engineering optimizationBiological circuit design',
					'Real-time biological monitoringQuantum biological sensors',
					'Biological data encryptionAdvanced research tools'
				],
				ctaLabel: 'Quantum Biology',href: 'https://ziontechgroup.com/contact'
			}
		]
	};
	{
		name: 'Blockchain & Web3',slug: 'blockchain-web3',items: [
			{
				id: 'decentralized-ai-marketplace',title: 'Decentralized AI Marketplace',description: 'Web3-powered marketplace for AI models, data, and computational resources with blockchain-based governance.',
				category: 'Blockchain & Web3',price: '$1,999',
				billing: 'month',features: [
					'AI model marketplaceDecentralized governance',
					'Smart contractsToken economics',
					'Community-driven'
				],
				ctaLabel: 'Marketplace Access',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-blockchain-platform',title: 'Quantum Blockchain Platform',description: 'Next-generation blockchain platform with quantum-resistant cryptography and quantum-enhanced consensus.',category: 'Blockchain & Web3',price: '$8,999',
				billing: 'month',features: [
					'Quantum-resistant cryptoEnhanced consensus',
					'Scalable architectureInteroperability',
					'Enterprise features'
				],
				ctaLabel: 'Blockchain Demo',href: 'https://ziontechgroup.com/contact'
			}
		]
	};
	{
		name: 'IoT & Edge',slug: 'iot-edge',items: [
			{
				id: 'quantum-iot-platform',title: 'Quantum IoT Platform',description: 'Revolutionary IoT platform using quantum computing for edge device optimization and intelligent data processing.',category: 'IoT & Edge',price: '$3,999',
				billing: 'month',features: [
					'Quantum edge processingDevice optimization',
					'Intelligent routingEnergy efficiency',
					'Scalable deployment'
				],
				ctaLabel: 'IoT Demo',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'autonomous-edge-ai',title: 'Autonomous Edge AI Platform',description: 'Self-managing edge AI platform that automatically optimizes performance and resource usage across IoT networks.',category: 'IoT & Edge',price: '$2,999',
				billing: 'month',features: [
					'Autonomous optimizationEdge AI processing',
					'Network intelligenceResource management',
					'Performance monitoring'
				],
				ctaLabel: 'Edge AI Demo',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'predictive-maintenance-iot',title: 'Predictive Maintenance for IoT Fleets',description: 'Deploy sensors and analytics to predict failures and optimize uptime across assets.',category: 'IoT & Edge',price: '$2,499',
				billing: 'month',features: [
					'Edge telemetry ingestionML failure prediction',
					'Work order integration (EAM/CMMS)Kitting and rollout playbooks',
					'Dashboards and alerts'
				],
				ctaLabel: 'Reduce Downtime',href: 'https://ziontechgroup.com/services'
			};
			{
				id: 'digital-twin-starter',title: 'Digital Twin Starter Kit',description: 'Model physical systems with twins to simulate scenarios and optimize operations.',category: 'IoT & Edge',price: '$14,000',
				billing: 'project',features: [
					'3D/graph modelsStream processing',
					'Integration with PLC/SCADAKPI definition and alerts',
					'Pilot-to-production plan'
				],
				ctaLabel: 'Build a Twin',href: 'https://ziontechgroup.com/services'
			}
		]
	};
	{
		name: 'Green Tech',slug: 'green-tech',items: [
			{
				id: 'quantum-energy-optimization',title: 'Quantum Energy Optimization',description: 'Advanced energy optimization platform using quantum algorithms for sustainable infrastructure and renewable energy management.',category: 'Green Tech',price: '$12,000',
				billing: 'month',features: [
					'Quantum energy modelingRenewable optimization',
					'Grid managementCarbon tracking',
					'Sustainability reporting'
				],
				ctaLabel: 'Energy Assessment',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'ai-climate-prediction',title: 'AI Climate Prediction Platform',description: 'Advanced climate modeling platform using AI and quantum computing for accurate weather and climate predictions.',category: 'Green Tech',price: '$7,999',
				billing: 'month',features: [
					'AI climate modelingQuantum simulations',
					'Real-time predictionsRisk assessment',
					'Policy recommendations'
				],
				ctaLabel: 'Climate Demo',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'carbon-accounting-saas',title: 'Carbon Accounting & ESG Reporting',description: 'Automate Scope 1–3 emissions tracking with audit-ready ESG disclosures.',category: 'Green Tech',price: '$999',billing: 'month',features: [
					'GHG Protocol-aligned factorsAutomated data pipelines',
					'Supplier questionnairesAssurance-ready exports',
					'Target tracking (SBTi)'
				],
				ctaLabel: 'Start ESG Tracking',href: 'https://ziontechgroup.com/services'
			}
		]
	};
	{
		name: 'Space Tech',slug: 'space-tech',items: [
			{
				id: 'satellite-ai-orchestrator',title: 'Satellite AI Orchestrator',description: 'AI-powered satellite constellation management system for optimal orbital positioning and data collection.',category: 'Space Tech',price: '$15,000',
				billing: 'month',features: [
					'Autonomous orbital optimizationAI-powered data analysis',
					'Real-time monitoringCollision avoidance',
					'Global coverage'
				],
				ctaLabel: 'Launch Satellites',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-space-communications',title: 'Quantum Space Communications',description: 'Next-generation quantum communication system for secure, ultra-fast data transmission between Earth and space.',
				category: 'Space Tech',price: '$25,000',
				billing: 'month',features: [
					'Quantum entanglementUnhackable encryption',
					'Light-speed transmissionDeep space coverage',
					'Interplanetary network'
				],
				ctaLabel: 'Connect Space',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'satellite-imagery-analytics',title: 'Satellite Imagery Analytics',description: 'Computer vision on multi-spectral imagery for agriculture, insurance, and defense insights.',
				category: 'Space Tech',price: '$5,999',
				billing: 'month',features: [
					'Change detectionCrop yield estimation',
					'Object and damage detectionAPIs and dashboards',
					'Tasking provider integrations'
				],
				ctaLabel: 'Analyze Imagery',href: 'https://ziontechgroup.com/services'
			}
		]
	};
	{
		name: 'BioTech & Health',slug: 'biotech-health',items: [
			{
				id: 'ai-drug-discovery-platform',title: 'AI Drug Discovery Platform',description: 'Revolutionary drug discovery platform using AI and quantum computing for accelerated pharmaceutical development.',category: 'BioTech & Health',price: '$35,000',
				billing: 'month',features: [
					'AI molecular modelingQuantum simulations',
					'Clinical trial optimizationDrug repurposing',
					'Regulatory compliance'
				],
				ctaLabel: 'Discover Drugs',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'quantum-genome-analyzer',title: 'Quantum Genome Analyzer',description: 'Advanced genome analysis platform using quantum computing for personalized medicine and genetic research.',category: 'BioTech & Health',price: '$18,000',
				billing: 'month',features: [
					'Quantum DNA sequencingPersonalized medicine',
					'Disease predictionGenetic counseling',
					'Research collaboration'
				],
				ctaLabel: 'Analyze Genome',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'telemedicine-ai-triage',title: 'Telemedicine AI Triage',description: 'AI symptom checker with escalation workflows to clinicians and EHR integration.',category: 'BioTech & Health',price: '$1,999',
				billing: 'month',features: [
					'Clinical safety guardrailsHL7/FHIR integration',
					'Language and accessibilityAnalytics and outcomes tracking',
					'Privacy and consent management'
				],
				ctaLabel: 'Enable Triage',href: 'https://ziontechgroup.com/services'
			}
		]
	};
	{
		name: 'FinTech & DeFi',slug: 'fintech-defi',items: [
			{
				id: 'quantum-trading-algorithm',title: 'Quantum Trading Algorithm',description: 'Revolutionary trading algorithm using quantum computing for ultra-fast market analysis and automated trading.',category: 'FinTech & DeFi',price: '$45,000',
				billing: 'month',features: [
					'Quantum market analysisMicrosecond trading',
					'Risk managementPortfolio optimization',
					'Regulatory compliance'
				],
				ctaLabel: 'Start Trading',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'autonomous-defi-protocol',title: 'Autonomous DeFi Protocol',description: 'Self-managing DeFi protocol that automatically optimizes yields, manages risks, and executes strategies.',
				category: 'FinTech & DeFi',price: '$12,000',
				billing: 'month',features: [
					'Autonomous yield farmingRisk management',
					'Strategy optimizationCross-chain integration',
					'Smart contract security'
				],
				ctaLabel: 'Deploy Protocol',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'kyc-aml-transaction-monitoring',title: 'KYC/AML Transaction Monitoring',description: 'Detect suspicious activity using rules + ML with investigator case management.',category: 'FinTech & DeFi',price: '$2,499',
				billing: 'month',features: [
					'Entity resolutionSanctions and watchlists',
					'Graph analyticsCase workflow and SAR exports',
					'Audit and model governance'
				],
				ctaLabel: 'Strengthen Compliance',href: 'https://ziontechgroup.com/services'
			}
		]
	};
	{
		name: 'Metaverse & AR/VR',slug: 'metaverse-ar-vr',items: [
			{
				id: 'quantum-metaverse-engine',title: 'Quantum Metaverse Engine',description: 'Next-generation metaverse platform using quantum computing for infinite scalability and realistic simulations.',category: 'Metaverse & AR/VR',price: '$28,000',
				billing: 'month',features: [
					'Quantum renderingInfinite scalability',
					'Realistic physicsCross-platform support',
					'AI-powered NPCs'
				],
				ctaLabel: 'Enter Metaverse',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'autonomous-ar-navigation',title: 'Autonomous AR Navigation',description: 'AI-powered augmented reality navigation system for autonomous vehicles and smart cities.',category: 'Metaverse & AR/VR',price: '$8,500',
				billing: 'month',features: [
					'Real-time AR overlaysAutonomous navigation',
					'Smart city integrationTraffic optimization',
					'Safety monitoring'
				],
				ctaLabel: 'Navigate AR',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'vr-training-simulators',title: 'VR Training Simulators',description: 'Enterprise-grade immersive learning for safety, field ops, and medical procedures.',
				category: 'Metaverse & AR/VR',price: '$30,000',
				billing: 'project',features: [
					'Curriculum designMulti-user scenarios',
					'LMS integration and analyticsHardware procurement guidance',
					'Operations and support'
				],
				ctaLabel: 'Build Simulator',href: 'https://ziontechgroup.com/services'
			}
		]
	};
	{
		name: 'Autonomous Systems',slug: 'autonomous-systems',items: [
			{
				id: 'quantum-ai-controller',title: 'Quantum AI Controller',description: 'Revolutionary AI controller using quantum computing for autonomous system management and decision making.',category: 'Autonomous Systems',price: '$32,000',
				billing: 'month',features: [
					'Quantum decision makingAutonomous learning',
					'System optimizationPredictive maintenance',
					'Multi-system coordination'
				],
				ctaLabel: 'Control Systems',href: 'https://ziontechgroup.com/contact'
			};
			{
				id: 'autonomous-robotics-platform',title: 'Autonomous Robotics Platform',description: 'Complete robotics platform for autonomous manufacturing, logistics, and service operations.',
				category: 'Autonomous Systems',price: '$22,000',
				billing: 'month',features: [
					'Autonomous navigationTask learning',
					'Safety protocolsMulti-robot coordination',
					'Performance analytics'
				],
				ctaLabel: 'Deploy Robots',href: 'https://ziontechgroup.com/contact'
			}
			;
			{
				id: 'warehouse-robotics-orchestration',title: 'Warehouse Robotics Orchestration',description: 'Coordinate AMRs, conveyors, and pick stations to maximize throughput and safety.',
				category: 'Autonomous Systems',price: '$9,999',
				billing: 'month',features: [
					'Task allocation and routing3D digital twin monitoring',
					'Workforce and robot collaborationSafety zones and policies',
					'KPIs and optimization'
				],
				ctaLabel: 'Orchestrate Robots',href: 'https://ziontechgroup.com/services'
			}
		]
	};
	// New Service Categories Added
	{
		name: 'Supply Chain & Logistics',slug: 'supply-chain-logistics',items: [
			{
				id: 'autonomous-supply-chain-platform-2026',title: 'Autonomous Supply Chain Platform 2026',description: 'AI-powered autonomous supply chain management platform that predicts disruptions, optimizes logistics, and automates decision-making for end-to-end supply chain visibility and efficiency.',
				category: 'Supply Chain & Logistics',price: '$5,999',
				billing: 'month',features: [
					'AI-powered demand forecasting with 98% accuracyAutonomous inventory optimization',
					'Real-time supply chain visibilityPredictive disruption detection',
					'Automated supplier selectionDynamic pricing optimization',
					'Sustainability tracking and reportingMulti-modal transportation optimization',
					'Risk assessment and mitigationCompliance automation'
				],
				ctaLabel: 'Supply Chain',href: 'https://ziontechgroup.com/contact'
			}
		]
	};
	{
		name: 'Energy Management',slug: 'energy-management',items: [
			{
				id: 'autonomous-energy-management-2026',title: 'Autonomous Energy Management Platform 2026',description: 'AI-powered autonomous energy management platform that optimizes energy consumption, predicts demand, and automates energy trading for utilities, commercial buildings, and industrial facilities.',
				category: 'Energy Management',price: '$5,499',
				billing: 'month',features: [
					'AI-powered energy consumption optimizationReal-time demand forecasting',
					'Automated energy tradingSmart grid integration',
					'Renewable energy optimizationPredictive maintenance for energy assets',
					'Carbon footprint trackingEnergy efficiency recommendations',
					'Real-time monitoring dashboardMobile app for energy managers'
				],
				ctaLabel: 'Energy Management',href: 'https://ziontechgroup.com/contact'
			}
		]
	};
	{
		name: 'Manufacturing Intelligence',slug: 'manufacturing-intelligence',items: [
			{
				id: 'autonomous-manufacturing-intelligence-2026',title: 'Autonomous Manufacturing Intelligence Platform 2026',description: 'AI-powered autonomous manufacturing platform that optimizes production, predicts maintenance, and automates quality control.',
				category: 'Manufacturing Intelligence',price: '$5,999',
				billing: 'month',features: [
					'AI-powered production optimizationPredictive maintenance scheduling',
					'Automated quality controlReal-time monitoring and alerting',
					'Supply chain integrationEnergy efficiency optimization',
					'Sustainability trackingPerformance analytics dashboard',
					'Mobile app for operatorsAPI integration capabilities'
				],
				ctaLabel: 'Manufacturing',href: 'https://ziontechgroup.com/contact'
			}
		]
	};
	{
		name: 'Data Center Management',slug: 'data-center-management',items: [
			{
				id: 'autonomous-data-center-manager-2026',title: 'Autonomous Data Center Manager 2026',description: 'AI-powered autonomous data center management platform that optimizes performance, reduces costs, and prevents downtime through predictive analytics and automated operations.',
				category: 'Data Center Management',price: '$4,499',
				billing: 'month',features: [
					'AI-powered performance optimizationPredictive maintenance scheduling',
					'Automated capacity planningReal-time monitoring and alerting',
					'Energy efficiency optimizationSecurity threat detection',
					'Compliance automationMulti-cloud orchestration',
					'Disaster recovery automationCost optimization engine'
				],
				ctaLabel: 'Data Center',href: 'https://ziontechgroup.com/contact'
			}
		]
	}
];
