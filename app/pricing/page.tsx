import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Transparent Pricing Plans | Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, micro SaaS solutions, and IT services. Choose the perfect plan for your business needs with flexible options." />
        <meta name="keywords" content="pricing, AI services pricing, micro SaaS pricing, IT services pricing, business plans, enterprise solutions" />
        <meta property="og:title" content="Pricing - Transparent Pricing Plans" />
        <meta property="og:description" content="Transparent pricing for AI services, micro SaaS solutions, and IT services with flexible options." />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <div className="min-h-screen animated-bg-dark">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="neon-glow-cyan">Transparent</span>
                <br />
                <span className="neon-glow-purple">Pricing</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Choose the perfect plan for your business needs. No hidden fees, no surprises. 
                Flexible pricing options for every budget and requirement.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="btn-neon hover-glow">
                  Get Started Today
                </Link>
                <Link to="/contact" className="glass-dark border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover-glow">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-cyan mb-6">
                AI Services Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI solutions with transparent, scalable pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.slice(0, 3).map((service) => (
                <div key={service.id} className="card-futuristic hover-lift">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.shortDescription}</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                          ${service.pricing.basic.toLocaleString()}
                        </div>
                        <div className="text-gray-400">Basic Plan</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">
                          ${service.pricing.pro.toLocaleString()}
                        </div>
                        <div className="text-gray-400">Pro Plan</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">
                          ${service.pricing.enterprise.toLocaleString()}
                        </div>
                        <div className="text-gray-400">Enterprise Plan</div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-6">
                      Market Price: {service.marketPrice}
                    </div>
                    
                    <Link to={service.link} className="btn-neon w-full">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-purple mb-6">
                Micro SaaS Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable, specialized tools for specific business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.slice(0, 3).map((service) => (
                <div key={service.id} className="card-futuristic hover-lift">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.shortDescription}</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                          ${service.pricing.basic.toLocaleString()}
                        </div>
                        <div className="text-gray-400">Basic Plan</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">
                          ${service.pricing.pro.toLocaleString()}
                        </div>
                        <div className="text-gray-400">Pro Plan</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">
                          ${service.pricing.enterprise.toLocaleString()}
                        </div>
                        <div className="text-gray-400">Enterprise Plan</div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-6">
                      Market Price: {service.marketPrice}
                    </div>
                    
                    <Link to={service.link} className="btn-neon w-full">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Solutions Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-green mb-6">
                IT Solutions Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services with enterprise-grade solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.slice(0, 3).map((service) => (
                <div key={service.id} className="card-futuristic hover-lift">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.shortDescription}</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                          ${service.pricing.basic.toLocaleString()}
                        </div>
                        <div className="text-gray-400">Basic Plan</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">
                          ${service.pricing.pro.toLocaleString()}
                        </div>
                        <div className="text-gray-400">Pro Plan</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">
                          ${service.pricing.enterprise.toLocaleString()}
                        </div>
                        <div className="text-gray-400">Enterprise Plan</div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-6">
                      Market Price: {service.marketPrice}
                    </div>
                    
                    <Link to={service.link} className="btn-neon w-full">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-pink mb-6">
                Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Custom solutions tailored to your enterprise needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-futuristic hover-lift">
                <div className="text-center">
                  <div className="text-5xl mb-6">🏢</div>
                  <h3 className="text-3xl font-bold text-pink-400 mb-4">Custom Development</h3>
                  <p className="text-gray-300 mb-6">
                    Bespoke solutions designed specifically for your business requirements and workflows.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-gray-400">• Custom AI models</div>
                    <div className="text-sm text-gray-400">• Enterprise integrations</div>
                    <div className="text-sm text-gray-400">• Dedicated support</div>
                    <div className="text-sm text-gray-400">• SLA guarantees</div>
                  </div>
                  <div className="text-2xl font-bold text-pink-400 mb-4">
                    Starting at $50,000
                  </div>
                  <Link to="/contact" className="btn-neon w-full">
                    Contact Sales
                  </Link>
                </div>
              </div>
              
              <div className="card-futuristic hover-lift">
                <div className="text-center">
                  <div className="text-5xl mb-6">🤝</div>
                  <h3 className="text-3xl font-bold text-pink-400 mb-4">Partnership Program</h3>
                  <p className="text-gray-300 mb-6">
                    Strategic partnerships with preferred pricing and co-development opportunities.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-gray-400">• Volume discounts</div>
                    <div className="text-sm text-gray-400">• Co-marketing opportunities</div>
                    <div className="text-sm text-gray-400">• Technical collaboration</div>
                    <div className="text-sm text-gray-400">• Priority support</div>
                  </div>
                  <div className="text-2xl font-bold text-pink-400 mb-4">
                    Custom Pricing
                  </div>
                  <Link to="/partnerships" className="btn-neon w-full">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-yellow mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Common questions about our pricing and services
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="card-futuristic">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Do you offer free trials?</h3>
                <p className="text-gray-300">
                  Yes! We offer 14-day free trials for most of our services. Contact us to get started with your trial.
                </p>
              </div>
              
              <div className="card-futuristic">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Can I change my plan anytime?</h3>
                <p className="text-gray-300">
                  Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              
              <div className="card-futuristic">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Do you offer custom pricing?</h3>
                <p className="text-gray-300">
                  Yes, we offer custom pricing for enterprise clients and large-scale implementations. Contact our sales team for details.
                </p>
              </div>
              
              <div className="card-futuristic">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">What payment methods do you accept?</h3>
                <p className="text-gray-300">
                  We accept all major credit cards, PayPal, and bank transfers. Enterprise clients can also pay via invoice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="card-futuristic">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-pink mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss your specific needs and find the perfect solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-neon hover-glow">
                  Contact Us Today
                </Link>
                <Link to="/contact" className="glass-dark border border-pink-400 text-pink-400 px-8 py-3 rounded-lg hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 hover-glow">
                  Schedule Demo
                </Link>
              </div>
              <div className="mt-8 text-gray-400">
                <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;