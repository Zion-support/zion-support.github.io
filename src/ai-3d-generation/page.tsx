import React from 'react';

export default function AI3DGenerationPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">AI 3D Generation</h1>
        <p className="text-gray-300 text-lg mb-8">
          Advanced AI-powered 3D content generation services for gaming, architecture, 
          and entertainment industries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">3D Model Generation</h3>
            <p className="text-gray-300">
              Create high-quality 3D models using advanced AI algorithms and machine learning.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Texture Synthesis</h3>
            <p className="text-gray-300">
              Generate realistic textures and materials for 3D models automatically.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Animation Creation</h3>
            <p className="text-gray-300">
              Create smooth animations and motion sequences using AI-powered tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}