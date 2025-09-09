import React, { useState } from 'react';
import Head from 'next/head';

const EnhancedServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimized'],
      price: 'Starting at $5,000',
      duration: '4-8 weeks'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile app development',
      features: ['React Native', 'iOS/Android', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting at $8,000',
      duration: '6-12 weeks'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      description: 'Complete online store setup and customization',
      features: ['Shopify/WooCommerce', 'Payment Integration', 'Inventory Management', 'Analytics'],
      price: 'Starting at $3,000',
      duration: '3-6 weeks'
    },
    {
      id: 'api-development',
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for your applications',
      features: ['Node.js/Python', 'Database Design', 'Authentication', 'Documentation'],
      price: 'Starting at $2,500',
      duration: '2-4 weeks'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment',
      features: ['AWS/Azure', 'Docker/Kubernetes', 'CI/CD Pipeline', 'Monitoring'],
      price: 'Starting at $1,500',
      duration: '2-3 weeks'
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and technical support',
      features: ['Bug Fixes', 'Updates', 'Security Patches', 'Performance Optimization'],
      price: 'Starting at $500/month',
      duration: 'Ongoing'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'Zion App delivered an exceptional web application that exceeded our expectations. The team was professional and delivered on time.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      content: 'Their mobile app development service helped us reach a wider audience. The app performance is outstanding.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Agency',
      content: 'The API development service was exactly what we needed. Clean, well-documented, and highly performant.',
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: '🔍'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize the solution',
      icon: '🎨'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Build your solution using best practices and modern technologies',
      icon: '⚙️'
    },
    {
      step: 4,
      title: 'Testing & Quality Assurance',
      description: 'Thorough testing to ensure everything works perfectly',
      icon: '🧪'
    },
    {
      step: 5,
      title: 'Deployment & Launch',
      description: 'Deploy your solution and provide launch support',
      icon: '🚀'
    },
    {
      step: 6,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep everything running smoothly',
      icon: '🔧'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Enhanced Services - Zion App</title>
        <meta name="description" content="Comprehensive web development and digital solutions services" />
        <meta name="keywords" content="web development, mobile apps, e-commerce, API development, cloud solutions" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Enhanced Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business grow and succeed in the digital world
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {['overview', 'services', 'process', 'testimonials', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Overview Section */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Our Services?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-4xl mb-3">🚀</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">Quick turnaround times without compromising quality</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-4xl mb-3">💎</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Premium Quality</h3>
                    <p className="text-gray-600">High-quality solutions built with modern technologies</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-4xl mb-3">🛡️</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Reliable Support</h3>
                    <p className="text-gray-600">24/7 support and maintenance for all projects</p>
                  </div>
                </div>
              </div>
            )}

            {/* Services Section */}
            {activeTab === 'services' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <div key={service.id} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, index) => (
                          <div key={index} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-blue-600 font-semibold">{service.price}</span>
                        <span className="text-gray-500">{service.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process Section */}
            {activeTab === 'process' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Process</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {processSteps.map((step) => (
                    <div key={step.step} className="bg-white p-6 rounded-lg border border-gray-200">
                      <div className="text-4xl mb-3">{step.icon}</div>
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials Section */}
            {activeTab === 'testimonials' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">What Our Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                      <div>
                        <p className="font-semibold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Section */}
            {activeTab === 'contact' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get Started Today</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-blue-600 mr-3">📧</span>
                        <span>contact@zionapp.com</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-blue-600 mr-3">📞</span>
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-blue-600 mr-3">📍</span>
                        <span>123 Tech Street, Digital City, DC 12345</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Ready to Start?</h3>
                    <p className="text-gray-600 mb-4">
                      Contact us today for a free consultation and project estimate.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Get Free Quote
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServices;