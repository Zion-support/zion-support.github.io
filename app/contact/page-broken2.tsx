'use client';

import React from 'react';

'use client';

import React, { useState, useCallback } from 'react';

import { Helmet } from 'react-helmet-async';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle';)
} from 'lucide-react';

';

const ContactPage: React.FC = () => {const [formData, setFormData] = useState({    name: ',
    email: ',
    company: ',
phone: ',
    service: ',
    budget: ',
    timeline: ',
    message: ';)
})';

const [isSubmitting, setIsSubmitting] = useState(false)';

const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(idle);

const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {;;

const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value';)
})';)';)
}, [])';

const handleSubmit = async (e: React.FormEvent) => {    message: '];
    });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {    const { name, value } = e.target;;

    setFormData(prev => ({
      ...prev,
      [name]: value]
    });)]
    }, []);

  const handleSubmit = async (e: React.FormEvent) => {    e.preventDefault();;

    setIsSubmitting(true)';

    setSubmitStatus(idle)';

    try {
      /
      await new Promise(resolve => setTimeout(resolve, 1000))';

      setSubmitStatus(success)';

      setFormData({
        name: ',
        email: ',
        company: ',
        phone: ',
        service: ',
        budget: ',
        timeline: ',
message: ']
    })';]
    } catch (error) {
      setSubmitStatus('error)]
    } finally {
      setIsSubmitting(false)]
    }

        message: ')
      })';

    } catch (error) {
      setSubmitStatus('error);

    } finally {
      setIsSubmitting(false)';

    }

  }';

const services = [';';

    'AI Solutions,
    'Cloud Computing,
    'Mobile App Development,
    'Web Development,
    'Data Analytics,
    'Cybersecurity,
    'DevOps,
    'Consulting,
    Other
  ]';

';

const contactInfo = [';';

    {
      icon: Phone,
      title: 'Phone,
      details: '+1 (302) 464-0950,
      description: 'Mon-Fri 9AM-6PM EST]
    },
    {
      icon: Mail,
      title: 'Email,
      details: 'kleber@ziontechgroup.com,
      description: 'We respond within 24 hours]
    },
    {
      icon: MapPin,
      title: 'Address,
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801,
      description: 'Visit our office]
    },
    {
      icon: Clock,
      title: 'Business Hours,
      details: Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - ,
    4:00 PM,
      description: Eastern Time
    }

  ]';

  return (

    <div>
        <title>Contact Us - Zion Tech Group | Get in Touch<
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs. 
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch 
      <

<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20>
        <div className="container mx-auto px-4>
          {/* Header *
          <div className="text-center mb-16>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6>
              Get in              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent></span>
                {' }Touch
              <
            <
            <p className="text-xl text-gray-300 max-w-3xl mx-auto>
              Ready to transform your business? Lets discuss your project and explore               how our AI and IT solutions can help you achieve your goals.
            <

          <
        <

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12>
            {/* Contact Form *
            <div className=bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white
              <h2 className="text-3xl font-bold text-white mb-6>Send us a Message<
              
              {submitStatus === 'success && (

                <div className=mb-6 p-4 bg-green-500/20 border border-green-500
                  <CheckCircle className="w-5 h-5 text-green-400 
                  <span className="text-green-400">Message sent successfully! Well get back to you soon.<
                <
              )}

              {submitStatus === 'error' && (<div className=mb-6 p-4 bg-red-500/20 border border-red-500
                  <span className="text-red-400>Failed to send message. Please try again.<
                <)
              )}

              <form onSubmit={handleSubmit} className="space-y-6></form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6></div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2></label>
                      Full Name *
                    <
                    <div className="relative>
                      
                    <label className="block text-sm font-medium text-gray-300 mb-2>
                      Email Address *
                    <
                    <div className="relative>
                      
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2>

                    <
                    <div className="relative>
                      
                    <label className="block text-sm font-medium text-gray-300 mb-2>
                      Phone Number
                    <
                    <div className="relative>
                      
                  <label className="block text-sm font-medium text-gray-300 mb-2>
                    Service Interest
                  <
                  <div className="relative>
                    
                      <option value=">Select a service<
                      {services.map((service) => (<option key={service} value={service}>
                          {service}

                        <)
                      ))}

                    <
                  <
                <
                  and well get back to you as soon as possible.
                <

              <

              {/* Contact Information *
              <div className="space-y-8>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6>Get in Touch<
                  <p className="text-gray-300 mb-8>
                    Were here to help you transform your business with cutting-edge AI and technology solutions.                  <
                <

                <div className="space-y-6>
                  <div className="flex items-center>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4>
                      
<h3 className="text-lg font-semibold text-white mb-1>
                        {info.title}

                      <
                      <p className="text-cyan-400 font-medium mb-1>
                        {info.details}

                      <
                      <p className="text-gray-300 text-sm>
                        {info.description}                      <

                    <
                  <

                  <div className="flex items-center>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4>
                      
                      <h3 className="text-lg font-semibold text-white>Email<
                      <p className="text-gray-300>info@ziontechgroup.com<
                    <
                  <

                  <div className="flex items-center>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4>
                      
                      <h3 className="text-lg font-semibold text-white>Address<
                      <p className="text-gray-300>123 Tech Street<br />San Francisco, CA 94105<
                    <
                  <

                  <div className="flex items-center>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4>
                      
                      <h3 className="text-lg font-semibold text-white>Business Hours<
                      <p className="text-gray-300>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - ,
    4:00 PM<
                    <
                  <
                <
              <
            <
          <
        <
      <
<

)]
    }'"'"'";export default ContactPage'"'"'"'";
