import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Server, Shield, Cloud, Database, Code, Phone, Mail, ExternalLink } from 'lucide-react';

const ITServicesComprehensivePage: React.FC = () => {
  const itServices = [
    // Cloud & Infrastructure Services
    {
      title: 'Cloud Migration & Optimization',
      description: 'Complete cloud transformation with zero downtime migration, cost optimization, and security enhancement.',
      icon: '☁️',
      price: 'Starting at $2,500/month',
      features: ['Zero downtime migration', 'Cost optimization', 'Security enhancement', 'Scalability planning', '24/7 monitoring'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security posture'],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes'],
      link: 'https://ziontechgroup.com/cloud-migration',
      contact: 'kleber@ziontechgroup.com',
      popular: true
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration solutions.',
      icon: '🔄',
      price: 'Starting at $1,800/month',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Automated testing', 'Deployment automation', 'Monitoring & alerting'],
      benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity'],
      marketPrice: '$3,000-6,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible'],
      link: 'https://ziontechgroup.com/devops-cicd',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      icon: '🛡️',
      price: 'Starting at $2,200/month',
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security monitoring', 'Compliance management'],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce security incidents', 'Ensure compliance'],
      marketPrice: '$4,000-10,000/month',
      category: 'Cybersecurity',
      technologies: ['SIEM', 'EDR', 'Firewalls', 'VPN', 'Security Analytics'],
      link: 'https://ziontechgroup.com/cybersecurity-solutions',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Database Administration & Optimization',
      description: 'Expert database management, performance tuning, and data migration services.',
      icon: '🗄️',
      price: 'Starting at $1,500/month',
      features: ['Database optimization', 'Performance tuning', 'Data migration', 'Backup & recovery', 'Security hardening'],
      benefits: ['Improve query performance by 300%', 'Reduce downtime', 'Ensure data integrity'],
      marketPrice: '$2,500-5,000/month',
      category: 'Database Services',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle'],
      link: 'https://ziontechgroup.com/database-administration',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Network Infrastructure Design',
      description: 'Complete network architecture design, implementation, and optimization for enterprise environments.',
      icon: '🌐',
      price: 'Starting at $2,000/month',
      features: ['Network design', 'Implementation', 'Performance optimization', 'Security configuration', 'Monitoring setup'],
      benefits: ['Improve network performance', 'Enhance security', 'Reduce maintenance costs'],
      marketPrice: '$3,500-7,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'Network Monitoring'],
      link: 'https://ziontechgroup.com/network-infrastructure',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'IT Support & Helpdesk Services',
      description: '24/7 technical support, helpdesk management, and IT service desk solutions.',
      icon: '🎧',
      price: 'Starting at $1,200/month',
      features: ['24/7 support', 'Helpdesk management', 'Remote assistance', 'Asset management', 'User training'],
      benefits: ['Reduce IT support costs', 'Improve user satisfaction', 'Minimize downtime'],
      marketPrice: '$2,000-4,000/month',
      category: 'IT Support',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'Asset Management', 'Ticketing Systems'],
      link: 'https://ziontechgroup.com/it-support-helpdesk',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Software Development & Custom Solutions',
      description: 'Custom software development, API integration, and legacy system modernization.',
      icon: '💻',
      price: 'Starting at $3,000/month',
      features: ['Custom development', 'API integration', 'Legacy modernization', 'Code review', 'Testing & QA'],
      benefits: ['Streamline business processes', 'Improve efficiency', 'Reduce manual work'],
      marketPrice: '$5,000-15,000/month',
      category: 'Software Development',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'Microservices'],
      link: 'https://ziontechgroup.com/software-development',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description: 'Advanced data analytics, reporting, and business intelligence solutions.',
      icon: '📊',
      price: 'Starting at $2,800/month',
      features: ['Data warehousing', 'ETL processes', 'Dashboard creation', 'Predictive analytics', 'Report automation'],
      benefits: ['Make data-driven decisions', 'Improve business insights', 'Automate reporting'],
      marketPrice: '$4,500-9,000/month',
      category: 'Data Analytics',
      technologies: ['Tableau', 'Power BI', 'Python', 'SQL', 'Machine Learning'],
      link: 'https://ziontechgroup.com/data-analytics',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android.',
      icon: '📱',
      price: 'Starting at $2,500/month',
      features: ['Native development', 'Cross-platform apps', 'UI/UX design', 'App store deployment', 'Maintenance & updates'],
      benefits: ['Reach mobile users', 'Improve customer engagement', 'Increase accessibility'],
      marketPrice: '$4,000-12,000/month',
      category: 'Mobile Development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
      link: 'https://ziontechgroup.com/mobile-app-development',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'API Development & Integration',
      description: 'Custom API development, third-party integrations, and microservices architecture.',
      icon: '🔌',
      price: 'Starting at $1,800/month',
      features: ['RESTful APIs', 'GraphQL development', 'Third-party integrations', 'API documentation', 'Rate limiting'],
      benefits: ['Improve system connectivity', 'Enable third-party integrations', 'Enhance scalability'],
      marketPrice: '$3,000-6,000/month',
      category: 'API Development',
      technologies: ['Node.js', 'Python', 'GraphQL', 'Postman', 'Swagger'],
      link: 'https://ziontechgroup.com/api-development',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning, technology assessment, and digital transformation consulting.',
      icon: '💡',
      price: 'Starting at $2,000/month',
      features: ['Technology assessment', 'Strategic planning', 'Digital transformation', 'Vendor evaluation', 'Implementation support'],
      benefits: ['Optimize IT investments', 'Align technology with business goals', 'Reduce technology risks'],
      marketPrice: '$3,500-7,000/month',
      category: 'IT Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Vendor Management'],
      link: 'https://ziontechgroup.com/it-consulting',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning for business continuity.',
      icon: '💾',
      price: 'Starting at $1,500/month',
      features: ['Automated backups', 'Disaster recovery planning', 'Data replication', 'Recovery testing', 'Compliance support'],
      benefits: ['Minimize data loss', 'Ensure business continuity', 'Meet compliance requirements'],
      marketPrice: '$2,500-5,000/month',
      category: 'Backup & Recovery',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Disaster Recovery'],
      link: 'https://ziontechgroup.com/backup-disaster-recovery',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management, inventory tracking, and cost optimization.',
      icon: '📋',
      price: 'Starting at $1,000/month',
      features: ['Asset inventory', 'Lifecycle management', 'Cost tracking', 'License management', 'Disposal planning'],
      benefits: ['Reduce IT costs', 'Improve asset utilization', 'Ensure compliance'],
      marketPrice: '$1,800-3,500/month',
      category: 'Asset Management',
      technologies: ['ServiceNow', 'Lansweeper', 'Asset Management Tools', 'CMDB', 'License Management'],
      link: 'https://ziontechgroup.com/it-asset-management',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Virtualization & Containerization',
      description: 'Server virtualization, container orchestration, and cloud-native solutions.',
      icon: '📦',
      price: 'Starting at $2,200/month',
      features: ['VM management', 'Container orchestration', 'Resource optimization', 'Migration services', 'Monitoring'],
      benefits: ['Improve resource utilization', 'Reduce hardware costs', 'Enhance scalability'],
      marketPrice: '$3,500-7,000/month',
      category: 'Virtualization',
      technologies: ['VMware', 'Hyper-V', 'Docker', 'Kubernetes', 'OpenShift'],
      link: 'https://ziontechgroup.com/virtualization-containerization',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Compliance management, IT governance, and regulatory adherence services.',
      icon: '📜',
      price: 'Starting at $1,800/month',
      features: ['Compliance assessment', 'Policy development', 'Audit support', 'Risk management', 'Training programs'],
      benefits: ['Ensure compliance', 'Reduce audit risks', 'Improve governance'],
      marketPrice: '$3,000-6,000/month',
      category: 'Compliance',
      technologies: ['GRC Tools', 'Compliance Frameworks', 'Risk Management', 'Policy Management'],
      link: 'https://ziontechgroup.com/it-compliance-governance',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'IT Training & Knowledge Transfer',
      description: 'Comprehensive IT training programs and knowledge transfer for your team.',
      icon: '🎓',
      price: 'Starting at $1,200/month',
      features: ['Technical training', 'Certification programs', 'Knowledge transfer', 'Documentation', 'Mentoring'],
      benefits: ['Improve team skills', 'Reduce dependency', 'Increase productivity'],
      marketPrice: '$2,000-4,000/month',
      category: 'Training',
      technologies: ['Training Platforms', 'Certification Programs', 'Knowledge Management', 'Documentation Tools'],
      link: 'https://ziontechgroup.com/it-training',
      contact: 'kleber@ziontechgroup.com'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Comprehensive IT Services - Zion Tech Group</title>
        <meta name="description" content="Complete IT services including cloud migration, cybersecurity, DevOps, software development, and infrastructure management. Professional IT solutions for enterprise businesses." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, software development, IT consulting, infrastructure management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive IT Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Complete IT solutions for modern businesses - from cloud migration to cybersecurity
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
                Professional IT solutions delivered by certified experts with proven industry experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Experts</h3>
                <p className="text-gray-600">AWS, Azure, and Google Cloud certified professionals</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance for all solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud-First Approach</h3>
                <p className="text-gray-600">Modern cloud-native solutions for scalability and efficiency</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">99.9% uptime guarantee and 24/7 support</p>
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
                    <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-indigo-500' : ''}`}>
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
                          <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
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
                            <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
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

                      <div className="flex flex-col space-y-2">
                        <a 
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <a 
                          href={`mailto:${service.contact}?subject=Interest in ${service.title}`}
                          className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
                        >
                          Contact Sales
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Service Levels */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Levels
              </h2>
              <p className="text-xl text-gray-600">
                Choose the service level that best fits your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-2">$1,000-2,000/month</div>
                <p className="text-gray-600 mb-6">Essential IT services</p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Basic monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Business hours support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Monthly reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Standard security
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-lg p-8 text-center border-2 border-indigo-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-2">$2,000-5,000/month</div>
                <p className="text-gray-600 mb-6">Comprehensive IT solutions</p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    24/7 monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Extended support hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Weekly reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Advanced security
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-2">$5,000+/month</div>
                <p className="text-gray-600 mb-6">Full-scale IT management</p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Dedicated team
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    24/7 support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Daily reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Enterprise security
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Modernize Your IT Infrastructure?
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
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🕒 24/7 IT Support Available</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesComprehensivePage;