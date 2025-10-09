'use client';
import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, Video, Monitor, Smartphone, Zap } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-solutions');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    interests: [] as string[],
    preferredTime: '',
    message: ''
  });

  const demos = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions Demo',
      description: 'See how our AI can transform your business processes',
      duration: '30 minutes',
      icon: Zap,
      features: ['AI Automation', 'Content Generation', 'Data Analytics', 'Customer Support']
    },
    {
      id: 'it-services',
      title: 'IT Services Demo',
      description: 'Explore our comprehensive IT infrastructure solutions',
      duration: '45 minutes',
      icon: Monitor,
      features: ['Cloud Migration', 'Cybersecurity', 'DevOps', 'System Administration']
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Tools',
      description: 'Discover our suite of AI-powered business applications',
      duration: '20 minutes',
      icon: Smartphone,
      features: ['Business Apps', 'Productivity Tools', 'Marketing Suite', 'Analytics Dashboard']
    }
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  const interests = [
    'AI Solutions',
    'IT Services',
    'Micro SAAS',
    'Cloud Migration',
    'Cybersecurity',
    'Data Analytics',
    'Process Automation',
    'Custom Development'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request submitted:', formData);
    alert('Thank you! We\'ll contact you soon to schedule your demo.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Request a <span className="text-cyan-400">Demo</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See our AI and IT solutions in action. Choose from our available demos and schedule a personalized session with our experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Selection */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6">Choose Your Demo</h2>
            
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : 'border-gray-600 bg-white/5 hover:border-cyan-400/50'
                }`}
                onClick={() => setSelectedDemo(demo.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    selectedDemo === demo.id ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}>
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>
                    <p className="text-gray-300 mb-4">{demo.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {demo.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        Live with expert
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {demo.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 text-cyan-400 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Demo</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="">Select your role</option>
                  <option value="ceo">CEO/Founder</option>
                  <option value="cto">CTO</option>
                  <option value="it-manager">IT Manager</option>
                  <option value="operations">Operations Manager</option>
                  <option value="marketing">Marketing Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Areas of Interest
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center space-x-2 cursor-pointer hover:bg-white/5 p-2 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="w-4 h-4 text-cyan-400 bg-white/10 border-gray-600 rounded focus:ring-cyan-400"
                      />
                      <span className="text-sm text-gray-300">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Time Slot
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="">Select preferred time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                  placeholder="Tell us about your specific needs or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-gray-300 mb-6">
              Our team is ready to help you get started right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;