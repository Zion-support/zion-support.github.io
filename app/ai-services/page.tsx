import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const AIServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content moderation, customer support, document analysis, financial forecasting, and sales prediction. Powered by cutting-edge machine learning technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, content moderation, customer support AI, document analysis, financial forecasting, sales prediction" />
        <meta property="og:title" content="AI Services - Advanced Artificial Intelligence Solutions" />
        <meta property="og:description" content="Comprehensive AI services powered by cutting-edge machine learning technology for modern businesses." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <div className="min-h-screen animated-bg-dark">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="neon-glow-cyan">AI Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Comprehensive artificial intelligence solutions powered by cutting-edge machine learning technology. 
                Transform your business with intelligent automation and advanced analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="btn-neon hover-glow">
                  Get Started Today
                </Link>
                <Link to="/pricing" className="glass-dark border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover-glow">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-cyan mb-6">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI services designed to solve real business challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.map((service) => (
                <div key={service.id} className="card-futuristic hover-lift group">
                  <div className="text-center">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="text-sm font-semibold text-cyan-400">Key Features:</div>
                      <div className="grid grid-cols-1 gap-2 text-xs text-gray-400">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-cyan-400 mr-2">•</span>
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
                      <div className="text-sm font-semibold text-purple-400">Benefits:</div>
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

        {/* AI Technology Stack */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-purple mb-6">
                AI Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on cutting-edge AI technologies and frameworks
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-sm font-bold text-cyan-400">Machine Learning</h3>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-sm font-bold text-cyan-400">NLP</h3>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-sm font-bold text-cyan-400">Computer Vision</h3>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-sm font-bold text-cyan-400">Predictive Analytics</h3>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-sm font-bold text-cyan-400">Deep Learning</h3>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-sm font-bold text-cyan-400">Real-time Processing</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-green mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are trusted across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-green-400 mb-4">E-commerce</h3>
                <p className="text-gray-300">Content moderation, customer support, and recommendation systems</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Financial Services</h3>
                <p className="text-gray-300">Fraud detection, risk assessment, and financial forecasting</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Healthcare</h3>
                <p className="text-gray-300">Document analysis, patient support, and diagnostic assistance</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-green-400 mb-4">SaaS</h3>
                <p className="text-gray-300">Customer support, user analytics, and workflow automation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-pink mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results and industry-leading technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-cyan mb-4">99.9%</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Accuracy</h3>
                <p className="text-gray-300">Industry-leading accuracy in AI predictions and classifications</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-purple mb-4">24/7</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Availability</h3>
                <p className="text-gray-300">Round-the-clock AI processing and monitoring</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-pink mb-4">80%</div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">Cost Reduction</h3>
                <p className="text-gray-300">Significant reduction in operational costs</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-green mb-4">10x</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Faster Processing</h3>
                <p className="text-gray-300">Dramatically faster than traditional methods</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="card-futuristic">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-pink mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our AI services today and transform your business with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-neon hover-glow">
                  Start Your AI Journey
                </Link>
                <Link to="/contact" className="glass-dark border border-pink-400 text-pink-400 px-8 py-3 rounded-lg hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 hover-glow">
                  Schedule Consultation
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

export default AIServicesPage;