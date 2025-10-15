import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const MicroSAASSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Specialized Software Solutions | Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS solutions for specific business needs including expense tracking, customer satisfaction monitoring, task scheduling, and workflow automation." />
        <meta name="keywords" content="micro SaaS, software solutions, expense tracker, customer satisfaction, task scheduler, workflow automation, business tools" />
        <meta property="og:title" content="Micro SaaS Solutions - Specialized Software Solutions" />
        <meta property="og:description" content="Specialized micro SaaS solutions for specific business needs and workflows." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>
      
      <div className="min-h-screen animated-bg-dark">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="neon-glow-purple">Micro SaaS</span>
                <br />
                <span className="neon-glow-cyan">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Specialized software solutions for specific business needs and workflows. 
                Powerful tools designed to solve specific problems with precision and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="btn-neon hover-glow">
                  Get Started Today
                </Link>
                <Link to="/pricing" className="glass-dark border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 hover-glow">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </section>

        {/* Micro SaaS Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-purple mb-6">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized tools designed to solve specific business challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.map((service) => (
                <div key={service.id} className="card-futuristic hover-lift group">
                  <div className="text-center">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="text-sm font-semibold text-purple-400">Key Features:</div>
                      <div className="grid grid-cols-1 gap-2 text-xs text-gray-400">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-purple-400 mr-2">•</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-semibold text-green-400">Pricing:</div>
                      <div className="text-sm text-gray-300">
                        Starting at ${service.pricing.basic.toLocaleString()}/month
                      </div>
                      <div className="text-xs text-gray-500">
                        Market Price: {service.marketPrice}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-semibold text-cyan-400">Benefits:</div>
                      <div className="text-xs text-gray-400">
                        {service.benefits.slice(0, 2).join(' • ')}
                      </div>
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

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-cyan mb-6">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Focused solutions that deliver maximum value for specific business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Focused Solutions</h3>
                <p className="text-gray-300">Specialized tools designed for specific business problems</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Cost Effective</h3>
                <p className="text-gray-300">Affordable pricing with immediate ROI and value</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Quick Setup</h3>
                <p className="text-gray-300">Fast deployment and immediate productivity gains</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Easy Integration</h3>
                <p className="text-gray-300">Seamless integration with existing business systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-green mb-6">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ideal for businesses looking to solve specific operational challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Small Businesses</h3>
                <p className="text-gray-300">Affordable tools to streamline operations and increase efficiency</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Teams</h3>
                <p className="text-gray-300">Collaborative tools for better team coordination and productivity</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Freelancers</h3>
                <p className="text-gray-300">Essential tools for managing projects and client relationships</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Enterprises</h3>
                <p className="text-gray-300">Specialized solutions for specific departmental needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-pink mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable improvements across all our micro SaaS solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-purple mb-4">5+</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Hours Saved</h3>
                <p className="text-gray-300">Per week with our productivity tools</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-cyan mb-4">90%</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Error Reduction</h3>
                <p className="text-gray-300">Automated processes reduce human errors</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-green mb-4">40%</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Efficiency Gain</h3>
                <p className="text-gray-300">Improved workflow and process optimization</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-pink mb-4">24/7</div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">Availability</h3>
                <p className="text-gray-300">Always-on tools for continuous productivity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="card-futuristic">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-pink mb-6">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our micro SaaS solutions today and transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-neon hover-glow">
                  Start Free Trial
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

export default MicroSAASSolutionsPage;