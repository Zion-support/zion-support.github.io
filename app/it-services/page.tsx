import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'infrastructure-management',
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure management including servers, networks, and cloud resources.',
      features: [
        'Server administration & maintenance',
        'Network design & optimization',
        'Cloud migration & management',
        'Backup & disaster recovery',
        'Performance monitoring',
        'Capacity planning'
      ],
      pricing: 'Starting at $2,500/month',
      category: 'Infrastructure',
      icon: '🏗️',
      benefits: ['99.9% uptime guarantee', 'Reduced operational costs', 'Scalable solutions', 'Expert support']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats and data breaches.',
      features: [
        'Security assessment & auditing',
        'Firewall & intrusion detection',
        'Endpoint protection',
        'Email security & spam filtering',
        'Security awareness training',
        'Incident response planning'
      ],
      pricing: 'Starting at $3,500/month',
      category: 'Security',
      icon: '🔒',
      benefits: ['Advanced threat protection', 'Compliance assistance', '24/7 monitoring', 'Rapid incident response']
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud with our expert cloud architecture and management services.',
      features: [
        'Cloud strategy & planning',
        'AWS, Azure, GCP expertise',
        'Cloud migration services',
        'Cost optimization',
        'Security & compliance',
        'Multi-cloud management'
      ],
      pricing: 'Starting at $4,000/month',
      category: 'Cloud',
      icon: '☁️',
      benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', 'Global accessibility']
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance.',
      features: [
        'Network design & architecture',
        'WiFi optimization',
        'VPN & remote access',
        'Network security',
        'Performance monitoring',
        'Troubleshooting & support'
      ],
      pricing: 'Starting at $2,000/month',
      category: 'Networking',
      icon: '🌐',
      benefits: ['Faster network speeds', 'Improved reliability', 'Enhanced security', 'Better user experience']
    },
    {
      id: 'data-management',
      title: 'Data Management',
      description: 'Comprehensive data management solutions including storage, backup, and analytics.',
      features: [
        'Database design & optimization',
        'Data backup & recovery',
        'Data migration services',
        'Data analytics & reporting',
        'Data governance',
        'Compliance management'
      ],
      pricing: 'Starting at $3,000/month',
      category: 'Data',
      icon: '💾',
      benefits: ['Improved data security', 'Better data insights', 'Reduced storage costs', 'Compliance assurance']
    },
    {
      id: 'help-desk-support',
      title: 'Help Desk & Support',
      description: '24/7 technical support and help desk services to keep your team productive.',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'Software installation & updates',
        'Hardware troubleshooting',
        'User training & onboarding',
        'Ticket management system'
      ],
      pricing: 'Starting at $1,500/month',
      category: 'Support',
      icon: '🎧',
      benefits: ['Faster issue resolution', 'Reduced downtime', 'Improved productivity', 'Expert technical support']
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies and best practices.',
      features: [
        'Custom web applications',
        'E-commerce solutions',
        'Mobile-responsive design',
        'API development',
        'Performance optimization',
        'Maintenance & updates'
      ],
      pricing: 'Starting at $5,000/project',
      category: 'Development',
      icon: '💻',
      benefits: ['Custom solutions', 'Modern technology stack', 'SEO optimization', 'Ongoing support']
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Analytics integration'
      ],
      pricing: 'Starting at $8,000/project',
      category: 'Development',
      icon: '📱',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store presence', 'User engagement']
    },
    {
      id: 'database-management',
      title: 'Database Management',
      description: 'Expert database administration, optimization, and management services.',
      features: [
        'Database design & architecture',
        'Performance tuning',
        'Backup & recovery',
        'Security hardening',
        'Migration services',
        'Monitoring & maintenance'
      ],
      pricing: 'Starting at $2,500/month',
      category: 'Database',
      icon: '🗄️',
      benefits: ['Improved performance', 'Data security', 'Reduced downtime', 'Scalable solutions']
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and technical support. Expert IT consulting and implementation." />
        <meta name="keywords" content="IT services, infrastructure management, cybersecurity, cloud solutions, network management, technical support, IT consulting" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and technical support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Complete IT solutions to keep your business running smoothly. 
              From infrastructure management to cybersecurity, we provide expert IT services that drive efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get IT Consultation
              </a>
              <a href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Pricing
              </a>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              All IT Services
            </button>
            {categories.map(category => (
              <button key={category} className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {itServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-green-600">
                      {service.pricing}
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href="/contact"
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Get Started
                    </a>
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Specialized Services */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Specialized IT Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Tailored IT services for specific industries and business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/cloud-infrastructure" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">☁️</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
                  <p className="text-sm text-gray-600">Scalable cloud solutions</p>
                </div>
              </Link>
              
              <Link to="/5g-solutions" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">📶</div>
                  <h3 className="font-semibold text-gray-900 mb-2">5G Solutions</h3>
                  <p className="text-sm text-gray-600">Next-gen connectivity</p>
                </div>
              </Link>
              
              <Link to="/digital-transformation" className="group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🔄</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Digital Transformation</h3>
                  <p className="text-sm text-gray-600">Modernize your business</p>
                </div>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our IT experts assess your current setup and recommend solutions that improve efficiency, security, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Schedule IT Assessment
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;