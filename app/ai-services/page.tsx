import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const AIServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our advanced AI services including machine learning, natural language processing, computer vision, and custom AI development solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI consulting, AI development, predictive analytics" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text cyber-font">
              AI SERVICES & SOLUTIONS
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business. Our comprehensive AI services 
              include machine learning, natural language processing, computer vision, and custom AI development solutions.
            </p>
          </div>

          {/* AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {servicesData.aiServices.map((service) => (
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

          {/* AI Capabilities */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-purple">
              AI CAPABILITIES & TECHNOLOGIES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-white mb-3">Machine Learning</h3>
                <p className="text-gray-300 text-sm">Advanced ML models for predictive analytics and pattern recognition</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-3">Natural Language Processing</h3>
                <p className="text-gray-300 text-sm">Text analysis, sentiment analysis, and language understanding</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">👁️</div>
                <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
                <p className="text-gray-300 text-sm">Image recognition, object detection, and visual analysis</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3">Deep Learning</h3>
                <p className="text-gray-300 text-sm">Neural networks and advanced AI architectures</p>
              </div>
            </div>
          </div>

          {/* AI Tools Showcase */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-pink">
              AI-POWERED TOOLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="futuristic-card p-6 text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-lg font-bold text-white mb-2">Content Generator</h3>
                <p className="text-gray-400 text-sm mb-4">AI-powered content creation for blogs, social media, and marketing</p>
                <a href="/ai-content-generator" className="neon-button w-full text-sm">Try Now</a>
              </div>
              <div className="futuristic-card p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-2">Sales Predictor</h3>
                <p className="text-gray-400 text-sm mb-4">Predict sales trends and optimize revenue with AI</p>
                <a href="/zion-ai-sales-predictor" className="neon-button w-full text-sm">Try Now</a>
              </div>
              <div className="futuristic-card p-6 text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-lg font-bold text-white mb-2">Workflow Automator</h3>
                <p className="text-gray-400 text-sm mb-4">Automate business processes with intelligent workflows</p>
                <a href="/zion-ai-workflow-automator" className="neon-button w-full text-sm">Try Now</a>
              </div>
              <div className="futuristic-card p-6 text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-2">Financial Forecaster</h3>
                <p className="text-gray-400 text-sm mb-4">AI-powered financial predictions and analysis</p>
                <a href="/zion-ai-financial-forecaster" className="neon-button w-full text-sm">Try Now</a>
              </div>
            </div>
          </div>

          {/* Why Choose Our AI Services */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text">
              WHY CHOOSE OUR AI SERVICES?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4">Custom Solutions</h3>
                <p className="text-gray-300">Tailored AI solutions designed specifically for your business needs and challenges</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4">Fast Implementation</h3>
                <p className="text-gray-300">Rapid deployment and integration with your existing systems and workflows</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4">Secure & Compliant</h3>
                <p className="text-gray-300">Enterprise-grade security and compliance with industry standards</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">📈</div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">Track record of delivering measurable business value and ROI</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🛠️</div>
                <h3 className="text-xl font-bold text-white mb-4">Ongoing Support</h3>
                <p className="text-gray-300">Continuous monitoring, optimization, and support for your AI solutions</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-xl font-bold text-white mb-4">Future-Ready</h3>
                <p className="text-gray-300">Cutting-edge AI technologies that keep you ahead of the competition</p>
              </div>
            </div>
          </div>

          {/* AI Process */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-purple">
              OUR AI DEVELOPMENT PROCESS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery & Analysis</h3>
                <p className="text-gray-300">Understand your business needs and data requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Model Development</h3>
                <p className="text-gray-300">Design and train custom AI models for your use case</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Testing & Validation</h3>
                <p className="text-gray-300">Rigorous testing to ensure accuracy and performance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Deployment & Support</h3>
                <p className="text-gray-300">Deploy to production with ongoing monitoring and support</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="futuristic-card p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic">
                READY TO TRANSFORM WITH AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how AI can revolutionize your business. Get a free consultation and custom AI strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="neon-button px-12 py-4 text-lg font-bold glow-effect"
                >
                  Get Free Consultation
                </a>
                <a 
                  href="/pricing" 
                  className="neon-button neon-button-purple px-12 py-4 text-lg font-bold glow-effect"
                >
                  View AI Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;