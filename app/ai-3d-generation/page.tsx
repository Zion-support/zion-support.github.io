import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Ai3DGenerationPage() {
  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered 3D generation solutions for creative professionals" />
        <meta name="keywords" content="AI 3D generation, 3D modeling, 3D animation, AI visualization, 3D technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI 3D Generation Solutions</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Harness the power of artificial intelligence to create stunning 3D models, animations, 
              and visualizations with our cutting-edge AI 3D generation technology.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our AI 3D Services</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>AI-powered 3D model generation</li>
              <li>Automated 3D animation creation</li>
              <li>Real-time 3D visualization</li>
              <li>3D asset optimization</li>
              <li>Virtual reality content creation</li>
              <li>Augmented reality integration</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Applications</h2>
            <p className="text-gray-600 mb-6">
              Perfect for gaming, architecture, product design, marketing, education, and entertainment industries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}