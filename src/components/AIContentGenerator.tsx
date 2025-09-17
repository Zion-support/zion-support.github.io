<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useCallback, useEffect } from 'react';

interface ContentType {
  id: string;
  name: string;
  description: string;
  icon: string;
  estimatedTime: string;
  complexity: 'Low' | 'Medium' | 'High';
}

interface GeneratedContent {
  id: string;
  type: string;
  title: string;
  content: string;
  timestamp: Date;
  quality: number;
  tags: string[];
}

const contentTypes: ContentType[] = [
  {
    id: 'blog-post',
    name: 'Blog Post',
    description: 'Comprehensive articles with SEO optimization',
    icon: '📝',
    estimatedTime: '5-10 min',
    complexity: 'Medium'
  },
  {
    id: 'product-description',
    name: 'Product Description',
    description: 'Compelling product descriptions for e-commerce',
    icon: '🛍️',
    estimatedTime: '2-3 min',
    complexity: 'Low'
  },
  {
    id: 'social-media',
    name: 'Social Media Post',
    description: 'Engaging posts for various social platforms',
    icon: '📱',
    estimatedTime: '1-2 min',
    complexity: 'Low'
  },
  {
    id: 'email-campaign',
    name: 'Email Campaign',
    description: 'Professional email marketing content',
    icon: '📧',
    estimatedTime: '3-5 min',
    complexity: 'Medium'
  },
  {
    id: 'technical-documentation',
    name: 'Technical Documentation',
    description: 'Detailed technical guides and tutorials',
    icon: '📚',
    estimatedTime: '10-15 min',
    complexity: 'High'
  },
  {
    id: 'creative-story',
    name: 'Creative Story',
    description: 'Imaginative storytelling content',
    icon: '✨',
    estimatedTime: '8-12 min',
    complexity: 'High'
  },
  {
    id: 'marketing-copy',
    name: 'Marketing Copy',
    description: 'Persuasive marketing and advertising content',
    icon: '🎯',
    estimatedTime: '4-6 min',
    complexity: 'Medium'
  },
  {
    id: 'newsletter',
    name: 'Newsletter',
    description: 'Regular newsletter content for subscribers',
    icon: '📰',
    estimatedTime: '6-8 min',
    complexity: 'Medium'
  }
];

>>>>>>> origin/merge-new-content-1757989975
const AIContentGenerator: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          AI Content Generator
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Generate high-quality content using advanced AI technology
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Content Type Selection */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Choose Content Type
          </h3>
          <div className="space-y-3 mb-6">
            {contentTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedType === type.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{type.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {type.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {type.description}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>{type.estimatedTime}</span>
                      <span className={`px-2 py-1 rounded ${
                        type.complexity === 'Low' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200' :
                        type.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200' :
                        'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200'
                      }`}>
                        {type.complexity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Prompt Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Content Prompt
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to create..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              rows={4}
            />
          </div>
          {/* Generate Button */}
          <button
            onClick={generateContent}
            disabled={!selectedType || !prompt.trim() || isGenerating}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? 'Generating...' : 'Generate Content'}
          </button>
          {/* Generation Progress */}
          {isGenerating && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>{currentStep}</span>
                <span>{Math.round(generationProgress)}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                />
              </div>
            </div>
          )}
        </div>
        {/* Generated Content Display */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Generated Content
            </h3>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {generatedContent.length} items generated
            </div>
          </div>
          {generatedContent.length === 0 ? (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <div className="text-4xl mb-4">🤖</div>
              <div>No content generated yet. Select a type and enter a prompt to get started.</div>
            </div>
          ) : (
            <div className="space-y-4">
              {generatedContent.map((content) => (
                <div
                  key={content.id}
                  className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden"
                >
                  <div className="p-4 bg-gray-50 dark:bg-gray-700">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {content.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {content.timestamp.toLocaleString()}
                        </span>
                        <div className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200 rounded text-xs">
                          {Math.round(content.quality)}% quality
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {content.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedContent(content)}
                        className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
                      >
                        View
                      </button>
                      <button
                        onClick={() => copyToClipboard(content.content)}
                        className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700 transition-colors"
                      >
                        Copy
                      </button>
                      <button
                        onClick={() => downloadContent(content)}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                  {selectedContent?.id === content.id && (
                    <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                      <div className="prose dark:prose-invert max-w-none">
                        <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200">
                          {content.content}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default AIContentGenerator;
