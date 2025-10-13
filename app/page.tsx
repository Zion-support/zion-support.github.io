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
      features: ["AI Tools", "Business Automation", "Quick Deployment", "No Setup Required"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "5G Solutions",
      description: "Leverage the power of 5G technology for next-generation connectivity and IoT solutions.",
      link: "/5g-solutions",
      features: ["5G Infrastructure", "IoT Solutions", "Edge Computing", "Smart Cities"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Unlock insights from your data with our advanced analytics and business intelligence solutions.",
      link: "/data-analytics",
      features: ["Business Intelligence", "Data Visualization", "Predictive Modeling", "Real-time Analytics"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "InnovateLabs",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Leading Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Transform Your Business
              </span>
              <br />
              <span className="text-white">With Advanced Technology</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We deliver cutting-edge AI solutions, cybersecurity, cloud services, and digital transformation 
              that drive real business results. Partner with us to unlock your company's full potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Sparkles className="w-5 h-5" />
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:scale-105"
              >
                <Monitor className="w-5 h-5" />
                View Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;