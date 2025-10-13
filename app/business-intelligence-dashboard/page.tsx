'use client'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon
  CheckCircleIcon
  ArrowRightIcon
  StarIcon
  GlobeAltIcon
  DocumentTextIcon
  CpuChipIcon
  ShieldCheckIcon
  ClockIcon
  UserGroupIcon
  CurrencyDollarIcon
  PhoneIcon
  EnvelopeIcon
  ChartPieIcon
  TrendingUpIcon
  DatabaseIcon
} from '@heroicons/react/24/outline';
const BusinessIntelligenceDashboard: React.FC = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'Real-time Analytics',
      description: 'Monitor your business metrics in real-time with live data updates and instant insights'
    }
    {
      icon: ChartPieIcon,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your specific business needs and KPIs'
    }
    {
      icon: TrendingUpIcon,
      title: 'Automated Reports',
      description: 'Generate comprehensive reports automatically with scheduled delivery and custom formats'
    }
    {
      icon: DatabaseIcon,
      title: 'Data Integration',
      description: 'Connect to 100+ data sources including CRM, ERP, social media, and cloud platforms'
    }
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions powered by advanced machine learning'
    }
    {
      icon: GlobeAltIcon,
      title: 'Mobile App',
      description: 'Access your dashboards anywhere with our responsive mobile application'
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        '5 dashboards'
        '3 data sources'
        'Basic reports'
        'Email support'
        'Mobile app access'
        '1 user'
      ],
      popular: false
    }
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses with advanced analytics needs',
      features: [
        'Unlimited dashboards'
        '10 data sources'
        'Advanced reports'
        'AI insights'
        'Priority support'
        'Mobile app access'
        '5 users'
        'API access'
      ],
      popular: true
    }
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with complex data requirements',
      features: [
        'Unlimited everything'
        'Unlimited data sources'
        'Custom integrations'
        'White-label options'
        'Dedicated support'
        'Advanced security'
        'Unlimited users'
        'Custom development'
      ],
      popular: false
    }
  ]
  const integrations = [
    { name: 'Salesforce', logo: '🔵' }
    { name: 'HubSpot', logo: '🟠' }
    { name: 'Google Analytics', logo: '🔴' }
    { name: 'Microsoft Dynamics', logo: '🔵' }
    { name: 'Shopify', logo: '🟢' }
    { name: 'Stripe', logo: '🟣' }
    { name: 'Mailchimp', logo: '🟡' }
    { name: 'Zapier', logo: '⚡' }
    { name: 'MySQL', logo: '🐬' }
    { name: 'PostgreSQL', logo: '🐘' }
    { name: 'MongoDB', logo: '🍃' }
    { name: 'AWS', logo: '☁️' }
  ]
  const testimonials = [
    {
      name: 'David Kim',
      company: 'E-commerce Solutions',
      role: 'CEO',
      content: 'The Business Intelligence Dashboard has given us unprecedented visibility into our operations. We\'ve increased efficiency by 40%.',
      rating: 5
    }
    {
      name: 'Lisa Martinez',
      company: 'Retail Chain Inc.',
      role: 'Operations Director',
      content: 'Real-time analytics have transformed how we make decisions. The AI insights are incredibly accurate and actionable.',
      rating: 5
    }
    {
      name: 'James Wilson',
      company: 'SaaS Startup',
      role: 'Data Analyst',
      content: 'Setting up dashboards used to take weeks. Now it takes minutes. The ROI is immediate and substantial.',
      rating: 5
    }
  ]
  return (
    <>
      <Helmet>
        <title>Business Intelligence Dashboard - Real-time Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence platform with real-time analytics, custom dashboards, automated reports, and AI-powered insights. Transform your data into actionable intelligence." />
        <meta name="keywords" content="business intelligence, analytics dashboard, data visualization, real-time analytics, business metrics, KPI dashboard, data insights" />
        <meta property="og:title" content="Business Intelligence Dashboard - Real-time Analytics Platform" />
        <meta property="og:description" content="Advanced business intelligence platform with real-time analytics, custom dashboards, automated reports, and AI-powered insights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/business-intelligence-dashboard" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                <ChartBarIcon className="w-4 h-4 mr-2" />
                Real-time Business Intelligence
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Business Intelligence Dashboard
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your data into actionable insights with our advanced analytics platform. 
                Monitor KPIs, track performance, and make data-driven decisions in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  Watch Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                  <div className="text-gray-300">Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">Real-time</div>
                  <div className="text-gray-300">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5K+</div>
                  <div className="text-gray-300">Dashboards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Data-Driven</span> Decisions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into actionable business intelligence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-cyan-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Connect to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">100+</span> Data Sources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamlessly integrate with your existing tools and platforms to centralize all your data.
              </p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{integration.logo}</div>
                  <div className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Analytics</span> Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our free trial and scale as your business grows.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/25'
                    : 'border-slate-600 hover:border-cyan-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700 hover:scale-105'
                        : 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are transforming their operations with our BI platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Data into Insights?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and discover the power of real-time business intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <PhoneIcon className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <EnvelopeIcon className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <CurrencyDollarIcon className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg">Starting at $49/month</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default BusinessIntelligenceDashboard