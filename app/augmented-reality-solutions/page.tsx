import React from 'react';
import SEOHead from '../components/SEOHead';

const AugmentedRealitySolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Augmented Reality Solutions - Zion Tech Group"
        description="Immersive AR solutions for training, visualization, marketing, and customer engagement with cutting-edge augmented reality technology."
        keywords="augmented reality, AR solutions, immersive technology, AR training, AR marketing, mixed reality"
        canonicalUrl="https://ziontechgroup.com/augmented-reality-solutions"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Augmented Reality Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with immersive augmented reality experiences for training, marketing, and customer engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AR Capabilities</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">3D Visualization</h3>
                    <p className="text-gray-600">Overlay digital content onto the real world for enhanced visualization and interaction.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Interactive Training</h3>
                    <p className="text-gray-600">Create immersive training experiences that improve learning retention and engagement.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Remote Assistance</h3>
                    <p className="text-gray-600">Enable remote experts to guide field workers through complex procedures using AR.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Marketing Experiences</h3>
                    <p className="text-gray-600">Create engaging AR marketing campaigns that drive customer interaction and sales.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Manufacturing</h3>
                  <p className="text-gray-600">Assembly guidance, quality control, and maintenance procedures</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Retail</h3>
                  <p className="text-gray-600">Virtual try-ons, product visualization, and interactive shopping experiences</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Healthcare</h3>
                  <p className="text-gray-600">Medical training, surgical planning, and patient education</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Real Estate</h3>
                  <p className="text-gray-600">Virtual property tours and interior design visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AugmentedRealitySolutionsPage;