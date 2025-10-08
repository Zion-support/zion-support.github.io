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
    // NEW INNOVATIVE IT SERVICES
    {
      title: 'AI-Powered IT Operations',
      description: 'Intelligent IT operations with AI-driven automation, predictive maintenance, and self-healing systems.',
      icon: '🤖',
      price: 'Starting at $4,500/month',
      features: ['AI automation', 'Predictive maintenance', 'Self-healing systems', 'Intelligent monitoring', 'Anomaly detection'],
      benefits: ['Reduce manual work by 80%', 'Prevent issues before they occur', 'Improve system reliability'],
      marketPrice: '$7,500-20,000/month',
      category: 'AI Operations',
      technologies: ['Machine Learning', 'Anomaly Detection', 'Automation', 'Predictive Analytics', 'Self-Healing']
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with continuous verification and least privilege access.',
      icon: '🛡️',
      price: 'Starting at $5,500/month',
      features: ['Zero trust implementation', 'Continuous verification', 'Least privilege access', 'Micro-segmentation', 'Identity verification'],
      benefits: ['Eliminate security perimeters', 'Prevent lateral movement', 'Ensure continuous security'],
      marketPrice: '$9,000-25,000/month',
      category: 'Security',
      technologies: ['Zero Trust', 'Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Access Control']
    },
    {
      title: 'Edge Computing Infrastructure',
      description: 'Distributed edge computing solutions for low-latency applications and real-time processing.',
      icon: '🌐',
      price: 'Starting at $6,000/month',
      features: ['Edge infrastructure', 'Low-latency processing', 'Distributed computing', 'Real-time analytics', 'Edge AI'],
      benefits: ['Reduce latency by 90%', 'Enable real-time processing', 'Improve user experience'],
      marketPrice: '$10,000-30,000/month',
      category: 'Edge Computing',
      technologies: ['Kubernetes', 'Docker', 'Edge AI', '5G', 'IoT Integration']
    },
    {
      title: 'Serverless Architecture Implementation',
      description: 'Serverless application development and deployment for scalable, cost-effective solutions.',
      icon: '⚡',
      price: 'Starting at $3,500/month',
      features: ['Serverless development', 'Function optimization', 'Event-driven architecture', 'Auto-scaling', 'Cost optimization'],
      benefits: ['Reduce infrastructure costs by 70%', 'Enable automatic scaling', 'Simplify deployment'],
      marketPrice: '$6,000-18,000/month',
      category: 'Serverless',
      technologies: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Serverless Framework', 'EventBridge']
    },
    {
      title: 'Multi-Cloud Strategy & Management',
      description: 'Comprehensive multi-cloud strategy, implementation, and management across AWS, Azure, and GCP.',
      icon: '☁️',
      price: 'Starting at $7,500/month',
      features: ['Multi-cloud strategy', 'Cloud migration', 'Cost optimization', 'Security management', 'Disaster recovery'],
      benefits: ['Avoid vendor lock-in', 'Optimize costs', 'Improve resilience'],
      marketPrice: '$12,000-35,000/month',
      category: 'Multi-Cloud',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes']
    },
    {
      title: 'API Gateway & Management',
      description: 'Enterprise API gateway setup, management, and security for microservices and third-party integrations.',
      icon: '🚪',
      price: 'Starting at $2,800/month',
      features: ['API gateway setup', 'Rate limiting', 'Authentication', 'Monitoring', 'Documentation'],
      benefits: ['Centralize API management', 'Improve security', 'Enable rapid development'],
      marketPrice: '$4,500-12,000/month',
      category: 'API Management',
      technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Apigee', 'KrakenD']
    },
    {
      title: 'Container Security & Compliance',
      description: 'Comprehensive container security, vulnerability scanning, and compliance management for containerized applications.',
      icon: '🔒',
      price: 'Starting at $3,200/month',
      features: ['Container scanning', 'Vulnerability management', 'Compliance checking', 'Runtime protection', 'Image security'],
      benefits: ['Secure containerized applications', 'Ensure compliance', 'Prevent security breaches'],
      marketPrice: '$5,500-15,000/month',
      category: 'Container Security',
      technologies: ['Twistlock', 'Aqua Security', 'Falco', 'Clair', 'Trivy']
    },
    {
      title: 'Data Lake & Analytics Platform',
      description: 'Enterprise data lake implementation with advanced analytics, machine learning, and real-time processing.',
      icon: '🏞️',
      price: 'Starting at $8,500/month',
      features: ['Data lake architecture', 'Real-time processing', 'Machine learning', 'Data governance', 'Analytics platform'],
      benefits: ['Enable advanced analytics', 'Improve data accessibility', 'Accelerate insights'],
      marketPrice: '$15,000-45,000/month',
      category: 'Data Platform',
      technologies: ['Apache Spark', 'Hadoop', 'Kafka', 'Elasticsearch', 'TensorFlow']
    },
    {
      title: 'Event-Driven Architecture',
      description: 'Event-driven system design and implementation for real-time data processing and microservices communication.',
      icon: '📡',
      price: 'Starting at $4,200/month',
      features: ['Event streaming', 'Message queues', 'Event sourcing', 'CQRS implementation', 'Real-time processing'],
      benefits: ['Enable real-time processing', 'Improve system scalability', 'Decouple services'],
      marketPrice: '$7,000-20,000/month',
      category: 'Event Architecture',
      technologies: ['Apache Kafka', 'RabbitMQ', 'Apache Pulsar', 'EventStore', 'Redis Streams']
    },
    {
      title: 'Infrastructure as Code (IaC)',
      description: 'Infrastructure automation and management using code for consistent, repeatable deployments.',
      icon: '🏗️',
      price: 'Starting at $2,500/month',
      features: ['Infrastructure automation', 'Version control', 'Environment management', 'Deployment automation', 'Cost optimization'],
      benefits: ['Ensure consistency', 'Reduce deployment time', 'Enable version control'],
      marketPrice: '$4,000-12,000/month',
      category: 'Infrastructure',
      technologies: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi', 'Chef']
    },
    {
      title: 'Service Mesh Implementation',
      description: 'Service mesh setup and management for microservices communication, security, and observability.',
      icon: '🕸️',
      price: 'Starting at $5,000/month',
      features: ['Service mesh setup', 'Traffic management', 'Security policies', 'Observability', 'Load balancing'],
      benefits: ['Simplify microservices management', 'Improve security', 'Enable observability'],
      marketPrice: '$8,000-25,000/month',
      category: 'Service Mesh',
      technologies: ['Istio', 'Linkerd', 'Consul Connect', 'Envoy', 'Kubernetes']
    },
    {
      title: 'GitOps & Continuous Deployment',
      description: 'GitOps implementation for automated, reliable, and auditable deployments using Git as the source of truth.',
      icon: '🔄',
      price: 'Starting at $3,800/month',
      features: ['GitOps implementation', 'Automated deployments', 'Rollback capabilities', 'Audit trails', 'Environment management'],
      benefits: ['Improve deployment reliability', 'Enable audit trails', 'Simplify rollbacks'],
      marketPrice: '$6,500-18,000/month',
      category: 'GitOps',
      technologies: ['ArgoCD', 'Flux', 'Tekton', 'Jenkins X', 'GitLab CI/CD']
    },
    {
      title: 'Chaos Engineering & Resilience Testing',
      description: 'Chaos engineering implementation to test system resilience and improve reliability through controlled failures.',
      icon: '💥',
      price: 'Starting at $4,500/month',
      features: ['Chaos experiments', 'Resilience testing', 'Failure injection', 'Recovery testing', 'Reliability improvement'],
      benefits: ['Improve system resilience', 'Identify weaknesses', 'Prevent outages'],
      marketPrice: '$7,500-22,000/month',
      category: 'Chaos Engineering',
      technologies: ['Chaos Monkey', 'Litmus', 'Gremlin', 'Chaos Toolkit', 'Custom Tools']
    },
    {
      title: 'Observability & APM Platform',
      description: 'Comprehensive observability platform with application performance monitoring, logging, and tracing.',
      icon: '👁️',
      price: 'Starting at $3,500/month',
      features: ['APM monitoring', 'Distributed tracing', 'Log aggregation', 'Metrics collection', 'Alerting'],
      benefits: ['Improve system visibility', 'Reduce MTTR', 'Prevent issues'],
      marketPrice: '$6,000-18,000/month',
      category: 'Observability',
      technologies: ['Jaeger', 'Zipkin', 'Prometheus', 'Grafana', 'ELK Stack']
    },
    {
      title: 'Database Performance Optimization',
      description: 'Advanced database performance tuning, query optimization, and scaling strategies for high-performance applications.',
      icon: '⚡',
      price: 'Starting at $2,800/month',
      features: ['Query optimization', 'Index tuning', 'Performance monitoring', 'Scaling strategies', 'Capacity planning'],
      benefits: ['Improve query performance by 80%', 'Reduce database costs', 'Enable high availability'],
      marketPrice: '$4,500-15,000/month',
      category: 'Database Optimization',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      title: 'Content Delivery Network (CDN) Optimization',
      description: 'CDN implementation and optimization for global content delivery, performance, and cost efficiency.',
      icon: '🌍',
      price: 'Starting at $1,800/month',
      features: ['CDN setup', 'Performance optimization', 'Caching strategies', 'Global distribution', 'Cost optimization'],
      benefits: ['Improve global performance', 'Reduce bandwidth costs', 'Enhance user experience'],
      marketPrice: '$3,000-10,000/month',
      category: 'CDN',
      technologies: ['CloudFront', 'CloudFlare', 'Fastly', 'Akamai', 'MaxCDN']
    },
    {
      title: 'Load Balancing & Traffic Management',
      description: 'Advanced load balancing solutions for high availability, performance, and traffic distribution.',
      icon: '⚖️',
      price: 'Starting at $2,200/month',
      features: ['Load balancer setup', 'Traffic distribution', 'Health checking', 'SSL termination', 'Auto-scaling'],
      benefits: ['Improve availability', 'Distribute traffic efficiently', 'Enable auto-scaling'],
      marketPrice: '$3,500-12,000/month',
      category: 'Load Balancing',
      technologies: ['HAProxy', 'NGINX', 'AWS ALB', 'Azure Load Balancer', 'F5']
    },
    {
      title: 'Disaster Recovery as a Service (DRaaS)',
      description: 'Comprehensive disaster recovery solutions with automated failover, testing, and business continuity.',
      icon: '🔄',
      price: 'Starting at $3,500/month',
      features: ['Automated failover', 'Recovery testing', 'RTO/RPO optimization', 'Multi-site replication', 'Business continuity'],
      benefits: ['Minimize downtime', 'Ensure business continuity', 'Reduce recovery time'],
      marketPrice: '$6,000-20,000/month',
      category: 'Disaster Recovery',
      technologies: ['VMware SRM', 'Zerto', 'Veeam', 'AWS DRS', 'Azure Site Recovery']
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Comprehensive ITSM implementation with service desk, change management, and incident response.',
      icon: '🎫',
      price: 'Starting at $2,500/month',
      features: ['Service desk setup', 'Incident management', 'Change management', 'Problem management', 'Knowledge base'],
      benefits: ['Improve service quality', 'Reduce resolution time', 'Standardize processes'],
      marketPrice: '$4,000-15,000/month',
      category: 'ITSM',
      technologies: ['ServiceNow', 'Jira Service Management', 'BMC Remedy', 'Cherwell', 'ManageEngine']
    },
    {
      title: 'Configuration Management & Automation',
      description: 'Configuration management and automation for consistent, reliable system configuration and deployment.',
      icon: '⚙️',
      price: 'Starting at $2,800/month',
      features: ['Configuration management', 'Automation workflows', 'Compliance checking', 'Change tracking', 'Rollback capabilities'],
      benefits: ['Ensure consistency', 'Reduce manual errors', 'Enable compliance'],
      marketPrice: '$4,500-15,000/month',
      category: 'Configuration Management',
      technologies: ['Ansible', 'Puppet', 'Chef', 'SaltStack', 'Terraform']
    },
    {
      title: 'Network Security & Firewall Management',
      description: 'Advanced network security solutions with firewall management, intrusion detection, and threat prevention.',
      icon: '🔥',
      price: 'Starting at $3,200/month',
      features: ['Firewall management', 'Intrusion detection', 'Threat prevention', 'Network monitoring', 'Security policies'],
      benefits: ['Protect network infrastructure', 'Prevent intrusions', 'Ensure compliance'],
      marketPrice: '$5,500-18,000/month',
      category: 'Network Security',
      technologies: ['Cisco ASA', 'Fortinet', 'Palo Alto', 'Check Point', 'pfSense']
    },
    {
      title: 'Email Security & Anti-Phishing',
      description: 'Comprehensive email security solutions with anti-phishing, spam filtering, and threat protection.',
      icon: '📧',
      price: 'Starting at $1,500/month',
      features: ['Anti-phishing protection', 'Spam filtering', 'Email encryption', 'Threat detection', 'Compliance'],
      benefits: ['Prevent email attacks', 'Reduce spam', 'Ensure email security'],
      marketPrice: '$2,500-8,000/month',
      category: 'Email Security',
      technologies: ['Proofpoint', 'Mimecast', 'Barracuda', 'Cisco Email Security', 'Microsoft Defender']
    },
    {
      title: 'Endpoint Security & EDR',
      description: 'Advanced endpoint security with EDR, threat detection, and response capabilities for all devices.',
      icon: '💻',
      price: 'Starting at $2,200/month',
      features: ['Endpoint protection', 'Threat detection', 'Incident response', 'Device management', 'Compliance'],
      benefits: ['Protect all endpoints', 'Detect advanced threats', 'Enable rapid response'],
      marketPrice: '$3,500-12,000/month',
      category: 'Endpoint Security',
      technologies: ['CrowdStrike', 'SentinelOne', 'Carbon Black', 'Microsoft Defender', 'Symantec']
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Comprehensive cloud security solutions with compliance management and threat protection.',
      icon: '☁️',
      price: 'Starting at $4,500/month',
      features: ['Cloud security posture', 'Compliance management', 'Threat protection', 'Data encryption', 'Access control'],
      benefits: ['Secure cloud environments', 'Ensure compliance', 'Protect cloud data'],
      marketPrice: '$7,500-25,000/month',
      category: 'Cloud Security',
      technologies: ['AWS Security Hub', 'Azure Security Center', 'Google Cloud Security', 'Prisma Cloud', 'Qualys']
    },
    {
      title: 'Data Loss Prevention (DLP)',
      description: 'Comprehensive data loss prevention solutions to protect sensitive data and ensure compliance.',
      icon: '🔒',
      price: 'Starting at $3,500/month',
      features: ['Data discovery', 'Policy enforcement', 'Data encryption', 'Compliance reporting', 'Incident response'],
      benefits: ['Protect sensitive data', 'Ensure compliance', 'Prevent data breaches'],
      marketPrice: '$6,000-20,000/month',
      category: 'Data Protection',
      technologies: ['Symantec DLP', 'Forcepoint', 'McAfee DLP', 'Microsoft DLP', 'Digital Guardian']
    },
    {
      title: 'Security Information & Event Management (SIEM)',
      description: 'Advanced SIEM implementation for security monitoring, threat detection, and incident response.',
      icon: '📊',
      price: 'Starting at $5,500/month',
      features: ['Security monitoring', 'Threat detection', 'Incident response', 'Log analysis', 'Compliance reporting'],
      benefits: ['Improve security visibility', 'Detect threats faster', 'Enable rapid response'],
      marketPrice: '$9,000-30,000/month',
      category: 'SIEM',
      technologies: ['Splunk', 'IBM QRadar', 'LogRhythm', 'ArcSight', 'Elastic Security']
    },
    {
      title: 'Vulnerability Management & Assessment',
      description: 'Comprehensive vulnerability management with scanning, assessment, and remediation services.',
      icon: '🔍',
      price: 'Starting at $2,800/month',
      features: ['Vulnerability scanning', 'Risk assessment', 'Remediation planning', 'Compliance checking', 'Reporting'],
      benefits: ['Identify vulnerabilities', 'Reduce security risks', 'Ensure compliance'],
      marketPrice: '$4,500-15,000/month',
      category: 'Vulnerability Management',
      technologies: ['Nessus', 'Qualys', 'Rapid7', 'OpenVAS', 'Nexpose']
    },
    {
      title: 'Penetration Testing & Red Team Services',
      description: 'Comprehensive penetration testing and red team exercises to identify and remediate security vulnerabilities.',
      icon: '🎯',
      price: 'Starting at $5,000/month',
      features: ['Penetration testing', 'Red team exercises', 'Vulnerability assessment', 'Social engineering', 'Reporting'],
      benefits: ['Identify security gaps', 'Test security controls', 'Improve security posture'],
      marketPrice: '$8,000-25,000/month',
      category: 'Penetration Testing',
      technologies: ['Metasploit', 'Burp Suite', 'Nmap', 'OWASP ZAP', 'Custom Tools']
    },
    {
      title: 'Security Awareness Training',
      description: 'Comprehensive security awareness training programs to educate employees and reduce human risk.',
      icon: '🎓',
      price: 'Starting at $1,200/month',
      features: ['Security training', 'Phishing simulations', 'Compliance training', 'Awareness campaigns', 'Reporting'],
      benefits: ['Reduce human risk', 'Improve security culture', 'Ensure compliance'],
      marketPrice: '$2,000-8,000/month',
      category: 'Security Training',
      technologies: ['KnowBe4', 'Proofpoint', 'Cofense', 'Microsoft Security', 'Custom Training']
    },
    {
      title: 'Identity Governance & Administration',
      description: 'Comprehensive identity governance solutions for user lifecycle management and access control.',
      icon: '👤',
      price: 'Starting at $3,800/month',
      features: ['Identity governance', 'Access certification', 'Role management', 'Compliance reporting', 'Audit trails'],
      benefits: ['Ensure access compliance', 'Reduce access risks', 'Simplify governance'],
      marketPrice: '$6,500-20,000/month',
      category: 'Identity Governance',
      technologies: ['SailPoint', 'Saviynt', 'ForgeRock', 'Microsoft Identity', 'Okta']
    },
    {
      title: 'Privileged Access Management (PAM)',
      description: 'Advanced privileged access management solutions for securing and monitoring privileged accounts.',
      icon: '🔑',
      price: 'Starting at $4,200/month',
      features: ['Privileged account management', 'Session monitoring', 'Access control', 'Audit trails', 'Compliance'],
      benefits: ['Secure privileged access', 'Monitor privileged activities', 'Ensure compliance'],
      marketPrice: '$7,000-25,000/month',
      category: 'Privileged Access',
      technologies: ['CyberArk', 'BeyondTrust', 'Centrify', 'Thycotic', 'Microsoft PAM']
    },
    {
      title: 'Security Orchestration & Response (SOAR)',
      description: 'Security orchestration and automated response solutions for improved security operations efficiency.',
      icon: '🤖',
      price: 'Starting at $6,500/month',
      features: ['Security orchestration', 'Automated response', 'Playbook automation', 'Incident management', 'Integration'],
      benefits: ['Automate security operations', 'Improve response time', 'Reduce manual work'],
      marketPrice: '$10,000-35,000/month',
      category: 'SOAR',
      technologies: ['Splunk SOAR', 'IBM Resilient', 'Palo Alto Cortex', 'Rapid7 InsightConnect', 'Custom Automation']
    },
    {
      title: 'Threat Intelligence & Hunting',
      description: 'Advanced threat intelligence and hunting services to identify and respond to sophisticated threats.',
      icon: '🕵️',
      price: 'Starting at $7,500/month',
      features: ['Threat intelligence', 'Threat hunting', 'IOC management', 'Threat analysis', 'Response planning'],
      benefits: ['Identify advanced threats', 'Improve threat detection', 'Enable proactive defense'],
      marketPrice: '$12,000-40,000/month',
      category: 'Threat Intelligence',
      technologies: ['Threat Intelligence Platforms', 'Hunting Tools', 'IOC Management', 'Custom Analysis', 'Threat Feeds']
    },
    {
      title: 'Security Architecture & Design',
      description: 'Comprehensive security architecture design and implementation for enterprise security frameworks.',
      icon: '🏗️',
      price: 'Starting at $8,500/month',
      features: ['Security architecture', 'Framework design', 'Risk assessment', 'Implementation planning', 'Compliance'],
      benefits: ['Design secure systems', 'Ensure security by design', 'Improve security posture'],
      marketPrice: '$15,000-50,000/month',
      category: 'Security Architecture',
      technologies: ['Security Frameworks', 'Architecture Tools', 'Risk Assessment', 'Compliance Standards', 'Design Patterns']
    },
    {
      title: 'Incident Response & Forensics',
      description: 'Comprehensive incident response and digital forensics services for security incident management.',
      icon: '🚨',
      price: 'Starting at $9,000/month',
      features: ['Incident response', 'Digital forensics', 'Evidence collection', 'Analysis', 'Reporting'],
      benefits: ['Respond to incidents quickly', 'Collect evidence properly', 'Improve security posture'],
      marketPrice: '$15,000-60,000/month',
      category: 'Incident Response',
      technologies: ['Forensic Tools', 'Incident Response Platforms', 'Evidence Collection', 'Analysis Tools', 'Reporting Systems']
    },
    {
      title: 'Compliance & Risk Management',
      description: 'Comprehensive compliance and risk management solutions for regulatory adherence and risk mitigation.',
      icon: '📋',
      price: 'Starting at $5,500/month',
      features: ['Compliance management', 'Risk assessment', 'Policy management', 'Audit support', 'Reporting'],
      benefits: ['Ensure compliance', 'Manage risks effectively', 'Simplify audits'],
      marketPrice: '$9,000-30,000/month',
      category: 'Compliance',
      technologies: ['GRC Platforms', 'Risk Management Tools', 'Compliance Software', 'Audit Tools', 'Policy Management']
    },
    {
      title: 'Security Consulting & Advisory',
      description: 'Strategic security consulting and advisory services for security strategy and implementation planning.',
      icon: '💡',
      price: 'Starting at $400/hour',
      features: ['Security strategy', 'Risk assessment', 'Implementation planning', 'Vendor evaluation', 'Training'],
      benefits: ['Develop security strategy', 'Assess security risks', 'Plan implementations'],
      marketPrice: '$600-1,500/hour',
      category: 'Security Consulting',
      technologies: ['Security Frameworks', 'Risk Assessment', 'Strategy Planning', 'Implementation Guidance', 'Best Practices']
    },
    {
      title: 'Managed Security Services (MSS)',
      description: 'Comprehensive managed security services with 24/7 monitoring, threat detection, and response.',
      icon: '🛡️',
      price: 'Starting at $10,000/month',
      features: ['24/7 monitoring', 'Threat detection', 'Incident response', 'Security management', 'Compliance'],
      benefits: ['Outsource security operations', 'Ensure 24/7 protection', 'Reduce security costs'],
      marketPrice: '$18,000-75,000/month',
      category: 'Managed Security',
      technologies: ['SIEM', 'SOAR', 'Threat Intelligence', 'Incident Response', 'Security Tools']
    },
    {
      title: 'Security Operations Center (SOC)',
      description: 'Dedicated security operations center services with advanced monitoring and response capabilities.',
      icon: '🏢',
      price: 'Starting at $15,000/month',
      features: ['Dedicated SOC', 'Advanced monitoring', 'Threat hunting', 'Incident response', 'Security analysis'],
      benefits: ['Dedicated security team', 'Advanced threat detection', 'Rapid incident response'],
      marketPrice: '$25,000-100,000/month',
      category: 'SOC Services',
      technologies: ['SOC Platforms', 'Monitoring Tools', 'Threat Intelligence', 'Incident Response', 'Security Analytics']
    },
    {
      title: 'Cloud-Native Security',
      description: 'Specialized cloud-native security solutions for containerized and serverless applications.',
      icon: '☁️',
      price: 'Starting at $6,500/month',
      features: ['Container security', 'Serverless security', 'Cloud-native monitoring', 'Policy enforcement', 'Compliance'],
      benefits: ['Secure cloud-native applications', 'Ensure container security', 'Enable cloud compliance'],
      marketPrice: '$11,000-35,000/month',
      category: 'Cloud-Native Security',
      technologies: ['Kubernetes Security', 'Container Scanning', 'Serverless Security', 'Cloud Security', 'Policy as Code']
    },
    {
      title: 'DevSecOps Implementation',
      description: 'DevSecOps implementation with security integration throughout the development lifecycle.',
      icon: '🔐',
      price: 'Starting at $7,500/month',
      features: ['Security integration', 'Automated security testing', 'Policy as code', 'Security monitoring', 'Compliance'],
      benefits: ['Integrate security in development', 'Automate security testing', 'Ensure secure deployments'],
      marketPrice: '$12,000-40,000/month',
      category: 'DevSecOps',
      technologies: ['Security Tools', 'CI/CD Integration', 'Policy as Code', 'Security Testing', 'Compliance Automation']
    },
    {
      title: 'Security Automation & Orchestration',
      description: 'Advanced security automation and orchestration solutions for improved security operations efficiency.',
      icon: '⚙️',
      price: 'Starting at $8,500/month',
      features: ['Security automation', 'Workflow orchestration', 'Playbook automation', 'Integration', 'Monitoring'],
      benefits: ['Automate security operations', 'Improve efficiency', 'Reduce manual work'],
      marketPrice: '$15,000-50,000/month',
      category: 'Security Automation',
      technologies: ['SOAR Platforms', 'Automation Tools', 'Workflow Engines', 'Integration APIs', 'Monitoring Tools']
    },
    {
      title: 'Advanced Threat Protection',
      description: 'Comprehensive advanced threat protection solutions for sophisticated cyber threats and attacks.',
      icon: '🎯',
      price: 'Starting at $9,500/month',
      features: ['Advanced threat detection', 'Behavioral analysis', 'Machine learning', 'Threat hunting', 'Response'],
      benefits: ['Detect advanced threats', 'Prevent sophisticated attacks', 'Improve security posture'],
      marketPrice: '$18,000-60,000/month',
      category: 'Advanced Threat Protection',
      technologies: ['AI/ML Security', 'Behavioral Analysis', 'Threat Intelligence', 'Advanced Analytics', 'Response Automation']
    },
    {
      title: 'Security Metrics & Reporting',
      description: 'Comprehensive security metrics and reporting solutions for security performance measurement and compliance.',
      icon: '📊',
      price: 'Starting at $3,500/month',
      features: ['Security metrics', 'Performance reporting', 'Compliance reporting', 'Dashboard creation', 'Analytics'],
      benefits: ['Measure security performance', 'Enable compliance reporting', 'Improve security visibility'],
      marketPrice: '$6,000-20,000/month',
      category: 'Security Metrics',
      technologies: ['Reporting Tools', 'Dashboard Platforms', 'Analytics Tools', 'Compliance Software', 'Metrics Collection']
    },
    {
      title: 'Security Training & Certification',
      description: 'Comprehensive security training and certification programs for security professionals and teams.',
      icon: '🎓',
      price: 'Starting at $2,500/month',
      features: ['Security training', 'Certification programs', 'Skill assessment', 'Continuing education', 'Certification'],
      benefits: ['Develop security skills', 'Achieve certifications', 'Improve team capabilities'],
      marketPrice: '$4,500-15,000/month',
      category: 'Security Training',
      technologies: ['Training Platforms', 'Certification Programs', 'Skill Assessment', 'Learning Management', 'Continuing Education']
    },
    {
      title: 'Security Research & Development',
      description: 'Advanced security research and development services for cutting-edge security solutions and innovations.',
      icon: '🔬',
      price: 'Starting at $12,000/month',
      features: ['Security research', 'Solution development', 'Innovation projects', 'Proof of concept', 'Implementation'],
      benefits: ['Develop innovative solutions', 'Stay ahead of threats', 'Enable security innovation'],
      marketPrice: '$20,000-100,000/month',
      category: 'Security R&D',
      technologies: ['Research Tools', 'Development Platforms', 'Innovation Labs', 'Proof of Concept', 'Implementation']
    },
    {
      title: 'Security Governance & Strategy',
      description: 'Comprehensive security governance and strategy services for enterprise security leadership and planning.',
      icon: '👑',
      price: 'Starting at $15,000/month',
      features: ['Security governance', 'Strategy development', 'Leadership guidance', 'Planning', 'Implementation'],
      benefits: ['Develop security strategy', 'Ensure governance', 'Enable security leadership'],
      marketPrice: '$25,000-150,000/month',
      category: 'Security Governance',
      technologies: ['Governance Frameworks', 'Strategy Tools', 'Leadership Guidance', 'Planning Platforms', 'Implementation']
    },
    {
      title: 'Security Innovation & Future',
      description: 'Cutting-edge security innovation and future technology services for next-generation security solutions.',
      icon: '🚀',
      price: 'Starting at $20,000/month',
      features: ['Security innovation', 'Future technology', 'Next-gen solutions', 'Research', 'Implementation'],
      benefits: ['Enable security innovation', 'Prepare for future threats', 'Develop next-gen solutions'],
      marketPrice: '$35,000-200,000/month',
      category: 'Security Innovation',
      technologies: ['Innovation Labs', 'Future Technology', 'Next-Gen Solutions', 'Research Platforms', 'Implementation']
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