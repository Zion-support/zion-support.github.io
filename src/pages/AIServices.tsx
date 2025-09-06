import React from 'react';
import ServiceCard from '../components/ServiceCard';

const AIServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Machine Learning"
            description="Build and deploy machine learning models for your business needs."
            icon="🧠"
          />
          <ServiceCard
            title="Natural Language Processing"
            description="Process and understand human language with advanced NLP technologies."
            icon="💬"
          />
          <ServiceCard
            title="Computer Vision"
            description="Extract insights from images and videos using computer vision AI."
            icon="👁️"
          />
        </div>
      </div>
    </div>
  );
};

export default AIServices;
