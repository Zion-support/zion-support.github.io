import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { CheckCircle, ArrowRight, Phone, Mail, Clock, Users, Shield, Zap } from 'lucide-react';

const RequestQuote: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    projectSize: '',
    timeline: '',
    budget: '',
    description: ''
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

  const serviceTypes = [
    'AI Services',
    'IT Services',
    'Micro SaaS Development',
    'Custom Software Development',
    'Cloud Migration',
    'Cybersecurity',
    'Data Analytics',
    'Mobile App Development',
    'Web Development',
    'Consulting',
    'Other'
  ];

  const projectSizes = [
    'Small (1-3 months)',
    'Medium (3-6 months)',
    'Large (6-12 months)',
    'Enterprise (12+ months)'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    'Within 3 months',
    'Within 6 months',
    'Flexible'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000',
    'To be discussed'
  ];

  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>Quote Request Submitted - Zion Tech Group</title>
          <meta name="description" content="Your quote request has been submitted successfully. We'll get back to you within 24 hours." />
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-xl p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your interest in our services. We've received your quote request and will get back to you within 24 hours with a detailed proposal.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-left text-blue-800 space-y-2">
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  We'll review your requirements within 24 hours
                </li>
                <li className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Our team will prepare a customized proposal
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  We'll schedule a call to discuss your project
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Back to Home
              </a>
              <a href="/contact" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Request a Quote - Zion Tech Group</title>
        <meta name="description" content="Get a customized quote for your technology project. Professional AI, IT, and software development services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Quote</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Get a customized quote for your technology project. We'll provide detailed pricing and timeline estimates within 24 hours.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Quote Process?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide transparent, detailed quotes that help you make informed decisions about your technology investment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees or surprises. Clear breakdown of costs and deliverables.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-gray-600">Receive your detailed quote within 24 hours of submission.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Consultation</h3>
                <p className="text-gray-600">Free consultation with our technology experts to optimize your project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Custom Quote</h2>
                  <p className="text-lg text-gray-600">
                    Fill out the form below and we'll provide you with a detailed quote tailored to your specific needs.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service type</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Size
                      </label>
                      <select
                        id="projectSize"
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select project size</option>
                        {projectSizes.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={6}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your project requirements, goals, and any specific features or technologies you need..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
                    >
                      Submit Quote Request
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Need Immediate Assistance?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="flex items-center bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
              >
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RequestQuote;