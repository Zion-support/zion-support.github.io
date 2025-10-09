import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
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
    },

    // Advanced IT Services
    {
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Comprehensive ERP implementation and management for integrated business processes and data management.',
      icon: '📊',
      price: '$4,500/month',
      features: [
        'ERP System Implementation',
        'Business Process Integration',
        'Data Migration & Management',
        'Custom Module Development',
        'User Training & Support',
        'Ongoing Maintenance'
      ],
      benefits: [
        'Streamline business processes',
        'Improve data accuracy by 95%',
        'Reduce operational costs by 35%',
        'Enable real-time reporting'
      ],
      marketPrice: '$8,000-20,000/month',
      category: 'Enterprise Software',
      technologies: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Salesforce', 'Custom Development', 'Database Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Customer Relationship Management (CRM)',
      description: 'Advanced CRM solutions for customer data management, sales automation, and customer service optimization.',
      icon: '👥',
      price: '$2,200/month',
      features: [
        'CRM Implementation & Customization',
        'Sales Pipeline Management',
        'Customer Data Integration',
        'Marketing Automation',
        'Customer Service Tools',
        'Analytics & Reporting'
      ],
      benefits: [
        'Increase sales by 40%',
        'Improve customer satisfaction',
        'Automate marketing processes',
        'Better customer insights'
      ],
      marketPrice: '$4,000-10,000/month',
      category: 'Customer Management',
      technologies: ['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Custom CRM', 'API Integration', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Business Intelligence & Analytics',
      description: 'Advanced BI solutions for data visualization, reporting, and business insights to drive decision-making.',
      icon: '📈',
      price: '$3,000/month',
      features: [
        'Data Warehouse Design',
        'ETL Process Development',
        'Dashboard Creation',
        'Report Automation',
        'Predictive Analytics',
        'Self-Service BI Tools'
      ],
      benefits: [
        'Make data-driven decisions',
        'Improve business performance',
        'Reduce reporting time by 80%',
        'Enable self-service analytics'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Business Intelligence',
      technologies: ['Tableau', 'Power BI', 'QlikView', 'SQL Server', 'Python', 'R'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'API Development & Integration',
      description: 'Custom API development and third-party integrations to connect systems and enable data flow.',
      icon: '🔌',
      price: '$1,800/month',
      features: [
        'RESTful API Development',
        'GraphQL Implementation',
        'Third-party Integrations',
        'API Documentation',
        'API Security & Authentication',
        'Performance Optimization'
      ],
      benefits: [
        'Connect disparate systems',
        'Enable real-time data sharing',
        'Improve system efficiency',
        'Reduce manual data entry'
      ],
      marketPrice: '$3,500-8,000/month',
      category: 'Integration',
      technologies: ['Node.js', 'Python', 'Java', 'GraphQL', 'OAuth', 'API Gateway'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Administration',
      description: 'Comprehensive database management including design, optimization, backup, and performance tuning.',
      icon: '🗄️',
      price: '$2,500/month',
      features: [
        'Database Design & Implementation',
        'Performance Tuning',
        'Backup & Recovery',
        'Security Management',
        'Monitoring & Maintenance',
        'Data Migration'
      ],
      benefits: [
        'Optimize database performance',
        'Ensure data security',
        'Reduce downtime',
        'Improve query performance'
      ],
      marketPrice: '$4,000-10,000/month',
      category: 'Database',
      technologies: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle', 'MongoDB', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Security & Firewall Management',
      description: 'Advanced network security solutions including firewall configuration, monitoring, and threat prevention.',
      icon: '🔥',
      price: '$2,800/month',
      features: [
        'Firewall Configuration & Management',
        'Network Monitoring',
        'Intrusion Detection',
        'VPN Setup & Management',
        'Network Segmentation',
        'Security Policy Implementation'
      ],
      benefits: [
        'Protect network infrastructure',
        'Prevent unauthorized access',
        'Monitor network traffic',
        'Ensure compliance'
      ],
      marketPrice: '$5,000-12,000/month',
      category: 'Network Security',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Check Point', 'SIEM', 'Network Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Service Desk & Support',
      description: 'Comprehensive IT support services including help desk, technical support, and user assistance.',
      icon: '🎧',
      price: '$1,500/month',
      features: [
        '24/7 Help Desk Support',
        'Remote Technical Support',
        'User Training & Education',
        'Issue Tracking & Resolution',
        'Knowledge Base Management',
        'SLA Management'
      ],
      benefits: [
        'Improve user productivity',
        'Reduce downtime',
        'Quick issue resolution',
        'Better user satisfaction'
      ],
      marketPrice: '$3,000-7,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira Service Desk', 'Remote Desktop', 'Ticketing Systems', 'Knowledge Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Project Management',
      description: 'Professional IT project management services for complex technology implementations and deployments.',
      icon: '📋',
      price: '$3,500/month',
      features: [
        'Project Planning & Execution',
        'Resource Management',
        'Risk Assessment & Mitigation',
        'Stakeholder Communication',
        'Quality Assurance',
        'Project Documentation'
      ],
      benefits: [
        'Ensure project success',
        'Meet deadlines and budgets',
        'Minimize risks',
        'Improve communication'
      ],
      marketPrice: '$6,000-15,000/month',
      category: 'Project Management',
      technologies: ['Microsoft Project', 'Jira', 'Confluence', 'Agile Methodologies', 'PMI Standards'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Comprehensive IT compliance services to ensure adherence to regulations and industry standards.',
      icon: '📜',
      price: '$2,200/month',
      features: [
        'Compliance Assessment',
        'Policy Development',
        'Audit Preparation',
        'Risk Management',
        'Training & Education',
        'Documentation Management'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Reduce compliance risks',
        'Improve governance',
        'Maintain audit readiness'
      ],
      marketPrice: '$4,000-10,000/month',
      category: 'Compliance',
      technologies: ['GRC Tools', 'Compliance Frameworks', 'Audit Management', 'Policy Management', 'Risk Assessment'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Disaster Recovery Planning',
      description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity.',
      icon: '🚨',
      price: '$2,800/month',
      features: [
        'Disaster Recovery Planning',
        'Business Continuity Planning',
        'Backup Strategy Development',
        'Recovery Testing',
        'Documentation & Training',
        'Ongoing Maintenance'
      ],
      benefits: [
        'Minimize downtime',
        'Protect critical data',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      marketPrice: '$5,000-12,000/month',
      category: 'Disaster Recovery',
      technologies: ['Backup Solutions', 'Replication', 'Cloud DR', 'Recovery Testing', 'Documentation Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Cost Optimization',
      description: 'Strategic IT cost optimization services to reduce expenses while maintaining performance and security.',
      icon: '💰',
      price: '$1,800/month',
      features: [
        'Cost Analysis & Assessment',
        'Vendor Management',
        'License Optimization',
        'Resource Right-sizing',
        'Cloud Cost Management',
        'ROI Analysis'
      ],
      benefits: [
        'Reduce IT costs by 25-40%',
        'Optimize resource utilization',
        'Improve cost visibility',
        'Maximize ROI'
      ],
      marketPrice: '$3,500-8,000/month',
      category: 'Cost Optimization',
      technologies: ['Cost Management Tools', 'Cloud Cost Analytics', 'License Management', 'Vendor Analysis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification preparation for technical teams and end users.',
      icon: '🎓',
      price: '$1,200/month',
      features: [
        'Technical Training Programs',
        'Certification Preparation',
        'End-user Training',
        'Custom Training Development',
        'Online Learning Platforms',
        'Progress Tracking'
      ],
      benefits: [
        'Improve team skills',
        'Increase productivity',
        'Reduce support tickets',
        'Career development'
      ],
      marketPrice: '$2,500-6,000/month',
      category: 'Training',
      technologies: ['Learning Management Systems', 'Virtual Training', 'Certification Programs', 'Skills Assessment'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Vendor Management',
      description: 'Strategic vendor management services to optimize relationships, contracts, and service delivery.',
      icon: '🤝',
      price: '$2,000/month',
      features: [
        'Vendor Assessment & Selection',
        'Contract Negotiation',
        'Performance Monitoring',
        'Relationship Management',
        'Cost Optimization',
        'Risk Management'
      ],
      benefits: [
        'Optimize vendor relationships',
        'Reduce costs',
        'Improve service quality',
        'Minimize risks'
      ],
      marketPrice: '$4,000-9,000/month',
      category: 'Vendor Management',
      technologies: ['Vendor Management Tools', 'Contract Management', 'Performance Dashboards', 'Risk Assessment'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Innovation & Digital Transformation',
      description: 'Strategic IT innovation services to drive digital transformation and competitive advantage.',
      icon: '🚀',
      price: '$4,000/month',
      features: [
        'Digital Strategy Development',
        'Technology Innovation',
        'Digital Transformation Planning',
        'Emerging Technology Assessment',
        'Innovation Workshops',
        'Implementation Support'
      ],
      benefits: [
        'Drive digital innovation',
        'Gain competitive advantage',
        'Improve business agility',
        'Future-proof technology'
      ],
      marketPrice: '$7,000-18,000/month',
      category: 'Innovation',
      technologies: ['Emerging Technologies', 'Digital Platforms', 'Innovation Tools', 'Strategy Frameworks'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
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
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'Enterprise Software', count: itServices.filter(s => s.category === 'Enterprise Software').length },
    { name: 'Customer Management', count: itServices.filter(s => s.category === 'Customer Management').length },
    { name: 'Business Intelligence', count: itServices.filter(s => s.category === 'Business Intelligence').length },
    { name: 'Integration', count: itServices.filter(s => s.category === 'Integration').length },
    { name: 'Project Management', count: itServices.filter(s => s.category === 'Project Management').length },
    { name: 'Disaster Recovery', count: itServices.filter(s => s.category === 'Disaster Recovery').length },
    { name: 'Cost Optimization', count: itServices.filter(s => s.category === 'Cost Optimization').length },
    { name: 'Training', count: itServices.filter(s => s.category === 'Training').length },
    { name: 'Vendor Management', count: itServices.filter(s => s.category === 'Vendor Management').length },
    { name: 'Innovation', count: itServices.filter(s => s.category === 'Innovation').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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