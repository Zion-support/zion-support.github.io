import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar, FileText } from "lucide-react";
import EnhancedSEO from "./components/EnhancedSEO";
import StructuredData from "./components/StructuredData";
import FuturisticBackground from "./components/FuturisticBackground";
import FuturisticCard from "./components/FuturisticCard";
import FuturisticButton from "./components/FuturisticButton";
import FuturisticText from "./components/FuturisticText";
import FuturisticBackgroundEnhanced from "./components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "./components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "./components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "./components/FuturisticTextEnhanced";
import ResponsiveContainer from "./components/ResponsiveContainer";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ResponsiveText from "./components/ResponsiveText";
import LazyImage from "./components/LazyImage";
import EnhancedLoadingSpinner from "./components/EnhancedLoadingSpinner";
import EnhancedAccessibility from "./components/EnhancedAccessibility";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.svg",
    "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services"
      },
      {
        "@type": "Offer", 
        "name": "Cybersecurity",
        "description": "Advanced cybersecurity and threat protection services"
      },
      {
        "@type": "Offer",
        "name": "Cloud Infrastructure",
        "description": "Cloud migration and infrastructure management services"
      }
    ]
  };

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning technologies.",
      link: "/ai-services",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions and threat monitoring.",
      link: "/cybersecurity",
      features: ["Threat Detection", "Security Audits", "Incident Response", "Compliance"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Migrate and optimize your infrastructure with our cloud solutions and managed services.",
      link: "/cloud-services",
      features: ["Cloud Migration", "Infrastructure Management", "Scalability", "Cost Optimization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Micro SAAS",
      description: "Ready-to-use software solutions that can transform your business operations immediately.",
      link: "/micro-saas",
      features: ["AI Tools", "Automation", "Analytics", "Integration"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "5G Solutions",
      description: "Leverage next-generation 5G technology for enhanced connectivity and performance.",
      link: "/5g-solutions",
      features: ["Network Infrastructure", "Edge Computing", "IoT Solutions", "Smart Cities"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics and business intelligence tools.",
      link: "/analytics",
      features: ["Data Visualization", "Predictive Modeling", "Real-time Analytics", "Reporting"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Focused",
      description: "Your data and systems are protected with enterprise-grade security."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance and rapid deployment for maximum efficiency."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your success."
    }
  ];

  return (
    <PerformanceOptimizer>
      <EnhancedSEO 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services."
        keywords="AI solutions, cybersecurity, cloud infrastructure, digital transformation, technology consulting"
        canonical="https://ziontechgroup.com"
      />
      <StructuredData type="Organization" data={structuredData} />
      <FuturisticBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
              <FuturisticText
                className="text-5xl md:text-7xl font-bold mb-6"
                variant="heading"
                gradient={true}
              >
                Zion Tech Group
              </FuturisticText>
              <FuturisticText
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
                variant="body"
              >
                Advanced AI and IT Solutions for the Future
              </FuturisticText>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                We empower businesses with cutting-edge technology, innovative solutions, 
                and expert guidance to accelerate digital transformation and drive sustainable growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  className="px-8 py-4"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </FuturisticButton>
                <FuturisticButton
                  variant="outline"
                  size="lg"
                  className="px-8 py-4"
                  onClick={() => window.location.href = '/demo'}
                >
                  <Monitor className="w-5 h-5" />
                  View Demo
                  <ArrowRight className="w-5 h-5" />
                </FuturisticButton>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our Technology Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive technology services designed to accelerate your digital transformation and drive business growth.
                </p>
              </div>
              
              <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <FuturisticCard
                    key={index}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
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
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </FuturisticCard>
                ))}
              </ResponsiveGrid>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-lg">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We combine technical expertise with business acumen to deliver solutions that drive real results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-6 bg-slate-800/50 rounded-lg border border-purple-500/20">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology solutions can accelerate your digital transformation and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  className="px-8 py-4"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </FuturisticButton>
                <FuturisticButton
                  variant="outline"
                  size="lg"
                  className="px-8 py-4"
                  onClick={() => window.location.href = '/consultation'}
                >
                  <Mail className="w-5 h-5" />
                  Schedule Consultation
                </FuturisticButton>
              </div>
            </div>
          </section>
        </div>
      </FuturisticBackground>
    </PerformanceOptimizer>
  );
};

export default HomePage;