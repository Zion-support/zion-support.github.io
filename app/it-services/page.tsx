'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, CreditCard, PieChart, Mail as MailIcon, Search, Filter, Download, Upload, RefreshCw, Eye, Edit, Trash2, Plus, Minus, X, ChevronRight, ExternalLink, Award, Clock as ClockIcon, Globe as GlobeIcon, Shield as ShieldIcon, Zap as ZapIcon, Wifi, HardDrive, Router, Database as DatabaseIcon, BarChart as BarChartIcon, Cpu as CpuIcon, Network, Server as ServerIcon, HardDrive as HardDriveIcon, Router as RouterIcon, Wifi as WifiIcon } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Comprehensive cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud platforms.',
      icon: Cloud,
      price: 'Starting at $2,000/month',
      features: [
        'Cloud strategy and planning',
        'Multi-cloud architecture design',
        'Migration planning and execution',
        'Cost optimization and monitoring',
        'Security and compliance setup',
        'Disaster recovery planning',
        '24/7 cloud monitoring',
        'Performance optimization'
      ],
      benefits: [
        'Reduce infrastructure costs by 30-50%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Increase system reliability and uptime'
      ],
      useCases: [
        'Legacy system modernization',
        'Disaster recovery implementation',
        'Global application deployment',
        'DevOps and CI/CD pipelines',
        'Data center consolidation'
      ],
      targetAudience: 'Mid to large enterprises, growing businesses, digital transformation initiatives',
      integration: 'AWS, Azure, GCP, VMware, on-premises systems, monitoring tools',
      support: 'Cloud architects, migration specialists, 24/7 monitoring team'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions including threat detection, vulnerability assessment, compliance management, and incident response.',
      icon: Shield,
      price: 'Starting at $1,500/month',
      features: [
        'Security assessment and auditing',
        'Threat detection and prevention',
        'Vulnerability management',
        'Compliance monitoring (SOC2, HIPAA, GDPR)',
        'Security awareness training',
        'Incident response planning',
        'Penetration testing',
        'Security policy development'
      ],
      benefits: [
        'Reduce security incidents by 80%',
        'Ensure regulatory compliance',
        'Protect sensitive data and assets',
        'Improve security posture and awareness'
      ],
      useCases: [
        'Regulatory compliance requirements',
        'Data protection and privacy',
        'Network security hardening',
        'Employee security training',
        'Incident response preparation'
      ],
      targetAudience: 'Healthcare, finance, government, e-commerce, any data-sensitive organization',
      integration: 'SIEM systems, firewalls, endpoint protection, identity management',
      support: 'Security experts, compliance specialists, incident response team'
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD Implementation',
      description: 'Modern DevOps practices and continuous integration/continuous deployment pipelines to accelerate software delivery and improve quality.',
      icon: Settings,
      price: 'Starting at $1,800/month',
      features: [
        'CI/CD pipeline design and implementation',
        'Infrastructure as Code (IaC)',
        'Container orchestration (Kubernetes, Docker)',
        'Automated testing and deployment',
        'Monitoring and logging setup',
        'Git workflow optimization',
        'Environment management',
        'Performance optimization'
      ],
      benefits: [
        'Reduce deployment time by 70%',
        'Improve code quality and reliability',
        'Enable faster feature delivery',
        'Reduce manual errors and downtime'
      ],
      useCases: [
        'Software development acceleration',
        'Microservices architecture',
        'Cloud-native application deployment',
        'Legacy application modernization',
        'Quality assurance automation'
      ],
      targetAudience: 'Software development teams, IT operations, startups, enterprises',
      integration: 'GitHub, GitLab, Jenkins, Docker, Kubernetes, cloud platforms',
      support: 'DevOps engineers, automation specialists, platform architects'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure & Management',
      description: 'Complete network design, implementation, and management solutions including LAN, WAN, wireless, and security infrastructure.',
      icon: Network,
      price: 'Starting at $1,200/month',
      features: [
        'Network design and architecture',
        'Wireless network deployment',
        'Network security implementation',
        'Performance monitoring and optimization',
        'Disaster recovery planning',
        'Network documentation',
        'Remote access solutions',
        'Bandwidth management'
      ],
      benefits: [
        'Improve network performance by 40%',
        'Enhance security and reliability',
        'Reduce network downtime',
        'Optimize bandwidth utilization'
      ],
      useCases: [
        'Office network setup and expansion',
        'Remote work infrastructure',
        'Branch office connectivity',
        'Network security hardening',
        'Performance optimization'
      ],
      targetAudience: 'Small to large businesses, remote teams, multi-location companies',
      integration: 'Cisco, Juniper, Fortinet, Aruba, network monitoring tools',
      support: 'Network engineers, security specialists, remote support team'
    },
    {
      id: 'data-management',
      name: 'Data Management & Analytics',
      description: 'Comprehensive data solutions including database design, data warehousing, analytics platforms, and business intelligence implementation.',
      icon: Database,
      price: 'Starting at $2,500/month',
      features: [
        'Database design and optimization',
        'Data warehousing solutions',
        'ETL/ELT pipeline development',
        'Business intelligence dashboards',
        'Data governance and security',
        'Real-time data processing',
        'Data quality management',
        'Analytics platform setup'
      ],
      benefits: [
        'Improve data accessibility by 60%',
        'Enable data-driven decision making',
        'Reduce data processing time',
        'Enhance data security and compliance'
      ],
      useCases: [
        'Business intelligence implementation',
        'Data warehouse migration',
        'Real-time analytics setup',
        'Data governance framework',
        'Reporting automation'
      ],
      targetAudience: 'Data teams, business analysts, executives, IT departments',
      integration: 'SQL Server, Oracle, PostgreSQL, Snowflake, Tableau, Power BI',
      support: 'Data architects, BI specialists, database administrators'
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android, including UI/UX design and backend integration.',
      icon: Smartphone,
      price: 'Starting at $3,000/month',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design and prototyping',
        'Backend API development',
        'App store deployment',
        'Performance optimization',
        'Security implementation',
        'Maintenance and updates'
      ],
      benefits: [
        'Reach customers on all devices',
        'Improve user engagement',
        'Increase business accessibility',
        'Enhance brand presence'
      ],
      useCases: [
        'Customer-facing applications',
        'Internal business tools',
        'E-commerce mobile solutions',
        'IoT device management',
        'Field service applications'
      ],
      targetAudience: 'Businesses, startups, enterprises, service providers',
      integration: 'REST APIs, cloud services, payment systems, social media',
      support: 'Mobile developers, UI/UX designers, QA specialists'
    },
    {
      id: 'web-development',
      name: 'Web Development & E-commerce',
      description: 'Modern web applications and e-commerce solutions built with cutting-edge technologies and best practices for performance and security.',
      icon: Globe,
      price: 'Starting at $2,200/month',
      features: [
        'Responsive web design',
        'E-commerce platform development',
        'Content management systems',
        'API development and integration',
        'Performance optimization',
        'SEO implementation',
        'Security hardening',
        'Maintenance and support'
      ],
      benefits: [
        'Improve online presence',
        'Increase conversion rates',
        'Enhance user experience',
        'Boost search engine rankings'
      ],
      useCases: [
        'Corporate websites',
        'E-commerce stores',
        'Web applications',
        'Portals and dashboards',
        'Marketing websites'
      ],
      targetAudience: 'Businesses, e-commerce companies, agencies, service providers',
      integration: 'Payment gateways, CRM systems, marketing tools, analytics',
      support: 'Web developers, designers, SEO specialists, maintenance team'
    },
    {
      id: 'api-management',
      name: 'API Development & Management',
      description: 'Comprehensive API solutions including design, development, security, monitoring, and management for internal and external integrations.',
      icon: Code,
      price: 'Starting at $1,600/month',
      features: [
        'API design and architecture',
        'REST and GraphQL API development',
        'API security and authentication',
        'Rate limiting and throttling',
        'API documentation and testing',
        'Monitoring and analytics',
        'Version management',
        'Developer portal setup'
      ],
      benefits: [
        'Enable system integrations',
        'Improve developer productivity',
        'Enhance security and control',
        'Accelerate time to market'
      ],
      useCases: [
        'System integration projects',
        'Third-party service integration',
        'Mobile app backends',
        'Microservices architecture',
        'Partner ecosystem development'
      ],
      targetAudience: 'Software companies, enterprises, platform providers, integrators',
      integration: 'API gateways, authentication systems, monitoring tools, documentation platforms',
      support: 'API architects, security specialists, developer relations team'
    },
    {
      id: 'infrastructure-monitoring',
      name: 'Infrastructure Monitoring & Management',
      description: 'Comprehensive monitoring solutions for servers, networks, applications, and cloud infrastructure with proactive alerting and management.',
      icon: Monitor,
      price: 'Starting at $1,000/month',
      features: [
        '24/7 infrastructure monitoring',
        'Performance metrics and alerting',
        'Log aggregation and analysis',
        'Capacity planning and optimization',
        'Incident response and resolution',
        'Uptime monitoring and reporting',
        'Cost optimization recommendations',
        'Compliance monitoring'
      ],
      benefits: [
        'Reduce downtime by 90%',
        'Improve system performance',
        'Prevent issues before they occur',
        'Optimize resource utilization'
      ],
      useCases: [
        'Server and application monitoring',
        'Cloud infrastructure management',
        'Performance optimization',
        'Capacity planning',
        'Compliance reporting'
      ],
      targetAudience: 'IT operations teams, managed service providers, enterprises',
      integration: 'Monitoring tools, ticketing systems, communication platforms, cloud services',
      support: 'NOC engineers, system administrators, incident response team'
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing & IoT Solutions',
      description: 'Edge computing infrastructure and IoT solutions for real-time data processing, device management, and distributed computing needs.',
      icon: Cpu,
      price: 'Starting at $2,800/month',
      features: [
        'Edge infrastructure design',
        'IoT device management',
        'Real-time data processing',
        'Edge analytics and AI',
        'Device connectivity solutions',
        'Data synchronization',
        'Security and compliance',
        'Remote management'
      ],
      benefits: [
        'Reduce latency by 80%',
        'Improve data processing speed',
        'Enable real-time applications',
        'Reduce bandwidth costs'
      ],
      useCases: [
        'Industrial IoT implementations',
        'Smart city solutions',
        'Real-time analytics',
        'Autonomous systems',
        'Remote monitoring'
      ],
      targetAudience: 'Manufacturing, utilities, transportation, smart city initiatives',
      integration: 'Cloud platforms, IoT platforms, industrial systems, data analytics',
      support: 'Edge computing specialists, IoT engineers, field technicians'
    }
  ];

  const technologyStack = [
    {
      category: 'Cloud Platforms',
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'IBM Cloud', 'Oracle Cloud'],
      icon: Cloud
    },
    {
      category: 'Programming Languages',
      technologies: ['Python', 'Java', 'JavaScript', 'C#', 'Go', 'Rust', 'TypeScript'],
      icon: Code
    },
    {
      category: 'Databases',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Snowflake'],
      icon: Database
    },
    {
      category: 'DevOps Tools',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible'],
      icon: Settings
    },
    {
      category: 'Monitoring',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'New Relic', 'Datadog', 'Splunk'],
      icon: Monitor
    },
    {
      category: 'Security',
      technologies: ['Okta', 'Auth0', 'Hashicorp Vault', 'WAF', 'SIEM', 'Penetration Testing'],
      icon: Shield
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic',
      price: '$1,000-2,000/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic IT support',
        'Standard monitoring',
        'Email support',
        'Monthly reporting',
        'Up to 10 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,000-5,000/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced IT services',
        '24/7 monitoring',
        'Priority support',
        'Weekly reporting',
        'Up to 50 users',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$5,000+/month',
      description: 'For large organizations',
      features: [
        'Full IT service suite',
        'Custom solutions',
        '24/7 phone support',
        'Real-time reporting',
        'Unlimited users',
        'Dedicated IT team',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      role: 'CTO',
      company: 'TechCorp Solutions',
      content: 'The cloud migration service was exceptional. We reduced our infrastructure costs by 45% while improving performance and reliability.',
      rating: 5,
      avatar: 'DT'
    },
    {
      name: 'Lisa Martinez',
      role: 'IT Director',
      company: 'Global Finance',
      content: 'Their cybersecurity implementation has significantly improved our security posture. We passed our SOC2 audit with flying colors.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'James Wilson',
      role: 'VP of Engineering',
      company: 'InnovateLabs',
      content: 'The DevOps implementation has transformed our development process. We\'re now deploying 5x faster with zero downtime.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              IT Services & Solutions
            </span>
            <br />
            <span className="text-3xl md:text-5xl">
              for Modern Businesses
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive IT services that modernize your infrastructure, enhance security, 
            and drive digital transformation. From cloud migration to cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Get IT Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-sm text-gray-300">IT Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50%</div>
              <div className="text-sm text-gray-300">Average Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end IT solutions designed to modernize your infrastructure and accelerate digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group border border-white/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400">starting price</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Target Audience:</h4>
                  <p className="text-sm text-gray-300 mb-3">{service.targetAudience}</p>
                  <h4 className="text-lg font-semibold text-white mb-2">Integration:</h4>
                  <p className="text-sm text-gray-300">{service.integration}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    Get Quote
                  </a>
                  <a
                    href={`/demo?service=${service.id}`}
                    className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies to deliver robust IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyStack.map((category, index) => (
              <div
                key={category.category}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible IT Service Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the service level that matches your IT needs and budget. All plans include our core IT capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative ${
                  tier.popular ? 'ring-2 ring-cyan-400 bg-cyan-400/10' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Choose {tier.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations have transformed their IT infrastructure with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Schedule a free IT assessment to discover how our solutions can improve your infrastructure, 
            enhance security, and drive digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Schedule Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;