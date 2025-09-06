'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,;
} from 'lucide-react';
<<<<<<< HEAD
=======
=======
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
<<<<<<< HEAD
    message: '',
=======
<<<<<<< HEAD
<<<<<<< HEAD
    message: '',
=======
    message: ''
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
<<<<<<< HEAD
      ...formData,
      [e.target.name]: e.target.value,
    });  };
=======
<<<<<<< HEAD
      ...formData,
      [e.target.name]: e.target.value,
    });
=======
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData;
      [e.target.name]: e.target.value
    })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      ...formData;
      [e.target.name]: e.target.value
    })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
<<<<<<< HEAD
        message: '',
      });
=======
<<<<<<< HEAD
<<<<<<< HEAD
        message: '',
      });
=======
        message: ''
      })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } catch (error) {
      setSubmitStatus('error');
    } finally {
<<<<<<< HEAD
      setIsSubmitting(false);    }
  };

  const services = [
=======
<<<<<<< HEAD
      setIsSubmitting(false);
=======
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setIsSubmitting(false),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  const services = [
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    'AI Development',
    'Cloud Architecture',
    'Digital Transformation',
    'IoT Platforms',
    'Blockchain Solutions',
    'Data Analytics',
<<<<<<< HEAD
    'Other',  ];
=======
    'Other',
=======
    'AI DevelopmentCloud ArchitectureDigital TransformationIoT PlatformsBlockchain SolutionsData AnalyticsOther'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    'AI DevelopmentCloud ArchitectureDigital TransformationIoT PlatformsBlockchain SolutionsData AnalyticsOther'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@ziontechgroup.com',
<<<<<<< HEAD
      href: 'mailto:contact@ziontechgroup.com',
    },    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
=======
<<<<<<< HEAD
<<<<<<< HEAD
      href: 'mailto:contact@ziontechgroup.com',
    },
=======
      href: 'mailto:contact@ziontechgroup.com'
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      href: 'mailto:contact@ziontechgroup.com'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      href: 'tel:+15551234567',
    },    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Tech Street, Innovation City, IC 12345',
      href: '#',
    },
<<<<<<< HEAD
=======
=======
      href: 'tel:+15551234567'
    };
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Tech Street, Innovation City, IC 12345';
      href: '#'
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]' />
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]' />
      </div>

<<<<<<< HEAD
      <div className='relative container mx-auto px-4'>        {/* Section Header */}
=======
<<<<<<< HEAD
      <div className='relative container mx-auto px-4'>
=======
    href: '#'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="relative container mx-auto px-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {/* Section Header */}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className='text-center mb-16'
=======
<<<<<<< HEAD
<<<<<<< HEAD
          className='text-center mb-16'
=======
          className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        >
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Let&apos;s Start a
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Conversation
            </span>
          </h2>

          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Ready to transform your business? Get in touch with our team of
            experts to discuss how we can help you achieve your technology
            goals.
          </p>
        </motion.div>

<<<<<<< HEAD
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>          {/* Contact Information */}
=======
<<<<<<< HEAD
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>
=======
          className="text-center mb-16"
        >
          <h2 className="text-4xl md: text-6xl font-bold text-white mb-6">
            Let&apos,s Start a
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team of experts to discuss 
            how we can help you achieve your technology goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {/* Contact Information */}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Get in Touch
              </h3>
              <p className='text-gray-300 leading-relaxed mb-8'>
                Our team is here to help you navigate the complex world of
                technology and find the perfect solutions for your business
