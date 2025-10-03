import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  Network, 
  Server, 
  BarChart3, 
  Settings, 
  Zap, 
  Monitor, 
  Search, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Users,
  Database,
  Globe,
  Smartphone,
  Lock,
  TrendingUp,
  Target,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Cpu,
  FileText,
  Camera,
  Mic,
  Eye,
  Heart,
  ShoppingCart,
  CreditCard,
  Building,
  Wrench,
  Layers,
  GitBranch,
  Container,
  Key,
  AlertTriangle,
  CheckSquare,
  PieChart,
  Activity,
  Zap as Lightning,
  Coins,
  Thermometer,
  Gauge,
  Truck,
  Bug,
  UserCheck,
  FileShield,
  LineChart,
  Scatter
} from 'lucide-react';

export default function EnhancedServicesCatalog() {
  const title = 'Comprehensive Services Catalog — Zion Tech Group';
  const description = 'Production-ready micro SaaS, AI, blockchain, IoT, cybersecurity, and data analytics solutions with transparent pricing, fast delivery, and proven ROI. Contact us for custom solutions.';

  const serviceCategories = [
    {
      name: 'Micro SaaS Solutions',
      description: 'Ready-to-deploy SaaS applications for businesses of all sizes',
      icon: Rocket,
      color: 'blue',
      services: [
        {
          name: 'AI-Powered Customer Support Automation',
          description: 'Intelligent chatbot with sentiment analysis, ticket routing, and escalation management',
          icon: MessageSquare,
          features: [
            'Natural language processing with 95% accuracy',
            'Multi-channel support (web, email, social media)',
            'Sentiment analysis and escalation triggers',
            'Integration with CRM and helpdesk systems',
            'Real-time analytics and performance metrics',
            'Custom training on your business data'
          ],
          pricing: '$1,200 - $8,500/month',
          delivery: '2-4 weeks',
          benefits: 'Reduce support costs by 60%, improve response time by 80%',
          marketPrice: '$2,000 - $15,000/month',
          link: '/services/micro-saas'
        },
        {
          name: 'Cloud Cost Optimization Platform',
          description: 'Automated cloud cost monitoring, rightsizing, and savings recommendations',
          icon: TrendingUp,
          features: [
            'Real-time cost anomaly detection',
            'Automated rightsizing recommendations',
            'Budget alerts and forecasting',
            'Multi-cloud support (AWS, Azure, GCP)',
            'Executive dashboards and reports',
            'ROI tracking and savings validation'
          ],
          pricing: '$299 - $2,500/month',
          delivery: '1-2 weeks',
          benefits: 'Average 35% cloud cost reduction, ROI within 3 months',
          marketPrice: '$500 - $5,000/month',
          link: '/services/micro-saas'
        },
        {
          name: 'Healthcare Appointment Scheduling System',
          description: 'Smart scheduling with patient management, reminders, and telemedicine integration',
          icon: Heart,
          features: [
            'Intelligent appointment scheduling',
            'Patient portal and self-service options',
            'Automated reminders and notifications',
            'Telemedicine integration',
            'Insurance verification',
            'HIPAA compliance and security'
          ],
          pricing: '$599 - $4,500/month',
          delivery: '3-5 weeks',
          benefits: 'Reduce no-shows by 40%, improve patient satisfaction',
          marketPrice: '$1,200 - $12,000/month',
          link: '/services/micro-saas'
        }
      ]
    },
    {
      name: 'AI & Machine Learning',
      description: 'Advanced AI solutions for automation, insights, and optimization',
      icon: Brain,
      color: 'purple',
      services: [
        {
          name: 'Computer Vision for Quality Control',
          description: 'AI-powered visual inspection for manufacturing, retail, and healthcare',
          icon: Eye,
          features: [
            'Real-time defect detection with 99.5% accuracy',
            'Custom model training for specific use cases',
            'Integration with existing production lines',
            'Automated reporting and analytics',
            'Edge deployment for low latency',
            'Continuous learning and improvement'
          ],
          pricing: '$3,500 - $25,000/month',
          delivery: '4-8 weeks',
          benefits: 'Reduce defects by 90%, improve quality consistency',
          marketPrice: '$5,000 - $50,000/month',
          link: '/services/ai-services'
        },
        {
          name: 'Natural Language Processing Platform',
          description: 'Advanced NLP for document analysis, sentiment, and content generation',
          icon: FileText,
          features: [
            'Document classification and extraction',
            'Sentiment analysis and opinion mining',
            'Content generation and summarization',
            'Language translation and localization',
            'Chatbot and virtual assistant development',
            'Custom model training and fine-tuning'
          ],
          pricing: '$2,500 - $18,000/month',
          delivery: '3-6 weeks',
          benefits: 'Automate document processing by 80%, improve customer experience',
          marketPrice: '$4,000 - $35,000/month',
          link: '/services/ai-services'
        },
        {
          name: 'Predictive Analytics & Forecasting',
          description: 'Machine learning models for sales forecasting, demand planning, and risk assessment',
          icon: BarChart3,
          features: [
            'Sales and demand forecasting',
            'Customer churn prediction',
            'Risk assessment and fraud detection',
            'Inventory optimization',
            'Price optimization models',
            'Real-time model monitoring and updates'
          ],
          pricing: '$4,000 - $30,000/month',
          delivery: '4-10 weeks',
          benefits: 'Increase revenue by 15-25%, reduce costs by 20-30%',
          marketPrice: '$6,000 - $60,000/month',
          link: '/services/ai-services'
        }
      ]
    },
    {
      name: 'Blockchain Solutions',
      description: 'Enterprise blockchain development with smart contracts and DeFi platforms',
      icon: Coins,
      color: 'yellow',
      services: [
        {
          name: 'Smart Contract Development',
          description: 'Secure, audited smart contracts for DeFi, NFTs, and enterprise applications',
          icon: Shield,
          features: [
            'Solidity, Rust, and Web3.js development',
            'Security audits and penetration testing',
            'Gas optimization and cost reduction',
            'Multi-signature wallet integration',
            'Upgradeable contract architecture',
            'Comprehensive testing and documentation'
          ],
          pricing: '$15,000 - $75,000/project',
          delivery: '4-8 weeks',
          benefits: 'Secure, audited contracts with 99.9% uptime guarantee',
          marketPrice: '$25,000 - $150,000/project',
          link: '/services/blockchain-solutions'
        },
        {
          name: 'DeFi Platform Development',
          description: 'Complete DeFi platforms including DEX, lending protocols, and yield farming',
          icon: TrendingUp,
          features: [
            'Decentralized exchange (DEX) development',
            'Lending and borrowing protocols',
            'Yield farming and staking mechanisms',
            'Liquidity pool management',
            'Cross-chain bridge integration',
            'Governance token implementation'
          ],
          pricing: '$50,000 - $300,000/project',
          delivery: '8-16 weeks',
          benefits: 'Launch successful DeFi protocols with proven tokenomics',
          marketPrice: '$100,000 - $500,000/project',
          link: '/services/blockchain-solutions'
        },
        {
          name: 'NFT Marketplace Development',
          description: 'Full-featured NFT marketplaces with minting, trading, and auction capabilities',
          icon: Camera,
          features: [
            'NFT minting and metadata management',
            'Auction and fixed-price listings',
            'Royalty distribution system',
            'Multi-payment support (ETH, USDC, etc.)',
            'Creator dashboard and analytics',
            'Mobile-responsive design'
          ],
          pricing: '$25,000 - $150,000/project',
          delivery: '6-12 weeks',
          benefits: 'Launch NFT marketplace with 2-5% transaction fees',
          marketPrice: '$50,000 - $250,000/project',
          link: '/services/blockchain-solutions'
        }
      ]
    },
    {
      name: 'IoT Solutions',
      description: 'Internet of Things solutions for industrial automation and smart monitoring',
      icon: Cpu,
      color: 'green',
      services: [
        {
          name: 'Smart Sensor Networks',
          description: 'Deploy and manage intelligent sensor networks for real-time data collection',
          icon: Thermometer,
          features: [
            'Multi-sensor data fusion and processing',
            'Edge computing and local analytics',
            'Real-time alerting and notifications',
            'Battery optimization and power management',
            'Wireless connectivity (LoRaWAN, NB-IoT, 5G)',
            'Cloud integration and data visualization'
          ],
          pricing: '$15,000 - $100,000/project',
          delivery: '6-12 weeks',
          benefits: 'Reduce monitoring costs by 70%, improve data accuracy by 95%',
          marketPrice: '$30,000 - $200,000/project',
          link: '/services/iot-solutions'
        },
        {
          name: 'Industrial IoT Platform',
          description: 'Complete IIoT platform for manufacturing, energy, and industrial automation',
          icon: Settings,
          features: [
            'Equipment monitoring and predictive maintenance',
            'Production line optimization',
            'Energy consumption tracking',
            'Quality control and defect detection',
            'Safety monitoring and compliance',
            'Integration with existing ERP/MES systems'
          ],
          pricing: '$50,000 - $500,000/project',
          delivery: '12-24 weeks',
          benefits: 'Increase productivity by 25%, reduce downtime by 60%',
          marketPrice: '$100,000 - $1,000,000/project',
          link: '/services/iot-solutions'
        },
        {
          name: 'Fleet Management System',
          description: 'Real-time vehicle tracking, maintenance scheduling, and driver behavior monitoring',
          icon: Truck,
          features: [
            'GPS tracking and route optimization',
            'Fuel consumption monitoring',
            'Driver behavior analysis and safety scoring',
            'Predictive maintenance scheduling',
            'Geofencing and alerts',
            'Mobile app for drivers and managers'
          ],
          pricing: '$20,000 - $150,000/project',
          delivery: '6-12 weeks',
          benefits: 'Reduce fuel costs by 20%, improve safety by 40%',
          marketPrice: '$40,000 - $300,000/project',
          link: '/services/iot-solutions'
        }
      ]
    },
    {
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from cyber threats',
      icon: Shield,
      color: 'red',
      services: [
        {
          name: 'Penetration Testing & Security Audits',
          description: 'Comprehensive security assessments to identify vulnerabilities',
          icon: Bug,
          features: [
            'Web application penetration testing',
            'Network infrastructure security assessment',
            'Social engineering and phishing simulations',
            'Mobile application security testing',
            'Cloud security configuration review',
            'Detailed remediation recommendations'
          ],
          pricing: '$5,000 - $50,000/project',
          delivery: '2-6 weeks',
          benefits: 'Identify and fix vulnerabilities before attackers exploit them',
          marketPrice: '$10,000 - $100,000/project',
          link: '/services/cybersecurity-solutions'
        },
        {
          name: 'Security Operations Center (SOC)',
          description: '24/7 threat monitoring, detection, and response',
          icon: Eye,
          features: [
            'Real-time threat monitoring and analysis',
            'Security Information and Event Management (SIEM)',
            'Automated incident response workflows',
            'Threat intelligence integration',
            'Vulnerability management and patching',
            'Compliance reporting and documentation'
          ],
          pricing: '$15,000 - $100,000/month',
          delivery: '4-8 weeks',
          benefits: 'Detect and respond to threats 24/7, reduce incident response time by 80%',
          marketPrice: '$30,000 - $200,000/month',
          link: '/services/cybersecurity-solutions'
        },
        {
          name: 'Identity & Access Management (IAM)',
          description: 'Secure user authentication, authorization, and access control',
          icon: UserCheck,
          features: [
            'Multi-factor authentication (MFA) implementation',
            'Single Sign-On (SSO) solutions',
            'Privileged Access Management (PAM)',
            'Role-based access control (RBAC)',
            'Identity governance and lifecycle management',
            'Integration with existing systems and applications'
          ],
          pricing: '$20,000 - $150,000/project',
          delivery: '6-16 weeks',
          benefits: 'Reduce unauthorized access by 95%, improve user experience',
          marketPrice: '$40,000 - $300,000/project',
          link: '/services/cybersecurity-solutions'
        }
      ]
    },
    {
      name: 'Data Analytics & BI',
      description: 'Advanced analytics and business intelligence for data-driven decisions',
      icon: BarChart3,
      color: 'indigo',
      services: [
        {
          name: 'Business Intelligence Dashboards',
          description: 'Interactive dashboards and reports for real-time business insights',
          icon: BarChart3,
          features: [
            'Custom dashboard development with drag-and-drop interface',
            'Real-time data visualization and KPI tracking',
            'Executive and operational reporting',
            'Mobile-responsive design for on-the-go access',
            'Automated report generation and distribution',
            'Integration with existing business systems'
          ],
          pricing: '$15,000 - $100,000/project',
          delivery: '4-12 weeks',
          benefits: 'Improve decision making by 60%, reduce reporting time by 80%',
          marketPrice: '$30,000 - $200,000/project',
          link: '/services/data-analytics'
        },
        {
          name: 'Predictive Analytics & Modeling',
          description: 'Machine learning models for forecasting and business optimization',
          icon: Brain,
          features: [
            'Predictive modeling for sales, demand, and customer behavior',
            'Risk assessment and fraud detection models',
            'Customer lifetime value and churn prediction',
            'Price optimization and revenue forecasting',
            'Supply chain optimization and inventory management',
            'Model deployment and monitoring'
          ],
          pricing: '$25,000 - $200,000/project',
          delivery: '6-16 weeks',
          benefits: 'Increase revenue by 15-30%, reduce costs by 20-40%',
          marketPrice: '$50,000 - $400,000/project',
          link: '/services/data-analytics'
        },
        {
          name: 'Data Warehouse & ETL Solutions',
          description: 'Scalable data infrastructure for collecting, storing, and processing large datasets',
          icon: Database,
          features: [
            'Data warehouse design and implementation',
            'ETL/ELT pipeline development and automation',
            'Data integration from multiple sources',
            'Data quality management and cleansing',
            'Real-time and batch data processing',
            'Cloud-based and on-premises solutions'
          ],
          pricing: '$30,000 - $250,000/project',
          delivery: '8-20 weeks',
          benefits: 'Centralize data access, improve data quality, enable advanced analytics',
          marketPrice: '$60,000 - $500,000/project',
          link: '/services/data-analytics'
        }
      ]
    },
    {
      name: 'IT Services & Infrastructure',
      description: 'Enterprise-grade IT services including cloud migration, DevOps, and platform engineering',
      icon: Server,
      color: 'gray',
      services: [
        {
          name: 'Cloud Migration & Modernization',
          description: 'Seamless migration to AWS, Azure, or GCP with modern architecture',
          icon: Cloud,
          features: [
            'Assessment and migration planning',
            'Infrastructure as Code (IaC) implementation',
            'Data migration and synchronization',
            'Performance optimization',
            'Security and compliance setup',
            'Training and documentation'
          ],
          pricing: '$15,000 - $150,000/project',
          delivery: '4-16 weeks',
          benefits: 'Reduce infrastructure costs by 40%, improve scalability and reliability',
          marketPrice: '$30,000 - $300,000/project',
          link: '/services/it-services'
        },
        {
          name: 'DevOps & CI/CD Pipeline',
          description: 'Automated deployment pipelines with monitoring and security integration',
          icon: GitBranch,
          features: [
            'Automated CI/CD pipeline setup',
            'Infrastructure as Code (IaC)',
            'Container orchestration',
            'Monitoring and alerting',
            'Security scanning and compliance',
            'Performance optimization'
          ],
          pricing: '$5,000 - $35,000/project',
          delivery: '4-12 weeks',
          benefits: 'Deploy 5x faster, reduce deployment failures by 90%',
          marketPrice: '$10,000 - $70,000/project',
          link: '/services/it-services'
        },
        {
          name: 'Platform Engineering',
          description: 'Internal developer platform with golden paths and self-service capabilities',
          icon: Layers,
          features: [
            'Developer portal and self-service tools',
            'Golden path templates and standards',
            'Multi-tenant infrastructure',
            'GitOps and automated deployments',
            'Monitoring and observability',
            'Security and compliance automation'
          ],
          pricing: '$10,000 - $60,000/project',
          delivery: '8-20 weeks',
          benefits: 'Accelerate development by 3x, improve consistency',
          marketPrice: '$20,000 - $120,000/project',
          link: '/services/it-services'
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-600 hover:bg-blue-700 text-blue-600 bg-blue-100 border-blue-600',
      purple: 'bg-purple-600 hover:bg-purple-700 text-purple-600 bg-purple-100 border-purple-600',
      yellow: 'bg-yellow-600 hover:bg-yellow-700 text-yellow-600 bg-yellow-100 border-yellow-600',
      green: 'bg-green-600 hover:bg-green-700 text-green-600 bg-green-100 border-green-600',
      red: 'bg-red-600 hover:bg-red-700 text-red-600 bg-red-100 border-red-600',
      indigo: 'bg-indigo-600 hover:bg-indigo-700 text-indigo-600 bg-indigo-100 border-indigo-600',
      gray: 'bg-gray-600 hover:bg-gray-700 text-gray-600 bg-gray-100 border-gray-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="micro SaaS, AI services, blockchain, IoT, cybersecurity, data analytics, IT services, cloud migration, DevOps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive Services Catalog
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Production-ready micro SaaS, AI, blockchain, IoT, cybersecurity, and data analytics solutions with transparent pricing and proven ROI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore All Services
                </Link>
                <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section id="services" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {serviceCategories.map((category, categoryIndex) => {
                const colors = getColorClasses(category.color).split(' ');
                return (
                  <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className={`bg-gradient-to-r from-${category.color}-600 to-${category.color}-700 p-6 text-white`}>
                      <div className="flex items-center mb-4">
                        <category.icon className="w-10 h-10 mr-4" />
                        <div>
                          <h2 className="text-2xl font-bold">{category.name}</h2>
                          <p className="text-blue-100">{category.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="space-y-6">
                        {category.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-start mb-3">
                              <div className={`${colors[4]} rounded-lg p-2 mr-3`}>
                                <service.icon className={`w-6 h-6 ${colors[2]}`} />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{service.name}</h3>
                                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="text-gray-500">Our Pricing:</span>
                                <p className="font-semibold text-green-600">{service.pricing}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Market Rate:</span>
                                <p className="text-gray-600">{service.marketPrice}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Delivery:</span>
                                <p className="font-medium text-blue-600">{service.delivery}</p>
                              </div>
                            </div>
                            
                            <div className="mt-3 p-2 bg-blue-50 rounded">
                              <p className="text-sm text-blue-800">
                                <strong>Benefits:</strong> {service.benefits}
                              </p>
                            </div>
                            
                            <div className="mt-3 flex flex-wrap gap-2">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                            
                            <Link href={service.link} className={`mt-3 inline-flex items-center ${colors[0]} text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm`}>
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver production-ready solutions with transparent pricing and proven ROI
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Production Ready</h3>
                <p className="text-gray-600">All solutions are battle-tested and ready for immediate deployment</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">Clear, upfront pricing with no hidden fees or surprises</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Rapid deployment with typical delivery times of 2-8 weeks</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Measurable business impact with documented cost savings and revenue increases</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-blue-400">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}