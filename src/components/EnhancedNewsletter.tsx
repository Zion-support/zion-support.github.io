import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Send, Zap, Shield, Gift  } from 'lucide-react';

interface NewsletterFormData {

  email: string;
  firstName: string;
  interests: string[];
  frequency: 'weekly' | 'monthly' | 'quarterly'}

const interests = [
  { id: 'ai-solutions', label: 'AI Solutions', icon: Zap },
  { id: 'cloud-services', label: 'Cloud Services', icon: Shield },
  { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield },
  { id: 'digital-transformation', label: 'Digital Transformation', icon: Zap },
  { id: 'it-consulting', label: 'IT Consulting', icon: Gift },
  { id: 'industry-insights', label: 'Industry Insights', icon: Zap }
];

const frequencies = [
  { value: 'weekly', label: 'Weekly', description: 'Stay updated with latest trends' },
  { value: 'monthly', label: 'Monthly', description: 'Monthly digest of insights' },
  { value: 'quarterly', label: 'Quarterly', description: 'Quarterly strategic updates' }
];

export const EnhancedNewsletter: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState<any>({
    email: '',
    firstName: '',
    interests[],
    frequency: 'monthly'
  });
  
  const [status, setStatus] = useState<any>('idle');
  const [errors, setErrors] = useState<Partial<NewsletterFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<NewsletterFormData> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required'} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'}

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required'}

    if (formData.interests.length === 0) {
      newErrors.interests = 'Please select at least one interest'}

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0};

  const handleSubmit = async (e: React.FormEvent)  => {
    e.preventDefault();
    
    if (!validateForm()) {
      return}

    setStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your newsletter service
      console.log('Newsletter subscription: ', formData);
      
      setStatus('success');
      
      // Reset form after successful submission
      setTimeout(()  => {
        setFormData({
          email: '',
          firstName: '',
          interests[],
          frequency: 'monthly'
        });
        setStatus('idle')}, 3000)} catch (error) {
      setStatus('error');
      console.error('Newsletter subscription error:', error)}
  };

  const handleInterestToggle = (interestId: string)  => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id  => id !== interestId)
        [...prev.interests, interestId]
    }));
    
    // Clear error when user selects an interest
    if (errors.interests) {
      setErrors(prev => ({ ...prev, interests: undefined }))}
  };

  const handleInputChange = (field: keyof NewsletterFormData, value: string | string[])  => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))}
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 text-center border border-green-200 dark:border-green-800"
      >
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
          Welcome to the Zion Tech Group Community!
        </h3>
        <p className="text-green-700 dark:text-green-300 mb-4">
          Thank you for subscribing to our newsletter. You'll receive our next update in your inbox.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-400">
          <Mail className="h-4 w-4" />
          <span>Check your email for a confirmation message</span>
        </div>
      </motion.div>
    )}

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"
        >
          <Mail className="h-8 w-8 text-white" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-slate-900 dark:text-white mb-4"
        >
          Stay Ahead with Zion Tech Insights
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Get exclusive access to the latest AI trends, technology insights, and industry updates delivered directly to your inbox.
        </motion.p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6"
      >
        {/* Email and Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.firstName
                  ? 'border-red-300 bg-red-50 dark:bg-red-900/20'
                  : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
              }`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.firstName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.email
                  ? 'border-red-300 bg-red-50 dark:bg-red-900/20'
                  : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Interests Selection */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
            Areas of Interest * (Select all that apply)
          </label>
          <div className="grid grid-cols-2 md: grid-cols-3 gap-3">
            {interests.map((interest)  => {
              const Icon = interest.icon;
              const isSelected = formData.interests.includes(interest.id);
              
              return (
                <motion.button
                  key={interest.id}
                  type="button"
                  onClick={() => handleInterestToggle(interest.id)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                      : 'border-slate-300 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className={`h-4 w-4 ${isSelected ? 'text-blue-600' : 'text-slate-500'}`} />
                  <span className="text-sm font-medium">{interest.label}</span>
                </motion.button>
              )})}
          </div>
          {errors.interests && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.interests}
            </p>
          )}
        </div>

        {/* Frequency Selection */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
            Update Frequency
          </label>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-3">
            {frequencies.map((freq)  => (
              <label
                key={freq.value}
                className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  formData.frequency === freq.value
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-slate-300 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600'
                }`}
              >
                <input
                  type="radio"
                  name="frequency"
                  value={freq.value}
                  checked={formData.frequency === freq.value}
                  onChange={(e) => handleInputChange('frequency', e.target.value)}
                  className="sr-only"
                />
                <span className={`text-sm font-medium ${
                  formData.frequency === freq.value
                    ? 'text-blue-700 dark:text-blue-300'
                    : 'text-slate-700 dark:text-slate-300'
                }`}>
                  {freq.label}
                </span>
                <span className={`text-xs mt-1 ${
                  formData.frequency === freq.value
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-500 dark:text-slate-400'
                }`}>
                  {freq.description}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
            status === 'loading'
              ? 'bg-slate-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
          }`}
          whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
          whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
        >
          {status === 'loading' ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Subscribing...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Subscribe to Newsletter
            </>
          )}
        </motion.button>

        {/* Error Message */}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
          >
            <p className="text-red-700 dark:text-red-300 text-sm flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Something went wrong. Please try again later.
            </p>
          </motion.div>
        )}

        {/* Privacy Notice */}
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
          By subscribing, you agree to receive marketing emails from Zion Tech Group. 
          You can unsubscribe at  time. We respect your privacy and will never share your information.
        </p>
      </motion.form>
    </div>
  )};