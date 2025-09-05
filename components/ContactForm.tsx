<<<<<<< HEAD
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
=======
import React, { useState } from 'react',
import LoadingSpinner from './LoadingSpinner',
,
interface FormData {,
  name: string,
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string,
};
,
const ContactForm: React.FC = () => {,
  const [formData, setFormData] = useState<FormData>({,
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
<<<<<<< HEAD
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
=======
  }),
,
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle'),
,
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,
    const { name, value } = e.target,
    setFormData(prev => ({,
      ...prev,
      [name]: value,
    })),
  };
,
  const handleSubmit = async (e: React.FormEvent) => {,
    e.preventDefault(),
    setIsSubmitting(true),
    setSubmitStatus('idle'),
,
    try {,
      // Simulate form submission,
      await new Promise(resolve => setTimeout(resolve, 2000)),
      setSubmitStatus('success'),
      setFormData({,
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
<<<<<<< HEAD
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
=======
      }),
    } catch {,
      setSubmitStatus('error'),
    } finally {,
      setIsSubmitting(false),
    };
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a service</option>
          <option value="web-development">Web Development</option>
          <option value="mobile-development">Mobile Development</option>
          <option value="ai-solutions">AI Solutions</option>
          <option value="consulting">Consulting</option>
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
          onChange={handleInputChange}
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {isSubmitting ? <LoadingSpinner /> : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <div className="text-green-600 text-center">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="text-red-600 text-center">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
};
<<<<<<< HEAD

export default ContactForm;
=======
,
export default ContactForm,
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
