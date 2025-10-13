<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
'use client;
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Server, Shield, Cloud, Database, Network, Code, Monitor, Settings } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight } from 'lucide-react;

;

<<<<<<< HEAD
const ItServicesPage: React.FC = () => {const itServices = [;
    {
      titl,
    e: 'Cloud Infrastructure Management,
      description: 'Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.,
      icon: '☁️,
      price: Starting at $2,500
      features: ['Cloud migration strategy', 'Cost optimization', 'Security hardening', 24
      benefits: ['Reduce cloud costs by 30%', 'Improve performance by 40%', 'Ensure 99.9% uptime],
      marketPrice: $4,000-8,000
      category: 'Cloud Services,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker]
    },
    {
      title: 'Cybersecurity Solutions,
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.,
      icon: '🔒,
      price: Starting at $3,000
      features: ['Security audits', 'Penetration testing', 'Threat monitoring', 'Incident response', 'Compliance management],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce security costs by 50%', 'Ensure compliance],
      marketPrice: $5,000-12,000
      category: 'Security,
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Zero Trust]
    },
    {
      title: DevOps & CI
      descriptio,
    n: 'Automated deployment pipelines, infrastructure as code, and continuous integration services.,
      icon: '🔄,
      price: Starting at $2,000
      features: [CI
=======
const $1Page: React.FC = () => {}
  const itServices = [
    {}
      titl,
    e: 'Cloud Infrastructure Management',
      description: 'Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.',
      icon: '☁️',
      price: 'Starting at $2,500
      features: ['Cloud migration strategy', 'Cost optimization', 'Security hardening', '24]
      benefits: ['Reduce cloud costs by 30%', 'Improve performance by 40%', 'Ensure 99.9% uptime'],
      marketPrice: '$4,000-8,000
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker']
    },
    {}
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      icon: '🔒',
      price: 'Starting at $3,000
      features: ['Security audits', 'Penetration testing', 'Threat monitoring', 'Incident response', 'Compliance management'],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce security costs by 50%', 'Ensure compliance'],
      marketPrice: '$5,000-12,000
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Zero Trust']
    },
    {}
      title: 'DevOps & CI'
      descriptio,'
    n: 'Automated deployment pipelines, infrastructure as code, and continuous integration services.',
      icon: '🔄',
      price: 'Starting at $2,000
      features: ['CI]
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      benefit,
    s: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity],
      marketPrice: $3,500-7,000
      category: 'DevOps,
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus]
    },
<<<<<<< HEAD
    {
      title: 'Database Administration,
      description: 'Database design, optimization, backup, and maintenance for SQL and NoSQL databases.,
      icon: '🗄️,
      price: Starting at $1,500
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services],
      benefits: ['Improve query performance by 60%', 'Ensure data integrity', 'Reduce downtime],
      marketPrice: $2,500-5,000
      category: 'Database,
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch]
    },
    {
      title: 'Network Infrastructure,
      description: 'Network design, implementation, and management for enterprise-grade connectivity.,
      icon: '🌐,
      price: Starting at $2,200
      features: ['Network design', 'Router & switch config', 'VPN setup', 'Load balancing', 'Network monitoring],
      benefits: ['Improve network performance', 'Reduce latency by 40%', 'Ensure reliability],
      marketPrice: $3,500-6,000
      category: 'Networking,
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'MPLS]
    },
    {
      title: 'IT Support & Helpdesk,
      description: 24
      ico,
    n: '🛠️,
      price: Starting at $1,200
      features: [24
=======
    {}
      title: 'Database Administration',
      description: 'Database design, optimization, backup, and maintenance for SQL and NoSQL databases.',
      icon: '🗄️',
      price: 'Starting at $1,500
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services'],
      benefits: ['Improve query performance by 60%', 'Ensure data integrity', 'Reduce downtime'],
      marketPrice: '$2,500-5,000
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {}
      title: 'Network Infrastructure',
      description: 'Network design, implementation, and management for enterprise-grade connectivity.',
      icon: '🌐',
      price: 'Starting at $2,200
      features: ['Network design', 'Router & switch config', 'VPN setup', 'Load balancing', 'Network monitoring'],
      benefits: ['Improve network performance', 'Reduce latency by 40%', 'Ensure reliability'],
      marketPrice: '$3,500-6,000
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'MPLS']
    },
    {}
      title: 'IT Support & Helpdesk',
      description: '24'
      icon: '🛠️',
      price: 'Starting at $1,200
      features: ['24]
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      benefit,
    s: ['Reduce downtime by 70%', 'Improve user satisfaction', 'Lower support costs],
      marketPrice: $2,000-4,000
      category: 'Support,
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'Active Directory', 'Office 365]
    },
<<<<<<< HEAD
    {
      title: 'Data Analytics & BI,
      description: 'Data warehouse design, ETL processes, and business intelligence dashboard development.,
      icon: '📊,
      price: Starting at $2,800
      features: ['Data warehouse design', 'ETL development', 'Dashboard creation', 'Report automation', 'Data governance],
      benefits: ['Make data-driven decisions', 'Improve business insights', 'Automate reporting],
      marketPrice: $4,500-9,000
      category: 'Analytics,
      technologies: ['Tableau', 'Power BI', 'Snowflake', 'Apache Airflow', 'Python]
    },
    {
      title: 'API Development & Integration,
      description: 'Custom API development, third-party integrations, and microservices architecture.,
      icon: '🔌,
      price: Starting at $2,000
      features: ['RESTful API design', 'GraphQL development', 'Third-party integrations', 'API documentation', 'Rate limiting],
      benefits: ['Improve system connectivity', 'Enable rapid development', 'Enhance scalability],
      marketPrice: $3,500-7,500
      category: 'Integration,
      technologies: ['Node.js', 'Python', 'GraphQL', 'Kong', 'Postman]
    },
    {
      title: 'Mobile App Development,
      description: 'Native and cross-platform mobile application development for iOS and Android.,
      icon: '📱,
      price: Starting at $3,500
      features: ['Native iOS/Android apps', 'Cross-platform development', UI
      benefits: ['Reach mobile users', 'Improve user engagement', 'Increase revenue],
      marketPrice: $6,000-15,000
      category: 'Mobile,
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin]
    },
    {
      title: 'Web Application Development,
      description: 'Custom web applications, e-commerce solutions, and enterprise web platforms.,
      icon: '💻,
      price: Starting at $2,500
      features: ['Custom web apps', 'E-commerce solutions', 'CMS development', 'Responsive design', 'SEO optimization],
      benefits: ['Improve online presence', 'Increase conversions', 'Enhance user experience],
      marketPrice: $4,000-10,000
      category: 'Web Development,
      technologies: ['React', 'Vue.js', 'Node.js', 'PHP', 'WordPress]
    },
    {
      title: 'IT Consulting & Strategy,
      description: 'Technology roadmap development, digital transformation planning, and IT strategy consulting.,
      icon: '💡,
      price: Starting at $200
=======
    {}
      title: 'Data Analytics & BI',
      description: 'Data warehouse design, ETL processes, and business intelligence dashboard development.',
      icon: '📊',
      price: 'Starting at $2,800
      features: ['Data warehouse design', 'ETL development', 'Dashboard creation', 'Report automation', 'Data governance'],
      benefits: ['Make data-driven decisions', 'Improve business insights', 'Automate reporting'],
      marketPrice: '$4,500-9,000
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'Snowflake', 'Apache Airflow', 'Python']
    },
    {}
      title: 'API Development & Integration',
      description: 'Custom API development, third-party integrations, and microservices architecture.',
      icon: '🔌',
      price: 'Starting at $2,000
      features: ['RESTful API design', 'GraphQL development', 'Third-party integrations', 'API documentation', 'Rate limiting'],
      benefits: ['Improve system connectivity', 'Enable rapid development', 'Enhance scalability'],
      marketPrice: '$3,500-7,500
      category: 'Integration',
      technologies: ['Node.js', 'Python', 'GraphQL', 'Kong', 'Postman']
    },
    {}
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android.',
      icon: '📱',
      price: 'Starting at $3,500
      features: ['Native iOS/Android apps', 'Cross-platform development', 'UI]
      benefits: ['Reach mobile users', 'Improve user engagement', 'Increase revenue'],
      marketPrice: '$6,000-15,000
      category: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin']
    },
    {}
      title: 'Web Application Development',
      description: 'Custom web applications, e-commerce solutions, and enterprise web platforms.',
      icon: '💻',
      price: 'Starting at $2,500
      features: ['Custom web apps', 'E-commerce solutions', 'CMS development', 'Responsive design', 'SEO optimization'],
      benefits: ['Improve online presence', 'Increase conversions', 'Enhance user experience'],
      marketPrice: '$4,000-10,000
      category: 'Web Development',
      technologies: ['React', 'Vue.js', 'Node.js', 'PHP', 'WordPress']
    },
    {}
      title: 'IT Consulting & Strategy',
      description: 'Technology roadmap development, digital transformation planning, and IT strategy consulting.',
      icon: '💡',
      price: 'Starting at $200
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      feature,
    s: ['Technology assessment', 'Digital transformation', 'IT strategy planning', 'Vendor evaluation', 'ROI analysis],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Reduce risks],
      marketPrice: $300-500
      categor,
    y: 'Consulting,
      technologies: ['Strategic Planning', 'Architecture Design', 'Risk Assessment', 'ROI Analysis]
    },
<<<<<<< HEAD
    {
      title: 'Disaster Recovery & Backup,
      description: 'Comprehensive backup solutions, disaster recovery planning, and business continuity services.,
      icon: '🔄,
      price: Starting at $1,800
      features: ['Backup strategy', 'Disaster recovery planning', 'Data replication', 'Recovery testing', 'Business continuity],
      benefits: ['Minimize downtime', 'Protect critical data', 'Ensure business continuity],
      marketPrice: $3,000-6,000
      category: 'Backup & Recovery,
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'VMware]
    },
    {
      title: 'Blockchain Infrastructure,
      description: 'Enterprise blockchain solutions, smart contract development, and decentralized application deployment.,
      icon: '⛓️,
      price: Starting at $4,500
      features: ['Blockchain deployment', 'Smart contract development', 'DApp development', 'Node management', 'Security auditing],
      benefits: ['Enable decentralized solutions', 'Improve transparency', 'Reduce intermediaries],
      marketPrice: $8,000-25,000
      category: 'Blockchain,
      technologies: ['Ethereum', 'Hyperledger', 'Solidity', 'Web3', 'IPFS]
    },
    {
      title: 'IoT Platform Management,
      description: 'Comprehensive IoT infrastructure management and device connectivity solutions.,
      icon: '🌐,
      price: Starting at $3,200
      features: ['Device management', 'Data collection', 'Real-time monitoring', 'Edge computing', 'Security management],
      benefits: ['Enable IoT deployments', 'Improve operational efficiency', 'Reduce manual monitoring],
      marketPrice: $5,500-18,000
      category: 'IoT,
      technologies: ['AWS IoT', 'Azure IoT', 'MQTT', 'CoAP', 'Edge Computing]
    },
    {
      title: 'Edge Computing Infrastructure,
      description: 'Distributed computing infrastructure for low-latency applications and edge data processing.,
      icon: '⚡,
      price: Starting at $3,800
      features: ['Edge node deployment', 'Data processing', 'Content delivery', 'Load balancing', 'Monitoring],
      benefits: ['Reduce latency', 'Improve performance', 'Enable real-time applications],
      marketPrice: $6,500-20,000
      category: 'Edge Computing,
      technologies: ['Kubernetes', 'Docker', 'CDN', 'Edge Servers', '5G Networks]
    },
    {
      title: 'Quantum Computing Infrastructure,
      description: 'Quantum computing platform setup and quantum algorithm development services.,
      icon: '⚛️,
      price: Starting at $8,000
      features: ['Quantum hardware setup', 'Algorithm development', 'Quantum simulation', 'Hybrid systems', 'Research support],
      benefits: ['Enable quantum computing', 'Solve complex problems', 'Gain competitive advantage],
      marketPrice: $15,000-50,000
      category: 'Quantum Computing,
      technologies: ['IBM Qiskit', 'Google Cirq', 'Rigetti', 'IonQ', 'Quantum Simulators]
    },
    {
      title: '5G Network Implementation,
      description: '5G network infrastructure deployment and optimization for enterprise applications.,
      icon: '📡,
      price: Starting at $5,500
      features: ['5G network design', 'Infrastructure deployment', 'Performance optimization', 'Security implementation', 'Integration services],
      benefits: ['Enable high-speed connectivity', 'Support IoT applications', 'Improve mobile experience],
      marketPrice: $10,000-40,000
      category: '5G Networks,
      technologies: ['5G Core', 'RAN', 'Network Slicing', 'MEC', 'NFV]
    },
    {
      title: 'Microservices Architecture,
      description: 'Modern microservices architecture design and implementation for scalable applications.,
      icon: '🔧,
      price: Starting at $3,500
      features: ['Architecture design', 'Service decomposition', 'API gateway setup', 'Service mesh', 'Monitoring],
      benefits: ['Improve scalability', 'Enable rapid development', 'Reduce deployment risks],
      marketPrice: $6,000-20,000
      category: 'Microservices,
      technologies: ['Kubernetes', 'Docker', 'Istio', 'API Gateway', 'Service Mesh]
    },
    {
      title: 'Serverless Computing Platform,
      description: 'Serverless architecture implementation and management for event-driven applications.,
      icon: '☁️,
      price: Starting at $2,800
      features: ['Function deployment', 'Event handling', 'Auto-scaling', 'Cost optimization', 'Monitoring],
      benefits: ['Reduce infrastructure costs', 'Improve scalability', 'Simplify deployment],
      marketPrice: $4,500-15,000
      category: 'Serverless,
      technologies: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Serverless Framework]
    },
    {
      title: 'Data Lake Architecture,
      description: 'Enterprise data lake design and implementation for big data analytics and storage.,
      icon: '🏞️,
      price: Starting at $4,200
      features: ['Data lake design', 'Data ingestion', 'Storage optimization', 'Security implementation', 'Analytics setup],
      benefits: ['Centralize data storage', 'Enable advanced analytics', 'Improve data governance],
      marketPrice: $7,000-25,000
      category: 'Data Architecture,
      technologies: ['AWS S3', 'Azure Data Lake', 'Hadoop', 'Spark', 'Delta Lake]
    },
    {
      title: 'AI Infrastructure Setup,
      description: AI
      ico,
    n: '🤖,
      price: Starting at $4,800
      features: ['GPU cluster setup', 'ML pipeline deployment', 'Model serving', 'Data preprocessing', 'Monitoring],
      benefits: [Enable AI
=======
    {}
      title: 'Disaster Recovery & Backup',
      description: 'Comprehensive backup solutions, disaster recovery planning, and business continuity services.',
      icon: '🔄',
      price: 'Starting at $1,800
      features: ['Backup strategy', 'Disaster recovery planning', 'Data replication', 'Recovery testing', 'Business continuity'],
      benefits: ['Minimize downtime', 'Protect critical data', 'Ensure business continuity'],
      marketPrice: '$3,000-6,000
      category: 'Backup & Recovery',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'VMware']
    },
    {}
      title: 'Blockchain Infrastructure',
      description: 'Enterprise blockchain solutions, smart contract development, and decentralized application deployment.',
      icon: '⛓️',
      price: 'Starting at $4,500
      features: ['Blockchain deployment', 'Smart contract development', 'DApp development', 'Node management', 'Security auditing'],
      benefits: ['Enable decentralized solutions', 'Improve transparency', 'Reduce intermediaries'],
      marketPrice: '$8,000-25,000
      category: 'Blockchain',
      technologies: ['Ethereum', 'Hyperledger', 'Solidity', 'Web3', 'IPFS']
    },
    {}
      title: 'IoT Platform Management',
      description: 'Comprehensive IoT infrastructure management and device connectivity solutions.',
      icon: '🌐',
      price: 'Starting at $3,200
      features: ['Device management', 'Data collection', 'Real-time monitoring', 'Edge computing', 'Security management'],
      benefits: ['Enable IoT deployments', 'Improve operational efficiency', 'Reduce manual monitoring'],
      marketPrice: '$5,500-18,000
      category: 'IoT',
      technologies: ['AWS IoT', 'Azure IoT', 'MQTT', 'CoAP', 'Edge Computing']
    },
    {}
      title: 'Edge Computing Infrastructure',
      description: 'Distributed computing infrastructure for low-latency applications and edge data processing.',
      icon: '⚡',
      price: 'Starting at $3,800
      features: ['Edge node deployment', 'Data processing', 'Content delivery', 'Load balancing', 'Monitoring'],
      benefits: ['Reduce latency', 'Improve performance', 'Enable real-time applications'],
      marketPrice: '$6,500-20,000
      category: 'Edge Computing',
      technologies: ['Kubernetes', 'Docker', 'CDN', 'Edge Servers', '5G Networks']
    },
    {}
      title: 'Quantum Computing Infrastructure',
      description: 'Quantum computing platform setup and quantum algorithm development services.',
      icon: '⚛️',
      price: 'Starting at $8,000
      features: ['Quantum hardware setup', 'Algorithm development', 'Quantum simulation', 'Hybrid systems', 'Research support'],
      benefits: ['Enable quantum computing', 'Solve complex problems', 'Gain competitive advantage'],
      marketPrice: '$15,000-50,000
      category: 'Quantum Computing',
      technologies: ['IBM Qiskit', 'Google Cirq', 'Rigetti', 'IonQ', 'Quantum Simulators']
    },
    {}
      title: '5G Network Implementation',
      description: '5G network infrastructure deployment and optimization for enterprise applications.',
      icon: '📡',
      price: 'Starting at $5,500
      features: ['5G network design', 'Infrastructure deployment', 'Performance optimization', 'Security implementation', 'Integration services'],
      benefits: ['Enable high-speed connectivity', 'Support IoT applications', 'Improve mobile experience'],
      marketPrice: '$10,000-40,000
      category: '5G Networks',
      technologies: ['5G Core', 'RAN', 'Network Slicing', 'MEC', 'NFV']
    },
    {}
      title: 'Microservices Architecture',
      description: 'Modern microservices architecture design and implementation for scalable applications.',
      icon: '🔧',
      price: 'Starting at $3,500
      features: ['Architecture design', 'Service decomposition', 'API gateway setup', 'Service mesh', 'Monitoring'],
      benefits: ['Improve scalability', 'Enable rapid development', 'Reduce deployment risks'],
      marketPrice: '$6,000-20,000
      category: 'Microservices',
      technologies: ['Kubernetes', 'Docker', 'Istio', 'API Gateway', 'Service Mesh']
    },
    {}
      title: 'Serverless Computing Platform',
      description: 'Serverless architecture implementation and management for event-driven applications.',
      icon: '☁️',
      price: 'Starting at $2,800
      features: ['Function deployment', 'Event handling', 'Auto-scaling', 'Cost optimization', 'Monitoring'],
      benefits: ['Reduce infrastructure costs', 'Improve scalability', 'Simplify deployment'],
      marketPrice: '$4,500-15,000
      category: 'Serverless',
      technologies: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Serverless Framework']
    },
    {}
      title: 'Data Lake Architecture',
      description: 'Enterprise data lake design and implementation for big data analytics and storage.',
      icon: '🏞️',
      price: 'Starting at $4,200
      features: ['Data lake design', 'Data ingestion', 'Storage optimization', 'Security implementation', 'Analytics setup'],
      benefits: ['Centralize data storage', 'Enable advanced analytics', 'Improve data governance'],
      marketPrice: '$7,000-25,000
      category: 'Data Architecture',
      technologies: ['AWS S3', 'Azure Data Lake', 'Hadoop', 'Spark', 'Delta Lake']
    },
    {}
      title: 'AI Infrastructure Setup',
      description: 'AI'
      icon: '🤖',
      price: 'Starting at $4,800
      features: ['GPU cluster setup', 'ML pipeline deployment', 'Model serving', 'Data preprocessing', 'Monitoring'],
      benefits: ['Enable AI]
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      marketPric,
    e: $8,000-30,000
      category: 'AI Infrastructure,
      technologies: ['NVIDIA GPUs', 'Kubernetes', 'TensorFlow', 'PyTorch', 'MLflow]
    },
<<<<<<< HEAD
    {
      title: 'Hybrid Cloud Management,
      description: 'Multi-cloud and hybrid cloud infrastructure management and optimization.,
      icon: '☁️,
      price: Starting at $3,600
      features: ['Multi-cloud strategy', 'Cost optimization', 'Security management', 'Migration services', 'Monitoring],
      benefits: ['Optimize cloud costs', 'Improve reliability', 'Enable vendor flexibility],
      marketPrice: $6,500-22,000
      category: 'Cloud Management,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'CloudFormation]
    },
    {
      title: 'Zero Trust Security Architecture,
      description: 'Zero trust security model implementation for enterprise network protection.,
      icon: '🔒,
      price: Starting at $4,000
      features: ['Identity verification', 'Network segmentation', 'Access control', 'Threat detection', 'Compliance],
      benefits: ['Improve security posture', 'Reduce attack surface', 'Ensure compliance],
      marketPrice: $7,500-25,000
      category: 'Security Architecture,
      technologies: ['Zero Trust', 'Identity Management', 'Network Security', 'SIEM', 'EDR]
    },
    {
      title: 'High-Performance Computing (HPC),
      description: 'High-performance computing cluster setup and management for scientific and engineering workloads.,
      icon: '💻,
      price: Starting at $6,000
      features: ['HPC cluster design', 'Job scheduling', 'Performance optimization', 'Storage management', 'Monitoring],
      benefits: ['Accelerate computations', 'Enable complex simulations', 'Improve research efficiency],
      marketPrice: $12,000-50,000
      category: 'HPC,
      technologies: ['Slurm', 'OpenMPI', 'CUDA', 'InfiniBand', 'Parallel File Systems]
    },
    {
      title: 'Content Delivery Network (CDN),
      description: 'Global CDN implementation and optimization for improved content delivery performance.,
      icon: '🌍,
      price: Starting at $1,500
      features: ['CDN setup', 'Content optimization', 'Caching strategy', 'Performance monitoring', 'Security],
      benefits: ['Improve load times', 'Reduce bandwidth costs', 'Enhance user experience],
      marketPrice: $2,500-10,000
      category: 'CDN,
      technologies: ['CloudFlare', 'AWS CloudFront', 'Azure CDN', 'Akamai', 'Fastly]
    },
    {
      title: 'Database Performance Optimization,
      description: 'Database performance tuning and optimization for improved application performance.,
      icon: '🗄️,
      price: Starting at $2,200
      features: ['Performance analysis', 'Query optimization', 'Index tuning', 'Capacity planning', 'Monitoring],
      benefits: ['Improve query performance', 'Reduce response times', 'Optimize resource usage],
      marketPrice: $4,000-15,000
      category: 'Database Optimization,
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch]
    },
    {
      title: 'API Gateway Management,
      description: 'Enterprise API gateway setup and management for secure and scalable API operations.,
      icon: '🚪,
      price: Starting at $2,500
      features: ['API gateway setup', 'Rate limiting', 'Authentication', 'Monitoring', 'Documentation],
      benefits: ['Centralize API management', 'Improve security', 'Enable API monetization],
      marketPrice: $4,500-18,000
      category: 'API Management,
      technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Apigee', 'Zuul]
    },
    {
      title: 'Container Orchestration,
      description: 'Kubernetes and container orchestration platform setup and management.,
      icon: '🐳,
      price: Starting at $3,200
      features: ['Kubernetes setup', 'Container management', 'Auto-scaling', 'Service mesh', 'Monitoring],
      benefits: ['Improve scalability', 'Simplify deployment', 'Enable microservices],
      marketPrice: $5,500-20,000
      category: 'Containerization,
      technologies: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'Prometheus]
    },
    {
      title: 'Real-time Data Streaming,
      description: 'Real-time data streaming platform setup and management for live data processing.,
      icon: '📊,
      price: Starting at $2,800
      features: ['Stream processing', 'Data pipelines', 'Real-time analytics', 'Event handling', 'Monitoring],
      benefits: ['Enable real-time insights', 'Improve decision making', 'Support live applications],
      marketPrice: $5,000-18,000
      category: 'Streaming,
      technologies: ['Apache Kafka', 'Apache Flink', 'Apache Storm', 'AWS Kinesis', 'Azure Stream Analytics]
=======
    {}
      title: 'Hybrid Cloud Management',
      description: 'Multi-cloud and hybrid cloud infrastructure management and optimization.',
      icon: '☁️',
      price: 'Starting at $3,600
      features: ['Multi-cloud strategy', 'Cost optimization', 'Security management', 'Migration services', 'Monitoring'],
      benefits: ['Optimize cloud costs', 'Improve reliability', 'Enable vendor flexibility'],
      marketPrice: '$6,500-22,000
      category: 'Cloud Management',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'CloudFormation']
    },
    {}
      title: 'Zero Trust Security Architecture',
      description: 'Zero trust security model implementation for enterprise network protection.',
      icon: '🔒',
      price: 'Starting at $4,000
      features: ['Identity verification', 'Network segmentation', 'Access control', 'Threat detection', 'Compliance'],
      benefits: ['Improve security posture', 'Reduce attack surface', 'Ensure compliance'],
      marketPrice: '$7,500-25,000
      category: 'Security Architecture',
      technologies: ['Zero Trust', 'Identity Management', 'Network Security', 'SIEM', 'EDR']
    },
    {}
      title: 'High-Performance Computing (HPC)',
      description: 'High-performance computing cluster setup and management for scientific and engineering workloads.',
      icon: '💻',
      price: 'Starting at $6,000
      features: ['HPC cluster design', 'Job scheduling', 'Performance optimization', 'Storage management', 'Monitoring'],
      benefits: ['Accelerate computations', 'Enable complex simulations', 'Improve research efficiency'],
      marketPrice: '$12,000-50,000
      category: 'HPC',
      technologies: ['Slurm', 'OpenMPI', 'CUDA', 'InfiniBand', 'Parallel File Systems']
    },
    {}
      title: 'Content Delivery Network (CDN)',
      description: 'Global CDN implementation and optimization for improved content delivery performance.',
      icon: '🌍',
      price: 'Starting at $1,500
      features: ['CDN setup', 'Content optimization', 'Caching strategy', 'Performance monitoring', 'Security'],
      benefits: ['Improve load times', 'Reduce bandwidth costs', 'Enhance user experience'],
      marketPrice: '$2,500-10,000
      category: 'CDN',
      technologies: ['CloudFlare', 'AWS CloudFront', 'Azure CDN', 'Akamai', 'Fastly']
    },
    {}
      title: 'Database Performance Optimization',
      description: 'Database performance tuning and optimization for improved application performance.',
      icon: '🗄️',
      price: 'Starting at $2,200
      features: ['Performance analysis', 'Query optimization', 'Index tuning', 'Capacity planning', 'Monitoring'],
      benefits: ['Improve query performance', 'Reduce response times', 'Optimize resource usage'],
      marketPrice: '$4,000-15,000
      category: 'Database Optimization',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {}
      title: 'API Gateway Management',
      description: 'Enterprise API gateway setup and management for secure and scalable API operations.',
      icon: '🚪',
      price: 'Starting at $2,500
      features: ['API gateway setup', 'Rate limiting', 'Authentication', 'Monitoring', 'Documentation'],
      benefits: ['Centralize API management', 'Improve security', 'Enable API monetization'],
      marketPrice: '$4,500-18,000
      category: 'API Management',
      technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Apigee', 'Zuul']
    },
    {}
      title: 'Container Orchestration',
      description: 'Kubernetes and container orchestration platform setup and management.',
      icon: '🐳',
      price: 'Starting at $3,200
      features: ['Kubernetes setup', 'Container management', 'Auto-scaling', 'Service mesh', 'Monitoring'],
      benefits: ['Improve scalability', 'Simplify deployment', 'Enable microservices'],
      marketPrice: '$5,500-20,000
      category: 'Containerization',
      technologies: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'Prometheus']
    },
    {}
      title: 'Real-time Data Streaming',
      description: 'Real-time data streaming platform setup and management for live data processing.',
      icon: '📊',
      price: 'Starting at $2,800
      features: ['Stream processing', 'Data pipelines', 'Real-time analytics', 'Event handling', 'Monitoring'],
      benefits: ['Enable real-time insights', 'Improve decision making', 'Support live applications'],
      marketPrice: '$5,000-18,000
      category: 'Streaming',
      technologies: ['Apache Kafka', 'Apache Flink', 'Apache Storm', 'AWS Kinesis', 'Azure Stream Analytics']
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    }

    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, description: 'Cloud Solutions' },    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, description: 'Seamless Migration },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Development Operations },
    { name: 'Database Services', href: '/database', icon: Database, description: 'Data Management },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security Solutions },
    { name: 'Security Monitoring', href: '/security-monitoring', icon: Shield, description: '24/7 Security },
    { name: 'Penetration Testing', href: '/penetration-testing', icon: Shield, description: 'Security Testing },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud, description: 'Infrastructure Setup },
    { name: 'Managed IT Services', href: '/managed-it', icon: Settings, description: '24/7 IT Support },
    { name: 'IT Consulting', href: '/it-consulting', icon: Globe, description: 'IT Strategy },
    { name: 'Data Analytics', href: '/data-analytics', icon: Database, description: 'Business Intelligence },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'Mobile Apps },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Web Applications },
    { name: 'Process Automation', href: '/process-automation', icon: Zap, description: 'Workflow Automation }

  ];

  return (

    <React.Fragment>
    <div>
        <title>IT Services - Zion Tech Group<
        <meta name="description" content="Comprehensive IT services including cloud, security, DevOps, and infrastructure solutions for modern businesses. 
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, infrastructure, technology consulting 
      <

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50>
        {/* Hero Section */}<
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20>
          <div className="absolute inset-0 bg-black opacity-20><
          <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8><
            <div className="text-center><
              <h1 className="text-4xl md:text-6xl font-bold mb-6>
                Professional IT Services<
              <
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto>
                Comprehensive technology solutions to power your business growth and digital transformation
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center><
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors>
                  Get Free Assessment
                <
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors>
                  View Our Portfolio
                <
              <
            <
          <
        <

<<<<<<< HEAD
        {/* Key Benefits *
        <section className="py-16 bg-white>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8><
            <div className="text-center mb-12><
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4>
=======
        {/* Key Benefits *}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><
            <div className="text-center mb-12"><
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                Why Choose Our IT Services?
              <
              <p className="text-xl text-gray-600>
                Expert solutions delivered by certified professionals with proven track records
              <
            <
            <div className=grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8><
              <div className="text-center><
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4><
                  <Server className="w-8 h-8 text-blue-600 
                <
                <h3 className="text-xl font-semibold text-gray-900 mb-2>Certified Experts<
                <p className="text-gray-600>AWS, Microsoft, Cisco, and other industry certifications<
              <
              <div className="text-center><
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4><
                  <Shield className="w-8 h-8 text-green-600 
                <
                <h3 className="text-xl font-semibold text-gray-900 mb-2>Enterprise Security<
                <p className="text-gray-600>Bank-level security with compliance and monitoring<
              <
              <div className="text-center><
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4><
                  <Cloud className="w-8 h-8 text-purple-600 
                <
                <h3 className="text-xl font-semibold text-gray-900 mb-2>Cloud-First Approach<
                <p className="text-gray-600>Modern, scalable solutions built for the cloud<
              <
              <div className="text-center><
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4><
                  <Settings className="w-8 h-8 text-orange-600 
                <
                <h3 className="text-xl font-semibold text-gray-900 mb-2>24/7 Support<
                <p className="text-gray-600>Round-the-clock monitoring and support services<
              <
            <
          <
        <

<<<<<<< HEAD
        {/* Services by Category *
        {categories.map(category => (

          <section key={category} className="py-16 bg-gray-50>
            <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8><
              <div className="text-center mb-12><
                <h2 className=text-3xl m,
    d:text-4xl font-bold text-gray-900 mb-4>
=======
        {/* Services by Category *}
        {categories.map(category => (}
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"><
              <div className="text-center mb-12"><
                <h2 className="text-3xl m,
    d:text-4xl font-bold text-gray-900 mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                  {category} Services
                <
                <p className="text-xl text-gray-600>
                  Professional {category.toLowerCase()} solutions tailored to your business needs
                <
              <
<<<<<<< HEAD
              <div className=grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-8>
                {itServices
=======
              <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-8">
                {itServices}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                  .filter(service => service.category === category)
                  .map((service, index) => (<
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow><
                      <div className="text-4xl mb-4>{service.icon}<
                      <h3 className="text-xl font-semibold text-gray-900 mb-3>{service.title}<
                      <p className="text-gray-600 mb-4>{service.description}<
                      
                      <div className="mb-4><
                        <div className="flex items-center justify-between mb-2><
                          <span className="text-2xl font-bold text-blue-600>{service.price}<
                          <span className="text-sm text-gray-500>Market: {service.marketPrice}<
                        <
                        <div className="text-sm text-green-600 font-semibold>
                          Save up to 40% vs market rates<
                        <
                      <

                      <div className="mb-4><
                        <h4 className="font-semibold text-gray-900 mb-2>Key Features: <
                        <ul className="space-y-1>)
                          {service.features.map((feature), featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-600>
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 
                              {feature}

                            <)
                          ))}

                        <
                      <

<<<<<<< HEAD
                      <div className="mb-4><
                        <h4 className="font-semibold text-gray-900 mb-2>Technologies: <
                        <div className="flex flex-wrap gap-2>
                          {service.technologies.map((tech), techIndex) => (<
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded>
=======
                      <div className="mb-4"><
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies: <
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech), techIndex) => (<}
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                              {tech}

                            <)
                          ))}

                        <
                      <

                      <div className="mb-6><
                        <h4 className="font-semibold text-gray-900 mb-2>Business Benefits: <
                        <ul className="space-y-1>
                          {service.benefits.map((benefit), benefitIndex) => (<li key={benefitIndex} className="flex items-center text-sm text-gray-600>
                              
                        Get Quote
                      <
                    <
                  ))}

              <
            <
          <
        ))}

<<<<<<< HEAD
        {/* Contact Section *
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center><
            <h2 className="text-3xl md:text-4xl font-bold mb-4>
=======
        {/* Contact Section *}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"><
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
              Ready to Transform Your IT Infrastructure?
            <
            <p className="text-xl mb-8 text-blue-100>
              Contact our certified IT experts for a free consultation and custom solution design
            <
            <div className="flex flex-col sm:flex-row gap-4 justify-center><
              <a 
                href="tel:+13024640950
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center
              >
                📞 +1 302 464 0950
              <
              <a 
                href="mailto:kleber@ziontechgroup.com
                className=border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hove,
    r:text-blue-600 transition-colors
              >
                ✉️ kleber@ziontechgroup.com
              <
            <
            <div className="mt-8 text-sm text-blue-200><
              <p>📍 364 E Main St STE 1008, Middletown DE 19709<
            <
          <
        <
      <
    <
      <Helmet>        <title>IT Services - Zion Tech Group | Information Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud solutions, cybersecurity, infrastructure management, and more. Expert IT support and consulting. />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        <section className="py-20 px-4>
          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              IT <span className="text-cyan-400>Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth.
            </p>
          </div>
        </section>

<<<<<<< HEAD
        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              {itServices.map((service, index) => (

=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <Link
                  key={index}

                  to={service.href}

                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group
                >
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors>
                    {service.name}

                  </h3>
                  <p className="text-gray-300 mb-4>{service.description}</p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors>
                    <span className="text-sm font-medium>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform />
                  </div>
                </Link>
              ))            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </React.Fragment>)
  );};
=======
=======

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, 
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, 
  HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp, Search, Filter,
  Building, Network, Router, Monitor, Laptop, Printer, Key, Eye, AlertTriangle,
  DollarSign, Award, Headphones, MessageSquare, Calendar, FileText, Download,
  Upload, Refresh, RotateCcw, Maximize, Minimize, X, Plus, Minus, Activity,
  PieChart, TrendingDown, ExternalLink, ChevronRight, Crown, Rocket, Wrench,
  Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass,
  Navigation as NavIcon, Home, Heart, Stethoscope, GraduationCap, Briefcase,
  Car, Plane, Ship, Train, Factory, ShoppingCart, CreditCard, Gamepad2,
  Music, Video, Camera, Palette, Bot, Package, Truck, Box, Archive, Folder,
  File, Image, Film, Headphones as Headphone, Mic, Speaker, Volume2, VolumeX,
  Play, Pause, Stop, SkipBack, SkipForward, Repeat, Shuffle, Radio, Tv,
  Tablet, Watch, Headphones as Headset, Gamepad2 as Gamepad, Joystick,
  Mouse, Keyboard, Webcam, Wifi as WifiSignal, Bluetooth, Usb, Hdmi,
  Ethernet, WifiOff, Signal, SignalZero, SignalLow, SignalMedium, SignalHigh,
  SignalFull, Wifi as WifiIcon, WifiOff as WifiOffIcon, Send, Reply, Forward,
  Share, Copy, Paste, Cut, Save, Download as DownloadIcon, Upload as UploadIcon,
  Refresh as RefreshIcon, RotateCcw as RotateCcwIcon, RotateCw, Maximize as MaximizeIcon,
  Minimize as MinimizeIcon, X as XIcon, Plus as PlusIcon, Minus as MinusIcon,
  Divide, Equal, Percent, Hash, AtSign, Euro, Pound, Yen, Bitcoin, Wallet,
  Banknote, Coins, Receipt, Archive as ArchiveIcon, Folder as FolderIcon,
  File as FileIcon, Image as ImageIcon, Film as FilmIcon, Music as MusicIcon,
  Headphones as HeadphoneIcon, Mic as Microphone, Speaker as SpeakerIcon,
  Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Play as PlayIcon,
  Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon, Repeat as RepeatIcon, Shuffle as ShuffleIcon,
  Radio as RadioIcon, Tv as TvIcon, Monitor as MonitorIcon, Laptop as LaptopIcon,
  Smartphone as PhoneIcon, Tablet as TabletIcon, Watch as WatchIcon,
  Headphones as HeadsetIcon, Gamepad2 as GamepadIcon, Joystick as JoystickIcon,
  Mouse as MouseIcon, Keyboard as KeyboardIcon, Webcam as WebcamIcon,
  Wifi as WifiSignalIcon, Bluetooth as BluetoothIcon, Usb as UsbIcon,
  Hdmi as HdmiIcon, Ethernet as EthernetIcon, WifiOff as WifiOffSignalIcon,
  Signal as SignalIcon, SignalZero as Signal0Icon, SignalLow as Signal1Icon,
  SignalMedium as Signal2Icon, SignalHigh as Signal3Icon, SignalFull as Signal4Icon,
  Wifi as WifiIcon2, WifiOff as WifiOffIcon2
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const itServices = useMemo(() => [
    // Core IT Services
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      description: 'Comprehensive 24/7 IT management and support for your business infrastructure.',
      icon: Settings,
      category: 'infrastructure',
      pricing: { starting: 199, period: 'month', perUser: true },
      features: [
        '24/7 monitoring and support',
        'Proactive maintenance',
        'Security management',
        'Backup and disaster recovery',
        'Software updates',
        'Help desk support'
      ],
      benefits: [
        'Reduce IT costs by 40%',
        'Minimize downtime by 90%',
        'Improve security posture',
        'Focus on core business'
      ],
      popular: true,
      rating: 4.9,
      users: 2500,
      link: 'https://ziontechgroup.com/managed-it-services'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced security.',
      icon: Cloud,
      category: 'cloud',
      pricing: { starting: 2999, period: 'project' },
      features: [
        'Assessment and planning',
        'Data migration',
        'Application migration',
        'Security configuration',
        'Performance optimization',
        'Training and support'
      ],
      benefits: [
        'Reduce infrastructure costs by 60%',
        'Improve scalability',
        'Enhance security',
        'Increase flexibility'
      ],
      popular: true,
      rating: 4.8,
      users: 1200,
      link: 'https://ziontechgroup.com/cloud-migration'
    },
    {
      id: 'cybersecurity-suite',
      name: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      icon: Shield,
      category: 'security',
      pricing: { starting: 149, period: 'month' },
      features: [
        'Firewall management',
        'Endpoint protection',
        'Email security',
        'Network monitoring',
        'Vulnerability assessment',
        'Incident response'
      ],
      benefits: [
        'Prevent 99.9% of threats',
        'Reduce security incidents by 95%',
        'Comply with regulations',
        'Protect sensitive data'
      ],
      popular: true,
      rating: 4.9,
      users: 3200,
      link: 'https://ziontechgroup.com/cybersecurity-suite'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance.',
      icon: Network,
      category: 'infrastructure',
      pricing: { starting: 399, period: 'month' },
      features: [
        'Network design and planning',
        'Hardware installation',
        'Configuration and optimization',
        'Monitoring and maintenance',
        'Troubleshooting',
        'Performance tuning'
      ],
      benefits: [
        'Improve network performance by 80%',
        'Reduce connectivity issues by 90%',
        'Enhance security',
        'Support business growth'
      ],
      popular: false,
      rating: 4.7,
      users: 1800,
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      id: 'data-backup-recovery',
      name: 'Data Backup & Recovery',
      description: 'Reliable data protection with automated backups and rapid recovery solutions.',
      icon: Database,
      category: 'data',
      pricing: { starting: 99, period: 'month' },
      features: [
        'Automated daily backups',
        'Cloud storage integration',
        'Point-in-time recovery',
        'Disaster recovery planning',
        'Data encryption',
        'Compliance reporting'
      ],
      benefits: [
        'Protect against data loss',
        'Recover data in minutes',
        'Meet compliance requirements',
        'Reduce downtime'
      ],
      popular: true,
      rating: 4.8,
      users: 4100,
      link: 'https://ziontechgroup.com/data-backup-recovery'
    },
    {
      id: 'help-desk-support',
      name: 'Help Desk Support',
      description: 'Professional IT support services to resolve technical issues quickly and efficiently.',
      icon: Headphones,
      category: 'support',
      pricing: { starting: 79, period: 'month', perUser: true },
      features: [
        '24/7 phone and email support',
        'Remote assistance',
        'Ticket management',
        'Knowledge base access',
        'Priority support levels',
        'SLA guarantees'
      ],
      benefits: [
        'Resolve issues 3x faster',
        'Improve user satisfaction',
        'Reduce IT workload',
        'Increase productivity'
      ],
      popular: true,
      rating: 4.6,
      users: 5600,
      link: 'https://ziontechgroup.com/help-desk-support'
    },
    {
      id: 'software-licensing',
      name: 'Software Licensing Management',
      description: 'Optimize software costs and ensure compliance with comprehensive licensing management.',
      icon: Key,
      category: 'software',
      pricing: { starting: 49, period: 'month' },
      features: [
        'License inventory',
        'Compliance monitoring',
        'Cost optimization',
        'Renewal management',
        'Usage tracking',
        'Audit support'
      ],
      benefits: [
        'Reduce software costs by 30%',
        'Ensure compliance',
        'Avoid penalties',
        'Optimize usage'
      ],
      popular: false,
      rating: 4.5,
      users: 2200,
      link: 'https://ziontechgroup.com/software-licensing'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting Services',
      description: 'Strategic IT consulting to align technology with business objectives and goals.',
      icon: Target,
      category: 'consulting',
      pricing: { starting: 199, period: 'hour' },
      features: [
        'IT strategy development',
        'Technology assessment',
        'Vendor evaluation',
        'Project planning',
        'Change management',
        'Training programs'
      ],
      benefits: [
        'Align IT with business goals',
        'Make informed decisions',
        'Reduce technology risks',
        'Improve ROI'
      ],
      popular: false,
      rating: 4.8,
      users: 800,
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      id: 'mobile-device-management',
      name: 'Mobile Device Management',
      description: 'Secure and manage mobile devices across your organization with enterprise-grade solutions.',
      icon: Smartphone,
      category: 'mobile',
      pricing: { starting: 29, period: 'month', perDevice: true },
      features: [
        'Device enrollment',
        'Policy enforcement',
        'App management',
        'Security controls',
        'Remote wipe capability',
        'Compliance reporting'
      ],
      benefits: [
        'Secure mobile devices',
        'Enforce policies',
        'Reduce security risks',
        'Improve productivity'
      ],
      popular: true,
      rating: 4.7,
      users: 3400,
      link: 'https://ziontechgroup.com/mobile-device-management'
    },
    {
      id: 'voip-phone-systems',
      name: 'VoIP Phone Systems',
      description: 'Modern voice communication solutions with advanced features and cost savings.',
      icon: Phone,
      category: 'communication',
      pricing: { starting: 39, period: 'month', perUser: true },
      features: [
        'HD voice quality',
        'Video conferencing',
        'Mobile integration',
        'Call routing',
        'Voicemail to email',
        'Analytics and reporting'
      ],
      benefits: [
        'Reduce phone costs by 50%',
        'Improve communication',
        'Enhance collaboration',
        'Scale easily'
      ],
      popular: false,
      rating: 4.6,
      users: 1900,
      link: 'https://ziontechgroup.com/voip-phone-systems'
    },
    {
      id: 'server-maintenance',
      name: 'Server Maintenance',
      description: 'Proactive server maintenance to ensure optimal performance and prevent failures.',
      icon: Server,
      category: 'infrastructure',
      pricing: { starting: 299, period: 'month' },
      features: [
        'Hardware monitoring',
        'Software updates',
        'Performance optimization',
        'Security patches',
        'Backup verification',
        'Capacity planning'
      ],
      benefits: [
        'Prevent server failures',
        'Improve performance',
        'Extend hardware life',
        'Reduce downtime'
      ],
      popular: true,
      rating: 4.8,
      users: 2800,
      link: 'https://ziontechgroup.com/server-maintenance'
    },
    {
      id: 'it-audit-compliance',
      name: 'IT Audit & Compliance',
      description: 'Comprehensive IT audits and compliance assessments to meet regulatory requirements.',
      icon: FileText,
      category: 'compliance',
      pricing: { starting: 2499, period: 'audit' },
      features: [
        'Security assessment',
        'Compliance evaluation',
        'Risk analysis',
        'Policy review',
        'Remediation planning',
        'Documentation'
      ],
      benefits: [
        'Meet compliance requirements',
        'Identify security gaps',
        'Reduce audit risks',
        'Improve security posture'
      ],
      popular: false,
      rating: 4.9,
      users: 600,
      link: 'https://ziontechgroup.com/it-audit-compliance'
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'data', name: 'Data Management', icon: Database },
    { id: 'support', name: 'Support', icon: Headphones },
    { id: 'software', name: 'Software', icon: Code },
    { id: 'consulting', name: 'Consulting', icon: Target },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'communication', name: 'Communication', icon: Phone },
    { id: 'compliance', name: 'Compliance', icon: FileText }
  ];

  const filteredServices = useMemo(() => {
    let filtered = itServices;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    switch (sortBy) {
      case 'popularity':
        filtered.sort((a, b) => b.users - a.users);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.pricing.starting - b.pricing.starting);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.starting - a.pricing.starting);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, itServices]);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
'use client';

import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

const ItServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="IT services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">IT Services</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
<<<<<<< HEAD
    </>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8

export default ItServicesPage;
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
    </div>
  );
};
export default ITServicesPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
