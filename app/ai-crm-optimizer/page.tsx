import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  UserGroupIcon, 
  CheckCircleIcon, 
  ArrowRightIcon, 
  StarIcon, 
  ClockIcon, 
  BoltIcon,
  ChartBarIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  EyeIcon,
  CogIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const AICRMOptimizerPage: React.FC = () => {
  const features = [
    'AI lead scoring & nurturing',
    'Predictive analytics & forecasting',
    'Automated follow-up sequences',
    'Real-time customer insights',
    'Multi-channel integration',
    'Sales pipeline optimization',
    'Customer segmentation',
    'Churn prediction & prevention',
    'Revenue forecasting',
    'Team performance analytics'
  ];

  const benefits = [
    'Increase sales by 40%',
    'Reduce manual work by 60%',
    'Improve customer retention by 35%',
    'Better sales forecasting accuracy',
    'Faster lead qualification',
    'Higher conversion rates'
  ];

  const integrations = [
    'Salesforce',
    'HubSpot',
    'Pipedrive',
    'Zoho CRM',
    'Microsoft Dynamics',
    'Slack',
    'Microsoft Teams',
    'Gmail',
    'Outlook',
    'LinkedIn Sales Navigator'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199/mo',
      originalPrice: '$399/mo',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email automation',
        'Standard reporting',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$299/mo',
      originalPrice: '$599/mo',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI lead scoring',
        'Predictive analytics',
        'Advanced automation',
        'Priority support',
        'Custom integrations',
        'Team collaboration',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599/mo',
      originalPrice: '$1,199/mo',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'Multi-team management',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '40%', label: 'Sales Increase' },
    { number: '60%', label: 'Time Saved' },
    { number: '35%', label: 'Better Retention' },
    { number: '95%', label: 'Forecast Accuracy' },
    { number: '50K+', label: 'Leads Processed' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <>
      <SEOHead
        title="AI CRM Optimizer Pro - Zion Tech Group"
        description="Transform your sales process with AI-powered lead scoring, predictive analytics, and automated workflows. Increase sales by 40% with our intelligent CRM optimization platform."
        keywords="ai crm, crm optimization, lead scoring, sales automation, predictive analytics, customer relationship management, sales forecasting, crm software"
        canonicalUrl="https://ziontechgroup.com/ai-crm-optimizer"
      />
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 futuristic-bg"></div>
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute inset-0 cyber-circuit"></div>
        
        {/* Quantum Particles */}
        <div className="quantum-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="quantum-particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center neon-border-animated">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic-text cyber-glitch" data-text="AI CRM OPTIMIZER PRO">
                AI CRM OPTIMIZER PRO
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 matrix-text">
                Transform your sales process with AI-powered lead scoring, predictive analytics, automated workflows, and real-time customer insights.
              </p>
              <div className="flex items-center justify-center mt-6 space-x-4">
                <div className="flex items-center text-green-400">
                  <StarIcon className="w-5 h-5 fill-current mr-1" />
                  <span className="font-semibold">4.8/5 Rating</span>
                </div>
                <div className="flex items-center text-cyan-400">
                  <BoltIcon className="w-5 h-5 mr-1" />
                  <span className="font-semibold">50% OFF</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <ClockIcon className="w-5 h-5 mr-1" />
                  <span className="font-semibold">Free Trial</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 mb-16">
              {stats.map((stat, index) => (
                <div key={index} 
                  className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 lg:mb-2 group-hover:text-purple-300 transition-colors neon-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="holographic-text neon-text">AI Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need to optimize your CRM and boost sales performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group holographic-card-enhanced p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-purple-400 mr-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose <span className="holographic-text neon-text">AI CRM Optimizer Pro</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Transform your sales process with AI-powered intelligence and automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} 
                  className="group flex items-start space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-green-500/10"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative">
                    <ArrowRightIcon className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-gray-300 font-medium text-base group-hover:text-white transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="relative py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Seamless <span className="holographic-text neon-text">Integrations</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Connect with your favorite tools and platforms for a unified workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} 
                  className="group p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 border border-slate-700 hover:border-cyan-500"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <CogIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {integration}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Choose Your <span className="holographic-text neon-text">Plan</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Flexible pricing options to fit your sales team size and needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={plan.name} 
                  className={`group relative p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'holographic-card-enhanced border-2 border-purple-500 shadow-xl shadow-purple-500/20' 
                      : 'bg-slate-800/50 border border-slate-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-4xl font-bold text-purple-400 neon-text">{plan.price}</span>
                      <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-green-400">
                      <BoltIcon className="w-4 h-4 mr-1" />
                      <span>50% OFF</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? 'cyber-button-enhanced'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 holographic-text">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 matrix-text">
              Start your free trial today and experience the power of AI-driven CRM optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="relative group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-300">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICRMOptimizerPage;