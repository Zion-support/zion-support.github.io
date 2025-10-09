'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Marketing Automation',
      description: 'Transform your marketing with intelligent automation that personalizes customer experiences and optimizes campaigns in real-time.',
      features: [
        'Personalized customer journey mapping',
        'Automated email and SMS campaigns',
        'Predictive customer behavior analysis',
        'Real-time campaign optimization',
        'Cross-channel marketing orchestration',
        'ROI tracking and analytics'
      ],
      icon: '🎯'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality, engaging content at scale using advanced AI models trained on your brand voice and industry knowledge.',
      features: [
        'Blog posts and articles',
        'Social media content',
        'Product descriptions',
        'Email newsletters',
        'Video scripts and captions',
        'Multilingual content creation'
      ],
      icon: '✍️'
    },
    {
      title: 'AI Data Analytics',
      description: 'Extract actionable insights from your data with advanced machine learning algorithms and predictive analytics.',
      features: [
        'Predictive analytics and forecasting',
        'Customer segmentation and profiling',
        'Anomaly detection and alerting',
        'Real-time dashboard creation',
        'Automated report generation',
        'Data visualization and storytelling'
      ],
      icon: '📊'
    },
    {
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent chatbots, virtual assistants, and automated support systems.',
      features: [
        'Intelligent chatbot development',
        'Natural language processing',
        'Sentiment analysis and monitoring',
        'Automated ticket routing',
        'Knowledge base optimization',
        '24/7 multilingual support'
      ],
      icon: '🤖'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation that learns and adapts to your organization\'s needs.',
      features: [
        'Document processing and extraction',
        'Invoice and payment automation',
        'HR and recruitment automation',
        'Supply chain optimization',
        'Quality control and monitoring',
        'Compliance and audit automation'
      ],
      icon: '⚙️'
    },
    {
      title: 'AI Mobile App Development',
      description: 'Build intelligent mobile applications with AI capabilities that provide personalized user experiences.',
      features: [
        'Voice recognition and commands',
        'Image and object recognition',
        'Personalized recommendations',
        'Offline AI processing',
        'Real-time language translation',
        'Biometric authentication'
      ],
      icon: '📱'
    }
  ];

  const industries = [
    { name: 'Healthcare', description: 'AI-powered diagnostics, patient monitoring, and treatment optimization' },
    { name: 'Finance', description: 'Fraud detection, algorithmic trading, and risk assessment' },
    { name: 'E-commerce', description: 'Personalized recommendations, inventory optimization, and customer service' },
    { name: 'Manufacturing', description: 'Predictive maintenance, quality control, and supply chain optimization' },
    { name: 'Education', description: 'Personalized learning, automated grading, and student performance analytics' },
    { name: 'Real Estate', description: 'Property valuation, market analysis, and virtual property tours' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Services - Artificial Intelligence Solutions | Zion Tech Group"
        description="Transform your business with our comprehensive AI services including marketing automation, content generation, data analytics, and intelligent automation solutions."
        keywords={['AI services', 'artificial intelligence', 'machine learning', 'AI automation', 'AI consulting', 'AI development']}
        canonicalUrl="https://ziontechgroup.com/ai-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Transform your business with cutting-edge artificial intelligence solutions. 
                  From marketing automation to predictive analytics, we deliver AI that drives real results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    Get AI Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* AI Services Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our AI Solutions</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI services designed to automate, optimize, and transform your business operations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Technologies */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">AI Technologies We Use</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We leverage the latest AI technologies and frameworks to deliver cutting-edge solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="cyber-card p-6 text-center">
                  <div className="text-3xl mb-4">🧠</div>
                  <h3 className="text-lg font-bold text-white mb-2">Machine Learning</h3>
                  <p className="text-gray-400 text-sm">Advanced ML algorithms for predictive analytics and pattern recognition</p>
                </div>
                
                <div className="cyber-card p-6 text-center">
                  <div className="text-3xl mb-4">💬</div>
                  <h3 className="text-lg font-bold text-white mb-2">Natural Language Processing</h3>
                  <p className="text-gray-400 text-sm">Text analysis, sentiment detection, and language understanding</p>
                </div>
                
                <div className="cyber-card p-6 text-center">
                  <div className="text-3xl mb-4">👁️</div>
                  <h3 className="text-lg font-bold text-white mb-2">Computer Vision</h3>
                  <p className="text-gray-400 text-sm">Image recognition, object detection, and visual analysis</p>
                </div>
                
                <div className="cyber-card p-6 text-center">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-lg font-bold text-white mb-2">Deep Learning</h3>
                  <p className="text-gray-400 text-sm">Neural networks for complex pattern recognition and decision making</p>
                </div>
              </div>
            </div>
          </section>

          {/* Industries We Serve */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Industries We Serve</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI solutions are tailored to meet the unique challenges and opportunities across various industries.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => (
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                    <p className="text-gray-300">{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Implementation Process */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our AI Implementation Process</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  A proven methodology to ensure successful AI implementation and maximum business value.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Data Assessment</h3>
                  <p className="text-gray-300">Analyze your data quality, sources, and readiness for AI implementation.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Model Development</h3>
                  <p className="text-gray-300">Build and train custom AI models tailored to your specific business needs.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Integration</h3>
                  <p className="text-gray-300">Seamlessly integrate AI solutions into your existing systems and workflows.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
                  <p className="text-gray-300">Continuously monitor, optimize, and improve AI performance for maximum ROI.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Proven Results</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI solutions deliver measurable business impact across all industries and use cases.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">85%</div>
                  <div className="text-gray-300">Reduction in Processing Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-gray-300">Average ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                  <div className="text-gray-300">Accuracy Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how AI can transform your business. Get a free consultation and discover 
                the AI solutions that will drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  Get AI Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;