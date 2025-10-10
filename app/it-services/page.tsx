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
      description: 'AI-powered infrastructure monitoring, optimization, and automated management',
      price: '$2,800/month',
      marketPrice: '$5500-18000/month',
      features: [
        'AI-powered monitoring and alerting',
        'Predictive infrastructure analytics',
        'Automated scaling and optimization',
        'Anomaly detection and prevention',
        'Cost optimization recommendations',
        'Performance tuning automation',
        'Capacity planning with AI',
        'Integration with cloud providers'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve system reliability',
        'Automated optimization',
        'Predictive maintenance'
      ],
      category: 'AI Infrastructure',
      popular: true,
      icon: Cpu
    },
    {
      id: 'quantum-computing-services',
      name: 'Quantum Computing Services',
      description: 'Quantum computing solutions and consulting for complex problem solving',
      price: '$5,000/month',
      marketPrice: '$10000-50000/month',
      features: [
        'Quantum algorithm development',
        'Quantum software optimization',
        'Quantum hardware integration',
        'Hybrid classical-quantum solutions',
        'Quantum cryptography implementation',
        'Quantum simulation services',
        'Quantum machine learning',
        'Custom quantum applications'
      ],
      benefits: [
        'Exponential computational power',
        'Breakthrough problem solving',
        'Future-proof technology',
        'Competitive advantage'
      ],
      category: 'Quantum Computing',
      popular: false,
      icon: Cpu
    },
    {
      id: 'edge-computing-solutions',
      name: 'Edge Computing Solutions',
      description: 'Edge computing infrastructure and deployment for real-time processing',
      price: '$2,200/month',
      marketPrice: '$4400-15000/month',
      features: [
        'Edge infrastructure deployment',
        'Real-time data processing',
        'Low-latency applications',
        'Edge device management',
        'Distributed computing architecture',
        'Edge security implementation',
        'IoT integration',
        'Edge analytics and AI'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Improve response times',
        'Enable offline capabilities',
        'Reduce bandwidth costs'
      ],
      category: 'Edge Computing',
      popular: true,
      icon: Server
    },
    {
      id: '5g-network-implementation',
      name: '5G Network Implementation',
      description: '5G network design, deployment, and optimization services',
      price: '$4,500/month',
      marketPrice: '$9000-35000/month',
      features: [
        '5G network architecture design',
        'Small cell deployment',
        'Network slicing implementation',
        '5G core network setup',
        'Performance optimization',
        'Security implementation',
        'Integration with existing networks',
        '5G application development'
      ],
      benefits: [
        'Ultra-fast connectivity',
        'Low latency communication',
        'Massive IoT support',
        'Enhanced mobile experience'
      ],
      category: '5G & Networking',
      popular: true,
      icon: Wifi
    },
    {
      id: 'blockchain-infrastructure',
      name: 'Blockchain Infrastructure Services',
      description: 'Blockchain network setup, management, and integration services',
      price: '$3,500/month',
      marketPrice: '$7000-25000/month',
      features: [
        'Blockchain network deployment',
        'Smart contract development',
        'DeFi protocol implementation',
        'NFT marketplace creation',
        'Cryptocurrency integration',
        'Blockchain security auditing',
        'Consensus mechanism optimization',
        'Cross-chain integration'
      ],
      benefits: [
        'Decentralized applications',
        'Enhanced security',
        'Transparent transactions',
        'Future-proof technology'
      ],
      category: 'Blockchain',
      popular: true,
      icon: Link
    },
    {
      id: 'ai-mlops-platform',
      name: 'AI/MLOps Platform',
      description: 'Machine Learning Operations platform for AI model deployment and management',
      price: '$2,600/month',
      marketPrice: '$5200-18000/month',
      features: [
        'ML model deployment automation',
        'Model versioning and management',
        'A/B testing for ML models',
        'Model monitoring and alerting',
        'Data pipeline automation',
        'Model retraining automation',
        'ML workflow orchestration',
        'Integration with ML frameworks'
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
      id: 'zero-trust-security',
      name: 'Zero Trust Security Architecture',
      description: 'Zero Trust security model implementation and management',
      price: '$2,900/month',
      marketPrice: '$5800-20000/month',
      features: [
        'Zero Trust network architecture',
        'Identity and access management',
        'Micro-segmentation implementation',
        'Continuous verification',
        'Device trust assessment',
        'Data encryption and protection',
        'Security policy automation',
        'Threat detection and response'
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
      id: 'hyperautomation-platform',
      name: 'Hyperautomation Platform',
      description: 'Advanced automation platform combining RPA, AI, and process mining',
      price: '$3,200/month',
      marketPrice: '$6400-22000/month',
      features: [
        'Robotic Process Automation (RPA)',
        'Process mining and discovery',
        'AI-powered decision making',
        'Workflow automation',
        'Document processing automation',
        'Integration with enterprise systems',
        'Automated testing and validation',
        'Performance monitoring and optimization'
      ],
      benefits: [
        'Reduce manual work by 90%',
        'Improve process efficiency',
        'Better accuracy and consistency',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: true,
      icon: Settings
    },
    {
      id: 'digital-twin-platform',
      name: 'Digital Twin Platform',
      description: 'Digital twin creation and management for physical assets and processes',
      price: '$3,800/month',
      marketPrice: '$7600-30000/month',
      features: [
        'Digital twin creation and modeling',
        'Real-time data synchronization',
        'Predictive analytics and simulation',
        'IoT sensor integration',
        '3D visualization and monitoring',
        'Performance optimization',
        'Maintenance prediction',
        'Integration with existing systems'
      ],
      benefits: [
        'Optimize asset performance',
        'Predictive maintenance',
        'Reduce operational costs',
        'Better decision making'
      ],
      category: 'Digital Twin',
      popular: false,
      icon: Monitor
    },
    {
      id: 'augmented-reality-solutions',
      name: 'Augmented Reality Solutions',
      description: 'AR application development and deployment for enterprise use cases',
      price: '$2,400/month',
      marketPrice: '$4800-18000/month',
      features: [
        'AR application development',
        '3D modeling and visualization',
        'AR device integration',
        'Real-time object recognition',
        'AR cloud services',
        'Cross-platform AR deployment',
        'AR analytics and tracking',
        'Integration with business systems'
      ],
      benefits: [
        'Enhanced user experience',
        'Improved training and education',
        'Better visualization',
        'Competitive advantage'
      ],
      category: 'AR/VR',
      popular: true,
      icon: Eye
    },
    {
      id: 'virtual-reality-platform',
      name: 'Virtual Reality Platform',
      description: 'VR platform development and deployment for immersive experiences',
      price: '$2,700/month',
      marketPrice: '$5400-20000/month',
      features: [
        'VR application development',
        'Immersive 3D environments',
        'VR device integration',
        'Multi-user VR experiences',
        'VR analytics and tracking',
        'Cross-platform VR deployment',
        'VR content management',
        'Integration with business systems'
      ],
      benefits: [
        'Immersive experiences',
        'Better training and simulation',
        'Enhanced collaboration',
        'Innovative solutions'
      ],
      category: 'AR/VR',
      popular: true,
      icon: Eye
    },
    {
      id: 'internet-of-things-platform',
      name: 'Internet of Things Platform',
      description: 'Comprehensive IoT platform for device management and data processing',
      price: '$1,800/month',
      marketPrice: '$3600-12000/month',
      features: [
        'IoT device management',
        'Real-time data processing',
        'Edge computing integration',
        'IoT security implementation',
        'Device provisioning and onboarding',
        'Data analytics and visualization',
        'Integration with cloud services',
        'Custom IoT applications'
      ],
      benefits: [
        'Connected device solutions',
        'Real-time data insights',
        'Automated processes',
        'Improved efficiency'
      ],
      category: 'IoT',
      popular: true,
      icon: Wifi
    },
    {
      id: 'microservices-architecture',
      name: 'Microservices Architecture',
      description: 'Microservices design, implementation, and management services',
      price: '$2,500/month',
      marketPrice: '$5000-18000/month',
      features: [
        'Microservices architecture design',
        'Service mesh implementation',
        'API gateway setup',
        'Container orchestration',
        'Service discovery and registration',
        'Load balancing and scaling',
        'Monitoring and observability',
        'Integration with existing systems'
      ],
      benefits: [
        'Scalable architecture',
        'Better maintainability',
        'Faster development cycles',
        'Improved reliability'
      ],
      category: 'Microservices',
      popular: true,
      icon: Settings
    },
    {
      id: 'serverless-computing',
      name: 'Serverless Computing Platform',
      description: 'Serverless architecture design and implementation services',
      price: '$1,600/month',
      marketPrice: '$3200-10000/month',
      features: [
        'Serverless architecture design',
        'Function-as-a-Service implementation',
        'Event-driven architecture',
        'Auto-scaling configuration',
        'Cost optimization',
        'Monitoring and logging',
        'Security implementation',
        'Integration with cloud services'
      ],
      benefits: [
        'Reduced infrastructure costs',
        'Automatic scaling',
        'Faster development',
        'Better resource utilization'
      ],
      category: 'Serverless',
      popular: true,
      icon: Cloud
    },
    {
      id: 'data-lake-solutions',
      name: 'Data Lake Solutions',
      description: 'Data lake architecture and implementation for big data analytics',
      price: '$2,100/month',
      marketPrice: '$4200-15000/month',
      features: [
        'Data lake architecture design',
        'Data ingestion and processing',
        'Data catalog and governance',
        'Real-time data streaming',
        'Data quality management',
        'Analytics and visualization',
        'Integration with data sources',
        'Security and compliance'
      ],
      benefits: [
        'Centralized data storage',
        'Better data insights',
        'Scalable data processing',
        'Improved data governance'
      ],
      category: 'Data Management',
      popular: true,
      icon: Database
    },
    {
      id: 'real-time-analytics',
      name: 'Real-Time Analytics Platform',
      description: 'Real-time data processing and analytics platform implementation',
      price: '$2,300/month',
      marketPrice: '$4600-16000/month',
      features: [
        'Real-time data streaming',
        'Stream processing engines',
        'Real-time dashboards',
        'Event-driven analytics',
        'Machine learning integration',
        'Data visualization',
        'Alert and notification systems',
        'Integration with data sources'
      ],
      benefits: [
        'Real-time insights',
        'Faster decision making',
        'Better customer experience',
        'Competitive advantage'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'api-ecosystem-management',
      name: 'API Ecosystem Management',
      description: 'Comprehensive API management and ecosystem development',
      price: '$1,900/month',
      marketPrice: '$3800-12000/month',
      features: [
        'API gateway implementation',
        'API lifecycle management',
        'Developer portal creation',
        'API security and authentication',
        'Rate limiting and throttling',
        'API analytics and monitoring',
        'Documentation generation',
        'Third-party API integration'
      ],
      benefits: [
        'Better API governance',
        'Enhanced security',
        'Improved developer experience',
        'Scalable API architecture'
      ],
      category: 'API Management',
      popular: true,
      icon: Code
    },
    {
      id: 'multi-cloud-management',
      name: 'Multi-Cloud Management',
      description: 'Multi-cloud strategy and management across different cloud providers',
      price: '$3,400/month',
      marketPrice: '$6800-25000/month',
      features: [
        'Multi-cloud architecture design',
        'Cloud provider integration',
        'Cost optimization across clouds',
        'Data migration and synchronization',
        'Disaster recovery planning',
        'Security and compliance',
        'Performance monitoring',
        'Unified management dashboard'
      ],
      benefits: [
        'Vendor lock-in avoidance',
        'Cost optimization',
        'Better reliability',
        'Flexible cloud strategy'
      ],
      category: 'Cloud Management',
      popular: true,
      icon: Cloud
    },
    {
      id: 'cybersecurity-operations-center',
      name: 'Cybersecurity Operations Center',
      description: '24/7 SOC services with advanced threat detection and response',
      price: '$4,200/month',
      marketPrice: '$8400-30000/month',
      features: [
        '24/7 security monitoring',
        'Threat hunting and detection',
        'Incident response and management',
        'Security orchestration',
        'Threat intelligence integration',
        'Vulnerability management',
        'Security analytics and reporting',
        'Compliance monitoring'
      ],
      benefits: [
        'Proactive threat protection',
        'Faster incident response',
        'Reduced security risks',
        'Expert security team'
      ],
      category: 'Cybersecurity',
      popular: true,
      icon: Shield
    },
    {
      id: 'business-continuity-planning',
      name: 'Business Continuity Planning',
      description: 'Comprehensive business continuity and disaster recovery planning',
      price: '$2,800/month',
      marketPrice: '$5600-20000/month',
      features: [
        'Business impact analysis',
        'Disaster recovery planning',
        'Backup and recovery solutions',
        'RTO and RPO optimization',
        'Testing and validation',
        'Crisis management',
        'Communication planning',
        'Recovery automation'
      ],
      benefits: [
        'Minimized business downtime',
        'Data protection',
        'Regulatory compliance',
        'Peace of mind'
      ],
      category: 'Business Continuity',
      popular: true,
      icon: Shield
    },
    {
      id: 'it-governance-framework',
      name: 'IT Governance Framework',
      description: 'IT governance, risk management, and compliance framework implementation',
      price: '$2,200/month',
      marketPrice: '$4400-15000/month',
      features: [
        'IT governance framework design',
        'Risk assessment and management',
        'Compliance monitoring',
        'Policy development and management',
        'Audit preparation and support',
        'Vendor management',
        'IT asset management',
        'Performance measurement'
      ],
      benefits: [
        'Better IT governance',
        'Reduced risks',
        'Compliance assurance',
        'Improved decision making'
      ],
      category: 'Governance',
      popular: false,
      icon: Settings
    },
    {
      id: 'digital-transformation-consulting',
      name: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation planning and implementation',
      price: '$3,600/month',
      marketPrice: '$7200-25000/month',
      features: [
        'Digital strategy development',
        'Technology assessment',
        'Change management',
        'Process optimization',
        'Technology roadmap creation',
        'Implementation planning',
        'Training and support',
        'Performance measurement'
      ],
      benefits: [
        'Strategic guidance',
        'Competitive advantage',
        'Improved efficiency',
        'Future-ready organization'
      ],
      category: 'Digital Transformation',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'cloud-finops',
      name: 'Cloud FinOps Services',
      description: 'Cloud financial operations and cost optimization services',
      price: '$1,700/month',
      marketPrice: '$3400-12000/month',
      features: [
        'Cloud cost analysis and optimization',
        'Budget management and forecasting',
        'Resource tagging and allocation',
        'Cost allocation and chargeback',
        'Reserved instance planning',
        'Spot instance utilization',
        'Cost monitoring and alerting',
        'Financial reporting and analytics'
      ],
      benefits: [
        'Reduce cloud costs by 30-50%',
        'Better budget control',
        'Improved resource utilization',
        'Financial transparency'
      ],
      category: 'Cloud Optimization',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'site-reliability-engineering',
      name: 'Site Reliability Engineering',
      description: 'SRE practices and implementation for high-availability systems',
      price: '$3,800/month',
      marketPrice: '$7600-25000/month',
      features: [
        'SRE framework implementation',
        'Service level objective definition',
        'Error budget management',
        'Incident response automation',
        'Chaos engineering',
        'Performance optimization',
        'Monitoring and alerting',
        'Team training and mentoring'
      ],
      benefits: [
        'High system availability',
        'Faster incident response',
        'Improved reliability',
        'Reduced operational costs'
      ],
      category: 'SRE',
      popular: true,
      icon: Settings
    },
    {
      id: 'observability-platform',
      name: 'Observability Platform',
      description: 'Comprehensive observability platform for monitoring and debugging',
      price: '$2,000/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Distributed tracing',
        'Metrics collection and analysis',
        'Log aggregation and analysis',
        'Real-time alerting',
        'Performance monitoring',
        'Error tracking and debugging',
        'Custom dashboards',
        'Integration with development tools'
      ],
      benefits: [
        'Better system visibility',
        'Faster debugging',
        'Improved performance',
        'Proactive issue detection'
      ],
      category: 'Observability',
      popular: true,
      icon: Monitor
    },
    {
      id: 'infrastructure-as-code',
      name: 'Infrastructure as Code',
      description: 'Infrastructure automation and management using code',
      price: '$2,100/month',
      marketPrice: '$4200-15000/month',
      features: [
        'Infrastructure as Code implementation',
        'Configuration management',
        'Version control for infrastructure',
        'Automated provisioning',
        'Environment management',
        'Compliance as code',
        'Testing and validation',
        'Documentation and training'
      ],
      benefits: [
        'Consistent infrastructure',
        'Faster deployments',
        'Better version control',
        'Reduced human errors'
      ],
      category: 'Infrastructure',
      popular: true,
      icon: Code
    },
    {
      id: 'gitops-implementation',
      name: 'GitOps Implementation',
      description: 'GitOps methodology implementation for continuous deployment',
      price: '$1,800/month',
      marketPrice: '$3600-12000/month',
      features: [
        'GitOps workflow implementation',
        'Git-based deployment automation',
        'Infrastructure and application sync',
        'Rollback and recovery automation',
        'Multi-environment management',
        'Security and compliance',
        'Monitoring and alerting',
        'Team training and support'
      ],
      benefits: [
        'Faster deployments',
        'Better version control',
        'Improved reliability',
        'Enhanced security'
      ],
      category: 'GitOps',
      popular: true,
      icon: Code
    },
    {
      id: 'cloud-native-monitoring',
      name: 'Cloud-Native Monitoring',
      description: 'Advanced monitoring solutions for cloud-native applications',
      price: '$2,300/month',
      marketPrice: '$4600-16000/month',
      features: [
        'Container and Kubernetes monitoring',
        'Microservices observability',
        'Distributed tracing',
        'Real-time metrics and alerts',
        'Performance optimization',
        'Cost monitoring',
        'Security monitoring',
        'Custom dashboards and reports'
      ],
      benefits: [
        'Better application visibility',
        'Faster issue resolution',
        'Improved performance',
        'Cost optimization'
      ],
      category: 'Cloud Monitoring',
      popular: true,
      icon: Monitor
    },
    {
      id: 'data-privacy-compliance',
      name: 'Data Privacy & Compliance',
      description: 'Data privacy and compliance management services',
      price: '$2,500/month',
      marketPrice: '$5000-18000/month',
      features: [
        'GDPR compliance implementation',
        'Data privacy impact assessments',
        'Consent management',
        'Data subject rights management',
        'Privacy by design implementation',
        'Compliance monitoring',
        'Audit preparation',
        'Training and awareness'
      ],
      benefits: [
        'Regulatory compliance',
        'Reduced privacy risks',
        'Better data governance',
        'Customer trust'
      ],
      category: 'Compliance',
      popular: true,
      icon: Shield
    },
    {
      id: 'cloud-migration-enterprise',
      name: 'Enterprise Cloud Migration',
      description: 'Large-scale enterprise cloud migration and modernization',
      price: '$5,500/month',
      marketPrice: '$11000-50000/month',
      features: [
        'Enterprise migration strategy',
        'Legacy system modernization',
        'Data migration and validation',
        'Application refactoring',
        'Security and compliance migration',
        'Performance optimization',
        'Training and change management',
        'Ongoing support and maintenance'
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
      id: 'ai-infrastructure-optimization',
      name: 'AI Infrastructure Optimization',
      description: 'AI and ML infrastructure optimization and management',
      price: '$3,200/month',
      marketPrice: '$6400-22000/month',
      features: [
        'AI/ML infrastructure design',
        'GPU and TPU optimization',
        'Model serving optimization',
        'Data pipeline optimization',
        'Cost optimization for AI workloads',
        'Performance monitoring',
        'Auto-scaling for ML workloads',
        'Integration with AI frameworks'
      ],
      benefits: [
        'Optimized AI performance',
        'Reduced AI infrastructure costs',
        'Better resource utilization',
        'Faster model training and inference'
      ],
      category: 'AI Infrastructure',
      popular: true,
      icon: Cpu
    },
    {
      id: 'edge-ai-deployment',
      name: 'Edge AI Deployment',
      description: 'AI model deployment and management at the edge',
      price: '$2,700/month',
      marketPrice: '$5400-20000/month',
      features: [
        'Edge AI model deployment',
        'Model optimization for edge devices',
        'Edge device management',
        'Real-time inference optimization',
        'Edge data processing',
        'Model versioning and updates',
        'Edge security implementation',
        'Integration with cloud AI services'
      ],
      benefits: [
        'Reduced latency',
        'Offline AI capabilities',
        'Better privacy',
        'Cost-effective AI deployment'
      ],
      category: 'Edge AI',
      popular: true,
      icon: Cpu
    },
    {
      id: 'quantum-ready-infrastructure',
      name: 'Quantum-Ready Infrastructure',
      description: 'Infrastructure preparation for quantum computing integration',
      price: '$4,000/month',
      marketPrice: '$8000-30000/month',
      features: [
        'Quantum-ready architecture design',
        'Hybrid classical-quantum systems',
        'Quantum algorithm optimization',
        'Quantum security implementation',
        'Quantum simulation services',
        'Integration with quantum hardware',
        'Quantum software development',
        'Training and consulting'
      ],
      benefits: [
        'Future-proof infrastructure',
        'Quantum advantage preparation',
        'Advanced security',
        'Competitive edge'
      ],
      category: 'Quantum Infrastructure',
      popular: false,
      icon: Cpu
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
    { id: 'AI Infrastructure', name: 'AI Infrastructure', count: services.filter(s => s.category === 'AI Infrastructure').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: services.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Edge Computing', name: 'Edge Computing', count: services.filter(s => s.category === 'Edge Computing').length },
    { id: '5G & Networking', name: '5G & Networking', count: services.filter(s => s.category === '5G & Networking').length },
    { id: 'Digital Twin', name: 'Digital Twin', count: services.filter(s => s.category === 'Digital Twin').length },
    { id: 'AR/VR', name: 'AR/VR', count: services.filter(s => s.category === 'AR/VR').length },
    { id: 'IoT', name: 'IoT', count: services.filter(s => s.category === 'IoT').length },
    { id: 'Microservices', name: 'Microservices', count: services.filter(s => s.category === 'Microservices').length },
    { id: 'Serverless', name: 'Serverless', count: services.filter(s => s.category === 'Serverless').length },
    { id: 'Data Management', name: 'Data Management', count: services.filter(s => s.category === 'Data Management').length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'API Management', name: 'API Management', count: services.filter(s => s.category === 'API Management').length },
    { id: 'Cloud Management', name: 'Cloud Management', count: services.filter(s => s.category === 'Cloud Management').length },
    { id: 'Business Continuity', name: 'Business Continuity', count: services.filter(s => s.category === 'Business Continuity').length },
    { id: 'Governance', name: 'Governance', count: services.filter(s => s.category === 'Governance').length },
    { id: 'Digital Transformation', name: 'Digital Transformation', count: services.filter(s => s.category === 'Digital Transformation').length },
    { id: 'SRE', name: 'SRE', count: services.filter(s => s.category === 'SRE').length },
    { id: 'Observability', name: 'Observability', count: services.filter(s => s.category === 'Observability').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'Infrastructure').length },
    { id: 'GitOps', name: 'GitOps', count: services.filter(s => s.category === 'GitOps').length },
    { id: 'Cloud Monitoring', name: 'Cloud Monitoring', count: services.filter(s => s.category === 'Cloud Monitoring').length },
    { id: 'Edge AI', name: 'Edge AI', count: services.filter(s => s.category === 'Edge AI').length },
    { id: 'Quantum Infrastructure', name: 'Quantum Infrastructure', count: services.filter(s => s.category === 'Quantum Infrastructure').length }
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
