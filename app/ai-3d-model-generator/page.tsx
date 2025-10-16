import React from "react";
import { Helmet } from "react-helmet-async";

const AI3DModelGeneratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI 3D Model Generator - Zion Tech Group</title>
        <meta
          name="description"
          content="Generate high-quality 3D models with AI technology. Create 3D assets for games, AR/VR, architecture, and product design with our advanced AI 3D model generator."
        />
        <meta
          name="keywords"
          content="AI 3D model generator, 3D modeling AI, 3D asset creation, AR VR models, architectural visualization"
        />
        <link
          rel="canonical"
          href="https://ziontechgroup.com/ai-3d-model-generator"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              AI 3D Model Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create stunning 3D models with the power of AI. Generate
              high-quality 3D assets for games, AR/VR applications,
              architecture, and product design in minutes, not hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Game Assets
              </h3>
              <p className="text-gray-300">
                Generate 3D models for games, characters, environments, and
                props with AI precision.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Architecture
              </h3>
              <p className="text-gray-300">
                Create detailed architectural models and visualizations for
                buildings and structures.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                AR/VR Content
              </h3>
              <p className="text-gray-300">
                Generate 3D models optimized for augmented and virtual reality
                applications.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Product Design
              </h3>
              <p className="text-gray-300">
                Create 3D prototypes and models for product design and
                manufacturing.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Rapid Prototyping
              </h3>
              <p className="text-gray-300">
                Quickly generate 3D models from text descriptions or 2D images.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Customization
              </h3>
              <p className="text-gray-300">
                Customize and modify generated models with advanced editing
                tools.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Create Amazing 3D Models?
            </h2>
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

export default AI3DModelGeneratorPage;
