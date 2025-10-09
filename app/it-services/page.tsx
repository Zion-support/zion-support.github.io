import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, Server, Database, Network, Cloud, Code, Settings, Monitor, HardDrive, Wifi, Lock } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Cloud Infrastructure & DevOps
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure design, deployment, and management across AWS, Azure, and Google Cloud platforms.',
      icon: '☁️',
      price: '$2,500/month',
      features: [
        'Multi-cloud architecture design',
        'Auto-scaling and load balancing',
        'Disaster recovery planning',
        'Cost optimization strategies',
        '24/7 monitoring and support',
        'Security compliance (SOC2, HIPAA)',
        'Infrastructure as Code (IaC)',
        'Container orchestration (Kubernetes)'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve system reliability to 99.9%',
        'Scale resources automatically',
        'Ensure data security and compliance'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps transformation with automated CI/CD pipelines, infrastructure automation, and deployment strategies.',
      icon: '🔄',
      price: '$1,800/month',
      features: [
        'Automated CI/CD pipelines',
        'Infrastructure automation',
        'Code quality gates',
        'Automated testing integration',
        'Deployment strategies (Blue/Green, Canary)',
        'Monitoring and alerting setup',
        'Security scanning automation',
        'Performance optimization'
      ],
      benefits: [
        'Deploy 10x faster with confidence',
        'Reduce deployment failures by 90%',
        'Improve team productivity',
        'Ensure consistent environments'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Cloud & DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management & Optimization',
      description: 'Expert database design, optimization, migration, and management services for improved performance and reliability.',
      icon: '🗄️',
      price: '$1,200/month',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Data migration and consolidation',
        'Backup and recovery strategies',
        'Security hardening',
        'Monitoring and maintenance',
        'Query optimization',
        'Index management'
      ],
      benefits: [
        'Improve query performance by 300%',
        'Reduce database costs by 50%',
        'Ensure data integrity and security',
        'Minimize downtime and data loss'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Database Services',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'AWS RDS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Cybersecurity & Compliance
    {
      title: 'Cybersecurity Assessment & Implementation',
      description: 'Comprehensive cybersecurity solutions including vulnerability assessments, penetration testing, and security implementation.',
      icon: '🔒',
      price: '$3,500/month',
      features: [
        'Security vulnerability assessments',
        'Penetration testing',
        'Security architecture design',
        'Incident response planning',
        'Security awareness training',
        'Compliance auditing (SOC2, HIPAA, PCI)',
        'Threat monitoring and detection',
        'Security policy development'
      ],
      benefits: [
        'Protect against 99% of cyber threats',
        'Ensure regulatory compliance',
        'Reduce security incidents by 95%',
        'Build customer trust and confidence'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Cybersecurity',
      technologies: ['SIEM', 'EDR', 'Firewalls', 'VPN', 'MFA', 'Encryption', 'Security Scanners'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Security & Monitoring',
      description: 'Advanced network security solutions with real-time monitoring, threat detection, and automated response systems.',
      icon: '🛡️',
      price: '$2,200/month',
      features: [
        'Network security architecture',
        'Firewall configuration and management',
        'Intrusion detection and prevention',
        'Network monitoring and analytics',
        'VPN setup and management',
        'DDoS protection',
        'Network segmentation',
        'Security policy enforcement'
      ],
      benefits: [
        'Detect threats in real-time',
        'Prevent unauthorized access',
        'Optimize network performance',
        'Ensure business continuity'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Cybersecurity',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Splunk', 'Wireshark', 'Nmap'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Software Development & Integration
    {
      title: 'Custom Software Development',
      description: 'Full-stack custom software development services using modern technologies and best practices.',
      icon: '💻',
      price: '$2,800/month',
      features: [
        'Custom web applications',
        'Mobile app development (iOS/Android)',
        'API development and integration',
        'Legacy system modernization',
        'Microservices architecture',
        'Agile development methodology',
        'Code review and quality assurance',
        'Documentation and training'
      ],
      benefits: [
        'Get tailored solutions for your business',
        'Reduce development time by 50%',
        'Ensure scalability and maintainability',
        'Stay ahead of technology trends'
      ],
      marketPrice: '$4,500-9,000/month',
      category: 'Software Development',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'Swift', 'Kotlin', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'System Integration & API Development',
      description: 'Seamless integration of disparate systems with robust API development and data synchronization.',
      icon: '🔗',
      price: '$1,500/month',
      features: [
        'Third-party system integration',
        'RESTful and GraphQL API development',
        'Data synchronization and ETL',
        'Real-time data processing',
        'API documentation and testing',
        'Error handling and monitoring',
        'Rate limiting and security',
        'Performance optimization'
      ],
      benefits: [
        'Connect all your systems seamlessly',
        'Improve data accuracy and consistency',
        'Reduce manual data entry by 80%',
        'Enable real-time business insights'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'System Integration',
      technologies: ['REST APIs', 'GraphQL', 'Apache Kafka', 'RabbitMQ', 'Postman', 'Swagger'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // IT Support & Management
    {
      title: '24/7 IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 monitoring, helpdesk, and rapid issue resolution.',
      icon: '🆘',
      price: '$1,800/month',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'Hardware and software troubleshooting',
        'User account management',
        'Software installation and updates',
        'Network connectivity support',
        'Email and communication setup',
        'IT asset management'
      ],
      benefits: [
        'Minimize downtime and disruptions',
        'Improve employee productivity',
        'Reduce IT support costs by 60%',
        'Ensure consistent service quality'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'IT Support',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'Active Directory', 'Office 365'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Infrastructure Monitoring',
      description: 'Proactive monitoring and management of IT infrastructure with predictive analytics and automated alerting.',
      icon: '📊',
      price: '$1,000/month',
      features: [
        'Server and network monitoring',
        'Performance metrics tracking',
        'Predictive failure analysis',
        'Automated alerting and escalation',
        'Capacity planning and optimization',
        'Uptime reporting and analytics',
        'Cost tracking and optimization',
        'Custom dashboard creation'
      ],
      benefits: [
        'Prevent 90% of system failures',
        'Improve system performance by 40%',
        'Reduce maintenance costs by 50%',
        'Ensure maximum uptime and reliability'
      ],
      marketPrice: '$1,800-3,500/month',
      category: 'Monitoring',
      technologies: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'ELK Stack', 'New Relic'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Data & Analytics
    {
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics, reporting, and business intelligence solutions.',
      icon: '📈',
      price: '$2,200/month',
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Interactive dashboards and reports',
        'Predictive analytics and modeling',
        'Data visualization and storytelling',
        'Real-time analytics processing',
        'Data governance and quality',
        'Self-service analytics platform'
      ],
      benefits: [
        'Make data-driven decisions faster',
        'Identify new business opportunities',
        'Improve operational efficiency by 35%',
        'Gain competitive advantage through insights'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Data Analytics',
      technologies: ['Tableau', 'Power BI', 'Python', 'R', 'SQL', 'Apache Spark', 'Hadoop'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Migration & Modernization',
      description: 'Seamless data migration and legacy system modernization with zero downtime and data integrity assurance.',
      icon: '🔄',
      price: '$1,600/month',
      features: [
        'Legacy system assessment',
        'Data mapping and transformation',
        'Zero-downtime migration strategies',
        'Data validation and testing',
        'Performance optimization',
        'Backup and rollback planning',
        'User training and documentation',
        'Post-migration support'
      ],
      benefits: [
        'Modernize systems without disruption',
        'Improve data quality and consistency',
        'Reduce maintenance costs by 70%',
        'Enable new business capabilities'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Data Services',
      technologies: ['ETL Tools', 'Cloud Platforms', 'Database Systems', 'APIs', 'Data Validation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Mobile & Web Development
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with modern UI/UX design and seamless user experience.',
      icon: '📱',
      price: '$2,400/month',
      features: [
        'iOS and Android app development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design and prototyping',
        'App store optimization',
        'Push notifications and analytics',
        'Offline functionality',
        'Security and encryption',
        'Performance optimization'
      ],
      benefits: [
        'Reach customers on all devices',
        'Improve user engagement by 200%',
        'Increase brand visibility',
        'Generate new revenue streams'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Mobile Development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Web Development & E-commerce',
      description: 'Modern web applications and e-commerce solutions with responsive design and advanced functionality.',
      icon: '🌐',
      price: '$1,900/month',
      features: [
        'Responsive web design',
        'E-commerce platform development',
        'Content management systems',
        'Search engine optimization',
        'Payment gateway integration',
        'User authentication and security',
        'Performance optimization',
        'Analytics and tracking'
      ],
      benefits: [
        'Increase online presence and sales',
        'Improve user experience and conversion',
        'Scale with business growth',
        'Stay competitive in digital market'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Web Development',
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'PHP', 'WordPress', 'Shopify'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, software development, and system integration. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, software development, system integration, IT support, data analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Comprehensive IT services designed to modernize your infrastructure, enhance security, and drive business growth
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
                Expert IT solutions delivered by certified professionals with proven track records
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance for your critical data and infrastructure</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                <p className="text-gray-600">Get your IT solutions up and running quickly with minimal disruption</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost-Effective</h3>
                <p className="text-gray-600">Save up to 50% compared to market rates while getting superior service</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within 6 months of implementation</p>
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
                          Save up to 50% vs market rates
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

        {/* Pricing Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Competitive Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Save significantly compared to market rates while getting superior IT solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Average</h3>
                <div className="text-4xl font-bold text-gray-600 mb-4">$3,000-6,000</div>
                <p className="text-gray-600 mb-6">per month for similar services</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Basic IT support</li>
                  <li>• Limited customization</li>
                  <li>• Standard response times</li>
                  <li>• Generic solutions</li>
                </ul>
              </div>
              <div className="bg-blue-600 rounded-lg p-8 text-center text-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                    BEST VALUE
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
                <div className="text-4xl font-bold mb-4">$1,500-2,500</div>
                <p className="text-blue-100 mb-6">per month for premium services</p>
                <ul className="text-left space-y-2 text-blue-100">
                  <li>• Advanced IT solutions</li>
                  <li>• Full customization</li>
                  <li>• 24/7 expert support</li>
                  <li>• Industry-specific solutions</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-600 mb-4">$5,000+</div>
                <p className="text-gray-600 mb-6">per month for enterprise solutions</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Complex implementations</li>
                  <li>• High maintenance costs</li>
                  <li>• Long deployment times</li>
                  <li>• Vendor lock-in</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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