import React from 'react';

const AISocialMediaContentGeneratorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          AI Social Media Content Generator
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Automated Content Creation</h3>
            <p className="text-gray-600 mb-4">
              Generate engaging social media content automatically using our AI-powered platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Content Generation</h4>
                <p className="text-gray-600 text-sm">AI-generated posts, captions, and hashtags</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Visual Creation</h4>
                <p className="text-gray-600 text-sm">Automated image and video content generation</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Scheduling</h4>
                <p className="text-gray-600 text-sm">Automated posting across multiple platforms</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Analytics</h4>
                <p className="text-gray-600 text-sm">Performance tracking and optimization insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISocialMediaContentGeneratorPage;