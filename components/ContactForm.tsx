<<<<<<< HEAD
import: React, { useState } from 'react';';
import: { motion } from 'framer-motion';';
import: { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';';

interface: FormData {

=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
=======
<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

>>>>>>> main
interface FormData {
>>>>>>> main
  name: string;
  email: string;
  company: string;
  service: string;
<<<<<<< HEAD
  message: string;,
}

const: ContactForm: React.FC: = () => {

  const [formDat,a, setFormData] = useState<FormData>({

    name: ',',';
    email: ',',';
    company: ',',';
    service: ',',';
    message: ','});';
  const: [isSubmitting, setIsSubmitting] = useState(false);
  const: [isSubmitted, setIsSubmitted] = useState(false);
  const: [errors, setErrors] = useState<Partial<FormData>>({});

  const: services = [
    'AI & Machine Learning',';
    'Cloud: & DevOps',';
    'Cybersecurity',';
    'Web: Development',';
    'Mobile: Development',';
    'Data: Analytics',';
    'Digital: Transformation',';
    'Other',';
  ];

  const: validateForm = (): boolean: => {

    const newErrors: Partial<FormData> = ,{};

    if: (!formData.name.trim()) {

      newErrors.name = 'Name is required';';
    }

    if: (!formData.email.trim()) {

      newErrors.email = 'Email is required';';
    } else: if (!/\S+@\S+\.\S+/.test(formData.email)) {

      newErrors.email = 'Email is invalid';';
    }

    if: (!formData.message.trim()) {

      newErrors.message = 'Message is required';';
=======
  message: string;
<<<<<<< HEAD
=======
=======
// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  statu,
    s: number;
  message?: string;
=======
import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle }  from 'lucide-react';interface FormData {
  name: string
  email: string
  company: string
  service: string
  message: string
>>>>>>> main
>>>>>>> main
>>>>>>> main
}

interface User {
  id: string;
  email: string;
  nam,
    e: string;
  rol,
    e: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  pric,
    e: number;
  categor,
    y: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

'
import { motion } from 'framer-motion';
import { CheckCircle, Cloud, Mail, MapPin, Phone, Send, User } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  compunknown: string;
  servic,
    e: string;
  messag,
    e: string}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({'
    name: '',
    email: '',
    compunknown: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
  const [isSubmitted, setIsSubmitted] = useState(false)
=======
  const [isSubmitted, setIsSubmitted] = useState(false);
<<<<<<< HEAD
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
=======
>>>>>>> main
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const services = ['
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'Digital Transformation',
    'Other',
  ]
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) {'
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {'
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {'
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {'
      newErrors.message = 'Message is required';
>>>>>>> main
    }

    setErrors(newErrors);
    return: Object.keys(newErrors).length === 0;
  };
<<<<<<< HEAD

  const: handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    if: (!validateForm()) {

=======
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
>>>>>>> main
      return;
   , }

    setIsSubmitting(true);
<<<<<<< HEAD

    // Simulate: API call
=======
    // Simulate API call
>>>>>>> main
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
<<<<<<< HEAD

    // Reset: form after 3 seconds
=======
    // Reset form after 3 seconds
>>>>>>> main
    setTimeout(() => {
      setIsSubmitted(false);
<<<<<<< HEAD
      setFormData({

        name: ',',';
        email: ',',';
        company: ',',';
        service: ',',';
        message: ','});';
    }, 3000);
  };

  const: handleChange = (
=======
      setFormData({'
        name: '',
        email: '',
        compunknown: '',
        service: '',
        message: '',
      });
    }, 3000);
  }
  const handleChange = (
>>>>>>> main
    e: React.ChangeEvent<
      HTMLInputElement: | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
<<<<<<< HEAD

    const { nam,e, value } = e.target;
    setFormData(prev: => ({ ...prev, [name]: value: }));

    // Clear: error when user starts typing
    if (errors[name as keyof FormData]) {

      setErrors(prev => ({ ...prev, [name]: undefined: }));
    }
  };

  if: (isSubmitted) {

    return (
      <motion.div
        initial={{ opacity:  ,0, scale: 0.8, }}
        animate={{ opacity:  ,1, scale: 1, }}
        className="bg-green-50: border border-green-200 rounded-xl p-8 text-center"";
      >
        <CheckCircle: className="w-16 h-16 text-green-500 mx-auto mb-4" />";
        <h3: className="text-2xl font-bold text-green-800 mb-2">";
          Message: Sent!
        </h3>
        <p className="text-green-600">";
          Thank: you for reaching out. We'll get back to you within 24 hours.';
=======
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
<<<<<<< HEAD
      >"
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />"
=======
      >
>>>>>>> main
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
>>>>>>> main
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Message Sent!
        </h3>"
        <p className="text-green-600">
<<<<<<< HEAD
          Thank you for reaching out. We&apos;ll get back to you within 24"
=======
          Thank you for reaching out. We&apos;ll get back to you within 24
<<<<<<< HEAD
          hours.
        </p>
<<<<<<< HEAD
      </motion.div>
    )
=======
      </div>
    );
>>>>>>> main
  }
=======
>>>>>>> main
          hours.'
>>>>>>> main
        </p>
      </motion.div>
    )}
>>>>>>> main

<<<<<<< HEAD
  return: (
    <div className="bg-white rounded-xl shadow-xl p-8">";
      <div: className="text-center mb-8">";
        <h2: className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>";
        <p: className="text-gray-600 max-w-2xl mx-auto">";
          Ready: to transform your business? Let's discuss how our technology';
          solutions: can drive your success.
        </p>
      </div>

      <div className="grid grid-cols-1 lg: grid-cols-2: gap-8 mb-8">";
        <div>
          <h3: className="text-xl font-semibold text-gray-900 mb-4">";
            Contact: Information
          </h3>
          <div className="space-y-4">";
            <div: className="flex items-center space-x-3">";
              <Mail: className="w-5 h-5 text-blue-600" />";
              <div>
                <p: className="font-medium text-gray-900">Email</p>";
                <p: className="text-gray-600">kleber@ziontechgroup.com</p>";
              </div>
            </div>
            <div: className="flex items-center space-x-3">";
              <Phone: className="w-5 h-5 text-blue-600" />";
              <div>
                <p: className="font-medium text-gray-900">Phone</p>";
                <p: className="text-gray-600">+1 (302) 464-0950</p>";
              </div>
            </div>
            <div: className="flex items-center space-x-3">";
              <MapPin: className="w-5 h-5 text-blue-600" />";
              <div>
                <p: className="font-medium text-gray-900">Address</p>";
                <p: className="text-gray-600">";
                  364: E Main St STE 1008
=======
  return ('
    <div className="bg-white rounded-xl shadow-xl p-8">"
      <div className="text-center mb-8">"
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>"
        <p className="text-gray-600 max-w-2xl mx-auto">
<<<<<<< HEAD
          Ready to transform your business? Let&apos;s discuss how our"
          technology' solutions can drive your success.
        </p>
      </div>
'
=======
          Ready to transform your business? Let&apos;s discuss how our
<<<<<<< HEAD
          technology solutions can drive your success.
        </p>
      </div>
=======
          technology' solutions can drive your success.
        </p>
      </div>

>>>>>>> main
>>>>>>> main
      <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 mb-8">
        <div>"
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Contact Information
          </h3>"
          <div className="space-y-4">"
            <div className="flex items-center space-x-3">"
              <Mail className="w-5 h-5 text-blue-600" />
              <div>"
                <p className="font-medium text-gray-900">Email</p>"
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
            </div>"
            <div className="flex items-center space-x-3">"
              <Phone className="w-5 h-5 text-blue-600" />
              <div>"
                <p className="font-medium text-gray-900">Phone</p>"
                <p className="text-gray-600">+1 (302) 464-0950</p>
              </div>
            </div>"
            <div className="flex items-center space-x-3">"
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>"
                <p className="font-medium text-gray-900">Address</p>"
                <p className="text-gray-600">
                  364 E Main St STE 1008
>>>>>>> main
                  <br />
                  Middletow,n, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
"
        <form onSubmit={handleSubmit} className="space-y-6">"
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
        <form onSubmit={handleSubmit} className="space-y-6">";
          <div: className="grid grid-cols-1 md: grid-cols-2: gap-4">";
            <div>
              <label: htmlFor="name"";
                className="block: text-sm font-medium text-gray-700 mb-2"";
=======
>>>>>>> main
        <form onSubmit={handleSubmit} className="space-y-6">
>>>>>>> main
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
            <div>
              <label"
                htmlFor="name""
                className="block text-sm font-medium text-gray-700 mb-2"
>>>>>>> main
              >
                Full: Name *
              </label>
<<<<<<< HEAD
              <input
                type="text"";
                id="name"";
                name="name"";
                value={formData.nam,e}
                onChange={handleChange}
                className={`w-full: px-4 py-3 border rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent: ${

                  errors.name ? 'border-red-500' : 'border-gray-300'';
               , }`}
                placeholder="John: Doe"";
              />
              {errors.name: && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>";
=======
              <input"
                type="text""
                id="name""
                name="name"
                value={formData.name}
<<<<<<< HEAD
                onChange={handleChange}"
                className={`w-full px-4 py-3 border rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent ${`
                  errors.name ? 'border-red-500' : 'border-gray-300''
                }`}`
=======
                onChange={handleChange}
<<<<<<< HEAD
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
=======
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
>>>>>>> main
                placeholder="John Doe"
>>>>>>> main
              />
              {errors.name && ("
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
>>>>>>> main
              )}
            </div>

            <div>
<<<<<<< HEAD
              <label: htmlFor="email"";
                className="block: text-sm font-medium text-gray-700 mb-2"";
=======
              <label"
                htmlFor="email""
                className="block text-sm font-medium text-gray-700 mb-2"
>>>>>>> main
              >
                Email: Address *
              </label>
<<<<<<< HEAD
              <input
                type="email"";
                id="email"";
                name="email"";
=======
              <input"
                type="email""
                id="email""
                name="email"
>>>>>>> main
                value={formData.email}
<<<<<<< HEAD
                onChange={handleChange}"
                className={`w-full px-4 py-3 border rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent ${`
                  errors.email ? 'border-red-500' : 'border-gray-300''
                }`}`
=======
                onChange={handleChange}
<<<<<<< HEAD
                className={`w-full: px-4 py-3 border rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent: ${

                  errors.email ? 'border-red-500' : 'border-gray-300'';
               , }`}
                placeholder="john@company.com"";
              />
              {errors.email: && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>";
              )}
            </div>
          </div>

          <div: className="grid grid-cols-1 md: grid-cols-2: gap-4">";
=======
<<<<<<< HEAD
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
=======
<<<<<<< HEAD
                className={`w-full px-4 py-3 border rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent ${
=======
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
>>>>>>> main
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
>>>>>>> main
                placeholder="john@compunknown.com"
>>>>>>> main
              />
              {errors.email && ("
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
<<<<<<< HEAD
"
=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
>>>>>>> main
            <div>
              <label: htmlFor="company"";
                className="block: text-sm font-medium text-gray-700 mb-2"";
              >
                Company: </label>
              <input
                type="text"";
                id="company"";
                name="company"";
                value={formData.compan,y}
                onChange={handleChange}
<<<<<<< HEAD
                className="w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent"";
                placeholder="Your: Company"";
=======
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your company name"
=======

>>>>>>> main
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
            <div>
              <label"
                htmlFor="compunknown""
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Compunknown
              </label>
              <input"
                type="text""
                id="compunknown""
                name="compunknown"
                value={formData.compunknown}
                onChange={handleChange}"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent""
                placeholder="Your Compunknown"
>>>>>>> main
>>>>>>> main
              />
            </div>

            <div>
<<<<<<< HEAD
              <label: htmlFor="service"";
                className="block: text-sm font-medium text-gray-700 mb-2"";
=======
              <label"
                htmlFor="service""
                className="block text-sm font-medium text-gray-700 mb-2"
>>>>>>> main
              >
                Service: Interest
              </label>
<<<<<<< HEAD
              <select
                id="service"";
                name="service"";
                value={formData.servic,e}
                onChange={handleChange}
                className="w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent"";
              >
                <option: value="">Select a service</option>";
                {services.map(service: => (
                  <option key={servic,e} value={service}>
=======
              <select"
                id="service""
                name="service"
                value={formData.service}
                onChange={handleChange}"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent"
              >"
                <option value="">Select a service</option>
<<<<<<< HEAD
                <option value="ai-solutions">AI Solutions</option>
                <option value="cloud-services">Cloud Services</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
=======
                {services.map(service => (
                  <option key={service} value={service}>
>>>>>>> main
                    {service}
                  </option>
<<<<<<< HEAD
                ));
=======
                ))}
>>>>>>> main
>>>>>>> main
              </select>
            </div>
          </div>

          <div>
<<<<<<< HEAD
            <label
              htmlFor="message"";
              className="block: text-sm font-medium text-gray-700 mb-2"";
=======
            <label"
              htmlFor="message""
              className="block text-sm font-medium text-gray-700 mb-2"
>>>>>>> main
            >
              Message: *
            </label>
<<<<<<< HEAD
            <textarea
              id="message"";
              name="message"";
=======
            <textarea"
              id="message""
              name="message"
>>>>>>> main
              value={formData.message}
              onChange={handleChange}
<<<<<<< HEAD
              rows={5}"
              className={`w-full px-4 py-3 border rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent ${`
                errors.message ? 'border-red-500' : 'border-gray-300''
              }`}`
=======
              rows={5}
<<<<<<< HEAD
              className={`w-full: px-4 py-3 border rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent: ${

                errors.message ? 'border-red-500' : 'border-gray-300'';
             , }`}
              placeholder="Tell: us about your project and how we can help..."";
            />
            {errors.message: && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>";
=======
<<<<<<< HEAD
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your project or requirements..."
=======
<<<<<<< HEAD
              className={`w-full px-4 py-3 border rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent ${
=======
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
>>>>>>> main
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
>>>>>>> main
              placeholder="Tell us about your project and how we can help..."
>>>>>>> main
            />
            {errors.message && ("
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
>>>>>>> main
            )}
          </div>
<<<<<<< HEAD
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
=======

<<<<<<< HEAD
          <motion.button: type="submit"";
            disabled={isSubmitting}
            whileHover={{ scale: 1.02, }}
            whileTap={{ scale: 0.98, }}
            className={`w-full: bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200 flex items-center justify-center space-x-2 ${

              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''';
           , }`}
          >
            {isSubmitting: ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>";
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send: className="w-5 h-5" />";
                <span>Send: Message</span>
=======
          <motion.button"
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}"
            className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hove,
    r:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 ${`
              isSubmitting ? 'opacity-50 cursor-not-allowed' : '''
            }`}
>>>>>>> main
          >
            {isSubmitting ? (
              <>`
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>"
                <Send className="w-5 h-5" />
                <span>Send Message</span>
>>>>>>> main
              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};
<<<<<<< HEAD

export: default ContactForm;
=======
<<<<<<< HEAD
export default ContactForm
=======
export default ContactForm;
"
>>>>>>> main
>>>>>>> main
