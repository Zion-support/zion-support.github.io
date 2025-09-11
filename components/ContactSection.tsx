import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Get In Touch
          </h2>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            Ready to transform your business with cutting-edge technology? Let's
            discuss your project and create something amazing together.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Mail className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-xl font-semibold text-white mb-2'>Email Us</h3>
            <p className='text-gray-300'>hello@zion.app</p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Phone className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-xl font-semibold text-white mb-2'>Call Us</h3>
            <p className='text-gray-300'>+1 (555) 123-4567</p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              <MapPin className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-xl font-semibold text-white mb-2'>Visit Us</h3>
            <p className='text-gray-300'>San Francisco, CA</p>
          </div>
        </div>

        <div className='bg-slate-800 rounded-2xl p-8'>
          <form className='max-w-2xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-6 mb-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
                  placeholder='your@email.com'
                />
              </div>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-300 mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={4}
                className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
                placeholder='Tell us about your project...'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
