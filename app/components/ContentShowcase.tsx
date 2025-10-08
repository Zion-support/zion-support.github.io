import React from 'react';

const ContentShowcase: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, case studies, and innovations in AI and technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              AI Solutions
            </h3>
            <p className="text-gray-600">
              Advanced machine learning and AI solutions for modern businesses.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Security First
            </h3>
            <p className="text-gray-600">
              Enterprise-grade security with quantum-resistant encryption.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              High Performance
            </h3>
            <p className="text-gray-600">
              Optimized solutions for maximum efficiency and speed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;