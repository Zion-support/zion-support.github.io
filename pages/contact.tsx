import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name='description' content='Get in touch with Zion Tech Group for AI services, cloud solutions, and technology consulting. Call +1 302 464 0950 or email kleber@ziontechgroup.com' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='min-h-screen bg-white'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-blue-50 to-purple-50 py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold text-gray-900 mb-6'>
                Contact Zion Tech Group
              </h1>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Ready to transform your business with cutting-edge technology? 
                Let's discuss your project and how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {/* Contact Details */}
              <div>
                <h2 className='text-3xl font-bold text-gray-900 mb-8'>Get in Touch</h2>
                <div className='space-y-6'>
                  <div className='flex items-start space-x-4'>
                    <div className='flex-shrink-0'>
                      <Phone className='h-6 w-6 text-blue-600' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900'>Phone</h3>
                      <p className='text-gray-600'>
                        <a href='tel:+13024640950' className='hover:text-blue-600 transition-colors'>
                          +1 302 464 0950
                        </a>
                      </p>
                      <p className='text-sm text-gray-500'>Available Monday - Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='flex-shrink-0'>
                      <Mail className='h-6 w-6 text-blue-600' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900'>Email</h3>
                      <p className='text-gray-600'>
                        <a href='mailto:kleber@ziontechgroup.com' className='hover:text-blue-600 transition-colors'>
                          kleber@ziontechgroup.com
                        </a>
                      </p>
                      <p className='text-sm text-gray-500'>We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='flex-shrink-0'>
                      <MapPin className='h-6 w-6 text-blue-600' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900'>Address</h3>
                      <p className='text-gray-600'>
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='flex-shrink-0'>
                      <Clock className='h-6 w-6 text-blue-600' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900'>Business Hours</h3>
                      <p className='text-gray-600'>
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday: 10:00 AM - 2:00 PM EST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-8'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>Quick Actions</h3>
                  <div className='space-y-3'>
                    <Link href='/services'>
                      <Button className='w-full justify-start'>
                        <MessageSquare className='w-4 h-4 mr-2' />
                        View Our Services
                        <ArrowRight className='w-4 h-4 ml-auto' />
                      </Button>
                    </Link>
                    <Link href='/pricing-guide'>
                      <Button variant='outline' className='w-full justify-start'>
                        <MessageSquare className='w-4 h-4 mr-2' />
                        View Pricing Guide
                        <ArrowRight className='w-4 h-4 ml-auto' />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className='p-8'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-6'>Send us a Message</h3>
                  <form className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div>
                        <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-2'>
                          First Name
                        </label>
                        <input
                          type='text'
                          id='firstName'
                          name='firstName'
                          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-2'>
                          Last Name
                        </label>
                        <input
                          type='text'
                          id='lastName'
                          name='lastName'
                          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                        Email Address
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      />
                    </div>

                    <div>
                      <label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'>
                        Company
                      </label>
                      <input
                        type='text'
                        id='company'
                        name='company'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      />
                    </div>

                    <div>
                      <label htmlFor='service' className='block text-sm font-medium text-gray-700 mb-2'>
                        Service Interest
                      </label>
                      <select
                        id='service'
                        name='service'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      >
                        <option value=''>Select a service</option>
                        <option value='ai-services'>AI Services</option>
                        <option value='cloud-platforms'>Cloud Platforms</option>
                        <option value='cybersecurity'>Cybersecurity</option>
                        <option value='micro-saas'>Micro SaaS</option>
                        <option value='data-engineering'>Data Engineering</option>
                        <option value='consulting'>Consulting</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                        Message
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        rows={4}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='Tell us about your project requirements...'
                        required
                      ></textarea>
                    </div>

                    <Button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white'>
                      Send Message
                      <ArrowRight className='w-4 h-4 ml-2' />
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>Ready to Get Started?</h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Don't wait to transform your business. Contact us today for a free consultation 
              and discover how our innovative solutions can help you achieve your goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a href='tel:+13024640950'>
                <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3'>
                  <Phone className='w-4 h-4 mr-2' />
                  Call Now
                </Button>
              </a>
              <a href='mailto:kleber@ziontechgroup.com'>
                <Button variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3'>
                  <Mail className='w-4 h-4 mr-2' />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}