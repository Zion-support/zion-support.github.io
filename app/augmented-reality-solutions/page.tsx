import React from "react";
import { Helmet } from "react-helmet-async";

const AugmentedRealitySolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Augmented Reality Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Cutting-edge augmented reality solutions for enterprise, education, and consumer applications. Create immersive AR experiences with our advanced AR technology."
        />
        <meta
          name="keywords"
          content="augmented reality, AR solutions, AR development, immersive technology, AR applications"
        />
        <link
          rel="canonical"
          href="https://ziontechgroup.com/augmented-reality-solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Augmented Reality Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with immersive augmented reality
              experiences. Create engaging AR applications for training,
              marketing, retail, and enterprise solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Enterprise AR
              </h3>
              <p className="text-gray-300">
                Enhance productivity with AR solutions for training,
                maintenance, and remote assistance.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Retail AR
              </h3>
              <p className="text-gray-300">
                Create immersive shopping experiences with virtual try-ons and
                product visualization.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Education AR
              </h3>
              <p className="text-gray-300">
                Enhance learning with interactive AR content and immersive
                educational experiences.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Architecture AR
              </h3>
              <p className="text-gray-300">
                Visualize architectural designs and construction projects with
                AR overlays.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Gaming AR
              </h3>
              <p className="text-gray-300">
                Create engaging AR games and interactive entertainment
                experiences.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                AR Development
              </h3>
              <p className="text-gray-300">
                Custom AR application development for any industry or use case.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Create AR Experiences?
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

export default AugmentedRealitySolutionsPage;
