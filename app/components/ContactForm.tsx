<<<<<<< HEAD
'use client';
import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const ContactFormPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ContactForm
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ContactFormPage;
=======
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target } from 'lucide-react';

interface ContactFormProps {
  className?: string;
  children?: React.ReactNode;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${className}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">ContactForm Title</h3>
      <p className="text-gray-300 mb-4">ContactForm description goes here.</p>
      {children}
=======
import React, { useState  } from 'react'
import {  Send, CheckCircle, AlertCircle, Loader2  } from 'lucide-react'interface FormData {
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string,
}

interface FormStatus {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    setFormData(prev => ({
      ...prev,
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' ,)})

    try {// Simulate API call;}
      await new Promise(resolve => setTimeout(resolve, 2000));

      setStatus({)
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',})

      // Reset form;
      setFormData({)
      [name]: value;}
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })
    try {
      // Simulate API call
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',})
    } catch (error) {setStatus({)
        type: 'error',
    }
  }
  const services = [
    'AI Solutions',
    'Web Development',
    'Mobile App Development',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',
    'IT Consulting',

  return(<div className="max-w-2xl mx-auto p-6"></div></div>)</div>
    'Other';
  ];];];
  return (
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center"></h2></h2>Get In Touch</h2>
      <form onSubmit={handleSubmit}className="space-y-6"></form>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"></label>
            Full Name;
    'Other'
  ]

              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"></label>
  return (
    </HTMLInputElement><div className="max-w-2xl mx-auto p-6"></div></div>
      </div><h2 className="text-3xl font-bold text-gray-900 mb-8 text-center"></h2></h2>Get In Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6"></form>
        </form><div>
          </div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"></label>
            Full Name
          </label>
              <input;
                type="text"
                id="name"
                name="name"
                value={formData.name}onChange={handleChange}required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                placeholder="Your full name"
              />
        </div>

        <div>
              </div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"></label>
                Email Address *
                type="email"
                id="email"
                name="email"
                placeholder="your.email@company.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2"></label>
                Company;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div></div>
            </div><div>
              </div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2"></label>
                Company
              </label>
              <input;
                type="text"
                id="company"
                name="company"
                placeholder="Your company name"
              />
            </div>

            <div>
              </label>
              <input;
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
              /></input>
            </div>
          </div>

          <div>
              name="service"
              ) : (
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
              <span className="text-sm font-medium"></span></span>{status.message}</span>
            </div>
          </div>
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          ></button>
            {status.type === 'loading' ? (
              <>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>

            ) : (
              <>
  </>
                <Send className="h-5 w-5" />
                <span>Send Message</span>

            </div>
              value={formData.service}onChange={handleChange}className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
            >
              ) : (
                </select><div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              )}
              <span className="text-sm font-medium"></span></span>{status.message</span&gt;}</span>
            </div>
          )}

          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200"></div></div>
              </div>
              <div>
                </div><p className="font-semibold text-gray-900"></p></p>Phone</p>
                <p className="text-sm text-gray-600"></p></p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2"></div></div>
                <p className="text-sm text-gray-600"></p></p>hello@ziontechgroup.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2"></div></div>
                <p className="text-sm text-gray-600"></p></p>New York, NY</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2"></label>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2"></label>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="{`w-full" px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors resize-vertical ${
              errors.message 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-600 focus:ring-cyan-500'
            }`}
            placeholder="Tell us about your project..."
            required
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-400 flex items-center"></p></p>
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
        ></button>
          {isSubmitting ? (
            <&gt;
              <Loader2 className="w-5 h-5 mr-2 animate-spin" /&gt;
              Sending...
            </&gt;
          ) : (
            <&gt;
              <Send className="w-5 h-5 mr-2" /&gt;
              Send Message
            </&gt;
          )}
        </button>
      </form>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
    </div>
  );
};

export default ContactForm;
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
