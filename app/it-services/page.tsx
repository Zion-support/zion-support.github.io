<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network, Settings } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Server, Shield, Cloud, Database, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, Code, Cpu, DollarSign, Star } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Code } from 'lucide-react'
import { Link } from 'react-router-dom'
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1

<<<<<<< HEAD
export default function ITServicesPage() {
  const services = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, Code, Cpu } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with zero downtime.',
      features: ['Zero Downtime Migration', 'Data Integrity', 'Cost Optimization', 'Security Compliance'],
      pricing: 'Starting at $2,500',
<<<<<<< HEAD
      link: '/cloud-migration',
      popular: true,
      duration: '2-4 weeks'
=======
=======
import { CheckCircle, ArrowRight, Server, Shield, Cloud, Database, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server setup & configuration', 'Network monitoring', 'Performance optimization', '24/7 support', 'Disaster recovery'],
      pricing: 'Starting at $299/month',
<<<<<<< HEAD
      category: 'Infrastructure'
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
      category: 'Infrastructure',
      popular: true
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
<<<<<<< HEAD
      features: ['Security audit', 'Penetration testing', 'Compliance management', '24/7 monitoring'],
      pricing: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions',
      popular: true,
      duration: 'Ongoing'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['CI/CD pipeline setup', 'Docker containerization', 'Kubernetes orchestration', 'Monitoring setup'],
      pricing: 'Starting at $3,000',
      link: '/devops-cicd',
      popular: false,
      duration: '3-6 weeks'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance services for optimal performance.',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Migration services'],
      pricing: 'Starting at $800/month',
      link: '/database-management',
      popular: false,
      duration: 'Ongoing'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile App Development',
      description: 'Custom mobile applications for iOS and Android platforms with native performance.',
      features: ['Native iOS/Android apps', 'Cross-platform solutions', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $5,000',
      link: '/mobile-app-development',
      popular: true,
      duration: '8-12 weeks'
=======
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions and threat monitoring.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
      pricing: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['Automated Deployment', 'Continuous Integration', 'Infrastructure as Code', 'Monitoring'],
      pricing: 'Starting at $2,000/month',
      link: '/devops-cicd'
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server setup & configuration', 'Network monitoring', 'Performance optimization', '24/7 support'],
      pricing: 'Starting at $299/month',
      link: '/infrastructure-management',
      popular: false,
      duration: 'Ongoing'
=======
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      link: '/it-services/cloud-migration'
=======
const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to the cloud with minimal downtime and maximum security. We handle everything from planning to execution.',
      features: [
        'AWS, Azure, and GCP expertise',
        'Zero-downtime migration',
        'Security compliance',
        'Cost optimization',
        '24/7 monitoring',
        'Post-migration support'
      ],
      pricing: 'Starting at $2,500',
      popular: true,
      link: '/cloud-migration'
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'Cybersecurity Solutions',
<<<<<<< HEAD
      description: 'Comprehensive security solutions to protect your business from cyber threats and ensure compliance.',
      features: ['Threat assessment', 'Security monitoring', 'Compliance management', 'Incident response'],
      pricing: 'Starting at $1,500/month',
      link: '/it-services/cybersecurity'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-500" />,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android that deliver exceptional user experiences.',
      features: ['Native iOS & Android apps', 'Cross-platform solutions', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $5,000',
      link: '/it-services/mobile-development'
=======
      description: 'Comprehensive security solutions to protect your business from cyber threats and ensure compliance with industry standards.',
      features: [
        'Threat detection and response',
        'Security audits and assessments',
        'Compliance management',
        'Employee training programs',
        'Incident response planning',
        '24/7 security monitoring'
      ],
      pricing: '$1,500/month',
      popular: false,
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Server className="w-12 h-12 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment, continuous integration, and infrastructure management.',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring and logging',
        'Performance optimization',
        'Team training and support'
      ],
      pricing: '$2,000/month',
      popular: false,
      link: '/devops-cicd'
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Data Analytics',
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'Real-time reporting'],
      pricing: 'Starting at $2,000/month',
      link: '/it-services/data-analytics'
    },
    {
      icon: <Server className="w-12 h-12 text-red-500" />,
      title: 'DevOps & Infrastructure',
      description: 'Streamline your development and deployment processes with our DevOps and infrastructure management services.',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & logging', 'Performance optimization'],
      pricing: 'Starting at $3,000/month',
      link: '/it-services/devops'
    },
    {
      icon: <Code className="w-12 h-12 text-indigo-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and objectives.',
      features: ['Web applications', 'API development', 'System integration', 'Legacy modernization'],
      pricing: 'Starting at $8,000',
      link: '/it-services/custom-development'
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
import { CheckCircle, Zap, Shield, Globe, Cloud, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, ArrowRight, Star, Users, Clock, Lock, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud migration services with AWS, Azure, and Google Cloud Platform expertise.',
      features: ['Zero-downtime Migration', 'Cost Optimization', 'Security Implementation', '24/7 Monitoring'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and compliance.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response'],
      pricing: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions',
      popular: false
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment, testing, and monitoring.',
      features: ['Automated Deployment', 'Continuous Integration', 'Infrastructure as Code', 'Performance Monitoring'],
      pricing: 'Starting at $3,000/month',
      link: '/devops-cicd',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: ['Data Warehousing', 'Real-time Analytics', 'Custom Dashboards', 'Predictive Modeling'],
      pricing: 'Starting at $2,000/month',
      link: '/data-analytics',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern frameworks.',
      features: ['Native iOS/Android', 'React Native', 'Flutter Development', 'App Store Optimization'],
      pricing: 'Starting at $5,000',
      link: '/mobile-development',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Blockchain Solutions',
      description: 'Blockchain development and integration services for secure, decentralized applications.',
      features: ['Smart Contracts', 'DApp Development', 'Tokenization', 'DeFi Solutions'],
      pricing: 'Starting at $8,000',
      link: '/blockchain',
      popular: false
=======
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
      pricing: 'Starting at $2,000/month',
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      features: ['Native Development', 'Cross-platform Apps', 'UI/UX Design', 'App Store Optimization'],
      pricing: 'Starting at $5,000',
      link: '/mobile-development'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Blockchain Solutions',
      description: 'Leverage blockchain technology for secure, transparent, and decentralized applications.',
      features: ['Smart Contracts', 'DApp Development', 'Tokenization', 'DeFi Solutions'],
      pricing: 'Starting at $10,000',
      link: '/blockchain'
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
    }
  ];

  const additionalServices = [
    {
      icon: <Settings className="w-6 h-6 text-blue-500" />,
      title: 'System Administration',
      description: '24/7 system monitoring, maintenance, and optimization for your IT infrastructure.',
      pricing: '$800/month'
    },
    {
      icon: <Lock className="w-6 h-6 text-green-500" />,
      title: 'Data Backup & Recovery',
      description: 'Automated backup solutions and disaster recovery planning to protect your critical data.',
      pricing: '$500/month'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'IT Support & Helpdesk',
      description: 'Dedicated IT support team to handle all your technical issues and user requests.',
      pricing: '$1,200/month'
    },
    {
      icon: <Wifi className="w-6 h-6 text-orange-500" />,
      title: 'Network Infrastructure',
      description: 'Design, implementation, and maintenance of secure and scalable network infrastructure.',
      pricing: '$2,000/month'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
    }
  ]

  const benefits = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Cost Efficiency',
      description: 'Reduce IT costs by up to 40% through optimized solutions and automation',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your IT infrastructure',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Scalability',
      description: 'Solutions that grow with your business and adapt to changing needs',
      icon: <Users className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your digital assets',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];
=======
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of experience'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Effective',
      description: 'Optimized solutions that reduce operational costs'
    }
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'TechStart Inc.',
      content: 'The cloud migration was seamless. We saved 60% on infrastructure costs and improved performance significantly.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'DataCorp Solutions',
      content: 'Their cybersecurity solutions gave us peace of mind. Our security posture has never been stronger.',
      rating: 5
    },
    {
<<<<<<< HEAD
      name: 'Mark Rodriguez',
      company: 'InnovateTech',
      content: 'The DevOps implementation transformed our development workflow. Deployments are now 10x faster.',
      rating: 5
    }
  ];

