import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Zap, Globe, Target, Shield, TrendingUp, Users } from 'lucide-react';

const ConsultationPage = () => {
  const [selectedType, setSelectedType] = useState('ai-strategy');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    consultationType: 'ai-strategy'
  });

  const consultationTypes = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy',
      description: 'Strategic planning for AI implementation and digital transformation',
      icon: <Zap className="w-8 h-8 text-white" />,
      color: 'from-blue-500 to-cyan-500',
      price: 'Free',
      duration: '60 minutes',
      features: ['Strategic assessment', 'AI roadmap planning', 'Implementation guidance', 'Risk analysis']
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Complete cloud infrastructure assessment and migration planning',
      icon: <Globe className="w-8 h-8 text-white" />,
      color: 'from-purple-500 to-pink-500',
      price: 'Free',
      duration: '90 minutes',
      features: ['Infrastructure audit', 'Migration strategy', 'Cost optimization', 'Security planning']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security assessment and protection strategy',
      icon: <Shield className="w-8 h-8 text-white" />,
      color: 'from-red-500 to-orange-500',
      price: 'Free',
      duration: '75 minutes',
      features: ['Security audit', 'Threat assessment', 'Compliance review', 'Protection strategy']
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategy and implementation',
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: 'from-green-500 to-teal-500',
      price: 'Free',
      duration: '120 minutes',
      features: ['Business analysis', 'Technology roadmap', 'Change management', 'Success metrics']
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
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon to schedule your consultation.');
  };

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation with our experts to discuss your technology needs and solutions" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Free Consultation
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Get expert advice on your technology challenges and discover how we can help transform your business
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Choose Your Consultation Type
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-gradient-to-br ${type.color} rounded-lg p-6 text-white cursor-pointer transition-transform hover:scale-105 ${
                    selectedType === type.id ? 'ring-4 ring-white ring-opacity-50' : ''
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <div className="flex items-center justify-center mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{type.description}</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">{type.price}</div>
                    <div className="text-sm opacity-75">{type.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Schedule Your Free Consultation
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Consultation Type *
                </label>
                <select
                  id="consultationType"
                  name="consultationType"
                  required
                  value={formData.consultationType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                >
                  {consultationTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.title} - {type.duration}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tell us about your project or challenges
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                  placeholder="Describe your current situation, goals, and any specific challenges you're facing..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Why Choose Our Consultation?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our experienced professionals have worked with companies of all sizes across various industries.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Tailored Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We provide customized recommendations based on your specific business needs and goals.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No Obligation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our consultation is completely free with no strings attached. Get valuable insights at no cost.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;
