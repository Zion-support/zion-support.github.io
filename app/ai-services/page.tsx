import React from 'react';
import { Helmet } from 'react-helmet-async';
import { aiServices } from '../data/servicesData';
import { contactInfo } from '../data/contactData';

const AIServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Machine Learning, NLP & Computer Vision</title>
        <meta name="description" content="Advanced AI services including machine learning, natural language processing, computer vision, and AI automation. Expert AI consulting and implementation starting at $2,999/month." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, AI consulting, AI automation, artificial intelligence" />
        <link rel="canonical" href={`${contactInfo.domain}/ai-services`} />
      </Helmet>
      
      <div className="min-h-screen bg-dark-bg">
        {/* Hero Section */}
        <div className="relative py-20 bg-matrix">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              <span className="text-neon-pink">AI Services</span> & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced artificial intelligence solutions including machine learning, natural language processing, 
              computer vision, and AI automation to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="neon-button text-lg px-8 py-3 rounded-lg">
                Get Started
              </a>
              <a href={`tel:${contactInfo.mobile}`} className="glass-morphism text-white px-8 py-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 text-lg">
                Call {contactInfo.mobile}
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Our AI Services */}
        <div className="py-20 bg-dark-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Choose Our <span className="text-neon-pink">AI Services</span>?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our team of AI experts combines cutting-edge research with practical business applications 
                  to deliver AI solutions that drive real results and competitive advantage.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-pink bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-pink text-xl">🧠</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Expert AI Team</h3>
                      <p className="text-gray-300">PhD-level AI researchers and engineers with 10+ years of experience in machine learning and AI.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-blue bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-blue text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Proven Results</h3>
                      <p className="text-gray-300">96% accuracy in AI predictions, 40% average efficiency improvement, and 60% cost reduction for our clients.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-purple bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-purple text-xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Cutting-Edge Technology</h3>
                      <p className="text-gray-300">Latest AI frameworks, custom model development, and state-of-the-art algorithms.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-green bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-green text-xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Business-Focused</h3>
                      <p className="text-gray-300">AI solutions designed to solve real business problems and deliver measurable ROI.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-dark-surface-light p-8 rounded-xl border border-neon-pink border-opacity-30">
                <h3 className="text-2xl font-bold text-white mb-6">Our AI Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Machine Learning</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-neon-pink rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Natural Language Processing</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-neon-pink rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Computer Vision</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-neon-pink rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">AI Automation</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-neon-pink rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Data Analytics</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-neon-pink rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">AI Strategy</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-neon-pink rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Services */}
        <div className="py-20 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our <span className="text-neon-pink">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and drive innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={service.id} className="card-hover bg-dark-surface-light p-6 rounded-xl border border-neon-pink border-opacity-30">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.isPopular && (
                        <span className="bg-neon-pink text-dark-bg px-2 py-1 rounded text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <span className="text-neon-green mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-white font-semibold text-sm">Benefits:</h4>
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <span className="text-neon-green mr-2">✓</span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-neon-pink font-semibold">
                      From ${service.pricing.basic}/month
                    </div>
                    <div className="text-gray-400 text-xs">
                      {service.technologies.slice(0, 3).join(', ')}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a 
                      href={service.link} 
                      className="flex-1 bg-neon-pink text-white py-2 px-4 rounded-lg font-semibold text-center text-sm hover:bg-opacity-90 transition-colors"
                    >
                      Learn More
                    </a>
                    <a 
                      href="/contact" 
                      className="flex-1 border border-neon-pink text-neon-pink py-2 px-4 rounded-lg font-semibold text-center text-sm hover:bg-neon-pink hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Use Cases */}
        <div className="py-20 bg-dark-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-neon-blue">AI Use Cases</span> & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI can transform your business across different industries and use cases
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-surface-light p-6 rounded-xl border border-neon-blue border-opacity-30">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Predict customer behavior, sales trends, and business outcomes with advanced machine learning models.
                </p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Sales forecasting</li>
                  <li>• Customer churn prediction</li>
                  <li>• Demand planning</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
              
              <div className="bg-dark-surface-light p-6 rounded-xl border border-neon-purple border-opacity-30">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-3">Natural Language Processing</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Process and understand human language for chatbots, sentiment analysis, and content generation.
                </p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Chatbot development</li>
                  <li>• Sentiment analysis</li>
                  <li>• Content generation</li>
                  <li>• Language translation</li>
                </ul>
              </div>
              
              <div className="bg-dark-surface-light p-6 rounded-xl border border-neon-pink border-opacity-30">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Extract insights from images and videos for quality control, security, and automation.
                </p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Quality inspection</li>
                  <li>• Facial recognition</li>
                  <li>• Object detection</li>
                  <li>• Medical imaging</li>
                </ul>
              </div>
              
              <div className="bg-dark-surface-light p-6 rounded-xl border border-neon-green border-opacity-30">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-white mb-3">Process Automation</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Automate complex business processes using AI to improve efficiency and reduce errors.
                </p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Document processing</li>
                  <li>• Workflow automation</li>
                  <li>• Data entry automation</li>
                  <li>• Decision automation</li>
                </ul>
              </div>
              
              <div className="bg-dark-surface-light p-6 rounded-xl border border-neon-blue border-opacity-30">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Data Analytics</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Uncover hidden patterns and insights in your data with advanced AI-powered analytics.
                </p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Pattern recognition</li>
                  <li>• Anomaly detection</li>
                  <li>• Trend analysis</li>
                  <li>• Predictive modeling</li>
                </ul>
              </div>
              
              <div className="bg-dark-surface-light p-6 rounded-xl border border-neon-purple border-opacity-30">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3">AI Strategy</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Develop comprehensive AI strategies and roadmaps to maximize your AI investment ROI.
                </p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• AI readiness assessment</li>
                  <li>• Technology selection</li>
                  <li>• Implementation planning</li>
                  <li>• ROI optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="py-20 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-neon-green">Industries</span> We Transform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are trusted by businesses across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300 text-sm">
                  Medical imaging analysis, drug discovery, patient diagnosis, and treatment optimization
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-purple bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
                <p className="text-gray-300 text-sm">
                  Fraud detection, algorithmic trading, credit scoring, and risk management
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-pink bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">E-commerce</h3>
                <p className="text-gray-300 text-sm">
                  Recommendation systems, price optimization, inventory management, and customer service
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Manufacturing</h3>
                <p className="text-gray-300 text-sm">
                  Quality control, predictive maintenance, supply chain optimization, and process automation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="py-20 bg-dark-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-neon-green">Transparent</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the AI service plan that fits your business needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-dark-surface-light p-8 rounded-xl border border-gray-600">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold text-neon-pink mb-6">
                  $2,999<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Basic AI consultation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Standard models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Email support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Monthly reports
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Basic customization
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-neon-pink text-white py-3 rounded-lg font-semibold text-center block hover:bg-opacity-90 transition-colors">
                  Get Started
                </a>
              </div>
              
              <div className="bg-dark-surface-light p-8 rounded-xl border border-neon-pink relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-neon-pink text-dark-bg px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="text-4xl font-bold text-neon-pink mb-6">
                  $7,999<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Advanced AI solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Custom model development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Weekly reports
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Advanced customization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Performance optimization
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-neon-pink text-white py-3 rounded-lg font-semibold text-center block hover:bg-opacity-90 transition-colors">
                  Get Started
                </a>
              </div>
              
              <div className="bg-dark-surface-light p-8 rounded-xl border border-neon-blue">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-neon-blue mb-6">
                  $19,999<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Full AI strategy implementation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Custom AI development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Dedicated AI team
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Real-time monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Enterprise security
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    White-label solutions
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-neon-blue text-white py-3 rounded-lg font-semibold text-center block hover:bg-opacity-90 transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-accent">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              Contact our AI experts to discuss your specific needs and get a customized AI solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-dark-bg px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 text-lg"
              >
                Contact Us Today
              </a>
              <a 
                href={`tel:${contactInfo.mobile}`} 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-bg transition-all duration-300 text-lg"
              >
                Call {contactInfo.mobile}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;