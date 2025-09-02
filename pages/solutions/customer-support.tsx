import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, MessageSquare, Headphones, FileText, Bot, BarChart3, Settings } from 'lucide-react';

export default function CustomerSupport() {
  const features = [
    {
      title: 'Live Chat Integration',
      description: 'Real-time customer support with AI-powered responses',
      icon: MessageSquare,
      benefits: ['Instant Responses', 'Multi-language Support', 'Escalation Management', 'Chat History']
    },
    {
      title: 'Ticket Management',
      description: 'Organized support ticket system with priority handling',
      icon: FileText,
      benefits: ['Priority Queuing', 'Status Tracking', 'Assignment Rules', 'SLA Management']
    },
    {
      title: 'Knowledge Base',
      description: 'Self-service portal with searchable documentation',
      icon: Database,
      benefits: ['Search Functionality', 'Category Organization', 'User Feedback', 'Analytics']
    },
    {
      title: 'AI Chatbot',
      description: 'Intelligent bot for common queries and routing',
      icon: Bot,
      benefits: ['Natural Language Processing', 'Context Awareness', 'Learning Capabilities', 'Human Handoff']
    },
    {
      title: 'Response Automation',
      description: 'Automated responses for common customer inquiries',
      icon: Zap,
      benefits: ['Template Library', 'Conditional Logic', 'Personalization', 'Quality Control']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into support performance',
      icon: BarChart3,
      benefits: ['Response Times', 'Satisfaction Scores', 'Volume Trends', 'Agent Performance']
    }
  ];

  const benefits = [
    'Reduce response time by 70%',
    'Increase customer satisfaction by 40%',
    'Handle 80% of queries automatically',
    'Scale support without increasing team size',
    'Provide 24/7 customer assistance',
    'Improve first-call resolution rates'
  ];

  return (
    <Layout>
      <Head>
        <title>Customer Support Platform - Zion Tech Group</title>
        <meta name='description' content='AI-powered customer service and support ticket management' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-purple-50'>
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <Badge className='mb-4 bg-white/20 text-white border-white/30'>
                Support Solution
              </Badge>
              <h1 className='text-4xl sm:text-6xl font-bold text-white mb-6'>
                Customer Support Platform
              </h1>
              <p className='text-xl text-purple-100 mb-8 max-w-3xl mx-auto'>
                Deliver exceptional customer service with our AI-powered support platform. Streamline ticket management, provide instant responses, and ensure customer satisfaction.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button size='lg' className='bg-white text-purple-600 hover:bg-purple-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-purple-600'>
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
                Support Platform Features
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Comprehensive tools to deliver world-class customer support.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {features.map((feature, index) => (
                <Card key={index} className='p-8 hover:shadow-xl transition-shadow duration-300'>
                  <div className='text-center mb-6'>
                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4'>
                      <feature.icon className='h-8 w-8 text-purple-600' />
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
                  Why Choose Our Support Platform?
                </h2>
                <p className='text-lg text-gray-600 mb-8'>
                  Our customer support platform combines AI automation with human expertise to deliver exceptional customer experiences.
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
                <div className='bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl p-8 text-white'>
                  <h3 className='text-2xl font-bold mb-4'>Support Performance</h3>
                  <div className='grid grid-cols-2 gap-6'>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>70%</div>
                      <div className='text-purple-100'>Faster Response</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>40%</div>
                      <div className='text-purple-100'>Higher Satisfaction</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>80%</div>
                      <div className='text-purple-100'>Auto Resolution</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>24/7</div>
                      <div className='text-purple-100'>Availability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-purple-600 to-violet-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Ready to Transform Your Customer Support?
            </h2>
            <p className='text-xl text-purple-100 mb-8 max-w-3xl mx-auto'>
              Join thousands of businesses delivering exceptional customer experiences with our support platform.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <Button size='lg' className='bg-white text-purple-600 hover:bg-purple-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-purple-600'>
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