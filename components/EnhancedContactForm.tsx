<<<<<<< HEAD
import React, { useState } from 'react',
import { motion } from 'framer-motion',
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react',
import { FormData, FormErrors } from '../types',
import { useToast } from './ui/Toast',
const EnhancedContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  }),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),
  const { showSuccess, showError } = useToast(),

  const services = [
    'AI & Machine LearningQuantum ComputingCybersecurityCloud InfrastructureData AnalyticsDigital TransformationOther'
  ],

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {},

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters'
    }
=======
import React, {_useState} from 'react';

const EnhancedContactForm: React.FC = () => {_const [formData, _setFormData] = useState({
    name: '', _email: '', _company: '', _service: '', _message: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {_showSuccess, _showError} = useToast();

  const _services = [
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Data Analytics',
    'Digital Transformation',
    'Other'
  ],

  const _validateForm = (): boolean => {_const newErrors: FormErrors = {};

    if (!formData.name.trim()) {_newErrors.name = 'Name is required';} else if (formData.name.trim().length < 2) {_newErrors.name = 'Name must be at least 2 characters long';}

    if (!formData.email.trim()) {_newErrors.email = 'Email is required';} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {_newErrors.email = 'Please enter a valid email address';}

    if (!formData.message.trim()) {_newErrors.message = 'Message is required';} else if (formData.message.trim().length < 10) {_newErrors.message = 'Message must be at least 10 characters long';} else if (formData.message.trim().length > 1000) {_newErrors.message = 'Message must be less than 1000 characters';}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setErrors(newErrors),
    return Object.keys(newErrors).length === 0
  },

<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    
    if (!validateForm()) {
      showError('Validation ErrorPlease fix the errors in the form'),
      return
    }
=======
  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    
    if (!validateForm()) {
      showError('Validation Error', _'Please fix the errors in the form');
      return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setIsSubmitting(true),

<<<<<<< HEAD
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000)),
      
      setIsSubmitted(true),
      showSuccess('Message Sent!Thank you for contacting us. We\'ll get back to you soon.'),
      
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      }),
      setErrors({})
    } catch (error) {
      console.error('Error submitting form:', error),
      showError('Submission FailedThere was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  },

  const services = [
    'AI Business IntelligenceQuantum CybersecurityEdge Computing OrchestrationSpace Technology InnovationNeural Interface DevelopmentOther'
  ],
=======
    try {_// Simulate API call
      await new Promise(resolve => setTimeout(resolve, _2000));
      
      setIsSubmitted(true);
      showSuccess('Message Sent!', _'Thank you for contacting us. We\'ll get back to you soon.');
      
      setFormData({
        name: '', _email: '', _company: '', _service: '', _message: ''});
      setErrors({});
    } catch (error) {_showError('Submission Failed', _'There was an error sending your message. Please try again.');} finally {_setIsSubmitting(false);}
  };

  const _services = [
    'AI Business Intelligence',
    'Quantum Cybersecurity',
    'Edge Computing Orchestration',
    'Space Technology Innovation',
    'Neural Interface Development',
    'Other'
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleInputBlur = (_name: keyof FormData) => {_// Validate individual field on blur
    if (formData[name] && errors[name]) {
<<<<<<< HEAD
      const newErrors = { ...errors },
      delete newErrors[name],
      setErrors(newErrors)
=======
      const _newErrors = { ...errors};
      delete newErrors[name];
      setErrors(newErrors);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className=&quot;text-center py-12&quot;
=======
  if (isSubmitted) {_return (_<motion.div
        initial={{ opacity: 0, _scale: 0.9}}
        animate={_{ opacity: 1, _scale: 1}}
        className="text-center py-12"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        <div className=&quot;w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center&quot;>
          <CheckCircle className=&quot;w-10 h-10 text-green-400&quot; />
        </div>
        <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Message Sent Successfully!</h3>
        <p className=&quot;text-white/70 mb-6&quot;>
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
<<<<<<< HEAD
          onClick={() => setIsSubmitted(false)}
<<<<<<< HEAD
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover: from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
=======
          className=&quot;px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          onClick={_() => setIsSubmitted(false)}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
<<<<<<< HEAD
    <div className=&quot;max-w-4xl mx-auto&quot;>
      <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12&quot;>
        {/* Contact Information */}
        <div className=&quot;space-y-8&quot;>
=======
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {_/* Contact Information */}
        <div className="space-y-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <div>
            <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Get in Touch</h3>
            <p className=&quot;text-white/70 leading-relaxed mb-8&quot;>
              Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how our solutions can drive innovation and growth.
            </p>
          </div>

          <div className=&quot;space-y-6&quot;>
            <div className=&quot;flex items-start space-x-4&quot;>
              <div className=&quot;w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 flex items-center justify-center&quot;>
                <Mail className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <div>
                <h4 className=&quot;text-lg font-semibold text-white mb-1&quot;>Email</h4>
                <p className=&quot;text-white/70&quot;>contact@ziontechgroup.com</p>
              </div>
            </div>

            <div className=&quot;flex items-start space-x-4&quot;>
              <div className=&quot;w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 flex items-center justify-center&quot;>
                <Phone className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <div>
                <h4 className=&quot;text-lg font-semibold text-white mb-1&quot;>Phone</h4>
                <p className=&quot;text-white/70&quot;>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className=&quot;flex items-start space-x-4&quot;>
              <div className=&quot;w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 flex items-center justify-center&quot;>
                <MapPin className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <div>
                <h4 className=&quot;text-lg font-semibold text-white mb-1&quot;>Location</h4>
                <p className=&quot;text-white/70&quot;>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Contact Form */}
        <div className=&quot;bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-8&quot;>
          <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
            <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-6&quot;>
=======
        {_/* Contact Form */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
          <form onSubmit={_handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <div>
                <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-white/80 mb-2&quot;>
                  Full Name *
                </label>
                <input
<<<<<<< HEAD
                  type=&quot;text&quot;
                  id=&quot;name&quot;
                  name=&quot;name&quot;
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur('name')}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    errors.name 
                      ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                      : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder=&quot;Enter your full name&quot;
=======
                  type="text"
                  id="name"
                  name="name"
                  value={_formData.name}
                  onChange={_handleInputChange}
                  onBlur={_() => handleInputBlur('name')}
                  className={_`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    errors.name 
                      ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                      : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'} text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder="Enter your full name"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
                {_errors.name && (
                  <motion.p
<<<<<<< HEAD
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className=&quot;mt-2 text-sm text-red-400 flex items-center gap-2&quot;
                  >
                    <AlertCircle className=&quot;w-4 h-4&quot; />
                    {errors.name}
=======
                    initial={{ opacity: 0, _y: -10}}
                    animate={_{ opacity: 1, _y: 0}}
                    className="mt-2 text-sm text-red-400 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {_errors.name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-white/80 mb-2&quot;>
                  Email Address *
                </label>
                <input
<<<<<<< HEAD
                  type=&quot;email&quot;
                  id=&quot;email&quot;
                  name=&quot;email&quot;
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur('email')}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                      : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder=&quot;Enter your email address&quot;
=======
                  type="email"
                  id="email"
                  name="email"
                  value={_formData.email}
                  onChange={_handleInputChange}
                  onBlur={_() => handleInputBlur('email')}
                  className={_`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                      : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'} text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder="Enter your email address"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
                {_errors.email && (
                  <motion.p
<<<<<<< HEAD
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className=&quot;mt-2 text-sm text-red-400 flex items-center gap-2&quot;
                  >
                    <AlertCircle className=&quot;w-4 h-4&quot; />
                    {errors.email}
=======
                    initial={{ opacity: 0, _y: -10}}
                    animate={_{ opacity: 1, _y: 0}}
                    className="mt-2 text-sm text-red-400 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {_errors.email}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </motion.p>
                )}
              </div>
            </div>

            <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-6&quot;>
              <div>
                <label htmlFor=&quot;company&quot; className=&quot;block text-sm font-medium text-white/80 mb-2&quot;>
                  Company
                </label>
                <input
<<<<<<< HEAD
                  type=&quot;text&quot;
                  id=&quot;company&quot;
                  name=&quot;company&quot;
                  value={formData.company}
                  onChange={handleInputChange}
                  className=&quot;w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300&quot;
                  placeholder=&quot;Enter your company name&quot;
=======
                  type="text"
                  id="company"
                  name="company"
                  value={_formData.company}
                  onChange={_handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your company name"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>

              <div>
                <label htmlFor=&quot;service&quot; className=&quot;block text-sm font-medium text-white/80 mb-2&quot;>
                  Service Interest
                </label>
                <select
<<<<<<< HEAD
                  id=&quot;service&quot;
                  name=&quot;service&quot;
                  value={formData.service}
                  onChange={handleInputChange}
                  className=&quot;w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300&quot;
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-slate-800 text-white&quot;>
                      {service}
=======
                  id="service"
                  name="service"
                  value={_formData.service}
                  onChange={_handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {_services.map(_(service) => (
                    <option key={service} value={_service} className="bg-slate-800 text-white">
                      {_service}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor=&quot;message" className="block text-sm font-medium text-white/80 mb-2&quot;>
                Message *
              </label>
              <textarea
<<<<<<< HEAD
                id=&quot;message&quot;
                name=&quot;message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur('message')}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
=======
                id="message"
                name="message"
                rows={_5}
                value={_formData.message}
                onChange={_handleInputChange}
                onBlur={_() => handleInputBlur('message')}
                className={_`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  errors.message 
                    ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                    : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'} text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                placeholder="Tell us about your project and requirements..."
              />
              {_errors.message && (
                <motion.p
                  initial={{ opacity: 0, _y: -10}}
                  animate={_{ opacity: 1, _y: 0}}
                  className="mt-2 text-sm text-red-400 flex items-center gap-2"
                >
<<<<<<< HEAD
                  <AlertCircle className="w-4 h-4&quot; />
                  {errors.message}
=======
                  <AlertCircle className="w-4 h-4" />
                  {_errors.message}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.p>
              )}
            </div>

            <button
<<<<<<< HEAD
              type=&quot;submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
=======
              type="submit"
              disabled={_isSubmitting}
              className={_`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105'} flex items-center justify-center gap-3`}
            >
              {_isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
},

export default EnhancedContactForm,
