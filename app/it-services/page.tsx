import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud.',
      features: ['Cloud migration planning', 'Infrastructure optimization', 'Cost management', 'Security implementation', '24/7 monitoring'],
      pricing: 'Starting at $3,500/month',
      icon: '☁️',
      link: '/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions including threat detection, compliance management, and incident response.',
      features: ['Threat monitoring', 'Vulnerability assessments', 'Compliance audits', 'Security training', 'Incident response'],
      pricing: 'Starting at $2,800/month',
      icon: '🔒',
      link: '/contact'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance and security.',
      features: ['Network design', 'Wireless solutions', 'VPN implementation', 'Performance optimization', 'Disaster recovery'],
      pricing: 'Starting at $1,200/month',
      icon: '🌐',
      link: '/network-infrastructure'
    },
    {
      title: 'Database Management',
      description: 'Expert database administration, optimization, and migration services for all major database platforms.',
      features: ['Database optimization', 'Migration services', 'Backup & recovery', 'Performance tuning', 'Security hardening'],
      pricing: 'Starting at $1,800/month',
      icon: '🗄️',
      link: '/database-management'
    },
    {
      title: 'Web & Mobile Development',
      description: 'Custom web and mobile applications built with modern technologies and best practices.',
      features: ['Custom web apps', 'Mobile applications', 'API development', 'UI/UX design', 'Performance optimization'],
      pricing: 'Starting at $4,500/project',
      icon: '💻',
      link: '/web-development'
    },
    {
      title: 'IT Support & Help Desk',
      description: '24/7 technical support and help desk services to keep your business running smoothly.',
      features: ['24/7 support', 'Remote assistance', 'Hardware maintenance', 'Software updates', 'User training'],
      pricing: 'Starting at $1,500/month',
      icon: '🛠️',
      link: '/contact'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'ETL processes', 'Real-time reporting'],
      pricing: 'Starting at $2,200/month',
      icon: '📊',
      link: '/data-analytics'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and systems.',
      features: ['Process automation', 'System integration', 'Workflow optimization', 'Change management', 'Training programs'],
      pricing: 'Starting at $5,000/month',
      icon: '🚀',
      link: '/digital-transformation'
    }
  ];

  const technologies = [
    'Microsoft Azure',
    'Amazon Web Services',
    'Google Cloud Platform',
    'Microsoft 365',
    'VMware',
    'Cisco Networking',
    'Fortinet Security',
    'Microsoft SQL Server',
    'Oracle Database',
    'MongoDB',
    'Docker & Kubernetes',
    'Terraform'
  ];

  const certifications = [
    'Microsoft Certified Solutions Expert (MCSE)',
    'AWS Certified Solutions Architect',
    'Cisco Certified Network Professional (CCNP)',
    'CompTIA Security+',
    'Certified Information Systems Security Professional (CISSP)',
    'ITIL Foundation Certification'
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and digital transformation. Expert IT solutions for modern businesses." />
        <meta name="keywords" content="it services, cloud infrastructure, cybersecurity, network management, database administration, web development, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
                Comprehensive IT solutions that keep your business secure, efficient, and competitive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Get Free IT Assessment
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end IT solutions designed to optimize your technology infrastructure and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Service Includes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.pricing}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      to={service.link}
                      className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Learn More
                    </Link>
                    <a 
                      href="https://ziontechgroup.com/contact"
                      className="flex-1 border border-green-600 text-green-600 text-center py-2 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Work With</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We leverage industry-leading technologies and platforms to deliver robust IT solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 text-sm">{tech}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certified IT Professionals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team holds industry-leading certifications to ensure you receive expert-level service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{cert}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional IT services with a focus on reliability, security, and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support to keep your systems running smoothly</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Security First</h3>
                <p className="text-gray-300">Comprehensive security measures to protect your business data and systems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
                <p className="text-gray-300">Quick response times and efficient problem resolution</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your IT Infrastructure?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Let our certified IT professionals help you build a robust, secure, and efficient technology foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Email kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-sm text-green-200">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-blue-300 hover:text-blue-200">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;