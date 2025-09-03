import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare } from 'lucide-react';
<<<<<<< HEAD

const ContactFormEnhanced: React.FC = () => {
<<<<<<< HEAD
  const [formData, setFormData] = useState({'
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

=======
  const [formData, setFormData] = useState({
    name: '', email: '',
    subject: '', message: ''})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
>>>>>>> main
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value}))}
;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
=======
'const ContactFormEnhanced: React.FC = () => {
  const [formData, setFormData] = useState({;
    name: '', email: '','    subject: '', message: '''  });'  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');''  const handleSubmit = async (e: React.FormEvent) => {;e.preventDefault();
>>>>>>> main
    setIsSubmitting(true);
    
<<<<<<< HEAD
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {'
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return ('
    <div className='max-w-2xl mx-auto p-6'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
=======
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
setSubmitStatus('success');'    setIsSubmitting(false);'    setFormData({ name: '', email: '', subject: '', message: '' });'  };'
  return (
    <div className="max-w-2xl mx-auto p-6">"      <motion.div"        initial={{ opacity: 0, y: 20 }}
>>>>>>> main
        animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
        transition={{ duration: 0.6 }}
<<<<<<< HEAD
        className='bg-white rounded-xl shadow-lg p-8'
      >'
        <div className='text-center mb-8>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>Get In Touch</h2>'
          <p className='text-gray-600>
            Ready to transform your business? Let's discuss how our technology solutions can drive your success.
          </p>
        </div>
'
        <form onSubmit={handleSubmit} className='space-y-6>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>'
              <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                Full Name *
              </label>'
              <div className='relative>
                <User className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                <input'
                  type='text''
                  id='name''
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required'
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent''
                  placeholder='Enter your full name'
                />
              </div>
            </div>

            <div>'
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                Email Address *
              </label>'
              <div className='relative>
                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                <input'
                  type='email''
                  id='email''
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required'
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent''
                  placeholder='Enter your email'
                />
=======
        className='bg-white rounded-xl shadow-lg p-8'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>Get In Touch</h2>
          <p className='text-gray-600'>
            Ready to transform your business? Let&apos;s discuss how our technology solutions can drive your success.'
          </p>
        </div>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 md: grid-cols-2 gap-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                Full Name *
              </label>
              <div className='relative'>
                <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <input
                  type='text';
                  id='name';
                  name='name';
                  value={formData.name}
                  onChange={handleChange}
                  required;
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent';
                  placeholder='Your full name'/>
              </div>
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                Email Address *
              </label>
              <div className='relative'>
                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <input
                  type='email';
                  id='email';
                  name='email';
                  value={formData.email}
                  onChange={handleChange}
                  required;
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent';
                  placeholder='your@email.com'/>
>>>>>>> main
              </div>
            </div>
=======
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6""      >"        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">"          Get in Touch"        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">"          <div>"            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">"              Name *"            </label>
            <div className="relative">"              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />"              <input"                type="text""                value={formData.name}"                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white""                placeholder="Enter your name""                required"              /></div>
>>>>>>> main
          </div>

<<<<<<< HEAD
          <div>'
            <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
              Subject *
            </label>
            <input'
              type='text''
              id='subject''
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              required'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent''
              placeholder='What can we help you with?'
            />
          </div>

          <div>'
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
              Message *
            </label>'
            <div className='relative>
              <MessageSquare className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
              <textarea'
                id='message''
                name='message'
=======
          <div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">"              Email *"            </label>
            <div className="relative">"              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />"              <input"                type="email""                value={formData.email}"                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white""                placeholder="Enter your email""                required"              /></div>
          </div>

          <div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">"              Subject *"            </label>
            <input
<<<<<<< HEAD
              type='text';
              id='subject';
              name='subject';
              value={formData.subject}
              onChange={handleChange}
              required;
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent';
              placeholder='What can we help you with?'/>
=======
              type="text""              value={formData.subject}"              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white""              placeholder="Enter subject""              required"            />
>>>>>>> main
          </div>

          <div>
<<<<<<< HEAD
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
              Message *
            </label>
            <div className='relative'>
              <MessageSquare className='absolute left-3 top-3 text-gray-400 w-5 h-5' />
              <textarea
                id='message';
                name='message';
>>>>>>> main
                value={formData.message}
                onChange={handleChange}
                required;
                rows={5}
<<<<<<< HEAD
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent resize-none''
                placeholder='Tell us about your project or question...'
              />
=======
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent';
                placeholder='Tell us about your project or requirements...'/>
>>>>>>> main
            </div>
=======
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">"              Message *"            </label>
            <div className="relative">"              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />"              <textarea"                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none""                placeholder="Enter your message""                required"              /></div>
>>>>>>> main
          </div>

<<<<<<< HEAD
          <motion.button'
            type='submit'
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 disable,
    d:opacity-50 disable,
    d:cursor-not-allowed'
          >
            {isSubmitting ? ('
              <div className='flex items-center justify-center gap-2>
                <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                Sending...
              </div>
            ) : ('
              <div className='flex items-center justify-center gap-2>
=======
          <motion.button
type="submit""            disabled={isSubmitting}"            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2""          >"            {isSubmitting ? (
              <>
<<<<<<< HEAD
                <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
                <span>Sending...</span>
</>
            ) : (
              <>
>>>>>>> main
                <Send className='w-5 h-5' />
                <span>Send Message</span>
</>
=======
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>"                <span>Sending...</span>"</>
            ) : (
              <>
                <Send className="w-4 h-4" />"                <span>Send Message</span>"</>
>>>>>>> main
            )}
          </motion.button>
<<<<<<< HEAD
'
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className='flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg'
            >'
=======

          {submitStatus === 'success' && ('            <motion.div'              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              className='flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg'>
>>>>>>> main
              <CheckCircle className='w-5 h-5' />
              <span>Message sent successfully! We&apos;ll get back to you soon.</span>'
            </motion.div>
          )}
<<<<<<< HEAD
'
=======
>>>>>>> main
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              className='flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg'
            >'
=======
              className='flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg'>
>>>>>>> main
              <AlertCircle className='w-5 h-5' />
              <span>Something went wrong. Please try again.</span>
            </motion.div>
          )}
=======
              className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2""            >"              <CheckCircle className="w-5 h-5" />"              <span>Message sent successfully!</span>"            </motion.div>)}
>>>>>>> main
        </form>
      </motion.div>
    </div>
  );
};

export default ContactFormEnhanced;