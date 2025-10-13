import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Brain, BarChart3, Settings, ArrowRight, CheckCircle, Star } from 'lucide-react';

const AiAutomationSuitePage: React.FC = () => {
  const automationSolutions = [
    {
      title: 'AI Workflow Automation',
      description: 'Comprehensive workflow automation with AI-powered decision making and process optimization.',
      icon: <Settings className="w-6 h-6" />,
      features: [
        'Process Mapping',
        'Rule-based Automation',
        'Exception Handling',
        'Performance Monitoring',
        'Custom Integrations',
        'Scalable Architecture'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 70%',
        'Improve accuracy to 99.9%',
        'Free up staff for strategic work',
        'Scale operations efficiently'
      ],
      price: '$1,000-3,000/month',
      category: 'Workflow Automation'
    },
    {
      title: 'AI Email Automation',
      description: 'Intelligent email processing, categorization, response generation, and follow-up automation.',
      icon: <Zap className="w-6 h-6" />,
      features: [
        'Email Classification',
        'Auto-response Generation',
        'Sentiment Analysis',
        'Priority Scoring',
        'Follow-up Automation',
        'Template Management'
      ],
      benefits: [
        'Handle 1000+ emails daily',
        '95% response accuracy',
        '24/7 email management',
        'Reduced response time',
        'Improved customer satisfaction'
      ],
      price: '$199/month',
      category: 'Communication'
    },
    {
      title: 'AI Data Processing',
      description: 'Automated data extraction, validation, transformation, and analysis with machine learning.',
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        'Data Extraction',
        'Validation Rules',
        'Format Conversion',
        'Quality Checks',
        'Report Generation',
        'Real-time Analytics'
      ],
      benefits: [
        'Process 10x more data',
        '99.5% accuracy rate',
        'Real-time insights',
        'Reduced manual errors',
        'Faster decision making'
      ],
      price: '$500-1,500/month',
      category: 'Data Management'
    },
    {
      title: 'AI Customer Service',
      description: 'Intelligent chatbots and virtual assistants for 24/7 customer support and engagement.',
      icon: <Brain className="w-6 h-6" />,
      features: [
        'Natural Language Processing',
        'Multi-language Support',
        'Context Awareness',
        'Escalation Management',
        'Knowledge Base Integration',
        'Sentiment Analysis'
      ],
      benefits: [
        '24/7 availability',
        'Instant responses',
        'Reduced support costs',
        'Improved customer satisfaction',
        'Scalable support'
      ],
      price: '$299-899/month',
      category: 'Customer Service'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automation Suite - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI automation solutions by Zion Tech Group. Streamline your business processes with intelligent automation." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Automation Suite
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered automation solutions designed to streamline operations and boost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Automation Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI automation tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automationSolutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {solution.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{solution.price}</div>
                      <div className="text-sm text-gray-400">{solution.category}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Automation Suite?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                <p className="text-gray-300">
                  Process automation that runs at lightning speed with sub-second response times.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
                <p className="text-gray-300">
                  Intelligent automation that learns from your data and adapts to changing requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Data-Driven</h3>
                <p className="text-gray-300">
                  Comprehensive analytics and insights to optimize your processes and measure ROI.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Easy to Use</h3>
                <p className="text-gray-300">
                  Intuitive interfaces and drag-and-drop tools make automation accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your automation journey today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiAutomationSuitePage;