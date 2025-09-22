import React from 'react';

interface AIContentGeneratorProps {
  className?: string;
}

export default function AIContentGenerator({ 
  className = "" 
}: AIContentGeneratorProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">AI Content Generator</h3>
      <p className="text-gray-600 mb-4">
        Generate high-quality content using advanced AI models and templates.
      </p>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Blog Posts</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Social Media</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Marketing Copy</span>
        </div>
      </div>
    </div>
  );
}