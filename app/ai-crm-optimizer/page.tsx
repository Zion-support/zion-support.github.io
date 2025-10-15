import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ArrowRightIcon, 
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  CogIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  SparklesIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon,
  UserIcon,
  CalendarIcon,
  DocumentCheckIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  ScaleIcon,
  HeartIcon as HeartIconSolid,
  ArrowTrendingUpIcon,
  UsersIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

const AICRMOptimizerPage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState('lead-scoring');

  const features = [
    {
      id: 'lead-scoring',
      icon: ArrowTrendingUpIcon,
      title: 'AI Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms that analyze behavior, demographics, and engagement patterns.',
      stats: '40% higher conversion rates',
      details: [
        'Behavioral analysis scoring',
        'Demographic profiling',
        'Engagement pattern recognition',
        'Predictive lead quality assessment',
        'Real-time scoring updates',
        'Custom scoring models'
      ]
    },
    {
      id: 'predictive-analytics',
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Forecast sales trends, customer behavior, and market opportunities with advanced predictive modeling and data analysis.',
      stats: '85% accuracy in predictions',
      details: [
        'Sales forecasting models',
        'Customer churn prediction',
        'Market trend analysis',
        'Revenue optimization insights',
        'Seasonal pattern recognition',
        'Custom prediction models'
      ]
    },
    {
      id: 'automated-workflows',
      icon: CogIcon,
      title: 'Automated Workflows',
      description: 'Streamline your sales process with intelligent automation that handles follow-ups, task assignments, and pipeline management.',
      stats: '60% time savings',
      details: [
        'Smart follow-up sequences',
        'Task automation rules',
        'Pipeline stage automation',
        'Email campaign triggers',
        'Meeting scheduling automation',
        'Custom workflow builder'
      ]
    },
    {
      id: 'sentiment-analysis',
      icon: HeartIconSolid,
      title: 'Customer Sentiment Analysis',
      description: 'Monitor and analyze customer sentiment across all touchpoints to improve relationships and identify upsell opportunities.',
      stats: '35% improvement in customer satisfaction',
      details: [
        'Real-time sentiment monitoring',
        'Multi-channel analysis',
        'Emotion detection algorithms',
        'Sentiment trend tracking',
        'Alert system for negative sentiment',
        'Customer satisfaction scoring'
      ]
    },
    {
      id: 'sales-forecasting',
      icon: ArrowTrendingUpIcon,
      title: 'Sales Forecasting',
      description: 'Accurate sales predictions using AI models that consider historical data, market conditions, and team performance.',
      stats: '90% forecast accuracy',
      details: [
        'Historical data analysis',
        'Market condition integration',
        'Team performance factors',
        'Seasonal adjustment algorithms',
        'Confidence interval reporting',
        'Scenario planning tools'
      ]
    },
    {
      id: 'ai-assistant',
      icon: SparklesIcon,
      title: 'AI Sales Assistant',
      description: '24/7 AI assistant that provides insights, recommendations, and automated responses to help your sales team succeed.',
      stats: '24/7 availability',
      details: [
        'Natural language processing',
        'Contextual recommendations',
        'Automated response generation',
        'Knowledge base integration',
        'Multi-language support',
        'Learning from interactions'
      ]
    }
  ];

  const integrations = [
    { name: 'Salesforce', logo: 'SF', status: 'Available' },
    { name: 'HubSpot', logo: 'HS', status: 'Available' },
    { name: 'Pipedrive', logo: 'PD', status: 'Available' },
    { name: 'Zoho CRM', logo: 'ZC', status: 'Available' },
    { name: 'Microsoft Dynamics', logo: 'MD', status: 'Available' },
    { name: 'Pipedrive', logo: 'PD', status: 'Available' },
    { name: 'Freshworks', logo: 'FW', status: 'Available' },
    { name: 'Custom API', logo: 'API', status: 'Available' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 99,
      period: 'month',
      description: 'Perfect for small sales teams',
      features: [
        'Up to 5 users',
        'Basic lead scoring',
        'Email integration',
        'Standard reporting',
        'Email support',
        'Basic automation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 299,
      period: 'month',
      description: 'Ideal for growing sales organizations',
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'All integrations',
        'Advanced analytics',
        'Priority support',
        'Custom workflows',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 599,
      period: 'month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited users',
        'Custom AI models',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '40%', label: 'Higher Conversion Rates', icon: ArrowTrendingUpIcon },
    { number: '60%', label: 'Time Savings', icon: ClockIcon },
    { number: '85%', label: 'Prediction Accuracy', icon: ChartBarIcon },
    { number: '35%', label: 'Customer Satisfaction Improvement', icon: HeartIconSolid }
  ];

  return (
    <>
      <SEOHead
        title="AI CRM Optimizer - Zion Tech Group | AI-Powered Sales Optimization"
        description="Transform your sales process with AI-powered lead scoring, predictive analytics, automated workflows, and intelligent customer insights. 40% higher conversion rates guaranteed."
        keywords="ai crm, sales optimization, lead scoring, predictive analytics, sales automation, crm integration, sales forecasting, customer sentiment analysis"
        canonicalUrl="https://ziontechgroup.com/ai-crm-optimizer"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic-text">
                AI CRM <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Optimizer</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your sales process with AI-powered lead scoring, predictive analytics, and automated workflows that drive 40% higher conversion rates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link to="/demo" className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize your sales process and drive better results
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Feature List */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    onClick={() => setSelectedFeature(feature.id)}
                    className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                      selectedFeature === feature.id
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-slate-700 bg-slate-800/50 hover:border-purple-400'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        selectedFeature === feature.id
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                          : 'bg-slate-700'
                      }`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 mb-3">{feature.description}</p>
                        <div className="text-purple-400 font-semibold text-sm">{feature.stats}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Details */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {features.find(f => f.id === selectedFeature)?.title} Details
                </h3>
                <div className="space-y-4">
                  {features.find(f => f.id === selectedFeature)?.details.map((detail, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <div className="text-purple-400 font-semibold mb-2">Key Benefit:</div>
                  <div className="text-gray-300">
                    {features.find(f => f.id === selectedFeature)?.stats}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Seamless <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing CRM and sales tools for a unified experience
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:border-purple-400 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{integration.logo}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{integration.name}</h3>
                  <div className="text-green-400 text-sm font-medium">{integration.status}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your sales team size and needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-xl shadow-purple-500/20' 
                    : 'border-slate-700 hover:border-purple-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                        <StarIcon className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">${plan.price}</span>
                      <span className="text-gray-400 ml-1">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Optimize Your Sales</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of sales teams already using AI CRM Optimizer to drive better results and higher conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <a href="tel:+13024640950" className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICRMOptimizerPage;