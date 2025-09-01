import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Building, Eye, EyeOff, CheckCircle, AlertCircle, Send } from 'lucide-react';

export const AdvancedForm = ({
  fields = [],
  title = 'Contact Form',
  description = 'Please fill out the form below',
  onSubmit,
  enableAnalytics = false,
  className = ''
}) => {
  const [formData, setFormData] = useState({});
  const [validation, setValidation] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState({});
  const [progress, setProgress] = useState(0);

  // Validate field
  const validateField = useCallback((name, value) => {
    const field = fields.find(f => f.name === name);
    if (!field) return '';

    if (field.required && (!value || value.trim() === '')) {
      return `${field.label} is required`;
    }

    if (value && field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }

    if (value && field.type === 'tel') {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(value.replace(/\s/g, ''))) {
        return 'Please enter a valid phone number';
      }
    }

    if (value && field.minLength && value.length < field.minLength) {
      return `${field.label} must be at least ${field.minLength} characters`;
    }

    if (value && field.maxLength && value.length > field.maxLength) {
      return `${field.label} must be no more than ${field.maxLength} characters`;
    }

    return '';
  }, [fields]);

  // Handle field change
  const handleFieldChange = useCallback((name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate field
    const error = validateField(name, value);
    setValidation(prev => ({
      ...prev,
      [name]: {
        isValid: !error,
        message: error || '',
        isTouched: true
      }
    }));
  }, [validateField]);

  // Handle field blur
  const handleFieldBlur = useCallback((name) => {
    const value = formData[name];
    const error = validateField(name, value);
    setValidation(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        isValid: !error,
        message: error || '',
        isTouched: true
      }
    }));
  }, [formData, validateField]);

  // Check if form is valid
  const isFormValid = useCallback(() => {
    return Object.values(validation).every(v => v.isValid);
  }, [validation]);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      return;
    }
    
    setIsSubmitting(true);
    setProgress(0);
    
    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 100);

      await onSubmit(formData);
      
      setProgress(100);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({});
        setValidation({});
        setProgress(0);
      }, 5000);
      
    } catch (error) {
      console.error('Form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validation, isFormValid, onSubmit]);

  // Toggle password visibility
  const togglePasswordVisibility = useCallback((fieldName) => {
    setShowPassword(prev => ({ ...prev, [fieldName]: !prev[fieldName] }));
  }, []);

  // Get field icon
  const getFieldIcon = useCallback((field) => {
    switch (field.type) {
      case 'email': return <Mail className="w-4 h-4" />;
      case 'tel': return <Phone className="w-4 h-4" />;
      case 'textarea': return <MessageSquare className="w-4 h-4" />;
      case 'select': return <Building className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  }, []);

  // Render field
  const renderField = useCallback((field) => {
    const fieldValidation = validation[field.name];
    const isPasswordField = field.name.toLowerCase().includes('password');
    
    return (
      <motion.div
        key={field.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {getFieldIcon(field)}
          </div>
          
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              placeholder={field.placeholder}
              rows={field.rows || 4}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                fieldValidation?.isTouched
                  ? fieldValidation.isValid
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
              } text-gray-900 dark:text-gray-100`}
            />
          ) : field.type === 'select' ? (
            <select
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                fieldValidation?.isTouched
                  ? fieldValidation.isValid
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
              } text-gray-900 dark:text-gray-100`}
            >
              <option value="">{field.placeholder}</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={isPasswordField && showPassword[field.name] ? 'text' : field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              placeholder={field.placeholder}
              minLength={field.minLength}
              maxLength={field.maxLength}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                fieldValidation?.isTouched
                  ? fieldValidation.isValid
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
              } text-gray-900 dark:text-gray-100`}
            />
          )}
          
          {isPasswordField && (
            <button
              type="button"
              onClick={() => togglePasswordVisibility(field.name)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              {showPassword[field.name] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          )}
          
          {fieldValidation?.isTouched && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {fieldValidation.isValid ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-500" />
              )}
            </div>
          )}
        </div>
        
        {fieldValidation?.isTouched && fieldValidation.message && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-sm text-red-500"
          >
            {fieldValidation.message}
          </motion.p>
        )}
      </motion.div>
    );
  }, [formData, validation, showPassword, getFieldIcon, handleFieldChange, handleFieldBlur, togglePasswordVisibility]);

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Thank you!
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Your message has been sent successfully. We'll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map(renderField)}
        </div>

        {/* Progress Bar */}
        {isSubmitting && (
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-blue-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !isFormValid()}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};
