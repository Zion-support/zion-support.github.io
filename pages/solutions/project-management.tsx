import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Workflow, Calendar, BarChart3, MessageSquare, FileText, Timer } from 'lucide-react';

export default function ProjectManagement() {
  const features = [
    {
      title: 'Task Management',
      description: 'Organize and track tasks with advanced project boards',
      icon: Target,
      benefits: ['Kanban Boards', 'Gantt Charts', 'Task Dependencies', 'Priority Management']
    },
    {
      title: 'Team Collaboration',
      description: 'Foster teamwork with integrated communication tools',
      icon: Users,
      benefits: ['Team Chat', 'File Sharing', 'Comment System', 'Notification Center']
    },
    {
      title: 'Time Tracking',
      description: 'Monitor project time and resource allocation',
      icon: Timer,
      benefits: ['Time Logging', 'Resource Planning', 'Budget Tracking', 'Performance Reports']
    },
    {
      title: 'Progress Reports',
      description: 'Comprehensive project analytics and reporting',
      icon: BarChart3,
      benefits: ['Real-time Dashboards', 'Custom Reports', 'Progress Tracking', 'Milestone Management']
    }
  ];

  const benefits = [
    'Increase team productivity by 50%',
    'Reduce project delivery time by 30%',
    'Improve project visibility and control',
    'Streamline team communication',
    'Better resource allocation and planning',
    'Enhanced project success rates'
  ];

  return (
    <Layout>
      <Head>
        <title>Project Management Solution - Zion Tech Group</title>
        <meta name='description' content='Comprehensive project tracking and team collaboration tools' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50'>
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <Badge className='mb-4 bg-white/20 text-white border-white/30'>
                Management Solution
              </Badge>
              <h1 className='text-4xl sm:text-6xl font-bold text-white mb-6'>
                Project Management
              </h1>
              <p className='text-xl text-indigo-100 mb-8 max-w-3xl mx-auto'>
                Streamline your projects with our comprehensive project management platform. Track tasks, collaborate with teams, and deliver projects on time and within budget.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button size='lg' className='bg-white text-indigo-600 hover:bg-indigo-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-indigo-600'>
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
                Project Management Features
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Powerful tools to manage projects from start to finish.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {features.map((feature, index) => (
                <Card key={index} className='p-8 hover:shadow-xl transition-shadow duration-300'>
                  <div className='text-center mb-6'>
                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4'>
                      <feature.icon className='h-8 w-8 text-indigo-600' />
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
                  Why Choose Our Project Management Platform?
                </h2>
                <p className='text-lg text-gray-600 mb-8'>
                  Our project management solution brings together all the tools your team needs to collaborate effectively and deliver successful projects.
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
                <div className='bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-8 text-white'>
                  <h3 className='text-2xl font-bold mb-4'>Project Success Metrics</h3>
                  <div className='grid grid-cols-2 gap-6'>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>50%</div>
                      <div className='text-indigo-100'>Productivity Boost</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>30%</div>
                      <div className='text-indigo-100'>Faster Delivery</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>95%</div>
                      <div className='text-indigo-100'>Success Rate</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>24/7</div>
                      <div className='text-indigo-100'>Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-indigo-600 to-blue-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Ready to Streamline Your Projects?
            </h2>
            <p className='text-xl text-indigo-100 mb-8 max-w-3xl mx-auto'>
              Join thousands of teams who trust our platform to deliver successful projects on time and within budget.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <Button size='lg' className='bg-white text-indigo-600 hover:bg-indigo-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-indigo-600'>
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