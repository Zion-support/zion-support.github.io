import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Bot, Calendar, Workflow, BarChart3, MessageSquare, FileText } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: 'AI Content Creation',
      description: 'Automated content generation for blogs, social media, and marketing materials',
      icon: FileText,
      href: '/solutions/ai-content-creation',
      features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
      color: 'blue'
    },
    {
      title: 'Email Automation',
      description: 'Streamlined email workflows and automated customer communication',
      icon: Mail,
      href: '/solutions/email-automation',
      features: ['Drip Campaigns', 'Welcome Sequences', 'Abandoned Cart Recovery', 'Newsletter Automation'],
      color: 'green'
    },
    {
      title: 'Customer Support Platform',
      description: 'AI-powered customer service and support ticket management',
      icon: MessageSquare,
      href: '/solutions/customer-support',
      features: ['Live Chat Integration', 'Ticket Management', 'Knowledge Base', 'Response Automation'],
      color: 'purple'
    },
    {
      title: 'Event Management',
      description: 'Complete event planning and management solution',
      icon: Calendar,
      href: '/solutions/event-management',
      features: ['Event Registration', 'Attendee Management', 'Payment Processing', 'Analytics Dashboard'],
      color: 'orange'
    },
    {
      title: 'Project Management',
      description: 'Comprehensive project tracking and team collaboration tools',
      icon: Workflow,
      href: '/solutions/project-management',
      features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Progress Reports'],
      color: 'indigo'
    },
    {
      title: 'Workflow Automation',
      description: 'Automate repetitive business processes and workflows',
      icon: Zap,
      href: '/solutions/workflow-automation',
      features: ['Process Automation', 'Integration Management', 'Approval Workflows', 'Performance Monitoring'],
      color: 'red'
    }
  ];

  const stats = [
    { number: '95%', label: 'Process Efficiency' },
    { number: '60%', label: 'Time Savings' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  return (
    <Layout>
      <Head>
        <title>Solutions - Zion Tech Group</title>
        <meta name='description' content='Comprehensive business solutions powered by AI and automation' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <h1 className='text-4xl sm:text-6xl font-bold text-white mb-6'>
                Business Solutions
              </h1>
              <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
                Transform your business with our comprehensive suite of AI-powered solutions designed to automate, optimize, and scale your operations.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button size='lg' className='bg-white text-blue-600 hover:bg-blue-50'>
                  Explore Solutions
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600'>
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {stats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>{stat.number}</div>
                  <div className='text-gray-600'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Our Solutions
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Choose from our comprehensive range of business solutions, each designed to address specific challenges and drive growth.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {solutions.map((solution, index) => (
                <Card key={index} className='p-8 hover:shadow-xl transition-shadow duration-300'>
                  <div className='text-center mb-6'>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${solution.color}-100 mb-4`}>
                      <solution.icon className={`h-8 w-8 text-${solution.color}-600`} />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>{solution.title}</h3>
                    <p className='text-gray-600 mb-6'>{solution.description}</p>
                  </div>

                  <ul className='space-y-3 mb-8'>
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-center text-gray-700'>
                        <CheckCircle className='h-5 w-5 text-green-500 mr-3 flex-shrink-0' />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={solution.href}>
                    <Button className='w-full' variant='outline'>
                      Learn More
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
              Let our experts help you choose the right solutions for your business needs and implement them successfully.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <Button size='lg' className='bg-white text-blue-600 hover:bg-blue-50'>
                  Get Started Today
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Link href='/pricing'>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600'>
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}