'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Cloud, Shield, Code, CheckCircle, Calendar, Clock, ArrowRight } from 'lucide-react';

interface ConsultationService {
  id: number;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  benefits: string[];
}

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const services: ConsultationService[] = [
    {
      id: 1,
      icon: Star,
      title: 'AI Strategy',
      description: 'Develop a comprehensive AI strategy tailored to your business needs.',
      benefits: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation planning']
    },
    {
      id: 2,
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Plan and execute a seamless migration to the cloud.',
      benefits: ['Infrastructure assessment', 'Migration strategy', 'Cost optimization', 'Security planning']
    },
    {
      id: 3,
      icon: Shield,
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations.',
      benefits: ['Security assessment', 'Vulnerability analysis', 'Compliance review', 'Remediation plan']
    },
    {
      id: 4,
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions for your specific requirements.',
      benefits: ['Requirements analysis', 'Technical architecture', 'Development planning', 'Quality assurance']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Consultation form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation - Zion Tech Group | Free Expert Consultation</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Discuss your business needs and discover how our solutions can help." />
        <meta name="keywords" content="consultation, AI strategy, cloud migration, cybersecurity audit, custom development" />
      </Helmet>
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get personalized advice from our AI and IT experts. 
              Discuss your business needs and discover how our solutions can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Our Consultation Services</h2>
              <div className="space-y-6">
                {services.map((service) => (
                  <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-white font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-semibold mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-strategy">AI Strategy</option>
                    <option value="cloud-migration">Cloud Migration</option>
                    <option value="cybersecurity">Cybersecurity Audit</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </form>

              <div className="mt-6 p-4 bg-cyan-500/20 rounded-lg">
                <div className="flex items-center text-cyan-400 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>We'll respond within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;