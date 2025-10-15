<<<<<<< HEAD
import SEOHead from '../components/SEOHead';";";";

const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead: title =" Contact Page - Zion Tech Group"";";
        description="Zion Tech Group  Contact Page service page"";";
      />
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4"> Contact Page</h1>";";
          <p: className ="text-gray-300">Coming soon...</p>";";
=======
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Call us for immediate assistance',
      action: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime',
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit our headquarters',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: 'We\'re here to help',
      action: null
    }
  ];

  const services = [
    'AI Solutions',
    'Micro SAAS Development',
    'IT Services',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Mobile Development',
    'Web Development',
    'Data Analytics',
    'Custom Software',
    'Consulting'
  ];

  const budgetRanges = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    '$500K+',
    'Not sure yet'
  ];

  return (
    <>
      <SEOHead
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI solutions, IT services, and digital transformation consulting."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and how we can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-400 text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
                <p className="text-gray-300 text-lg mb-8">
                  We're here to help you succeed. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                      <p className="text-gray-300 mb-1">{method.details}</p>
                      <p className="text-sm text-gray-400">{method.description}</p>
                      {method.action && (
                        <a 
                          href={method.action} 
                          className="text-blue-400 hover:text-blue-300 text-sm"
                        >
                          {method.title === 'Phone' ? 'Call now' : method.title === 'Email' ? 'Send email' : 'View on map'}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-604b
        </div>
      </div>
    </>
  );
};

export default ContactPage;