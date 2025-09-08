import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Building, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  AlertCircle,
  Send,
  Loader2
} from 'lucide-react';

export function AdvancedForm({
  title = 'Contact Form',
  fields = [],
  onSubmit = () => {},
  className = '',
  enableValidation = true,
  enableProgress = true,
  enableAnalytics = false,
  trackEvent = () => {},
  trackConversion = () => {}
}) {
  const [formData, setFormData] = useState({});
  const [validation, setValidation] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPassword, setShowPassword] = useState({});

  // Initialize form data and validation
  useEffect(() => {
    const initialData = {};
    const initialValidation = {};
    
    fields.forEach(field => {
      initialData[field.name] = field.defaultValue || '';
      initialValidation[field.name] = {
        isValid: true,
        message: '',
        isTouched: false
      };
    });
    
    setFormData(initialData);
    setValidation(initialValidation);
  }, [fields]);

  // Update progress based on filled fields
  useEffect(() => {
    if (!enableProgress) return;
    
    const filledFields = Object.values(formData).filter(value => 
      value && value.toString().trim() !== ''
    ).length;
    const progressPercentage = (filledFields / fields.length) * 100;
    setProgress(Math.min(progressPercentage, 100));
  }, [formData, fields.length, enableProgress]);

  // Field validation
  const validateField = useCallback((name, value) => {
    if (!enableValidation) return '';
    
    const field = fields.find(f => f.name === name);
    if (!field) return '';

    const required = field.required !== false;
    const minLength = field.minLength;
    const maxLength = field.maxLength;
    const pattern = field.pattern;

    // Required validation
    if (required && (!value || value.toString().trim() === '')) {
      return field.requiredMessage || `${field.label} is required`;
    }

    // Length validation
    if (value && minLength && value.toString().length < minLength) {
      return field.minLengthMessage || `${field.label} must be at least ${minLength} characters`;
    }

    if (value && maxLength && value.toString().length > maxLength) {
      return field.maxLengthMessage || `${field.label} must be no more than ${maxLength} characters`;
    }

    // Pattern validation
    if (value && pattern && !new RegExp(pattern).test(value)) {
      return field.patternMessage || `${field.label} format is invalid`;
    }

    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return field.emailMessage || 'Please enter a valid email address';
      }
    }

    return '';
  }, [fields, enableValidation]);

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
    
    // Track form interaction
    if (enableAnalytics) {
      trackEvent('form', 'field_changed', name, null, { 
        fieldName: name, 
        value: String(value) 
      });
    }
  }, [validateField, enableAnalytics, trackEvent]);

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
      // Track validation error
      if (enableAnalytics) {
        trackEvent('form', 'validation_error', 'form_submission_failed', null, {
          errors: Object.values(validation).filter(v => !v.isValid).length
        });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Track form submission start
      if (enableAnalytics) {
        trackEvent('form', 'submission_started', 'form_submitted');
      }
      
      await onSubmit(formData);
      
      // Track successful submission
      if (enableAnalytics) {
        trackEvent('form', 'submission_success', 'form_completed');
        trackConversion('form_submission', 1, { formType: title });
      }
      
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({});
        setValidation({});
        setProgress(0);
      }, 5000);
      
    } catch (error) {
      // Track submission error
      if (enableAnalytics) {
        trackEvent('form', 'submission_error', 'form_failed', null, {
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
      console.error('Form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validation, isFormValid, onSubmit, enableAnalytics, trackEvent, trackConversion, title]);

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
        transition={{ delay: fields.indexOf(field) * 0.1 }}
        className="mb-6"
      >
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {field.label}
          {field.required !== false && <span className="text-red-500 ml-1">*</span>}
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
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                fieldValidation?.isTouched && !fieldValidation?.isValid
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
            />
          ) : field.type === 'select' ? (
            <select
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                fieldValidation?.isTouched && !fieldValidation?.isValid
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
            >
              <option value="">{field.placeholder || 'Select an option'}</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={isPasswordField && showPassword[field.name] ? 'text' : field.type || 'text'}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              placeholder={field.placeholder}
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                fieldValidation?.isTouched && !fieldValidation?.isValid
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
            />
          )}
          
          {isPasswordField && (
            <button
              type="button"
              onClick={() => togglePasswordVisibility(field.name)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword[field.name] ? (
                <EyeOff className="w-4 h-4 text-gray-400" />
              ) : (
                <Eye className="w-4 h-4 text-gray-400" />
              )}
            </button>
          )}
        </div>
        
        {fieldValidation?.isTouched && fieldValidation?.message && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-1 flex items-center gap-1 text-sm text-red-600"
          >
            <AlertCircle className="w-4 h-4" />
            {fieldValidation.message}
          </motion.div>
        )}
        
        {fieldValidation?.isTouched && fieldValidation?.isValid && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-1 flex items-center gap-1 text-sm text-green-600"
          >
            <CheckCircle className="w-4 h-4" />
            Valid
          </motion.div>
        )}
      </motion.div>
    );
  }, [formData, validation, showPassword, fields, handleFieldChange, handleFieldBlur, togglePasswordVisibility, getFieldIcon]);

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Thank you!
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Your form has been submitted successfully.
        </p>
      </motion.div>
    );
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        {enableProgress && (
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
            <motion.div
              className="bg-blue-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {enableProgress ? `${Math.round(progress)}% complete` : 'Please fill out the form below'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map(renderField)}
        
        <motion.button
          type="submit"
          disabled={isSubmitting || !isFormValid()}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
            isSubmitting || !isFormValid()
              ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          whileHover={!isSubmitting && isFormValid() ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting && isFormValid() ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}
