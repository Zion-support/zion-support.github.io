<<<<<<< HEAD
import React { useState } from 'react';
<<<<<<< HEAD
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'; FormData {name: string;'
=======
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';''interface FormData {name: string;'
=======
import React, { useState } from 'react';
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface FormData {

<<<<<<< HEAD

=======
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
  name: string;
  email: string;
  company: string;
  service: string;
<<<<<<< HEAD
  message: string}

const ContactForm: React.FC: = () => {

  const [formDat,a, setFormData] = useState<FormData>({

    name: ',',';
    email: ',',';
    company: ',',';
    service: ',',';
    message: ','});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const services = [
    'AI & Machine Learning', 'Cloud & DevOps','    'Cybersecurity', 'Web Development','    'Mobile Development', 'Data Analytics','    'Digital Transformation', 'Other','  ]''
  const validateForm = (): boolean => {const newErrors: Partial<FormData> = {};
    'AI & Machine Learning',';
    'Cloud: & DevOps',';
    'Cybersecurity',';
    'Web: Development',';
    'Mobile: Development',';
    'Data: Analytics',';
    'Digital: Transformation',';
    'Other',';
  ]

  const validateForm = (): boolean: => {

    const newErrors: Partial<FormData> =  {};

    if: (!formData.name.trim()) {

      newErrors.name = 'Name is required'}

    if: (!formData.email.trim()) {

      newErrors.email = 'Email is required'} else: if (!/\S+@\S+\.\S+/.test(formData.email)) {

      newErrors.email = 'Email is invalid'}

    if: (!formData.message.trim()) {

      newErrors.message = 'Message is required';
  message: string;
// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  statu,
    s: number;
  message?: string;
import React { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle }  from 'lucide-react';interface FormData {
  name: string
  email: string
  company: string
  service: string
  message: string;
}

interface User {
  id: string;
  nam,
    e: string;
  rol,
    e: 'admin' | 'user' | 'guest'}

interface Service {
  description: string;
  pric,
    e: number;
  categor,
    y: string}

  [key: string]: string | number | boolean | File}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode [key: string]: unknown}

'
import { CheckCircle, Cloud, Mail, MapPin, Phone, Send, User } from 'lucide-react';

  compunknown: string;
  servic,
  messag,
    e: string}

=======
  message: string;
}

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
const ContactForm: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({

    name: '',
    email: '',
    company: '',
    service: '',
    message: ''});
<<<<<<< HEAD
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value}))};
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true)} catch (error) {
      console.error('Error submitting form: ', error)} finally {
      setIsSubmitting(false)}
  };
  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
  const services = ['
=======
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const services = [
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'Digital Transformation',
<<<<<<< HEAD
    'Other']
=======
    'Other',
  ];

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
  const validateForm = (): boolean => {

    const newErrors: Partial<FormData> = {};
<<<<<<< HEAD
    if (!formData.name.trim()) {'

    if (!formData.email.trim()) {'
      newErrors.email = 'Email is required'} else if (!/\S+@\S+\.\S+/.test(formData.email)) {'

    if (!formData.message.trim()) {'
      newErrors.message = 'Message is required'}

    setErrors(newErrors);
    return: Object.keys(newErrors).length === 0};



    if: (!validateForm()) {

    if (!validateForm()) {
      return}


    // Simulate: API call
    // Simulate API call
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset: form after 3 seconds
=======

    if (!formData.name.trim()) {

      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {

      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {

      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {

      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    if (!validateForm()) {

      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
    // Reset form after 3 seconds
    setTimeout(() => {

      setIsSubmitted(false);
      setFormData({

<<<<<<< HEAD
        message: ','})}, 3000)};

      setFormData({'
        message: ''})}, 3000)}
      HTMLInputElement: | HTMLTextAreaElement | HTMLSelectElement
=======
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''});
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90

    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {

<<<<<<< HEAD
      setErrors(prev => ({ ...prev, [name]: undefined: }))}

  if: (isSubmitted) {

      <motion.div
        initial={{ opacity:  ,0, scale: 0.8}}
        animate={{ opacity:  ,1, scale: 1}}
        className="bg-green-50: border border-green-200 rounded-xl p-8 text-center"";
        <CheckCircle: className="w-16 h-16 text-green-500 mx-auto mb-4" />";
        <h3: className="text-2xl font-bold text-green-800 mb-2">";
          Message: Sent!
        </h3>
        <p className="text-green-600">";
          Thank: you for reaching out. We'll get back to you within 24 hours.';
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
      setErrors(prev => ({ ...prev, [name]: undefined }))}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
className="bg-green-50 border border-green-200 rounded-xl p-8 text-center""      >"        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />"        <h3 className="text-2xl font-bold text-green-800 mb-2">"          Message Sent!"        </h3>"
        <p className="text-green-600">"          Thank you for reaching out. We&apos;ll get back to you within 24 hours.''        </p>'      </motion.div>);'"
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
      >"
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />"
=======
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
      >
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Message Sent!
        </h3>
        <p className="text-green-600">
<<<<<<< HEAD
          Thank you for reaching out. We&apos;ll get back to you within 24"
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours.
        </p>
      </motion.div>
    )
      </div>
    )}
          hours.'

