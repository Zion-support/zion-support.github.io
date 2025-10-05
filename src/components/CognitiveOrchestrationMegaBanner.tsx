import React from 'react';

const CognitiveOrchestrationMegaBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Cognitive Orchestration
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Advanced AI-powered solutions that orchestrate complex cognitive processes
          for unprecedented business intelligence and automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Learn More
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CognitiveOrchestrationMegaBanner;