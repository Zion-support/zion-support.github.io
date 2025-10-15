import React from 'react';
import { Helmet } from 'react-helmet-async';
import { comprehensiveServicesData } from '../data/comprehensiveServicesData';

const PricingPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing - Zion Tech Group",
    "description": "Comprehensive pricing for AI and IT solutions, micro SaaS applications, and specialized services",
    "url": "https://ziontechgroup.com/pricing"
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for all our AI and IT solutions. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT solutions pricing, micro SaaS pricing, blockchain development pricing" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">Transparent</span><br />
              <span className="neon-text neon-blue">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your business needs. All our services come with transparent pricing and no hidden fees.
            </p>
          </div>
        </div>

        {/* AI Services Pricing */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-secondary">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI solutions with flexible pricing options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comprehensiveServicesData.aiServices.map((service) => (
                <div key={service.id} className="glass-card p-8 hover-lift">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.shortDescription}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-neon-green mb-2">{service.marketPrice}</div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-neon-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={`/${service.id}`} className="block w-full futuristic-btn text-center py-3">
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Micro SaaS Pricing */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-secondary">Micro SaaS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use SaaS applications with monthly pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comprehensiveServicesData.microSaas.map((service) => (
                <div key={service.id} className="dark-glass-card p-8 hover-lift">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.shortDescription}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-neon-green mb-2">{service.marketPrice}</div>
                    <div className="text-sm text-gray-400">Monthly subscription</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-neon-purple mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={`/${service.id}`} className="block w-full neon-btn text-center py-3">
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IT Solutions Pricing */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-secondary">IT Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services with project-based pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comprehensiveServicesData.itSolutions.map((service) => (
                <div key={service.id} className="glass-card p-8 hover-lift">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.shortDescription}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-neon-green mb-2">{service.marketPrice}</div>
                    <div className="text-sm text-gray-400">Project-based pricing</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-neon-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={`/${service.id}`} className="block w-full futuristic-btn text-center py-3">
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specialized Services Pricing */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-secondary">Specialized Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced technology solutions with custom pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 hover-lift">
                <div className="text-4xl mb-4">⛓️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Blockchain Development</h3>
                <p className="text-gray-300 mb-6">Custom blockchain solutions including smart contracts, DeFi applications, and cryptocurrency integration</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-neon-green mb-2">$10,000 - $200,000</div>
                  <div className="text-sm text-gray-400">Project-based pricing</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Smart Contract Development
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      DeFi Applications
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      NFT Platforms
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Token Development
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      DApp Development
                    </li>
                  </ul>
                </div>

                <a href="/blockchain-development" className="block w-full futuristic-btn text-center py-3">
                  Learn More
                </a>
              </div>

              <div className="dark-glass-card p-8 hover-lift">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-white mb-4">IoT Solutions</h3>
                <p className="text-gray-300 mb-6">Internet of Things solutions including device development, data collection, and analytics</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-neon-green mb-2">$5,000 - $100,000</div>
                  <div className="text-sm text-gray-400">Project-based pricing</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-purple mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      IoT Device Development
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-purple mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Cloud Integration
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-purple mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Data Analytics
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-purple mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Smart Manufacturing
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-purple mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Smart City Solutions
                    </li>
                  </ul>
                </div>

                <a href="/iot-solutions" className="block w-full neon-btn text-center py-3">
                  Learn More
                </a>
              </div>

              <div className="glass-card p-8 hover-lift">
                <div className="text-4xl mb-4">🥽</div>
                <h3 className="text-2xl font-bold text-white mb-4">AR/VR Development</h3>
                <p className="text-gray-300 mb-6">Augmented and Virtual Reality applications for immersive user experiences</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-neon-green mb-2">$8,000 - $150,000</div>
                  <div className="text-sm text-gray-400">Project-based pricing</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      VR Application Development
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      AR Mobile Apps
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Training Simulations
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Virtual Showrooms
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-neon-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Healthcare VR
                    </li>
                  </ul>
                </div>

                <a href="/ar-vr-development" className="block w-full futuristic-btn text-center py-3">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-accent">Ready to Get Started?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Contact us today for a custom quote tailored to your specific needs. 
                We offer flexible payment options and transparent pricing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="futuristic-btn text-lg px-10 py-4">
                  Get Custom Quote
                </a>
                <a href="/contact" className="neon-btn text-lg px-10 py-4">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;