import React from 'react';
import Head from 'next/head';
import { Cloud, Cpu, Server, Database, Settings, Shield, Phone, Mail, MapPin, Check } from 'lucide-react';
import Layout from '../components/layout/Layout';

import ServiceAds from '../components/sections/ServiceAds';

export default function ITServicesPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const offerings = [
    { icon: <Cloud className="w-6 h-6 text-cyan-400" />, title: 'Cloud Platform Engineering', desc: 'Landing zones, multi-account architectures, and secure-by-default foundations on AWS, Azure, and GCP.' },
    { icon: <Cpu className="w-6 h-6 text-purple-400" />, title: 'DevOps & Platform Ops', desc: 'CI/CD, IaC (Terraform/Pulumi), GitOps (ArgoCD/Flux), golden images, internal platforms.' },
    { icon: <Server className="w-6 h-6 text-amber-400" />, title: 'SRE & Reliability', desc: 'SLOs/SLIs, error budgets, incident response, chaos testing, capacity planning and autoscaling.' },
    { icon: <Database className="w-6 h-6 text-emerald-400" />, title: 'Data & Observability', desc: 'ELK/Opensearch, Prometheus/Grafana, OpenTelemetry, cost-aware logging and tracing.' },
    { icon: <Settings className="w-6 h-6 text-rose-400" />, title: 'FinOps & Cost Optimization', desc: 'Rightsizing, savings plans, K8s bin-packing, storage lifecycle, multi-cloud egress control.' },
    { icon: <Shield className="w-6 h-6 text-blue-400" />, title: 'Governance & Compliance', desc: 'SOC 2, ISO 27001, HIPAA baselines, policy-as-code with OPA/Conftest and drift detection.' },
  ];

  const packages = [
    { name: 'Kickstart', price: '$4,900 fixed', items: ['Cloud baseline review', 'CI/CD quickstart', 'Observability lite', 'Cost 30-day plan'] },
    { name: 'Scale', price: '$9,900 fixed', items: ['Secure landing zone', 'GitOps platform', 'SLOs + alerts', 'FinOps automation'] },
    { name: 'Managed', price: 'From $2,000/month', items: ['Ops on-call 24/7', 'Release & env mgmt', 'Weekly tune-ups', 'Monthly executive report'] },
  ];

  const featuredITAds = [
    {
      title: '💸 Cloud Cost Optimizer Pro',
      description: 'Rightsizing, storage lifecycle, anomaly detection and K8s bin-packing insights.',
      price: 'Starting at $99/month',
      features: ['Rightsizing & schedules', 'Lifecycle policies', 'Anomaly alerts', 'IaC outputs'],
      link: 'https://ziontechgroup.com/cloud-cost-optimizer',
      contactInfo
    },
    {
      title: '🗄️ Database Performance Monitor',
      description: 'Slow query capture, AI index suggestions, capacity forecasting for Postgres/MySQL.',
      price: 'Starting at $79/month',
      features: ['Slow query ranking', 'AI index advice', 'Pool tuning', 'SLA/SLO dashboards'],
      link: 'https://ziontechgroup.com/database-performance-monitor',
      contactInfo
    },
    {
      title: '🔐 API Security Scanner',
      description: 'Automated OpenAPI/GraphQL scanning, auth/Z checks, and dependency audit.',
      price: 'Starting at $59/month',
      features: ['Auth/Z misconfig checks', 'OWASP top-10 tests', 'CI gate', 'Fix guidance'],
      link: 'https://ziontechgroup.com/api-security-scanner',
      contactInfo
    },
    {
      icon: Code,
      name: 'Enterprise Architecture Consulting',
      description: 'Strategic technology planning, system design, and architecture optimization for enterprise-scale solutions.',
      features: [
        'Technology stack evaluation and selection',
        'System architecture design and documentation',
        'Scalability and performance planning',
        'Integration strategy and roadmap development',
        'Technical debt assessment and remediation',
        'Digital transformation consulting'
      ],
      pricing: '$150 – $300/hour',
      projectPricing: '$15,000 – $75,000/project',
      timeline: '2–8 weeks',
      benefits: [
        'Optimized technology architecture',
        'Reduced technical debt',
        'Improved system performance',
        'Strategic technology roadmap'
      ],
      category: 'Consulting'
    },
    {
      icon: Database,
      name: 'Database Design & Optimization',
      description: 'Database architecture, performance tuning, and migration services for optimal data management.',
      features: [
        'Database architecture design and implementation',
        'Performance tuning and optimization',
        'Data migration and consolidation',
        'Backup and disaster recovery setup',
        'Database security and compliance',
        'Monitoring and maintenance automation'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$8,000 – $40,000/project',
      timeline: '2–6 weeks',
      benefits: [
        'Improved database performance',
        'Enhanced data security',
        'Reduced maintenance overhead',
        'Optimized storage costs'
      ],
      category: 'Data Management'
    },
    {
      icon: LinkIcon,
      name: 'API Development & Integration',
      description: 'RESTful and GraphQL API development, microservices architecture, and third-party integrations.',
      features: [
        'RESTful and GraphQL API development',
        'Microservices architecture implementation',
        'Third-party service integration',
        'API documentation and testing frameworks',
        'API security and authentication',
        'Performance monitoring and optimization'
      ],
      pricing: '$120 – $280/hour',
      projectPricing: '$10,000 – $50,000/project',
      timeline: '3–12 weeks',
      benefits: [
        'Scalable API architecture',
        'Improved system integration',
        'Enhanced developer experience',
        'Reduced development time'
      ],
      category: 'Development'
    },
    {
      icon: Smartphone,
      name: 'Mobile App Development',
      description: 'Native iOS/Android applications, React Native, and Flutter development for cross-platform solutions.',
      features: [
        'Native iOS and Android development',
        'React Native cross-platform apps',
        'Flutter mobile applications',
        'UI/UX design and implementation',
        'App store optimization and deployment',
        'Performance optimization and testing'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'High-performance mobile applications',
        'Cross-platform compatibility',
        'Optimized user experience',
        'Reduced development costs'
      ],
      category: 'Development'
    },
    {
      icon: Globe,
      name: 'Web Application Development',
      description: 'Modern web applications using React, Next.js, Vue.js, and full-stack development solutions.',
      features: [
        'React and Next.js applications',
        'Vue.js and Nuxt.js development',
        'Full-stack web applications',
        'Progressive Web App (PWA) development',
        'Performance optimization and SEO',
        'Responsive design and accessibility'
      ],
      pricing: '$80 – $200/hour',
      projectPricing: '$15,000 – $100,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Modern, scalable web applications',
        'Optimized performance and SEO',
        'Responsive and accessible design',
        'Reduced maintenance costs'
      ],
      category: 'Development'
    },
    {
      icon: Server,
      name: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure setup, management, and optimization for enterprise environments.',
      features: [
        'Server setup and configuration',
        'Network infrastructure design',
        'Storage and backup solutions',
        'Monitoring and alerting systems',
        'Performance optimization',
        'Disaster recovery planning'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Reliable and scalable infrastructure',
        'Reduced downtime and maintenance',
        'Optimized performance and costs',
        'Enhanced security and compliance'
      ],
      category: 'Infrastructure'
    },
    {
      icon: Cpu,
      name: 'High-Performance Computing Solutions',
      description: 'Advanced HPC infrastructure for scientific computing, AI/ML workloads, and data-intensive applications.',
      features: [
        'GPU cluster setup and optimization',
        'Distributed computing frameworks',
        'High-speed networking configuration',
        'Parallel processing optimization',
        'Scientific computing environments',
        'AI/ML infrastructure scaling'
      ],
      pricing: '$200 – $500/hour',
      projectPricing: '$50,000 – $500,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Massive computational power',
        'Accelerated research and development',
        'Scalable AI/ML infrastructure',
        'Cost-effective high-performance computing'
      ],
      category: 'High-Performance Computing'
    },
    {
      icon: Globe,
      name: 'IoT Platform & Device Management',
      description: 'Comprehensive IoT solutions including device management, data analytics, and edge computing.',
      features: [
        'IoT device connectivity and management',
        'Edge computing infrastructure',
        'Real-time data processing and analytics',
        'Device security and firmware updates',
        'IoT platform integration',
        'Predictive maintenance systems'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Scalable IoT infrastructure',
        'Real-time device monitoring',
        'Automated device management',
        'Data-driven insights and optimization'
      ],
      category: 'IoT & Edge Computing'
    },
    {
      icon: BarChart3,
      name: 'Enterprise Digital Transformation',
      description: 'Comprehensive digital transformation consulting and implementation for modern business operations.',
      features: [
        'Digital strategy and roadmap development',
        'Legacy system modernization',
        'Cloud-native application development',
        'Data analytics and business intelligence',
        'Process automation and optimization',
        'Change management and training'
      ],
      pricing: '$200 – $400/hour',
      projectPricing: '$100,000 – $1,000,000/project',
      timeline: '12–52 weeks',
      benefits: [
        'Modernized business operations',
        'Improved efficiency and productivity',
        'Enhanced customer experience',
        'Competitive advantage in digital markets'
      ],
      category: 'Digital Transformation'
    },
    {
      icon: Shield,
      name: 'Advanced Threat Intelligence Platform',
      description: 'Comprehensive cybersecurity platform with threat intelligence, incident response, and security analytics.',
      features: [
        'Threat intelligence gathering and analysis',
        'Incident response automation',
        'Security analytics and reporting',
        'Threat hunting and investigation',
        'Compliance monitoring and reporting',
        'Security orchestration and automation'
      ],
      pricing: '$10,000 – $100,000/project',
      projectPricing: '$5,000 – $25,000/month managed',
      timeline: '8–20 weeks',
      benefits: [
        'Proactive threat detection',
        'Automated incident response',
        'Enhanced security visibility',
        'Reduced security risks and costs'
      ],
      category: 'Cybersecurity'
    },
    {
      icon: Database,
      name: 'Enterprise Data Platform',
      description: 'Modern data platform architecture with real-time analytics, data lakes, and business intelligence.',
      features: [
        'Data lake and warehouse architecture',
        'Real-time data processing pipelines',
        'Business intelligence and analytics',
        'Data governance and compliance',
        'Machine learning model deployment',
        'Data visualization and reporting'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$75,000 – $500,000/project',
      timeline: '12–32 weeks',
      benefits: [
        'Unified data platform',
        'Real-time business insights',
        'Improved data quality and governance',
        'Enhanced decision-making capabilities'
      ],
      category: 'Data & Analytics'
    },
    {
      icon: Code,
      name: 'Enterprise Application Integration',
      description: 'Seamless integration of enterprise applications with modern integration platforms and APIs.',
      features: [
        'Enterprise Service Bus (ESB) implementation',
        'API gateway and management',
        'Legacy system integration',
        'Real-time data synchronization',
        'Integration monitoring and management',
        'Cloud and on-premises connectivity'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$40,000 – $300,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Unified enterprise systems',
        'Improved data flow and accuracy',
        'Reduced integration complexity',
        'Enhanced business process efficiency'
      ],
      category: 'Integration'
    },
    {
      icon: Smartphone,
      name: 'Quantum Computing Consulting',
      description: 'Quantum computing strategy, algorithm development, and hybrid quantum-classical solutions.',
      features: [
        'Quantum computing strategy development',
        'Quantum algorithm design and optimization',
        'Hybrid quantum-classical solutions',
        'Quantum software development',
        'Quantum hardware evaluation',
        'Quantum security and cryptography'
      ],
      pricing: '$300 – $800/hour',
      projectPricing: '$100,000 – $2,000,000/project',
      timeline: '16–52 weeks',
      benefits: [
        'Cutting-edge quantum capabilities',
        'Exponential computational advantages',
        'Future-proof technology investment',
        'Competitive advantage in research'
      ],
      category: 'Quantum Computing'
    },
    {
      icon: Globe,
      name: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, smart contracts, DeFi protocols, and Web3 application development.',
      features: [
        'Blockchain platform development',
        'Smart contract development and auditing',
        'DeFi protocol implementation',
        'NFT marketplace development',
        'Web3 application architecture',
        'Cryptocurrency integration'
      ],
      pricing: '$150 – $400/hour',
      projectPricing: '$50,000 – $500,000/project',
      timeline: '8–32 weeks',
      benefits: [
        'Decentralized application solutions',
        'Enhanced security and transparency',
        'Reduced intermediary costs',
        'Innovative business models'
      ],
      category: 'Blockchain & Web3'
    },
    {
      icon: TestTube,
      name: 'DevSecOps & Security Automation',
      description: 'Integrated security practices in DevOps workflows with automated security testing and compliance.',
      features: [
        'Security integration in CI/CD pipelines',
        'Automated security testing and scanning',
        'Infrastructure security as code',
        'Compliance automation and reporting',
        'Security monitoring and alerting',
        'Vulnerability management automation'
      ],
      pricing: '$120 – $280/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Integrated security in development',
        'Automated compliance management',
        'Reduced security vulnerabilities',
        'Faster and more secure deployments'
      ],
      category: 'DevSecOps'
    },
    {
      icon: BarChart3,
      name: 'Data Engineering & Analytics',
      description: 'Data pipeline development, data warehouses, ETL processes, and business intelligence solutions.',
      features: [
        'Data pipeline development and optimization',
        'Data warehouse design and implementation',
        'ETL/ELT process automation',
        'Business intelligence dashboards',
        'Real-time data processing',
        'Data quality and governance'
      ],
      pricing: '$120 – $280/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Improved data-driven decision making',
        'Automated data processing',
        'Enhanced business intelligence',
        'Reduced data processing costs'
      ],
      category: 'Data Management'
    },
    {
      icon: Cpu,
      name: 'Blockchain & Web3 Development',
      description: 'Smart contract development, DeFi protocols, and blockchain integration solutions.',
      features: [
        'Smart contract development and auditing',
        'DeFi protocol design and implementation',
        'Blockchain integration and dApp development',
        'Tokenomics and governance system design',
        'NFT marketplace development',
        'Cross-chain interoperability solutions'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Cutting-edge blockchain solutions',
        'Decentralized application development',
        'Enhanced security and transparency',
        'Innovative business models'
      ],
      category: 'Emerging Technologies'
    },
    {
      icon: Wrench,
      name: 'IoT & Embedded Systems',
      description: 'IoT device development, sensor integration, and edge computing solutions.',
      features: [
        'IoT device development and prototyping',
        'Sensor integration and data collection',
        'Edge computing and real-time processing',
        'IoT platform development',
        'Device management and monitoring',
        'Security and compliance implementation'
      ],
      pricing: '$100 – $300/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Connected device solutions',
        'Real-time data processing',
        'Improved operational efficiency',
        'Innovative IoT applications'
      ],
      category: 'Emerging Technologies'
    },
    {
      icon: Cloud,
      name: 'Edge Computing Infrastructure',
      description: 'Distributed edge computing solutions for low-latency applications and real-time processing.',
      features: [
        'Edge server deployment and management',
        'Content delivery network optimization',
        'Real-time data processing at the edge',
        'Edge AI and machine learning deployment',
        '5G network integration',
        'Edge security and compliance'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$40,000 – $200,000/project',
      timeline: '8–16 weeks',
      benefits: [
        '50% reduction in latency',
        'Improved application performance',
        'Enhanced user experience',
        'Reduced bandwidth costs'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Shield,
      name: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust implementation with identity verification and micro-segmentation.',
      features: [
        'Identity and access management (IAM)',
        'Network micro-segmentation',
        'Device trust and compliance',
        'Application security controls',
        'Data encryption and protection',
        'Continuous security monitoring'
      ],
      pricing: '$8,000 – $50,000/project',
      projectPricing: '$3,000 – $12,000/month managed',
      timeline: '6–16 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Compliance with regulations',
        'Improved threat detection'
      ],
      category: 'Security'
    },
    {
      icon: Database,
      name: 'Data Lake & Warehouse Modernization',
      description: 'Modern data architecture with cloud-native data lakes and real-time analytics.',
      features: [
        'Cloud data lake design and implementation',
        'Real-time data streaming and processing',
        'Data governance and cataloging',
        'Advanced analytics and ML integration',
        'Data quality and lineage tracking',
        'Cost optimization and performance tuning'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$30,000 – $150,000/project',
      timeline: '8–20 weeks',
      benefits: [
        'Unified data platform',
        'Real-time analytics capabilities',
        'Improved data quality',
        'Reduced data processing costs'
      ],
      category: 'Data Management'
    },
    {
      icon: Code,
      name: 'Microservices Architecture Design',
      description: 'Scalable microservices architecture with service mesh and container orchestration.',
      features: [
        'Microservices design and implementation',
        'Service mesh and API gateway setup',
        'Container orchestration with Kubernetes',
        'Service discovery and load balancing',
        'Distributed tracing and monitoring',
        'DevOps and CI/CD integration'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $100,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Improved scalability and performance',
        'Faster development and deployment',
        'Better fault isolation',
        'Enhanced team productivity'
      ],
      category: 'Development'
    },
    {
      icon: Globe,
      name: 'Progressive Web App Development',
      description: 'Modern PWA development with offline capabilities and native app features.',
      features: [
        'PWA architecture and implementation',
        'Service worker development',
        'Offline functionality and caching',
        'Push notifications and background sync',
        'App-like user experience',
        'Performance optimization'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$20,000 – $80,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Native app-like experience',
        'Offline functionality',
        'Reduced development costs',
        'Cross-platform compatibility'
      ],
      category: 'Development'
    },
    {
      icon: Server,
      name: 'Hybrid Cloud Management',
      description: 'Seamless hybrid cloud operations with multi-cloud orchestration and management.',
      features: [
        'Multi-cloud strategy and planning',
        'Hybrid cloud architecture design',
        'Cloud cost optimization and governance',
        'Disaster recovery and backup solutions',
        'Security and compliance management',
        'Performance monitoring and optimization'
      ],
      pricing: '$120 – $280/hour',
      projectPricing: '$15,000 – $75,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Flexible cloud deployment',
        'Reduced vendor lock-in',
        'Optimized costs and performance',
        'Enhanced disaster recovery'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: BarChart3,
      name: 'Real-Time Analytics Platform',
      description: 'Streaming analytics platform with real-time data processing and visualization.',
      features: [
        'Real-time data streaming and processing',
        'Stream analytics and complex event processing',
        'Real-time dashboards and visualization',
        'Machine learning model deployment',
        'Data pipeline monitoring and alerting',
        'Scalable architecture design'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$35,000 – $120,000/project',
      timeline: '8–16 weeks',
      benefits: [
        'Real-time business insights',
        'Faster decision making',
        'Improved operational efficiency',
        'Enhanced customer experience'
      ],
      category: 'Data Management'
    },
    {
      icon: Cpu,
      name: 'Quantum Computing Integration',
      description: 'Quantum computing solutions and hybrid quantum-classical system integration.',
      features: [
        'Quantum algorithm development',
        'Hybrid quantum-classical systems',
        'Quantum machine learning applications',
        'Quantum cryptography implementation',
        'Quantum simulation and optimization',
        'Quantum hardware integration'
      ],
      pricing: '$200 – $500/hour',
      projectPricing: '$50,000 – $300,000/project',
      timeline: '12–32 weeks',
      benefits: [
        'Exponential computational power',
        'Advanced optimization capabilities',
        'Enhanced security with quantum cryptography',
        'Competitive advantage in research'
      ],
      category: 'Emerging Technologies'
    },
    {
      icon: TestTube,
      name: 'AI/ML Model Deployment & MLOps',
      description: 'End-to-end machine learning operations with model deployment and monitoring.',
      features: [
        'ML model deployment and serving',
        'Model versioning and management',
        'A/B testing and experimentation',
        'Model monitoring and drift detection',
        'Automated retraining pipelines',
        'MLOps workflow automation'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $100,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Faster model deployment',
        'Improved model performance',
        'Automated ML operations',
        'Reduced operational overhead'
      ],
      category: 'AI & Machine Learning'
    },
    {
      icon: BookOpen,
      name: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation with technology roadmap and change management.',
      features: [
        'Digital strategy and roadmap development',
        'Technology assessment and selection',
        'Change management and training',
        'Process optimization and automation',
        'Customer experience transformation',
        'Innovation and R&D strategy'
      ],
      pricing: '$200 – $400/hour',
      projectPricing: '$30,000 – $150,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Strategic technology alignment',
        'Improved operational efficiency',
        'Enhanced customer experience',
        'Competitive advantage'
      ],
      category: 'Consulting'
    },
    {
      icon: Wrench,
      name: 'AR/VR Development & Integration',
      description: 'Augmented and virtual reality solutions for training, visualization, and customer engagement.',
      features: [
        'AR/VR application development',
        '3D modeling and animation',
        'Spatial computing and tracking',
        'Multi-platform deployment',
        'User experience design',
        'Performance optimization'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$40,000 – $200,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Immersive user experiences',
        'Enhanced training and education',
        'Improved customer engagement',
        'Innovative business applications'
      ],
      category: 'Emerging Technologies'
    },
    {
      icon: Cloud,
      name: 'Enterprise Application Integration',
      description: 'Comprehensive enterprise application integration with API management, data synchronization, and workflow automation.',
      features: [
        'Enterprise Service Bus (ESB) implementation',
        'API gateway and management platform',
        'Data integration and synchronization',
        'Workflow automation and orchestration',
        'Legacy system modernization',
        'Real-time data processing and analytics'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Seamless system integration',
        'Improved data consistency',
        'Reduced integration complexity',
        'Enhanced business agility'
      ],
      category: 'Enterprise Integration'
    },
    {
      icon: Shield,
      name: 'Advanced Threat Intelligence Platform',
      description: 'Comprehensive threat intelligence and security monitoring with automated response capabilities.',
      features: [
        'Threat intelligence gathering and analysis',
        'Security Information and Event Management (SIEM)',
        'Automated incident response and remediation',
        'Threat hunting and investigation',
        'Security orchestration and automation',
        'Compliance monitoring and reporting'
      ],
      pricing: '$200 – $400/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Proactive threat detection',
        'Automated security response',
        'Reduced security incidents',
        'Enhanced security posture'
      ],
      category: 'Security'
    },
    {
      icon: Cpu,
      name: 'High-Performance Computing Solutions',
      description: 'Advanced HPC infrastructure with GPU computing, parallel processing, and scientific computing capabilities.',
      features: [
        'GPU-accelerated computing clusters',
        'Parallel processing and distributed computing',
        'Scientific computing and simulation',
        'Machine learning and AI training infrastructure',
        'High-speed networking and storage',
        'Performance optimization and tuning'
      ],
      pricing: '$180 – $400/hour',
      projectPricing: '$50,000 – $500,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Massive computational power',
        'Accelerated research and development',
        'Cost-effective computing resources',
        'Scalable infrastructure'
      ],
      category: 'High-Performance Computing'
    },
    {
      icon: Globe,
      name: 'IoT Platform & Device Management',
      description: 'Comprehensive IoT platform with device management, data analytics, and edge computing capabilities.',
      features: [
        'IoT device provisioning and management',
        'Edge computing and data processing',
        'Real-time data analytics and visualization',
        'Device security and firmware management',
        'Integration with cloud platforms',
        'Predictive maintenance and monitoring'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Centralized device management',
        'Real-time data insights',
        'Improved operational efficiency',
        'Scalable IoT infrastructure'
      ],
      category: 'IoT & Edge Computing'
    },
    {
      icon: Code,
      name: 'Enterprise Digital Transformation Consulting',
      description: 'Strategic digital transformation with technology modernization, process optimization, and change management.',
      features: [
        'Digital strategy development and planning',
        'Technology stack modernization',
        'Process digitization and automation',
        'Change management and training',
        'Data-driven decision making implementation',
        'Customer experience transformation'
      ],
      pricing: '$200 – $500/hour',
      projectPricing: '$50,000 – $300,000/project',
      timeline: '12–36 weeks',
      benefits: [
        'Modernized technology infrastructure',
        'Improved operational efficiency',
        'Enhanced customer experience',
        'Competitive advantage'
      ],
      category: 'Digital Transformation'
    },
    {
      icon: Database,
      name: 'Big Data Analytics & Data Lake Solutions',
      description: 'Comprehensive big data platform with data lake architecture, analytics, and machine learning capabilities.',
      features: [
        'Data lake architecture and implementation',
        'Big data processing and analytics',
        'Real-time streaming data processing',
        'Machine learning and AI model deployment',
        'Data governance and security',
        'Business intelligence and reporting'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '8–20 weeks',
      benefits: [
        'Unified data platform',
        'Advanced analytics capabilities',
        'Real-time data processing',
        'Data-driven insights'
      ],
      category: 'Data Analytics'
    },
    {
      icon: Shield,
      name: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with identity verification and network segmentation.',
      features: [
        'Identity and access management (IAM)',
        'Network segmentation and micro-segmentation',
        'Multi-factor authentication and SSO',
        'Device trust and compliance',
        'Continuous security monitoring',
        'Security policy automation'
      ],
      pricing: '$180 – $400/hour',
      projectPricing: '$40,000 – $250,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Automated security policies',
        'Compliance with regulations'
      ],
      category: 'Security'
    },
    {
      icon: Cloud,
      name: 'Multi-Cloud Management & Optimization',
      description: 'Comprehensive multi-cloud strategy with cost optimization, governance, and unified management.',
      features: [
        'Multi-cloud architecture design',
        'Cloud cost optimization and management',
        'Unified cloud governance and compliance',
        'Cloud migration and modernization',
        'Disaster recovery and backup strategies',
        'Performance monitoring and optimization'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Optimized cloud costs',
        'Improved cloud performance',
        'Enhanced security and compliance',
        'Reduced vendor lock-in'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Smartphone,
      name: 'Enterprise Mobile App Development',
      description: 'Native and cross-platform mobile application development with enterprise-grade security and integration.',
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'Enterprise security and authentication',
        'Backend integration and API development',
        'Mobile device management (MDM)',
        'App store deployment and management'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$15,000 – $100,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Enhanced mobile productivity',
        'Improved user experience',
        'Enterprise-grade security',
        'Cross-platform compatibility'
      ],
      category: 'Mobile Development'
    },
    {
      icon: BarChart3,
      name: 'Business Intelligence & Data Visualization',
      description: 'Advanced BI platform with interactive dashboards, reporting, and self-service analytics.',
      features: [
        'Interactive dashboards and reports',
        'Self-service analytics platform',
        'Data visualization and storytelling',
        'Advanced analytics and forecasting',
        'Real-time data integration',
        'Mobile BI and accessibility'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$15,000 – $75,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Data-driven decision making',
        'Improved business insights',
        'Self-service analytics',
        'Enhanced reporting capabilities'
      ],
      category: 'Business Intelligence'
    },
    {
      icon: Server,
      name: 'Edge Computing Infrastructure',
      description: 'Distributed edge computing platform with low-latency processing and real-time analytics.',
      features: [
        'Edge computing infrastructure deployment',
        'Low-latency data processing',
        'Real-time analytics and decision making',
        'Edge-to-cloud data synchronization',
        'Edge security and management',
        'IoT and sensor data processing'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $150,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Reduced latency and improved performance',
        'Real-time data processing',
        'Enhanced reliability and availability',
        'Cost-effective computing at the edge'
      ],
      category: 'Edge Computing'
    },
    {
      icon: Shield,
      name: 'Compliance & Regulatory Technology',
      description: 'Comprehensive compliance management with automated monitoring, reporting, and risk assessment.',
      features: [
        'Regulatory compliance monitoring',
        'Automated compliance reporting',
        'Risk assessment and management',
        'Audit trail and documentation',
        'Policy management and updates',
        'Compliance training and awareness'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Automated compliance monitoring',
        'Reduced compliance risks',
        'Streamlined audit processes',
        'Cost-effective compliance management'
      ],
      category: 'Compliance'
    },
    {
      icon: Cpu,
      name: 'Quantum Computing Infrastructure',
      description: 'Quantum computing infrastructure setup, algorithm development, and quantum-classical hybrid systems.',
      features: [
        'Quantum hardware integration and setup',
        'Quantum algorithm development and optimization',
        'Quantum-classical hybrid system architecture',
        'Quantum error correction and fault tolerance',
        'Quantum software development frameworks',
        'Quantum security and cryptography implementation'
      ],
      pricing: '$500,000 – $5,000,000 project',
      projectPricing: 'Custom pricing based on quantum requirements',
      timeline: '24–52 weeks',
      benefits: [
        'Exponential computational capabilities',
        'Advanced optimization and simulation',
        'Enhanced security through quantum cryptography',
        'Cutting-edge competitive advantage'
      ],
      category: 'Quantum Computing'
    },
    {
      icon: Globe,
      name: 'Edge Computing & IoT Infrastructure',
      description: 'Distributed edge computing infrastructure with IoT device management and real-time data processing.',
      features: [
        'Edge computing infrastructure deployment',
        'IoT device management and monitoring',
        'Real-time data processing and analytics',
        'Edge AI and machine learning deployment',
        '5G network integration and optimization',
        'Distributed system architecture design'
      ],
      pricing: '$50,000 – $500,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '8–20 weeks',
      benefits: [
        'Reduced latency and improved performance',
        'Enhanced data privacy and security',
        'Scalable IoT device management',
        'Real-time decision making capabilities'
      ],
      category: 'Edge Computing'
    },
    {
      icon: Shield,
      name: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with identity verification and micro-segmentation.',
      features: [
        'Zero trust network architecture design',
        'Identity and access management (IAM)',
        'Micro-segmentation and network isolation',
        'Continuous security monitoring and analytics',
        'Privileged access management (PAM)',
        'Security orchestration and automation'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Improved compliance and governance',
        'Automated threat response'
      ],
      category: 'Security'
    },
    {
      icon: Database,
      name: 'Blockchain & Distributed Ledger Solutions',
      description: 'Blockchain infrastructure, smart contract development, and decentralized application deployment.',
      features: [
        'Blockchain infrastructure setup and management',
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Cryptocurrency wallet and exchange integration',
        'Blockchain analytics and monitoring',
        'Regulatory compliance and governance'
      ],
      pricing: '$75,000 – $750,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Enhanced transparency and trust',
        'Reduced transaction costs',
        'Improved data integrity',
        'Decentralized system architecture'
      ],
      category: 'Blockchain'
    },
    {
      icon: Cloud,
      name: 'Multi-Cloud & Hybrid Cloud Management',
      description: 'Comprehensive multi-cloud and hybrid cloud strategy with unified management and optimization.',
      features: [
        'Multi-cloud architecture design and implementation',
        'Hybrid cloud integration and management',
        'Cloud cost optimization and FinOps',
        'Cross-cloud data migration and synchronization',
        'Unified monitoring and management platform',
        'Disaster recovery and business continuity'
      ],
      pricing: '$150,000 – $1,500,000 project',
      projectPricing: '$15,000 – $150,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Reduced vendor lock-in',
        'Optimized cloud costs',
        'Enhanced flexibility and scalability',
        'Improved disaster recovery capabilities'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Smartphone,
      name: '5G Network Infrastructure & Optimization',
      description: '5G network deployment, optimization, and application development for next-generation connectivity.',
      features: [
        '5G network infrastructure deployment',
        'Network slicing and optimization',
        '5G application development and testing',
        'Edge computing integration with 5G',
        'Network performance monitoring and analytics',
        'IoT and smart city connectivity solutions'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '20–40 weeks',
      benefits: [
        'Ultra-low latency connectivity',
        'Massive IoT device support',
        'Enhanced mobile broadband',
        'Next-generation application capabilities'
      ],
      category: 'Network Infrastructure'
    },
    {
      icon: Brain,
      name: 'AI/ML Infrastructure & MLOps',
      description: 'Complete AI/ML infrastructure setup with MLOps pipelines, model deployment, and monitoring.',
      features: [
        'AI/ML infrastructure design and deployment',
        'MLOps pipeline development and automation',
        'Model training and deployment platforms',
        'AI model monitoring and governance',
        'Data pipeline and feature store setup',
        'AI ethics and bias monitoring'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Accelerated AI model development',
        'Automated ML operations',
        'Scalable AI infrastructure',
        'Enhanced model performance and reliability'
      ],
      category: 'AI Infrastructure'
    },
    {
      icon: Server,
      name: 'Serverless & Microservices Architecture',
      description: 'Serverless architecture implementation with microservices design and API management.',
      features: [
        'Serverless architecture design and implementation',
        'Microservices development and deployment',
        'API gateway and management platform',
        'Container orchestration and management',
        'Event-driven architecture implementation',
        'Performance monitoring and optimization'
      ],
      pricing: '$75,000 – $750,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and performance',
        'Faster development and deployment',
        'Enhanced system reliability'
      ],
      category: 'Architecture'
    },
    {
      icon: Database,
      name: 'Data Mesh & Data Fabric Architecture',
      description: 'Modern data architecture with data mesh and data fabric implementation for enterprise data management.',
      features: [
        'Data mesh architecture design and implementation',
        'Data fabric platform development',
        'Data governance and cataloging',
        'Real-time data streaming and processing',
        'Data quality and lineage management',
        'Self-service analytics platform'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '20–40 weeks',
      benefits: [
        'Improved data accessibility and democratization',
        'Enhanced data quality and governance',
        'Faster time-to-insight',
        'Scalable data architecture'
      ],
      category: 'Data Architecture'
    },
    {
      icon: Shield,
      name: 'DevSecOps & Security Automation',
      description: 'Integrated security into DevOps pipelines with automated security testing and compliance.',
      features: [
        'DevSecOps pipeline integration',
        'Automated security testing and scanning',
        'Infrastructure as Code security',
        'Compliance automation and reporting',
        'Security monitoring and alerting',
        'Vulnerability management and remediation'
      ],
      pricing: '$50,000 – $500,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '8–16 weeks',
      benefits: [
        'Enhanced security throughout SDLC',
        'Automated compliance and reporting',
        'Reduced security vulnerabilities',
        'Faster and more secure deployments'
      ],
      category: 'Security'
    },
    {
      icon: Globe,
      name: 'Green IT & Sustainable Technology',
      description: 'Sustainable IT infrastructure with energy optimization, carbon footprint reduction, and green computing.',
      features: [
        'Energy-efficient infrastructure design',
        'Carbon footprint monitoring and reduction',
        'Green data center optimization',
        'Sustainable software development practices',
        'Renewable energy integration',
        'Environmental impact assessment and reporting'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Reduced environmental impact',
        'Lower energy costs',
        'Enhanced corporate sustainability',
        'Compliance with environmental regulations'
      ],
      category: 'Sustainability'
    },
    {
      icon: Cpu,
      name: 'High-Performance Computing (HPC)',
      description: 'High-performance computing infrastructure for scientific research, simulations, and data-intensive applications.',
      features: [
        'HPC cluster design and deployment',
        'Parallel computing optimization',
        'GPU computing and acceleration',
        'Scientific computing software stack',
        'High-speed networking and storage',
        'Performance monitoring and optimization'
      ],
      pricing: '$500,000 – $5,000,000 project',
      projectPricing: '$50,000 – $500,000/month managed',
      timeline: '24–48 weeks',
      benefits: [
        'Massive computational power',
        'Accelerated research and development',
        'Complex simulation capabilities',
        'Advanced data processing and analysis'
      ],
      category: 'High-Performance Computing'
    },
    {
      icon: Globe,
      name: '5G Network Infrastructure & Optimization',
      description: 'Complete 5G network deployment, optimization, and management for enterprise and carrier environments.',
      features: [
        '5G network architecture design',
        'Small cell deployment and optimization',
        'Network slicing and virtualization',
        'Edge computing integration',
        'Performance monitoring and analytics',
        'Security and compliance implementation'
      ],
      pricing: '$1,000,000 – $10,000,000 project',
      projectPricing: '$100,000 – $1,000,000/month managed',
      timeline: '24–48 weeks',
      benefits: [
        'Ultra-low latency connectivity',
        'Massive IoT device support',
        'Enhanced mobile broadband',
        'Future-ready network infrastructure'
      ],
      category: '5G & Wireless'
    },
    {
      icon: Brain,
      name: 'Edge Computing & IoT Platform',
      description: 'Comprehensive edge computing infrastructure with IoT device management and real-time data processing.',
      features: [
        'Edge computing infrastructure deployment',
        'IoT device management and provisioning',
        'Real-time data processing and analytics',
        'Edge-to-cloud connectivity',
        'Device security and authentication',
        'Predictive maintenance and monitoring'
      ],
      pricing: '$500,000 – $5,000,000 project',
      projectPricing: '$50,000 – $500,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Reduced latency and bandwidth costs',
        'Real-time decision making',
        'Enhanced data privacy and security',
        'Scalable IoT infrastructure'
      ],
      category: 'Edge Computing'
    },
    {
      icon: Shield,
      name: 'Zero Trust Security Architecture',
      description: 'Complete zero trust security implementation with identity verification and micro-segmentation.',
      features: [
        'Identity and access management (IAM)',
        'Network micro-segmentation',
        'Continuous security monitoring',
        'Privileged access management',
        'Security orchestration and automation',
        'Compliance and audit management'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Automated threat response',
        'Compliance with security standards'
      ],
      category: 'Security'
    },
    {
      icon: Database,
      name: 'Data Lake & Analytics Platform',
      description: 'Enterprise data lake implementation with advanced analytics, machine learning, and business intelligence.',
      features: [
        'Data lake architecture and design',
        'Data ingestion and ETL pipelines',
        'Advanced analytics and ML integration',
        'Real-time data processing',
        'Data governance and cataloging',
        'Business intelligence dashboards'
      ],
      pricing: '$300,000 – $3,000,000 project',
      projectPricing: '$30,000 – $300,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Unified data management',
        'Advanced analytics capabilities',
        'Real-time business insights',
        'Scalable data infrastructure'
      ],
      category: 'Data & Analytics'
    },
    {
      icon: Cloud,
      name: 'Multi-Cloud Management Platform',
      description: 'Comprehensive multi-cloud orchestration with cost optimization and unified management.',
      features: [
        'Multi-cloud resource orchestration',
        'Cost optimization and governance',
        'Unified monitoring and management',
        'Disaster recovery and backup',
        'Security and compliance management',
        'Automated scaling and optimization'
      ],
      pricing: '$150,000 – $1,500,000 project',
      projectPricing: '$15,000 – $150,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Vendor lock-in avoidance',
        'Optimized cloud costs',
        'Enhanced reliability and availability',
        'Unified cloud management'
      ],
      category: 'Cloud Management'
    },
    {
      icon: Code,
      name: 'DevSecOps & CI/CD Pipeline',
      description: 'Secure DevOps implementation with automated CI/CD pipelines and security integration.',
      features: [
        'CI/CD pipeline design and implementation',
        'Security scanning and vulnerability management',
        'Infrastructure as Code (IaC)',
        'Automated testing and deployment',
        'Security compliance automation',
        'Performance monitoring and optimization'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '8–16 weeks',
      benefits: [
        'Faster time-to-market',
        'Enhanced security integration',
        'Automated deployment processes',
        'Improved code quality and reliability'
      ],
      category: 'DevOps'
    },
    {
      icon: Smartphone,
      name: 'Enterprise Mobile App Development',
      description: 'Native and cross-platform mobile application development with enterprise integration.',
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'Enterprise system integration',
        'Mobile security and compliance',
        'App store deployment and management',
        'Performance optimization and monitoring'
      ],
      pricing: '$50,000 – $500,000 project',
      projectPricing: '$5,000 – $50,000/month maintenance',
      timeline: '12–24 weeks',
      benefits: [
        'Enhanced mobile user experience',
        'Enterprise system integration',
        'Improved productivity and efficiency',
        'Secure mobile access to business systems'
      ],
      category: 'Mobile Development'
    },
    {
      icon: BarChart3,
      name: 'Business Intelligence & Data Visualization',
      description: 'Comprehensive BI platform with advanced data visualization and self-service analytics.',
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Interactive dashboards and reports',
        'Self-service analytics platform',
        'Data governance and quality management',
        'Advanced visualization and storytelling'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Data-driven decision making',
        'Self-service analytics capabilities',
        'Real-time business insights',
        'Improved operational efficiency'
      ],
      category: 'Business Intelligence'
    },
    {
      icon: Shield,
      name: 'Compliance & Risk Management Platform',
      description: 'Comprehensive compliance management with risk assessment and regulatory reporting.',
      features: [
        'Regulatory compliance monitoring',
        'Risk assessment and management',
        'Audit trail and documentation',
        'Policy management and enforcement',
        'Incident response and management',
        'Automated reporting and dashboards'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Automated compliance monitoring',
        'Reduced regulatory risks',
        'Streamlined audit processes',
        'Enhanced risk visibility'
      ],
      category: 'Compliance'
    },
    {
      icon: Globe,
      name: 'API Gateway & Microservices Architecture',
      description: 'Modern microservices architecture with API gateway, service mesh, and container orchestration.',
      features: [
        'Microservices architecture design',
        'API gateway implementation',
        'Service mesh and communication',
        'Container orchestration (Kubernetes)',
        'Service discovery and load balancing',
        'Monitoring and observability'
      ],
      pricing: '$150,000 – $1,500,000 project',
      projectPricing: '$15,000 – $150,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Scalable and maintainable architecture',
        'Improved development velocity',
        'Enhanced system reliability',
        'Technology stack flexibility'
      ],
      category: 'Microservices'
    },
    {
      icon: Database,
      name: 'Blockchain & Web3 Solutions',
      description: 'Enterprise blockchain implementation with smart contracts, DeFi, and Web3 integration.',
      features: [
        'Blockchain network design and deployment',
        'Smart contract development and auditing',
        'DeFi protocol integration',
        'Web3 application development',
        'Cryptocurrency and token management',
        'Blockchain analytics and monitoring'
      ],
      pricing: '$300,000 – $3,000,000 project',
      projectPricing: '$30,000 – $300,000/month managed',
      timeline: '20–40 weeks',
      benefits: [
        'Decentralized and transparent systems',
        'Enhanced security and immutability',
        'Reduced intermediary costs',
        'Innovative business models'
      ],
      category: 'Blockchain'
    },
    {
      icon: Brain,
      name: 'Machine Learning Operations (MLOps)',
      description: 'Complete MLOps platform with model training, deployment, and monitoring infrastructure.',
      features: [
        'ML model training and development',
        'Model deployment and serving',
        'Model monitoring and drift detection',
        'Data pipeline automation',
        'Experiment tracking and management',
        'Model versioning and governance'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Automated ML workflows',
        'Scalable model deployment',
        'Continuous model improvement',
        'Reduced time-to-production'
      ],
      category: 'MLOps'
    },
    {
      icon: Shield,
      name: 'Identity & Access Management (IAM)',
      description: 'Comprehensive IAM solution with single sign-on, multi-factor authentication, and privileged access management.',
      features: [
        'Single Sign-On (SSO) implementation',
        'Multi-Factor Authentication (MFA)',
        'Privileged Access Management (PAM)',
        'Identity governance and administration',
        'Access certification and compliance',
        'Identity analytics and monitoring'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '8–16 weeks',
      benefits: [
        'Enhanced security and compliance',
        'Simplified user access management',
        'Reduced security risks',
        'Improved user experience'
      ],
      category: 'Identity Management'
    },
    {
      icon: Globe,
      name: 'Content Delivery Network (CDN) & Performance',
      description: 'Global CDN implementation with performance optimization and edge computing capabilities.',
      features: [
        'Global CDN deployment and optimization',
        'Edge computing and serverless functions',
        'Performance monitoring and analytics',
        'DDoS protection and security',
        'Video streaming and media delivery',
        'API acceleration and optimization'
      ],
      pricing: '$50,000 – $500,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '4–8 weeks',
      benefits: [
        'Improved website performance',
        'Global content delivery',
        'Reduced bandwidth costs',
        'Enhanced user experience'
      ],
      category: 'CDN & Performance'
    },
    {
      icon: Database,
      name: 'Database Migration & Modernization',
      description: 'Comprehensive database migration services with modernization and optimization.',
      features: [
        'Database assessment and planning',
        'Migration strategy and execution',
        'Data transformation and validation',
        'Performance optimization',
        'High availability and disaster recovery',
        'Ongoing support and maintenance'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Modern database infrastructure',
        'Improved performance and scalability',
        'Reduced licensing costs',
        'Enhanced security and compliance'
      ],
      category: 'Database Services'
    },
    {
      icon: Cpu,
      name: 'Quantum Computing Consulting & Integration',
      description: 'Quantum computing strategy, algorithm development, and hybrid quantum-classical solutions.',
      features: [
        'Quantum computing strategy and roadmap',
        'Quantum algorithm development',
        'Hybrid quantum-classical solutions',
        'Quantum hardware evaluation',
        'Quantum software development',
        'Quantum security and cryptography'
      ],
      pricing: '$500,000 – $5,000,000 project',
      projectPricing: '$50,000 – $500,000/month consulting',
      timeline: '24–48 weeks',
      benefits: [
        'Exponential computational advantage',
        'Advanced optimization capabilities',
        'Future-ready technology adoption',
        'Competitive advantage in research'
      ],
      category: 'Quantum Computing'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Cloud engineering, DevOps, SRE, FinOps, and governance delivered with measurable outcomes and transparent pricing." />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <ServiceAds heading="Featured IT Services" subheading="Production-grade solutions with clear pricing." items={featuredITAds} />
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Modern IT Services</h1>
          <p className="text-xl text-gray-300">Outcome-driven cloud, platform, and reliability engineering to accelerate delivery and reduce costs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {offerings.map((o) => (
            <div key={o.title} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
              <div className="mb-4">{o.icon}</div>
              <h3 className="text-white font-semibold mb-2">{o.title}</h3>
              <p className="text-gray-400 text-sm">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <div className="text-cyan-400 font-semibold mb-4">{p.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400"><Check /> <span>{i}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
            <div className="flex items-center justify-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{contactInfo.mobile}</span></div>
            <div className="flex items-center justify-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{contactInfo.email}</span></div>
            <div className="flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span >{contactInfo.address}</span></div>
          </div>
          <div className="text-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Discuss Your Roadmap</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

