'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, Brain, Zap, Shield, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';

export default function AIAnalyticsPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Advanced machine learning models that predict future trends and behaviors with 95% accuracy."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Dashboards",
      description: "Interactive dashboards with live data visualization and customizable metrics."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Insights",
      description: "Deep insights into business performance with automated reporting and recommendations."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Alerts",
      description: "Smart notifications for anomalies, opportunities, and critical business events."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Security",
      description: "Enterprise-grade security with end-to-end encryption and compliance standards."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Share insights and collaborate with team members through integrated workspace tools."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI analytics",
      features: [
        "Up to 10 data sources",
        "Basic predictive models",
        "Standard dashboards",
        "Email support",
        "5 team members",
        "1 year data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Advanced analytics for growing businesses",
      features: [
        "Unlimited data sources",
        "Advanced ML models",
        "Custom dashboards",
        "Priority support",
        "25 team members",
        "3 years data retention",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "Full-scale analytics for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom model training",
        "24/7 phone support",
        "Unlimited team members",
        "Unlimited data retention",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Zion's AI Analytics transformed our decision-making process. We've seen a 40% improvement in forecasting accuracy.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Data Director, GlobalCorp",
      content: "The real-time insights and predictive capabilities have given us a significant competitive advantage.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Marketing, GrowthCo",
      content: "The automated reporting saves us 20 hours per week. The ROI was immediate and substantial.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics - Advanced Data Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive modeling, and automated reporting." />
        <meta name="keywords" content="AI analytics, data intelligence, predictive analytics, business intelligence, machine learning, data visualization" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Analytics Platform
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Analytics
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your data into actionable insights with our advanced AI analytics platform. 
                Get real-time dashboards, predictive modeling, and automated reporting that drives business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Free Trial
                  <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful Features for <span className="text-cyan-400">Data Intelligence</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI analytics platform combines cutting-edge machine learning with intuitive design 
                to deliver insights that drive real business value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, Transparent <span className="text-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI analytics features.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative ${plan.popular ? 'scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 h-full ${
                    plan.popular ? 'border-cyan-500/50' : 'border-slate-700/50'
                  }`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                        : 'border border-slate-600 text-white hover:bg-slate-700'
                    }`}>
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by <span className="text-cyan-400">Industry Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about our AI analytics platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-cyan-400">Data Strategy</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI analytics platform to make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400">kleber@ziontechgroup.com</a> | 
              📞 <a href="tel:+13024640950" className="hover:text-cyan-400">+1 302 464 0950</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}