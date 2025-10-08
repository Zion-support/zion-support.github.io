import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Server, Shield, Cloud, Database, Network, Code, Monitor, Settings } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      title: 'Blockchain & Cryptocurrency Solutions',
      description: 'Blockchain development, smart contracts, cryptocurrency integration, and DeFi solutions.',
      icon: '⛓️',
      price: 'Starting at $5,000/month',
      features: ['Blockchain development', 'Smart contracts', 'DeFi protocols', 'NFT platforms', 'Cryptocurrency integration'],
      benefits: ['Enable decentralized solutions', 'Improve security', 'Reduce transaction costs'],
      marketPrice: '$8,000-20,000/month',
      category: 'Blockchain',
      technologies: ['Ethereum', 'Solidity', 'Web3', 'IPFS', 'MetaMask']
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things solutions, edge computing infrastructure, and connected device management.',
      icon: '🌐',
      price: 'Starting at $3,500/month',
      features: ['IoT device management', 'Edge computing', 'Sensor integration', 'Data processing', 'Real-time analytics'],
      benefits: ['Enable smart operations', 'Reduce latency', 'Improve efficiency'],
      marketPrice: '$6,000-15,000/month',
      category: 'IoT',
      technologies: ['AWS IoT', 'Azure IoT', 'MQTT', 'Kubernetes', 'Docker']
    },
    {
      title: 'Quantum Computing Services',
      description: 'Quantum computing solutions, quantum algorithms, and quantum-classical hybrid systems.',
      icon: '⚛️',
      price: 'Starting at $10,000/month',
      features: ['Quantum algorithm development', 'Quantum simulation', 'Quantum optimization', 'Hybrid systems', 'Quantum security'],
      benefits: ['Solve complex problems', 'Exponential speedup', 'Breakthrough innovations'],
      marketPrice: '$20,000-50,000/month',
      category: 'Quantum Computing',
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Q#', 'Quantum Hardware']
    },
    {
      title: '5G & Wireless Solutions',
      description: '5G network implementation, wireless infrastructure, and mobile connectivity solutions.',
      icon: '📶',
      price: 'Starting at $4,500/month',
      features: ['5G network design', 'Wireless infrastructure', 'Mobile optimization', 'Network slicing', 'Edge computing'],
      benefits: ['Ultra-fast connectivity', 'Low latency', 'Massive device support'],
      marketPrice: '$8,000-20,000/month',
      category: 'Wireless',
      technologies: ['5G NR', 'OpenRAN', 'MIMO', 'Beamforming', 'Network Slicing']
    },
    {
      title: 'AR/VR Development',
      description: 'Augmented and virtual reality applications, immersive experiences, and metaverse solutions.',
      icon: '🥽',
      price: 'Starting at $4,000/month',
      features: ['AR/VR applications', '3D modeling', 'Immersive experiences', 'Metaverse platforms', 'Haptic feedback'],
      benefits: ['Enhanced user experiences', 'Immersive training', 'Virtual collaboration'],
      marketPrice: '$7,000-18,000/month',
      category: 'AR/VR',
      technologies: ['Unity', 'Unreal Engine', 'WebXR', 'OpenXR', 'Oculus SDK']
    },
    {
      title: 'Digital Twin Solutions',
      description: 'Digital twin development, real-time simulation, and virtual modeling of physical systems.',
      icon: '🔄',
      price: 'Starting at $6,000/month',
      features: ['Digital twin creation', 'Real-time simulation', 'Predictive modeling', 'IoT integration', 'Analytics dashboard'],
      benefits: ['Optimize operations', 'Predict failures', 'Improve efficiency'],
      marketPrice: '$10,000-25,000/month',
      category: 'Digital Twin',
      technologies: ['Unity', 'Unreal Engine', 'IoT Platforms', 'Machine Learning', 'Cloud Computing']
    },
    {
      title: 'Low-Code/No-Code Platforms',
      description: 'Rapid application development platforms, workflow automation, and citizen development tools.',
      icon: '🔧',
      price: 'Starting at $2,000/month',
      features: ['Visual development', 'Workflow automation', 'Form builders', 'Database integration', 'API management'],
      benefits: ['Faster development', 'Reduce costs', 'Enable citizen developers'],
      marketPrice: '$3,500-8,000/month',
      category: 'Low-Code',
      technologies: ['OutSystems', 'Mendix', 'Power Platform', 'Bubble', 'Webflow']
    },
    {
      title: 'Microservices Architecture',
      description: 'Microservices design, containerization, service mesh, and distributed system architecture.',
      icon: '🔗',
      price: 'Starting at $3,000/month',
      features: ['Microservices design', 'Container orchestration', 'Service mesh', 'API gateway', 'Distributed tracing'],
      benefits: ['Improve scalability', 'Enable rapid deployment', 'Fault isolation'],
      marketPrice: '$5,000-12,000/month',
      category: 'Microservices',
      technologies: ['Kubernetes', 'Docker', 'Istio', 'Consul', 'Envoy']
    },
    {
      title: 'Serverless Computing',
      description: 'Serverless architecture, function-as-a-service, and event-driven computing solutions.',
      icon: '☁️',
      price: 'Starting at $1,500/month',
      features: ['Function development', 'Event processing', 'Auto-scaling', 'Pay-per-use', 'API integration'],
      benefits: ['Reduce costs', 'Automatic scaling', 'No server management'],
      marketPrice: '$2,500-6,000/month',
      category: 'Serverless',
      technologies: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Serverless Framework']
    },
    {
      title: 'Data Lake & Data Warehouse',
      description: 'Big data solutions, data lake architecture, and enterprise data warehouse implementation.',
      icon: '🏗️',
      price: 'Starting at $4,000/month',
      features: ['Data lake design', 'ETL/ELT pipelines', 'Data governance', 'Data cataloging', 'Analytics platform'],
      benefits: ['Centralize data', 'Improve analytics', 'Enable data-driven decisions'],
      marketPrice: '$7,000-18,000/month',
      category: 'Big Data',
      technologies: ['Hadoop', 'Spark', 'Snowflake', 'Databricks', 'Apache Kafka']
    },
    {
      title: 'API Management & Integration',
      description: 'API gateway, API lifecycle management, and enterprise integration platform services.',
      icon: '🔌',
      price: 'Starting at $2,500/month',
      features: ['API gateway', 'API documentation', 'Rate limiting', 'Authentication', 'Monitoring'],
      benefits: ['Secure APIs', 'Improve performance', 'Enable integration'],
      marketPrice: '$4,000-10,000/month',
      category: 'API Management',
      technologies: ['Kong', 'Apigee', 'AWS API Gateway', 'Azure API Management', 'MuleSoft']
    },
    {
      title: 'Content Management Systems',
      description: 'Headless CMS, content delivery networks, and digital experience platform solutions.',
      icon: '📝',
      price: 'Starting at $1,800/month',
      features: ['Headless CMS', 'Content delivery', 'Multi-channel publishing', 'Content personalization', 'SEO optimization'],
      benefits: ['Improve content management', 'Faster delivery', 'Better SEO'],
      marketPrice: '$3,000-8,000/month',
      category: 'CMS',
      technologies: ['Strapi', 'Contentful', 'Sanity', 'Cloudinary', 'CDN']
    },
    {
      title: 'Identity & Access Management',
      description: 'Single sign-on, multi-factor authentication, and identity governance solutions.',
      icon: '🔐',
      price: 'Starting at $2,200/month',
      features: ['SSO implementation', 'MFA setup', 'Identity governance', 'Privileged access', 'Compliance management'],
      benefits: ['Improve security', 'Simplify access', 'Ensure compliance'],
      marketPrice: '$4,000-10,000/month',
      category: 'IAM',
      technologies: ['Okta', 'Azure AD', 'Auth0', 'Ping Identity', 'SailPoint']
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
        <Header />
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {itServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow h-full flex flex-col">
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

                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-auto">
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
        
        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;