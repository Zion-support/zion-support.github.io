import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const AI3DModelGeneratorPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>AI 3D Model Generator - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality 3D models with AI technology. Create 3D assets for games, AR/VR, architecture, and product design with our advanced AI 3D model generator." />
        <meta name="keywords" content="AI 3D model generator, 3D modeling AI, 3D asset creation, AR VR models, architectural visualization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-3d-model-generator" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              AI 3D Model Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create stunning 3D models with the power of AI. Generate high-quality 3D assets for games, 
              AR/VR applications, architecture, and product design in minutes, not hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-4">Game Assets</h3>
              <p className="text-gray-300">
                Generate 3D models for games, characters, environments, and props with AI precision.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Architecture</h3>
              <p className="text-gray-300">
                Create detailed architectural models and visualizations for buildings and structures.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-4">AR/VR Content</h3>
              <p className="text-gray-300">
                Generate 3D models optimized for augmented and virtual reality applications.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-4">Product Design</h3>
              <p className="text-gray-300">
                Create 3D prototypes and models for product design and manufacturing.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">Rapid Prototyping</h3>
              <p className="text-gray-300">
                Quickly generate 3D models from text descriptions or 2D images.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-4">Customization</h3>
              <p className="text-gray-300">
                Customize and modify generated models with advanced editing tools.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Create Amazing 3D Models?</h2>
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
        title="AI 3D Model Generator - Zion Tech Group"
        description="Generate high-quality 3D models using AI technology. Create realistic 3D assets for games, VR, AR, and visualization projects."
        keywords="AI 3D model generator, 3D modeling, 3D assets, game development, VR AR, 3D visualization"
        canonicalUrl="https://ziontechgroup.com/ai-3d-model-generator"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI 3D Model Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create stunning 3D models with AI technology. Perfect for games, VR, AR, and visualization projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">AI-Powered Generation</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Text-to-3D model generation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Image-to-3D conversion
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Procedural 3D generation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  High-poly and low-poly models
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  UV mapping and texturing
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Export Formats</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  OBJ, FBX, STL, GLTF
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Unity and Unreal Engine ready
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Blender and Maya compatible
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  3D printing optimized
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Web and mobile optimized
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Game Development</h3>
                <p className="text-gray-300">Create characters, environments, and props for games.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥽</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">VR/AR</h3>
                <p className="text-gray-300">Generate immersive 3D content for virtual and augmented reality.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Architecture</h3>
                <p className="text-gray-300">Create architectural visualizations and building models.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🖨️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-orange-400">3D Printing</h3>
                <p className="text-gray-300">Generate models optimized for 3D printing and prototyping.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=ai-3d-model-generator"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
            >
              Generate 3D Models
            </a>
          </div>
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default AI3DModelGeneratorPage;