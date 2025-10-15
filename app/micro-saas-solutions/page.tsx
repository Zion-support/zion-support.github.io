import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = servicesData.microSaas;

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Specialized Business Software</title>
        <meta name="description" content="Discover our powerful micro SaaS solutions including Task Manager Pro, Smart Expense Tracker, Email Marketing Pro, and more. Streamline your business operations with our specialized software." />
        <meta name="keywords" content="micro SaaS, business software, task management, expense tracking, email marketing, workflow automation, inventory management" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6 floating-element">
              Micro SaaS Solutions
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powerful, specialized software solutions designed to streamline your business operations. 
              Each micro SaaS platform is crafted with precision to solve specific business challenges.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {microSaasServices.map((service, index) => (
              <div key={service.id} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-6 floating-element" style={{ animationDelay: `${index * 0.2}s` }}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold neon-text mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="text-3xl font-bold neon-text-green mb-2">
                      From ${service.pricing.basic}/mo
                    </div>
                    <div className="text-sm text-gray-400">
                      Pro: ${service.pricing.pro}/mo • Enterprise: ${service.pricing.enterprise}/mo
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="text-sm text-gray-300">
                          • {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={service.link} 
                    className="neon-button w-full text-center block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Our Micro SaaS Section */}
          <div className="cyber-card mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold neon-text-purple mb-6">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS platforms are built with cutting-edge technology and designed for maximum efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Lightning Fast</h3>
                <p className="text-gray-300">Optimized for speed and performance with instant loading times</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security with 99.9% uptime guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Mobile Ready</h3>
                <p className="text-gray-300">Fully responsive design that works on all devices</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">AI Powered</h3>
                <p className="text-gray-300">Intelligent automation and AI-driven insights</p>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="cyber-card mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold neon-text-green mb-6">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 24/7 support and regular updates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card text-center">
                <h3 className="text-2xl font-bold text-gray-300 mb-4">Basic</h3>
                <div className="text-4xl font-bold neon-text mb-6">$19-49</div>
                <div className="space-y-3 text-gray-300">
                  <div>• Core features included</div>
                  <div>• Email support</div>
                  <div>• Basic analytics</div>
                  <div>• 1 user account</div>
                </div>
              </div>
              <div className="cyber-card text-center border-2 border-cyan-400">
                <h3 className="text-2xl font-bold neon-text mb-4">Pro</h3>
                <div className="text-4xl font-bold neon-text mb-6">$79-199</div>
                <div className="space-y-3 text-gray-300">
                  <div>• All basic features</div>
                  <div>• Priority support</div>
                  <div>• Advanced analytics</div>
                  <div>• Up to 10 users</div>
                  <div>• API access</div>
                </div>
              </div>
              <div className="cyber-card text-center">
                <h3 className="text-2xl font-bold text-gray-300 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold neon-text mb-6">$199-499</div>
                <div className="space-y-3 text-gray-300">
                  <div>• All pro features</div>
                  <div>• 24/7 phone support</div>
                  <div>• Custom integrations</div>
                  <div>• Unlimited users</div>
                  <div>• White-label options</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold neon-text mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your specific needs and get a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="neon-button text-xl px-12 py-4">
                Get Started
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-xl font-semibold">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;