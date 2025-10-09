import React from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, UserCheck, FileText, Calendar, Award, PieChart, Activity } from 'lucide-react';

const AIHRSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Candidate Screening',
      description: 'Intelligent resume analysis and candidate matching using natural language processing and machine learning algorithms.',
      benefits: ['80% faster screening', '95% better candidate fit', 'Reduced bias in hiring']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Smart Employee Onboarding',
      description: 'Automated onboarding workflows with personalized learning paths and progress tracking for new hires.',
      benefits: ['60% faster onboarding', 'Improved retention', 'Consistent experience']
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Predictive Analytics for HR',
      description: 'AI-driven insights into employee performance, engagement, and retention patterns to make data-driven HR decisions.',
      benefits: ['90% accurate predictions', 'Reduced turnover', 'Better performance management']
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Intelligent Employee Communication',
      description: 'AI-powered communication tools that facilitate better team collaboration and employee engagement.',
      benefits: ['40% improved communication', 'Higher engagement', 'Better team dynamics']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Performance Management AI',
      description: 'Automated performance tracking, goal setting, and feedback generation using AI to optimize employee development.',
      benefits: ['50% more effective reviews', 'Clearer goals', 'Better development paths']
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Talent Development Platform',
      description: 'AI-driven learning and development recommendations based on individual skills, career goals, and company needs.',
      benefits: ['Personalized learning', 'Skill gap analysis', 'Career progression']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 50 employees',
        'Basic AI screening',
        'Standard onboarding',
        'Basic analytics',
        'Email support',
        'Mobile app access',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500 employees',
        'Advanced AI features',
        'Custom onboarding workflows',
        'Advanced analytics & reporting',
        'Priority support',
        'API integrations',
        'Custom workflows',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999/month',
      description: 'For large organizations',
      features: [
        'Unlimited employees',
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
      title: 'Tech Startups',
      description: 'Streamline hiring with AI-powered candidate screening, automated onboarding, and performance management.',
      icon: '💻',
      benefits: ['Faster hiring', 'Better culture fit', 'Reduced time-to-productivity']
    },
    {
      title: 'Healthcare Organizations',
      description: 'Manage healthcare staff with AI-driven scheduling, compliance tracking, and performance optimization.',
      icon: '🏥',
      benefits: ['Compliance automation', 'Better scheduling', 'Improved patient care']
    },
    {
      title: 'Retail & Hospitality',
      description: 'Optimize workforce management with AI-powered scheduling, employee engagement, and retention strategies.',
      icon: '🛍️',
      benefits: ['Better scheduling', 'Reduced turnover', 'Improved service quality']
    },
    {
      title: 'Manufacturing',
      description: 'Enhance safety and productivity with AI-driven training, performance monitoring, and skill development.',
      icon: '🏭',
      benefits: ['Safety compliance', 'Skill development', 'Productivity optimization']
    }
  ];

  const benefits = [
    {
      title: 'Hiring Efficiency',
      description: 'Reduce time-to-hire by 60% with AI-powered screening',
      icon: '⚡',
      value: '60%'
    },
    {
      title: 'Employee Retention',
      description: 'Improve retention rates with better matching and engagement',
      icon: '👥',
      value: '40%'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce HR operational costs through automation',
      icon: '💰',
      value: '35%'
    },
    {
      title: 'Compliance',
      description: 'Ensure 100% compliance with labor laws and regulations',
      icon: '✅',
      value: '100%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI HR Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Revolutionize your human resources with AI-powered candidate screening, automated onboarding, and intelligent performance management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
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
              AI-Powered HR Features
            </h2>
            <p className="text-xl text-gray-600">
              Transform your human resources management with cutting-edge AI technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              See the measurable impact of AI on HR operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">{benefit.value}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options for organizations of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{plan.price}</div>
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
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-xl text-gray-600">
              See how different industries benefit from AI HR solutions
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
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Contact us today for a free consultation and custom AI HR solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-indigo-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHRSolutionsPage;