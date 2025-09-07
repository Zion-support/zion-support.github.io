<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';



// Simple ServiceCard component
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.',
  keywords: 'micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence'
=======
export const metadata = {
  title: 'Micro Saas | Zion Tech Group',
  description: 'Professional micro saas services for your business needs.',
  keywords: 'micro-saas, services, business, technology'
>>>>>>> 19d1d1ef532f9e4690306331c74cc9ccbd0b556b
};

export default function MicroSaaSPage() {
  return (
<<<<<<< HEAD
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Micro SaaS Development
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Build and launch your next micro SaaS product with our comprehensive development services. 
          From AI-powered tools to productivity apps, we help you create revenue-generating solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Development Inquiry"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Your SaaS Project
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
=======
>>>>>>> 66636f0649a4af9daff867918bf1282f740567c2
import Link from "next/link";

export const metadata = {
  title: "Micro SaaS Development | Zion Tech Group",
  description: "Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.",
  keywords: "micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence"
};

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Micro SaaS Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build powerful, scalable micro SaaS applications that solve specific business problems 
            and generate recurring revenue streams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Micro SaaS Solutions</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">AI Content Generator Pro - Automated content creation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">Smart Invoice Generator - Automated billing solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">AI Social Media Scheduler - Social media automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">AI Meeting Assistant - Meeting optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">AI Customer Insights Platform - Customer analytics</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Process</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">1</span>
                <span className="text-gray-700">Market research and validation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">2</span>
                <span className="text-gray-700">MVP development and testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">3</span>
                <span className="text-gray-700">User feedback integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">4</span>
                <span className="text-gray-700">Scalable architecture implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">5</span>
                <span className="text-gray-700">Launch and ongoing support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MVP Development</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">$5,000</div>
              <ul className="space-y-3 mb-8">
                <li>Basic functionality</li>
                <li>Simple UI/UX</li>
                <li>Core features only</li>
                <li>3 months support</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full SaaS Platform</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">$15,000</div>
              <ul className="space-y-3 mb-8">
                <li>Complete feature set</li>
                <li>Advanced UI/UX</li>
                <li>Payment integration</li>
                <li>User management</li>
                <li>6 months support</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solution</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li>Custom features</li>
                <li>Advanced integrations</li>
                <li>Scalable architecture</li>
                <li>Dedicated support</li>
                <li>Ongoing maintenance</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Build Your Micro SaaS?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our team to discuss your micro SaaS idea and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}