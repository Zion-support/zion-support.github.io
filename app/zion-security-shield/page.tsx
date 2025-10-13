<<<<<<< HEAD
<<<<<<< HEAD

=======
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSecurityShield() {

  const securityFeatures = [
    "Multi-factor Authentication (MFA)",
    "End-to-end Encryption",
    "DDoS Protection",
    "Web Application Firewall (WAF)",
    "Intrusion Detection System (IDS)",
    "Security Information and Event Management (SIEM)",
    "Penetration Testing",
    "Compliance Reporting (SOC 2, ISO 27001, GDPR)",
    "Data Loss Prevention (DLP)",
    "Mobile Device Management (MDM)",
    "Email Security Gateway",
    "Cloud Security Posture Management"
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall protection",
        "Monthly security reports",
        "Email support",
        "Up to 10 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Advanced threat detection",
        "Real-time monitoring",
        "Vulnerability scanning",
        "Incident response",
        "Priority support",
        "Up to 50 users",
        "Compliance reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "AI-powered security",
        "24/7 SOC monitoring",
        "Custom security policies",
        "Dedicated security team",
        "White-label reporting",
        "Unlimited users",
        "Advanced compliance",
        "Custom integrations"
      ],
      popular: false
    }
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react';

const ZionSecurityShieldPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Technology',
      description: 'Cutting-edge solutions powered by the latest technology and AI.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with real-time processing capabilities.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.'
    }
  ];

  const benefits = [
    'Increased efficiency by up to 300%',
    'Reduced operational costs',
    'Enhanced decision-making capabilities',
    '24/7 monitoring and support',
    'Easy integration with existing systems',
    'Proven ROI within 90 days'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  ];

  const testimonials = [
    {
<<<<<<< HEAD
      name: "David Martinez",
      company: "Financial Services Corp",
      role: "CISO",
      content: "Zion Security Shield has been a game-changer for our security posture. We've seen a 90% reduction in security incidents since implementation.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The AI threat detection is incredibly accurate. It caught several sophisticated attacks that other systems missed.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "Outstanding support and comprehensive security features. Our compliance audit passed with flying colors.",
=======
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This zionsecurityshield solution transformed our operations completely. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\'ve seen are remarkable. Excellent service!',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      rating: 5
    }
  ];

<<<<<<< HEAD
  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced Cybersecurity Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with Zion Security Shield - the ultimate AI-powered cybersecurity platform. Advanced threat detection, real-time monitoring, and automated incident response."
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, security monitoring, AI security, zero trust, compliance, SOC 2, GDPR, security platform"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
              <Shield className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-400 text-sm font-medium">Enterprise-Grade Security</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Zion Security Shield
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with the most advanced AI-powered cybersecurity platform. 
              Real-time threat detection, automated incident response, and comprehensive compliance management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300">Threat Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">5,000+</div>
                <div className="text-gray-300">Protected Organizations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect your business from modern cyber threats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Security Features List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Security Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the security tools you need in one comprehensive platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
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
                Flexible Security Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your business needs. All plans include 30-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-red-400 bg-gradient-to-br from-red-500/10 to-orange-500/10'
                      : 'border-white/20 hover:border-red-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
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
                Trusted by Security Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what security professionals say about Zion Security Shield
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
=======
  const getGradientColors = () => {
    switch(serviceType) {
      case 'ai': return 'from-cyan-400 to-purple-400';
      case 'it': return 'from-purple-400 to-pink-400';
      case 'microsaas': return 'from-green-400 to-emerald-400';
      default: return 'from-cyan-400 to-purple-400';
    }
  };

  const getButtonColors = () => {
    switch(serviceType) {
      case 'ai': return 'from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600';
      case 'it': return 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600';
      case 'microsaas': return 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600';
      default: return 'from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600';
    }
  };

  const getIconColors = () => {
    switch(serviceType) {
      case 'ai': return 'from-cyan-500 to-blue-600';
      case 'it': return 'from-purple-500 to-pink-600';
      case 'microsaas': return 'from-green-500 to-emerald-600';
      default: return 'from-cyan-500 to-blue-600';
    }
  };

  return (
    <>
      <Helmet>
        <title>ZionSecurityShield - Zion Tech Group | MICROSAAS Solutions</title>
        <meta name="description" content="Professional zionsecurityshield services by Zion Tech Group. Transform your business with cutting-edge solutions." />
        <meta name="keywords" content="zionsecurityshield, microsaas solutions, business automation, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                ZionSecurityShield <span className={"bg-gradient-to-r " + getGradientColors() + " bg-clip-text text-transparent"}>Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with our advanced zionsecurityshield services. 
                Leverage cutting-edge technology to drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={"bg-gradient-to-r " + getButtonColors() + " text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"}>
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-bold hover:bg-cyan-500/10 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <div className={"w-16 h-16 bg-gradient-to-r " + getIconColors() + " rounded-2xl flex items-center justify-center mx-auto mb-4"}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our ZionSecurityShield Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
<<<<<<< HEAD
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
=======
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
                  </div>
                </div>
              ))}
            </div>
<<<<<<< HEAD
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations protected by Zion Security Shield.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Security Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-900 to-purple-900 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our experts today and discover how our zionsecurityshield solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={"bg-gradient-to-r " + getButtonColors() + " text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"}>
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionSecurityShieldPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