=======
      features: ['Security audit', 'Penetration testing', 'Compliance management', '24/7 monitoring', 'Incident response'],
      pricing: 'Starting at $499/month',
      category: 'Security'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Services',
      description: 'Cloud migration, optimization, and management across all major platforms.',
      features: ['AWS/Azure/GCP migration', 'Cloud optimization', 'Cost management', 'Multi-cloud strategy', 'Backup solutions'],
      pricing: 'Starting at $399/month',
      category: 'Cloud'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance for optimal performance.',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Data migration', 'Security hardening'],
      pricing: 'Starting at $199/month',
      category: 'Database'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: 'Network Solutions',
      description: 'Network design, implementation, and ongoing management services.',
      features: ['Network design', 'VPN setup', 'Firewall configuration', 'Bandwidth optimization', 'Network security'],
      pricing: 'Starting at $249/month',
      category: 'Network'
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: 'System Administration',
      description: 'Complete system administration and maintenance for your IT environment.',
      features: ['User management', 'System updates', 'Performance monitoring', 'Troubleshooting', 'Documentation'],
      pricing: 'Starting at $199/month',
      category: 'Administration'
    }
  ];

=======
      step: '03',
      title: 'Implementation',
      description: 'Execute the solution with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Provide ongoing maintenance, monitoring, and optimization services.'
    }
  ];

  const itCapabilities = [
    {
      icon: <Server className="w-12 h-12 text-blue-500" />,
      title: 'Infrastructure Solutions',
      description: 'Complete infrastructure design, implementation, and management services.'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Security & Compliance',
      description: 'Comprehensive cybersecurity solutions and compliance management.'
    },
    {
      icon: <Cloud className="w-12 h-12 text-green-500" />,
      title: 'Cloud Services',
      description: 'Cloud migration, management, and optimization for modern businesses.'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'Data Management',
      description: 'Database design, optimization, and data management solutions.'
    },
    {
      icon: <Network className="w-12 h-12 text-orange-500" />,
      title: 'Network Solutions',
      description: 'Network design, implementation, and management services.'
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      title: 'IT Support',
      description: '24/7 technical support and proactive maintenance services.'
    }
  ];

