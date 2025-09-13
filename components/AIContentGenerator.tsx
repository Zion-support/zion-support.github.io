'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wand2, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Code,
  Download,
  Copy,
  RefreshCw,
  Sparkles
} from 'lucide-react';

const AIContentGenerator = () => {
  const [contentType, setContentType] = useState('article');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const contentTypes = [
    { id: 'article', name: 'Article', icon: FileText, color: 'from-blue-500 to-cyan-500' },
    { id: 'image', name: 'Image', icon: Image, color: 'from-purple-500 to-pink-500' },
    { id: 'video', name: 'Video', icon: Video, color: 'from-green-500 to-emerald-500' },
    { id: 'audio', name: 'Audio', icon: Music, color: 'from-orange-500 to-red-500' },
    { id: 'code', name: 'Code', icon: Code, color: 'from-indigo-500 to-purple-500' }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent(`
# ${prompt}

## Introduction
This AI-generated content explores the fascinating world of ${prompt.toLowerCase()}. Through advanced machine learning algorithms and natural language processing, we can create comprehensive, engaging content that captures the essence of any topic.

## Key Points
- Revolutionary AI technology enables instant content creation
- Advanced algorithms ensure high-quality, relevant output
- Seamless integration with existing workflows
- Scalable solutions for any content needs

## Benefits
1. **Time Efficiency**: Generate content in seconds instead of hours
2. **Quality Assurance**: AI-powered quality checks ensure consistency
3. **Scalability**: Create unlimited content without resource constraints
4. **Customization**: Tailor content to specific audiences and requirements

## Conclusion
The future of content creation lies in the seamless integration of artificial intelligence with human creativity. By leveraging these powerful tools, we can unlock unprecedented potential in content generation and distribution.
      `);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Content
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}Generator
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create high-quality content instantly with our advanced AI-powered 
            content generation system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Wand2 className="w-6 h-6 mr-2 text-purple-600" />
              Content Generation
            </h3>

            {/* Content Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Content Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setContentType(type.id)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      contentType === type.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <type.icon className={`w-6 h-6 mx-auto mb-2 ${
                      contentType === type.id ? 'text-purple-600' : 'text-gray-400'
                    }`} />
                    <div className={`text-sm font-medium ${
                      contentType === type.id ? 'text-purple-600' : 'text-gray-600'
                    }`}>
                      {type.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Describe your content
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a detailed description of the content you want to generate..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent h-32 resize-none"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Content
                </>
              )}
            </button>
          </motion.div>

          {/* Output Section */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-purple-600" />
                Generated Content
              </h3>
              {generatedContent && (
                <div className="flex space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="p-2 text-gray-400 hover:text-purple-600 transition-colors"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setGeneratedContent('')}
                    className="p-2 text-gray-400 hover:text-purple-600 transition-colors"
                    title="Clear content"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            <div className="h-96 overflow-y-auto">
              {generatedContent ? (
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap text-gray-700 font-sans">
                    {generatedContent}
                  </pre>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <div className="text-center">
                    <Wand2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Generated content will appear here</p>
                  </div>
                </div>
              )}
            </div>

            {generatedContent && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                  <button className="flex-1 border border-purple-600 text-purple-600 py-2 px-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300">
                    Edit Content
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-gray-600">Advanced machine learning algorithms ensure high-quality content generation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Results</h3>
            <p className="text-gray-600">Generate content in seconds with our optimized processing pipeline</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wand2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Customizable</h3>
            <p className="text-gray-600">Tailor content to your specific needs and brand voice</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIContentGenerator;