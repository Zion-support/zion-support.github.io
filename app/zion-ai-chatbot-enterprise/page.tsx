import React from "react";
import { ArrowRight, CheckCircle, Star, MessageSquare, Bot, Brain, Zap, Shield, Target, Users, BarChart3, Settings, Smartphone, Laptop, Monitor, Sparkles, Award, TrendingUp, DollarSign, Clock, Globe, Mail, Phone, MapPin, Headphones, Mic, Volume2, Eye, Search, Filter, Activity, Lock, Unlock, CheckCircle2, AlertTriangle, Info, HelpCircle, MessageCircle, Send, Reply, ThumbsUp, ThumbsDown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function ZionAIChatbotEnterprise() {
  const features = [
    "Advanced NLP Capabilities",
    "Multi-channel Deployment",
    "Knowledge Base Integration",
    "Human Handoff Automation",
    "Conversation Analytics",
    "Custom Training & Fine-tuning",
    "Enterprise Security",
    "Scalable Infrastructure",
    "Voice Integration",
    "Sentiment Analysis",
    "Intent Recognition",
    "Context Management"
  ];

  const benefits = [
    "Reduce support costs by 70%",
    "Improve response times by 90%",
    "Scale customer service 10x",
    "Enhance user satisfaction",
    "24/7 availability",
    "Consistent service quality"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      originalPrice: "$399",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 conversations/month",
        "Basic NLP capabilities",
        "Email support",
        "Standard integrations",
        "Basic analytics",
        "Single channel deployment"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      originalPrice: "$799",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced NLP & sentiment analysis",
        "Priority support",
        "Multi-channel deployment",
        "Advanced analytics & reporting",
        "Custom training",
        "API access",
        "Knowledge base integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      originalPrice: "$1,599",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited conversations",
        "Premium AI capabilities",
        "24/7 dedicated support",
        "White-label solutions",
        "Custom analytics dashboard",
        "Advanced security features",
        "SLA guarantee",
        "Custom integrations",
        "On-premise deployment",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const channels = [
    {
      title: "Website Chat",
      description: "Deploy chatbots on your website for instant customer support and lead generation",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Apps",
      description: "Integrate chatbots into iOS and Android applications for seamless user experience",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Social Media",
      description: "Deploy chatbots on Facebook, WhatsApp, and other social platforms",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Voice Assistants",
      description: "Create voice-enabled chatbots for phone calls and voice interactions",
      icon: <Mic className="w-8 h-8" />,
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Email Support",
      description: "Automate email responses and provide intelligent email support",
      icon: <Mail className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "SMS & Messaging",
      description: "Deploy chatbots via SMS and messaging platforms for instant communication",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const industries = [
    {
      title: "E-commerce",
      description: "Handle product inquiries, order tracking, and customer support for online stores",
      icon: <Target className="w-6 h-6" />,
      savings: "60%"
    },
    {
      title: "Healthcare",
      description: "Provide patient support, appointment scheduling, and medical information",
      icon: <Activity className="w-6 h-6" />,
      savings: "70%"
    },
    {
      title: "Banking & Finance",
      description: "Assist with account inquiries, transaction support, and financial guidance",
      icon: <DollarSign className="w-6 h-6" />,
      savings: "65%"
    },
    {
      title: "Travel & Hospitality",
      description: "Help with bookings, travel information, and customer service",
      icon: <Globe className="w-6 h-6" />,
      savings: "55%"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "E-commerce Plus",
      role: "Customer Success Manager",
      content: "Zion AI Chatbot Enterprise has transformed our customer service. We've reduced response times by 90% and our customer satisfaction scores have increased by 40%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "HealthTech Solutions",
      role: "Operations Director",
      content: "The chatbot handles patient inquiries 24/7 with incredible accuracy. It's like having a dedicated support team that never sleeps and always provides consistent answers.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "FinanceFirst",
      role: "Head of Customer Service",
      content: "We've reduced our support costs by 70% while improving customer satisfaction. The AI understands complex financial queries and provides accurate responses.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "90%", label: "Response Time Reduction", icon: <Clock className="w-6 h-6" /> },
    { number: "70%", label: "Cost Reduction", icon: <DollarSign className="w-6 h-6" /> },
    { number: "24/7", label: "Availability", icon: <Shield className="w-6 h-6" /> },
    { number: "10x", label: "Scale Capacity", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Chatbot Enterprise - Advanced Conversational AI | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform customer service with Zion AI Chatbot Enterprise. Advanced conversational AI with multi-channel deployment, NLP, and enterprise security. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="AI chatbot, conversational AI, customer service automation, chatbot enterprise, NLP chatbot, multi-channel chatbot, chatbot deployment"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-chatbot-enterprise" />
      </Helmet>
      <SEOOptimizer
        title="Zion AI Chatbot Enterprise - Advanced Conversational AI | Zion Tech Group"
        description="Transform customer service with Zion AI Chatbot Enterprise. Advanced conversational AI with multi-channel deployment, NLP, and enterprise security. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 Enterprise Chatbot Platform 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI Chatbot Enterprise
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform customer service with advanced conversational AI. Multi-channel deployment, 
                enterprise security, and intelligent automation for superior customer experiences.
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
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Channels Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Deploy Across All Channels
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Reach your customers wherever they are with multi-channel chatbot deployment capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {channels.map((channel, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${channel.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{channel.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Chatbot Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive conversational AI capabilities powered by cutting-edge natural language processing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized chatbot solutions designed for different industries and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{industry.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {industry.description}
                    </p>
                    <div className="text-xl font-bold text-green-400">
                      {industry.savings}
                    </div>
                    <div className="text-xs text-gray-400">Cost Reduction</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include a 14-day free trial with no credit card required.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? "border-cyan-500/50 shadow-cyan-500/25" 
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 line-through">${plan.originalPrice}</span>
                      <span className="text-gray-300">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-lg hover:shadow-cyan-500/25"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Chatbot Enterprise?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your customer service with intelligent automation that delivers measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
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
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who trust our chatbot solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Customer Service?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Start your free 14-day trial today. No credit card required. Experience the power of AI chatbots.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
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
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}