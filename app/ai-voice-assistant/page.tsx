import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIVoiceAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group</title>
        <meta name="description" content="Build intelligent voice assistants with natural language processing and speech recognition capabilities." />
        <meta name="keywords" content="AI voice assistant, voice AI, speech recognition, natural language processing, conversational AI" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Voice Assistant</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build intelligent voice assistants with natural language processing and speech recognition capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
              <p className="text-gray-600">
                Advanced NLP capabilities to understand and respond to natural human speech patterns.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Speech Recognition</h3>
              <p className="text-gray-600">
                High-accuracy speech recognition that works across multiple languages and accents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Voice Synthesis</h3>
              <p className="text-gray-600">
                Natural-sounding voice synthesis with customizable voices and speaking styles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Context Awareness</h3>
              <p className="text-gray-600">
                Maintain context across conversations for more intelligent and relevant responses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Platform Support</h3>
              <p className="text-gray-600">
                Deploy across multiple platforms including mobile, web, and IoT devices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate with your existing systems and workflows.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Service</h3>
                <p className="text-gray-600">24/7 voice-based customer support with intelligent routing and problem resolution.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Home Control</h3>
                <p className="text-gray-600">Control smart home devices and systems through natural voice commands.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Automation</h3>
                <p className="text-gray-600">Automate business processes through voice commands and interactions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600">Provide voice-based interfaces for improved accessibility and user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;