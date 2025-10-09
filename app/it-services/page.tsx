import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, BarChart, Code, Mail, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Cloud, Lock, Settings, TrendingUp, Target, Lightbulb, MessageCircle, Search, Languages, Mic, Brain, Cpu, Eye, Ear, Hand, Bot, Sparkles, Rocket, Layers, Target as TargetIcon, PieChart, Activity, Zap as ZapIcon, Server, Network, HardDrive, Wifi, Monitor, Smartphone as Phone, Headphones, Database as DbIcon, Cloud as CloudIcon, Lock as LockIcon, Settings as SettingsIcon, TrendingUp as TrendingUpIcon, Target as TargetIcon2, Lightbulb as LightbulbIcon, MessageCircle as MessageCircleIcon, Search as SearchIcon, Languages as LanguagesIcon, Mic as MicIcon, Brain as BrainIcon, Cpu as CpuIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Bot as BotIcon, Sparkles as SparklesIcon, Rocket as RocketIcon, Layers as LayersIcon, Target as TargetIcon3, PieChart as PieChartIcon, Activity as ActivityIcon, Zap as ZapIcon2 } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud solutions with 99.9% uptime guarantee and 24/7 monitoring.',
      icon: Cloud,
      price: '$1,200/month',
      originalPrice: '$2,500/month',
      features: [
        'AWS, Azure, GCP expertise',
        'Auto-scaling infrastructure',
        'Disaster recovery',
        'Security compliance',
        'Cost optimization',
        '24/7 monitoring'
      ],
      popular: true,
      category: 'Infrastructure',
      color: 'from-blue-500 to-cyan-600',
      capabilities: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Disaster Recovery',
        'Security Compliance',
        'Cost Optimization',
        'Performance Monitoring'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, SOC services, and compliance management.',
      icon: Shield,
      price: '$2,500/month',
      originalPrice: '$5,000/month',
      features: [
        'Threat detection & response',
        'Vulnerability assessments',
        'Security audits',
        'Compliance management',
        'Incident response',
        'Security training'
      ],
      popular: true,
      category: 'Security',
      color: 'from-red-500 to-pink-600',
      capabilities: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Audits',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ]
    },
    {
      id: 'devops-automation',
      title: 'DevOps & Automation',
      description: 'Streamline your development workflow with CI/CD pipelines and infrastructure automation.',
      icon: Settings,
      price: '$1,800/month',
      originalPrice: '$3,500/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure automation',
        'Container orchestration',
        'Monitoring & alerting',
        'Testing automation',
        'Deployment strategies'
      ],
      popular: false,
      category: 'DevOps',
      color: 'from-green-500 to-emerald-600',
      capabilities: [
        'CI/CD Pipelines',
        'Infrastructure Automation',
        'Container Orchestration',
        'Monitoring & Alerting',
        'Testing Automation',
        'Deployment Strategies'
      ]
    },
    {
      id: 'database-management',
      title: 'Database Management',
      description: 'Expert database administration, optimization, and migration services for all major platforms.',
      icon: Database,
      price: '$1,500/month',
      originalPrice: '$3,000/month',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Migration services',
        'Security hardening',
        'Monitoring & maintenance'
      ],
      popular: false,
      category: 'Database',
      color: 'from-purple-500 to-indigo-600',
      capabilities: [
        'Database Design',
        'Performance Tuning',
        'Backup & Recovery',
        'Migration Services',
        'Security Hardening',
        'Monitoring & Maintenance'
      ]
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance.',
      icon: Network,
      price: '$1,300/month',
      originalPrice: '$2,600/month',
      features: [
        'Network design & implementation',
        'Wireless solutions',
        'VPN setup & management',
        'Load balancing',
        'Network security',
        'Performance optimization'
      ],
      popular: false,
      category: 'Networking',
      color: 'from-orange-500 to-yellow-600',
      capabilities: [
        'Network Design',
        'Wireless Solutions',
        'VPN Management',
        'Load Balancing',
        'Network Security',
        'Performance Optimization'
      ]
    },
    {
      id: 'it-support',
      title: '24/7 IT Support',
      description: 'Round-the-clock technical support and helpdesk services for your business needs.',
      icon: Headphones,
      price: '$800/month',
      originalPrice: '$1,500/month',
      features: [
        '24/7 helpdesk support',
        'Remote assistance',
        'Hardware & software support',
        'User training',
        'Issue tracking',
        'SLA guarantees'
      ],
      popular: true,
      category: 'Support',
      color: 'from-cyan-500 to-blue-600',
      capabilities: [
        '24/7 Helpdesk',
        'Remote Assistance',
        'Hardware Support',
        'Software Support',
        'User Training',
        'SLA Guarantees'
      ]
    },
    {
      id: 'data-backup',
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data protection with automated backups and disaster recovery solutions.',
      icon: HardDrive,
      price: '$600/month',
      originalPrice: '$1,200/month',
      features: [
        'Automated backups',
        'Disaster recovery planning',
        'Data encryption',
        'Offsite storage',
        'Recovery testing',
        'Compliance support'
      ],
      popular: false,
      category: 'Data Protection',
      color: 'from-gray-500 to-slate-600',
      capabilities: [
        'Automated Backups',
        'Disaster Recovery',
        'Data Encryption',
        'Offsite Storage',
        'Recovery Testing',
        'Compliance Support'
      ]
    },
    {
      id: 'software-development',
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your business requirements and processes.',
      icon: Code,
      price: '$3,000/month',
      originalPrice: '$6,000/month',
      features: [
        'Custom application development',
        'API development',
        'Integration services',
        'Quality assurance',
        'Documentation',
        'Ongoing maintenance'
      ],
      popular: true,
      category: 'Development',
      color: 'from-indigo-500 to-purple-600',
      capabilities: [
        'Custom Applications',
        'API Development',
        'Integration Services',
        'Quality Assurance',
        'Documentation',
        'Ongoing Maintenance'
      ]
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes.',
      icon: Lightbulb,
      price: '$2,000/month',
      originalPrice: '$4,000/month',
      features: [
        'Technology strategy',
        'Process optimization',
        'Vendor management',
        'Budget planning',
        'Risk assessment',
        'Implementation guidance'
      ],
      popular: false,
      category: 'Consulting',
      color: 'from-yellow-500 to-orange-600',
      capabilities: [
        'Technology Strategy',
        'Process Optimization',
        'Vendor Management',
        'Budget Planning',
        'Risk Assessment',
        'Implementation Guidance'
      ]
    }
  ];

  const itCapabilities = [
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Disaster Recovery', 'Cost Optimization']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions and compliance',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Compliance Management']
    },
    {
      title: 'DevOps',
      description: 'Automated development and deployment pipelines',
      icon: Settings,
      features: ['CI/CD Pipelines', 'Infrastructure Automation', 'Container Orchestration', 'Monitoring']
    },
    {
      title: 'Database Management',
      description: 'Expert database administration and optimization',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services']
    }
  ];

  const stats = [
    { label: 'Infrastructure Projects', value: '1,000+', icon: Server },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Clock },
    { label: 'Security Incidents', value: '0', icon: Shield },
    { label: 'Client Satisfaction', value: '98%', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Comprehensive IT solutions to power your business. From cloud infrastructure 
            to cybersecurity, we deliver enterprise-grade technology services.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free IT Consultation
            </a>
          </div>
        </div>
      </section>

      {/* IT Capabilities Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              IT Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itCapabilities.map((capability, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <capability.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={service.id} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-center text-sm text-gray-400">per month</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <a
                    href="/contact"
                    className="cyber-button w-full text-center inline-block"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Process Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Our IT Service Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From assessment to implementation, we follow a proven methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
              <p className="text-gray-300">We analyze your current IT infrastructure and identify areas for improvement.</p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Planning</h3>
              <p className="text-gray-300">We develop a comprehensive IT strategy tailored to your business goals.</p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
              <p className="text-gray-300">We implement the solution with minimal disruption to your business operations.</p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Support</h3>
              <p className="text-gray-300">We provide ongoing support and monitoring to ensure optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join industry leaders who have already optimized their IT operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free IT Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
