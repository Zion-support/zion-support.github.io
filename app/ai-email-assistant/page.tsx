import React from 'react';
import SEOHead from '../components/SEOHead';

const AiEmailAssistantPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI Email Assistant - Zion Tech Group"
        description="Intelligent AI email assistant for automated email management, smart replies, and email optimization."
        keywords="AI email assistant, email automation, smart email, email AI, email management"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Email Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Intelligent AI email assistant for automated email management, smart replies, and email optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Coming Soon
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiEmailAssistantPage;