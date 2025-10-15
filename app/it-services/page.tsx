import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ITServicesPage: React.FC = () => {
  const itSolutions = servicesData.itSolutions;

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including web development, mobile apps, cloud infrastructure, cybersecurity, and data analytics. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="IT services, web development, mobile development, cloud infrastructure, cybersecurity, data analytics, 5G solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Complete technology solutions to power your business growth. From web development to cloud infrastructure, 
                we provide the IT expertise you need to succeed in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold">
                  Get IT Consultation
                </Link>
                <a href="tel:+13024640950" className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors text-lg font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your business needs and drive growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itSolutions.map((service) => (
                <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-purple-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-purple-600 mb-1">${service.pricing.basic.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>
                  
                  <Link 
                    to={`/${service.id}`} 
                    className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with the latest technologies and frameworks to deliver cutting-edge solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'Python', icon: '🐍' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Docker', icon: '🐳' },
                { name: 'Kubernetes', icon: '☸️' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'Redis', icon: '🔴' },
                { name: 'GraphQL', icon: '🔷' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'Next.js', icon: '▲' }
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business understanding to deliver solutions that drive real value
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified professionals with years of experience in enterprise IT solutions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Built-in security measures and compliance with industry standards</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Agile development methodology for faster time-to-market</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock technical support and maintenance services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Development Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">Understanding your requirements and business goals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
                <p className="text-gray-600">Creating detailed project roadmap and architecture</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Development</h3>
                <p className="text-gray-600">Building and testing your solution with regular updates</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment</h3>
                <p className="text-gray-600">Launching and maintaining your solution in production</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IT services can modernize your technology stack and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
                Get Free IT Consultation
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-lg font-semibold">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;