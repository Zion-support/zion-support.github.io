import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Code, 
  Settings, 
  Users,
  Monitor,
  Smartphone,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Star,
  Clock,
  Target,
  Layers,
  Lock,
  Wifi,
  HardDrive
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 1,
      name: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and management across AWS, Azure, and Google Cloud platforms.',
      icon: Cloud,
      price: 'Starting at $1,200/month',
      features: [
        'Multi-cloud Strategy',
        'Infrastructure as Code',
        'Auto-scaling Solutions',
        'Cost Optimization',
        'Disaster Recovery',
        '24/7 Monitoring'
      ],
      category: 'Infrastructure',
      color: 'from-blue-500 to-cyan-600',
      popular: true,
      capabilities: [
        'AWS/Azure/GCP migration',
        'Container orchestration',
        'Serverless architecture',
        'Load balancing setup',
        'Backup & recovery systems'
      ]
    },
    {
      id: 2,
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, vulnerability assessment, and compliance management.',
      icon: Shield,
      price: 'Starting at $2,500/month',
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Security Auditing',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ],
      category: 'Security',
      color: 'from-red-500 to-pink-600',
      popular: true,
      capabilities: [
        'SOC 2 Type II compliance',
        'Penetration testing',
        'Security awareness training',
        'Zero-trust architecture',
        'Endpoint protection'
      ]
    },
    {
      id: 3,
      name: 'Network Infrastructure',
      description: 'Enterprise-grade network design, implementation, and management with high availability and security.',
      icon: Network,
      price: 'Starting at $1,800/month',
      features: [
        'Network Design & Planning',
        'Wireless Solutions',
        'VPN Implementation',
        'Network Monitoring',
        'Performance Optimization',
        'Security Hardening'
      ],
      category: 'Networking',
      color: 'from-green-500 to-emerald-600',
      popular: false,
      capabilities: [
        'SD-WAN implementation',
        'Network segmentation',
        'Quality of Service (QoS)',
        'Bandwidth management',
        'Network redundancy'
      ]
    },
    {
      id: 4,
      name: 'Database Management',
      description: 'Expert database administration, optimization, and management for SQL and NoSQL databases.',
      icon: Database,
      price: 'Starting at $1,500/month',
      features: [
        'Database Administration',
        'Performance Tuning',
        'Backup & Recovery',
        'Security Hardening',
        'Migration Services',
        'Monitoring & Alerting'
      ],
      category: 'Data Management',
      color: 'from-purple-500 to-indigo-600',
      popular: false,
      capabilities: [
        'MySQL/PostgreSQL optimization',
        'MongoDB cluster management',
        'Data migration services',
        'Database security audits',
        'High availability setup'
      ]
    },
    {
      id: 5,
      name: 'DevOps & CI/CD',
      description: 'Complete DevOps implementation with continuous integration, deployment pipelines, and infrastructure automation.',
      icon: Code,
      price: 'Starting at $2,200/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure Automation',
        'Container Orchestration',
        'Monitoring & Logging',
        'Version Control',
        'Release Management'
      ],
      category: 'Development',
      color: 'from-orange-500 to-red-600',
      popular: true,
      capabilities: [
        'Jenkins/GitLab CI setup',
        'Kubernetes deployment',
        'Docker containerization',
        'Infrastructure monitoring',
        'Automated testing'
      ]
    },
    {
      id: 6,
      name: 'IT Support & Helpdesk',
      description: '24/7 IT support services with remote assistance, ticketing system, and proactive monitoring.',
      icon: Users,
      price: 'Starting at $800/month',
      features: [
        '24/7 Technical Support',
        'Remote Assistance',
        'Ticketing System',
        'Proactive Monitoring',
        'Hardware Management',
        'Software Installation'
      ],
      category: 'Support',
      color: 'from-cyan-500 to-blue-600',
      popular: false,
      capabilities: [
        'Level 1-3 support',
        'Remote desktop support',
        'Asset management',
        'Software licensing',
        'User training'
      ]
    },
    {
      id: 7,
      name: 'Server Management',
      description: 'Comprehensive server administration, maintenance, and optimization for Windows and Linux environments.',
      icon: Server,
      price: 'Starting at $1,000/month',
      features: [
        'Server Administration',
        'Performance Monitoring',
        'Security Hardening',
        'Patch Management',
        'Capacity Planning',
        'Disaster Recovery'
      ],
      category: 'Infrastructure',
      color: 'from-gray-500 to-slate-600',
      popular: false,
      capabilities: [
        'Windows Server management',
        'Linux server administration',
        'Virtualization setup',
        'Server clustering',
        'Performance optimization'
      ]
    },
    {
      id: 8,
      name: 'Mobile Device Management',
      description: 'Enterprise mobile device management with security policies, app management, and device monitoring.',
      icon: Smartphone,
      price: 'Starting at $600/month',
      features: [
        'Device Enrollment',
        'Security Policies',
        'App Management',
        'Remote Wipe',
        'Compliance Monitoring',
        'User Training'
      ],
      category: 'Mobile',
      color: 'from-indigo-500 to-purple-600',
      popular: false,
      capabilities: [
        'iOS/Android management',
        'BYOD policy implementation',
        'App store management',
        'Device security policies',
        'Lost device tracking'
      ]
    }
  ];

  const technologies = [
    {
      name: 'Cloud Platforms',
      icon: Cloud,
      services: [
        'Amazon Web Services (AWS)',
        'Microsoft Azure',
        'Google Cloud Platform',
        'IBM Cloud',
        'Oracle Cloud'
      ]
    },
    {
      name: 'Security Tools',
      icon: Shield,
      services: [
        'Firewall Management',
        'SIEM Solutions',
        'Endpoint Protection',
        'Identity Management',
        'Encryption Services'
      ]
    },
    {
      name: 'Database Systems',
      icon: Database,
      services: [
        'MySQL & PostgreSQL',
        'MongoDB & Cassandra',
        'Redis & Elasticsearch',
        'Oracle & SQL Server',
        'Cloud Databases'
      ]
    },
    {
      name: 'DevOps Tools',
      icon: Code,
      services: [
        'Docker & Kubernetes',
        'Jenkins & GitLab CI',
        'Terraform & Ansible',
        'Prometheus & Grafana',
        'ELK Stack'
      ]
    },
    {
      name: 'Monitoring',
      icon: Monitor,
      services: [
        'Application Performance',
        'Infrastructure Monitoring',
        'Log Management',
        'Alert Systems',
        'Dashboards & Reports'
      ]
    },
    {
      name: 'Networking',
      icon: Network,
      services: [
        'Cisco & Juniper',
        'SD-WAN Solutions',
        'Load Balancers',
        'VPN & Remote Access',
        'Wireless Networks'
      ]
    }
  ];

  const serviceLevels = [
    {
      name: 'Basic Support',
      price: '$800/month',
      features: [
        'Business hours support',
        'Email & phone support',
        'Basic monitoring',
        'Monthly reports',
        'Standard response time'
      ],
      color: 'from-gray-500 to-slate-600'
    },
    {
      name: 'Professional Support',
      price: '$1,500/month',
      features: [
        '24/7 support coverage',
        'Priority response time',
        'Proactive monitoring',
        'Weekly reports',
        'Dedicated account manager'
      ],
      color: 'from-blue-500 to-purple-600',
      popular: true
    },
    {
      name: 'Enterprise Support',
      price: '$3,000/month',
      features: [
        '24/7 dedicated support',
        'Immediate response time',
        'Advanced monitoring',
        'Daily reports',
        'On-site support available'
      ],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services & Solutions
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
            Enterprise-grade IT infrastructure and support services
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Our comprehensive IT services provide enterprise-grade infrastructure, security, and support solutions 
            that keep your business running smoothly. From cloud migration to cybersecurity, we deliver reliable 
            and scalable IT solutions tailored to your needs.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Infrastructure Projects</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">15min</div>
              <div className="text-gray-300">Average Response Time</div>
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Our IT Service Portfolio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <div
                key={service.id}
                className={`quantum-card p-6 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                    {service.category}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Capabilities:</h4>
                  <ul className="space-y-1">
                    {service.capabilities.slice(0, 3).map((capability, index) => (
                      <li key={index} className="text-xs text-gray-400 flex items-center">
                        <Target className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Technology Stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="quantum-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                </div>
                
                <ul className="space-y-2">
                  {tech.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm text-gray-300">
                      <Layers className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Service Level Agreements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Service Level Agreements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceLevels.map((level, index) => (
              <div
                key={index}
                className={`quantum-card p-8 text-center ${
                  level.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {level.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">{level.name}</h3>
                <div className={`text-4xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent mb-6`}>
                  {level.price}
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  level.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our IT experts help you build a robust, secure, and scalable infrastructure that supports your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;
