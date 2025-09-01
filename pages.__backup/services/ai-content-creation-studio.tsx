import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Palette,
  PenTool,
  Image,
  Video,
  Mic,
  CheckCircle,
  ArrowRight,
  FileText,
  Globe,
  BarChart3,
  Users,
  Star,
  Zap,
  Target,
  TrendingUp,
} from 'lucide-react';

export default function AIContentCreationStudio() {
  const features = [
    {
      icon: PenTool,
      title: 'AI Writing Assistant',
      description:
        'Generate high-quality written content for blogs, articles, marketing copy, and more.',
    },
    {
      icon: Image,
      title: 'AI Image Generation',
      description:
        'Create stunning visuals, graphics, and illustrations using advanced AI models.',
    },
    {
      icon: Video,
      title: 'AI Video Production',
      description:
        'Generate engaging video content with automated editing and effects.',
    },
    {
      icon: Mic,
      title: 'AI Audio Creation',
      description:
        'Create podcasts, voiceovers, and audio content with natural-sounding AI voices.',
    },
    {
      icon: FileText,
      title: 'Content Optimization',
      description:
        'AI-powered SEO optimization and content performance analysis.',
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description:
        'Create content in multiple languages with accurate translation and localization.',
    },
  ];

  const benefits = [
    'Reduce content creation time by up to 80%',
    'Maintain consistent brand voice across all content',
    'Scale content production without increasing headcount',
    'Improve SEO performance with AI-optimized content',
    'Create personalized content for different audiences',
    'Reduce content creation costs significantly',
  ];

  const contentTypes = [
    {
      name: 'Blog Posts & Articles',
      description: 'SEO-optimized written content for websites and blogs.',
      icon: FileText,
    },
    {
      name: 'Social Media Content',
      description:
        'Engaging posts, captions, and visual content for all platforms.',
      icon: Globe,
    },
    {
      name: 'Marketing Materials',
      description: 'Brochures, flyers, and promotional content.',
      icon: Target,
    },
    {
      name: 'Video Content',
      description: 'Product demos, tutorials, and promotional videos.',
      icon: Video,
    },
  ];

  const industries = [
    'E-commerce & Retail',
    'Technology & SaaS',
    'Healthcare & Medical',
    'Finance & Banking',
    'Education & Training',
    'Real Estate',
    'Manufacturing',
    'Professional Services',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                AI Content Creation Studio
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
                Transform your content strategy with our AI-powered studio that
                creates engaging, high-quality content across all formats and
                platforms.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Start Creating Today
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600"
                >
                  View All Services{' '}
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Studio Features
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Our AI studio provides comprehensive content creation tools for
              every type of digital content.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Why Choose AI Content Creation?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI studio delivers measurable results that transform your
                content strategy and drive engagement.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    <div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <PenTool className="h-8 w-8 text-orange-600" />
                    </div>
                    <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Image className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Video className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Mic className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Content Types We Create
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              From written content to multimedia, we cover all your content
              creation needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={contentType.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <contentType.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {contentType.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {contentType.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Our AI content creation studio works across industries, providing
              tailored content solutions.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                    <span className="font-medium text-gray-900">
                      {industry}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to Transform Your Content?
            </h2>
            <p className="mt-6 text-lg leading-8 text-orange-100">
              Let's discuss how our AI content creation studio can revolutionize
              your content strategy.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Free Trial
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-semibold leading-6 text-white hover:text-orange-100"
              >
                View Content Examples
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
