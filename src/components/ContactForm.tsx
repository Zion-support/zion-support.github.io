import React, { useState, useRef } from 'react';
import { useToast } from '../hooks/useToast';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const { showSuccess, showError } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormData]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showError('Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      setFormErrors({});
      
      showSuccess('Thank you for your message! We\'ll get back to you soon.');
    } catch {
      showError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="contact-form-container">
      <h2>Get In Touch</h2>
      <p>Ready to transform your business with our technology solutions?</p>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              aria-describedby={formErrors.name ? "name-error" : undefined}
              aria-invalid={!!formErrors.name}
            />
            {formErrors.name && (
              <span id="name-error" className="error-message" role="alert">
                {formErrors.name}
              </span>
            )}
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              aria-describedby={formErrors.email ? "email-error" : undefined}
              aria-invalid={!!formErrors.email}
            />
            {formErrors.email && (
              <span id="email-error" className="error-message" role="alert">
                {formErrors.email}
              </span>
            )}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Enter your company name"
            />
          <div className="form-group">
            <label htmlFor="service">Service Interest</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
            >
              <option value="">Select a service</option>
              <option value="ai-solutions">AI Solutions</option>
              <option value="blockchain">Blockchain Technology</option>
              <option value="it-services">IT Services</option>
              <option value="quantum-computing">Quantum Computing</option>
              <option value="consultation">Consultation</option>
            </select>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            placeholder="Tell us about your project requirements..."
            aria-describedby={formErrors.message ? "message-error" : undefined}
            aria-invalid={!!formErrors.message}
          />
          {formErrors.message && (
            <span id="message-error" className="error-message" role="alert">
              {formErrors.message}
            </span>
          )}
        <button
          type="submit"
          className="submit-btn"
          disabled={!isFormValid || isSubmitting}
          aria-describedby="submit-status"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
  );
};

export default ContactForm;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>