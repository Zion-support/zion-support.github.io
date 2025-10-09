'use client';
import React, { useState } from 'react';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp, Award, DollarSign, Clock as ClockIcon, Shield as ShieldIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon } from 'lucide-react';

export default function ITServicesPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const itServices = [
    {
      category: 'Infrastructure & Cloud',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'Cloud Migration & Setup',
          description: 'Seamless migration to cloud platforms with zero downtime',
          features: ['AWS/Azure/GCP Migration', 'Hybrid Cloud Solutions', 'Cost Optimization', 'Security Implementation'],
          pricing: 'Starting at $10,000',
          timeline: '2-8 weeks'
        },
        {
          name: 'IT Infrastructure Design',
          description: 'Scalable and secure infrastructure architecture',
          features: ['Network Design', 'Server Configuration', 'Load Balancing', 'Disaster Recovery'],
          pricing: 'Starting at $15,000',
          timeline: '3-6 weeks'
        },
        {
          name: 'Database Management',
          description: 'Optimized database performance and management',
          features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring'],
          pricing: 'Starting at $5,000/month',
          timeline: 'Ongoing'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'Cybersecurity Suite',
          description: 'Comprehensive security solutions for enterprise protection',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
          pricing: 'Starting at $8,000/month',
          timeline: '2-4 weeks'
        },
        {
          name: 'Compliance Management',
          description: 'Ensure compliance with industry standards and regulations',
          features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Support'],
          pricing: 'Starting at $12,000',
          timeline: '4-8 weeks'
        },
        {
          name: 'Security Training',
          description: 'Employee security awareness and training programs',
          features: ['Phishing Simulation', 'Security Workshops', 'Policy Development', 'Assessment'],
          pricing: 'Starting at $3,000',
          timeline: '1-2 weeks'
        }
      ]
    },
    {
      category: 'Support & Maintenance',
      icon: Settings,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: '24/7 IT Support',
          description: 'Round-the-clock technical support and monitoring',
          features: ['Help Desk Support', 'Remote Monitoring', 'Proactive Maintenance', 'Emergency Response'],
          pricing: 'Starting at $2,000/month',
          timeline: 'Immediate'
        },
        {
          name: 'System Administration',
          description: 'Complete system administration and management',
          features: ['User Management', 'System Updates', 'Performance Monitoring', 'Backup Management'],
          pricing: 'Starting at $4,000/month',
          timeline: 'Ongoing'
        },
        {
          name: 'IT Consulting',
          description: 'Strategic IT planning and technology consulting',
          features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Budget Planning'],
          pricing: 'Starting at $200/hour',
          timeline: 'As needed'
        }
      ]
    },
    {
      category: 'Development & Integration',
      icon: Code,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'Custom Software Development',
          description: 'Tailored software solutions for your business needs',
          features: ['Web Applications', 'Mobile Apps', 'API Development', 'Integration Services'],
          pricing: 'Starting at $15,000',
          timeline: '6-12 weeks'
        },
        {
          name: 'System Integration',
          description: 'Connect and integrate disparate systems',
          features: ['API Integration', 'Data Migration', 'Workflow Automation', 'Legacy System Modernization'],
          pricing: 'Starting at $8,000',
          timeline: '3-8 weeks'
        },
        {
          name: 'DevOps & CI/CD',
          description: 'Streamline development and deployment processes',
          features: ['Automated Testing', 'Continuous Integration', 'Deployment Automation', 'Monitoring'],
          pricing: 'Starting at $6,000',
          timeline: '2-6 weeks'
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
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
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Timeline:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.timeline}</span>
                        </div>
                      </div>
                      <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all">
                        Learn More
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