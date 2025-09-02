import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Calendar, Ticket, MapPin, CreditCard, BarChart3, UserCheck } from 'lucide-react';

export default function EventManagement() {
  const features = [
    {
      title: 'Event Registration',
      description: 'Streamlined registration process with customizable forms',
      icon: UserCheck,
      benefits: ['Custom Forms', 'Payment Integration', 'Capacity Management', 'Waitlist Handling']
    },
    {
      title: 'Attendee Management',
      description: 'Complete attendee lifecycle management and communication',
      icon: Users,
      benefits: ['Contact Management', 'Communication Tools', 'Check-in System', 'Badge Generation']
    },
    {
      title: 'Payment Processing',
      description: 'Secure payment handling with multiple payment methods',
      icon: CreditCard,
      benefits: ['Multiple Gateways', 'Refund Management', 'Invoice Generation', 'Tax Calculation']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into event performance and attendance',
      icon: BarChart3,
      benefits: ['Attendance Tracking', 'Revenue Reports', 'Engagement Metrics', 'ROI Analysis']
    }
  ];

  const benefits = [
    'Reduce event planning time by 60%',
    'Increase attendee satisfaction by 45%',
    'Streamline registration process',
    'Automate communication workflows',
    'Track event performance in real-time',
    'Scale events without increasing complexity'
  ];

  return (
    <Layout>
      <Head>
        <title>Event Management Solution - Zion Tech Group</title>
        <meta name='description' content='Complete event planning and management solution' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-orange-50'>
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <Badge className='mb-4 bg-white/20 text-white border-white/30'>
                Event Solution
              </Badge>
              <h1 className='text-4xl sm:text-6xl font-bold text-white mb-6'>
                Event Management
              </h1>
              <p className='text-xl text-orange-100 mb-8 max-w-3xl mx-auto'>
                Plan, manage, and execute successful events with our comprehensive event management platform. From registration to analytics, we've got you covered.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button size='lg' className='bg-white text-orange-600 hover:bg-orange-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-orange-600'>
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
                Event Management Features
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Everything you need to create and manage successful events.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {features.map((feature, index) => (
                <Card key={index} className='p-8 hover:shadow-xl transition-shadow duration-300'>
                  <div className='text-center mb-6'>
                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4'>
                      <feature.icon className='h-8 w-8 text-orange-600' />
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
                  Why Choose Our Event Management Platform?
                </h2>
                <p className='text-lg text-gray-600 mb-8'>
                  Our event management solution simplifies every aspect of event planning and execution, from initial setup to post-event analysis.
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
                <div className='bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white'>
                  <h3 className='text-2xl font-bold mb-4'>Event Success Metrics</h3>
                  <div className='grid grid-cols-2 gap-6'>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>60%</div>
                      <div className='text-orange-100'>Time Saved</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>45%</div>
                      <div className='text-orange-100'>Higher Satisfaction</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>95%</div>
                      <div className='text-orange-100'>Success Rate</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-2'>24/7</div>
                      <div className='text-orange-100'>Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-orange-600 to-red-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Ready to Plan Your Next Event?
            </h2>
            <p className='text-xl text-orange-100 mb-8 max-w-3xl mx-auto'>
              Join thousands of event organizers who trust our platform to deliver exceptional experiences.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <Button size='lg' className='bg-white text-orange-600 hover:bg-orange-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-orange-600'>
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