import React from 'react';
import { ArrowRight, CheckCircle, Zap, Brain, Settings, BarChart, Users, Shield } from 'lucide-react';

const AiAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes.',
      benefits: ['Reduced Manual Work', 'Improved Accuracy', 'Faster Processing', 'Cost Savings']
    },
    {
      icon: Zap,
      title: 'Workflow Optimization',
      description: 'Streamline complex workflows with intelligent automation solutions.',
      benefits: ['Efficient Workflows', 'Error Reduction', 'Time Savings', 'Scalability']
    },
    {
      icon: Settings,
      title: 'Custom Automation',
      description: 'Tailored automation solutions designed for your specific business needs.',
      benefits: ['Custom Solutions', 'Flexible Integration', 'Business Alignment', 'ROI Optimization']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Real-time insights and analytics to measure automation effectiveness.',
      benefits: ['Real-time Monitoring', 'Performance Metrics', 'Data-driven Decisions', 'Continuous Improvement']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automate customer inquiries, ticket routing, and response generation.',
      impact: '70% reduction in response time'
    },
    {
      title: 'Data Processing Automation',
      description: 'Automate data entry, validation, and processing workflows.',
      impact: '90% accuracy improvement'
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      impact: '300% increase in lead conversion'
    },
    {
      title: 'Financial Process Automation',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      impact: '80% time savings on financial tasks'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with intelligent automation solutions that learn, adapt, and optimize your processes.
          </p>
        </section>

        {/* Features Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI automation solutions provide comprehensive capabilities to streamline your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <feature.icon className="w-12 h-12 text-cyan-400 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI automation can transform different aspects of your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                    {useCase.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Automation?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI automation solutions deliver measurable results and long-term value for your business.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                  <p className="text-gray-300">Work with certified AI and automation specialists</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Secure & Reliable</h3>
                  <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <BarChart className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                  <p className="text-gray-300">Track record of successful implementations and ROI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI automation can transform your business processes and drive efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiAutomationPage;