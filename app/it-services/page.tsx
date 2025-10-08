import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Server, Shield, Cloud, Database, Network, Code, Monitor, Settings, ArrowRight, Phone, Mail, Zap, Users, Globe } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Cloud & Infrastructure
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.',
      icon: '☁️',
      price: 'Starting at $2,500/month',
      originalPrice: '$4,000/month',
      features: ['Cloud migration strategy', 'Cost optimization', 'Security hardening', '24/7 monitoring', 'Disaster recovery'],
      benefits: ['Reduce cloud costs by 30%', 'Improve performance by 40%', 'Ensure 99.9% uptime'],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
      popular: true
    },
    {
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud environments for optimal performance and security.',
      icon: '🌐',
      price: 'Starting at $3,500/month',
      originalPrice: '$5,500/month',
      features: ['Hybrid architecture design', 'Data synchronization', 'Security integration', 'Performance optimization', 'Cost management'],
      benefits: ['Optimize costs and performance', 'Maintain data sovereignty', 'Ensure seamless operations'],
      marketPrice: '$5,500-12,000/month',
      category: 'Cloud Services',
      technologies: ['AWS Outposts', 'Azure Stack', 'VMware', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Cloud Cost Optimization',
      description: 'AI-powered cloud cost analysis and optimization to reduce expenses while maintaining performance.',
      icon: '💰',
      price: 'Starting at $1,500/month',
      originalPrice: '$2,500/month',
      features: ['Cost analysis', 'Resource optimization', 'Automated scaling', 'Reserved instance planning', 'Waste elimination'],
      benefits: ['Save 30-50% on cloud costs', 'Optimize resource utilization', 'Automate cost management'],
      marketPrice: '$2,500-5,000/month',
      category: 'Cloud Services',
      technologies: ['AWS Cost Explorer', 'Azure Cost Management', 'CloudHealth', 'Python', 'Machine Learning']
    },
    
    // Security Services
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      icon: '🔒',
      price: 'Starting at $3,000/month',
      originalPrice: '$5,000/month',
      features: ['Security audits', 'Penetration testing', 'Threat monitoring', 'Incident response', 'Compliance management'],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce security costs by 50%', 'Ensure compliance'],
      marketPrice: '$5,000-12,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Zero Trust']
    },
    {
      title: 'Zero Trust Security Implementation',
      description: 'Modern security architecture that verifies every user and device before granting access.',
      icon: '🛡️',
      price: 'Starting at $4,500/month',
      originalPrice: '$7,500/month',
      features: ['Identity verification', 'Device trust', 'Network segmentation', 'Continuous monitoring', 'Policy enforcement'],
      benefits: ['Eliminate security breaches', 'Reduce attack surface', 'Improve compliance'],
      marketPrice: '$7,500-15,000/month',
      category: 'Security',
      technologies: ['Okta', 'Microsoft Azure AD', 'Cisco', 'Palo Alto', 'Zscaler']
    },
    {
      title: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response services to protect your business around the clock.',
      icon: '👁️',
      price: 'Starting at $6,000/month',
      originalPrice: '$10,000/month',
      features: ['24/7 monitoring', 'Threat detection', 'Incident response', 'Forensic analysis', 'Compliance reporting'],
      benefits: ['Detect threats in real-time', 'Minimize damage from attacks', 'Ensure rapid response'],
      marketPrice: '$10,000-25,000/month',
      category: 'Security',
      technologies: ['Splunk', 'QRadar', 'CrowdStrike', 'SentinelOne', 'MDR']
    },
    
    // DevOps & Automation
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration services.',
      icon: '🔄',
      price: 'Starting at $2,000/month',
      originalPrice: '$3,500/month',
      features: ['CI/CD pipeline setup', 'Infrastructure automation', 'Monitoring & alerting', 'Version control', 'Testing automation'],
      benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity'],
      marketPrice: '$3,500-7,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus']
    },
    {
      title: 'Infrastructure as Code (IaC)',
      description: 'Automate infrastructure provisioning and management using code for consistency and reliability.',
      icon: '📝',
      price: 'Starting at $2,500/month',
      originalPrice: '$4,000/month',
      features: ['Terraform implementation', 'Ansible automation', 'Version control', 'Environment management', 'Cost optimization'],
      benefits: ['Eliminate manual errors', 'Ensure consistency', 'Reduce deployment time'],
      marketPrice: '$4,000-8,000/month',
      category: 'DevOps',
      technologies: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation', 'ARM Templates']
    },
    {
      title: 'Microservices Architecture',
      description: 'Design and implement microservices architecture for scalable and maintainable applications.',
      icon: '🧩',
      price: 'Starting at $5,000/month',
      originalPrice: '$8,000/month',
      features: ['Service design', 'API gateway setup', 'Service mesh', 'Monitoring', 'Load balancing'],
      benefits: ['Improve scalability', 'Enable independent deployments', 'Reduce complexity'],
      marketPrice: '$8,000-20,000/month',
      category: 'DevOps',
      technologies: ['Kubernetes', 'Istio', 'Docker', 'API Gateway', 'Service Mesh']
    },
    
    // Database Services
    {
      title: 'Database Administration',
      description: 'Database design, optimization, backup, and maintenance for SQL and NoSQL databases.',
      icon: '🗄️',
      price: 'Starting at $1,500/month',
      originalPrice: '$2,500/month',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services'],
      benefits: ['Improve query performance by 60%', 'Ensure data integrity', 'Reduce downtime'],
      marketPrice: '$2,500-5,000/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      title: 'Database Migration Services',
      description: 'Seamless migration of databases between platforms with zero downtime and data integrity.',
      icon: '📦',
      price: 'Starting at $3,000/project',
      originalPrice: '$5,000/project',
      features: ['Migration planning', 'Data validation', 'Zero downtime migration', 'Performance optimization', 'Testing'],
      benefits: ['Minimize downtime', 'Ensure data integrity', 'Optimize performance'],
      marketPrice: '$5,000-15,000/project',
      category: 'Database',
      technologies: ['AWS DMS', 'Azure Data Factory', 'Oracle GoldenGate', 'Custom Scripts', 'ETL Tools']
    },
    {
      title: 'Big Data Solutions',
      description: 'Data lake and data warehouse implementation for processing and analyzing large datasets.',
      icon: '📊',
      price: 'Starting at $4,500/month',
      originalPrice: '$7,500/month',
      features: ['Data lake design', 'ETL pipelines', 'Data warehousing', 'Analytics platform', 'Real-time processing'],
      benefits: ['Process large datasets', 'Enable data-driven decisions', 'Improve analytics'],
      marketPrice: '$7,500-20,000/month',
      category: 'Database',
      technologies: ['Hadoop', 'Spark', 'Kafka', 'Snowflake', 'BigQuery']
    },
    
    // Network Services
    {
      title: 'Network Infrastructure',
      description: 'Design, implementation, and management of enterprise network infrastructure and connectivity.',
      icon: '🌐',
      price: 'Starting at $2,000/month',
      originalPrice: '$3,500/month',
      features: ['Network design', 'Router configuration', 'Switch management', 'Wireless setup', 'Monitoring'],
      benefits: ['Improve network performance', 'Ensure reliability', 'Reduce downtime'],
      marketPrice: '$3,500-8,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Aruba', 'Fortinet', 'SD-WAN']
    },
    {
      title: 'SD-WAN Implementation',
      description: 'Software-defined wide area network solutions for improved performance and cost efficiency.',
      icon: '🔗',
      price: 'Starting at $3,500/month',
      originalPrice: '$6,000/month',
      features: ['SD-WAN design', 'Branch connectivity', 'Traffic optimization', 'Security integration', 'Monitoring'],
      benefits: ['Reduce WAN costs by 40%', 'Improve performance', 'Simplify management'],
      marketPrice: '$6,000-15,000/month',
      category: 'Networking',
      technologies: ['Cisco SD-WAN', 'VMware SD-WAN', 'Fortinet', 'Silver Peak', 'Versa']
    },
    {
      title: 'Network Security',
      description: 'Comprehensive network security solutions including firewalls, intrusion detection, and VPN.',
      icon: '🔐',
      price: 'Starting at $2,500/month',
      originalPrice: '$4,500/month',
      features: ['Firewall management', 'Intrusion detection', 'VPN setup', 'Network segmentation', 'Threat prevention'],
      benefits: ['Protect network perimeter', 'Prevent unauthorized access', 'Ensure compliance'],
      marketPrice: '$4,500-10,000/month',
      category: 'Networking',
      technologies: ['Palo Alto', 'Fortinet', 'Cisco ASA', 'Check Point', 'SonicWall']
    },
    
    // Application Services
    {
      title: 'Application Development',
      description: 'Custom web and mobile application development using modern technologies and best practices.',
      icon: '💻',
      price: 'Starting at $5,000/project',
      originalPrice: '$8,000/project',
      features: ['Custom development', 'UI/UX design', 'API development', 'Testing', 'Deployment'],
      benefits: ['Meet specific business needs', 'Improve user experience', 'Increase efficiency'],
      marketPrice: '$8,000-50,000/project',
      category: 'Development',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'Mobile Development']
    },
    {
      title: 'API Development & Integration',
      description: 'RESTful and GraphQL API development with third-party integrations and documentation.',
      icon: '🔌',
      price: 'Starting at $3,000/project',
      originalPrice: '$5,000/project',
      features: ['API design', 'REST/GraphQL development', 'Third-party integration', 'Documentation', 'Testing'],
      benefits: ['Enable system integration', 'Improve data flow', 'Reduce development time'],
      marketPrice: '$5,000-15,000/project',
      category: 'Development',
      technologies: ['Node.js', 'Python', 'GraphQL', 'Swagger', 'Postman']
    },
    {
      title: 'Legacy System Modernization',
      description: 'Modernize outdated systems with cloud-native solutions and microservices architecture.',
      icon: '🔄',
      price: 'Starting at $8,000/project',
      originalPrice: '$15,000/project',
      features: ['System analysis', 'Modernization planning', 'Cloud migration', 'API development', 'Data migration'],
      benefits: ['Improve performance', 'Reduce maintenance costs', 'Enable new features'],
      marketPrice: '$15,000-100,000/project',
      category: 'Development',
      technologies: ['Cloud Platforms', 'Microservices', 'API Gateway', 'Containerization', 'Modern Frameworks']
    },
    
    // Monitoring & Support
    {
      title: 'IT Monitoring & Management',
      description: 'Comprehensive monitoring of IT infrastructure with proactive issue detection and resolution.',
      icon: '📊',
      price: 'Starting at $1,500/month',
      originalPrice: '$2,500/month',
      features: ['Infrastructure monitoring', 'Performance tracking', 'Alert management', 'Capacity planning', 'Reporting'],
      benefits: ['Prevent downtime', 'Optimize performance', 'Reduce costs'],
      marketPrice: '$2,500-6,000/month',
      category: 'Monitoring',
      technologies: ['Prometheus', 'Grafana', 'Nagios', 'Zabbix', 'Datadog']
    },
    {
      title: '24/7 IT Support',
      description: 'Round-the-clock technical support and helpdesk services for your IT infrastructure.',
      icon: '🆘',
      price: 'Starting at $2,000/month',
      originalPrice: '$3,500/month',
      features: ['24/7 support', 'Helpdesk management', 'Remote assistance', 'Issue tracking', 'SLA compliance'],
      benefits: ['Minimize downtime', 'Improve user satisfaction', 'Reduce IT burden'],
      marketPrice: '$3,500-8,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Remote Tools', 'Monitoring', 'Ticketing Systems']
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning and consulting to align technology with business objectives.',
      icon: '💡',
      price: 'Starting at $200/hour',
      originalPrice: '$350/hour',
      features: ['IT strategy planning', 'Technology assessment', 'Roadmap development', 'Vendor evaluation', 'Implementation guidance'],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Reduce risks'],
      marketPrice: '$350-500/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Business Analysis', 'Project Management', 'Change Management']
    }
  ];

  const categories = [
    { name: 'All Services', count: itServices.length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
    { name: 'Networking', count: itServices.filter(s => s.category === 'Networking').length },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { name: 'Monitoring', count: itServices.filter(s => s.category === 'Monitoring').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database management, and more. Transform your technology infrastructure." />
        <meta name="keywords" content="it services, cloud infrastructure, cybersecurity, devops, database management, network services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive business growth. From cloud migration to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-blue-100">IT Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-blue-100">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive technology solutions designed to modernize your infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">Market price: {service.marketPrice}</div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-green-600 flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group for IT?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver enterprise-grade IT solutions with unmatched expertise and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Expertise</h3>
              <p className="text-gray-600">10+ years of experience in enterprise IT infrastructure and solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600">Bank-level security and compliance for all your IT infrastructure</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
              <p className="text-gray-600">Quick implementation with proven methodologies and automation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600">24/7 support from our expert technical team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Service Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology for delivering successful IT projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">Analyze your current IT infrastructure and identify improvement opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Develop a comprehensive strategy and roadmap for your IT transformation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Execute the plan with minimal disruption to your business operations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Provide ongoing support, monitoring, and optimization services</p>
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
            Let's discuss how our IT services can modernize your technology and drive business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Available 24/7 for consultations and emergency support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;