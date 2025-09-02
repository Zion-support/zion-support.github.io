import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, FileText, PenTool, Image, Video, Mic } from 'lucide-react';

export default function AIContentCreation() {
  const features = [
    {
      title: 'Blog Post Generation',
      description: 'Create engaging, SEO-optimized blog posts automatically',
      icon: PenTool,
      benefits: ['SEO Optimization', 'Multiple Formats', 'Research Integration', 'Brand Voice Matching']
    },
    {
      title: 'Social Media Content',
      description: 'Generate platform-specific content for all social channels',
      icon: Image,
      benefits: ['Platform Optimization', 'Visual Content', 'Hashtag Research', 'Engagement Optimization']
    },
    {
      title: 'Email Campaigns',
      description: 'Create personalized email sequences and newsletters',
      icon: Mail,
      benefits: ['Personalization', 'A/B Testing', 'Segmentation', 'Performance Tracking']
    },
    {
      title: 'Video Scripts',
      description: 'Generate compelling video scripts and storyboards',
      icon: Video,
      benefits: ['Story Structure', 'Visual Cues', 'Call-to-Actions', 'Length Optimization']
    },
    {
      title: 'Audio Content',
      description: 'Create podcast scripts and audio content outlines',
      icon: Mic,
      benefits: ['Conversational Tone', 'Episode Structure', 'Guest Questions', 'Topic Research']
    },
    {
      title: 'Documentation',
      description: 'Generate technical documentation and user guides',
      icon: FileText,
      benefits: ['Clear Structure', 'Technical Accuracy', 'User-Friendly Language', 'Visual Aids']
    }
  ];

  const benefits = [
    'Save 80% of content creation time',
    'Maintain consistent brand voice across all content',
    'Scale content production without increasing team size',
    'Improve SEO rankings with optimized content',
    'Reduce content creation costs by 60%',
    'Generate content in multiple languages'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1,000 words per month',
        '5 social media posts',
        '2 email campaigns',
        'Basic templates',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '10,000 words per month',
        '50 social media posts',
        '10 email campaigns',
        'Advanced templates',
        'Priority support',
        'Brand voice training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'Unlimited posts',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 support',
        'Custom AI training'
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI Content Creation Solution - Zion Tech Group</title>
        <meta name='description' content='Automated content generation for blogs, social media, and marketing materials using advanced AI' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <Badge className='mb-4 bg-white/20 text-white border-white/30'>
                AI-Powered Solution
              </Badge>
              <h1 className='text-4xl sm:text-6xl font-bold text-white mb-6'>
                AI Content Creation
              </h1>
              <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
                Transform your content strategy with our advanced AI-powered content creation platform. Generate high-quality, engaging content at scale while maintaining your unique brand voice.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button size='lg' className='bg-white text-blue-600 hover:bg-blue-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600'>
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Content Creation Features
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Our AI content creation platform offers comprehensive tools for all your content needs.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {features.map((feature, index) => (
                <Card key={index} className='p-8 hover:shadow-xl transition-shadow duration-300'>
                  <div className='text-center mb-6'>
                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4'>
                      <feature.icon className='h-8 w-8 text-blue-600' />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                    <p className='text-gray-600 mb-6'>{feature.description}</p>
                  </div>

                  <ul className='space-y-3'>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className='flex items-center text-gray-700'>
                        <CheckCircle className='h-5 w-5 text-green-500 mr-3 flex-shrink-0' />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                  Why Choose Our AI Content Creation?
                </h2>
                <p className='text-lg text-gray-600 mb-8'>
                  Our AI content creation solution is designed to help businesses scale their content marketing efforts while maintaining quality and brand consistency.
                </p>
                <ul className='space-y-4'>
                  {benefits.map((benefit, index) => (
                    <li key={index} className='flex items-center text-gray-700'>
                      <CheckCircle className='h-6 w-6 text-green-500 mr-4 flex-shrink-0' />
                      <span className='text-lg'>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='relative'>
                <div className='bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white'>
                  <h3 className='text-2xl font-bold mb-4'>Content Creation Stats</h3>
                  <div className='grid grid-cols-2 gap-6'>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>80%</div>
                      <div className='text-blue-100'>Time Saved</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>60%</div>
                      <div className='text-blue-100'>Cost Reduction</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>5x</div>
                      <div className='text-blue-100'>Content Volume</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>95%</div>
                      <div className='text-blue-100'>Quality Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Simple, Transparent Pricing
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Choose the plan that fits your content creation needs. All plans include our core AI features.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {pricing.map((plan, index) => (
                <Card key={index} className={`p-8 relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl' : ''}`}>
                  {plan.popular && (
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                      <Badge className='bg-blue-500 text-white'>Most Popular</Badge>
                    </div>
                  )}
                  <div className='text-center mb-8'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-2'>{plan.name}</h3>
                    <p className='text-gray-600 mb-4'>{plan.description}</p>
                    <div className='flex items-baseline justify-center'>
                      <span className='text-4xl font-bold text-gray-900'>{plan.price}</span>
                      <span className='text-gray-600 ml-1'>{plan.period}</span>
                    </div>
                  </div>

                  <ul className='space-y-4 mb-8'>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-center text-gray-700'>
                        <CheckCircle className='h-5 w-5 text-green-500 mr-3 flex-shrink-0' />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className='w-full' variant={plan.popular ? 'default' : 'outline'}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Ready to Transform Your Content Strategy?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
              Join thousands of businesses already using our AI content creation platform to scale their content marketing efforts.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <Button size='lg' className='bg-white text-blue-600 hover:bg-blue-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600'>
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}