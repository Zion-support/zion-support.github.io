import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Bot, BarChart3, Shield, Zap, Target } from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: ['AI Readiness Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Planning'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Bot,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants that enhance customer experience and automate support.',
      features: ['Natural Language Processing', 'Multi-channel Integration', 'Sentiment Analysis', '24/7 Availability'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'AI Analytics & Insights',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics and reporting.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI systems are secure, compliant, and protected against emerging threats.',
      features: ['Security Audits', 'Compliance Monitoring', 'Threat Detection', 'Risk Assessment'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI solutions that learn and adapt.',
      features: ['Process Automation', 'Workflow Optimization', 'Smart Scheduling', 'Performance Monitoring'],
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: Target,
      title: 'Custom AI Solutions',
      description: 'Develop bespoke AI solutions designed specifically for your unique business challenges.',
      features: ['Custom Development', 'Integration Services', 'Training & Support', 'Ongoing Maintenance'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    'Increased Efficiency',
    'Cost Reduction',
    'Better Decision Making',
    'Enhanced Customer Experience',
    'Competitive Advantage',
    'Scalable Solutions'
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including strategy, development, and implementation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI solutions, artificial intelligence, machine learning, AI consulting, AI development, AI strategy" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From strategy to implementation, we help you harness the power of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our AI Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Why Choose Our AI Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our AI solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;