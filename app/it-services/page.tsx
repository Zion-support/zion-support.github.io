import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, Code, Cloud, Database, Server, Smartphone, Monitor, Wrench, Lock, Settings } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Cloud Infrastructure & DevOps
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and optimization for AWS, Azure, and Google Cloud.',
      icon: '☁️',
      price: 'Starting at $2,999/month',
      features: ['Multi-cloud setup', 'Infrastructure as Code', 'Auto-scaling', 'Cost optimization', 'Security hardening', '24/7 monitoring'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security', 'Increase uptime to 99.9%'],
      marketPrice: '$5,000-15,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated deployment pipelines with continuous integration, testing, and delivery for faster releases.',
      icon: '🔄',
      price: 'Starting at $1,999/month',
      features: ['CI/CD setup', 'Automated testing', 'Deployment automation', 'Infrastructure monitoring', 'Version control', 'Release management'],
      benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve code quality', 'Enable rapid iteration'],
      marketPrice: '$3,000-8,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Microservices Architecture',
      description: 'Modern microservices architecture design and implementation for scalable, maintainable applications.',
      icon: '🏗️',
      price: 'Starting at $4,999/month',
      features: ['Service design', 'API gateway setup', 'Service mesh', 'Container orchestration', 'Monitoring & logging', 'Security implementation'],
      benefits: ['Improve scalability', 'Enable team autonomy', 'Reduce deployment risks', 'Enhance maintainability'],
      marketPrice: '$8,000-25,000/month',
      category: 'Architecture',
      technologies: ['Docker', 'Kubernetes', 'Istio', 'Consul', 'Prometheus', 'Grafana'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Cybersecurity & Compliance
    {
      title: 'Cybersecurity Assessment & Implementation',
      description: 'Comprehensive security assessment, penetration testing, and security infrastructure implementation.',
      icon: '🔒',
      price: 'Starting at $3,999/month',
      features: ['Security audit', 'Penetration testing', 'Vulnerability assessment', 'Security policy development', 'Incident response', 'Compliance management'],
      benefits: ['Prevent 95% of cyber attacks', 'Ensure compliance', 'Reduce security risks', 'Protect sensitive data'],
      marketPrice: '$6,000-20,000/month',
      category: 'Cybersecurity',
      technologies: ['SIEM', 'EDR', 'Firewalls', 'VPN', 'Identity Management', 'Encryption'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Compliance & Risk Management',
      description: 'GDPR, HIPAA, SOX, and other regulatory compliance implementation and ongoing management.',
      icon: '📋',
      price: 'Starting at $2,499/month',
      features: ['Compliance assessment', 'Policy development', 'Risk analysis', 'Audit preparation', 'Training programs', 'Ongoing monitoring'],
      benefits: ['Ensure regulatory compliance', 'Reduce audit risks', 'Protect business reputation', 'Avoid costly penalties'],
      marketPrice: '$4,000-12,000/month',
      category: 'Compliance',
      technologies: ['GRC Platforms', 'Risk Management Tools', 'Compliance Software', 'Documentation Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Zero Trust Security Implementation',
      description: 'Modern zero trust security architecture with identity verification and network segmentation.',
      icon: '🛡️',
      price: 'Starting at $4,499/month',
      features: ['Identity verification', 'Network segmentation', 'Access controls', 'Device management', 'Threat detection', 'Policy enforcement'],
      benefits: ['Eliminate security perimeters', 'Reduce breach impact', 'Improve visibility', 'Enhance security posture'],
      marketPrice: '$7,000-20,000/month',
      category: 'Security',
      technologies: ['Identity Providers', 'Network Security', 'Endpoint Protection', 'SIEM', 'SASE'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Database & Data Management
    {
      title: 'Database Design & Optimization',
      description: 'Database architecture design, performance optimization, and migration services for all major databases.',
      icon: '🗄️',
      price: 'Starting at $1,999/month',
      features: ['Database design', 'Performance tuning', 'Migration services', 'Backup & recovery', 'Monitoring', 'Security hardening'],
      benefits: ['Improve performance by 300%', 'Reduce downtime', 'Ensure data integrity', 'Optimize costs'],
      marketPrice: '$3,000-10,000/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Warehouse & Analytics',
      description: 'Enterprise data warehouse design, ETL processes, and business intelligence implementation.',
      icon: '📊',
      price: 'Starting at $3,499/month',
      features: ['Data warehouse design', 'ETL development', 'Data modeling', 'Analytics dashboards', 'Report generation', 'Data governance'],
      benefits: ['Unlock data insights', 'Improve decision making', 'Centralize data management', 'Enable self-service analytics'],
      marketPrice: '$5,000-15,000/month',
      category: 'Data Analytics',
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Tableau', 'Power BI', 'Apache Spark'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Migration & Integration',
      description: 'Seamless data migration between systems with real-time integration and data synchronization.',
      icon: '🔄',
      price: 'Starting at $2,999/month',
      features: ['Data mapping', 'Migration planning', 'ETL development', 'Data validation', 'Real-time sync', 'Rollback procedures'],
      benefits: ['Zero data loss', 'Minimal downtime', 'Improved data quality', 'Seamless transitions'],
      marketPrice: '$4,000-12,000/month',
      category: 'Data Migration',
      technologies: ['Apache Kafka', 'Talend', 'Informatica', 'Custom ETL', 'APIs', 'Message Queues'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Web & Mobile Development
    {
      title: 'Enterprise Web Development',
      description: 'Custom web applications with modern frameworks, responsive design, and enterprise-grade security.',
      icon: '🌐',
      price: 'Starting at $4,999/project',
      features: ['Custom development', 'Responsive design', 'API integration', 'Security implementation', 'Performance optimization', 'Testing & QA'],
      benefits: ['Modern user experience', 'Scalable architecture', 'Mobile responsiveness', 'Enterprise security'],
      marketPrice: '$8,000-50,000/project',
      category: 'Web Development',
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'TypeScript'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      icon: '📱',
      price: 'Starting at $6,999/project',
      features: ['Native development', 'Cross-platform apps', 'UI/UX design', 'API integration', 'Push notifications', 'App store deployment'],
      benefits: ['Reach mobile users', 'Native performance', 'Cross-platform efficiency', 'Modern user experience'],
      marketPrice: '$10,000-100,000/project',
      category: 'Mobile Development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Progressive Web App (PWA)',
      description: 'Modern PWAs with offline functionality, push notifications, and app-like user experience.',
      icon: '⚡',
      price: 'Starting at $3,999/project',
      features: ['PWA development', 'Offline functionality', 'Push notifications', 'App-like experience', 'Performance optimization', 'Cross-platform compatibility'],
      benefits: ['App-like experience', 'Offline functionality', 'Faster loading', 'Better engagement'],
      marketPrice: '$6,000-25,000/project',
      category: 'PWA Development',
      technologies: ['Service Workers', 'Web App Manifest', 'React', 'Vue.js', 'Angular', 'PWA Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // API Development & Integration
    {
      title: 'API Development & Management',
      description: 'RESTful and GraphQL API development with comprehensive documentation and management platform.',
      icon: '🔌',
      price: 'Starting at $2,499/month',
      features: ['API design', 'RESTful APIs', 'GraphQL APIs', 'API documentation', 'Rate limiting', 'Authentication'],
      benefits: ['Enable integrations', 'Improve developer experience', 'Ensure API security', 'Scale efficiently'],
      marketPrice: '$4,000-12,000/month',
      category: 'API Development',
      technologies: ['Node.js', 'Python', 'GraphQL', 'Swagger', 'Postman', 'API Gateway'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Third-Party Integrations',
      description: 'Seamless integration with popular business tools and services like CRM, ERP, and marketing platforms.',
      icon: '🔗',
      price: 'Starting at $1,999/month',
      features: ['CRM integration', 'ERP integration', 'Marketing tools', 'Payment gateways', 'Social media APIs', 'Custom integrations'],
      benefits: ['Streamline workflows', 'Eliminate data silos', 'Improve efficiency', 'Reduce manual work'],
      marketPrice: '$3,000-10,000/month',
      category: 'Integrations',
      technologies: ['Zapier', 'MuleSoft', 'Custom APIs', 'Webhooks', 'REST APIs', 'GraphQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // IT Support & Management
    {
      title: '24/7 IT Support & Helpdesk',
      description: 'Comprehensive IT support with helpdesk services, remote assistance, and proactive monitoring.',
      icon: '🛠️',
      price: 'Starting at $1,499/month',
      features: ['24/7 support', 'Remote assistance', 'Helpdesk management', 'Proactive monitoring', 'Issue tracking', 'Knowledge base'],
      benefits: ['Minimize downtime', 'Quick issue resolution', 'Proactive maintenance', 'Improved productivity'],
      marketPrice: '$2,500-8,000/month',
      category: 'IT Support',
      technologies: ['Helpdesk Software', 'Remote Tools', 'Monitoring Systems', 'Ticketing Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure management including servers, networks, and end-user devices.',
      icon: '🖥️',
      price: 'Starting at $2,999/month',
      features: ['Server management', 'Network administration', 'Device management', 'Backup & recovery', 'Performance monitoring', 'Capacity planning'],
      benefits: ['Optimize performance', 'Reduce costs', 'Improve reliability', 'Ensure security'],
      marketPrice: '$4,000-15,000/month',
      category: 'Infrastructure',
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Network Equipment', 'Storage Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity.',
      icon: '🚨',
      price: 'Starting at $3,999/month',
      features: ['Disaster recovery planning', 'Backup strategies', 'Recovery testing', 'Business continuity', 'Risk assessment', 'Documentation'],
      benefits: ['Minimize downtime', 'Protect critical data', 'Ensure business continuity', 'Meet compliance requirements'],
      marketPrice: '$6,000-20,000/month',
      category: 'Disaster Recovery',
      technologies: ['Backup Solutions', 'Replication Tools', 'Cloud Storage', 'Recovery Software'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Digital Transformation
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation planning and implementation to modernize business processes.',
      icon: '🚀',
      price: 'Starting at $5,999/month',
      features: ['Digital strategy', 'Process automation', 'Technology assessment', 'Change management', 'Implementation planning', 'Training programs'],
      benefits: ['Modernize operations', 'Improve efficiency', 'Enhance customer experience', 'Gain competitive advantage'],
      marketPrice: '$10,000-50,000/month',
      category: 'Digital Transformation',
      technologies: ['RPA', 'Workflow Automation', 'Cloud Platforms', 'AI/ML Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Legacy System Modernization',
      description: 'Modernization of legacy systems with cloud migration, API development, and user interface updates.',
      icon: '🔄',
      price: 'Starting at $7,999/month',
      features: ['Legacy assessment', 'Cloud migration', 'API development', 'UI modernization', 'Data migration', 'Testing & validation'],
      benefits: ['Extend system life', 'Improve performance', 'Reduce maintenance costs', 'Enable new features'],
      marketPrice: '$15,000-100,000/month',
      category: 'Modernization',
      technologies: ['Cloud Platforms', 'API Development', 'Modern Frameworks', 'Migration Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Quality Assurance & Testing
    {
      title: 'Automated Testing & QA',
      description: 'Comprehensive testing services including automated testing, performance testing, and security testing.',
      icon: '🧪',
      price: 'Starting at $2,999/month',
      features: ['Test automation', 'Performance testing', 'Security testing', 'Load testing', 'API testing', 'Regression testing'],
      benefits: ['Improve quality', 'Reduce testing time', 'Catch bugs early', 'Ensure reliability'],
      marketPrice: '$4,000-15,000/month',
      category: 'Quality Assurance',
      technologies: ['Selenium', 'Cypress', 'Jest', 'Postman', 'JMeter', 'Custom Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Performance Optimization',
      description: 'Application and infrastructure performance optimization to improve speed and user experience.',
      icon: '⚡',
      price: 'Starting at $2,499/month',
      features: ['Performance analysis', 'Code optimization', 'Database tuning', 'Caching strategies', 'CDN implementation', 'Monitoring setup'],
      benefits: ['Improve speed by 50%', 'Enhance user experience', 'Reduce server costs', 'Increase capacity'],
      marketPrice: '$4,000-12,000/month',
      category: 'Performance',
      technologies: ['Profiling Tools', 'Caching Solutions', 'CDN', 'Database Optimization', 'Code Analysis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, development, and digital transformation solutions for enterprise businesses." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, digital transformation, DevOps" />
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
                Enterprise-grade IT solutions including cloud infrastructure, cybersecurity, development, and digital transformation
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
                Enterprise-grade IT solutions delivered by certified experts with proven track records
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
                <p className="text-gray-600">Deploy solutions in weeks, not months with our proven methodologies</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost-Effective</h3>
                <p className="text-gray-600">Save up to 40% compared to traditional IT service providers</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within 12 months of implementation</p>
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
                  Professional {category.toLowerCase()} services designed for enterprise requirements
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
                Comprehensive IT expertise across all major technologies and platforms
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Platforms</h3>
                <p className="text-gray-600">AWS, Azure, Google Cloud, and hybrid cloud solutions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity</h3>
                <p className="text-gray-600">Enterprise security, compliance, and risk management</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <Code className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
                <p className="text-gray-600">Web, mobile, and API development with modern frameworks</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Database className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Management</h3>
                <p className="text-gray-600">Database design, analytics, and data warehousing</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Settings className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DevOps</h3>
                <p className="text-gray-600">CI/CD, automation, and infrastructure as code</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation</h3>
                <p className="text-gray-600">Modernization, automation, and process optimization</p>
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
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;
