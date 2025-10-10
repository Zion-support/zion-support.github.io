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
      id: 'cloud-native-development',
      name: 'Cloud-Native Development',
      description: 'Modern cloud-native application development with microservices and containerization',
      price: '$3,500/month',
      marketPrice: '$6000-20000/month',
      features: [
        'Microservices architecture design',
        'Container orchestration (Kubernetes)',
        'Serverless application development',
        'API gateway implementation',
        'Service mesh configuration',
        'Cloud-native monitoring',
        'CI/CD pipeline setup',
        'Auto-scaling implementation'
      ],
      benefits: [
        'Scalable and resilient applications',
        'Faster deployment cycles',
        'Cost-effective scaling',
        'Modern development practices'
      ],
      category: 'Cloud Development',
      popular: true,
      icon: Cloud
    },
    {
      id: 'ai-integration-services',
      name: 'AI Integration Services',
      description: 'AI model integration and deployment services for existing business systems',
      price: '$2,800/month',
      marketPrice: '$5000-15000/month',
      features: [
        'AI model integration',
        'API development for AI services',
        'Data pipeline setup',
        'Model deployment and monitoring',
        'Performance optimization',
        'Integration with existing systems',
        'Custom AI solution development',
        'Training and support'
      ],
      benefits: [
        'Leverage AI capabilities',
        'Seamless integration',
        'Improved business processes',
        'Competitive advantage'
      ],
      category: 'AI Integration',
      popular: true,
      icon: Brain
    },
    {
      id: 'blockchain-development',
      name: 'Blockchain Development',
      description: 'Blockchain application development and smart contract implementation',
      price: '$4,500/month',
      marketPrice: '$8000-25000/month',
      features: [
        'Smart contract development',
        'Blockchain platform integration',
        'DeFi application development',
        'NFT marketplace creation',
        'Cryptocurrency integration',
        'Blockchain security auditing',
        'Token development',
        'Web3 integration'
      ],
      benefits: [
        'Decentralized applications',
        'Enhanced security',
        'Transparent transactions',
        'Future-proof technology'
      ],
      category: 'Blockchain',
      popular: false,
      icon: Link
    },
    {
      id: 'iot-development',
      name: 'IoT Development & Integration',
      description: 'Internet of Things solution development and device integration services',
      price: '$2,200/month',
      marketPrice: '$4000-12000/month',
      features: [
        'IoT device development',
        'Sensor integration',
        'Data collection and processing',
        'Real-time monitoring systems',
        'IoT platform development',
        'Device management solutions',
        'Edge computing implementation',
        'IoT security implementation'
      ],
      benefits: [
        'Connected device solutions',
        'Real-time data insights',
        'Automated processes',
        'Improved efficiency'
      ],
      category: 'IoT Development',
      popular: true,
      icon: Wifi
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android',
      price: '$8,000/project',
      marketPrice: '$15000-50000/project',
      features: [
        'iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'App store optimization',
        'Push notification implementation',
        'Offline functionality',
        'Performance optimization',
        'Security implementation',
        'App maintenance and updates'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'App store success',
        'User engagement'
      ],
      category: 'Mobile Development',
      popular: true,
      icon: Smartphone
    },
    {
      id: 'e-commerce-development',
      name: 'E-commerce Development',
      description: 'Complete e-commerce platform development with payment integration and inventory management',
      price: '$12,000/project',
      marketPrice: '$25000-100000/project',
      features: [
        'Custom e-commerce development',
        'Payment gateway integration',
        'Inventory management system',
        'Order processing automation',
        'Customer management',
        'Analytics and reporting',
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
      id: 'api-development-advanced',
      name: 'Advanced API Development',
      description: 'Enterprise-grade API development with microservices architecture and advanced security',
      price: '$3,200/month',
      marketPrice: '$6000-18000/month',
      features: [
        'RESTful and GraphQL APIs',
        'Microservices architecture',
        'API gateway implementation',
        'Rate limiting and throttling',
        'API security and authentication',
        'API documentation and testing',
        'Performance optimization',
        'Monitoring and analytics'
      ],
      benefits: [
        'Scalable API architecture',
        'Enhanced security',
        'Better performance',
        'Developer-friendly APIs'
      ],
      category: 'API Development',
      popular: true,
      icon: Code
    },
    {
      id: 'data-engineering',
      name: 'Data Engineering Services',
      description: 'Data pipeline development and data infrastructure setup for analytics and AI',
      price: '$2,600/month',
      marketPrice: '$5000-15000/month',
      features: [
        'Data pipeline development',
        'ETL/ELT process implementation',
        'Data warehouse design',
        'Real-time data processing',
        'Data quality management',
        'Data integration services',
        'Cloud data platform setup',
        'Data governance implementation'
      ],
      benefits: [
        'Efficient data processing',
        'Better data quality',
        'Scalable data infrastructure',
        'Data-driven insights'
      ],
      category: 'Data Engineering',
      popular: true,
      icon: Database
    },
    {
      id: 'cybersecurity-advanced',
      name: 'Advanced Cybersecurity',
      description: 'Comprehensive cybersecurity services including threat hunting and incident response',
      price: '$3,800/month',
      marketPrice: '$7000-25000/month',
      features: [
        'Threat hunting and detection',
        'Incident response planning',
        'Security architecture design',
        'Penetration testing',
        'Vulnerability assessments',
        'Security monitoring (SOC)',
        'Compliance management',
        'Security training programs'
      ],
      benefits: [
        'Proactive threat protection',
        'Reduced security risks',
        'Compliance assurance',
        'Expert security guidance'
      ],
      category: 'Cybersecurity',
      popular: true,
      icon: Shield
    },
    {
      id: 'cloud-migration-advanced',
      name: 'Advanced Cloud Migration',
      description: 'Complex cloud migration services with zero-downtime and data integrity assurance',
      price: '$4,200/month',
      marketPrice: '$8000-30000/month',
      features: [
        'Zero-downtime migration',
        'Data integrity verification',
        'Application modernization',
        'Cloud cost optimization',
        'Disaster recovery setup',
        'Security compliance migration',
        'Performance optimization',
        'Training and documentation'
      ],
      benefits: [
        'Seamless cloud transition',
        'Improved performance',
        'Cost optimization',
        'Enhanced security'
      ],
      category: 'Cloud Migration',
      popular: true,
      icon: Cloud
    },
    {
      id: 'devops-advanced',
      name: 'Advanced DevOps & SRE',
      description: 'Site Reliability Engineering and advanced DevOps practices for high-availability systems',
      price: '$3,600/month',
      marketPrice: '$7000-20000/month',
      features: [
        'Site Reliability Engineering',
        'Infrastructure as Code',
        'Advanced monitoring and alerting',
        'Chaos engineering',
        'Performance optimization',
        'Disaster recovery automation',
        'Security automation',
        'Team training and mentoring'
      ],
      benefits: [
        'High system availability',
        'Faster incident response',
        'Improved system reliability',
        'Reduced operational costs'
      ],
      category: 'DevOps',
      popular: true,
      icon: Settings
    },
    {
      id: 'machine-learning-ops',
      name: 'MLOps & AI Operations',
      description: 'Machine Learning Operations and AI model deployment and monitoring services',
      price: '$2,900/month',
      marketPrice: '$5500-18000/month',
      features: [
        'ML model deployment',
        'Model versioning and management',
        'A/B testing for ML models',
        'Model monitoring and alerting',
        'Data drift detection',
        'Model retraining automation',
        'ML pipeline development',
        'Performance optimization'
      ],
      benefits: [
        'Reliable ML operations',
        'Automated model management',
        'Better model performance',
        'Reduced operational overhead'
      ],
      category: 'MLOps',
      popular: true,
      icon: Cpu
    },
    {
      id: 'enterprise-integration',
      name: 'Enterprise Integration',
      description: 'Complex enterprise system integration with legacy and modern systems',
      price: '$3,400/month',
      marketPrice: '$6500-20000/month',
      features: [
        'Legacy system integration',
        'Enterprise Service Bus (ESB)',
        'API management platform',
        'Data synchronization',
        'Workflow automation',
        'System monitoring',
        'Error handling and recovery',
        'Documentation and training'
      ],
      benefits: [
        'Seamless system connectivity',
        'Improved data flow',
        'Reduced manual processes',
        'Better system visibility'
      ],
      category: 'Integration',
      popular: true,
      icon: Link
    },
    {
      id: 'performance-optimization',
      name: 'Performance Optimization',
      description: 'Application and infrastructure performance optimization for better user experience',
      price: '$1,800/month',
      marketPrice: '$3500-10000/month',
      features: [
        'Application performance analysis',
        'Database optimization',
        'Code optimization',
        'Caching implementation',
        'CDN setup and optimization',
        'Load testing and optimization',
        'Performance monitoring',
        'Capacity planning'
      ],
      benefits: [
        'Faster application response',
        'Better user experience',
        'Reduced infrastructure costs',
        'Improved scalability'
      ],
      category: 'Performance',
      popular: true,
      icon: Zap
    },
    {
      id: 'disaster-recovery-advanced',
      name: 'Advanced Disaster Recovery',
      description: 'Comprehensive disaster recovery and business continuity solutions',
      price: '$2,400/month',
      marketPrice: '$4500-15000/month',
      features: [
        'Disaster recovery planning',
        'Backup and recovery automation',
        'Business continuity testing',
        'RTO and RPO optimization',
        'Cloud-based recovery solutions',
        'Data replication setup',
        'Recovery testing automation',
        'Documentation and training'
      ],
      benefits: [
        'Minimized business downtime',
        'Data protection assurance',
        'Rapid recovery capabilities',
        'Peace of mind'
      ],
      category: 'Disaster Recovery',
      popular: false,
      icon: Shield
    },
    {
      id: 'compliance-automation',
      name: 'Compliance Automation',
      description: 'Automated compliance monitoring and reporting for various regulatory frameworks',
      price: '$2,100/month',
      marketPrice: '$4000-12000/month',
      features: [
        'Automated compliance monitoring',
        'Regulatory reporting automation',
        'Policy management systems',
        'Audit trail automation',
        'Risk assessment automation',
        'Compliance dashboard',
        'Alert and notification systems',
        'Integration with existing systems'
      ],
      benefits: [
        'Reduced compliance costs',
        'Automated reporting',
        'Better risk management',
        'Audit readiness'
      ],
      category: 'Compliance',
      popular: true,
      icon: CheckCircle
    },
    {
      id: 'cloud-cost-optimization',
      name: 'Cloud Cost Optimization',
      description: 'Cloud cost analysis and optimization services to reduce infrastructure spending',
      price: '$1,600/month',
      marketPrice: '$3000-8000/month',
      features: [
        'Cloud cost analysis',
        'Resource optimization recommendations',
        'Reserved instance planning',
        'Spot instance utilization',
        'Cost monitoring and alerting',
        'Budget management',
        'Cost allocation and reporting',
        'Optimization automation'
      ],
      benefits: [
        'Reduce cloud costs by 30-50%',
        'Better resource utilization',
        'Automated cost management',
        'Improved budget control'
      ],
      category: 'Cloud Optimization',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'security-automation',
      name: 'Security Automation',
      description: 'Automated security monitoring, incident response, and threat detection',
      price: '$2,700/month',
      marketPrice: '$5000-15000/month',
      features: [
        'Automated threat detection',
        'Incident response automation',
        'Security orchestration',
        'Vulnerability scanning automation',
        'Compliance monitoring automation',
        'Security analytics automation',
        'Threat intelligence integration',
        'Custom security workflows'
      ],
      benefits: [
        'Faster threat response',
        'Reduced security incidents',
        'Automated compliance',
        'Better security posture'
      ],
      category: 'Security Automation',
      popular: true,
      icon: Shield
    },
    {
      id: 'data-visualization',
      name: 'Data Visualization & BI',
      description: 'Advanced data visualization and business intelligence dashboard development',
      price: '$1,900/month',
      marketPrice: '$3500-10000/month',
      features: [
        'Interactive dashboard development',
        'Real-time data visualization',
        'Custom chart and graph creation',
        'Data storytelling',
        'Mobile-responsive dashboards',
        'Self-service analytics',
        'Data integration',
        'User training and support'
      ],
      benefits: [
        'Better data insights',
        'Improved decision making',
        'Self-service analytics',
        'Enhanced reporting'
      ],
      category: 'Data Visualization',
      popular: true,
      icon: BarChart
    },
    {
      id: 'workflow-automation',
      name: 'Workflow Automation',
      description: 'Business process automation and workflow optimization services',
      price: '$2,300/month',
      marketPrice: '$4500-12000/month',
      features: [
        'Process analysis and optimization',
        'Workflow automation design',
        'RPA (Robotic Process Automation)',
        'Integration with business systems',
        'Custom automation solutions',
        'Process monitoring and analytics',
        'Change management',
        'Training and documentation'
      ],
      benefits: [
        'Reduced manual work',
        'Improved process efficiency',
        'Better accuracy',
        'Cost savings'
      ],
      category: 'Automation',
      popular: true,
      icon: Settings
    },
    {
      id: 'cloud-native-security',
      name: 'Cloud-Native Security',
      description: 'Specialized security services for cloud-native applications and infrastructure',
      price: '$3,100/month',
      marketPrice: '$6000-18000/month',
      features: [
        'Container security',
        'Kubernetes security',
        'Serverless security',
        'Cloud security posture management',
        'Identity and access management',
        'Network security',
        'Data protection',
        'Compliance automation'
      ],
      benefits: [
        'Enhanced cloud security',
        'Automated security management',
        'Better compliance',
        'Reduced security risks'
      ],
      category: 'Cloud Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'ai-infrastructure-management',
      name: 'AI Infrastructure Management',
      description: 'AI-powered infrastructure management with automated optimization and monitoring',
      price: '$2,800/month',
      marketPrice: '$5500-15000/month',
      features: [
        'AI-powered resource optimization',
        'Automated scaling and load balancing',
        'Predictive maintenance and monitoring',
        'Cost optimization algorithms',
        'Performance analytics and insights',
        'Integration with cloud platforms',
        'Custom AI model development',
        'Real-time infrastructure monitoring'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Automated optimization',
        'Better performance monitoring',
        'Predictive maintenance'
      ],
      category: 'AI Integration',
      popular: true,
      icon: Cpu
    },
    {
      id: 'quantum-computing-services',
      name: 'Quantum Computing Services',
      description: 'Quantum computing solutions and consulting for advanced computational problems',
      price: '$5,000/month',
      marketPrice: '$10000-50000/month',
      features: [
        'Quantum algorithm development',
        'Quantum software optimization',
        'Quantum hardware integration',
        'Quantum simulation services',
        'Quantum cryptography implementation',
        'Quantum machine learning',
        'Quantum consulting and training',
        'Hybrid classical-quantum solutions'
      ],
      benefits: [
        'Solve complex computational problems',
        'Exponential speed improvements',
        'Future-proof technology',
        'Competitive advantage'
      ],
      category: 'Quantum Computing',
      popular: false,
      icon: Cpu
    },
    {
      id: 'edge-computing-infrastructure',
      name: 'Edge Computing Infrastructure',
      description: 'Edge computing solutions for low-latency applications and IoT deployments',
      price: '$2,200/month',
      marketPrice: '$4500-12000/month',
      features: [
        'Edge server deployment and management',
        'Low-latency application hosting',
        'IoT device integration',
        'Edge data processing and analytics',
        'CDN and content delivery optimization',
        'Edge security implementation',
        'Real-time monitoring and management',
        'Global edge network deployment'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Improve application performance',
        'Better IoT device management',
        'Global edge coverage'
      ],
      category: 'Edge Computing',
      popular: true,
      icon: Server
    },
    {
      id: '5g-network-implementation',
      name: '5G Network Implementation',
      description: '5G network design, implementation, and optimization services',
      price: '$4,500/month',
      marketPrice: '$9000-25000/month',
      features: [
        '5G network architecture design',
        'Small cell deployment and optimization',
        'Network slicing implementation',
        '5G core network setup',
        'Performance optimization and tuning',
        'Integration with existing networks',
        '5G security implementation',
        'Testing and validation services'
      ],
      benefits: [
        'Ultra-fast network speeds',
        'Low latency connectivity',
        'Massive IoT device support',
        'Future-ready infrastructure'
      ],
      category: '5G Networks',
      popular: true,
      icon: Wifi
    },
    {
      id: 'blockchain-infrastructure',
      name: 'Blockchain Infrastructure',
      description: 'Blockchain network setup, management, and optimization services',
      price: '$3,500/month',
      marketPrice: '$7000-20000/month',
      features: [
        'Blockchain network design and deployment',
        'Smart contract development and auditing',
        'Consensus mechanism implementation',
        'Blockchain security and compliance',
        'Node management and monitoring',
        'Integration with existing systems',
        'Blockchain consulting and training',
        'Custom blockchain solutions'
      ],
      benefits: [
        'Decentralized and secure solutions',
        'Transparent and immutable records',
        'Reduced transaction costs',
        'Enhanced security and trust'
      ],
      category: 'Blockchain',
      popular: true,
      icon: Link
    },
    {
      id: 'ai-ops-platform',
      name: 'AI Ops Platform',
      description: 'AI-powered operations platform for intelligent IT management and automation',
      price: '$2,600/month',
      marketPrice: '$5000-15000/month',
      features: [
        'AI-powered incident detection and resolution',
        'Automated root cause analysis',
        'Predictive maintenance and alerting',
        'Intelligent capacity planning',
        'Automated remediation workflows',
        'Performance optimization recommendations',
        'Integration with monitoring tools',
        'Custom AI model training'
      ],
      benefits: [
        'Reduce downtime by 70%',
        'Automated incident resolution',
        'Predictive maintenance',
        'Better resource utilization'
      ],
      category: 'AI Operations',
      popular: true,
      icon: Settings
    },
    {
      id: 'zero-trust-security',
      name: 'Zero Trust Security Architecture',
      description: 'Zero trust security implementation with continuous verification and monitoring',
      price: '$3,800/month',
      marketPrice: '$7500-20000/month',
      features: [
        'Zero trust network architecture design',
        'Identity and access management',
        'Continuous verification and monitoring',
        'Micro-segmentation implementation',
        'Threat detection and response',
        'Compliance and audit support',
        'Security policy automation',
        'Integration with existing security tools'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Better compliance',
        'Automated security management'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'hyperconverged-infrastructure',
      name: 'Hyperconverged Infrastructure',
      description: 'Hyperconverged infrastructure solutions for simplified data center management',
      price: '$4,200/month',
      marketPrice: '$8500-25000/month',
      features: [
        'HCI platform design and implementation',
        'Storage, compute, and networking integration',
        'Automated resource management',
        'Disaster recovery and backup solutions',
        'Performance optimization and monitoring',
        'Scalability and expansion planning',
        'Migration from traditional infrastructure',
        'Training and support services'
      ],
      benefits: [
        'Simplified infrastructure management',
        'Reduced operational costs',
        'Better resource utilization',
        'Easier scaling and expansion'
      ],
      category: 'Infrastructure',
      popular: true,
      icon: Server
    },
    {
      id: 'ai-powered-monitoring',
      name: 'AI-Powered Monitoring',
      description: 'Intelligent monitoring platform with AI-driven insights and automated responses',
      price: '$1,800/month',
      marketPrice: '$3500-10000/month',
      features: [
        'AI-powered anomaly detection',
        'Predictive monitoring and alerting',
        'Automated incident response',
        'Performance optimization recommendations',
        'Custom monitoring dashboards',
        'Integration with existing tools',
        'Machine learning-based insights',
        'Real-time monitoring and reporting'
      ],
      benefits: [
        'Proactive issue detection',
        'Reduced false positives',
        'Automated response actions',
        'Better system performance'
      ],
      category: 'Monitoring',
      popular: true,
      icon: Monitor
    },
    {
      id: 'container-orchestration',
      name: 'Container Orchestration',
      description: 'Advanced container orchestration and management services for microservices',
      price: '$2,400/month',
      marketPrice: '$4800-15000/month',
      features: [
        'Kubernetes cluster design and deployment',
        'Container lifecycle management',
        'Service mesh implementation',
        'Auto-scaling and load balancing',
        'Container security and compliance',
        'CI/CD pipeline integration',
        'Monitoring and logging setup',
        'Training and support services'
      ],
      benefits: [
        'Simplified container management',
        'Better resource utilization',
        'Automated scaling',
        'Enhanced security and compliance'
      ],
      category: 'DevOps',
      popular: true,
      icon: Settings
    },
    {
      id: 'ai-data-lake',
      name: 'AI Data Lake Platform',
      description: 'AI-powered data lake platform for big data analytics and machine learning',
      price: '$3,200/month',
      marketPrice: '$6500-18000/month',
      features: [
        'Data lake architecture design',
        'Data ingestion and processing automation',
        'AI-powered data cataloging and discovery',
        'Machine learning model deployment',
        'Real-time data analytics',
        'Data governance and compliance',
        'Integration with analytics tools',
        'Custom AI model development'
      ],
      benefits: [
        'Centralized data management',
        'AI-powered data insights',
        'Better data governance',
        'Faster analytics and ML development'
      ],
      category: 'Data Analytics',
      popular: true,
      icon: Database
    },
    {
      id: 'ai-network-optimization',
      name: 'AI Network Optimization',
      description: 'AI-powered network optimization and management for improved performance',
      price: '$2,100/month',
      marketPrice: '$4200-12000/month',
      features: [
        'AI-powered network analysis',
        'Traffic optimization and routing',
        'Bandwidth management and allocation',
        'Network performance monitoring',
        'Predictive network maintenance',
        'Quality of service optimization',
        'Integration with network equipment',
        'Custom optimization algorithms'
      ],
      benefits: [
        'Improved network performance',
        'Reduced network congestion',
        'Better resource utilization',
        'Predictive maintenance'
      ],
      category: 'Networking',
      popular: true,
      icon: Wifi
    },
    {
      id: 'ai-backup-recovery',
      name: 'AI Backup & Recovery',
      description: 'AI-powered backup and disaster recovery solutions with intelligent automation',
      price: '$1,600/month',
      marketPrice: '$3200-8000/month',
      features: [
        'AI-optimized backup scheduling',
        'Intelligent data deduplication',
        'Automated recovery testing',
        'Predictive failure detection',
        'Cross-platform backup support',
        'Real-time backup monitoring',
        'Compliance and audit reporting',
        'Custom recovery workflows'
      ],
      benefits: [
        'Automated backup optimization',
        'Faster recovery times',
        'Reduced storage costs',
        'Better data protection'
      ],
      category: 'Data Management',
      popular: true,
      icon: Database
    },
    {
      id: 'ai-devops-automation',
      name: 'AI DevOps Automation',
      description: 'AI-powered DevOps automation with intelligent CI/CD and deployment optimization',
      price: '$2,800/month',
      marketPrice: '$5600-15000/month',
      features: [
        'AI-powered CI/CD optimization',
        'Intelligent deployment strategies',
        'Automated testing and quality assurance',
        'Performance monitoring and optimization',
        'Infrastructure as Code automation',
        'Security scanning and compliance',
        'Integration with development tools',
        'Custom automation workflows'
      ],
      benefits: [
        'Faster deployment cycles',
        'Reduced deployment failures',
        'Automated quality assurance',
        'Better development productivity'
      ],
      category: 'DevOps',
      popular: true,
      icon: Settings
    },
    {
      id: 'ai-cloud-migration',
      name: 'AI Cloud Migration',
      description: 'AI-powered cloud migration services with automated optimization and cost management',
      price: '$3,600/month',
      marketPrice: '$7200-20000/month',
      features: [
        'AI-powered migration planning',
        'Automated application assessment',
        'Intelligent workload placement',
        'Cost optimization recommendations',
        'Migration automation and orchestration',
        'Performance monitoring and tuning',
        'Security and compliance migration',
        'Post-migration optimization'
      ],
      benefits: [
        'Faster and safer migrations',
        'Reduced migration costs',
        'Better performance optimization',
        'Minimized downtime'
      ],
      category: 'Cloud Migration',
      popular: true,
      icon: Cloud
    },
    {
      id: 'ai-cybersecurity-advanced',
      name: 'AI Cybersecurity Advanced',
      description: 'Advanced AI-powered cybersecurity platform with threat hunting and automated response',
      price: '$4,500/month',
      marketPrice: '$9000-25000/month',
      features: [
        'AI-powered threat hunting',
        'Behavioral analysis and anomaly detection',
        'Automated incident response',
        'Real-time threat intelligence',
        'Advanced persistent threat detection',
        'Security orchestration and automation',
        'Compliance monitoring and reporting',
        'Custom security AI models'
      ],
      benefits: [
        'Proactive threat detection',
        'Automated security response',
        'Reduced security incidents',
        'Better threat intelligence'
      ],
      category: 'Cybersecurity',
      popular: true,
      icon: Shield
    },
    {
      id: 'ai-performance-optimization',
      name: 'AI Performance Optimization',
      description: 'AI-powered application and infrastructure performance optimization services',
      price: '$2,200/month',
      marketPrice: '$4400-12000/month',
      features: [
        'AI-powered performance analysis',
        'Automated optimization recommendations',
        'Real-time performance monitoring',
        'Predictive performance modeling',
        'Resource allocation optimization',
        'Code and infrastructure tuning',
        'Load testing and optimization',
        'Custom performance metrics'
      ],
      benefits: [
        'Improved application performance',
        'Reduced infrastructure costs',
        'Better resource utilization',
        'Predictive performance insights'
      ],
      category: 'Performance',
      popular: true,
      icon: Zap
    },
    {
      id: 'ai-compliance-automation',
      name: 'AI Compliance Automation',
      description: 'AI-powered compliance automation and monitoring for regulatory requirements',
      price: '$2,900/month',
      marketPrice: '$5800-15000/month',
      features: [
        'AI-powered compliance monitoring',
        'Automated policy enforcement',
        'Regulatory reporting automation',
        'Risk assessment and management',
        'Audit trail and documentation',
        'Integration with compliance frameworks',
        'Custom compliance rules',
        'Real-time compliance dashboards'
      ],
      benefits: [
        'Automated compliance management',
        'Reduced compliance costs',
        'Better risk management',
        'Audit readiness'
      ],
      category: 'Compliance',
      popular: true,
      icon: CheckCircle
    },
    {
      id: 'ai-infrastructure-as-code',
      name: 'AI Infrastructure as Code',
      description: 'AI-powered Infrastructure as Code platform with intelligent automation and optimization',
      price: '$2,500/month',
      marketPrice: '$5000-15000/month',
      features: [
        'AI-powered IaC generation',
        'Automated infrastructure optimization',
        'Intelligent resource provisioning',
        'Cost optimization recommendations',
        'Security policy automation',
        'Multi-cloud infrastructure management',
        'Version control and collaboration',
        'Custom automation workflows'
      ],
      benefits: [
        'Faster infrastructure deployment',
        'Reduced configuration errors',
        'Better cost optimization',
        'Enhanced security and compliance'
      ],
      category: 'Infrastructure',
      popular: true,
      icon: Code
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
    { id: 'Cloud Development', name: 'Cloud Development', count: services.filter(s => s.category === 'Cloud Development').length },
    { id: 'AI Integration', name: 'AI Integration', count: services.filter(s => s.category === 'AI Integration').length },
    { id: 'Blockchain', name: 'Blockchain', count: services.filter(s => s.category === 'Blockchain').length },
    { id: 'IoT Development', name: 'IoT Development', count: services.filter(s => s.category === 'IoT Development').length },
    { id: 'Mobile Development', name: 'Mobile Development', count: services.filter(s => s.category === 'Mobile Development').length },
    { id: 'Data Engineering', name: 'Data Engineering', count: services.filter(s => s.category === 'Data Engineering').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: services.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Cloud Migration', name: 'Cloud Migration', count: services.filter(s => s.category === 'Cloud Migration').length },
    { id: 'MLOps', name: 'MLOps', count: services.filter(s => s.category === 'MLOps').length },
    { id: 'Integration', name: 'Integration', count: services.filter(s => s.category === 'Integration').length },
    { id: 'Performance', name: 'Performance', count: services.filter(s => s.category === 'Performance').length },
    { id: 'Cloud Optimization', name: 'Cloud Optimization', count: services.filter(s => s.category === 'Cloud Optimization').length },
    { id: 'Security Automation', name: 'Security Automation', count: services.filter(s => s.category === 'Security Automation').length },
    { id: 'Data Visualization', name: 'Data Visualization', count: services.filter(s => s.category === 'Data Visualization').length },
    { id: 'Automation', name: 'Automation', count: services.filter(s => s.category === 'Automation').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: services.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Edge Computing', name: 'Edge Computing', count: services.filter(s => s.category === 'Edge Computing').length },
    { id: '5G Networks', name: '5G Networks', count: services.filter(s => s.category === '5G Networks').length },
    { id: 'AI Operations', name: 'AI Operations', count: services.filter(s => s.category === 'AI Operations').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'Infrastructure').length },
    { id: 'Monitoring', name: 'Monitoring', count: services.filter(s => s.category === 'Monitoring').length },
    { id: 'Data Management', name: 'Data Management', count: services.filter(s => s.category === 'Data Management').length }
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
