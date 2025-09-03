import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Cloud, Shield, Database, Smartphone, Globe, Code, Server, BarChart3, Link as LinkIcon, Cpu, TestTube, BookOpen, Wrench, Brain } from 'lucide-react';

export default function ITServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const itServices = [
    {
      icon: Cloud,
      name: 'Cloud DevOps & SRE',
      description: 'Complete cloud infrastructure management with CI/CD pipelines, infrastructure as code, and site reliability engineering.',
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (Terraform, Pulumi)',
        'Container orchestration (Kubernetes, Docker)',
        'Monitoring, logging, and alerting systems',
        'Auto-scaling and load balancing',
        'Disaster recovery and backup strategies'
      ],
      pricing: '$120 – $220/hour',
      projectPricing: '$6,000 – $30,000/project',
      timeline: '2–8 weeks',
      benefits: [
        '99.9% uptime guarantee',
        'Automated deployment processes',
        'Reduced infrastructure costs',
        'Improved system reliability'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Shield,
      name: 'Cybersecurity Hardening & SOC',
      description: 'Comprehensive security solutions including zero trust architecture, endpoint detection, and security operations center setup.',
      features: [
        'Zero Trust security architecture',
        'Endpoint Detection and Response (EDR)',
        'Security Operations Center (SOC) setup',
        'Vulnerability assessment and penetration testing',
        'Compliance and regulatory adherence',
        'Security awareness training programs'
      ],
      pricing: '$5,000 – $40,000/project',
      projectPricing: '$2,000 – $8,000/month managed',
      timeline: '4–12 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced security incidents',
        'Compliance with regulations',
        '24/7 security monitoring'
      ],
      category: 'Security'
    },
    {
      icon: Cloud,
      name: 'Cloud Migration & Modernization',
      description: 'Seamless migration to cloud platforms with application modernization and optimization.',
      features: [
        'Lift and shift migration strategies',
        'Application containerization',
        'Serverless architecture implementation',
        'Data platform upgrades and migration',
        'Legacy system modernization',
        'Performance optimization and tuning'
      ],
      pricing: '$10,000 – $150,000/project',
      projectPricing: 'Custom pricing based on complexity',
      timeline: '3–20 weeks',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and performance',
        'Enhanced security and compliance',
        'Modern technology stack adoption'
      ],
      category: 'Cloud & Infrastructure'
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
      description: 'Complete IT infrastructure management including server administration, network management, and system monitoring.',
      features: [
        'Server management and administration',
        'Network infrastructure setup and maintenance',
        'System monitoring and alerting',
        'Backup and disaster recovery',
        'Security patch management',
        'Performance optimization and tuning'
      ],
      pricing: '$2,000 – $8,000/month',
      projectPricing: 'Managed services pricing',
      timeline: 'Ongoing',
      benefits: [
        'Reduced IT operational costs',
        'Improved system reliability',
        'Proactive issue resolution',
        'Enhanced security posture'
      ],
      category: 'Infrastructure'
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
      name: 'Blockchain & Distributed Ledger Solutions',
      description: 'Enterprise blockchain implementation with smart contracts, DeFi integration, and tokenization services.',
      features: [
        'Blockchain architecture design and implementation',
        'Smart contract development and auditing',
        'DeFi protocol integration and development',
        'Tokenization and NFT marketplace creation',
        'Cross-chain interoperability solutions',
        'Blockchain security and compliance'
      ],
      pricing: '$150 – $400/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Enhanced security and transparency',
        'Reduced transaction costs',
        'Automated contract execution',
        'New revenue opportunities'
      ],
      category: 'Blockchain Technology'
    },
    {
      icon: Globe,
      name: '5G Network Infrastructure & Optimization',
      description: '5G network deployment, optimization, and edge computing integration for enterprise applications.',
      features: [
        '5G network architecture design and deployment',
        'Network slicing and optimization',
        'Edge computing integration',
        'IoT connectivity and management',
        'Network performance monitoring',
        'Security and compliance implementation'
      ],
      pricing: '$200 – $500/hour',
      projectPricing: '$50,000 – $300,000/project',
      timeline: '12–32 weeks',
      benefits: [
        'Ultra-low latency connectivity',
        'Massive IoT device support',
        'Enhanced mobile experiences',
        'Future-ready network infrastructure'
      ],
      category: '5G & Network Infrastructure'
    },
    {
      icon: Brain,
      name: 'AI Infrastructure & GPU Computing',
      description: 'High-performance AI infrastructure with GPU clusters, distributed training, and model serving platforms.',
      features: [
        'GPU cluster design and deployment',
        'Distributed AI training infrastructure',
        'Model serving and inference platforms',
        'AI pipeline automation and orchestration',
        'Performance optimization and scaling',
        'AI security and governance'
      ],
      pricing: '$180 – $450/hour',
      projectPricing: '$40,000 – $250,000/project',
      timeline: '8–20 weeks',
      benefits: [
        'Accelerated AI model training',
        'Scalable inference capabilities',
        'Cost-effective AI infrastructure',
        'Enterprise-grade AI operations'
      ],
      category: 'AI Infrastructure'
    },
    {
      icon: Shield,
      name: 'Cybersecurity Mesh Architecture',
      description: 'Next-generation cybersecurity with distributed security controls and zero-trust implementation.',
      features: [
        'Distributed security control implementation',
        'Zero-trust network architecture',
        'Identity-centric security model',
        'Automated threat response and remediation',
        'Security analytics and intelligence',
        'Compliance and governance automation'
      ],
      pricing: '$200 – $450/hour',
      projectPricing: '$50,000 – $300,000/project',
      timeline: '12–28 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Automated security operations',
        'Improved compliance management'
      ],
      category: 'Advanced Security'
    },
    {
      icon: Server,
      name: 'Hyperconverged Infrastructure (HCI)',
      description: 'Software-defined infrastructure with integrated compute, storage, and networking for simplified management.',
      features: [
        'HCI platform design and deployment',
        'Software-defined storage and networking',
        'Automated resource provisioning',
        'Disaster recovery and backup solutions',
        'Performance monitoring and optimization',
        'Cloud integration and hybrid deployment'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Simplified infrastructure management',
        'Reduced operational complexity',
        'Improved resource utilization',
        'Faster deployment and scaling'
      ],
      category: 'Infrastructure Modernization'
    },
    {
      icon: Globe,
      name: 'Satellite Internet & Space Technology',
      description: 'Satellite communication systems, space-based internet, and aerospace technology integration.',
      features: [
        'Satellite communication system design',
        'Ground station infrastructure development',
        'Space-based internet connectivity',
        'Aerospace data processing and analytics',
        'Satellite constellation management',
        'Space technology integration'
      ],
      pricing: '$250 – $600/hour',
      projectPricing: '$100,000 – $1,000,000/project',
      timeline: '24–52 weeks',
      benefits: [
        'Global connectivity solutions',
        'Reduced infrastructure costs',
        'Enhanced communication reliability',
        'Space technology innovation'
      ],
      category: 'Space Technology'
    },
    {
      icon: Cpu,
      name: 'Neuromorphic Computing Infrastructure',
      description: 'Brain-inspired computing systems with ultra-low power consumption and real-time processing capabilities.',
      features: [
        'Neuromorphic chip integration and optimization',
        'Spiking neural network implementation',
        'Ultra-low power computing systems',
        'Real-time learning and adaptation',
        'Edge computing optimization',
        'Cognitive computing applications'
      ],
      pricing: '$200 – $500/hour',
      projectPricing: '$60,000 – $400,000/project',
      timeline: '16–40 weeks',
      benefits: [
        '1000x power efficiency improvement',
        'Real-time learning capabilities',
        'Edge computing optimization',
        'Brain-inspired intelligence'
      ],
      category: 'Emerging Computing'
    },
    {
      icon: Shield,
      name: 'Quantum-Safe Cryptography Implementation',
      description: 'Post-quantum cryptography solutions to protect against future quantum computing threats.',
      features: [
        'Quantum-safe algorithm implementation',
        'Cryptographic key management systems',
        'Migration from classical to quantum-safe crypto',
        'Compliance with quantum-safe standards',
        'Performance optimization and testing',
        'Security audit and validation'
      ],
      pricing: '$180 – $400/hour',
      projectPricing: '$40,000 – $200,000/project',
      timeline: '12–28 weeks',
      benefits: [
        'Future-proof security',
        'Protection against quantum threats',
        'Compliance with emerging standards',
        'Enhanced long-term security'
      ],
      category: 'Quantum Security'
    },
    {
      icon: Globe,
      name: 'Digital Twin & Simulation Platforms',
      description: 'Digital twin technology for real-time monitoring, simulation, and optimization of physical systems.',
      features: [
        'Digital twin platform development',
        'Real-time data integration and synchronization',
        'Simulation and modeling capabilities',
        'Predictive analytics and optimization',
        'IoT sensor integration',
        'Visualization and dashboard development'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $180,000/project',
      timeline: '8–20 weeks',
      benefits: [
        'Real-time system monitoring',
        'Predictive maintenance capabilities',
        'Optimized system performance',
        'Reduced operational costs'
      ],
      category: 'Digital Twin Technology'
    },
    {
      icon: Server,
      name: 'Green IT & Sustainable Computing',
      description: 'Environmentally sustainable IT solutions with energy-efficient infrastructure and carbon footprint reduction.',
      features: [
        'Energy-efficient infrastructure design',
        'Renewable energy integration',
        'Carbon footprint monitoring and reduction',
        'Sustainable data center solutions',
        'Green cloud computing optimization',
        'Environmental compliance and reporting'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$20,000 – $120,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Reduced environmental impact',
        'Lower energy costs',
        'Improved sustainability metrics',
        'Enhanced corporate responsibility'
      ],
      category: 'Sustainable Technology'
    },
    {
      icon: Brain,
      name: 'Federated Learning Infrastructure',
      description: 'Distributed machine learning systems that enable collaborative AI without sharing raw data.',
      features: [
        'Federated learning platform development',
        'Privacy-preserving machine learning',
        'Distributed model training and aggregation',
        'Differential privacy implementation',
        'Cross-silo data collaboration',
        'Federated analytics and insights'
      ],
      pricing: '$180 – $400/hour',
      projectPricing: '$40,000 – $200,000/project',
      timeline: '12–28 weeks',
      benefits: [
        'Privacy-preserving AI collaboration',
        'Distributed learning capabilities',
        'Enhanced data security',
        'Collaborative intelligence'
      ],
      category: 'Privacy-Preserving AI'
    },
    {
      icon: Globe,
      name: 'Metaverse Infrastructure & Development',
      description: 'Virtual world infrastructure with 3D environments, avatars, and immersive experiences.',
      features: [
        '3D virtual world development',
        'Avatar and character systems',
        'Virtual economy and NFT integration',
        'Multi-user collaboration platforms',
        'VR/AR integration and optimization',
        'Scalable virtual infrastructure'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$50,000 – $300,000/project',
      timeline: '16–40 weeks',
      benefits: [
        'Immersive virtual experiences',
        'New business opportunities',
        'Enhanced customer engagement',
        'Future-ready virtual infrastructure'
      ],
      category: 'Metaverse Technology'
    },
    {
      icon: Shield,
      name: 'Homomorphic Encryption Systems',
      description: 'Privacy-preserving computation that allows data processing without decryption.',
      features: [
        'Homomorphic encryption implementation',
        'Privacy-preserving computation protocols',
        'Secure multi-party computation',
        'Encrypted data analytics',
        'Privacy-preserving machine learning',
        'Compliance with privacy regulations'
      ],
      pricing: '$200 – $450/hour',
      projectPricing: '$60,000 – $300,000/project',
      timeline: '16–32 weeks',
      benefits: [
        'Privacy-preserving data processing',
        'Enhanced data security',
        'Compliance with privacy regulations',
        'Secure collaborative analytics'
      ],
      category: 'Privacy Technology'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>IT & Cloud Services — Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, enterprise architecture, and development solutions. Expert IT consulting and implementation." />
        <link rel="canonical" href={`${contact.site}/it-services`} />
      </Head>

      <header className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          IT & Cloud Services
        </h1>
        <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-lg">
          Comprehensive IT solutions from cloud migration to cybersecurity. Our expert team delivers 
          enterprise-grade infrastructure, development, and consulting services with proven results.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700">Call {contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="px-5 py-2 rounded bg-purple-600 hover:bg-purple-700">Email {contact.email}</a>
          <Link href="/contact" className="px-5 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10">Get Quote</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-24">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8">
          {itServices.map((service, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-slate-900/60 p-8 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">{service.name}</h2>
                    <span className="px-2 py-1 rounded bg-slate-800/70 border border-white/10 text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-slate-300 text-lg">{service.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Key Features</h3>
                  <ul className="space-y-2 text-slate-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Business Benefits</h3>
                  <ul className="space-y-2 text-slate-300">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Hourly Rate:</span>
                    <span className="font-semibold text-blue-400">{service.pricing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Project:</span>
                    <span className="font-semibold text-purple-400">{service.projectPricing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Timeline:</span>
                    <span className="font-semibold text-green-400">{service.timeline}</span>
                  </div>
                  <div className="ml-auto flex gap-3">
                    <Link href="/contact" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-sm font-semibold">
                      Request Quote
                    </Link>
                    <Link href="/contact" className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-semibold">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Our IT experts are ready to help you modernize your infrastructure, enhance security, 
              and optimize performance. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Email {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}