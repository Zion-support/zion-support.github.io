import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Brain, Wand2, FileText, Sparkles, Copy, Download } from 'lucide-react';

const AiContentGeneratorPage: React.FC = () => {
  const [content, setContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [contentType, setContentType] = useState('blog');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');

  const contentTypes = [
    { value: 'blog', label: 'Blog Post', icon: <FileText className="w-5 h-5" /> },
    { value: 'article', label: 'Article', icon: <FileText className="w-5 h-5" /> },
    { value: 'social', label: 'Social Media', icon: <Sparkles className="w-5 h-5" /> },
    { value: 'email', label: 'Email', icon: <FileText className="w-5 h-5" /> },
    { value: 'product', label: 'Product Description', icon: <FileText className="w-5 h-5" /> }
  ];

  const tones = [
    { value: 'professional', label: 'Professional' },
    { value: 'casual', label: 'Casual' },
    { value: 'friendly', label: 'Friendly' },
    { value: 'authoritative', label: 'Authoritative' },
    { value: 'creative', label: 'Creative' }
  ];

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const generatedContent = `# ${topic}

This is a ${tone} ${contentType} about ${topic}. 

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Main Content

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

## Conclusion

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
      
      setContent(generatedContent);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${topic}-content.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <SEOHead 
        title="AI Content Generator - Zion Tech Group" 
        description="Generate high-quality content with our AI-powered content generator. Create blog posts, articles, social media content, and more." 
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Content Generator
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Generate high-quality, engaging content with the power of artificial intelligence. 
                Create blog posts, articles, social media content, and more in seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Generator Section */}
        <div className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-700/50 p-8 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Content Settings</h2>
                  
                  {/* Content Type */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Content Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {contentTypes.map((type) => (
                        <button
                          key={type.value}
                          onClick={() => setContentType(type.value)}
                          className={`p-3 rounded-lg border transition-colors ${
                            contentType === type.value
                              ? 'border-blue-400 bg-blue-400/20 text-blue-400'
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {type.icon}
                            <span className="text-sm">{type.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Topic */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Topic</label>
                    <input
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="Enter your topic..."
                      className="w-full p-3 rounded-lg bg-slate-600 border border-gray-500 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                    />
                  </div>

                  {/* Tone */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Tone</label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full p-3 rounded-lg bg-slate-600 border border-gray-500 text-white focus:border-blue-400 focus:outline-none"
                    >
                      {tones.map((toneOption) => (
                        <option key={toneOption.value} value={toneOption.value}>
                          {toneOption.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={!topic.trim() || isGenerating}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-5 h-5" />
                        Generate Content
                      </>
                    )}
                  </button>
                </div>

                {/* Output Section */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Generated Content</h2>
                    {content && (
                      <div className="flex gap-2">
                        <button
                          onClick={handleCopy}
                          className="p-2 rounded-lg bg-slate-600 hover:bg-slate-500 transition-colors"
                          title="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={handleDownload}
                          className="p-2 rounded-lg bg-slate-600 hover:bg-slate-500 transition-colors"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-slate-800 p-4 rounded-lg min-h-[400px]">
                    {content ? (
                      <pre className="whitespace-pre-wrap text-sm text-gray-300 font-mono">
                        {content}
                      </pre>
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        <div className="text-center">
                          <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p>Generated content will appear here</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Our AI Content Generator?</h2>
              <p className="text-xl text-gray-300">Powerful features for all your content needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                <p className="text-gray-300">Advanced AI algorithms generate high-quality, relevant content</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
                <p className="text-gray-300">Generate blog posts, articles, social media content, and more</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wand2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                <p className="text-gray-300">Adjust tone, style, and format to match your brand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiContentGeneratorPage;