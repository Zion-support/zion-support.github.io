import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const ITServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile development, data analytics, and network solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, data analytics, network solutions, IT consulting" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text cyber-font">
              IT SERVICES & SOLUTIONS
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services and technology solutions designed to modernize your infrastructure, 
              enhance security, and drive digital transformation across your organization.
            </p>
          </div>

          {/* IT Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {servicesData.itSolutions.map((service) => (
              <div key={service.id} className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-center">{service.description}</p>
                
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold neon-text">{service.marketPrice}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-neon-blue mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-neon-green mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <a 
                    href={`/${service.id}`} 
                    className="neon-button w-full text-center"
                  >
                    Learn More
                  </a>
                  <a 
                    href="/contact" 
                    className="neon-button neon-button-purple w-full text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* IT Capabilities */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-purple">
              IT CAPABILITIES & TECHNOLOGIES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-white mb-3">Cloud Computing</h3>
                <p className="text-gray-300 text-sm">AWS, Azure, GCP cloud solutions and migration services</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300 text-sm">Advanced security solutions and threat protection</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
                <p className="text-gray-300 text-sm">Modern web applications and e-commerce solutions</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-3">Mobile Development</h3>
                <p className="text-gray-300 text-sm">iOS and Android native and cross-platform apps</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Data Analytics</h3>
                <p className="text-gray-300 text-sm">Business intelligence and data visualization</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-white mb-3">Network Solutions</h3>
                <p className="text-gray-300 text-sm">Network design, implementation, and management</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">🗄️</div>
                <h3 className="text-xl font-bold text-white mb-3">Database Management</h3>
                <p className="text-gray-300 text-sm">Database design, optimization, and administration</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
                <p className="text-gray-300 text-sm">Complete digital transformation strategies</p>
              </div>
            </div>
          </div>

          {/* Service Process */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-pink">
              OUR IT SERVICE PROCESS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
                <p className="text-gray-300">Comprehensive analysis of your current IT infrastructure and needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Planning</h3>
                <p className="text-gray-300">Strategic planning and solution design tailored to your requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">Professional implementation with minimal disruption to your business</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Support</h3>
                <p className="text-gray-300">Ongoing maintenance, monitoring, and 24/7 technical support</p>
              </div>
            </div>
          </div>

          {/* Why Choose Our IT Services */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text">
              WHY CHOOSE OUR IT SERVICES?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of experience in enterprise IT solutions</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid Response</h3>
                <p className="text-gray-300">Quick response times and 24/7 support for critical issues</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Industry-leading security practices and compliance standards</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">📈</div>
                <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
                <p className="text-gray-300">Future-proof solutions that grow with your business</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">💰</div>
                <h3 className="text-xl font-bold text-white mb-4">Cost Effective</h3>
                <p className="text-gray-300">Competitive pricing with transparent costs and no hidden fees</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">Cutting-edge technologies and best practices implementation</p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-purple">
              TECHNOLOGY STACK
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform',
                'React', 'Node.js', 'Python', 'Java', 'C#', 'PHP',
                'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch',
                'Linux', 'Windows Server', 'Nginx', 'Apache', 'Jenkins', 'GitLab'
              ].map((tech, index) => (
                <div key={index} className="futuristic-card p-4 text-center">
                  <div className="text-2xl font-bold text-white">{tech}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="futuristic-card p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic">
                READY TO MODERNIZE YOUR IT?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your IT needs and create a comprehensive solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="neon-button px-12 py-4 text-lg font-bold glow-effect"
                >
                  Get Free IT Assessment
                </a>
                <a 
                  href="/pricing" 
                  className="neon-button neon-button-purple px-12 py-4 text-lg font-bold glow-effect"
                >
                  View IT Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;