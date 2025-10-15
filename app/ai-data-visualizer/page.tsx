'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ChartBarIcon, 
  EyeIcon, 
  CogIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  BarChart3Icon,
  PieChartIcon,
  TrendingUpIcon
} from '@heroicons/react/24/outline';

const AIDataVisualizerPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3Icon,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards with drag-and-drop simplicity',
      price: '$149/mo'
    },
    {
      icon: TrendingUpIcon,
      title: 'Real-time Analytics',
      description: 'Monitor your data in real-time with live updates and alerts',
      price: '$199/mo'
    },
    {
      icon: PieChartIcon,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and automated insights from your data',
      price: '$249/mo'
    },
    {
      icon: EyeIcon,
      title: 'Custom Visualizations',
      description: 'Build custom charts and graphs tailored to your specific needs',
      price: '$179/mo'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 dashboards',
        'Basic chart types',
        'Data export',
        'Email support',
        'Mobile responsive'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited dashboards',
        'Advanced visualizations',
        'Real-time data',
        'Priority support',
        'API access',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'White-label solution',
        'Custom integrations',
        'Advanced security',
        'Dedicated support',
        'On-premise deployment',
        'Custom AI models'
      ],
      popular: false
    }
  ];

  const chartTypes = [
    { name: 'Bar Charts', description: 'Compare values across categories' },
    { name: 'Line Charts', description: 'Track trends over time' },
    { name: 'Pie Charts', description: 'Show proportional relationships' },
    { name: 'Scatter Plots', description: 'Identify correlations' },
    { name: 'Heat Maps', description: 'Visualize data density' },
    { name: 'Gauge Charts', description: 'Display performance metrics' },
    { name: 'Tree Maps', description: 'Show hierarchical data' },
    { name: 'Sankey Diagrams', description: 'Track flow and relationships' }
  ];

  return (
    <>
      <SEOHead 
        title="AI Data Visualizer - Advanced Analytics & Visualization Platform | Zion Tech Group"
        description="Transform your data into actionable insights with AI-powered data visualization. Interactive dashboards, real-time analytics, and intelligent recommendations. Start free trial."
        keywords="data visualization, analytics dashboard, business intelligence, data insights, chart builder, real-time analytics"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                <SparklesIcon className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-300 text-sm font-medium">AI-Powered Visualization</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Data Visualizer
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform complex data into stunning, interactive visualizations. 
                Make data-driven decisions with AI-powered insights and real-time analytics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="relative group bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Chart Types</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
                  <div className="text-gray-300 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Visualization Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Create stunning visualizations with our comprehensive suite of tools and AI-powered insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <div className="text-cyan-400 font-semibold">
                    {feature.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chart Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Chart Types</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from 50+ chart types to create the perfect visualization for your data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chartTypes.map((chart, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ChartBarIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                    {chart.name}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {chart.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your data visualization needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                  tier.popular 
                    ? 'border-cyan-500 shadow-cyan-500/20' 
                    : 'border-slate-700 hover:border-cyan-500'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    {tier.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Visualize Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating stunning visualizations today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                <span className="relative z-10 flex items-center">
                  Start Your Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
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

export default AIDataVisualizerPage;