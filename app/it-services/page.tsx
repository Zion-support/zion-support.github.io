import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Cloud, Server, Database, Network, Monitor, Code, Settings, Wrench, ShieldCheck, HardDrive, Router, Smartphone, Laptop, Printer, Camera, Headphones, Keyboard, Mouse, Webcam, Speaker, Microphone, Gamepad2, Watch, Tablet, Desktop, ServerIcon, DatabaseIcon, NetworkIcon, MonitorIcon, CodeIcon, SettingsIcon, WrenchIcon, ShieldCheckIcon, HardDriveIcon, RouterIcon, SmartphoneIcon, LaptopIcon, PrinterIcon, CameraIcon, HeadphonesIcon, KeyboardIcon, MouseIcon, WebcamIcon, SpeakerIcon, MicrophoneIcon, Gamepad2Icon, WatchIcon, TabletIcon, DesktopIcon } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Core IT Infrastructure Services
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and management for enterprise organizations.',
      icon: '🏗️',
      price: '$2,000/month',
      features: [
        'Server Management & Monitoring',
        'Network Design & Implementation',
        'Storage Solutions',
        'Backup & Disaster Recovery',
        'Performance Optimization',
        '24/7 Technical Support'
      ],
      benefits: [
        'Achieve 99.9% uptime',
        'Reduce IT costs by 30%',
        'Improve system performance by 50%',
        'Ensure business continuity'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration services with ongoing management and optimization for maximum efficiency.',
      icon: '☁️',
      price: '$1,500/month',
      features: [
        'Cloud Strategy & Planning',
        'Migration Execution',
        'Cost Optimization',
        'Security Implementation',
        'Performance Monitoring',
        'Multi-cloud Management'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability by 300%',
        'Enhance security posture',
        'Enable remote work capabilities'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Ansible', 'CloudFormation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, prevention, and incident response.',
      icon: '🛡️',
      price: '$2,500/month',
      features: [
        'Security Assessment & Auditing',
        'Threat Detection & Prevention',
        'Vulnerability Management',
        'Incident Response',
        'Security Training',
        'Compliance Management'
      ],
      benefits: [
        'Prevent 99.9% of cyber threats',
        'Reduce security incidents by 80%',
        'Ensure compliance with regulations',
        'Protect sensitive data'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Security',
      technologies: ['SIEM', 'Firewalls', 'EDR', 'MDR', 'Penetration Testing', 'Security Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Modern DevOps practices with automated CI/CD pipelines, infrastructure as code, and monitoring.',
      icon: '🔄',
      price: '$1,800/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Logging',
        'Automated Testing',
        'Deployment Automation'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment failures by 90%',
        'Improve code quality',
        'Enable rapid scaling'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Network & Connectivity Services
    {
      title: 'Network Design & Implementation',
      description: 'Advanced network architecture design and implementation for optimal performance and security.',
      icon: '🌐',
      price: '$1,200/month',
      features: [
        'Network Architecture Design',
        'Wireless Network Setup',
        'VPN Configuration',
        'Load Balancing',
        'Network Monitoring',
        'Performance Optimization'
      ],
      benefits: [
        'Improve network speed by 200%',
        'Reduce downtime by 95%',
        'Enhance security posture',
        'Support remote work'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'Aruba', 'Ubiquiti'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'WiFi & Wireless Solutions',
      description: 'Enterprise-grade wireless network solutions with seamless connectivity and security.',
      icon: '📶',
      price: '$800/month',
      features: [
        'WiFi 6/6E Implementation',
        'Mesh Network Setup',
        'Guest Network Management',
        'Bandwidth Optimization',
        'Security Configuration',
        'Performance Monitoring'
      ],
      benefits: [
        'Provide seamless connectivity',
        'Support high-density environments',
        'Ensure secure access',
        'Optimize bandwidth usage'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Wireless',
      technologies: ['WiFi 6', 'Mesh Networks', 'Enterprise APs', 'WPA3', '802.11ax', 'Cloud Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'SD-WAN Implementation',
      description: 'Software-defined wide area network solutions for improved connectivity and cost optimization.',
      icon: '🔗',
      price: '$1,500/month',
      features: [
        'SD-WAN Architecture Design',
        'Multi-site Connectivity',
        'Traffic Optimization',
        'Security Integration',
        'Performance Monitoring',
        'Cost Optimization'
      ],
      benefits: [
        'Reduce WAN costs by 50%',
        'Improve application performance',
        'Enhance security',
        'Simplify management'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'SD-WAN',
      technologies: ['Cisco SD-WAN', 'VMware SD-WAN', 'Fortinet SD-WAN', 'Silver Peak', 'Versa', 'Aryaka'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Database & Data Management
    {
      title: 'Database Administration',
      description: 'Comprehensive database management services including design, optimization, and maintenance.',
      icon: '🗄️',
      price: '$1,600/month',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Backup & Recovery',
        'Security Implementation',
        'Monitoring & Maintenance',
        'Migration Services'
      ],
      benefits: [
        'Improve database performance by 300%',
        'Ensure data integrity',
        'Reduce downtime by 90%',
        'Optimize storage costs'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Database',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data protection solutions with automated backup and disaster recovery.',
      icon: '💾',
      price: '$900/month',
      features: [
        'Automated Backup Systems',
        'Disaster Recovery Planning',
        'Data Encryption',
        'Offsite Storage',
        'Recovery Testing',
        'Compliance Management'
      ],
      benefits: [
        'Protect critical data',
        'Minimize data loss',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      marketPrice: '$1,800-3,500/month',
      category: 'Backup',
      technologies: ['Veeam', 'Commvault', 'Acronis', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Migration Services',
      description: 'Seamless data migration between systems with minimal downtime and data integrity.',
      icon: '📦',
      price: '$1,300/month',
      features: [
        'Migration Planning',
        'Data Mapping & Transformation',
        'Validation & Testing',
        'Cutover Execution',
        'Post-migration Support',
        'Data Quality Assurance'
      ],
      benefits: [
        'Minimize migration risks',
        'Ensure data integrity',
        'Reduce downtime',
        'Maintain business continuity'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Migration',
      technologies: ['ETL Tools', 'Data Integration', 'Cloud Migration', 'Database Migration', 'API Integration', 'Data Validation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Hardware & Device Management
    {
      title: 'Hardware Procurement & Management',
      description: 'End-to-end hardware procurement, deployment, and lifecycle management services.',
      icon: '💻',
      price: '$1,100/month',
      features: [
        'Hardware Assessment',
        'Procurement Management',
        'Installation & Configuration',
        'Asset Tracking',
        'Maintenance & Support',
        'Disposal & Recycling'
      ],
      benefits: [
        'Optimize hardware costs',
        'Ensure compatibility',
        'Streamline procurement',
        'Extend hardware lifecycle'
      ],
      marketPrice: '$2,200-4,500/month',
      category: 'Hardware',
      technologies: ['Dell', 'HP', 'Lenovo', 'Cisco', 'Juniper', 'Fortinet'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Device Management & Support',
      description: 'Comprehensive device management including deployment, monitoring, and technical support.',
      icon: '📱',
      price: '$800/month',
      features: [
        'Device Deployment',
        'Remote Management',
        'Software Updates',
        'Security Configuration',
        'Troubleshooting',
        'User Training'
      ],
      benefits: [
        'Improve device performance',
        'Reduce support tickets',
        'Enhance security',
        'Increase user productivity'
      ],
      marketPrice: '$1,600-3,200/month',
      category: 'Device Management',
      technologies: ['MDM Solutions', 'Remote Desktop', 'Patch Management', 'Asset Management', 'Help Desk', 'Ticketing Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Printer & Peripheral Management',
      description: 'Complete printer and peripheral device management with optimization and support.',
      icon: '🖨️',
      price: '$600/month',
      features: [
        'Printer Setup & Configuration',
        'Network Integration',
        'Driver Management',
        'Maintenance & Repairs',
        'Supply Management',
        'Usage Monitoring'
      ],
      benefits: [
        'Reduce printing costs',
        'Improve reliability',
        'Optimize performance',
        'Streamline management'
      ],
      marketPrice: '$1,200-2,400/month',
      category: 'Peripherals',
      technologies: ['HP Printers', 'Canon', 'Epson', 'Xerox', 'Print Management', 'Driver Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Software & Application Services
    {
      title: 'Software Installation & Configuration',
      description: 'Professional software installation, configuration, and optimization services.',
      icon: '⚙️',
      price: '$700/month',
      features: [
        'Software Assessment',
        'Installation & Setup',
        'Configuration & Optimization',
        'License Management',
        'User Training',
        'Ongoing Support'
      ],
      benefits: [
        'Ensure proper installation',
        'Optimize performance',
        'Reduce licensing costs',
        'Improve user adoption'
      ],
      marketPrice: '$1,400-2,800/month',
      category: 'Software',
      technologies: ['Microsoft Office', 'Adobe Creative Suite', 'Business Applications', 'Development Tools', 'Database Software', 'Security Software'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Email & Communication Systems',
      description: 'Complete email and communication system setup, management, and optimization.',
      icon: '📧',
      price: '$1,000/month',
      features: [
        'Email Server Setup',
        'Migration Services',
        'Security Configuration',
        'Spam Protection',
        'Backup & Archiving',
        'Mobile Integration'
      ],
      benefits: [
        'Improve email reliability',
        'Enhance security',
        'Reduce spam',
        'Enable mobile access'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Communication',
      technologies: ['Microsoft Exchange', 'Office 365', 'Google Workspace', 'Zimbra', 'Postfix', 'SpamAssassin'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Application Development & Integration',
      description: 'Custom application development and integration services for business-specific needs.',
      icon: '💻',
      price: '$2,200/month',
      features: [
        'Custom Application Development',
        'API Integration',
        'Database Integration',
        'Third-party Integrations',
        'Testing & Quality Assurance',
        'Deployment & Support'
      ],
      benefits: [
        'Meet specific business needs',
        'Improve efficiency',
        'Integrate systems seamlessly',
        'Reduce manual work'
      ],
      marketPrice: '$4,500-9,000/month',
      category: 'Development',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'PHP'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Monitoring & Management Services
    {
      title: 'IT Monitoring & Alerting',
      description: 'Comprehensive IT infrastructure monitoring with proactive alerting and issue resolution.',
      icon: '📊',
      price: '$1,400/month',
      features: [
        '24/7 Infrastructure Monitoring',
        'Performance Metrics',
        'Alert Management',
        'Incident Response',
        'Capacity Planning',
        'Reporting & Analytics'
      ],
      benefits: [
        'Prevent downtime',
        'Improve performance',
        'Reduce response time',
        'Optimize resources'
      ],
      marketPrice: '$2,800-5,600/month',
      category: 'Monitoring',
      technologies: ['Nagios', 'Zabbix', 'PRTG', 'SolarWinds', 'Datadog', 'New Relic'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Help Desk & Technical Support',
      description: 'Professional help desk services with multi-channel support and issue resolution.',
      icon: '🎧',
      price: '$1,200/month',
      features: [
        'Multi-channel Support',
        'Ticket Management',
        'Remote Assistance',
        'Knowledge Base',
        'User Training',
        'SLA Management'
      ],
      benefits: [
        'Improve user satisfaction',
        'Reduce resolution time',
        'Increase productivity',
        'Minimize downtime'
      ],
      marketPrice: '$2,400-4,800/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira Service Desk', 'Freshservice', 'Zendesk', 'TeamViewer', 'Remote Desktop'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with tracking, optimization, and compliance.',
      icon: '📋',
      price: '$900/month',
      features: [
        'Asset Discovery & Tracking',
        'License Management',
        'Depreciation Tracking',
        'Compliance Reporting',
        'Cost Optimization',
        'Disposal Management'
      ],
      benefits: [
        'Optimize asset utilization',
        'Reduce costs',
        'Ensure compliance',
        'Improve visibility'
      ],
      marketPrice: '$1,800-3,600/month',
      category: 'Asset Management',
      technologies: ['Lansweeper', 'ManageEngine', 'ServiceNow', 'Snipe-IT', 'Asset Panda', 'Freshservice'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Specialized IT Services
    {
      title: 'VoIP & Telephony Solutions',
      description: 'Modern VoIP and telephony solutions with advanced features and cost optimization.',
      icon: '📞',
      price: '$1,100/month',
      features: [
        'VoIP System Setup',
        'Phone System Migration',
        'Call Center Solutions',
        'Video Conferencing',
        'Mobile Integration',
        'Analytics & Reporting'
      ],
      benefits: [
        'Reduce communication costs',
        'Improve call quality',
        'Enable remote work',
        'Enhance collaboration'
      ],
      marketPrice: '$2,200-4,400/month',
      category: 'Telephony',
      technologies: ['Cisco VoIP', 'Avaya', '3CX', 'Zoom', 'Microsoft Teams', 'RingCentral'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Video Surveillance & Security',
      description: 'Comprehensive video surveillance and physical security system implementation.',
      icon: '📹',
      price: '$1,500/month',
      features: [
        'CCTV System Design',
        'Camera Installation',
        'Remote Monitoring',
        'Storage Solutions',
        'Access Control Integration',
        'Mobile App Development'
      ],
      benefits: [
        'Enhance security',
        'Enable remote monitoring',
        'Improve incident response',
        'Reduce theft and vandalism'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Surveillance',
      technologies: ['Hikvision', 'Dahua', 'Axis', 'Milestone', 'Genetec', 'Avigilon'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Compliance & Auditing',
      description: 'Comprehensive IT compliance management and auditing services for regulatory requirements.',
      icon: '📋',
      price: '$1,800/month',
      features: [
        'Compliance Assessment',
        'Policy Development',
        'Audit Preparation',
        'Risk Management',
        'Training & Awareness',
        'Documentation Management'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Reduce audit risks',
        'Improve security posture',
        'Streamline processes'
      ],
      marketPrice: '$3,600-7,200/month',
      category: 'Compliance',
      technologies: ['GRC Tools', 'Audit Software', 'Risk Management', 'Policy Management', 'Training Platforms', 'Documentation Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Disaster Recovery Planning',
      description: 'Comprehensive disaster recovery planning and implementation for business continuity.',
      icon: '🚨',
      price: '$2,000/month',
      features: [
        'Disaster Recovery Planning',
        'Business Impact Analysis',
        'Recovery Testing',
        'Backup Strategy',
        'Communication Plans',
        'Ongoing Maintenance'
      ],
      benefits: [
        'Minimize downtime',
        'Protect critical data',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Disaster Recovery',
      technologies: ['Veeam', 'Zerto', 'Commvault', 'AWS DR', 'Azure Site Recovery', 'Google Cloud DR'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Training & Consulting',
      description: 'Professional IT training and consulting services to enhance team capabilities.',
      icon: '🎓',
      price: '$1,300/month',
      features: [
        'Technical Training',
        'Certification Preparation',
        'Best Practices Consulting',
        'Process Improvement',
        'Technology Assessment',
        'Change Management'
      ],
      benefits: [
        'Improve team skills',
        'Increase productivity',
        'Reduce support needs',
        'Enable innovation'
      ],
      marketPrice: '$2,600-5,200/month',
      category: 'Training',
      technologies: ['Training Platforms', 'Certification Programs', 'E-learning', 'Virtual Labs', 'Assessment Tools', 'Knowledge Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Emerging Technology Services
    {
      title: 'IoT & Smart Device Integration',
      description: 'Internet of Things and smart device integration for modern business environments.',
      icon: '🌐',
      price: '$1,600/month',
      features: [
        'IoT Device Integration',
        'Smart Building Solutions',
        'Sensor Networks',
        'Data Collection & Analysis',
        'Remote Management',
        'Security Implementation'
      ],
      benefits: [
        'Improve efficiency',
        'Enable automation',
        'Reduce costs',
        'Enhance monitoring'
      ],
      marketPrice: '$3,200-6,400/month',
      category: 'IoT',
      technologies: ['IoT Platforms', 'Sensors', 'Edge Computing', 'MQTT', 'LoRaWAN', 'Zigbee'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Edge computing implementation for improved performance and reduced latency.',
      icon: '⚡',
      price: '$1,800/month',
      features: [
        'Edge Infrastructure Design',
        'Data Processing at Edge',
        'Latency Optimization',
        'Bandwidth Reduction',
        'Security Implementation',
        'Monitoring & Management'
      ],
      benefits: [
        'Reduce latency',
        'Improve performance',
        'Lower bandwidth costs',
        'Enable real-time processing'
      ],
      marketPrice: '$3,600-7,200/month',
      category: 'Edge Computing',
      technologies: ['Edge Servers', 'Kubernetes', 'Docker', 'Edge Analytics', '5G', 'Edge AI'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Green IT & Sustainability',
      description: 'Sustainable IT solutions for reducing environmental impact and energy consumption.',
      icon: '🌱',
      price: '$1,400/month',
      features: [
        'Energy Efficiency Assessment',
        'Green Technology Implementation',
        'Carbon Footprint Reduction',
        'Sustainable Procurement',
        'Waste Management',
        'Compliance & Reporting'
      ],
      benefits: [
        'Reduce energy costs',
        'Minimize environmental impact',
        'Meet sustainability goals',
        'Improve brand reputation'
      ],
      marketPrice: '$2,800-5,600/month',
      category: 'Green IT',
      technologies: ['Energy Monitoring', 'Virtualization', 'Cloud Computing', 'Renewable Energy', 'E-waste Management', 'Carbon Tracking'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and more. Enterprise-grade IT support starting at $600/month." />
        <meta name="keywords" content="it services, infrastructure management, cloud migration, cybersecurity, devops, network design, database administration" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to optimize your technology infrastructure and drive business success.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$600</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your IT Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our IT services today and transform your technology operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;