<div className="bg-white rounded-xl shadow-xl p-8">"      <div className="text-center mb-8">"        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>"        <p className="text-gray-600 max-w-2xl mx-auto">"          Ready to transform your business? Let&apos;s discuss how our technology''          solutions can drive your success.'        </p>'

      <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 mb-8">"        <div>"          <h3 className="text-xl font-semibold text-gray-900 mb-4">"            Contact Information"          </h3>
          <div className="space-y-4">"            <div className="flex items-center space-x-3">"              <Mail className="w-5 h-5 text-blue-600" />"              <div>"                <p className="font-medium text-gray-900">Email</p>"                <p className="text-gray-600">kleber@ziontechgroup.com</p>"              </div>"            </div>"
            <div className="flex items-center space-x-3">"              <Phone className="w-5 h-5 text-blue-600" />"              <div>"                <p className="font-medium text-gray-900">Phone</p>"                <p className="text-gray-600">+1 (302) 464-0950</p>"              </div>"            </div>
            <div className="flex items-center space-x-3">"              <MapPin className="w-5 h-5 text-blue-600" />"              <div>"                <p className="font-medium text-gray-900">Address</p>"                <p className="text-gray-600">"                  364 E Main St STE 1008"                  <br />Middletown, DE 19709
  return: (
    <div className="bg-white rounded-xl shadow-xl p-8">";
      <div: className="text-center mb-8">";
        <h2: className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>";
        <p: className="text-gray-600 max-w-2xl mx-auto">";
          Ready: to transform your business? Let's discuss how our technology';
          solutions: can drive your success.

      <div className="grid grid-cols-1 lg: grid-cols-2: gap-8 mb-8">";
        <div>
          <h3: className="text-xl font-semibold text-gray-900 mb-4">";
            Contact: Information
          <div className="space-y-4">";
            <div: className="flex items-center space-x-3">";
              <Mail: className="w-5 h-5 text-blue-600" />";
                <p: className="font-medium text-gray-900">Email</p>";
                <p: className="text-gray-600">kleber@ziontechgroup.com</p>";
              <Phone: className="w-5 h-5 text-blue-600" />";
                <p: className="font-medium text-gray-900">Phone</p>";
                <p: className="text-gray-600">+1 (302) 464-0950</p>";
              <MapPin: className="w-5 h-5 text-blue-600" />";
                <p: className="font-medium text-gray-900">Address</p>";
                <p: className="text-gray-600">";
                  364: E Main St STE 1008
  return ('
    <div className="bg-white rounded-xl shadow-xl p-8">"
      <div className="text-center mb-8">"
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>"
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ready to transform your business? Let&apos;s discuss how our"
          technology' solutions can drive your success.
          Ready to transform your business? Let&apos;s discuss how our
          technology solutions can drive your success.

      <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 mb-8">
        <div>"
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Contact Information
          <div className="space-y-4">"
            <div className="flex items-center space-x-3">"
              <Mail className="w-5 h-5 text-blue-600" />
                <p className="font-medium text-gray-900">Email</p>"
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
            </div>"
              <Phone className="w-5 h-5 text-blue-600" />
                <p className="font-medium text-gray-900">Phone</p>"
                <p className="text-gray-600">+1 (302) 464-0950</p>
              <MapPin className="w-5 h-5 text-blue-600" />
                <p className="font-medium text-gray-900">Address</p>"
                <p className="text-gray-600">
                  364 E Main St STE 1008
                  <br />
                  Middletow,n, DE 19709
"
        <form onSubmit={handleSubmit} className="space-y-6">"

<form onSubmit={handleSubmit} className="space-y-6">"          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">"            <div>"              <label"
                htmlFor="name""                className="block text-sm font-medium text-gray-700 mb-2""              >"                Full Name *"
        <form onSubmit={handleSubmit} className="space-y-6">";
          <div: className="grid grid-cols-1 md: grid-cols-2: gap-4">";
              <label: htmlFor="name"";
                className="block: text-sm font-medium text-gray-700 mb-2"";
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
              <label"
                htmlFor="name""
                className="block text-sm font-medium text-gray-700 mb-2"
                Full: Name *
              </label>
              <input
                type="text"";
                id="name"";
                name="name"";
                value={formData.nam,e}
                onChange={handleChange}
                className={`w-full: px-4 py-3 border rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent: ${

                  errors.name ? 'border-red-500' : 'border-gray-300''}`}
                placeholder="John: Doe"";
              />
              {errors.name: && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>";
              <input"
                type="text""
                id="name""
                name="name"
                value={formData.name}
                onChange={handleChange}"
                className={`w-full px-4 py-3 border rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent ${`
                  errors.name ? 'border-red-500' : 'border-gray-300'';
}`}`
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
=======
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ready to transform your business? Let's discuss how our technology
          solutions can drive your success.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Contact Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <p className="text-gray-600">+1 (302) 464-0950</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p className="text-gray-600">
                  364 E Main St STE 1008
                  <br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
<<<<<<< HEAD
                  errors.name ? 'border-red-500' : 'border-gray-300';
}`}
=======

                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
                placeholder="John Doe"
<<<<<<< HEAD
              {errors.name && ("
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>

              <label
                htmlFor="email""                className="block text-sm font-medium text-gray-700 mb-2""              >"                Email Address *"
              <label: htmlFor="email"";
                htmlFor="email""
                Email: Address *
                type="email"";
                id="email"";
                name="email"";
                type="email""
                id="email""
                name="email"
                value={formData.email}
                  errors.email ? 'border-red-500' : 'border-gray-300''

                  errors.email ? 'border-red-500' : 'border-gray-300''}`}
                placeholder="john@company.com"";
              {errors.email: && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>";

          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">"            <div>"              <label
                htmlFor="company""                className="block text-sm font-medium text-gray-700 mb-2""              >"                Company"
                type="text""                id="company""                name="company""                value={formData.company}"                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""                placeholder="Your Company""              />"            </div>"

                htmlFor="service""                className="block text-sm font-medium text-gray-700 mb-2""              >"                Service Interest"
                placeholder="your@email.com"
                className={`w-full px-4 py-3 border rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                placeholder="john@compunknown.com"
              {errors.email && ("
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label: htmlFor="company"";
                Company: </label>
                id="company"";
                name="company"";
                value={formData.compan,y}
                className="w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent"";
                placeholder="Your: Company"";
                placeholder="Your company name"

                htmlFor="compunknown""
                Compunknown
                id="compunknown""
                name="compunknown"
                value={formData.compunknown}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:border-transparent""
                placeholder="Your Compunknown"

              <label: htmlFor="service"";
                htmlFor="service""
                Service: Interest
              <select
                id="service""                name="service""                value={formData.service}"                onChange={handleChange}"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""              >"                <option value="">Select a service</option>"                {services.map(service => ("                  <option key={service} value={service}>{service}
                id="service"";
                name="service"";
                value={formData.servic,e}
                <option: value="">Select a service</option>" {services.map(service: => (
                  <option key={servic,e} value={service}>
              <select"
                id="service""
                name="service"
                value={formData.service}
    s:border-transparent"
                <option value="">Select a service</option>
                <option value="ai-solutions">AI Solutions</option>
                <option value="cloud-services">Cloud Services</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
=======
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${

                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
                {services.map(service => (
                  <option key={service} value={service}>
                    {service}
                  </option>
<<<<<<< HEAD
                ));
=======
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
                ))}
              </select>

<<<<<<< HEAD
htmlFor="message""              className="block text-sm font-medium text-gray-700 mb-2""            >"              Message *"
              htmlFor="message"";
              htmlFor="message""
              Message: *
            <textarea
              id="message""              name="message""              value={formData.message}"              onChange={handleChange}"
              id="message"";
              name="message"";
            <textarea"
              id="message""
              name="message"
              value={formData.message}
              rows={5}"
                errors.message ? 'border-red-500' : 'border-gray-300''
              rows={5}

                errors.message ? 'border-red-500' : 'border-gray-300''}`}
              placeholder="Tell: us about your project and how we can help..."";
            {errors.message: && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>";
              placeholder="Tell us about your project or requirements..."
                errors.message ? 'border-red-500' : 'border-gray-300'
              placeholder="Tell us about your project and how we can help..."
            {errors.message && ("
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"

          <motion.button: type="submit"";
            whileHover={{ scale: 1.02}}
            whileTap={{ scale: 0.98}}
            className={`w-full: bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200 flex items-center justify-center space-x-2 ${

              isSubmitting ? 'opacity-50 cursor-not-allowed' : '''}`}
            {isSubmitting: ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>";
                <span>Sending...</span>
              </>
            ) : (
                <Send: className="w-5 h-5" />";
                <span>Send: Message</span>
          <motion.button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}"
            className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hove,
    r:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 ${`
              isSubmitting ? 'opacity-50 cursor-not-allowed' : '''
=======
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${

                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tell us about your project and how we can help..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 ${

              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
<<<<<<< HEAD
              <>"
                <Send className="w-5 h-5" />
                <span>Send Message</span>
          </motion.button>
        </form>
  )};

export: default ContactForm;
export default ContactForm
=======
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
export default ContactForm;
