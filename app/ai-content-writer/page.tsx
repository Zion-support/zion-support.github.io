import React from 'react';
import { ArrowRight, CheckCircle, FileText, Brain, Zap, Users, Shield, TrendingUp } from 'lucide-react';

const AiContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced AI algorithms that understand context and generate high-quality content.',
      benefits: ['Natural Language Generation', 'Context Awareness', 'Tone Adaptation', 'Style Consistency']
    },
    {
      icon: FileText,
      title: 'Multiple Content Types',
      description: 'Create various types of content including blogs, articles, social media posts, and more.',
      benefits: ['Blog Posts', 'Social Media', 'Email Campaigns', 'Product Descriptions']
    },
    {
      icon: Zap,
      title: 'Fast Content Generation',
      description: 'Generate high-quality content in minutes, not hours or days.',
      benefits: ['Quick Turnaround', 'Bulk Content Creation', 'Template Library', 'One-Click Generation']
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'AI-optimized content that ranks well in search engines and drives traffic.',
      benefits: ['Keyword Integration', 'SEO Analysis', 'Meta Descriptions', 'Content Scoring']
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts',
      description: 'Engaging blog articles that drive traffic and engagement',
      features: ['SEO Optimized', 'Readable Structure', 'Call-to-Actions', 'Internal Linking']
    },
    {
      title: 'Social Media',
      description: 'Captivating social media posts for all platforms',
      features: ['Platform Specific', 'Hashtag Optimization', 'Engagement Focused', 'Visual Descriptions']
    },
    {
      title: 'Email Marketing',
      description: 'Compelling email campaigns that convert',
      features: ['Subject Line Optimization', 'Personalization', 'A/B Testing', 'Conversion Focused']
    },
    {
      title: 'Product Descriptions',
      description: 'Persuasive product descriptions that sell',
      features: ['Feature Highlighting', 'Benefit Focused', 'Emotional Appeal', 'Action Oriented']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Content Writer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create high-quality, engaging content at scale with our advanced AI-powered writing assistant.
          </p>
        </section>

        {/* Features Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI content writer provides comprehensive tools for creating engaging, high-quality content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <feature.icon className="w-12 h-12 text-cyan-400 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Content Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Generate various types of content tailored to your specific needs and audience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((contentType, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <FileText className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-3">{contentType.title}</h3>
                  <p className="text-gray-300 mb-6">{contentType.description}</p>
                  <ul className="space-y-2">
                    {contentType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Content Writer?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI content writer delivers high-quality, engaging content that drives results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                  <p className="text-gray-300">Generate content in minutes, not hours</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">High Quality</h3>
                  <p className="text-gray-300">AI-generated content that reads naturally</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Scalable</h3>
                  <p className="text-gray-300">Create content at any scale you need</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Content?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start creating high-quality content with our AI-powered writing assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Writing
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiContentWriterPage;