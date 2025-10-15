import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Target, BarChart3, CheckCircle, ArrowRight, Star, Users, Zap } from 'lucide-react';

const AiEmailMarketingPage: React.FC = () => {
  const features = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "AI-Powered Email Generation",
      description: "Create compelling email campaigns with AI that understands your audience and brand voice"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Segmentation",
      description: "Automatically segment your audience based on behavior, preferences, and engagement patterns"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "AI-driven insights to optimize send times, subject lines, and content for maximum engagement"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Workflows",
      description: "Intelligent email sequences that adapt based on recipient behavior and engagement"
    }
  ];

  const capabilities = [
    "Email Campaign Creation",
    "A/B Testing", 
    "Personalization",
    "Automation Workflows",
    "Analytics & Reporting",
    "List Management",
    "Template Library",
    "Deliverability Optimization",
    "Subject Line Optimization",
    "Send Time Optimization",
    "Content Recommendations",
    "Performance Tracking"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$69",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 emails/month",
        "5 email templates",
        "Basic AI features",
        "Email support",
        "Standard analytics",
        "Basic automation"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month", 
      description: "Ideal for growing businesses",
      features: [
        "Up to 50,000 emails/month",
        "25 email templates",
        "Advanced AI features",
        "Priority support",
        "Advanced analytics",
        "Advanced automation",
        "A/B testing",
        "API integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Unlimited templates",
        "Full AI suite",
        "24/7 dedicated support",
        "Custom development",
        "White-label options",
        "Advanced integrations",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Marketing - Zion Tech Group | Intelligent Email Campaigns</title>
        <meta name="description" content="Revolutionary AI-powered email marketing platform with smart segmentation, predictive analytics, and automated workflows for maximum engagement." />
        <meta name="keywords" content="ai email marketing, email campaigns, marketing automation, email personalization, email analytics" />
        <meta property="og:title" content="AI Email Marketing - Zion Tech Group" />
        <meta property="og:description" content="Intelligent email marketing powered by AI" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Email Marketing</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your email marketing with AI-powered campaigns that understand your audience, 
                optimize for engagement, and deliver results at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Intelligent Email Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered email marketing that adapts to your audience and maximizes engagement
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Complete Email Marketing Suite</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, send, and optimize email campaigns
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {capability}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your email marketing needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">3x</div>
                <div className="text-gray-300 text-lg">Higher Open Rates</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">5x</div>
                <div className="text-gray-300 text-lg">Better Click Rates</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300 text-lg">Time Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-lg">Deliverability</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Email Marketing?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using AI Email Marketing to create engaging, 
                personalized campaigns that drive results. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiEmailMarketingPage;