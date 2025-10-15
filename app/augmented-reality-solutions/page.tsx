import React from 'react';
import { Helmet } from 'react-helmet-async';

const AugmentedRealitySolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Augmented Reality Solutions - Zion Tech Group</title>
        <meta name="description" content="Immersive AR solutions for enterprise, retail, education, and training. Create engaging augmented reality experiences that drive results." />
        <meta name="keywords" content="augmented reality, AR solutions, immersive technology, AR development, mixed reality" />
        <link rel="canonical" href="https://ziontechgroup.com/augmented-reality-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Augmented Reality Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with immersive augmented reality experiences. 
              From retail to training, create engaging AR solutions that captivate and convert.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">AR Capabilities</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>3D object recognition and tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Real-time spatial mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Cross-platform AR development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Cloud-based AR content management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Multi-user collaborative AR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Analytics and performance tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Retail and e-commerce visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Industrial training and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Real estate and architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Education and learning experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Healthcare and medical training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Marketing and brand experiences</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Augment Your Reality</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Create immersive AR experiences that engage users and drive business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Start Building
              </a>
              <a
                href="/demo"
                className="bg-transparent border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                See Examples
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AugmentedRealitySolutionsPage;