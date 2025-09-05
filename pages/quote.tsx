import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  DollarSign,
  Users,
  Award
} from 'lucide-react';
import Layout from '../components/Layout';

const serviceTypes = [
  { id: 'ai-services', name: 'AI Services', basePrice: 2500 },
  { id: 'it-services', name: 'IT Services', basePrice: 150 },
  { id: 'micro-saas', name: 'Micro SaaS', basePrice: 1500 },
  { id: 'blockchain', name: 'Blockchain', basePrice: 5000 },
  { id: 'iot', name: 'IoT Solutions', basePrice: 8000 },
  { id: 'ecommerce', name: 'E-commerce', basePrice: 8000 },
  { id: 'enterprise', name: 'Enterprise', basePrice: 50000 },
  { id: 'custom', name: 'Custom Solution', basePrice: 10000 }
];

const complexityLevels = [
  { id: 'basic', name: 'Basic', multiplier: 1, description: 'Simple implementation, standard features' },
  { id: 'intermediate', name: 'Intermediate', multiplier: 1.5, description: 'Moderate complexity, some custom features' },
  { id: 'advanced', name: 'Advanced', multiplier: 2, description: 'Complex implementation, extensive customization' },
  { id: 'enterprise', name: 'Enterprise', multiplier: 3, description: 'Large-scale, highly customized solution' }
];

const timelineOptions = [
  { id: 'urgent', name: 'Urgent (1-2 weeks)', multiplier: 1.5 },
  { id: 'fast', name: 'Fast (2-4 weeks)', multiplier: 1.2 },
  { id: 'standard', name: 'Standard (1-3 months)', multiplier: 1 },
  { id: 'flexible', name: 'Flexible (3+ months)', multiplier: 0.9 }
];

export default function QuoteRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    complexity: '',
    timeline: '',
    description: '',
    budget: '',
    features: []
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [showEstimate, setShowEstimate] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const calculateEstimate = () => {
    if (!formData.serviceType || !formData.complexity || !formData.timeline) return;

    const service = serviceTypes.find(s => s.id === formData.serviceType);
    const complexity = complexityLevels.find(c => c.id === formData.complexity);
    const timeline = timelineOptions.find(t => t.id === formData.timeline);

    if (service && complexity && timeline) {
      let basePrice = service.basePrice;
      
      // Apply complexity multiplier
      basePrice *= complexity.multiplier;
      
      // Apply timeline multiplier
      basePrice *= timeline.multiplier;
      
      // Add feature costs
      const featureCost = formData.features.length * (basePrice * 0.1);
      basePrice += featureCost;
      
      setEstimatedPrice(Math.round(basePrice));
      setShowEstimate(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Layout 
      title="Get a Quote | Zion Tech Group"
      description="Get a personalized quote for your technology project. Our experts will provide detailed pricing and recommendations."
      keywords="quote, pricing, project estimate, technology consulting, custom development"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get a Quote
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Tell us about your project and get a personalized estimate
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service type</option>
                        {serviceTypes.map(service => (
                          <option key={service.id} value={service.id}>
                            {service.name} (Starting at ${service.basePrice.toLocaleString()})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Complexity *</label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {complexityLevels.map(level => (
                          <label key={level.id} className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              name="complexity"
                              value={level.id}
                              checked={formData.complexity === level.id}
                              onChange={handleInputChange}
                              className="mt-1 mr-3"
                            />
                            <div>
                              <div className="font-medium text-gray-900">{level.name}</div>
                              <div className="text-sm text-gray-600">{level.description}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timeline *</label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {timelineOptions.map(option => (
                          <label key={option.id} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              name="timeline"
                              value={option.id}
                              checked={formData.timeline === option.id}
                              onChange={handleInputChange}
                              className="mr-3"
                            />
                            <span className="font-medium text-gray-900">{option.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Describe your project requirements, goals, and any specific features you need..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Features */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Features</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Mobile App Development',
                      'API Integration',
                      'Third-party Integrations',
                      'Advanced Analytics',
                      'User Authentication',
                      'Payment Processing',
                      'Real-time Features',
                      'Multi-language Support',
                      'Admin Dashboard',
                      'Custom Reporting'
                    ].map(feature => (
                      <label key={feature} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feature)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="mr-3"
                        />
                        <span className="text-gray-900">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Estimate Button */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={calculateEstimate}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Calculate Estimate
                  </button>
                </div>

                {/* Price Estimate */}
                {showEstimate && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-50 border border-blue-200 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Estimated Project Cost</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      ${estimatedPrice.toLocaleString()}
                    </div>
                    <p className="text-blue-700">
                      This is a preliminary estimate based on your project requirements. Final pricing will be determined after a detailed consultation.
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Submit Quote Request
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Need Help?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Middletown, DE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}