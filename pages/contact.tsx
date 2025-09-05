import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  ArrowRight,
  Building,
  Users,
  Globe,
  MessageSquare
} from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM EST"
};

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us for immediate assistance",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us an email anytime",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`
  },
  {
    icon: MapPin,
    title: "Address",
    description: "Visit our office",
    value: contactInfo.address,
    href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "When we're available",
    value: contactInfo.hours,
    href: "#"
  }
];

const services = [
  "AI & Machine Learning",
  "IT Infrastructure & Cloud",
  "Micro SaaS Solutions",
  "Cybersecurity",
  "Digital Transformation",
  "Custom Software Development"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <Layout title="Thank You - Zion Tech Group" description="Thank you for contacting Zion Tech Group. We'll get back to you soon.">
        <div className="min-h-screen bg-white flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md mx-auto px-4"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-gray-600 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <Link 
              href="/" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Contact Us - Zion Tech Group" description="Get in touch with Zion Tech Group. We're here to help with your technology needs. Call us at +1 302 464 0950 or email kleber@ziontechgroup.com">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get in <span className="text-blue-300">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Ready to transform your business? Let's discuss how our technology solutions can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the most convenient way to reach us. We're here to help with all your technology needs.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <a 
                    href={method.href}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {method.value}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </motion.div>
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Us?</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                        <p className="text-gray-600">200+ certified professionals with deep industry expertise</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Proven Track Record</h4>
                        <p className="text-gray-600">3,500+ successful projects across various industries</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
                        <p className="text-gray-600">Round-the-clock support to ensure your success</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Cutting-Edge Technology</h4>
                        <p className="text-gray-600">Latest tools and technologies to deliver exceptional results</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
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
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project or requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}