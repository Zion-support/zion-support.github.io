import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Zap, Bot, MessageCircle, Brain, Users, BarChart3, Shield, Clock, Sparkles } from "lucide-react";

export default function ZionAIChatbotBuilder() {
  const features = [
    {
      title: "No-Code Bot Builder",
      description: "Create sophisticated chatbots without any coding knowledge using our intuitive drag-and-drop interface",
      icon: <Bot className="w-6 h-6" />,
      benefits: ["Drag-and-drop builder", "Visual flow designer", "Pre-built templates", "Custom integrations"]
    },
    {
      title: "Advanced AI Engine",
      description: "Powered by state-of-the-art NLP and machine learning for natural, human-like conversations",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Natural language processing", "Context awareness", "Sentiment analysis", "Multi-language support"]
    },
    {
      title: "Multi-Channel Deployment",
      description: "Deploy your chatbot across websites, mobile apps, social media, and messaging platforms",
      icon: <MessageCircle className="w-6 h-6" />,
      benefits: ["Website integration", "Mobile apps", "Social media", "WhatsApp, Telegram, Slack"]
    },
    {
      title: "Analytics & Insights",
      description: "Comprehensive analytics to track performance, user satisfaction, and conversation quality",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Conversation analytics", "User satisfaction scores", "Performance metrics", "A/B testing"]
    },
    {
      title: "Team Collaboration",
      description: "Collaborate with your team on bot design, content, and optimization with role-based access",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Team workspaces", "Role permissions", "Version control", "Collaborative editing"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, data encryption, and privacy controls",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["SOC 2 compliant", "End-to-end encryption", "GDPR compliant", "Data residency options"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "1 chatbot",
        "1,000 conversations/month",
        "Basic templates",
        "Email support",
        "Website integration",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "5 chatbots",
        "10,000 conversations/month",
        "Premium templates",
        "Priority support",
        "Multi-channel deployment",
        "Advanced analytics",
        "Team collaboration",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited chatbots",
        "Unlimited conversations",
        "Custom templates",
        "24/7 phone support",
        "All integrations",
        "Custom analytics",
        "Advanced team features",
        "White-label options",
        "Custom AI training"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "24/7 automated customer support with instant responses and escalation to human agents",
      icon: "🎧",
      benefits: ["Instant responses", "24/7 availability", "Reduced support costs", "Higher satisfaction"]
    },
    {
      title: "Lead Generation",
      description: "Qualify and capture leads through intelligent conversations and form collection",
      icon: "🎯",
      benefits: ["Lead qualification", "Contact collection", "Appointment booking", "CRM integration"]
    },
    {
      title: "E-commerce Assistant",
      description: "Help customers find products, answer questions, and complete purchases",
      icon: "🛒",
      benefits: ["Product recommendations", "Order tracking", "Payment assistance", "Upselling"]
    },
    {
      title: "HR & Recruitment",
      description: "Screen candidates, answer FAQs, and schedule interviews automatically",
      icon: "👥",
      benefits: ["Candidate screening", "FAQ automation", "Interview scheduling", "Onboarding"]
    },
    {
      title: "Education & Training",
      description: "Interactive learning experiences with quizzes, assessments, and progress tracking",
      icon: "🎓",
      benefits: ["Interactive learning", "Progress tracking", "Assessment tools", "Personalized content"]
    },
    {
      title: "Healthcare Support",
      description: "Patient assistance, appointment scheduling, and basic health information",
      icon: "🏥",
      benefits: ["Appointment booking", "Symptom checking", "Medication reminders", "Health tips"]
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Customer Success Manager",
      company: "TechFlow Solutions",
      content: "Zion AI Chatbot Builder has transformed our customer support. We've reduced response time by 90% and increased customer satisfaction by 40%.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "James Wilson",
      role: "Marketing Director",
      company: "E-commerce Plus",
      content: "The no-code builder is incredibly intuitive. We built and deployed our lead generation chatbot in just 2 hours. ROI was immediate.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Sarah Chen",
      role: "HR Director",
      company: "Global Corp",
      content: "Our recruitment chatbot has streamlined our hiring process significantly. It pre-screens candidates and schedules interviews automatically.",
      rating: 5,
      avatar: "SC"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Chatbot Builder - No-Code AI Chatbot Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Build intelligent chatbots without coding with Zion AI Chatbot Builder. No-code platform, multi-channel deployment, advanced analytics. Starting at $49/month."
        />
        <meta
          name="keywords"
          content="AI chatbot builder, no-code chatbot, conversational AI, customer support bot, lead generation bot, chatbot platform, AI assistant"
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
              <span className="text-cyan-400 text-sm font-medium">#1 No-Code Chatbot Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}AI Chatbot Builder
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Build intelligent, conversational AI chatbots without any coding. Deploy across multiple channels 
              with advanced analytics and enterprise-grade security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300 text-sm">Faster Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300 text-sm">Higher Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Always Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Languages Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Business Need
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From customer support to lead generation, our chatbots solve real business problems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2 text-left">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-cyan-300">
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

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Features for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Modern Businesses
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to build, deploy, and manage intelligent chatbots that deliver real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-cyan-300">
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your chatbot needs. All plans include our core features and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
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
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your First Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using Zion AI Chatbot Builder to automate customer interactions. 
              Start your free trial today - no credit card required.
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
                <Clock className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
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