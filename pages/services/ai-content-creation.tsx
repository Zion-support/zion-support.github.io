import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Brain,
  FileText,
  Image,
  Video,
  Mic,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Globe,
  Lock,
  Cpu,
  Database,
  Monitor,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Eye,
  Settings,
  MessageSquare,
  Palette,
  Bot,
  Users,
  BarChart3
} from 'lucide-react';
import PageTransition from '../../src/components/PageTransition';

export default function AIContentCreation() {
  const title = 'AI-Powered Content Creation Tools — Zion Tech Group';
  const description = 'Revolutionary AI content creation suite for automated copywriting, image generation, and video production. Boost your content marketing efficiency.';

  const features = [
    {
      title: 'AI Copywriting Assistant',
      description: 'Generate high-quality marketing copy, blog posts, and social media content',
      icon: FileText,
      details: [
        'Blog posts and articles (500-2000 words)',
        'Social media captions and posts',
        'Email marketing campaigns',
        'Product descriptions and reviews',
        'SEO-optimized content',
        'Multi-language support (50+ languages)'
      ]
    },
    {
      title: 'AI Image Generation',
      description: 'Create stunning visuals and graphics with AI-powered image generation',
      icon: Image,
      details: [
        'Custom artwork and illustrations',
        'Product mockups and presentations',
        'Social media graphics and banners',
        'Logo design and branding materials',
        'Stock photo alternatives',
        'Style transfer and image editing'
      ]
    },
    {
      title: 'AI Video Production',
      description: 'Automated video creation with voice synthesis and scene generation',
      icon: Video,
      details: [
        'Script-to-video automation',
        'AI voice synthesis (50+ voices)',
        'Automatic scene generation',
        'Background music and sound effects',
        'Subtitle and caption generation',
        'Multiple export formats'
      ]
    },
    {
      title: 'Content Strategy & Optimization',
      description: 'AI-driven content planning and performance optimization',
      icon: Target,
      details: [
        'Content calendar automation',
        'SEO keyword research and optimization',
        'Audience analysis and targeting',
        'Performance prediction and analytics',
        'A/B testing recommendations',
        'Content repurposing suggestions'
      ]
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '10,000 words/month',
        '50 AI-generated images',
        '5 video minutes/month',
        'Basic templates',
        'Email support',
        'Standard quality output'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for content teams',
      features: [
        '50,000 words/month',
        '200 AI-generated images',
        '20 video minutes/month',
        'Premium templates',
        'Priority support',
        'High-quality output',
        'Brand voice training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'Unlimited images',
        'Unlimited video minutes',
        'Custom templates',
        'Dedicated support',
        'Premium quality output',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      icon: FileText,
      title: 'Blog Content',
      description: 'Generate engaging blog posts that rank well in search engines'
    },
    {
      icon: MessageSquare,
      title: 'Social Media',
      description: 'Create viral social media content across all platforms'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Write compelling email campaigns that convert'
    },
    {
      icon: Image,
      title: 'Visual Content',
      description: 'Create stunning graphics and images for your brand'
    },
    {
      icon: Video,
      title: 'Video Marketing',
      description: 'Produce professional videos without expensive equipment'
    },
    {
      icon: Target,
      title: 'Ad Copy',
      description: 'Generate high-converting ad copy for all platforms'
    }
  ];

  return (
    <PageTransition>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-content-creation" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-blue-600">AI Content Creation</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI-Powered Content Creation Suite
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Revolutionize your content marketing with our comprehensive AI suite. Generate high-quality text, 
              images, and videos at scale while maintaining your brand voice and style.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link href="#pricing" className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                View Pricing
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Get Demo <ArrowRight className="inline h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Complete AI Content Creation Platform
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to create professional content at scale
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Perfect for Every Content Need
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From blog posts to video ads, our AI handles it all
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
                  <useCase.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Flexible Pricing for Every Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the plan that fits your content creation needs
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl border p-8 shadow-sm ${plan.popular ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-sm text-gray-600">{plan.period}</span>
                  </div>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className={`block w-full rounded-md px-6 py-3 text-center text-sm font-semibold ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32 bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by Content Creators Worldwide
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Join thousands of creators who've revolutionized their content workflow
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10M+</div>
              <div className="text-blue-100">Words Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500K+</div>
              <div className="text-blue-100">Images Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100">Videos Produced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Time Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Start creating professional content 10x faster with our AI-powered platform
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Start Free Trial
              </Link>
              <Link href="tel:+13024640950" className="text-sm font-semibold leading-6 text-gray-900">
                Call +1 302 464 0950 <ArrowRight className="inline h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-600">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}