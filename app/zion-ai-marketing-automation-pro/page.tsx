import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Zap, Star, ArrowRight, CheckCircle, Users, Clock, Shield, Brain, Mail, Sparkles, BarChart3, Globe, Smartphone } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ZionAIMarketingAutomationPro = () => {
  const features = [
    {
      title: "AI-Powered Campaigns",
      description: "Create and optimize marketing campaigns automatically using advanced AI algorithms",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-Channel Marketing",
      description: "Manage email, social media, SMS, and web push notifications from one platform",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Customer Segmentation",
      description: "Automatically segment customers based on behavior, preferences, and demographics",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Predictive Analytics",
      description: "Predict customer behavior and optimize campaigns for maximum ROI",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "1,000 contacts",
        "5 email campaigns per month",
        "Basic automation",
        "Email support",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "10,000 contacts",
        "Unlimited email campaigns",
        "Advanced automation",
        "Priority support",
        "Custom templates",
        "A/B testing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited contacts",
        "All marketing channels",
        "AI-powered optimization",
        "Dedicated support",
        "Custom integrations",
        "White-label options"
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: "Email Marketing",
      description: "Create personalized email campaigns with AI-generated content and optimal send times",
      icon: <Mail className="w-8 h-8" />
    },
    {
      title: "Social Media",
      description: "Automatically post and engage across all major social media platforms",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Lead Scoring",
      description: "Automatically score and prioritize leads based on engagement and behavior",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "ROI Optimization",
      description: "Continuously optimize campaigns for maximum return on investment",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEOOptimizer
        title="Zion AI Marketing Automation Pro - AI-Powered Marketing Platform | Zion Tech Group"
        description="Automate your marketing with AI-powered campaigns, customer segmentation, and predictive analytics. Increase ROI by 300%. Starting from $49/month."
        keywords="AI marketing automation, marketing AI, automated campaigns, customer segmentation, marketing ROI, email automation"
      />
      
      <Helmet>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-marketing-automation-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
              <Target className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-400 font-medium">AI Marketing Automation Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI Marketing Automation Pro
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your marketing with AI-powered automation. Create personalized campaigns, 
              segment customers intelligently, and maximize ROI with predictive analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center">
                <Target className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">300%</div>
                <div className="text-gray-400">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">AI Optimization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Marketing Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate and optimize your marketing campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Marketing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI understands your customers and optimizes every touchpoint for maximum engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Marketing Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your marketing automation as your business grows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-green-500 scale-105' : 'border-gray-700'
              } hover:border-green-500/50 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                    : 'border border-green-500 text-green-400 hover:bg-green-500/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses who are already using Zion AI Marketing Automation Pro to increase their ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <div className="font-semibold text-white mb-2">Phone</div>
              <a href="tel:+13024640950" className="hover:text-green-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-green-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Address</div>
              <div>364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIMarketingAutomationPro;