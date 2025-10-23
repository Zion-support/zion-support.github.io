"use client";
import React from 'react';

const Page = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
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
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.</p>
            Transform your business with our cutting-edge technology.
          </p>
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
          >Contact Us: (302) 600-9898</a>
        </section>
      </main>
    </div>
  );
};

export default Page;