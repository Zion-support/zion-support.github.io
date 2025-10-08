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
    // NEW COMPREHENSIVE IT SERVICES
    {
      title: 'AI-Powered IT Operations',
      description: 'Intelligent IT operations with automated incident response, predictive maintenance, and self-healing systems.',
      icon: '🤖',
      price: 'Starting at $4,500/month',
      features: ['Automated incident response', 'Predictive maintenance', 'Self-healing systems', 'Intelligent monitoring', 'Root cause analysis'],
      benefits: ['Reduce downtime by 80%', 'Prevent issues before they occur', 'Automate routine tasks'],
      marketPrice: '$7,500-20,000/month',
      category: 'AI Operations',
      technologies: ['Machine Learning', 'AIOps', 'Custom AI Models', 'Automation Tools', 'Monitoring Platforms']
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with identity verification and micro-segmentation.',
      icon: '🔐',
      price: 'Starting at $5,500/month',
      features: ['Identity verification', 'Micro-segmentation', 'Continuous monitoring', 'Policy enforcement', 'Threat detection'],
      benefits: ['Eliminate security breaches', 'Reduce attack surface', 'Ensure compliance'],
      marketPrice: '$9,000-25,000/month',
      category: 'Security',
      technologies: ['Zero Trust Framework', 'Identity Management', 'Network Segmentation', 'Security Monitoring', 'Policy Management']
    },
    {
      title: 'Edge Computing Infrastructure',
      description: 'Distributed edge computing solutions for low-latency applications and IoT deployments.',
      icon: '🌐',
      price: 'Starting at $3,500/month',
      features: ['Edge node deployment', 'Latency optimization', 'IoT integration', 'Data processing', 'Content delivery'],
      benefits: ['Reduce latency by 90%', 'Improve user experience', 'Enable real-time applications'],
      marketPrice: '$6,000-15,000/month',
      category: 'Edge Computing',
      technologies: ['Kubernetes', 'Docker', 'Edge Computing Platforms', 'IoT Protocols', 'CDN Integration']
    },
    {
      title: 'Multi-Cloud Management Platform',
      description: 'Unified management across AWS, Azure, Google Cloud with cost optimization and governance.',
      icon: '☁️',
      price: 'Starting at $4,000/month',
      features: ['Multi-cloud orchestration', 'Cost optimization', 'Governance policies', 'Resource monitoring', 'Compliance management'],
      benefits: ['Optimize cloud costs by 40%', 'Simplify multi-cloud management', 'Ensure governance'],
      marketPrice: '$7,000-18,000/month',
      category: 'Cloud Management',
      technologies: ['Terraform', 'CloudFormation', 'Azure Resource Manager', 'Google Cloud Deployment Manager', 'Cost Management Tools']
    },
    {
      title: 'AI-Powered Data Center Management',
      description: 'Intelligent data center operations with predictive cooling, power optimization, and capacity planning.',
      icon: '🏢',
      price: 'Starting at $6,000/month',
      features: ['Predictive cooling', 'Power optimization', 'Capacity planning', 'Environmental monitoring', 'Automated maintenance'],
      benefits: ['Reduce energy costs by 30%', 'Optimize capacity utilization', 'Prevent equipment failures'],
      marketPrice: '$10,000-25,000/month',
      category: 'Data Center',
      technologies: ['AI/ML', 'IoT Sensors', 'Environmental Controls', 'Power Management', 'Predictive Analytics']
    },
    {
      title: 'Quantum-Safe Cryptography Implementation',
      description: 'Post-quantum cryptography solutions to protect against future quantum computing threats.',
      icon: '🔒',
      price: 'Starting at $8,000/month',
      features: ['Quantum-safe algorithms', 'Key management', 'Migration planning', 'Compliance assessment', 'Future-proofing'],
      benefits: ['Protect against quantum threats', 'Ensure long-term security', 'Maintain compliance'],
      marketPrice: '$15,000-40,000/month',
      category: 'Advanced Security',
      technologies: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Cryptographic Libraries', 'Security Protocols', 'Compliance Tools']
    },
    {
      title: '5G Network Infrastructure',
      description: '5G network design, implementation, and optimization for enterprise applications.',
      icon: '📡',
      price: 'Starting at $12,000/month',
      features: ['5G network design', 'Infrastructure deployment', 'Performance optimization', 'Security implementation', 'IoT integration'],
      benefits: ['Enable ultra-fast connectivity', 'Support massive IoT deployments', 'Reduce latency'],
      marketPrice: '$20,000-50,000/month',
      category: '5G Networks',
      technologies: ['5G Core', 'RAN Equipment', 'Network Slicing', 'Edge Computing', 'IoT Platforms']
    },
    {
      title: 'Blockchain Infrastructure Services',
      description: 'Enterprise blockchain solutions with smart contracts, DApps, and decentralized systems.',
      icon: '⛓️',
      price: 'Starting at $5,500/month',
      features: ['Blockchain deployment', 'Smart contract development', 'DApp creation', 'Consensus mechanisms', 'Token economics'],
      benefits: ['Enable decentralized applications', 'Improve transparency', 'Reduce intermediaries'],
      marketPrice: '$9,000-25,000/month',
      category: 'Blockchain',
      technologies: ['Ethereum', 'Hyperledger', 'Solidity', 'Web3', 'Consensus Algorithms']
    },
    {
      title: 'AI-Powered Network Security',
      description: 'Intelligent network security with behavioral analysis, threat hunting, and automated response.',
      icon: '🛡️',
      price: 'Starting at $4,200/month',
      features: ['Behavioral analysis', 'Threat hunting', 'Automated response', 'Network forensics', 'Incident investigation'],
      benefits: ['Detect advanced threats', 'Reduce response time', 'Improve security posture'],
      marketPrice: '$7,000-18,000/month',
      category: 'Network Security',
      technologies: ['AI/ML', 'Network Analysis', 'Threat Intelligence', 'SIEM', 'SOAR']
    },
    {
      title: 'Hyperconverged Infrastructure (HCI)',
      description: 'Integrated compute, storage, and networking solutions with simplified management.',
      icon: '💻',
      price: 'Starting at $3,800/month',
      features: ['HCI deployment', 'Resource optimization', 'Simplified management', 'Scalability planning', 'Performance tuning'],
      benefits: ['Simplify infrastructure', 'Reduce costs by 25%', 'Improve scalability'],
      marketPrice: '$6,500-16,000/month',
      category: 'Infrastructure',
      technologies: ['VMware vSAN', 'Nutanix', 'Microsoft Azure Stack', 'HCI Platforms', 'Management Tools']
    },
    {
      title: 'AI-Powered IT Service Management',
      description: 'Intelligent ITSM with automated ticket routing, predictive analytics, and self-service portals.',
      icon: '🎫',
      price: 'Starting at $2,800/month',
      features: ['Automated ticket routing', 'Predictive analytics', 'Self-service portals', 'Knowledge management', 'Performance metrics'],
      benefits: ['Improve service quality', 'Reduce resolution time', 'Increase user satisfaction'],
      marketPrice: '$4,500-12,000/month',
      category: 'Service Management',
      technologies: ['ITSM Platforms', 'AI/ML', 'Automation Tools', 'Knowledge Management', 'Analytics']
    },
    {
      title: 'Container Security & Compliance',
      description: 'Comprehensive container security with vulnerability scanning, runtime protection, and compliance monitoring.',
      icon: '🐳',
      price: 'Starting at $2,500/month',
      features: ['Vulnerability scanning', 'Runtime protection', 'Compliance monitoring', 'Image security', 'Policy enforcement'],
      benefits: ['Secure containerized applications', 'Ensure compliance', 'Prevent security breaches'],
      marketPrice: '$4,000-10,000/month',
      category: 'Container Security',
      technologies: ['Kubernetes', 'Docker', 'Security Scanners', 'Runtime Protection', 'Compliance Tools']
    },
    {
      title: 'AI-Powered Capacity Planning',
      description: 'Intelligent capacity planning with predictive analytics and resource optimization.',
      icon: '📊',
      price: 'Starting at $3,200/month',
      features: ['Predictive analytics', 'Resource optimization', 'Demand forecasting', 'Cost analysis', 'Scaling recommendations'],
      benefits: ['Optimize resource utilization', 'Prevent capacity issues', 'Reduce costs'],
      marketPrice: '$5,500-14,000/month',
      category: 'Capacity Management',
      technologies: ['AI/ML', 'Analytics Platforms', 'Monitoring Tools', 'Capacity Planning Tools', 'Cost Management']
    },
    {
      title: 'Digital Workspace Solutions',
      description: 'Comprehensive digital workspace with VDI, application virtualization, and unified endpoint management.',
      icon: '💼',
      price: 'Starting at $2,200/month',
      features: ['VDI deployment', 'Application virtualization', 'Endpoint management', 'Security policies', 'User experience optimization'],
      benefits: ['Enable remote work', 'Improve security', 'Simplify management'],
      marketPrice: '$3,500-9,000/month',
      category: 'Digital Workspace',
      technologies: ['Citrix', 'VMware Horizon', 'Microsoft VDI', 'UEM Solutions', 'Application Virtualization']
    },
    {
      title: 'AI-Powered Backup & Disaster Recovery',
      description: 'Intelligent backup and disaster recovery with predictive analysis and automated testing.',
      icon: '💾',
      price: 'Starting at $2,800/month',
      features: ['Predictive backup analysis', 'Automated testing', 'Recovery optimization', 'Ransomware protection', 'Compliance monitoring'],
      benefits: ['Ensure data protection', 'Minimize recovery time', 'Prevent data loss'],
      marketPrice: '$4,500-12,000/month',
      category: 'Backup & Recovery',
      technologies: ['Backup Software', 'AI/ML', 'Disaster Recovery Tools', 'Cloud Storage', 'Compliance Tools']
    },
    {
      title: 'IoT Security & Management',
      description: 'Comprehensive IoT security with device management, threat detection, and network segmentation.',
      icon: '📱',
      price: 'Starting at $3,500/month',
      features: ['Device management', 'Threat detection', 'Network segmentation', 'Firmware updates', 'Compliance monitoring'],
      benefits: ['Secure IoT deployments', 'Prevent cyber attacks', 'Ensure compliance'],
      marketPrice: '$6,000-15,000/month',
      category: 'IoT Security',
      technologies: ['IoT Platforms', 'Security Tools', 'Device Management', 'Network Security', 'Compliance Tools']
    },
    {
      title: 'AI-Powered IT Governance',
      description: 'Intelligent IT governance with policy automation, compliance monitoring, and risk assessment.',
      icon: '📋',
      price: 'Starting at $4,000/month',
      features: ['Policy automation', 'Compliance monitoring', 'Risk assessment', 'Audit management', 'Governance reporting'],
      benefits: ['Ensure compliance', 'Reduce risks', 'Improve governance'],
      marketPrice: '$7,000-18,000/month',
      category: 'IT Governance',
      technologies: ['Governance Platforms', 'AI/ML', 'Compliance Tools', 'Risk Management', 'Audit Tools']
    },
    {
      title: 'Hybrid Cloud Integration',
      description: 'Seamless integration between on-premises and cloud environments with unified management.',
      icon: '🔗',
      price: 'Starting at $4,500/month',
      features: ['Hybrid cloud architecture', 'Unified management', 'Data synchronization', 'Security policies', 'Cost optimization'],
      benefits: ['Optimize cloud strategy', 'Maintain flexibility', 'Reduce costs'],
      marketPrice: '$7,500-20,000/month',
      category: 'Cloud Integration',
      technologies: ['Cloud Platforms', 'Integration Tools', 'Data Management', 'Security Tools', 'Management Platforms']
    },
    {
      title: 'AI-Powered IT Automation',
      description: 'Comprehensive IT automation with intelligent workflows, self-healing systems, and process optimization.',
      icon: '⚙️',
      price: 'Starting at $3,800/month',
      features: ['Intelligent workflows', 'Self-healing systems', 'Process optimization', 'Automated provisioning', 'Change management'],
      benefits: ['Reduce manual tasks', 'Improve efficiency', 'Prevent human errors'],
      marketPrice: '$6,500-16,000/month',
      category: 'IT Automation',
      technologies: ['Automation Platforms', 'AI/ML', 'Workflow Tools', 'Orchestration', 'Monitoring Tools']
    },
    {
      title: 'Advanced Threat Intelligence',
      description: 'Comprehensive threat intelligence with real-time monitoring, analysis, and response coordination.',
      icon: '🔍',
      price: 'Starting at $5,000/month',
      features: ['Real-time monitoring', 'Threat analysis', 'Response coordination', 'Intelligence sharing', 'Predictive analytics'],
      benefits: ['Stay ahead of threats', 'Improve response time', 'Reduce security risks'],
      marketPrice: '$8,500-22,000/month',
      category: 'Threat Intelligence',
      technologies: ['Threat Intelligence Platforms', 'AI/ML', 'Security Tools', 'Analytics', 'Response Tools']
    },
    {
      title: 'AI-Powered IT Analytics',
      description: 'Intelligent IT analytics with predictive insights, performance optimization, and business intelligence.',
      icon: '📈',
      price: 'Starting at $3,200/month',
      features: ['Predictive insights', 'Performance optimization', 'Business intelligence', 'Cost analysis', 'Trend analysis'],
      benefits: ['Make data-driven decisions', 'Optimize performance', 'Reduce costs'],
      marketPrice: '$5,500-14,000/month',
      category: 'IT Analytics',
      technologies: ['Analytics Platforms', 'AI/ML', 'Data Visualization', 'Business Intelligence', 'Cost Management']
    },
    {
      title: 'Quantum Computing Integration',
      description: 'Quantum computing integration services for optimization problems and advanced simulations.',
      icon: '⚛️',
      price: 'Starting at $15,000/month',
      features: ['Quantum algorithm development', 'Integration planning', 'Performance optimization', 'Security implementation', 'Future-proofing'],
      benefits: ['Solve complex problems', 'Enable breakthroughs', 'Future-proof technology'],
      marketPrice: '$25,000-75,000/month',
      category: 'Quantum Computing',
      technologies: ['Quantum Computing Platforms', 'Quantum Algorithms', 'Integration Tools', 'Security Tools', 'Development Tools']
    },
    {
      title: 'AI-Powered IT Training & Development',
      description: 'Intelligent IT training programs with personalized learning paths and skill assessment.',
      icon: '🎓',
      price: 'Starting at $2,000/month',
      features: ['Personalized learning', 'Skill assessment', 'Progress tracking', 'Certification programs', 'Expert mentoring'],
      benefits: ['Improve team skills', 'Reduce training costs', 'Increase productivity'],
      marketPrice: '$3,500-9,000/month',
      category: 'Training & Development',
      technologies: ['Learning Management Systems', 'AI/ML', 'Assessment Tools', 'Video Platforms', 'Certification Programs']
    },
    {
      title: 'Smart Building IT Integration',
      description: 'Intelligent building management with IoT integration, energy optimization, and space utilization.',
      icon: '🏢',
      price: 'Starting at $4,500/month',
      features: ['IoT integration', 'Energy optimization', 'Space utilization', 'Environmental monitoring', 'Automated controls'],
      benefits: ['Reduce energy costs', 'Improve space efficiency', 'Enhance occupant experience'],
      marketPrice: '$7,500-20,000/month',
      category: 'Smart Buildings',
      technologies: ['IoT Platforms', 'Building Management Systems', 'Energy Management', 'Environmental Controls', 'Analytics']
    },
    {
      title: 'AI-Powered IT Cost Optimization',
      description: 'Intelligent cost optimization with resource analysis, waste reduction, and budget planning.',
      icon: '💰',
      price: 'Starting at $2,500/month',
      features: ['Resource analysis', 'Waste reduction', 'Budget planning', 'Cost forecasting', 'Optimization recommendations'],
      benefits: ['Reduce IT costs by 30%', 'Optimize resource usage', 'Improve budget planning'],
      marketPrice: '$4,500-12,000/month',
      category: 'Cost Optimization',
      technologies: ['Cost Management Tools', 'AI/ML', 'Analytics Platforms', 'Resource Management', 'Budget Planning Tools']
    },
    {
      title: 'Advanced Network Monitoring',
      description: 'Comprehensive network monitoring with AI-powered analysis, performance optimization, and predictive maintenance.',
      icon: '📊',
      price: 'Starting at $3,000/month',
      features: ['AI-powered analysis', 'Performance optimization', 'Predictive maintenance', 'Real-time monitoring', 'Alert management'],
      benefits: ['Prevent network issues', 'Optimize performance', 'Reduce downtime'],
      marketPrice: '$5,000-13,000/month',
      category: 'Network Monitoring',
      technologies: ['Network Monitoring Tools', 'AI/ML', 'Analytics', 'Alert Systems', 'Performance Tools']
    },
    {
      title: 'AI-Powered IT Compliance',
      description: 'Intelligent compliance management with automated monitoring, reporting, and audit preparation.',
      icon: '📜',
      price: 'Starting at $3,500/month',
      features: ['Automated monitoring', 'Compliance reporting', 'Audit preparation', 'Policy management', 'Risk assessment'],
      benefits: ['Ensure compliance', 'Reduce audit costs', 'Minimize risks'],
      marketPrice: '$6,000-15,000/month',
      category: 'Compliance',
      technologies: ['Compliance Platforms', 'AI/ML', 'Audit Tools', 'Policy Management', 'Risk Assessment Tools']
    },
    {
      title: 'Edge AI Computing Services',
      description: 'Edge AI computing solutions for real-time processing, inference, and decision making at the edge.',
      icon: '🧠',
      price: 'Starting at $5,500/month',
      features: ['Edge AI deployment', 'Real-time processing', 'Model optimization', 'Inference acceleration', 'Data processing'],
      benefits: ['Enable real-time AI', 'Reduce latency', 'Improve performance'],
      marketPrice: '$9,000-25,000/month',
      category: 'Edge AI',
      technologies: ['Edge Computing', 'AI/ML', 'Model Optimization', 'Inference Engines', 'Data Processing']
    },
    {
      title: 'AI-Powered IT Innovation Lab',
      description: 'Dedicated innovation lab for exploring emerging technologies, proof-of-concepts, and digital transformation.',
      icon: '🔬',
      price: 'Starting at $8,000/month',
      features: ['Technology exploration', 'Proof-of-concepts', 'Innovation workshops', 'Technology assessment', 'Digital transformation'],
      benefits: ['Stay ahead of technology', 'Drive innovation', 'Enable digital transformation'],
      marketPrice: '$15,000-40,000/month',
      category: 'Innovation',
      technologies: ['Emerging Technologies', 'AI/ML', 'Cloud Platforms', 'Development Tools', 'Innovation Methodologies']
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