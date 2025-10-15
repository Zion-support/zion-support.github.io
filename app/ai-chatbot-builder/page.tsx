import { ArrowRight, MessageCircle, Zap, Target, BarChart3, CheckCircle, Clock, DollarSign, Users, Settings, Globe, Shield, Bot } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";

export default function AIChatbotBuilder() {
  const features = [
    {
      title: "AI-Powered Chatbot Creation",
      description: "Build intelligent chatbots with advanced AI capabilities using our drag-and-drop builder and pre-built templates",
      icon: <Bot className="w-6 h-6" />,
      included: true
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP that understands context, sentiment, and intent to provide human-like conversations",
      icon: <MessageCircle className="w-6 h-6" />,
      included: true
    },
    {
      title: "Multi-Channel Deployment",
      description: "Deploy your chatbot across websites, mobile apps, social media, and messaging platforms",
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: "Conversation Analytics",
      description: "Track and analyze chatbot performance with detailed insights and conversation metrics",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: "Integration Hub",
      description: "Connect with 100+ third-party services including CRM, helpdesk, and e-commerce platforms",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Custom Training",
      description: "Train your chatbot on your specific data and knowledge base for personalized responses",
      icon: <Settings className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 29,
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1 chatbot",
        "Basic templates",
        "Email support",
        "1 user account",
        "Standard integrations",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 79,
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 5 chatbots",
        "Premium templates",
        "Priority support",
        "Up to 10 user accounts",
        "All integrations",
        "Advanced analytics",
        "Custom training",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited chatbots",
        "Custom templates",
        "Dedicated support",
        "Unlimited users",
        "Custom integrations",
        "White-label solution",
        "Custom training",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const chatbotStats = [
    { number: "95%", label: "Customer Satisfaction", icon: <MessageCircle className="w-6 h-6" /> },
    { number: "80%", label: "Query Resolution Rate", icon: <Target className="w-6 h-6" /> },
    { number: "100+", label: "Platform Integrations", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Automated Support", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      company: "E-commerce Store",
      role: "Customer Success Manager",
      content: "AI Chatbot Builder has transformed our customer support. We've achieved 95% customer satisfaction and resolved 80% of queries automatically.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "David Chen",
      company: "SaaS Platform",
      role: "Support Director",
      content: "The natural language processing and multi-channel deployment features are incredible. Our chatbot now handles complex conversations across all platforms.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Lisa Johnson",
      company: "Financial Services",
      role: "Operations Manager",
      content: "The conversation analytics and integration hub have given us complete visibility into our customer interactions. We can now optimize our support process continuously.",
      rating: 5,
      avatar: "LJ"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - AI-Powered Chatbot Creation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Build intelligent chatbots with AI Chatbot Builder - the ultimate AI-powered chatbot creation platform. Natural language processing, multi-channel deployment, and conversation analytics. Starting at $29/month."
        />
        <meta
          name="keywords"
          content="chatbot builder, AI chatbot, natural language processing, chatbot creation, conversation analytics, multi-channel deployment, AI chatbot builder"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <MessageCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">#1 Chatbot Builder Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 animate-pulse">
                AI Chatbot Builder
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered chatbot creation platform that helps you build intelligent, conversational chatbots. 
              Achieve 95% customer satisfaction with advanced NLP and multi-channel deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <RouterLink
                to="/contact"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </RouterLink>
            </div>

            {/* Chatbot Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {chatbotStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Advanced Chatbot Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build intelligent chatbots
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Chatbot Builder Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your chatbot needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-green-500/50 bg-gradient-to-br from-green-500/10 to-emerald-500/10' 
                      : 'border-white/20 hover:border-green-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">${plan.price}</span>
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
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-green-500/25'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
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
                Trusted by Customer Success Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about AI Chatbot Builder
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <MessageCircle key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Building Your Chatbot
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses who use AI Chatbot Builder to improve their customer support. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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