import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AITransformationGuide2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            AI Transformation Guide 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Complete guide to transforming your business with AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-2xl font-bold mb-4">Digital Transformation</h3>
            <p className="text-gray-600">Comprehensive digital transformation strategies</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">AI Integration</h3>
            <p className="text-gray-600">Seamless AI integration into existing systems</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">ROI Optimization</h3>
            <p className="text-gray-600">Maximizing return on AI investments</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AITransformationGuide2025;