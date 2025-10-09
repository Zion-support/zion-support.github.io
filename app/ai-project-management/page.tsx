import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Calendar, Users, Target, Zap, BarChart, Clock, Shield, Brain } from 'lucide-react';

const AIProjectManagementPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with automated resource allocation and timeline optimization.',
      benefits: ['Smart scheduling', 'Resource optimization', 'Risk prediction', 'Timeline forecasting']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Automated progress tracking with AI-driven insights and performance recommendations.',
      benefits: ['Real-time updates', 'Milestone tracking', 'Performance analytics', 'Smart alerts']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-powered communication and task management.',
      benefits: ['Smart notifications', 'Task assignment', 'Progress sharing', 'Team analytics']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive project analytics with predictive insights and automated reporting.',
      benefits: ['Performance metrics', 'Predictive analytics', 'Custom reports', 'ROI tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$159',
      period: 'month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 team members',
        'Basic AI planning',
        'Standard templates',
        'Email support',
        'Basic integrations',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 50 team members',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced integrations',
        'API access',
        'Custom reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Custom integrations',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: 'Intelligent Resource Planning',
      description: 'AI analyzes team capacity, skills, and availability to optimize resource allocation.',
      icon: '👥',
      results: ['30% improvement in resource utilization', '25% reduction in project delays', '40% better team productivity']
    },
    {
      title: 'Predictive Risk Management',
      description: 'Machine learning algorithms identify potential risks and suggest mitigation strategies.',
      icon: '⚠️',
      results: ['60% reduction in project risks', '45% faster risk identification', '35% improvement in project success rate']
    },
    {
      title: 'Automated Task Management',
      description: 'AI automatically assigns tasks, sets priorities, and tracks progress across teams.',
      icon: '✅',
      results: ['50% reduction in manual planning', '35% faster task completion', '25% improvement in team efficiency']
    },
    {
      title: 'Smart Communication',
      description: 'AI-powered communication tools that facilitate better collaboration and reduce miscommunication.',
      icon: '💬',
      results: ['40% reduction in communication overhead', '30% improvement in team alignment', '50% faster decision making']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Project Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your project management with AI-powered tools. Intelligent planning, automated task management, and predictive analytics for successful project delivery." />
        <meta name="keywords" content="AI project management, project planning, task management, team collaboration, project analytics, resource planning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Project Management
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Transform your project management with AI-powered planning, automation, and intelligent insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  ✉️ Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI-Powered Project Management Features
              </h2>
              <p className="text-xl text-gray-600">
                Leverage artificial intelligence to streamline your project management processes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
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
        </section>

        {/* AI Capabilities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Discover how AI transforms every aspect of project management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-green-600">
                        <Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your team size and project complexity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      {plan.price}
                      {plan.period !== 'pricing' && <span className="text-lg text-gray-500">/{plan.period}</span>}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="tel:+13024640950"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Revolutionize Your Project Management?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Contact our AI project management experts for a free consultation and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-purple-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIProjectManagementPage;