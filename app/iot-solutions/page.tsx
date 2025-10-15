import React from 'react';
import { Helmet } from 'react-helmet-async';

const IoTSolutionsPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IoT Development & Integration",
    "description": "Internet of Things solutions including device development, data collection, and analytics",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "email": "kleber@ziontechgroup.com"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "5000",
      "priceCurrency": "USD",
      "description": "Starting from $5,000 for basic IoT development"
    }
  };

  return (
    <>
      <Helmet>
        <title>IoT Development & Integration - Zion Tech Group</title>
        <meta name="description" content="Internet of Things solutions including device development, data collection, and analytics. Expert IoT development services." />
        <meta name="keywords" content="IoT development, Internet of Things, smart devices, sensor networks, IoT analytics, connected devices" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">IoT Development</span><br />
              <span className="neon-text neon-green">& Integration</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect and manage IoT devices with our comprehensive development services. 
              From sensor networks to smart city solutions, we build the future of connected technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="futuristic-btn text-lg px-10 py-4">
                Get Started
              </a>
              <a href="#services" className="neon-btn text-lg px-10 py-4">
                View Services
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-secondary">Our IoT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IoT solutions for modern businesses and smart environments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">📱</div>
                <h3 className="text-2xl font-bold text-white mb-4">IoT Device Development</h3>
                <p className="text-gray-300 mb-6">
                  Custom IoT devices and sensors designed for your specific use case and requirements.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Sensor integration</li>
                  <li>• Microcontroller programming</li>
                  <li>• Power optimization</li>
                  <li>• Hardware design</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$5,000 - $50,000</div>
                <a href="/contact" className="text-neon-blue hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="dark-glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Integration</h3>
                <p className="text-gray-300 mb-6">
                  Seamless cloud connectivity and data processing for your IoT ecosystem.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• AWS IoT Core</li>
                  <li>• Azure IoT Hub</li>
                  <li>• Google Cloud IoT</li>
                  <li>• Custom cloud solutions</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$3,000 - $30,000</div>
                <a href="/contact" className="text-neon-purple hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Real-time data processing and analytics for actionable insights from IoT devices.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Real-time processing</li>
                  <li>• Predictive analytics</li>
                  <li>• Machine learning</li>
                  <li>• Custom dashboards</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$8,000 - $80,000</div>
                <a href="/contact" className="text-neon-green hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="dark-glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🏭</div>
                <h3 className="text-2xl font-bold text-white mb-4">Smart Manufacturing</h3>
                <p className="text-gray-300 mb-6">
                  Industrial IoT solutions for manufacturing optimization and automation.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Production monitoring</li>
                  <li>• Predictive maintenance</li>
                  <li>• Quality control</li>
                  <li>• Supply chain tracking</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$15,000 - $150,000</div>
                <a href="/contact" className="text-neon-pink hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🏙️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Smart City Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive IoT solutions for smart city infrastructure and management.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Traffic management</li>
                  <li>• Environmental monitoring</li>
                  <li>• Public safety</li>
                  <li>• Energy management</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$25,000 - $250,000</div>
                <a href="/contact" className="text-neon-orange hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="dark-glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🏥</div>
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare IoT</h3>
                <p className="text-gray-300 mb-6">
                  Medical device integration and health monitoring solutions for healthcare providers.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Patient monitoring</li>
                  <li>• Medical device integration</li>
                  <li>• Health analytics</li>
                  <li>• Compliance solutions</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$20,000 - $200,000</div>
                <a href="/contact" className="text-neon-blue hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-accent">Connect Your World</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your business with intelligent IoT solutions that provide real-time insights and automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="futuristic-btn text-lg px-10 py-4">
                  Start Your IoT Project
                </a>
                <a href="/pricing" className="neon-btn text-lg px-10 py-4">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IoTSolutionsPage;