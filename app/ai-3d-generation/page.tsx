
import React from 'react';
import SEOHead from '../components/SEOHead';

const Ai3DGenerationPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI 3D Generation - Zion Tech Group"
        description="Advanced AI-powered 3D generation solutions for creative professionals"
        keywords="AI 3D generation, 3D modeling, 3D animation, AI visualization, 3D technology"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI 3D Generation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create stunning 3D content with AI-powered tools
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">3D Modeling</h3>
                <p className="text-gray-600">Generate detailed 3D models from text descriptions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Animation</h3>
                <p className="text-gray-600">Create smooth animations with AI assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ai3DGenerationPage;

