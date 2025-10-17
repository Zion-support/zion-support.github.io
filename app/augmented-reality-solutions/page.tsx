import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const AugmentedRealitySolutionsPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Augmented Reality Solutions - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge augmented reality solutions for enterprise, education, and consumer applications. Create immersive AR experiences with our advanced AR technology." />
        <meta name="keywords" content="augmented reality, AR solutions, AR development, immersive technology, AR applications" />
        <link rel="canonical" href="https://ziontechgroup.com/augmented-reality-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Augmented Reality Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with immersive augmented reality experiences. 
              Create engaging AR applications for training, marketing, retail, and enterprise solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise AR</h3>
              <p className="text-gray-300">
                Enhance productivity with AR solutions for training, maintenance, and remote assistance.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Retail AR</h3>
              <p className="text-gray-300">
                Create immersive shopping experiences with virtual try-ons and product visualization.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-white mb-4">Education AR</h3>
              <p className="text-gray-300">
                Enhance learning with interactive AR content and immersive educational experiences.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Architecture AR</h3>
              <p className="text-gray-300">
                Visualize architectural designs and construction projects with AR overlays.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-4">Gaming AR</h3>
              <p className="text-gray-300">
                Create engaging AR games and interactive entertainment experiences.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-4">AR Development</h3>
              <p className="text-gray-300">
                Custom AR application development for any industry or use case.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Create AR Experiences?</h2>
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
        title="Augmented Reality Solutions - Zion Tech Group"
        description="Advanced AR solutions for enterprise, retail, education, and healthcare with custom AR applications and immersive experiences."
        keywords="augmented reality, AR solutions, AR development, immersive technology, AR applications, mixed reality"
        canonicalUrl="https://ziontechgroup.com/augmented-reality-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Augmented Reality Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create immersive AR experiences for enterprise, retail, education, and healthcare with our advanced augmented reality solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">AR Development</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Custom AR applications
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Cross-platform AR solutions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  AR content creation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  3D object recognition
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Real-time tracking
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-red-400">AR Applications</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Retail and e-commerce
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Training and education
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Healthcare visualization
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Industrial maintenance
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Marketing and advertising
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">AR Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Mobile AR</h3>
                <p className="text-gray-300">iOS and Android AR applications using ARKit and ARCore.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥽</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">AR Glasses</h3>
                <p className="text-gray-300">Enterprise AR solutions for HoloLens and Magic Leap.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Web AR</h3>
                <p className="text-gray-300">Browser-based AR experiences accessible on any device.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=augmented-reality-solutions"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
            >
              Create AR Experience
            </a>
          </div>
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default AugmentedRealitySolutionsPage;