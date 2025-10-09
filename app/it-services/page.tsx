import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Smartphone as Phone, Headphones, Printer, Camera, Wrench, Cog, Activity, Globe as Web, Mail as Email, MessageCircle, Mic, Phone as PhoneIcon } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
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
    {
      title: 'Database Management & Optimization',
      description: 'Expert database administration, optimization, and management for high-performance applications.',
      icon: '🗄️',
      price: '$1,200/month',
      features: [
        'Database Design & Architecture',
        'Performance Tuning',
        'Backup & Recovery',
        'Security Hardening',
        'Monitoring & Alerting',
        'Capacity Planning'
      ],
      benefits: [
        'Improve query performance by 70%',
        'Reduce downtime by 95%',
        'Optimize storage usage by 40%',
        'Ensure data integrity'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Security & Monitoring',
      description: 'Advanced network security solutions with real-time monitoring and threat detection.',
      icon: '🌐',
      price: '$1,600/month',
      features: [
        'Network Design & Implementation',
        'Firewall Configuration',
        'Intrusion Detection',
        'Network Monitoring',
        'Traffic Analysis',
        'VPN Management'
      ],
      benefits: [
        'Detect threats in real-time',
        'Improve network performance by 60%',
        'Reduce security vulnerabilities',
        'Enable secure remote access'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Network Security',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Wireshark', 'Nagios', 'Zabbix'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Support & Help Desk',
      description: 'Comprehensive IT support services with 24/7 help desk and technical assistance.',
      icon: '🎧',
      price: '$800/month',
      features: [
        '24/7 Technical Support',
        'Remote Desktop Support',
        'Hardware & Software Support',
        'User Training',
        'Issue Tracking & Resolution',
        'Knowledge Base Management'
      ],
      benefits: [
        'Resolve 95% of issues remotely',
        'Reduce downtime by 80%',
        'Improve user satisfaction',
        'Enable self-service options'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'TeamViewer', 'Slack', 'Microsoft Teams'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions to protect your critical business data.',
      icon: '💾',
      price: '$900/month',
      features: [
        'Automated Backup Systems',
        'Disaster Recovery Planning',
        'Data Encryption',
        'Offsite Storage',
        'Recovery Testing',
        'Compliance Reporting'
      ],
      benefits: [
        'Protect 100% of critical data',
        'Recover from disasters in minutes',
        'Ensure regulatory compliance',
        'Minimize data loss risks'
      ],
      marketPrice: '$1,800-3,500/month',
      category: 'Backup & Recovery',
      technologies: ['Veeam', 'Commvault', 'Acronis', 'AWS S3', 'Azure Backup', 'Google Cloud Storage'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mobile Device Management',
      description: 'Comprehensive mobile device management and security for BYOD and corporate devices.',
      icon: '📱',
      price: '$700/month',
      features: [
        'Device Enrollment & Provisioning',
        'Security Policy Enforcement',
        'App Management',
        'Remote Wipe & Lock',
        'Compliance Monitoring',
        'User Self-Service Portal'
      ],
      benefits: [
        'Secure 100% of mobile devices',
        'Reduce security risks by 90%',
        'Simplify device management',
        'Enable BYOD policies'
      ],
      marketPrice: '$1,200-2,500/month',
      category: 'Mobile Management',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Jamf', 'AirWatch', 'Samsung Knox'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Comprehensive IT compliance management and governance frameworks for regulatory requirements.',
      icon: '📋',
      price: '$1,400/month',
      features: [
        'Compliance Assessment',
        'Policy Development',
        'Risk Management',
        'Audit Preparation',
        'Training & Awareness',
        'Documentation Management'
      ],
      benefits: [
        'Ensure 100% compliance',
        'Reduce audit findings by 85%',
        'Minimize regulatory risks',
        'Streamline compliance processes'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Compliance',
      technologies: ['GRC Platforms', 'Risk Management Tools', 'Document Management', 'Training Systems', 'Audit Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management with tracking, optimization, and cost control.',
      icon: '📊',
      price: '$600/month',
      features: [
        'Asset Discovery & Inventory',
        'Lifecycle Management',
        'Cost Tracking & Optimization',
        'License Management',
        'Depreciation Tracking',
        'Procurement Support'
      ],
      benefits: [
        'Reduce IT costs by 25%',
        'Improve asset utilization by 40%',
        'Ensure license compliance',
        'Optimize procurement decisions'
      ],
      marketPrice: '$1,200-2,500/month',
      category: 'Asset Management',
      technologies: ['ServiceNow', 'Lansweeper', 'ManageEngine', 'Snipe-IT', 'Asset Panda', 'Freshservice'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting services to align technology with business objectives and drive digital transformation.',
      icon: '💡',
      price: '$1,500/month',
      features: [
        'IT Strategy Development',
        'Technology Roadmap Planning',
        'Digital Transformation',
        'Vendor Evaluation',
        'Cost Optimization',
        'Change Management'
      ],
      benefits: [
        'Align IT with business goals',
        'Reduce technology costs by 30%',
        'Accelerate digital transformation',
        'Improve technology ROI'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'ROI Analysis', 'Change Management', 'Vendor Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and management with 99.9% uptime guarantee.',
      icon: Cloud,
      price: 2999,
      period: 'month',
      features: [
        'Multi-Cloud Strategy',
        'Infrastructure as Code',
        'Auto-Scaling',
        'Disaster Recovery',
        'Cost Optimization',
        'Security Hardening',
        '24/7 Monitoring',
        'Performance Tuning'
      ],
      category: 'Infrastructure',
      popular: true,
      savings: '$15,000/year vs in-house team'
    },
    {
      id: 'cybersecurity',
      name: 'Advanced Cybersecurity',
      description: 'Comprehensive security solutions including threat detection, incident response, and compliance management.',
      icon: Shield,
      price: 2499,
      period: 'month',
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Penetration Testing',
        'SOC Services',
        'Compliance Management',
        'Security Training',
        'Incident Response',
        'Risk Assessment'
      ],
      category: 'Security',
      popular: true,
      savings: '$20,000/year vs security consultants'
    },
    {
      id: 'network-management',
      name: 'Network Infrastructure',
      description: 'Design, implement, and manage enterprise networks with advanced monitoring and optimization.',
      icon: Network,
      price: 1999,
      period: 'month',
      features: [
        'Network Design & Implementation',
        'Wireless Solutions',
        'VPN & Remote Access',
        'Network Monitoring',
        'Traffic Optimization',
        'Load Balancing',
        'Network Security',
        'Performance Analytics'
      ],
      category: 'Infrastructure',
      savings: '$12,000/year vs network specialists'
    },
    {
      id: 'data-center',
      name: 'Data Center Services',
      description: 'Complete data center management including hardware, virtualization, and disaster recovery.',
      icon: Server,
      price: 3999,
      period: 'month',
      features: [
        'Hardware Management',
        'Virtualization',
        'Backup & Recovery',
        'Power Management',
        'Environmental Monitoring',
        'Capacity Planning',
        'Disaster Recovery',
        'Maintenance & Support'
      ],
      category: 'Infrastructure',
      savings: '$25,000/year vs data center costs'
    },
    {
      id: 'devops-automation',
      name: 'DevOps & Automation',
      description: 'Streamline development and deployment with CI/CD pipelines, infrastructure automation, and monitoring.',
      icon: Code,
      price: 1799,
      period: 'month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure Automation',
        'Container Orchestration',
        'Monitoring & Alerting',
        'Testing Automation',
        'Deployment Strategies',
        'Version Control',
        'Performance Optimization'
      ],
      category: 'Development',
      popular: true,
      savings: '$18,000/year vs DevOps engineers'
    },
    {
      id: 'database-management',
      name: 'Database Administration',
      description: 'Expert database management including optimization, backup, security, and performance tuning.',
      icon: Database,
      price: 1299,
      period: 'month',
      features: [
        'Database Design & Optimization',
        'Backup & Recovery',
        'Performance Tuning',
        'Security Hardening',
        'Migration Services',
        'Monitoring & Alerting',
        'Capacity Planning',
        '24/7 Support'
      ],
      category: 'Data Management',
      savings: '$8,000/year vs DBA consultants'
    },
    {
      id: 'help-desk',
      name: 'IT Help Desk Services',
      description: '24/7 technical support for end users with advanced ticketing and remote assistance.',
      icon: Headphones,
      price: 899,
      period: 'month',
      features: [
        '24/7 Technical Support',
        'Remote Desktop Support',
        'Ticket Management',
        'Knowledge Base',
        'User Training',
        'Software Installation',
        'Hardware Troubleshooting',
        'Performance Reports'
      ],
      category: 'Support',
      popular: true,
      savings: '$6,000/year vs in-house support'
    },
    {
      id: 'backup-recovery',
      name: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions with automated testing and rapid disaster recovery capabilities.',
      icon: HardDrive,
      price: 1199,
      period: 'month',
      features: [
        'Automated Backups',
        'Disaster Recovery Planning',
        'Data Replication',
        'Recovery Testing',
        'Compliance Backup',
        'Cloud Storage',
        'Recovery Time Optimization',
        'Business Continuity'
      ],
      category: 'Data Management',
      savings: '$7,500/year vs backup solutions'
    },
    {
      id: 'email-systems',
      name: 'Email & Communication Systems',
      description: 'Enterprise email solutions with security, archiving, and advanced collaboration features.',
      icon: Mail,
      price: 799,
      period: 'month',
      features: [
        'Email Server Management',
        'Security & Spam Protection',
        'Email Archiving',
        'Mobile Device Management',
        'Collaboration Tools',
        'Compliance Features',
        'Migration Services',
        'Performance Monitoring'
      ],
      category: 'Communication',
      savings: '$4,800/year vs email services'
    },
    {
      id: 'monitoring',
      name: 'IT Monitoring & Analytics',
      description: 'Comprehensive monitoring of IT infrastructure with predictive analytics and automated alerting.',
      icon: Activity,
      price: 999,
      period: 'month',
      features: [
        'Infrastructure Monitoring',
        'Performance Analytics',
        'Predictive Maintenance',
        'Automated Alerting',
        'Custom Dashboards',
        'Capacity Planning',
        'Trend Analysis',
        'Reporting & Insights'
      ],
      category: 'Monitoring',
      savings: '$6,000/year vs monitoring tools'
    },
    {
      id: 'mobile-management',
      name: 'Mobile Device Management',
      description: 'Complete mobile device lifecycle management with security, app management, and compliance.',
      icon: Smartphone,
      price: 599,
      period: 'month',
      features: [
        'Device Enrollment',
        'Security Policies',
        'App Management',
        'Remote Wipe',
        'Compliance Monitoring',
        'Location Tracking',
        'Update Management',
        'User Support'
      ],
      category: 'Mobile',
      savings: '$3,600/year vs MDM solutions'
    },
    {
      id: 'print-services',
      name: 'Print & Document Management',
      description: 'Enterprise print management with document workflow, security, and cost optimization.',
      icon: Printer,
      price: 499,
      period: 'month',
      features: [
        'Print Server Management',
        'Document Workflow',
        'Print Security',
        'Cost Tracking',
        'Driver Management',
        'Mobile Printing',
        'Maintenance Services',
        'Usage Analytics'
      ],
      category: 'Document Management',
      savings: '$2,400/year vs print services'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1468
    }
  ];

  const categories = [
<<<<<<< HEAD
    { name: 'All', count: itServices.length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
    { name: 'Network Security', count: itServices.filter(s => s.category === 'Network Security').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Backup & Recovery', count: itServices.filter(s => s.category === 'Backup & Recovery').length },
    { name: 'Mobile Management', count: itServices.filter(s => s.category === 'Mobile Management').length },
    { name: 'Compliance', count: itServices.filter(s => s.category === 'Compliance').length },
    { name: 'Asset Management', count: itServices.filter(s => s.category === 'Asset Management').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length }
=======
    { name: 'Infrastructure', icon: Server, count: 3 },
    { name: 'Security', icon: Shield, count: 1 },
    { name: 'Development', icon: Code, count: 1 },
    { name: 'Data Management', icon: Database, count: 2 },
    { name: 'Support', icon: Headphones, count: 1 },
    { name: 'Communication', icon: Mail, count: 1 },
    { name: 'Monitoring', icon: Activity, count: 1 },
    { name: 'Mobile', icon: Smartphone, count: 1 },
    { name: 'Document Management', icon: Printer, count: 1 }
  ];

  const pricingPlans = [
    {
      name: 'Basic IT Support',
      price: 999,
      period: 'month',
      description: 'Essential IT services for small businesses',
      features: [
        'Help Desk Support',
        'Basic Monitoring',
        'Email Management',
        'Backup Services',
        'Security Updates',
        'Remote Support'
      ],
      popular: false
    },
    {
      name: 'Professional IT',
      price: 2499,
      period: 'month',
      description: 'Comprehensive IT services for growing businesses',
      features: [
        'All Basic Services',
        'Cloud Infrastructure',
        'Advanced Security',
        'Network Management',
        'DevOps Support',
        'Database Administration',
        '24/7 Monitoring',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise IT',
      price: 4999,
      period: 'month',
      description: 'Full-scale IT services for large organizations',
      features: [
        'All Professional Services',
        'Data Center Management',
        'Advanced Analytics',
        'Custom Solutions',
        'Dedicated Team',
        'SLA Guarantee',
        'Compliance Management',
        'Strategic Consulting'
      ],
      popular: false
    }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1468
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud migration, cybersecurity, and DevOps. Enterprise-grade IT solutions starting at $600/month." />
        <meta name="keywords" content="it services, infrastructure management, cloud migration, cybersecurity, devops, it support, database management" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to optimize your technology infrastructure and drive business growth.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
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
=======
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to keep your business running smoothly. From infrastructure to security, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              Get Free Assessment
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime Guarantee</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Clients Served</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">15min</div>
              <div className="text-gray-300 text-sm">Response Time</div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1468
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Service Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <category.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} services</p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1468
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and optimization with 24/7 monitoring.',
      icon: '☁️',
      price: '$2,999/month',
      features: [
        'Multi-cloud deployment (AWS, Azure, GCP)',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Auto-scaling and load balancing',
        'Disaster recovery planning',
        'Cost optimization and monitoring',
        'Security compliance (SOC 2, ISO 27001)',
        '24/7 monitoring and alerting',
        'Performance optimization'
      ],
      benefits: 'Reduce infrastructure costs by 40%',
      popular: true,
      rating: 4.9,
      clients: '200+'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, incident response, and compliance.',
      icon: '🔒',
      price: '$2,499/month',
      features: [
        '24/7 Security Operations Center (SOC)',
        'Threat detection and response',
        'Vulnerability assessment and penetration testing',
        'Security awareness training',
        'Compliance management (GDPR, HIPAA, PCI-DSS)',
        'Identity and access management',
        'Endpoint security management',
        'Security incident response'
      ],
      benefits: 'Reduce security incidents by 80%',
      popular: true,
      rating: 4.8,
      clients: '150+'
    },
    {
      title: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps transformation with automated pipelines, monitoring, and deployment.',
      icon: '🚀',
      price: '$1,999/month',
      features: [
        'CI/CD pipeline setup and optimization',
        'Container orchestration (Kubernetes, Docker)',
        'Infrastructure automation',
        'Monitoring and logging (ELK, Prometheus)',
        'GitOps implementation',
        'Testing automation',
        'Deployment strategies (Blue-Green, Canary)',
        'Performance monitoring'
      ],
      benefits: 'Deploy 10x faster with 99.9% uptime',
      rating: 4.9,
      clients: '180+'
    },
    {
      title: 'Database Administration',
      description: 'Expert database management with optimization, backup, and performance tuning.',
      icon: '🗄️',
      price: '$1,499/month',
      features: [
        'Database design and optimization',
        'Performance tuning and monitoring',
        'Backup and disaster recovery',
        'Database migration services',
        'Security hardening',
        'Capacity planning',
        'Multi-database support (MySQL, PostgreSQL, MongoDB)',
        'Real-time monitoring and alerting'
      ],
      benefits: 'Improve database performance by 60%',
      rating: 4.7,
      clients: '120+'
    },
    {
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management services.',
      icon: '🌐',
      price: '$1,799/month',
      features: [
        'Network design and architecture',
        'VPN and remote access solutions',
        'Load balancing and traffic management',
        'Network security implementation',
        'Wireless network setup',
        'Network monitoring and optimization',
        'Disaster recovery networking',
        'Cloud networking (VPC, Direct Connect)'
      ],
      benefits: 'Improve network reliability by 50%',
      rating: 4.8,
      clients: '90+'
    },
    {
      title: 'System Administration',
      description: 'Comprehensive system administration with monitoring, maintenance, and optimization.',
      icon: '⚙️',
      price: '$1,299/month',
      features: [
        'Server setup and configuration',
        'User account management',
        'System monitoring and maintenance',
        'Patch management and updates',
        'Backup and recovery solutions',
        'Performance optimization',
        'Security hardening',
        'Documentation and training'
      ],
      benefits: 'Reduce system downtime by 70%',
      rating: 4.6,
      clients: '160+'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning and digital transformation consulting services.',
      icon: '💡',
      price: '$299/hour',
      features: [
        'IT strategy development',
        'Digital transformation planning',
        'Technology assessment and recommendations',
        'Vendor evaluation and selection',
        'IT governance and compliance',
        'Change management',
        'Training and knowledge transfer',
        'Project management'
      ],
      benefits: 'Align IT with business objectives',
      rating: 4.9,
      clients: '300+'
    },
    {
      title: 'Managed IT Services',
      description: 'Complete IT management including helpdesk, monitoring, and maintenance.',
      icon: '🛠️',
      price: '$99/user/month',
      features: [
        '24/7 helpdesk support',
        'Proactive monitoring and maintenance',
        'Software license management',
        'Asset management and tracking',
        'User training and support',
        'Incident management',
        'Change management',
        'Regular reporting and analytics'
      ],
      benefits: 'Reduce IT costs by 30%',
      rating: 4.7,
      clients: '250+'
    }
  ];

  const serviceCategories = [
    { name: 'Cloud Services', count: 8, icon: Cloud, color: 'text-blue-600' },
    { name: 'Security', count: 12, icon: Shield, color: 'text-red-600' },
    { name: 'Infrastructure', count: 10, icon: Server, color: 'text-green-600' },
    { name: 'DevOps', count: 6, icon: Zap, color: 'text-purple-600' },
    { name: 'Database', count: 5, icon: Database, color: 'text-orange-600' },
    { name: 'Networking', count: 7, icon: Network, color: 'text-indigo-600' }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', provider: 'Amazon Web Services' },
    { name: 'Microsoft Azure Solutions Architect', provider: 'Microsoft' },
    { name: 'Google Cloud Professional Architect', provider: 'Google Cloud' },
    { name: 'CISSP - Certified Information Systems Security Professional', provider: 'ISC2' },
    { name: 'CISM - Certified Information Security Manager', provider: 'ISACA' },
    { name: 'PMP - Project Management Professional', provider: 'PMI' },
    { name: 'ITIL Foundation', provider: 'AXELOS' },
    { name: 'CompTIA Security+', provider: 'CompTIA' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive IT services that keep your business running smoothly, 
              securely, and efficiently with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Free Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Certifications
              </button>
=======
      {/* IT Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-cyan-400">${service.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{service.period}</span>
                  </div>
                  {service.savings && (
                    <p className="text-green-400 text-sm mt-1">{service.savings}</p>
                  )}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full cyber-button text-center">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your IT Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our IT Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance and advanced threat protection.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock monitoring and support to keep your systems running.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proactive Management</h3>
              <p className="text-gray-300">Predictive maintenance and optimization to prevent issues before they occur.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Cloud className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cloud Expertise</h3>
              <p className="text-gray-300">Deep expertise in AWS, Azure, and Google Cloud platforms.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300">Tailored IT solutions designed specifically for your business needs.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Trusted by 500+ businesses with proven ROI and success stories.</p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1468
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Service Categories
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive IT solutions for every business need
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceCategories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <category.icon className={`w-8 h-8 mx-auto mb-3 ${category.color}`} />
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured IT Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional IT solutions trusted by businesses worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating} ({service.clients} clients)
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="text-sm font-medium text-green-600 mb-2">{service.benefits}</div>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Certifications & Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Certified professionals with industry-leading expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-blue-100">
              Our track record speaks for itself
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Certified Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free IT assessment and discover how we can optimize your technology stack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-6a80
=======
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts assess your current IT setup and recommend the best solutions for your business.
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
              Get Free Assessment
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ Free IT assessment • ✓ Custom recommendations • ✓ No obligation</p>
            <p>✓ 24/7 support • ✓ 99.9% uptime guarantee • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1468
    </div>
  );
};

export default ITServicesPage;
