<<<<<<< HEAD
import React from 'react';
=======
import { useState, useEffect, useCallback } from 'react';

import { Send, CheckCircle, AlertCircle, Eye, EyeOff, Loader2, Phone, Mail, User, MessageSquare, Building } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';
export const AdvancedForm = ({ fields, onSubmit, title = 'Contact Us', subtitle = 'Get in touch with our team', submitText = 'Send Message', className = '', enableAnalytics = true, showProgressBar = true }) => {
    const { trackEvent, trackConversion } = useAnalytics({
        enableTracking: enableAnalytics,
        enableUserBehaviorTracking: true
    });
    const [formData, setFormData] = useState({});
    const [validation, setValidation] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState({});
    const [progress, setProgress] = useState(0);
    // Initialize form data and validation
    useEffect(() => {
        const initialData = {};
        const initialValidation = {};
        fields.forEach(field => {
            initialData[field.name] = field.type === 'checkbox' ? false : '';
            initialValidation[field.name] = {
                isValid: !field.required,
                message: '',
                isTouched: false
            };
        });
        setFormData(initialData);
        setValidation(initialValidation);
    }, [fields]);
    // Update progress based on filled fields
    useEffect(() => {
        const filledFields = Object.values(formData).filter(value => typeof value === 'boolean' ? value : value.toString().trim() !== '').length;
        const totalFields = fields.length;
        setProgress((filledFields / totalFields) * 100);
    }, [formData, fields.length]);
    // Validate field
    const validateField = useCallback((name, value) => {
        const field = fields.find(f => f.name === name);
        if (!field)
            return null;
        // Required field validation
        if (field.required) {
            if (typeof value === 'boolean' && !value) {
                return 'This field is required';
            }
            if (typeof value === 'string' && value.trim() === '') {
                return 'This field is required';
            }
        }
        // Skip validation for empty non-required fields
        if (!field.required && (typeof value === 'string' && value.trim() === '')) {
            return null;
        }
        // Type-specific validation
        if (typeof value === 'string') {
            const stringValue = value.trim();
            // Email validation
            if (field.type === 'email' && stringValue) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(stringValue)) {
                    return 'Please enter a valid email address';
                }
            }
            // Phone validation
            if (field.type === 'tel' && stringValue) {
                const phonePattern = /^[\+]?[1-9][\d]{0,15}$/;
                if (!phonePattern.test(stringValue.replace(/[\s\-\(\)]/g, ''))) {
                    return 'Please enter a valid phone number';
                }
            }
            // Length validation
            if (field.validation?.minLength && stringValue.length < field.validation.minLength) {
                return `Minimum length is ${field.validation.minLength} characters`;
            }
            if (field.validation?.maxLength && stringValue.length > field.validation.maxLength) {
                return `Maximum length is ${field.validation.maxLength} characters`;
            }
            // Pattern validation
            if (field.validation?.pattern && !field.validation.pattern.test(stringValue)) {
                return 'Please enter a valid value';
            }
            // Custom validation
            if (field.validation?.custom) {
                const customError = field.validation.custom(stringValue);
                if (customError)
                    return customError;
            }
        }
        return null;
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
        // Track form interaction
        if (enableAnalytics) {
            trackEvent('form', 'field_changed', name, undefined, { fieldName: name, value: String(value) });
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
                trackEvent('form', 'validation_error', 'form_submission_failed', undefined, {
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
        }
        catch (error) {
            // Track submission error
            if (enableAnalytics) {
                trackEvent('form', 'submission_error', 'form_failed', undefined, {
                    error: error instanceof Error ? error.message : 'Unknown error'
                });
            }
            console.error('Form submission failed:', error);
        }
        finally {
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
            case 'email': return <Mail className="w-4 h-4"/>;
            case 'tel': return <Phone className="w-4 h-4"/>;
            case 'textarea': return <MessageSquare className="w-4 h-4"/>;
            case 'select': return <Building className="w-4 h-4"/>;
            default: return <User className="w-4 h-4"/>;
        }
    }, []);
    // Render field
    const renderField = useCallback((field) => {
        const fieldValue = formData[field.name];
        const fieldValidation = validation[field.name];
        const isPasswordField = field.name.toLowerCase().includes('password');
        return (<motion.div key={field.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const AdvancedForm: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AdvancedForm</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AdvancedForm;