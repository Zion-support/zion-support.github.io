import React, { memo } from 'react';
import SEOHead from '../components/SEOHead';
import { useForm } from '../hooks/useForm';

const ContactPage: React.FC = memo(() => {
  const {
    data: formData,
    isSubmitting,
    submitStatus,
    errors,
    handleInputChange,
    handleSubmit,
  } = useForm({
    initialData: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: async (data) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your backend
      if (process.env.NODE_ENV === 'development') {
        console.log('Form submitted:', data);
      }
    },
    validate: (data) => {
      const errors: Record<string, string> = {};
      if (!data.name.trim()) errors.name = 'Name is required';
      if (!data.email.trim()) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
      if (!data.message.trim()) errors.message = 'Message is required';
      return errors;
    },
  });

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Zion Tech Group for your AI and IT solution needs. We're here to help."
        canonicalUrl="https://ziontechgroup.com/contact"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent holographic">
                  Contact Us
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Ready to transform your business with our AI and IT solutions? Get in touch with our expert team today.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="text-3xl mb-2">📞</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-purple-400 font-medium">+1 (302) 464-0950</p>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="text-3xl mb-2">✉️</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-pink-500 transition-all duration-300">
                  <div className="text-3xl mb-2">📍</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-pink-400 font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="holographic-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <p className="text-purple-400 font-medium text-lg">+1 (302) 464-0950</p>
                    <p className="text-gray-400 text-sm">Available 24/7 for urgent matters</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-cyan-400 font-medium text-lg">kleber@ziontechgroup.com</p>
                    <p className="text-gray-400 text-sm">Response within 2 hours during business hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                    <p className="text-pink-400 font-medium text-lg">364 E Main St STE 1008</p>
                    <p className="text-pink-400 font-medium text-lg">Middletown DE 19709</p>
                    <p className="text-gray-400 text-sm">United States</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                    <p className="text-green-400 font-medium text-lg">https://ziontechgroup.com</p>
                    <p className="text-gray-400 text-sm">Visit our website for more information</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="holographic-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400">Thank you for your message! We'll get back to you within 2 hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 ${
                      errors.name ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 ${
                      errors.email ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400 resize-none ${
                      errors.message ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="Tell us about your project, requirements, or how we can help transform your business..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cyber-button py-4 px-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;