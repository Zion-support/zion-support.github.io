<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1c3bcb5bf864
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Link from 'next/link'
import {
  ArrowRightIcon
  ShieldCheckIcon
  CloudIcon
  CpuChipIcon
  ChartBarIcon
  GlobeAltIcon
  PhoneIcon
  EnvelopeIcon
  MapPinIcon
} from '@heroicons/react/24/outline'
export default function HomePage() {  return (
<<<<<<< HEAD
=======
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, RocketLaunchIcon, SparklesIcon, BoltIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  const structuredData = {
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
  };

  const services = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for business automation and optimization.",
      icon: <SparklesIcon className="w-8 h-8" />,
      link: "/ai-solutions"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and ensure compliance.",
      icon: <BoltIcon className="w-8 h-8" />,
      link: "/cybersecurity"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses with 99.9% uptime guarantee.",
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      link: "/cloud-infrastructure"
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive digital transformation services to modernize your business processes.",
      icon: <ArrowRightIcon className="w-8 h-8" />,
      link: "/digital-transformation"
    }
  ];

  return (
>>>>>>> main
=======
>>>>>>> 1c3bcb5bf864
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1c3bcb5bf864
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md: text-2xl text-gray-300 mb-8 leading-relaxed">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover: translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Explore Services
                <ArrowRightIcon className="w-5 h-5 group-hover: translate-x-1 transition-transform" />
              </Link>
            </div>          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence services including machine learning
                natural language processing, and predictive analytics.
              </p>
              <Link href="/ai-solutions" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            {/* Cybersecurity */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive security solutions to protect your digital assets
                data, and infrastructure from evolving threats.
              </p>
              <Link href="/cybersecurity" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            {/* Cloud Infrastructure */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">
                <CloudIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-6">
                Scalable cloud solutions and infrastructure management to optimize
                performance and reduce operational costs.
              </p>
              <Link href="/cloud-solutions" className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            {/* Digital Transformation */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-6">
                Strategic digital transformation services to modernize your business
                processes and enhance customer experiences.
              </p>
              <Link href="/digital-transformation" className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            {/* Micro SaaS */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
              <p className="text-gray-300 mb-6">
                Custom micro SaaS solutions designed to solve specific business
                challenges with scalable, cost-effective applications.
              </p>
              <Link href="/micro-saas" className="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            {/* 5G Solutions */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">5G Solutions</h3>
              <p className="text-gray-300 mb-6">
                Next-generation 5G technology solutions for enhanced connectivity
                IoT applications, and ultra-low latency services.
              </p>
              <Link href="/5g-solutions" className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-8">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              With over 4 years of experience in cutting-edge technology solutions, 
              we&apos;ve helped businesses across various industries transform their operations 
              and achieve unprecedented growth.
            </p>
            <div className="grid md: grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Learn More About Us <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let&apos;s discuss how our technology solutions can drive your business forward
            </p>
            <div className="grid md: grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get In Touch
              </Link>
              <Link 
                href="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
</>
  )
<<<<<<< HEAD
=======
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              {/* Animated Title */}
              <div className="mb-8">
                <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-pulse">
                  Zion Tech Group
                </h1>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <SparklesIcon className="w-8 h-8 text-purple-400 animate-bounce" />
                  <span className="text-2xl md:text-3xl text-white font-light">
                    Advanced AI & IT Solutions
                  </span>
                  <SparklesIcon className="w-8 h-8 text-cyan-400 animate-bounce" />
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Empowering businesses worldwide with cutting-edge artificial intelligence, 
                cybersecurity, and cloud infrastructure solutions that drive innovation and growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link
                  to="/ai-solutions"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <RocketLaunchIcon className="w-5 h-5" />
                  Explore AI Solutions
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Get Started
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business 
                and drive sustainable growth in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-purple-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our experts help you implement cutting-edge solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Contact Us
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MapPinIcon className="w-5 h-5" />
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
>>>>>>> main
=======
>>>>>>> 1c3bcb5bf864
}