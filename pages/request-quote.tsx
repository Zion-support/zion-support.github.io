import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

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
    const mailtoLink = `mailto:kleber@ziontechgroup.com?subject=Quote Request from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACompany: ${formData.company}%0D%0AService: ${formData.service}%0D%0ABudget: ${formData.budget}%0D%0ATimeline: ${formData.timeline}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }

  return (
    <>
      <Head>
        <title>Request Quote - Zion Tech Group | Get Your Custom Technology Solution</title>
        <meta name="description" content="Request a custom quote for AI services, micro SaaS products, IT solutions, and digital transformation services from Zion Tech Group." />
        <meta name="keywords" content="request quote, custom technology solutions, AI services, micro SaaS, IT consulting, digital transformation" />
        <link rel="canonical" href={`${contact.site}/request-quote`} />
        <meta property="og:title" content="Request Quote - Zion Tech Group | Get Your Custom Technology Solution" />
        <meta property="og:description" content="Request a custom quote for AI services, micro SaaS products, IT solutions, and digital transformation services from Zion Tech Group." />
        <meta property="og:url" content={`${contact.site}/request-quote`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Request Quote - Zion Tech Group | Get Your Custom Technology Solution" />
        <meta name="twitter:description" content="Request a custom quote for AI services, micro SaaS products, IT solutions, and digital transformation services from Zion Tech Group." />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Request a Quote</h1>
            <p className="text-xl text-gray-300">
              Get a custom quote for your technology needs. We'll provide a detailed proposal within 24 hours.
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Tell Us About Your Project</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-services">AI Services</option>
                    <option value="micro-saas">Micro SaaS Products</option>
                    <option value="it-services">IT Services</option>
                    <option value="cloud-consulting">Cloud Consulting</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="6-months">Within 6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please describe your project requirements, goals, and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Request Quote
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300">120+ Micro SaaS Products Available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300">80+ AI Services & Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300">80+ IT Services & Consulting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300">24/7 Support & Maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300">Custom Solutions & Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300">Competitive Pricing & Fast Delivery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-3">📞</span>
                    <a href={`tel:${contact.phone}`} className="text-gray-300 hover:text-white">
                      {contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-3">✉️</span>
                    <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-white">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3">📍</span>
                    <span className="text-gray-300">{contact.address}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
                <div className="space-y-3">
                  <Link href="/services" className="block text-blue-400 hover:text-blue-300">
                    View All Services
                  </Link>
                  <Link href="/pricing" className="block text-blue-400 hover:text-blue-300">
                    Pricing Information
                  </Link>
                  <Link href="/faq" className="block text-blue-400 hover:text-blue-300">
                    Frequently Asked Questions
                  </Link>
                  <Link href="/contact" className="block text-blue-400 hover:text-blue-300">
                    Contact Us Directly
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}