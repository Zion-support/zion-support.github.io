import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'AI Services',
    'Cloud Platforms',
    'Cybersecurity',
    'Micro SaaS',
    'AI Chatbots',
    'Predictive Analytics',
    'Blockchain Integration',
    'IoT Solutions',
    'AR/VR Applications',
    'API Management',
    'Data Visualization',
    'Security Monitoring',
    'Other'
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name='description' content='Get in touch with Zion Tech Group for AI, cloud, and technology solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main className='min-h-screen bg-white'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Get in Touch
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Ready to transform your business with cutting-edge technology? Let's discuss your project and how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className='py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {/* Contact Details */}
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-8'>Contact Information</h2>
                
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
                      <p className='text-sm text-gray-500 mt-1'>Available Monday - Friday, 9 AM - 6 PM EST</p>
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
                      <p className='text-sm text-gray-500 mt-1'>We respond within 24 hours</p>
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

                {/* Quick Links */}
                <div className='mt-8'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>Quick Links</h3>
                  <div className='space-y-2'>
                    <Link href='/services' className='block text-blue-600 hover:text-blue-500 transition-colors'>
                      View Our Services →
                    </Link>
                    <Link href='/pricing-guide' className='block text-blue-600 hover:text-blue-500 transition-colors'>
                      Pricing Guide →
                    </Link>
                    <Link href='https://ziontechgroup.com' target='_blank' rel='noreferrer' className='block text-blue-600 hover:text-blue-500 transition-colors'>
                      Visit Our Website →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-8'>Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className='bg-green-50 border border-green-200 rounded-lg p-6 text-center'>
                    <CheckCircle className='h-12 w-12 text-green-600 mx-auto mb-4' />
                    <h3 className='text-lg font-semibold text-green-900 mb-2'>Message Sent!</h3>
                    <p className='text-green-700'>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                      <div>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                          Full Name *
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                          placeholder='Your full name'
                        />
                      </div>
                      <div>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                          Email Address *
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                          placeholder='your@email.com'
                        />
                      </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                      <div>
                        <label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'>
                          Company
                        </label>
                        <input
                          type='text'
                          id='company'
                          name='company'
                          value={formData.company}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                          placeholder='Your company name'
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
                          value={formData.phone}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                          placeholder='+1 (555) 123-4567'
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor='service' className='block text-sm font-medium text-gray-700 mb-2'>
                        Service Interest
                      </label>
                      <select
                        id='service'
                        name='service'
                        value={formData.service}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                      >
                        <option value=''>Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                        Message *
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none'
                        placeholder='Tell us about your project, requirements, or questions...'
                      />
                    </div>

                    <button
                      type='submit'
                      className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2'
                    >
                      <Send className='h-5 w-5' />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Ready to Get Started?
              </h2>
              <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100'>
                Let's discuss your project requirements and how we can help you achieve your goals with our cutting-edge technology solutions.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='tel:+13024640950'
                  className='group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105'
                >
                  Call Now
                  <ArrowRight className='ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform' />
                </a>
                <Link
                  href='/services'
                  className='text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group'
                >
                  View Services <span aria-hidden='true' className='group-hover:translate-x-1 transition-transform inline-block'>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}