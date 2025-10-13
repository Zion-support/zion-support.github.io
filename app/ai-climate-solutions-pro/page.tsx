import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Leaf, Cloud, TrendingUp, BarChart3, Zap, Star, ArrowRight, CheckCircle, Users, Clock, Sparkles, Globe, Wind, Sun } from 'lucide-react';

export default function AIClimateSolutionsPro() {
  const features = [
    {
      title: "Carbon Footprint Analysis",
      description: "AI-powered analysis of your organization's carbon footprint with detailed breakdowns and reduction recommendations",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Climate Risk Assessment",
      description: "Advanced risk modeling for climate-related threats including extreme weather, sea level rise, and temperature changes",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Sustainability Reporting",
      description: "Automated generation of comprehensive sustainability reports compliant with global standards (GRI, SASB, TCFD)",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Renewable Energy Optimization",
      description: "AI-driven optimization of renewable energy systems for maximum efficiency and cost-effectiveness",
      icon: <Sun className="w-6 h-6" />
    },
    {
      title: "Supply Chain Sustainability",
      description: "End-to-end sustainability tracking across your supply chain with supplier scoring and improvement recommendations",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Climate Action Planning",
      description: "Intelligent climate action plans with measurable targets, timelines, and progress tracking",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses starting their sustainability journey",
      features: [
        "Basic carbon footprint analysis",
        "Monthly sustainability reports",
        "Up to 5 users",
        "Email support",
        "Standard compliance reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for mid-size companies with complex sustainability needs",
      features: [
        "Advanced carbon footprint analysis",
        "Real-time sustainability dashboards",
        "Up to 25 users",
        "Priority support",
        "Advanced compliance reporting",
        "Supply chain tracking",
        "Climate risk assessment"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with comprehensive sustainability programs",
      features: [
        "Comprehensive carbon footprint analysis",
        "Custom sustainability dashboards",
        "Unlimited users",
        "Dedicated support",
        "Full compliance suite",
        "Advanced supply chain analytics",
        "Custom climate action plans",
        "API access"
      ],
      popular: false
    }
  ];

  const impactMetrics = [
    { metric: "2.5M+", label: "Tons CO2 Reduced", icon: <Leaf className="w-8 h-8" /> },
    { metric: "500+", label: "Companies Served", icon: <Users className="w-8 h-8" /> },
    { metric: "95%", label: "Cost Reduction", icon: <TrendingUp className="w-8 h-8" /> },
    { metric: "24/7", label: "Monitoring", icon: <Clock className="w-8 h-8" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "GreenTech Industries",
      role: "Sustainability Director",
      content: "Zion's AI climate solutions have transformed our sustainability program. We've reduced our carbon footprint by 40% in just 6 months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "EcoManufacturing Corp",
      role: "CEO",
      content: "The climate risk assessment features are incredible. We've identified and mitigated risks that could have cost us millions.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Sustainable Logistics",
      role: "Operations Manager",
      content: "The supply chain sustainability tracking has revolutionized how we work with suppliers. Our ESG scores have improved dramatically.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - Advanced Sustainability & ESG Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI-powered climate solutions for carbon footprint analysis, sustainability reporting, and ESG compliance. Drive environmental impact with data-driven insights."
        />
        <meta
          name="keywords"
          content="climate solutions, carbon footprint analysis, sustainability reporting, ESG compliance, climate risk assessment, renewable energy optimization, supply chain sustainability"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-climate-solutions-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 animate-pulse"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">AI-Powered Climate Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Climate Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">
                {" "}Pro
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your organization's environmental impact with our comprehensive AI-powered climate solutions. 
              Measure, manage, and optimize your sustainability efforts with data-driven insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <BarChart3 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Demo
              </Link>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{metric.metric}</div>
                  <div className="text-gray-300 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Climate Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform provides everything you need to measure, manage, 
                and optimize your organization's environmental impact and sustainability efforts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Climate Solution Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to match your sustainability goals. 
                Start with our free assessment and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-green-500/50 shadow-2xl shadow-green-500/20' 
                      : 'border-white/20 hover:border-green-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
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
                        ? 'bg-gradient-to-r from-green-500 to-cyan-600 text-white hover:from-green-600 hover:to-cyan-700 shadow-lg hover:shadow-green-500/25'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Sustainability Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our climate solutions platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Lead in Climate Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking organizations using AI to drive meaningful environmental impact. 
              Start your sustainability transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <BarChart3 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}