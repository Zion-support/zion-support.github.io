import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Globe, BarChart3, Shield, Zap, Users, Clock, CheckCircle, Star, Sparkles, Brain, Thermometer, Wind } from 'lucide-react';

export default function ZionAIClimateSolutionsPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Climate Prediction",
      description: "Advanced machine learning models for accurate weather and climate forecasting"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Carbon Footprint Tracking",
      description: "Real-time monitoring and analysis of carbon emissions across operations"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Environmental Impact Assessment",
      description: "Comprehensive analysis of environmental impact with actionable recommendations"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Sustainability Analytics",
      description: "Advanced analytics and reporting for sustainability initiatives and goals"
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Renewable Energy Optimization",
      description: "AI-powered optimization for renewable energy systems and efficiency"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Monitoring",
      description: "Automated monitoring and reporting for environmental regulations and standards"
    }
  ];

  const pricingPlans = [
    {
      name: "Eco Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses starting their sustainability journey",
      features: [
        "Basic carbon tracking",
        "Monthly reports",
        "Email support",
        "Standard templates",
        "Up to 5 users",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Climate Pro",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies with sustainability goals",
      features: [
        "Advanced AI predictions",
        "Real-time monitoring",
        "Priority support",
        "Custom dashboards",
        "Up to 25 users",
        "Advanced analytics",
        "API access",
        "Compliance reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise Green",
      price: "$799",
      period: "/month",
      description: "For large organizations with complex sustainability needs",
      features: [
        "Custom AI models",
        "Unlimited users",
        "Dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced reporting",
        "SLA guarantee",
        "Training & consulting"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Reduce Carbon Footprint by 40%",
      description: "AI-powered recommendations help optimize operations for maximum environmental impact"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Improve Sustainability Metrics",
      description: "Track and improve key sustainability indicators with real-time insights"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ensure Compliance",
      description: "Stay ahead of environmental regulations with automated monitoring and reporting"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimize Energy Usage",
      description: "Reduce energy costs by 30% with AI-powered optimization recommendations"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Green",
      company: "GreenTech Solutions",
      role: "Sustainability Director",
      content: "Zion AI Climate Solutions Pro has transformed our sustainability efforts. We've reduced our carbon footprint by 45% in just 6 months.",
      rating: 5,
      avatar: "SG"
    },
    {
      name: "Michael Torres",
      company: "EcoManufacturing Inc.",
      role: "Environmental Manager",
      content: "The AI predictions are incredibly accurate. We can now plan our operations around weather patterns and optimize our energy usage.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Lisa Chen",
      company: "Sustainable Cities Initiative",
      role: "Project Manager",
      content: "The compliance monitoring features have saved us countless hours. We're always ahead of regulatory requirements now.",
      rating: 5,
      avatar: "LC"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Climate Solutions Pro - AI-Powered Climate & Sustainability Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI climate prediction, carbon tracking, and sustainability analytics. Reduce carbon footprint by 40% with Zion AI Climate Solutions Pro. Start free trial."
        />
        <meta
          name="keywords"
          content="AI climate solutions, carbon tracking, sustainability analytics, environmental impact, climate prediction, renewable energy optimization, compliance monitoring"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-climate-solutions-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 AI Climate Solutions Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Zion AI Climate
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Solutions Pro
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Combat climate change with AI-powered solutions. Track carbon emissions, predict climate patterns, 
                and optimize sustainability initiatives with advanced machine learning.
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
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                  <div className="text-gray-300 text-sm">Carbon Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-300 text-sm">Prediction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">30%</div>
                  <div className="text-gray-300 text-sm">Energy Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Sustainability Impact
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Make a real difference in the fight against climate change with AI-powered insights and optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Climate
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Intelligence
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand, track, and optimize your environmental impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sustainable
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your sustainability journey. All plans include our core AI features.
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
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Climate Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Climate Solutions Pro
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
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Make a Climate Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the fight against climate change with AI-powered solutions. Start your free trial today 
              and begin your sustainability transformation.
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
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}