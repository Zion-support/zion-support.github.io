import React from 'react';
import { CheckCircle, Zap, Users, Shield, Clock, BarChart } from 'lucide-react';

const ProductivityPage: React.FC = () => {
  const productivityFeatures = [
    {
      name: 'Task Management',
      price: '$29/month',
      description: 'AI-powered task management and project organization',
      features: [
        'Smart task prioritization',
        'Project tracking',
        'Team collaboration',
        'Progress monitoring'
      ],
      icon: Clock,
      benefits: [
        '40% productivity boost',
        'Better organization',
                        'Reduced stress',
                        'Goal achievement'
      ]
    },
    {
      name: 'Time Tracking',
      price: '$19/month',
      description: 'Intelligent time tracking and productivity analysis',
      features: [
        'Automatic time tracking',
        'Productivity insights',
                        'Time reports',
                        'Focus sessions'
      ],
      icon: BarChart,
      benefits: [
        'Better time awareness',
        'Improved focus',
                        'Work-life balance',
                        'Performance insights'
      ]
    },
    {
      name: 'Team Collaboration',
      price: '$49/month',
      description: 'Advanced team collaboration and communication tools',
      features: [
        'Real-time collaboration',
        'File sharing',
                        'Video conferencing',
                        'Project management'
      ],
      icon: Users,
      benefits: [
        'Better communication',
        'Improved teamwork',
                        'Faster decisions',
                        'Enhanced productivity'
      ]
    },
    {
      name: 'Workflow Automation',
      price: '$39/month',
      description: 'Automate repetitive tasks and streamline workflows',
      features: [
        'Process automation',
        'Workflow optimization',
                        'Integration tools',
                        'Custom automations'
      ],
      icon: Zap,
      benefits: [
        'Reduced manual work',
        'Faster processes',
                        'Fewer errors',
                        'Cost savings'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Remote Work',
      description: 'Optimize remote work productivity and team collaboration',
      benefits: ['Better focus', 'Improved communication', 'Work-life balance', 'Team coordination']
    },
    {
      title: 'Project Management',
      description: 'Streamline project management and team coordination',
      benefits: ['Better planning', 'Improved tracking', 'Faster delivery', 'Quality control']
    },
    {
      title: 'Personal Productivity',
      description: 'Boost personal productivity and achieve goals faster',
      benefits: ['Better organization', 'Improved focus', 'Goal achievement', 'Time management']
    },
    {
      title: 'Team Efficiency',
      description: 'Enhance team efficiency and collaboration',
      benefits: ['Better teamwork', 'Improved communication', 'Faster decisions', 'Enhanced performance']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Productivity Suite
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Boost your productivity with our comprehensive suite of AI-powered tools. 
            Manage tasks, track time, collaborate effectively, and achieve your goals faster.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Productivity Boost</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-300">Time Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Available</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Productivity Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productivityFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{feature.name}</h3>
                    <div className="text-2xl font-bold text-green-400">{feature.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {feature.features.map((feat, featIndex) => (
                      <li key={featIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technology Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Automation</h3>
              <p className="text-gray-300">Intelligent automation for repetitive tasks and workflows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-300">Advanced collaboration tools for better teamwork</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Security & Privacy</h3>
              <p className="text-gray-300">Enterprise-grade security and data protection</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-purple-100 mb-6">
            Start using our productivity suite to achieve more and work smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityPage;