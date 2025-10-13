import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare, Building, Globe } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  service: string;
  budget: string;
  message: string;
  urgency: string;
  preferredContact: string;
}

interface FormErrors {
  [key: string]: string;
}

const EnhancedContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: '',
    budget: '',
    message: '',
    urgency: 'medium',
    preferredContact: 'email',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const services = [
    'AI Solutions',
    'IT Services',
    'Cybersecurity',
    'Cloud Computing',
    '5G Solutions',
    'Micro SAAS',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'Digital Transformation',
    'Other',
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000',
    'Not sure yet',
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - Planning for future' },
    { value: 'medium', label: 'Medium - Within 3 months' },
    { value: 'high', label: 'High - Within 1 month' },
    { value: 'urgent', label: 'Urgent - Immediate need' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = 'Please enter a valid website URL (include http:// or https://)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      formRef.current?.reset();
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        service: '',
        budget: '',
        message: '',
        urgency: 'medium',
        preferredContact: 'email',
      });
    } catch (error) {
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: '0 0 0 3px rgba(6, 182, 212, 0.1)',
    },
    blur: {
      scale: 1,
      boxShadow: '0 0 0 0px rgba(6, 182, 212, 0.1)',
    },
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-green-500" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Thank You!
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <p className="text-cyan-100">
          Ready to transform your business? Let's discuss your project and how we can help.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="p-8 space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
                errors.name
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-cyan-500'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
                errors.email
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-cyan-500'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email}
              </motion.p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
                errors.phone
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-cyan-500'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.phone}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Building className="w-4 h-4 inline mr-2" />
              Company Name
            </label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter your company name"
            />
          </div>
        </div>

        {/* Website and Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Globe className="w-4 h-4 inline mr-2" />
              Website URL
            </label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
                errors.website
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-cyan-500'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
              placeholder="https://your-website.com"
            />
            {errors.website && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.website}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Service Interest
            </label>
            <motion.select
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </motion.select>
          </div>
        </div>

        {/* Budget and Urgency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Budget
            </label>
            <motion.select
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </motion.select>
          </div>

          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Urgency
            </label>
            <motion.select
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {urgencyLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </motion.select>
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Preferred Contact Method
          </label>
          <div className="flex space-x-4">
            {[
              { value: 'email', label: 'Email' },
              { value: 'phone', label: 'Phone' },
              { value: 'both', label: 'Either' },
            ].map((method) => (
              <label key={method.value} className="flex items-center">
                <input
                  type="radio"
                  name="preferredContact"
                  value={method.value}
                  checked={formData.preferredContact === method.value}
                  onChange={handleInputChange}
                  className="mr-2 text-cyan-500 focus:ring-cyan-500"
                />
                <span className="text-gray-700 dark:text-gray-300">{method.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Project Details *
          </label>
          <motion.textarea
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 resize-none ${
              errors.message
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 dark:border-gray-600 focus:border-cyan-500'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
            placeholder="Tell us about your project, goals, and any specific requirements..."
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message}
            </motion.p>
          )}
        </div>

        {/* Submit Error */}
        <AnimatePresence>
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center"
            >
              <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
              <span className="text-red-700 dark:text-red-300">{submitError}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </motion.button>

        {/* Contact Information */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Or contact us directly:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              kleber@ziontechgroup.com
            </a>
            <a
              href="tel:+13024640950"
              className="text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              +1 (302) 464-0950
            </a>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default EnhancedContactForm;