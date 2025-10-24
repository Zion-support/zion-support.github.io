'use client';
import React, { useState, useCallback } from 'react';
import ContactForm from '../components/ContactForm';
import SEOHead from '../components/SEOHead';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = useCallback((data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!data.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  const structuredData = React.useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI-powered solutions, cybersecurity, and digital transformation services",
    "url": "https://ziontechgroup.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-ZION-TECH",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Innovation City",
      "addressRegion": "IC",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "openingHours": ["Mo-Fr 09:00-17:00"],
    "priceRange": "$$"
  }), []);

  return (
    <>
      <SEOHead
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for your AI and IT solution needs. We're here to help."
        keywords="contact us, get in touch, AI consultation, IT support, customer service, Zion Tech Group"
        url="https://ziontechgroup.com/contact"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with our AI and IT solutions? Get in touch with our team today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1-555-ZION-TECH</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">123 Tech Street, Innovation City, IC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm
                formData={formData}
                errors={errors}
                isSubmitting={isSubmitting}
                submitStatus={submitStatus}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;