import React from 'react';
import { Helmet } from 'react-helmet-async';

const ARVRDevelopmentPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AR/VR Development Services",
    "description": "Augmented and Virtual Reality applications for immersive user experiences",
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
      "price": "8000",
      "priceCurrency": "USD",
      "description": "Starting from $8,000 for basic AR/VR development"
    }
  };

  return (
    <>
      <Helmet>
        <title>AR/VR Development Services - Zion Tech Group</title>
        <meta name="description" content="Augmented and Virtual Reality applications for immersive user experiences. Expert AR/VR development services." />
        <meta name="keywords" content="AR development, VR development, augmented reality, virtual reality, immersive experiences, 3D development" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">AR/VR Development</span><br />
              <span className="neon-text neon-pink">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create immersive AR and VR experiences that engage users and transform your business. 
              From training simulations to virtual showrooms, we bring your vision to life.
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
                <span className="gradient-text-secondary">Our AR/VR Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AR and VR solutions for various industries and use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🥽</div>
                <h3 className="text-2xl font-bold text-white mb-4">VR Application Development</h3>
                <p className="text-gray-300 mb-6">
                  Immersive virtual reality applications for training, entertainment, and business solutions.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Unity & Unreal Engine</li>
                  <li>• Oculus & HTC Vive</li>
                  <li>• 3D modeling & animation</li>
                  <li>• Interactive experiences</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$8,000 - $80,000</div>
                <a href="/contact" className="text-neon-blue hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="dark-glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">📱</div>
                <h3 className="text-2xl font-bold text-white mb-4">AR Mobile Apps</h3>
                <p className="text-gray-300 mb-6">
                  Augmented reality mobile applications for iOS and Android with advanced AR features.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• ARKit & ARCore</li>
                  <li>• Object recognition</li>
                  <li>• 3D overlays</li>
                  <li>• Cross-platform support</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$5,000 - $50,000</div>
                <a href="/contact" className="text-neon-purple hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🎓</div>
                <h3 className="text-2xl font-bold text-white mb-4">Training Simulations</h3>
                <p className="text-gray-300 mb-6">
                  Virtual training environments for education, healthcare, and corporate training programs.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Interactive scenarios</li>
                  <li>• Progress tracking</li>
                  <li>• Multi-user support</li>
                  <li>• Assessment tools</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$15,000 - $150,000</div>
                <a href="/contact" className="text-neon-green hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="dark-glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🏪</div>
                <h3 className="text-2xl font-bold text-white mb-4">Virtual Showrooms</h3>
                <p className="text-gray-300 mb-6">
                  Immersive virtual showrooms and retail experiences for e-commerce and marketing.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• 3D product visualization</li>
                  <li>• Virtual try-on</li>
                  <li>• Interactive catalogs</li>
                  <li>• E-commerce integration</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$10,000 - $100,000</div>
                <a href="/contact" className="text-neon-pink hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🏥</div>
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare VR</h3>
                <p className="text-gray-300 mb-6">
                  Medical training and therapy applications using virtual and augmented reality.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Surgical simulations</li>
                  <li>• Patient therapy</li>
                  <li>• Medical education</li>
                  <li>• Pain management</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$20,000 - $200,000</div>
                <a href="/contact" className="text-neon-orange hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="dark-glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🎮</div>
                <h3 className="text-2xl font-bold text-white mb-4">Gaming & Entertainment</h3>
                <p className="text-gray-300 mb-6">
                  Immersive gaming experiences and entertainment applications for VR and AR platforms.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• VR games</li>
                  <li>• AR experiences</li>
                  <li>• Multiplayer support</li>
                  <li>• Performance optimization</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$12,000 - $120,000</div>
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
                <span className="gradient-text-accent">Step Into the Future</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Create immersive experiences that captivate your audience and drive engagement with our AR/VR solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="futuristic-btn text-lg px-10 py-4">
                  Start Your AR/VR Project
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

export default ARVRDevelopmentPage;