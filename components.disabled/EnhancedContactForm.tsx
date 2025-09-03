import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Star,
  Heart
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
  preferredContact: 'email' | 'phone' | 'both';
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
    subject: '',
    message: '',
    priority: 'medium',
    preferredContact: 'email'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return value && !phoneRegex.test(value) ? 'Please enter a valid phone number' : '';
      case 'subject':
        return value.length < 5 ? 'Subject must be at least 5 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach(key => {
      if (key !== 'company' && key !== 'phone') {
        const error = validateField(key, formData[key as keyof FormData]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        priority: 'medium',
        preferredContact: 'email'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
        <p className="text-gray-600">Let's start with your basic details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Full Name"
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Email Address"
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Phone Number (Optional)"
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Company (Optional)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Details</h3>
        <p className="text-gray-600">Tell us about your inquiry</p>
      </div>

      <div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Subject"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.subject ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
        )}
      </div>

      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Your Message"
          rows={6}
          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Priority Level
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Contact Method
          </label>
          <select
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Review & Submit</h3>
        <p className="text-gray-600">Please review your information before submitting</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-900">Name</h4>
            <p className="text-gray-600">{formData.name}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Email</h4>
            <p className="text-gray-600">{formData.email}</p>
          </div>
          {formData.phone && (
            <div>
              <h4 className="font-medium text-gray-900">Phone</h4>
              <p className="text-gray-600">{formData.phone}</p>
            </div>
          )}
          {formData.company && (
            <div>
              <h4 className="font-medium text-gray-900">Company</h4>
              <p className="text-gray-600">{formData.company}</p>
            </div>
          )}
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900">Subject</h4>
          <p className="text-gray-600">{formData.subject}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900">Message</h4>
          <p className="text-gray-600">{formData.message}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-900">Priority</h4>
            <p className="text-gray-600 capitalize">{formData.priority}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Preferred Contact</h4>
            <p className="text-gray-600 capitalize">{formData.preferredContact}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step {currentStep} of 3</span>
          <span className="text-sm text-gray-500">{Math.round((currentStep / 3) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-blue-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AnimatePresence mode="wait">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </AnimatePresence>

        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </motion.button>
          )}
        </div>

        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg"
            >
              <CheckCircle className="h-5 w-5" />
              <span>Message sent successfully! We'll get back to you soon.</span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg"
            >
              <AlertCircle className="h-5 w-5" />
              <span>Failed to send message. Please try again.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      {/* Contact Information */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <MapPin className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
          <p className="text-gray-600">123 Business St<br />City, State 12345</p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <Phone className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
            <Mail className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-gray-600">info@company.com</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedContactForm;