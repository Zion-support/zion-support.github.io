import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const VirtualRealitySolutionsPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
      <SEOHead
        title="Virtual Reality Solutions - Zion Tech Group"
        description="Immersive VR solutions for training, entertainment, education, and enterprise applications with custom VR development and deployment."
        keywords="virtual reality, VR solutions, VR development, immersive technology, VR applications, virtual training"
        canonicalUrl="https://ziontechgroup.com/virtual-reality-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Virtual Reality Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create immersive virtual reality experiences for training, entertainment, education, and enterprise applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">VR Development</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Custom VR applications
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Multi-platform VR support
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Interactive 3D environments
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Haptic feedback integration
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Spatial audio design
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">VR Applications</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Virtual training simulations
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Educational experiences
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Virtual meetings and collaboration
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Entertainment and gaming
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Virtual showrooms and tours
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">VR Platforms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥽</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Oculus & Meta</h3>
                <p className="text-gray-300">Quest, Rift, and enterprise VR solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">HTC Vive</h3>
                <p className="text-gray-300">High-end VR experiences and enterprise solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Web VR</h3>
                <p className="text-gray-300">Browser-based VR experiences accessible on any device.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=virtual-reality-solutions"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Build VR Experience
            </a>
          </div>
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default VirtualRealitySolutionsPage;