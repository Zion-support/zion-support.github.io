import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Star, 
  BarChart3, 
  Users, 
  Brain, 
  DollarSign,
  Calendar,
  Award,
  Zap
} from 'lucide-react';

const ZionAISalesPredictorPage = () => {
  const features = [
    {
      title: "Revenue Forecasting",
      description: "Predict future revenue with 95% accuracy using advanced machine learning algorithms",
      icon: <DollarSign className="w-6 h-6" />,
      stat: "95% accuracy"
    },
    {
      title: "Lead Scoring",
      description: "AI-powered lead scoring to identify high-value prospects and prioritize sales efforts",
      icon: <Target className="w-6 h-6" />,
      stat: "3x better conversion"
    },
    {
      title: "Churn Prediction",
      description: "Identify customers at risk of churning and take proactive retention actions",
      icon: <Users className="w-6 h-6" />,
      stat: "40% churn reduction"
    },
    {
      title: "Sales Analytics",
      description: "Comprehensive analytics and insights to optimize your sales process",
      icon: <BarChart3 className="w-6 h-6" />,
      stat: "360° visibility"
    }
  ];

  const integrations = [
    { name: "Salesforce", icon: "🔗" },
    { name: "HubSpot", icon: "🔗" },
    { name: "Pipedrive", icon: "🔗" },
    { name: "Zoho CRM", icon: "🔗" },
    { name: "Microsoft Dynamics", icon: "🔗" },
    { name: "Custom APIs", icon: "🔗" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for small sales teams",
      features: [
        "Up to 1,000 contacts",
        "Basic revenue forecasting",
        "Lead scoring",
        "Email support",
        "Standard integrations",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing sales teams",
      features: [
        "Up to 10,000 contacts",
        "Advanced forecasting",
        "Churn prediction",
        "Priority support",
        "All integrations",
        "Real-time analytics",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large sales organizations",
      features: [
        "Unlimited contacts",
        "Premium AI features",
        "Custom AI training",
        "Advanced analytics",
        "24/7 dedicated support",
        "White-label options",
        "API access",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      company: "Tech Solutions Inc.",
      role: "VP of Sales",
      content: "Zion AI Sales Predictor increased our forecast accuracy from 65% to 92%. We can now make data-driven decisions with confidence.",
      rating: 5
    },
    {
      name: "Jennifer Lee",
      company: "SaaS Startup",
      role: "Sales Director",
      content: "The lead scoring feature helped us focus on high-value prospects. Our conversion rate increased by 180% in just 3 months.",
      rating: 5
    },
    {
      name: "David Thompson",
      company: "Enterprise Corp",
      role: "Chief Revenue Officer",
      content: "Churn prediction saved us $2M in lost revenue last quarter. The AI insights are incredibly accurate and actionable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Sales Predictor - Intelligent Sales Forecasting | Zion Tech Group</title>
        <meta name="description" content="Predict sales with 95% accuracy using AI-powered forecasting. Boost revenue, reduce churn, and optimize your sales process with intelligent analytics." />
        <meta name="keywords" content="AI sales forecasting, sales prediction, lead scoring, churn prediction, sales analytics, revenue forecasting, CRM integration" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Sales Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Sales Predictor
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Predict sales with 95% accuracy using advanced AI. Boost revenue, reduce churn, 
            and optimize your sales process with intelligent forecasting and analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300 text-xs md:text-sm">Forecast Accuracy</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">3x</div>
              <div className="text-gray-300 text-xs md:text-sm">Better Conversion</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-gray-300 text-xs md:text-sm">Churn Reduction</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">$2M+</div>
              <div className="text-gray-300 text-xs md:text-sm">Revenue Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              AI-Powered Sales Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced AI capabilities to optimize every aspect of your sales process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-2xl font-bold text-cyan-400">{feature.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless CRM Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Works with your existing CRM and sales tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {integration.name}
                </h3>
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
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for sales teams of all sizes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Sales Teams Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Sales Predictor
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Predict Your Sales Success?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of sales teams already using Zion AI Sales Predictor to boost 
            their revenue and optimize their sales process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAISalesPredictorPage;