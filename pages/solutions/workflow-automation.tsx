import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Workflow, Settings, BarChart3, GitBranch, Play } from 'lucide-react';

export default function WorkflowAutomation() {
  const features = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive business processes and workflows',
      icon: Workflow,
      benefits: ['Visual Workflow Builder', 'Conditional Logic', 'Multi-step Processes', 'Error Handling']
    },
    {
      title: 'Integration Management',
      description: 'Connect and sync data across multiple applications',
      icon: Network,
      benefits: ['API Integrations', 'Data Synchronization', 'Real-time Updates', 'Custom Connectors']
    },
    {
      title: 'Approval Workflows',
      description: 'Streamline approval processes with automated routing',
      icon: CheckCircle,
      benefits: ['Multi-level Approvals', 'Escalation Rules', 'Notification System', 'Audit Trails']
    },
    {
      title: 'Performance Monitoring',
      description: 'Track and optimize workflow performance',
      icon: BarChart3,
      benefits: ['Real-time Analytics', 'Performance Metrics', 'Bottleneck Detection', 'Optimization Suggestions']
    }
  ];

  const benefits = [
    'Reduce manual work by 80%',
    'Increase process efficiency by 200%',
    'Eliminate human errors in repetitive tasks',
    'Accelerate business processes',
    'Improve compliance and audit trails',
    'Scale operations without increasing headcount'
  ];

  return (
    <Layout>
      <Head>
        <title>Workflow Automation Solution - Zion Tech Group</title>
        <meta name='description' content='Automate repetitive business processes and workflows' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-red-50'>
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-red-600 via-pink-600 to-rose-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <Badge className='mb-4 bg-white/20 text-white border-white/30'>
                Automation Solution
              </Badge>
              <h1 className='text-4xl sm:text-6xl font-bold text-white mb-6'>
                Workflow Automation
              </h1>
              <p className='text-xl text-red-100 mb-8 max-w-3xl mx-auto'>
                Transform your business operations with intelligent workflow automation. Eliminate manual tasks, reduce errors, and accelerate your processes.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button size='lg' className='bg-white text-red-600 hover:bg-red-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-red-600'>
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
                Workflow Automation Features
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Powerful automation tools to streamline your business processes.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {features.map((feature, index) => (
                <Card key={index} className='p-8 hover:shadow-xl transition-shadow duration-300'>
                  <div className='text-center mb-6'>
                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4'>
                      <feature.icon className='h-8 w-8 text-red-600' />
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
                  Why Choose Our Workflow Automation?
                </h2>
                <p className='text-lg text-gray-600 mb-8'>
                  Our workflow automation platform helps businesses eliminate manual work, reduce errors, and scale operations efficiently.
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
                <div className='bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 text-white'>
                  <h3 className='text-2xl font-bold mb-4'>Automation Impact</h3>
                  <div className='grid grid-cols-2 gap-6'>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>80%</div>
                      <div className='text-red-100'>Less Manual Work</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>200%</div>
                      <div className='text-red-100'>Efficiency Gain</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>99%</div>
                      <div className='text-red-100'>Error Reduction</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>24/7</div>
                      <div className='text-red-100'>Operation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-red-600 to-pink-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Ready to Automate Your Workflows?
            </h2>
            <p className='text-xl text-red-100 mb-8 max-w-3xl mx-auto'>
              Join thousands of businesses that have transformed their operations with our workflow automation platform.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <Button size='lg' className='bg-white text-red-600 hover:bg-red-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-red-600'>
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