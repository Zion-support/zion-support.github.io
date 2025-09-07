import React from 'react';

export const metadata = {
  title: 'AI Meeting Assistant | Zion Tech Group',
  description: 'Professional AI meeting assistant services for your business needs.',
  keywords: 'ai-meeting-assistant, services, business, technology'
};

export default function AIMeetingAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Meeting Assistant
          </h1>
          <p className="text-xl text-gray-600">
            Intelligent meeting management and transcription services
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Smart Meeting Solutions
          </h2>
          <p className="text-gray-600">
            Our AI meeting assistant provides automated transcription, action item extraction, meeting summaries, and intelligent scheduling to enhance your meeting productivity.
          </p>
        </div>
      </div>
    </div>
  );
}