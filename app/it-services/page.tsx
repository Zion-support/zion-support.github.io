'use client';
import React, { useState } from 'react';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp, Award, DollarSign, Clock as ClockIcon, Shield as ShieldIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon } from 'lucide-react';

export default function ITServicesPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const itServices = [
    {
      category: 'Cloud Infrastructure & Migration',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'Enterprise Cloud Migration',
          description: 'Comprehensive cloud migration with zero downtime and maximum security',
          features: ['Multi-Cloud Strategy', 'Zero-Downtime Migration', 'Cost Optimization', 'Security Hardening', 'Performance Tuning'],
          pricing: 'Starting at $25,000',
          timeline: '4-12 weeks',
          popular: true,
          icon: '☁️',
          benefits: ['99.9% uptime guarantee', '50% cost reduction', 'Enhanced security']
        },
        {
          name: 'Hybrid Cloud Solutions',
          description: 'Seamless integration between on-premises and cloud environments',
          features: ['Hybrid Architecture Design', 'Data Synchronization', 'Security Integration', 'Performance Optimization', 'Disaster Recovery'],
          pricing: 'Starting at $18,500',
          timeline: '6-10 weeks',
          popular: true,
          icon: '🔗',
          benefits: ['Flexible deployment', 'Cost optimization', 'Seamless integration']
        },
        {
          name: 'Cloud Cost Optimization',
          description: 'Intelligent cloud cost management and resource optimization',
          features: ['Cost Analysis', 'Resource Right-sizing', 'Automated Scaling', 'Reserved Instance Planning', 'Cost Alerts'],
          pricing: 'Starting at $5,000/month',
          timeline: '2-4 weeks',
          popular: false,
          icon: '💰',
          benefits: ['30% cost savings', 'Automated optimization', 'Real-time monitoring']
        },
        {
          name: 'Cloud Security & Compliance',
          description: 'Comprehensive cloud security with compliance management',
          features: ['Security Assessment', 'Compliance Monitoring', 'Threat Detection', 'Data Encryption', 'Access Management'],
          pricing: 'Starting at $12,000/month',
          timeline: '3-6 weeks',
          popular: false,
          icon: '🔒',
          benefits: ['Enterprise-grade security', 'Compliance assurance', '24/7 monitoring']
        }
      ]
    },
    {
      category: 'Cybersecurity & Risk Management',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'Advanced Threat Protection',
          description: 'Next-generation cybersecurity with AI-powered threat detection and response',
          features: ['AI Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Threat Hunting', 'Incident Forensics'],
          pricing: 'Starting at $15,000/month',
          timeline: '2-6 weeks',
          popular: true,
          icon: '🛡️',
          benefits: ['99.9% threat detection', 'Real-time response', 'AI-powered protection']
        },
        {
          name: 'Zero Trust Security Architecture',
          description: 'Comprehensive zero trust implementation with continuous verification',
          features: ['Identity Verification', 'Device Trust', 'Network Segmentation', 'Data Protection', 'Continuous Monitoring'],
          pricing: 'Starting at $22,000',
          timeline: '8-16 weeks',
          popular: true,
          icon: '🔐',
          benefits: ['Enhanced security posture', 'Reduced attack surface', 'Continuous verification']
        },
        {
          name: 'Compliance & Governance',
          description: 'Comprehensive compliance management for industry standards and regulations',
          features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'ISO 27001', 'Audit Support'],
          pricing: 'Starting at $18,000',
          timeline: '6-12 weeks',
          popular: false,
          icon: '📋',
          benefits: ['Full compliance', 'Audit readiness', 'Risk mitigation']
        },
        {
          name: 'Security Awareness Training',
          description: 'Comprehensive security training and phishing simulation programs',
          features: ['Phishing Simulation', 'Security Workshops', 'Policy Development', 'Risk Assessment', 'Compliance Training'],
          pricing: 'Starting at $8,500',
          timeline: '2-4 weeks',
          popular: false,
          icon: '🎓',
          benefits: ['Reduced human error', 'Security culture', 'Compliance awareness']
        }
      ]
    },
    {
      category: 'IT Support & Managed Services',
      icon: Settings,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: '24/7 Enterprise IT Support',
          description: 'Round-the-clock technical support with proactive monitoring and maintenance',
          features: ['24/7 Help Desk', 'Proactive Monitoring', 'Remote Support', 'Emergency Response', 'SLA Guarantees'],
          pricing: 'Starting at $5,500/month',
          timeline: 'Immediate',
          popular: true,
          icon: '🆘',
          benefits: ['99.9% uptime', '15-minute response time', 'Proactive maintenance']
        },
        {
          name: 'IT Infrastructure Management',
          description: 'Complete infrastructure management with optimization and monitoring',
          features: ['Server Management', 'Network Monitoring', 'Performance Optimization', 'Capacity Planning', 'Backup Management'],
          pricing: 'Starting at $8,500/month',
          timeline: 'Ongoing',
          popular: true,
          icon: '⚙️',
          benefits: ['Optimized performance', 'Reduced downtime', 'Cost efficiency']
        },
        {
          name: 'Strategic IT Consulting',
          description: 'Expert IT consulting for technology strategy and digital transformation',
          features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Budget Optimization', 'Digital Transformation'],
          pricing: 'Starting at $350/hour',
          timeline: 'As needed',
          popular: false,
          icon: '💡',
          benefits: ['Strategic guidance', 'Cost optimization', 'Technology roadmap']
        },
        {
          name: 'IT Training & Certification',
          description: 'Comprehensive IT training programs for staff development and certification',
          features: ['Technical Training', 'Certification Programs', 'Skill Assessment', 'Custom Curriculum', 'Ongoing Support'],
          pricing: 'Starting at $12,000',
          timeline: '4-8 weeks',
          popular: false,
          icon: '🎯',
          benefits: ['Enhanced skills', 'Certification', 'Improved productivity']
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
          description: 'Tailored software solutions built with modern technologies and best practices',
          features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development', 'Microservices Architecture'],
          pricing: 'Starting at $35,000',
          timeline: '8-16 weeks',
          popular: true,
          icon: '💻',
          benefits: ['Custom solutions', 'Modern technology', 'Scalable architecture']
        },
        {
          name: 'System Integration & Modernization',
          description: 'Seamless integration of disparate systems with legacy modernization',
          features: ['API Integration', 'Data Migration', 'Legacy Modernization', 'Workflow Automation', 'Real-time Sync'],
          pricing: 'Starting at $28,000',
          timeline: '6-12 weeks',
          popular: true,
          icon: '🔧',
          benefits: ['Unified systems', 'Improved efficiency', 'Modern architecture']
        },
        {
          name: 'DevOps & CI/CD Implementation',
          description: 'Complete DevOps transformation with automated testing and deployment',
          features: ['CI/CD Pipelines', 'Automated Testing', 'Infrastructure as Code', 'Monitoring & Alerting', 'Performance Optimization'],
          pricing: 'Starting at $22,000',
          timeline: '4-8 weeks',
          popular: false,
          icon: '🚀',
          benefits: ['Faster deployments', 'Reduced errors', 'Improved quality']
        },
        {
          name: 'API Development & Management',
          description: 'Comprehensive API development with management and monitoring capabilities',
          features: ['RESTful APIs', 'GraphQL APIs', 'API Gateway', 'Rate Limiting', 'Analytics & Monitoring'],
          pricing: 'Starting at $18,000',
          timeline: '4-8 weeks',
          popular: false,
          icon: '🔌',
          benefits: ['Scalable APIs', 'Secure access', 'Performance monitoring']
        }
      ]
    },
    {
      category: 'Data Management & Analytics',
      icon: Database,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'Database Design & Optimization',
          description: 'High-performance database solutions with optimization and monitoring',
          features: ['Database Design', 'Performance Tuning', 'Query Optimization', 'Backup & Recovery', 'Security Hardening'],
          pricing: 'Starting at $15,000',
          timeline: '4-8 weeks',
          popular: true,
          icon: '🗄️',
          benefits: ['Optimized performance', 'Data security', 'Reliable backup']
        },
        {
          name: 'Data Analytics & Business Intelligence',
          description: 'Advanced data analytics with visualization and business intelligence',
          features: ['Data Warehousing', 'ETL Processes', 'Data Visualization', 'Business Intelligence', 'Predictive Analytics'],
          pricing: 'Starting at $25,000',
          timeline: '8-16 weeks',
          popular: true,
          icon: '📊',
          benefits: ['Data-driven insights', 'Visual analytics', 'Predictive capabilities']
        },
        {
          name: 'Data Migration & Integration',
          description: 'Seamless data migration with integration and transformation services',
          features: ['Data Migration', 'Data Transformation', 'Data Quality', 'Integration Services', 'Data Governance'],
          pricing: 'Starting at $20,000',
          timeline: '6-12 weeks',
          popular: false,
          icon: '🔄',
          benefits: ['Zero data loss', 'Quality assurance', 'Seamless integration']
        },
        {
          name: 'Big Data Solutions',
          description: 'Scalable big data solutions with real-time processing and analytics',
          features: ['Hadoop/Spark', 'Real-time Processing', 'Data Lakes', 'Machine Learning', 'Stream Analytics'],
          pricing: 'Starting at $45,000',
          timeline: '12-20 weeks',
          popular: false,
          icon: '📈',
          benefits: ['Scalable processing', 'Real-time insights', 'Advanced analytics']
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
          description: 'Comprehensive network solutions with security and performance optimization',
          features: ['Network Architecture', 'Security Implementation', 'Performance Optimization', 'Monitoring', 'Disaster Recovery'],
          pricing: 'Starting at $30,000',
          timeline: '6-12 weeks',
          popular: true,
          icon: '🌐',
          benefits: ['Reliable connectivity', 'Enhanced security', 'Optimized performance']
        },
        {
          name: 'Wireless Network Solutions',
          description: 'Advanced wireless networking with security and coverage optimization',
          features: ['WiFi 6/6E', 'Security Implementation', 'Coverage Optimization', 'Performance Monitoring', 'Guest Networks'],
          pricing: 'Starting at $18,000',
          timeline: '3-6 weeks',
          popular: true,
          icon: '📶',
          benefits: ['High-speed connectivity', 'Secure access', 'Optimized coverage']
        },
        {
          name: 'Network Security & Monitoring',
          description: 'Comprehensive network security with real-time monitoring and threat detection',
          features: ['Firewall Management', 'Intrusion Detection', 'Network Monitoring', 'Threat Response', 'Security Audits'],
          pricing: 'Starting at $12,000/month',
          timeline: '2-4 weeks',
          popular: false,
          icon: '🔍',
          benefits: ['Enhanced security', 'Real-time monitoring', 'Threat protection']
        },
        {
          name: 'SD-WAN Implementation',
          description: 'Software-defined wide area networking for improved performance and security',
          features: ['SD-WAN Deployment', 'Performance Optimization', 'Security Integration', 'Cloud Connectivity', 'Monitoring'],
          pricing: 'Starting at $25,000',
          timeline: '4-8 weeks',
          popular: false,
          icon: '🔗',
          benefits: ['Improved performance', 'Cost optimization', 'Enhanced security']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our clients see 40% improvement in system performance',
      stat: '40%'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Average response time of 15 minutes for critical issues',
      stat: '15 min'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduce IT costs by up to 60% through optimization',
      stat: '60%'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Zero security breaches with our comprehensive approach',
      stat: '100%'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              IT Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT solutions that keep your business running smoothly, securely, and efficiently. 
              From infrastructure to security, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven expertise and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet your business needs
            </p>
          </div>
          <div className="space-y-16">
            {itServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </div>
                      )}
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-3xl">{service.icon}</span>
                        <h4 className="text-xl font-bold text-white">{service.name}</h4>
                      </div>
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
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Timeline:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.timeline}</span>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Benefits:</h5>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all">
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies in the industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
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
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
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
                    <div className="bg-slate-800/50 p-6 rounded-lg">
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
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their IT operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}