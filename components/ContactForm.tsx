import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

<<<<<<< HEAD
  const validateForm = useCallback((data: FormData): Partial<FormData> => {
    const newErrors: Partial<FormData> = {}
    if (!data.name.trim()) newErrors.name = 'Name is required';
    if (!data.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Invalid email format';
    if (!data.message.trim()) newErrors.message = 'Message is required';
    
    return newErrors;
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
=======
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
>>>>>>> cursor/analyze-improve-and-deploy-application-ab82
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
<<<<<<< HEAD
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
=======
  };

>>>>>>> cursor/analyze-improve-and-deploy-application-ab82
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
<<<<<<< HEAD
    } catch {
=======
      
      setSubmitStatus('success');
    } catch (error) {
>>>>>>> cursor/analyze-improve-and-deploy-application-ab82
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          There was an error sending your message. Please try again.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a service</option>
          <option value="micro-saas">Micro SaaS Products</option>
          <option value="ai-services">AI Services</option>
          <option value="it-services">IT & Cloud Services</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300" role="alert">
          Thank you for your message! We&apos;ll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300" role="alert">
          There was an error sending your message. Please try again or contact us directly.
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <LoadingSpinner size="sm" />
            Sending Message...
          </div>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
export default ContactForm;