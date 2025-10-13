import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Zap, CheckCircle, Star, ArrowRight, Brain, Smartphone, Globe, Shield, BarChart3 } from 'lucide-react';

export default function ZionAIScheduler() {
  const features = [
    {
      title: "AI-Powered Scheduling",
      description: "Intelligent calendar management that learns from your preferences and automatically optimizes meeting times",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Platform Integration",
      description: "Seamlessly sync with Google Calendar, Outlook, Apple Calendar, and 50+ other platforms",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Conflict Resolution",
      description: "Automatically detects and resolves scheduling conflicts with intelligent rescheduling suggestions",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Team Collaboration",
      description: "Advanced team scheduling with availability tracking, meeting room booking, and resource management",
      icon: <Users className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mobile Optimization",
      description: "Native mobile apps for iOS and Android with offline sync and push notifications",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive insights into meeting patterns, productivity metrics, and time optimization",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 5 calendars",
        "Basic AI scheduling",
        "Email integration",
        "Mobile app access",
        "Standard support"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 calendars",
        "Advanced AI features",
        "Team collaboration tools",
        "Custom integrations",
        "Priority support",
        "Analytics dashboard"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited calendars",
        "Full AI suite",
        "Advanced security",
        "Custom workflows",
        "Dedicated support",
        "API access",
        "White-label options"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc.",
      role: "Operations Manager",
      content: "Zion AI Scheduler has revolutionized how we manage our team's calendar. The AI suggestions save us 5+ hours per week.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Digital Agency Pro",
      role: "CEO",
      content: "The intelligent conflict resolution is a game-changer. We've reduced scheduling errors by 90% since implementation.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "Consulting Group",
      role: "Project Director",
      content: "The analytics dashboard provides incredible insights into our meeting patterns. Highly recommend for any growing business.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Scheduler - Intelligent Calendar Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary AI-powered scheduling solution with intelligent calendar management, multi-platform integration, and team collaboration tools. Start from $19/month."
        />
        <meta
          name="keywords"
          content="AI scheduler, calendar management, meeting scheduling, team collaboration, productivity tools, calendar automation, smart scheduling"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-scheduler" />
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
              <Calendar className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Scheduling Solution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}AI Scheduler
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered calendar management that learns your preferences, 
              automatically optimizes meeting times, and eliminates scheduling conflicts. 
              Transform your productivity with intelligent scheduling.
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
                <Calendar className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to manage your calendar intelligently and efficiently. 
                Built with cutting-edge AI technology for maximum productivity.
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

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core AI scheduling features.
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Scheduler
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
              Ready to Transform Your Scheduling?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of professionals who have revolutionized their calendar management with Zion AI Scheduler. 
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
                <Calendar className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}