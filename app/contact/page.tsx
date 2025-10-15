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
      // await apiService.submitContactForm(data);
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
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
        <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
        
        {/* Quantum Particles */}
        <div className="quantum-particles">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="quantum-particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
        
        {/* Scan Lines */}
        <div className="scan-lines"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 holographic neon-text">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Ready to transform your business with our AI and IT solutions? Get in touch with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                📞 Call +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-300 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-border-animated">
                ✉️ Email Us
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="holographic-card rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center neon-glow">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-cyan-300">kleber@ziontechgroup.com</p>
                    <p className="text-sm text-gray-400">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center neon-glow">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-green-300">+1 (302) 464-0950</p>
                    <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center neon-glow">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Address</h3>
                    <p className="text-purple-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    <p className="text-sm text-gray-400">United States</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center neon-glow">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Website</h3>
                    <p className="text-orange-300">https://ziontechgroup.com</p>
                    <p className="text-sm text-gray-400">Visit our online platform</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Zion Tech Group?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Expert AI and IT professionals
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Proven track record of success
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom solutions for your business
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 support and monitoring
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="holographic-card rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 neon-text">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 bg-slate-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 ${
                      errors.name ? 'border-red-500' : 'border-cyan-500/30'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 bg-slate-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 ${
                      errors.email ? 'border-red-500' : 'border-cyan-500/30'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 bg-slate-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 ${
                      errors.message ? 'border-red-500' : 'border-cyan-500/30'
                    }`}
                    placeholder="Tell us about your project or how we can help..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cyber-button py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Services Overview */}
          <div className="holographic-card rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-cyan-500/30 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 holographic-card">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 neon-text">AI Services</h3>
                <p className="text-gray-300 text-sm">Advanced AI solutions including chatbots, document processing, and predictive analytics</p>
              </div>
              <div className="text-center p-6 border border-cyan-500/30 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 holographic-card">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 neon-text">Cloud Infrastructure</h3>
                <p className="text-gray-300 text-sm">Scalable cloud solutions and infrastructure management for modern businesses</p>
              </div>
              <div className="text-center p-6 border border-cyan-500/30 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 holographic-card">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 neon-text">IT Solutions</h3>
                <p className="text-gray-300 text-sm">Comprehensive technology services including development, security, and support</p>
              </div>
              <div className="text-center p-6 border border-cyan-500/30 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 holographic-card">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 neon-text">Micro SaaS</h3>
                <p className="text-gray-300 text-sm">Innovative micro software solutions designed to solve specific business challenges</p>
              </div>
              <div className="text-center p-6 border border-cyan-500/30 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 holographic-card">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 neon-text">Cybersecurity</h3>
                <p className="text-gray-300 text-sm">Advanced security solutions to protect your digital assets and infrastructure</p>
              </div>
              <div className="text-center p-6 border border-cyan-500/30 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 holographic-card">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 neon-text">Data Analytics</h3>
                <p className="text-gray-300 text-sm">Transform your data into actionable insights with advanced analytics and visualization</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="holographic-card rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">How quickly can you start my project?</h3>
                <p className="text-gray-300">Most projects can begin within 1-2 weeks of contract signing, depending on complexity and current workload.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Do you offer ongoing support?</h3>
                <p className="text-gray-300">Yes, we provide comprehensive ongoing support and maintenance for all our solutions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Can you work with our existing systems?</h3>
                <p className="text-gray-300">Absolutely! We specialize in integrating with existing systems and can work with most technologies.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">What industries do you serve?</h3>
                <p className="text-gray-300">We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, and more.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Do you provide training for our team?</h3>
                <p className="text-gray-300">Yes, we offer comprehensive training programs to ensure your team can effectively use our solutions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">What is your pricing model?</h3>
                <p className="text-gray-300">We offer flexible pricing models including project-based, monthly subscriptions, and custom enterprise solutions.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="holographic-card rounded-2xl p-8 text-white text-center neon-border-animated">
            <h2 className="text-3xl font-bold mb-4 holographic neon-text">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how our AI and IT solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Your Project
              </a>
              <a href="/pricing" className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-border-animated">
                View Pricing
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;