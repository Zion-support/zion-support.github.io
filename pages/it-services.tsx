import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Server,
  Cloud,
  Shield,
  Database,
  Network,
  Monitor,
  Smartphone,
  Globe,
  Lock,
  Settings,
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Cpu,
  HardDrive,
  Wifi,
  Code,
  Terminal,
  FileText,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Car,
  Brain,
  Satellite
} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function ITServices() {
  const title = 'IT Services — Zion Tech Group';
  const description = 'Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and digital transformation solutions.';

  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud Platform',
      icon: Cloud,
      features: [
        'Multi-cloud architecture design and implementation',
        'Legacy system migration and modernization',
        'Serverless computing and containerization',
        'Auto-scaling and load balancing',
        'Cost optimization and FinOps practices',
        'Disaster recovery and backup solutions'
      ],
      pricing: '$5,000 - $50,000/month',
      delivery: '4-12 weeks',
      category: 'Cloud Services'
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Enterprise-grade security solutions and compliance management',
      icon: Shield,
      features: [
        'Zero-trust security architecture',
        'SOC 2, GDPR, HIPAA compliance automation',
        'Penetration testing and vulnerability assessments',
        'Security monitoring and incident response',
        'Identity and access management (IAM)',
        'Data encryption and privacy protection'
      ],
      pricing: '$3,000 - $25,000/month',
      delivery: '3-8 weeks',
      category: 'Security Services'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design, implementation, and management of enterprise networks',
      icon: Network,
      features: [
        'SD-WAN and hybrid network solutions',
        'Network security and firewall management',
        'Wireless network design and optimization',
        'Network monitoring and performance tuning',
        'VoIP and unified communications',
        'Network documentation and training'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '2-6 weeks',
      category: 'Network Services'
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services',
      icon: Users,
      features: [
        '24/7/365 technical support coverage',
        'Remote desktop and troubleshooting',
        'Software installation and updates',
        'Hardware procurement and management',
        'User training and documentation',
        'SLA-based response times'
      ],
      pricing: '$1,500 - $8,000/month',
      delivery: '1-2 weeks',
      category: 'Support Services'
    },
    {
      title: 'Data Management & Analytics',
      description: 'Data warehousing, analytics, and business intelligence solutions',
      icon: Database,
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Business intelligence dashboards',
        'Data governance and quality management',
        'Real-time analytics and reporting',
        'Machine learning data preparation'
      ],
      pricing: '$4,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'Data Services'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code',
      icon: Settings,
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (IaC) implementation',
        'Container orchestration with Kubernetes',
        'Monitoring and logging solutions',
        'Automated testing and quality gates',
        'DevSecOps and security integration'
      ],
      pricing: '$3,500 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'DevOps Services'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: Zap,
      features: [
        'Digital strategy and roadmap development',
        'Process automation and optimization',
        'Legacy system modernization',
        'Change management and training',
        'Technology stack evaluation',
        'ROI measurement and optimization'
      ],
      pricing: '$10,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Consulting Services'
    },
    {
      title: 'Managed IT Services',
      description: 'Comprehensive IT management and monitoring services',
      icon: Monitor,
      features: [
        'Proactive monitoring and maintenance',
        'Patch management and updates',
        'Performance optimization',
        'Capacity planning and scaling',
        'Vendor management and procurement',
        'IT strategy and planning'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '2-4 weeks',
      category: 'Managed Services'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, smart contracts, and decentralized applications',
      icon: Network,
      features: [
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Blockchain integration and consulting',
        'Cryptocurrency wallet development',
        'Tokenomics and governance design',
        'Cross-chain interoperability solutions'
      ],
      pricing: '$8,000 - $50,000/month',
      delivery: '8-20 weeks',
      category: 'Blockchain Services'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things solutions and edge computing infrastructure',
      icon: Cpu,
      features: [
        'IoT device development and integration',
        'Edge computing platform setup',
        'Real-time data processing and analytics',
        'IoT security and device management',
        'Sensor network design and deployment',
        'Edge AI and machine learning integration'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'IoT Services'
    },
    {
      title: 'Quantum Computing Consulting',
      description: 'Quantum computing strategy, algorithm development, and implementation',
      icon: Cpu,
      features: [
        'Quantum algorithm development',
        'Quantum computing strategy consulting',
        'Hybrid classical-quantum solutions',
        'Quantum security and cryptography',
        'Quantum machine learning applications',
        'Quantum hardware evaluation and selection'
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Quantum Services'
    },
    {
      title: '5G & Network Modernization',
      description: '5G network implementation and legacy network modernization',
      icon: Wifi,
      features: [
        '5G network planning and deployment',
        'Network slicing and optimization',
        'Legacy network migration',
        'Private 5G network setup',
        'Network performance monitoring',
        'Edge computing integration'
      ],
      pricing: '$10,000 - $75,000/month',
      delivery: '8-20 weeks',
      category: 'Network Services'
    },
    {
      title: 'AR/VR Development & Implementation',
      description: 'Augmented and virtual reality solutions for business applications',
      icon: Monitor,
      features: [
        'AR/VR application development',
        '3D modeling and animation',
        'Immersive training and simulation',
        'Virtual showroom and retail solutions',
        'AR/VR hardware integration',
        'Performance optimization and testing'
      ],
      pricing: '$6,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'AR/VR Services'
    },
    {
      title: 'API Management & Integration',
      description: 'Comprehensive API strategy, development, and management platform',
      icon: Code,
      features: [
        'API design and development',
        'API gateway setup and management',
        'Third-party API integration',
        'API security and authentication',
        'API analytics and monitoring',
        'Microservices architecture design'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-12 weeks',
      category: 'API Services'
    },
    {
      title: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation',
      icon: Shield,
      features: [
        'Disaster recovery strategy development',
        'Backup and replication solutions',
        'Business continuity planning',
        'Recovery time objective optimization',
        'Testing and validation services',
        'Compliance and audit support'
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '6-16 weeks',
      category: 'Recovery Services'
    },
    {
      title: 'Green IT & Sustainability Solutions',
      description: 'Sustainable IT practices and carbon footprint reduction',
      icon: Globe,
      features: [
        'Energy-efficient infrastructure design',
        'Carbon footprint assessment and reduction',
        'Sustainable cloud migration',
        'Green data center optimization',
        'E-waste management and recycling',
        'Sustainability reporting and compliance'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-14 weeks',
      category: 'Sustainability Services'
    },
    {
      title: 'FinTech & Payment Solutions',
      description: 'Financial technology solutions and payment system integration',
      icon: Database,
      features: [
        'Payment gateway integration',
        'Financial API development',
        'Compliance and regulatory solutions',
        'Fraud detection and prevention',
        'Digital banking solutions',
        'Cryptocurrency integration'
      ],
      pricing: '$8,000 - $60,000/month',
      delivery: '10-24 weeks',
      category: 'FinTech Services'
    },
    {
      title: 'Edge Computing & Distributed Systems',
      description: 'Edge computing infrastructure and distributed system architecture',
      icon: Cpu,
      features: [
        'Edge computing platform deployment',
        'Distributed system architecture design',
        'Real-time data processing at the edge',
        'Edge AI and machine learning deployment',
        'Multi-cloud and hybrid edge solutions',
        'Edge security and device management'
      ],
      pricing: '$6,000 - $35,000/month',
      delivery: '8-16 weeks',
      category: 'Edge Computing Services'
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation and management',
      icon: Shield,
      features: [
        'Zero trust network architecture design',
        'Identity and access management (IAM)',
        'Micro-segmentation implementation',
        'Continuous security monitoring',
        'Privileged access management (PAM)',
        'Security orchestration and automation'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-14 weeks',
      category: 'Security Architecture Services'
    },
    {
      title: 'Hyperautomation & RPA Solutions',
      description: 'Intelligent process automation and robotic process automation',
      icon: Settings,
      features: [
        'Robotic process automation (RPA) implementation',
        'Intelligent document processing',
        'Workflow automation and optimization',
        'AI-powered decision making integration',
        'Process mining and discovery',
        'End-to-end automation orchestration'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Automation Services'
    },
    {
      title: 'Digital Twin & Simulation Platforms',
      description: 'Digital twin development and simulation platform implementation',
      icon: Monitor,
      features: [
        'Digital twin architecture and development',
        'Real-time simulation and modeling',
        'IoT sensor integration and data collection',
        'Predictive analytics and maintenance',
        'Virtual testing and optimization',
        'Integration with existing systems'
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '12-24 weeks',
      category: 'Digital Twin Services'
    },
    {
      title: 'Multi-Cloud & Hybrid Cloud Management',
      description: 'Comprehensive multi-cloud strategy and hybrid cloud management',
      icon: Cloud,
      features: [
        'Multi-cloud architecture design and implementation',
        'Cloud cost optimization and FinOps',
        'Hybrid cloud connectivity and management',
        'Cloud migration and modernization',
        'Disaster recovery across clouds',
        'Cloud governance and compliance'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-20 weeks',
      category: 'Multi-Cloud Services'
    },
    {
      title: 'Low-Code/No-Code Platform Development',
      description: 'Custom low-code and no-code platform development and implementation',
      icon: Code,
      features: [
        'Custom low-code platform development',
        'No-code application builder creation',
        'Workflow automation and integration',
        'User interface and experience design',
        'API integration and data connectivity',
        'Training and support services'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '8-16 weeks',
      category: 'Low-Code Services'
    },
    {
      title: 'Cybersecurity Operations Center (SOC)',
      description: '24/7 security operations center and threat monitoring services',
      icon: Shield,
      features: [
        '24/7 security monitoring and incident response',
        'Threat hunting and intelligence analysis',
        'Security incident management and forensics',
        'Vulnerability management and patching',
        'Security awareness training and testing',
        'Compliance monitoring and reporting'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-8 weeks',
      category: 'SOC Services'
    },
    {
      title: 'Quantum-Safe Cryptography Implementation',
      description: 'Post-quantum cryptography solutions to protect against future quantum computing threats',
      icon: Lock,
      features: [
        'Quantum-resistant encryption algorithms',
        'Post-quantum digital signatures',
        'Quantum key distribution (QKD) systems',
        'Hybrid classical-quantum security protocols',
        'Migration planning and implementation',
        'Compliance with NIST post-quantum standards'
      ],
      pricing: '$15,000 - $75,000/month',
      delivery: '12-24 weeks',
      category: 'Quantum Security Services'
    },
    {
      title: 'Neuromorphic Computing Infrastructure',
      description: 'Brain-inspired computing systems for edge AI and low-power processing',
      icon: Cpu,
      features: [
        'Neuromorphic chip integration and optimization',
        'Spiking neural network deployment',
        'Edge AI processing and inference',
        'Low-power computing optimization',
        'Real-time learning and adaptation',
        'Integration with IoT and sensor networks'
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '16-32 weeks',
      category: 'Neuromorphic Computing Services'
    },
    {
      title: 'Space-Based Computing Infrastructure',
      description: 'Satellite-based computing and edge processing for global connectivity',
      icon: Satellite,
      features: [
        'Satellite constellation management',
        'Space-based edge computing deployment',
        'Global low-latency connectivity',
        'Orbital data processing and storage',
        'Space-to-ground communication optimization',
        'Integration with terrestrial networks'
      ],
      pricing: '$50,000 - $500,000/month',
      delivery: '24-48 weeks',
      category: 'Space Computing Services'
    },
    {
      title: 'Fusion Energy IT Infrastructure',
      description: 'Specialized IT infrastructure for fusion energy research and power generation',
      icon: Zap,
      features: [
        'High-performance computing for plasma simulation',
        'Real-time control systems for fusion reactors',
        'Data acquisition and processing systems',
        'Safety monitoring and emergency response',
        'Integration with power grid systems',
        'Research collaboration platforms'
      ],
      pricing: '$100,000 - $1,000,000/month',
      delivery: '32-64 weeks',
      category: 'Fusion Energy IT Services'
    },
    {
      title: 'Synthetic Biology Computing Platform',
      description: 'Specialized computing infrastructure for synthetic biology and bioengineering',
      icon: Cpu,
      features: [
        'High-performance computing for genetic modeling',
        'Bioinformatics data processing and analysis',
        'Laboratory automation and control systems',
        'Biological simulation and modeling platforms',
        'Integration with laboratory equipment',
        'Research data management and collaboration'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '20-40 weeks',
      category: 'Synthetic Biology IT Services'
    },
    {
      title: 'Autonomous Vehicle Infrastructure',
      description: 'IT infrastructure for autonomous vehicle testing, deployment, and management',
      icon: Car,
      features: [
        'Vehicle-to-everything (V2X) communication systems',
        'Edge computing for real-time decision making',
        'Fleet management and coordination platforms',
        'Safety monitoring and incident response',
        'Integration with smart city infrastructure',
        'Regulatory compliance and reporting systems'
      ],
      pricing: '$30,000 - $200,000/month',
      delivery: '24-48 weeks',
      category: 'Autonomous Vehicle IT Services'
    },
    {
      title: 'Digital Twin Infrastructure Platform',
      description: 'Comprehensive digital twin infrastructure for real-time simulation and monitoring',
      icon: Monitor,
      features: [
        'Real-time data synchronization and modeling',
        'High-fidelity simulation and visualization',
        'IoT sensor integration and data processing',
        'Predictive analytics and maintenance systems',
        'Integration with existing business systems',
        'Scalable cloud and edge computing infrastructure'
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '16-32 weeks',
      category: 'Digital Twin Infrastructure Services'
    },
    {
      title: 'Metaverse Infrastructure & Platform',
      description: 'Complete metaverse infrastructure for virtual worlds and immersive experiences',
      icon: Globe,
      features: [
        '3D world rendering and streaming infrastructure',
        'Avatar and asset management systems',
        'Real-time physics simulation and networking',
        'Virtual economy and blockchain integration',
        'Cross-platform compatibility and optimization',
        'Content creation and management tools'
      ],
      pricing: '$40,000 - $300,000/month',
      delivery: '24-48 weeks',
      category: 'Metaverse Infrastructure Services'
    },
    {
      title: 'Brain-Computer Interface Infrastructure',
      description: 'Specialized IT infrastructure for brain-computer interface systems and neural data processing',
      icon: Brain,
      features: [
        'Neural signal acquisition and processing systems',
        'Real-time brain activity analysis and interpretation',
        'Medical device integration and control',
        'Data privacy and security for neural data',
        'Integration with healthcare systems',
        'Research collaboration and data sharing platforms'
      ],
      pricing: '$35,000 - $200,000/month',
      delivery: '28-56 weeks',
      category: 'BCI Infrastructure Services'
    },
    {
      title: 'Underwater Computing Infrastructure',
      description: 'Specialized computing infrastructure for underwater operations and marine research',
      icon: Network,
      features: [
        'Underwater communication and networking systems',
        'Marine data processing and analysis platforms',
        'Autonomous underwater vehicle coordination',
        'Oceanographic data collection and storage',
        'Underwater sensor network management',
        'Integration with surface and satellite systems'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '20-40 weeks',
      category: 'Marine Computing Services'
    },
    {
      title: 'Consciousness Research Computing Platform',
      description: 'Advanced computing infrastructure for consciousness research and AGI development',
      icon: Brain,
      features: [
        'High-performance computing for consciousness modeling',
        'Neural network simulation and training',
        'Cognitive architecture development platforms',
        'Research collaboration and data sharing systems',
        'Ethical AI monitoring and assessment tools',
        'Integration with neuroscience research equipment'
      ],
      pricing: '$100,000 - $1,000,000/month',
      delivery: '40-80 weeks',
      category: 'Consciousness Research IT Services'
    },
    {
      title: 'Climate Computing & Modeling Infrastructure',
      description: 'High-performance computing infrastructure for climate modeling and environmental research',
      icon: Globe,
      features: [
        'Climate simulation and modeling systems',
        'Environmental data processing and analysis',
        'Real-time weather and climate monitoring',
        'Carbon tracking and sustainability analytics',
        'Integration with satellite and sensor networks',
        'Research collaboration and data sharing platforms'
      ],
      pricing: '$30,000 - $250,000/month',
      delivery: '24-48 weeks',
      category: 'Climate Computing Services'
    },
    {
      title: 'Space Mission Computing Infrastructure',
      description: 'Specialized computing infrastructure for space missions and satellite operations',
      icon: Satellite,
      features: [
        'Mission planning and trajectory optimization systems',
        'Satellite constellation management platforms',
        'Space debris tracking and collision avoidance',
        'Ground station communication and control',
        'Space weather monitoring and prediction',
        'Integration with space agency networks'
      ],
      pricing: '$75,000 - $750,000/month',
      delivery: '32-64 weeks',
      category: 'Space Mission IT Services'
    },
    {
      title: 'AI-Powered IT Operations (AIOps)',
      description: 'Intelligent IT operations platform with automated incident response and predictive maintenance',
      icon: Brain,
      features: [
        'Automated incident detection and response',
        'Predictive infrastructure maintenance',
        'Intelligent capacity planning and optimization',
        'Automated root cause analysis',
        'Self-healing infrastructure capabilities',
        'Integration with existing monitoring tools'
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'AIOps Services'
    },
    {
      title: 'Autonomous IT Infrastructure Management',
      description: 'Self-managing IT infrastructure with autonomous decision-making and optimization',
      icon: Settings,
      features: [
        'Autonomous infrastructure provisioning and scaling',
        'Self-optimizing performance tuning',
        'Automated security patch management',
        'Intelligent resource allocation and optimization',
        'Autonomous disaster recovery and failover',
        'Continuous infrastructure health monitoring'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Autonomous IT Services'
    },
    {
      title: 'Quantum-Enhanced Cybersecurity',
      description: 'Next-generation cybersecurity solutions leveraging quantum computing for threat detection',
      icon: Shield,
      features: [
        'Quantum-enhanced threat detection algorithms',
        'Post-quantum cryptography implementation',
        'Quantum key distribution systems',
        'Advanced behavioral analysis and anomaly detection',
        'Quantum-resistant authentication systems',
        'Integration with existing security infrastructure'
      ],
      pricing: '$12,000 - $60,000/month',
      delivery: '10-20 weeks',
      category: 'Quantum Security Services'
    },
    {
      title: 'Edge AI Computing Infrastructure',
      description: 'Distributed edge computing platform optimized for AI workloads and real-time processing',
      icon: Cpu,
      features: [
        'Edge AI model deployment and optimization',
        'Distributed inference and training capabilities',
        'Real-time data processing and analytics',
        'Edge-to-cloud synchronization and management',
        'Low-latency communication protocols',
        'Integration with IoT and sensor networks'
      ],
      pricing: '$6,000 - $30,000/month',
      delivery: '8-16 weeks',
      category: 'Edge AI Services'
    },
    {
      title: 'Autonomous Cloud Cost Optimization',
      description: 'AI-driven cloud cost management with autonomous optimization and cost prediction',
      icon: Cloud,
      features: [
        'Automated cloud resource optimization',
        'Intelligent cost prediction and budgeting',
        'Autonomous rightsizing and scaling recommendations',
        'Multi-cloud cost comparison and optimization',
        'Reserved instance and spot instance management',
        'Real-time cost monitoring and alerting'
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: '4-8 weeks',
      category: 'Cloud Optimization Services'
    },
    {
      title: 'Self-Healing Network Infrastructure',
      description: 'Intelligent network infrastructure with autonomous fault detection and recovery',
      icon: Network,
      features: [
        'Autonomous network fault detection and diagnosis',
        'Self-healing network topology optimization',
        'Intelligent traffic routing and load balancing',
        'Automated network security and threat response',
        'Predictive network maintenance and upgrades',
        'Integration with SD-WAN and network virtualization'
      ],
      pricing: '$7,000 - $35,000/month',
      delivery: '8-16 weeks',
      category: 'Self-Healing Network Services'
    },
    {
      title: 'Autonomous Data Governance Platform',
      description: 'Intelligent data governance system with automated compliance and quality management',
      icon: Database,
      features: [
        'Automated data discovery and classification',
        'Intelligent data quality assessment and remediation',
        'Autonomous compliance monitoring and reporting',
        'Automated data lineage tracking and documentation',
        'Intelligent data retention and archival policies',
        'Integration with data lakes and warehouses'
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Data Governance Services'
    },
    {
      title: 'Autonomous API Management Platform',
      description: 'Intelligent API management with autonomous optimization and security',
      icon: Code,
      features: [
        'Automated API discovery and documentation',
        'Intelligent API performance optimization',
        'Autonomous API security and threat protection',
        'Automated API versioning and lifecycle management',
        'Intelligent API analytics and insights',
        'Integration with microservices and cloud platforms'
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '6-12 weeks',
      category: 'Autonomous API Services'
    },
    {
      title: 'Self-Optimizing Database Infrastructure',
      description: 'Intelligent database management with autonomous optimization and scaling',
      icon: Database,
      features: [
        'Autonomous database performance tuning',
        'Intelligent query optimization and indexing',
        'Automated database scaling and resource allocation',
        'Self-healing database recovery and backup',
        'Predictive database maintenance and optimization',
        'Integration with cloud and on-premises systems'
      ],
      pricing: '$6,000 - $30,000/month',
      delivery: '8-16 weeks',
      category: 'Autonomous Database Services'
    },
    {
      title: 'Intelligent IT Asset Management',
      description: 'AI-powered IT asset lifecycle management with predictive analytics and optimization',
      icon: Monitor,
      features: [
        'Automated asset discovery and inventory management',
        'Intelligent asset lifecycle prediction and planning',
        'Automated license compliance and optimization',
        'Predictive asset maintenance and replacement',
        'Intelligent asset utilization and optimization',
        'Integration with procurement and financial systems'
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: '4-8 weeks',
      category: 'IT Asset Management Services'
    },
    {
      title: 'Autonomous DevOps Pipeline',
      description: 'Self-managing DevOps pipeline with intelligent automation and optimization',
      icon: Settings,
      features: [
        'Automated CI/CD pipeline optimization',
        'Intelligent code quality assessment and improvement',
        'Autonomous deployment strategy selection',
        'Automated testing and quality assurance',
        'Intelligent rollback and recovery mechanisms',
        'Integration with development and operations tools'
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Autonomous DevOps Services'
    },
    {
      title: 'Self-Adaptive Security Operations',
      description: 'Intelligent security operations with autonomous threat response and adaptation',
      icon: Shield,
      features: [
        'Autonomous threat detection and response',
        'Intelligent security policy adaptation',
        'Automated security incident investigation',
        'Self-learning security behavior analysis',
        'Autonomous security patch management',
        'Integration with SIEM and security tools'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Autonomous Security Services'
    },
    {
      title: 'Intelligent IT Service Management',
      description: 'AI-powered IT service management with autonomous ticket resolution and optimization',
      icon: Users,
      features: [
        'Automated ticket classification and routing',
        'Intelligent service request resolution',
        'Autonomous SLA monitoring and optimization',
        'Automated knowledge base management',
        'Intelligent service performance analytics',
        'Integration with ITSM and helpdesk systems'
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '6-12 weeks',
      category: 'Intelligent ITSM Services'
    },
    {
      title: 'Autonomous Infrastructure Monitoring',
      description: 'Self-managing infrastructure monitoring with intelligent alerting and optimization',
      icon: BarChart3,
      features: [
        'Automated monitoring configuration and optimization',
        'Intelligent alert correlation and reduction',
        'Autonomous performance baseline establishment',
        'Automated capacity planning and scaling',
        'Intelligent anomaly detection and analysis',
        'Integration with monitoring and observability tools'
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: '4-8 weeks',
      category: 'Autonomous Monitoring Services'
    },
    {
      title: 'Self-Optimizing Cloud Migration',
      description: 'Intelligent cloud migration with autonomous optimization and risk management',
      icon: Cloud,
      features: [
        'Automated migration planning and execution',
        'Intelligent workload placement optimization',
        'Autonomous migration risk assessment and mitigation',
        'Automated post-migration optimization',
        'Intelligent cost optimization and monitoring',
        'Integration with multi-cloud and hybrid environments'
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '12-24 weeks',
      category: 'Autonomous Migration Services'
    },
    {
      title: 'Intelligent IT Compliance Management',
      description: 'AI-powered compliance management with autonomous monitoring and reporting',
      icon: Shield,
      features: [
        'Automated compliance assessment and monitoring',
        'Intelligent regulatory change detection',
        'Autonomous compliance gap identification',
        'Automated compliance reporting and documentation',
        'Intelligent risk assessment and mitigation',
        'Integration with governance and audit systems'
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Intelligent Compliance Services'
    },
    {
      title: 'Autonomous IT Disaster Recovery',
      description: 'Self-managing disaster recovery with intelligent testing and optimization',
      icon: Shield,
      features: [
        'Automated disaster recovery planning and testing',
        'Intelligent recovery time optimization',
        'Autonomous backup strategy optimization',
        'Automated failover and failback procedures',
        'Intelligent disaster scenario simulation',
        'Integration with business continuity systems'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Autonomous DR Services'
    },
    {
      title: 'Self-Learning IT Performance Optimization',
      description: 'Intelligent performance optimization with continuous learning and adaptation',
      icon: Zap,
      features: [
        'Automated performance baseline establishment',
        'Intelligent performance bottleneck identification',
        'Autonomous performance optimization recommendations',
        'Automated performance regression detection',
        'Intelligent capacity planning and scaling',
        'Integration with application and infrastructure monitoring'
      ],
      pricing: '$6,000 - $30,000/month',
      delivery: '8-16 weeks',
      category: 'Autonomous Performance Services'
    },
    {
      title: 'Intelligent IT Change Management',
      description: 'AI-powered change management with autonomous risk assessment and optimization',
      icon: Settings,
      features: [
        'Automated change impact analysis',
        'Intelligent change approval workflow optimization',
        'Autonomous change risk assessment',
        'Automated change rollback procedures',
        'Intelligent change success prediction',
        'Integration with change management and ITSM systems'
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '6-12 weeks',
      category: 'Intelligent Change Management Services'
    }
  ];

  const technologies = [
    { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
    { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },
    { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },
    { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },
    { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
    { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
  ];

  const benefits = [
    {
      title: 'Reduced Downtime',
      description: 'Proactive monitoring and maintenance',
      icon: Clock,
      stat: '99.9%'
    },
    {
      title: 'Cost Savings',
      description: 'Optimized infrastructure and processes',
      icon: Zap,
      stat: '40%'
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade protection',
      icon: Shield,
      stat: '100%'
    },
    {
      title: 'Scalability',
      description: 'Flexible and scalable solutions',
      icon: TrendingUp,
      stat: 'Unlimited'
    }
  ];

  return (
    <PageTransition>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Server className="h-12 w-12 text-green-600 mr-4" />
              <Award className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-green-600">IT Services</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Information Technology Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive IT services that keep your business running smoothly. From quantum-safe cryptography 
              to space-based computing infrastructure, we provide cutting-edge technology solutions that prepare 
              your organization for the future of computing and digital transformation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
              >
                View Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our IT Services?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Proven expertise and measurable results for your technology infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.stat}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technologies We Master
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cutting-edge technologies powering modern IT infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <tech.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-4">{tech.name}</h3>
                </div>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our IT Service Portfolio
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive IT solutions tailored to your business needs. All services include implementation, 
              training, and ongoing support. Contact us at{' '}
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:text-green-500">
                kleber@ziontechgroup.com
              </a>{' '}
              or call{' '}
              <a href="tel:+13024640950" className="text-green-600 hover:text-green-500">
                +1 302 464 0950
              </a>{' '}
              for custom pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {itServices.map((service, index) => (
              <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-green-600 font-medium">{service.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.delivery}</span>
                    </div>
                    <div className="font-semibold text-green-600">{service.pricing}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let's discuss how our IT services can optimize your technology infrastructure. 
              Get a free consultation and custom proposal.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-green-600 hover:text-green-500">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:text-green-500">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
              >
                Call Now <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}