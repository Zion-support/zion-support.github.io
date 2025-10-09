import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
    {
      title: 'AI Blog Content Generator Pro',
      description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.',
      icon: '📝',
      price: '$200-500/month',
      features: [
        'SEO-optimized blog posts',
        'Research-backed content',
        'Brand voice consistency',
        'Multi-language support',
        'Content calendar integration'
      ],
      benefits: [
        'Increase organic traffic by 300%',
        'Save 20+ hours per week',
        'Improve search rankings'
      ],
      marketPrice: '$500-1,200/month',
      technologies: ['OpenAI GPT-4', 'DALL-E', 'Instagram API', 'Twitter API', 'LinkedIn API'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content generation services for blogs, social media, and marketing materials." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Content Generation Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your content strategy with our advanced AI-powered content generation services. 
            Create high-quality, SEO-optimized content at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contentServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">Features:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-lg font-bold text-blue-600 mb-2">{service.price}</div>
                <div className="text-sm text-gray-500">{service.contactInfo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIContentGenerationPage;