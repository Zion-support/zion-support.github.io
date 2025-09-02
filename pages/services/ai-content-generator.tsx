import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Zap, Users, TrendingUp, Clock, Target, Brain } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AIContentGenerator: NextPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Generate high-quality content using advanced AI models trained on millions of articles and documents.'
    },
    {
      icon: Zap,
      title: 'Multiple Content Types',
      description: 'Create blog posts, articles, social media content, product descriptions, and more with a single platform.'
    },
    {
      icon: Users,
      title: 'Brand Voice Consistency',
      description: 'Maintain consistent brand voice and tone across all your content with customizable AI parameters.'
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with built-in SEO suggestions and keyword integration.'
    },
    {
      icon: Clock,
      title: 'Rapid Content Creation',
      description: 'Generate professional content in minutes instead of hours, dramatically increasing your content output.'
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Create content tailored to specific audiences and demographics with AI-driven personalization.'
    }
  ];

  const useCases = [
    {
      title: 'Blog Content',
      description: 'Generate engaging blog posts on any topic with proper structure and SEO optimization.',
      benefits: ['Increased organic traffic', 'Consistent publishing schedule', 'Reduced content costs']
    },
    {
      title: 'Social Media',
      description: 'Create compelling social media posts for all platforms with platform-specific optimization.',
      benefits: ['Higher engagement rates', 'Consistent brand voice', 'Time savings']
    },
    {
      title: 'Product Descriptions',
      description: 'Generate compelling product descriptions that drive conversions and improve sales.',
      benefits: ['Higher conversion rates', 'Consistent messaging', 'Scalable content creation']
    },
    {
      title: 'Email Marketing',
      description: 'Create personalized email campaigns that resonate with your audience and drive action.',
      benefits: ['Better open rates', 'Personalized messaging', 'Automated campaigns']
    }
  ];

  return (
    <MainLayout
      title="AI Content Generator - Zion Tech Group"
      description="Generate high-quality, SEO-optimized content at scale with our AI-powered content generation platform. Perfect for blogs, social media, and marketing content."
      keywords="AI content generator, content creation, AI writing, automated content, content marketing, SEO content"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Content
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Generator</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Generate high-quality, SEO-optimized content at scale with our AI-powered platform. 
            Create engaging blog posts, social media content, product descriptions, and more 
            in minutes instead of hours.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="group">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg group-hover:shadow-xl">
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/services" className="group">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                View All Services
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful AI Content Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI content generator combines cutting-edge technology with user-friendly design 
              to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Content Types & Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generate various types of content for different marketing and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Content Strategy?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Join thousands of businesses using AI to create better content faster and more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="group">
              <button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
                Start Creating Content
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/services" className="group">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AIContentGenerator;