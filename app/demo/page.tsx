'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Calendar, Clock, Users, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Zap, Brain, Shield, BarChart } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    companySize: '',
    interests: [] as string[],
    preferredTime: '',
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
    // Handle form submission here
    setIsSubmitted(true);
  };

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
      description: 'Learn about our robust security and compliance features'
    },
    {
      icon: Zap,
      title: 'Automation Tools',
      description: 'Discover how automation can save you time and resources'
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

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const roles = [
    'CEO/Founder',
    'CTO/Technical Director',
    'IT Manager',
    'Operations Manager',
    'Marketing Manager',
    'Other'
  ];

  const interests = [
    'AI Solutions',
    'IT Services',
    'Micro SAAS Tools',
    'Quantum Computing',
    'Autonomous Systems',
    'Blockchain & Web3',
    'IoT & Edge Computing',
    'Business Intelligence',
    'Robotics',
    'Custom Development'
  ];

  if (isSubmitted) {
    return (
      <>
        <SEOOptimizer
          title="Demo Request Submitted - Zion Tech Group"
          description="Thank you for requesting a demo. We'll contact you soon to schedule your personalized demonstration."
          canonicalUrl="https://ziontechgroup.com/demo"
        />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          <main className="pt-16">
            <section className="container mx-auto px-4 py-16 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 mx-auto mb-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Demo Request Submitted!
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Thank you for your interest in our AI solutions. Our team will contact you within 24 hours to schedule your personalized demonstration.
                </p>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-white">1</div>
                      <span className="text-gray-300">We'll review your requirements and prepare a customized demo</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-white">2</div>
                      <span className="text-gray-300">Our team will contact you to schedule the best time</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-white">3</div>
                      <span className="text-gray-300">We'll conduct a 30-45 minute personalized demonstration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-white">4</div>
                      <span className="text-gray-300">We'll provide a detailed proposal based on your needs</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 mr-4"
                  >
                    Request Another Demo
                  </button>
                  <a
                    href="/contact"
                    className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEOOptimizer
        title="Request a Demo - Zion Tech Group AI Solutions"
        description="Schedule a personalized demo of our AI solutions. See how our technology can transform your business. Free 30-45 minute demonstration."
        keywords={['AI demo', 'AI solutions demo', 'AI automation demo', 'enterprise AI demo', 'AI consultation']}
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Request a Demo
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                See our AI solutions in action with a personalized demonstration
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>30-45 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>Personalized</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>Free</span>
                </div>
              </div>
            </div>
          </section>

          {/* Demo Features */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What You'll See
              </h2>
              <p className="text-xl text-gray-400">
                Our demo covers the key features that matter most to your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {demoFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Demo Form */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Demo</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
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
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
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
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Role
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        >
                          <option value="">Select your role</option>
                          {roles.map((role, index) => (
                            <option key={index} value={role}>{role}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Size
                        </label>
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        >
                          <option value="">Select company size</option>
                          {companySizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Demo Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="">Select preferred time</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Areas of Interest (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {interests.map((interest, index) => (
                          <label key={index} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleCheckboxChange(interest)}
                              className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-400"
                            />
                            <span className="text-sm text-gray-300">{interest}</span>
                          </label>
                        ))}
                      </div>
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Tell us about your specific needs or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Request Demo
                    </button>
                  </form>
                </div>

                {/* Info */}
                <div className="space-y-8">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-4">Why Schedule a Demo?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">See our AI solutions in action with real data</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Get answers to your specific questions</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Understand how our solutions fit your needs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Receive a customized proposal</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300">+1 (302) 464-0950</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300">kleber@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300">Middletown, DE</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30">
                    <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                    <p className="text-gray-300 mb-4">
                      Don't wait to transform your business with AI. Schedule your demo today and see the future of technology.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Contact us directly
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
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