import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AIInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            AI Innovation Hub 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Central hub for AI innovation and development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">AI Research</h3>
            <p className="text-gray-600">Cutting-edge AI research and development</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Innovation Labs</h3>
            <p className="text-gray-600">State-of-the-art AI innovation laboratories</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">AI Incubator</h3>
            <p className="text-gray-600">Supporting AI startups and entrepreneurs</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIInnovationHub2025;