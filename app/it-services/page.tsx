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
  BarChart,
  Phone,
  MapPin,
  Mail,
  Search,
  Filter,
  ChevronDown,
  Cpu,
  Lock,
  DollarSign,
  Calendar,
  FileText,
  MessageCircle,
  Heart,
  Box,
  Link as LinkIcon,
  Package,
  Mic,
  Workflow,
  Eye,
  MessageSquare,
  CheckSquare,
  Target,
  Lightbulb,
  Gauge,
  Activity,
  PieChart,
  RefreshCw,
  Layers,
  Rocket,
  Award,
  Sparkles
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const itServices = [
    // Cloud Infrastructure & Migration
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services, cost optimization, and 99.9% uptime guarantee.',
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Cloud architecture design',
        'Multi-cloud strategies',
        'Cost optimization',
        'Disaster recovery',
        'Auto-scaling solutions',
        'Security compliance',
        'Performance monitoring',
        '24/7 expert support'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Cost reduction up to 40%',
        'Scalable infrastructure',
        'Expert migration support',
        'Enhanced security',
        'Better performance'
      ],
      category: 'Cloud',
      popular: true,
      icon: Cloud,
      setupTime: '2-4 weeks',
      users: 'Unlimited'
    },
    {
      id: 'cloud-migration-advanced',
      name: 'Advanced Cloud Migration',
      description: 'Zero-downtime cloud migration with data integrity verification, application modernization, and comprehensive testing.',
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
        'Enhanced security',
        'Minimal business disruption',
        'Future-proof architecture'
      ],
      category: 'Cloud',
      popular: true,
      icon: Cloud,
      setupTime: '4-8 weeks',
      users: 'Unlimited'
    },
    {
      id: 'cloud-native-development',
      name: 'Cloud-Native Development',
      description: 'Modern cloud-native application development with microservices, containers, and serverless architecture.',
      price: '$3,500/month',
      marketPrice: '$6000-20000/month',
      features: [
        'Microservices architecture',
        'Container orchestration (Kubernetes)',
        'Serverless application development',
        'API gateway implementation',
        'Service mesh configuration',
        'Cloud-native monitoring',
        'CI/CD pipeline setup',
        'Auto-scaling implementation'
      ],
      benefits: [
        'Scalable applications',
        'Faster deployment cycles',
        'Cost-effective scaling',
        'Modern development practices',
        'Better reliability',
        'Improved performance'
      ],
      category: 'Cloud Development',
      popular: false,
      icon: Cloud,
      setupTime: '6-12 weeks',
      users: 'Unlimited'
    },

    // Cybersecurity Solutions
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance management, and 24/7 security monitoring.',
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: [
        'Threat detection & response',
        'Vulnerability assessments',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Employee training',
        'Incident response',
        'Security audits'
      ],
      benefits: [
        '24/7 security monitoring',
        'Reduced security incidents',
        'Compliance assurance',
        'Expert security team',
        'Proactive threat protection',
        'Cost-effective security'
      ],
      category: 'Security',
      popular: true,
      icon: Shield,
      setupTime: '2-3 weeks',
      users: 'Unlimited'
    },
    {
      id: 'cybersecurity-advanced',
      name: 'Advanced Cybersecurity',
      description: 'Enterprise-grade cybersecurity with threat hunting, incident response, and advanced security automation.',
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
        'Expert security guidance',
        'Advanced threat detection',
        'Comprehensive security coverage'
      ],
      category: 'Security',
      popular: true,
      icon: Shield,
      setupTime: '3-4 weeks',
      users: 'Unlimited'
    },
    {
      id: 'cloud-native-security',
      name: 'Cloud-Native Security',
      description: 'Specialized security services for cloud-native applications and infrastructure with container security.',
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
        'Reduced security risks',
        'Cloud-specific protection',
        'Cost-effective security'
      ],
      category: 'Security',
      popular: false,
      icon: Shield,
      setupTime: '2-3 weeks',
      users: 'Unlimited'
    },

    // DevOps & CI/CD
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      price: '$2,200/month',
      marketPrice: '$3500-10000/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation',
        'Environment management',
        'Performance optimization'
      ],
      benefits: [
        'Faster deployments',
        'Reduced downtime',
        'Improved code quality',
        'Automated workflows',
        'Better collaboration',
        'Cost optimization'
      ],
      category: 'DevOps',
      popular: true,
      icon: Settings,
      setupTime: '2-3 weeks',
      users: 'Up to 50 users'
    },
    {
      id: 'devops-advanced',
      name: 'Advanced DevOps & SRE',
      description: 'Site Reliability Engineering and advanced DevOps practices for high-availability systems.',
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
        'Reduced operational costs',
        'Better performance',
        'Proactive monitoring'
      ],
      category: 'DevOps',
      popular: true,
      icon: Settings,
      setupTime: '3-4 weeks',
      users: 'Up to 75 users'
    },

    // Database Management
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems with AI-powered performance tuning.',
      price: '$1,200/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Data migration',
        'Security hardening',
        'Monitoring & maintenance',
        'AI-powered optimization',
        '24/7 DBA support'
      ],
      benefits: [
        'Improved performance',
        'Data security',
        'Automated backups',
        'Expert DBA support',
        'Cost optimization',
        'Better reliability'
      ],
      category: 'Database',
      popular: false,
      icon: Database,
      setupTime: '1-2 weeks',
      users: 'Unlimited'
    },
    {
      id: 'data-engineering',
      name: 'Data Engineering Services',
      description: 'Data pipeline development and data infrastructure setup for analytics and AI with real-time processing.',
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
        'Data-driven insights',
        'Real-time analytics',
        'Cost optimization'
      ],
      category: 'Data Engineering',
      popular: true,
      icon: Database,
      setupTime: '3-4 weeks',
      users: 'Unlimited'
    },

    // Web Development
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
      price: '$5,000/project',
      marketPrice: '$10000-30000/project',
      features: [
        'React/Next.js development',
        'Responsive design',
        'SEO optimization',
        'Performance tuning',
        'Security implementation',
        'Content management',
        'API integration',
        'Mobile optimization'
      ],
      benefits: [
        'Modern technology stack',
        'SEO optimized',
        'Mobile responsive',
        'Fast loading times',
        'Better user experience',
        'Scalable architecture'
      ],
      category: 'Development',
      popular: true,
      icon: Globe,
      setupTime: '4-8 weeks',
      users: 'Unlimited'
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience and performance.',
      price: '$8,000/project',
      marketPrice: '$15000-50000/project',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization',
        'Security implementation',
        'App maintenance and updates'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'App store success',
        'User engagement',
        'Better user experience',
        'Cost-effective development'
      ],
      category: 'Development',
      popular: true,
      icon: Smartphone,
      setupTime: '6-12 weeks',
      users: 'Unlimited'
    },

    // API Development
    {
      id: 'api-development',
      name: 'API Development & Integration',
      description: 'Custom API development and integration services for seamless system connectivity and data exchange.',
      price: '$2,000/project',
      marketPrice: '$5000-15000/project',
      features: [
        'RESTful API development',
        'GraphQL implementation',
        'API documentation',
        'Third-party integrations',
        'API security and authentication',
        'Performance optimization',
        'API testing',
        'Monitoring and analytics'
      ],
      benefits: [
        'Improved system integration',
        'Enhanced functionality',
        'Better performance',
        'Scalable architecture',
        'Secure data exchange',
        'Cost-effective integration'
      ],
      category: 'API Development',
      popular: false,
      icon: Code,
      setupTime: '2-4 weeks',
      users: 'Unlimited'
    },
    {
      id: 'api-development-advanced',
      name: 'Advanced API Development',
      description: 'Enterprise-grade API development with microservices architecture and advanced security features.',
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
        'Developer-friendly APIs',
        'Enterprise-grade reliability',
        'Cost-effective scaling'
      ],
      category: 'API Development',
      popular: true,
      icon: Code,
      setupTime: '4-6 weeks',
      users: 'Unlimited'
    },

    // E-commerce Solutions
    {
      id: 'ecommerce-solutions',
      name: 'E-commerce Solutions',
      description: 'Complete e-commerce platform development and optimization services with payment integration and inventory management.',
      price: '$10,000/project',
      marketPrice: '$20000-100000/project',
      features: [
        'Custom e-commerce development',
        'Payment gateway integration',
        'Inventory management',
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
        'Scalable platform',
        'Cost-effective solution',
        'Better conversion rates'
      ],
      category: 'E-commerce',
      popular: true,
      icon: ShoppingCart,
      setupTime: '8-16 weeks',
      users: 'Unlimited'
    },

    // IT Support & Help Desk
    {
      id: 'it-support',
      name: 'IT Support & Help Desk',
      description: 'Comprehensive IT support services including help desk, troubleshooting, and maintenance with guaranteed response times.',
      price: '$800/month',
      marketPrice: '$1500-4000/month',
      features: [
        '24/7 help desk support',
        'Remote troubleshooting',
        'Hardware and software support',
        'User training and onboarding',
        'System maintenance',
        'Incident management',
        'Proactive monitoring',
        'Knowledge base management'
      ],
      benefits: [
        'Reduced downtime',
        'Improved productivity',
        'Expert support',
        'Cost-effective solutions',
        'Better user experience',
        'Proactive maintenance'
      ],
      category: 'Support',
      popular: true,
      icon: Headphones,
      setupTime: '1-2 weeks',
      users: 'Unlimited'
    },

    // Data Analytics & BI
    {
      id: 'data-analytics-bi',
      name: 'Data Analytics & BI',
      description: 'Advanced data analytics and business intelligence solutions for data-driven decisions and insights.',
      price: '$1,800/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Data warehouse design',
        'ETL process development',
        'Dashboard and reporting',
        'Predictive analytics',
        'Data visualization',
        'Machine learning integration',
        'Real-time analytics',
        'Custom reporting'
      ],
      benefits: [
        'Data-driven insights',
        'Better decision making',
        'Competitive advantage',
        'Improved efficiency',
        'Cost optimization',
        'Real-time reporting'
      ],
      category: 'Data Analytics',
      popular: true,
      icon: BarChart,
      setupTime: '2-3 weeks',
      users: 'Up to 50 users'
    },
    {
      id: 'data-visualization',
      name: 'Data Visualization & BI',
      description: 'Advanced data visualization and business intelligence dashboard development with interactive analytics.',
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
        'Enhanced reporting',
        'Better user experience',
        'Cost-effective BI'
      ],
      category: 'Data Analytics',
      popular: false,
      icon: BarChart,
      setupTime: '2-3 weeks',
      users: 'Up to 40 users'
    },

    // Network Infrastructure
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise environments with 24/7 monitoring.',
      price: '$1,500/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Network architecture design',
        'Wireless network deployment',
        'Network security implementation',
        'Performance monitoring',
        'Disaster recovery planning',
        '24/7 network support',
        'VLAN configuration',
        'Load balancing setup'
      ],
      benefits: [
        'Improved network performance',
        'Enhanced security',
        'Reduced downtime',
        'Scalable infrastructure',
        'Better connectivity',
        'Cost optimization'
      ],
      category: 'Networking',
      popular: false,
      icon: Wifi,
      setupTime: '2-3 weeks',
      users: 'Unlimited'
    },

    // IT Consulting
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations with expert guidance.',
      price: '$200/hour',
      marketPrice: '$300-800/hour',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation planning',
        'Vendor evaluation',
        'Process optimization',
        'Change management',
        'Technology roadmap',
        'Best practices implementation'
      ],
      benefits: [
        'Strategic guidance',
        'Cost optimization',
        'Technology alignment',
        'Competitive advantage',
        'Expert advice',
        'Risk mitigation'
      ],
      category: 'Consulting',
      popular: true,
      icon: Users,
      setupTime: 'As needed',
      users: 'Unlimited'
    },

    // Managed IT Services
    {
      id: 'managed-services',
      name: 'Managed IT Services',
      description: 'Comprehensive managed IT services including monitoring, maintenance, and support for complete IT management.',
      price: '$1,000/month',
      marketPrice: '$2000-6000/month',
      features: [
        '24/7 system monitoring',
        'Proactive maintenance',
        'Help desk support',
        'Security management',
        'Backup and recovery',
        'Software updates',
        'Performance optimization',
        'Vendor management'
      ],
      benefits: [
        'Reduced IT costs',
        'Improved reliability',
        'Expert support',
        'Focus on core business',
        'Proactive maintenance',
        'Better security'
      ],
      category: 'Managed Services',
      popular: true,
      icon: Settings,
      setupTime: '1-2 weeks',
      users: 'Unlimited'
    },

    // Disaster Recovery
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery and business continuity planning and implementation with automated testing.',
      price: '$1,600/month',
      marketPrice: '$3000-8000/month',
      features: [
        'Disaster recovery planning',
        'Backup and recovery solutions',
        'Business continuity testing',
        'RTO and RPO optimization',
        'Cloud-based recovery',
        'Regular testing and updates',
        'Documentation and training',
        '24/7 monitoring'
      ],
      benefits: [
        'Minimized downtime',
        'Data protection',
        'Business continuity',
        'Peace of mind',
        'Cost-effective recovery',
        'Compliance ready'
      ],
      category: 'Disaster Recovery',
      popular: false,
      icon: Shield,
      setupTime: '2-3 weeks',
      users: 'Unlimited'
    },
    {
      id: 'disaster-recovery-advanced',
      name: 'Advanced Disaster Recovery',
      description: 'Comprehensive disaster recovery and business continuity solutions with automated testing and monitoring.',
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
        'Peace of mind',
        'Automated processes',
        'Compliance ready'
      ],
      category: 'Disaster Recovery',
      popular: false,
      icon: Shield,
      setupTime: '3-4 weeks',
      users: 'Unlimited'
    },

    // Compliance & Audit
    {
      id: 'it-audit',
      name: 'IT Audit & Compliance',
      description: 'Comprehensive IT audit and compliance services for regulatory requirements with automated monitoring.',
      price: '$1,400/month',
      marketPrice: '$2500-6000/month',
      features: [
        'IT security audits',
        'Compliance assessments',
        'Risk analysis and mitigation',
        'Policy development',
        'Training and awareness',
        'Ongoing monitoring',
        'Audit preparation',
        'Regulatory reporting'
      ],
      benefits: [
        'Regulatory compliance',
        'Risk mitigation',
        'Improved security posture',
        'Audit readiness',
        'Cost-effective compliance',
        'Expert guidance'
      ],
      category: 'Compliance',
      popular: false,
      icon: CheckCircle,
      setupTime: '2-3 weeks',
      users: 'Unlimited'
    },
    {
      id: 'compliance-automation',
      name: 'Compliance Automation',
      description: 'Automated compliance monitoring and reporting for various regulatory frameworks with real-time alerts.',
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
        'Audit readiness',
        'Real-time monitoring',
        'Cost-effective compliance'
      ],
      category: 'Compliance',
      popular: true,
      icon: CheckCircle,
      setupTime: '2-3 weeks',
      users: 'Unlimited'
    },

    // AI Integration Services
    {
      id: 'ai-integration-services',
      name: 'AI Integration Services',
      description: 'AI model integration and deployment services for existing business systems with custom AI solutions.',
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
        'Competitive advantage',
        'Cost-effective AI adoption',
        'Expert AI guidance'
      ],
      category: 'AI Integration',
      popular: true,
      icon: Brain,
      setupTime: '3-4 weeks',
      users: 'Unlimited'
    },

    // Blockchain Development
    {
      id: 'blockchain-development',
      name: 'Blockchain Development',
      description: 'Blockchain application development and smart contract implementation with DeFi and Web3 solutions.',
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
        'Future-proof technology',
        'Innovation leadership',
        'Cost-effective solutions'
      ],
      category: 'Blockchain',
      popular: false,
      icon: LinkIcon,
      setupTime: '6-12 weeks',
      users: 'Unlimited'
    },

    // IoT Development
    {
      id: 'iot-development',
      name: 'IoT Development & Integration',
      description: 'Internet of Things solution development and device integration services with edge computing capabilities.',
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
        'Improved efficiency',
        'Cost optimization',
        'Scalable IoT solutions'
      ],
      category: 'IoT Development',
      popular: true,
      icon: Wifi,
      setupTime: '4-6 weeks',
      users: 'Unlimited'
    },

    // Performance Optimization
    {
      id: 'performance-optimization',
      name: 'Performance Optimization',
      description: 'Application and infrastructure performance optimization for better user experience and cost efficiency.',
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
        'Improved scalability',
        'Better performance',
        'Cost optimization'
      ],
      category: 'Performance',
      popular: true,
      icon: Zap,
      setupTime: '2-3 weeks',
      users: 'Unlimited'
    },

    // Cloud Cost Optimization
    {
      id: 'cloud-cost-optimization',
      name: 'Cloud Cost Optimization',
      description: 'Cloud cost analysis and optimization services to reduce infrastructure spending and improve efficiency.',
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
        'Improved budget control',
        'Cost transparency',
        'ROI optimization'
      ],
      category: 'Cloud Optimization',
      popular: true,
      icon: TrendingUp,
      setupTime: '1-2 weeks',
      users: 'Unlimited'
    },

    // Security Automation
    {
      id: 'security-automation',
      name: 'Security Automation',
      description: 'Automated security monitoring, incident response, and threat detection with AI-powered security.',
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
        'Better security posture',
        'Cost-effective security',
        '24/7 protection'
      ],
      category: 'Security Automation',
      popular: true,
      icon: Shield,
      setupTime: '2-3 weeks',
      users: 'Unlimited'
    },

    // Workflow Automation
    {
      id: 'workflow-automation',
      name: 'Workflow Automation',
      description: 'Business process automation and workflow optimization services with RPA and intelligent automation.',
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
        'Cost savings',
        'Scalable automation',
        'Better compliance'
      ],
      category: 'Automation',
      popular: true,
      icon: Settings,
      setupTime: '3-4 weeks',
      users: 'Up to 50 users'
    },

    // MLOps & AI Operations
    {
      id: 'machine-learning-ops',
      name: 'MLOps & AI Operations',
      description: 'Machine Learning Operations and AI model deployment and monitoring services with automated ML pipelines.',
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
        'Reduced operational overhead',
        'Scalable ML infrastructure',
        'Cost-effective ML operations'
      ],
      category: 'MLOps',
      popular: true,
      icon: Cpu,
      setupTime: '3-4 weeks',
      users: 'Up to 30 users'
    },

    // Enterprise Integration
    {
      id: 'enterprise-integration',
      name: 'Enterprise Integration',
      description: 'Complex enterprise system integration with legacy and modern systems for seamless data flow.',
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
        'Better system visibility',
        'Cost-effective integration',
        'Better business processes'
      ],
      category: 'Integration',
      popular: true,
      icon: LinkIcon,
      setupTime: '4-6 weeks',
      users: 'Unlimited'
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services', count: itServices.length },
    { id: 'Cloud', name: 'Cloud', count: itServices.filter(s => s.category === 'Cloud').length },
    { id: 'Security', name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { id: 'DevOps', name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { id: 'Database', name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
    { id: 'Development', name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { id: 'API Development', name: 'API Development', count: itServices.filter(s => s.category === 'API Development').length },
    { id: 'E-commerce', name: 'E-commerce', count: itServices.filter(s => s.category === 'E-commerce').length },
    { id: 'Support', name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { id: 'Data Analytics', name: 'Data Analytics', count: itServices.filter(s => s.category === 'Data Analytics').length },
    { id: 'Networking', name: 'Networking', count: itServices.filter(s => s.category === 'Networking').length },
    { id: 'Consulting', name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { id: 'Managed Services', name: 'Managed Services', count: itServices.filter(s => s.category === 'Managed Services').length },
    { id: 'Disaster Recovery', name: 'Disaster Recovery', count: itServices.filter(s => s.category === 'Disaster Recovery').length },
    { id: 'Compliance', name: 'Compliance', count: itServices.filter(s => s.category === 'Compliance').length },
    { id: 'AI Integration', name: 'AI Integration', count: itServices.filter(s => s.category === 'AI Integration').length },
    { id: 'Blockchain', name: 'Blockchain', count: itServices.filter(s => s.category === 'Blockchain').length },
    { id: 'IoT Development', name: 'IoT Development', count: itServices.filter(s => s.category === 'IoT Development').length },
    { id: 'Performance', name: 'Performance', count: itServices.filter(s => s.category === 'Performance').length },
    { id: 'Cloud Optimization', name: 'Cloud Optimization', count: itServices.filter(s => s.category === 'Cloud Optimization').length },
    { id: 'Security Automation', name: 'Security Automation', count: itServices.filter(s => s.category === 'Security Automation').length },
    { id: 'Automation', name: 'Automation', count: itServices.filter(s => s.category === 'Automation').length },
    { id: 'MLOps', name: 'MLOps', count: itServices.filter(s => s.category === 'MLOps').length },
    { id: 'Integration', name: 'Integration', count: itServices.filter(s => s.category === 'Integration').length }
  ];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularServices = itServices.filter(service => service.popular);

  const benefits = [
    'Expert IT professionals',
    '24/7 support and monitoring',
    'Proactive maintenance',
    'Cost-effective solutions',
    'Scalable infrastructure',
    'Security-first approach',
    'Latest technology stack',
    'Proven methodologies'
  ];

  const stats = [
    { icon: <Server className="w-8 h-8 text-cyan-500" />, value: '500+', label: 'Servers Managed' },
    { icon: <Shield className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Security Uptime' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '200+', label: 'Clients Served' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, infrastructure management, DevOps, and more. Expert IT support and consulting for modern businesses." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, database management, web development" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we deliver enterprise-grade technology services.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="/consultation"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        {popularServices.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Featured IT Services</h2>
                <p className="text-xl text-gray-300">Our most popular IT solutions</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularServices.map((service) => (
                  <div key={service.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 text-sm font-semibold">Popular</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{service.users}</div>
                        <div className="text-xs text-gray-500">Setup: {service.setupTime}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex space-x-3">
                      <a 
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                      >
                        Get Quote
                      </a>
                      <a 
                        href="/contact"
                        className="px-4 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* All IT Services */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">All IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to modernize your infrastructure and drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.popular && (
                      <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{service.category}</p>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div>{service.users}</div>
                      <div className="text-xs">Setup: {service.setupTime}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex space-x-3">
                    <a 
                      href="/contact"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm"
                    >
                      Get Quote
                    </a>
                    <a 
                      href="/contact"
                      className="px-4 py-2 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No IT services found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert IT professionals delivering enterprise-grade solutions with proven results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our IT experts help you choose the right solutions for your business needs. 
                Get a free consultation and see how we can transform your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ItServicesPage;