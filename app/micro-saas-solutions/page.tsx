import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const MicroSaasSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Innovative Business Applications</title>
        <meta name="description" content="Discover our innovative micro SAAS solutions including task management, expense tracking, customer support, email marketing, and more. Affordable, scalable business applications." />
        <meta name="keywords" content="micro SAAS, business applications, task management, expense tracking, customer support, email marketing, inventory management, social media management" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text-pink cyber-font">
              MICRO SAAS SOLUTIONS
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Innovative, affordable, and scalable micro SAAS applications designed to streamline your business operations 
              and boost productivity. From task management to customer support, we have the perfect solution for your needs.
            </p>
          </div>

          {/* Featured Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {servicesData.microSaas.map((service) => (
              <div key={service.id} className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-center">{service.description}</p>
                
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold neon-text-purple">{service.marketPrice}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-neon-purple mr-2">✓</span>
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
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-800 text-neon-blue text-xs rounded-full">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <a 
                    href={`/${service.id}`} 
                    className="neon-button neon-button-purple w-full text-center"
                  >
                    Try Free Trial
                  </a>
                  <a 
                    href="/contact" 
                    className="neon-button w-full text-center"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Our Micro SAAS */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text">
              WHY CHOOSE OUR MICRO SAAS SOLUTIONS?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-6">💰</div>
                <h3 className="text-xl font-bold text-white mb-4">Affordable Pricing</h3>
                <p className="text-gray-300">Cost-effective solutions starting from $19/month with no hidden fees</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                <p className="text-gray-300">Get up and running in minutes with our intuitive setup process</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🔧</div>
                <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
                <p className="text-gray-300">Seamlessly integrate with your existing tools and workflows</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">📈</div>
                <h3 className="text-xl font-bold text-white mb-4">Scalable Growth</h3>
                <p className="text-gray-300">Grow with your business with flexible plans and features</p>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-purple">
              SIMPLE, TRANSPARENT PRICING
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="futuristic-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold neon-text mb-6">$19-99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ Core features included</li>
                  <li>✓ Basic support</li>
                  <li>✓ Standard integrations</li>
                  <li>✓ Mobile access</li>
                </ul>
                <a href="/contact" className="neon-button w-full">Get Started</a>
              </div>
              
              <div className="futuristic-card p-8 text-center border-2 border-neon-purple">
                <div className="text-neon-purple text-sm font-bold mb-2">MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold neon-text-purple mb-6">$99-299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ All Basic features</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ Priority support</li>
                  <li>✓ Custom integrations</li>
                  <li>✓ Team collaboration</li>
                </ul>
                <a href="/contact" className="neon-button neon-button-purple w-full">Get Started</a>
              </div>
              
              <div className="futuristic-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold neon-text-pink mb-6">$399-999<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ All Professional features</li>
                  <li>✓ Custom development</li>
                  <li>✓ 24/7 dedicated support</li>
                  <li>✓ White-label options</li>
                  <li>✓ Advanced security</li>
                </ul>
                <a href="/contact" className="neon-button w-full">Contact Sales</a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="futuristic-card p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic">
                READY TO BOOST YOUR PRODUCTIVITY?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of our micro SAAS solutions. 
                No credit card required, cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="neon-button px-12 py-4 text-lg font-bold glow-effect"
                >
                  Start Free Trial
                </a>
                <a 
                  href="/pricing" 
                  className="neon-button neon-button-purple px-12 py-4 text-lg font-bold glow-effect"
                >
                  View All Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasSolutionsPage;