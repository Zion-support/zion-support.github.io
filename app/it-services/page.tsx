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
      id: 'quantum-computing-services',
      name: 'Quantum Computing Services',
      description: 'Quantum computing infrastructure and algorithm development for complex problem solving',
      price: '$5,999/month',
      marketPrice: '$12000-50000/month',
      features: [
        'Quantum algorithm development',
        'Quantum circuit optimization',
        'Quantum error correction',
        'Quantum machine learning',
        'Quantum cryptography',
        'Quantum simulation services',
        'Hybrid quantum-classical computing',
        'Quantum software development'
      ],
      benefits: [
        'Exponential computational power',
        'Solve intractable problems',
        'Breakthrough capabilities',
        'Future-proof technology'
      ],
      category: 'Quantum Computing',
      popular: false,
      icon: Cpu
    },
    {
      id: '5g-network-implementation',
      name: '5G Network Implementation',
      description: 'Complete 5G network design, deployment, and optimization services',
      price: '$4,999/month',
      marketPrice: '$10000-40000/month',
      features: [
        '5G network architecture design',
        'Small cell deployment',
        'Massive MIMO implementation',
        'Network slicing configuration',
        'Edge computing integration',
        'IoT device connectivity',
        'Performance optimization',
        '5G security implementation'
      ],
      benefits: [
        'Ultra-fast connectivity',
        'Low latency communication',
        'Massive device support',
        'Next-generation network'
      ],
      category: '5G Technology',
      popular: true,
      icon: Wifi
    },
    {
      id: 'quantum-cybersecurity',
      name: 'Quantum Cybersecurity',
      description: 'Post-quantum cryptography and quantum-resistant security solutions',
      price: '$3,499/month',
      marketPrice: '$7000-25000/month',
      features: [
        'Post-quantum cryptography implementation',
        'Quantum key distribution',
        'Quantum random number generation',
        'Quantum-resistant algorithms',
        'Migration planning services',
        'Quantum security assessment',
        'Hybrid security solutions',
        'Future-proof encryption'
      ],
      benefits: [
        'Protect against quantum attacks',
        'Future-proof security',
        'Advanced encryption methods',
        'Quantum-safe communications'
      ],
      category: 'Quantum Security',
      popular: false,
      icon: Shield
    },
    {
      id: 'edge-computing-infrastructure',
      name: 'Edge Computing Infrastructure',
      description: 'Distributed edge computing infrastructure for low-latency applications',
      price: '$2,799/month',
      marketPrice: '$5500-20000/month',
      features: [
        'Edge data center deployment',
        'Edge server configuration',
        'Content delivery optimization',
        'Edge AI model deployment',
        'Real-time data processing',
        'Edge security implementation',
        'Network edge optimization',
        'IoT edge integration'
      ],
      benefits: [
        'Ultra-low latency processing',
        'Improved user experience',
        'Reduced bandwidth costs',
        'Distributed computing power'
      ],
      category: 'Edge Computing',
      popular: true,
      icon: Server
    },
    {
      id: 'quantum-cloud-platform',
      name: 'Quantum Cloud Platform',
      description: 'Cloud-based quantum computing platform with quantum-as-a-service capabilities',
      price: '$4,299/month',
      marketPrice: '$8500-30000/month',
      features: [
        'Quantum cloud infrastructure',
        'Quantum algorithm libraries',
        'Quantum development tools',
        'Quantum simulation services',
        'Hybrid cloud integration',
        'Quantum API services',
        'Quantum job scheduling',
        'Quantum result analysis'
      ],
      benefits: [
        'Access quantum computing power',
        'No hardware investment needed',
        'Scalable quantum resources',
        'Professional quantum services'
      ],
      category: 'Quantum Cloud',
      popular: false,
      icon: Cloud
    },
    {
      id: 'neuromorphic-computing',
      name: 'Neuromorphic Computing Services',
      description: 'Brain-inspired computing infrastructure and algorithm development',
      price: '$3,799/month',
      marketPrice: '$7500-25000/month',
      features: [
        'Neuromorphic chip integration',
        'Spiking neural network development',
        'Event-driven processing systems',
        'Synaptic plasticity modeling',
        'Energy-efficient computing',
        'Real-time learning systems',
        'Pattern recognition optimization',
        'Cognitive computing applications'
      ],
      benefits: [
        'Ultra-low power consumption',
        'Real-time learning capabilities',
        'Brain-like processing efficiency',
        'Revolutionary computing architecture'
      ],
      category: 'Neuromorphic Computing',
      popular: false,
      icon: Brain
    },
    {
      id: 'space-technology-services',
      name: 'Space Technology Services',
      description: 'Satellite communication, space data processing, and space industry solutions',
      price: '$4,799/month',
      marketPrice: '$9500-35000/month',
      features: [
        'Satellite communication systems',
        'Ground station management',
        'Space data processing',
        'Orbital mechanics calculations',
        'Launch window optimization',
        'Space debris monitoring',
        'Satellite constellation management',
        'Space mission planning'
      ],
      benefits: [
        'Global connectivity solutions',
        'Space industry expertise',
        'Advanced orbital services',
        'Cutting-edge space technology'
      ],
      category: 'Space Technology',
      popular: false,
      icon: Globe
    },
    {
      id: 'autonomous-systems-integration',
      name: 'Autonomous Systems Integration',
      description: 'Integration and management of autonomous vehicles, drones, and robotic systems',
      price: '$3,299/month',
      marketPrice: '$6500-20000/month',
      features: [
        'Autonomous vehicle integration',
        'Drone fleet management',
        'Robotic system coordination',
        'Sensor fusion technology',
        'Path planning algorithms',
        'Collision avoidance systems',
        'Real-time monitoring',
        'Safety compliance management'
      ],
      benefits: [
        'Automated operations',
        'Improved safety and efficiency',
        'Reduced operational costs',
        'Advanced automation capabilities'
      ],
      category: 'Autonomous Systems',
      popular: true,
      icon: Settings
    },
    {
      id: 'holographic-computing',
      name: 'Holographic Computing Services',
      description: 'Holographic display systems and spatial computing infrastructure',
      price: '$2,999/month',
      marketPrice: '$6000-20000/month',
      features: [
        'Holographic display setup',
        'Spatial computing infrastructure',
        '3D content creation tools',
        'Mixed reality integration',
        'Gesture recognition systems',
        'Holographic collaboration platforms',
        '3D data visualization',
        'Immersive workspace solutions'
      ],
      benefits: [
        'Revolutionary display technology',
        'Immersive user experiences',
        'Enhanced collaboration',
        'Future of computing interfaces'
      ],
      category: 'Holographic Computing',
      popular: true,
      icon: Monitor
    },
    {
      id: 'biometric-security-systems',
      name: 'Biometric Security Systems',
      description: 'Advanced biometric authentication and identity management solutions',
      price: '$1,899/month',
      marketPrice: '$3800-12000/month',
      features: [
        'Multi-modal biometric authentication',
        'Facial recognition systems',
        'Fingerprint and iris scanning',
        'Voice biometrics',
        'Behavioral analytics',
        'Liveness detection',
        'Biometric data encryption',
        'Identity verification services'
      ],
      benefits: [
        'Enhanced security and convenience',
        'Fraud prevention',
        'Seamless user experience',
        'Advanced identity protection'
      ],
      category: 'Biometric Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'digital-twin-platform',
      name: 'Digital Twin Platform',
      description: 'Digital twin creation and management for physical assets and processes',
      price: '$2,499/month',
      marketPrice: '$5000-18000/month',
      features: [
        '3D asset modeling',
        'Real-time data integration',
        'Predictive maintenance',
        'Simulation and testing',
        'IoT sensor integration',
        'Performance optimization',
        'Virtual reality visualization',
        'Collaborative digital environments'
      ],
      benefits: [
        'Optimize asset performance',
        'Predict maintenance needs',
        'Reduce operational costs',
        'Virtual testing capabilities'
      ],
      category: 'Digital Twin',
      popular: true,
      icon: Monitor
    },
    {
      id: 'blockchain-infrastructure',
      name: 'Blockchain Infrastructure Services',
      description: 'Enterprise blockchain development and infrastructure management',
      price: '$2,799/month',
      marketPrice: '$5500-20000/month',
      features: [
        'Blockchain network setup',
        'Smart contract development',
        'DeFi protocol integration',
        'NFT marketplace creation',
        'Cryptocurrency integration',
        'Blockchain security auditing',
        'Token development',
        'Web3 application development'
      ],
      benefits: [
        'Decentralized applications',
        'Enhanced security and transparency',
        'Future-proof technology',
        'Innovative business models'
      ],
      category: 'Blockchain Infrastructure',
      popular: true,
      icon: Link
    },
    {
      id: 'ai-hardware-optimization',
      name: 'AI Hardware Optimization',
      description: 'Specialized hardware optimization for AI workloads and machine learning',
      price: '$2,199/month',
      marketPrice: '$4400-15000/month',
      features: [
        'GPU cluster optimization',
        'TPU configuration and tuning',
        'AI accelerator integration',
        'Memory optimization',
        'Parallel processing setup',
        'Model quantization',
        'Hardware-software co-design',
        'Performance benchmarking'
      ],
      benefits: [
        'Maximize AI performance',
        'Reduce computational costs',
        'Optimize hardware utilization',
        'Faster model training and inference'
      ],
      category: 'AI Hardware',
      popular: true,
      icon: Cpu
    },
    {
      id: 'zero-trust-security',
      name: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation and management',
      price: '$2,899/month',
      marketPrice: '$5800-20000/month',
      features: [
        'Identity and access management',
        'Micro-segmentation',
        'Continuous verification',
        'Least privilege access',
        'Multi-factor authentication',
        'Device trust verification',
        'Network security monitoring',
        'Compliance automation'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Continuous security monitoring',
        'Modern security architecture'
      ],
      category: 'Zero Trust Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'immersive-technology',
      name: 'Immersive Technology Solutions',
      description: 'AR/VR/MR development and deployment services for immersive experiences',
      price: '$2,399/month',
      marketPrice: '$4800-18000/month',
      features: [
        'AR/VR application development',
        'Mixed reality experiences',
        '3D content creation',
        'Spatial computing',
        'Gesture and voice controls',
        'Haptic feedback systems',
        'Immersive training solutions',
        'Virtual collaboration platforms'
      ],
      benefits: [
        'Immersive user experiences',
        'Enhanced training and education',
        'Virtual collaboration',
        'Next-generation interfaces'
      ],
      category: 'Immersive Technology',
      popular: true,
      icon: Monitor
    },
    {
      id: 'quantum-internet',
      name: 'Quantum Internet Services',
      description: 'Quantum communication networks and quantum internet infrastructure',
      price: '$4,999/month',
      marketPrice: '$10000-40000/month',
      features: [
        'Quantum communication protocols',
        'Quantum key distribution networks',
        'Quantum teleportation systems',
        'Quantum internet infrastructure',
        'Quantum repeaters',
        'Quantum network security',
        'Quantum cloud connectivity',
        'Quantum application development'
      ],
      benefits: [
        'Unhackable communications',
        'Quantum advantage in networking',
        'Ultra-secure data transmission',
        'Future of internet technology'
      ],
      category: 'Quantum Internet',
      popular: false,
      icon: Wifi
    },
    {
      id: 'cognitive-computing',
      name: 'Cognitive Computing Platform',
      description: 'Advanced cognitive computing systems that mimic human thought processes',
      price: '$3,599/month',
      marketPrice: '$7200-25000/month',
      features: [
        'Natural language processing',
        'Machine learning algorithms',
        'Pattern recognition systems',
        'Decision-making engines',
        'Knowledge representation',
        'Reasoning capabilities',
        'Learning from experience',
        'Human-AI collaboration'
      ],
      benefits: [
        'Human-like AI capabilities',
        'Advanced problem solving',
        'Intelligent automation',
        'Cognitive business processes'
      ],
      category: 'Cognitive Computing',
      popular: true,
      icon: Brain
    },
    {
      id: 'quantum-simulation',
      name: 'Quantum Simulation Services',
      description: 'Quantum simulation platforms for complex scientific and business problems',
      price: '$3,299/month',
      marketPrice: '$6500-20000/month',
      features: [
        'Quantum circuit simulation',
        'Quantum algorithm development',
        'Material science simulations',
        'Drug discovery simulations',
        'Financial modeling',
        'Optimization problems',
        'Quantum chemistry calculations',
        'Custom simulation development'
      ],
      benefits: [
        'Solve complex simulation problems',
        'Accelerate research and development',
        'Quantum advantage in simulations',
        'Advanced computational capabilities'
      ],
      category: 'Quantum Simulation',
      popular: false,
      icon: Cpu
    },
    {
      id: 'hyperconverged-infrastructure',
      name: 'Hyperconverged Infrastructure',
      description: 'Integrated compute, storage, and networking in a single platform',
      price: '$2,599/month',
      marketPrice: '$5200-18000/month',
      features: [
        'Unified infrastructure management',
        'Software-defined storage',
        'Virtualized networking',
        'Automated provisioning',
        'Scalable architecture',
        'Disaster recovery',
        'Backup and replication',
        'Performance optimization'
      ],
      benefits: [
        'Simplified infrastructure management',
        'Reduced operational complexity',
        'Improved scalability',
        'Cost-effective solutions'
      ],
      category: 'Hyperconverged Infrastructure',
      popular: true,
      icon: Server
    },
    {
      id: 'quantum-ai-integration',
      name: 'Quantum AI Integration',
      description: 'Integration of quantum computing with artificial intelligence systems',
      price: '$4,199/month',
      marketPrice: '$8400-30000/month',
      features: [
        'Quantum machine learning',
        'Quantum neural networks',
        'Hybrid quantum-classical AI',
        'Quantum optimization for AI',
        'Quantum data processing',
        'Quantum feature selection',
        'Quantum clustering algorithms',
        'Quantum reinforcement learning'
      ],
      benefits: [
        'Exponential AI capabilities',
        'Quantum advantage in ML',
        'Breakthrough AI performance',
        'Future-proof AI technology'
      ],
      category: 'Quantum AI',
      popular: false,
      icon: Brain
    },
    {
      id: 'sustainable-it-solutions',
      name: 'Sustainable IT Solutions',
      description: 'Green IT infrastructure and sustainable technology solutions',
      price: '$1,799/month',
      marketPrice: '$3600-12000/month',
      features: [
        'Energy-efficient hardware',
        'Renewable energy integration',
        'Carbon footprint tracking',
        'Green data center design',
        'Sustainable software development',
        'E-waste management',
        'Energy monitoring systems',
        'Environmental compliance'
      ],
      benefits: [
        'Reduce environmental impact',
        'Lower energy costs',
        'Meet sustainability goals',
        'Green technology leadership'
      ],
      category: 'Sustainable IT',
      popular: true,
      icon: Zap
    },
    {
      id: 'quantum-cryptography',
      name: 'Quantum Cryptography Services',
      description: 'Quantum-safe encryption and quantum key distribution systems',
      price: '$2,999/month',
      marketPrice: '$6000-20000/month',
      features: [
        'Quantum key distribution',
        'Post-quantum cryptography',
        'Quantum random number generation',
        'Quantum secure communication',
        'Quantum digital signatures',
        'Quantum authentication',
        'Migration planning',
        'Quantum security auditing'
      ],
      benefits: [
        'Unbreakable encryption',
        'Future-proof security',
        'Quantum-safe communications',
        'Advanced cryptographic protection'
      ],
      category: 'Quantum Cryptography',
      popular: false,
      icon: Shield
    },
    {
      id: 'neuromorphic-hardware',
      name: 'Neuromorphic Hardware Services',
      description: 'Specialized neuromorphic computing hardware and chip integration',
      price: '$3,499/month',
      marketPrice: '$7000-25000/month',
      features: [
        'Neuromorphic chip integration',
        'Spiking neural network hardware',
        'Event-driven processing units',
        'Synaptic plasticity circuits',
        'Low-power computing',
        'Real-time learning hardware',
        'Pattern recognition chips',
        'Cognitive computing processors'
      ],
      benefits: [
        'Ultra-low power consumption',
        'Real-time learning capabilities',
        'Brain-like processing efficiency',
        'Revolutionary computing hardware'
      ],
      category: 'Neuromorphic Hardware',
      popular: false,
      icon: Cpu
    },
    {
      id: 'quantum-sensing',
      name: 'Quantum Sensing Services',
      description: 'Quantum sensors and measurement systems for ultra-precise detection',
      price: '$3,799/month',
      marketPrice: '$7600-25000/month',
      features: [
        'Quantum sensor development',
        'Ultra-precise measurements',
        'Quantum magnetometers',
        'Quantum gravimeters',
        'Quantum clocks',
        'Quantum imaging systems',
        'Quantum metrology',
        'Quantum sensor networks'
      ],
      benefits: [
        'Ultra-precise measurements',
        'Quantum advantage in sensing',
        'Advanced detection capabilities',
        'Revolutionary measurement technology'
      ],
      category: 'Quantum Sensing',
      popular: false,
      icon: Eye
    },
    {
      id: 'ai-ethics-compliance',
      name: 'AI Ethics & Compliance',
      description: 'AI ethics framework implementation and regulatory compliance services',
      price: '$1,599/month',
      marketPrice: '$3200-10000/month',
      features: [
        'AI ethics framework development',
        'Bias detection and mitigation',
        'Fairness auditing',
        'Transparency reporting',
        'Regulatory compliance',
        'AI governance policies',
        'Ethical AI training',
        'Responsible AI implementation'
      ],
      benefits: [
        'Ensure ethical AI deployment',
        'Meet regulatory requirements',
        'Build trust in AI systems',
        'Responsible AI practices'
      ],
      category: 'AI Ethics',
      popular: true,
      icon: Shield
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
    { id: '5G Technology', name: '5G Technology', count: services.filter(s => s.category === '5G Technology').length },
    { id: 'Quantum Security', name: 'Quantum Security', count: services.filter(s => s.category === 'Quantum Security').length },
    { id: 'Edge Computing', name: 'Edge Computing', count: services.filter(s => s.category === 'Edge Computing').length },
    { id: 'Quantum Cloud', name: 'Quantum Cloud', count: services.filter(s => s.category === 'Quantum Cloud').length },
    { id: 'Neuromorphic Computing', name: 'Neuromorphic Computing', count: services.filter(s => s.category === 'Neuromorphic Computing').length },
    { id: 'Space Technology', name: 'Space Technology', count: services.filter(s => s.category === 'Space Technology').length },
    { id: 'Autonomous Systems', name: 'Autonomous Systems', count: services.filter(s => s.category === 'Autonomous Systems').length },
    { id: 'Holographic Computing', name: 'Holographic Computing', count: services.filter(s => s.category === 'Holographic Computing').length },
    { id: 'Biometric Security', name: 'Biometric Security', count: services.filter(s => s.category === 'Biometric Security').length },
    { id: 'Digital Twin', name: 'Digital Twin', count: services.filter(s => s.category === 'Digital Twin').length },
    { id: 'Blockchain Infrastructure', name: 'Blockchain Infrastructure', count: services.filter(s => s.category === 'Blockchain Infrastructure').length },
    { id: 'AI Hardware', name: 'AI Hardware', count: services.filter(s => s.category === 'AI Hardware').length },
    { id: 'Zero Trust Security', name: 'Zero Trust Security', count: services.filter(s => s.category === 'Zero Trust Security').length },
    { id: 'Immersive Technology', name: 'Immersive Technology', count: services.filter(s => s.category === 'Immersive Technology').length },
    { id: 'Quantum Internet', name: 'Quantum Internet', count: services.filter(s => s.category === 'Quantum Internet').length },
    { id: 'Cognitive Computing', name: 'Cognitive Computing', count: services.filter(s => s.category === 'Cognitive Computing').length },
    { id: 'Quantum Simulation', name: 'Quantum Simulation', count: services.filter(s => s.category === 'Quantum Simulation').length },
    { id: 'Hyperconverged Infrastructure', name: 'Hyperconverged Infrastructure', count: services.filter(s => s.category === 'Hyperconverged Infrastructure').length },
    { id: 'Quantum AI', name: 'Quantum AI', count: services.filter(s => s.category === 'Quantum AI').length },
    { id: 'Sustainable IT', name: 'Sustainable IT', count: services.filter(s => s.category === 'Sustainable IT').length },
    { id: 'Quantum Cryptography', name: 'Quantum Cryptography', count: services.filter(s => s.category === 'Quantum Cryptography').length },
    { id: 'Neuromorphic Hardware', name: 'Neuromorphic Hardware', count: services.filter(s => s.category === 'Neuromorphic Hardware').length },
    { id: 'Quantum Sensing', name: 'Quantum Sensing', count: services.filter(s => s.category === 'Quantum Sensing').length },
    { id: 'AI Ethics', name: 'AI Ethics', count: services.filter(s => s.category === 'AI Ethics').length }
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
