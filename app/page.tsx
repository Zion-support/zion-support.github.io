import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function app() {
import { Home, Shield, Zap, Brain, Globe, Code, BarChart3, Mic, Cloud } from 'lucide-react';
import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';
import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, BarChart3, Cloud, Sparkles, Mail, Monitor, Target } from "lucide-react";
import FuturisticButton from "./components/FuturisticButton";

const HomePage = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning technologies.",
      link: "/ai-services",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions and threat monitoring.",
      link: "/cybersecurity",
      features: ["Threat Detection", "Security Audits", "Incident Response", "Compliance"]
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Migrate and optimize your infrastructure with our cloud solutions and managed services.",
      link: "/cloud-services",
      features: ["Cloud Migration", "Infrastructure Management", "Scalability", "Cost Optimization"]
      icon: <Zap className="w-8 h-8" />,
      title: "Micro SAAS",
      description: "Ready-to-use software solutions that can transform your business operations immediately.",
      link: "/micro-saas",
      features: ["AI Tools", "Business Automation", "Quick Deployment", "No Setup Required"]
      icon: <Globe className="w-8 h-8" />,
      title: "5G Solutions",
      description: "Leverage the power of 5G technology for next-generation connectivity and IoT solutions.",
      link: "/5g-solutions",
      features: ["5G Infrastructure", "IoT Solutions", "Edge Computing", "Smart Cities"]
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Unlock insights from your data with our advanced analytics and business intelligence solutions.",
      link: "/data-analytics",
      features: ["Business Intelligence", "Data Visualization", "Predictive Modeling", "Real-time Analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI solutions, cybersecurity, cloud services, and 5G technology. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud services, 5G technology, machine learning, data analytics" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">App</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.



    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses" />

      <div className="container mx-auto px-4 py-16">

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for modern businesses.

    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Zion Tech Group</h1>
            Advanced AI and IT solutions for your business needs.
          </p>
      <div className="max-w-4xl mx-auto text-center py-20">
      <div className="max-w-4xl mx-auto text-center py-12">
          Advanced AI and IT Solutions for Modern Businesses
        <div className="mt-8">
          <a
            href="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Our Services
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced AI & IT Solutions
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence, cybersecurity, cloud services, and 5G technology solutions.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              Get Started Today
              href="/demo"
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
              View Demo

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
              Advanced technology integration and optimization.

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              Scalable and secure implementation.
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology services designed to accelerate your digital transformation and drive business growth.
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  className="px-8 py-4"
                  onClick={() => window.location.href = '/contact'}
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </FuturisticButton>
                  variant="outline"
                  onClick={() => window.location.href = '/consultation'}
                  <Mail className="w-5 h-5" />
                  Schedule Consultation

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group-hover:gap-3"
                    Learn More
                    <ArrowRight className="w-4 h-4" />
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />

      <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Page
          <p className="text-lg text-gray-300 mb-8">
            Professional page services coming soon.
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>


              Our Services
        {/* CTA Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
              Comprehensive technology solutions designed to accelerate your digital transformation.

              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                <p className="text-gray-300 leading-relaxed mb-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                  href={service.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 mt-4 font-medium"
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>

          <h2 className="text-3xl font-bold text-white mb-6">
            Let our expert team help you implement the right technology solutions for your specific needs.
              Start Your Journey
              href="/consultation"
              Free Consultation
  );
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import { ArrowRight, CheckCircle, Star, Users, Calendar, Phone, Mail } from 'lucide-react';

  const features = [
      icon: <Users className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge AI technology to transform your business operations",
      color: "from-blue-500 to-cyan-500"
      icon: <Calendar className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      color: "from-green-500 to-emerald-500"
      icon: <Phone className="w-8 h-8" />,
      description: "Comprehensive security solutions to protect your digital assets",
      color: "from-purple-500 to-pink-500"
      icon: <Mail className="w-8 h-8" />,
      description: "Transform your data into actionable insights and business intelligence",
      color: "from-orange-500 to-red-500"

      title: "AI Development",
      description: "Custom AI solutions tailored to your business needs",
      icon: <Users className="w-6 h-6" />
      description: "Scalable cloud infrastructure and migration services",
      icon: <Calendar className="w-6 h-6" />
      description: "Comprehensive security solutions and compliance",
      icon: <Phone className="w-6 h-6" />
      description: "Advanced analytics and business intelligence",
      icon: <Mail className="w-6 h-6" />

  const testimonials = [
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp",
      content: "Zion Tech Group has transformed our business with their innovative AI solutions. Highly recommended!",
      rating: 5,
      avatar: "SC"
      name: "Michael Rodriguez",
      role: "IT Director",
      company: "DataFlow Inc",
      content: "Excellent cloud migration services. The team was professional and delivered on time.",
      avatar: "MR"
      name: "Emily Johnson",
      role: "Startup Founder",
      company: "StartupHub",
      content: "The cybersecurity solutions have given us peace of mind. Our data is now fully protected.",
      avatar: "EJ"

    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Zion Tech Group - AI, Cloud & Cybersecurity Solutions"
            description="Leading provider of AI-powered solutions, cloud infrastructure, and cybersecurity services. Transform your business with cutting-edge technology."
            keywords="AI solutions, cloud services, cybersecurity, data analytics, business transformation, technology consulting"
            canonical="https://ziontechgroup.com"
          />

          <main className="min-h-screen">
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <Users className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">Technology Solutions</span>

                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  Transform Your Business with AI
                </FuturisticTextEnhanced>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Leading provider of AI-powered solutions, cloud infrastructure, and cybersecurity services.
                  Transform your business with cutting-edge technology.

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    icon={ArrowRight}
                    iconPosition="left">
                  </FuturisticButtonEnhanced>
                    icon={Users}
              </ResponsiveContainer>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Our Core Services
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Comprehensive technology solutions to drive your business forward
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {feature.icon}
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {feature.description}
                    </FuturisticCardEnhanced>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
                    What We Offer
                    Comprehensive technology services to meet all your business needs
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      className="group hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      <p className="text-gray-300 leading-relaxed">

            {/* Testimonials Section */}
                    What Our Clients Say
                    Hear from our satisfied clients about their experience
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Let's discuss how our technology solutions can help you achieve your business goals.
                  Get started with a free consultation today.

                    iconPosition="right">
                    href="mailto:info@ziontechgroup.com"
                    icon={Mail}
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
};

export default HomePage;



}}
