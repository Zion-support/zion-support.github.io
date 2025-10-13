import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    preferredTime: '',
    budget: ''
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
    // Handle form submission here
    setIsSubmitted(true);
  };

  const services = [
    'AI Solutions',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    '5G Solutions',
    'Micro SAAS',
    'Other'
  ];

  const consultationTypes = [
    {
      title: 'Free Discovery Call',
      duration: '30 minutes',
      price: 'Free',
      description: 'Initial consultation to understand your needs and challenges',
      features: ['Needs assessment', 'Solution overview', 'Next steps planning']
    },
    {
      title: 'Technical Consultation',
      duration: '1 hour',
      price: '$200',
      description: 'Deep dive into technical requirements and architecture',
      features: ['Technical analysis', 'Architecture review', 'Implementation roadmap']
    },
    {
      title: 'Strategic Planning',
      duration: '2 hours',
      price: '$500',
      description: 'Comprehensive business and technology strategy session',
      features: ['Business analysis', 'Technology roadmap', 'ROI projections', 'Implementation timeline']
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <CheckCircle className="w-24 h-24 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Your consultation request has been submitted successfully. We'll contact you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation with our technology experts. Discuss your AI, cybersecurity, cloud, and development needs." />
        <meta name="keywords" content="free consultation, technology consulting, AI consulting, cybersecurity consulting, cloud consulting" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Free Consultation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your technology challenges and explore how our AI, cybersecurity, and cloud solutions can transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Consultation Types */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Choose Your Consultation</h2>
            <div className="space-y-6">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{type.title}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{type.price}</div>
                      <div className="text-sm text-gray-400">{type.duration}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Schedule Your Call</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Service Interest *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Preferred Time</label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select budget</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Tell us about your project, challenges, and goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center group"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-2xl p-8 border border-gray-700">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <MessageSquare className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
