// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Server, 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Code, 
  Settings, 
  Monitor, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Smartphone,
  MessageSquare,
  Globe,
  Lock,
  Cpu,
  Target,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Users,
  FileText,
  CreditCard,
  Building,
  Wrench,
  Tool,
  Palette,
  BarChart3,
  Activity,
  Award,
  Bot,
  Briefcase,
  Calculator,
  Calendar,
  CheckSquare,
  Clipboard,
  Coffee,
  Compass,
  Download,
  Edit,
  Eye,
  Filter,
  Gamepad2,
  Heart,
  Home,
  Image,
  Key,
  Layers,
  Lightbulb,
  Link,
  Loader,
  Maximize,
  Minimize,
  Music,
  Package,
  Play,
  Plus,
  RefreshCw,
  Save,
  Send,
  Share,
  ShoppingBag,
  Star as StarIcon,
  Tag,
  ThumbsUp,
  Trash2,
  Upload,
  User,
  Volume2,
  Wifi,
  X,
  Youtube,
  Zoom,
  Truck,
  Headphones,
  Camera,
  Mic,
  Video,
  Battery,
  Wifi as WifiIcon
} from 'lucide-react';

export default function ComprehensiveItServices() {
  const title = 'Comprehensive IT Services — Zion Tech Group';
  const description = 'Professional IT services including cloud migration, cybersecurity, infrastructure management, and digital transformation solutions with transparent pricing and proven results.';

  const itServiceCategories = [
    {
      id: 'cloud-services',
      title: 'Cloud Services & Migration',
      icon: Cloud,
      color: 'blue',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud expertise',
      services: [
        {
          name: 'Cloud Migration & Strategy',
          description: 'Complete cloud migration strategy with automated tools and zero-downtime deployment',
          features: [
            'Comprehensive cloud readiness assessment',
            'Automated migration tools and scripts',
            'Zero-downtime migration strategies',
            'Multi-cloud architecture design',
            'Cost optimization and monitoring',
            '24/7 migration support and monitoring'
          ],
          pricing: '$5,000 - $50,000/project',
          delivery: '2-8 weeks',
          benefits: [
            '40% reduction in infrastructure costs',
            '99.9% uptime guarantee',
            'Automated scaling and optimization',
            'Enhanced security and compliance'
          ],
          useCases: ['Enterprise companies', 'Startups', 'Government agencies', 'Healthcare organizations'],
          marketSize: '$83.2B cloud services market',
          roi: 'Average 280% ROI within 6 months'
        },
        {
          name: 'Cloud Infrastructure Management',
          description: '24/7 cloud infrastructure monitoring, optimization, and management services',
          features: [
            '24/7 infrastructure monitoring',
            'Automated scaling and optimization',
            'Security monitoring and compliance',
            'Backup and disaster recovery',
            'Performance optimization',
            'Cost management and reporting'
          ],
          pricing: '$2,000 - $15,000/month',
          delivery: '1-2 weeks',
          benefits: [
            '99.9% uptime guarantee',
            '30% reduction in cloud costs',
            'Automated infrastructure management',
            'Proactive issue resolution'
          ],
          useCases: ['SaaS companies', 'E-commerce platforms', 'Enterprise organizations', 'Government agencies'],
          marketSize: '$28.6B cloud infrastructure management market',
          roi: 'Average 350% ROI within 8 months'
        },
        {
          name: 'DevOps & CI/CD Implementation',
          description: 'Complete DevOps transformation with automated pipelines and deployment strategies',
          features: [
            'CI/CD pipeline setup and optimization',
            'Infrastructure as Code (IaC) implementation',
            'Container orchestration with Kubernetes',
            'Automated testing and deployment',
            'Monitoring and logging solutions',
            'Security scanning and compliance'
          ],
          pricing: '$8,000 - $40,000/project',
          delivery: '3-6 weeks',
          benefits: [
            '80% reduction in deployment time',
            '90% improvement in code quality',
            'Automated testing and deployment',
            'Enhanced team productivity'
          ],
          useCases: ['Software companies', 'Startups', 'Enterprise IT', 'Government agencies'],
          marketSize: '$12.8B DevOps tools market',
          roi: 'Average 420% ROI within 10 months'
        }
      ]
    },
    {
      id: 'cybersecurity-services',
      title: 'Cybersecurity Services',
      icon: Shield,
      color: 'red',
      description: 'Comprehensive cybersecurity solutions with advanced threat detection and compliance',
      services: [
        {
          name: 'Security Assessment & Penetration Testing',
          description: 'Comprehensive security assessment with automated vulnerability scanning and manual penetration testing',
          features: [
            'Automated vulnerability scanning',
            'Manual penetration testing',
            'Social engineering assessments',
            'Network security analysis',
            'Web application security testing',
            'Compliance gap analysis'
          ],
          pricing: '$3,000 - $25,000/assessment',
          delivery: '1-3 weeks',
          benefits: [
            'Complete security posture analysis',
            'Identified vulnerabilities and risks',
            'Compliance readiness assessment',
            'Actionable remediation plan'
          ],
          useCases: ['Financial institutions', 'Healthcare organizations', 'Government agencies', 'Enterprise companies'],
          marketSize: '$366.1B cybersecurity market',
          roi: 'Average 680% ROI within 12 months'
        },
        {
          name: 'Managed Security Services (MSS)',
          description: '24/7 security monitoring, incident response, and threat management services',
          features: [
            '24/7 Security Operations Center (SOC)',
            'Real-time threat detection and response',
            'Incident response and forensics',
            'Vulnerability management',
            'Security awareness training',
            'Compliance monitoring and reporting'
          ],
          pricing: '$2,500 - $20,000/month',
          delivery: '1-2 weeks',
          benefits: [
            '99.9% threat detection accuracy',
            'Average 15-minute incident response',
            'Automated security monitoring',
            'Comprehensive compliance support'
          ],
          useCases: ['Enterprise organizations', 'Healthcare systems', 'Financial institutions', 'Government agencies'],
          marketSize: '$28.5B managed security services market',
          roi: 'Average 520% ROI within 8 months'
        },
        {
          name: 'Compliance & Risk Management',
          description: 'Comprehensive compliance management for GDPR, HIPAA, SOX, PCI-DSS, and industry standards',
          features: [
            'Compliance gap analysis and remediation',
            'Policy development and implementation',
            'Risk assessment and management',
            'Audit preparation and support',
            'Employee training and awareness',
            'Continuous compliance monitoring'
          ],
          pricing: '$5,000 - $35,000/project',
          delivery: '2-6 weeks',
          benefits: [
            '90% reduction in compliance costs',
            '95% improvement in audit readiness',
            'Automated compliance monitoring',
            'Reduced regulatory risks'
          ],
          useCases: ['Healthcare providers', 'Financial services', 'Government agencies', 'Enterprise organizations'],
          marketSize: '$28.5B compliance management market',
          roi: 'Average 420% ROI within 8 months'
        }
      ]
    },
    {
      id: 'infrastructure-services',
      title: 'Infrastructure Services',
      icon: Server,
      color: 'green',
      description: 'Complete infrastructure management with monitoring, optimization, and support',
      services: [
        {
          name: 'Infrastructure Design & Implementation',
          description: 'Complete infrastructure design and implementation with high availability and scalability',
          features: [
            'Infrastructure architecture design',
            'High availability and disaster recovery',
            'Load balancing and clustering',
            'Storage and backup solutions',
            'Network design and implementation',
            'Security hardening and configuration'
          ],
          pricing: '$10,000 - $100,000/project',
          delivery: '4-12 weeks',
          benefits: [
            '99.9% uptime guarantee',
            'Scalable and resilient infrastructure',
            'Optimized performance and efficiency',
            'Enhanced security and compliance'
          ],
          useCases: ['Enterprise companies', 'Government agencies', 'Healthcare organizations', 'Financial institutions'],
          marketSize: '$18.4B infrastructure services market',
          roi: 'Average 380% ROI within 10 months'
        },
        {
          name: 'Managed IT Services',
          description: 'Complete IT infrastructure management with 24/7 monitoring and support',
          features: [
            '24/7 infrastructure monitoring',
            'Proactive maintenance and updates',
            'Help desk and user support',
            'Backup and disaster recovery',
            'Security monitoring and management',
            'Performance optimization and tuning'
          ],
          pricing: '$3,000 - $25,000/month',
          delivery: '1-2 weeks',
          benefits: [
            '95% reduction in downtime',
            'Automated issue resolution',
            'Proactive maintenance',
            'Enhanced system performance'
          ],
          useCases: ['Small businesses', 'Mid-size companies', 'Enterprise organizations', 'Government agencies'],
          marketSize: '$35.2B managed IT services market',
          roi: 'Average 320% ROI within 6 months'
        },
        {
          name: 'Network Design & Management',
          description: 'Complete network infrastructure design, implementation, and management services',
          features: [
            'Network architecture design',
            'Wireless network implementation',
            'Network security and monitoring',
            'Performance optimization',
            'VLAN and routing configuration',
            'Network documentation and training'
          ],
          pricing: '$5,000 - $40,000/project',
          delivery: '2-6 weeks',
          benefits: [
            'Enhanced network performance',
            'Improved security and reliability',
            'Scalable network architecture',
            'Automated network management'
          ],
          useCases: ['Enterprise organizations', 'Educational institutions', 'Healthcare systems', 'Government agencies'],
          marketSize: '$15.6B network services market',
          roi: 'Average 350% ROI within 8 months'
        }
      ]
    },
    {
      id: 'data-services',
      title: 'Data Services & Analytics',
      icon: Database,
      color: 'purple',
      description: 'Complete data management solutions with analytics and business intelligence',
      services: [
        {
          name: 'Data Migration & Integration',
          description: 'Complete data migration and integration services with ETL/ELT pipelines and data validation',
          features: [
            'Data assessment and mapping',
            'ETL/ELT pipeline development',
            'Data quality validation and cleansing',
            'Real-time data integration',
            'Data warehouse design and implementation',
            'Data governance and documentation'
          ],
          pricing: '$8,000 - $60,000/project',
          delivery: '3-8 weeks',
          benefits: [
            '99.9% data accuracy',
            'Automated data processing',
            'Real-time data integration',
            'Enhanced data quality'
          ],
          useCases: ['Enterprise companies', 'Healthcare organizations', 'Financial institutions', 'Government agencies'],
          marketSize: '$22.4B data integration market',
          roi: 'Average 450% ROI within 12 months'
        },
        {
          name: 'Business Intelligence & Analytics',
          description: 'Complete BI solution with data visualization, reporting, and analytics dashboards',
          features: [
            'Data warehouse design and implementation',
            'ETL/ELT pipeline development',
            'Interactive dashboards and reports',
            'Self-service analytics platform',
            'Data visualization and storytelling',
            'Mobile-responsive analytics'
          ],
          pricing: '$10,000 - $80,000/project',
          delivery: '4-10 weeks',
          benefits: [
            '300% faster decision making',
            '90% reduction in report generation time',
            'Self-service analytics capabilities',
            'Real-time business insights'
          ],
          useCases: ['C-level executives', 'Data analysts', 'Business managers', 'Operations teams'],
          marketSize: '$33.3B business intelligence market',
          roi: 'Average 520% ROI within 10 months'
        },
        {
          name: 'Data Backup & Disaster Recovery',
          description: 'Comprehensive backup and disaster recovery solutions with automated testing and monitoring',
          features: [
            'Automated backup scheduling',
            'Multi-tier backup strategies',
            'Disaster recovery planning',
            'Backup testing and validation',
            'Recovery time objective (RTO) optimization',
            'Compliance and audit support'
          ],
          pricing: '$2,000 - $20,000/month',
          delivery: '1-3 weeks',
          benefits: [
            '99.9% data recovery success rate',
            'Automated backup and recovery',
            'Reduced downtime and data loss',
            'Compliance-ready solutions'
          ],
          useCases: ['Enterprise organizations', 'Healthcare systems', 'Financial institutions', 'Government agencies'],
          marketSize: '$12.8B backup and recovery market',
          roi: 'Average 680% ROI within 12 months'
        }
      ]
    },
    {
      id: 'software-development',
      title: 'Software Development Services',
      icon: Code,
      color: 'orange',
      description: 'Custom software development with modern technologies and agile methodologies',
      services: [
        {
          name: 'Custom Software Development',
          description: 'Full-stack software development with modern technologies and agile methodologies',
          features: [
            'Full-stack web application development',
            'Mobile app development (iOS/Android)',
            'API development and integration',
            'Database design and optimization',
            'UI/UX design and implementation',
            'Quality assurance and testing'
          ],
          pricing: '$15,000 - $200,000/project',
          delivery: '6-20 weeks',
          benefits: [
            'Custom solutions tailored to business needs',
            'Modern technology stack',
            'Scalable and maintainable code',
            'Comprehensive testing and quality assurance'
          ],
          useCases: ['Startups', 'Mid-size companies', 'Enterprise organizations', 'Government agencies'],
          marketSize: '$520B software development market',
          roi: 'Average 380% ROI within 12 months'
        },
        {
          name: 'Legacy System Modernization',
          description: 'Modernization of legacy systems with microservices architecture and cloud migration',
          features: [
            'Legacy system assessment and planning',
            'Microservices architecture design',
            'API modernization and integration',
            'Database migration and optimization',
            'User interface modernization',
            'Performance optimization and testing'
          ],
          pricing: '$25,000 - $150,000/project',
          delivery: '8-16 weeks',
          benefits: [
            'Improved system performance',
            'Enhanced scalability and flexibility',
            'Reduced maintenance costs',
            'Modern technology stack'
          ],
          useCases: ['Enterprise organizations', 'Government agencies', 'Financial institutions', 'Healthcare systems'],
          marketSize: '$45.2B legacy modernization market',
          roi: 'Average 420% ROI within 18 months'
        },
        {
          name: 'API Development & Integration',
          description: 'RESTful API development and third-party integration services',
          features: [
            'RESTful API design and development',
            'GraphQL API implementation',
            'Third-party API integration',
            'API documentation and testing',
            'API security and authentication',
            'Performance optimization and monitoring'
          ],
          pricing: '$8,000 - $50,000/project',
          delivery: '2-6 weeks',
          benefits: [
            'Seamless system integration',
            'Enhanced system interoperability',
            'Improved data flow and efficiency',
            'Comprehensive API documentation'
          ],
          useCases: ['SaaS companies', 'E-commerce platforms', 'Enterprise organizations', 'Government agencies'],
          marketSize: '$8.6B API management market',
          roi: 'Average 350% ROI within 8 months'
        }
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: Rocket,
      color: 'cyan',
      description: 'Complete digital transformation with process automation and technology modernization',
      services: [
        {
          name: 'Digital Strategy & Consulting',
          description: 'Comprehensive digital transformation strategy with technology roadmap and implementation planning',
          features: [
            'Digital maturity assessment',
            'Technology roadmap development',
            'Process optimization and automation',
            'Change management and training',
            'ROI analysis and business case development',
            'Implementation planning and execution'
          ],
          pricing: '$15,000 - $100,000/project',
          delivery: '4-12 weeks',
          benefits: [
            'Clear digital transformation roadmap',
            'Optimized business processes',
            'Enhanced operational efficiency',
            'Improved customer experience'
          ],
          useCases: ['Enterprise organizations', 'Government agencies', 'Healthcare systems', 'Financial institutions'],
          marketSize: '$65.8B digital transformation market',
          roi: 'Average 450% ROI within 18 months'
        },
        {
          name: 'Process Automation & RPA',
          description: 'Robotic Process Automation (RPA) implementation with intelligent automation solutions',
          features: [
            'Process assessment and optimization',
            'RPA bot development and deployment',
            'Workflow automation and orchestration',
            'Integration with existing systems',
            'Monitoring and maintenance',
            'Training and documentation'
          ],
          pricing: '$10,000 - $80,000/project',
          delivery: '3-8 weeks',
          benefits: [
            '80% reduction in manual processes',
            '90% improvement in process accuracy',
            'Automated workflow optimization',
            'Enhanced operational efficiency'
          ],
          useCases: ['Financial services', 'Healthcare organizations', 'Government agencies', 'Enterprise companies'],
          marketSize: '$18.4B RPA market',
          roi: 'Average 520% ROI within 10 months'
        },
        {
          name: 'Enterprise Resource Planning (ERP)',
          description: 'Complete ERP implementation with customization, integration, and training services',
          features: [
            'ERP system selection and evaluation',
            'Customization and configuration',
            'Data migration and integration',
            'User training and change management',
            'Go-live support and optimization',
            'Ongoing maintenance and support'
          ],
          pricing: '$25,000 - $200,000/project',
          delivery: '8-20 weeks',
          benefits: [
            'Integrated business processes',
            'Real-time data and reporting',
            'Enhanced operational efficiency',
            'Improved decision making'
          ],
          useCases: ['Manufacturing companies', 'Distribution companies', 'Service organizations', 'Government agencies'],
          marketSize: '$48.8B ERP software market',
          roi: 'Average 380% ROI within 15 months'
        }
      ]
    },
    {
      id: 'support-services',
      title: 'IT Support & Maintenance',
      icon: Wrench,
      color: 'amber',
      description: 'Comprehensive IT support services with proactive monitoring and maintenance',
      services: [
        {
          name: '24/7 IT Help Desk Support',
          description: 'Round-the-clock IT support with remote assistance and issue resolution',
          features: [
            '24/7 help desk support',
            'Remote desktop assistance',
            'Software installation and configuration',
            'Hardware troubleshooting and repair',
            'User account management',
            'Incident tracking and reporting'
          ],
          pricing: '$1,500 - $12,000/month',
          delivery: '1 week',
          benefits: [
            '99% issue resolution rate',
            'Average 15-minute response time',
            'Reduced downtime and productivity loss',
            'Comprehensive support coverage'
          ],
          useCases: ['Small businesses', 'Mid-size companies', 'Enterprise organizations', 'Government agencies'],
          marketSize: '$35.2B IT support services market',
          roi: 'Average 280% ROI within 4 months'
        },
        {
          name: 'Proactive IT Monitoring & Maintenance',
          description: 'Proactive IT monitoring with automated maintenance and issue prevention',
          features: [
            '24/7 system monitoring',
            'Automated maintenance scheduling',
            'Performance optimization',
            'Security patch management',
            'Backup monitoring and validation',
            'Capacity planning and scaling'
          ],
          pricing: '$2,000 - $15,000/month',
          delivery: '1 week',
          benefits: [
            '95% reduction in system downtime',
            'Proactive issue prevention',
            'Automated maintenance',
            'Enhanced system performance'
          ],
          useCases: ['Enterprise organizations', 'Healthcare systems', 'Financial institutions', 'Government agencies'],
          marketSize: '$18.4B IT monitoring market',
          roi: 'Average 350% ROI within 6 months'
        },
        {
          name: 'IT Asset Management',
          description: 'Complete IT asset lifecycle management with inventory tracking and optimization',
          features: [
            'IT asset inventory and tracking',
            'Asset lifecycle management',
            'Software license management',
            'Hardware maintenance scheduling',
            'Asset disposal and recycling',
            'Compliance and audit support'
          ],
          pricing: '$1,000 - $8,000/month',
          delivery: '1-2 weeks',
          benefits: [
            'Complete asset visibility',
            'Optimized asset utilization',
            'Reduced compliance risks',
            'Cost optimization'
          ],
          useCases: ['Enterprise organizations', 'Government agencies', 'Educational institutions', 'Healthcare systems'],
          marketSize: '$12.8B IT asset management market',
          roi: 'Average 320% ROI within 6 months'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, infrastructure management, digital transformation, managed services" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-it-services" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Server className="h-8 w-8 text-cyan-400 mr-3" />
              <span className="text-lg font-semibold text-cyan-400">Professional IT Services</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Comprehensive IT Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              {description} Our IT services deliver measurable value with proven methodologies and industry expertise.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Proven Methodologies</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Industry Expertise</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        {itServiceCategories.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;
          return (
            <section key={category.id} className="container mx-auto px-6 py-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <CategoryIcon className="h-8 w-8 text-cyan-400 mr-3" />
                  <span className="text-lg font-semibold text-cyan-400">{category.title}</span>
                </div>
                <p className="text-blue-100 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-slate-300 mb-4">{service.description}</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-slate-300">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-xs text-slate-400 ml-5">
                              +{service.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-fuchsia-400 mb-2">Proven Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-slate-300">
                              <TrendingUp className="w-3 h-3 text-fuchsia-400 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="text-left">
                        <div className="text-lg font-semibold text-cyan-400">{service.pricing}</div>
                        <div className="text-sm text-slate-400">{service.delivery} delivery</div>
                        <div className="text-xs text-green-400 mt-1">{service.roi}</div>
                      </div>
                      <a 
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="pt-4 border-t border-slate-700/50">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {service.useCases.map((useCase, idx) => (
                          <span key={idx} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                            {useCase}
                          </span>
                        ))}
                      </div>
                      <div className="text-xs text-slate-400">{service.marketSize}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Contact Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Get a custom IT solution proposal tailored to your business needs. Most projects start with a comprehensive IT assessment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>
                <p className="text-sm text-slate-300">Deploy IT solutions in 1-12 weeks with our proven methodologies</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven ROI</h3>
                <p className="text-sm text-slate-300">Average 380% ROI within first year of implementation</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-fuchsia-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-sm text-slate-300">24/7 support from certified IT professionals and engineers</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a 
                  href="tel:+13024640950" 
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-sm text-slate-400 space-y-2">
                <p>364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">https://ziontechgroup.com</a></p>
                <p className="text-xs text-slate-500">Available 24/7 for enterprise clients • Free consultation for projects over $10K</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}