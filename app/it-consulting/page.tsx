import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, 
  Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, 
  Settings, Calendar, CheckSquare, FileText, Mail, Phone, MapPin, 
  DollarSign, Clock, Award, Rocket, Eye, MessageSquare, Search, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, 
  CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, 
  Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, 
  Paintbrush, Scissors, BookOpen, Calculator, Compass, PieChart, 
  TrendingDown, Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, 
  CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, 
  Mail as MailIcon, MapPin as Location, ExternalLink, Play, 
  Download, Upload, RefreshCw, Monitor, Smartphone as Mobile, 
  Tablet, Laptop, Server, HardDrive, Wifi, Bluetooth, 
  Battery, Power, Wrench as Tools, Settings as Cog, 
  Bell, User, UserPlus, UserCheck, UserX, Users as Team, 
  UserCog, UserShield, UserCheck as UserVerified, 
  UserPlus as UserAdd, UserX as UserRemove, Team as UsersIcon,
  Package, PenTool, Grid3X3, ChevronRight, ChevronDown,
  Network, Router, HardDrive as Storage, Cpu as Processor,
  Wifi as NetworkIcon, Shield as SecurityIcon, Database as DataIcon,
  Cloud as CloudIcon, Server as ServerIcon, Monitor as DisplayIcon,
  Smartphone as MobileIcon, Laptop as LaptopIcon, Tablet as TabletIcon,
  Headphones, Keyboard, Mouse, Printer, Scanner, Camera as CameraIcon,
  HardDrive as DiskIcon, MemoryStick, Cpu as ChipIcon, Zap as PowerIcon
} from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const itServices = [
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Solutions',
      category: 'infrastructure',
      icon: Server,
      description: 'Comprehensive IT infrastructure design, implementation, and management for modern businesses.',
      features: [
        'Network design and implementation',
        'Server setup and configuration',
        'Storage solutions and backup systems',
        'Virtualization and cloud integration',
        'Disaster recovery planning',
        'Performance monitoring and optimization',
        'Security implementation',
        '24/7 technical support'
      ],
      pricing: {
        consultation: { 
          price: 150, 
          period: 'hour', 
          features: ['Infrastructure assessment', 'Design recommendations', 'Implementation planning', 'Cost analysis'] 
        },
        implementation: { 
          price: 5000, 
          period: 'project', 
          features: ['Complete infrastructure setup', 'Hardware procurement', 'Software installation', 'Testing and validation'] 
        },
        management: { 
          price: 299, 
          period: 'month', 
          features: ['24/7 monitoring', 'Regular maintenance', 'Security updates', 'Performance optimization'] 
        }
      },
      benefits: [
        'Improve system reliability by 99.9%',
        'Reduce downtime by 80%',
        'Enhance security posture significantly',
        'Optimize IT costs by 30%'
      ],
      useCases: ['New business setup', 'Infrastructure modernization', 'Disaster recovery', 'Performance optimization'],
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Cisco', 'Dell', 'HP', 'NetApp'],
      certifications: ['Microsoft Certified', 'Cisco Certified', 'VMware Certified', 'CompTIA A+'],
      implementationTime: '2-8 weeks',
      supportLevel: '24/7'
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      category: 'cloud',
      icon: Cloud,
      description: 'Expert cloud migration and infrastructure management across AWS, Azure, and Google Cloud platforms.',
      features: [
        'Cloud strategy and planning',
        'Multi-cloud architecture design',
        'Data migration and synchronization',
        'Cloud security implementation',
        'Cost optimization and monitoring',
        'Disaster recovery in the cloud',
        'Cloud-native application development',
        'DevOps and CI/CD implementation'
      ],
      pricing: {
        assessment: { 
          price: 2500, 
          period: 'project', 
          features: ['Cloud readiness assessment', 'Migration planning', 'Cost analysis', 'Security review'] 
        },
        migration: { 
          price: 15000, 
          period: 'project', 
          features: ['Complete cloud migration', 'Data transfer', 'Application migration', 'Testing and validation'] 
        },
        management: { 
          price: 599, 
          period: 'month', 
          features: ['Cloud monitoring', 'Cost optimization', 'Security management', 'Performance tuning'] 
        }
      },
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance disaster recovery capabilities',
        'Enable remote work capabilities'
      ],
      useCases: ['Legacy system migration', 'Hybrid cloud setup', 'Cloud optimization', 'Disaster recovery'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins'],
      certifications: ['AWS Certified', 'Azure Certified', 'Google Cloud Certified', 'Kubernetes Certified'],
      implementationTime: '4-12 weeks',
      supportLevel: '24/7'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      category: 'security',
      icon: Shield,
      description: 'Comprehensive cybersecurity services including risk assessment, implementation, and ongoing protection.',
      features: [
        'Security risk assessment and audit',
        'Firewall and network security setup',
        'Endpoint protection and antivirus',
        'Email security and spam filtering',
        'Multi-factor authentication implementation',
        'Security awareness training',
        'Incident response planning',
        'Compliance management (GDPR, HIPAA, SOX)'
      ],
      pricing: {
        assessment: { 
          price: 2000, 
          period: 'project', 
          features: ['Security audit', 'Vulnerability assessment', 'Risk analysis', 'Compliance review'] 
        },
        implementation: { 
          price: 8000, 
          period: 'project', 
          features: ['Security tools deployment', 'Policy implementation', 'Staff training', 'Testing and validation'] 
        },
        monitoring: { 
          price: 399, 
          period: 'month', 
          features: ['24/7 security monitoring', 'Threat detection', 'Incident response', 'Regular updates'] 
        }
      },
      benefits: [
        'Reduce security incidents by 90%',
        'Improve compliance posture',
        'Protect against advanced threats',
        'Minimize business disruption'
      ],
      useCases: ['Security audit', 'Compliance requirements', 'Threat protection', 'Incident response'],
      technologies: ['Cisco ASA', 'Palo Alto', 'Fortinet', 'CrowdStrike', 'SentinelOne', 'Proofpoint', 'Mimecast'],
      certifications: ['CISSP', 'CISM', 'CEH', 'Security+', 'CISA'],
      implementationTime: '2-6 weeks',
      supportLevel: '24/7'
    },
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      category: 'data',
      icon: Database,
      description: 'Expert database design, implementation, optimization, and management for all major database platforms.',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and recovery strategies',
        'Data migration and synchronization',
        'Security implementation',
        'Monitoring and alerting',
        'Capacity planning',
        'Disaster recovery planning'
      ],
      pricing: {
        design: { 
          price: 3000, 
          period: 'project', 
          features: ['Database design', 'Schema optimization', 'Indexing strategy', 'Performance planning'] 
        },
        implementation: { 
          price: 10000, 
          period: 'project', 
          features: ['Database setup', 'Data migration', 'Security configuration', 'Testing and validation'] 
        },
        management: { 
          price: 499, 
          period: 'month', 
          features: ['Performance monitoring', 'Regular maintenance', 'Backup management', 'Security updates'] 
        }
      },
      benefits: [
        'Improve database performance by 300%',
        'Reduce downtime by 95%',
        'Enhance data security',
        'Optimize storage costs by 40%'
      ],
      useCases: ['Database migration', 'Performance optimization', 'Data backup', 'Security hardening'],
      technologies: ['SQL Server', 'MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'Redis', 'Elasticsearch'],
      certifications: ['Microsoft SQL Server', 'Oracle Certified', 'MongoDB Certified', 'AWS Database'],
      implementationTime: '2-8 weeks',
      supportLevel: '24/7'
    },
    {
      id: 'network-security',
      name: 'Network Security & Monitoring',
      category: 'security',
      icon: Network,
      description: 'Advanced network security solutions with continuous monitoring and threat detection capabilities.',
      features: [
        'Network security assessment',
        'Firewall configuration and management',
        'Intrusion detection and prevention',
        'Network segmentation',
        'VPN setup and management',
        'Wireless security implementation',
        'Network monitoring and alerting',
        'Security incident response'
      ],
      pricing: {
        assessment: { 
          price: 1500, 
          period: 'project', 
          features: ['Network audit', 'Security analysis', 'Vulnerability scan', 'Recommendations'] 
        },
        implementation: { 
          price: 6000, 
          period: 'project', 
          features: ['Security tools deployment', 'Network configuration', 'Testing and validation', 'Documentation'] 
        },
        monitoring: { 
          price: 299, 
          period: 'month', 
          features: ['24/7 network monitoring', 'Threat detection', 'Incident response', 'Regular reports'] 
        }
      },
      benefits: [
        'Detect threats in real-time',
        'Prevent unauthorized access',
        'Improve network performance',
        'Ensure compliance requirements'
      ],
      useCases: ['Network security audit', 'Threat protection', 'Compliance requirements', 'Performance optimization'],
      technologies: ['Cisco', 'Palo Alto', 'Fortinet', 'SonicWall', 'WatchGuard', 'pfSense', 'Wireshark'],
      certifications: ['CCNA', 'CCNP', 'CISSP', 'Security+', 'Network+'],
      implementationTime: '1-4 weeks',
      supportLevel: '24/7'
    },
    {
      id: 'helpdesk-support',
      name: 'IT Helpdesk & Support Services',
      category: 'support',
      icon: Headphones,
      description: 'Comprehensive IT support services with 24/7 availability and expert technical assistance.',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'Hardware and software troubleshooting',
        'User account management',
        'Email and communication setup',
        'Software installation and updates',
        'Printer and peripheral support',
        'Mobile device management'
      ],
      pricing: {
        basic: { 
          price: 199, 
          period: 'month', 
          features: ['Business hours support', 'Email support', 'Basic troubleshooting', 'Software updates'] 
        },
        professional: { 
          price: 399, 
          period: 'month', 
          features: ['24/7 support', 'Phone and email', 'Remote assistance', 'Priority response'] 
        },
        enterprise: { 
          price: 799, 
          period: 'month', 
          features: ['Dedicated support team', 'On-site visits', 'Custom SLA', 'Proactive monitoring'] 
        }
      },
      benefits: [
        'Reduce IT downtime by 70%',
        'Improve user productivity',
        'Minimize IT-related disruptions',
        'Provide expert technical guidance'
      ],
      useCases: ['General IT support', 'User assistance', 'Troubleshooting', 'Software management'],
      technologies: ['Windows', 'macOS', 'Linux', 'Microsoft Office', 'Google Workspace', 'Remote Desktop'],
      certifications: ['CompTIA A+', 'Microsoft Certified', 'Apple Certified', 'ITIL Foundation'],
      implementationTime: '1-2 weeks',
      supportLevel: '24/7'
    },
    {
      id: 'backup-recovery',
      name: 'Backup & Disaster Recovery',
      category: 'data',
      icon: HardDrive,
      description: 'Comprehensive backup and disaster recovery solutions to protect your critical business data.',
      features: [
        'Automated backup scheduling',
        'Cloud and on-premises backup',
        'Disaster recovery planning',
        'Data replication and synchronization',
        'Backup testing and validation',
        'Recovery time optimization',
        'Compliance backup requirements',
        '24/7 backup monitoring'
      ],
      pricing: {
        setup: { 
          price: 2500, 
          period: 'project', 
          features: ['Backup strategy design', 'System configuration', 'Testing and validation', 'Documentation'] 
        },
        management: { 
          price: 199, 
          period: 'month', 
          features: ['Automated backups', 'Monitoring and alerts', 'Regular testing', 'Storage management'] 
        },
        recovery: { 
          price: 500, 
          period: 'incident', 
          features: ['Emergency recovery', 'Data restoration', 'System recovery', 'Post-recovery support'] 
        }
      },
      benefits: [
        'Protect against data loss',
        'Minimize recovery time',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      useCases: ['Data protection', 'Business continuity', 'Compliance requirements', 'Disaster recovery'],
      technologies: ['Veeam', 'Acronis', 'Commvault', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      certifications: ['Veeam Certified', 'Commvault Certified', 'AWS Certified', 'Azure Certified'],
      implementationTime: '1-3 weeks',
      supportLevel: '24/7'
    },
    {
      id: 'email-security',
      name: 'Email Security & Management',
      category: 'security',
      icon: Mail,
      description: 'Advanced email security solutions to protect against phishing, spam, and malware attacks.',
      features: [
        'Advanced threat protection',
        'Spam and phishing filtering',
        'Email encryption and DLP',
        'Quarantine management',
        'Email archiving and compliance',
        'User training and awareness',
        'Incident response and reporting',
        'Integration with existing systems'
      ],
      pricing: {
        setup: { 
          price: 1500, 
          period: 'project', 
          features: ['Email security assessment', 'System configuration', 'Policy setup', 'User training'] 
        },
        management: { 
          price: 149, 
          period: 'month', 
          features: ['Email filtering', 'Threat protection', 'Quarantine management', 'Regular updates'] 
        },
        perUser: { 
          price: 5, 
          period: 'month', 
          features: ['Per user licensing', 'Advanced features', 'Priority support', 'Custom policies'] 
        }
      },
      benefits: [
        'Block 99.9% of email threats',
        'Reduce phishing attacks by 95%',
        'Improve email deliverability',
        'Ensure compliance requirements'
      ],
      useCases: ['Email security', 'Phishing protection', 'Compliance requirements', 'Email management'],
      technologies: ['Microsoft 365', 'Google Workspace', 'Proofpoint', 'Mimecast', 'Barracuda', 'Cisco'],
      certifications: ['Microsoft 365', 'Google Workspace', 'Proofpoint Certified', 'Cisco Certified'],
      implementationTime: '1-2 weeks',
      supportLevel: '24/7'
    },
    {
      id: 'mobile-device-management',
      name: 'Mobile Device Management (MDM)',
      category: 'mobile',
      icon: Smartphone,
      description: 'Comprehensive mobile device management solutions for secure and efficient mobile workforce.',
      features: [
        'Device enrollment and provisioning',
        'Security policy enforcement',
        'App management and distribution',
        'Remote device management',
        'Data encryption and protection',
        'Lost device tracking and wiping',
        'Compliance monitoring',
        'User self-service portal'
      ],
      pricing: {
        setup: { 
          price: 2000, 
          period: 'project', 
          features: ['MDM platform setup', 'Policy configuration', 'Device enrollment', 'User training'] 
        },
        management: { 
          price: 99, 
          period: 'month', 
          features: ['Device management', 'Security monitoring', 'App distribution', 'Support and updates'] 
        },
        perDevice: { 
          price: 3, 
          period: 'month', 
          features: ['Per device licensing', 'Full MDM features', 'Priority support', 'Custom policies'] 
        }
      },
      benefits: [
        'Secure mobile devices',
        'Enforce security policies',
        'Protect corporate data',
        'Simplify device management'
      ],
      useCases: ['Mobile security', 'BYOD management', 'App distribution', 'Compliance requirements'],
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Citrix', 'Jamf', 'AirWatch'],
      certifications: ['Microsoft Intune', 'VMware Certified', 'MobileIron Certified', 'Citrix Certified'],
      implementationTime: '1-3 weeks',
      supportLevel: '24/7'
    },
    {
      id: 'voip-telephony',
      name: 'VoIP & Unified Communications',
      category: 'communications',
      icon: Phone,
      description: 'Modern VoIP and unified communications solutions for seamless business communication.',
      features: [
        'VoIP phone system setup',
        'Unified communications platform',
        'Video conferencing integration',
        'Mobile app and softphone',
        'Call routing and management',
        'Voicemail and messaging',
        'Integration with business apps',
        '24/7 system monitoring'
      ],
      pricing: {
        setup: { 
          price: 3000, 
          period: 'project', 
          features: ['System design', 'Hardware installation', 'Configuration', 'User training'] 
        },
        management: { 
          price: 199, 
          period: 'month', 
          features: ['System monitoring', 'Maintenance', 'Updates', 'Technical support'] 
        },
        perUser: { 
          price: 25, 
          period: 'month', 
          features: ['Per user licensing', 'Full features', 'Support', 'Updates'] 
        }
      },
      benefits: [
        'Reduce communication costs by 60%',
        'Improve collaboration',
        'Enable remote work',
        'Enhance customer service'
      ],
      useCases: ['Phone system upgrade', 'Remote work setup', 'Call center solutions', 'Video conferencing'],
      technologies: ['Cisco', 'Avaya', 'Mitel', '3CX', 'Microsoft Teams', 'Zoom', 'RingCentral'],
      certifications: ['Cisco Certified', 'Avaya Certified', 'Microsoft Teams', 'Zoom Certified'],
      implementationTime: '2-4 weeks',
      supportLevel: '24/7'
    },
    {
      id: 'it-consulting',
      name: 'Strategic IT Consulting',
      category: 'consulting',
      icon: Briefcase,
      description: 'Strategic IT consulting services to align technology with business objectives and drive growth.',
      features: [
        'IT strategy development',
        'Technology roadmap planning',
        'Digital transformation consulting',
        'IT budget planning and optimization',
        'Vendor evaluation and selection',
        'IT governance and compliance',
        'Change management',
        'Executive IT advisory'
      ],
      pricing: {
        assessment: { 
          price: 5000, 
          period: 'project', 
          features: ['IT assessment', 'Strategy development', 'Roadmap creation', 'Recommendations'] 
        },
        advisory: { 
          price: 200, 
          period: 'hour', 
          features: ['Strategic consulting', 'Technology guidance', 'Decision support', 'Implementation planning'] 
        },
        retainer: { 
          price: 2999, 
          period: 'month', 
          features: ['Ongoing advisory', 'Regular reviews', 'Priority support', 'Strategic planning'] 
        }
      },
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Improve operational efficiency',
        'Drive digital transformation'
      ],
      useCases: ['IT strategy', 'Digital transformation', 'Technology planning', 'Executive advisory'],
      technologies: ['Enterprise Architecture', 'ITIL', 'COBIT', 'Agile', 'DevOps', 'Cloud Strategy'],
      certifications: ['ITIL Expert', 'COBIT Certified', 'Enterprise Architecture', 'Project Management'],
      implementationTime: '2-8 weeks',
      supportLevel: 'Business hours'
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services', icon: Grid3X3 },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'data', name: 'Data', icon: Database },
    { id: 'support', name: 'Support', icon: Headphones },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'communications', name: 'Communications', icon: Phone },
    { id: 'consulting', name: 'Consulting', icon: Briefcase }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading IT Services...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid neural-network-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse">
            Professional <span className="holographic-text">IT Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Comprehensive IT solutions and consulting services to optimize your technology infrastructure and drive business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              Get IT Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-slate-900 cyber-glow-pulse'
                    : 'bg-white/10 text-white hover:bg-cyan-400/20 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors animate-float">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={`mailto:${service.supportEmail || 'info@ziontechgroup.com'}?subject=Interest in ${service.name}`}
                      className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
                      aria-label={`Contact about ${service.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="p-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors"
                      aria-label={`Call about ${service.name}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{service.implementationTime}</div>
                    <div className="text-xs text-gray-400">Implementation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{service.supportLevel}</div>
                    <div className="text-xs text-gray-400">Support Level</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([tier, details]) => (
                      <div key={tier} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 capitalize">{tier}:</span>
                        <span className="text-white font-semibold">
                          ${details.price}/{details.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Expandable Details */}
                <button
                  onClick={() => toggleServiceExpansion(service.id)}
                  className="w-full flex items-center justify-between text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
                >
                  <span className="font-medium">View Details</span>
                  {expandedService === service.id ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {expandedService === service.id && (
                  <div className="space-y-4 mb-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Certifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.certifications.map((cert, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href={`mailto:${service.supportEmail || 'info@ziontechgroup.com'}?subject=Interest in ${service.name}`}
                    className="w-full cyber-button text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Get Quote
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                  >
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-cyan-400 mb-8 neon-glow">
            Let our IT experts help you design, implement, and manage the perfect technology solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsultingPage;