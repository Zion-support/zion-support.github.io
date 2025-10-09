import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Server, Database, Cloud, Lock, Smartphone, Monitor, Wifi, Code, Settings, BarChart3, PieChart, LineChart, Activity, Target as TargetIcon, Zap as ZapIcon, Shield as ShieldIcon, Clock as ClockIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon, Globe as GlobeIcon, Brain as BrainIcon, Cpu as CpuIcon, Target as TargetIcon2, BarChart as BarChartIcon, MessageSquare as MessageSquareIcon, Eye as EyeIcon, Sparkles as SparklesIcon, ArrowRight as ArrowRightIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Infrastructure Services
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and management for enterprise organizations with 99.9% uptime guarantee.',
      icon: '🏗️',
      price: '$2,000/month',
      features: [
        'Server Management & Monitoring',
        'Network Design & Implementation',
        'Storage Solutions & SAN Management',
        'Backup & Disaster Recovery',
        'Performance Optimization',
        '24/7 Technical Support',
        'Hardware Lifecycle Management',
        'Capacity Planning'
      ],
      benefits: [
        'Achieve 99.9% uptime',
        'Reduce IT costs by 30%',
        'Improve system performance by 50%',
        'Ensure business continuity',
        'Scale infrastructure as needed'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker', 'Kubernetes', 'Cisco', 'Dell EMC'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-infrastructure-management'
    },
    {
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration services with ongoing management and optimization for maximum efficiency and cost savings.',
      icon: '☁️',
      price: '$1,500/month',
      features: [
        'Cloud Strategy & Planning',
        'Migration Execution & Testing',
        'Cost Optimization & Monitoring',
        'Security Implementation',
        'Performance Monitoring',
        'Multi-cloud Management',
        'Cloud Governance',
        'Compliance Management'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability by 300%',
        'Enhance security posture',
        'Enable remote work capabilities',
        'Accelerate digital transformation'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Ansible', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/cloud-migration-management'
    },
    {
      title: 'Network Security & Firewall Management',
      description: 'Advanced network security solutions with firewall management, intrusion detection, and threat monitoring.',
      icon: '🔒',
      price: '$1,200/month',
      features: [
        'Firewall Configuration & Management',
        'Intrusion Detection & Prevention',
        'VPN Setup & Management',
        'Network Monitoring & Alerting',
        'Security Policy Implementation',
        'Threat Intelligence Integration',
        'Compliance Auditing',
        'Incident Response'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure compliance with regulations',
        'Reduce security incidents by 80%',
        'Improve network performance',
        'Maintain business continuity'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Security',
      technologies: ['Cisco ASA', 'Palo Alto', 'Fortinet', 'Check Point', 'Splunk', 'Wireshark'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/network-security-firewall'
    },

    // Security Services
    {
      title: 'Cybersecurity Assessment & Implementation',
      description: 'Comprehensive cybersecurity assessment with implementation of security controls, vulnerability management, and compliance.',
      icon: '🛡️',
      price: '$2,500/month',
      features: [
        'Security Risk Assessment',
        'Vulnerability Scanning & Penetration Testing',
        'Security Control Implementation',
        'Compliance Management (SOC2, ISO27001)',
        'Security Awareness Training',
        'Incident Response Planning',
        'Security Monitoring & SIEM',
        'Threat Intelligence'
      ],
      benefits: [
        'Reduce security risks by 90%',
        'Ensure regulatory compliance',
        'Protect sensitive data',
        'Improve security posture',
        'Minimize breach impact'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Security',
      technologies: ['Nessus', 'Qualys', 'Rapid7', 'Splunk', 'QRadar', 'CrowdStrike', 'SentinelOne'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/cybersecurity-assessment'
    },
    {
      title: 'Data Protection & Backup Solutions',
      description: 'Comprehensive data protection with automated backup, disaster recovery, and data encryption services.',
      icon: '💾',
      price: '$800/month',
      features: [
        'Automated Backup Solutions',
        'Disaster Recovery Planning',
        'Data Encryption & Key Management',
        'Backup Testing & Validation',
        'Cloud Backup Integration',
        'Compliance Reporting',
        'Data Loss Prevention',
        'Recovery Time Optimization'
      ],
      benefits: [
        'Protect critical business data',
        'Minimize downtime during disasters',
        'Ensure data availability',
        'Meet compliance requirements',
        'Reduce data loss risks'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Security',
      technologies: ['Veeam', 'Commvault', 'Rubrik', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/data-protection-backup'
    },
    {
      title: 'Identity & Access Management (IAM)',
      description: 'Advanced identity and access management solutions with single sign-on, multi-factor authentication, and privileged access management.',
      icon: '🔑',
      price: '$1,800/month',
      features: [
        'Single Sign-On (SSO) Implementation',
        'Multi-Factor Authentication (MFA)',
        'Privileged Access Management',
        'Identity Governance',
        'Access Review & Certification',
        'Password Management',
        'Directory Services Integration',
        'Compliance Reporting'
      ],
      benefits: [
        'Improve security posture',
        'Reduce password-related incidents',
        'Streamline user access management',
        'Ensure compliance',
        'Enhance user experience'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Security',
      technologies: ['Okta', 'Azure AD', 'AWS IAM', 'CyberArk', 'BeyondTrust', 'SailPoint'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/identity-access-management'
    },

    // Development Services
    {
      title: 'Custom Software Development',
      description: 'Full-stack custom software development services with modern technologies and agile methodologies.',
      icon: '💻',
      price: '$3,000/month',
      features: [
        'Full-Stack Development',
        'Mobile App Development',
        'Web Application Development',
        'API Development & Integration',
        'Database Design & Optimization',
        'UI/UX Design',
        'Quality Assurance & Testing',
        'DevOps & CI/CD Implementation'
      ],
      benefits: [
        'Custom solutions for unique needs',
        'Faster time to market',
        'Competitive advantage',
        'Scalable and maintainable code',
        'Ongoing support and maintenance'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Development',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'AWS', 'Azure', 'Docker', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/custom-software-development'
    },
    {
      title: 'Legacy System Modernization',
      description: 'Modernize legacy systems with cloud migration, API integration, and user interface updates.',
      icon: '🔄',
      price: '$2,500/month',
      features: [
        'Legacy System Assessment',
        'Cloud Migration Strategy',
        'API Development & Integration',
        'Database Modernization',
        'UI/UX Modernization',
        'Performance Optimization',
        'Security Enhancement',
        'Training & Documentation'
      ],
      benefits: [
        'Extend system lifespan',
        'Improve performance and reliability',
        'Reduce maintenance costs',
        'Enhance user experience',
        'Enable future scalability'
      ],
      marketPrice: '$4,000-10,000/month',
      category: 'Development',
      technologies: ['Cloud Platforms', 'Microservices', 'APIs', 'Modern Frameworks', 'Containers'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/legacy-system-modernization'
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Comprehensive DevOps services with continuous integration, continuous deployment, and infrastructure automation.',
      icon: '⚙️',
      price: '$1,800/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing Integration',
        'Deployment Automation',
        'Monitoring & Alerting',
        'Container Orchestration',
        'Security Scanning',
        'Performance Optimization'
      ],
      benefits: [
        'Accelerate software delivery',
        'Improve code quality',
        'Reduce deployment risks',
        'Increase team productivity',
        'Enable faster innovation'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Development',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/devops-cicd-implementation'
    },

    // Support Services
    {
      title: '24/7 IT Support & Help Desk',
      description: 'Round-the-clock IT support with help desk services, remote assistance, and proactive monitoring.',
      icon: '🎧',
      price: '$1,000/month',
      features: [
        '24/7 Technical Support',
        'Remote Desktop Assistance',
        'Help Desk Ticketing System',
        'Proactive System Monitoring',
        'Software Installation & Updates',
        'Hardware Troubleshooting',
        'User Training & Support',
        'Incident Management'
      ],
      benefits: [
        'Minimize downtime',
        'Improve user productivity',
        'Reduce IT support costs',
        'Ensure system reliability',
        'Provide expert assistance'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira Service Management', 'Zendesk', 'Remote Desktop', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/24-7-it-support'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting services with technology roadmap development, digital transformation, and IT governance.',
      icon: '📊',
      price: '$2,200/month',
      features: [
        'IT Strategy Development',
        'Technology Roadmap Planning',
        'Digital Transformation Consulting',
        'IT Governance & Compliance',
        'Vendor Management',
        'Cost Optimization',
        'Risk Assessment',
        'Change Management'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Improve operational efficiency',
        'Reduce IT risks',
        'Enable digital transformation'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Consulting',
      technologies: ['ITIL', 'COBIT', 'Agile', 'Lean', 'Six Sigma', 'Project Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-consulting-strategy'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset management with inventory tracking, lifecycle management, and cost optimization.',
      icon: '📦',
      price: '$600/month',
      features: [
        'Asset Inventory & Tracking',
        'Lifecycle Management',
        'License Management',
        'Cost Optimization',
        'Compliance Reporting',
        'Vendor Management',
        'Asset Disposal',
        'Financial Reporting'
      ],
      benefits: [
        'Optimize IT investments',
        'Ensure compliance',
        'Reduce costs',
        'Improve asset utilization',
        'Streamline procurement'
      ],
      marketPrice: '$1,200-2,500/month',
      category: 'Management',
      technologies: ['ServiceNow', 'Lansweeper', 'PDQ Inventory', 'Microsoft SCCM', 'JAMF'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-asset-management'
    },

    // Specialized Services
    {
      title: 'Database Administration & Optimization',
      description: 'Expert database administration services with performance optimization, backup management, and security.',
      icon: '🗄️',
      price: '$1,500/month',
      features: [
        'Database Design & Implementation',
        'Performance Tuning & Optimization',
        'Backup & Recovery Management',
        'Security & Access Control',
        'Monitoring & Alerting',
        'Capacity Planning',
        'Migration & Upgrades',
        'Compliance & Auditing'
      ],
      benefits: [
        'Improve database performance',
        'Ensure data availability',
        'Reduce maintenance costs',
        'Enhance security',
        'Optimize storage usage'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Database',
      technologies: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/database-administration'
    },
    {
      title: 'Network Design & Implementation',
      description: 'Advanced network design and implementation services with high availability, security, and performance optimization.',
      icon: '🌐',
      price: '$1,800/month',
      features: [
        'Network Architecture Design',
        'LAN/WAN Implementation',
        'Wireless Network Setup',
        'Network Security Implementation',
        'Performance Optimization',
        'Monitoring & Management',
        'Disaster Recovery Planning',
        'Documentation & Training'
      ],
      benefits: [
        'Improve network performance',
        'Enhance security',
        'Increase reliability',
        'Enable scalability',
        'Reduce maintenance costs'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Aruba', 'Fortinet', 'Palo Alto', 'Meraki'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/network-design-implementation'
    },
    {
      title: 'Mobile Device Management (MDM)',
      description: 'Comprehensive mobile device management with security, compliance, and application management.',
      icon: '📱',
      price: '$800/month',
      features: [
        'Device Enrollment & Provisioning',
        'Security Policy Enforcement',
        'Application Management',
        'Remote Wipe & Lock',
        'Compliance Monitoring',
        'Location Tracking',
        'Content Management',
        'User Training & Support'
      ],
      benefits: [
        'Secure mobile devices',
        'Ensure compliance',
        'Reduce security risks',
        'Improve productivity',
        'Centralize management'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Mobile',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'JAMF', 'MobileIron', 'Citrix'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/mobile-device-management'
    },

    // Enterprise Services
    {
      title: 'Enterprise Resource Planning (ERP) Implementation',
      description: 'Complete ERP implementation services with customization, integration, and user training.',
      icon: '🏢',
      price: '$5,000/month',
      features: [
        'ERP System Selection & Planning',
        'Customization & Configuration',
        'Data Migration & Integration',
        'User Training & Change Management',
        'Testing & Quality Assurance',
        'Go-live Support',
        'Post-implementation Support',
        'Ongoing Maintenance'
      ],
      benefits: [
        'Streamline business processes',
        'Improve data accuracy',
        'Increase operational efficiency',
        'Enable better decision making',
        'Reduce manual work'
      ],
      marketPrice: '$8,000-20,000/month',
      category: 'Enterprise',
      technologies: ['SAP', 'Oracle ERP', 'Microsoft Dynamics', 'NetSuite', 'Workday', 'Salesforce'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/erp-implementation'
    },
    {
      title: 'Business Intelligence & Analytics',
      description: 'Advanced business intelligence solutions with data warehousing, reporting, and analytics dashboards.',
      icon: '📈',
      price: '$2,800/month',
      features: [
        'Data Warehouse Design',
        'ETL Process Development',
        'Dashboard & Report Creation',
        'Data Visualization',
        'Predictive Analytics',
        'Self-Service BI',
        'Data Governance',
        'Performance Optimization'
      ],
      benefits: [
        'Improve decision making',
        'Gain business insights',
        'Increase operational efficiency',
        'Enable data-driven culture',
        'Reduce reporting time'
      ],
      marketPrice: '$4,000-10,000/month',
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'QlikView', 'SAP BusinessObjects', 'IBM Cognos', 'Looker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/business-intelligence-analytics'
    },
    {
      title: 'IT Compliance & Audit Services',
      description: 'Comprehensive IT compliance services with audit preparation, risk assessment, and regulatory compliance.',
      icon: '📋',
      price: '$1,600/month',
      features: [
        'Compliance Assessment',
        'Audit Preparation & Support',
        'Risk Assessment & Management',
        'Policy Development',
        'Control Testing',
        'Remediation Planning',
        'Training & Awareness',
        'Ongoing Monitoring'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Reduce audit costs',
        'Minimize compliance risks',
        'Improve security posture',
        'Streamline audit processes'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Compliance',
      technologies: ['GRC Tools', 'Audit Management', 'Risk Assessment', 'Compliance Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-compliance-audit'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>IT Services & Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud migration, custom development, and 24/7 support. Enterprise-grade solutions starting at $600/month." />
        <meta name="keywords" content="it services, infrastructure management, cybersecurity, cloud migration, custom development, devops, it support, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow" role="doc-subtitle">
            Enterprise-Grade Technology Solutions
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive IT services designed to transform your business operations. From infrastructure management to cybersecurity, 
            we provide enterprise-grade solutions that ensure reliability, security, and performance.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🏗️</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Infrastructure</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Complete infrastructure management with 99.9% uptime guarantee</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Security</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Advanced cybersecurity solutions and compliance management</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">☁️</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Cloud</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Seamless cloud migration and management services</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">💻</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Development</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Custom software development and modernization</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center neon-text">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="cyber-button text-sm sm:text-base px-4 py-2"
                onClick={() => {
                  const element = document.getElementById(`category-${category.toLowerCase().replace(/\s+/g, '-')}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services by Category */}
        {categories.map((category) => (
          <div key={category} id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`} className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {itServices
                .filter(service => service.category === category)
                .map((service, index) => (
                  <div key={index} className="quantum-card p-4 sm:p-6 energy-pulse">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm sm:text-base font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm sm:text-base font-semibold text-pink-400 mb-2">Benefits:</h4>
                      <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">
                        {service.price}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        Market Price: {service.marketPrice}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm sm:text-base font-semibold text-purple-400 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {service.technologies.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-xs sm:text-sm text-gray-400 mb-2">
                        {service.contactInfo}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <a
                        href={service.link}
                        className="cyber-button text-center text-xs sm:text-sm px-3 py-2"
                        style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                      >
                        Learn More
                      </a>
                      <a
                        href="tel:+13024640950"
                        className="cyber-button text-center text-xs sm:text-sm px-3 py-2"
                        style={{background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)'}}
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your specific IT needs and discover how our comprehensive services can help your business grow and succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              📧 Email Us
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
            >
              💬 Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;