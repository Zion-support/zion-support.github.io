import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, Server, Database, Cloud, Code, Wrench, Lock } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Cloud Infrastructure & DevOps
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and management with 99.9% uptime guarantee.',
      icon: '☁️',
      price: 'Starting at $2,500/month',
      features: ['AWS/Azure/GCP setup', 'Auto-scaling configuration', 'Load balancing', 'Disaster recovery', '24/7 monitoring', 'Cost optimization'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Ensure high availability', 'Automate deployments'],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration solutions.',
      icon: '🔄',
      price: 'Starting at $1,800/month',
      features: ['CI/CD pipeline setup', 'Infrastructure as Code', 'Automated testing', 'Deployment automation', 'Monitoring & alerting', 'Version control'],
      benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity', 'Ensure code quality'],
      marketPrice: '$3,000-6,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Ansible', 'Chef', 'Puppet'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Microservices Architecture',
      description: 'Design and implement scalable microservices architecture for modern applications.',
      icon: '🏗️',
      price: 'Starting at $3,500/month',
      features: ['Service design', 'API gateway setup', 'Service mesh', 'Container orchestration', 'Monitoring & logging', 'Security implementation'],
      benefits: ['Improve scalability', 'Enable independent deployments', 'Reduce system complexity', 'Enhance fault tolerance'],
      marketPrice: '$5,500-12,000/month',
      category: 'Architecture',
      technologies: ['Docker', 'Kubernetes', 'Istio', 'Consul', 'Vault', 'Prometheus'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Cybersecurity & Compliance
    {
      title: 'Cybersecurity Assessment & Implementation',
      description: 'Comprehensive security assessment, vulnerability testing, and security implementation.',
      icon: '🛡️',
      price: 'Starting at $2,200/month',
      features: ['Security audit', 'Penetration testing', 'Vulnerability assessment', 'Security policy development', 'Incident response', 'Compliance monitoring'],
      benefits: ['Prevent 95% of cyber attacks', 'Ensure compliance', 'Reduce security risks', 'Protect sensitive data'],
      marketPrice: '$4,000-10,000/month',
      category: 'Cybersecurity',
      technologies: ['Nessus', 'Burp Suite', 'OWASP ZAP', 'Splunk', 'ELK Stack', 'SIEM'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Compliance & Risk Management',
      description: 'GDPR, HIPAA, SOX, and other regulatory compliance implementation and monitoring.',
      icon: '📋',
      price: 'Starting at $1,900/month',
      features: ['Compliance assessment', 'Policy development', 'Risk assessment', 'Audit preparation', 'Training programs', 'Ongoing monitoring'],
      benefits: ['Ensure regulatory compliance', 'Reduce audit risks', 'Protect business reputation', 'Avoid costly penalties'],
      marketPrice: '$3,500-8,000/month',
      category: 'Compliance',
      technologies: ['GRC Platforms', 'Risk Management Tools', 'Compliance Software', 'Audit Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure identity management, single sign-on, and access control solutions.',
      icon: '🔐',
      price: 'Starting at $1,600/month',
      features: ['SSO implementation', 'Multi-factor authentication', 'Role-based access control', 'Identity governance', 'Privileged access management', 'Audit logging'],
      benefits: ['Improve security posture', 'Simplify user management', 'Reduce access risks', 'Ensure compliance'],
      marketPrice: '$2,800-6,000/month',
      category: 'Identity Management',
      technologies: ['Okta', 'Azure AD', 'AWS IAM', 'Ping Identity', 'ForgeRock', 'CyberArk'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Database & Data Management
    {
      title: 'Database Design & Optimization',
      description: 'Database architecture design, performance optimization, and data migration services.',
      icon: '🗄️',
      price: 'Starting at $1,400/month',
      features: ['Database design', 'Performance tuning', 'Query optimization', 'Data migration', 'Backup & recovery', 'Monitoring & maintenance'],
      benefits: ['Improve performance by 60%', 'Reduce costs', 'Ensure data integrity', 'Optimize storage'],
      marketPrice: '$2,500-5,000/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Warehouse & Analytics',
      description: 'Enterprise data warehouse design, ETL processes, and business intelligence solutions.',
      icon: '📊',
      price: 'Starting at $2,800/month',
      features: ['Data warehouse design', 'ETL/ELT processes', 'Data modeling', 'Analytics dashboards', 'Data governance', 'Real-time processing'],
      benefits: ['Enable data-driven decisions', 'Improve business insights', 'Consolidate data sources', 'Enhance reporting'],
      marketPrice: '$4,500-10,000/month',
      category: 'Data Analytics',
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Apache Spark', 'Tableau', 'Power BI'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup strategies and disaster recovery planning for business continuity.',
      icon: '💾',
      price: 'Starting at $1,200/month',
      features: ['Backup strategy design', 'Automated backups', 'Disaster recovery planning', 'Testing & validation', 'Cloud backup solutions', 'Recovery time optimization'],
      benefits: ['Minimize data loss', 'Ensure business continuity', 'Reduce recovery time', 'Comply with regulations'],
      marketPrice: '$2,000-4,500/month',
      category: 'Backup & Recovery',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Network & Infrastructure
    {
      title: 'Network Design & Implementation',
      description: 'Enterprise network architecture, security implementation, and performance optimization.',
      icon: '🌐',
      price: 'Starting at $2,000/month',
      features: ['Network architecture', 'Security implementation', 'Performance optimization', 'Monitoring setup', 'Troubleshooting', 'Documentation'],
      benefits: ['Improve network performance', 'Enhance security', 'Reduce downtime', 'Optimize costs'],
      marketPrice: '$3,500-7,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'Aruba', 'Meraki'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Infrastructure Monitoring',
      description: '24/7 monitoring and alerting for servers, networks, and applications.',
      icon: '📈',
      price: 'Starting at $1,500/month',
      features: ['Server monitoring', 'Network monitoring', 'Application monitoring', 'Alert management', 'Performance analytics', 'Capacity planning'],
      benefits: ['Prevent downtime', 'Improve performance', 'Reduce costs', 'Ensure reliability'],
      marketPrice: '$2,500-5,000/month',
      category: 'Monitoring',
      technologies: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'Datadog', 'New Relic'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 IT support, helpdesk services, and technical assistance for your team.',
      icon: '🎧',
      price: 'Starting at $1,000/month',
      features: ['24/7 support', 'Remote assistance', 'Issue tracking', 'Knowledge base', 'User training', 'Hardware support'],
      benefits: ['Improve productivity', 'Reduce downtime', 'Enhance user experience', 'Lower support costs'],
      marketPrice: '$1,800-3,500/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira Service Desk', 'Zendesk', 'Freshservice', 'Remedy'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Software Development
    {
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your business requirements and processes.',
      icon: '💻',
      price: 'Starting at $3,000/month',
      features: ['Requirements analysis', 'Custom development', 'Testing & QA', 'Deployment', 'Maintenance', 'Documentation'],
      benefits: ['Meet specific needs', 'Improve efficiency', 'Gain competitive advantage', 'Reduce costs'],
      marketPrice: '$5,000-15,000/month',
      category: 'Software Development',
      technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'PHP'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'API Development & Integration',
      description: 'RESTful APIs, microservices, and third-party integrations for seamless data flow.',
      icon: '🔌',
      price: 'Starting at $1,800/month',
      features: ['API design', 'RESTful development', 'GraphQL APIs', 'Third-party integrations', 'API documentation', 'Testing & monitoring'],
      benefits: ['Enable system integration', 'Improve data flow', 'Enhance functionality', 'Reduce development time'],
      marketPrice: '$3,000-6,000/month',
      category: 'API Development',
      technologies: ['REST', 'GraphQL', 'Swagger', 'Postman', 'Kong', 'Apigee'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: '📱',
      price: 'Starting at $2,500/month',
      features: ['Native development', 'Cross-platform apps', 'UI/UX design', 'Testing & QA', 'App store deployment', 'Maintenance'],
      benefits: ['Reach mobile users', 'Improve user engagement', 'Enhance brand presence', 'Increase revenue'],
      marketPrice: '$4,000-10,000/month',
      category: 'Mobile Development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // E-commerce & Web Solutions
    {
      title: 'E-commerce Platform Development',
      description: 'Custom e-commerce solutions with payment integration, inventory management, and analytics.',
      icon: '🛒',
      price: 'Starting at $2,200/month',
      features: ['Platform development', 'Payment integration', 'Inventory management', 'Order processing', 'Analytics dashboard', 'Mobile optimization'],
      benefits: ['Increase online sales', 'Improve user experience', 'Streamline operations', 'Gain insights'],
      marketPrice: '$4,000-8,000/month',
      category: 'E-commerce',
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'Square'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Web Application Development',
      description: 'Modern web applications with responsive design, performance optimization, and security.',
      icon: '🌐',
      price: 'Starting at $1,600/month',
      features: ['Responsive design', 'Performance optimization', 'Security implementation', 'SEO optimization', 'Analytics integration', 'Maintenance'],
      benefits: ['Improve online presence', 'Enhance user experience', 'Increase conversions', 'Boost search rankings'],
      marketPrice: '$3,000-6,000/month',
      category: 'Web Development',
      technologies: ['React', 'Vue.js', 'Angular', 'Next.js', 'Laravel', 'Django'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Enterprise Solutions
    {
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Custom ERP solutions for business process automation and resource management.',
      icon: '🏢',
      price: 'Starting at $4,500/month',
      features: ['Process automation', 'Resource management', 'Financial modules', 'HR management', 'Inventory control', 'Reporting & analytics'],
      benefits: ['Streamline operations', 'Improve efficiency', 'Reduce costs', 'Enable growth'],
      marketPrice: '$8,000-20,000/month',
      category: 'Enterprise Solutions',
      technologies: ['SAP', 'Oracle', 'Microsoft Dynamics', 'NetSuite', 'Custom Development'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Customer Relationship Management (CRM)',
      description: 'Custom CRM solutions for sales, marketing, and customer service automation.',
      icon: '👥',
      price: 'Starting at $1,800/month',
      features: ['Lead management', 'Sales automation', 'Marketing automation', 'Customer service', 'Analytics & reporting', 'Integration capabilities'],
      benefits: ['Improve customer relationships', 'Increase sales', 'Enhance marketing', 'Streamline processes'],
      marketPrice: '$3,500-8,000/month',
      category: 'CRM',
      technologies: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Custom Development'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Business Process Automation',
      description: 'Workflow automation and process optimization to improve efficiency and reduce costs.',
      icon: '⚙️',
      price: 'Starting at $2,000/month',
      features: ['Process analysis', 'Workflow design', 'Automation implementation', 'Integration setup', 'Monitoring & optimization', 'User training'],
      benefits: ['Reduce manual work', 'Improve accuracy', 'Increase speed', 'Lower costs'],
      marketPrice: '$3,500-7,000/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate', 'Zapier'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, software development, and enterprise solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, software development, DevOps, database management, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive IT Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth
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
                  ✉️ Get Free Consultation
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
                Expert IT solutions delivered by certified professionals with proven industry experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance for your critical infrastructure</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                <p className="text-gray-600">Deploy solutions in weeks, not months with our agile approach</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost-Effective</h3>
                <p className="text-gray-600">Save up to 40% compared to market rates with our competitive pricing</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Average 300% ROI within 12 months for our enterprise clients</p>
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
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Professional {category.toLowerCase()} services designed to optimize your IT infrastructure
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

        {/* IT Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive IT expertise across all major technology domains
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Computing</h3>
                <p className="text-gray-600">AWS, Azure, GCP expertise with migration and optimization</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity</h3>
                <p className="text-gray-600">Comprehensive security solutions and compliance management</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <Code className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Development</h3>
                <p className="text-gray-600">Custom applications and modern web solutions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Database className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Management</h3>
                <p className="text-gray-600">Database design, optimization, and analytics solutions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Wrench className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DevOps</h3>
                <p className="text-gray-600">CI/CD pipelines, automation, and infrastructure as code</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <Server className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Infrastructure</h3>
                <p className="text-gray-600">Network design, monitoring, and enterprise solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our IT experts for a free consultation and custom solution design
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