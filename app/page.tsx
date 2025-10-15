import React from 'react';
import { Helmet } from 'react-helmet-async';

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
      "telephone": "+1 302 464 0950",
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
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta name="keywords" content="AI solutions, IT services, cloud infrastructure, digital transformation, machine learning, artificial intelligence" />
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
      
      <div className="min-h-screen futuristic-bg particles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
              Welcome to <span className="neon-text">Zion Tech Group</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto px-4">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a href="/contact" className="cyber-button text-center w-full sm:w-auto">
                Get Started
              </a>
              <a href="/about" className="cyber-button text-center w-full sm:w-auto" style={{borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)'}}>
                Learn More
              </a>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12 neon-text-purple">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="glass-card p-6 hover-lift hover-glow floating">
                <h3 className="text-xl font-semibold text-white mb-4 neon-text">AI Services</h3>
                <p className="text-gray-300 mb-4">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium">Learn More →</a>
              </div>
              <div className="glass-card p-6 hover-lift hover-glow floating-delayed">
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-purple">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <a href="/cloud-infrastructure" className="text-purple-400 hover:text-purple-300 font-medium">Learn More →</a>
              </div>
              <div className="glass-card p-6 hover-lift hover-glow floating-slow">
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-pink">Digital Transformation</h3>
                <p className="text-gray-300 mb-4">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <a href="/digital-transformation" className="text-pink-400 hover:text-pink-300 font-medium">Learn More →</a>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12 neon-text-green">AI-Powered Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <div className="glass-card p-4 hover-lift hover-glow floating">
                <h3 className="text-lg font-semibold text-white mb-2 neon-text">Chatbot Builder</h3>
                <p className="text-gray-300 text-sm mb-3">Build intelligent chatbots without coding</p>
                <a href="/ai-chatbot-builder" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Try Now →</a>
              </div>
              <div className="glass-card p-4 hover-lift hover-glow floating-delayed">
                <h3 className="text-lg font-semibold text-white mb-2 neon-text-green">Form Builder</h3>
                <p className="text-gray-300 text-sm mb-3">Create smart forms with AI assistance</p>
                <a href="/ai-form-builder" className="text-green-400 hover:text-green-300 text-sm font-medium">Try Now →</a>
              </div>
              <div className="glass-card p-4 hover-lift hover-glow floating-slow">
                <h3 className="text-lg font-semibold text-white mb-2 neon-text-pink">Video Generator</h3>
                <p className="text-gray-300 text-sm mb-3">Create professional videos with AI</p>
                <a href="/ai-video-generator" className="text-pink-400 hover:text-pink-300 text-sm font-medium">Try Now →</a>
              </div>
              <div className="glass-card p-4 hover-lift hover-glow floating">
                <h3 className="text-lg font-semibold text-white mb-2 neon-text-purple">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-3">Automated content moderation using AI</p>
                <a href="/zion-ai-content-moderator" className="text-purple-400 hover:text-purple-300 text-sm font-medium">Try Now →</a>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/services" className="text-cyan-400 hover:text-cyan-300 font-medium neon-text">View All Services →</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;