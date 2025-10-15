import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AIContentGeneratorPage: React.FC = () => {
  const [contentType, setContentType] = useState('blog');
  const [topic, setTopic] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = () => {
    // Simulate AI content generation
    const sampleContent = {
      blog: `# ${topic}\n\nThis is a comprehensive blog post about ${topic}. Our AI has analyzed the topic and created engaging, SEO-optimized content that will help you connect with your audience.\n\n## Key Points\n\n- Point 1: Detailed explanation\n- Point 2: Supporting evidence\n- Point 3: Actionable insights\n\n## Conclusion\n\nThis content is designed to provide value to your readers while maintaining high quality and relevance.`,
      email: `Subject: ${topic}\n\nDear [Name],\n\nI hope this email finds you well. I wanted to reach out regarding ${topic}.\n\n[Personalized content based on the topic]\n\nBest regards,\n[Your Name]`,
      social: `🚀 Exciting news about ${topic}! \n\n[Engaging social media content]\n\n#${topic.replace(/\s+/g, '')} #AI #Innovation`
    };
    
    setGeneratedContent(sampleContent[contentType as keyof typeof sampleContent] || '');
  };

  return (
    <>
      <Helmet>
        <title>AI Content Generator Pro - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content with our AI-powered content creation platform. Create blog posts, emails, social media content, and more with advanced AI technology." />
        <meta name="keywords" content="AI content generator, content creation, blog writing, email marketing, social media content, AI writing assistant" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg animated-bg">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold neon-text mb-8 floating">
              AI Content Generator Pro
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Generate <span className="neon-text-purple">high-quality content</span> at scale with our advanced AI-powered platform
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="neon-button glow-border pulse-neon">
                Start Generating
              </button>
              <button className="neon-button glow-border pulse-neon-slow" style={{background: 'linear-gradient(135deg, #bf00ff 0%, #ff0080 100%)', borderColor: '#bf00ff'}}>
                View Pricing
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="futuristic-card p-8 floating">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold neon-text-green mb-4">Multi-Format Support</h3>
              <p className="text-gray-300 mb-6">
                Generate blog posts, emails, social media content, product descriptions, and more with specialized AI models.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Blog posts & articles</li>
                <li>• Email campaigns</li>
                <li>• Social media posts</li>
                <li>• Product descriptions</li>
                <li>• Technical documentation</li>
              </ul>
            </div>

            <div className="futuristic-card p-8 floating-delayed">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold neon-text-purple mb-4">SEO Optimization</h3>
              <p className="text-gray-300 mb-6">
                AI-powered SEO optimization ensures your content ranks higher and reaches the right audience.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Keyword optimization</li>
                <li>• Meta descriptions</li>
                <li>• Title tag generation</li>
                <li>• Content structure</li>
                <li>• Readability scoring</li>
              </ul>
            </div>

            <div className="futuristic-card p-8 floating-slow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold neon-text-pink mb-4">Brand Consistency</h3>
              <p className="text-gray-300 mb-6">
                Maintain your brand voice and style across all content with intelligent brand analysis and adaptation.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Brand voice training</li>
                <li>• Style consistency</li>
                <li>• Tone adaptation</li>
                <li>• Brand guidelines</li>
                <li>• Quality assurance</li>
              </ul>
            </div>
          </div>

          {/* Content Generator Tool */}
          <div className="futuristic-card p-12 mb-20">
            <h2 className="text-4xl font-bold neon-text mb-8 text-center">Try Our AI Content Generator</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Content Type</label>
                  <select 
                    value={contentType} 
                    onChange={(e) => setContentType(e.target.value)}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none"
                  >
                    <option value="blog">Blog Post</option>
                    <option value="email">Email</option>
                    <option value="social">Social Media</option>
                    <option value="product">Product Description</option>
                    <option value="technical">Technical Documentation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Topic or Subject</label>
                  <input 
                    type="text" 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter your topic or subject..."
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none"
                  />
                </div>
                
                <button 
                  onClick={handleGenerate}
                  className="w-full neon-button glow-border pulse-neon"
                >
                  Generate Content
                </button>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Generated Content</label>
                <textarea 
                  value={generatedContent}
                  onChange={(e) => setGeneratedContent(e.target.value)}
                  placeholder="Your AI-generated content will appear here..."
                  className="w-full h-64 p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none resize-none"
                />
                {generatedContent && (
                  <div className="mt-4 flex gap-2">
                    <button className="neon-button text-sm">
                      Copy Content
                    </button>
                    <button className="neon-button text-sm" style={{background: 'linear-gradient(135deg, #00ff41 0%, #00f5ff 100%)', borderColor: '#00ff41'}}>
                      Export
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold neon-text-purple mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="futuristic-card p-8">
                <h3 className="text-2xl font-bold neon-text-green mb-4">Starter</h3>
                <div className="text-4xl font-bold neon-text-green mb-4">$49<span className="text-lg text-gray-300">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• 10,000 words/month</li>
                  <li>• 5 content types</li>
                  <li>• Basic SEO optimization</li>
                  <li>• Email support</li>
                </ul>
                <button className="w-full neon-button">Get Started</button>
              </div>
              
              <div className="futuristic-card p-8 glow-border">
                <div className="text-center mb-4">
                  <span className="neon-text-pink font-bold">POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold neon-text-purple mb-4">Professional</h3>
                <div className="text-4xl font-bold neon-text-purple mb-4">$149<span className="text-lg text-gray-300">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• 50,000 words/month</li>
                  <li>• All content types</li>
                  <li>• Advanced SEO optimization</li>
                  <li>• Brand voice training</li>
                  <li>• Priority support</li>
                </ul>
                <button className="w-full neon-button" style={{background: 'linear-gradient(135deg, #bf00ff 0%, #ff0080 100%)', borderColor: '#bf00ff'}}>
                  Get Started
                </button>
              </div>
              
              <div className="futuristic-card p-8">
                <h3 className="text-2xl font-bold neon-text-pink mb-4">Enterprise</h3>
                <div className="text-4xl font-bold neon-text-pink mb-4">$499<span className="text-lg text-gray-300">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Unlimited words</li>
                  <li>• Custom AI models</li>
                  <li>• API access</li>
                  <li>• White-label solution</li>
                  <li>• Dedicated support</li>
                </ul>
                <button className="w-full neon-button" style={{background: 'linear-gradient(135deg, #ff0080 0%, #ff6b00 100%)', borderColor: '#ff0080'}}>
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="futuristic-card p-12 text-center holographic">
            <h2 className="text-4xl font-bold neon-text mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using our AI Content Generator Pro to create engaging, high-quality content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="neon-button glow-border pulse-neon">
                Start Free Trial
              </button>
              <div className="text-gray-300">
                <p className="font-semibold">Call: <span className="neon-text-green">+1 302 464 0950</span></p>
                <p className="font-semibold">Email: <span className="neon-text-purple">kleber@ziontechgroup.com</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIContentGeneratorPage;