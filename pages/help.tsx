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
    { question: "How quickly can you start working on my project?", answer: "We typically begin new projects within 1-2 weeks of contract signing, depending on project complexity and current workload." },
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

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredArticles = selectedCategory 
    ? selectedCategory.articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : helpCategories.flatMap(category => category.articles).filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <>
      <Head>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions, troubleshooting guides, and contact information." />
        <link rel="canonical" href={`${contact.site}/help`} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to your questions, get technical support, and learn how to make the most of our services.
            </p>
          </div>

          {/* Search */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Search Help Articles</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {helpCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.articles.length} articles</p>
              </div>
            ))}
          </div>

          {/* Articles */}
          {selectedCategory && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">{selectedCategory.title} Articles</h2>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  ← Back to all categories
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredArticles.map((article, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm">{article.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="text-3xl mb-4">{method.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.method}</h3>
                  <p className="text-gray-600 text-sm mb-2">{method.details}</p>
                  <p className="text-gray-500 text-xs">{method.availability}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
            <p className="text-blue-100 mb-6">
              Our technical team is here to help you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contact.phone}`} 
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Call {contact.phone}
              </a>
              <a 
                href={`mailto:${contact.email}`} 
                className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}