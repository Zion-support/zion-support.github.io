import React from 'react';
import { CheckCircle, Target, Zap, Users, BarChart, Mail } from 'lucide-react';

const MarketingToolsPage: React.FC = () => {
  const marketingFeatures = [
    {
      name: 'Email Marketing',
      price: '$49/month',
      description: 'AI-powered email marketing and automation platform',
      features: [
        'Email automation',
        'A/B testing',
                        'Personalization',
                        'Analytics'
      ],
      icon: Mail,
      benefits: [
        '40% higher open rates',
        'Better engagement',
                        'Automated campaigns',
                        'ROI tracking'
      ]
    },
    {
      name: 'Social Media Management',
      price: '$39/month',
      description: 'Comprehensive social media management and scheduling',
      features: [
        'Content scheduling',
        'Analytics tracking',
                        'Engagement tools',
                        'Multi-platform support'
      ],
      icon: Users,
      benefits: [
        'Better engagement',
        'Time savings',
                        'Consistent posting',
                        'Growth tracking'
      ]
    },
    {
      name: 'Ad Campaign Management',
      price: '$79/month',
      description: 'AI-powered ad campaign management and optimization',
      features: [
        'Campaign automation',
        'Bid optimization',
                        'Performance tracking',
                        'ROI analysis'
      ],
      icon: Target,
      benefits: [
        'Better ad performance',
        'Cost optimization',
                        'Automated optimization',
                        'Higher conversions'
      ]
    },
    {
      name: 'Content Marketing',
      price: '$59/month',
      description: 'AI-powered content creation and marketing tools',
      features: [
        'Content generation',
        'SEO optimization',
                        'Content calendar',
                        'Performance tracking'
      ],
      icon: BarChart,
      benefits: [
        'Better content quality',
        'SEO improvement',
                        'Consistent publishing',
                        'Higher engagement'
      ]
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Marketing',
      description: 'Drive sales and customer engagement for online stores',
      benefits: ['Increased sales', 'Better customer retention', 'Improved ROI', 'Automated campaigns']
    },
    {
      title: 'SaaS Marketing',
      description: 'Grow SaaS businesses with targeted marketing campaigns',
      benefits: ['Lead generation', 'User acquisition', 'Retention campaigns', 'Growth tracking']
    },
    {
      title: 'Local Business',
      description: 'Attract local customers and build community presence',
      benefits: ['Local visibility', 'Community engagement', 'Customer acquisition', 'Brand building']
    },
    {
      title: 'B2B Marketing',
      description: 'Generate leads and nurture prospects for B2B companies',
      benefits: ['Lead generation', 'Nurture campaigns', 'Account-based marketing', 'Sales alignment']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Marketing Tools
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Supercharge your marketing with our comprehensive suite of AI-powered tools. 
            Create, manage, and optimize campaigns across all channels for maximum impact.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Higher Engagement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-300">Time Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
              <div className="text-gray-300">ROI Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Campaign Management</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Marketing Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingFeatures.map((feature, index) => (
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
                <Target className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Targeting</h3>
              <p className="text-gray-300">Intelligent audience targeting and personalization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Analytics & Insights</h3>
              <p className="text-gray-300">Advanced analytics and performance insights</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Automation</h3>
              <p className="text-gray-300">Automated campaigns and workflow optimization</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-purple-100 mb-6">
            Start using our marketing tools to create better campaigns and drive growth.
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

export default MarketingToolsPage;