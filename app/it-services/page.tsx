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
    // Advanced IT Services
    {
      title: 'Enterprise Architecture Design',
      description: 'Comprehensive enterprise architecture planning, design, and implementation for large-scale organizations.',
      icon: '🏗️',
      price: 'Starting at $8,000/month',
      features: ['Architecture planning', 'System design', 'Technology roadmap', 'Integration strategy', 'Governance framework'],
      benefits: ['Align IT with business goals', 'Improve system efficiency', 'Reduce technical debt'],
      marketPrice: '$15,000-40,000/month',
      category: 'Enterprise Architecture',
      technologies: ['TOGAF', 'Zachman Framework', 'Enterprise Architecture Tools', 'Cloud Architecture', 'Microservices']
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'End-to-end digital transformation strategy, implementation, and change management services.',
      icon: '🔄',
      price: 'Starting at $10,000/month',
      features: ['Digital strategy', 'Process optimization', 'Technology modernization', 'Change management', 'ROI measurement'],
      benefits: ['Accelerate digital adoption', 'Improve operational efficiency', 'Enhance customer experience'],
      marketPrice: '$20,000-60,000/month',
      category: 'Digital Transformation',
      technologies: ['Cloud Platforms', 'AI/ML', 'Automation Tools', 'Data Analytics', 'Modern Applications']
    },
    {
      title: 'Cloud Migration & Modernization',
      description: 'Complete cloud migration services with application modernization and optimization.',
      icon: '☁️',
      price: 'Starting at $5,000/month',
      features: ['Cloud assessment', 'Migration planning', 'Application modernization', 'Cost optimization', 'Security implementation'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security'],
      marketPrice: '$10,000-30,000/month',
      category: 'Cloud Migration',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker']
    },
    {
      title: 'Microservices Architecture',
      description: 'Design and implementation of microservices architecture for scalable, maintainable applications.',
      icon: '🔧',
      price: 'Starting at $6,000/month',
      features: ['Service design', 'API development', 'Container orchestration', 'Service mesh', 'Monitoring setup'],
      benefits: ['Improve scalability', 'Enable rapid development', 'Reduce deployment complexity'],
      marketPrice: '$12,000-35,000/month',
      category: 'Microservices',
      technologies: ['Kubernetes', 'Docker', 'Istio', 'Consul', 'Prometheus']
    },
    {
      title: 'API Gateway & Management',
      description: 'Comprehensive API management with gateway implementation, security, and monitoring.',
      icon: '🌐',
      price: 'Starting at $3,500/month',
      features: ['API gateway setup', 'Security implementation', 'Rate limiting', 'Analytics dashboard', 'Developer portal'],
      benefits: ['Centralize API management', 'Improve security', 'Enable API monetization'],
      marketPrice: '$7,000-20,000/month',
      category: 'API Management',
      technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Apigee', 'MuleSoft']
    },
    {
      title: 'Data Lake & Warehouse Solutions',
      description: 'Enterprise data lake and warehouse design, implementation, and optimization services.',
      icon: '🏞️',
      price: 'Starting at $7,000/month',
      features: ['Data architecture design', 'ETL pipeline development', 'Data governance', 'Analytics platform', 'Performance optimization'],
      benefits: ['Unify data sources', 'Enable advanced analytics', 'Improve data quality'],
      marketPrice: '$14,000-40,000/month',
      category: 'Data Management',
      technologies: ['Snowflake', 'Databricks', 'AWS Redshift', 'Azure Synapse', 'Apache Spark']
    },
    {
      title: 'Real-time Data Processing',
      description: 'Streaming data processing solutions with real-time analytics and event-driven architecture.',
      icon: '⚡',
      price: 'Starting at $5,500/month',
      features: ['Stream processing', 'Real-time analytics', 'Event streaming', 'Data pipeline', 'Monitoring setup'],
      benefits: ['Enable real-time insights', 'Improve decision making', 'Reduce latency'],
      marketPrice: '$11,000-30,000/month',
      category: 'Stream Processing',
      technologies: ['Apache Kafka', 'Apache Flink', 'Apache Storm', 'AWS Kinesis', 'Azure Stream Analytics']
    },
    {
      title: 'Machine Learning Operations (MLOps)',
      description: 'Complete MLOps implementation with model deployment, monitoring, and lifecycle management.',
      icon: '🤖',
      price: 'Starting at $6,500/month',
      features: ['Model deployment', 'Pipeline automation', 'Model monitoring', 'A/B testing', 'Version control'],
      benefits: ['Accelerate ML deployment', 'Improve model reliability', 'Enable continuous learning'],
      marketPrice: '$13,000-35,000/month',
      category: 'MLOps',
      technologies: ['Kubeflow', 'MLflow', 'TensorFlow Serving', 'Seldon', 'Weights & Biases']
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Edge computing infrastructure design and implementation for IoT and real-time applications.',
      icon: '📡',
      price: 'Starting at $4,500/month',
      features: ['Edge infrastructure', 'IoT integration', 'Data processing', 'Security implementation', 'Monitoring setup'],
      benefits: ['Reduce latency', 'Improve reliability', 'Enable offline operation'],
      marketPrice: '$9,000-25,000/month',
      category: 'Edge Computing',
      technologies: ['Kubernetes', 'Docker', 'EdgeX Foundry', 'AWS IoT Greengrass', 'Azure IoT Edge']
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain technology implementation, smart contract development, and Web3 integration.',
      icon: '⛓️',
      price: 'Starting at $8,000/month',
      features: ['Blockchain development', 'Smart contracts', 'DeFi solutions', 'NFT platforms', 'Web3 integration'],
      benefits: ['Enable decentralized applications', 'Improve transparency', 'Reduce intermediaries'],
      marketPrice: '$16,000-50,000/month',
      category: 'Blockchain',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'MetaMask']
    },
    {
      title: 'Quantum Computing Integration',
      description: 'Quantum computing solutions and hybrid classical-quantum system integration.',
      icon: '⚛️',
      price: 'Starting at $15,000/month',
      features: ['Quantum algorithm development', 'Hybrid systems', 'Quantum simulation', 'Optimization problems', 'Research collaboration'],
      benefits: ['Solve complex problems', 'Accelerate research', 'Enable breakthrough innovations'],
      marketPrice: '$30,000-100,000/month',
      category: 'Quantum Computing',
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'IBM Quantum', 'Google Quantum AI']
    },
    {
      title: 'Augmented Reality (AR) Solutions',
      description: 'AR application development and integration for enterprise and consumer applications.',
      icon: '🥽',
      price: 'Starting at $7,000/month',
      features: ['AR app development', '3D modeling', 'Object recognition', 'User interface design', 'Performance optimization'],
      benefits: ['Enhance user experience', 'Enable immersive interactions', 'Improve training effectiveness'],
      marketPrice: '$14,000-40,000/month',
      category: 'Augmented Reality',
      technologies: ['Unity', 'Unreal Engine', 'ARCore', 'ARKit', 'Vuforia']
    },
    {
      title: 'Virtual Reality (VR) Solutions',
      description: 'VR application development and immersive experience creation for various industries.',
      icon: '🥽',
      price: 'Starting at $8,000/month',
      features: ['VR app development', '3D environment design', 'Haptic feedback', 'Multi-user support', 'Performance optimization'],
      benefits: ['Create immersive experiences', 'Enable virtual collaboration', 'Improve training outcomes'],
      marketPrice: '$16,000-50,000/month',
      category: 'Virtual Reality',
      technologies: ['Unity', 'Unreal Engine', 'Oculus SDK', 'OpenVR', 'WebXR']
    },
    {
      title: 'Internet of Things (IoT) Platform',
      description: 'Comprehensive IoT platform development with device management, data processing, and analytics.',
      icon: '🌐',
      price: 'Starting at $5,000/month',
      features: ['Device management', 'Data collection', 'Real-time processing', 'Analytics dashboard', 'Security implementation'],
      benefits: ['Connect and manage devices', 'Enable data-driven insights', 'Improve operational efficiency'],
      marketPrice: '$10,000-30,000/month',
      category: 'IoT',
      technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT', 'CoAP']
    },
    {
      title: '5G Network Implementation',
      description: '5G network design, implementation, and optimization for enterprise and carrier networks.',
      icon: '📶',
      price: 'Starting at $12,000/month',
      features: ['Network design', 'Infrastructure deployment', 'Performance optimization', 'Security implementation', 'Monitoring setup'],
      benefits: ['Enable ultra-fast connectivity', 'Support massive IoT', 'Enable new applications'],
      marketPrice: '$25,000-75,000/month',
      category: '5G Networks',
      technologies: ['5G Core', 'OpenRAN', 'Network Slicing', 'Edge Computing', 'NFV']
    },
    {
      title: 'Cybersecurity Operations Center (SOC)',
      description: '24/7 security monitoring, threat detection, and incident response services.',
      icon: '🛡️',
      price: 'Starting at $15,000/month',
      features: ['24/7 monitoring', 'Threat hunting', 'Incident response', 'Vulnerability management', 'Security reporting'],
      benefits: ['Prevent security breaches', 'Reduce response time', 'Ensure compliance'],
      marketPrice: '$30,000-100,000/month',
      category: 'Cybersecurity',
      technologies: ['SIEM', 'EDR', 'SOAR', 'Threat Intelligence', 'Security Analytics']
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Implementation of zero trust security model with identity verification and access control.',
      icon: '🔐',
      price: 'Starting at $8,000/month',
      features: ['Identity management', 'Access control', 'Network segmentation', 'Device trust', 'Continuous monitoring'],
      benefits: ['Improve security posture', 'Reduce attack surface', 'Enable secure remote work'],
      marketPrice: '$16,000-50,000/month',
      category: 'Zero Trust',
      technologies: ['Okta', 'Azure AD', 'Ping Identity', 'Cisco Zero Trust', 'Zscaler']
    },
    {
      title: 'Compliance & Governance',
      description: 'Regulatory compliance implementation and governance framework development.',
      icon: '📋',
      price: 'Starting at $6,000/month',
      features: ['Compliance assessment', 'Policy development', 'Audit preparation', 'Risk management', 'Training programs'],
      benefits: ['Ensure regulatory compliance', 'Reduce audit risks', 'Improve governance'],
      marketPrice: '$12,000-35,000/month',
      category: 'Compliance',
      technologies: ['GRC Platforms', 'Compliance Tools', 'Risk Management', 'Audit Software', 'Policy Management']
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Comprehensive ITSM implementation with service desk, change management, and asset management.',
      icon: '🎯',
      price: 'Starting at $4,000/month',
      features: ['Service desk setup', 'Change management', 'Asset management', 'Incident management', 'Knowledge base'],
      benefits: ['Improve service delivery', 'Reduce downtime', 'Enhance user satisfaction'],
      marketPrice: '$8,000-25,000/month',
      category: 'ITSM',
      technologies: ['ServiceNow', 'Jira Service Management', 'BMC Remedy', 'Cherwell', 'Freshservice']
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with tracking, optimization, and cost control.',
      icon: '💻',
      price: 'Starting at $2,500/month',
      features: ['Asset discovery', 'Lifecycle tracking', 'Cost optimization', 'License management', 'Disposal planning'],
      benefits: ['Optimize asset utilization', 'Reduce costs', 'Ensure compliance'],
      marketPrice: '$5,000-15,000/month',
      category: 'Asset Management',
      technologies: ['Lansweeper', 'ManageEngine', 'SCCM', 'Tanium', 'Flexera']
    },
    {
      title: 'IT Cost Optimization',
      description: 'IT cost analysis and optimization services to reduce expenses and improve ROI.',
      icon: '💰',
      price: 'Starting at $3,500/month',
      features: ['Cost analysis', 'Budget optimization', 'Vendor management', 'License optimization', 'Cloud cost control'],
      benefits: ['Reduce IT costs by 30%', 'Improve budget allocation', 'Optimize vendor relationships'],
      marketPrice: '$7,000-20,000/month',
      category: 'Cost Optimization',
      technologies: ['Cost Management Tools', 'Cloud Cost Analytics', 'License Management', 'Vendor Management', 'ROI Analysis']
    },
    {
      title: 'IT Vendor Management',
      description: 'Comprehensive vendor management services with contract optimization and relationship management.',
      icon: '🤝',
      price: 'Starting at $2,000/month',
      features: ['Vendor assessment', 'Contract negotiation', 'Performance monitoring', 'Risk management', 'Cost optimization'],
      benefits: ['Optimize vendor relationships', 'Reduce costs', 'Improve service quality'],
      marketPrice: '$4,000-12,000/month',
      category: 'Vendor Management',
      technologies: ['Vendor Management Tools', 'Contract Management', 'Performance Analytics', 'Risk Assessment', 'Cost Analysis']
    },
    {
      title: 'IT Training & Development',
      description: 'Comprehensive IT training programs for technical and non-technical staff.',
      icon: '🎓',
      price: 'Starting at $1,500/month',
      features: ['Technical training', 'Certification programs', 'Soft skills development', 'Leadership training', 'Custom curricula'],
      benefits: ['Improve team skills', 'Increase productivity', 'Reduce support costs'],
      marketPrice: '$3,000-10,000/month',
      category: 'Training',
      technologies: ['Learning Management Systems', 'Virtual Training', 'Certification Programs', 'Skills Assessment', 'Knowledge Management']
    },
    {
      title: 'IT Project Management',
      description: 'Professional IT project management services with agile methodologies and best practices.',
      icon: '📊',
      price: 'Starting at $3,000/month',
      features: ['Project planning', 'Agile implementation', 'Risk management', 'Quality assurance', 'Stakeholder management'],
      benefits: ['Improve project success rates', 'Reduce project risks', 'Ensure timely delivery'],
      marketPrice: '$6,000-18,000/month',
      category: 'Project Management',
      technologies: ['Jira', 'Confluence', 'Microsoft Project', 'Asana', 'Monday.com']
    },
    {
      title: 'IT Change Management',
      description: 'Structured change management processes to minimize risks and ensure smooth transitions.',
      icon: '🔄',
      price: 'Starting at $2,500/month',
      features: ['Change planning', 'Risk assessment', 'Impact analysis', 'Rollback procedures', 'Communication management'],
      benefits: ['Reduce change risks', 'Minimize downtime', 'Improve change success rates'],
      marketPrice: '$5,000-15,000/month',
      category: 'Change Management',
      technologies: ['Change Management Tools', 'Risk Assessment', 'Impact Analysis', 'Communication Platforms', 'Documentation Systems']
    },
    {
      title: 'IT Capacity Planning',
      description: 'Strategic capacity planning and resource optimization for IT infrastructure and applications.',
      icon: '📈',
      price: 'Starting at $3,500/month',
      features: ['Capacity analysis', 'Resource planning', 'Performance modeling', 'Scaling strategies', 'Cost optimization'],
      benefits: ['Optimize resource utilization', 'Prevent capacity issues', 'Reduce costs'],
      marketPrice: '$7,000-20,000/month',
      category: 'Capacity Planning',
      technologies: ['Capacity Planning Tools', 'Performance Monitoring', 'Resource Analytics', 'Scaling Tools', 'Cost Analysis']
    },
    {
      title: 'IT Performance Optimization',
      description: 'Comprehensive performance optimization services for applications, databases, and infrastructure.',
      icon: '⚡',
      price: 'Starting at $4,000/month',
      features: ['Performance analysis', 'Bottleneck identification', 'Optimization implementation', 'Monitoring setup', 'Continuous improvement'],
      benefits: ['Improve system performance', 'Reduce response times', 'Enhance user experience'],
      marketPrice: '$8,000-25,000/month',
      category: 'Performance Optimization',
      technologies: ['APM Tools', 'Database Optimization', 'Caching Solutions', 'Load Balancing', 'Performance Testing']
    },
    {
      title: 'IT Monitoring & Alerting',
      description: 'Comprehensive monitoring solutions with proactive alerting and incident prevention.',
      icon: '📊',
      price: 'Starting at $2,000/month',
      features: ['Infrastructure monitoring', 'Application monitoring', 'Log analysis', 'Alert management', 'Dashboard creation'],
      benefits: ['Prevent incidents', 'Improve uptime', 'Enable proactive management'],
      marketPrice: '$4,000-12,000/month',
      category: 'Monitoring',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'New Relic', 'Datadog']
    },
    {
      title: 'IT Automation & Orchestration',
      description: 'Comprehensive automation solutions to streamline IT operations and reduce manual tasks.',
      icon: '🤖',
      price: 'Starting at $3,500/month',
      features: ['Process automation', 'Workflow orchestration', 'Script development', 'Integration automation', 'Monitoring automation'],
      benefits: ['Reduce manual work', 'Improve efficiency', 'Minimize errors'],
      marketPrice: '$7,000-20,000/month',
      category: 'Automation',
      technologies: ['Ansible', 'Terraform', 'Jenkins', 'GitLab CI', 'Puppet']
    },
    {
      title: 'IT Documentation & Knowledge Management',
      description: 'Comprehensive documentation and knowledge management solutions for IT teams.',
      icon: '📚',
      price: 'Starting at $1,500/month',
      features: ['Documentation creation', 'Knowledge base setup', 'Process documentation', 'Training materials', 'Version control'],
      benefits: ['Improve knowledge sharing', 'Reduce training time', 'Ensure consistency'],
      marketPrice: '$3,000-10,000/month',
      category: 'Documentation',
      technologies: ['Confluence', 'Notion', 'GitBook', 'SharePoint', 'Knowledge Management Tools']
    },
    {
      title: 'IT Governance & Risk Management',
      description: 'Comprehensive IT governance framework with risk management and compliance monitoring.',
      icon: '⚖️',
      price: 'Starting at $5,000/month',
      features: ['Governance framework', 'Risk assessment', 'Compliance monitoring', 'Policy development', 'Audit management'],
      benefits: ['Improve governance', 'Reduce risks', 'Ensure compliance'],
      marketPrice: '$10,000-30,000/month',
      category: 'Governance',
      technologies: ['GRC Platforms', 'Risk Management Tools', 'Compliance Software', 'Audit Tools', 'Policy Management']
    },
    {
      title: 'IT Strategy & Planning',
      description: 'Strategic IT planning and roadmap development aligned with business objectives.',
      icon: '🎯',
      price: 'Starting at $6,000/month',
      features: ['IT strategy development', 'Technology roadmap', 'Budget planning', 'Vendor strategy', 'Digital transformation planning'],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Enable digital transformation'],
      marketPrice: '$12,000-35,000/month',
      category: 'Strategy',
      technologies: ['Strategic Planning Tools', 'Roadmap Software', 'Budget Planning', 'Vendor Analysis', 'Digital Transformation']
    },
    {
      title: 'IT Innovation & Research',
      description: 'Technology innovation services with research, prototyping, and emerging technology adoption.',
      icon: '💡',
      price: 'Starting at $4,500/month',
      features: ['Technology research', 'Innovation labs', 'Prototype development', 'Pilot programs', 'Technology assessment'],
      benefits: ['Enable innovation', 'Adopt emerging technologies', 'Stay competitive'],
      marketPrice: '$9,000-25,000/month',
      category: 'Innovation',
      technologies: ['Research Tools', 'Prototyping Platforms', 'Innovation Management', 'Technology Assessment', 'Pilot Testing']
    },
    {
      title: 'IT Business Continuity',
      description: 'Comprehensive business continuity planning and implementation for IT systems and processes.',
      icon: '🔄',
      price: 'Starting at $3,000/month',
      features: ['Business impact analysis', 'Recovery planning', 'Testing procedures', 'Communication plans', 'Training programs'],
      benefits: ['Ensure business continuity', 'Minimize downtime', 'Protect critical operations'],
      marketPrice: '$6,000-18,000/month',
      category: 'Business Continuity',
      technologies: ['BCP Tools', 'Recovery Planning', 'Testing Platforms', 'Communication Systems', 'Training Management']
    },
    {
      title: 'IT Quality Assurance',
      description: 'Comprehensive IT quality assurance services with testing, validation, and continuous improvement.',
      icon: '✅',
      price: 'Starting at $2,500/month',
      features: ['Quality planning', 'Testing services', 'Process validation', 'Quality metrics', 'Continuous improvement'],
      benefits: ['Improve quality', 'Reduce defects', 'Ensure compliance'],
      marketPrice: '$5,000-15,000/month',
      category: 'Quality Assurance',
      technologies: ['Testing Tools', 'Quality Management', 'Process Validation', 'Metrics Dashboard', 'Continuous Improvement']
    },
    {
      title: 'IT Security Assessment',
      description: 'Comprehensive security assessment services with vulnerability analysis and penetration testing.',
      icon: '🔍',
      price: 'Starting at $4,000/month',
      features: ['Security assessment', 'Vulnerability scanning', 'Penetration testing', 'Risk analysis', 'Remediation planning'],
      benefits: ['Identify security gaps', 'Improve security posture', 'Ensure compliance'],
      marketPrice: '$8,000-25,000/month',
      category: 'Security Assessment',
      technologies: ['Security Tools', 'Vulnerability Scanners', 'Penetration Testing', 'Risk Assessment', 'Remediation Planning']
    },
    {
      title: 'IT Compliance Audit',
      description: 'Comprehensive compliance audit services with regulatory assessment and remediation support.',
      icon: '📋',
      price: 'Starting at $5,500/month',
      features: ['Compliance assessment', 'Audit preparation', 'Gap analysis', 'Remediation support', 'Ongoing monitoring'],
      benefits: ['Ensure compliance', 'Reduce audit risks', 'Improve governance'],
      marketPrice: '$11,000-30,000/month',
      category: 'Compliance Audit',
      technologies: ['Audit Tools', 'Compliance Software', 'Gap Analysis', 'Remediation Planning', 'Monitoring Systems']
    },
    {
      title: 'IT Technology Refresh',
      description: 'Strategic technology refresh services with hardware and software modernization planning.',
      icon: '🔄',
      price: 'Starting at $3,500/month',
      features: ['Technology assessment', 'Refresh planning', 'Migration services', 'Data migration', 'Training support'],
      benefits: ['Modernize technology', 'Improve performance', 'Reduce maintenance costs'],
      marketPrice: '$7,000-20,000/month',
      category: 'Technology Refresh',
      technologies: ['Migration Tools', 'Data Migration', 'Hardware Refresh', 'Software Modernization', 'Training Systems']
    },
    {
      title: 'IT Integration Services',
      description: 'Comprehensive integration services with API development, data integration, and system connectivity.',
      icon: '🔗',
      price: 'Starting at $4,500/month',
      features: ['API development', 'Data integration', 'System connectivity', 'Middleware implementation', 'Testing services'],
      benefits: ['Connect systems', 'Enable data flow', 'Improve efficiency'],
      marketPrice: '$9,000-25,000/month',
      category: 'Integration',
      technologies: ['API Management', 'Data Integration', 'Middleware', 'ESB', 'Integration Testing']
    },
    {
      title: 'IT Custom Development',
      description: 'Custom software development services with tailored solutions for specific business needs.',
      icon: '💻',
      price: 'Starting at $5,000/month',
      features: ['Custom development', 'Application design', 'Database design', 'Testing services', 'Deployment support'],
      benefits: ['Meet specific needs', 'Improve efficiency', 'Enable innovation'],
      marketPrice: '$10,000-30,000/month',
      category: 'Custom Development',
      technologies: ['Development Frameworks', 'Programming Languages', 'Databases', 'Testing Tools', 'Deployment Platforms']
    },
    {
      title: 'IT Maintenance & Support',
      description: 'Comprehensive maintenance and support services for IT systems and applications.',
      icon: '🛠️',
      price: 'Starting at $2,000/month',
      features: ['System maintenance', 'Application support', 'Bug fixes', 'Performance tuning', 'Security updates'],
      benefits: ['Ensure system reliability', 'Reduce downtime', 'Improve performance'],
      marketPrice: '$4,000-12,000/month',
      category: 'Maintenance',
      technologies: ['Monitoring Tools', 'Support Systems', 'Bug Tracking', 'Performance Tools', 'Security Updates']
    },
    {
      title: 'IT Consulting Services',
      description: 'Strategic IT consulting services with expert advice and technology recommendations.',
      icon: '💡',
      price: 'Starting at $200/hour',
      features: ['Technology consulting', 'Architecture review', 'Best practices', 'Technology selection', 'Implementation guidance'],
      benefits: ['Get expert advice', 'Make informed decisions', 'Avoid common pitfalls'],
      marketPrice: '$300-500/hour',
      category: 'Consulting',
      technologies: ['Consulting Tools', 'Architecture Review', 'Best Practices', 'Technology Assessment', 'Implementation Planning']
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