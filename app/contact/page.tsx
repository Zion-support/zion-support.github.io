'use client';
import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '';)
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value;)
}););)
}, []);
const handleSubmit = useCallback(async (e: React.FormEvent) => {
=======
    message: '']
    });;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {
>>>>>>> main
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value]
    });)]
    }, []);

=======
  const handleSubmit = useCallback (async (e: React.FormEvent) => {
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      /
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get a free consultation, quote, or support. Call +1-302-464-0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact us, AI consulting, IT support, free consultation, get quote, technical support" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
            Get in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"></span>
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
>>>>>>> main
            Ready to transform your business? Let's discuss your project and explore 
            how our AI and IT solutions can help you achieve your goals.
          <
        <
      <


              <form onSubmit={handleSubmit} className="space-y-6"></form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Full Name *
                    <
                    <input
                      type="text"
                      id="name"
                      name="name"
                      Email Address *
                    <
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value = { formData.email };
                      onChange = { handleChange };

                      Company Name
                    <
                    <input
                      type="text"
                      id="company"
                      name="company"
                      Phone Number
                    <
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value = { formData.phone };
                      onChange = { handleChange };
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent"
                    
                  <
                <

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Service Interest
                  <
                  <select
                    id="service"
                    name="service"

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Message *
                  <
                  <textarea
                    id="message"
                    name="message"
                    value = { formData.message };
                    onChange = { handleChange };
                    rows = { 5 };

                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent"
                    placeholder="Tell us about your project..."
                  
                <

                <button
                  type="submit"
                  We're here to help you succeed. Reach out to us through any of the channels below, 
                  and we'll get back to you within 24 hours.
                <
              <

};

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
export default ContactPage;
}