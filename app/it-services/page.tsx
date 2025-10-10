'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  TrendingUp,
  Wifi,
  Server,
  Code,
  ShoppingCart,
  Monitor,
  Headphones,
  BarChart
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services',
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Cloud architecture design',
        'Multi-cloud strategies',
        'Cost optimization',
        'Disaster recovery',
        'Auto-scaling solutions',
        'Security compliance'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Cost reduction up to 40%',
        'Scalable infrastructure',
        'Expert migration support'
      ],
      category: 'Cloud',
      popular: true,
      icon: Cloud
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response',
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: [
        'Threat detection & response',
        'Vulnerability assessments',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Employee training'
      ],
      benefits: [
        '24/7 security monitoring',
        'Reduced security incidents',
        'Compliance assurance',
        'Expert security team'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'devops',
      name: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code',
      price: '$2,200/month',
      marketPrice: '$3500-10000/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation'
      ],
      benefits: [
        'Faster deployments',
        'Reduced downtime',
        'Improved code quality',
        'Automated workflows'
      ],
      category: 'DevOps',
      popular: false,
      icon: Settings
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems',
      price: '$1,200/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Data migration',
        'Security hardening',
        'Monitoring & maintenance'
      ],
      benefits: [
        'Improved performance',
        'Data security',
        'Automated backups',
        'Expert DBA support'
      ],
      category: 'Database',
      popular: false,
      icon: Database
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: '$8,000/project',
      marketPrice: '$15000-50000/project',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'App store success',
        'User engagement'
      ],
      category: 'Development',
      popular: false,
      icon: Smartphone
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      price: '$5,000/project',
      marketPrice: '$10000-30000/project',
      features: [
        'React/Next.js development',
        'Responsive design',
        'SEO optimization',
        'Performance tuning',
        'Security implementation',
        'Content management'
      ],
      benefits: [
        'Modern technology stack',
        'SEO optimized',
        'Mobile responsive',
        'Fast loading times'
      ],
      category: 'Development',
      popular: false,
      icon: Globe
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise environments',
      price: '$1,500/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Network architecture design',
        'Wireless network deployment',
        'Network security implementation',
        'Performance monitoring',
        'Disaster recovery planning',
        '24/7 network support'
      ],
      benefits: [
        'Improved network performance',
        'Enhanced security',
        'Reduced downtime',
        'Scalable infrastructure'
      ],
      category: 'Networking',
      popular: false,
      icon: Wifi
    },
    {
      id: 'data-center-services',
      name: 'Data Center Services',
      description: 'Comprehensive data center management including colocation, cloud, and hybrid solutions',
      price: '$3,000/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Data center design and setup',
        'Server and storage management',
        'Power and cooling optimization',
        'Disaster recovery solutions',
        'Compliance and security',
        '24/7 monitoring and support'
      ],
      benefits: [
        '99.99% uptime guarantee',
        'Cost optimization',
        'Scalable infrastructure',
        'Expert management'
      ],
      category: 'Data Center',
      popular: false,
      icon: Server
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations',
      price: '$200/hour',
      marketPrice: '$300-800/hour',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation planning',
        'Vendor evaluation',
        'Process optimization',
        'Change management'
      ],
      benefits: [
        'Strategic guidance',
        'Cost optimization',
        'Technology alignment',
        'Competitive advantage'
      ],
      category: 'Consulting',
      popular: true,
      icon: Users
    },
    {
      id: 'managed-services',
      name: 'Managed IT Services',
      description: 'Comprehensive managed IT services including monitoring, maintenance, and support',
      price: '$1,000/month',
      marketPrice: '$2000-6000/month',
      features: [
        '24/7 system monitoring',
        'Proactive maintenance',
        'Help desk support',
        'Security management',
        'Backup and recovery',
        'Software updates'
      ],
      benefits: [
        'Reduced IT costs',
        'Improved reliability',
        'Expert support',
        'Focus on core business'
      ],
      category: 'Managed Services',
      popular: true,
      icon: Settings
    },
    {
      id: 'api-development',
      name: 'API Development & Integration',
      description: 'Custom API development and integration services for seamless system connectivity',
      price: '$2,000/project',
      marketPrice: '$5000-15000/project',
      features: [
        'RESTful API development',
        'GraphQL implementation',
        'API documentation',
        'Third-party integrations',
        'API security and authentication',
        'Performance optimization'
      ],
      benefits: [
        'Improved system integration',
        'Enhanced functionality',
        'Better performance',
        'Scalable architecture'
      ],
      category: 'API Development',
      popular: false,
      icon: Code
    },
    {
      id: 'ecommerce-solutions',
      name: 'E-commerce Solutions',
      description: 'Complete e-commerce platform development and optimization services',
      price: '$10,000/project',
      marketPrice: '$20000-100000/project',
      features: [
        'Custom e-commerce development',
        'Payment gateway integration',
        'Inventory management',
        'Order processing automation',
        'Mobile commerce optimization',
        'SEO and marketing tools'
      ],
      benefits: [
        'Increased online sales',
        'Better user experience',
        'Mobile optimization',
        'Scalable platform'
      ],
      category: 'E-commerce',
      popular: true,
      icon: ShoppingCart
    },
    {
      id: 'enterprise-software',
      name: 'Enterprise Software Development',
      description: 'Custom enterprise software solutions tailored to specific business requirements',
      price: '$15,000/project',
      marketPrice: '$30000-200000/project',
      features: [
        'Custom software development',
        'Legacy system modernization',
        'Integration with existing systems',
        'User interface design',
        'Testing and quality assurance',
        'Training and documentation'
      ],
      benefits: [
        'Tailored solutions',
        'Improved efficiency',
        'Better user experience',
        'Competitive advantage'
      ],
      category: 'Software Development',
      popular: false,
      icon: Monitor
    },
    {
      id: 'it-support',
      name: 'IT Support & Help Desk',
      description: 'Comprehensive IT support services including help desk, troubleshooting, and maintenance',
      price: '$800/month',
      marketPrice: '$1500-4000/month',
      features: [
        '24/7 help desk support',
        'Remote troubleshooting',
        'Hardware and software support',
        'User training and onboarding',
        'System maintenance',
        'Incident management'
      ],
      benefits: [
        'Reduced downtime',
        'Improved productivity',
        'Expert support',
        'Cost-effective solutions'
      ],
      category: 'Support',
      popular: true,
      icon: Headphones
    },
    {
      id: 'cloud-security',
      name: 'Cloud Security Services',
      description: 'Specialized cloud security services including compliance, monitoring, and threat protection',
      price: '$2,200/month',
      marketPrice: '$4000-12000/month',
      features: [
        'Cloud security assessment',
        'Identity and access management',
        'Data encryption and protection',
        'Compliance monitoring',
        'Threat detection and response',
        'Security training and awareness'
      ],
      benefits: [
        'Enhanced cloud security',
        'Compliance assurance',
        'Threat protection',
        'Expert guidance'
      ],
      category: 'Cloud Security',
      popular: false,
      icon: Shield
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics & BI',
      description: 'Advanced data analytics and business intelligence solutions for data-driven decisions',
      price: '$1,800/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Data warehouse design',
        'ETL process development',
        'Dashboard and reporting',
        'Predictive analytics',
        'Data visualization',
        'Machine learning integration'
      ],
      benefits: [
        'Data-driven insights',
        'Better decision making',
        'Competitive advantage',
        'Improved efficiency'
      ],
      category: 'Data Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery and business continuity planning and implementation',
      price: '$1,600/month',
      marketPrice: '$3000-8000/month',
      features: [
        'Disaster recovery planning',
        'Backup and recovery solutions',
        'Business continuity testing',
        'RTO and RPO optimization',
        'Cloud-based recovery',
        'Regular testing and updates'
      ],
      benefits: [
        'Minimized downtime',
        'Data protection',
        'Business continuity',
        'Peace of mind'
      ],
      category: 'Disaster Recovery',
      popular: false,
      icon: Shield
    },
    {
      id: 'it-audit',
      name: 'IT Audit & Compliance',
      description: 'Comprehensive IT audit and compliance services for regulatory requirements',
      price: '$1,400/month',
      marketPrice: '$2500-6000/month',
      features: [
        'IT security audits',
        'Compliance assessments',
        'Risk analysis and mitigation',
        'Policy development',
        'Training and awareness',
        'Ongoing monitoring'
      ],
      benefits: [
        'Regulatory compliance',
        'Risk mitigation',
        'Improved security posture',
        'Audit readiness'
      ],
      category: 'Compliance',
      popular: false,
      icon: CheckCircle
    },
    {
      id: 'iot-solutions',
      name: 'IoT Solutions & Integration',
      description: 'Internet of Things solutions for smart devices, sensors, and connected systems',
      price: '$2,800/month',
      marketPrice: '$5000-20000/month',
      features: [
        'IoT device integration',
        'Sensor data collection',
        'Real-time monitoring',
        'Edge computing solutions',
        'Data analytics and insights',
        'Remote device management',
        'Security and encryption',
        'Scalable IoT architecture'
      ],
      benefits: [
        'Improved operational efficiency',
        'Real-time data insights',
        'Automated monitoring',
        'Cost reduction through automation'
      ],
      category: 'IoT',
      popular: false,
      icon: Wifi
    },
    {
      id: 'blockchain-solutions',
      name: 'Blockchain Development',
      description: 'Custom blockchain solutions including smart contracts, DeFi, and Web3 applications',
      price: '$4,500/month',
      marketPrice: '$8000-30000/month',
      features: [
        'Smart contract development',
        'DeFi protocol creation',
        'NFT marketplace development',
        'Blockchain integration',
        'Cryptocurrency wallet development',
        'Token economics design',
        'Security auditing',
        'Cross-chain solutions'
      ],
      benefits: [
        'Decentralized solutions',
        'Enhanced security',
        'Transparent transactions',
        'Future-proof technology'
      ],
      category: 'Blockchain',
      popular: false,
      icon: Shield
    },
    {
      id: 'ai-infrastructure',
      name: 'AI Infrastructure Setup',
      description: 'Complete AI infrastructure including GPU clusters, ML pipelines, and model deployment',
      price: '$3,500/month',
      marketPrice: '$6000-25000/month',
      features: [
        'GPU cluster setup and management',
        'ML pipeline development',
        'Model training infrastructure',
        'Model deployment and serving',
        'Data preprocessing pipelines',
        'MLOps implementation',
        'Model monitoring and versioning',
        'Auto-scaling AI workloads'
      ],
      benefits: [
        'Scalable AI infrastructure',
        'Faster model development',
        'Automated ML workflows',
        'Cost-effective AI operations'
      ],
      category: 'AI Infrastructure',
      popular: true,
      icon: Zap
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Services',
      description: 'Quantum computing solutions and hybrid classical-quantum systems',
      price: '$8,000/month',
      marketPrice: '$15000-50000/month',
      features: [
        'Quantum algorithm development',
        'Hybrid classical-quantum systems',
        'Quantum simulation services',
        'Quantum optimization solutions',
        'Quantum cryptography',
        'Research and development',
        'Quantum cloud access',
        'Expert consultation'
      ],
      benefits: [
        'Exponential computational power',
        'Solve complex optimization problems',
        'Future-proof technology',
        'Competitive advantage'
      ],
      category: 'Quantum Computing',
      popular: false,
      icon: Cpu
    },
    {
      id: '5g-implementation',
      name: '5G Network Implementation',
      description: '5G network design, deployment, and optimization for enterprise environments',
      price: '$5,500/month',
      marketPrice: '$10000-40000/month',
      features: [
        '5G network architecture design',
        'Small cell deployment',
        'Network slicing implementation',
        'Edge computing integration',
        'IoT device connectivity',
        'Performance optimization',
        'Security implementation',
        'Monitoring and management'
      ],
      benefits: [
        'Ultra-fast connectivity',
        'Low latency applications',
        'Massive IoT connectivity',
        'Enhanced mobile experiences'
      ],
      category: '5G Technology',
      popular: false,
      icon: Wifi
    },
    {
      id: 'ar-vr-solutions',
      name: 'AR/VR Development',
      description: 'Augmented and Virtual Reality solutions for training, visualization, and immersive experiences',
      price: '$6,000/project',
      marketPrice: '$12000-50000/project',
      features: [
        'AR/VR application development',
        '3D content creation',
        'Immersive training solutions',
        'Virtual collaboration platforms',
        'Mixed reality experiences',
        'Cross-platform compatibility',
        'Performance optimization',
        'User experience design'
      ],
      benefits: [
        'Immersive user experiences',
        'Enhanced training effectiveness',
        'Remote collaboration',
        'Innovative customer engagement'
      ],
      category: 'AR/VR',
      popular: false,
      icon: Monitor
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Solutions',
      description: 'Edge computing infrastructure for real-time processing and reduced latency',
      price: '$2,200/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Edge server deployment',
        'Real-time data processing',
        'Low-latency applications',
        'Offline capability',
        'Edge AI deployment',
        'Distributed computing',
        'Bandwidth optimization',
        'Edge security implementation'
      ],
      benefits: [
        'Reduced latency',
        'Improved performance',
        'Offline operation',
        'Cost-effective processing'
      ],
      category: 'Edge Computing',
      popular: false,
      icon: Server
    },
    {
      id: 'microservices-architecture',
      name: 'Microservices Architecture',
      description: 'Microservices design and implementation for scalable, maintainable applications',
      price: '$3,200/month',
      marketPrice: '$6000-20000/month',
      features: [
        'Microservices design and planning',
        'Service decomposition',
        'API gateway implementation',
        'Service mesh deployment',
        'Container orchestration',
        'Distributed tracing',
        'Service discovery',
        'Monitoring and observability'
      ],
      benefits: [
        'Scalable architecture',
        'Independent service deployment',
        'Technology diversity',
        'Improved maintainability'
      ],
      category: 'Architecture',
      popular: true,
      icon: Settings
    },
    {
      id: 'data-lake-solutions',
      name: 'Data Lake & Data Warehouse',
      description: 'Modern data lake and warehouse solutions for big data analytics and insights',
      price: '$2,600/month',
      marketPrice: '$5000-18000/month',
      features: [
        'Data lake architecture design',
        'Data warehouse implementation',
        'ETL/ELT pipeline development',
        'Data governance and security',
        'Real-time data processing',
        'Data quality management',
        'Advanced analytics integration',
        'Scalable storage solutions'
      ],
      benefits: [
        'Centralized data management',
        'Advanced analytics capabilities',
        'Scalable data processing',
        'Data-driven insights'
      ],
      category: 'Data Management',
      popular: false,
      icon: Database
    },
    {
      id: 'zero-trust-security',
      name: 'Zero Trust Security Architecture',
      description: 'Zero trust security implementation for comprehensive network and data protection',
      price: '$2,800/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Zero trust network design',
        'Identity and access management',
        'Multi-factor authentication',
        'Device trust verification',
        'Network segmentation',
        'Continuous monitoring',
        'Threat detection and response',
        'Compliance automation'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Comprehensive protection',
        'Compliance assurance'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'hybrid-cloud-solutions',
      name: 'Hybrid Cloud Solutions',
      description: 'Hybrid cloud architecture combining on-premises and cloud infrastructure',
      price: '$3,800/month',
      marketPrice: '$7000-25000/month',
      features: [
        'Hybrid cloud architecture design',
        'Cloud migration strategies',
        'Multi-cloud management',
        'Data synchronization',
        'Workload optimization',
        'Cost management',
        'Security and compliance',
        'Disaster recovery planning'
      ],
      benefits: [
        'Flexible infrastructure',
        'Cost optimization',
        'Improved performance',
        'Risk mitigation'
      ],
      category: 'Cloud',
      popular: false,
      icon: Cloud
    },
    {
      id: 'api-gateway-management',
      name: 'API Gateway & Management',
      description: 'Comprehensive API gateway solutions for secure, scalable API management',
      price: '$1,600/month',
      marketPrice: '$3000-10000/month',
      features: [
        'API gateway implementation',
        'API security and authentication',
        'Rate limiting and throttling',
        'API monitoring and analytics',
        'Developer portal creation',
        'API versioning and lifecycle',
        'Microservices integration',
        'Third-party API management'
      ],
      benefits: [
        'Centralized API management',
        'Enhanced security',
        'Better developer experience',
        'Improved API performance'
      ],
      category: 'API Management',
      popular: false,
      icon: Code
    },
    {
      id: 'container-orchestration',
      name: 'Container Orchestration',
      description: 'Kubernetes and container orchestration for scalable application deployment',
      price: '$2,400/month',
      marketPrice: '$4500-15000/month',
      features: [
        'Kubernetes cluster setup',
        'Container orchestration',
        'Service mesh implementation',
        'Auto-scaling configuration',
        'Load balancing and routing',
        'Storage management',
        'Monitoring and logging',
        'Security hardening'
      ],
      benefits: [
        'Scalable container deployment',
        'Automated management',
        'Resource optimization',
        'High availability'
      ],
      category: 'DevOps',
      popular: true,
      icon: Settings
    },
    {
      id: 'observability-platform',
      name: 'Observability Platform',
      description: 'Comprehensive observability solution with monitoring, logging, and tracing',
      price: '$1,800/month',
      marketPrice: '$3500-12000/month',
      features: [
        'Application performance monitoring',
        'Infrastructure monitoring',
        'Log aggregation and analysis',
        'Distributed tracing',
        'Alerting and incident management',
        'Custom dashboards',
        'Machine learning insights',
        'Integration with DevOps tools'
      ],
      benefits: [
        'Proactive issue detection',
        'Faster troubleshooting',
        'Improved system reliability',
        'Data-driven insights'
      ],
      category: 'Monitoring',
      popular: false,
      icon: BarChart
    },
    {
      id: 'serverless-architecture',
      name: 'Serverless Architecture',
      description: 'Serverless application development and deployment for cost-effective scaling',
      price: '$1,200/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Serverless application design',
        'Function-as-a-Service deployment',
        'Event-driven architecture',
        'Auto-scaling configuration',
        'Cost optimization',
        'Security implementation',
        'Monitoring and debugging',
        'Integration with cloud services'
      ],
      benefits: [
        'Cost-effective scaling',
        'Reduced operational overhead',
        'Faster development cycles',
        'Automatic scaling'
      ],
      category: 'Serverless',
      popular: true,
      icon: Zap
    },
    {
      id: 'data-privacy-compliance',
      name: 'Data Privacy & Compliance',
      description: 'GDPR, CCPA, and other data privacy compliance solutions and implementation',
      price: '$2,000/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Privacy impact assessments',
        'Data mapping and classification',
        'Consent management systems',
        'Data subject rights automation',
        'Privacy by design implementation',
        'Compliance monitoring',
        'Audit trail management',
        'Staff training and awareness'
      ],
      benefits: [
        'Regulatory compliance',
        'Reduced legal risks',
        'Enhanced data protection',
        'Customer trust and confidence'
      ],
      category: 'Compliance',
      popular: false,
      icon: Shield
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategy and implementation services',
      price: '$5,000/month',
      marketPrice: '$10000-50000/month',
      features: [
        'Digital strategy development',
        'Process digitization',
        'Legacy system modernization',
        'Cloud migration',
        'Automation implementation',
        'Change management',
        'Training and adoption',
        'Performance measurement'
      ],
      benefits: [
        'Improved operational efficiency',
        'Enhanced customer experience',
        'Competitive advantage',
        'Future-ready organization'
      ],
      category: 'Digital Transformation',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'it-consulting-enterprise',
      name: 'Enterprise IT Consulting',
      description: 'Strategic IT consulting for large enterprises and complex technology environments',
      price: '$300/hour',
      marketPrice: '$500-1200/hour',
      features: [
        'IT strategy and roadmap development',
        'Technology architecture review',
        'Vendor evaluation and selection',
        'Digital transformation planning',
        'Risk assessment and mitigation',
        'Cost optimization analysis',
        'Technology trend analysis',
        'Executive advisory services'
      ],
      benefits: [
        'Strategic technology guidance',
        'Cost optimization',
        'Risk mitigation',
        'Competitive advantage'
      ],
      category: 'Consulting',
      popular: false,
      icon: Users
    },
    {
      id: 'it-outsourcing',
      name: 'IT Outsourcing Services',
      description: 'Complete IT outsourcing solutions including staff augmentation and managed services',
      price: '$2,500/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Dedicated development teams',
        'Staff augmentation services',
        'Project-based outsourcing',
        '24/7 technical support',
        'Quality assurance services',
        'Knowledge transfer',
        'Flexible engagement models',
        'Scalable resources'
      ],
      benefits: [
        'Access to specialized expertise',
        'Reduced operational costs',
        'Faster project delivery',
        'Focus on core business'
      ],
      category: 'Outsourcing',
      popular: true,
      icon: Users
    },
    {
      id: 'it-training',
      name: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification preparation services',
      price: '$500/person',
      marketPrice: '$1000-3000/person',
      features: [
        'Custom training programs',
        'Technology-specific courses',
        'Certification preparation',
        'Hands-on workshops',
        'Online and in-person training',
        'Assessment and testing',
        'Continuing education',
        'Corporate training packages'
      ],
      benefits: [
        'Enhanced team skills',
        'Improved productivity',
        'Technology adoption',
        'Competitive advantage'
      ],
      category: 'Training',
      popular: false,
      icon: Users
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Cloud', name: 'Cloud', count: services.filter(s => s.category === 'Cloud').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'DevOps', name: 'DevOps', count: services.filter(s => s.category === 'DevOps').length },
    { id: 'Database', name: 'Database', count: services.filter(s => s.category === 'Database').length },
    { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length },
    { id: 'Networking', name: 'Networking', count: services.filter(s => s.category === 'Networking').length },
    { id: 'Data Center', name: 'Data Center', count: services.filter(s => s.category === 'Data Center').length },
    { id: 'Consulting', name: 'Consulting', count: services.filter(s => s.category === 'Consulting').length },
    { id: 'Managed Services', name: 'Managed Services', count: services.filter(s => s.category === 'Managed Services').length },
    { id: 'API Development', name: 'API Development', count: services.filter(s => s.category === 'API Development').length },
    { id: 'E-commerce', name: 'E-commerce', count: services.filter(s => s.category === 'E-commerce').length },
    { id: 'Software Development', name: 'Software Development', count: services.filter(s => s.category === 'Software Development').length },
    { id: 'Support', name: 'Support', count: services.filter(s => s.category === 'Support').length },
    { id: 'Cloud Security', name: 'Cloud Security', count: services.filter(s => s.category === 'Cloud Security').length },
    { id: 'Data Analytics', name: 'Data Analytics', count: services.filter(s => s.category === 'Data Analytics').length },
    { id: 'Disaster Recovery', name: 'Disaster Recovery', count: services.filter(s => s.category === 'Disaster Recovery').length },
    { id: 'Compliance', name: 'Compliance', count: services.filter(s => s.category === 'Compliance').length },
    { id: 'IoT', name: 'IoT', count: services.filter(s => s.category === 'IoT').length },
    { id: 'Blockchain', name: 'Blockchain', count: services.filter(s => s.category === 'Blockchain').length },
    { id: 'AI Infrastructure', name: 'AI Infrastructure', count: services.filter(s => s.category === 'AI Infrastructure').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: services.filter(s => s.category === 'Quantum Computing').length },
    { id: '5G Technology', name: '5G Technology', count: services.filter(s => s.category === '5G Technology').length },
    { id: 'AR/VR', name: 'AR/VR', count: services.filter(s => s.category === 'AR/VR').length },
    { id: 'Edge Computing', name: 'Edge Computing', count: services.filter(s => s.category === 'Edge Computing').length },
    { id: 'Architecture', name: 'Architecture', count: services.filter(s => s.category === 'Architecture').length },
    { id: 'Data Management', name: 'Data Management', count: services.filter(s => s.category === 'Data Management').length },
    { id: 'API Management', name: 'API Management', count: services.filter(s => s.category === 'API Management').length },
    { id: 'Monitoring', name: 'Monitoring', count: services.filter(s => s.category === 'Monitoring').length },
    { id: 'Serverless', name: 'Serverless', count: services.filter(s => s.category === 'Serverless').length },
    { id: 'Digital Transformation', name: 'Digital Transformation', count: services.filter(s => s.category === 'Digital Transformation').length },
    { id: 'Outsourcing', name: 'Outsourcing', count: services.filter(s => s.category === 'Outsourcing').length },
    { id: 'Training', name: 'Training', count: services.filter(s => s.category === 'Training').length }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database management, and web development." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete IT solutions to modernize your infrastructure and drive business growth. 
                From cloud migration to cybersecurity, we have the expertise you need.
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    {service.popular && (
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Modernize Your IT Infrastructure?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our IT experts help you choose the right solutions for your business needs. 
                  Get a free consultation and see how we can transform your technology infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ItServicesPage;
