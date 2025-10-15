import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  VideoCameraIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const demoTypes = [
    {
      icon: VideoCameraIcon,
      title: 'Live Demo',
      description: 'Interactive demonstration of our solutions with real-time Q&A',
      duration: '30-45 minutes',
      features: ['Live Product Walkthrough', 'Custom Use Cases', 'Q&A Session', 'Implementation Planning']
    },
    {
      icon: PhoneIcon,
      title: 'Phone Consultation',
      description: 'Detailed discussion about your needs and our solutions',
      duration: '15-30 minutes',
      features: ['Needs Assessment', 'Solution Overview', 'Pricing Discussion', 'Next Steps']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Chat Demo',
      description: 'Quick demonstration via chat with our AI assistant',
      duration: '10-15 minutes',
      features: ['Instant Access', 'Basic Features', 'Quick Questions', 'Follow-up Options']
    }
  ];

  return (
    <>
      <SEOHead
        title="Schedule a Demo - Zion Tech Group"
        description="Schedule a personalized demo of our AI and IT solutions. See how our technology can transform your business."
        keywords="demo, schedule demo, product demonstration, AI solutions demo, IT solutions demo, consultation"
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Schedule a Demo
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                See our AI and IT solutions in action. Schedule a personalized demonstration tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Types Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Choose Your <span className="text-purple-400">Demo Type</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Select the demonstration format that works best for your schedule and needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {demoTypes.map((demo, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {demo.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {demo.description}
                  </p>
                  <div className="flex items-center text-sm text-purple-400 mb-4">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    {demo.duration}
                  </div>
                  <ul className="space-y-2">
                    {demo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Form Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Request Your <span className="text-purple-400">Demo</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours to schedule your personalized demonstration.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
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
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="it-services">IT Services</option>
                    <option value="cloud-infrastructure">Cloud Infrastructure</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="micro-saas">Micro SaaS Solutions</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="other">Other</option>
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
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your specific needs or questions..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
                  >
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    Schedule Demo
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Need Immediate Assistance?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="text-sm text-gray-400">Call Us</div>
                  <div className="text-white font-semibold">+1 (302) 464-0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <UserIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="text-sm text-gray-400">Email Us</div>
                  <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <ClockIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="text-sm text-gray-400">Business Hours</div>
                  <div className="text-white font-semibold">Mon-Fri 9AM-6PM EST</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;