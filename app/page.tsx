<<<<<<< HEAD
"use client";
import React from "react";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone } from "lucide-react";
import Link from "next/link";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";

const HomePage = () => {
=======
'use client'
import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const HomePage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-280f
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "40% efficiency boost",
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% uptime SLA",
      link: "/it-services"
    },
    {
      title: "Micro SaaS",
      description: "Scalable software-as-a-service solutions designed for rapid deployment and growth, perfect for startups and enterprises",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "50% faster deployment",
      link: "/micro-saas"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our business with their AI solutions. We have seen a 40% increase in efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      content: "Their IT services are exceptional. The team is professional, knowledgeable, and always available when we need them.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartupXYZ",
      content: "The micro SaaS solutions they provided helped us scale faster than we ever imagined possible.",
      rating: 5
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">{/* Skip to main content for accessibility */}</div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >Skip to main content</a>a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 py-16" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-labelledby="hero-heading"
        >
          <h1 id="hero-heading" className="text-5xl font-bold text-gray-900 mb-6">Zion Tech Group</h1>
          <p className="text-xl text-gray-600 mb-8" role="doc-subtitle">Advanced AI and IT Solutions</p>p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.</p>
            Transform your business with our cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              href="/services" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Explore Services
            </Link>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Leading provider of AI and IT solutions for businesses. Transform your operations with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-280f
          </div>
        </div>
      </section>

        {/* Services Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">Our Services</h2>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by businesses worldwide for exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Services</h3>
              <p className="text-gray-600">Scale your infrastructure with secure, reliable, and efficient cloud solutions.</p>p>
            </article>
          </Suspense>
        </section>

        {/* Content Carousel */}
        <ContentCarousel />

        {/* Dynamic Content Showcase */}
        <DynamicContentShowcase />

        {/* Content Statistics */}
        <ContentStatistics />

        {/* Newsletter Signup */}
        <ContentNewsletterSignup />

        {/* Call to Action Section */}
        <section className="text-center" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <a
            href="tel:+13026009898"
            onClick={handlePhoneClick}
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            aria-label="Call us at (302) 600-9898"
          >Contact Us: (302) 600-9898</a>a>
        </section>
<<<<<<< HEAD
      </main>
    </div>
  );
};

export default HomePage;
=======
        
        <Footer />
      </div>
  )
}

export default HomePage
>>>>>>> cursor/fix-errors-and-merge-to-main-280f
