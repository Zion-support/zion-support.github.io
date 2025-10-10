import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string,
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string,
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string,
}

<<<<<<< HEAD
const ContactForm: React.FC = () => {
=======
const $1: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
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
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    }
  };

  const services = [
    'AI Solutions',
    'Web Development',
    'Mobile App Development',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',
    'IT Consulting',
    'Other'
  ];

<<<<<<< HEAD
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Ready to transform your business? Let's discuss your project.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
=======
  return(<div className="max-w-4xl mx-auto">)</div>
      <div className="grid grid-cols-1 lg: grid-cols-2 gap-12">),
        {/* Contact Information */}</div>
        <div className="space-y-8">
          <div>
  return (</div>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}</div>
        <div className="space-y-8">
          <div></div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Get in Touch;
            </h2>
            <p className="text-gray-300 text-lg">
              Ready to transform your business with AI? Let's discuss your project and how we can help you achieve your goals.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div></div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <a href="tel: +13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 (302) 464-0950;
                </a>
                <p className="text-gray-400 text-sm mt-1">Mon-Fri 9 AM-6 PM EST</p>
              </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div></div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com;
                </a>
                <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
              </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div></div>
                <h3 className="text-white font-semibold mb-1">Office</h3>,
                <p className="text-gray-300">,
                  364 E Main St STE 1008<br />,
                  Middletown, DE 19709;
              <div></div>
                <h3 className="text-white font-semibold mb-1">Office</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008</p><br />
                  Middletown, DE 19709
                </p>
                <p className="text-gray-400 text-sm mt-1">United States</p>
              </div>
          </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
              <div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div></div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Full Name *
                </label>
                <input;
                  type="text",
                  id="name",
                  name="name",
                  value={formData.name}
                  onChange={handleChange}
                  required;
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                  placeholder="John Doe"
                /></inpu>
              </div>

              <div></div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <input;
                  type="email",
                  id="email",
                  name="email",
                  value={formData.email}
                  onChange={handleChange}
                  required;
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                  placeholder="john@company.com"
                /></inpu>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div></div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Company;
                </label>
                <input;
                  type="text",
                  id="company",
                  name="company",
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                  placeholder="Your Company"
                /></inpu>
              </div>

              <div></div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Phone Number;
                </label>
                <input;
                  type="tel",
                  id="phone",
                  name="phone",
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                  placeholder="+1 (555) 123-4567"
                /></inpu>
              </div>

            <div></div>
              <label htmlFor="service" className="block text-white font-medium mb-2">
                Service Interest;
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@company.com"
              />
            </div>
<<<<<<< HEAD
          </div>
=======
,
            {status.message && (,
              <div className={`flex items-center space-x-2 p-4 rounded-lg ${,
                status.type === 'success' ? 'bg-green-500/20 text-green-300' :,
                status.type === 'error' ? 'bg-red-500/20 text-red-300' :}
                'bg-blue-500/20 text-blue-300'}
              }`}></div>
                {status.type === 'success' ? (</div>
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : status.type === 'error' ? (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" /></AlertCircl>
                ) : null}
                <span>{status.message}</spa>
              </div>
            )}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc

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
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your company name"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="+1 (555) 123-4567"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
<<<<<<< HEAD
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Tell us about your project and how we can help..."
            />
          </div>

          {status.message && (
            <div className={`p-4 rounded-lg flex items-center space-x-3 ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : status.type === 'error'
                ? 'bg-red-50 text-red-800 border border-red-200'
                : 'bg-blue-50 text-blue-800 border border-blue-200'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : status.type === 'error' ? (
                <AlertCircle className="h-5 w-5 text-red-500" />
=======
              {status.type === 'loading' ? (
                <>
                  <div className="$2" />
                  Sending...</div>
                </>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              ) : (
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              )}
              <span className="text-sm font-medium">{status.message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {status.type === 'loading' ? (
              <>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-green-100 rounded-full">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">hello@ziontechgroup.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-purple-100 rounded-full">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Office</p>
                <p className="text-sm text-gray-600">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ContactForm;