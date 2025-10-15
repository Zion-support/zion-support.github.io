import { ArrowRight, MessageCircle, Zap, Target, BarChart3, CheckCircle, Clock, DollarSign, Users, Settings, Globe, Shield, Bot } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";

export default function AIChatbotEnterprise() {
  const features = [
    {
      title: "Enterprise-Grade AI Chatbots",
      description: "Build sophisticated enterprise chatbots with advanced AI capabilities, custom training, and enterprise security",
      icon: <Bot className="w-6 h-6" />,
      included: true
    },
    {
      title: "Advanced Natural Language Processing",
      description: "State-of-the-art NLP that understands complex queries, context, and enterprise terminology",
      icon: <MessageCircle className="w-6 h-6" />,
      included: true
    },
    {
      title: "Multi-Channel Enterprise Deployment",
      description: "Deploy across enterprise systems including CRM, ERP, helpdesk, and internal communication platforms",
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: "Enterprise Analytics & Reporting",
      description: "Comprehensive analytics with custom reporting, compliance tracking, and enterprise dashboards",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: "Custom Integration Hub",
      description: "Connect with enterprise systems including Salesforce, Microsoft, SAP, and custom internal tools",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Advanced Security & Compliance",
      description: "Enterprise-grade security with SSO, encryption, audit trails, and compliance with GDPR, HIPAA, and SOC 2",
      icon: <Shield className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: 199,
      period: "month",
      description: "Perfect for mid-size companies",
      features: [
        "Up to 10 chatbots",
        "Advanced templates",
        "Priority support",
        "Up to 25 user accounts",
        "Standard integrations",
        "Advanced analytics"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: 499,
      period: "month",
      description: "Ideal for large organizations",
      features: [
        "Up to 50 chatbots",
        "Custom templates",
        "Dedicated support",
        "Up to 100 user accounts",
        "All integrations",
        "Custom analytics",
        "Custom training",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise Plus",
      price: 999,
      period: "month",
      description: "For Fortune 500 companies",
      features: [
        "Unlimited chatbots",
        "White-label solution",
        "24/7 dedicated support",
        "Unlimited users",
        "Custom integrations",
        "Custom reporting",
        "Custom training",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const enterpriseStats = [
    { number: "99.9%", label: "Uptime SLA", icon: <Bot className="w-6 h-6" /> },
    { number: "95%", label: "Query Resolution Rate", icon: <Target className="w-6 h-6" /> },
    { number: "200+", label: "Enterprise Integrations", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Enterprise Support", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Fortune 500 Healthcare",
      role: "IT Director",
      content: "AI Chatbot Enterprise has transformed our patient support system. We've achieved 99.9% uptime and 95% query resolution with full HIPAA compliance.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Financial Services",
      role: "Customer Experience Director",
      content: "The enterprise analytics and custom integration features are incredible. Our chatbot now handles complex financial queries across all our systems seamlessly.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Lisa Johnson",
      company: "Manufacturing Giant",
      role: "Operations Manager",
      content: "The advanced security and compliance features have given us complete confidence in our chatbot deployment. We can now handle sensitive data with full audit trails.",
      rating: 5,
      avatar: "LJ"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Chatbot Enterprise - Enterprise-Grade AI Chatbot Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Build enterprise chatbots with AI Chatbot Enterprise - the ultimate enterprise-grade AI chatbot platform. Advanced NLP, enterprise security, and custom integrations. Starting at $199/month."
        />
        <meta
          name="keywords"
          content="enterprise chatbot, AI chatbot enterprise, enterprise NLP, chatbot security, enterprise integrations, compliance, AI chatbot enterprise"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-slate-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(71,85,105,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-500/30 mb-6">
              <MessageCircle className="w-4 h-4 text-slate-400 mr-2" />
              <span className="text-slate-400 text-sm font-medium">#1 Enterprise Chatbot Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 animate-pulse">
                AI Chatbot Enterprise
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate enterprise-grade AI chatbot platform that delivers sophisticated conversational AI for large organizations. 
              Achieve 99.9% uptime with enterprise security and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <RouterLink
                to="/contact"
                className="group bg-gradient-to-r from-slate-500 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-slate-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-slate-400 text-slate-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </RouterLink>
            </div>

            {/* Enterprise Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {enterpriseStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-slate-500/20 to-gray-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-400">
                  Enterprise-Grade Chatbot Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build enterprise-grade chatbots
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-slate-500 to-gray-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-slate-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center mt-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-400">
                  Enterprise Chatbot Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your enterprise needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-slate-500/50 bg-gradient-to-br from-slate-500/10 to-gray-500/10' 
                      : 'border-white/20 hover:border-slate-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-slate-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <RouterLink
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-slate-500 to-gray-600 text-white hover:from-slate-600 hover:to-gray-700 shadow-lg hover:shadow-slate-500/25'
                        : 'border border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </RouterLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Enterprise Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about AI Chatbot Enterprise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <MessageCircle key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-500 to-gray-500 flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-900/30 to-gray-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Building Enterprise Chatbots
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of enterprises who use AI Chatbot Enterprise to transform their customer experience. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="group bg-gradient-to-r from-slate-500 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-slate-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-slate-400 text-slate-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </RouterLink>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}