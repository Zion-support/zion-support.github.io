import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Send, Calendar, BarChart3, UserCheck, Filter } from 'lucide-react';

export default function EmailAutomation() {
  const features = [
    {
      title: 'Drip Campaigns',
      description: 'Automated email sequences that nurture leads over time',
      icon: Send,
      benefits: ['Multi-step Sequences', 'Behavioral Triggers', 'Personalization', 'A/B Testing']
    },
    {
      title: 'Welcome Sequences',
      description: 'Onboard new subscribers with engaging welcome emails',
      icon: UserCheck,
      benefits: ['Brand Introduction', 'Value Delivery', 'Engagement Building', 'Conversion Optimization']
    },
    {
      title: 'Abandoned Cart Recovery',
      description: 'Re-engage customers who left items in their cart',
      icon: Target,
      benefits: ['Timed Reminders', 'Discount Offers', 'Product Recommendations', 'Urgency Creation']
    },
    {
      title: 'Newsletter Automation',
      description: 'Regular content delivery to keep subscribers engaged',
      icon: Mail,
      benefits: ['Content Scheduling', 'Segmentation', 'Performance Tracking', 'Template Library']
    },
    {
      title: 'Behavioral Triggers',
      description: 'Send emails based on user actions and preferences',
      icon: Zap,
      benefits: ['Action-Based Sending', 'Smart Timing', 'Content Relevance', 'Engagement Optimization']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive insights into email performance',
      icon: BarChart3,
      benefits: ['Open Rates', 'Click Tracking', 'Conversion Metrics', 'ROI Analysis']
    }
  ];

  const benefits = [
    'Increase email engagement by 300%',
    'Reduce manual email management by 90%',
    'Improve conversion rates by 150%',
    'Save 20+ hours per week on email tasks',
    'Personalize emails for each subscriber',
    'Scale email marketing without increasing team size'
  ];

  return (
    <Layout>
      <Head>
        <title>Email Automation Solution - Zion Tech Group</title>
        <meta name='description' content='Streamlined email workflows and automated customer communication' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-green-50'>
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <Badge className='mb-4 bg-white/20 text-white border-white/30'>
                Automation Solution
              </Badge>
              <h1 className='text-4xl sm:text-6xl font-bold text-white mb-6'>
                Email Automation
              </h1>
              <p className='text-xl text-green-100 mb-8 max-w-3xl mx-auto'>
                Streamline your email marketing with intelligent automation. Create personalized, timely email campaigns that nurture leads and drive conversions.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button size='lg' className='bg-white text-green-600 hover:bg-green-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-green-600'>
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
                Email Automation Features
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Powerful automation tools to transform your email marketing strategy.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {features.map((feature, index) => (
                <Card key={index} className='p-8 hover:shadow-xl transition-shadow duration-300'>
                  <div className='text-center mb-6'>
                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4'>
                      <feature.icon className='h-8 w-8 text-green-600' />
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
                  Why Choose Our Email Automation?
                </h2>
                <p className='text-lg text-gray-600 mb-8'>
                  Our email automation platform helps businesses build stronger relationships with their customers through intelligent, personalized communication.
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
                <div className='bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white'>
                  <h3 className='text-2xl font-bold mb-4'>Email Performance Stats</h3>
                  <div className='grid grid-cols-2 gap-6'>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>300%</div>
                      <div className='text-green-100'>Engagement Increase</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>150%</div>
                      <div className='text-green-100'>Conversion Boost</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>90%</div>
                      <div className='text-green-100'>Time Saved</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>25%</div>
                      <div className='text-green-100'>Open Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-green-600 to-emerald-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Ready to Automate Your Email Marketing?
            </h2>
            <p className='text-xl text-green-100 mb-8 max-w-3xl mx-auto'>
              Start building better relationships with your customers through intelligent email automation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <Button size='lg' className='bg-white text-green-600 hover:bg-green-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-green-600'>
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