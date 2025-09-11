import React, { useState } from 'react';
import { useNotifications } from '../contexts/NotificationContext';
import { useAsync } from '../hooks/useAsync';
import Button from './Button';
import Input from './Input';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, className = '' }) => {
  const { showNotification } = useNotifications();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Simulate API call
  const submitForm = async (data: FormData): Promise<void> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate success
    if (data.email === 'error@example.com') {
      throw new Error('Simulated error for testing');
    }
    
    return Promise.resolve();
  };

  const [submitState, executeSubmit] = useAsync(submitForm);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showNotification({
        type: 'error',
        title: 'Validation Error',
        message: 'Please fix the errors below and try again.',
      });
      return;
    }

    try {
      await executeSubmit(formData);
      
      if (onSubmit) {
        await onSubmit(formData);
      }

      showNotification({
        type: 'success',
        title: 'Message Sent!',
        message: 'Thank you for your message. We\'ll get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      showNotification({
        type: 'error',
        title: 'Error',
        message: 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <form className={`contact-form ${className}`} onSubmit={handleSubmit}>
      <div className="contact-form__header">
        <h3 className="contact-form__title">Get in Touch</h3>
        <p className="contact-form__subtitle">
          Ready to transform your business? Let's discuss your project.
        </p>
      </div>

      <div className="contact-form__fields">
        <div className="contact-form__row">
          <Input
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={handleInputChange('name')}
            error={errors.name}
            placeholder="Enter your full name"
            required
            fullWidth
          />
        </div>

        <div className="contact-form__row">
          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            error={errors.email}
            placeholder="Enter your email address"
            required
            fullWidth
          />
        </div>

        <div className="contact-form__row">
          <Input
            label="Company (Optional)"
            type="text"
            value={formData.company}
            onChange={handleInputChange('company')}
            placeholder="Enter your company name"
            fullWidth
          />
        </div>

        <div className="contact-form__row">
          <div className="input-container input-container--full-width">
            <label htmlFor="message" className="input-label">
              Message
              <span className="input-required">*</span>
            </label>
            <textarea
              id="message"
              className={`input input--textarea ${errors.message ? 'input--error' : ''}`}
              value={formData.message}
              onChange={handleInputChange('message')}
              placeholder="Tell us about your project..."
              rows={5}
              required
            />
            {errors.message && (
              <div className="input-message">
                <span className="input-error" role="alert">
                  {errors.message}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="contact-form__actions">
        <Button
          type="submit"
          variant="primary"
          size="large"
          loading={submitState.loading}
          fullWidth
          leftIcon="📧"
        >
          {submitState.loading ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      {submitState.error && (
        <div className="contact-form__error">
          <p>Error: {submitState.error.message}</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;