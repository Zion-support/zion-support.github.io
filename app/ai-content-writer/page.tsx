import React from 'react';
import { CheckCircle, ArrowRight, PenTool, FileText, Sparkles, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

=======
const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      title: 'AI Writing Assistant',
      description: 'Advanced AI-powered content generation and writing assistance.',
      benefits: ['Content Generation', 'Grammar Check', 'Style Optimization', 'Tone Adjustment'],
      icon: <PenTool className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Content Templates',
      description: 'Pre-built templates for various content types and formats.',
      benefits: ['Blog Posts', 'Social Media', 'Email Campaigns', 'Product Descriptions'],
      icon: <FileText className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'SEO Optimization',
      description: 'Built-in SEO tools to optimize content for search engines.',
      benefits: ['Keyword Research', 'Meta Tags', 'Content Analysis', 'Ranking Insights'],
      icon: <Target className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Creative Enhancement',
      description: 'AI-powered creative tools to enhance your content quality.',
      benefits: ['Ideas Generation', 'Headline Creation', 'Content Expansion', 'Creative Writing'],
      icon: <Sparkles className="w-8 h-8 text-orange-400" />
const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Writing',
      description: 'Advanced AI algorithms that generate high-quality, engaging content for any purpose.',
      benefits: ['Natural Language', 'SEO Optimized', 'Multiple Formats', 'Brand Voice']
    },
    {
      title: 'Content Strategy',
      description: 'Comprehensive content planning and strategy development for your business needs.',
      benefits: ['Content Planning', 'Audience Analysis', 'Topic Research', 'Content Calendar']
    },
    {
      title: 'Multi-Format Support',
      description: 'Create various types of content including blogs, articles, social media, and more.',
      benefits: ['Blog Posts', 'Social Media', 'Email Marketing', 'Technical Writing']
    },
    {
      title: 'Team Collaboration',
      description: 'Collaborative tools for teams to work together on content creation and editing.',
      benefits: ['Real-time Editing', 'Version Control', 'Comments & Feedback', 'Approval Workflow']
    },
    {
      title: 'Performance Analytics',
      description: 'Track content performance and optimize based on real-time analytics.',
      benefits: ['Engagement Metrics', 'SEO Performance', 'Content Insights', 'ROI Tracking']
    },
    {
      title: 'Customization',
      description: 'Fully customizable AI models trained on your specific industry and brand guidelines.',
      benefits: ['Brand Training', 'Industry Expertise', 'Custom Templates', 'Style Guidelines']

=======
    }
  ];

  return (
<>
      <Helmet>
        <title>AI Content Writer | Zion Tech Group</title>
        <meta name="description" content="Professional AI content writer solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="AI content writer, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Writer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional AI content writer solutions by Zion Tech Group. Advanced AI and IT solutions for your business.
<>
      <Helmet>
        <title>AI Content Writer | Zion Tech Group</title>
        <meta name="description" content="Professional AI content writing solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="AI content writer, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Writer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional AI content writing solutions by Zion Tech Group. Advanced AI and IT solutions for your business.
=======

=======
    <>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="Professional AI content writing solutions for modern businesses." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Content Writer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional AI content writing solutions for modern businesses. 
              Create engaging content with our advanced AI-powered platform.
            </p>
          </div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center mx-auto">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AIContentWriterPage;
=======
