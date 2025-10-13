import { ArrowRight, Bot, MessageCircle, Zap, Users, CheckCircle, Star, Mail, Smartphone, Globe, Target, Clock, DollarSign, Brain, Code, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiChatbotBuilder() {
  const features = [
    {
      title: "No-Code Builder",
      description: "Create sophisticated chatbots without any coding knowledge using our intuitive drag-and-drop interface",
      icon: <Code className="w-6 h-6" />,
      benefits: ["Visual builder", "Pre-built templates", "Custom workflows", "Easy deployment"]
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities that understand context, intent, and sentiment for natural conversations",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Intent recognition", "Context awareness", "Sentiment analysis", "Multi-language support"]
    },
    {
      title: "Multi-Channel Deployment",
      description: "Deploy your chatbot across websites, mobile apps, social media, and messaging platforms",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Website integration", "Mobile apps", "Social media", "Messaging platforms"]
    },
    {
      title: "Live Agent Handoff",
      description: "Seamlessly transfer complex conversations to human agents when needed",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Smart routing", "Context transfer", "Agent notifications", "Seamless transition"]
    },
    {
      title: "Analytics & Insights",
      description: "Comprehensive analytics to track performance, user satisfaction, and conversation quality",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Conversation analytics", "User satisfaction", "Performance metrics", "A/B testing"]
    },
    {
      title: "Custom Integrations",
      description: "Connect with your existing CRM, helpdesk, and business tools for unified workflows",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["CRM integration", "API connections", "Webhook support", "Custom endpoints"]
    }
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "Handle common inquiries, provide instant responses, and escalate complex issues",
      metrics: ["24/7 availability", "Instant responses", "Reduced wait times", "Higher satisfaction"]
    },
    {
      title: "Lead Generation",
      description: "Qualify leads, collect contact information, and schedule appointments automatically",
      metrics: ["Lead qualification", "Contact collection", "Appointment scheduling", "Follow-up automation"]
    },
    {
      title: "E-commerce Assistant",
      description: "Help customers find products, answer questions, and guide them through purchases",
      metrics: ["Product recommendations", "Order tracking", "Payment assistance", "Upselling"]
    },
    {
      title: "Internal HR Bot",
      description: "Answer employee questions, provide company information, and streamline HR processes",
      metrics: ["Policy information", "Leave requests", "Benefits questions", "Onboarding support"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$69",
      period: "/month",
      description: "Perfect for small businesses getting started with chatbots",
      features: [
        "Up to 1,000 conversations/month",
        "Basic NLP capabilities",
        "Website integration",
        "Email support",
        "Basic analytics",
        "1 chatbot"
      ],
      popular: false,
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Advanced features for growing businesses with higher volume",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced NLP & AI",
        "Multi-channel deployment",
        "Priority support",
        "Advanced analytics",
        "Up to 5 chatbots",
        "Live agent handoff",
        "Custom integrations"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "Complete solution for large organizations with complex requirements",
      features: [
        "Unlimited conversations",
        "Enterprise-grade AI",
        "All deployment channels",
        "24/7 phone support",
        "Custom analytics",
        "Unlimited chatbots",
        "Advanced handoff",
        "Full API access",
        "White-label options",
        "Dedicated account manager"
      ],
      popular: false,
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "Online Retail Store",
      role: "Customer Experience Manager",
      content: "Zion AI Chatbot Builder helped us reduce customer support tickets by 60% while improving response times. The no-code interface made it easy to set up and customize.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Mark Thompson",
      company: "Real Estate Agency",
      role: "Sales Director",
      content: "The lead generation capabilities are incredible. We've seen a 40% increase in qualified leads since implementing the chatbot on our website.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Wilson",
      company: "Healthcare Practice",
      role: "Operations Manager",
      content: "The appointment scheduling feature has streamlined our booking process. Patients can now schedule appointments 24/7, and our staff can focus on patient care.",
      rating: 5,
      avatar: "SW"
    }
  ];

  const industries = [
    { name: "E-commerce", icon: "🛒", description: "Product recommendations, order tracking, customer support" },
    { name: "Healthcare", icon: "🏥", description: "Appointment scheduling, symptom checking, patient support" },
    { name: "Real Estate", icon: "🏠", description: "Property inquiries, lead qualification, virtual tours" },
    { name: "Education", icon: "🎓", description: "Student support, course information, enrollment assistance" },
    { name: "Finance", icon: "💰", description: "Account inquiries, loan applications, financial advice" },
    { name: "Travel", icon: "✈️", description: "Booking assistance, travel information, customer support" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Chatbot Builder - No-Code AI Chatbot Creation | Zion Tech Group</title>
        <meta
          name="description"
          content="Create intelligent chatbots without coding using Zion AI Chatbot Builder. Advanced NLP, multi-channel deployment, and seamless integrations. Start your free trial today."
        />
        <meta
          name="keywords"
          content="AI chatbot builder, no-code chatbot, conversational AI, customer support bot, lead generation bot, chatbot platform, natural language processing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 mb-6">
                  <Bot className="w-4 h-4 text-teal-400 mr-2" />
                  <span className="text-teal-400 text-sm font-medium">No-Code AI Platform</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion AI
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 animate-pulse">
                    {" "}Chatbot Builder
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Create intelligent, conversational chatbots without any coding knowledge. 
                  Deploy across multiple channels and integrate with your existing business tools.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-teal-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>No coding required</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Bot className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Chatbot Preview</h3>
                    <p className="text-gray-300">See your chatbot in action</p>
                  </div>
                  
                  <div className="bg-slate-800 rounded-lg p-4 space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-teal-500/20 rounded-lg p-3 max-w-xs">
                        <p className="text-white text-sm">Hi! I'm your AI assistant. How can I help you today?</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-cyan-500/20 rounded-lg p-3 max-w-xs">
                        <p className="text-white text-sm">I need help with my order</p>
                      </div>
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-teal-500/20 rounded-lg p-3 max-w-xs">
                        <p className="text-white text-sm">I'd be happy to help! Can you provide your order number?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Perfect for Every Industry
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our chatbot builder works across all industries with industry-specific templates and features
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-teal-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, deploy, and manage intelligent chatbots
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Use Cases
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how different businesses use our chatbot builder to improve customer experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="text-sm text-teal-400 bg-teal-500/10 px-3 py-2 rounded-lg text-center">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Simple Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your chatbot needs. All plans include 14-day free trials.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-teal-400 bg-gradient-to-br from-teal-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-teal-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700'
                        : 'border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  What Our Customers Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our chatbot builder to improve customer experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-teal-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your First Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Start creating intelligent chatbots today with our no-code platform. 
              No technical skills required, just drag, drop, and deploy.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-teal-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-teal-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-teal-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-teal-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}