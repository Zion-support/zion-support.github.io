'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Settings, Activity, Brain, Shield, Clock, Award, Target, BarChart, Globe, Heart, Home, Video, Palette, Code, Music, Camera, Headphones, MessageSquare, Smile, Zap, Users, Database, Lock, Eye, Search, FileText, Server, Cpu, HardDrive, Wifi, AlertTriangle, TrendingUp, Monitor, Terminal } from 'lucide-react';
import Footer from '../components/Footer';

const AIOpsPage: React.FC = () => {
  const features = [
    "Intelligent Incident Detection",
    "Automated Root Cause Analysis",
    "Predictive Maintenance",
    "Performance Optimization",
    "Capacity Planning",
    "Anomaly Detection",
    "Automated Remediation",
    "Service Dependency Mapping",
    "Real-time Monitoring",
    "Alert Correlation",
    "Change Impact Analysis",
    "Compliance Monitoring"
  ];

  const capabilities = [
    {
      title: "Infrastructure Monitoring",
      icon: Server,
      description: "Comprehensive monitoring of servers, networks, and cloud resources",
      benefits: [
        "Real-time performance metrics",
        "Resource utilization tracking",
        "Capacity planning insights",
        "Automated scaling recommendations",
        "Cost optimization suggestions"
      ]
    },
    {
      title: "Application Performance",
      icon: Monitor,
      description: "Deep application monitoring with AI-powered insights",
      benefits: [
        "Code-level performance analysis",
        "Database query optimization",
        "API response time tracking",
        "User experience monitoring",
        "Performance bottleneck identification"
      ]
    },
    {
      title: "Security Operations",
      icon: Shield,
      description: "AI-driven security monitoring and threat detection",
      benefits: [
        "Threat intelligence integration",
        "Behavioral anomaly detection",
        "Automated incident response",
        "Vulnerability assessment",
        "Compliance reporting"
      ]
    },
    {
      title: "Log Analysis",
      icon: FileText,
      description: "Intelligent log processing and analysis",
      benefits: [
        "Pattern recognition in logs",
        "Error correlation analysis",
        "Performance trend identification",
        "Security event detection",
        "Automated log parsing"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams and basic monitoring needs",
      features: [
        "Up to 50 servers",
        "Basic AI insights",
        "Standard monitoring",
        "Email alerts",
        "Basic reporting",
        "Community support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Advanced AIOps for growing organizations",
      features: [
        "Up to 200 servers",
        "Advanced AI analytics",
        "Predictive maintenance",
        "Automated remediation",
        "Priority support",
        "Custom dashboards",
        "API integrations",
        "Advanced reporting"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Full-scale AIOps for large enterprises",
      features: [
        "Unlimited servers",
        "Full AI capabilities",
        "Custom AI models",
        "Dedicated support",
        "On-premise deployment",
        "SLA guarantee",
        "Custom integrations",
        "Training & consulting",
        "White-label solution",
        "24/7 phone support"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "DevOps Manager",
      company: "CloudTech Solutions",
      content: "AIOps has transformed our operations. We've reduced incident response time by 75% and prevented 90% of potential outages through predictive analytics. The AI insights are incredibly accurate.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Maria Rodriguez",
      role: "CTO",
      company: "FinTech Startup",
      content: "The automated remediation features have been a game-changer. Our systems now self-heal from common issues, and our team can focus on strategic initiatives instead of firefighting.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "James Wilson",
      role: "IT Director",
      company: "Healthcare System",
      content: "Compliance and security monitoring is crucial in healthcare. AIOps provides the visibility and automation we need to maintain HIPAA compliance while optimizing performance.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Platform",
      icon: ShoppingCart,
      description: "Ensuring 99.9% uptime during peak shopping seasons",
      results: [
        "99.9% uptime achieved",
        "50% reduction in incidents",
        "30% faster resolution times",
        "40% cost savings"
      ]
    },
    {
      title: "Financial Services",
      icon: CreditCard,
      description: "Maintaining security and compliance in trading systems",
      results: [
        "Zero security breaches",
        "100% compliance maintained",
        "60% faster threat detection",
        "24/7 automated monitoring"
      ]
    },
    {
      title: "Healthcare System",
      icon: Heart,
      description: "Ensuring patient data security and system reliability",
      results: [
        "HIPAA compliance maintained",
        "99.95% system availability",
        "45% reduction in downtime",
        "Real-time security monitoring"
      ]
    },
    {
      title: "Manufacturing",
      icon: Factory,
      description: "Optimizing production systems and preventing failures",
      results: [
        "25% increase in efficiency",
        "80% reduction in unplanned downtime",
        "Predictive maintenance success",
        "30% cost reduction"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Settings className="w-4 h-4" />
              <span>AI Operations Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AI Operations (AIOps)
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your IT operations with AI-powered monitoring, automation, and intelligent insights. 
              Prevent issues before they impact your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-purple-400 text-purple-400 font-semibold py-4 px-8 rounded-xl hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">75%</div>
                <div className="text-gray-400">Faster Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">90%</div>
                <div className="text-gray-400">Issues Prevented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400">AI Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive AIOps Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology that monitors, analyzes, and optimizes your entire IT infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                    <p className="text-gray-300">{capability.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AIOps has transformed operations across different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-cyan-600 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {useCase.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AIOps Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI technology that learns from your environment and continuously improves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  AI-powered operations management with intelligent automation and predictive analytics.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AIOps Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the AIOps solution that matches your organization's size and needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`cyber-card p-8 hover:scale-105 transition-all duration-300 relative ${
                  tier.popular ? 'ring-2 ring-purple-400/50' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 text-lg">{tier.period}</span>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}>
                    {tier.cta}
                  </button>
                </div>
                
                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by IT Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how IT professionals rely on our AIOps platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your IT Operations Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join leading organizations that trust our AIOps platform to optimize their IT operations. 
            Start your free trial and experience the power of AI-driven operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-purple-400 text-purple-400 font-semibold py-4 px-8 rounded-xl hover:bg-purple-400 hover:text-slate-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>Questions? Contact us at <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 (302) 464-0950</a></p>
            <p>or email <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIOpsPage;