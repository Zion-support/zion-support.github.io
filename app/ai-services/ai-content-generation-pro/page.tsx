'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon,
  PencilIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  StarIcon,
  ShieldCheckIcon,
  CogIcon,
  LightBulbIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AIContentGenerationProPage: React.FC = () => {
  const features = [
    "AI-powered content creation",
    "Multi-language support (50+ languages)",
    "SEO optimization",
    "Brand voice consistency",
    "Content scheduling",
    "Performance analytics",
    "Plagiarism detection",
    "Content templates",
    "Team collaboration",
    "API integration"
  ];

  const contentTypes = [
    "Blog posts and articles",
    "Social media content",
    "Email marketing campaigns",
    "Product descriptions",
    "Ad copy and headlines",
    "Website content",
    "Press releases",
    "Technical documentation",
    "Video scripts",
    "E-books and whitepapers"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$199/month",
      features: ["10,000 words/month", "Basic templates", "Email support"],
      popular: false
    },
    {
      plan: "Professional",
      price: "$399/month",
      features: ["50,000 words/month", "Advanced AI models", "Priority support", "API access"],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$799/month",
      features: ["Unlimited words", "Custom AI training", "Dedicated support", "White-label options"],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generation Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI content generation platform that creates high-quality, SEO-optimized content for blogs, social media, marketing, and more." />
        <meta name="keywords" content="AI content generation, content creation, blog writing, social media content, SEO content, marketing copy" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Content Generation Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create high-quality, SEO-optimized content at scale with our advanced AI content generation platform. 
              From blog posts to social media content, we help you maintain consistent, engaging content across all channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Powerful AI Content Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Content Types We Support
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="w-6 h-6 text-purple-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{type}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white border-2 rounded-lg p-8 ${plan.popular ? 'border-purple-500 relative' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Scale Your Content Creation?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of content creators and marketers already producing high-quality content with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-medium"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-purple-100">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGenerationProPage;