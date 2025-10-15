import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const AIServicesPage: React.FC = () => {
  const aiServices = servicesData.aiServices;

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, AI content generation, and data analytics. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, AI development, AI consulting, artificial intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6 floating-element">
              AI Services
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business. 
              Our comprehensive AI services range from custom development to ready-to-use AI platforms.
            </p>
          </div>

          {/* AI Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={service.id} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="text-6xl floating-element" style={{ animationDelay: `${index * 0.3}s` }}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold neon-text mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.slice(0, 6).map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-gray-400 flex items-center">
                          <span className="text-cyan-400 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold neon-text-green mb-2">
                        Starting at ${service.pricing.basic.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">
                        Pro: ${service.pricing.pro.toLocaleString()} • Enterprise: ${service.pricing.enterprise.toLocaleString()}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Benefits</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.benefits.map((benefit, benefitIndex) => (
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
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Capabilities Section */}
          <div className="cyber-card mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold neon-text-purple mb-6">
                Our AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest AI technologies to deliver cutting-edge solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Machine Learning</h3>
                <p className="text-gray-300">Advanced ML models for predictive analytics and pattern recognition</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Natural Language Processing</h3>
                <p className="text-gray-300">Text analysis, sentiment detection, and language understanding</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">👁️</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Computer Vision</h3>
                <p className="text-gray-300">Image recognition, object detection, and visual analysis</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Automation</h3>
                <p className="text-gray-300">Intelligent process automation and workflow optimization</p>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="cyber-card mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold neon-text-green mb-6">
                AI Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI can transform your industry and business processes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏪</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">E-commerce</h3>
                <div className="space-y-2 text-gray-300">
                  <div>• Product recommendations</div>
                  <div>• Price optimization</div>
                  <div>• Inventory management</div>
                  <div>• Customer service chatbots</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Healthcare</h3>
                <div className="space-y-2 text-gray-300">
                  <div>• Medical image analysis</div>
                  <div>• Drug discovery</div>
                  <div>• Patient monitoring</div>
                  <div>• Diagnostic assistance</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏦</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Finance</h3>
                <div className="space-y-2 text-gray-300">
                  <div>• Fraud detection</div>
                  <div>• Risk assessment</div>
                  <div>• Algorithmic trading</div>
                  <div>• Credit scoring</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Manufacturing</h3>
                <div className="space-y-2 text-gray-300">
                  <div>• Predictive maintenance</div>
                  <div>• Quality control</div>
                  <div>• Supply chain optimization</div>
                  <div>• Process automation</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Marketing</h3>
                <div className="space-y-2 text-gray-300">
                  <div>• Content generation</div>
                  <div>• Customer segmentation</div>
                  <div>• Campaign optimization</div>
                  <div>• Personalization</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🚗</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Transportation</h3>
                <div className="space-y-2 text-gray-300">
                  <div>• Autonomous vehicles</div>
                  <div>• Route optimization</div>
                  <div>• Traffic management</div>
                  <div>• Predictive maintenance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="cyber-card mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold neon-text mb-6">
                Our AI Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to deliver successful AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Discovery</h3>
                <p className="text-gray-300">Understanding your business needs and data requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Strategy</h3>
                <p className="text-gray-300">Developing AI strategy and technical architecture</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Development</h3>
                <p className="text-gray-300">Building and training AI models with your data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Deployment</h3>
                <p className="text-gray-300">Launching and monitoring AI solutions in production</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold neon-text mb-6">
              Ready to Harness AI for Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how AI can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="neon-button text-xl px-12 py-4">
                Start Your AI Journey
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

export default AIServicesPage;