import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckIcon, 
  ArrowRightIcon, 
  ChartBarIcon,
  CpuChipIcon,
  EyeIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function AiAnalyticsDashboard() {
  const features = [
    "Real-time data visualization and interactive dashboards",
    "AI-powered insights and predictive analytics",
    "Custom KPI tracking and automated reporting",
    "Multi-source data integration (50+ platforms)",
    "Advanced filtering and segmentation tools",
    "Automated alerts and anomaly detection",
    "White-label dashboard customization",
    "API access for custom integrations"
  ];

  const analyticsTypes = [
    {
      title: "Business Intelligence",
      description: "Comprehensive BI dashboards with KPIs and metrics",
      price: "$99/month",
      icon: "📊"
    },
    {
      title: "Marketing Analytics",
      description: "Track campaigns, conversions, and ROI across channels",
      price: "$79/month",
      icon: "📈"
    },
    {
      title: "Sales Analytics",
      description: "Monitor sales performance and pipeline metrics",
      price: "$89/month",
      icon: "💰"
    },
    {
      title: "Customer Analytics",
      description: "Understand customer behavior and engagement",
      price: "$69/month",
      icon: "👥"
    },
    {
      title: "Website Analytics",
      description: "Advanced web analytics with heatmaps and funnels",
      price: "$59/month",
      icon: "🌐"
    },
    {
      title: "Social Media Analytics",
      description: "Track social media performance and engagement",
      price: "$49/month",
      icon: "📱"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "5 dashboards",
        "10 data sources",
        "Basic visualizations",
        "Email support",
        "Standard templates",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Unlimited dashboards",
        "50 data sources",
        "Advanced visualizations",
        "Priority support",
        "Custom templates",
        "Real-time reports",
        "AI insights",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited everything",
        "Custom data sources",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
        "Training included"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Real-time Insights",
      description: "Get instant insights with live data updates",
      icon: "⚡"
    },
    {
      title: "AI-Powered Predictions",
      description: "Predict trends and outcomes with machine learning",
      icon: "🔮"
    },
    {
      title: "Save 90% Time",
      description: "Automate reporting and data analysis",
      icon: "⏰"
    },
    {
      title: "Better Decisions",
      description: "Make data-driven decisions with confidence",
      icon: "🎯"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group | Business Intelligence Platform</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard for business intelligence. Real-time insights, predictive analytics, and custom reporting. Starting at $99/month." />
        <meta name="keywords" content="AI analytics dashboard, business intelligence, data visualization, predictive analytics, KPI tracking, reporting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <ChartBarIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Analytics Dashboard
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform Data Into Actionable Insights
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Advanced AI-powered analytics platform that transforms your data into 
              actionable insights. Real-time dashboards, predictive analytics, and 
              automated reporting to drive better business decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                View Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Trusted by 2,000+ businesses worldwide</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold text-white">Microsoft</div>
                <div className="text-2xl font-bold text-white">Salesforce</div>
                <div className="text-2xl font-bold text-white">HubSpot</div>
                <div className="text-2xl font-bold text-white">Tableau</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Analytics Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful features that transform your data into business intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive analytics for every aspect of your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">
                  {type.description}
                </p>
                <div className="text-purple-400 font-semibold text-lg">
                  {type.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to turn data into actionable insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckIcon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your analytics needs. All plans include 14-day free trial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-400 ring-2 ring-purple-400/20' 
                  : 'border-white/20 hover:border-purple-400'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of businesses already using our analytics platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Our data experts are here to help you build the perfect analytics solution
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}