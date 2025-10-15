
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {CheckCircle, Globe, Target, Wand2, Zap, FileText} from 'lucide-react';
import { Shield } from 'lucide-react';

const AiContentGenerationPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Multi-Format Content",
      description: "Generate articles, blogs, social media posts, emails, and more with AI-powered content creation."
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Brand Voice Consistency",
      description: "Maintain your brand's unique voice and tone across all generated content automatically."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Language Support",
      description: "Create content in multiple languages with accurate translations and cultural adaptations."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "AI-optimized content that ranks higher in search engines with built-in SEO best practices."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Advanced quality checks ensure all generated content meets professional standards."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Audience Targeting",
      description: "Create content tailored to specific audiences and demographics for maximum engagement."
    }
  ];

  const contentTypes = [
    "Blog articles and long-form content",
    "Social media posts and captions",
    "Email marketing campaigns",
    "Product descriptions and reviews",
    "Technical documentation",
    "Press releases and announcements",
    "Website copy and landing pages",
    "Ad copy and marketing materials"
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group | Automated Content Creation</title>
        <meta name="description" content="Transform your content strategy with AI-powered content generation. Create high-quality, SEO-optimized content at scale across multiple formats and languages." />
        <meta name="keywords" content="AI content generation, automated content, content creation, SEO content, blog writing, social media content" />
        <meta property="og:title" content="AI Content Generation - Zion Tech Group" />
        <meta property="og:description" content="Revolutionize your content strategy with AI-powered content generation." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Generation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolutionize your content strategy with AI-powered content generation. 
                Create high-quality, SEO-optimized content at scale across multiple formats and languages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create compelling content at scale
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Content Types We Generate</h2>
                <p className="text-xl text-gray-300">
                  From blog posts to social media content, we can create any type of content you need
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {contentTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Content?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI content generation can transform your content strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiContentGenerationPage;

