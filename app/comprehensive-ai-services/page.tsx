import React from 'react';
import SEOHead from '../components/SEOHead';

const ComprehensiveAIServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Comprehensive AI Services - Zion Tech Group"
        description="Advanced AI solutions including machine learning, natural language processing, computer vision, predictive analytics, and custom AI development for businesses."
        keywords="AI services, machine learning, NLP, computer vision, predictive analytics, AI consulting, custom AI development, artificial intelligence"
        canonicalUrl="https://ziontechgroup.com/comprehensive-ai-services"
      />
      
      <div className="min-h-screen futuristic-bg particles">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
                🤖 Advanced AI Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Comprehensive
                <span className="block neon-text-purple">AI Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI that drives real business value and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="cyber-button text-center">
                  Get Started
                </a>
                <a href="#contact" className="cyber-button text-center" style={{borderColor: 'var(--neon-pink)', color: 'var(--neon-pink)'}}>
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* AI Services Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">Our AI Services</h2>
              <p className="text-xl text-gray-300">Comprehensive artificial intelligence solutions for every industry</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Machine Learning */}
              <div className="glass-card p-8 hover-lift hover-glow floating">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-semibold text-white mb-4 neon-text">Machine Learning</h3>
                <p className="text-gray-300 mb-6">
                  Custom machine learning models and algorithms tailored to your specific business needs and data patterns.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Predictive Modeling
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Deep Learning
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Neural Networks
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Model Optimization
                  </li>
                </ul>
                <div className="text-2xl font-bold text-cyan-400 mb-2">$5,000 - $50,000</div>
                <a href="/contact" className="cyber-button text-center w-full">
                  Get Quote
                </a>
              </div>

              {/* Natural Language Processing */}
              <div className="glass-card p-8 hover-lift hover-glow floating-delayed">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-2xl font-semibold text-white mb-4 neon-text-purple">Natural Language Processing</h3>
                <p className="text-gray-300 mb-6">
                  Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Text Analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Sentiment Analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Language Translation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Chatbot Development
                  </li>
                </ul>
                <div className="text-2xl font-bold text-purple-400 mb-2">$3,000 - $30,000</div>
                <a href="/contact" className="cyber-button text-center w-full" style={{borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)'}}>
                  Get Quote
                </a>
              </div>

              {/* Computer Vision */}
              <div className="glass-card p-8 hover-lift hover-glow floating-slow">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-2xl font-semibold text-white mb-4 neon-text-pink">Computer Vision</h3>
                <p className="text-gray-300 mb-6">
                  Image and video analysis solutions including object detection, facial recognition, and automated visual inspection.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✓</span> Object Detection
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✓</span> Facial Recognition
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✓</span> Image Classification
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✓</span> Video Analysis
                  </li>
                </ul>
                <div className="text-2xl font-bold text-pink-400 mb-2">$4,000 - $40,000</div>
                <a href="/contact" className="cyber-button text-center w-full" style={{borderColor: 'var(--neon-pink)', color: 'var(--neon-pink)'}}>
                  Get Quote
                </a>
              </div>

              {/* Predictive Analytics */}
              <div className="glass-card p-8 hover-lift hover-glow floating">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-semibold text-white mb-4 neon-text-green">Predictive Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Data-driven predictions and forecasting solutions to help you make informed business decisions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> Sales Forecasting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> Risk Assessment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> Demand Planning
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> Customer Behavior
                  </li>
                </ul>
                <div className="text-2xl font-bold text-green-400 mb-2">$2,000 - $25,000</div>
                <a href="/contact" className="cyber-button text-center w-full" style={{borderColor: 'var(--neon-green)', color: 'var(--neon-green)'}}>
                  Get Quote
                </a>
              </div>

              {/* AI Consulting */}
              <div className="glass-card p-8 hover-lift hover-glow floating-delayed">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-semibold text-white mb-4 neon-text">AI Strategy Consulting</h3>
                <p className="text-gray-300 mb-6">
                  Strategic AI guidance and implementation planning to help you leverage artificial intelligence effectively.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> AI Strategy Development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Technology Assessment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Implementation Planning
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> ROI Analysis
                  </li>
                </ul>
                <div className="text-2xl font-bold text-cyan-400 mb-2">$2,000 - $25,000</div>
                <a href="/contact" className="cyber-button text-center w-full">
                  Get Quote
                </a>
              </div>

              {/* Custom AI Development */}
              <div className="glass-card p-8 hover-lift hover-glow floating-slow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold text-white mb-4 neon-text-purple">Custom AI Development</h3>
                <p className="text-gray-300 mb-6">
                  Bespoke AI solutions designed specifically for your unique business requirements and challenges.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Custom Algorithms
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Integration Services
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Training & Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Maintenance
                  </li>
                </ul>
                <div className="text-2xl font-bold text-purple-400 mb-2">$10,000 - $100,000</div>
                <a href="/contact" className="cyber-button text-center w-full" style={{borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)'}}>
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text-green">Ready-to-Use AI Tools</h2>
              <p className="text-xl text-gray-300">Powerful AI applications you can start using immediately</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6 text-center hover-lift">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-lg font-semibold text-white mb-2">Chatbot Builder</h3>
                <p className="text-gray-300 text-sm mb-4">Build intelligent chatbots without coding</p>
                <a href="/ai-chatbot-builder" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Try Now →</a>
              </div>
              
              <div className="glass-card p-6 text-center hover-lift">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="text-lg font-semibold text-white mb-2">Form Builder</h3>
                <p className="text-gray-300 text-sm mb-4">Create smart forms with AI assistance</p>
                <a href="/ai-form-builder" className="text-green-400 hover:text-green-300 text-sm font-medium">Try Now →</a>
              </div>
              
              <div className="glass-card p-6 text-center hover-lift">
                <div className="text-3xl mb-3">🎬</div>
                <h3 className="text-lg font-semibold text-white mb-2">Video Generator</h3>
                <p className="text-gray-300 text-sm mb-4">Create professional videos with AI</p>
                <a href="/ai-video-generator" className="text-pink-400 hover:text-pink-300 text-sm font-medium">Try Now →</a>
              </div>
              
              <div className="glass-card p-6 text-center hover-lift">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-white mb-2">Sales Predictor</h3>
                <p className="text-gray-300 text-sm mb-4">Predict sales trends with AI</p>
                <a href="/zion-ai-sales-predictor" className="text-purple-400 hover:text-purple-300 text-sm font-medium">Try Now →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">AI Success Stories</h2>
              <p className="text-xl text-gray-300">See how we've helped businesses transform with AI</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-white mb-3">E-commerce Platform</h3>
                <p className="text-gray-300 mb-4">
                  "AI-powered recommendation engine increased sales by 35% and improved customer engagement by 50%."
                </p>
                <div className="text-cyan-400 font-semibold">- TechCorp CEO</div>
              </div>
              
              <div className="glass-card p-8 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare Provider</h3>
                <p className="text-gray-300 mb-4">
                  "Predictive analytics helped reduce patient readmission rates by 40% and saved $2M annually."
                </p>
                <div className="text-green-400 font-semibold">- MedCenter Director</div>
              </div>
              
              <div className="glass-card p-8 text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold text-white mb-3">Manufacturing Company</h3>
                <p className="text-gray-300 mb-4">
                  "Computer vision quality control reduced defects by 60% and increased production efficiency by 25%."
                </p>
                <div className="text-purple-400 font-semibold">- Factory Manager</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free AI consultation and discover how artificial intelligence can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-purple-100">
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensiveAIServicesPage;