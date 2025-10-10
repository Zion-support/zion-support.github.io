'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Cloud, 
  Server, 
  Shield, 
  Database, 
  Network, 
  Monitor, 
  Smartphone, 
  Laptop, 
  HardDrive, 
  Wifi, 
  Lock, 
  Settings,
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  Users, 
  Zap,
  Cpu,
  BarChart,
  Headphones,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Play,
  Pause,
  RefreshCw,
  Code,
  Terminal,
  GitBranch,
  Layers,
  Workflow
} from 'lucide-react';

interface ITService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    basic: string;
    professional: string;
    enterprise: string;
  };
  category: string;
  popular: boolean;
  useCases: string[];
  technologies: string[];
}

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const itServices: ITService[] = [
    {
      id: '1',
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud',
      features: [
        'Cloud migration planning and execution',
        'Multi-cloud architecture design',
        'Auto-scaling and load balancing',
        'Disaster recovery and backup solutions',
        'Cost optimization and monitoring',
        'Security and compliance implementation',
        '24/7 cloud monitoring and support',
        'DevOps and CI/CD pipeline setup'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Enable remote work capabilities'
      ],
      pricing: {
        basic: '$2,000/month',
        professional: '$4,500/month',
        enterprise: 'Custom'
      },
      category: 'Cloud',
      popular: true,
      useCases: ['Cloud migration', 'Hybrid cloud setup', 'Disaster recovery', 'Cost optimization'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker']
    },
    {
      id: '2',
      icon: Server,
      title: 'Server Management & Maintenance',
      description: 'Comprehensive server administration including setup, monitoring, maintenance, and optimization',
      features: [
        'Server installation and configuration',
        'Performance monitoring and optimization',
        'Security hardening and updates',
        'Backup and disaster recovery',
        'Load balancing and clustering',
        'Patch management and maintenance',
        'Capacity planning and scaling',
        '24/7 monitoring and alerting'
      ],
      benefits: [
        'Ensure 99.9% uptime',
        'Reduce maintenance costs by 50%',
        'Improve performance and reliability',
        'Proactive issue resolution'
      ],
      pricing: {
        basic: '$1,500/month',
        professional: '$3,000/month',
        enterprise: 'Custom'
      },
      category: 'Infrastructure',
      popular: true,
      useCases: ['Server administration', 'Performance optimization', 'Security hardening', 'Disaster recovery'],
      technologies: ['Linux', 'Windows Server', 'VMware', 'Hyper-V', 'Nagios', 'Zabbix']
    },
    {
      id: '3',
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions including threat detection, prevention, and compliance management',
      features: [
        'Security assessment and auditing',
        'Firewall and network security',
        'Endpoint protection and antivirus',
        'Email security and spam filtering',
        'Vulnerability scanning and patching',
        'Security awareness training',
        'Compliance management (SOC2, GDPR, HIPAA)',
        'Incident response and forensics'
      ],
      benefits: [
        'Protect against 99.9% of threats',
        'Ensure compliance with regulations',
        'Reduce security incidents by 90%',
        'Minimize business risk and liability'
      ],
      pricing: {
        basic: '$2,500/month',
        professional: '$5,000/month',
        enterprise: 'Custom'
      },
      category: 'Security',
      popular: true,
      useCases: ['Security auditing', 'Threat protection', 'Compliance management', 'Incident response'],
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'CrowdStrike', 'Proofpoint', 'Qualys']
    },
    {
      id: '4',
      icon: Database,
      title: 'Database Management & Optimization',
      description: 'Expert database administration, optimization, and migration services for all major database platforms',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and recovery strategies',
        'Database migration and upgrades',
        'Security and access control',
        'Monitoring and alerting',
        'High availability and clustering',
        'Data archiving and cleanup'
      ],
      benefits: [
        'Improve database performance by 300%',
        'Ensure data integrity and security',
        'Reduce downtime and data loss',
        'Optimize storage and costs'
      ],
      pricing: {
        basic: '$1,800/month',
        professional: '$3,500/month',
        enterprise: 'Custom'
      },
      category: 'Database',
      popular: false,
      useCases: ['Database optimization', 'Migration projects', 'Performance tuning', 'Backup strategies'],
      technologies: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server', 'MongoDB', 'Redis']
    },
    {
      id: '5',
      icon: Network,
      title: 'Network Design & Management',
      description: 'Complete network solutions including design, implementation, monitoring, and optimization',
      features: [
        'Network architecture and design',
        'Router and switch configuration',
        'Wireless network setup and optimization',
        'VPN and remote access solutions',
        'Network monitoring and management',
        'Bandwidth optimization',
        'Network security implementation',
        'Disaster recovery planning'
      ],
      benefits: [
        'Improve network performance by 200%',
        'Enhance security and reliability',
        'Reduce network downtime',
        'Optimize bandwidth usage'
      ],
      pricing: {
        basic: '$1,200/month',
        professional: '$2,500/month',
        enterprise: 'Custom'
      },
      category: 'Networking',
      popular: false,
      useCases: ['Network design', 'Performance optimization', 'Security implementation', 'Remote access'],
      technologies: ['Cisco', 'Juniper', 'Aruba', 'Ubiquiti', 'Fortinet', 'Palo Alto']
    },
    {
      id: '6',
      icon: Monitor,
      title: 'IT Monitoring & Management',
      description: 'Comprehensive IT monitoring solutions for proactive issue detection and resolution',
      features: [
        '24/7 system monitoring',
        'Performance metrics and alerting',
        'Log analysis and correlation',
        'Capacity planning and forecasting',
        'Automated incident response',
        'Custom dashboards and reporting',
        'Integration with ticketing systems',
        'Mobile monitoring and alerts'
      ],
      benefits: [
        'Prevent 80% of IT issues',
        'Reduce downtime by 90%',
        'Improve system performance',
        'Enable proactive maintenance'
      ],
      pricing: {
        basic: '$1,000/month',
        professional: '$2,200/month',
        enterprise: 'Custom'
      },
      category: 'Monitoring',
      popular: false,
      useCases: ['System monitoring', 'Performance optimization', 'Incident prevention', 'Capacity planning'],
      technologies: ['Nagios', 'Zabbix', 'PRTG', 'SolarWinds', 'Datadog', 'New Relic']
    },
    {
      id: '7',
      icon: Smartphone,
      title: 'Mobile Device Management',
      description: 'Complete mobile device management including security, deployment, and support',
      features: [
        'Mobile device enrollment and setup',
        'Security policy enforcement',
        'App management and distribution',
        'Remote device management',
        'Data encryption and protection',
        'Lost device tracking and wiping',
        'Compliance monitoring',
        'User training and support'
      ],
      benefits: [
        'Secure mobile devices and data',
        'Simplify device management',
        'Ensure compliance with policies',
        'Reduce support overhead'
      ],
      pricing: {
        basic: '$800/month',
        professional: '$1,800/month',
        enterprise: 'Custom'
      },
      category: 'Mobile',
      popular: false,
      useCases: ['Device security', 'App management', 'Compliance monitoring', 'Remote support'],
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Citrix', 'Jamf']
    },
    {
      id: '8',
      icon: HardDrive,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data protection solutions including backup, recovery, and disaster recovery',
      features: [
        'Automated backup scheduling',
        'Incremental and full backups',
        'Offsite and cloud backup storage',
        'Disaster recovery planning',
        'Data restoration testing',
        'Compliance and retention policies',
        'Encryption and security',
        '24/7 monitoring and alerting'
      ],
      benefits: [
        'Protect critical business data',
        'Minimize data loss and downtime',
        'Ensure compliance requirements',
        'Enable quick disaster recovery'
      ],
      pricing: {
        basic: '$1,200/month',
        professional: '$2,500/month',
        enterprise: 'Custom'
      },
      category: 'Backup',
      popular: false,
      useCases: ['Data protection', 'Disaster recovery', 'Compliance', 'Business continuity'],
      technologies: ['Veeam', 'Commvault', 'Acronis', 'Backup Exec', 'AWS Backup', 'Azure Backup']
    },
    {
      id: '9',
      icon: Settings,
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services including helpdesk, troubleshooting, and user assistance',
      features: [
        '24/7 helpdesk support',
        'Remote desktop assistance',
        'Hardware and software troubleshooting',
        'User account management',
        'Software installation and updates',
        'Printer and peripheral support',
        'Email and communication setup',
        'IT training and documentation'
      ],
      benefits: [
        'Reduce IT support costs by 60%',
        'Improve user productivity',
        'Minimize downtime and issues',
        'Enhance user satisfaction'
      ],
      pricing: {
        basic: '$1,500/month',
        professional: '$3,000/month',
        enterprise: 'Custom'
      },
      category: 'Support',
      popular: true,
      useCases: ['Technical support', 'User assistance', 'Issue resolution', 'Training'],
      technologies: ['ServiceNow', 'Jira Service Desk', 'Freshservice', 'ManageEngine', 'TeamViewer']
    },
    {
      id: '10',
      icon: Code,
      title: 'Software Development & Integration',
      description: 'Custom software development and system integration services for business applications',
      features: [
        'Custom application development',
        'API development and integration',
        'Legacy system modernization',
        'Database integration',
        'Third-party software integration',
        'Mobile app development',
        'Web application development',
        'Quality assurance and testing'
      ],
      benefits: [
        'Streamline business processes',
        'Improve efficiency and productivity',
        'Enable digital transformation',
        'Reduce manual work and errors'
      ],
      pricing: {
        basic: '$3,000/month',
        professional: '$6,000/month',
        enterprise: 'Custom'
      },
      category: 'Development',
      popular: false,
      useCases: ['Custom development', 'System integration', 'API development', 'Legacy modernization'],
      technologies: ['Python', 'Java', '.NET', 'Node.js', 'React', 'Angular', 'Vue.js']
    },
    {
      id: '11',
      icon: Workflow,
      title: 'IT Process Automation',
      description: 'Automate IT processes and workflows to improve efficiency and reduce manual work',
      features: [
        'Workflow automation design',
        'Process mapping and optimization',
        'Automated provisioning and deprovisioning',
        'Ticket routing and escalation',
        'Report generation and distribution',
        'Compliance monitoring automation',
        'Integration with existing systems',
        'Performance monitoring and optimization'
      ],
      benefits: [
        'Automate 70% of IT processes',
        'Reduce manual work and errors',
        'Improve process efficiency',
        'Ensure consistent compliance'
      ],
      pricing: {
        basic: '$2,200/month',
        professional: '$4,500/month',
        enterprise: 'Custom'
      },
      category: 'Automation',
      popular: false,
      useCases: ['Process automation', 'Workflow optimization', 'Compliance automation', 'Integration'],
      technologies: ['Power Automate', 'UiPath', 'Automation Anywhere', 'Zapier', 'Custom Scripts']
    },
    {
      id: '12',
      icon: Globe,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to align technology with business goals and drive digital transformation',
      features: [
        'IT strategy and planning',
        'Technology assessment and evaluation',
        'Digital transformation planning',
        'IT budget and cost optimization',
        'Vendor evaluation and selection',
        'Technology roadmap development',
        'Change management and training',
        'Ongoing advisory services'
      ],
      benefits: [
        'Align IT with business objectives',
        'Optimize technology investments',
        'Enable digital transformation',
        'Reduce IT costs and complexity'
      ],
      pricing: {
        basic: '$2,500/month',
        professional: '$5,000/month',
        enterprise: 'Custom'
      },
      category: 'Consulting',
      popular: true,
      useCases: ['IT strategy', 'Digital transformation', 'Technology assessment', 'Vendor selection'],
      technologies: ['Strategic Planning', 'Technology Assessment', 'Change Management', 'Project Management']
    }
  ];

  const categories = ['All', 'Cloud', 'Infrastructure', 'Security', 'Database', 'Networking', 'Monitoring', 'Mobile', 'Backup', 'Support', 'Development', 'Automation', 'Consulting'];

  const benefits = [
    '24/7 expert support and monitoring',
    'Proactive issue prevention and resolution',
    'Scalable solutions for any business size',
    'Compliance with industry standards',
    'Regular security updates and patches',
    'Cost-effective pricing and flexible plans',
    'Integration with existing systems',
    'White-label solutions available'
  ];

  const stats = [
    { icon: <Server className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Servers Managed' },
    { icon: <Shield className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Security Uptime' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '10K+', label: 'Users Supported' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '24/7', label: 'Support Available' }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions & Support</title>
        <meta name="description" content="Complete IT services including cloud migration, cybersecurity, server management, and 24/7 support. Transform your IT infrastructure with our expert solutions. Starting at $800/month." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, server management, IT support, network management, database administration, IT consulting" />
      </Helmet>

      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions including cloud migration, cybersecurity, server management, and 24/7 support. 
              Transform your IT infrastructure with our expert team and cutting-edge technology.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT solutions designed to optimize your infrastructure, enhance security, and drive business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-cyan-400 font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-cyan-400 text-sm font-medium">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-cyan-400 font-semibold text-sm mb-2">Benefits:</h4>
                      <div className="text-xs text-gray-400">
                        {service.benefits.join(' • ')}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{service.pricing.basic}</div>
                      <div className="text-sm text-gray-400">Starting from</div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105">
                        Get Started
                      </button>
                      <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No services found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine deep technical expertise with business understanding to deliver IT solutions that drive real value.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can optimize your infrastructure, enhance security, and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Server className="w-5 h-5 mr-2" />
                  Get IT Assessment
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;
