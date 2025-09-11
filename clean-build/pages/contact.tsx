import React, { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Handle form submission here
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta
          name='description'
          content='Get in touch with Zion Tech Group for technology solutions, web development, mobile apps, AI integration, and cloud services.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900'>
        {/* Hero Section */}
        <section className='relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'></div>
          <div className='relative container mx-auto px-4 py-20 lg:py-32'>
            <div className='text-center max-w-4xl mx-auto'>
              <h1 className='text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight'>
                Get In{' '}
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Touch
                </span>
              </h1>
              <p className='text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed'>
                Ready to transform your business with cutting-edge technology?
                Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className='py-20'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              <div className='space-y-8'>
                <div className='card'>
                  <h2 className='text-3xl font-bold text-white mb-6'>
                    Contact Information
                  </h2>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                        <span className='text-white font-bold'>📧</span>
                      </div>
                      <div>
                        <p className='font-semibold text-white'>Email</p>
                        <p className='text-gray-300'>
                          contact@ziontechgroup.com
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center'>
                        <span className='text-white font-bold'>📞</span>
                      </div>
                      <div>
                        <p className='font-semibold text-white'>Phone</p>
                        <p className='text-gray-300'>+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center'>
                        <span className='text-white font-bold'>📍</span>
                      </div>
                      <div>
                        <p className='font-semibold text-white'>Address</p>
                        <p className='text-gray-300'>
                          123 Tech Street, Innovation City, IC 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='card'>
                  <h2 className='text-3xl font-bold text-white mb-6'>
                    Business Hours
                  </h2>
                  <div className='space-y-3'>
                    <div className='flex justify-between'>
                      <span className='text-gray-300'>Monday - Friday</span>
                      <span className='text-white font-semibold'>
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-300'>Saturday</span>
                      <span className='text-white font-semibold'>
                        10:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-300'>Sunday</span>
                      <span className='text-white font-semibold'>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='card'>
                <h2 className='text-3xl font-bold text-white mb-6'>
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-white mb-2'
                      >
                        Full Name *
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400'
                        placeholder='Your full name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-white mb-2'
                      >
                        Email Address *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400'
                        placeholder='your@email.com'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='company'
                      className='block text-sm font-medium text-white mb-2'
                    >
                      Company
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400'
                      placeholder='Your company name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-white mb-2'
                    >
                      Message *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none'
                      placeholder='Tell us about your project or how we can help...'
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg'
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-20 bg-slate-800/50'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6'>
                Frequently Asked{' '}
                <span className='gradient-text'>Questions</span>
              </h2>
            </div>

            <div className='max-w-4xl mx-auto space-y-8'>
              <div className='card'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  How quickly can you start my project?
                </h3>
                <p className='text-gray-300'>
                  We typically begin new projects within 1-2 weeks of contract
                  signing. The exact timeline depends on project complexity and
                  current workload.
                </p>
              </div>

              <div className='card'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  Do you provide ongoing support?
                </h3>
                <p className='text-gray-300'>
                  Yes, all our plans include ongoing support and maintenance. We
                  offer different support levels based on your chosen plan.
                </p>
              </div>

              <div className='card'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  Can you work with our existing systems?
                </h3>
                <p className='text-gray-300'>
                  Absolutely! We specialize in integrating with existing systems
                  and can work with your current technology stack or help you
                  migrate to new solutions.
                </p>
              </div>

              <div className='card'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  What's your development process?
                </h3>
                <p className='text-gray-300'>
                  We follow an agile development methodology with regular
                  updates, testing, and feedback cycles to ensure your project
                  meets your expectations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
