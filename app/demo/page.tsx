'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle, Phone, Mail, Calendar, Clock, Users, Star } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-solutions');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    demo: 'ai-solutions',
    message: ''
  });

  const demos = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered solutions including machine learning, natural language processing, and computer vision.',
      duration: '30 minutes',
      features: [
        'Custom AI model training',
        'Real-time data processing',
        'Predictive analytics',
        'Natural language understanding',
        'Computer vision applications'
      ],
      image: '/images/demos/ai-solutions.jpg'
    },
    {
      id: 'it-services',
      title: 'IT Services Demo',
      description: 'See our comprehensive IT services including cloud infrastructure, cybersecurity, and system integration.',
      duration: '45 minutes',
      features: [
        'Cloud infrastructure management',
        'Cybersecurity monitoring',
        'System integration',
        'Performance optimization',
        '24/7 support dashboard'
      ],
      image: '/images/demos/it-services.jpg'
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Demo',
      description: 'Explore our micro SaaS solutions designed to solve specific business challenges with minimal complexity.',
      duration: '20 minutes',
      features: [
        'Analytics dashboard',
        'Content generation tools',
        'Email marketing automation',
        'Project management',
        'Customer support tools'
      ],
      image: '/images/demos/micro-saas.jpg'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Personalized Experience',
      description: 'Tailored demo based on your specific business needs and challenges'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Learn from our experienced team of AI and IT specialists'
    },
    {
      icon: Clock,
      title: 'No Commitment',
      description: 'Free demo with no obligation to purchase our services'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'See real examples of how we\'ve helped similar businesses'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request submitted:', formData);
    alert('Demo request submitted! We\'ll contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Request Demo | Zion Tech Group - See Our Solutions in Action</title>
        <meta name="description" content="Request a personalized demo of our AI and IT solutions. See how we can transform your business with cutting-edge technology." />
        <meta name="keywords" content="demo, AI demo, IT demo, personalized demo, business transformation, technology solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            See Our Solutions <span className="text-cyan-400">in Action</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience our AI and IT solutions firsthand with a personalized demo. 
            See how we can transform your business with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Demo Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the type of demo that best fits your interests and business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedDemo === demo.id
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Play className="w-10 h-10 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{demo.title}</h3>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {demo.duration}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-3">What you'll see:</h4>
                  {demo.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Request a Demo?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a personalized experience tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Request Your Demo
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll schedule your personalized demo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="demo" className="block text-sm font-medium text-gray-300 mb-2">
                  Demo Type *
                </label>
                <select
                  id="demo"
                  name="demo"
                  value={formData.demo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                >
                  {demos.map((demo) => (
                    <option key={demo.id} value={demo.id} className="bg-slate-800">
                      {demo.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="Tell us about your specific needs or questions"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team directly for immediate support or to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;