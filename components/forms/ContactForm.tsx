import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className='text-2xl font-bold text-white mb-8'>Get in Touch</h3>
          <div className='space-y-6'>
            <div className='flex items-center space-x-4'>
              <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                <Mail className='w-6 h-6 text-white' />
              </div>
              <div>
                <div className='text-white font-medium'>Email</div>
                <div className='text-white/70'>kleber@ziontechgroup.com</div>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                <Phone className='w-6 h-6 text-white' />
              </div>
              <div>
                <div className='text-white font-medium'>Phone</div>
                <div className='text-white/70'>+1 (555) 123-4567</div>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                <MapPin className='w-6 h-6 text-white' />
              </div>
              <div>
                <div className='text-white font-medium'>Location</div>
                <div className='text-white/70'>San Francisco, CA</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10'
        >
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='name' className='block text-white font-medium mb-2'>
                  Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-white font-medium mb-2'>
                  Email *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors'
                  placeholder='your@email.com'
                />
              </div>
            </div>
            <div>
              <label htmlFor='company' className='block text-white font-medium mb-2'>
                Company
              </label>
              <input
                type='text'
                id='company'
                name='company'
                value={formData.company}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors'
                placeholder='Your company'
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-white font-medium mb-2'>
                Message *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none'
                placeholder='Tell us about your project...'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2'
            >
              <Send className='w-5 h-5' />
              <span>Send Message</span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}