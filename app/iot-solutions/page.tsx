import React from 'react';
import { Helmet } from 'react-helmet-async';

const IoTSolutionsPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IoT & Smart Device Solutions",
    "description": "End-to-end IoT solutions including device development, connectivity, data management, and analytics",
    "url": "https://ziontechgroup.com/iot-solutions",
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
      "price": "10000",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <Helmet>
        <title>IoT & Smart Device Solutions - Zion Tech Group</title>
        <meta name="description" content="End-to-end IoT solutions including device development, connectivity, data management, and analytics. Connect and manage smart devices with IoT." />
        <meta name="keywords" content="IoT solutions, smart devices, internet of things, sensor networks, edge computing, IoT development" />
        <meta property="og:title" content="IoT & Smart Device Solutions - Zion Tech Group" />
        <meta property="og:description" content="End-to-end IoT solutions including device development, connectivity, data management, and analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/iot-solutions" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen futuristic-bg">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 floating">
              <span className="text-3xl">🌐</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              IoT & Smart Device Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect and manage smart devices with our comprehensive IoT solutions. From device development to data analytics, we provide end-to-end IoT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="futuristic-btn">
                Get Started
              </a>
              <a href="#demo" className="glow-border text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Demo
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="futuristic-card p-8 slide-in-left">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">IoT Device Development</h3>
              <p className="text-gray-300">Custom IoT devices and sensors designed for your specific requirements and use cases.</p>
            </div>
            
            <div className="futuristic-card p-8 fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Connectivity Solutions</h3>
              <p className="text-gray-300">Secure and reliable connectivity solutions including WiFi, Bluetooth, LoRaWAN, and cellular.</p>
            </div>
            
            <div className="futuristic-card p-8 slide-in-right">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Edge Computing</h3>
              <p className="text-gray-300">Process data at the edge for faster response times and reduced bandwidth usage.</p>
            </div>
            
            <div className="futuristic-card p-8 slide-in-left">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Data Processing</h3>
              <p className="text-gray-300">Process and analyze IoT data in real-time for immediate insights and actions.</p>
            </div>
            
            <div className="futuristic-card p-8 fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Device Management Platform</h3>
              <p className="text-gray-300">Centralized platform to manage, monitor, and update all your IoT devices remotely.</p>
            </div>
            
            <div className="futuristic-card p-8 slide-in-right">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Maintenance</h3>
              <p className="text-gray-300">AI-powered predictive maintenance to prevent equipment failures and optimize performance.</p>
            </div>
          </div>

          {/* Use Cases */}
          <div className="futuristic-card p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-purple">IoT Use Cases</h2>
              <p className="text-lg text-gray-300">Transform your business with IoT technology</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Manufacturing</h3>
                <p className="text-gray-300">Monitor production lines, track inventory, and optimize manufacturing processes with IoT sensors.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 floating-delayed">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Asset Tracking</h3>
                <p className="text-gray-300">Track and monitor valuable assets in real-time with GPS and sensor technology.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                  <span className="text-2xl">🌡️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Environmental Monitoring</h3>
                <p className="text-gray-300">Monitor air quality, temperature, humidity, and other environmental factors.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 floating-delayed">
                  <span className="text-2xl">🏙️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Cities</h3>
                <p className="text-gray-300">Implement smart city solutions for traffic management, waste collection, and public services.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare Devices</h3>
                <p className="text-gray-300">Remote patient monitoring and medical device connectivity for better healthcare outcomes.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 floating-delayed">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Agriculture Automation</h3>
                <p className="text-gray-300">Smart farming solutions for crop monitoring, irrigation control, and livestock tracking.</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="futuristic-card p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-green">IoT Development Pricing</h2>
              <p className="text-lg text-gray-300">Choose the package that fits your IoT project needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-2 border-gray-600 rounded-xl p-8 hover:border-blue-500 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                  <div className="text-4xl font-bold text-blue-500 mb-4">$10,000<span className="text-lg text-gray-500">/project</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Simple IoT device</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic connectivity</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Data collection</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic dashboard</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Documentation</li>
                  </ul>
                  <a href="/contact" className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="border-2 border-blue-500 rounded-xl p-8 relative bg-gradient-to-b from-blue-50 to-transparent">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-blue-500 mb-4">$35,000<span className="text-lg text-gray-500">/project</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Multiple IoT devices</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced connectivity</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Edge computing</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Real-time analytics</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Device management</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Mobile app</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 6 months support</li>
                  </ul>
                  <a href="/contact" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="border-2 border-gray-600 rounded-xl p-8 hover:border-blue-500 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-blue-500 mb-4">$100,000<span className="text-lg text-gray-500">/project</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Complete IoT ecosystem</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom hardware</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> AI/ML integration</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Predictive analytics</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Scalable infrastructure</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 monitoring</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                  </ul>
                  <a href="/contact" className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4 neon-text">Ready to Connect Your World?</h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your business with our comprehensive IoT solutions and smart device development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Start Your IoT Project
              </a>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IoTSolutionsPage;