<<<<<<< HEAD
<<<<<<< HEAD

=======
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionCloudVault() {

  const storageFeatures = [
    "File Versioning & History",
    "Collaborative Workspaces",
    "Advanced Search & Filtering",
    "Mobile & Desktop Apps",
    "API & SDK Access",
    "Custom Branding",
    "Audit Logs & Reporting",
    "Backup & Recovery",
    "Compliance Tools (GDPR, HIPAA)",
    "Team Management",
    "Share Links & Permissions",
    "Integration with 100+ Apps"
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "1TB storage",
        "5 devices",
        "Basic encryption",
        "Email support",
        "Mobile apps",
        "File sharing"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$25",
      period: "/month",
      description: "Most popular for teams",
      features: [
        "5TB storage",
        "Unlimited devices",
        "Advanced encryption",
        "Priority support",
        "Team collaboration",
        "Admin dashboard",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited storage",
        "Advanced security",
        "Custom integrations",
        "24/7 phone support",
        "White-label solution",
        "Compliance tools",
        "Dedicated account manager"
      ],
      popular: false
    }
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react';

const ZionCloudVaultPage: React.FC = () => {
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
      name: "Jennifer Adams",
      company: "Creative Agency",
      role: "Creative Director",
      content: "Zion Cloud Vault has revolutionized our file management. The collaboration features are incredible and our team productivity has increased by 60%.",
      rating: 5
    },
    {
      name: "Robert Kim",
      company: "Tech Startup",
      role: "CTO",
      content: "The security features give us peace of mind. We can safely store sensitive client data knowing it's protected with military-grade encryption.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "Consulting Firm",
      role: "Operations Manager",
      content: "The sync speed is amazing. Files are available instantly across all our devices. It's like having a personal cloud that just works.",
=======
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This zioncloudvault solution transformed our operations completely. Highly recommended!',
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
        <title>Zion Cloud Vault - Secure Cloud Storage Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Secure your data with Zion Cloud Vault - the ultimate cloud storage platform. End-to-end encryption, unlimited storage, and enterprise-grade security for modern businesses."
        />
        <meta
          name="keywords"
          content="cloud storage, secure file sharing, data encryption, cloud backup, file synchronization, enterprise storage, data security"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Cloud className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">Enterprise Cloud Storage</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Zion Cloud Vault
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Secure your most valuable data with the world's most advanced cloud storage platform. 
              End-to-end encryption, unlimited storage, and enterprise-grade security for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.999999999%</div>
                <div className="text-gray-300">Data Durability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">AES-256</div>
                <div className="text-gray-300">Encryption Standard</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50,000+</div>
                <div className="text-gray-300">Businesses Trust Us</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Cloud Storage Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to store, sync, and secure your data in the cloud.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Storage Features List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Storage Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools you need to manage your data effectively and securely.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {storageFeatures.map((feature, index) => (
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
                Simple, Scalable Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the storage plan that fits your needs. All plans include 30-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion Cloud Vault
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
        <title>ZionCloudVault - Zion Tech Group | MICROSAAS Solutions</title>
        <meta name="description" content="Professional zioncloudvault services by Zion Tech Group. Transform your business with cutting-edge solutions." />
        <meta name="keywords" content="zioncloudvault, microsaas solutions, business automation, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                ZionCloudVault <span className={"bg-gradient-to-r " + getGradientColors() + " bg-clip-text text-transparent"}>Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with our advanced zioncloudvault services. 
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
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our ZionCloudVault Services?</h2>
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
              Ready to Secure Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using Zion Cloud Vault to protect their most valuable data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-900 to-purple-900 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our experts today and discover how our zioncloudvault solutions can drive your success.
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

export default ZionCloudVaultPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
