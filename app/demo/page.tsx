'use client';
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, ArrowRight, Play, Monitor, Smartphone, Tablet } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    interest: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        role: '',
        interest: '',
        message: ''
      });
    }, 3000);
  };

  const demoTypes = [
    {
      icon: Monitor,
      title: 'AI Analytics Dashboard',
      description: 'See how our AI analytics can transform your data into actionable insights',
      duration: '30 minutes',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reporting']
    },
    {
      icon: Smartphone,
      title: 'Mobile AI Assistant',
      description: 'Experience our AI-powered mobile solutions for business automation',
      duration: '20 minutes',
      features: ['Voice commands', 'Smart notifications', 'Task automation']
    },
    {
      icon: Tablet,
      title: 'Cloud Infrastructure',
      description: 'Explore our cloud solutions and infrastructure management tools',
      duration: '45 minutes',
      features: ['Scalability demo', 'Security features', 'Cost optimization']
    }
  ];

  const benefits = [
    'See our solutions in action',
    'Get personalized recommendations',
    'Ask questions to our experts',
    'Understand implementation process',
    'No commitment required'
  ];

  const timeSlots = [
    '9:00 AM - 9:30 AM',
    '10:00 AM - 10:30 AM',
    '11:00 AM - 11:30 AM',
    '2:00 PM - 2:30 PM',
    '3:00 PM - 3:30 PM',
    '4:00 PM - 4:30 PM'
  ];

  const roles = [
    'CEO/Founder',
    'CTO/Technical Director',
    'IT Manager',
    'Data Analyst',
    'Operations Manager',
    'Other'
  ];

  const interests = [
    'AI Analytics',
    'Cloud Migration',
    'Cybersecurity',
    'Process Automation',
    'Data Management',
    'Custom Development'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Request a <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Demo</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              See our AI and IT solutions in action. Schedule a personalized demo 
              and discover how we can transform your business operations.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Demo Types */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Demo Types</h3>
                <div className="space-y-4">
                  {demoTypes.map((demo, index) => (
                    <div key={index} className="p-4 bg-gray-800/50 rounded-lg group hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <demo.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">{demo.title}</h4>
                          <p className="text-sm text-gray-300 mb-2">{demo.description}</p>
                          <div className="flex items-center space-x-2 text-xs text-cyan-400">
                            <Clock className="w-3 h-3" />
                            <span>{demo.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Why Schedule a Demo?</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Demo Request Form */}
          <div className="lg:col-span-2">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Schedule Your Demo</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Demo Request Submitted!</h3>
                  <p className="text-gray-300">Thank you for your interest. We'll contact you within 24 hours to schedule your demo.</p>
                </div>
              ) : (
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your full name"
                        required
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      >
                        <option value="">Select your role</option>
                        {roles.map((role, index) => (
                          <option key={index} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                        Primary Interest
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      >
                        <option value="">Select your interest</option>
                        {interests.map((interest, index) => (
                          <option key={index} value={interest}>{interest}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your specific needs or questions..."
                    />
                  </div>

                  <div className="cyber-card p-4 bg-cyan-500/10 border border-cyan-500/20">
                    <h4 className="text-lg font-semibold text-white mb-2">Available Time Slots</h4>
                    <p className="text-sm text-gray-300 mb-3">We'll contact you to confirm your preferred time:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {timeSlots.map((slot, index) => (
                        <div key={index} className="text-sm text-cyan-400 bg-gray-800 px-3 py-2 rounded">
                          {slot}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full cyber-button text-center py-4 inline-flex items-center justify-center space-x-2 group"
                  >
                    <Play className="w-5 h-5" />
                    <span>Schedule Demo</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See the Future?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Experience how our AI and IT solutions can transform your business. 
            Schedule your demo today and take the first step towards digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <Phone className="w-5 h-5" />
              <span>Call (302) 464-0950</span>
            </a>
            <a
              href="mailto:demo@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>demo@ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;