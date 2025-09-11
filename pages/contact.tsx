
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD


import React from "react";
import Layout from "../components/Layout";
import React from 'react';




import React from 'react';

import Layout from '../components/Layout';

import Layout from '../components/Layout';

import Head from 'next/head';
import { useState } from 'react';
import { ContactInfo } from '../types';



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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  const services = [
    'AI Services & Solutions',
    'IT Infrastructure & Cloud',
    'Micro SAAS Development',
    'Digital Transformation',
    'Cybersecurity Solutions',
    'Data Analytics & Insights'
  ];

  return (

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for your technology needs.

import React from 'react';
    return this.props.children;
  }
}
import React from "react";
import Layout from "../components/Layout";
import React from 'react';
import React from "react";
import Layout from "../components/Layout";
import React from 'react';
ursor/integrate-build-improve-and-re-verify-8f7d
import Layout from '../components/Layout';
import Layout from '../components/Layout';
origin/automation-improvements-final

import Head from 'next/head';
import { useState } from 'react';
import { ContactInfo } from '../types';
=======
    
    return this.props.children;
  }
}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import React from "react";
import Layout from "../components/Layout";
=======
import React from 'react';

=======



=======
import Head from 'next/head';
import { useState } from 'react';
import { ContactInfo } from '../types';



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };
  const services = [
    'AI Automation Platform',
    'Cloud Infrastructure',
    'Micro SaaS Development',
    'Cybersecurity Solutions',
    'Data Analytics & BI',
    'Blockchain Solutions',
    'Other'
  ];
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
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  return (
<<<<<<< HEAD
    <Layout
      title="Contact Us - Zion Tech Group"
      description="Get in touch with Zion Tech Group for your technology needs. Contact us for AI services, IT solutions, and more."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for your technology needs.
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import React from "react";
import Layout from "../components/Layout";
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
origin/automation-improvements-final
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for your technology needs.
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
origin/main

import React from "react";
import Layout from "../components/Layout";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for advanced IT solutions and AI services." />
      </Head>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-12">
        <main className="text-center max-w-2xl px-4">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Get in Touch</h1>
          <p className="text-xl text-gray-300 mb-8">
            Have a project in mind or a question for us? We'd love to hear from you.
          </p>
          <div className="card p-8 mb-8">
            <p className="text-lg text-gray-200 mb-4">
              You can reach us via email or phone, or fill out the form below.
            </p>
            <p className="text-lg font-semibold text-blue-400 mb-2">Email: info@ziontechgroup.com</p>
            <p className="text-lg font-semibold text-purple-400 mb-4">Phone: +1 (555) 123-4567</p>
            {/* A placeholder for a contact form could go here */}
            <p className="text-gray-500 text-sm">
              (Contact form functionality would be implemented here)
            </p>
          </div>
          <Link href="/services" className="btn-secondary">
            Explore Our Services
          </Link>
        </main>
      </div>
    </>
  );
<<<<<<< HEAD
}
}
}
=======

=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import Head from 'next/head';
const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta
          name='description'
          content='Get in touch with Zion Tech Group for innovative micro SaaS, AI services, and IT solutions. Contact us for a free consultation.'
        />
        <meta
          name='keywords'
          content='contact, consultation, micro SaaS, AI services, IT solutions, Zion Tech Group'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='canonical' href='http: s://ziontechgroup.com/contact' />
      </Head>
      <ErrorBoundary level='page'>
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>
          <div className='container mx-auto px-4 py-16'>
            <div className='max-w-4xl mx-auto'>
              <h1 className='text-4xl: md:text-5xl font-bold text-center mb-8'>
                Contact Us
              </h1>
              <p className='text-xl text-slate-300 text-center mb-12'>
                Ready to transform your business? Get in touch with our experts.
              </p>
              <div className='grid: md:grid-cols-2 gap-12'>
                <div>
                  <h2 className='text-2xl font-bold mb-6'>Get In Touch</h2>
                  <div className='space-y-6'>
                    <div>
                      <h3 className='text-lg font-semibold text-blue-400 mb-2'>
                        Phone
                      </h3>
                      <a
                        href='te: l:+13024640950'
                        className='text-slate-300: hover:text-blue-400'
                      >
                        +1 302 464 0950
                      </a>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-blue-400 mb-2'>
                        Email
                      </h3>
                      <a
                        href='mailt: o:kleber@ziontechgroup.com'
                        className='text-slate-300: hover:text-blue-400'
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-blue-400 mb-2'>
                        Address
                      </h3>
                      <p className='text-slate-300'>
                        364 E Main St STE 1008
                        <br />
                        Middletown, DE 19709
                      </p>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-blue-400 mb-2'>
                        Website
                      </h3>
                      <a
                        href='http: s://ziontechgroup.com'
                        className='text-slate-300: hover:text-blue-400'
                      >
                        http: s://ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className='text-2xl font-bold mb-6'>Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

}


            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
            </div>
          </div>
        </div>
</div>
    </>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      description="Get in touch with Zion Tech Group for your technology needs. Contact us for AI services, IT solutions, and more.">;
      <div className="min-h-screen bg-gray-50 py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h1 className="text-4xl font-bold text-gray-900 mb-4">;
              Contact Us;
            </h1>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Get in touch with our team for your technology needs.;
            </p>;
          </div>;
          <div className="text-center">;
            <p className="text-gray-600">Contact page is under construction.</p>;
          </div>;
        </div>;
      </div>;
    </Layout>;
<<<<<<< HEAD
=======

  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </>

  );


<<<<<<< HEAD
  );
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
import React from './react';
import Layout from "../components / Layout";
;
export default /**
 * Contact - Function description
 */
function Contact() {
  return (
    <Layout;
      title="Contact Us - Zion Tech Group";
      description="Get in touch with Zion Tech Group for your technology needs. Contact us for AI services, IT solutions, and more.";
    >;
      <div className="min - h-screen bg - gray - 50 py - 20">;
        <div className="container mx - auto px - 4">;
          <div className="text - center mb - 12">;
            <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">;
              Contact Us;
            </h1>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
              Get in touch with our team for your technology needs.;
            </p>;
          </div>;
          <div className="text - center">;
            <p className="text - gray - 600">Contact page is under construction.</p>;
          </div>;
        </div>;
      </div>;
    </Layout>);
}
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI automation, cloud infrastructure, micro SaaS development, and other technology solutions." />
        <meta name="keywords" content="contact, consultation, AI services, cloud computing, micro SaaS, technology solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>
      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Ready to transform your business? Let's talk.
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Get in touch with our team to discuss your project requirements and discover
                how our technology solutions can accelerate your business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Details */}
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your last name"
                        />
                      </div>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
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
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Can Help</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive technology solutions are designed to drive innovation and growth.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
                  </div>
                  <p className="text-gray-600">
                    Expert solutions tailored to your business needs and objectives.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and explore how our technology solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="tel:+13024640950" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Link>
                <Link 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
