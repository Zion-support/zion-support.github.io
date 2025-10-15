
import React from 'react';
import SEOHead from '../components/SEOHead';

const AiAutomatedTestingPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Automated Testing - Zion Tech Group"
        description="Intelligent automated testing solutions powered by AI"
        keywords="automated testing, AI testing, software testing, test automation"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Automated Testing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Automate your testing processes with AI-powered tools
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Test Generation</h3>
                <p className="text-gray-600">Generate test cases automatically with AI</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Bug Detection</h3>
                <p className="text-gray-600">Identify bugs and issues with AI analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAutomatedTestingPage;

