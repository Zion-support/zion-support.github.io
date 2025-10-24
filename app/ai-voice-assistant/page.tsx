import React from 'react';

const AIVoiceAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Voice Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered voice assistant solutions for seamless business automation and customer engagement.
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300 mb-8">
            This page is under development. Please check back soon for more information about our AI Voice Assistant services.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Contact Us for More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIVoiceAssistantPage;