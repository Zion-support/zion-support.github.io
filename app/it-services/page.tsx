import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Server, Shield, Cloud, Database, Network, Code, Monitor, Settings } from 'lucide-react';
import '../futuristic-design.css';

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
    {
      title: 'Enterprise Resource Planning (ERP)',
      description: 'ERP system implementation, customization, and integration for business process optimization.',
      icon: '📋',
      price: 'Starting at $5,000/month',
      features: ['ERP implementation', 'Custom modules', 'Data migration', 'User training', 'Ongoing support'],
      benefits: ['Streamline operations', 'Improve efficiency', 'Centralize data management'],
      marketPrice: '$8,000-20,000/month',
      category: 'Enterprise Software',
      technologies: ['SAP', 'Oracle', 'Microsoft Dynamics', 'NetSuite', 'Salesforce']
    },
    {
      title: 'Customer Relationship Management (CRM)',
      description: 'CRM system setup, customization, and integration to improve customer relationships and sales.',
      icon: '👥',
      price: 'Starting at $2,200/month',
      features: ['CRM implementation', 'Custom workflows', 'Integration services', 'Data migration', 'User training'],
      benefits: ['Increase sales by 30%', 'Improve customer satisfaction', 'Streamline processes'],
      marketPrice: '$3,500-8,000/month',
      category: 'Enterprise Software',
      technologies: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho', 'Microsoft Dynamics']
    },
    {
      title: 'Enterprise Content Management',
      description: 'Document management, workflow automation, and content collaboration solutions.',
      icon: '📁',
      price: 'Starting at $1,800/month',
      features: ['Document management', 'Workflow automation', 'Version control', 'Search & retrieval', 'Compliance'],
      benefits: ['Improve productivity', 'Ensure compliance', 'Reduce paper usage'],
      marketPrice: '$3,000-7,000/month',
      category: 'Content Management',
      technologies: ['SharePoint', 'Confluence', 'Box', 'Dropbox Business', 'Google Workspace']
    },
    {
      title: 'Identity & Access Management',
      description: 'User authentication, authorization, and identity management solutions for enterprise security.',
      icon: '🔐',
      price: 'Starting at $2,500/month',
      features: ['Single sign-on (SSO)', 'Multi-factor authentication', 'User provisioning', 'Access governance', 'Audit logging'],
      benefits: ['Enhance security', 'Simplify user management', 'Ensure compliance'],
      marketPrice: '$4,000-10,000/month',
      category: 'Security',
      technologies: ['Okta', 'Azure AD', 'Ping Identity', 'ForgeRock', 'Auth0']
    },
    {
      title: 'Enterprise Monitoring & Observability',
      description: 'Comprehensive monitoring solutions for applications, infrastructure, and business metrics.',
      icon: '📊',
      price: 'Starting at $2,000/month',
      features: ['Application monitoring', 'Infrastructure monitoring', 'Log management', 'Alerting', 'Dashboards'],
      benefits: ['Prevent outages', 'Improve performance', 'Reduce MTTR'],
      marketPrice: '$3,500-8,000/month',
      category: 'Monitoring',
      technologies: ['Datadog', 'New Relic', 'Splunk', 'Elastic Stack', 'Prometheus']
    },
    {
      title: 'Microservices Architecture',
      description: 'Design and implementation of microservices architecture for scalable, maintainable applications.',
      icon: '🔧',
      price: 'Starting at $4,500/month',
      features: ['Architecture design', 'Service decomposition', 'API gateway setup', 'Container orchestration', 'Service mesh'],
      benefits: ['Improve scalability', 'Enable rapid development', 'Reduce coupling'],
      marketPrice: '$7,500-18,000/month',
      category: 'Architecture',
      technologies: ['Kubernetes', 'Docker', 'Istio', 'Kong', 'Consul']
    },
    {
      title: 'Data Engineering & ETL',
      description: 'Data pipeline development, ETL processes, and data warehouse implementation.',
      icon: '⚙️',
      price: 'Starting at $3,200/month',
      features: ['ETL pipeline design', 'Data warehousing', 'Real-time processing', 'Data quality', 'Monitoring'],
      benefits: ['Improve data quality', 'Enable analytics', 'Reduce processing time'],
      marketPrice: '$5,500-12,000/month',
      category: 'Data Engineering',
      technologies: ['Apache Airflow', 'Apache Spark', 'Kafka', 'Snowflake', 'dbt']
    },
    {
      title: 'Blockchain & Web3 Development',
      description: 'Blockchain application development, smart contracts, and Web3 integration services.',
      icon: '⛓️',
      price: 'Starting at $6,000/month',
      features: ['Smart contract development', 'DApp development', 'Blockchain integration', 'Token development', 'DeFi protocols'],
      benefits: ['Enable decentralization', 'Improve transparency', 'Reduce intermediaries'],
      marketPrice: '$10,000-25,000/month',
      category: 'Blockchain',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'Polygon']
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things solutions, edge computing infrastructure, and sensor data processing.',
      icon: '📡',
      price: 'Starting at $4,000/month',
      features: ['IoT device integration', 'Edge computing setup', 'Data processing', 'Real-time analytics', 'Device management'],
      benefits: ['Enable automation', 'Improve efficiency', 'Reduce latency'],
      marketPrice: '$7,000-18,000/month',
      category: 'IoT',
      technologies: ['AWS IoT', 'Azure IoT', 'MQTT', 'Kubernetes', 'TensorFlow Lite']
    },
    {
      title: 'Quantum Computing Services',
      description: 'Quantum algorithm development, quantum simulation, and quantum computing integration.',
      icon: '⚛️',
      price: 'Starting at $15,000/month',
      features: ['Quantum algorithm design', 'Quantum simulation', 'Hardware integration', 'Optimization problems', 'Research support'],
      benefits: ['Solve complex problems', 'Enable breakthroughs', 'Future-proof technology'],
      marketPrice: '$25,000-75,000/month',
      category: 'Quantum Computing',
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'IBM Quantum', 'Google Quantum']
    },
    {
      title: 'High-Performance Computing',
      description: 'HPC cluster setup, parallel processing optimization, and scientific computing solutions.',
      icon: '💻',
      price: 'Starting at $8,000/month',
      features: ['HPC cluster design', 'Parallel processing', 'GPU computing', 'Scientific computing', 'Performance optimization'],
      benefits: ['Accelerate computations', 'Handle large datasets', 'Enable research'],
      marketPrice: '$15,000-40,000/month',
      category: 'HPC',
      technologies: ['CUDA', 'OpenMP', 'MPI', 'Slurm', 'Docker']
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation planning, technology assessment, and change management.',
      icon: '🚀',
      price: 'Starting at $300/hour',
      features: ['Digital strategy', 'Technology assessment', 'Change management', 'Process optimization', 'ROI analysis'],
      benefits: ['Modernize operations', 'Improve competitiveness', 'Increase efficiency'],
      marketPrice: '$500-1,000/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Change Management', 'Process Optimization', 'ROI Analysis']
    },
    {
      title: 'Compliance & Governance',
      description: 'IT compliance management, governance frameworks, and regulatory adherence services.',
      icon: '📜',
      price: 'Starting at $2,800/month',
      features: ['Compliance assessment', 'Policy development', 'Audit support', 'Risk management', 'Training'],
      benefits: ['Ensure compliance', 'Reduce risks', 'Avoid penalties'],
      marketPrice: '$4,500-12,000/month',
      category: 'Compliance',
      technologies: ['GRC Tools', 'Risk Management', 'Audit Software', 'Policy Management']
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management, procurement, and optimization services.',
      icon: '📦',
      price: 'Starting at $1,500/month',
      features: ['Asset tracking', 'Procurement management', 'License management', 'Depreciation tracking', 'Optimization'],
      benefits: ['Reduce costs', 'Improve utilization', 'Ensure compliance'],
      marketPrice: '$2,500-6,000/month',
      category: 'Asset Management',
      technologies: ['ServiceNow', 'Lansweeper', 'Asset Panda', 'Flexera', 'Microsoft Intune']
    },
    // Additional Real IT Services
    {
      title: 'AI-Powered IT Support',
      description: 'Intelligent IT support with automated ticket resolution and predictive maintenance.',
      icon: '🤖',
      price: 'Starting at $2,200/month',
      features: ['Automated ticket resolution', 'Predictive maintenance', 'Knowledge base management', 'User self-service', 'Analytics dashboard'],
      benefits: ['Reduce support tickets by 60%', 'Improve resolution time', 'Enhance user satisfaction'],
      marketPrice: '$3,500-7,000/month',
      category: 'AI Support',
      technologies: ['Machine Learning', 'NLP', 'React', 'Node.js', 'Custom AI Models']
    },
    {
      title: 'Smart Network Monitoring',
      description: 'AI-powered network monitoring with predictive analytics and automated troubleshooting.',
      icon: '📡',
      price: 'Starting at $2,800/month',
      features: ['Real-time monitoring', 'Predictive analytics', 'Automated troubleshooting', 'Performance optimization', 'Alert management'],
      benefits: ['Prevent network outages', 'Optimize performance', 'Reduce downtime'],
      marketPrice: '$4,500-9,000/month',
      category: 'Network AI',
      technologies: ['SNMP', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Intelligent Data Backup',
      description: 'AI-driven backup solutions with intelligent scheduling and disaster recovery.',
      icon: '💾',
      price: 'Starting at $1,800/month',
      features: ['Intelligent scheduling', 'Data deduplication', 'Disaster recovery', 'Compliance monitoring', 'Cost optimization'],
      benefits: ['Reduce backup costs by 40%', 'Improve recovery time', 'Ensure data protection'],
      marketPrice: '$3,000-6,000/month',
      category: 'Data Management',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Machine Learning', 'Custom AI Models']
    },
    {
      title: 'Smart Email Security',
      description: 'Advanced email security with AI-powered threat detection and spam filtering.',
      icon: '🛡️',
      price: 'Starting at $2,500/month',
      features: ['AI threat detection', 'Spam filtering', 'Phishing protection', 'Email encryption', 'Compliance monitoring'],
      benefits: ['Block 99.9% of threats', 'Reduce security incidents', 'Ensure compliance'],
      marketPrice: '$4,000-8,000/month',
      category: 'Email Security',
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'SMTP', 'Custom AI Models']
    },
    {
      title: 'Intelligent Password Management',
      description: 'AI-powered password management with security recommendations and breach monitoring.',
      icon: '🔐',
      price: 'Starting at $1,200/month',
      features: ['Password generation', 'Security scoring', 'Breach monitoring', 'Multi-device sync', 'Team sharing'],
      benefits: ['Enhance security', 'Reduce password reuse', 'Prevent breaches'],
      marketPrice: '$2,000-4,000/month',
      category: 'Security',
      technologies: ['Encryption', 'Machine Learning', 'React', 'Node.js', 'Security APIs']
    },
    {
      title: 'Smart Software Licensing',
      description: 'AI-powered software license management with optimization and compliance monitoring.',
      icon: '📄',
      price: 'Starting at $1,800/month',
      features: ['License optimization', 'Compliance monitoring', 'Cost analysis', 'Renewal management', 'Usage tracking'],
      benefits: ['Reduce licensing costs by 30%', 'Ensure compliance', 'Optimize usage'],
      marketPrice: '$3,000-6,000/month',
      category: 'License Management',
      technologies: ['Flexera', 'Snow Software', 'Machine Learning', 'React', 'Custom AI Models']
    },
    {
      title: 'Intelligent Help Desk',
      description: 'AI-powered help desk with automated ticket routing and resolution suggestions.',
      icon: '🎧',
      price: 'Starting at $2,000/month',
      features: ['Automated routing', 'Resolution suggestions', 'Knowledge base', 'User self-service', 'Analytics'],
      benefits: ['Improve response time', 'Reduce resolution time', 'Enhance user experience'],
      marketPrice: '$3,500-7,000/month',
      category: 'Help Desk',
      technologies: ['ServiceNow', 'Machine Learning', 'NLP', 'React', 'Custom AI Models']
    },
    {
      title: 'Smart Infrastructure Monitoring',
      description: 'AI-powered infrastructure monitoring with predictive analytics and automated remediation.',
      icon: '📊',
      price: 'Starting at $3,200/month',
      features: ['Predictive analytics', 'Automated remediation', 'Performance optimization', 'Capacity planning', 'Alert management'],
      benefits: ['Prevent outages', 'Optimize performance', 'Reduce costs'],
      marketPrice: '$5,500-12,000/month',
      category: 'Infrastructure AI',
      technologies: ['Prometheus', 'Grafana', 'Machine Learning', 'Python', 'Custom AI Models']
    },
    {
      title: 'Intelligent Patch Management',
      description: 'AI-driven patch management with automated testing and deployment.',
      icon: '🔧',
      price: 'Starting at $2,200/month',
      features: ['Automated testing', 'Risk assessment', 'Deployment scheduling', 'Rollback capabilities', 'Compliance tracking'],
      benefits: ['Reduce patch time by 70%', 'Minimize security risks', 'Ensure compliance'],
      marketPrice: '$3,500-7,000/month',
      category: 'Patch Management',
      technologies: ['WSUS', 'SCCM', 'Machine Learning', 'Python', 'Custom AI Models']
    },
    {
      title: 'Smart User Provisioning',
      description: 'AI-powered user provisioning with automated access management and compliance.',
      icon: '👥',
      price: 'Starting at $2,500/month',
      features: ['Automated provisioning', 'Access management', 'Compliance monitoring', 'Role optimization', 'Audit trails'],
      benefits: ['Reduce provisioning time', 'Improve security', 'Ensure compliance'],
      marketPrice: '$4,000-8,000/month',
      category: 'User Management',
      technologies: ['Active Directory', 'Okta', 'Machine Learning', 'React', 'Custom AI Models']
    },
    {
      title: 'Intelligent Capacity Planning',
      description: 'AI-powered capacity planning with predictive analytics and cost optimization.',
      icon: '📈',
      price: 'Starting at $2,800/month',
      features: ['Predictive analytics', 'Cost optimization', 'Resource planning', 'Performance forecasting', 'Recommendations'],
      benefits: ['Optimize resource usage', 'Reduce costs by 25%', 'Improve planning accuracy'],
      marketPrice: '$4,500-9,000/month',
      category: 'Capacity Planning',
      technologies: ['Machine Learning', 'Python', 'React', 'PostgreSQL', 'Custom AI Models']
    },
    {
      title: 'Smart Incident Response',
      description: 'AI-powered incident response with automated detection and resolution.',
      icon: '🚨',
      price: 'Starting at $3,500/month',
      features: ['Automated detection', 'Incident classification', 'Resolution suggestions', 'Escalation management', 'Post-incident analysis'],
      benefits: ['Reduce MTTR by 60%', 'Improve incident handling', 'Minimize business impact'],
      marketPrice: '$6,000-12,000/month',
      category: 'Incident Response',
      technologies: ['SIEM', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Intelligent Change Management',
      description: 'AI-driven change management with risk assessment and automated approval workflows.',
      icon: '🔄',
      price: 'Starting at $2,200/month',
      features: ['Risk assessment', 'Automated workflows', 'Impact analysis', 'Approval management', 'Rollback planning'],
      benefits: ['Reduce change failures', 'Improve approval process', 'Minimize risks'],
      marketPrice: '$3,500-7,000/month',
      category: 'Change Management',
      technologies: ['ServiceNow', 'Machine Learning', 'React', 'Node.js', 'Custom AI Models']
    },
    {
      title: 'Smart Performance Optimization',
      description: 'AI-powered performance optimization with automated tuning and recommendations.',
      icon: '⚡',
      price: 'Starting at $2,800/month',
      features: ['Automated tuning', 'Performance monitoring', 'Optimization recommendations', 'Bottleneck detection', 'Capacity planning'],
      benefits: ['Improve performance by 40%', 'Reduce bottlenecks', 'Optimize resources'],
      marketPrice: '$4,500-9,000/month',
      category: 'Performance Optimization',
      technologies: ['APM Tools', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Intelligent Compliance Monitoring',
      description: 'AI-powered compliance monitoring with automated reporting and risk assessment.',
      icon: '📋',
      price: 'Starting at $3,200/month',
      features: ['Automated monitoring', 'Risk assessment', 'Compliance reporting', 'Audit preparation', 'Policy management'],
      benefits: ['Ensure compliance', 'Reduce audit costs', 'Minimize risks'],
      marketPrice: '$5,500-12,000/month',
      category: 'Compliance',
      technologies: ['GRC Tools', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Smart Cost Optimization',
      description: 'AI-powered cost optimization with automated recommendations and budget management.',
      icon: '💰',
      price: 'Starting at $2,500/month',
      features: ['Cost analysis', 'Optimization recommendations', 'Budget forecasting', 'Waste detection', 'ROI tracking'],
      benefits: ['Reduce costs by 30%', 'Optimize spending', 'Improve ROI'],
      marketPrice: '$4,000-8,000/month',
      category: 'Cost Optimization',
      technologies: ['Cloud Cost Tools', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Intelligent Security Analytics',
      description: 'AI-powered security analytics with threat detection and behavioral analysis.',
      icon: '🔍',
      price: 'Starting at $4,000/month',
      features: ['Threat detection', 'Behavioral analysis', 'Anomaly detection', 'Risk scoring', 'Incident correlation'],
      benefits: ['Detect threats early', 'Improve security posture', 'Reduce false positives'],
      marketPrice: '$6,500-15,000/month',
      category: 'Security Analytics',
      technologies: ['SIEM', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Smart Workflow Automation',
      description: 'AI-powered workflow automation with intelligent process optimization.',
      icon: '⚙️',
      price: 'Starting at $2,800/month',
      features: ['Process automation', 'Workflow optimization', 'Exception handling', 'Integration management', 'Performance monitoring'],
      benefits: ['Reduce process time by 70%', 'Eliminate errors', 'Improve efficiency'],
      marketPrice: '$4,500-9,000/month',
      category: 'Workflow Automation',
      technologies: ['RPA Tools', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Intelligent Knowledge Management',
      description: 'AI-powered knowledge management with automated content curation and search.',
      icon: '📚',
      price: 'Starting at $2,200/month',
      features: ['Content curation', 'Intelligent search', 'Knowledge extraction', 'Recommendation engine', 'Analytics'],
      benefits: ['Improve knowledge sharing', 'Reduce search time', 'Enhance collaboration'],
      marketPrice: '$3,500-7,000/month',
      category: 'Knowledge Management',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'Custom AI Models']
    },
    {
      title: 'Smart Vendor Management',
      description: 'AI-powered vendor management with performance monitoring and risk assessment.',
      icon: '🏢',
      price: 'Starting at $2,500/month',
      features: ['Performance monitoring', 'Risk assessment', 'Contract management', 'Cost analysis', 'Relationship tracking'],
      benefits: ['Optimize vendor relationships', 'Reduce risks', 'Improve performance'],
      marketPrice: '$4,000-8,000/month',
      category: 'Vendor Management',
      technologies: ['Machine Learning', 'Python', 'React', 'PostgreSQL', 'Custom AI Models']
    },
    {
      title: 'Intelligent Service Level Management',
      description: 'AI-powered SLA monitoring with predictive analytics and automated reporting.',
      icon: '📊',
      price: 'Starting at $2,800/month',
      features: ['SLA monitoring', 'Predictive analytics', 'Automated reporting', 'Performance tracking', 'Improvement recommendations'],
      benefits: ['Improve SLA compliance', 'Predict issues', 'Optimize performance'],
      marketPrice: '$4,500-9,000/month',
      category: 'SLA Management',
      technologies: ['Monitoring Tools', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Smart Disaster Recovery',
      description: 'AI-powered disaster recovery with automated testing and optimization.',
      icon: '🔄',
      price: 'Starting at $3,500/month',
      features: ['Automated testing', 'Recovery optimization', 'Risk assessment', 'Compliance monitoring', 'Cost optimization'],
      benefits: ['Improve recovery time', 'Reduce costs', 'Ensure compliance'],
      marketPrice: '$6,000-12,000/month',
      category: 'Disaster Recovery',
      technologies: ['DR Tools', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Intelligent Endpoint Security',
      description: 'AI-powered endpoint security with behavioral analysis and threat prevention.',
      icon: '💻',
      price: 'Starting at $2,200/month',
      features: ['Behavioral analysis', 'Threat prevention', 'Device management', 'Compliance monitoring', 'Incident response'],
      benefits: ['Prevent threats', 'Improve security', 'Ensure compliance'],
      marketPrice: '$3,500-7,000/month',
      category: 'Endpoint Security',
      technologies: ['EDR', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Smart Data Governance',
      description: 'AI-powered data governance with automated classification and compliance monitoring.',
      icon: '📊',
      price: 'Starting at $3,200/month',
      features: ['Data classification', 'Compliance monitoring', 'Data lineage', 'Quality management', 'Privacy protection'],
      benefits: ['Ensure data quality', 'Maintain compliance', 'Protect privacy'],
      marketPrice: '$5,500-12,000/month',
      category: 'Data Governance',
      technologies: ['Data Tools', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Intelligent Application Performance',
      description: 'AI-powered application performance monitoring with automated optimization.',
      icon: '🚀',
      price: 'Starting at $2,800/month',
      features: ['Performance monitoring', 'Automated optimization', 'Bottleneck detection', 'Capacity planning', 'User experience tracking'],
      benefits: ['Improve performance', 'Reduce bottlenecks', 'Enhance user experience'],
      marketPrice: '$4,500-9,000/month',
      category: 'Application Performance',
      technologies: ['APM Tools', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Smart Cloud Cost Management',
      description: 'AI-powered cloud cost management with automated optimization and budgeting.',
      icon: '☁️',
      price: 'Starting at $2,500/month',
      features: ['Cost optimization', 'Budget management', 'Resource right-sizing', 'Waste detection', 'Forecasting'],
      benefits: ['Reduce cloud costs by 35%', 'Optimize spending', 'Improve budgeting'],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Cost Management',
      technologies: ['Cloud Cost Tools', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Intelligent Network Security',
      description: 'AI-powered network security with automated threat detection and response.',
      icon: '🛡️',
      price: 'Starting at $3,500/month',
      features: ['Threat detection', 'Automated response', 'Network monitoring', 'Intrusion prevention', 'Compliance monitoring'],
      benefits: ['Prevent network attacks', 'Improve security', 'Ensure compliance'],
      marketPrice: '$6,000-12,000/month',
      category: 'Network Security',
      technologies: ['NGFW', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Smart IT Service Management',
      description: 'AI-powered ITSM with automated workflows and intelligent routing.',
      icon: '🎯',
      price: 'Starting at $3,200/month',
      features: ['Automated workflows', 'Intelligent routing', 'Service optimization', 'Performance monitoring', 'User experience tracking'],
      benefits: ['Improve service delivery', 'Reduce costs', 'Enhance user experience'],
      marketPrice: '$5,500-12,000/month',
      category: 'ITSM',
      technologies: ['ServiceNow', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Intelligent Mobile Device Management',
      description: 'AI-powered MDM with automated policy enforcement and security monitoring.',
      icon: '📱',
      price: 'Starting at $2,200/month',
      features: ['Policy automation', 'Security monitoring', 'Device compliance', 'App management', 'Threat detection'],
      benefits: ['Improve mobile security', 'Ensure compliance', 'Reduce management overhead'],
      marketPrice: '$3,500-7,000/month',
      category: 'Mobile Management',
      technologies: ['MDM Tools', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Smart IT Asset Discovery',
      description: 'AI-powered asset discovery with automated inventory and compliance tracking.',
      icon: '🔍',
      price: 'Starting at $1,800/month',
      features: ['Automated discovery', 'Inventory management', 'Compliance tracking', 'Cost analysis', 'Lifecycle management'],
      benefits: ['Improve asset visibility', 'Ensure compliance', 'Optimize costs'],
      marketPrice: '$3,000-6,000/month',
      category: 'Asset Discovery',
      technologies: ['Discovery Tools', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    },
    {
      title: 'Intelligent IT Operations',
      description: 'AI-powered IT operations with automated monitoring and intelligent alerting.',
      icon: '⚙️',
      price: 'Starting at $4,000/month',
      features: ['Automated monitoring', 'Intelligent alerting', 'Incident prevention', 'Performance optimization', 'Capacity planning'],
      benefits: ['Prevent outages', 'Improve performance', 'Reduce operational costs'],
      marketPrice: '$6,500-15,000/month',
      category: 'IT Operations',
      technologies: ['AIOps Tools', 'Machine Learning', 'Python', 'React', 'Custom AI Models']
    }
  ];

  const _categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud, security, DevOps, and infrastructure solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, infrastructure, technology consulting" />
      </Helmet>

      <div className="min-h-screen futuristic-bg cyber-grid">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 matrix-rain"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text glitch" data-text="Professional IT Services">
                Professional IT Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto holographic">
                Comprehensive technology solutions to power your business growth and digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="neon-button">
                  Get Free Assessment
                </button>
                <button className="neon-button neon-text-purple">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 matrix-rain"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 holographic">
                Expert solutions delivered by certified professionals with proven track records
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center futuristic-card p-6">
                <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 neon-text">Certified Experts</h3>
                <p className="text-gray-300">AWS, Microsoft, Cisco, and other industry certifications</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 neon-text-pink">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with compliance and monitoring</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 neon-text-purple">Cloud-First Approach</h3>
                <p className="text-gray-300">Modern, scalable solutions built for the cloud</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-orange-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 neon-text">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock monitoring and support services</p>
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
                    <div key={index} className="futuristic-card p-6 floating-element">
                      <div className="text-4xl mb-4 floating-element">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-3 neon-text">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold neon-text-pink">{service.price}</span>
                          <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-400 font-semibold">
                          Save up to 40% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded border border-blue-600">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                              <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full neon-button">
                        Get Quote
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 matrix-rain"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text glitch" data-text="Ready to Transform Your IT Infrastructure?">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-blue-100 holographic">
              Contact our certified IT experts for a free consultation and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="neon-button"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="neon-button neon-text-purple"
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