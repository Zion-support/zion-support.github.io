import React from 'react';
import { Helmet } from 'react-helmet-async';

const VirtualRealitySolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Virtual Reality Solutions - Zion Tech Group</title>
        <meta name="description" content="Immersive virtual reality solutions for training, simulation, entertainment, and enterprise applications. Create compelling VR experiences with cutting-edge technology." />
        <meta name="keywords" content="virtual reality, VR solutions, VR development, immersive technology, VR applications" />
        <link rel="canonical" href="https://ziontechgroup.com/virtual-reality-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Virtual Reality Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Immerse your audience in virtual worlds with our cutting-edge VR solutions. 
              Create engaging experiences for training, entertainment, education, and enterprise applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-white mb-4">VR Training</h3>
              <p className="text-gray-300">
                Create immersive training simulations for safety, skills development, and onboarding.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-white mb-4">Medical VR</h3>
              <p className="text-gray-300">
                Develop VR applications for medical training, therapy, and patient care.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Architecture VR</h3>
              <p className="text-gray-300">
                Visualize architectural designs and walk through virtual buildings before construction.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-4">VR Gaming</h3>
              <p className="text-gray-300">
                Create immersive VR games and interactive entertainment experiences.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-4">Virtual Tours</h3>
              <p className="text-gray-300">
                Develop virtual tours for real estate, tourism, and cultural experiences.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-4">VR Development</h3>
              <p className="text-gray-300">
                Custom VR application development for any industry or use case.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Create VR Experiences?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualRealitySolutionsPage;