import { ArrowRight, Bot, Zap, CheckCircle, Star, Brain, MessageCircle, Users, Clock, Shield, BarChart3, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiCustomerSupportChatbot() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced NLP & AI",
      description: "Natural language processing with 95% accuracy for understanding customer intent and providing relevant responses"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Multi-Channel Support",
      description: "Deploy across website, mobile app, WhatsApp, Facebook Messenger, and live chat platforms"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Analytics",
      description: "Comprehensive insights into customer interactions, satisfaction scores, and conversation trends"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "SOC 2 compliance, data encryption, and secure integration with your existing systems"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human Handoff",
      description: "Seamless escalation to human agents when complex issues require personal attention"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Training",
      description: "Train the AI on your specific products, services, and customer support processes"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 conversations/month",
        "Basic AI responses",
        "Website integration",
        "Email support",
        "Basic analytics",
        "Standard training"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced AI with learning",
        "Multi-channel support",
        "Custom training",
        "Advanced analytics",
        "Human handoff",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited conversations",
        "Premium AI capabilities",
        "All channels supported",
        "Custom integrations",
        "White-label solution",
        "Advanced security",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "E-commerce Store",
      role: "Customer Success Manager",
      content: "Zion AI Chatbot reduced our support tickets by 70% and improved customer satisfaction by 40%. The AI understands context incredibly well.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "SaaS Company",
      role: "Head of Support",
      content: "The multi-channel support is fantastic. Our customers can get help on any platform they prefer, and the human handoff is seamless.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Online Marketplace",
      role: "Operations Director",
      content: "Setup was incredibly easy and the AI learned our processes quickly. Customer response times improved from hours to seconds.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Provide instant support around the clock without additional staffing costs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "70% Fewer Tickets",
      description: "AI handles common questions, reducing workload for human agents"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "40% Higher Satisfaction",
      description: "Instant, accurate responses improve customer experience significantly"
    }
  ];

  const channels = [
    { name: "Website", icon: "🌐", color: "from-blue-600 to-blue-800" },
    { name: "WhatsApp", icon: "💬", color: "from-green-500 to-green-700" },
    { name: "Facebook", icon: "📘", color: "from-blue-500 to-blue-700" },
    { name: "Mobile App", icon: "📱", color: "from-purple-500 to-purple-700" },
    { name: "Live Chat", icon: "💬", color: "from-cyan-500 to-cyan-700" },
    { name: "Email", icon: "📧", color: "from-orange-500 to-orange-700" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Support Chatbot - Intelligent Customer Service | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your customer support with Zion AI Chatbot. Advanced NLP, multi-channel support, 24/7 availability, and seamless human handoff. Start free trial today."
        />
        <meta
          name="keywords"
          content="AI chatbot, customer support automation, NLP chatbot, multi-channel support, customer service AI, chatbot platform"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI Customer Support Platform 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Zion AI Customer Support Chatbot
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your customer support with AI-powered chatbots that provide instant, accurate responses 
              across all channels. Reduce support costs while improving customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
                <div className="text-gray-300">Fewer Support Tickets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Channels Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Multi-Channel Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deploy your AI chatbot across all customer touchpoints for consistent support experience.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {channels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${channel.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {channel.icon}
                  </div>
                  <h3 className="text-white font-semibold">{channel.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Customer Support Chatbot?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of customer support with AI-powered automation and intelligent responses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Customer Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to provide exceptional customer support with AI-powered automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your customer support needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-cyan-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Customer Support Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Customer Support Chatbot
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using Zion AI Customer Support Chatbot to provide better support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}