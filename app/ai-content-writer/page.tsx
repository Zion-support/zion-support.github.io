import React from 'react';
import { CheckCircle, ArrowRight, PenTool, FileText, Sparkles, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="AI-powered content writing and generation solutions." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Content Writer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered content writing and generation solutions for modern businesses.
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