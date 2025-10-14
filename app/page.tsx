import React from 'react';
import React from 'react';
import React from 'react';
import { Link  } from "react-router-dom";
import { Helmet  } from "react-helmet-async";
import { Link  } from "react-router-dom";
import { ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  SignalIcon,
  BriefcaseIcon
 } from "@heroicons/react/24/outline";
import FuturisticBackground from './components/FuturisticBackground';

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com/",
    "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
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
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  const features = [
    {
      icon: CpuChipIcon,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for your business needs",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: CloudIcon,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShieldCheckIcon,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: ChartBarIcon,
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      color: "from-orange-500 to-red-500",
    }
  ];

  const services = [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.",
      icon: CpuChipIcon,
      href: "/ai-solutions",
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from threats and vulnerabilities.",
      icon: ShieldCheckIcon,
      href: "/cybersecurity",
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses with high availability and performance.",
      icon: CloudIcon,
      href: "/cloud-infrastructure",
    },
    {
      title: "Micro SaaS Solutions",
      description: "Custom micro SaaS applications tailored to your specific business needs.",
      icon: GlobeAltIcon,
      href: "/micro-saas-solutions",
    },
    {
      title: "5 G Solutions",
      description: "Next-generation 5 G technology implementation for ultra-fast connectivity.",
      icon: SignalIcon,
      href: "/5 g-solutions",
    },
    {
      title: "IT Services",
      description: "Complete IT infrastructure management and support services.",
      icon: BriefcaseIcon,
      href: "/it-solutions",
    }
  ];

  return (
    <PerformanceOptimizer >
      <EnhancedAccessibility >
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          <EnhancedSEO title="Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company"
            description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology."
            keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5 G technology"
            canonical="https://ziontechgroup.com"
            structuredData={structuredData}
          />
          <StructuredData type="Organization" data={structuredData} />
          <StructuredData type="WebSite" 
            data={{
              name: "Zion Tech Group",
              url: "https://ziontechgroup.com",
              potentialAction: {
                "@type": "SearchAction",
                "target": "https://ziontechgroup.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }} 
          />
      {/* Main Content */}
      <main id="main-content" role="main" aria-label="Main content">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        </div>
        {/* Floating Elements with Neon Effects */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                Explore Services
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6 gradient-text">
              Our Core Services
            </>
            <p >
              Comprehensive technology solutions designed to accelerate your business growth
            </>
          </>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                  <service .icon className="w-8 h-8 text-white" />
                </>
                <h3 className="text-2 xl font-bold text-white mb-4 gradient-text">{service.title}</>
                <p >
                  {service.description}
                </>
                <Link to={service.href} className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </>
              </>
            ))}
          </>
        </>
      </>
      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
              Trusted by Businesses Worldwide
            </>
            <p >
              Our proven track record speaks for itself
            </>
          </>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div >
                  {stat.number}
                </>
                <div >
                  {stat.label}
                </>
              </>
            ))}
          </>
        </>
      </>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4 xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </>
          <p >
            Let's discuss how our technology solutions can drive your business forward
          </>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
            </>
            <Link to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Demo
            </>
          </>
        </>
      </>
    </>
  );
};

export default HomePage;
ursor/fix-errors-and-merge-to-main-94 a7
