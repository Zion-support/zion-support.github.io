'use client';
import React from 'react';
import { CheckCircle, Star, Cloud, Shield, Database, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
<<<<<<< HEAD
  const itServices = [
    // Infrastructure & Cloud Services
=======
  const services = [
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
    {
      icon: Cloud,
      title: 'IT Infrastructure',
      price: '$999/month',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee',
      features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      price: '$1,599/month',
      description: 'Advanced security solutions with threat detection and prevention',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response']
    },
    {
      icon: Database,
      title: 'Database Services',
      price: '$899/month',
      description: 'Database design, optimization, and management with AI-powered tuning',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening']
    },
    {
<<<<<<< HEAD
      title: 'Data Center Services',
      description: 'Complete data center solutions including colocation, managed hosting, and disaster recovery services.',
      icon: <HardDrive className="w-8 h-8" />,
      features: ['Colocation services', 'Managed hosting', 'Disaster recovery', 'Backup solutions', 'Monitoring', '24/7 support'],
      price: 'Starting at $800/month',
      category: 'Infrastructure',
      benefits: ['Reliable infrastructure', 'Reduced capital costs', 'Expert management', 'Compliance support'],
      technologies: ['VMware', 'Hyper-V', 'SAN Storage', 'Backup Software', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Cybersecurity Services
    {
      title: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions with AI-powered threat detection, prevention, and response capabilities.',
      icon: <Shield className="w-8 h-8" />,
      features: ['AI threat detection', 'Behavioral analysis', 'Incident response', 'Security monitoring', 'Vulnerability scanning', 'Penetration testing'],
      price: 'Starting at $2,500/month',
      category: 'Security',
      benefits: ['Prevent 99.9% of threats', 'Reduce response time by 80%', 'Compliance assurance', '24/7 monitoring'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML', 'Threat Intelligence'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure identity management with multi-factor authentication, single sign-on, and privileged access management.',
      icon: <Lock className="w-8 h-8" />,
      features: ['SSO implementation', 'MFA setup', 'Privileged access management', 'Identity governance', 'Access reviews', 'Compliance reporting'],
      price: 'Starting at $1,800/month',
      category: 'Security',
      benefits: ['Enhanced security', 'Improved user experience', 'Compliance support', 'Reduced IT overhead'],
      technologies: ['Azure AD', 'Okta', 'Ping Identity', 'CyberArk', 'SailPoint', 'ForgeRock'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Security Compliance & Audit',
      description: 'Comprehensive security compliance services for SOC 2, ISO 27001, HIPAA, and other regulatory requirements.',
      icon: <FileText className="w-8 h-8" />,
      features: ['Compliance assessment', 'Policy development', 'Audit preparation', 'Risk assessment', 'Training programs', 'Ongoing monitoring'],
      price: 'Starting at $3,000/month',
      category: 'Security',
      benefits: ['Achieve compliance', 'Reduce audit time', 'Minimize risks', 'Build trust'],
      technologies: ['GRC Tools', 'Risk Management', 'Compliance Frameworks', 'Audit Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response with dedicated security analysts and advanced threat hunting.',
      icon: <Activity className="w-8 h-8" />,
      features: ['24/7 monitoring', 'Threat hunting', 'Incident response', 'Security analytics', 'Threat intelligence', 'Forensic analysis'],
      price: 'Starting at $5,000/month',
      category: 'Security',
      benefits: ['Continuous protection', 'Rapid response', 'Expert analysis', 'Proactive defense'],
      technologies: ['SIEM', 'SOAR', 'EDR', 'Threat Intelligence', 'Forensic Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Database & Data Management
    {
      title: 'Database Administration & Optimization',
      description: 'Expert database management with performance tuning, backup strategies, and high availability solutions.',
      icon: <Database className="w-8 h-8" />,
      features: ['Performance tuning', 'Backup & recovery', 'High availability', 'Data migration', 'Monitoring', 'Capacity planning'],
      price: 'Starting at $1,500/month',
      category: 'Data',
      benefits: ['Improved performance', 'Reduced downtime', 'Cost optimization', 'Data protection'],
      technologies: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated testing and rapid recovery capabilities.',
      icon: <HardDrive className="w-8 h-8" />,
      features: ['Automated backups', 'Disaster recovery planning', 'RTO/RPO optimization', 'Testing & validation', 'Cloud backup', 'Recovery automation'],
      price: 'Starting at $1,200/month',
      category: 'Data',
      benefits: ['Minimize data loss', 'Rapid recovery', 'Business continuity', 'Compliance support'],
      technologies: ['Veeam', 'Commvault', 'Rubrik', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Migration Services',
      description: 'Seamless data migration with zero downtime, data validation, and comprehensive testing for all platforms.',
      icon: <ArrowRight className="w-8 h-8" />,
      features: ['Zero-downtime migration', 'Data validation', 'Schema conversion', 'Performance testing', 'Rollback planning', 'Post-migration support'],
      price: 'Starting at $2,500/project',
      category: 'Data',
      benefits: ['Risk-free migration', 'Minimal downtime', 'Data integrity', 'Cost savings'],
      technologies: ['AWS DMS', 'Azure Data Factory', 'Google Cloud Data Transfer', 'Custom Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // DevOps & Development
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated pipelines, infrastructure as code, and continuous monitoring.',
      icon: <Code className="w-8 h-8" />,
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Security scanning', 'Automated testing'],
      price: 'Starting at $2,000/month',
      category: 'Development',
      benefits: ['Faster deployments', 'Improved quality', 'Reduced errors', 'Better collaboration'],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Kubernetes', 'Docker', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Microservices Architecture',
      description: 'Modern microservices architecture design and implementation with containerization and service mesh.',
      icon: <Cog className="w-8 h-8" />,
      features: ['Architecture design', 'Service decomposition', 'API gateway', 'Service mesh', 'Monitoring', 'Scaling strategies'],
      price: 'Starting at $3,500/month',
      category: 'Development',
      benefits: ['Improved scalability', 'Better maintainability', 'Faster development', 'Technology flexibility'],
      technologies: ['Kubernetes', 'Istio', 'Docker', 'API Gateway', 'Service Mesh', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'API Development & Management',
      description: 'Comprehensive API development with design, implementation, security, and lifecycle management.',
      icon: <Globe className="w-8 h-8" />,
      features: ['API design', 'RESTful APIs', 'GraphQL', 'API security', 'Rate limiting', 'Documentation'],
      price: 'Starting at $1,800/month',
      category: 'Development',
      benefits: ['Better integration', 'Improved security', 'Enhanced performance', 'Developer experience'],
      technologies: ['Node.js', 'Python', 'Java', 'Kong', 'Apigee', 'AWS API Gateway'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // IT Support & Management
    {
      title: 'Managed IT Services',
      description: 'Comprehensive IT management including help desk, system administration, and proactive maintenance.',
      icon: <Users className="w-8 h-8" />,
      features: ['24/7 help desk', 'Remote support', 'System administration', 'Patch management', 'User training', 'Asset management'],
      price: 'Starting at $1,000/month',
      category: 'Support',
      benefits: ['Reduced IT costs', 'Improved uptime', 'Expert support', 'Proactive maintenance'],
      technologies: ['RMM Tools', 'PSA Software', 'Remote Access', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT planning and consulting to align technology with business objectives and drive digital transformation.',
      icon: <Target className="w-8 h-8" />,
      features: ['IT strategy development', 'Technology assessment', 'Digital transformation', 'Vendor evaluation', 'Budget planning', 'Roadmap creation'],
      price: 'Starting at $2,500/month',
      category: 'Consulting',
      benefits: ['Strategic alignment', 'Cost optimization', 'Risk reduction', 'Competitive advantage'],
      technologies: ['Strategy Frameworks', 'Assessment Tools', 'Planning Software'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with tracking, optimization, and compliance reporting.',
      icon: <Settings className="w-8 h-8" />,
      features: ['Asset tracking', 'License management', 'Lifecycle planning', 'Cost optimization', 'Compliance reporting', 'Vendor management'],
      price: 'Starting at $800/month',
      category: 'Management',
      benefits: ['Cost savings', 'Compliance assurance', 'Better planning', 'Reduced risks'],
      technologies: ['Asset Management Tools', 'License Management', 'CMDB', 'Reporting Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Specialized Services
    {
      title: 'Microsoft 365 Migration & Management',
      description: 'Complete Microsoft 365 migration with security configuration, user training, and ongoing management.',
      icon: <Mail className="w-8 h-8" />,
      features: ['Migration planning', 'Data migration', 'Security configuration', 'User training', 'Ongoing management', 'Compliance setup'],
      price: 'Starting at $1,500/month',
      category: 'Cloud Services',
      benefits: ['Improved collaboration', 'Enhanced security', 'Cost savings', 'Better productivity'],
      technologies: ['Microsoft 365', 'Azure AD', 'PowerShell', 'Migration Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'VoIP & Unified Communications',
      description: 'Modern communication solutions with VoIP, video conferencing, and unified communications platforms.',
      icon: <Phone className="w-8 h-8" />,
      features: ['VoIP implementation', 'Video conferencing', 'Unified communications', 'Call center solutions', 'Integration services', 'Training'],
      price: 'Starting at $1,200/month',
      category: 'Communications',
      benefits: ['Cost savings', 'Improved collaboration', 'Better mobility', 'Enhanced features'],
      technologies: ['Cisco', 'Microsoft Teams', 'Zoom', '8x8', 'RingCentral', 'Avaya'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs for staff development and certification preparation.',
      icon: <Award className="w-8 h-8" />,
      features: ['Technical training', 'Certification prep', 'Security awareness', 'Software training', 'Custom programs', 'Online learning'],
      price: 'Starting at $500/month',
      category: 'Training',
      benefits: ['Improved skills', 'Better productivity', 'Reduced support needs', 'Career development'],
      technologies: ['Learning Management Systems', 'Virtual Labs', 'Certification Programs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Project Management',
      description: 'Expert IT project management with planning, execution, and delivery of complex technology initiatives.',
      icon: <Rocket className="w-8 h-8" />,
      features: ['Project planning', 'Resource management', 'Risk assessment', 'Timeline management', 'Quality assurance', 'Stakeholder communication'],
      price: 'Starting at $2,000/month',
      category: 'Project Management',
      benefits: ['On-time delivery', 'Cost control', 'Quality assurance', 'Risk mitigation'],
      technologies: ['Project Management Tools', 'Agile Methodologies', 'Risk Management Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Advanced IT Services
    {
      title: 'AI-Powered IT Operations',
      description: 'Intelligent IT operations with AI-driven monitoring, predictive maintenance, and automated incident response.',
      icon: <Brain className="w-8 h-8" />,
      features: ['AI monitoring', 'Predictive maintenance', 'Automated incident response', 'Anomaly detection', 'Performance optimization', 'Self-healing systems'],
      price: 'Starting at $3,500/month',
      category: 'AI Operations',
      benefits: ['Reduce downtime by 70%', 'Predict issues before they occur', 'Automate routine tasks', 'Improve system reliability'],
      technologies: ['Machine Learning', 'AIOps Platforms', 'Monitoring Tools', 'Automation Scripts'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with identity verification, micro-segmentation, and continuous monitoring.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Identity verification', 'Micro-segmentation', 'Continuous monitoring', 'Least privilege access', 'Threat detection', 'Compliance automation'],
      price: 'Starting at $4,000/month',
      category: 'Advanced Security',
      benefits: ['Eliminate security perimeters', 'Reduce attack surface', 'Improve compliance', 'Enhanced threat protection'],
      technologies: ['Okta', 'Palo Alto', 'Cisco', 'Microsoft', 'Zscaler', 'Cloudflare'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Hybrid Cloud Management',
      description: 'Seamless hybrid cloud operations with multi-cloud orchestration, cost optimization, and unified management.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Multi-cloud orchestration', 'Cost optimization', 'Unified management', 'Workload portability', 'Security compliance', 'Performance monitoring'],
      price: 'Starting at $2,800/month',
      category: 'Cloud Management',
      benefits: ['Optimize cloud costs', 'Improve flexibility', 'Enhance security', 'Simplify management'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Cloud Management Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Edge Computing Infrastructure',
      description: 'Distributed edge computing solutions with low-latency processing, IoT integration, and real-time analytics.',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Edge deployment', 'IoT integration', 'Real-time processing', 'Low-latency networks', 'Data synchronization', 'Remote management'],
      price: 'Starting at $3,200/month',
      category: 'Edge Computing',
      benefits: ['Reduce latency', 'Lower bandwidth costs', 'Enable real-time processing', 'Improve user experience'],
      technologies: ['Kubernetes', 'Docker', 'Edge Hardware', 'IoT Platforms', '5G Networks'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Blockchain Infrastructure',
      description: 'Enterprise blockchain solutions with smart contracts, decentralized applications, and secure transaction processing.',
      icon: <Link className="w-8 h-8" />,
      features: ['Blockchain deployment', 'Smart contracts', 'DApp development', 'Consensus mechanisms', 'Security auditing', 'Integration services'],
      price: 'Starting at $4,500/month',
      category: 'Blockchain',
      benefits: ['Enhanced security', 'Transparent transactions', 'Reduced intermediaries', 'Improved trust'],
      technologies: ['Ethereum', 'Hyperledger', 'Corda', 'Solidity', 'Web3', 'IPFS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Quantum Computing Integration',
      description: 'Quantum computing solutions for complex optimization problems, cryptography, and advanced simulations.',
      icon: <Atom className="w-8 h-8" />,
      features: ['Quantum algorithm development', 'Hybrid classical-quantum systems', 'Quantum cryptography', 'Optimization problems', 'Simulation services', 'Research support'],
      price: 'Starting at $8,000/month',
      category: 'Quantum Computing',
      benefits: ['Solve complex problems', 'Future-proof technology', 'Enhanced security', 'Competitive advantage'],
      technologies: ['IBM Quantum', 'Google Quantum', 'Microsoft Azure Quantum', 'Qiskit', 'Cirq'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IoT & Smart Infrastructure',
      description: 'Comprehensive IoT solutions with device management, data analytics, and smart infrastructure automation.',
      icon: <Wifi className="w-8 h-8" />,
      features: ['Device management', 'Data analytics', 'Smart automation', 'Sensor networks', 'Real-time monitoring', 'Predictive maintenance'],
      price: 'Starting at $2,200/month',
      category: 'IoT',
      benefits: ['Operational efficiency', 'Cost reduction', 'Improved safety', 'Data-driven insights'],
      technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT', 'LoRaWAN', 'Edge Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'High-Performance Computing',
      description: 'Advanced HPC solutions with parallel processing, GPU acceleration, and scientific computing capabilities.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Parallel processing', 'GPU acceleration', 'Scientific computing', 'Big data processing', 'Simulation services', 'Performance optimization'],
      price: 'Starting at $5,000/month',
      category: 'HPC',
      benefits: ['Faster processing', 'Complex simulations', 'Scientific research', 'Competitive advantage'],
      technologies: ['NVIDIA CUDA', 'OpenMP', 'MPI', 'Slurm', 'Docker', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Comprehensive digital transformation strategy and implementation for modernizing business processes and technology.',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['Digital strategy', 'Process modernization', 'Technology adoption', 'Change management', 'ROI optimization', 'Innovation labs'],
      price: 'Starting at $3,500/month',
      category: 'Digital Transformation',
      benefits: ['Modernize operations', 'Improve efficiency', 'Enhance customer experience', 'Drive innovation'],
      technologies: ['Cloud Platforms', 'AI/ML', 'Automation Tools', 'Analytics Platforms'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Compliance & Governance',
      description: 'Comprehensive compliance management with automated monitoring, reporting, and regulatory adherence.',
      icon: <FileCheck className="w-8 h-8" />,
      features: ['Compliance monitoring', 'Automated reporting', 'Risk assessment', 'Policy management', 'Audit preparation', 'Regulatory updates'],
      price: 'Starting at $2,000/month',
      category: 'Compliance',
      benefits: ['Ensure compliance', 'Reduce audit risks', 'Automate reporting', 'Stay updated'],
      technologies: ['GRC Platforms', 'Compliance Tools', 'Reporting Software', 'Policy Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Complete ITSM implementation with service desk, incident management, and ITIL best practices.',
      icon: <Settings className="w-8 h-8" />,
      features: ['Service desk', 'Incident management', 'Change management', 'Problem management', 'Service catalog', 'SLA monitoring'],
      price: 'Starting at $1,800/month',
      category: 'ITSM',
      benefits: ['Improve service quality', 'Reduce costs', 'Better user experience', 'Process standardization'],
      technologies: ['ServiceNow', 'Jira Service Management', 'BMC Remedy', 'Cherwell'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Center Modernization',
      description: 'Complete data center transformation with virtualization, automation, and energy efficiency optimization.',
      icon: <Server className="w-8 h-8" />,
      features: ['Virtualization', 'Automation', 'Energy optimization', 'Capacity planning', 'Disaster recovery', 'Security hardening'],
      price: 'Starting at $4,500/month',
      category: 'Data Center',
      benefits: ['Reduce costs', 'Improve efficiency', 'Enhance security', 'Better scalability'],
      technologies: ['VMware', 'Hyper-V', 'Kubernetes', 'Docker', 'Automation Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Security & Monitoring',
      description: 'Advanced network security with threat detection, traffic analysis, and automated response systems.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection', 'Traffic analysis', 'Automated response', 'Network segmentation', 'Vulnerability scanning', 'Compliance monitoring'],
      price: 'Starting at $2,500/month',
      category: 'Network Security',
      benefits: ['Prevent attacks', 'Improve visibility', 'Automate responses', 'Ensure compliance'],
      technologies: ['Cisco', 'Palo Alto', 'Fortinet', 'Splunk', 'Wireshark', 'Nmap'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mobile Device Management (MDM)',
      description: 'Comprehensive mobile device management with security, app management, and remote control capabilities.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Device enrollment', 'Security policies', 'App management', 'Remote control', 'Compliance monitoring', 'Data protection'],
      price: 'Starting at $1,200/month',
      category: 'Mobile Management',
      benefits: ['Secure mobile access', 'Centralized management', 'Compliance assurance', 'Cost optimization'],
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Citrix'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Cost Optimization',
      description: 'Comprehensive IT cost analysis and optimization with vendor management and budget optimization.',
      icon: <DollarSign className="w-8 h-8" />,
      features: ['Cost analysis', 'Vendor optimization', 'Budget planning', 'License optimization', 'Resource right-sizing', 'ROI analysis'],
      price: 'Starting at $1,500/month',
      category: 'Cost Optimization',
      benefits: ['Reduce IT costs', 'Optimize spending', 'Improve ROI', 'Better planning'],
      technologies: ['Cost Management Tools', 'Analytics Platforms', 'Vendor Management Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Disaster Recovery Planning',
      description: 'Comprehensive disaster recovery planning with testing, validation, and rapid recovery capabilities.',
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ['Recovery planning', 'Testing & validation', 'RTO/RPO optimization', 'Backup strategies', 'Failover systems', 'Recovery automation'],
      price: 'Starting at $2,800/month',
      category: 'Disaster Recovery',
      benefits: ['Minimize downtime', 'Protect data', 'Ensure continuity', 'Reduce risks'],
      technologies: ['Veeam', 'Commvault', 'Zerto', 'AWS Disaster Recovery', 'Azure Site Recovery'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Performance Monitoring',
      description: 'Advanced IT performance monitoring with real-time analytics, alerting, and optimization recommendations.',
      icon: <BarChart className="w-8 h-8" />,
      features: ['Real-time monitoring', 'Performance analytics', 'Alerting systems', 'Capacity planning', 'Optimization recommendations', 'Reporting'],
      price: 'Starting at $1,600/month',
      category: 'Performance Monitoring',
      benefits: ['Improve performance', 'Prevent issues', 'Optimize resources', 'Better visibility'],
      technologies: ['Datadog', 'New Relic', 'AppDynamics', 'Splunk', 'Grafana', 'Prometheus'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Custom Development',
      description: 'Bespoke IT solutions tailored to your specific business needs with custom software and integrations.',
      icon: <Code className="w-8 h-8" />,
      features: ['Custom software', 'API development', 'Integration services', 'Legacy modernization', 'Performance optimization', 'Ongoing support'],
      price: 'Custom Pricing',
      category: 'Custom Development',
      benefits: ['Perfect fit for your needs', 'Competitive advantage', 'Scalable solutions', 'Dedicated support'],
      technologies: ['Any Technology Stack', 'Custom Development', 'Cloud Platforms', 'Integration Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];
  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'Data', count: itServices.filter(s => s.category === 'Data').length },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'Management', count: itServices.filter(s => s.category === 'Management').length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { name: 'Communications', count: itServices.filter(s => s.category === 'Communications').length },
    { name: 'Training', count: itServices.filter(s => s.category === 'Training').length },
    { name: 'Project Management', count: itServices.filter(s => s.category === 'Project Management').length }
  ];
=======
      icon: Settings,
      title: 'DevOps & CI/CD',
      price: '$1,199/month',
      description: 'Streamlined development workflows with automated testing and deployment',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup']
    }
  ];

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
<<<<<<< HEAD
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our IT Services
          </h2>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-cyan-600 transition-colors duration-200"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
=======
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions including infrastructure, cybersecurity, 
              database management, and DevOps services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Cloud className="w-4 h-4" />
                <span>Get Started</span>
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </a>
                </div>
<<<<<<< HEAD
                {service.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.technologies && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 4 && (
                        <span className="text-xs text-gray-500">
                          +{service.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <div className="text-cyan-400 font-bold mb-4 text-lg">{service.price}</div>
                {service.contactInfo && (
                  <div className="text-xs text-gray-500 mb-4">
                    {service.contactInfo}
                  </div>
                )}
                <Link
                  href="/contact"
                  className="cyber-button w-full text-center block"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your IT?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
=======
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 cyber-card">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact us today to learn how our IT services can optimize your technology infrastructure.
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
          </section>
        </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
      </main>
      <Footer />
    </div>
  );
};

export default ITServicesPage;
