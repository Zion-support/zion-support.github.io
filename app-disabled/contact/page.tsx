import React from 'react';
import { Helmet } from 'react-helmet-async';

import React, { useState, useCallback } from 'react;

import { Helmet } from 'react-helmet-async;

import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react;

import Navigation from '../components/Navigation;

import Footer from '../components/Footer;

;

const ContactPage: React.FC = () => {const [formData, setFormData] = useState({
    name: '',    email: ',
    company: ',
    phone: ',
    service: ',
    message: ';)
})const [isSubmitting, setIsSubmitting] = useState(false);

const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(idle);

const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {;;

    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value;)
})))
}, []);

const handleSubmit = useCallback(async (e: React.FormEvent) => {    setFormData(prev => ({;
      ...prev,
      [e.target.name]: e.target.value]
    });)]
    }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {;
  const handleSubmit = useCallback (async (e: React.FormEvent) => {;
    e.preventDefault();    setIsSubmitting(true);

    try {
      /
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus(success);

      setFormData({
        name: ',
        email: ',
        company: ',
        phone: ',
        service: ',
message: ']
    });]
    } catch (error) {
      setSubmitStatus('error)]
    } finally {
      setIsSubmitting(false)]}
    }

        message: ')
      });

    } catch (error) {
      setSubmitStatus('error);

    } finally {
      setIsSubmitting(false);

    }

  }, []);

  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
      
        <title>Contact Us - Zion Tech Group | Get in Touch<
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get a free consultation, quote, or support. Call +1-302-464-0950 or email kleber@ziontechgroup.com 
        <meta name="keywords" content="contact us, AI consulting, IT support, free consultation, get quote, technical support 
      <

      <Navigation 
      
      {/* Hero Section *
      <section className="relative py-20 px-4 overflow-hidden>)
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse 
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s }}

        <div className="relative max-w-7xl mx-auto text-center>
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight>
            Get in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent>

            <
          <
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed>
  }, []);
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: 'Call Us',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email Us',
      details: 'kleber@ziontechgroup.com',
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      title: 'Visit Us',
      details: '364 E Main St STE 1008, Middletown, DE 19709',
      description: 'Come say hello at our office'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: 'Business Hours',
      details: 'Mon - Fri: 8:00 AM - 6:00 PM',
      description: 'EST timezone'
    }
  ]

  const features = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: 'Free consultation within 24 hours'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: 'Expert team with 10+ years experience'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: '24/7 support and maintenance'
    }
  ]

  const services = [
    'AI Services',
    'IT Services',
    'Cloud Services',
    'Micro SAAS',
    'Digital Transformation',
    '5G Implementation'
  ]

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Contact Zion Tech Group for advanced AI and IT solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact Us
      </Helmet>
      
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for advanced AI and IT solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our contact page is under development. Please check back later for updates.
            </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="it-services">IT Services</option>
                      <option value="cloud-migration">Cloud Migration</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  {status.type && (
                    <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'}`}>
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Why Choose Us */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        {feature.icon}
                      </div>
                      <p className="text-gray-300">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-6">
                    Schedule a free consultation with our experts to discuss your project requirements and get a customized solution.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    Learn More About Us
                    <MessageCircle className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
                <)
              )}

              <form onSubmit={handleSubmit} className="space-y-6></form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6></div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2></label>
                      Full Name *
                    <
                    <input
                      type="text
                      id="name
                      name="name
                      value = { formData.name };

                      onChange = { handleChange };

                      className=w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent
                    
                  <
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2>
                      Email Address *                    <
                    <input
                      type="email
                      id="email
                      name="email
                      value = { formData.email };

                      onChange = { handleChange };

                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focus:border-transparent
                    
                  <
                <

                <div className=grid grid-cols-1 m,
    d:grid-cols-2 gap-6>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2>
                      Company Name                    <
                    <input
                      type="text
                      id="company
                      name="company
                      value = { formData.company };

                      onChange = { handleChange };

                      className=w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent
                    
                  <
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2>
                      Phone Number                    <
                    <input
                      type="tel
                      id="phone
                      name="phone
                      value = { formData.phone };

                      onChange = { handleChange };

                      className=w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent
                    
                  <
                <

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2></label>
                    Service Interest
                  <
                  <select
                    id="service
                    name="service
                    value = { formData.service };

                    onChange = { handleChange };

                    className=w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent
                  >
                    <option value=">Select a service<
                    <option value="ai-solutions>AI Solutions<
                    <option value="it-services>IT Services<
                    <option value="cloud-migration>Cloud Migration<
                    <option value="cybersecurity>Cybersecurity<
                    <option value="digital-transformation>Digital Transformation<
                  <
                <
                  and well get back to you within 24 hours.

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                <
              <

              <div className="space-y-6>
                <div className="flex items-start space-x-4>
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0>
                    
                    <h3 className="text-lg font-semibold text-white mb-1>Phone<
                    <p className="text-gray-300>+1-302-464-0950<
                    <p className="text-sm text-gray-400>Mon-Fri 9AM-6PM EST<
                  <
                <

                <div className="flex items-start space-x-4>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0>
                    
                    <h3 className="text-lg font-semibold text-white mb-1>Email<
                    <p className="text-gray-300>kleber@ziontechgroup.com<
                    <p className="text-sm text-gray-400">Well respond within 24 hours<
                  <
                <

                <div className="flex items-start space-x-4>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0>
                    
                    <h3 className="text-lg font-semibold text-white mb-1>Office<
                    <p className="text-gray-300>364 E Main St STE 1008<
                    <p className="text-gray-300>Middletown, DE 19709<
                  <
                <

                <div className="flex items-start space-x-4>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0>
                    
                    <h3 className="text-lg font-semibold text-white mb-1>Business Hours<
                    <p className="text-gray-300>Monday - Friday: 9:00 AM - 6:00 PM<
                    <p className="text-gray-300>Saturday: 10:00 AM - 4:00 PM<
                    <p className="text-gray-300>Sunda,
    y: Closed<
                  <
                <
              <
            <
          <
        <
      <

      <Footer 
    <
  );

)]
    };

};

export default ContactPage;}
  );
};

export default ContactPage;
