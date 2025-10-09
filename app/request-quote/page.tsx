import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const RequestQuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const services = [
    'AI Services',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Data Analytics',
    'Mobile Development',
    'Workflow Automation',
    'Quantum Computing',
    'Blockchain Solutions',
    'Autonomous Systems',
    'Business Intelligence',
    'Digital Transformation',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
    'Not sure'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
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
    // You would typically send this to your backend API
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Request a Quote
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get a customized quote for your AI and technology needs. Our experts will provide detailed pricing and recommendations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Quote Form */}
            <div className="cyber-card">
              <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Service Needed *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-500"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-500"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Project Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Please describe your project requirements, goals, and any specific needs..."
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cyber-button"
                >
                  Request Quote
                </button>
              </form>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-8">
              <div className="cyber-card hologram-card">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Free consultation and detailed analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Customized solutions for your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">24/7 support and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Proven track record with 500+ clients</span>
                  </li>
                </ul>
              </div>

              <div className="cyber-card">
                <h3 className="text-xl font-bold text-white mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-sm font-bold text-white mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-white">Review & Analysis</h4>
                      <p className="text-gray-300 text-sm">We review your requirements and analyze your current systems.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-sm font-bold text-white mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-white">Custom Proposal</h4>
                      <p className="text-gray-300 text-sm">We create a detailed proposal with pricing and timeline.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-sm font-bold text-white mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-white">Implementation</h4>
                      <p className="text-gray-300 text-sm">We implement the solution with ongoing support.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cyber-card text-center">
                <h3 className="text-xl font-bold text-white mb-4">Need Immediate Help?</h3>
                <p className="text-gray-300 mb-4">Call us for immediate assistance</p>
                <a
                  href="tel:+13024640950"
                  className="cyber-button"
                >
                  📞 (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RequestQuotePage;