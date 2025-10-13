import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mic, Brain, Zap, CheckCircle, Star, ArrowRight, Smartphone, Globe, Shield, BarChart3, Users, Clock, Volume2, Headphones } from 'lucide-react';

export default function ZionAIVoiceAssistant() {
  const features = [
    {
      title: "Natural Voice Recognition",
      description: "Advanced speech-to-text with 99% accuracy in 50+ languages and dialects",
      icon: <Mic className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Intelligent Conversations",
      description: "Context-aware AI that understands intent and maintains conversation flow naturally",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-Platform Integration",
      description: "Works seamlessly across smartphones, tablets, smart speakers, and desktop applications",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom Voice Training",
      description: "Train the assistant to recognize your voice patterns and respond with personalized responses",
      icon: <Volume2 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Task Automation",
      description: "Automate routine tasks like scheduling, email management, and data entry through voice commands",
      icon: <Zap className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Analytics & Insights",
      description: "Track usage patterns, productivity metrics, and voice interaction analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$39",
      period: "/month",
      description: "Perfect for individual users and personal productivity",
      features: [
        "Up to 1,000 voice commands/day",
        "Basic voice recognition",
        "Mobile app access",
        "Email integration",
        "Calendar management",
        "Standard support"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$89",
      period: "/month",
      description: "Ideal for professionals and small teams",
      features: [
        "Up to 5,000 voice commands/day",
        "Advanced AI features",
        "Custom voice training",
        "Task automation",
        "Team collaboration",
        "API access",
        "Priority support"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations and businesses",
      features: [
        "Unlimited voice commands",
        "Full AI suite",
        "Custom integrations",
        "Advanced security",
        "White-label solution",
        "Dedicated support",
        "Analytics dashboard"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const capabilities = [
    {
      title: "Smart Scheduling",
      description: "Schedule meetings, set reminders, and manage your calendar through natural voice commands",
      icon: <Clock className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Email Management",
      description: "Compose, send, and organize emails using voice commands with intelligent context understanding",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Analysis",
      description: "Ask questions about your data and get instant insights through conversational analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Team Collaboration",
      description: "Coordinate with team members, share updates, and manage projects through voice interactions",
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "Productivity Consultant",
      role: "CEO",
      content: "Zion AI Voice Assistant has transformed how I manage my daily tasks. The voice recognition is incredibly accurate and the AI responses are natural.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Sarah Martinez",
      company: "Executive Assistant",
      role: "Senior Assistant",
      content: "Managing multiple executives' schedules has never been easier. The voice commands are intuitive and save me hours every day.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "David Park",
      company: "Tech Startup",
      role: "CTO",
      content: "The task automation features are game-changing. I can now manage complex workflows through simple voice commands.",
      rating: 5,
      avatar: "DP"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Voice Assistant - Intelligent Voice Control | Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary AI voice assistant with natural language processing, task automation, and multi-platform integration. Transform productivity with voice commands. Start from $39/month."
        />
        <meta
          name="keywords"
          content="AI voice assistant, voice recognition, speech-to-text, voice automation, smart assistant, voice commands, productivity tools"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-voice-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Mic className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Voice Control</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}AI Voice Assistant
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your productivity with our intelligent voice assistant. 
              Natural conversations, task automation, and seamless integration across all your devices. 
              The future of hands-free productivity is here.
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
                <Mic className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Voice Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need for intelligent voice control and automation. 
                Built with cutting-edge AI technology for natural interactions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What You Can Do
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From simple tasks to complex workflows, our voice assistant adapts to your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {capability.description}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your voice assistant needs. All plans include our core AI features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300">{plan.period}</span>
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
                      className={`w-full bg-gradient-to-r ${plan.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center group`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
                Trusted by Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Voice Assistant
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of professionals who have revolutionized their workflow with Zion AI Voice Assistant. 
              Start your free trial today.
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
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Contact Sales
                <Mic className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}