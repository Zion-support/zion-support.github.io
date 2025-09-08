import React from 'react';
import Layout from '../../components/Layout';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />, title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance standards to protect your business data.'
    }, {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization', description: 'Optimize your infrastructure for maximum performance and efficiency.'
    }, {
      icon: <Users className="w-8 h-8" />, title: 'Expert Team',
      description: 'Experienced IT professionals with deep expertise in enterprise solutions.'
    }, {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Support', description: '24/7 support and monitoring to ensure your systems run smoothly.'
    }
  ];

  const technologies = [
    { name: 'AWS', logo: '☁️' },
    { name: 'Azure', logo: '🔵' },
    { name: 'Google Cloud', logo: '🔷' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Kubernetes', logo: '⚙️' },
    { name: 'Terraform', logo: '🏗️' },
    { name: 'Jenkins', logo: '🔧' },
    { name: 'GitLab CI', logo: '🦊' },
    { name: 'Prometheus', logo: '📊' },
    { name: 'Grafana', logo: '📈' }
  ];

  return (
    <Layout 
      title="IT Services - Zion Tech Group" 
      description="Comprehensive IT services including cloud DevOps, cybersecurity, infrastructure management, and technical support for modern businesses."
    >
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">IT Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive IT services to keep your business running smoothly. From cloud infrastructure to cybersecurity, we provide the technical expertise you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get IT Consultation
              </a>
              <a 
                href="/pricing" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    <a 
                      href="/contact" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technologies We Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                  <div className="text-3xl mb-2">{tech.logo}</div>
                  <div className="font-semibold text-gray-900">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our IT Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-gray-600">24/7 support with rapid response times to keep your systems running smoothly.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Comprehensive security measures to protect your data and infrastructure.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-600">Infrastructure that grows with your business needs and requirements.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let our expert team help you build, secure, and maintain a robust IT infrastructure that supports your business growth.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  )};

export default ITServicesPage;