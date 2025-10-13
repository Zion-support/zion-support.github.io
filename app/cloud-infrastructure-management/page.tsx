import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function cloudInfrastructureManagement() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Cloud Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Cloud Infrastructure Management solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Cloud Infrastructure Management</h1>
          <p className="text-xl text-gray-300 mb-8">
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <meta name="description" content="Advanced cloud infrastructure management solutions by Zion Tech Group" />

      <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cloud Infrastructure Management
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.

    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Cloud Infrastructure Management</h1>
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
              Advanced technology integration and optimization.

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              Scalable and secure implementation.

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
import { Link } from "react-router-dom";
import {
  Cloud,
  Shield,
  TrendingUp,
  Server,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: "Multi-Cloud Management",
      description: "Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds",
      color: "from-cyan-500 to-blue-500"
    },
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with automated compliance monitoring and threat detection",
      color: "from-purple-500 to-pink-500"
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: "Cost Optimization",
      description: "Automated cost monitoring and optimization to reduce cloud spending by up to 40%",
      color: "from-yellow-500 to-orange-500"
      icon: <Server className="w-6 h-6 text-green-400" />,
      title: "Auto-Scaling",
      description: "Intelligent auto-scaling based on demand to ensure optimal performance and cost efficiency",
      color: "from-green-500 to-emerald-500"
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
          </p>
          </p>
    }
      description: "Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing",
      title: "24/7 Monitoring",
      description: "Proactive monitoring with automated scaling, performance optimization, and incident response",
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      description: "Automatically scale resources based on demand to ensure optimal performance and cost efficiency",
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: "Analytics & Insights",
      description: "Advanced analytics to optimize infrastructure performance and make data-driven decisions",
  ];

  const managementFeatures = [
      title: "Infrastructure Monitoring",
      description: "Real-time monitoring and alerting for all your cloud resources",
      icon: <BarChart3 className="w-6 h-6" />
      title: "Automated Backups",
      description: "Automated backup and disaster recovery solutions for business continuity",
      icon: <Shield className="w-6 h-6" />
      title: "Performance Optimization",
      description: "Continuous optimization of your cloud infrastructure for maximum performance",
      icon: <Zap className="w-6 h-6" />

  const pricingPlans = [
      name: "Starter",
      price: "$199",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10 cloud resources",
        "Basic monitoring",
        "Email support",
        "Standard security"
      ],
      popular: false
      name: "Professional",
      price: "$399",
      description: "Ideal for growing companies",
        "Up to 100 cloud resources",
        "Advanced monitoring",
        "Priority support",
        "Advanced security",
        "Auto-scaling",
        "Cost optimization"
      popular: true
      name: "Enterprise",
      price: "$799",
      description: "For large organizations",
        "Unlimited cloud resources",
        "Custom monitoring",
        "Dedicated support team",
        "White-label solution",
        "SLA guarantee",
        "Advanced compliance"

  const testimonials = [
      name: "Sarah Chen",
      role: "Cloud Architect",
      company: "TechCorp",
      content: "Zion Cloud Infrastructure Management has simplified our multi-cloud setup. Costs are down 35%.",
      rating: 5,
      avatar: "SC"
      name: "Michael Rodriguez",
      role: "DevOps Manager",
      company: "CloudScale",
      content: "The automation features have saved us countless hours. Our infrastructure is now fully automated.",
      avatar: "MR"
      name: "Emily Johnson",
      role: "CTO",
      company: "StartupHub",
      content: "The security and compliance features give us peace of mind. Everything is monitored and protected.",
      avatar: "EJ"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion Cloud Infrastructure Management",
    "description": "Comprehensive cloud infrastructure management platform with multi-cloud support and automation",
    "url": "https://ziontechgroup.com/cloud-infrastructure-management",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "399",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "unitText": "MONTH"
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
  };

    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Cloud Infrastructure Management - Zion Tech Group"
            description="Comprehensive cloud infrastructure management platform with multi-cloud support, automation, and cost optimization for optimal cloud performance."
            keywords="cloud infrastructure, multi-cloud management, cloud automation, cost optimization, cloud security, cloud monitoring"
            canonical="https://ziontechgroup.com/cloud-infrastructure-management"
          />
          <StructuredData data={structuredData} />

          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
                  <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">Cloud Infrastructure Management</span>

                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  Zion Cloud Infrastructure Management
                </FuturisticTextEnhanced>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Streamline your cloud infrastructure with comprehensive management, automation,
                  and optimization across all major cloud providers.

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="#pricing"
                    variant="primary"
                    size="lg"
                    icon={Cloud}
                    iconPosition="left">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                    href="#demo"
                    variant="outline"
                    icon={ArrowRight}
                    Watch Demo
              </ResponsiveContainer>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Powerful Cloud Management Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of advanced cloud management to optimize your infrastructure and reduce costs.
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {feature.icon}
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {feature.description}
                    </FuturisticCardEnhanced>
                  ))}

            {/* Management Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-cyan-800/50">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Advanced Management Capabilities
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Comprehensive tools to manage, monitor, and optimize your cloud infrastructure
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {managementFeatures.map((feature, index) => (
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <h3 className="text-xl font-semibold text-white mb-3">
                      <p className="text-gray-300 leading-relaxed">

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                    Choose Your Plan
                    Flexible pricing options to fit your cloud infrastructure needs
                  {pricingPlans.map((plan, index) => (
                      className={`relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                          {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                        <p className="text-gray-300">{plan.description}</p>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                      </ul>
                        variant={plan.popular ? "primary" : "outline"}
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="w-full">

            {/* Testimonials Section */}
                    Trusted by Cloud Teams
                    See what cloud professionals are saying about Zion Cloud Infrastructure Management
                  {testimonials.map((testimonial, index) => (
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
              <div className="max-w-4xl mx-auto text-center">
                  Ready to Optimize Your Cloud Infrastructure?
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of organizations using Zion Cloud Infrastructure Management
                  to optimize their cloud performance and reduce costs. Start your free trial today.

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    href="/contact"
                    iconPosition="right">
                    href="/demo"
                    Schedule Demo
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );