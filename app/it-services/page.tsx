'use client';
import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Lock, 
  BarChart, 
  Users, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Zap,
  Cpu,
  HardDrive,
  Wifi,
  Server,
  Code,
  Globe,
  Target,
  TrendingUp,
  Award,
  DollarSign,
  Clock as ClockIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  TrendingUp as TrendingUpIcon,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Compass,
  Navigation as NavIcon,
  PieChart,
  Activity,
  Rocket,
  Sparkles,
  MessageSquare,
  FileText,
  Eye,
  Mic,
  Video,
  Camera,
  Music,
  Palette,
  ShoppingCart,
  CreditCard,
  Building as BuildingIcon,
  Factory as FactoryIcon,
  Car as CarIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Train as TrainIcon,
  Home as HomeIcon,
  Heart as HeartIcon,
  Stethoscope as StethoscopeIcon,
  GraduationCap as GraduationCapIcon,
  Briefcase as BriefcaseIcon,
  Wrench as WrenchIcon,
  Hammer as HammerIcon,
  Paintbrush as PaintbrushIcon,
  Scissors as ScissorsIcon,
  BookOpen as BookOpenIcon,
  Calculator as CalculatorIcon,
  Calendar as CalendarIcon,
  Compass as CompassIcon,
  Navigation as NavigationIcon,
  PieChart as PieChartIcon,
  TrendingDown,
  Activity as ActivityIcon,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone as SmartphoneIcon,
  ChefHat,
  Rocket as RocketIcon,
  Sprout,
  Scale
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServiceCategories = [
    {
      category: 'Cloud Infrastructure & Migration',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'Cloud Migration & Setup',
          description: 'Seamless migration to AWS, Azure, or GCP with zero downtime and optimized performance. Trusted by 500+ enterprises.',
          features: ['Multi-cloud Strategy', 'Hybrid Cloud Solutions', 'Cost Optimization', 'Security Implementation', 'Performance Tuning'],
          pricing: 'Starting at $10,000',
          trial: 'Free consultation',
          timeline: '2-8 weeks',
          link: 'https://ziontechgroup.com/cloud-migration',
          popular: true,
          capabilities: [
            'Zero-downtime migration',
            'Cost optimization analysis',
            'Security compliance',
            'Performance monitoring'
          ]
        },
        {
          name: 'IT Infrastructure Design',
          description: 'Scalable and secure infrastructure architecture tailored to your business needs. Built for enterprise scale.',
          features: ['Network Design', 'Server Configuration', 'Load Balancing', 'Disaster Recovery', 'Scalability Planning'],
          pricing: 'Starting at $15,000',
          trial: 'Free assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/it-infrastructure',
          popular: true,
          capabilities: [
            'Enterprise architecture design',
            'High availability setup',
            'Disaster recovery planning',
            'Scalability optimization'
          ]
        },
        {
          name: 'Database Management & Optimization',
          description: 'Comprehensive database administration with performance tuning and security hardening. 99.9% uptime guarantee.',
          features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring', 'Scalability'],
          pricing: 'Starting at $5,000/month',
          trial: 'Free health check',
          timeline: 'Ongoing',
          link: 'https://ziontechgroup.com/database-management',
          popular: false,
          capabilities: [
            'Performance optimization',
            'Automated backup systems',
            'Security vulnerability assessment',
            'Real-time monitoring'
          ]
        },
        {
          name: 'Cloud Cost Optimization',
          description: 'Reduce cloud costs by up to 40% with intelligent resource management and optimization. Save $50K+ annually.',
          features: ['Cost Analysis', 'Resource Optimization', 'Auto-scaling', 'Reserved Instances', 'Cost Monitoring'],
          pricing: 'Starting at $3,000',
          trial: 'Free audit',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/cloud-optimization',
          popular: false,
          capabilities: [
            'Cost analysis and reporting',
            'Resource right-sizing',
            'Automated scaling policies',
            'Cost anomaly detection'
          ]
        }
      ]
    },
    {
      category: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'Enterprise Cybersecurity Suite',
          description: 'Comprehensive security solutions with 24/7 monitoring and threat detection. Zero security breaches guaranteed.',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing'],
          pricing: 'Starting at $8,000/month',
          trial: 'Free security audit',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/cybersecurity',
          popular: true,
          capabilities: [
            'Advanced threat detection',
            'Real-time security monitoring',
            'Automated incident response',
            'Compliance reporting'
          ]
        },
        {
          name: 'Compliance Management Platform',
          description: 'Ensure compliance with GDPR, HIPAA, SOX, and other industry regulations. 100% compliance guarantee.',
          features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Support', 'Policy Management'],
          pricing: 'Starting at $12,000',
          trial: 'Free compliance check',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/compliance-management',
          popular: true,
          capabilities: [
            'Regulatory compliance mapping',
            'Automated compliance monitoring',
            'Audit preparation support',
            'Policy management system'
          ]
        },
        {
          name: 'Security Awareness Training',
          description: 'Comprehensive employee security training with phishing simulation and assessment. Reduce human error by 80%.',
          features: ['Phishing Simulation', 'Security Workshops', 'Policy Development', 'Assessment', 'Certification'],
          pricing: 'Starting at $3,000',
          trial: 'Free training session',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/security-training',
          popular: false,
          capabilities: [
            'Interactive training modules',
            'Phishing simulation campaigns',
            'Security awareness assessment',
            'Certification tracking'
          ]
        },
        {
          name: 'Zero Trust Security Architecture',
          description: 'Implement zero trust security model with identity verification and micro-segmentation. Maximum security posture.',
          features: ['Identity Verification', 'Micro-segmentation', 'Device Management', 'Access Control', 'Continuous Monitoring'],
          pricing: 'Starting at $15,000',
          trial: 'Free assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/zero-trust',
          popular: false,
          capabilities: [
            'Identity-based access control',
            'Network micro-segmentation',
            'Device trust verification',
            'Continuous security monitoring'
          ]
        }
      ]
    },
    {
      category: 'IT Support & Management',
      icon: Settings,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: '24/7 IT Support & Monitoring',
          description: 'Round-the-clock technical support with proactive monitoring and maintenance. 15-minute response time guarantee.',
          features: ['Help Desk Support', 'Remote Monitoring', 'Proactive Maintenance', 'Emergency Response', 'SLA Guarantee'],
          pricing: 'Starting at $2,000/month',
          trial: 'Free trial month',
          timeline: 'Immediate',
          link: 'https://ziontechgroup.com/it-support',
          popular: true,
          capabilities: [
            '24/7 help desk support',
            'Proactive system monitoring',
            'Remote troubleshooting',
            'Emergency response team'
          ]
        },
        {
          name: 'System Administration Services',
          description: 'Complete system administration with user management and performance optimization. 99.9% uptime guarantee.',
          features: ['User Management', 'System Updates', 'Performance Monitoring', 'Backup Management', 'Patch Management'],
          pricing: 'Starting at $4,000/month',
          trial: 'Free assessment',
          timeline: 'Ongoing',
          link: 'https://ziontechgroup.com/system-administration',
          popular: true,
          capabilities: [
            'User account management',
            'Automated system updates',
            'Performance optimization',
            'Backup and recovery management'
          ]
        },
        {
          name: 'IT Strategic Consulting',
          description: 'Strategic IT planning and technology consulting for digital transformation. Drive innovation and growth.',
          features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Budget Planning', 'Digital Transformation'],
          pricing: 'Starting at $200/hour',
          trial: 'Free consultation',
          timeline: 'As needed',
          link: 'https://ziontechgroup.com/it-consulting',
          popular: false,
          capabilities: [
            'Technology roadmap development',
            'Vendor evaluation and selection',
            'Budget optimization',
            'Digital transformation strategy'
          ]
        },
        {
          name: 'IT Asset Management',
          description: 'Comprehensive IT asset lifecycle management with tracking and optimization. Reduce costs by 30%.',
          features: ['Asset Tracking', 'Lifecycle Management', 'License Management', 'Cost Optimization', 'Disposal Services'],
          pricing: 'Starting at $1,500/month',
          trial: 'Free inventory',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/asset-management',
          popular: false,
          capabilities: [
            'Asset inventory management',
            'Lifecycle tracking',
            'License compliance monitoring',
            'Cost optimization analysis'
          ]
        }
      ]
    },
    {
      category: 'Software Development & Integration',
      icon: Code,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'Custom Software Development',
          description: 'Tailored software solutions built with modern technologies and best practices. 100% custom development.',
          features: ['Web Applications', 'Mobile Apps', 'API Development', 'Integration Services', 'Quality Assurance'],
          pricing: 'Starting at $15,000',
          trial: 'Free consultation',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/custom-development',
          popular: true,
          capabilities: [
            'Full-stack development',
            'Mobile app development',
            'API design and development',
            'Quality assurance testing'
          ]
        },
        {
          name: 'System Integration & APIs',
          description: 'Connect and integrate disparate systems with robust API development and management. Seamless connectivity.',
          features: ['API Integration', 'Data Migration', 'Workflow Automation', 'Legacy System Modernization', 'API Management'],
          pricing: 'Starting at $8,000',
          trial: 'Free integration assessment',
          timeline: '3-8 weeks',
          link: 'https://ziontechgroup.com/system-integration',
          popular: true,
          capabilities: [
            'API development and integration',
            'Data migration services',
            'Workflow automation',
            'Legacy system modernization'
          ]
        },
        {
          name: 'DevOps & CI/CD Implementation',
          description: 'Streamline development and deployment with automated testing and continuous integration. Deploy 10x faster.',
          features: ['Automated Testing', 'Continuous Integration', 'Deployment Automation', 'Monitoring', 'Infrastructure as Code'],
          pricing: 'Starting at $6,000',
          trial: 'Free DevOps audit',
          timeline: '2-6 weeks',
          link: 'https://ziontechgroup.com/devops-cicd',
          popular: true,
          capabilities: [
            'CI/CD pipeline setup',
            'Automated testing frameworks',
            'Infrastructure automation',
            'Deployment monitoring'
          ]
        },
        {
          name: 'Legacy System Modernization',
          description: 'Modernize legacy systems with cloud migration and technology updates. Future-proof your infrastructure.',
          features: ['Legacy Assessment', 'Cloud Migration', 'Technology Updates', 'Data Migration', 'User Training'],
          pricing: 'Starting at $20,000',
          trial: 'Free modernization plan',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/legacy-modernization',
          popular: false,
          capabilities: [
            'Legacy system assessment',
            'Cloud migration strategy',
            'Technology stack updates',
            'Data migration services'
          ]
        }
      ]
    },
    {
      category: 'Network & Infrastructure',
      icon: Wifi,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        {
          name: 'Network Design & Implementation',
          description: 'Secure and scalable network infrastructure with wireless and wired solutions. Enterprise-grade networking.',
          features: ['Network Design', 'Wireless Solutions', 'Security Implementation', 'Performance Optimization', 'Monitoring'],
          pricing: 'Starting at $12,000',
          trial: 'Free network assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-design',
          popular: true,
          capabilities: [
            'Network architecture design',
            'Wireless network deployment',
            'Security implementation',
            'Performance optimization'
          ]
        },
        {
          name: 'Disaster Recovery & Backup',
          description: 'Comprehensive disaster recovery solutions with automated backup and recovery testing. 99.9% recovery guarantee.',
          features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Testing', 'Documentation'],
          pricing: 'Starting at $5,000',
          trial: 'Free DR assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/disaster-recovery',
          popular: false,
          capabilities: [
            'Automated backup systems',
            'Disaster recovery planning',
            'Business continuity testing',
            'Recovery documentation'
          ]
        },
        {
          name: 'IT Performance Monitoring',
          description: 'Real-time monitoring and alerting for IT infrastructure and applications. Proactive issue resolution.',
          features: ['Real-time Monitoring', 'Performance Metrics', 'Alerting', 'Reporting', 'Capacity Planning'],
          pricing: 'Starting at $3,000/month',
          trial: 'Free monitoring setup',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/performance-monitoring',
          popular: false,
          capabilities: [
            'Real-time system monitoring',
            'Performance metrics tracking',
            'Automated alerting',
            'Capacity planning analysis'
          ]
        }
      ]
    }
  ];

  const categories = ['all', ...itServiceCategories.map(cat => cat.category)];

  const benefits = [
    {
      icon: TrendingUp,
      stat: '40%',
      title: 'Performance Improvement',
      description: 'Our clients see significant improvement in system performance and efficiency'
    },
    {
      icon: Clock,
      stat: '15 min',
      title: 'Response Time',
      description: 'Average response time for critical IT issues and support requests'
    },
    {
      icon: DollarSign,
      stat: '60%',
      title: 'Cost Reduction',
      description: 'Reduce IT costs through optimization and efficient resource management'
    },
    {
      icon: Shield,
      stat: '100%',
      title: 'Security',
      description: 'Zero security breaches with our comprehensive security approach'
    }
  ];

  const technologies = [
    {
      category: 'Cloud Platforms',
      icon: Cloud,
      techs: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud']
    },
    {
      category: 'Security Tools',
      icon: Shield,
      techs: ['CrowdStrike', 'Palo Alto', 'Cisco', 'Fortinet', 'Splunk']
    },
    {
      category: 'Databases',
      icon: Database,
      techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      category: 'Monitoring',
      icon: BarChart,
      techs: ['Datadog', 'New Relic', 'Prometheus', 'Grafana', 'Zabbix']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current IT infrastructure and needs',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create a detailed IT strategy aligned with your business goals',
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy solutions with minimal disruption to your operations',
      duration: '2-8 weeks'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Support & Monitoring',
      description: 'Ongoing support, monitoring, and continuous improvement',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      company: 'ManufacturingCorp',
      industry: 'Manufacturing',
      challenge: 'Outdated IT infrastructure causing production delays',
      solution: 'Complete infrastructure modernization and cloud migration',
      results: ['50% faster processing', '99.9% uptime', '40% cost reduction'],
      image: '/images/case-studies/manufacturing.jpg'
    },
    {
      company: 'FinanceFirst Bank',
      industry: 'Banking',
      challenge: 'Security vulnerabilities and compliance issues',
      solution: 'Comprehensive cybersecurity suite and compliance framework',
      results: ['Zero security incidents', '100% compliance', '60% faster audits'],
      image: '/images/case-studies/banking.jpg'
    },
    {
      company: 'RetailMax Stores',
      industry: 'Retail',
      challenge: 'Disconnected systems and poor customer experience',
      solution: 'System integration and unified platform development',
      results: ['30% improved efficiency', '25% better customer satisfaction', '200% ROI'],
      image: '/images/case-studies/retail.jpg'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServiceCategories.flatMap(cat => cat.services)
    : itServiceCategories.find(cat => cat.category === selectedCategory)?.services || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-3000"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">IT Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Comprehensive IT Services
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Enterprise-grade IT solutions that keep your business running smoothly, securely, and efficiently. From infrastructure to security, we've got you covered.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Cloud className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Cloud Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">24/7 Support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore IT Services
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 neon-text">{benefit.stat}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Services by Category */}
        {selectedCategory === 'all' ? (
          <div className={`space-y-16 mb-20 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {itServiceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative group">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Trial:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.trial}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Timeline:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.timeline}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={service.link}
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                        >
                          Learn More
                        </a>
                        <a
                          href="/contact"
                          className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative group">
                {service.popular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h4>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-3 mb-6">
                  <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Pricing:</span>
                    <span className="text-sm font-medium text-white">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Trial:</span>
                    <span className="text-sm font-medium text-cyan-400">{service.trial}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Timeline:</span>
                    <span className="text-sm font-medium text-cyan-400">{service.timeline}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className={`mb-20 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies in the industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.techs.map((technology, techIndex) => (
                    <div key={techIndex} className="text-sm text-gray-300 bg-slate-700/50 px-3 py-1 rounded">
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className={`mb-20 transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Our IT Implementation Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful IT implementation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {process.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg group hover:bg-slate-700/50 transition-all duration-300">
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className={`mb-20 transform transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">
                    {study.company.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their IT operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (302) 464-0950
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;