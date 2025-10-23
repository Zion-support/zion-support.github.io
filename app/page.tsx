"use client";
import React, { Suspense, useState, useEffect } from 'react';
import { Star } from 'lucide-react';

// Mock data for demonstration
const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "99%", label: "Success Rate" },
  { number: "24/7", label: "Support" }
];

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    content: "Zion Tech Group transformed our business with their AI solutions.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "CTO, InnovateLab",
    content: "Exceptional service and cutting-edge technology implementation.",
    rating: 5
  },
  {
    name: "Mike Davis",
    role: "Founder, StartupXYZ",
    content: "The best IT partner we've ever worked with. Highly recommended!",
    rating: 5
  }
];

const ServiceCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
    <div className="h-6 bg-gray-200 rounded mb-4"></div>
    <div className="h-4 bg-gray-200 rounded"></div>
  </div>
);

const ContentPromotionBanner = () => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm font-medium">🚀 New AI Solutions Available - Contact us for a free consultation!</p>
    </div>
  </div>
);

const ContentCarousel = () => (
  <div className="bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Latest Innovations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Automation</h3>
          <p className="text-gray-600">Streamline your processes with intelligent automation solutions.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quantum Computing</h3>
          <p className="text-gray-600">Harness the power of quantum computing for complex problem solving.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning</h3>
          <p className="text-gray-600">Build intelligent systems that learn and adapt to your needs.</p>
        </div>
      </div>
    </div>
  </div>
);

const DynamicContentShowcase = () => (
  <div className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Dynamic Solutions</h2>
      <div className="text-center">
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our dynamic content showcase demonstrates the power of modern web technologies
          and AI-driven solutions in creating engaging user experiences.
        </p>
      </div>
    </div>
  </div>
);

const ContentStatistics = () => (
  <div className="bg-gray-900 py-16">
    <div className="container mx-auto px-4">
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
  </div>
);

const ContentNewsletterSignup = () => (
  <div className="bg-indigo-600 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
      <p className="text-indigo-100 mb-8">Get the latest news and updates from Zion Tech Group</p>
      <div className="max-w-md mx-auto flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg text-gray-900"
        />
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

const Page = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePhoneClick = () => {
    // Handle phone click logic
    console.log('Phone clicked');
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

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
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Solutions</h3>
                <p className="text-gray-600">Leverage artificial intelligence to automate and optimize your business processes.</p>
              </article>
            </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">IT Consulting</h3>
                <p className="text-gray-600">Expert guidance to help you make the right technology decisions for your business.</p>
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
            >
              Contact Us: (302) 600-9898
            </a>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;