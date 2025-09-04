import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Help() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  const helpCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        { title: "How to Get Started with Our Services", description: "Step-by-step guide to begin your technology journey" },
        { title: "Account Setup and Configuration", description: "Learn how to set up your account and configure settings" },
        { title: "Understanding Our Service Portfolio", description: "Overview of all available services and solutions" },
        { title: "Initial Consultation Process", description: "What to expect during your first consultation" }
      ]
    },
    {
      title: "Technical Support",
      icon: "🔧",
      articles: [
        { title: "Troubleshooting Common Issues", description: "Solutions to frequently encountered problems" },
        { title: "System Requirements and Compatibility", description: "Technical specifications and compatibility information" },
        { title: "Performance Optimization", description: "Tips for improving system performance" },
        { title: "Integration and API Documentation", description: "Technical documentation for integrations" }
      ]
    },
    {
      title: "Billing & Account",
      icon: "💳",
      articles: [
        { title: "Understanding Your Bill", description: "How to read and understand your service charges" },
        { title: "Payment Methods and Billing Cycles", description: "Available payment options and billing schedules" },
        { title: "Upgrading or Downgrading Services", description: "How to modify your service plan" },
        { title: "Cancellation and Refund Policy", description: "Information about service cancellation and refunds" }
      ]
    },
    {
      title: "Security & Privacy",
      icon: "🛡️",
      articles: [
        { title: "Security Best Practices", description: "Guidelines for maintaining security" },
        { title: "Data Privacy and Protection", description: "How we protect your data and privacy" },
        { title: "Two-Factor Authentication Setup", description: "How to enable 2FA for your account" },
        { title: "Reporting Security Issues", description: "How to report security concerns" }
      ]
    }
  ];

  const faqItems = [
    { question: "How quickly can you start working on my project?", answer: "We typically begin new projects within 1-2 weeks of contract signing depending on project complexity and current workload." },
    { question: "Do you provide ongoing support after project completion?", answer: "Yes, we offer comprehensive support packages including maintenance, updates, and technical assistance." },
    { question: "What technologies do you specialize in?", answer: "We specialize in AI/ML, cloud computing, cybersecurity, quantum computing, micro SaaS development, and digital transformation." },
    { question: "Can you work with our existing systems?", answer: "Absolutely. We have extensive experience integrating with existing systems and can work with most technology stacks." },
    { question: "Do you offer remote services?", answer: "Yes, we provide both remote and on-site services, depending on your needs and project requirements." }
  ];

  const contactMethods = [
    { method: "Phone Support", details: "+1 302 464 0950", availability: "Mon-Fri 9AM-6PM EST", icon: "📞" },
    { method: "Email Support", details: "kleber@ziontechgroup.com", availability: "24/7 Response within 24 hours", icon: "✉️" },
    { method: "Live Chat", details: "Available on website", availability: "Mon-Fri 9AM-6PM EST", icon: "💬" },
    { method: "Emergency Support", details: "Critical issues only", availability: "24/7 for urgent matters", icon: "🚨" }
  ];

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group | Support & Documentation</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find documentation, troubleshooting guides, and contact our support team." />
        <meta name="keywords" content="help, support, documentation, troubleshooting, FAQ, customer service, Zion Tech Group" />
        <link rel="canonical" href={`${contact.site}/help`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Help Center - Zion Tech Group | Support & Documentation" />
        <meta property="og:description" content="Get help and support for Zion Tech Group services." />
        <meta property="og:url" content={`${contact.site}/help`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${contact.site}/og-image.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Help Center - Zion Tech Group | Support & Documentation" />
        <meta name="twitter:description" content="Get help and support for Zion Tech Group services." />
        <meta name="twitter:image" content={`${contact.site}/og-image.svg`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Help & Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to your questions, access technical documentation, and get the support you need for our services.
            </p>
          </div>

          {/* Help Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {helpCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-gray-50 rounded-r-lg transition-colors">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{article.title}</h4>
                      <p className="text-xs text-gray-600">{article.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-8 text-center">Contact Our Support Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-4">{method.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{method.method}</h3>
                  <p className="text-sm mb-2">{method.details}</p>
                  <p className="text-xs opacity-80">{method.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}