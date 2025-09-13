import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Cog, Target, TrendingUp, CheckCircle, Clock, Users, Zap, Shield } from 'lucide-react';

const AdvancedAutomationSolutions2026UltimateShowcase: React.FC = () => {
  const automationFeatures = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to optimize business processes',
      icon: Bot,
      capabilities: [
        'Self-learning algorithms',
        'Dynamic process optimization',
        'Real-time decision making',
        'Cross-system integration'
      ],
      impact: '75% efficiency increase'
    },
    {
      title: 'Autonomous Business Operations',
      description: 'Fully automated business operations with minimal human intervention',
      icon: Cog,
      capabilities: [
        'End-to-end automation',
        'Predictive maintenance',
        'Resource optimization',
        'Quality assurance'
      ],
      impact: '90% reduction in manual tasks'
    },
    {
      title: 'Smart Resource Management',
      description: 'Intelligent allocation and optimization of business resources',
      icon: Target,
      capabilities: [
        'Dynamic resource allocation',
        'Cost optimization',
        'Performance monitoring',
        'Predictive analytics'
      ],
      impact: '60% cost reduction'
    },
    {
      title: 'Predictive Maintenance Systems',
      description: 'AI-driven maintenance that prevents failures before they occur',
      icon: Shield,
      capabilities: [
        'Failure prediction',
        'Maintenance scheduling',
        'Asset optimization',
        'Risk assessment'
      ],
      impact: '85% reduction in downtime'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Manufacturing',
      solutions: ['Smart Factory', 'Quality Control', 'Supply Chain'],
      roi: '300%',
      icon: Cog
    },
    {
      industry: 'Healthcare',
      solutions: ['Patient Care', 'Diagnostics', 'Administration'],
      roi: '250%',
      icon: Shield
    },
    {
      industry: 'Finance',
      solutions: ['Risk Management', 'Fraud Detection', 'Compliance'],
      roi: '400%',
      icon: TrendingUp
    },
    {
      industry: 'Retail',
      solutions: ['Inventory Management', 'Customer Service', 'Logistics'],
      roi: '350%',
      icon: Target
    }
  ];

  const stats = [
    { label: 'Efficiency Gain', value: '75%', icon: TrendingUp },
    { label: 'Cost Reduction', value: '60%', icon: Target },
    { label: 'Implementation Time', value: '30 Days', icon: Clock },
    { label: 'ROI Achievement', value: '300%', icon: Zap }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-500/20 rounded-full px-6 py-2 mb-6 border border-green-400/30">
            <Bot className="w-5 h-5 text-green-300 mr-2" />
            <span className="text-green-200 font-semibold">Advanced Automation 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced Automation Solutions
            <span className="block bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
              Ultimate Showcase
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with the most advanced automation solutions that combine 
            AI, machine learning, and intelligent process optimization for unprecedented results.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600/30 rounded-lg mb-3">
                  <stat.icon className="w-6 h-6 text-green-300" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Automation Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {automationFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mr-4 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <div className="inline-flex items-center bg-green-500/20 rounded-full px-3 py-1 text-sm text-green-200 mb-4">
                    {feature.impact}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {feature.capabilities.map((capability, capabilityIndex) => (
                  <li key={capabilityIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Industry Solutions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry-Specific Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-xl p-6 border border-green-400/30 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-green-500/30 rounded-lg mb-4">
                  <solution.icon className="w-5 h-5 text-green-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{solution.industry}</h4>
                <ul className="space-y-2 mb-4">
                  {solution.solutions.map((sol, solIndex) => (
                    <li key={solIndex} className="text-green-200 text-sm">
                      • {sol}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">{solution.roi}</div>
                  <div className="text-xs text-gray-400">Average ROI</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Implementation Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Assessment', description: 'Analyze current processes and identify automation opportunities' },
              { step: '02', title: 'Design', description: 'Create custom automation solutions tailored to your needs' },
              { step: '03', title: 'Deploy', description: 'Implement automation systems with minimal disruption' },
              { step: '04', title: 'Optimize', description: 'Continuously improve and scale automation solutions' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-white font-bold text-xl mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-2xl p-12 border border-green-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Automate Your Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already achieving unprecedented efficiency and cost savings 
            with our advanced automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/automation-solutions-2026"
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              Explore Automation Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-green-400 text-green-200 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Get Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutions2026UltimateShowcase;