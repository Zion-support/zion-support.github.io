'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Server, Network, HardDrive, Monitor, Smartphone as Mobile, Wifi, Database as Db, Shield as SecurityIcon, Settings as Config, Terminal, GitBranch, Layers, Workflow, RefreshCw, AlertTriangle, CheckCircle2, XCircle, Info, HelpCircle, ExternalLink, Download, Upload, Trash2, Edit, Copy, Save, Share, Lock as LockIcon, Unlock, Eye as EyeIcon, EyeOff, Maximize, Minimize, RotateCcw, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Mic, MicOff, Video as VideoIcon, VideoOff, Camera as CameraIcon, CameraOff, Headphones, Speaker, Printer, Scanner, Fax, Router, Switch, Hub, Modem, Antenna, Satellite, Bluetooth, Usb, Hdmi, Vga, Dvi, DisplayPort, Ethernet, Fiber, Coaxial, TwistedPair, Wireless, Cellular, Gps, Compass as CompassIcon, MapPin as MapIcon, Navigation as NavIcon, Globe as GlobeIcon, World, Earth, Planet, Sun, Moon, Star as StarIcon2, Cloud as CloudIcon, CloudRain, CloudSnow, CloudLightning, Wind, Thermometer, Droplets, Umbrella, Sun as SunIcon, Moon as MoonIcon, Sunrise, Sunset, Calendar as CalendarIcon, Clock as ClockIcon, Timer, Stopwatch, Hourglass, Watch, Alarm, Bell, Notification, Alert, Warning, Error, Success, Info as InfoIcon, Question, Help, Support, Chat, Message, Mail as MailIcon2, Send, Reply, Forward, Archive, Inbox, Outbox, Draft, Spam, Trash, Delete, Remove, Add, Plus, Minus, Multiply, Divide, Equals, GreaterThan, LessThan, NotEqual, Infinity, Pi, Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Eta, Theta, Iota, Kappa, Lambda, Mu, Nu, Xi, Omicron, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi, Omega } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    // Infrastructure Services
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, management, and optimization for enterprise environments.',
      icon: Server,
      price: '$2,999/month',
      originalPrice: '$8,999/month',
      category: 'infrastructure',
      features: [
        'Server Management & Monitoring',
        'Network Infrastructure Setup',
        'Storage Solutions',
        'Backup & Disaster Recovery',
        'Performance Optimization',
        'Security Hardening',
        '24/7 Monitoring',
        'Proactive Maintenance'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Reduce IT costs by 40%',
        'Improve system performance by 60%',
        'Eliminate downtime issues'
      ],
      marketPrice: '$8,999-25,000/month',
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Docker', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% uptime SLA',
      responseTime: '15 minutes'
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Setup',
      description: 'Complete cloud migration services with AWS, Azure, and Google Cloud Platform expertise.',
      icon: Cloud,
      price: '$4,999/month',
      originalPrice: '$15,999/month',
      category: 'cloud',
      features: [
        'Multi-cloud Strategy',
        'Migration Planning & Execution',
        'Cost Optimization',
        'Security Configuration',
        'Performance Tuning',
        'Disaster Recovery Setup',
        'Monitoring & Alerting',
        'Training & Documentation'
      ],
      benefits: [
        'Reduce infrastructure costs by 50%',
        'Improve scalability by 300%',
        'Enhance security posture by 80%',
        'Enable remote work capabilities'
      ],
      marketPrice: '$15,999-50,000/month',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.95% uptime SLA',
      responseTime: '10 minutes'
    },
    {
      id: 'cybersecurity',
      title: 'Advanced Cybersecurity',
      description: 'Comprehensive cybersecurity solutions with threat detection, prevention, and incident response.',
      icon: Shield,
      price: '$3,499/month',
      originalPrice: '$12,999/month',
      category: 'security',
      features: [
        'Threat Detection & Prevention',
        'Vulnerability Assessment',
        'Security Monitoring 24/7',
        'Incident Response',
        'Compliance Management',
        'Security Training',
        'Penetration Testing',
        'Security Audits'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 95%',
        'Ensure compliance with regulations',
        'Protect sensitive data effectively'
      ],
      marketPrice: '$12,999-35,000/month',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA', 'Encryption'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '15-minute response time',
      responseTime: '5 minutes'
    },
    {
      id: 'devops-cicd',
      title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated CI/CD pipelines and infrastructure as code.',
      icon: GitBranch,
      price: '$2,499/month',
      originalPrice: '$7,999/month',
      category: 'devops',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Container Orchestration',
        'Monitoring & Logging',
        'Deployment Automation',
        'Version Control Management',
        'Team Training'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve code quality by 70%',
        'Enable continuous delivery'
      ],
      marketPrice: '$7,999-20,000/month',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% deployment success rate',
      responseTime: '30 minutes'
    },
    {
      id: 'database-management',
      title: 'Database Management & Optimization',
      description: 'Expert database administration with performance tuning, backup, and security management.',
      icon: Database,
      price: '$1,999/month',
      originalPrice: '$5,999/month',
      category: 'database',
      features: [
        'Database Design & Architecture',
        'Performance Tuning',
        'Backup & Recovery',
        'Security Hardening',
        'Monitoring & Alerting',
        'Capacity Planning',
        'Migration Services',
        '24/7 Support'
      ],
      benefits: [
        'Improve query performance by 80%',
        'Reduce downtime by 95%',
        'Optimize storage costs by 40%',
        'Ensure data integrity'
      ],
      marketPrice: '$5,999-15,000/month',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% availability',
      responseTime: '20 minutes'
    },
    {
      id: 'network-services',
      title: 'Network Design & Management',
      description: 'Complete network infrastructure design, implementation, and ongoing management services.',
      icon: Network,
      price: '$2,299/month',
      originalPrice: '$6,999/month',
      category: 'networking',
      features: [
        'Network Design & Architecture',
        'Router & Switch Configuration',
        'Wireless Network Setup',
        'VPN Implementation',
        'Network Monitoring',
        'Security Configuration',
        'Performance Optimization',
        'Troubleshooting & Support'
      ],
      benefits: [
        'Improve network performance by 70%',
        'Reduce connectivity issues by 90%',
        'Enhance security by 85%',
        'Enable remote access capabilities'
      ],
      marketPrice: '$6,999-18,000/month',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'Aruba', 'Meraki'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% network uptime',
      responseTime: '15 minutes'
    },
    // Specialized Services
    {
      id: 'managed-it-services',
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services with 24/7 monitoring, support, and proactive maintenance.',
      icon: Settings,
      price: '$1,499/month',
      originalPrice: '$4,999/month',
      category: 'managed-services',
      features: [
        '24/7 Help Desk Support',
        'Proactive Monitoring',
        'Patch Management',
        'Security Updates',
        'Backup Management',
        'Performance Optimization',
        'Vendor Management',
        'Monthly Reporting'
      ],
      benefits: [
        'Reduce IT costs by 60%',
        'Improve system reliability by 80%',
        'Free up internal IT resources',
        'Ensure compliance and security'
      ],
      marketPrice: '$4,999-12,000/month',
      technologies: ['RMM Tools', 'PSA Software', 'Monitoring Systems', 'Automation Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% uptime guarantee',
      responseTime: '5 minutes'
    },
    {
      id: 'it-consulting',
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting services for digital transformation and technology roadmap development.',
      icon: Brain,
      price: '$299/hour',
      originalPrice: '$599/hour',
      category: 'consulting',
      features: [
        'IT Strategy Development',
        'Technology Assessment',
        'Digital Transformation Planning',
        'Vendor Evaluation',
        'Cost Optimization',
        'Risk Assessment',
        'Compliance Review',
        'Implementation Roadmap'
      ],
      benefits: [
        'Align IT with business goals',
        'Reduce technology costs by 30%',
        'Improve operational efficiency',
        'Mitigate technology risks'
      ],
      marketPrice: '$599-1,200/hour',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Risk Analysis', 'ROI Analysis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '48-hour response time',
      responseTime: '24 hours'
    },
    {
      id: 'data-center-services',
      title: 'Data Center Services',
      description: 'Complete data center design, implementation, and management with colocation and cloud options.',
      icon: HardDrive,
      price: '$4,999/month',
      originalPrice: '$15,999/month',
      category: 'data-center',
      features: [
        'Data Center Design',
        'Power & Cooling Solutions',
        'Security Implementation',
        'Monitoring Systems',
        'Backup Power Systems',
        'Environmental Controls',
        'Physical Security',
        'Compliance Management'
      ],
      benefits: [
        'Ensure 99.99% uptime',
        'Reduce operational costs by 50%',
        'Improve energy efficiency by 40%',
        'Meet compliance requirements'
      ],
      marketPrice: '$15,999-45,000/month',
      technologies: ['UPS Systems', 'Cooling Systems', 'Security Systems', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.99% uptime SLA',
      responseTime: '5 minutes'
    },
    {
      id: 'backup-disaster-recovery',
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated testing and recovery procedures.',
      icon: RefreshCw,
      price: '$1,299/month',
      originalPrice: '$3,999/month',
      category: 'backup-recovery',
      features: [
        'Automated Backup Systems',
        'Disaster Recovery Planning',
        'Recovery Testing',
        'Off-site Storage',
        'Ransomware Protection',
        'Compliance Backup',
        'Recovery Time Optimization',
        '24/7 Monitoring'
      ],
      benefits: [
        'Reduce recovery time by 90%',
        'Prevent data loss completely',
        'Meet compliance requirements',
        'Minimize business disruption'
      ],
      marketPrice: '$3,999-10,000/month',
      technologies: ['Veeam', 'Commvault', 'Acronis', 'Cloud Storage', 'Replication Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '4-hour recovery time',
      responseTime: '10 minutes'
    },
    {
      id: 'endpoint-management',
      title: 'Endpoint Management',
      description: 'Comprehensive endpoint management for desktops, laptops, and mobile devices with security and compliance.',
      icon: Monitor,
      price: '$89/device/month',
      originalPrice: '$199/device/month',
      category: 'endpoint',
      features: [
        'Device Provisioning',
        'Software Deployment',
        'Patch Management',
        'Security Configuration',
        'Remote Support',
        'Asset Management',
        'Compliance Monitoring',
        'Performance Optimization'
      ],
      benefits: [
        'Reduce support tickets by 70%',
        'Improve security posture by 85%',
        'Streamline device management',
        'Ensure compliance automatically'
      ],
      marketPrice: '$199-399/device/month',
      technologies: ['Microsoft Intune', 'SCCM', 'Jamf', 'Mobile Device Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% device availability',
      responseTime: '15 minutes'
    },
    {
      id: 'voip-telephony',
      title: 'VoIP & Unified Communications',
      description: 'Complete VoIP and unified communications solutions with video conferencing and collaboration tools.',
      icon: Phone,
      price: '$29/user/month',
      originalPrice: '$79/user/month',
      category: 'communications',
      features: [
        'VoIP Phone Systems',
        'Video Conferencing',
        'Instant Messaging',
        'File Sharing',
        'Mobile Integration',
        'Call Recording',
        'Analytics & Reporting',
        'Integration APIs'
      ],
      benefits: [
        'Reduce communication costs by 60%',
        'Improve collaboration by 80%',
        'Enable remote work capabilities',
        'Enhance customer service'
      ],
      marketPrice: '$79-199/user/month',
      technologies: ['Microsoft Teams', 'Zoom', 'Cisco', 'Avaya', 'SIP Trunking'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% call quality',
      responseTime: '10 minutes'
    },
    {
      id: 'it-security-audit',
      title: 'IT Security Audit & Compliance',
      description: 'Comprehensive security audits and compliance assessments with remediation planning and implementation.',
      icon: Search,
      price: '$2,999/audit',
      originalPrice: '$8,999/audit',
      category: 'security-audit',
      features: [
        'Security Assessment',
        'Vulnerability Scanning',
        'Penetration Testing',
        'Compliance Review',
        'Risk Analysis',
        'Remediation Planning',
        'Policy Development',
        'Staff Training'
      ],
      benefits: [
        'Identify security gaps',
        'Meet compliance requirements',
        'Reduce security risks by 90%',
        'Improve security posture'
      ],
      marketPrice: '$8,999-25,000/audit',
      technologies: ['Security Tools', 'Compliance Frameworks', 'Risk Assessment', 'Penetration Testing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '30-day delivery',
      responseTime: '24 hours'
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security Services',
      description: 'Specialized cloud security services with multi-cloud protection and compliance management.',
      icon: Cloud,
      price: '$1,999/month',
      originalPrice: '$5,999/month',
      category: 'cloud-security',
      features: [
        'Cloud Security Assessment',
        'Identity & Access Management',
        'Data Encryption',
        'Threat Detection',
        'Compliance Monitoring',
        'Security Automation',
        'Incident Response',
        'Security Training'
      ],
      benefits: [
        'Secure cloud environments',
        'Meet compliance requirements',
        'Prevent data breaches',
        'Automate security processes'
      ],
      marketPrice: '$5,999-15,000/month',
      technologies: ['AWS Security', 'Azure Security', 'GCP Security', 'Cloud Security Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: '99.9% security monitoring',
      responseTime: '5 minutes'
    },
    {
      id: 'it-training',
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs with certification preparation and hands-on labs.',
      icon: GraduationCap,
      price: '$199/person/day',
      originalPrice: '$599/person/day',
      category: 'training',
      features: [
        'Customized Training Programs',
        'Certification Preparation',
        'Hands-on Labs',
        'Online & In-person Options',
        'Progress Tracking',
        'Certification Vouchers',
        'Follow-up Support',
        'Team Training'
      ],
      benefits: [
        'Improve team skills by 80%',
        'Increase productivity by 60%',
        'Reduce support costs by 50%',
        'Boost employee satisfaction'
      ],
      marketPrice: '$599-1,299/person/day',
      technologies: ['Microsoft', 'Cisco', 'AWS', 'Azure', 'VMware', 'Linux'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      sla: 'Custom training schedule',
      responseTime: '48 hours'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: itServices.length },
    { id: 'infrastructure', name: 'Infrastructure', count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'cloud', name: 'Cloud Services', count: itServices.filter(s => s.category === 'cloud').length },
    { id: 'security', name: 'Security', count: itServices.filter(s => s.category === 'security').length },
    { id: 'devops', name: 'DevOps', count: itServices.filter(s => s.category === 'devops').length },
    { id: 'database', name: 'Database', count: itServices.filter(s => s.category === 'database').length },
    { id: 'networking', name: 'Networking', count: itServices.filter(s => s.category === 'networking').length },
    { id: 'managed-services', name: 'Managed Services', count: itServices.filter(s => s.category === 'managed-services').length },
    { id: 'consulting', name: 'Consulting', count: itServices.filter(s => s.category === 'consulting').length },
    { id: 'data-center', name: 'Data Center', count: itServices.filter(s => s.category === 'data-center').length },
    { id: 'backup-recovery', name: 'Backup & Recovery', count: itServices.filter(s => s.category === 'backup-recovery').length },
    { id: 'endpoint', name: 'Endpoint Management', count: itServices.filter(s => s.category === 'endpoint').length },
    { id: 'communications', name: 'Communications', count: itServices.filter(s => s.category === 'communications').length },
    { id: 'security-audit', name: 'Security Audit', count: itServices.filter(s => s.category === 'security-audit').length },
    { id: 'cloud-security', name: 'Cloud Security', count: itServices.filter(s => s.category === 'cloud-security').length },
    { id: 'training', name: 'Training', count: itServices.filter(s => s.category === 'training').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure, cloud, security, DevOps, and managed services. Enterprise-grade solutions starting at $89/month." />
        <meta name="keywords" content="it services, infrastructure, cloud services, cybersecurity, devops, managed it services, it consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to optimize, secure, and modernize your technology infrastructure.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">$89</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
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

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cyber-card group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 text-sm">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
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

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-xs text-gray-300 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SLA and Response Time */}
                <div className="mb-6 space-y-2">
                  {service.sla && (
                    <div className="p-3 bg-blue-900/20 rounded-lg">
                      <div className="text-sm text-blue-300 font-semibold">
                        🛡️ {service.sla}
                      </div>
                    </div>
                  )}
                  {service.responseTime && (
                    <div className="p-3 bg-green-900/20 rounded-lg">
                      <div className="text-sm text-green-300 font-semibold">
                        ⚡ {service.responseTime} response time
                      </div>
                    </div>
                  )}
                </div>

                {/* Market Price */}
                <div className="mb-6 p-3 bg-yellow-900/20 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-yellow-300">Market Price:</span>
                    <span className="text-yellow-400 font-semibold">{service.marketPrice}</span>
                  </div>
                  <div className="text-xs text-yellow-200 mt-1">
                    You save {Math.round((1 - parseFloat(service.price.replace(/[$,]/g, '')) / parseFloat(service.originalPrice.replace(/[$,]/g, ''))) * 100)}%
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center block"
                  >
                    Get Started Now
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="w-full bg-transparent border-2 border-cyan-500 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all text-center block"
                  >
                    Call for Consultation
                  </a>
                </div>

                <div className="mt-4 text-xs text-gray-500 text-center">
                  {service.contactInfo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
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