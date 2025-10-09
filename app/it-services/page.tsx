'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Headphones, Printer, Camera, Wrench, Cog, Activity, MessageCircle, Mic, Phone } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Core Infrastructure Services
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Comprehensive cloud solutions with migration, optimization, and management for AWS, Azure, and GCP platforms.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Multi-cloud strategy', 'Cloud migration', 'Auto-scaling', 'Load balancing', 'Disaster recovery', 'Cost optimization'],
      price: 'Starting at $500/month',
      category: 'Infrastructure',
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance reliability', 'Global availability'],
      marketPrice: '$800-2000/month',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker']
    },
    {
      title: 'Advanced Cybersecurity Solutions',
      description: 'Enterprise-grade security with threat detection, vulnerability assessment, and 24/7 monitoring.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection', 'Vulnerability assessment', 'Security monitoring', 'Incident response', 'Compliance', 'Penetration testing'],
      price: 'Starting at $800/month',
      category: 'Security',
      benefits: ['Protect against 99.9% of threats', 'Ensure compliance', 'Reduce security incidents', '24/7 monitoring'],
      marketPrice: '$1200-3000/month',
      technologies: ['SIEM', 'Firewalls', 'EDR', 'MDR', 'Zero Trust', 'SOC']
    },
    {
      title: 'Database Management & Optimization',
      description: 'High-performance database solutions with optimization, backup, and real-time monitoring.',
      icon: <Database className="w-8 h-8" />,
      features: ['Performance tuning', 'Backup & recovery', 'Data migration', 'Monitoring', 'Clustering', 'Replication'],
      price: 'Starting at $300/month',
      category: 'Data',
      benefits: ['Improve performance by 60%', 'Ensure data integrity', 'Reduce downtime', 'Scale efficiently'],
      marketPrice: '$500-1500/month',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle']
    },
    {
      title: 'Network Infrastructure & Security',
      description: 'Robust networking solutions with advanced security, monitoring, and optimization.',
      icon: <Network className="w-8 h-8" />,
      features: ['Network design', 'VPN setup', 'Firewall configuration', 'Monitoring', 'SD-WAN', 'Network optimization'],
      price: 'Starting at $400/month',
      category: 'Infrastructure',
      benefits: ['Improve network performance', 'Enhance security', 'Reduce latency', 'Optimize bandwidth'],
      marketPrice: '$600-1800/month',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'SD-WAN', 'MPLS', '5G']
    },
    {
      title: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps transformation with automated testing, deployment, and monitoring.',
      icon: <Code className="w-8 h-8" />,
      features: ['Automated testing', 'Continuous deployment', 'Infrastructure as code', 'Monitoring', 'GitOps', 'Container orchestration'],
      price: 'Starting at $600/month',
      category: 'Development',
      benefits: ['Deploy 10x faster', 'Reduce errors by 80%', 'Improve collaboration', 'Scale development'],
      marketPrice: '$1000-2500/month',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible']
    },
    {
      title: '24/7 IT Support & Help Desk',
      description: 'Comprehensive technical support with remote assistance, system maintenance, and user training.',
      icon: <Users className="w-8 h-8" />,
      features: ['Help desk', 'Remote support', 'System maintenance', 'User training', 'Proactive monitoring', 'Knowledge base'],
      price: 'Starting at $200/month',
      category: 'Support',
      benefits: ['Reduce downtime by 70%', 'Improve user satisfaction', 'Lower support costs', 'Proactive maintenance'],
      marketPrice: '$300-800/month',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'Monitoring Tools', 'Ticketing Systems']
    },

    // Advanced IT Services
    {
      title: 'AI-Powered IT Operations',
      description: 'Intelligent IT operations with AI-driven monitoring, predictive maintenance, and automated incident response.',
      icon: <Brain className="w-8 h-8" />,
      features: ['AI monitoring', 'Predictive maintenance', 'Automated response', 'Anomaly detection', 'Capacity planning', 'Performance optimization'],
      price: 'Starting at $1200/month',
      category: 'AI Operations',
      benefits: ['Prevent 90% of incidents', 'Reduce maintenance costs', 'Improve uptime', 'Automate operations'],
      marketPrice: '$2000-5000/month',
      technologies: ['Machine Learning', 'AIOps', 'APM', 'Log Analytics', 'Predictive Analytics']
    },
    {
      title: 'Enterprise Data Analytics Platform',
      description: 'Advanced data analytics with real-time processing, visualization, and business intelligence.',
      icon: <BarChart className="w-8 h-8" />,
      features: ['Real-time analytics', 'Data visualization', 'Business intelligence', 'Data warehousing', 'ETL processes', 'Reporting'],
      price: 'Starting at $800/month',
      category: 'Analytics',
      benefits: ['Make data-driven decisions', 'Improve business insights', 'Reduce reporting time', 'Scale analytics'],
      marketPrice: '$1200-3000/month',
      technologies: ['Tableau', 'Power BI', 'Apache Spark', 'Hadoop', 'Kafka', 'Elasticsearch']
    },
    {
      title: 'Mobile App Development & Management',
      description: 'Cross-platform mobile app development with native performance and cloud backend integration.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Cross-platform development', 'Native performance', 'Cloud integration', 'Push notifications', 'Analytics', 'App store deployment'],
      price: 'Starting at $1500/month',
      category: 'Mobile Development',
      benefits: ['Reach more users', 'Improve user experience', 'Reduce development time', 'Scale globally'],
      marketPrice: '$2500-6000/month',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'AWS Mobile']
    },
    {
      title: 'API Development & Management',
      description: 'Comprehensive API solutions with development, testing, security, and monitoring.',
      icon: <Globe className="w-8 h-8" />,
      features: ['API development', 'API testing', 'API security', 'API monitoring', 'Documentation', 'Rate limiting'],
      price: 'Starting at $700/month',
      category: 'API Services',
      benefits: ['Enable integrations', 'Improve security', 'Monitor performance', 'Scale APIs'],
      marketPrice: '$1000-2500/month',
      technologies: ['REST', 'GraphQL', 'OpenAPI', 'Kong', 'AWS API Gateway', 'Postman']
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions with disaster recovery planning and business continuity.',
      icon: <HardDrive className="w-8 h-8" />,
      features: ['Automated backups', 'Disaster recovery', 'Business continuity', 'Data replication', 'Recovery testing', 'Compliance'],
      price: 'Starting at $400/month',
      category: 'Data Protection',
      benefits: ['Protect critical data', 'Minimize downtime', 'Ensure compliance', 'Quick recovery'],
      marketPrice: '$600-1800/month',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'RTO/RPO', 'DRaaS']
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Comprehensive compliance management with audit preparation and regulatory adherence.',
      icon: <FileText className="w-8 h-8" />,
      features: ['Compliance monitoring', 'Audit preparation', 'Policy management', 'Risk assessment', 'Training', 'Reporting'],
      price: 'Starting at $900/month',
      category: 'Compliance',
      benefits: ['Ensure compliance', 'Reduce audit risks', 'Automate compliance', 'Stay updated'],
      marketPrice: '$1200-3000/month',
      technologies: ['GRC Tools', 'SOX', 'GDPR', 'HIPAA', 'ISO 27001', 'NIST']
    },

    // Specialized IT Services
    {
      title: 'IoT & Edge Computing Solutions',
      description: 'Internet of Things implementation with edge computing, device management, and data processing.',
      icon: <Cpu className="w-8 h-8" />,
      features: ['IoT device management', 'Edge computing', 'Data processing', 'Device security', 'Connectivity', 'Analytics'],
      price: 'Starting at $1000/month',
      category: 'IoT',
      benefits: ['Connect devices', 'Process data locally', 'Improve efficiency', 'Enable automation'],
      marketPrice: '$1500-4000/month',
      technologies: ['AWS IoT', 'Azure IoT', 'Edge Computing', 'MQTT', 'LoRaWAN', '5G']
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain implementation with smart contracts, DeFi, and Web3 integration.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Blockchain development', 'Smart contracts', 'DeFi solutions', 'Web3 integration', 'NFT platforms', 'Cryptocurrency'],
      price: 'Starting at $2000/month',
      category: 'Blockchain',
      benefits: ['Enable decentralization', 'Improve security', 'Reduce costs', 'Create new opportunities'],
      marketPrice: '$3000-8000/month',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'MetaMask', 'DeFi Protocols']
    },
    {
      title: 'Quantum Computing Services',
      description: 'Quantum computing solutions with algorithm development and quantum optimization.',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Quantum algorithms', 'Quantum optimization', 'Quantum simulation', 'Quantum machine learning', 'Research', 'Consulting'],
      price: 'Starting at $5000/month',
      category: 'Quantum',
      benefits: ['Solve complex problems', 'Exponential speedup', 'Future-proof technology', 'Competitive advantage'],
      marketPrice: '$8000-20000/month',
      technologies: ['IBM Qiskit', 'Google Cirq', 'Microsoft Q#', 'Rigetti', 'IonQ', 'D-Wave']
    },
    {
      title: 'Robotic Process Automation (RPA)',
      description: 'Intelligent automation with RPA bots for repetitive tasks and process optimization.',
      icon: <Settings className="w-8 h-8" />,
      features: ['RPA bot development', 'Process automation', 'Workflow optimization', 'Bot management', 'Integration', 'Monitoring'],
      price: 'Starting at $800/month',
      category: 'Automation',
      benefits: ['Automate repetitive tasks', 'Reduce errors', 'Improve efficiency', 'Scale operations'],
      marketPrice: '$1200-3000/month',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Power Automate', 'RPA Tools']
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset tracking with lifecycle management and cost optimization.',
      icon: <Monitor className="w-8 h-8" />,
      features: ['Asset tracking', 'Lifecycle management', 'Cost optimization', 'License management', 'Inventory', 'Reporting'],
      price: 'Starting at $300/month',
      category: 'Asset Management',
      benefits: ['Track all assets', 'Optimize costs', 'Ensure compliance', 'Reduce waste'],
      marketPrice: '$500-1200/month',
      technologies: ['ITAM Tools', 'CMDB', 'Asset Tracking', 'License Management', 'Cost Analysis']
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs with certification and skill development.',
      icon: <Users className="w-8 h-8" />,
      features: ['Technical training', 'Certification programs', 'Skill assessment', 'Custom training', 'Online learning', 'Certification tracking'],
      price: 'Starting at $200/month',
      category: 'Training',
      benefits: ['Improve team skills', 'Increase productivity', 'Reduce support needs', 'Career development'],
      marketPrice: '$300-800/month',
      technologies: ['Learning Management Systems', 'Virtual Labs', 'Certification Programs', 'Skill Assessment']
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                    <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Key Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Benefits:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="text-xs text-gray-500">
                        +{service.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/contact"
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your IT?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;