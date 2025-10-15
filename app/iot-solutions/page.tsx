import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const IoTSolutionsPage: React.FC = () => {
  const features = [
    'Smart device development',
    'IoT platform architecture',
    'Real-time data analytics',
    'Edge computing solutions',
    'Sensor integration',
    'Cloud connectivity',
    'Device management systems',
    'Predictive maintenance',
    'Remote monitoring',
    'Custom IoT applications'
  ];

  const benefits = [
    'Reduce operational costs by 40%',
    'Increase efficiency by 50%',
    'Improve asset utilization by 60%',
    'Enable predictive maintenance',
    'Enhance data-driven decisions',
    'Optimize resource allocation'
  ];

  const pricing = {
    basic: { price: 15000, features: ['Up to 100 devices', 'Basic analytics', 'Cloud platform'] },
    professional: { price: 50000, features: ['Up to 1000 devices', 'Advanced analytics', 'Custom dashboards'] },
    enterprise: { price: 150000, features: ['Unlimited devices', 'Full IoT suite', 'Dedicated support'] }
  };

  return (
    <>
      <SEOHead
        title="IoT Solutions - Zion Tech Group"
        description="Connect and optimize your business with intelligent IoT solutions. Smart devices, real-time analytics, edge computing, and comprehensive IoT platform development."
        keywords="IoT solutions, smart devices, edge computing, sensor integration, IoT platform, predictive maintenance, industrial IoT"
        canonicalUrl="https://ziontechgroup.com/iot-solutions"
      />
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        {/* Hero Section */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6 animated-icon">🌐</div>
              <h1 className="text-5xl md:text-7xl font-bold holographic-text mb-6">
                IoT Solutions
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                Connect and optimize your business with intelligent IoT solutions. From smart devices to real-time analytics, 
                we build comprehensive IoT ecosystems that drive efficiency and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a href="#demo" className="neon-button text-lg px-10 py-4">
                  View Demo
                </a>
                <a href="#pricing" className="neon-button-purple text-lg px-10 py-4">
                  See Pricing
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">IoT Capabilities</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Comprehensive IoT development services for connected business solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="futuristic-card glow-effect p-6 group">
                  <div className="text-3xl mb-4 animated-icon">📡</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:neon-text transition-all duration-300">
                    {feature}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Advanced IoT technology solutions for modern connected businesses.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative z-10 py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text-purple mb-6">Business Impact</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="futuristic-card glow-effect p-8 text-center">
                  <div className="text-4xl font-bold neon-text-pink mb-4">
                    {benefit.split(' ')[0]}
                  </div>
                  <p className="text-white text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IoT Dashboard Preview */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Real-Time IoT Dashboard</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Monitor and control your IoT ecosystem with our intelligent dashboard
              </p>
            </div>
            
            <div className="futuristic-card glow-effect p-8">
              <div className="cyber-terminal">
                <div className="text-neon-green mb-4">
                  <div className="flex items-center mb-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-sm">ZION IoT MONITORING SYSTEM v3.2</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-4">
                    Connected devices: 1,247 | Last updated: {new Date().toLocaleString()}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-black/50 p-4 rounded border border-neon-green/30">
                    <div className="text-neon-cyan text-sm font-bold mb-2">ACTIVE DEVICES</div>
                    <div className="text-2xl text-neon-green font-bold">1,247</div>
                    <div className="text-xs text-gray-400">98.5% online</div>
                  </div>
                  
                  <div className="bg-black/50 p-4 rounded border border-neon-green/30">
                    <div className="text-neon-cyan text-sm font-bold mb-2">DATA POINTS</div>
                    <div className="text-2xl text-neon-purple font-bold">45.2K</div>
                    <div className="text-xs text-gray-400">per minute</div>
                  </div>
                  
                  <div className="bg-black/50 p-4 rounded border border-neon-green/30">
                    <div className="text-neon-cyan text-sm font-bold mb-2">ALERTS</div>
                    <div className="text-2xl text-neon-pink font-bold">3</div>
                    <div className="text-xs text-gray-400">active warnings</div>
                  </div>
                  
                  <div className="bg-black/50 p-4 rounded border border-neon-green/30">
                    <div className="text-neon-cyan text-sm font-bold mb-2">EFFICIENCY</div>
                    <div className="text-2xl text-neon-orange font-bold">94.2%</div>
                    <div className="text-xs text-gray-400">system uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">IoT Solutions</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Choose the IoT solution that scales with your connected business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details], index) => (
                <div key={plan} className={`futuristic-card glow-effect p-8 ${
                  plan === 'professional' ? 'ring-2 ring-neon-cyan' : ''
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                    <div className="text-4xl font-bold neon-text mb-2">${details.price.toLocaleString()}</div>
                    <div className="text-gray-400">starting from</div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {details.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white">
                        <span className="text-neon-cyan mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan === 'professional' 
                        ? 'neon-button' 
                        : 'neon-button-purple'
                    }`}
                  >
                    Connect Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="futuristic-card glow-effect p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-6">
                Connect Your Business Today
              </h2>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent IoT solutions that drive efficiency and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a href="/contact" className="neon-button text-lg px-10 py-4">
                  Start IoT Project
                </a>
                <a href="tel:+13024640950" className="neon-button-purple text-lg px-10 py-4">
                  Call +1 302 464 0950
                </a>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IoTSolutionsPage;