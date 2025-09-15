import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AIInnovationPlaybook2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            AI Innovation Playbook 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Your comprehensive guide to AI innovation and implementation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-4">AI Strategy</h3>
            <p className="text-gray-600">Strategic planning for AI implementation</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Best Practices</h3>
            <p className="text-gray-600">Proven methodologies for AI success</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Implementation</h3>
            <p className="text-gray-600">Step-by-step AI deployment guide</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIInnovationPlaybook2025;