import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIConsultingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Consulting - Zion Tech Group</title>
        <meta name="description" content="Expert AI consulting services to help you identify opportunities and implement AI solutions in your business." />
        <meta name="keywords" content="AI consulting, artificial intelligence consulting, AI strategy, AI implementation, machine learning consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Consulting</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert AI consulting services to help you identify opportunities and implement AI solutions in your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Strategy Development</h3>
              <p className="text-gray-600">
                Develop a comprehensive AI strategy aligned with your business goals and objectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Readiness Assessment</h3>
              <p className="text-gray-600">
                Evaluate your organization's readiness for AI implementation and identify key areas for improvement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Implementation Planning</h3>
              <p className="text-gray-600">
                Create detailed implementation plans for AI projects with clear milestones and success metrics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Technology Selection</h3>
              <p className="text-gray-600">
                Help you choose the right AI technologies and tools for your specific use cases and requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Team Training</h3>
              <p className="text-gray-600">
                Train your team on AI concepts, tools, and best practices to ensure successful implementation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Project Management</h3>
              <p className="text-gray-600">
                Provide project management support for AI initiatives to ensure timely and successful delivery.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our AI Consulting Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">Understand your business, goals, and current AI capabilities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis</h3>
                <p className="text-gray-600">Analyze opportunities and assess AI readiness</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
                <p className="text-gray-600">Develop comprehensive AI strategy and roadmap</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">Support implementation and provide ongoing guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIConsultingPage;