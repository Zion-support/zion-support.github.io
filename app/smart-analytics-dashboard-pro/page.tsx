import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ChartBarIcon, 
  CheckCircleIcon, 
  EyeIcon, 
  ClockIcon,
  ShieldCheckIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const SmartAnalyticsDashboardProPage: React.FC = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'Real-time Analytics',
      description: 'Monitor your business performance with live data updates and instant insights',
      benefits: ['Live data streaming', 'Instant updates', 'Real-time alerts']
    },
    {
      icon: EyeIcon,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns',
      benefits: ['Predictive analytics', 'Smart recommendations', 'Pattern recognition']
    },
    {
      icon: ClockIcon,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with customizable schedules',
      benefits: ['Scheduled reports', 'Custom templates', 'Email delivery']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption and compliance standards',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified']
    },
    {
      icon: CogIcon,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your specific business needs',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based access']
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-source Integration',
      description: 'Connect data from multiple sources for a unified view of your business',
      benefits: ['API integrations', 'Database connections', 'File imports']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 79,
      originalPrice: 159,
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic analytics',
        'Email support',
        'Standard templates',
        'Monthly reports',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 149,
      originalPrice: 299,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 data sources',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        'Real-time reporting',
        'Advanced integrations',
        'API access',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 299,
      originalPrice: 599,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Full AI suite',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'Advanced API access',
        'Custom analytics',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Data Analyst',
      company: 'DataCorp Solutions',
      content: 'Smart Analytics Dashboard Pro has transformed how we analyze our business data. The AI insights are incredibly accurate and actionable.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Marketing Director',
      company: 'Growth Marketing Co',
      content: 'The real-time analytics help us make data-driven decisions instantly. Our campaign performance has improved by 60% since using this platform.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'CEO',
      company: 'TechStart Inc',
      content: 'The automated reporting saves us hours every week. We can now focus on strategy instead of manual data compilation.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Analytics',
      description: 'Track sales, customer behavior, and inventory with comprehensive e-commerce insights',
      icon: '🛒',
      benefits: ['Sales tracking', 'Customer insights', 'Inventory management']
    },
    {
      title: 'Marketing Analytics',
      description: 'Monitor campaign performance, ROI, and customer acquisition across all channels',
      icon: '📈',
      benefits: ['Campaign tracking', 'ROI analysis', 'Customer acquisition']
    },
    {
      title: 'Financial Analytics',
      description: 'Analyze revenue, expenses, and profitability with detailed financial reporting',
      icon: '💰',
      benefits: ['Revenue tracking', 'Expense analysis', 'Profitability insights']
    },
    {
      title: 'Operations Analytics',
      description: 'Monitor operational efficiency, productivity, and performance metrics',
      icon: '⚙️',
      benefits: ['Efficiency tracking', 'Productivity metrics', 'Performance monitoring']
    }
  ];

  const integrations = [
    { name: 'Google Analytics', logo: '📊', description: 'Web analytics data' },
    { name: 'Salesforce', logo: '☁️', description: 'CRM integration' },
    { name: 'HubSpot', logo: '🎯', description: 'Marketing automation' },
    { name: 'Stripe', logo: '💳', description: 'Payment processing' },
    { name: 'Shopify', logo: '🛍️', description: 'E-commerce platform' },
    { name: 'MySQL', logo: '🗄️', description: 'Database connection' },
    { name: 'Slack', logo: '💬', description: 'Team notifications' },
    { name: 'Zapier', logo: '⚡', description: 'Workflow automation' }
  ];

  return (
    <>
      <SEOHead
        title="Smart Analytics Dashboard Pro - AI-Powered Business Intelligence | Zion Tech Group"
        description="Revolutionary AI-powered analytics dashboard with real-time insights, automated reporting, and intelligent predictions. Transform your data into actionable insights!"
        keywords="analytics dashboard, business intelligence, data visualization, real-time analytics, AI insights, automated reporting, business metrics"
        canonicalUrl="https://ziontechgroup.com/smart-analytics-dashboard-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
                <ChartBarIcon className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-300 text-sm font-medium">AI-Powered Analytics</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Smart Analytics Dashboard Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your data into actionable insights with AI-powered analytics, 
                real-time monitoring, and intelligent predictions that drive business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">Real-time</div>
                  <div className="text-gray-300 text-sm">Data Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">AI-Powered</div>
                  <div className="text-gray-300 text-sm">Insights</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">Automated</div>
                  <div className="text-gray-300 text-sm">Reporting</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">Multi-source</div>
                  <div className="text-gray-300 text-sm">Integration</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to unlock insights from your data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
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
                Simple <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your analytics needs. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-cyan-500/20' 
                    : 'border-slate-700 hover:border-cyan-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <span className="text-lg text-gray-400 line-through mr-2">${plan.originalPrice}</span>
                      <span className="text-sm text-green-400 font-semibold">
                        {Math.round((1 - plan.price / plan.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Seamless <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms for unified data analytics
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{integration.logo}</div>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Perfect for <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Every Business</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our analytics solution adapts to your industry and specific business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Data Teams</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Smart Analytics Dashboard Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/40 via-slate-900 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Your Data Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using Smart Analytics Dashboard Pro to make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950 | ✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SmartAnalyticsDashboardProPage;