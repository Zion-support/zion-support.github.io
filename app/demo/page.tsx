'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Calendar, Clock, Users, CheckCircle, Phone, Mail, ArrowRight, Zap, Brain, Shield, BarChart } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    services: [] as string[],
    message: '',
    preferredTime: '',
    timezone: 'EST'
  });

  const serviceOptions = [
    'AI Customer Support',
    'AI Data Visualization',
    'AI Sales Automation',
    'AI Workflow Automation',
    'AI Marketing',
    'AI Healthcare',
    'AI Fintech',
    'IT Infrastructure',
    'Cloud Services',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Custom AI Solutions'
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

  const demoFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'See how our AI can transform your business processes'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Experience our advanced analytics and reporting capabilities'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Learn about our security measures and compliance standards'
    },
    {
      icon: Zap,
      title: 'Automation Workflows',
      description: 'Watch our automation tools in action'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      const serviceName = value;
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, serviceName]
          : prev.services.filter(service => service !== serviceName)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Demo Request from ${formData.name} - ${formData.company}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Role: ${formData.role}
Services of Interest: ${formData.services.join(', ')}
Preferred Time: ${formData.preferredTime}
Timezone: ${formData.timezone}
Message: ${formData.message}
    `;
    
    window.location.href = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <SEOOptimizer
        title="Request a Demo - Zion Tech Group"
        description="Schedule a personalized demo of our AI and IT solutions. See how we can transform your business with cutting-edge technology."
        keywords={['AI demo', 'IT solutions demo', 'AI consultation', 'technology demo', 'business transformation']}
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Request a Personalized Demo
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See our AI and IT solutions in action. Schedule a demo tailored to your business needs and discover how we can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 inline" />
                Email Us
              </a>
            </div>
          </section>

          {/* Demo Features */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              What You'll See in the Demo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {demoFeatures.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Demo Request Form */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="cyber-card p-8">
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Schedule Your Demo
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Job Role *</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="">Select your role</option>
                        <option value="CEO/Founder">CEO/Founder</option>
                        <option value="CTO">CTO</option>
                        <option value="VP Engineering">VP Engineering</option>
                        <option value="IT Director">IT Director</option>
                        <option value="Operations Manager">Operations Manager</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Preferred Time *</label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Services of Interest *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {serviceOptions.map((service, index) => (
                        <label key={index} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value={service}
                            checked={formData.services.includes(service)}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-cyan-400 bg-slate-800 border-gray-600 rounded focus:ring-cyan-400"
                          />
                          <span className="text-gray-300 text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Tell us about your specific needs or questions..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="cyber-button px-8 py-3 text-lg"
                    >
                      Schedule Demo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">Our team of AI and IT experts has years of experience delivering cutting-edge solutions.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Fast Implementation</h3>
                <p className="text-gray-300">We deliver results quickly with our proven implementation methodology.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">Our solutions have helped 500+ companies achieve their business goals.</p>
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