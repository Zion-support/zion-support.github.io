import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  ClockIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const AnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms provide intelligent insights and predictions from your data.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Real-time Dashboards',
      description: 'Live dashboards with real-time data updates and interactive visualizations.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ClockIcon,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes using advanced predictive modeling.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Share insights and collaborate with your team through interactive dashboards.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BoltIcon,
      title: 'Automated Reports',
      description: 'Generate and schedule automated reports with customizable templates.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption and compliance features.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$349',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 25 data sources',
        'Advanced dashboards',
        'AI-powered insights',
        'Priority support',
        'API access',
        'Custom integrations',
        'Team collaboration'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$699',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced AI models',
        'Dedicated support',
        'White-label options',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <>
      <SEOHead
        title="Business Analytics Pro - Advanced Data Analytics"
        description="Comprehensive business intelligence and analytics platform with real-time insights, predictive analytics, and AI-powered reporting for data-driven decisions."
        keywords="business analytics, data visualization, predictive analytics, business intelligence, data dashboard, analytics platform"
        canonicalUrl="https://ziontechgroup.com/analytics-dashboard"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <ChartBarIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">Business Analytics</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Business Analytics Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive business intelligence and analytics platform with real-time insights, predictive analytics, and AI-powered reporting.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="btn-futuristic px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced analytics platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-8 hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 neon-glow`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`glass-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full btn-futuristic py-3 ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''}`}>
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40"></div>
          
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and unlock the power of advanced business analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Free Trial (14 days)
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnalyticsDashboardPage;