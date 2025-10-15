import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from './data/servicesData';

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI and IT solutions for modern businesses",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Transform Your Business</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, micro SaaS, and digital transformation. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI solutions, IT services, cloud infrastructure, digital transformation, machine learning, artificial intelligence, micro saas, business automation" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI and IT solutions for modern businesses." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
        {/* Animated Background */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute inset-0 particles"></div>
        
        {/* Matrix Rain Effect */}
        <div className="matrix-bg">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} style={{ opacity: Math.random() }}>
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-8 floating neon-text">🚀</div>
              <h1 className="text-5xl md:text-7xl font-bold slide-in-left">
                Transform Your Business with <span className="gradient-text holographic">AI & IT Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed fade-in-up">
                Leading provider of cutting-edge AI and IT solutions. We help businesses accelerate growth, 
                optimize operations, and achieve digital transformation through innovative technology.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to accelerate your business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
                <p className="text-gray-300 mb-6">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, 
                  computer vision, and predictive analytics.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    AI Development & Consulting
                  </li>
                  <li className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    Content Generation & Moderation
                  </li>
                  <li className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    Customer Support Automation
                  </li>
                  <li className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    Sales & Financial Prediction
                  </li>
                </ul>
                <Link
                  to="/ai-services"
                  className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Explore AI Services
                </Link>
              </div>

              {/* IT Solutions */}
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-6">💻</div>
                <h3 className="text-2xl font-bold text-white mb-4">IT Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Complete IT infrastructure and development services including cloud solutions, 
                  web development, mobile apps, and cybersecurity.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    Cloud Infrastructure & Migration
                  </li>
                  <li className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    Web & Mobile Development
                  </li>
                  <li className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    Cybersecurity & Compliance
                  </li>
                  <li className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    DevOps & Automation
                  </li>
                </ul>
                <Link
                  to="/it-services"
                  className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Explore IT Solutions
                </Link>
              </div>

              {/* Micro SaaS */}
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
                <p className="text-gray-300 mb-6">
                  Specialized software solutions for specific business needs including productivity tools, 
                  analytics platforms, and automation solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    Task & Project Management
                  </li>
                  <li className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    Document Analysis & Processing
                  </li>
                  <li className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    Workflow Automation
                  </li>
                  <li className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    Financial & Sales Analytics
                  </li>
                </ul>
                <Link
                  to="/micro-saas-solutions"
                  className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Explore Micro SaaS
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Featured Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular AI and IT solutions trusted by businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.slice(0, 6).map((service, index) => (
                <div
                  key={service.id}
                  className="group glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.pricing.basic}
                    </div>
                    <Link
                      to={`/contact?service=${service.id}`}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Certified professionals with years of experience in AI, cloud computing, and software development.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Fast Delivery</h3>
                <p className="text-gray-300">
                  Rapid development and deployment with agile methodologies to get your solutions to market quickly.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">🔒</div>
                <h3 className="text-2xl font-bold text-white mb-4">Secure & Reliable</h3>
                <p className="text-gray-300">
                  Enterprise-grade security and 99.9% uptime guarantee to keep your business running smoothly.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">💰</div>
                <h3 className="text-2xl font-bold text-white mb-4">Cost Effective</h3>
                <p className="text-gray-300">
                  Competitive pricing with flexible payment options to fit your budget and business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can accelerate your digital transformation. 
                Contact us today for a free consultation and custom proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Email Us
                </a>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;