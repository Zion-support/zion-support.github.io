import React, { useState } from 'react';
import { Mail Phone MapPin Send CheckCircle AlertCircle } from "lucide-react";
;
interface FormData {;
  name: string,;
  email: string,;
  company: string,;
  phone: string,;
  service: string,;
  message: string,;}
;
interface FormStatus {;
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string,;}
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',</FormData>
    message: ''</FormData>
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',</FormStatus>
    message: ''</FormStatus>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {</HTMLInputElement>
;</HTMLInputElement>
  const [formData, setFormData] = useState<FormData>({;
    name: '',;
    email: '',;
    company: '',;
    phone: '',;
    service: '',;
    message: '';}</FormData>
;</FormData>
  const [status, setStatus] = useState<FormStatus>({;
    type: 'idle',;
    message: '';}</FormStatus>
;</FormStatus>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;}
    const { name, value } = e.target;
    setFormData(prev => ({;
      ...prev,;
      [name]: value;}
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });
    try {
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      // Reset form;
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();}
    setStatus({ type: 'loading', message: 'Sending message...' });
;
    try {;
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 2000));
;
      setStatus({;
        type: 'success',;
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.';}
;
      // Reset form;
      setFormData({;
        name: '',;
        email: '',;
        company: '',;
        phone: '',;
        service: '',;
        message: '';}
      setStatus({;
        type: 'error',;</HTMLInputElement>
        message: 'Sorry, there was an error sending your message. Please try again.';}</HTMLInputElement>
              <input;
                type="text"
                id="name"
                name="name"
                valu, e={formDat, a.nam, e}
                onChang, e={handleChang, e}
                required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
              />

  return (
    <div className="max-w-4xl mx-auto p-6"></div>
      <div className="text-center mb-8"></div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600">Ready to transform your business? Let's discuss your project.</p>

      <form, onSubmit={handleSubmi, t} classNam, e="spac, e-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
          <div></div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *</label>
            <input;
              type="text"
              id="name"
              name="name"
              valu, e={formDat, a.nam, e}
              onChang, e={handleChang, e}
              required;
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Your full name"
            />

            <div></div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *</label>
              <input;
                type="email"
                id="email"
                name="email"
                valu, e={formDat, a.emai, l}
                onChang, e={handleChang, e}
                required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@company.com"
              />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            <div></div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company;</label>
              <input;
                type="text"
                id="company"
                name="company"
                valu, e={formDat, a.compan, y}
                onChang, e={handleChang, e}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your company name"
              />
            <div></div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number;</label>
              <input;
                type="tel"
                id="phone"
                name="phone"
                valu, e={formDat, a.phon, e}
                onChang, e={handleChang, e}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="+1 (555) 123-4567"
              />
          <div></div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interest;</label>
            <select;
              id="service"
              name="service"
              valu, e={formDat, a.servic, e}
              onChang, e={handleChang, e}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"</select>
              <option value="">Select a service</option>
                <option, key={servic, e} valu, e={servic, e}>
              ))}</option>
          <div></div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *</label>
            <textarea;
              id="message"
              name="message"
              valu, e={formDat, a.messag, e}
              onChang, e={handleChang, e}
              required;
              row, s={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Tell us about your project..."
            />

            <div className={`flex items-center space-x-2 p-4 rounded-lg ${
              status.type === 'success' ? 'bg-green-50 text-green-800' :
              status.type === 'error' ? 'bg-red-50 text-red-800' :
              'bg-blue-50 text-blue-800'
                <CheckCircle className="h-5 w-5" />
              ) : status.type === 'error' ? (
                <AlertCircle className="h-5 w-5" />
              ) : (
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
;
  const services = [;
    'AI Solutions',;
    'Web Development',;
    'Mobile App Development',;
    'Cloud Services',;
    'Data Analytics',;
    'Cybersecurity',;
    'IT Consulting',;
    'Other';
  ];
;
              <input;
                type="text";
                id="name";
                name="name";
                valu, e={formDat, a.nam, e}
                onChang, e={handleChang, e}
                required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
                placeholder="Your full name";
              />;
            <div></div>;
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">;</label>
                Email Address *;</label>
              <input;
                type="email";
                id="email";
                name="email";
                valu, e={formDat, a.emai, l}
                onChang, e={handleChang, e}
                required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
                placeholder="your.email@company.com";
              />;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>;
            <div></div>;
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">;</label>
                Company;</label>
              <input;
                type="text";
                id="company";
                name="company";
                valu, e={formDat, a.compan, y}
                onChang, e={handleChang, e}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
                placeholder="Your company name";
              />;
            <div></div>;
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">;</label>
                Phone Number;</label>
              <input;
                type="tel";
                id="phone";
                name="phone";
                valu, e={formDat, a.phon, e}
                onChang, e={handleChang, e}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
                placeholder="+1 (555) 123-4567";
              />;
          <div></div>;
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">;</label>
              Service Interest;</label>
            <select;
              id="service";
              name="service";
              valu, e={formDat, a.servic, e}
              onChang, e={handleChang, e}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
              ) : (;
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>;
              )}
              <span, className="tex, t-sm, font-mediu, m">{statu, s.messag, e}</spa, n>;
          )}
          <button;
            type="submit"
            disable, d={statu, s.typ, e === 'loadin, g'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
              <React.Fragment></React.Fragment>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
            ) : (
              <React.Fragment></React.Fragment>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
            )}
        <div className="mt-8 pt-8 border-t border-gray-200"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"></div>
            <div className="flex flex-col items-center space-y-2"></div>
              <div className="p-3 bg-blue-100 rounded-full"></div>
                <Phone className="h-6 w-6 text-blue-600" />
              <div></div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
            <div className="flex flex-col items-center space-y-2"></div>
              <div className="p-3 bg-green-100 rounded-full"></div>
                <Mail className="h-6 w-6 text-green-600" />
              <div></div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">hello@ziontechgroup.com</p>
            <div className="flex flex-col items-center space-y-2"></div>
              <div className="p-3 bg-purple-100 rounded-full"></div>
                <MapPin className="h-6 w-6 text-purple-600" />
              <div></div>
                <p className="font-semibold text-gray-900">Office</p>
                <p className="text-sm text-gray-600">New York, NY</p>
  );
export default ContactForm;
;
          <button;
            type="submit";
            disable, d={statu, s.typ, e === 'loadin, g'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2";
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" /></div>;
                <span>Sending...</span>;
            ) : (;
                <Send className="h-5 w-5" />;
                <span>Send Message</span>;
            )}
        <div className="mt-8 pt-8 border-t border-gray-200"></div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"></div>;
            <div className="flex flex-col items-center space-y-2"></div>;
              <div className="p-3 bg-blue-100 rounded-full"></div>;
                <Phone className="h-6 w-6 text-blue-600" />;
              <div></div>;
                <p className="font-semibold text-gray-900">Phone</p>;
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>;
            <div className="flex flex-col items-center space-y-2"></div>;
              <div className="p-3 bg-green-100 rounded-full"></div>;
                <Mail className="h-6 w-6 text-green-600" />;
              <div></div>;
                <p className="font-semibold text-gray-900">Email</p>;
                <p className="text-sm text-gray-600">hello@ziontechgroup.com</p>;
            <div className="flex flex-col items-center space-y-2"></div>;
              <div className="p-3 bg-purple-100 rounded-full"></div>;
                <MapPin className="h-6 w-6 text-purple-600" />;
              <div></div>;
                <p className="font-semibold text-gray-900">Office</p>;
                <p className="text-sm text-gray-600">New York, NY</p>;
  );
;
export default ContactForm;
