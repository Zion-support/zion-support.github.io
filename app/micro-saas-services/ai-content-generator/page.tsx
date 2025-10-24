import React from 'react';
import Link from 'next/link';
import { PenTool, CheckCircle, ArrowRight, Users, BarChart, Zap, Target, Settings } from 'lucide-react';

const AIContentGeneratorPage = () => {
  const features = [
    {
      icon: PenTool,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality content for blogs, articles, and marketing materials.',
      benefits: ['Save Time', 'Improve Quality', 'Consistent Tone', 'SEO Optimized'],
    },
    {
      icon: Target,
      title: 'Content Templates',
      description: 'Pre-built templates for various content types and industries.',
      benefits: ['Quick Start', 'Professional Format', 'Industry Specific', 'Customizable'],
    },
    {
      icon: Zap,
      title: 'Real-time Generation',
      description: 'Generate content instantly with our advanced AI technology.',
      benefits: ['Instant Results', 'High Accuracy', 'Multiple Formats', 'Easy Editing'],
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'Customize content generation to match your brand and style.',
      benefits: ['Brand Voice', 'Style Guide', 'Custom Prompts', 'Personalization'],
    },
  ];

  const contentTypes = [
    'Blog Posts',
    'Social Media',
    'Email Marketing',
    'Product Descriptions',
    'Ad Copy',
    'Press Releases',
  ];

  const benefits = [
    'Save 80% Time',
    'Improve Quality',
    'Consistent Brand Voice',
    'SEO Optimization',
    'Multiple Languages',
    'Easy Integration',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI <span className="text-blue-600">Content Generator</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Generate high-quality content in seconds with our advanced AI technology. 
              Perfect for blogs, social media, marketing, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI technology that makes content creation effortless and efficient.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <feature.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Content Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generate various types of content for all your marketing needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-lg font-semibold text-gray-900">{type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Content Generator?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your content creation process with our advanced AI technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Generate Content?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start creating amazing content with our AI-powered content generator.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Generating
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIContentGeneratorPage;