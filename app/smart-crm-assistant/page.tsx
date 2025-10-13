import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Clock, DollarSign, Sparkles, Target, Globe, FileText, Search, TrendingUp, Phone, Calendar, MessageSquare, PieChart } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';

const SmartCRMAssistantPage = () => {
  const features = [
    {
      title: "AI-Powered Lead Scoring",
      description: "Automatically score and prioritize leads using machine learning algorithms",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Automatic lead scoring", "Behavioral analysis", "Conversion prediction"]
    },
    {
      title: "Automated Follow-ups",
      description: "Never miss a follow-up with intelligent automation and personalized sequences",
      icon: <MessageSquare className="w-6 h-6" />,
      benefits: ["Email sequences", "SMS automation", "Call scheduling"]
    },
    {
      title: "Sales Forecasting",
      description: "Predict future sales with AI-driven forecasting and trend analysis",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Revenue predictions", "Pipeline analysis", "Risk assessment"]
    },
    {
      title: "Contact Management",
      description: "Centralized contact database with smart organization and relationship mapping",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Unified contact view", "Relationship mapping", "Interaction history"]
    },
    {
      title: "Pipeline Management",
      description: "Visualize and manage your sales pipeline with drag-and-drop functionality",
      icon: <PieChart className="w-6 h-6" />,
      benefits: ["Visual pipeline", "Stage tracking", "Deal progression"]
    },
    {
      title: "Analytics & Reports",
      description: "Comprehensive analytics and customizable reports for data-driven decisions",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Performance metrics", "Custom reports", "Real-time dashboards"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 contacts",
        "Basic lead scoring",
        "Email automation",
        "Pipeline management",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing sales teams",
      features: [
        "Up to 10,000 contacts",
        "Advanced AI features",
        "Multi-channel automation",
        "Sales forecasting",
        "Advanced analytics",
        "Priority support",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited contacts",
        "Custom AI models",
        "API access",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Software Solutions Inc.",
      role: "Sales Director",
      content: "Smart CRM Assistant increased our conversion rate by 40%. The AI lead scoring is incredibly accurate and saves us hours every week.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "Marketing Agency",
      role: "Account Manager",
      content: "The automated follow-ups are a game-changer. We never miss an opportunity and our response time has improved dramatically.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "E-commerce Platform",
      role: "VP of Sales",
      content: "The sales forecasting feature helps us plan better and make more informed decisions. It's like having a crystal ball for our business.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="Smart CRM Assistant - AI-Powered Customer Relationship Management | Zion Tech Group"
        description="Transform your sales process with Smart CRM Assistant. Features AI lead scoring, automated follow-ups, sales forecasting, and comprehensive analytics. Starting at $49/month."
        keywords="CRM software, customer relationship management, AI lead scoring, sales automation, sales forecasting, contact management, sales pipeline"
        canonical="https://ziontechgroup.com/smart-crm-assistant"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">#1 AI-Powered CRM Solution</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-glow">
            Smart CRM Assistant
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Revolutionize your sales process with AI-powered customer relationship management. 
            Automate follow-ups, score leads intelligently, and forecast sales with unprecedented accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="cyber-button inline-flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="#demo" 
              className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Higher Conversion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-gray-300 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Powerful CRM Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage relationships, close deals, and grow your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Trusted by Sales Teams Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Smart CRM Assistant
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="hologram-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-glow">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of sales teams who are already using Smart CRM Assistant to close more deals and grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartCRMAssistantPage;