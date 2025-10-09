import React from 'react';
import { CheckCircle, BarChart, Zap, Users, Shield, Database } from 'lucide-react';

const SmartAnalyticsPage: React.FC = () => {
  const analyticsFeatures = [
    {
      name: 'Business Intelligence',
      price: '$99/month',
      description: 'Comprehensive business intelligence and analytics platform',
      features: [
        'Interactive dashboards',
        'Real-time analytics',
        'Custom reports',
        'Data visualization'
      ],
      icon: BarChart,
      benefits: [
        '50% better decisions',
        'Real-time insights',
        'Improved performance',
                        'Cost optimization'
      ]
    },
    {
      name: 'Predictive Analytics',
      price: '$149/month',
      description: 'AI-powered predictive analytics and forecasting',
      features: [
        'Machine learning models',
        'Forecasting algorithms',
        'Trend analysis',
        'Risk assessment'
      ],
      icon: Zap,
      benefits: [
        'Accurate predictions',
        'Risk mitigation',
                        'Strategic planning',
                        'Competitive advantage'
      ]
    },
    {
      name: 'Customer Analytics',
      price: '$79/month',
      description: 'Advanced customer analytics and segmentation',
      features: [
        'Customer segmentation',
        'Behavior analysis',
        'Churn prediction',
        'Lifetime value'
      ],
      icon: Users,
      benefits: [
        'Better customer insights',
        'Improved retention',
                        'Personalized experiences',
                        'Increased revenue'
      ]
    },
    {
      name: 'Marketing Analytics',
      price: '$69/month',
      description: 'Comprehensive marketing analytics and ROI tracking',
      features: [
        'Campaign performance',
        'ROI analysis',
        'Attribution modeling',
        'Conversion tracking'
      ],
      icon: Database,
      benefits: [
        'Better marketing ROI',
        'Optimized campaigns',
                        'Data-driven decisions',
                        'Improved conversions'
      ]
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Analytics',
      description: 'Track sales, customer behavior, and optimize online performance',
      benefits: ['Increased sales', 'Better customer insights', 'Optimized pricing', 'Improved conversion']
    },
    {
      title: 'SaaS Metrics',
      description: 'Monitor key SaaS metrics, user engagement, and growth',
      benefits: ['Better user insights', 'Improved retention', 'Growth optimization', 'Revenue tracking']
    },
    {
      title: 'Financial Analytics',
      description: 'Analyze financial performance, trends, and risk factors',
      benefits: ['Better financial planning', 'Risk assessment', 'Performance tracking', 'Cost optimization']
    },
    {
      title: 'Operations Analytics',
      description: 'Optimize operations, track efficiency, and improve processes',
      benefits: ['Improved efficiency', 'Cost reduction', 'Better resource allocation', 'Process optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Smart Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your data into actionable insights with our AI-powered analytics platform. 
            Make data-driven decisions and drive business growth with advanced analytics.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50%</div>
              <div className="text-gray-300">Better Decisions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
              <div className="text-gray-300">Analytics</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Analytics Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsFeatures.map((feature, index) => (
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
                <BarChart className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Analytics</h3>
              <p className="text-gray-300">Advanced AI algorithms for intelligent data analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Data Integration</h3>
              <p className="text-gray-300">Seamless integration with multiple data sources</p>
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
            Ready to Unlock Your Data?
          </h2>
          <p className="text-purple-100 mb-6">
            Start using smart analytics to make better decisions and drive growth.
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

export default SmartAnalyticsPage;