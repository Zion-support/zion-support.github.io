import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  CpuChipIcon,
  EyeIcon,
  TrendingUpIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function AiBusinessIntelligenceDashboard() {
  const features = [
    {
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms automatically identify trends, patterns, and opportunities in your data",
      icon: CpuChipIcon
    },
    {
      title: "Real-time Analytics",
      description: "Monitor your business performance with live dashboards that update in real-time",
      icon: ClockIcon
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using AI-powered predictive modeling",
      icon: TrendingUpIcon
    },
    {
      title: "Custom Visualizations",
      description: "Create stunning, interactive charts and graphs that make complex data easy to understand",
      icon: EyeIcon
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "5 data sources",
        "Basic AI insights",
        "10 custom dashboards",
        "Email support",
        "Standard reports",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "25 data sources",
        "Advanced AI features",
        "Unlimited dashboards",
        "Priority support",
        "Custom reports",
        "API access",
        "Team collaboration",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Premium AI features",
        "White-label options",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const dataSources = [
    {
      name: "Sales & CRM",
      description: "Connect to Salesforce, HubSpot, Pipedrive, and other CRM systems",
      icon: "💼"
    },
    {
      name: "Marketing",
      description: "Integrate with Google Analytics, Facebook Ads, LinkedIn, and marketing tools",
      icon: "📈"
    },
    {
      name: "Financial",
      description: "Connect to QuickBooks, Xero, Stripe, and other financial platforms",
      icon: "💰"
    },
    {
      name: "E-commerce",
      description: "Integrate with Shopify, WooCommerce, Amazon, and e-commerce platforms",
      icon: "🛒"
    },
    {
      name: "Social Media",
      description: "Connect to Facebook, Instagram, Twitter, LinkedIn, and social platforms",
      icon: "📱"
    },
    {
      name: "Databases",
      description: "Connect to MySQL, PostgreSQL, MongoDB, and other databases",
      icon: "🗄️"
    }
  ];

  const dashboardTypes = [
    {
      title: "Executive Dashboard",
      description: "High-level KPIs and metrics for C-level executives and stakeholders",
      features: ["Revenue trends", "Customer metrics", "Operational efficiency", "Strategic goals"]
    },
    {
      title: "Sales Dashboard",
      description: "Comprehensive sales performance tracking and forecasting",
      features: ["Pipeline analysis", "Conversion rates", "Sales forecasting", "Team performance"]
    },
    {
      title: "Marketing Dashboard",
      description: "Marketing campaign performance and ROI analysis",
      features: ["Campaign metrics", "Lead generation", "Cost per acquisition", "ROI analysis"]
    },
    {
      title: "Financial Dashboard",
      description: "Financial health monitoring and budget tracking",
      features: ["Revenue analysis", "Expense tracking", "Profit margins", "Cash flow"]
    }
  ];

  const benefits = [
    {
      title: "Make Data-Driven Decisions",
      description: "Access real-time insights that help you make informed business decisions"
    },
    {
      title: "Save 20+ Hours Per Week",
      description: "Automate report generation and data analysis, freeing up time for strategic work"
    },
    {
      title: "Identify Growth Opportunities",
      description: "AI-powered insights reveal hidden patterns and growth opportunities in your data"
    },
    {
      title: "Improve Team Collaboration",
      description: "Share insights across teams with interactive dashboards and automated reports"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Dashboard - Smart Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered business intelligence dashboards. Real-time analytics, predictive insights, and custom visualizations. Starting at $99/month." />
        <meta name="keywords" content="AI business intelligence, BI dashboard, data analytics, business intelligence platform, AI analytics, data visualization" />
        <meta name="canonical" content="https://ziontechgroup.com/ai-business-intelligence-dashboard" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Business Intelligence Dashboard
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with AI-powered analytics and insights. 
              Make data-driven decisions with real-time dashboards and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Watch Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI business intelligence platform combines machine learning with intuitive design
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connect All Your Data Sources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integrate with 100+ popular business tools and platforms to get a complete view of your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataSources.map((source, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 text-center hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{source.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{source.name}</h3>
                <p className="text-gray-300">{source.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Types Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pre-Built Dashboard Templates
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our professionally designed dashboard templates
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {dashboardTypes.map((dashboard, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{dashboard.title}</h3>
                <p className="text-gray-300 mb-6">{dashboard.description}</p>
                <ul className="space-y-2">
                  {dashboard.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Measurable Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the real impact our AI business intelligence platform brings to your organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business intelligence needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500 ring-2 ring-purple-500/20' 
                  : 'border-slate-600 hover:border-purple-500'
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
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of businesses already using our AI business intelligence platform to make data-driven decisions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}