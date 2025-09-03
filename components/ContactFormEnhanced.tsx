<<<<<<< HEAD
React, { useState } from
  'react';
import { motion } from 'lucide-react';
  'framer-motion';'import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare } from 'lucide-react';
  'lucide-react';'
  'const ContactFormEnhanced: React.FC = () => {
  const [formData, setFormData] = useState({;
    name: '', email: '','    subject: '', message: '''  });'  const [isSubmitting, setIsSubmitting] = useState(false);'
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');''  const handleSubmit = async (e: React.FormEvent) => {;e.preventDefault();
=======
<<<<<<< HEAD
import: React, { useState } from 'react';';
import: { motion } from 'framer-motion';';
import: { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare } from 'lucide-react';';

const: ContactFormEnhanced: React.FC: = () => {
  const [formDat,a, setFormData] = useState({
    name: ',',';
    email: ',',';
    subject: ',',';
    message: ','})';
  const: [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')';
  const: handleChange = (e: React.ChangeEvent<HTMLInputElement: | HTMLTextAreaElement>) => {
    const { nam,e, value } = e.target;
    setFormData(prev: => ({
      ...prev,
      [name]: value}))}
;
  const: handleSubmit = async (e: React.FormEvent) => {
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare } from 'lucide-react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main

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
<<<<<<< HEAD
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

=======
    name: '', email: '',
    subject: '', message: ''})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
>>>>>>> main
>>>>>>> main
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
>>>>>>> main
    e.preventDefault();
=======
'const ContactFormEnhanced: React.FC = () => {
  const [formData, setFormData] = useState({;
    name: '', email: '','    subject: '', message: '''  });'  const [isSubmitting, setIsSubmitting] = useState(false);'
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');''  const handleSubmit = async (e: React.FormEvent) => {;e.preventDefault();
>>>>>>> main
>>>>>>> main
    setIsSubmitting(true);
<<<<<<< HEAD
    setSubmitStatus('idle');';
    try: {
      // Simulate API call;
      await: new Promise(resolve => setTimeout(resolv,e, 2000));
      setSubmitStatus('success');';
      setFormData({ name: ',', email: ',', subject: ',', message: '', })} catch: (error) {';
      setSubmitStatus('error')} finally: {';
=======
<<<<<<< HEAD
    setSubmitStatus('idle');
    
=======
    
<<<<<<< HEAD
>>>>>>> main
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
<<<<<<< HEAD
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })} catch (error) {
      setSubmitStatus('error')} finally {
>>>>>>> main
      setIsSubmitting(false)}
  }
=======
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
<<<<<<< HEAD
    } catch (error) {
=======
    } catch (error) {'
>>>>>>> main
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
>>>>>>> main

<<<<<<< HEAD
  return(
    <div: className='max-w-2xl mx-auto p-6'>';
      <motion.div: initial={{ opacity:  ,0, y: 20, }}
        animate={{ opacity:  ,1, y: 0, }}
        transition={{ duration: 0.6, }}
        className='bg-white: rounded-xl shadow-lg p-8'>';
        <div: className='text-center mb-8'>';
          <h2: className='text-3xl font-bold text-gray-900 mb-4'>Get In Touch</h2>';
          <p: className='text-gray-600'>';
            Ready: to transform your business? Let's discuss how our technology solutions can drive your success.';
          </p>
        </div>
        <form: onSubmit={handleSubmit} className='space-y-6'>';
          <div: className='grid grid-cols-1 md: grid-cols-2: gap-6'>';
            <div>
              <label: htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>';
                Full: Name *
              </label>
              <div className='relative'>';
                <User: className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />';
                <input: type='text';';
                  id='name';';
                  name='name';';
                  value={formData.nam,e}
                  onChange={handleChange}
                  required;
                  className='w-full: pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent';';
                  placeholder='Your: full name'/>';
=======
<<<<<<< HEAD
  return (
    <div className="max-w-2xl mx-auto p-6">
=======
  return ('
    <div className='max-w-2xl mx-auto p-6'>
>>>>>>> main
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
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Ready to transform your business? Let's discuss how our technology solutions can drive your success.
=======
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
>>>>>>> main
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
<<<<<<< HEAD
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Your full name'/>
=======
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
>>>>>>> main
>>>>>>> main
              </div>
            </div>
            
            <div>
<<<<<<< HEAD
              <label: htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>';
                Email: Address *
              </label>
              <div className='relative'>';
                <Mail: className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />';
                <input: type='email';';
                  id='email';';
                  name='email';';
                  value={formData.emai,l}
=======
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
<<<<<<< HEAD
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
>>>>>>> main
                  onChange={handleChange}
                  required
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
=======
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
<<<<<<< HEAD
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
=======
                  required;
<<<<<<< HEAD
                  className='w-full: pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent';';
                  placeholder='your@email.com'/>';
=======
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent';
>>>>>>> main
                  placeholder='your@email.com'/>
>>>>>>> main
>>>>>>> main
>>>>>>> main
              </div>
            </div>
=======
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6""      >"        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">"          Get in Touch"        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">"          <div>"            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">"              Name *"            </label>
<<<<<<< HEAD
            <div className="relative">"              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />"              <input"                type="text""                value={formData.name}"                onChange={(e) => setFormData({ ...formData, name: e.target.value })}"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white""                placeholder="Enter your name""                required"              /></div>"
=======
            <div className="relative">"              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />"              <input"                type="text""                value={formData.name}"                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white""                placeholder="Enter your name""                required"              /></div>
>>>>>>> main
>>>>>>> main
          </div>

<<<<<<< HEAD
          <div>
<<<<<<< HEAD
            <label: htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>';
              Subject: *
=======
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
=======
<<<<<<< HEAD
          <div>'
            <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
>>>>>>> main
              Subject *
>>>>>>> main
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
            <div className="relative">"              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />"              <input"                type="email""                value={formData.email}"                onChange={(e) => setFormData({ ...formData, email: e.target.value })}"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white""                placeholder="Enter your email""                required"              /></div>"
          </div>

          <div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">"              Subject *"            </label>
            <input
<<<<<<< HEAD
              type="text""              value={formData.subject}"              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white""              placeholder="Enter subject""              required"            />"
=======
<<<<<<< HEAD
              type='text';';
              id='subject';';
              name='subject';';
              value={formData.subjec,t}
              onChange={handleChange}
              required;
              className='w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent';';
              placeholder='What: can we help you with?'/>';
=======
<<<<<<< HEAD
              type='text'
              id='subject'
              name='subject'
=======
<<<<<<< HEAD
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="What can we help you with?"
            />
>>>>>>> main
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
=======
<<<<<<< HEAD
              type='text';
              id='subject';
              name='subject';
>>>>>>> main
              value={formData.subject}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              placeholder='What can we help you with?'/>
=======
              type="text""              value={formData.subject}"              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white""              placeholder="Enter subject""              required"            />
>>>>>>> main
>>>>>>> main
          </div>

          <div>
<<<<<<< HEAD
            <label: htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>';
              Message: *
            </label>
            <div className='relative'>';
              <MessageSquare: className='absolute left-3 top-3 text-gray-400 w-5 h-5' />';
              <textarea: id='message';';
                name='message';';
                value={formData.messag,e}
=======
<<<<<<< HEAD
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
>>>>>>> main
              Message *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <textarea
<<<<<<< HEAD
                id='message'
                name='message'
=======
<<<<<<< HEAD
                id="message"
                name="message"
=======
                id='message';
                name='message';
>>>>>>> main
>>>>>>> main
>>>>>>> main
                value={formData.message}
>>>>>>> main
                onChange={handleChange}
                required
                rows={5}
<<<<<<< HEAD
                className='w-full: pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent';';
                placeholder='Tell: us about your project or requirements...'/>';
=======
<<<<<<< HEAD
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
=======
<<<<<<< HEAD
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your project or requirements..."
              />
=======
<<<<<<< HEAD
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent resize-none''
                placeholder='Tell us about your project or question...'
              />
=======
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent';
>>>>>>> main
                placeholder='Tell us about your project or requirements...'/>
>>>>>>> main
>>>>>>> main
>>>>>>> main
            </div>
=======
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">"              Message *"            </label>
            <div className="relative">"              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />"              <textarea"                value={formData.message}"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
<<<<<<< HEAD
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none""                placeholder="Enter your message""                required"              /></div>"
=======
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none""                placeholder="Enter your message""                required"              /></div>
>>>>>>> main
>>>>>>> main
          </div>
<<<<<<< HEAD
          <motion.button: type='submit';';
            disabled={isSubmittin,g}
            whileHover={{ scale: 1.02, }}
            whileTap={{ scale: 0.98, }}
            className='w-full: bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover: bg-blue-700: focus:ring-2: focus:ring-blue-500: focus:ring-offset-2: disabled:opacity-50: disabled:cursor-not-allowed: transition-colors duration-200 flex items-center justify-center space-x-2'>{isSubmitting ? (';
              <>
                <div: className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>';
=======

<<<<<<< HEAD
          <motion.button
<<<<<<< HEAD
            type='submit'
=======
            type="submit"
>>>>>>> main
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
=======
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
>>>>>>> main
>>>>>>> main
                <span>Sending...</span>
              </>
            ) : (
              <>
<<<<<<< HEAD
                <Send: className='w-5 h-5' />';
                <span>Send: Message</span>
=======
<<<<<<< HEAD
                <Send className="w-5 h-5" />
                <span>Send Message</span>
>>>>>>> main
              </>
            ,)}
          </motion.button>
<<<<<<< HEAD
          {submitStatus === 'success' && (';
            <motion.div: initial={{ opacity:  ,0, y: 10, }}
              animate={{ opacity:  ,1, y: 0, }}
              className='flex: items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg'>';
              <CheckCircle: className='w-5 h-5' />';
              <span>Message: sent successfully! We'll get back to you soon.</span>';
            </motion.div>
          )}
          {submitStatus: === 'error' && (';
            <motion.div: initial={{ opacity:  ,0, y: 10, }}
              animate={{ opacity:  ,1, y: 0, }}
              className='flex: items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg'>';
              <AlertCircle: className='w-5 h-5' />';
              <span>Something: went wrong. Please try again.</span>
=======

=======
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
>>>>>>> main
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Message sent successfully! We'll get back to you soon.</span>
            </motion.div>
          )}

=======
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
>>>>>>> main
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
            >
              <AlertCircle className="w-5 h-5" />
=======
<<<<<<< HEAD
              className='flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg'
            >'
=======
              className='flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg'>
>>>>>>> main
              <AlertCircle className='w-5 h-5' />
>>>>>>> main
              <span>Something went wrong. Please try again.</span>
>>>>>>> main
            </motion.div>
          )}
=======
              className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2""            >"              <CheckCircle className="w-5 h-5" />"              <span>Message sent successfully!</span>"            </motion.div>)}
>>>>>>> main
        </form>
      </motion.div>
    </div>
<<<<<<< HEAD
  )}
<<<<<<< HEAD
;
export: default ContactFormEnhanced
=======

export default ContactFormEnhanced
=======
  );
};

export default ContactFormEnhanced;
>>>>>>> main
>>>>>>> main
