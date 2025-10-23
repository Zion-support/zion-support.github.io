"use client";
import React, { useState, useEffect, Suspense } from "react";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone } from "lucide-react";
import Link from "next/link";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import ContentPromotionBanner from "./components/ContentPromotionBanner";
import ServiceCardSkeleton from "./components/ServiceCardSkeleton";
import ContentCarousel from "./components/ContentCarousel";
import DynamicContentShowcase from "./components/DynamicContentShowcase";
import ContentStatistics from "./components/ContentStatistics";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      stats: "99.9% uptime",
      link: "/it-services"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Scalable software-as-a-service applications designed to solve specific business challenges with rapid deployment and minimal maintenance",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "50% faster deployment",
      link: "/micro-saas-solutions"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our AI capabilities. Their solutions increased our operational efficiency by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "The micro SaaS platform they built for us has been a game-changer. Highly recommend their services.",
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >Skip to main content</a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 py-16" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-labelledby="hero-heading"
        >
          <h1 id="hero-heading" className="text-5xl font-bold text-gray-900 mb-6">Zion Tech Group</h1>
          <p className="text-xl text-gray-600 mb-8" role="doc-subtitle">Advanced AI and IT Solutions</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          
          <Suspense fallback={<ServiceCardSkeleton />}>
            <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Services</h3>
              <p className="text-gray-600">Scale your infrastructure with secure, reliable, and efficient cloud solutions.</p>
            </article>
          </Suspense>
        </section>

        {/* Content Carousel */}
        <ContentCarousel />

        {/* Dynamic Content Showcase */}
        <DynamicContentShowcase />

        {/* Content Statistics */}
        <ContentStatistics />

        {/* Testimonials Section */}
        <section className="py-20 px-4" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="testimonials-heading" className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Get started with our AI and IT solutions today.</p>
          <a
            href="tel:+13026009898"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            aria-label="Call us at (302) 600-9898"
          >Contact Us: (302) 600-9898</a>
        </section>
      </main>

      {/* Accessibility Enhancer */}
      <AccessibilityEnhancer />
    </div>
  );
};

export default HomePage;