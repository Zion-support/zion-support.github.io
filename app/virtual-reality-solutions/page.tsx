import React from 'react';
import SEOHead from '../components/SEOHead';

const VirtualRealitySolutionsPage: React.FC = () => {
  return (
    <>
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
        </div>
      </div>
    </>
  );
};

export default VirtualRealitySolutionsPage;