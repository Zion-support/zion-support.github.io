'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
  Phone,
  Mail,
  Search,
  Target,
  TrendingUp,
  BarChart3,
  Cpu,
  HardDrive,
  Network,
  Lock,
  Wifi,
  Server,
  Monitor,
  Laptop,
  Tablet,
  Router,
  Cable,
  Plug,
  Power,
  Wrench,
  Cog,
  Sliders,
  Activity,
  AlertTriangle,
  RefreshCw,
  Download,
  Upload,
  Share2,
  Maximize,
  Minimize,
  RotateCcw,
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Headphones,
  Speaker,
  Tv,
  Watch,
  Gamepad2,
  Joystick,
  MousePointer,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Fax,
  Switch,
  Hub,
  Battery,
  BatteryCharging,
  PowerOff,
  Tool,
  Hammer,
  Screwdriver,
  ToggleLeft,
  ToggleRight,
  Toggle,
  Button,
  Knob,
  Dial,
  Slider,
  Progress,
  LineChart,
  AreaChart,
  ScatterChart,
  PieChart,
  DonutChart,
  Gauge,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudSun,
  CloudMoon,
  CloudSunRain,
  CloudMoonRain,
  CloudSnowRain,
  CloudLightningRain,
  CloudDrizzleRain,
  CloudFogRain,
  CloudHailRain,
  CloudSunSnow,
  CloudMoonSnow,
  CloudSunLightning,
  CloudMoonLightning,
  CloudSunDrizzle,
  CloudMoonDrizzle,
  CloudSunFog,
  CloudMoonFog,
  CloudSunHail,
  CloudMoonHail,
  CloudSunRainSnow,
  CloudMoonRainSnow,
  CloudSunLightningRain,
  CloudMoonLightningRain,
  CloudSunDrizzleRain,
  CloudMoonDrizzleRain,
  CloudSunFogRain,
  CloudMoonFogRain,
  CloudSunHailRain,
  CloudMoonHailRain,
  CloudSunSnowRain,
  CloudMoonSnowRain,
  CloudSunLightningSnow,
  CloudMoonLightningSnow,
  CloudSunDrizzleSnow,
  CloudMoonDrizzleSnow,
  CloudSunFogSnow,
  CloudMoonFogSnow,
  CloudSunHailSnow,
  CloudMoonHailSnow,
  CloudSunRainLightning,
  CloudMoonRainLightning,
  CloudSunSnowLightning,
  CloudMoonSnowLightning,
  CloudSunDrizzleLightning,
  CloudMoonDrizzleLightning,
  CloudSunFogLightning,
  CloudMoonFogLightning,
  CloudSunHailLightning,
  CloudMoonHailLightning,
  CloudSunRainDrizzle,
  CloudMoonRainDrizzle,
  CloudSunSnowDrizzle,
  CloudMoonSnowDrizzle,
  CloudSunLightningDrizzle,
  CloudMoonLightningDrizzle,
  CloudSunFogDrizzle,
  CloudMoonFogDrizzle,
  CloudSunHailDrizzle,
  CloudMoonHailDrizzle,
  CloudSunRainFog,
  CloudMoonRainFog,
  CloudSunSnowFog,
  CloudMoonSnowFog,
  CloudSunLightningFog,
  CloudMoonLightningFog,
  CloudSunDrizzleFog,
  CloudMoonDrizzleFog,
  CloudSunHailFog,
  CloudMoonHailFog,
  CloudSunRainHail,
  CloudMoonRainHail,
  CloudSunSnowHail,
  CloudMoonSnowHail,
  CloudSunLightningHail,
  CloudMoonLightningHail,
  CloudSunDrizzleHail,
  CloudMoonDrizzleHail,
  CloudSunFogHail,
  CloudMoonFogHail,
  CloudSunRainSnow,
  CloudMoonRainSnow,
  CloudSunLightningSnow,
  CloudMoonLightningSnow,
  CloudSunDrizzleSnow,
  CloudMoonDrizzleSnow,
  CloudSunFogSnow,
  CloudMoonFogSnow,
  CloudSunHailSnow,
  CloudMoonHailSnow,
  CloudSunRainLightning,
  CloudMoonRainLightning,
  CloudSunSnowLightning,
  CloudMoonSnowLightning,
  CloudSunDrizzleLightning,
  CloudMoonDrizzleLightning,
  CloudSunFogLightning,
  CloudMoonFogLightning,
  CloudSunHailLightning,
  CloudMoonHailLightning,
  CloudSunRainDrizzle,
  CloudMoonRainDrizzle,
  CloudSunSnowDrizzle,
  CloudMoonSnowDrizzle,
  CloudSunLightningDrizzle,
  CloudMoonLightningDrizzle,
  CloudSunFogDrizzle,
  CloudMoonFogDrizzle,
  CloudSunHailDrizzle,
  CloudMoonHailDrizzle,
  CloudSunRainFog,
  CloudMoonRainFog,
  CloudSunSnowFog,
  CloudMoonSnowFog,
  CloudSunLightningFog,
  CloudMoonLightningFog,
  CloudSunDrizzleFog,
  CloudMoonDrizzleFog,
  CloudSunHailFog,
  CloudMoonHailFog,
  CloudSunRainHail,
  CloudMoonRainHail,
  CloudSunSnowHail,
  CloudMoonSnowHail,
  CloudSunLightningHail,
  CloudMoonLightningHail,
  CloudSunDrizzleHail,
  CloudMoonDrizzleHail,
  CloudSunFogHail,
  CloudMoonFogHail
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const itServices = [
    // Cloud Services
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Comprehensive cloud solutions including migration, management, and optimization for AWS, Azure, and Google Cloud',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling',
        'Disaster Recovery',
        'Multi-cloud Strategy',
        'Cost Optimization',
        'Security Management',
        'Performance Monitoring'
      ],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      icon: Cloud,
      popular: true,
      capabilities: [
        'AWS, Azure, GCP expertise',
        'Zero-downtime migration',
        'Infrastructure automation',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring'
      ],
      benefits: [
        'Reduce infrastructure costs by 30-40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Increase operational efficiency',
        'Enable remote work capabilities'
      ],
      useCases: [
        'Application migration',
        'Data center consolidation',
        'Disaster recovery setup',
        'Hybrid cloud solutions',
        'Cloud-native development'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and data integrity',
      features: [
        'Zero Downtime Migration',
        'Data Integrity Preservation',
        'Cost Optimization',
        'Security Compliance',
        '24/7 Support',
        'Performance Testing',
        'Rollback Capability',
        'Documentation'
      ],
      price: 'Starting at $2,999/project',
      category: 'Cloud Services',
      icon: Cloud,
      popular: false,
      capabilities: [
        'Assessment and planning',
        'Application modernization',
        'Data migration',
        'Security configuration',
        'Performance optimization',
        'Training and support'
      ],
      benefits: [
        'Minimize business disruption',
        'Ensure data integrity',
        'Optimize cloud costs',
        'Improve performance',
        'Enhance security posture'
      ],
      useCases: [
        'Legacy system migration',
        'Data center migration',
        'Application modernization',
        'Database migration',
        'Infrastructure migration'
      ]
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security',
      description: 'Comprehensive cloud security solutions with threat detection and compliance management',
      features: [
        'Threat Detection',
        'Compliance Management',
        'Access Control',
        'Data Encryption',
        'Security Monitoring',
        'Incident Response',
        'Vulnerability Assessment',
        'Security Audits'
      ],
      price: 'Starting at $599/month',
      category: 'Cloud Services',
      icon: Shield,
      popular: false,
      capabilities: [
        'Multi-cloud security',
        'Identity and access management',
        'Data protection',
        'Compliance automation',
        'Threat intelligence',
        'Security analytics'
      ],
      benefits: [
        'Protect sensitive data',
        'Ensure compliance',
        'Detect threats early',
        'Automate security processes',
        'Reduce security risks'
      ],
      useCases: [
        'Cloud security assessment',
        'Compliance management',
        'Threat detection',
        'Data protection',
        'Security monitoring'
      ]
    },
    {
      id: 'devops-cicd',
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring',
      features: [
        'Automated Testing',
        'Continuous Deployment',
        'Infrastructure Monitoring',
        'Version Control',
        'Collaboration Tools',
        'Performance Optimization',
        'Security Integration',
        'Rollback Capability'
      ],
      price: 'Starting at $799/month',
      category: 'DevOps',
      icon: Settings,
      popular: true,
      capabilities: [
        'CI/CD pipeline setup',
        'Infrastructure as code',
        'Automated testing',
        'Deployment automation',
        'Monitoring and alerting',
        'Security integration'
      ],
      benefits: [
        'Accelerate development cycles',
        'Improve code quality',
        'Reduce deployment risks',
        'Increase team productivity',
        'Enable faster releases'
      ],
      useCases: [
        'Application deployment',
        'Infrastructure automation',
        'Quality assurance',
        'Release management',
        'Team collaboration'
      ]
    },

    // Cybersecurity
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Incident Response',
        'Compliance Management',
        'Threat Intelligence',
        'Security Training',
        'Vulnerability Assessment',
        'Security Monitoring'
      ],
      price: 'Starting at $799/month',
      category: 'Cybersecurity',
      icon: Shield,
      popular: true,
      capabilities: [
        'Security assessment',
        'Threat detection',
        'Incident response',
        'Compliance management',
        'Security training',
        'Vulnerability management'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Minimize security risks',
        'Improve security posture',
        'Reduce incident response time'
      ],
      useCases: [
        'Security assessment',
        'Threat protection',
        'Compliance management',
        'Incident response',
        'Security training'
      ]
    },
    {
      id: 'security-monitoring',
      title: 'Security Monitoring',
      description: '24/7 security monitoring with AI-powered threat detection and automated response',
      features: [
        '24/7 Monitoring',
        'AI Threat Detection',
        'Automated Response',
        'Incident Management',
        'Compliance Reporting',
        'Threat Intelligence',
        'Security Analytics',
        'Real-time Alerts'
      ],
      price: 'Starting at $499/month',
      category: 'Cybersecurity',
      icon: Activity,
      popular: false,
      capabilities: [
        'Real-time monitoring',
        'Threat detection',
        'Automated response',
        'Incident management',
        'Compliance reporting',
        'Security analytics'
      ],
      benefits: [
        'Detect threats early',
        'Reduce response time',
        'Improve security posture',
        'Ensure compliance',
        'Minimize security incidents'
      ],
      useCases: [
        'Network monitoring',
        'Threat detection',
        'Incident response',
        'Compliance monitoring',
        'Security analytics'
      ]
    },
    {
      id: 'penetration-testing',
      title: 'Penetration Testing',
      description: 'Comprehensive security testing to identify vulnerabilities and strengthen your defenses',
      features: [
        'Vulnerability Assessment',
        'Social Engineering Tests',
        'Network Security Testing',
        'Web Application Testing',
        'Mobile App Testing',
        'Wireless Security Testing',
        'Detailed Reporting',
        'Remediation Guidance'
      ],
      price: 'Starting at $2,999/assessment',
      category: 'Cybersecurity',
      icon: AlertTriangle,
      popular: false,
      capabilities: [
        'Comprehensive testing',
        'Vulnerability identification',
        'Risk assessment',
        'Remediation guidance',
        'Compliance validation',
        'Follow-up testing'
      ],
      benefits: [
        'Identify security vulnerabilities',
        'Improve security posture',
        'Ensure compliance',
        'Reduce security risks',
        'Validate security controls'
      ],
      useCases: [
        'Security assessment',
        'Compliance validation',
        'Vulnerability management',
        'Security improvement',
        'Risk assessment'
      ]
    },
    {
      id: 'compliance-management',
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with automated monitoring and reporting solutions',
      features: [
        'Regulatory Compliance',
        'Automated Monitoring',
        'Audit Trails',
        'Risk Assessment',
        'Documentation Management',
        'Compliance Reporting',
        'Policy Management',
        'Training Programs'
      ],
      price: 'Starting at $399/month',
      category: 'Cybersecurity',
      icon: FileText,
      popular: false,
      capabilities: [
        'Compliance monitoring',
        'Audit management',
        'Risk assessment',
        'Documentation',
        'Reporting automation',
        'Training management'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Reduce compliance costs',
        'Improve audit readiness',
        'Minimize compliance risks',
        'Streamline compliance processes'
      ],
      useCases: [
        'Regulatory compliance',
        'Audit management',
        'Risk assessment',
        'Documentation',
        'Training management'
      ]
    },

    // Data Analytics
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization',
      features: [
        'Business Intelligence',
        'Real-time Analytics',
        'Data Visualization',
        'Predictive Modeling',
        'Custom Dashboards',
        'Automated Reporting',
        'Data Integration',
        'Performance Metrics'
      ],
      price: 'Starting at $599/month',
      category: 'Data Analytics',
      icon: BarChart3,
      popular: true,
      capabilities: [
        'Data processing',
        'Analytics dashboards',
        'Predictive modeling',
        'Data visualization',
        'Report automation',
        'Data integration'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify business opportunities',
        'Improve operational efficiency',
        'Reduce manual reporting',
        'Enhance business performance'
      ],
      useCases: [
        'Business intelligence',
        'Financial analysis',
        'Marketing analytics',
        'Operational reporting',
        'Performance monitoring'
      ]
    },
    {
      id: 'big-data-solutions',
      title: 'Big Data Solutions',
      description: 'Handle massive datasets with scalable big data processing and analytics platforms',
      features: [
        'Data Processing',
        'Real-time Analytics',
        'Scalable Infrastructure',
        'Machine Learning',
        'Data Lakes',
        'Stream Processing',
        'Data Warehousing',
        'Performance Optimization'
      ],
      price: 'Starting at $1,299/month',
      category: 'Data Analytics',
      icon: Database,
      popular: false,
      capabilities: [
        'Big data processing',
        'Real-time analytics',
        'Scalable infrastructure',
        'Machine learning',
        'Data warehousing',
        'Performance optimization'
      ],
      benefits: [
        'Process large datasets',
        'Enable real-time analytics',
        'Scale with business growth',
        'Improve data insights',
        'Optimize performance'
      ],
      useCases: [
        'Data processing',
        'Real-time analytics',
        'Machine learning',
        'Data warehousing',
        'Performance optimization'
      ]
    },
    {
      id: 'business-intelligence',
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions with interactive dashboards and automated reporting',
      features: [
        'Interactive Dashboards',
        'Automated Reports',
        'Data Integration',
        'Self-service Analytics',
        'Mobile Access',
        'Collaborative Features',
        'Custom Visualizations',
        'Performance Monitoring'
      ],
      price: 'Starting at $899/month',
      category: 'Data Analytics',
      icon: PieChart,
      popular: false,
      capabilities: [
        'Dashboard creation',
        'Report automation',
        'Data integration',
        'Self-service analytics',
        'Mobile access',
        'Collaboration tools'
      ],
      benefits: [
        'Improve decision-making',
        'Enable self-service analytics',
        'Increase data accessibility',
        'Reduce reporting time',
        'Enhance collaboration'
      ],
      useCases: [
        'Executive dashboards',
        'Operational reporting',
        'Self-service analytics',
        'Mobile reporting',
        'Collaborative analytics'
      ]
    },

    // Mobile Development
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms with modern technologies',
      features: [
        'Native Apps',
        'Cross-platform Development',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Capabilities',
        'Security Integration',
        'Performance Optimization'
      ],
      price: 'Starting at $1,999/month',
      category: 'Mobile Development',
      icon: Smartphone,
      popular: true,
      capabilities: [
        'iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store deployment',
        'Performance optimization',
        'Security implementation'
      ],
      benefits: [
        'Reach mobile users',
        'Improve user engagement',
        'Increase business visibility',
        'Enable mobile commerce',
        'Enhance customer experience'
      ],
      useCases: [
        'Mobile commerce',
        'Customer apps',
        'Employee apps',
        'Productivity tools',
        'Entertainment apps'
      ]
    },
    {
      id: 'mobile-app-maintenance',
      title: 'Mobile App Maintenance',
      description: 'Ongoing maintenance and updates for your mobile applications with performance optimization',
      features: [
        'Bug Fixes',
        'Performance Optimization',
        'Security Updates',
        'Feature Enhancements',
        'App Store Management',
        'User Support',
        'Analytics Monitoring',
        'Version Control'
      ],
      price: 'Starting at $299/month',
      category: 'Mobile Development',
      icon: RefreshCw,
      popular: false,
      capabilities: [
        'Bug fixing',
        'Performance optimization',
        'Security updates',
        'Feature development',
        'App store management',
        'User support'
      ],
      benefits: [
        'Keep apps updated',
        'Improve performance',
        'Ensure security',
        'Add new features',
        'Maintain user satisfaction'
      ],
      useCases: [
        'App maintenance',
        'Performance optimization',
        'Security updates',
        'Feature development',
        'User support'
      ]
    },

    // Database Services
    {
      id: 'database-services',
      title: 'Database Services',
      description: 'Database design, optimization, and management for optimal performance and reliability',
      features: [
        'Database Design',
        'Performance Tuning',
        'Backup & Recovery',
        'Migration Services',
        'Monitoring & Maintenance',
        'Security Implementation',
        'Scalability Planning',
        'Disaster Recovery'
      ],
      price: 'Starting at $399/month',
      category: 'Database Services',
      icon: Database,
      popular: true,
      capabilities: [
        'Database design',
        'Performance optimization',
        'Backup and recovery',
        'Migration services',
        'Monitoring and maintenance',
        'Security implementation'
      ],
      benefits: [
        'Improve database performance',
        'Ensure data reliability',
        'Reduce downtime',
        'Enhance security',
        'Optimize costs'
      ],
      useCases: [
        'Database optimization',
        'Data migration',
        'Backup and recovery',
        'Performance tuning',
        'Security implementation'
      ]
    },
    {
      id: 'database-migration',
      title: 'Database Migration',
      description: 'Seamless database migration with zero downtime and data integrity preservation',
      features: [
        'Zero Downtime Migration',
        'Data Integrity',
        'Performance Optimization',
        'Testing & Validation',
        'Documentation',
        'Rollback Capability',
        'Security Implementation',
        'Post-migration Support'
      ],
      price: 'Starting at $1,999/migration',
      category: 'Database Services',
      icon: Upload,
      popular: false,
      capabilities: [
        'Migration planning',
        'Data validation',
        'Performance testing',
        'Security implementation',
        'Documentation',
        'Post-migration support'
      ],
      benefits: [
        'Minimize downtime',
        'Ensure data integrity',
        'Improve performance',
        'Enhance security',
        'Reduce migration risks'
      ],
      useCases: [
        'Database migration',
        'Data consolidation',
        'Performance improvement',
        'Security enhancement',
        'Platform migration'
      ]
    },

    // Process Automation
    {
      id: 'process-automation',
      title: 'Process Automation',
      description: 'Streamline your workflows with intelligent automation solutions and RPA',
      features: [
        'Workflow Automation',
        'RPA Implementation',
        'System Integration',
        'Process Monitoring',
        'Performance Optimization',
        'Error Handling',
        'Scalability Planning',
        'Compliance Management'
      ],
      price: 'Starting at $599/month',
      category: 'Automation',
      icon: Zap,
      popular: true,
      capabilities: [
        'Workflow automation',
        'RPA implementation',
        'System integration',
        'Process monitoring',
        'Performance optimization',
        'Compliance management'
      ],
      benefits: [
        'Reduce manual work',
        'Improve efficiency',
        'Ensure consistency',
        'Scale operations',
        'Reduce errors'
      ],
      useCases: [
        'Business process automation',
        'Data processing',
        'Customer service',
        'Financial processes',
        'HR automation'
      ]
    },
    {
      id: 'it-automation',
      title: 'IT Automation',
      description: 'Automate IT operations with intelligent monitoring, deployment, and maintenance solutions',
      features: [
        'Infrastructure Automation',
        'Deployment Automation',
        'Monitoring & Alerting',
        'Self-healing Systems',
        'Cost Optimization',
        'Security Automation',
        'Compliance Management',
        'Performance Optimization'
      ],
      price: 'Starting at $799/month',
      category: 'Automation',
      icon: Cog,
      popular: false,
      capabilities: [
        'Infrastructure automation',
        'Deployment automation',
        'Monitoring and alerting',
        'Self-healing systems',
        'Cost optimization',
        'Security automation'
      ],
      benefits: [
        'Reduce manual operations',
        'Improve reliability',
        'Optimize costs',
        'Enhance security',
        'Scale operations'
      ],
      useCases: [
        'Infrastructure management',
        'Deployment automation',
        'Monitoring and alerting',
        'Cost optimization',
        'Security automation'
      ]
    },

    // Web Development
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      features: [
        'React/Next.js Development',
        'Full-stack Development',
        'API Development',
        'Performance Optimization',
        'SEO Implementation',
        'Security Integration',
        'Responsive Design',
        'Cross-browser Compatibility'
      ],
      price: 'Starting at $1,299/month',
      category: 'Web Development',
      icon: Globe,
      popular: true,
      capabilities: [
        'Frontend development',
        'Backend development',
        'API development',
        'Performance optimization',
        'SEO implementation',
        'Security integration'
      ],
      benefits: [
        'Modern web applications',
        'Improved user experience',
        'Better performance',
        'Enhanced security',
        'SEO optimization'
      ],
      useCases: [
        'Corporate websites',
        'E-commerce platforms',
        'Web applications',
        'API development',
        'Performance optimization'
      ]
    },
    {
      id: 'ecommerce-development',
      title: 'E-commerce Development',
      description: 'Custom e-commerce solutions with advanced features and integrations',
      features: [
        'Custom E-commerce Platform',
        'Payment Integration',
        'Inventory Management',
        'Order Processing',
        'Customer Management',
        'Analytics & Reporting',
        'Mobile Optimization',
        'Security Implementation'
      ],
      price: 'Starting at $1,999/month',
      category: 'Web Development',
      icon: Globe,
      popular: false,
      capabilities: [
        'E-commerce platform development',
        'Payment integration',
        'Inventory management',
        'Order processing',
        'Customer management',
        'Analytics and reporting'
      ],
      benefits: [
        'Increase online sales',
        'Improve customer experience',
        'Streamline operations',
        'Enhance security',
        'Optimize performance'
      ],
      useCases: [
        'Online retail',
        'B2B e-commerce',
        'Marketplace development',
        'Payment integration',
        'Inventory management'
      ]
    },

    // IT Infrastructure
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management for enterprise environments',
      features: [
        'Server Setup & Configuration',
        'Network Design & Implementation',
        'Security Implementation',
        'Monitoring & Maintenance',
        'Backup & Recovery',
        'Disaster Recovery',
        'Performance Optimization',
        'Scalability Planning'
      ],
      price: 'Starting at $1,499/month',
      category: 'IT Infrastructure',
      icon: Server,
      popular: true,
      capabilities: [
        'Infrastructure design',
        'Server configuration',
        'Network implementation',
        'Security setup',
        'Monitoring and maintenance',
        'Backup and recovery'
      ],
      benefits: [
        'Reliable infrastructure',
        'Improved performance',
        'Enhanced security',
        'Reduced downtime',
        'Scalable solutions'
      ],
      useCases: [
        'Infrastructure setup',
        'Network implementation',
        'Security configuration',
        'Performance optimization',
        'Disaster recovery'
      ]
    },
    {
      id: 'managed-it-services',
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support and proactive monitoring',
      features: [
        '24/7 Support',
        'Proactive Monitoring',
        'Help Desk Services',
        'Security Management',
        'Backup Solutions',
        'Performance Optimization',
        'Compliance Management',
        'Strategic Planning'
      ],
      price: 'Starting at $999/month',
      category: 'IT Infrastructure',
      icon: Users,
      popular: true,
      capabilities: [
        '24/7 support',
        'Proactive monitoring',
        'Help desk services',
        'Security management',
        'Backup solutions',
        'Performance optimization'
      ],
      benefits: [
        'Reduce IT costs',
        'Improve reliability',
        'Enhance security',
        'Increase productivity',
        'Focus on core business'
      ],
      useCases: [
        'IT management',
        'Support services',
        'Security management',
        'Performance optimization',
        'Strategic planning'
      ]
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes',
      features: [
        'Technology Assessment',
        'Strategic Planning',
        'Cost Optimization',
        'Digital Transformation',
        'Training & Development',
        'Vendor Management',
        'Compliance Consulting',
        'Performance Analysis'
      ],
      price: 'Starting at $299/hour',
      category: 'IT Consulting',
      icon: Target,
      popular: false,
      capabilities: [
        'Technology assessment',
        'Strategic planning',
        'Cost optimization',
        'Digital transformation',
        'Training and development',
        'Vendor management'
      ],
      benefits: [
        'Optimize technology investments',
        'Improve operational efficiency',
        'Reduce costs',
        'Enhance security',
        'Enable digital transformation'
      ],
      useCases: [
        'Technology strategy',
        'Cost optimization',
        'Digital transformation',
        'Vendor management',
        'Training and development'
      ]
    },
    {
      id: 'cloud-infrastructure-management',
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee',
      features: [
        '99.9% Uptime SLA',
        '24/7 Monitoring',
        'Auto-scaling',
        'Cost Optimization',
        'Security Management',
        'Performance Optimization',
        'Disaster Recovery',
        'Compliance Management'
      ],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      icon: Cloud,
      popular: false,
      capabilities: [
        'Infrastructure management',
        'Performance monitoring',
        'Cost optimization',
        'Security management',
        'Disaster recovery',
        'Compliance management'
      ],
      benefits: [
        'Ensure high availability',
        'Optimize costs',
        'Enhance security',
        'Improve performance',
        'Ensure compliance'
      ],
      useCases: [
        'Cloud management',
        'Performance optimization',
        'Cost optimization',
        'Security management',
        'Disaster recovery'
      ]
    },
    {
      id: 'network-security-solutions',
      title: 'Network Security Solutions',
      description: 'Advanced network security with firewall management, intrusion detection, and threat prevention',
      features: [
        'Firewall Management',
        'Intrusion Detection',
        'Threat Prevention',
        'VPN Solutions',
        'Network Monitoring',
        'Security Audits',
        'Compliance Management',
        'Incident Response'
      ],
      price: 'Starting at $599/month',
      category: 'Cybersecurity',
      icon: Shield,
      popular: false,
      capabilities: [
        'Network security',
        'Threat detection',
        'Firewall management',
        'VPN solutions',
        'Security monitoring',
        'Incident response'
      ],
      benefits: [
        'Protect network infrastructure',
        'Detect and prevent threats',
        'Ensure compliance',
        'Improve security posture',
        'Reduce security risks'
      ],
      useCases: [
        'Network security',
        'Threat protection',
        'Compliance management',
        'Security monitoring',
        'Incident response'
      ]
    },
    {
      id: 'data-backup-recovery',
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions with automated backups',
      features: [
        'Automated Backups',
        'Instant Recovery',
        'Disaster Recovery',
        'Data Encryption',
        'Compliance Management',
        'Testing & Validation',
        'Monitoring & Alerting',
        'Documentation'
      ],
      price: 'Starting at $199/month',
      category: 'Data Services',
      icon: HardDrive,
      popular: false,
      capabilities: [
        'Automated backup',
        'Disaster recovery',
        'Data encryption',
        'Compliance management',
        'Testing and validation',
        'Monitoring and alerting'
      ],
      benefits: [
        'Protect critical data',
        'Ensure business continuity',
        'Meet compliance requirements',
        'Reduce recovery time',
        'Minimize data loss'
      ],
      useCases: [
        'Data protection',
        'Disaster recovery',
        'Compliance management',
        'Business continuity',
        'Data migration'
      ]
    },
    {
      id: 'it-asset-management',
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with inventory tracking and cost optimization',
      features: [
        'Asset Tracking',
        'Inventory Management',
        'Cost Optimization',
        'License Management',
        'Depreciation Tracking',
        'Compliance Management',
        'Performance Monitoring',
        'Reporting & Analytics'
      ],
      price: 'Starting at $149/month',
      category: 'IT Management',
      icon: Settings,
      popular: false,
      capabilities: [
        'Asset tracking',
        'Inventory management',
        'Cost optimization',
        'License management',
        'Compliance management',
        'Performance monitoring'
      ],
      benefits: [
        'Optimize asset utilization',
        'Reduce costs',
        'Ensure compliance',
        'Improve visibility',
        'Streamline management'
      ],
      useCases: [
        'Asset management',
        'Cost optimization',
        'Compliance management',
        'Inventory tracking',
        'Performance monitoring'
      ]
    },
    {
      id: 'website-hosting-maintenance',
      title: 'Website Hosting & Maintenance',
      description: 'Reliable website hosting with SSL certificates, CDN, and regular maintenance',
      features: [
        '99.9% Uptime Guarantee',
        'SSL Certificates',
        'CDN Integration',
        'Regular Updates',
        'Performance Monitoring',
        'Security Management',
        'Backup Solutions',
        '24/7 Support'
      ],
      price: 'Starting at $49/month',
      category: 'Web Services',
      icon: Globe,
      popular: false,
      capabilities: [
        'Website hosting',
        'SSL certificates',
        'CDN integration',
        'Performance monitoring',
        'Security management',
        'Backup solutions'
      ],
      benefits: [
        'Ensure website availability',
        'Improve performance',
        'Enhance security',
        'Reduce maintenance costs',
        'Provide reliable hosting'
      ],
      useCases: [
        'Website hosting',
        'Performance optimization',
        'Security management',
        'Maintenance services',
        'Support services'
      ]
    },
    {
      id: 'mobile-device-management',
      title: 'Mobile Device Management',
      description: 'Enterprise mobile device management with security policies and app management',
      features: [
        'Device Security',
        'App Management',
        'Remote Control',
        'Policy Enforcement',
        'Data Protection',
        'Compliance Management',
        'Performance Monitoring',
        'User Support'
      ],
      price: 'Starting at $99/month',
      category: 'Mobile Services',
      icon: Smartphone,
      popular: false,
      capabilities: [
        'Device management',
        'Security policies',
        'App management',
        'Remote control',
        'Data protection',
        'Compliance management'
      ],
      benefits: [
        'Secure mobile devices',
        'Enforce policies',
        'Protect data',
        'Ensure compliance',
        'Improve productivity'
      ],
      useCases: [
        'Mobile device management',
        'Security enforcement',
        'App management',
        'Data protection',
        'Compliance management'
      ]
    },
    {
      id: 'compliance-audit-services',
      title: 'Compliance & Audit Services',
      description: 'Ensure regulatory compliance with automated monitoring and audit trails',
      features: [
        'Regulatory Compliance',
        'Audit Trails',
        'Compliance Reporting',
        'Risk Assessment',
        'Documentation Management',
        'Training Programs',
        'Monitoring & Alerting',
        'Remediation Support'
      ],
      price: 'Starting at $399/month',
      category: 'Compliance',
      icon: Shield,
      popular: false,
      capabilities: [
        'Compliance monitoring',
        'Audit management',
        'Risk assessment',
        'Documentation',
        'Training programs',
        'Remediation support'
      ],
      benefits: [
        'Ensure compliance',
        'Reduce audit costs',
        'Improve audit readiness',
        'Minimize compliance risks',
        'Streamline processes'
      ],
      useCases: [
        'Regulatory compliance',
        'Audit management',
        'Risk assessment',
        'Documentation',
        'Training management'
      ]
    },
    {
      id: 'it-performance-monitoring',
      title: 'IT Performance Monitoring',
      description: 'Real-time IT performance monitoring with alerting and optimization recommendations',
      features: [
        'Real-time Monitoring',
        'Performance Alerts',
        'Optimization Recommendations',
        'Capacity Planning',
        'Trend Analysis',
        'Custom Dashboards',
        'Automated Reporting',
        'Predictive Analytics'
      ],
      price: 'Starting at $299/month',
      category: 'Monitoring',
      icon: Activity,
      popular: false,
      capabilities: [
        'Performance monitoring',
        'Alert management',
        'Optimization recommendations',
        'Capacity planning',
        'Trend analysis',
        'Predictive analytics'
      ],
      benefits: [
        'Improve performance',
        'Prevent issues',
        'Optimize resources',
        'Reduce downtime',
        'Enhance reliability'
      ],
      useCases: [
        'Performance monitoring',
        'Capacity planning',
        'Optimization',
        'Trend analysis',
        'Predictive analytics'
      ]
    },
    {
      id: 'it-training-support',
      title: 'IT Training & Support',
      description: 'Comprehensive IT training programs and ongoing support for your team',
      features: [
        'Custom Training Programs',
        'End-user Support',
        'Technical Documentation',
        'Video Tutorials',
        'Certification Programs',
        'On-site Training',
        'Remote Support',
        'Knowledge Base'
      ],
      price: 'Starting at $199/month',
      category: 'Training',
      icon: Users,
      popular: false,
      capabilities: [
        'Training programs',
        'End-user support',
        'Documentation',
        'Video tutorials',
        'Certification programs',
        'Knowledge base'
      ],
      benefits: [
        'Improve team skills',
        'Reduce support costs',
        'Increase productivity',
        'Enhance knowledge',
        'Ensure best practices'
      ],
      useCases: [
        'Team training',
        'End-user support',
        'Documentation',
        'Certification',
        'Knowledge management'
      ]
    },
    {
      id: 'it-project-management',
      title: 'IT Project Management',
      description: 'Professional IT project management with planning, execution, and delivery',
      features: [
        'Project Planning',
        'Resource Management',
        'Timeline Tracking',
        'Risk Management',
        'Quality Assurance',
        'Stakeholder Communication',
        'Budget Management',
        'Delivery Management'
      ],
      price: 'Starting at $399/month',
      category: 'Project Management',
      icon: Target,
      popular: false,
      capabilities: [
        'Project planning',
        'Resource management',
        'Timeline tracking',
        'Risk management',
        'Quality assurance',
        'Stakeholder communication'
      ],
      benefits: [
        'Ensure project success',
        'Manage resources effectively',
        'Control costs',
        'Mitigate risks',
        'Improve communication'
      ],
      useCases: [
        'IT project management',
        'Resource management',
        'Risk management',
        'Quality assurance',
        'Stakeholder management'
      ]
    },
    {
      id: 'vulnerability-assessment',
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security vulnerability assessment with penetration testing',
      features: [
        'Vulnerability Scanning',
        'Penetration Testing',
        'Remediation Guidance',
        'Security Reports',
        'Follow-up Testing',
        'Risk Assessment',
        'Compliance Validation',
        'Documentation'
      ],
      price: 'Starting at $1,999/assessment',
      category: 'Security',
      icon: AlertTriangle,
      popular: false,
      capabilities: [
        'Vulnerability scanning',
        'Penetration testing',
        'Risk assessment',
        'Remediation guidance',
        'Compliance validation',
        'Follow-up testing'
      ],
      benefits: [
        'Identify vulnerabilities',
        'Improve security posture',
        'Ensure compliance',
        'Reduce security risks',
        'Validate security controls'
      ],
      useCases: [
        'Security assessment',
        'Vulnerability management',
        'Compliance validation',
        'Risk assessment',
        'Security improvement'
      ]
    },
    {
      id: 'hybrid-cloud-solutions',
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless hybrid cloud solutions combining on-premises and cloud infrastructure',
      features: [
        'Hybrid Architecture',
        'Data Synchronization',
        'Workload Migration',
        'Cost Optimization',
        'Security Integration',
        'Performance Optimization',
        'Compliance Management',
        'Unified Management'
      ],
      price: 'Starting at $1,599/month',
      category: 'Cloud Services',
      icon: Cloud,
      popular: false,
      capabilities: [
        'Hybrid architecture',
        'Data synchronization',
        'Workload migration',
        'Cost optimization',
        'Security integration',
        'Unified management'
      ],
      benefits: [
        'Optimize infrastructure',
        'Reduce costs',
        'Improve flexibility',
        'Enhance security',
        'Enable seamless operations'
      ],
      useCases: [
        'Hybrid cloud setup',
        'Workload migration',
        'Cost optimization',
        'Security integration',
        'Unified management'
      ]
    },
    {
      id: 'data-migration-services',
      title: 'Data Migration Services',
      description: 'Secure and efficient data migration between systems with zero downtime',
      features: [
        'Zero Downtime Migration',
        'Data Integrity',
        'Migration Planning',
        'Testing & Validation',
        'Rollback Capability',
        'Security Implementation',
        'Performance Optimization',
        'Documentation'
      ],
      price: 'Starting at $2,999/project',
      category: 'Data Services',
      icon: Upload,
      popular: false,
      capabilities: [
        'Migration planning',
        'Data validation',
        'Performance testing',
        'Security implementation',
        'Rollback capability',
        'Documentation'
      ],
      benefits: [
        'Minimize downtime',
        'Ensure data integrity',
        'Improve performance',
        'Enhance security',
        'Reduce migration risks'
      ],
      useCases: [
        'Data migration',
        'System migration',
        'Platform migration',
        'Data consolidation',
        'Performance improvement'
      ]
    },
    {
      id: 'api-development-integration',
      title: 'API Development & Integration',
      description: 'Custom API development and integration services for seamless data exchange',
      features: [
        'Custom API Development',
        'System Integration',
        'API Documentation',
        'Testing & Validation',
        'Performance Optimization',
        'Security Implementation',
        'Monitoring & Analytics',
        'Version Management'
      ],
      price: 'Starting at $799/month',
      category: 'Development',
      icon: Globe,
      popular: false,
      capabilities: [
        'API development',
        'System integration',
        'API documentation',
        'Testing and validation',
        'Performance optimization',
        'Security implementation'
      ],
      benefits: [
        'Enable system integration',
        'Improve data exchange',
        'Enhance functionality',
        'Optimize performance',
        'Ensure security'
      ],
      useCases: [
        'API development',
        'System integration',
        'Data exchange',
        'Performance optimization',
        'Security implementation'
      ]
    },
    {
      id: 'it-governance-strategy',
      title: 'IT Governance & Strategy',
      description: 'Strategic IT governance and technology roadmap development',
      features: [
        'IT Strategy Development',
        'Technology Roadmaps',
        'Governance Frameworks',
        'Risk Management',
        'Performance Metrics',
        'Compliance Management',
        'Vendor Management',
        'Budget Planning'
      ],
      price: 'Starting at $499/month',
      category: 'Strategy',
      icon: Target,
      popular: false,
      capabilities: [
        'Strategy development',
        'Technology roadmaps',
        'Governance frameworks',
        'Risk management',
        'Performance metrics',
        'Compliance management'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Improve governance',
        'Reduce risks',
        'Enhance performance'
      ],
      useCases: [
        'IT strategy',
        'Technology planning',
        'Governance management',
        'Risk management',
        'Performance optimization'
      ]
    }
  ];

  const categories = [
    'All',
    'Cloud Services',
    'Cybersecurity',
    'Data Analytics',
    'Mobile Development',
    'Database Services',
    'Automation',
    'Web Development',
    'IT Infrastructure',
    'IT Consulting',
    'Data Services',
    'IT Management',
    'Web Services',
    'Mobile Services',
    'Compliance',
    'Monitoring',
    'Training',
    'Project Management',
    'Security',
    'Development',
    'Strategy'
  ];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, infrastructure management, data analytics, and more. Expert IT support and consulting." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, data analytics" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT solutions for modern businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we provide expert IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search IT services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1, 8).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All IT Services' : `${selectedCategory} Services`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Capabilities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.slice(0, 3).map((capability, index) => (
                        <span key={index} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                          {capability}
                        </span>
                      ))}
                      {service.capabilities.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{service.capabilities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300">Contact for custom pricing</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+13024640950"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={`/it-services/${service.id}`}
                      className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver reliable, secure, and scalable IT solutions that drive business success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level security and compliance for your critical data and infrastructure
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">
                  Round-the-clock expert support and monitoring for your IT infrastructure
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">
                  Our IT solutions have improved efficiency and reduced costs for 1000+ clients
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid Deployment</h3>
                <p className="text-gray-300">
                  Get your IT solutions up and running quickly with our streamlined processes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your IT needs and create a custom solution that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;