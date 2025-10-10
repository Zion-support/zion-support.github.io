'use client';
import React, { useState } from 'react';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap, Globe, Settings, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function ConsultationPage() {
  const [selectedService, setSelectedService] = useState('ai-services');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const services = [
    {
      id: 'ai-services',
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for your business',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Migration Services', 'DevOps', 'Auto-scaling']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Turn your data into actionable business insights',
      icon: Database,
      features: ['Data Visualization', 'Business Intelligence', 'ETL Processes', 'Real-time Analytics']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions',
      icon: Shield,
      features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring']
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <SEOOptimizer 
        title="Free Consultation - Zion Tech Group | AI & IT Solutions"
        description="Schedule a free consultation with our AI and IT experts. Get personalized solutions for your business needs. Book your consultation today."
        keywords="consultation, AI solutions, IT services, business consultation, technology consulting, free consultation"
      />
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Free
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get expert advice on AI and IT solutions tailored to your business needs. 
              Schedule a free consultation with our technology experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Schedule Free Consultation
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of AI and IT solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    selectedService === service.id
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-white/20 bg-white/5 hover:border-purple-400/50'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Consultation?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our expert consultants provide personalized solutions tailored to your specific business needs and goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Free initial consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Expert technology advice</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Personalized solutions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">No obligation to proceed</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Consultation Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                    <span className="text-gray-300">Schedule your consultation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                    <span className="text-gray-300">Discuss your requirements</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                    <span className="text-gray-300">Receive expert recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                    <span className="text-gray-300">Get a detailed proposal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Schedule Your Consultation</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Consultation Scheduled!</h3>
                  <p className="text-gray-300 mb-6">
                    We'll contact you within 24 hours to schedule your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id} className="bg-gray-800">
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k" className="bg-gray-800">Under $10,000</option>
                        <option value="10k-50k" className="bg-gray-800">$10,000 - $50,000</option>
                        <option value="50k-100k" className="bg-gray-800">$50,000 - $100,000</option>
                        <option value="over-100k" className="bg-gray-800">Over $100,000</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap" className="bg-gray-800">ASAP</option>
                        <option value="1-month" className="bg-gray-800">Within 1 month</option>
                        <option value="3-months" className="bg-gray-800">Within 3 months</option>
                        <option value="6-months" className="bg-gray-800">Within 6 months</option>
                        <option value="flexible" className="bg-gray-800">Flexible</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}