'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  EyeIcon,
  CpuChipIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowTrendingUpIcon,
  ChartPieIcon,
  TableCellsIcon
} from '@heroicons/react/24/outline';

const AIAnalyticsDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: ChartBarIcon,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business performance with live, interactive dashboards that update in real-time.',
      benefits: ['Live data updates', 'Interactive charts', 'Customizable widgets', 'Mobile responsive']
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations powered by advanced machine learning algorithms.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart recommendations']
    },
    {
      icon: TableCellsIcon,
      title: 'Custom Report Builder',
      description: 'Create custom reports with drag-and-drop functionality and automated scheduling.',
      benefits: ['Drag-and-drop builder', 'Automated scheduling', 'Custom metrics', 'Export options']
    },
    {
      icon: EyeIcon,
      title: 'Data Visualization',
      description: 'Transform complex data into beautiful, easy-to-understand visualizations and charts.',
      benefits: ['Multiple chart types', 'Interactive elements', 'Color coding', 'Responsive design']
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Source Integration',
      description: 'Connect and analyze data from multiple sources including databases, APIs, and cloud services.',
      benefits: ['100+ integrations', 'Real-time sync', 'Data transformation', 'Error handling']
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Share insights and collaborate with your team through comments, annotations, and sharing.',
      benefits: ['Team sharing', 'Comments & annotations', 'Role-based access', 'Version control']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 49,
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        '5 dashboards',
        'Basic integrations',
        'Standard reports',
        'Email support',
        '1 user',
        '7-day data retention'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: 149,
      period: 'month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Unlimited dashboards',
        'Advanced integrations',
        'Custom reports',
        'Priority support',
        'Up to 10 users',
        '90-day data retention',
        'AI insights',
        'API access',
        'Team collaboration'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 399,
      period: 'month',
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Professional',
        'Custom integrations',
        'White-label options',
        'Dedicated support',
        'Unlimited users',
        'Unlimited data retention',
        'Advanced AI models',
        'Custom training',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const useCases = [
    {
      title: 'Sales Performance Tracking',
      description: 'Monitor sales metrics, pipeline health, and team performance with real-time dashboards.',
      icon: ArrowTrendingUpIcon,
      benefits: ['Sales metrics', 'Pipeline tracking', 'Team performance', 'Goal monitoring']
    },
    {
      title: 'Marketing Campaign Analysis',
      description: 'Analyze marketing campaign performance across all channels and optimize ROI.',
      icon: ChartPieIcon,
      benefits: ['Campaign ROI', 'Channel analysis', 'Conversion tracking', 'Budget optimization']
    },
    {
      title: 'Financial Reporting',
      description: 'Generate comprehensive financial reports with automated insights and forecasting.',
      icon: CurrencyDollarIcon,
      benefits: ['Financial metrics', 'Budget tracking', 'Forecasting', 'Compliance reporting']
    },
    {
      title: 'Customer Behavior Insights',
      description: 'Understand customer behavior patterns and preferences to improve engagement.',
      icon: UserGroupIcon,
      benefits: ['Behavior analysis', 'Segmentation', 'Engagement metrics', 'Retention tracking']
    },
    {
      title: 'Operational Efficiency',
      description: 'Monitor operational metrics and identify opportunities for process improvement.',
      icon: CogIcon,
      benefits: ['Process metrics', 'Efficiency tracking', 'Bottleneck identification', 'Optimization']
    },
    {
      title: 'Predictive Forecasting',
      description: 'Use AI-powered forecasting to predict future trends and make data-driven decisions.',
      icon: CpuChipIcon,
      benefits: ['Trend prediction', 'Demand forecasting', 'Risk analysis', 'Strategic planning']
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      role: 'VP of Sales',
      company: 'GrowthCorp',
      content: 'The AI insights have transformed how we approach sales. We\'ve increased our conversion rate by 45% using the predictive analytics.',
      rating: 5,
      avatar: 'DM'
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'BrandBoost',
      content: 'Finally, a dashboard that actually helps us understand our marketing performance. The ROI tracking is incredible.',
      rating: 5,
      avatar: 'LT'
    },
    {
      name: 'James Wilson',
      role: 'CFO',
      company: 'FinanceFirst',
      content: 'The financial forecasting capabilities have saved us countless hours and improved our accuracy significantly.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Analytics Dashboard Pro - Business Intelligence Platform"
        description="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time dashboards, predictive analytics, and custom reporting for data-driven decisions."
        keywords="AI analytics, business intelligence, data visualization, predictive analytics, dashboard, reporting, data insights"
        canonicalUrl="https://ziontechgroup.com/ai-analytics-dashboard"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-teal-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  Zion AI Analytics Dashboard Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 rounded-lg blur opacity-30"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Transform your data into actionable insights with our AI-powered analytics platform. Real-time dashboards, predictive analytics, and custom reporting for data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <Link to="/contact?service=ai-analytics-dashboard"
                  className="relative group bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                <Link to="#demo"
                  className="border-2 border-green-400 text-green-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-green-400/25"
                >
                  View Demo
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">100+</div>
                  <div className="text-gray-300 text-sm">Integrations</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-400 mb-1">Real-time</div>
                  <div className="text-gray-300 text-sm">Data Updates</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">4.8/5</div>
                  <div className="text-gray-300 text-sm">User Rating</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">5K+</div>
                  <div className="text-gray-300 text-sm">Active Users</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need to transform your data into actionable insights with AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index}
                  className="group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect For <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Every Business</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From sales tracking to financial reporting, our AI analytics adapt to your specific business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index}
                  className="group relative bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm group-hover:text-gray-300 transition-colors">
                      {useCase.description}
                    </p>
                    <div className="space-y-1">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                          <ArrowRightIcon className="w-3 h-3 text-teal-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your analytics needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index}
                  className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl overflow-hidden ${
                    plan.popular 
                      ? 'border-teal-500 shadow-teal-500/20' 
                      : 'border-slate-700 hover:border-green-500 hover:shadow-green-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
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
                  
                  <Link to={plan.cta === 'Contact Sales' ? '/contact' : '/contact?service=ai-analytics-dashboard'}
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg'
                        : 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of satisfied customers who have transformed their data analysis process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index}
                  className="group relative bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-green-900/40 via-slate-900 to-teal-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Ready to Transform Your Data Analysis?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial today and experience the power of AI-driven analytics. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?service=ai-analytics-dashboard"
                className="relative group bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-green-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <a href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">+1 (302) 464-0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a></p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAnalyticsDashboardPage;