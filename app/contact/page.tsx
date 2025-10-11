import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });
    
    // Simulate API call
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      title: 'Email Us',
      details: 'contact@ziontechgroup.com',
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-600" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-600" />,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Remote consultations available'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: 'Business Hours',
      details: '24/7 Support',
      description: 'Always here to help'
    }
  ];

  const services = [
    'AI Services',
    'IT Services',
    'Cloud Services',
    'Micro SAAS',
    '5G Implementation',
    'Digital Transformation',
    'Business Intelligence',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, and project inquiries." />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Get in <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
                Ready to transform your business? Let's discuss how our AI and IT solutions can help you achieve your goals.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {info.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{info.title}</h3>
                  </div>
                  <p className="text-white font-medium mb-1">{info.details}</p>
                  <p className="text-gray-300 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send us a Message</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>
            
            <ContactForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Quick answers to common questions about our services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can you start my project?</h3>
                  <p className="text-gray-600">Most projects can begin within 1-2 weeks of contract signing. We'll provide a detailed timeline during our initial consultation.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer ongoing support?</h3>
                  <p className="text-gray-600">Yes, we provide 24/7 support for all our services. Our support packages include monitoring, maintenance, and technical assistance.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What technologies do you work with?</h3>
                  <p className="text-gray-600">We work with a wide range of technologies including AI/ML, cloud platforms, mobile development, web technologies, and enterprise systems.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you work with small businesses?</h3>
                  <p className="text-gray-600">Absolutely! We have solutions and pricing plans designed for businesses of all sizes, from startups to enterprise organizations.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Can you integrate with our existing systems?</h3>
                  <p className="text-gray-600">Yes, we specialize in seamless integration with existing systems. We'll assess your current infrastructure and ensure smooth integration.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included in a consultation?</h3>
                  <p className="text-gray-600">Our free consultation includes a thorough assessment of your needs, technology recommendations, project timeline, and detailed pricing information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Get Started?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                  Don't wait to transform your business. Contact us today and let's discuss your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}