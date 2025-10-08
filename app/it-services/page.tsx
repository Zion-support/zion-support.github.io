import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Server, Shield, Cloud, Database, Network, Code, Monitor, Settings } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.',
      icon: '☁️',
      price: 'Starting at $2,500/month',
      features: ['Cloud migration strategy', 'Cost optimization', 'Security hardening', '24/7 monitoring', 'Disaster recovery'],
      benefits: ['Reduce cloud costs by 30%', 'Improve performance by 40%', 'Ensure 99.9% uptime'],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      icon: '🔒',
      price: 'Starting at $3,000/month',
      features: ['Security audits', 'Penetration testing', 'Threat monitoring', 'Incident response', 'Compliance management'],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce security costs by 50%', 'Ensure compliance'],
      marketPrice: '$5,000-12,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Zero Trust']
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration services.',
      icon: '🔄',
      price: 'Starting at $2,000/month',
      features: ['CI/CD pipeline setup', 'Infrastructure automation', 'Monitoring & alerting', 'Version control', 'Testing automation'],
      benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity'],
      marketPrice: '$3,500-7,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus']
    },
    {
      title: 'Database Administration',
      description: 'Database design, optimization, backup, and maintenance for SQL and NoSQL databases.',
      icon: '🗄️',
      price: 'Starting at $1,500/month',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services'],
      benefits: ['Improve query performance by 60%', 'Ensure data integrity', 'Reduce downtime'],
      marketPrice: '$2,500-5,000/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      title: 'Network Infrastructure',
      description: 'Network design, implementation, and management for enterprise-grade connectivity.',
      icon: '🌐',
      price: 'Starting at $2,200/month',
      features: ['Network design', 'Router & switch config', 'VPN setup', 'Load balancing', 'Network monitoring'],
      benefits: ['Improve network performance', 'Reduce latency by 40%', 'Ensure reliability'],
      marketPrice: '$3,500-6,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'MPLS']
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support, troubleshooting, and user assistance for all IT needs.',
      icon: '🛠️',
      price: 'Starting at $1,200/month',
      features: ['24/7 support', 'Remote assistance', 'Hardware support', 'Software installation', 'User training'],
      benefits: ['Reduce downtime by 70%', 'Improve user satisfaction', 'Lower support costs'],
      marketPrice: '$2,000-4,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'Active Directory', 'Office 365']
    },
    {
      title: 'Data Analytics & BI',
      description: 'Data warehouse design, ETL processes, and business intelligence dashboard development.',
      icon: '📊',
      price: 'Starting at $2,800/month',
      features: ['Data warehouse design', 'ETL development', 'Dashboard creation', 'Report automation', 'Data governance'],
      benefits: ['Make data-driven decisions', 'Improve business insights', 'Automate reporting'],
      marketPrice: '$4,500-9,000/month',
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'Snowflake', 'Apache Airflow', 'Python']
    },
    {
      title: 'API Development & Integration',
      description: 'Custom API development, third-party integrations, and microservices architecture.',
      icon: '🔌',
      price: 'Starting at $2,000/month',
      features: ['RESTful API design', 'GraphQL development', 'Third-party integrations', 'API documentation', 'Rate limiting'],
      benefits: ['Improve system connectivity', 'Enable rapid development', 'Enhance scalability'],
      marketPrice: '$3,500-7,500/month',
      category: 'Integration',
      technologies: ['Node.js', 'Python', 'GraphQL', 'Kong', 'Postman']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android.',
      icon: '📱',
      price: 'Starting at $3,500/month',
      features: ['Native iOS/Android apps', 'Cross-platform development', 'UI/UX design', 'App store deployment', 'Maintenance'],
      benefits: ['Reach mobile users', 'Improve user engagement', 'Increase revenue'],
      marketPrice: '$6,000-15,000/month',
      category: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin']
    },
    {
      title: 'Web Application Development',
      description: 'Custom web applications, e-commerce solutions, and enterprise web platforms.',
      icon: '💻',
      price: 'Starting at $2,500/month',
      features: ['Custom web apps', 'E-commerce solutions', 'CMS development', 'Responsive design', 'SEO optimization'],
      benefits: ['Improve online presence', 'Increase conversions', 'Enhance user experience'],
      marketPrice: '$4,000-10,000/month',
      category: 'Web Development',
      technologies: ['React', 'Vue.js', 'Node.js', 'PHP', 'WordPress']
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Technology roadmap development, digital transformation planning, and IT strategy consulting.',
      icon: '💡',
      price: 'Starting at $200/hour',
      features: ['Technology assessment', 'Digital transformation', 'IT strategy planning', 'Vendor evaluation', 'ROI analysis'],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Reduce risks'],
      marketPrice: '$300-500/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Architecture Design', 'Risk Assessment', 'ROI Analysis']
    },
    {
      title: 'Disaster Recovery & Backup',
      description: 'Comprehensive backup solutions, disaster recovery planning, and business continuity services.',
      icon: '🔄',
      price: 'Starting at $1,800/month',
      features: ['Backup strategy', 'Disaster recovery planning', 'Data replication', 'Recovery testing', 'Business continuity'],
      benefits: ['Minimize downtime', 'Protect critical data', 'Ensure business continuity'],
      marketPrice: '$3,000-6,000/month',
      category: 'Backup & Recovery',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'VMware']
    },
    // Additional IT Services
    {
      title: 'Server Management & Maintenance',
      description: 'Comprehensive server administration, monitoring, and maintenance services.',
      icon: '🖥️',
      price: 'Starting at $2,000/month',
      features: ['Server administration', 'Performance monitoring', 'Security updates', 'Hardware maintenance', 'Capacity planning'],
      benefits: ['Ensure server reliability', 'Optimize performance', 'Reduce downtime'],
      marketPrice: '$3,500-7,000/month',
      category: 'Server Management',
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Monitoring Tools']
    },
    {
      title: 'Email & Communication Systems',
      description: 'Email server setup, migration, and management with security and compliance features.',
      icon: '📧',
      price: 'Starting at $1,500/month',
      features: ['Email server setup', 'Migration services', 'Security configuration', 'Spam filtering', 'Compliance management'],
      benefits: ['Improve email security', 'Ensure compliance', 'Reduce spam'],
      marketPrice: '$2,500-5,000/month',
      category: 'Communication',
      technologies: ['Exchange', 'Office 365', 'Google Workspace', 'Postfix', 'SpamAssassin']
    },
    {
      title: 'Virtualization Services',
      description: 'Server and desktop virtualization with VMware, Hyper-V, and cloud solutions.',
      icon: '💻',
      price: 'Starting at $2,500/month',
      features: ['Server virtualization', 'Desktop virtualization', 'Cloud migration', 'Resource optimization', 'Backup & recovery'],
      benefits: ['Reduce hardware costs', 'Improve flexibility', 'Enhance security'],
      marketPrice: '$4,000-8,000/month',
      category: 'Virtualization',
      technologies: ['VMware', 'Hyper-V', 'Citrix', 'Docker', 'Kubernetes']
    },
    {
      title: 'Storage Solutions',
      description: 'Enterprise storage design, implementation, and management with backup and disaster recovery.',
      icon: '💾',
      price: 'Starting at $2,200/month',
      features: ['Storage design', 'SAN/NAS implementation', 'Backup solutions', 'Disaster recovery', 'Performance optimization'],
      benefits: ['Improve data access', 'Ensure data protection', 'Optimize storage costs'],
      marketPrice: '$3,500-7,000/month',
      category: 'Storage',
      technologies: ['NetApp', 'EMC', 'Dell', 'Pure Storage', 'Cloud Storage']
    },
    {
      title: 'Security Assessment & Penetration Testing',
      description: 'Comprehensive security audits, vulnerability assessments, and penetration testing services.',
      icon: '🔍',
      price: 'Starting at $3,500/project',
      features: ['Security audits', 'Vulnerability scanning', 'Penetration testing', 'Compliance assessment', 'Security recommendations'],
      benefits: ['Identify security gaps', 'Improve security posture', 'Ensure compliance'],
      marketPrice: '$5,000-15,000/project',
      category: 'Security Assessment',
      technologies: ['Nessus', 'OpenVAS', 'Metasploit', 'Burp Suite', 'Custom Tools']
    },
    {
      title: 'Identity & Access Management',
      description: 'User identity management, single sign-on, and access control solutions.',
      icon: '🔐',
      price: 'Starting at $2,800/month',
      features: ['Single sign-on', 'Multi-factor authentication', 'User provisioning', 'Access governance', 'Compliance reporting'],
      benefits: ['Improve security', 'Simplify access management', 'Ensure compliance'],
      marketPrice: '$4,500-9,000/month',
      category: 'Identity Management',
      technologies: ['Active Directory', 'Azure AD', 'Okta', 'Ping Identity', 'SAML/OAuth']
    },
    {
      title: 'Network Security Solutions',
      description: 'Firewall management, intrusion detection, and network security monitoring.',
      icon: '🛡️',
      price: 'Starting at $2,500/month',
      features: ['Firewall management', 'Intrusion detection', 'Network monitoring', 'VPN setup', 'Security policies'],
      benefits: ['Protect network infrastructure', 'Detect threats', 'Ensure compliance'],
      marketPrice: '$4,000-8,000/month',
      category: 'Network Security',
      technologies: ['Cisco ASA', 'Fortinet', 'Palo Alto', 'Check Point', 'SIEM']
    },
    {
      title: 'Cloud Security Services',
      description: 'Cloud security assessment, configuration, and monitoring for AWS, Azure, and Google Cloud.',
      icon: '☁️',
      price: 'Starting at $3,000/month',
      features: ['Cloud security assessment', 'Configuration management', 'Compliance monitoring', 'Threat detection', 'Incident response'],
      benefits: ['Secure cloud environments', 'Ensure compliance', 'Detect threats'],
      marketPrice: '$5,000-12,000/month',
      category: 'Cloud Security',
      technologies: ['AWS Security', 'Azure Security', 'Google Cloud Security', 'CloudTrail', 'CloudWatch']
    },
    {
      title: 'Endpoint Security Management',
      description: 'Antivirus, endpoint detection, and response solutions for desktops and mobile devices.',
      icon: '📱',
      price: 'Starting at $1,800/month',
      features: ['Antivirus management', 'Endpoint detection', 'Mobile device management', 'Patch management', 'Threat response'],
      benefits: ['Protect endpoints', 'Detect threats', 'Ensure compliance'],
      marketPrice: '$3,000-6,000/month',
      category: 'Endpoint Security',
      technologies: ['CrowdStrike', 'SentinelOne', 'Microsoft Defender', 'MobileIron', 'Intune']
    },
    {
      title: 'Data Loss Prevention',
      description: 'Data protection, classification, and loss prevention solutions.',
      icon: '🔒',
      price: 'Starting at $2,200/month',
      features: ['Data classification', 'Data loss prevention', 'Encryption management', 'Compliance monitoring', 'Incident response'],
      benefits: ['Protect sensitive data', 'Ensure compliance', 'Prevent data loss'],
      marketPrice: '$3,500-7,000/month',
      category: 'Data Protection',
      technologies: ['Symantec DLP', 'Forcepoint', 'Microsoft DLP', 'Varonis', 'Encryption Tools']
    },
    {
      title: 'Security Information & Event Management',
      description: 'SIEM implementation, log management, and security event correlation.',
      icon: '📊',
      price: 'Starting at $4,000/month',
      features: ['SIEM implementation', 'Log management', 'Event correlation', 'Threat detection', 'Incident response'],
      benefits: ['Centralize security monitoring', 'Detect threats', 'Improve response time'],
      marketPrice: '$6,000-15,000/month',
      category: 'SIEM',
      technologies: ['Splunk', 'QRadar', 'ArcSight', 'LogRhythm', 'Elastic Stack']
    },
    {
      title: 'Compliance & Risk Management',
      description: 'Regulatory compliance, risk assessment, and audit preparation services.',
      icon: '📋',
      price: 'Starting at $3,500/month',
      features: ['Compliance assessment', 'Risk management', 'Audit preparation', 'Policy development', 'Training programs'],
      benefits: ['Ensure compliance', 'Manage risks', 'Prepare for audits'],
      marketPrice: '$5,500-12,000/month',
      category: 'Compliance',
      technologies: ['GRC Tools', 'Risk Management', 'Compliance Frameworks', 'Audit Tools']
    },
    {
      title: 'IT Asset Management',
      description: 'Hardware and software asset tracking, licensing, and lifecycle management.',
      icon: '📦',
      price: 'Starting at $1,500/month',
      features: ['Asset tracking', 'License management', 'Lifecycle management', 'Cost optimization', 'Compliance reporting'],
      benefits: ['Optimize IT costs', 'Ensure compliance', 'Improve asset utilization'],
      marketPrice: '$2,500-5,000/month',
      category: 'Asset Management',
      technologies: ['ServiceNow', 'Lansweeper', 'ManageEngine', 'Asset Management Tools']
    },
    {
      title: 'IT Service Management',
      description: 'ITSM implementation with incident, problem, and change management processes.',
      icon: '⚙️',
      price: 'Starting at $2,800/month',
      features: ['ITSM implementation', 'Incident management', 'Problem management', 'Change management', 'Service catalog'],
      benefits: ['Improve service delivery', 'Reduce incidents', 'Enhance customer satisfaction'],
      marketPrice: '$4,500-9,000/month',
      category: 'ITSM',
      technologies: ['ServiceNow', 'Jira Service Management', 'BMC Remedy', 'Cherwell', 'ITIL']
    },
    {
      title: 'Remote Desktop Services',
      description: 'Remote access solutions, virtual desktop infrastructure, and remote support services.',
      icon: '🖥️',
      price: 'Starting at $2,000/month',
      features: ['Remote access setup', 'VDI implementation', 'Remote support', 'Security configuration', 'Performance monitoring'],
      benefits: ['Enable remote work', 'Improve security', 'Reduce support costs'],
      marketPrice: '$3,500-7,000/month',
      category: 'Remote Services',
      technologies: ['Citrix', 'VMware Horizon', 'Microsoft RDS', 'TeamViewer', 'Remote Desktop']
    },
    {
      title: 'Print & Document Management',
      description: 'Print server management, document workflow, and digital transformation services.',
      icon: '🖨️',
      price: 'Starting at $1,200/month',
      features: ['Print server management', 'Document workflow', 'Digital transformation', 'Cost optimization', 'Security management'],
      benefits: ['Reduce printing costs', 'Improve document workflow', 'Enhance security'],
      marketPrice: '$2,000-4,000/month',
      category: 'Document Management',
      technologies: ['Print Servers', 'Document Management', 'Workflow Tools', 'Security Solutions']
    },
    {
      title: 'VoIP & Unified Communications',
      description: 'Voice over IP, unified communications, and collaboration platform implementation.',
      icon: '📞',
      price: 'Starting at $2,500/month',
      features: ['VoIP implementation', 'Unified communications', 'Video conferencing', 'Call center solutions', 'Integration services'],
      benefits: ['Reduce communication costs', 'Improve collaboration', 'Enhance productivity'],
      marketPrice: '$4,000-8,000/month',
      category: 'Communications',
      technologies: ['Cisco', 'Microsoft Teams', 'Zoom', 'Avaya', 'SIP']
    },
    {
      title: 'Wireless Network Solutions',
      description: 'Wi-Fi network design, implementation, and management with security and performance optimization.',
      icon: '📶',
      price: 'Starting at $2,000/month',
      features: ['Wi-Fi design', 'Access point management', 'Security configuration', 'Performance optimization', 'Guest network setup'],
      benefits: ['Improve wireless performance', 'Enhance security', 'Support mobile devices'],
      marketPrice: '$3,500-7,000/month',
      category: 'Wireless',
      technologies: ['Cisco Wireless', 'Aruba', 'Ubiquiti', 'Ruckus', 'Wi-Fi 6']
    },
    {
      title: 'Load Balancing & Traffic Management',
      description: 'Load balancer configuration, traffic management, and high availability solutions.',
      icon: '⚖️',
      price: 'Starting at $2,500/month',
      features: ['Load balancer setup', 'Traffic management', 'High availability', 'SSL termination', 'Performance monitoring'],
      benefits: ['Improve application performance', 'Ensure high availability', 'Optimize traffic flow'],
      marketPrice: '$4,000-8,000/month',
      category: 'Load Balancing',
      technologies: ['F5', 'Citrix ADC', 'HAProxy', 'NGINX', 'Cloud Load Balancers']
    },
    {
      title: 'Content Delivery Network',
      description: 'CDN implementation and management for improved website performance and global reach.',
      icon: '🌐',
      price: 'Starting at $1,800/month',
      features: ['CDN setup', 'Content optimization', 'Global distribution', 'Performance monitoring', 'Security features'],
      benefits: ['Improve website performance', 'Reduce bandwidth costs', 'Enhance user experience'],
      marketPrice: '$3,000-6,000/month',
      category: 'CDN',
      technologies: ['CloudFlare', 'AWS CloudFront', 'Azure CDN', 'Akamai', 'MaxCDN']
    },
    {
      title: 'Database Performance Tuning',
      description: 'Database optimization, performance monitoring, and query tuning services.',
      icon: '🗄️',
      price: 'Starting at $2,200/month',
      features: ['Performance tuning', 'Query optimization', 'Index management', 'Capacity planning', 'Monitoring setup'],
      benefits: ['Improve database performance', 'Reduce query time', 'Optimize resource usage'],
      marketPrice: '$3,500-7,000/month',
      category: 'Database Tuning',
      technologies: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'High Availability & Clustering',
      description: 'High availability solutions, clustering, and failover configuration for critical systems.',
      icon: '🔄',
      price: 'Starting at $3,500/month',
      features: ['Clustering setup', 'Failover configuration', 'Load balancing', 'Disaster recovery', 'Monitoring'],
      benefits: ['Ensure system availability', 'Minimize downtime', 'Improve reliability'],
      marketPrice: '$5,500-12,000/month',
      category: 'High Availability',
      technologies: ['Windows Cluster', 'Linux HA', 'VMware HA', 'SQL Always On', 'Oracle RAC']
    },
    {
      title: 'IT Training & Certification',
      description: 'Technical training programs, certification preparation, and skill development services.',
      icon: '🎓',
      price: 'Starting at $200/hour',
      features: ['Technical training', 'Certification prep', 'Skill assessment', 'Custom training programs', 'Online learning'],
      benefits: ['Improve team skills', 'Achieve certifications', 'Stay current with technology'],
      marketPrice: '$300-500/hour',
      category: 'Training',
      technologies: ['Microsoft', 'Cisco', 'AWS', 'VMware', 'Custom Training']
    },
    {
      title: 'IT Project Management',
      description: 'IT project planning, execution, and management with agile and traditional methodologies.',
      icon: '📋',
      price: 'Starting at $250/hour',
      features: ['Project planning', 'Agile management', 'Risk management', 'Resource allocation', 'Quality assurance'],
      benefits: ['Ensure project success', 'Manage risks', 'Optimize resources'],
      marketPrice: '$400-600/hour',
      category: 'Project Management',
      technologies: ['PMI', 'Agile', 'Scrum', 'Kanban', 'Project Tools']
    },
    {
      title: 'IT Vendor Management',
      description: 'Vendor relationship management, contract negotiation, and service level monitoring.',
      icon: '🤝',
      price: 'Starting at $2,000/month',
      features: ['Vendor evaluation', 'Contract negotiation', 'SLA monitoring', 'Performance management', 'Cost optimization'],
      benefits: ['Optimize vendor relationships', 'Reduce costs', 'Improve service quality'],
      marketPrice: '$3,500-7,000/month',
      category: 'Vendor Management',
      technologies: ['Vendor Management Tools', 'Contract Management', 'SLA Monitoring', 'Performance Metrics']
    },
    {
      title: 'IT Governance & Strategy',
      description: 'IT governance framework, strategic planning, and technology roadmap development.',
      icon: '📊',
      price: 'Starting at $300/hour',
      features: ['IT governance', 'Strategic planning', 'Technology roadmap', 'Risk assessment', 'Compliance management'],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Manage risks'],
      marketPrice: '$500-800/hour',
      category: 'IT Governance',
      technologies: ['COBIT', 'ITIL', 'ISO 27001', 'Strategic Planning', 'Governance Frameworks']
    },
    {
      title: 'IT Cost Optimization',
      description: 'IT cost analysis, optimization strategies, and budget management services.',
      icon: '💰',
      price: 'Starting at $2,500/month',
      features: ['Cost analysis', 'Budget optimization', 'License management', 'Resource optimization', 'ROI analysis'],
      benefits: ['Reduce IT costs', 'Optimize budgets', 'Improve ROI'],
      marketPrice: '$4,000-8,000/month',
      category: 'Cost Optimization',
      technologies: ['Cost Management Tools', 'License Management', 'Budget Planning', 'ROI Analysis']
    },
    {
      title: 'IT Performance Monitoring',
      description: 'Comprehensive IT infrastructure monitoring, alerting, and performance optimization.',
      icon: '📈',
      price: 'Starting at $2,000/month',
      features: ['Infrastructure monitoring', 'Performance alerts', 'Capacity planning', 'Trend analysis', 'Reporting'],
      benefits: ['Prevent issues', 'Optimize performance', 'Plan capacity'],
      marketPrice: '$3,500-7,000/month',
      category: 'Performance Monitoring',
      technologies: ['Nagios', 'Zabbix', 'PRTG', 'SolarWinds', 'Custom Monitoring']
    },
    {
      title: 'IT Change Management',
      description: 'Change control processes, impact analysis, and change implementation services.',
      icon: '🔄',
      price: 'Starting at $1,800/month',
      features: ['Change control', 'Impact analysis', 'Change implementation', 'Rollback planning', 'Documentation'],
      benefits: ['Reduce change risks', 'Improve success rates', 'Ensure compliance'],
      marketPrice: '$3,000-6,000/month',
      category: 'Change Management',
      technologies: ['Change Management Tools', 'ITIL', 'Process Automation', 'Documentation Systems']
    },
    {
      title: 'IT Documentation & Knowledge Management',
      description: 'Technical documentation, knowledge base development, and process documentation.',
      icon: '📚',
      price: 'Starting at $1,500/month',
      features: ['Technical documentation', 'Knowledge base', 'Process documentation', 'User guides', 'Maintenance'],
      benefits: ['Improve knowledge sharing', 'Reduce support time', 'Ensure consistency'],
      marketPrice: '$2,500-5,000/month',
      category: 'Documentation',
      technologies: ['Confluence', 'SharePoint', 'Documentation Tools', 'Knowledge Management']
    },
    {
      title: 'IT Compliance & Audit Support',
      description: 'Compliance assessment, audit preparation, and regulatory compliance services.',
      icon: '📋',
      price: 'Starting at $2,800/month',
      features: ['Compliance assessment', 'Audit preparation', 'Regulatory compliance', 'Documentation', 'Training'],
      benefits: ['Ensure compliance', 'Prepare for audits', 'Reduce risks'],
      marketPrice: '$4,500-9,000/month',
      category: 'Compliance Support',
      technologies: ['Compliance Tools', 'Audit Frameworks', 'Regulatory Standards', 'Documentation Systems']
    },
    {
      title: 'IT Innovation & Emerging Technologies',
      description: 'Technology evaluation, innovation consulting, and emerging technology implementation.',
      icon: '🚀',
      price: 'Starting at $350/hour',
      features: ['Technology evaluation', 'Innovation consulting', 'Pilot projects', 'ROI analysis', 'Implementation planning'],
      benefits: ['Stay ahead of technology', 'Drive innovation', 'Improve competitiveness'],
      marketPrice: '$500-800/hour',
      category: 'Innovation',
      technologies: ['Emerging Technologies', 'Innovation Frameworks', 'Technology Evaluation', 'Pilot Management']
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud, security, DevOps, and infrastructure solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, infrastructure, technology consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional IT Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Comprehensive technology solutions to power your business growth and digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Free Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert solutions delivered by certified professionals with proven track records
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Experts</h3>
                <p className="text-gray-600">AWS, Microsoft, Cisco, and other industry certifications</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security with compliance and monitoring</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud-First Approach</h3>
                <p className="text-gray-600">Modern, scalable solutions built for the cloud</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock monitoring and support services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Services
                </h2>
                <p className="text-xl text-gray-600">
                  Professional {category.toLowerCase()} solutions tailored to your business needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 40% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Get Quote
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our certified IT experts for a free consultation and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;