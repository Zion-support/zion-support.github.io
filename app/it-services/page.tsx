import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Shield, Zap, Clock, Users, TrendingUp, Award, ArrowRight, Phone, Mail, MapPin, Server, Database, Cloud, Lock, Code, Wrench } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud. Zero-downtime migration and optimization.',
      icon: '☁️',
      price: '$2,999/month',
      originalPrice: '$7,500/month',
      features: [
        'Multi-cloud architecture design',
        'Zero-downtime migration',
        'Cost optimization (up to 40% savings)',
        'Auto-scaling and load balancing',
        'Disaster recovery planning',
        'Security hardening',
        '24/7 monitoring and support',
        'Performance optimization'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability by 300%',
        'Achieve 99.99% uptime',
        'Enhance security posture by 200%'
      ],
      category: 'Infrastructure',
      popular: true,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      deliveryTime: '2-4 weeks'
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and compliance management.',
      icon: '🔒',
      price: '$3,499/month',
      originalPrice: '$8,999/month',
      features: [
        '24/7 threat monitoring',
        'Vulnerability assessments',
        'Penetration testing',
        'Security awareness training',
        'Compliance automation (SOC2, GDPR, HIPAA)',
        'Incident response planning',
        'Security policy development',
        'Regular security audits'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 95%',
        'Achieve compliance 100% faster',
        'Save $500K+ in potential breach costs'
      ],
      category: 'Security',
      popular: true,
      technologies: ['SIEM', 'EDR', 'XDR', 'CrowdStrike', 'Splunk', 'Nessus'],
      deliveryTime: '1-2 weeks'
    },
    {
      title: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps transformation with automated pipelines, infrastructure as code, and continuous deployment.',
      icon: '🔄',
      price: '$2,799/month',
      originalPrice: '$6,999/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
        'Automated testing integration',
        'Deployment automation',
        'Monitoring and alerting',
        'GitOps workflows',
        'Performance optimization'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment failures by 90%',
        'Improve development velocity by 300%',
        'Cut operational costs by 50%'
      ],
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Ansible'],
      deliveryTime: '2-3 weeks'
    },
    {
      title: 'Database Administration & Optimization',
      description: 'Expert database management with performance tuning, backup strategies, and high availability setup.',
      icon: '🗄️',
      price: '$1,999/month',
      originalPrice: '$4,999/month',
      features: [
        'Database performance tuning',
        'Backup and recovery strategies',
        'High availability configuration',
        'Security hardening',
        'Capacity planning',
        'Query optimization',
        'Database migration',
        '24/7 monitoring'
      ],
      benefits: [
        'Improve query performance by 500%',
        'Reduce downtime by 99%',
        'Optimize storage costs by 30%',
        'Ensure data integrity 100%'
      ],
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      deliveryTime: '1-2 weeks'
    },
    {
      title: 'Network Infrastructure & Security',
      description: 'Complete network design, implementation, and security with SD-WAN, VPN, and advanced threat protection.',
      icon: '🌐',
      price: '$2,499/month',
      originalPrice: '$5,999/month',
      features: [
        'Network architecture design',
        'SD-WAN implementation',
        'VPN and remote access setup',
        'Firewall configuration',
        'Network monitoring',
        'Bandwidth optimization',
        'Load balancing',
        'Network security hardening'
      ],
      benefits: [
        'Improve network performance by 200%',
        'Reduce network downtime by 95%',
        'Enhance security by 300%',
        'Cut network costs by 25%'
      ],
      category: 'Networking',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Meraki', 'SD-WAN', 'VPN'],
      deliveryTime: '2-3 weeks'
    },
    {
      title: 'IT Support & Help Desk',
      description: '24/7 IT support with remote assistance, ticketing system, and proactive monitoring for all your IT needs.',
      icon: '🛠️',
      price: '$1,499/month',
      originalPrice: '$3,999/month',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'Ticketing system management',
        'Proactive monitoring',
        'Software installation and updates',
        'Hardware troubleshooting',
        'User training and onboarding',
        'IT asset management'
      ],
      benefits: [
        'Resolve issues 5x faster',
        'Reduce IT downtime by 80%',
        'Improve user satisfaction by 200%',
        'Save 60% on IT support costs'
      ],
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Zendesk', 'TeamViewer', 'SCCM', 'Active Directory'],
      deliveryTime: 'Immediate'
    },
    {
      title: 'API Development & Integration',
      description: 'Custom API development, third-party integrations, and API management for seamless system connectivity.',
      icon: '🔌',
      price: '$2,299/month',
      originalPrice: '$5,999/month',
      features: [
        'RESTful API development',
        'GraphQL implementation',
        'Third-party integrations',
        'API documentation',
        'Rate limiting and security',
        'API testing and monitoring',
        'Microservices architecture',
        'API versioning and management'
      ],
      benefits: [
        'Integrate systems 10x faster',
        'Reduce development time by 70%',
        'Improve system reliability by 90%',
        'Enable real-time data exchange'
      ],
      category: 'Integration',
      technologies: ['Node.js', 'Python', 'Java', 'GraphQL', 'Postman', 'Kong'],
      deliveryTime: '2-4 weeks'
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description: 'Advanced data analytics platform with real-time dashboards, reporting, and predictive analytics.',
      icon: '📊',
      price: '$2,799/month',
      originalPrice: '$6,999/month',
      features: [
        'Data warehouse design',
        'ETL pipeline development',
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reporting',
        'Data visualization',
        'Machine learning integration',
        'Data governance'
      ],
      benefits: [
        'Make data-driven decisions 5x faster',
        'Identify opportunities 3x quicker',
        'Improve business performance by 40%',
        'Reduce analysis time by 80%'
      ],
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'Looker', 'Apache Spark', 'Python', 'R'],
      deliveryTime: '3-4 weeks'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with modern frameworks and cloud integration.',
      icon: '📱',
      price: '$4,999/project',
      originalPrice: '$12,999/project',
      features: [
        'Native iOS and Android apps',
        'Cross-platform development',
        'UI/UX design',
        'Backend API integration',
        'Push notifications',
        'App store optimization',
        'Performance optimization',
        'Maintenance and updates'
      ],
      benefits: [
        'Launch apps 50% faster',
        'Reduce development costs by 60%',
        'Improve user engagement by 200%',
        'Achieve 4.5+ app store rating'
      ],
      category: 'Development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
      deliveryTime: '6-12 weeks'
    },
    {
      title: 'E-commerce Platform Development',
      description: 'Complete e-commerce solutions with payment processing, inventory management, and marketing automation.',
      icon: '🛒',
      price: '$5,999/project',
      originalPrice: '$15,999/project',
      features: [
        'Custom e-commerce platform',
        'Payment gateway integration',
        'Inventory management',
        'Order processing automation',
        'Customer portal',
        'Marketing automation',
        'Analytics and reporting',
        'Mobile optimization'
      ],
      benefits: [
        'Increase online sales by 300%',
        'Reduce cart abandonment by 50%',
        'Improve conversion rates by 200%',
        'Automate 80% of operations'
      ],
      category: 'E-commerce',
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'React'],
      deliveryTime: '8-16 weeks'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning, technology assessment, and digital transformation consulting for business growth.',
      icon: '💡',
      price: '$299/hour',
      originalPrice: '$599/hour',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation planning',
        'Vendor evaluation',
        'ROI analysis',
        'Implementation roadmap',
        'Change management',
        'Training and support'
      ],
      benefits: [
        'Align IT with business goals',
        'Reduce technology costs by 30%',
        'Improve efficiency by 200%',
        'Accelerate digital transformation'
      ],
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'ROI Analysis', 'Change Management'],
      deliveryTime: 'Flexible'
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions with automated recovery, data protection, and business continuity planning.',
      icon: '💾',
      price: '$1,299/month',
      originalPrice: '$3,499/month',
      features: [
        'Automated backup scheduling',
        'Cloud and on-premise backup',
        'Disaster recovery planning',
        'Data encryption',
        'Recovery testing',
        'Compliance reporting',
        '24/7 monitoring',
        'Rapid recovery procedures'
      ],
      benefits: [
        'Achieve 99.99% data availability',
        'Reduce recovery time by 90%',
        'Ensure business continuity',
        'Comply with data regulations'
      ],
      category: 'Backup',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Acronis', 'Druva'],
      deliveryTime: '1 week'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '50%', label: 'Cost Savings', icon: TrendingUp }
  ];

  const technologies = [
    { name: 'Cloud Platforms', items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'] },
    { name: 'Security', items: ['CrowdStrike', 'Splunk', 'Palo Alto', 'Fortinet'] },
    { name: 'DevOps', items: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'] },
    { name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
    { name: 'Monitoring', items: ['Datadog', 'New Relic', 'Prometheus', 'Grafana'] },
    { name: 'Development', items: ['React', 'Node.js', 'Python', 'Java'] }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and infrastructure management. Expert solutions starting from $1,299/month." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, infrastructure, database administration, network security" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Comprehensive IT services including cloud migration, cybersecurity, DevOps, and infrastructure management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Get IT Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  View All Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert IT solutions delivered by certified professionals with proven track record
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Experts</h3>
                <p className="text-gray-600">AWS, Azure, Cisco, and Microsoft certified professionals</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                <p className="text-gray-600">Deploy solutions in weeks, not months with our proven methodologies</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance for all your IT infrastructure</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within 6 months of implementation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Services
                </h2>
                <p className="text-xl text-gray-600">
                  Professional {category.toLowerCase()} solutions designed to optimize your IT infrastructure
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative border-2 ${service.popular ? 'border-indigo-500' : 'border-gray-200'}`}>
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-3xl font-bold text-indigo-600">{service.price}</span>
                          <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save {Math.round((1 - parseInt(service.price.replace('$', '').replace('/month', '').replace('/project', '').replace('/hour', '')) / parseInt(service.originalPrice.replace('$', '').replace('/month', '').replace('/project', '').replace('/hour', ''))) * 100)}% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-600 mb-2">
                          <span className="font-semibold">Delivery Time:</span> {service.deliveryTime}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 4 && (
                            <li className="text-sm text-indigo-600 font-medium">
                              +{service.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                          {service.technologies.length > 4 && (
                            <span className="text-xs text-indigo-600 font-medium">
                              +{service.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center">
                        Get IT Consultation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Technologies We Use */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Master
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge technologies and tools we use to deliver exceptional IT solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contact our IT experts for a free consultation and custom solution recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-indigo-200">
              <p className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;