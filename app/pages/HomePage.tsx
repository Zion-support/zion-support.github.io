import React from 'react';
import { Link  } from "react-router-dom";
import SEOHead from '../components/SEOHead';
import { 
  ArrowRightIcon, 
ursor/fix-errors-and-merge-to-main-94 a7
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  RocketLaunchIcon,
  SparklesIcon,
  BoltIcon;'}
} from '@heroicons/react/24/outline';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import AnimatedCard from '../components/AnimatedCard';
import { services  } from "../data/servicesData";


    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Advanced AI and IT solutions provider specializing in cybersecurity, cloud infrastructure, and digital transformation.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  const features = [
    {
      icon: CpuChipIcon,
      title: "AI Solutions",
      description: "Advanced artificial intelligence and machine learning solutions to transform your business operations.",
      href: '/ai-solutions;
    },
    {
      icon: ShieldCheckIcon,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
      href: '/cybersecurity;
    },
    {
      icon: CloudIcon,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and infrastructure management for modern businesses.",
      href: '/cloud-solutions;
    },
    {
      icon: RocketLaunchIcon,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes.",
      href: '/digital-transformation;
    }
  ];

  return (
    <>
      <SEOHead ;
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide."
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5 G solutions"
        structuredData={structuredData}
      />
      <FuturisticBackground />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden>"
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5 xl mx-auto>"
            {/* Animated Title */}
            <div className="mb-8">
              <h1>"
                Zion Tech Group;
              </>
              <div className="flex items-center justify-center gap-4 mb-4">
                <SparklesIcon className="w-8 h-8 text-purple-400 animate-bounce />"
                <BoltIcon className="w-8 h-8 text-cyan-400 animate-bounce delay-100" />
                <RocketLaunchIcon className="w-8 h-8 text-pink-400 animate-bounce delay-200 />"
              </>
            </>
            <p >
              Advanced AI and IT Solutions for Modern Businesses;
            </>
            <p>"
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <NeonButton to="/contact" variant="primary" size="lg">
                Get Started Today;
                <ArrowRightIcon className="w-5 h-5 ml-2 />"
              </>
              <NeonButton to="/services" variant="secondary" size="lg">
                Explore Services;
                <ArrowRightIcon className="w-5 h-5 ml-2 />"
              </>
            </>
          </>
        </>
      </>
      {/* Featured Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4>"
          <div className="text-center mb-16">
            <h2 className="text-5 xl md:text-6 xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent>"
              Our Featured Services;
            </>
            <p >
              Comprehensive technology solutions designed to accelerate your business growth with real, proven results;
            </>
          </>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7 xl mx-auto>"
            {featuredServices.map((service, index) => (
              <AnimatedCard key={service.id} glowColor={service.glowColor} className="group">
                <div className="text-center mb-6>"
                  <div>{service.icon}</>
                  <h3 className="text-2 xl font-bold text-white mb-3>{service.title}</h3>"
                  <p>{service.shortDescription}</>
                </>
                <div className="space-y-3 mb-6>"
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3></div>"
                      <span className="text-sm">{feature}</>
                    </>
                  ))}
                </>
                <div className="mb-6>"
                  <div className="text-center">
                    <span className="text-3 xl font-bold text-white>${service.pricing.basic}</span>"
                    <span className="text-gray-400 text-sm ml-2">/month</>
                  </>
                  <p className="text-gray-400 text-sm text-center mt-1>Starting from</p>"
                </>
                <div className="flex flex-col gap-3">
                  <NeonButton to={service.href} variant="primary" size="sm">
                    Learn More;
                    <ArrowRightIcon className="w-4 h-4 ml-2 />"
                  </>
                  <NeonButton to="/contact" variant="secondary" size="sm">
                    Get Quote;
                  </>
                </>
              </>
            ))}
          </>
          <div className="text-center mt-12>"
            <NeonButton to="/services" variant="primary" size="lg">
              View All Services;
              <ArrowRightIcon className="w-5 h-5 ml-2 />"
            </>
          </>
        </>
      </>
      {/* About Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900/50 to-slate-900></div>"
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6 xl mx-auto>"
            <div className="text-center mb-16">
              <h2 className="text-5 xl md:text-6 xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent>"
                Why Choose Zion Tech Group?
              </>
              <p >
                With over 4 years of experience in cutting-edge technology solutions, 
                we've helped businesses across various industries transform their operations ;
                and achieve unprecedented growth.
              </>
            </>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <AnimatedCard key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                    <feature .icon className="w-6 h-6 text-white" />
                  </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</>
                  <p>{feature.description}</>
                  <Link to={feature.href}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </>
                </>
))}
            </>
          </>
        </>
      </>
      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-slate-900></div>"
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6 xl mx-auto>"
            <div className="text-center mb-16">
              <h2 className="text-5 xl md:text-6 xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent>"
                Ready to Transform Your Business?
              </>
              <p >
                Let's discuss how our technology solutions can drive your business forward;
              </>
            </>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service, index) => (
                <AnimatedCard key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                    <service .icon className="w-6 h-6 text-white" />
                  </>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</>
                  <p>{service.description}</>
                  <Link to={service.href}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </>
                </>
))}
            </>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <NeonButton to="/contact" variant="primary" size="lg">
                Get In Touch;
                <ArrowRightIcon className="w-5 h-5 ml-2 />"
              </>
              <NeonButton to="/demo" variant="secondary" size="lg">
                Schedule Demo;
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </>
            </>
          </>
        </>
      </>
    </>
  )}