>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
<<<<<<< HEAD
    { number: '15+', label: 'Years Experience' }
  ];

  const benefits = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful implementations and satisfied clients',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring services',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Competitive pricing with flexible payment options',
      icon: <DollarSign className="w-6 h-6 text-orange-500" />
    }
  ];
=======
    { number: '50+', label: 'Enterprise Clients' }
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1

>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
      description: 'Transform your data into actionable insights with advanced analytics, reporting, and business intelligence solutions.',
      features: [
        'Data warehouse design',
        'ETL/ELT processes',
        'Real-time analytics',
        'Custom dashboards',
        'Machine learning integration',
        'Data governance'
      ],
      pricing: '$2,000/month',
      popular: true,
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth.',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Performance optimization',
        'Maintenance and updates'
      ],
      pricing: 'Starting at $5,000',
      popular: false,
      link: '/mobile-development'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'Blockchain Solutions',
      description: 'Leverage blockchain technology for secure, transparent, and efficient business processes and applications.',
      features: [
        'Smart contract development',
        'DeFi applications',
        'NFT marketplaces',
        'Supply chain tracking',
        'Identity management',
        'Cryptocurrency integration'
      ],
      pricing: '$3,500/month',
      popular: false,
      link: '/blockchain-solutions'
    }
  ];
=======
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly.'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: 'Proven Track Record',
      description: 'Successfully delivered 500+ IT projects with 99% client satisfaction rate.'
    }
  ];
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Proven Expertise',
      description: 'Our team has successfully delivered 500+ IT projects across various industries.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: 'Cutting-edge Technology',
      description: 'We use the latest technologies and best practices to deliver superior solutions.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security First',
      description: 'Security is built into every solution we deliver, ensuring your data is always protected.'
    }
  ];
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34

>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, DevOps, and infrastructure management. Transform your technology infrastructure with Zion Tech Group." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, infrastructure management, Zion Tech Group" />
=======
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and more." />
        <meta name="keywords" content="IT services, infrastructure, cybersecurity, cloud, database, network, system administration" />
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
      </Helmet>

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional IT
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Services</span>
            <br />
            for Modern Business
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your technology infrastructure with our comprehensive IT services. 
            From cloud migration to cybersecurity, we provide solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/it-services#services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Services
            </Link>
=======
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to keep your business running smoothly and securely. From infrastructure to cybersecurity, we've got you covered.
=======
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and 24/7 support from Zion Tech Group." />
        <meta name="keywords" content="IT services, infrastructure management, cybersecurity, cloud services, database management, network solutions, IT support" />
