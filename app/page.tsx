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
      
      <div className="min-h-screen futuristic-bg animated-bg cyber-grid particle-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold holographic-text mb-6 floating" data-text="Welcome to Zion Tech Group">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto floating-delayed">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 floating-slow">
              <a href="/contact" className="neon-button neon-glow">
                Get Started
              </a>
              <a href="/about" className="cyber-button">
                Learn More
              </a>
            </div>
            
            {/* Featured Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="futuristic-card p-6 pulse-neon data-stream">
                <h3 className="text-xl font-semibold neon-text-purple mb-4">AI Services</h3>
                <p className="text-gray-300 mb-4">
                  Advanced artificial intelligence solutions including machine learning, NLP, and computer vision.
                </p>
                <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 neon-glow">Explore AI Services →</a>
              </div>
              <div className="futuristic-card p-6 pulse-neon-slow matrix-rain">
                <h3 className="text-xl font-semibold neon-text-green mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud solutions that provide reliability, security, and performance for your business.
                </p>
                <a href="/cloud-infrastructure" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 neon-glow">Explore Cloud Solutions →</a>
              </div>
              <div className="futuristic-card p-6 pulse-neon">
                <h3 className="text-xl font-semibold neon-text-pink mb-4">Digital Transformation</h3>
                <p className="text-gray-300 mb-4">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <a href="/digital-transformation" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 neon-glow">Learn More →</a>
              </div>
            </div>

            {/* Micro SAAS Services Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold neon-text mb-8 text-center">Our AI-Powered Micro SAAS Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="futuristic-card p-6 pulse-neon">
                  <h3 className="text-lg font-semibold neon-text-green mb-3">AI Chatbot Pro</h3>
                  <p className="text-gray-300 text-sm mb-4">Advanced conversational AI with natural language understanding</p>
                  <a href="/zion-ai-chatbot-pro" className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-300">Learn More →</a>
                </div>
                <div className="futuristic-card p-6 pulse-neon-slow">
                  <h3 className="text-lg font-semibold neon-text-purple mb-3">Document Processor</h3>
                  <p className="text-gray-300 text-sm mb-4">Intelligent document processing with OCR and data extraction</p>
                  <a href="/zion-ai-document-processor" className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-300">Learn More →</a>
                </div>
                <div className="futuristic-card p-6 pulse-neon">
                  <h3 className="text-lg font-semibold neon-text-pink mb-3">Workflow Automator</h3>
                  <p className="text-gray-300 text-sm mb-4">Automate business processes with AI-powered optimization</p>
                  <a href="/zion-ai-workflow-automator-pro" className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-300">Learn More →</a>
                </div>
                <div className="futuristic-card p-6 pulse-neon-slow">
                  <h3 className="text-lg font-semibold neon-text mb-3">Email Marketing Pro</h3>
                  <p className="text-gray-300 text-sm mb-4">AI-powered email marketing with personalization and automation</p>
                  <a href="/zion-ai-email-marketing-pro" className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-300">Learn More →</a>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold neon-text mb-8 text-center">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold neon-text-green mb-2">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold neon-text-purple mb-2">50+</div>
                  <div className="text-gray-300">AI Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold neon-text-pink mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold neon-text mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;