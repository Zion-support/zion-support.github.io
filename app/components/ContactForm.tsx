<<<<<<< HEAD
import React, { useState } from "react"
import { MessageSquare } from "lucide-react"
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
=======
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
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

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
>>>>>>> origin/main
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: ""
      });
    } catch (error) {
      console.error('Failed to submit contact form:', error);
    } finally {}
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
        <MessageSquare className="w-8 h-8 mx-auto mb-2" />
        <h3>Thank you!</h3>
        <p>Your message has been sent successfully. We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label>Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
=======
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''

    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'

    }
  };

  const services = [
    'AI Solutions',
    'IT Services',
    'Micro SAAS',
    'Quantum Computing',
    'Autonomous Systems',
    'Blockchain Solutions',
    'Other'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2>Get in Touch
            </h2>
            <p>Ready to transform your business with AI? Let's discuss your project and how we can help you achieve your goals.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone> </Phone>div>
              <div>
                <h3>Phone</h3>
                <a>+1 (302) 464-0950
                </a>
                <p>Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail> </Mail>div>
              <div>
                <h3>Email</h3>
                <a>kleber@ziontechgroup.com
                </a>
                <p>We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin> </MapPin>div>
              <div>
                <h3>Office</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br>Middletown, DE 19709
                </br>p>
                <p>United States</p>
              </div>
            </div>
          </div>
>>>>>>> origin/main
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label>Full Name *
                </label>
                <input> </input>div>

              <div>
                <label>Email Address *
                </label>
                <input> </input>div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label>Company
                </label>
                <input> </input>div>

              <div>
                <label>Phone Number
                </label>
                <input> </input>div>
            </div>

            <div>
              <label>Service Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
              >
                <option>Select a service</option>
                {services.map((service) => (
                  <option>{service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Message *
              </label>
              <textarea> </textarea>div>

            {status.message && (
              <div className={`flex items-center space-x-2 p-4 rounded-lg ${
                status.type === 'success' ? 'bg-green-500/20 text-green-300' :
                status.type === 'error' ? 'bg-red-500/20 text-red-300' :
                'bg-blue-500/20 text-blue-300'
              }`}>
                {status.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : status.type === 'error' ? (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                ) : null}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
              {status.type === 'loading' ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send> </Send>>
              )}
            </button>
          </form>
        </div>
      </div>
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label>Phone Number
          </label>
          <input> </input>div>
        <div>
          <label>Company
          </label>
          <input> </input>div>
      </div>
      <div>
        <label>Service Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        >
          <option>Select a service</option>
          <option>AI Solutions</option>
          <option>IT Services</option>
          <option>Micro SAAS</option>
          <option>Consulting</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label>Message *
        </label>
        <textarea> </textarea>div>
      <button>{isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
=======
    </div>
>>>>>>> origin/main
  );
};

export default ContactForm;