=======
        <meta name="description" content="Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, mobile development, data analytics" />
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, and mobile development solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, mobile development, blockchain" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, mobile development, and blockchain solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, mobile development, blockchain" />
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT services to keep your business running smoothly. From infrastructure management to cybersecurity, we've got you covered.
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Complete IT infrastructure services including cloud migration, cybersecurity, mobile development, and data analytics solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Infrastructure <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Complete IT services to modernize your infrastructure, enhance security, and drive digital transformation.
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Complete IT solutions to modernize your infrastructure, enhance security, and accelerate your digital transformation.
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                Get Started
=======
                Get IT Consultation
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
=======
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ai-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View AI Services
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Free Assessment
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
              </Link>
=======
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Comprehensive IT solutions to accelerate your digital transformation. 
              From cloud migration to cybersecurity, we provide end-to-end IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
          </div>
        </div>
      </main>

      {/* IT Capabilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT expertise across all major domains
=======
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete IT infrastructure services designed to modernize your technology stack, enhance security, and drive business growth.
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
<<<<<<< HEAD
            {itCapabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We deliver reliable, scalable, and secure IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure and drive business growth
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IT Service Packages</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive IT service packages
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
            </p>
          </div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <span className="text-sm text-gray-400">{service.duration}</span>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional IT services tailored to your business needs
=======
=======
      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive IT solutions to meet all your technology needs
            </p>
          </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {itServices.map((service, index) => (
<<<<<<< HEAD
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
=======
          {/* IT Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">{service.title}</h3>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
              <Link key={index} to={service.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                </div>
                <ul className="space-y-2 mb-8">
=======
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
<<<<<<< HEAD
                  Get Quote
=======
                  Get Started
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                  <ArrowRight className="w-4 h-4 ml-2" />
=======
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                </div>
                <Link 
                  to={service.link} 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
                </Link>
              </div>
            ))}
          </div>
<<<<<<< HEAD
        </div>
      </section>
<<<<<<< HEAD

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver reliable, secure, and scalable IT solutions
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
=======
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed with our IT services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
=======
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
=======
      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure and accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
=======
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white flex items-center">
                    <DollarSign className="w-5 h-5 text-green-400 mr-1" />
                    {service.pricing}
                  </div>
                  <Link
                    to={service.link}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
              </div>
=======
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">{service.pricing}</span>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our IT solutions are designed to deliver reliability, security, and performance for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
              </div>
            ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
          </div>
        </div>
      </section>

=======

>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already using our IT services to drive growth and efficiency
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can help you build a robust, secure, and scalable technology foundation.
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your IT Transformation
              </Link>
              <Link
                to="/it-services#services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Services
              </Link>
=======
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
<<<<<<< HEAD
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Upgrade Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and let us help you build a robust IT foundation.
=======
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free IT consultation and discover how our services can improve your business operations.
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======

          {/* Additional Services */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Additional IT Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive IT support to keep your business running smoothly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-blue-400 font-semibold">{service.pricing}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our IT solutions are designed to deliver measurable results and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can help you achieve your goals and drive innovation.
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
<<<<<<< HEAD
<<<<<<< HEAD
                  Get Free Consultation
=======
                  Get Free IT Consultation
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
<<<<<<< HEAD
                  Learn More
=======
                  Learn About Us
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
          {/* Why Choose Us Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our IT Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of experience in cutting-edge technologies and best practices.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Proven Solutions</h3>
                <p className="text-gray-300">Battle-tested solutions that have helped hundreds of businesses achieve their technology goals.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring to ensure your systems run smoothly and securely.</p>
=======
                  Get Free Assessment
                </Link>
                <Link 
                  to="/micro-saas-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Micro SAAS
                </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Pricing
                </button>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Modernize Your IT?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can transform your technology infrastructure and drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
                </Link>
              </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/micro-saas-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Micro SAAS
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
      </section>
=======
      </main>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
      </section>
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
    </div>
<<<<<<< HEAD
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default ItServicesPage;
=======
export default ItServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
export default ITServicesPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
  )
}
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
export default ITServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
=======
export default ITServicesPage;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8af7
=======
export default ITServicesPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-8d34
