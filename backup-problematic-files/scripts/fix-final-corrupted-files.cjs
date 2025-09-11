<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
// List of final corrupted files to fix
const corruptedFiles = ['pages/docs/integration-examples.tsx',
  'pages/marketplace.tsx',
  'pages/privacy.tsx',
  'pages/request-quote.tsx',
  'pages/schedule-demo.tsx'
];
// Function to fix a corrupted file by rewriting it with proper content
function fixCorruptedFile(filePath) {
  try {
    let content = '';
    if (filePath === 'pages/docs/integration-examples.tsx') {
      content = "import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Code, Zap, ExternalLink } from 'lucide-react';
export default function IntegrationExamples() {
  const contact = { 
    "phone": '+1 302 464 0950', 
    "email": 'kleber@ziontechgroup.com', 
    "address": '364 E Main St STE 1008 Middletown DE 19709', 
    "site": 'https://ziontechgroup.com' 
  };
  return (
    <>
      <Head>
        <title>Integration Examples - Zion Tech Group Documentation</title>
        <meta name="description" content="Real-world integration examples for Zion Tech Group's APIs and services." />
        <link rel="canonical" href={\"\${contact.site}/docs/integration-examples\"} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Integration Examples</h1>
            <p className="text-xl text-gray-600">
              Real-world examples showing how to integrate with our APIs and services.
            </p>
          </div>
          {/* JavaScript/Node.js Example */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">JavaScript/Node.js Integration</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic API Client</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-blue-400 text-sm">
{\"class ZionTechAPI {
  constructor(apiKey, baseURL = '"https": //api.ziontechgroup.com/v1') {
    this.apiKey = apiKey;
    this.baseURL = baseURL}
  async getServices() {
    try {
      const response = await fetch(\`\${this.baseURL}/services\`, {
        "headers": {
          'Authorization': \`Bearer \${this.apiKey}\`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(\`HTTP error! "status": \${response.status}\`)}
      return await response.json()} catch (error) {
      console.error('Error fetching "services": ', error);
      throw error}
  }
  async submitContact(data) {
    try {
      const response = await fetch(\`\${this.baseURL}/contact\`, {
        "method": 'POST',
        "headers": {
          'Authorization': \`Bearer \${this.apiKey}\`,
          'Content-Type': 'application/json'
        },
        "body": JSON.stringify(data)
      });
      return await response.json()} catch (error) {
      console.error('Error submitting "contact": ', error);
      throw error}
  }
}
// Usage
const api = new ZionTechAPI('your-api-key');
const services = await api.getServices();
\"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with Integration?</h2>
            <p className="text-gray-600 mb-6">
              Our technical team can help you integrate our services into your application.
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Integration Support
              </Link>
              <a href={\"mailto:\${contact.email}\"} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg "hover": bg-blue-50 transition-colors">
                Email Technical Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )}"} else if (filePath === 'pages/marketplace.tsx') {
      content = "import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';
export default function Marketplace() {
  const marketplaceCategories = [{
      "title": "Products",
      "description": "Discover innovative technology products and solutions",
      "icon": "🛍️",
      "items": [
        { name: "AI-Powered Analytics Platform", "price": "Starting at $299/month", "category": "AI & Analytics" },
        { "name": "Micro SaaS Starter Kit", "price": "Starting at $99/month", "category": "Micro SaaS" },
        { "name": "Cloud Infrastructure Suite", "price": "Starting at $199/month", "category": "Cloud Services" }
      ]
    },
    {
      "title": "Services",
      "description": "Professional services to help your business grow",
      "icon": "🔧",
      "items": [{ name: "Custom Development", "price": "Starting at $150/hour", "category": "Development" },
        { "name": "Consulting Services", "price": "Starting at $200/hour", "category": "Consulting" },
        { "name": "Technical Support", "price": "Starting at $50/hour", "category": "Support" }
      ]
    },
    {
      "title": "Templates",
      "description": "Ready-to-use templates and components",
      "icon": "📄",
      "items": [{ name: "React Component Library", "price": "Free", "category": "Frontend" },
        { "name": "API Documentation Template", "price": "Free", "category": "Documentation" },
        { "name": "Project Management Template", "price": "$29", "category": "Productivity" }
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>Marketplace - Zion Tech Group</title>
        <meta name="description" content="Discover products, services, and templates from Zion Tech Group's marketplace." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Marketplace
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover innovative products, services, and templates to accelerate your business growth.
            </p>
          </div>
          {/* Categories */}
          <div className="space-y-16">
            {marketplaceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <div className="text-4xl mr-4">{category.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 "md": grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 "hover": shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-2">
                        {item.price}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        {item.category}
                      </p>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg "hover": bg-blue-700 transition-colors flex items-center justify-center">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We can create custom solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Request Custom Solution
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/services" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )}"} else if (filePath === 'pages/privacy.tsx') {
      content = "import React from 'react';
import Head from 'next/head';
const "PrivacyPage": React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="How Zion Tech Group collects, uses, and protects your data." />
      </Head>
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-700 mb-6">Last updated: 2025-09-03</p>
          <div className="prose max-w-none">
            <p>We respect your privacy. This policy explains what information we collect and how we use it.</p>
            <h2>Information We Collect</h2>
            <ul>
              <li>Contact details you provide (name, email, phone) via forms</li>
              <li>Usage analytics (pages visited, approximate location, device/browser)</li>
              <li>Business information shared to scope projects</li>
            </ul>
            <h2>How We Use Information</h2>
            <ul>
              <li>To respond to inquiries and provide services</li>
              <li>To improve our website and offerings</li>
              <li>To comply with legal obligations</li>
            </ul>
            <h2>Data Sharing</h2>
            <p>We do not sell personal data. We may share data with service providers under strict agreements (e.g., hosting, analytics) or when required by law.</p>
            <h2>Security</h2>
            <p>We use industry-standard safeguards such as encryption in transit, least-privilege access, and regular security reviews.</p>
            <h2>Your Rights</h2>
            <p>You may request access, correction, or deletion of your data. Contact us at <a href=""mailto": kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
            <h2>Contact</h2>
            <p>Zion Tech Group, 364 E Main St STE 1008, Middletown DE 19709. "Phone": +1 302 464 0950</p>
          </div>
        </div>
      </section>
    </>
  )};
export default PrivacyPage;
"} else if (filePath === 'pages/request-quote.tsx') {
      content = "import React, { useState } from 'react';
import Head from 'next/head';
import { Send, CheckCircle } from 'lucide-react';
export default function RequestQuote() {
  const [formData, setFormData] = useState({
    "name": '',
    "email": '',
    "company": '',
    "phone": '',
    "service": '',
    "budget": '',
    "timeline": '',
    "description": '',
    "industry": ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const industries = ['Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail',
    'Real Estate',
    'Other'
  ];
  const handleInputChange = ("e": React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))};
  const handleSubmit = ("e": React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true)};
  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>Quote Request Submitted - Zion Tech Group</title>
          <meta name="description" content="Your quote request has been submitted successfully." />
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-12 text-center max-w-md mx-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Quote Request Submitted!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for your interest. We'll review your request and get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg "hover": bg-blue-700 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </>
    )}
  return (
    <>
      <Head>
        <title>Request Quote - Zion Tech Group</title>
        <meta name="description" content="Get a personalized quote for Zion Tech Group's services and solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Request a Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your project and we'll provide a personalized quote for our services.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 "md": grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="micro-saas">Micro SaaS Development</option>
                  <option value="ai-services">AI Services</option>
                  <option value="it-services">IT Services</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
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
                  placeholder="Please describe your project requirements, goals, and any specific features you need..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )}"} else if (filePath === 'pages/schedule-demo.tsx') {
      content = "import React, { useState } from 'react';
import Head from 'next/head';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
export default function ScheduleDemo() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    "name": '',
    "email": '',
    "company": '',
    "phone": '',
    "service": '',
    "message": ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timeSlots = ['"9": 00 AM', '"10": 00 AM', '"11": 00 AM', '"1": 00 PM', '"2": 00 PM', '"3": 00 PM', '"4": 00 PM'
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))};
  const handleSubmit = ("e": React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true)};
  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>Demo Scheduled - Zion Tech Group</title>
          <meta name="description" content="Your demo has been scheduled successfully." />
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-12 text-center max-w-md mx-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Demo Scheduled!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for scheduling a demo. We'll send you a calendar invitation shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg "hover": bg-blue-700 transition-colors"
            >
              Schedule Another Demo
            </button>
          </div>
        </div>
      </>
    )}
  return (
    <>
      <Head>
        <title>Schedule Demo - Zion Tech Group</title>
        <meta name="description" content="Schedule a personalized demo of Zion Tech Group's services and solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Schedule a Demo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book a personalized demo to see how our solutions can help your business.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 "md": grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="micro-saas">Micro SaaS Development</option>
                  <option value="ai-services">AI Services</option>
                  <option value="it-services">IT Services</option>
                  <option value="consulting">Consulting</option>
                  <option value="general">General Overview</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    required
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your specific needs or questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg "focus": ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )}"}
    if (content) {
      fs.writeFileSync(filePath, content, 'utf8');
      } else {
      }
  } catch (error) {
    }
}
// Fix all corrupted files
corruptedFiles.forEach(fixCorruptedFile);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"console.log(" Fixing Final Corrupted Files.");"console.log("");/ List of final corrupted files to fix"const corruptedFiles = ["pages/docs/integration-examples.tsx"," "pages/marketplace.tsx"," "pages/privacy.tsx"," "pages/request-quote.tsx"," "pages/schedule-demo.tsx"];/ Function to fix a corrupted file by rewriting it with proper contentfunction fixCorruptedFile(filePath) { console.log(`\n Fixing: ${filePath}`); try {" let content = ""; " if (filePath === "pages/docs/integration-examples.tsx") {"" content = "import React from "react";"const Head from "next/head";"const Link from "next/link";"const { ArrowLeft, Code, Zap, ExternalLink } from "lucide-react";module.exports = default function IntegrationExamples() { const contact = { "" phone: "+1 302 464 0950", "" email: "kleber@ziontechgroup.com", "" address: "364 E Main St STE 1008 Middletown DE 19709", "" site: "https:/ziontechgroup.com" }; return ( <> <Head> <title>Integration Examples - Zion Tech Group Documentation</title>"" <meta name="description" content="Real-world integration examples for Zion Tech Group"s APIs and services." />" <link rel="canonical" href={\"\${contact.site}/docs/integration-examples\"} /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">" <div className="max-w-6xl mx-auto px-4 py-8"> {}" <div className="mb-8">" <Link href="/docs" className="inline-flex items-center text-blue-600 hover: text-blue-700 mb-4">" <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link>" <h1 className="text-4xl font-bold text-gray-900 mb-4">Integration Examples</h1>" <p className="text-xl text-gray-600"> Real-world examples showing how to integrate with our APIs and services </p> </div> {}" <div className="bg-white rounded-lg shadow-lg p-8 mb-8">" <div className="flex items-center mb-6">" <Code className="w-8 h-8 text-yellow-600 mr-3" />" <h2 className="text-2xl font-semibold text-gray-900">JavaScript/Node.js Integration</h2> </div> " <div className="space-y-6"> <div>" <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic API Client</h3>" <div className="bg-gray-900 rounded-lg p-6">" <pre className="text-blue-400 text-sm">"{\"class ZionTechAPI {"" constructor(apiKey, baseURL = "https: /api.ziontechgroup.com/v1") { this.apiKey = apiKey; this.baseURL = baseURL} async getServices() { try {` const response = await fetch(\`\${this.baseURL}/services\`, {" headers: {"` Authorization: \`Bearer \${this.apiKey}\`," "Content-Type": "application/json" } }); if (!response.ok) {"` throw new Error(\`HTTP error! status: \${response.status}\`)} return await response.json()} catch (error) {"" console.error("Error fetching services: ", error); throw error} } async submitContact(data) { try {` const response = await fetch(\`\${this.baseURL}/contact\`, {"" method: "POST"," headers: {"` Authorization: \`Bearer \${this.apiKey}\`," "Content-Type": "application/json" }," body: JSON.stringify(data) }); return await response.json()} catch (error) {"" console.error("Error submitting contact: ", error); throw error} }}/ Usage"const api = new ZionTechAPI("your-api-key");const services = await api.getServices();"console.log(services);\"} </pre> </div> </div> </div> </div> {}" <div className="bg-blue-50 rounded-lg p-8 text-center">" <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with Integration?</h2>" <p className="text-gray-600 mb-6"> Our technical team can help you integrate our services into your application </p>" <div className="flex flex-col sm: flex-row gap-4 justify-center">" <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Get Integration Support </Link>" <a href={\"mailto:\${contact.email}\"} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover: bg-blue-50 transition-colors"> Email Technical Team </a> </div> </div> </div> </div> </>"" )}"} else if (filePath === "pages/marketplace.tsx") {"" content = "import React from "react";"const Head from "next/head";"const Link from "next/link";"const { ShoppingCart, Star, ArrowRight } from "lucide-react";module.exports = default function Marketplace() { const marketplaceCategories = [{" title: "Products"," description: "Discover innovative technology products and solutions"," icon: ""," items: [" { name: "AI-Powered Analytics Platform", price: "Starting at $299/month", category: "AI & Analytics" }," { name: "Micro SaaS Starter Kit", price: "Starting at $99/month", category: "Micro SaaS" }," { name: "Cloud Infrastructure Suite", price: "Starting at $199/month", category: "Cloud Services" } ] }, {" title: "Services"," description: "Professional services to help your business grow"," icon: ""," items: [{ name: "Custom Development", price: "Starting at $150/hour", category: "Development" }," { name: "Consulting Services", price: "Starting at $200/hour", category: "Consulting" }," { name: "Technical Support", price: "Starting at $50/hour", category: "Support" } ] }, {" title: "Templates"," description: "Ready-to-use templates and components"," icon: ""," items: [{ name: "React Component Library", price: "Free", category: "Frontend" }," { name: "API Documentation Template", price: "Free", category: "Documentation" }," { name: "Project Management Template", price: "$29", category: "Productivity" } ] } ]; return ( <> <Head> <title>Marketplace - Zion Tech Group</title>"" <meta name="description" content="Discover products, services, and templates from Zion Tech Group"s marketplace." /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">" <div className="max-w-7xl mx-auto px-4 py-16"> {}" <div className="text-center mb-16">" <h1 className="text-5xl font-bold text-gray-900 mb-6"> Marketplace </h1>" <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Discover innovative products, services, and templates to accelerate your business growth </p> </div> {}" <div className="space-y-16"> {marketplaceCategories.map((category, index) => (" <div key={index} className="bg-white rounded-lg shadow-lg p-8">" <div className="flex items-center mb-8">" <div className="text-4xl mr-4">{category.icon}</div> <div>" <h2 className="text-3xl font-bold text-gray-900 mb-2"> {category.title} </h2>" <p className="text-lg text-gray-600"> {category.description} </p> </div> </div>" <div className="grid grid-cols-1 md: grid-cols-3 gap-6"> {category.items.map((item, itemIndex) => (" <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover: shadow-lg transition-shadow">" <h3 className="text-xl font-semibold text-gray-900 mb-2"> {item.name} </h3>" <p className="text-blue-600 font-semibold mb-2"> {item.price} </p>" <p className="text-sm text-gray-500 mb-4"> {item.category} </p>" <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors flex items-center justify-center">" <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart </button> </div> ))} </div> </div> ))} </div> {}" <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white text-center mt-16">" <h2 className="text-3xl font-bold mb-6">" Can"t Find What You"re Looking For? </h2>" <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"> We can create custom solutions tailored to your specific needs </p>" <div className="flex flex-col sm: flex-row gap-4 justify-center">" <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"> Request Custom Solution" <ArrowRight className="w-5 h-5 ml-2" /> </Link>" <Link href="/services" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"> Browse All Services </Link> </div> </div> </div> </div> </>"" )}"} else if (filePath === "pages/privacy.tsx") {"" content = "import React from "react";"const Head from "next/head";"const PrivacyPage: React.FC = () => { return ( <> <Head> <title>Privacy Policy - Zion Tech Group</title>" <meta name="description" content="How Zion Tech Group collects, uses, and protects your data." /> </Head> " <section className="bg-white">" <div className="container mx-auto px-4 py-12">" <h1 className="text-3xl md: text-4xl font-bold text-gray-900 mb-6"> Privacy Policy </h1>" <p className="text-gray-700 mb-6">Last updated: 2025-09-03</p> " <div className="prose max-w-none"> <p>We respect your privacy. This policy explains what information we collect and how we use it.</p> <h2>Information We Collect</h2> <ul> <li>Contact details you provide (name, email, phone) via forms</li> <li>Usage analytics (pages visited, approximate location, device/browser)</li> <li>Business information shared to scope projects</li> </ul> <h2>How We Use Information</h2> <ul> <li>To respond to inquiries and provide services</li> <li>To improve our website and offerings</li> <li>To comply with legal obligations</li> </ul> <h2>Data Sharing</h2> <p>We do not sell personal data. We may share data with service providers under strict agreements (e.g., hosting, analytics) or when required by law.</p> <h2>Security</h2> <p>We use industry-standard safeguards such as encryption in transit, least-privilege access, and regular security reviews.</p> <h2>Your Rights</h2>" <p>You may request access, correction, or deletion of your data. Contact us at <a href="mailto: kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p> <h2>Contact</h2>" <p>Zion Tech Group, 364 E Main St STE 1008, Middletown DE 19709. Phone: +1 302 464 0950</p> </div> </div> </section> </> )};module.exports = default PrivacyPage;"""} else if (filePath === "pages/request-quote.tsx") {"" content = "import React, { useState } from "react";"const Head from "next/head";"const { Send, CheckCircle } from "lucide-react";module.exports = default function RequestQuote() { const [formData, setFormData] = useState({"" name: "","" email: "","" company: "","" phone: "","" service: "","" budget: "","" timeline: "","" description: "","" industry: "" }); const [isSubmitted, setIsSubmitted] = useState(false);" const industries = ["Technology"," "Healthcare"," "Finance"," "Education"," "Manufacturing"," "Retail"," "Real Estate"," "Other" ];" const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { const { name, value } = e.target; setFormData(prev => ({ .prev, [name]: value }))};" const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); / Handle form submission here" console.log("Quote request submitted:", formData); setIsSubmitted(true)}; if (isSubmitted) { return ( <> <Head> <title>Quote Request Submitted - Zion Tech Group</title>" <meta name="description" content="Your quote request has been submitted successfully." /> </Head> " <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">" <div className="bg-white rounded-lg shadow-lg p-12 text-center max-w-md mx-4">" <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />" <h1 className="text-3xl font-bold text-gray-900 mb-4"> Quote Request Submitted! </h1>" <p className="text-gray-600 mb-6">" Thank you for your interest. We"ll review your request and get back to you within 24 hours </p> <button onClick={() => setIsSubmitted(false)}" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors" > Submit Another Request </button> </div> </div> </> )} return ( <> <Head> <title>Request Quote - Zion Tech Group</title>"" <meta name="description" content="Get a personalized quote for Zion Tech Group"s services and solutions." /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">" <div className="max-w-4xl mx-auto px-4 py-16">" <div className="text-center mb-12">" <h1 className="text-5xl font-bold text-gray-900 mb-6"> Request a Quote </h1>" <p className="text-xl text-gray-600 max-w-2xl mx-auto">" Tell us about your project and we"ll provide a personalized quote for our services </p> </div>" <div className="bg-white rounded-lg shadow-lg p-8">" <form onSubmit={handleSubmit} className="space-y-6">" <div className="grid grid-cols-1 md: grid-cols-2 gap-6"> <div>" <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"> Full Name </label> <input" type="text"" id="name"" name="name" required value={formData.name} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> <div>" <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email Address </label> <input" type="email"" id="email"" name="email" required value={formData.email} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> <div>" <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2"> Company </label> <input" type="text"" id="company"" name="company" value={formData.company} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> <div>" <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2"> Phone Number </label> <input" type="tel"" id="phone"" name="phone" value={formData.phone} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> </div> <div>" <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"> Service Type </label> <select" id="service"" name="service" required value={formData.service} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" >" <option value="">Select a service</option>" <option value="micro-saas">Micro SaaS Development</option>" <option value="ai-services">AI Services</option>" <option value="it-services">IT Services</option>" <option value="consulting">Consulting</option>" <option value="other">Other</option> </select> </div>" <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <div>" <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2"> Budget Range </label> <select" id="budget"" name="budget" value={formData.budget} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" >" <option value="">Select budget range</option>" <option value="under-5k">Under $5,000</option>" <option value="5k-10k">$5,000 - $10,000</option>" <option value="10k-25k">$10,000 - $25,000</option>" <option value="25k-50k">$25,000 - $50,000</option>" <option value="over-50k">Over $50,000</option> </select> </div> <div>" <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2"> Timeline </label> <select" id="timeline"" name="timeline" value={formData.timeline} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" >" <option value="">Select timeline</option>" <option value="asap">ASAP</option>" <option value="1-month">Within 1 month</option>" <option value="3-months">Within 3 months</option>" <option value="6-months">Within 6 months</option>" <option value="flexible">Flexible</option> </select> </div> </div> <div>" <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2"> Industry </label> <select" id="industry"" name="industry" value={formData.industry} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" >" <option value="">Select your industry</option> {industries.map((industry) => ( <option key={industry} value={industry}> {industry} </option> ))} </select> </div> <div>" <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2"> Project Description </label> <textarea" id="description"" name="description" required rows={6} value={formData.description} onChange={handleInputChange}" placeholder="Please describe your project requirements, goals, and any specific features you need."" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" /> </div>" <div className="text-center"> <button" type="submit"" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold" >" <Send className="w-5 h-5 mr-2" /> Submit Quote Request </button> </div> </form> </div> </div> </div> </>"" )}"} else if (filePath === "pages/schedule-demo.tsx") {"" content = "import React, { useState } from "react";"const Head from "next/head";"const { Calendar, Clock, CheckCircle } from "lucide-react";module.exports = default function ScheduleDemo() {" const [selectedDate, setSelectedDate] = useState("");" const [selectedTime, setSelectedTime] = useState(""); const [formData, setFormData] = useState({"" name: "","" email: "","" company: "","" phone: "","" service: "","" message: "" }); const [isSubmitted, setIsSubmitted] = useState(false);"" const timeSlots = ["9: 00 AM", "10: 00 AM", "11: 00 AM", "1: 00 PM", "2: 00 PM", "3: 00 PM", "4: 00 PM" ]; const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { const { name, value } = e.target; setFormData(prev => ({ .prev, [name]: value }))};" const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); / Handle form submission here" console.log("Demo scheduled:", { .formData, selectedDate, selectedTime }); setIsSubmitted(true)}; if (isSubmitted) { return ( <> <Head> <title>Demo Scheduled - Zion Tech Group</title>" <meta name="description" content="Your demo has been scheduled successfully." /> </Head> " <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">" <div className="bg-white rounded-lg shadow-lg p-12 text-center max-w-md mx-4">" <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />" <h1 className="text-3xl font-bold text-gray-900 mb-4"> Demo Scheduled! </h1>" <p className="text-gray-600 mb-6">" Thank you for scheduling a demo. We"ll send you a calendar invitation shortly </p> <button onClick={() => setIsSubmitted(false)}" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors" > Schedule Another Demo </button> </div> </div> </> )} return ( <> <Head> <title>Schedule Demo - Zion Tech Group</title>"" <meta name="description" content="Schedule a personalized demo of Zion Tech Group"s services and solutions." /> </Head>" <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">" <div className="max-w-4xl mx-auto px-4 py-16">" <div className="text-center mb-12">" <h1 className="text-5xl font-bold text-gray-900 mb-6"> Schedule a Demo </h1>" <p className="text-xl text-gray-600 max-w-2xl mx-auto"> Book a personalized demo to see how our solutions can help your business </p> </div>" <div className="bg-white rounded-lg shadow-lg p-8">" <form onSubmit={handleSubmit} className="space-y-6">" <div className="grid grid-cols-1 md: grid-cols-2 gap-6"> <div>" <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"> Full Name </label> <input" type="text"" id="name"" name="name" required value={formData.name} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> <div>" <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email Address </label> <input" type="email"" id="email"" name="email" required value={formData.email} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> <div>" <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2"> Company </label> <input" type="text"" id="company"" name="company" value={formData.company} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> <div>" <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2"> Phone Number </label> <input" type="tel"" id="phone"" name="phone" value={formData.phone} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> </div> <div>" <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"> Service Interest </label> <select" id="service"" name="service" value={formData.service} onChange={handleInputChange}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" >" <option value="">Select a service</option>" <option value="micro-saas">Micro SaaS Development</option>" <option value="ai-services">AI Services</option>" <option value="it-services">IT Services</option>" <option value="consulting">Consulting</option>" <option value="general">General Overview</option> </select> </div>" <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <div>" <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2"> Preferred Date </label> <input" type="date"" id="date" required value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}" min={new Date().toISOString().split("T")[0]}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> <div>" <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2"> Preferred Time </label> <select" id="time" required value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" >" <option value="">Select a time</option> {timeSlots.map((time) => ( <option key={time} value={time}> {time} </option> ))} </select> </div> </div> <div>" <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> Additional Information </label> <textarea" id="message"" name="message" rows={4} value={formData.message} onChange={handleInputChange}" placeholder="Tell us about your specific needs or questions."" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent" /> </div>" <div className="text-center"> <button" type="submit"" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold" >" <Calendar className="w-5 h-5 mr-2" /> Schedule Demo </button> </div> </form> </div> </div> </div> </>" )}"} if (content) {" fs.writeFileSync(filePath, content, "utf8");` console.log(` Fixed ${filePath}`)} else {` console.log(` No content defined for ${filePath}`)} } catch (error) {` console.log(` Error fixing ${filePath}: ${error.message}`)}}/ Fix all corrupted filescorruptedFiles.forEach(fixCorruptedFile);"console.log("\n All final corrupted files fixed!");""`"`
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
// console.log(' Fixing Final Corrupted Files...')
console.log('')
const corruptedFiles = ['pages/docs/integration-examples.tsx']
  'pages/marketplace.tsx'
  'pages/privacy.tsx'
  'pages/request-quote.tsx'
  'pages/schedule-demo.tsx'
    let content = ''
    if (filePath === 'pages/docs/integration-examples.tsx')
      content = "
    "name"
    "email"
    "company"
    "phone"
    "service"
    "message"
  const timeSlots = ['"9": 00 AM', '"10": 00 AM', '"11": 00 AM', '"1": 00 PM', '"2": 00 PM', '"3": 00 PM', '"4"]
<<<<<<< HEAD
        <meta name="description" content="
=======
<<<<<<< HEAD
        <meta name="description" content="
=======
<<<<<<< HEAD
        <meta name="description" content="
=======
        <meta name="description" content="
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
