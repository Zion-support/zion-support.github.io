import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Server, Shield, Cloud, Database, Network, Code, Monitor, Settings, Users, Zap, Target, BarChart } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Cloud & Infrastructure Services
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.',
      icon: '☁️',
      price: 'Starting at $2,500/month',
      features: ['Cloud migration strategy', 'Cost optimization', 'Security hardening', '24/7 monitoring', 'Disaster recovery', 'Auto-scaling'],
      benefits: ['Reduce cloud costs by 30%', 'Improve performance by 40%', 'Ensure 99.9% uptime', 'Scale seamlessly'],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud environments with unified management.',
      icon: '🔗',
      price: 'Starting at $3,500/month',
      features: ['Hybrid architecture design', 'Data synchronization', 'Unified management', 'Security integration', 'Cost optimization', 'Migration planning'],
      benefits: ['Optimize costs', 'Improve flexibility', 'Maintain security', 'Enable gradual migration'],
      marketPrice: '$5,500-12,000/month',
      category: 'Cloud Services',
      technologies: ['AWS Outposts', 'Azure Arc', 'Google Anthos', 'VMware', 'NetApp', 'Cisco'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Multi-Cloud Strategy & Management',
      description: 'Strategic multi-cloud implementation with vendor-agnostic management and optimization.',
      icon: '🌐',
      price: 'Starting at $4,000/month',
      features: ['Multi-cloud strategy', 'Vendor management', 'Cost optimization', 'Security governance', 'Disaster recovery', 'Performance monitoring'],
      benefits: ['Avoid vendor lock-in', 'Optimize costs', 'Improve reliability', 'Enhance security'],
      marketPrice: '$6,000-15,000/month',
      category: 'Cloud Services',
      technologies: ['Terraform', 'Ansible', 'Kubernetes', 'Istio', 'Prometheus', 'Grafana'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Cybersecurity Services
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      icon: '🔒',
      price: 'Starting at $3,000/month',
      features: ['Security audits', 'Penetration testing', 'Threat monitoring', 'Incident response', 'Compliance management', 'Security training'],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce security costs by 50%', 'Ensure compliance', 'Protect sensitive data'],
      marketPrice: '$5,000-12,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Zero Trust', 'CrowdStrike'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Implement zero trust security model with continuous verification and least privilege access.',
      icon: '🛡️',
      price: 'Starting at $4,500/month',
      features: ['Zero trust design', 'Identity verification', 'Device management', 'Network segmentation', 'Continuous monitoring', 'Policy enforcement'],
      benefits: ['Enhance security posture', 'Reduce attack surface', 'Improve compliance', 'Enable remote work'],
      marketPrice: '$7,000-18,000/month',
      category: 'Security',
      technologies: ['Okta', 'Ping Identity', 'Cisco', 'Palo Alto', 'Microsoft', 'Google'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring, threat detection, and incident response services.',
      icon: '🏢',
      price: 'Starting at $8,000/month',
      features: ['24/7 monitoring', 'Threat detection', 'Incident response', 'Forensic analysis', 'Compliance reporting', 'Security training'],
      benefits: ['Prevent security breaches', 'Reduce response time', 'Ensure compliance', 'Protect reputation'],
      marketPrice: '$15,000-35,000/month',
      category: 'Security',
      technologies: ['SIEM', 'SOAR', 'EDR', 'XDR', 'Threat Intelligence', 'Forensics Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // DevOps & CI/CD Services
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration services.',
      icon: '🔄',
      price: 'Starting at $2,000/month',
      features: ['CI/CD pipeline setup', 'Infrastructure automation', 'Monitoring & alerting', 'Version control', 'Testing automation', 'Deployment strategies'],
      benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity', 'Enable rapid iteration'],
      marketPrice: '$3,500-7,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'GitOps Implementation',
      description: 'Git-based workflow for infrastructure and application deployment with automated synchronization.',
      icon: '📝',
      price: 'Starting at $2,500/month',
      features: ['GitOps workflow', 'Automated sync', 'Rollback capabilities', 'Audit trails', 'Multi-environment support', 'Policy enforcement'],
      benefits: ['Improve reliability', 'Enable audit trails', 'Simplify rollbacks', 'Enhance collaboration'],
      marketPrice: '$4,000-8,000/month',
      category: 'DevOps',
      technologies: ['ArgoCD', 'Flux', 'GitLab', 'GitHub Actions', 'Kubernetes', 'Helm'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Infrastructure as Code (IaC)',
      description: 'Automated infrastructure provisioning and management using code-based approaches.',
      icon: '🏗️',
      price: 'Starting at $1,800/month',
      features: ['Infrastructure automation', 'Version control', 'Environment consistency', 'Cost optimization', 'Security compliance', 'Documentation'],
      benefits: ['Reduce manual errors', 'Improve consistency', 'Enable version control', 'Optimize costs'],
      marketPrice: '$3,000-6,000/month',
      category: 'DevOps',
      technologies: ['Terraform', 'CloudFormation', 'Pulumi', 'Ansible', 'Chef', 'Puppet'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Database Services
    {
      title: 'Database Administration',
      description: 'Database design, optimization, backup, and maintenance for SQL and NoSQL databases.',
      icon: '🗄️',
      price: 'Starting at $1,500/month',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services', 'Monitoring'],
      benefits: ['Improve query performance by 60%', 'Ensure data integrity', 'Reduce downtime', 'Optimize costs'],
      marketPrice: '$2,500-5,000/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Migration Services',
      description: 'Seamless database migration between platforms with minimal downtime and data integrity.',
      icon: '🔄',
      price: 'Starting at $3,000/project',
      features: ['Migration planning', 'Data validation', 'Downtime minimization', 'Performance optimization', 'Testing', 'Rollback planning'],
      benefits: ['Minimize downtime', 'Ensure data integrity', 'Improve performance', 'Reduce costs'],
      marketPrice: '$5,000-15,000/project',
      category: 'Database',
      technologies: ['AWS DMS', 'Azure Data Factory', 'Google Cloud SQL', 'Custom Scripts', 'ETL Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Big Data Solutions',
      description: 'Large-scale data processing, analytics, and storage solutions for enterprise data needs.',
      icon: '📊',
      price: 'Starting at $4,500/month',
      features: ['Data lake design', 'ETL pipelines', 'Real-time processing', 'Analytics platforms', 'Data governance', 'Machine learning integration'],
      benefits: ['Process large datasets', 'Enable real-time analytics', 'Improve decision making', 'Scale data operations'],
      marketPrice: '$7,000-20,000/month',
      category: 'Database',
      technologies: ['Apache Spark', 'Hadoop', 'Kafka', 'Snowflake', 'Databricks', 'Elasticsearch'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Network Services
    {
      title: 'Network Infrastructure',
      description: 'Network design, implementation, and management for enterprise-grade connectivity.',
      icon: '🌐',
      price: 'Starting at $2,200/month',
      features: ['Network design', 'Router & switch config', 'VPN setup', 'Load balancing', 'Network monitoring', 'Security implementation'],
      benefits: ['Improve network performance', 'Reduce latency by 40%', 'Ensure reliability', 'Enhance security'],
      marketPrice: '$3,500-6,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'MPLS', 'BGP'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'SD-WAN Implementation',
      description: 'Software-defined wide area network solutions for improved connectivity and cost optimization.',
      icon: '🔗',
      price: 'Starting at $2,800/month',
      features: ['SD-WAN design', 'Branch connectivity', 'Traffic optimization', 'Security integration', 'Monitoring', 'Cost reduction'],
      benefits: ['Reduce connectivity costs', 'Improve performance', 'Enhance security', 'Simplify management'],
      marketPrice: '$4,500-9,000/month',
      category: 'Networking',
      technologies: ['Cisco SD-WAN', 'VMware SD-WAN', 'Fortinet', 'Silver Peak', 'Versa', 'Aryaka'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: '5G Network Solutions',
      description: 'Next-generation 5G network implementation and optimization for enterprise connectivity.',
      icon: '📡',
      price: 'Starting at $5,000/month',
      features: ['5G network design', 'Edge computing', 'IoT connectivity', 'Performance optimization', 'Security implementation', 'Monitoring'],
      benefits: ['Enable high-speed connectivity', 'Support IoT devices', 'Reduce latency', 'Enable edge computing'],
      marketPrice: '$8,000-20,000/month',
      category: 'Networking',
      technologies: ['5G Core', 'Edge Computing', 'IoT Platforms', 'Network Slicing', 'MEC', 'OpenRAN'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // IT Support Services
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support, troubleshooting, and user assistance for all IT needs.',
      icon: '🛠️',
      price: 'Starting at $1,200/month',
      features: ['24/7 support', 'Remote assistance', 'Hardware support', 'Software installation', 'User training', 'Ticket management'],
      benefits: ['Reduce downtime by 70%', 'Improve user satisfaction', 'Lower support costs', 'Enable productivity'],
      marketPrice: '$2,000-4,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'Active Directory', 'Office 365', 'Slack'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management, procurement, and optimization services.',
      icon: '📦',
      price: 'Starting at $1,500/month',
      features: ['Asset tracking', 'Procurement management', 'License management', 'Depreciation tracking', 'Optimization', 'Compliance'],
      benefits: ['Reduce costs', 'Improve utilization', 'Ensure compliance', 'Optimize investments'],
      marketPrice: '$2,500-6,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Lansweeper', 'Asset Panda', 'Flexera', 'Microsoft Intune', 'SCCM'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'ITIL-based service management with incident, problem, and change management processes.',
      icon: '⚙️',
      price: 'Starting at $2,200/month',
      features: ['ITIL processes', 'Incident management', 'Problem management', 'Change management', 'Service catalog', 'SLA management'],
      benefits: ['Improve service quality', 'Reduce incidents', 'Enhance efficiency', 'Ensure compliance'],
      marketPrice: '$3,500-8,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira Service Management', 'BMC Remedy', 'Cherwell', 'ManageEngine', 'Freshservice'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Data Analytics & BI
    {
      title: 'Data Analytics & BI',
      description: 'Data warehouse design, ETL processes, and business intelligence dashboard development.',
      icon: '📊',
      price: 'Starting at $2,800/month',
      features: ['Data warehouse design', 'ETL development', 'Dashboard creation', 'Report automation', 'Data governance', 'Self-service BI'],
      benefits: ['Make data-driven decisions', 'Improve business insights', 'Automate reporting', 'Enable self-service analytics'],
      marketPrice: '$4,500-9,000/month',
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'Snowflake', 'Apache Airflow', 'Python', 'R'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Real-Time Analytics Platform',
      description: 'Streaming data processing and real-time analytics for immediate business insights.',
      icon: '⚡',
      price: 'Starting at $3,500/month',
      features: ['Stream processing', 'Real-time dashboards', 'Event processing', 'Data pipelines', 'Alerting', 'Machine learning integration'],
      benefits: ['Enable real-time decisions', 'Improve responsiveness', 'Detect anomalies', 'Optimize operations'],
      marketPrice: '$6,000-15,000/month',
      category: 'Analytics',
      technologies: ['Apache Kafka', 'Apache Flink', 'Apache Storm', 'Redis', 'InfluxDB', 'Grafana'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Science Platform',
      description: 'End-to-end data science platform with ML model development and deployment capabilities.',
      icon: '🧠',
      price: 'Starting at $4,000/month',
      features: ['ML model development', 'Model deployment', 'Data preprocessing', 'Feature engineering', 'Model monitoring', 'A/B testing'],
      benefits: ['Accelerate ML development', 'Improve model performance', 'Enable automation', 'Scale data science'],
      marketPrice: '$7,000-18,000/month',
      category: 'Analytics',
      technologies: ['Jupyter', 'MLflow', 'Kubeflow', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // API & Integration Services
    {
      title: 'API Development & Integration',
      description: 'Custom API development, third-party integrations, and microservices architecture.',
      icon: '🔌',
      price: 'Starting at $2,000/month',
      features: ['RESTful API design', 'GraphQL development', 'Third-party integrations', 'API documentation', 'Rate limiting', 'Security'],
      benefits: ['Improve system connectivity', 'Enable rapid development', 'Enhance scalability', 'Reduce integration costs'],
      marketPrice: '$3,500-7,500/month',
      category: 'Integration',
      technologies: ['Node.js', 'Python', 'GraphQL', 'Kong', 'Postman', 'Swagger'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Enterprise Service Bus (ESB)',
      description: 'Centralized integration platform for connecting disparate systems and applications.',
      icon: '🚌',
      price: 'Starting at $3,500/month',
      features: ['ESB implementation', 'Message routing', 'Data transformation', 'Protocol translation', 'Monitoring', 'Error handling'],
      benefits: ['Simplify integrations', 'Improve reliability', 'Reduce complexity', 'Enable reuse'],
      marketPrice: '$6,000-15,000/month',
      category: 'Integration',
      technologies: ['MuleSoft', 'IBM Integration Bus', 'Tibco', 'Apache Camel', 'Spring Integration', 'WSO2'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'API Gateway Management',
      description: 'Centralized API management with security, monitoring, and rate limiting capabilities.',
      icon: '🚪',
      price: 'Starting at $1,800/month',
      features: ['API gateway setup', 'Security policies', 'Rate limiting', 'Monitoring', 'Analytics', 'Developer portal'],
      benefits: ['Centralize API management', 'Enhance security', 'Improve performance', 'Enable monetization'],
      marketPrice: '$3,000-8,000/month',
      category: 'Integration',
      technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Google Cloud Endpoints', 'Apigee', '3scale'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Mobile & Web Development
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android.',
      icon: '📱',
      price: 'Starting at $3,500/month',
      features: ['Native iOS/Android apps', 'Cross-platform development', 'UI/UX design', 'App store deployment', 'Maintenance', 'Analytics'],
      benefits: ['Reach mobile users', 'Improve user engagement', 'Increase revenue', 'Enhance brand presence'],
      marketPrice: '$6,000-15,000/month',
      category: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Web Application Development',
      description: 'Custom web applications, e-commerce solutions, and enterprise web platforms.',
      icon: '💻',
      price: 'Starting at $2,500/month',
      features: ['Custom web apps', 'E-commerce solutions', 'CMS development', 'Responsive design', 'SEO optimization', 'Performance optimization'],
      benefits: ['Improve online presence', 'Increase conversions', 'Enhance user experience', 'Enable digital transformation'],
      marketPrice: '$4,000-10,000/month',
      category: 'Web Development',
      technologies: ['React', 'Vue.js', 'Node.js', 'PHP', 'WordPress', 'Drupal'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Progressive Web App (PWA) Development',
      description: 'Modern web applications with native app-like features and offline capabilities.',
      icon: '🌐',
      price: 'Starting at $2,800/month',
      features: ['PWA development', 'Offline functionality', 'Push notifications', 'App-like experience', 'Performance optimization', 'Cross-platform'],
      benefits: ['Improve user experience', 'Reduce development costs', 'Enable offline access', 'Increase engagement'],
      marketPrice: '$4,500-9,000/month',
      category: 'Web Development',
      technologies: ['React', 'Vue.js', 'Angular', 'Service Workers', 'Web App Manifest', 'PWA Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Enterprise Software
    {
      title: 'Enterprise Resource Planning (ERP)',
      description: 'ERP system implementation, customization, and integration for business process optimization.',
      icon: '📋',
      price: 'Starting at $5,000/month',
      features: ['ERP implementation', 'Custom modules', 'Data migration', 'User training', 'Ongoing support', 'Integration'],
      benefits: ['Streamline operations', 'Improve efficiency', 'Centralize data management', 'Enable reporting'],
      marketPrice: '$8,000-20,000/month',
      category: 'Enterprise Software',
      technologies: ['SAP', 'Oracle', 'Microsoft Dynamics', 'NetSuite', 'Salesforce', 'Workday'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Customer Relationship Management (CRM)',
      description: 'CRM system setup, customization, and integration to improve customer relationships and sales.',
      icon: '👥',
      price: 'Starting at $2,200/month',
      features: ['CRM implementation', 'Custom workflows', 'Integration services', 'Data migration', 'User training', 'Analytics'],
      benefits: ['Increase sales by 30%', 'Improve customer satisfaction', 'Streamline processes', 'Enable insights'],
      marketPrice: '$3,500-8,000/month',
      category: 'Enterprise Software',
      technologies: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho', 'Microsoft Dynamics', 'SugarCRM'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Enterprise Content Management',
      description: 'Document management, workflow automation, and content collaboration solutions.',
      icon: '📁',
      price: 'Starting at $1,800/month',
      features: ['Document management', 'Workflow automation', 'Version control', 'Search & retrieval', 'Compliance', 'Collaboration'],
      benefits: ['Improve productivity', 'Ensure compliance', 'Reduce paper usage', 'Enable collaboration'],
      marketPrice: '$3,000-7,000/month',
      category: 'Content Management',
      technologies: ['SharePoint', 'Confluence', 'Box', 'Dropbox Business', 'Google Workspace', 'Alfresco'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Identity & Access Management
    {
      title: 'Identity & Access Management',
      description: 'User authentication, authorization, and identity management solutions for enterprise security.',
      icon: '🔐',
      price: 'Starting at $2,500/month',
      features: ['Single sign-on (SSO)', 'Multi-factor authentication', 'User provisioning', 'Access governance', 'Audit logging', 'Compliance'],
      benefits: ['Enhance security', 'Simplify user management', 'Ensure compliance', 'Reduce IT overhead'],
      marketPrice: '$4,000-10,000/month',
      category: 'Security',
      technologies: ['Okta', 'Azure AD', 'Ping Identity', 'ForgeRock', 'Auth0', 'SailPoint'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Privileged Access Management (PAM)',
      description: 'Secure management of privileged accounts and credentials with monitoring and control.',
      icon: '👑',
      price: 'Starting at $3,000/month',
      features: ['Privileged account management', 'Session recording', 'Password vaulting', 'Access approval', 'Monitoring', 'Compliance'],
      benefits: ['Secure privileged access', 'Prevent insider threats', 'Ensure compliance', 'Audit privileged activities'],
      marketPrice: '$5,000-12,000/month',
      category: 'Security',
      technologies: ['CyberArk', 'BeyondTrust', 'Centrify', 'Thycotic', 'Hashicorp Vault', 'AWS Secrets Manager'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Monitoring & Observability
    {
      title: 'Enterprise Monitoring & Observability',
      description: 'Comprehensive monitoring solutions for applications, infrastructure, and business metrics.',
      icon: '📊',
      price: 'Starting at $2,000/month',
      features: ['Application monitoring', 'Infrastructure monitoring', 'Log management', 'Alerting', 'Dashboards', 'APM'],
      benefits: ['Prevent outages', 'Improve performance', 'Reduce MTTR', 'Enable proactive management'],
      marketPrice: '$3,500-8,000/month',
      category: 'Monitoring',
      technologies: ['Datadog', 'New Relic', 'Splunk', 'Elastic Stack', 'Prometheus', 'Grafana'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered IT Operations (AIOps)',
      description: 'Intelligent IT operations with AI-driven monitoring, alerting, and incident response.',
      icon: '🤖',
      price: 'Starting at $4,500/month',
      features: ['AI monitoring', 'Predictive alerting', 'Automated remediation', 'Root cause analysis', 'Capacity planning', 'Performance optimization'],
      benefits: ['Prevent incidents', 'Reduce MTTR', 'Optimize performance', 'Enable proactive management'],
      marketPrice: '$7,000-18,000/month',
      category: 'Monitoring',
      technologies: ['Moogsoft', 'BigPanda', 'PagerDuty', 'ServiceNow', 'Custom AI Models', 'Machine Learning'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Compliance & Governance
    {
      title: 'Compliance & Governance',
      description: 'IT compliance management, governance frameworks, and regulatory adherence services.',
      icon: '📜',
      price: 'Starting at $2,800/month',
      features: ['Compliance assessment', 'Policy development', 'Audit support', 'Risk management', 'Training', 'Reporting'],
      benefits: ['Ensure compliance', 'Reduce risks', 'Avoid penalties', 'Improve governance'],
      marketPrice: '$4,500-12,000/month',
      category: 'Compliance',
      technologies: ['GRC Tools', 'Risk Management', 'Audit Software', 'Policy Management', 'Compliance Frameworks'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Privacy & GDPR Compliance',
      description: 'Comprehensive data privacy management and GDPR compliance solutions.',
      icon: '🔒',
      price: 'Starting at $3,500/month',
      features: ['Privacy impact assessment', 'Data mapping', 'Consent management', 'Right to be forgotten', 'Data breach response', 'Compliance monitoring'],
      benefits: ['Ensure GDPR compliance', 'Protect customer data', 'Avoid fines', 'Build trust'],
      marketPrice: '$6,000-15,000/month',
      category: 'Compliance',
      technologies: ['OneTrust', 'TrustArc', 'Privacera', 'Collibra', 'Data Governance Tools', 'Privacy Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // IT Consulting & Strategy
    {
      title: 'IT Consulting & Strategy',
      description: 'Technology roadmap development, digital transformation planning, and IT strategy consulting.',
      icon: '💡',
      price: 'Starting at $200/hour',
      features: ['Technology assessment', 'Digital transformation', 'IT strategy planning', 'Vendor evaluation', 'ROI analysis', 'Implementation planning'],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Reduce risks', 'Accelerate transformation'],
      marketPrice: '$300-500/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Architecture Design', 'Risk Assessment', 'ROI Analysis', 'Technology Evaluation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation planning, technology assessment, and change management.',
      icon: '🚀',
      price: 'Starting at $300/hour',
      features: ['Digital strategy', 'Technology assessment', 'Change management', 'Process optimization', 'ROI analysis', 'Implementation support'],
      benefits: ['Modernize operations', 'Improve competitiveness', 'Increase efficiency', 'Enable innovation'],
      marketPrice: '$500-1,000/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Change Management', 'Process Optimization', 'ROI Analysis', 'Technology Roadmaps'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
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
                  ✉️ Get Free Assessment
                </a>
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

                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700 font-medium">{service.contactInfo}</p>
                      </div>

                      <div className="flex gap-2">
                        <a 
                          href="tel:+13024640950"
                          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                        >
                          Call Now
                        </a>
                        <a 
                          href="mailto:kleber@ziontechgroup.com"
                          className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                        >
                          Email Us
                        </a>
                      </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
            <div className="text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;