<<<<<<< HEAD
                needs. Reach out to us today.              </p>
            </div>

            {/* Contact Details */}
            <div className='space-y-6'>              {contactInfo.map((info, index) => (
=======
                needs. Reach out to us today.
=======
            className="space-y-8"
          >
            <div>
=======
            className="space-y-8"
          >
            <div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our team is here to help you navigate the complex world of technology and find 
                the perfect solutions for your business needs. Reach out to us today.
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </p>
            </div>

            {/* Contact Details */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='space-y-6'>
=======
            <div className="space-y-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="space-y-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {contactInfo.map((info, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                  className='flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  className='flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group'
=======
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
                    <info.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
<<<<<<< HEAD
                    <h4 className='text-lg font-semibold text-white mb-1'>
                      {info.title}
                    </h4>
                    <p className='text-gray-300 group-hover:text-blue-400 transition-colors duration-300'>                      {info.content}
=======
<<<<<<< HEAD
                    <h4 className='text-lg font-semibold text-white mb-1'>
                      {info.title}
                    </h4>
                    <p className='text-gray-300 group-hover:text-blue-400 transition-colors duration-300'>
=======
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      {info.content}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6'
            >
              <h4 className='text-lg font-semibold text-white mb-3'>
                Why Choose Zion Tech?
              </h4>
              <ul className='space-y-2 text-gray-300'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6'
=======
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <h4 className="text-lg font-semibold text-white mb-3">Why Choose Zion Tech?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Proven track record of successful projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 support and maintenance</span>
                </li>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span>Proven track record of successful projects</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span>24/7 support and maintenance</span>
                </li>
<<<<<<< HEAD
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />                  <span>Competitive pricing and flexible solutions</span>
=======
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <span>Competitive pricing and flexible solutions</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8'          >
=======
<<<<<<< HEAD
<<<<<<< HEAD
            className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8'
=======
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD
                className='text-center py-12'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='text-center py-12'
=======
                className="text-center py-12"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <CheckCircle className='w-20 h-20 text-green-400 mx-auto mb-6' />
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Message Sent Successfully!
                </h3>
                <p className='text-gray-300 mb-6'>
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
<<<<<<< HEAD
                  className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300'                >
=======
<<<<<<< HEAD
                  className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300'
=======
                className="text-center py-12"
              >
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  Send Another Message
                </button>
              </motion.div>
            ) : (
<<<<<<< HEAD
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
=======
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-white font-medium mb-2'
                    >
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
<<<<<<< HEAD
=======
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2" htmlFor="input-
                      Email Address *
                    ">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                      placeholder='Enter your full name'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-white font-medium mb-2'
                    >
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
<<<<<<< HEAD
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                      placeholder='Enter your email'                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
=======
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your email"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your email"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    />
                  </div>
                </div>

<<<<<<< HEAD
<<<<<<< HEAD
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
=======
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div>
                    <label
                      htmlFor='company'
                      className='block text-white font-medium mb-2'
                    >
                      Company
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleChange}
<<<<<<< HEAD
=======
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2" htmlFor="input-
                      Phone Number
                    ">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                      placeholder='Enter company name'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-white font-medium mb-2'
                    >
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
<<<<<<< HEAD
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                      placeholder='Enter phone number'                    />
=======
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter phone number"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter phone number"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                </div>

                <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <label
                    htmlFor='service'
                    className='block text-white font-medium mb-2'
                  >
<<<<<<< HEAD
=======
=======
                  <label htmlFor="service" className="block text-white font-medium mb-2" htmlFor="input-
                    Service of Interest
                  ">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    Service of Interest
                  </label>
                  <select
                    id='service'
                    name='service'
                    value={formData.service}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors'
                  >
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <option value=''>Select a service</option>
                    {services.map(service => (
                      <option
                        key={service}
                        value={service}
                        className='bg-gray-800 text-white'
<<<<<<< HEAD
                      >                        {service}
=======
                      >
=======
                  <label htmlFor="service" className="block text-white font-medium mb-2" htmlFor="input-
                    Service of Interest
                  ">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-gray-800 text-white">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-gray-800 text-white">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        {service}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </option>
                    ))}
                  </select>
                </div>

                <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <label
                    htmlFor='message'
                    className='block text-white font-medium mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
<<<<<<< HEAD
                    name='message'                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none'
                    placeholder='Tell us about your project or inquiry...'                  />
=======
                    name='message'
=======
                  <label htmlFor="message" className="block text-white font-medium mb-2" htmlFor="input-
                    Message *
                  ">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <label htmlFor="message" className="block text-white font-medium mb-2" htmlFor="input-
                    Message *
                  ">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
<<<<<<< HEAD
<<<<<<< HEAD
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none'
                    placeholder='Tell us about your project or inquiry...'
=======
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                    className='flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4'
                  >
                    <AlertCircle className='w-5 h-5' />                    <span>Something went wrong. Please try again.</span>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                    className='flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4'
                  >
                    <AlertCircle className='w-5 h-5' />
=======
                    className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4"
                  >
                    <AlertCircle className="w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4"
                  >
                    <AlertCircle className="w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <span>Something went wrong. Please try again.</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </motion.div>
                )}

                <button
<<<<<<< HEAD
                  type='submit'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  type='submit'
=======
                  type="submit"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2'
                >
                  {isSubmitting ? (
                    <>
<<<<<<< HEAD
                      <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className='w-5 h-5' />                      <span>Send Message</span>
=======
<<<<<<< HEAD
                      <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
=======
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
<<<<<<< HEAD
<<<<<<< HEAD
                      <Send className='w-5 h-5' />
=======
                      <Send className="w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <Send className="w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <span>Send Message</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
<<<<<<< HEAD
  );
};

export default ContactForm;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default ContactForm;
=======
  )
};

export default ContactForm;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default ContactForm;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
