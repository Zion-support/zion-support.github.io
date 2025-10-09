import React from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, GitBranch, AlertCircle, PieChart, Activity } from 'lucide-react';

const AIProjectManagementPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Task Prioritization',
      description: 'Intelligent task prioritization based on deadlines, dependencies, and team capacity using machine learning algorithms.',
      benefits: ['40% faster project completion', 'Reduced bottlenecks', 'Optimal resource allocation']
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Real-time Risk Prediction',
      description: 'Advanced AI models predict project risks and suggest mitigation strategies before issues occur.',
      benefits: ['90% risk reduction', 'Proactive problem solving', 'Cost savings']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Smart Team Collaboration',
      description: 'AI-enhanced collaboration tools that optimize team communication and workflow efficiency.',
      benefits: ['50% improved communication', 'Better team alignment', 'Reduced meetings']
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Advanced analytics that forecast project outcomes, budget requirements, and timeline adjustments.',
      benefits: ['95% accurate predictions', 'Better budget control', 'Timeline optimization']
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Automated Workflow Management',
      description: 'Intelligent workflow automation that adapts to your team\'s working patterns and project requirements.',
      benefits: ['60% time savings', 'Consistent processes', 'Reduced errors']
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'Resource Optimization',
      description: 'AI-driven resource allocation that ensures optimal team utilization and project efficiency.',
      benefits: ['30% better resource utilization', 'Reduced overwork', 'Improved work-life balance']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 team members',
        'Basic AI task prioritization',
        'Standard project templates',
        'Email support',
        'Basic analytics dashboard',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Custom workflow automation',
        'Priority support',
        'Advanced analytics & reporting',
        'API integrations',
        'Time tracking & billing',
        'Risk prediction alerts'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom AI model training',
        '24/7 dedicated support',
        'Advanced security & compliance',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Software Development Teams',
      description: 'Streamline agile development with AI-powered sprint planning, code review automation, and release management.',
      icon: '💻',
      benefits: ['40% faster delivery', 'Reduced bugs', 'Better sprint planning']
    },
    {
      title: 'Marketing Agencies',
      description: 'Optimize campaign management with AI-driven content scheduling, performance prediction, and client reporting.',
      icon: '📢',
      benefits: ['50% improved ROI', 'Better client satisfaction', 'Automated reporting']
    },
    {
      title: 'Construction & Engineering',
      description: 'Manage complex projects with AI-powered resource allocation, timeline optimization, and risk management.',
      icon: '🏗️',
      benefits: ['30% cost reduction', 'Timeline accuracy', 'Risk mitigation']
    },
    {
      title: 'Healthcare Organizations',
      description: 'Coordinate patient care projects with AI-enhanced scheduling, resource optimization, and compliance tracking.',
      icon: '🏥',
      benefits: ['Improved patient outcomes', 'Better resource utilization', 'Compliance automation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Project Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Revolutionize your project management with AI-powered task prioritization, risk prediction, and intelligent workflow automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-600">
              Transform your project management with cutting-edge AI technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
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

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options for teams of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
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
                  <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-xl text-gray-600">
              See how different industries benefit from AI project management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
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
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Contact us today for a free consultation and custom AI project management solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-purple-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIProjectManagementPage;