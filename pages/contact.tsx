import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Calendar,
  Globe,
  Award,
  Users,
  Zap
} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 302 464 0950',
      link: 'tel:+13024640950',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us your project details'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '364 E Main St STE 1008\nMiddletown, DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Visit our office'
    },
    {
      icon: Globe,
      title: 'Website',
      details: 'ziontechgroup.com',
      link: 'https://ziontechgroup.com',
      description: 'Explore our services online'
    }
  ];

  const services = [
    'AI Autonomous Systems',
    'Cloud Platforms',
    'Cybersecurity',
    'Micro SaaS Solutions',
    'Computer Vision',
    'Natural Language Processing',
    'Blockchain & Web3',
    'IoT & Edge Computing',
    'Quantum Computing Readiness',
    'AR/VR & Metaverse',
    'Industry-Specific Solutions',
    'Custom Development'
  ];

  const budgetRanges = [
    'Under $10k',
    '$10k - $25k',
    '$25k - $50k',
    '$50k - $100k',
    '$100k - $250k',
    '$250k+',
    'Monthly subscription',
    'Not sure yet'
  ];

  return (
    <>
      <Head>
        <title>Contact Us — Zion Tech Group</title>
        <meta name='description' content='Get in touch with Zion Tech Group for AI, IT, and Micro SaaS solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <PageTransition>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <div className='flex items-center justify-center mb-4'>
                <MessageSquare className='h-6 w-6 text-blue-600 mr-2' />
                <span className='text-base font-semibold leading-7 text-blue-600'>Contact Us</span>
              </div>
              <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Let's Build Something Amazing Together
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Ready to transform your business with cutting-edge technology? Get in touch with our team of experts.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className='py-24 sm:py-32 bg-white'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {contactInfo.map((info, index) => (
                <div key={index} className='text-center group'>
                  <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4'>
                    <info.icon className='h-8 w-8 text-blue-600' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>{info.title}</h3>
                  <a 
                    href={info.link} 
                    className='text-blue-600 hover:text-blue-500 transition-colors block mb-2'
                    target={info.title === 'Website' ? '_blank' : undefined}
                    rel={info.title === 'Website' ? 'noreferrer' : undefined}
                  >
                    {info.details}
                  </a>
                  <p className='text-sm text-gray-500'>{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Additional Info */}
        <section className='py-24 sm:py-32 bg-gray-50'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
              {/* Contact Form */}
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Send us a message</h2>
                {isSubmitted ? (
                  <div className='bg-green-50 border border-green-200 rounded-lg p-6 text-center'>
                    <CheckCircle className='h-12 w-12 text-green-600 mx-auto mb-4' />
                    <h3 className='text-lg font-semibold text-green-900 mb-2'>Message Sent Successfully!</h3>
                    <p className='text-green-700 mb-4'>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className='text-green-600 hover:text-green-500 font-medium'
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
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
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                          placeholder='your@email.com'
                        />
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div>
                        <label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'>
                          Company
                        </label>
                        <input
                          type='text'
                          id='company'
                          name='company'
                          value={formData.company}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
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
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                          placeholder='+1 (555) 123-4567'
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor='service' className='block text-sm font-medium text-gray-700 mb-2'>
                        Service Interest *
                      </label>
                      <select
                        id='service'
                        name='service'
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      >
                        <option value=''>Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor='budget' className='block text-sm font-medium text-gray-700 mb-2'>
                        Project Budget
                      </label>
                      <select
                        id='budget'
                        name='budget'
                        value={formData.budget}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      >
                        <option value=''>Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                        Project Details *
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='Tell us about your project, goals, timeline, and any specific requirements...'
                      />
                    </div>

                    <button
                      type='submit'
                      className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center'
                    >
                      Send Message
                      <Send className='ml-2 h-4 w-4' />
                    </button>
                  </form>
                )}
              </div>

              {/* Additional Information */}
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Why Choose Zion Tech Group?</h2>
                
                <div className='space-y-6 mb-8'>
                  <div className='flex items-start space-x-4'>
                    <div className='flex-shrink-0'>
                      <Award className='h-6 w-6 text-blue-600 mt-1' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Expert Team</h3>
                      <p className='text-gray-600'>
                        Our team consists of certified professionals with years of experience in AI, cloud computing, and software development.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='flex-shrink-0'>
                      <Zap className='h-6 w-6 text-blue-600 mt-1' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Fast Delivery</h3>
                      <p className='text-gray-600'>
                        We deliver results quickly with our proven methodologies and agile development processes.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='flex-shrink-0'>
                      <Users className='h-6 w-6 text-blue-600 mt-1' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>Dedicated Support</h3>
                      <p className='text-gray-600'>
                        24/7 support and maintenance to ensure your solutions run smoothly and efficiently.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-blue-50 border border-blue-200 rounded-lg p-6'>
                  <h3 className='text-lg font-semibold text-blue-900 mb-3'>Business Hours</h3>
                  <div className='space-y-2 text-blue-800'>
                    <div className='flex items-center'>
                      <Clock className='h-4 w-4 mr-2' />
                      <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className='flex items-center'>
                      <Clock className='h-4 w-4 mr-2' />
                      <span>Saturday: 10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className='flex items-center'>
                      <Clock className='h-4 w-4 mr-2' />
                      <span>Sunday: Closed</span>
                    </div>
                  </div>
                  <p className='text-sm text-blue-700 mt-3'>
                    Emergency support available 24/7 for critical issues.
                  </p>
                </div>

                <div className='mt-8'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>Quick Links</h3>
                  <div className='space-y-2'>
                    <Link href='/services' className='block text-blue-600 hover:text-blue-500 transition-colors'>
                      View All Services →
                    </Link>
                    <Link href='/pricing-guide' className='block text-blue-600 hover:text-blue-500 transition-colors'>
                      Pricing Guide →
                    </Link>
                    <a href='https://ziontechgroup.com' className='block text-blue-600 hover:text-blue-500 transition-colors' target='_blank' rel='noreferrer'>
                      Visit Our Website →
                    </a>
                  </div>
                </div>
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
                Don't wait - let's discuss your project requirements and how we can help you achieve your goals.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='tel:+13024640950'
                  className='group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105'
                >
                  Call Now: +1 302 464 0950
                  <ArrowRight className='ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform' />
                </a>
                <a
                  href='mailto:kleber@ziontechgroup.com'
                  className='text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group'
                >
                  Email Us <span aria-hidden='true' className='group-hover:translate-x-1 transition-transform inline-block'>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}