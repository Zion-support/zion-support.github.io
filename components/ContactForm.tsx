
import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { Mail, Phone, MapPin, Send, CheckCircle  } from 'lucide-react';
interface FormData  {name: string;
  email: string;
  company: string;
  phone: string;service: string;
  message: string;
}const ContactForm: React.FC = () => {const [formData, setFormData] = useState<FormData>({name: '',email: '',company: '',phone: '',service: '',message: '';
  })const [isSubmitting, setIsSubmitting] = useState(false)const [submitStatus, setSubmitStatus]  = useState<'idle' | 'success' | 'error'>('idle')const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {const { name, value } = e.target;
    setFormData(prev => ({...prev,[name]: value;
    }))}const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsSubmitting(true)setSubmitStatus('idle')try {// Simulate form submission;
      await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus('success')setFormData({name: '',email: '',company: '',phone: '',service: '',message: '';
      })} catch {setSubmitStatus('error')message: '';
  })const [isSubmitting, setIsSubmitting] = useState(false)const [isSubmitted, setIsSubmitted] = useState(false)const handleChange = (e: React.ChangeEvent<;
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >;
  ) => {const { name, value } = e.target;
    setFormData(prev => ({...prev,[name]: value;
    }))}const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsSubmitting(true)try {// Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 2000))setIsSubmitted(true)} catch (error) {console.error('Error submitting form: ', error)} finally {setIsSubmitting(false)}
  }return (<div className="max-w-2xl mx-auto bg-white rounded-lgshadow-lgp-8">;
      <h2 className="text-3xl font-bold text-gray-900mb-6text-center">Get In Touch</h2>;
      {submitStatus === 'success' && (<div className="mb-6 p-4 bg-green-100 border border-green-400text-green-700rounded">;
          Thank you for your message! We&apos;ll get back to you soon.;
        </div>;
      )}{submitStatus === 'error' && (<div className="mb-6 p-4 bg-red-100 border border-red-400text-red-700rounded">;
          Sorry, there was an error sending your message. Please try again.;
        </div>;
      )}<form onSubmit={handleSubmit} className="space-y-6">;
        <div className="grid grid-cols-1md:grid-cols-2gap-6">;
          <div>;
            <label htmlFor="name" className="block text-sm font-mediumtext-gray-700mb-2">;
              Name *;
            </label>;
            <input;
              type="text";
              id="name";
              name="name";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lgshadow-lgp-8">
      <h2 className="text-3xl font-bold text-gray-900mb-6text-center">Get In Touch</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400text-green-700rounded">
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400text-red-700rounded">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1md:grid-cols-2gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-mediumtext-gray-700mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required;
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent";
            />;
          </div>;
          <div>;
            <label htmlFor="email" className="block text-sm font-mediumtext-gray-700mb-2">;
              Email *;
            </label>;
            <input;
              type="email";
              id="email";
              name="email";
              value={formData.email}
              onChange={handleInputChange}
              required;
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent";
            />;
          </div>;
        </div>;
        <div className="grid grid-cols-1md:grid-cols-2gap-6">;
          <div>;
            <label htmlFor="company" className="block text-sm font-mediumtext-gray-700mb-2">;
              Company;
            </label>;
            <input;
              type="text";
              id="company";
              name="company";
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent";
            />;
          </div>;
          <div>;
            <label htmlFor="phone" className="block text-sm font-mediumtext-gray-700mb-2">;
              Phone;
            </label>;
            <input;
              type="tel";
              id="phone";
              name="phone";
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent";
            />;
          </div>;
        </div>;
        <div>;
          <label htmlFor="service" className="block text-sm font-mediumtext-gray-700mb-2">;
            Service Interest;
          </label>;
          <select;
            id="service";
            name="service";
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent";
          >;
            <option value="">Select a service</option>;
            <option value="web-development">Web Development</option>;
            <option value="mobile-development">Mobile Development</option>;
            <option value="cloud-solutions">Cloud Solutions</option>;
            <option value="consulting">Consulting</option>;
            <option value="other">Other</option>;
          </select>;
        </div>;
        <div>;
          <label htmlFor="message" className="block text-sm font-mediumtext-gray-700mb-2">;
            Message *;
          </label>;
          <textarea;
            id="message";
            name="message";
            value={formData.message}
            onChange={handleInputChange}
            required;
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent";
            placeholder="Tell us about your project...";
          />;
        </div>;
        <button;
          type="submit";
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowedtransition-colorsduration-200";
        >;
          {isSubmitting ? (<div className="flexitems-centerjustify-center">;
              <LoadingSpinner />;
              <span className="ml-2">Sending...</span>;
            </div>;
          ) : ('Send Message';
          )}
        </button>;
      </form>;
    </div>;
  )}export default ContactForm;
      setSubmitStatus('success')} catch {setSubmitStatus('error')} finally {setIsSubmitting(false)}
  }
  return (<option value="consulting">Consulting</option>;
            <option value="other">Other</option>;
          </select>;
        </div>;
        <button;
          type="submit";
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200">;
          {isSubmitting ? (<div className="flex items-center justify-center">;
              <LoadingSpinner size="sm" />;
              <span className="ml-2">Sending...</span>;
            </div>;
          ) : ('Send Message';
          )}
        </button>;
      </form>;
    </div>;
  )if (isSubmitted) {return (<div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">;
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />;
        <h3 className="text-2xl font-bold text-green-800 mb-2">;
          Message Sent!;
        </h3>;
        <p className="text-green-600">;
          Thank you for reaching out. We&apos;ll get back to you within 24;
          hours.;
        </p>;
      </div>;
    )}return (<div className="bg-white rounded-xl shadow-xl p-8">;
      <div className="text-center mb-8">;
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>;
        <p className="text-gray-600 max-w-2xl mx-auto">;
          Ready to transform your business? Let&apos;s discuss how our;
          technology solutions can drive your success.;
        </p>;
      </div>;
      <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 mb-8">;
        <div>;
          <h3 className="text-xl font-semibold text-gray-900 mb-4">;
            Contact Information;
          </h3>;
          <div className="space-y-4">;
            <div className="flex items-center space-x-3">;
              <Mail className="w-5 h-5 text-blue-600" />;
              <div>;
                <p className="font-medium text-gray-900">Email</p>;
                <p className="text-gray-600">kleber@ziontechgroup.com</p>;
              </div>;
            </div>;
            <div className="flex items-center space-x-3">;
              <Phone className="w-5 h-5 text-blue-600" />;
              <div>;
                <p className="font-medium text-gray-900">Phone</p>;
                <p className="text-gray-600">+1 (302) 464-0950</p>;
              </div>;
            </div>;
            <div className="flex items-center space-x-3">;
              <MapPin className="w-5 h-5 text-blue-600" />;
              <div>;
                <p className="font-medium text-gray-900">Address</p>;
                <p className="text-gray-600">;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown, DE 19709;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        <form onSubmit={handleSubmit} className="space-y-6">;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">;
            <div>;
              <label;
                htmlFor="name";
                className="block text-sm font-medium text-gray-700 mb-2";
              >;
                Full Name *;
              </label>;
              <input;
                type="text";
                id="name";
                name="name";
                value={formData.name}
                onChange={handleChange}
                required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                placeholder="Your full name";
              />;
            </div>;
            <div>;
              <label;
                htmlFor="email";
                className="block text-sm font-medium text-gray-700 mb-2";
              >;
                Email Address *;
              </label>;
              <input;
                type="email";
                id="email";
                name="email";
                value={formData.email}
                onChange={handleChange}
                required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                placeholder="your@email.com";
              />;
            </div>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <div>;
              <label;
                htmlFor="company";
                className="block text-sm font-medium text-gray-700 mb-2";
              >;
                Company;
              </label>;
              <input;
                type="text";
                id="company";
                name="company";
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                placeholder="Your company name";
              />;
            </div>;
            <div>;
              <label;
                htmlFor="service";
                className="block text-sm font-medium text-gray-700 mb-2";
              >;
                Service Interest;
              </label>;
              <select;
                id="service";
                name="service";
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
              >;
                <option value="">Select a service</option>;
                <option value="ai-solutions">AI Solutions</option>;
                <option value="cloud-services">Cloud Services</option>;
                <option value="cybersecurity">Cybersecurity</option>;
                <option value="consulting">Consulting</option>;
                <option value="other">Other</option>;
              </select>;
            </div>;
          </div>;
          <div>;
            <label;
              htmlFor="message";
              className="block text-sm font-medium text-gray-700 mb-2";
            >;
              Message *;
            </label>;
            <textarea;
              id="message";
              name="message";
              value={formData.message}
              onChange={handleChange}
              required;
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
              placeholder="Tell us about your project or requirements...";
            />;
          </div>;
          <button;
            type="submit";
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2";
          >;
            {isSubmitting ? (<>;
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>;
                <span>Sending...</span>;
              </>;
            ) : (<>;
                <Send className="w-5 h-5" />;
                <span>Send Message</span>;
              </>;
            )}
          </button>;
        </form>;
      </div>;
    </div>;
  )}export default ContactForm;
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-development">Mobile Development</option>
            <option value="cloud-solutions">Cloud Solutions</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-mediumtext-gray-700mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowedtransition-colorsduration-200"
        >
          {isSubmitting ? (
            <div className="flexitems-centerjustify-center">
              <LoadingSpinner />
              <span className="ml-2">Sending...</span>
            </div>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
