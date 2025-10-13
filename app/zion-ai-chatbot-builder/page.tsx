import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Bot, Zap, Star, ArrowRight, CheckCircle, Users, Clock, Sparkles, MessageCircle, Brain, Settings, BarChart3 } from 'lucide-react';

export default function ZionAIChatbotBuilder() {
  const features = [
    {
      title: "No-Code Chatbot Builder",
      description: "Create sophisticated chatbots without writing a single line of code using our intuitive drag-and-drop interface",
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: "Advanced AI Training",
      description: "Train your chatbot with your own data and knowledge base for accurate, context-aware responses",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Multi-Channel Deployment",
      description: "Deploy your chatbot across websites, mobile apps, social media, and messaging platforms",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      title: "Real-time Analytics",
      description: "Track conversation metrics, user satisfaction, and performance insights with detailed analytics",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Custom Integrations",
      description: "Connect with CRM, helpdesk, payment systems, and other business tools seamlessly",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Live Agent Handoff",
      description: "Smoothly transfer complex conversations to human agents when needed",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "1 chatbot",
        "1,000 conversations/month",
        "Basic AI training",
        "Email support",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "5 chatbots",
        "10,000 conversations/month",
        "Advanced AI training",
        "Priority support",
        "Custom integrations",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with high-volume needs",
      features: [
        "Unlimited chatbots",
        "Unlimited conversations",
        "Custom AI training",
        "Dedicated support",
        "White-label solution",
        "API access",
        "Custom development"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "24/7 automated customer support with instant responses and issue resolution",
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      title: "Lead Generation",
      description: "Qualify leads and capture contact information through engaging conversations",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "E-commerce Assistant",
      description: "Help customers find products, answer questions, and process orders",
      icon: <Bot className="w-8 h-8" />
    },
    {
      title: "Booking & Scheduling",
      description: "Automate appointment booking and scheduling for service businesses",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "TechStart Solutions",
      role: "Customer Success Manager",
      content: "Zion AI Chatbot Builder has revolutionized our customer support. We've reduced response time by 80% and increased customer satisfaction significantly.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "Robert Kim",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The no-code interface is amazing. We built a sophisticated chatbot in just a few hours that handles 90% of our customer inquiries.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Lisa Thompson",
      company: "Service Pro",
      role: "Operations Director",
      content: "The analytics dashboard gives us incredible insights into customer behavior. Our conversion rates have improved by 35% since implementing the chatbot.",
      rating: 5,
      avatar: "LT"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Chatbot Builder - No-Code AI Chatbot Creation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Create intelligent chatbots without coding using Zion AI Chatbot Builder. Deploy across multiple channels, integrate with business tools, and provide 24/7 customer support."
        />
        <meta
          name="keywords"
          content="AI chatbot builder, no-code chatbot, customer support automation, lead generation chatbot, e-commerce chatbot, chatbot platform, conversational AI"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-chatbot-builder" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">No-Code AI Chatbot Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion AI Chatbot
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Builder
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Create intelligent, conversational chatbots without coding. Deploy across multiple channels, 
              integrate with your business tools, and provide 24/7 customer support with ease.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Building
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <Bot className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Try Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
                <div className="text-gray-300">Chatbots Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Always Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5min</div>
                <div className="text-gray-300">Setup Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Chatbot Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, deploy, and manage intelligent chatbots 
                that provide exceptional customer experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
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

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From customer support to lead generation, our chatbot builder adapts to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to match your chatbot needs. 
                Start with our free trial and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Chatbot Builder
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using our platform to create intelligent chatbots. 
              Start your free trial today and see the difference AI can make.
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
                <Bot className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Try Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}