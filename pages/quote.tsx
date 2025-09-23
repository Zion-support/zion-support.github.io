import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Calculator, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  DollarSign,
  Users,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { useState } from 'react';

const serviceTypes = [
  { id: 'ai', name: 'AI Services', description: 'Machine Learning, NLP, Computer Vision' },
  { id: 'it', name: 'IT Services', description: 'Cloud, DevOps, Cybersecurity' },
  { id: 'saas', name: 'Micro SaaS', description: 'Custom SaaS Solutions' },
  { id: 'blockchain', name: 'Blockchain', description: 'Smart Contracts, DeFi, NFTs' },
  { id: 'iot', name: 'IoT Solutions', description: 'Connected Devices, Edge Computing' },
  { id: 'ecommerce', name: 'E-commerce', description: 'Online Stores, Marketplaces' },
  { id: 'enterprise', name: 'Enterprise', description: 'Large-scale Business Solutions' },
  { id: 'custom', name: 'Custom Development', description: 'Tailored Software Solutions' }
];

const projectSizes = [
  { id: 'small', name: 'Small Project', description: '1-4 weeks', price: '$5,000 - $15,000' },
  { id: 'medium', name: 'Medium Project', description: '1-3 months', price: '$15,000 - $50,000' },
  { id: 'large', name: 'Large Project', description: '3-6 months', price: '$50,000 - $150,000' },
  { id: 'enterprise', name: 'Enterprise', description: '6+ months', price: '$150,000+' }
];

export default function QuotePage() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDescription: '',
    timeline: '',
    budget: ''
  });

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { selectedServices, selectedSize, formData });
  };

  return (
    <MainLayout
      title="Get a Quote - Zion Tech Group"
      description="Get a personalized quote for your technology project. Our experts will provide detailed pricing and timeline estimates."
      keywords="quote, pricing, project estimate, technology consulting, custom development"
      canonical="https://ziontechgroup.com/quote"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Get a Quote</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Tell us about your project and we'll provide a detailed estimate with pricing and timeline.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Calculator className="w-8 h-8 mr-3 text-blue-600" />
                  Project Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Service Types */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Needed</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {serviceTypes.map((service) => (
                        <label
                          key={service.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedServices.includes(service.id)
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={selectedServices.includes(service.id)}
                            onChange={() => handleServiceToggle(service.id)}
                          />
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                              selectedServices.includes(service.id)
                                ? 'border-blue-500 bg-blue-500'
                                : 'border-gray-300'
                            }`}>
                              {selectedServices.includes(service.id) && (
                                <CheckCircle className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{service.name}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Project Size */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Size</h3>
                    <div className="space-y-3">
                      {projectSizes.map((size) => (
                        <label
                          key={size.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedSize === size.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectSize"
                            className="sr-only"
                            checked={selectedSize === size.id}
                            onChange={() => setSelectedSize(size.id)}
                          />
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium text-gray-900">{size.name}</div>
                              <div className="text-sm text-gray-500">{size.description}</div>
                            </div>
                            <div className="text-lg font-semibold text-blue-600">{size.price}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                    />
                  </div>

                  {/* Timeline and Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Timeline</label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.timeline}
                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1month">Within 1 month</option>
                        <option value="3months">Within 3 months</option>
                        <option value="6months">Within 6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-plus">$100,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Get My Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </motion.div>

              {/* Benefits Sidebar */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                        <p className="text-gray-600 text-sm">No obligation consultation to understand your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Quick Response</h4>
                        <p className="text-gray-600 text-sm">Get your quote within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="w-6 h-6 text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                        <p className="text-gray-600 text-sm">Transparent pricing with no hidden costs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-6 h-6 text-purple-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Expert Team</h4>
                        <p className="text-gray-600 text-sm">Experienced developers and consultants</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                        <p className="text-gray-600 text-sm">Agile development with regular updates</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
                  <p className="text-gray-700 mb-6">
                    Have questions or need to discuss your project? Our team is here to help.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">
                        +1 302 464 0950
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <span className="text-gray-700">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}