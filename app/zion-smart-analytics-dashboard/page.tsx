'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  ChartBarIcon, 
  ChartPieIcon, 
  ChartLineIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeAltIcon,
  CpuChipIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  PencilIcon,
  TrashIcon,
  ShareIcon,
  DownloadIcon,
  UploadIcon,
  PrinterIcon,
  ArchiveBoxIcon,
  TagIcon,
  FlagIcon,
  BookmarkIcon,
  HeartIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
  BellSlashIcon,
  LockClosedIcon,
  LockOpenIcon,
  KeyIcon,
  FingerPrintIcon,
  EyeIcon as EyeIconOutline,
  EyeSlashIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  ExclamationCircleIcon,
  CheckCircleIcon as CheckCircleIconOutline,
  XCircleIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  ExclamationTriangleIcon as ExclamationTriangleIconOutline,
  LightBulbIcon,
  FireIcon,
  SunIcon,
  MoonIcon,
  CloudIcon,
  CloudRainIcon,
  CloudSnowIcon,
  CloudSunIcon,
  CloudMoonIcon,
  CloudLightningIcon,
  CloudArrowUpIcon,
  CloudArrowDownIcon,
  CloudCheckIcon,
  CloudXMarkIcon,
  CloudSlashIcon,
  CloudBoltIcon,
  CloudSunIcon as CloudSunIconOutline,
  CloudMoonIcon as CloudMoonIconOutline,
  CloudRainIcon as CloudRainIconOutline,
  CloudSnowIcon as CloudSnowIconOutline,
  CloudLightningIcon as CloudLightningIconOutline,
  CloudArrowUpIcon as CloudArrowUpIconOutline,
  CloudArrowDownIcon as CloudArrowDownIconOutline,
  CloudCheckIcon as CloudCheckIconOutline,
  CloudXMarkIcon as CloudXMarkIconOutline,
  CloudSlashIcon as CloudSlashIconOutline,
  CloudBoltIcon as CloudBoltIconOutline,
  CloudSunIcon as CloudSunIconOutline2,
  CloudMoonIcon as CloudMoonIconOutline2,
  CloudRainIcon as CloudRainIconOutline2,
  CloudSnowIcon as CloudSnowIconOutline2,
  CloudLightningIcon as CloudLightningIconOutline2,
  CloudArrowUpIcon as CloudArrowUpIconOutline2,
  CloudArrowDownIcon as CloudArrowDownIconOutline2,
  CloudCheckIcon as CloudCheckIconOutline2,
  CloudXMarkIcon as CloudXMarkIconOutline2,
  CloudSlashIcon as CloudSlashIconOutline2,
  CloudBoltIcon as CloudBoltIconOutline2
} from '@heroicons/react/24/outline';

const ZionSmartAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'Real-time Data Visualization',
      description: 'Transform complex data into interactive charts, graphs, and dashboards that update in real-time.',
      benefits: ['50+ chart types available', 'Real-time data streaming', 'Interactive drill-down capabilities', 'Custom color schemes']
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Insights',
      description: 'Leverage machine learning algorithms to automatically identify trends, patterns, and anomalies in your data.',
      benefits: ['Automated trend detection', 'Anomaly alerts', 'Predictive analytics', 'Smart recommendations']
    },
    {
      icon: CogIcon,
      title: 'Custom Dashboard Builder',
      description: 'Create personalized dashboards with drag-and-drop functionality and no coding required.',
      benefits: ['Drag-and-drop interface', 'Pre-built templates', 'Custom widgets', 'Responsive design']
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-source Data Integration',
      description: 'Connect to 100+ data sources including databases, APIs, cloud services, and file uploads.',
      benefits: ['100+ integrations', 'Real-time sync', 'Data transformation', 'Error handling']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 dashboards',
        '10 data sources',
        'Basic AI insights',
        'Email support',
        'Standard templates',
        '1GB data storage',
        'Mobile app access',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Unlimited dashboards',
        '50 data sources',
        'Advanced AI analytics',
        'Priority support',
        'Custom templates',
        '10GB data storage',
        'API access',
        'Advanced reporting',
        'Team collaboration',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Unlimited data sources',
        'Custom AI models',
        '24/7 phone support',
        'Custom development',
        'Unlimited storage',
        'Advanced security',
        'Custom integrations',
        'Dedicated account manager',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Data Analyst',
      content: 'Smart Analytics Dashboard reduced our reporting time by 80% and helped us identify trends we never noticed before. The AI insights are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'VP of Operations',
      content: 'The real-time dashboards give us instant visibility into our business performance. We can make data-driven decisions faster than ever.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'ScaleUp Solutions',
      role: 'Marketing Director',
      content: 'The custom dashboard builder is so intuitive. We created exactly what we needed without any technical expertise.',
      rating: 5
    }
  ];

  const integrations = [
    { name: 'Google Analytics', logo: '📊' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'HubSpot', logo: '🎯' },
    { name: 'MySQL', logo: '🗄️' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Azure', logo: '🔵' },
    { name: 'Google Cloud', logo: '🌐' },
    { name: 'Stripe', logo: '💳' },
    { name: 'PayPal', logo: '💰' },
    { name: 'Shopify', logo: '🛒' },
    { name: 'WooCommerce', logo: '🛍️' },
    { name: 'Mailchimp', logo: '📧' },
    { name: 'Slack', logo: '💬' },
    { name: 'Microsoft Teams', logo: '👥' },
    { name: 'Zapier', logo: '⚡' },
    { name: 'Webhook', logo: '🔗' },
    { name: 'REST API', logo: '🔌' },
    { name: 'GraphQL', logo: '📡' }
  ];

  return (
    <>
      <SEOHead 
        title="Smart Analytics Dashboard - AI-Powered Business Intelligence | Zion Tech Group"
        description="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time visualization, predictive analytics, and custom dashboards for data-driven decision making."
        keywords="analytics dashboard, business intelligence, data visualization, AI insights, real-time analytics, custom dashboards, data integration"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="cyber-grid"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">AI-Powered Analytics</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Smart Analytics Dashboard
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with AI-powered analytics, real-time visualization, and intelligent automation that drives business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
                  <div className="text-gray-300 text-sm">Faster Reporting</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Chart Types</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                  <div className="text-gray-300 text-sm">Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">Real-time</div>
                  <div className="text-gray-300 text-sm">Data Updates</div>
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
                Powerful <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Analytics Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge technology to turn your data into competitive advantages and actionable insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Seamless <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect to 100+ data sources and tools you already use. No complex setup required.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 text-center">
                  <div className="text-3xl mb-2">{integration.logo}</div>
                  <div className="text-sm text-gray-300 font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core analytics features and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-blue-500 shadow-blue-500/20' 
                    : 'border-slate-700 hover:border-blue-500 hover:shadow-blue-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their data analysis with Smart Analytics Dashboard.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how AI-powered analytics can revolutionize your business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Start Free Trial
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

export default ZionSmartAnalyticsDashboardPage;