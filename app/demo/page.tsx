'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, Star, ArrowRight, Brain, Zap, Cloud, Code } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    interests: [] as string[],
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Demo Request from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Role: ${formData.role}
Interests: ${formData.interests.join(', ')}
Message: ${formData.message}`;
    
    window.location.href = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const demoOptions = [
    {
      title: 'AI Services Demo',
      description: 'See our AI solutions in action',
      icon: Brain,
      features: ['Chatbots', 'Data Analytics', 'Automation', 'Predictive Models']
    },
    {
      title: 'IT Infrastructure Demo',
      description: 'Explore our cloud and infrastructure solutions',
      icon: Cloud,
      features: ['Cloud Migration', 'Security', 'DevOps', 'Monitoring']
    },
    {
      title: 'Micro SAAS Demo',
      description: 'Try our ready-to-use business applications',
      icon: Code,
      features: ['Business Apps', 'Productivity Tools', 'Analytics', 'Integration']
    }
  ];

  const interests = [
    'AI Customer Support',
    'AI Marketing',
    'AI Data Analytics',
    'AI Workflow Automation',
    'Cloud Services',
    'Cybersecurity',
    'DevOps',
    'Business Intelligence',
    'Micro SAAS Solutions',
    'Custom Development'
  ];

  return (
    <>
      <SEOOptimizer
        title="Request a Demo - Zion Tech Group"
        description="Schedule a personalized demo of our AI and IT solutions. See how we can transform your business with cutting-edge technology."
        keywords={['AI demo', 'technology demo', 'business solutions demo', 'AI consultation']}
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                See Our Solutions in Action
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Schedule a personalized demo and discover how our AI and IT solutions can transform your business
              </p>
            </div>
          </section>

          {/* Demo Options */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Choose Your Demo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {demoOptions.map((option, index) => (
                <div key={index} className="cyber-card p-8 text-center">
                  <option.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">{option.title}</h3>
                  <p className="text-gray-400 mb-6">{option.description}</p>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#demo-form"
                    className="cyber-button w-full text-center block"
                  >
                    Request Demo
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Demo Form */}
          <section id="demo-form" className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="cyber-card p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 neon-text">
                  Schedule Your Demo
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Your Role *
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="">Select your role</option>
                        <option value="CEO">CEO</option>
                        <option value="CTO">CTO</option>
                        <option value="IT Director">IT Director</option>
                        <option value="Operations Manager">Operations Manager</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Preferred Demo Time
                      </label>
                      <select className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400">
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
                        <option value="evening">Evening (6 PM - 8 PM)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-4">
                      Areas of Interest (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {interests.map((interest, index) => (
                        <label key={index} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleCheckboxChange(interest)}
                            className="w-4 h-4 text-cyan-400 bg-slate-800 border-gray-600 rounded focus:ring-cyan-400"
                          />
                          <span className="text-gray-300 text-sm">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Tell us about your specific needs and goals..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="cyber-button inline-flex items-center text-lg px-8 py-4"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule My Demo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Why Schedule a Demo?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Save Time</h3>
                <p className="text-gray-300">See exactly how our solutions work for your specific use case in just 30 minutes.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Star className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Expert Guidance</h3>
                <p className="text-gray-300">Get personalized recommendations from our AI and IT experts.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <ArrowRight className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Clear Next Steps</h3>
                <p className="text-gray-300">Leave with a clear roadmap for implementing our solutions in your business.</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DemoPage;