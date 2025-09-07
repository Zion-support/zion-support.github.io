import React from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Zion Tech Group',
  description:
    'Get in touch with Zion Tech Group for AI, Micro SaaS, and Enterprise IT solutions. We are here to help you transform your business.',
  keywords:
    'contact, support, AI services, micro SaaS, IT services, consulting',
};

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center'>
          <h1 className='text-5xl md:text-6xl font-bold text-white mb-6 leading-tight'>
            Get in Touch with{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'>
              Zion Tech Group
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed'>
            Ready to transform your business with AI, Micro SaaS, or Enterprise
            IT solutions? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Contact Information
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We're here to help you succeed. Reach out to us through any of
              these channels.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            <div className='bg-white p-8 rounded-2xl shadow-lg text-center'>
              <div className='inline-flex p-4 rounded-full bg-blue-100 mb-6'>
                <PhoneIcon className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Phone</h3>
              <p className='text-gray-600 mb-4'>
                Call us directly for immediate assistance
              </p>
              <a
                href='tel:+13024640950'
                className='text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors'
              >
                +1 302 464 0950
              </a>
            </div>

            <div className='bg-white p-8 rounded-2xl shadow-lg text-center'>
              <div className='inline-flex p-4 rounded-full bg-green-100 mb-6'>
                <EnvelopeIcon className='h-8 w-8 text-green-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Email</h3>
              <p className='text-gray-600 mb-4'>Send us a message anytime</p>
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='text-green-600 font-semibold text-lg hover:text-green-700 transition-colors'
              >
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className='bg-white p-8 rounded-2xl shadow-lg text-center'>
              <div className='inline-flex p-4 rounded-full bg-purple-100 mb-6'>
                <MapPinIcon className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Address</h3>
              <p className='text-gray-600 mb-4'>Visit our office</p>
              <address className='text-purple-600 font-semibold text-lg not-italic'>
                364 E Main St STE 1008
                <br />
                Middletown DE 19709
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-20 bg-blue-600'>
        <div className='max-w-4xl mx-auto text-center px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Ready to Get Started?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Let's discuss your project and see how we can help you achieve your
            business goals with our cutting-edge solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='mailto:kleber@ziontechgroup.com?subject=Project Inquiry'
              className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center'
            >
              Send us an Email
              <ArrowRightIcon className='h-5 w-5 ml-2' />
            </a>
            <a
              href='tel:+13024640950'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
