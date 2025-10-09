import React from 'react';
import { CheckCircle, Zap, PenTool, FileText, Sparkles } from 'lucide-react';

const AIWritingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: PenTool,
      title: 'Content Generation',
      description: 'Generate high-quality content for blogs, articles, social media, and marketing materials',
      benefits: ['10x faster content creation', 'Consistent brand voice', 'SEO-optimized content']
    },
    {
      icon: FileText,
      title: 'Document Editing',
      description: 'AI-powered editing and proofreading with grammar, style, and tone suggestions',
      benefits: ['99% accuracy in grammar', 'Professional writing style', 'Real-time suggestions']
    },
    {
      icon: Sparkles,
      title: 'Creative Writing',
      description: 'Generate creative content including stories, scripts, and creative copy',
      benefits: ['Unlimited creativity', 'Multiple writing styles', 'Inspiration on demand']
    },
    {
      icon: Zap,
      title: 'Multi-Language Support',
      description: 'Write and translate content in over 50 languages with native-level quality',
      benefits: ['Global reach', 'Cultural adaptation', 'Professional translations']
    }
  ];

  const useCases = [
    {
      title: 'Blog Content Creation',
      description: 'Generate engaging blog posts that drive traffic and engagement',
      results: ['300% increase in blog traffic', '50% reduction in writing time', 'Higher SEO rankings']
    },
    {
      title: 'Marketing Copy',
      description: 'Create compelling marketing copy for ads, emails, and campaigns',
      results: ['40% higher conversion rates', 'Consistent brand messaging', 'Faster campaign launches']
    },
    {
      title: 'Technical Documentation',
      description: 'Generate clear, comprehensive technical documentation and user guides',
      results: ['90% reduction in documentation time', 'Improved user experience', 'Consistent formatting']
    },
    {
      title: 'Social Media Content',
      description: 'Create engaging social media posts across all platforms',
      results: ['200% increase in engagement', 'Consistent posting schedule', 'Platform-optimized content']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Writing Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your writing process with our AI-powered writing assistant. Generate high-quality content, 
            improve your writing, and create engaging copy in minutes, not hours.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Writing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Available</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful Writing Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Use Cases & Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Simple Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$29/month</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  10,000 words/month
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Basic templates
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Email support
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 ring-2 ring-cyan-400">
              <div className="text-center mb-4">
                <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$59/month</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  50,000 words/month
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Premium templates
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Team collaboration
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">Custom</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Unlimited words
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Custom templates
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  API access
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Writing?
          </h2>
          <p className="text-purple-100 mb-6">
            Start your free trial today and experience the power of AI-assisted writing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWritingAssistantPage;