import React { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, 
  MapPin, Send, 
  CheckCircle, AlertCircle,
  User, Building,
  MessageSquare
} from 'lucide-react';

      {submitStatus === 'error' && (<div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
            Something went wrong. Please try again or contact us directly.
          </div>
        </div>)}

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value
    }))};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '', lastName: '',
        email: '', company: '',
        phone: '', service: '',
        message: '', budget: '',
        timeline: ''
      })} catch (error) {
      setSubmitStatus('error')} finally {
      setIsSubmitting(false)}
  };

  const services = [
    'AI & Machine Learning', 'Cloud & DevOps',
    'Enterprise Security', 'Digital Transformation',
    'Micro SAAS Services', 'IT Onsite Services',
    'Custom Development', 'Other'
  ];

  const budgets = [
    'Under $10K', '$10K - $50K',
    '$50K - $100K', '$100K - $500K',
    'Over $500K'
  ];

  const timelines = [
    'Immediate (1-2 weeks)', 'Quick (1-2 months)', 'Standard (3-6 months)', 'Long-term (6+ months)'
  ];

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-zion-slate-light mb-6">
          Your message has been sent successfully. We&apos;ll get back to you within 24 hours.''
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover: bg-zion-cyan/90 transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    )}

  return (
    <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-zion-slate-light">
          Ready to transform your business? Let&apos;s discuss how we can help you achieve your goals.''
        </p>
      </div>

      <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 mb-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-zion-cyan" />
            </div>
            <div>
              <div className="text-white font-semibold">Email</div>
              <div className="text-zion-slate-light">kleber@ziontechgroup.com</div>
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
              Last Name *
            </label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Enter your last name"/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Enter your email address"/>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Enter your phone number"/>
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Company Name
          </label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Enter your company name"/>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            Service of Interest
          </label>
          <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
            <option value="">Select a service</option>
            <option value="ai-solutions">AI & Machine Learning</option>
            <option value="cloud-devops">Cloud & DevOps</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="it-infrastructure">IT Infrastructure</option>
            <option value="digital-transformation">Digital Transformation</option>
            <option value="micro-saas">Micro SAAS Services</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none" placeholder="Tell us about your project or how we can help..."/>
        </div>

        <div className="pt-4">
          <Button type="submit" size="lg" fullWidth loading={isSubmitting} disabled={!isFormValid} className="w-full">
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending Message...
</>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
</>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  )};