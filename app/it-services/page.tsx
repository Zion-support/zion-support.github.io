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
    // Additional Comprehensive IT Services
    {
      title: 'Enterprise Application Integration',
      description: 'Seamless integration of enterprise applications, APIs, and data systems for unified operations.',
      icon: '🔗',
      price: 'Starting at $4,000/month',
      features: ['API development', 'Data integration', 'System migration', 'Real-time synchronization', 'Error handling'],
      benefits: ['Improve data flow by 80%', 'Reduce integration costs by 50%', 'Enhance system reliability'],
      marketPrice: '$6,000-15,000/month',
      category: 'Integration',
      technologies: ['MuleSoft', 'Zapier', 'Apache Kafka', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Advanced Network Security',
      description: 'Comprehensive network security solutions including firewalls, VPNs, and intrusion detection.',
      icon: '🔐',
      price: 'Starting at $3,500/month',
      features: ['Firewall management', 'VPN setup', 'Intrusion detection', 'Network monitoring', 'Security auditing'],
      benefits: ['Prevent 99% of network attacks', 'Ensure compliance', 'Reduce security incidents'],
      marketPrice: '$5,000-12,000/month',
      category: 'Network Security',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Check Point', 'Sophos']
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Complete ITSM solution with ticketing, change management, and service catalog.',
      icon: '🎫',
      price: 'Starting at $2,000/month',
      features: ['Service desk', 'Incident management', 'Change management', 'Asset tracking', 'Knowledge base'],
      benefits: ['Improve service delivery by 60%', 'Reduce resolution time by 40%', 'Enhance user satisfaction'],
      marketPrice: '$3,500-8,000/month',
      category: 'Service Management',
      technologies: ['ServiceNow', 'Jira Service Management', 'Freshservice', 'Zendesk', 'ManageEngine']
    },
    {
      title: 'Data Center Modernization',
      description: 'Complete data center transformation including hardware upgrades, virtualization, and optimization.',
      icon: '🏢',
      price: 'Starting at $8,000/month',
      features: ['Hardware assessment', 'Virtualization strategy', 'Migration planning', 'Performance optimization', 'Disaster recovery'],
      benefits: ['Improve performance by 50%', 'Reduce costs by 30%', 'Enhance reliability'],
      marketPrice: '$12,000-25,000/month',
      category: 'Data Center',
      technologies: ['VMware', 'Hyper-V', 'Docker', 'Kubernetes', 'OpenStack']
    },
    {
      title: 'Mobile Device Management (MDM)',
      description: 'Comprehensive mobile device management and security for enterprise mobile fleets.',
      icon: '📱',
      price: 'Starting at $1,500/month',
      features: ['Device enrollment', 'Policy management', 'App distribution', 'Security controls', 'Remote management'],
      benefits: ['Secure mobile devices', 'Reduce management overhead', 'Ensure compliance'],
      marketPrice: '$2,500-6,000/month',
      category: 'Mobile Management',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Citrix', 'Jamf']
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Comprehensive compliance management for SOX, GDPR, HIPAA, and other regulatory requirements.',
      icon: '📋',
      price: 'Starting at $3,000/month',
      features: ['Compliance assessment', 'Policy development', 'Audit preparation', 'Risk management', 'Training programs'],
      benefits: ['Ensure regulatory compliance', 'Reduce audit costs', 'Minimize compliance risks'],
      marketPrice: '$5,000-12,000/month',
      category: 'Compliance',
      technologies: ['GRC Tools', 'Risk Management', 'Audit Software', 'Policy Management', 'Training Platforms']
    },
    {
      title: 'Advanced Backup & Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated testing and monitoring.',
      icon: '💾',
      price: 'Starting at $2,500/month',
      features: ['Automated backups', 'Disaster recovery', 'Data replication', 'Recovery testing', 'Monitoring & alerting'],
      benefits: ['Ensure data protection', 'Minimize downtime', 'Meet RTO/RPO requirements'],
      marketPrice: '$4,000-10,000/month',
      category: 'Backup & Recovery',
      technologies: ['Veeam', 'Commvault', 'Rubrik', 'Cohesity', 'AWS Backup']
    },
    {
      title: 'IT Performance Monitoring',
      description: 'Advanced monitoring and analytics for IT infrastructure performance and user experience.',
      icon: '📊',
      price: 'Starting at $2,000/month',
      features: ['Infrastructure monitoring', 'Application performance', 'User experience tracking', 'Capacity planning', 'Alerting'],
      benefits: ['Prevent outages', 'Optimize performance', 'Improve user experience'],
      marketPrice: '$3,500-8,000/month',
      category: 'Monitoring',
      technologies: ['Datadog', 'New Relic', 'AppDynamics', 'Splunk', 'Prometheus']
    },
    {
      title: 'IT Training & Support',
      description: 'Comprehensive IT training programs and ongoing support for end users and IT staff.',
      icon: '🎓',
      price: 'Starting at $1,200/month',
      features: ['User training', 'IT staff development', 'Documentation', 'Help desk support', 'Knowledge transfer'],
      benefits: ['Improve user productivity', 'Reduce support tickets', 'Enhance IT skills'],
      marketPrice: '$2,000-5,000/month',
      category: 'Training & Support',
      technologies: ['Learning Management Systems', 'Video Training', 'Documentation Tools', 'Support Ticketing', 'Knowledge Base']
    },
    {
      title: 'IT Cost Optimization',
      description: 'Comprehensive IT cost analysis and optimization strategies to reduce expenses and improve ROI.',
      icon: '💰',
      price: 'Starting at $2,500/month',
      features: ['Cost analysis', 'License optimization', 'Vendor management', 'Budget planning', 'ROI tracking'],
      benefits: ['Reduce IT costs by 25%', 'Optimize spending', 'Improve ROI'],
      marketPrice: '$4,000-10,000/month',
      category: 'Cost Optimization',
      technologies: ['Cost Management Tools', 'License Management', 'Vendor Management', 'Financial Analytics', 'ROI Calculators']
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