const fs = require('fs');

// Function to create a proper support page
function createSupportPage() {
  return `'use client';

import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Topics', count: 25 },
    { name: 'getting-started', label: 'Getting Started', count: 8 },
    { name: 'billing', label: 'Billing & Plans', count: 5 },
    { name: 'technical', label: 'Technical Issues', count: 7 },
    { name: 'api', label: 'API & Integration', count: 5 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our onboarding guide.'
    },
    {
      id: 2,
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
    },
    {
      id: 3,
      category: 'technical',
      question: 'How can I contact technical support?',
      answer: 'You can reach our technical support team via email, live chat, or by creating a support ticket in your dashboard.'
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Support Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers to common questions and contact our support team."
        keywords="support, help, FAQ, contact, technical support, customer service"
        canonicalUrl="https://ziontechgroup.com/support"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get help and support for all Zion Tech Group services. Find answers to common questions and contact our support team.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={\`px-4 py-2 rounded-lg font-medium transition-colors \${
                  selectedCategory === category.name
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }\`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Still Need Help?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Support</h3>
                <p className="text-gray-300 mb-4">
                  Reach out to our support team for personalized assistance.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
                  Contact Support
                </button>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Live Chat</h3>
                <p className="text-gray-300 mb-4">
                  Chat with our support team in real-time.
                </p>
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}`;
}

// Function to create a proper tutorials page
function createTutorialsPage() {
  return `'use client';

import React from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TutorialsPage() {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Solutions',
      description: 'Learn the basics of implementing AI solutions in your business.',
      duration: '15 min',
      difficulty: 'Beginner',
      category: 'AI Solutions'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud.',
      duration: '30 min',
      difficulty: 'Intermediate',
      category: 'Cloud Services'
    },
    {
      id: 3,
      title: 'API Integration Tutorial',
      description: 'How to integrate our APIs into your applications.',
      duration: '20 min',
      difficulty: 'Intermediate',
      category: 'Development'
    },
    {
      id: 4,
      title: 'Security Configuration',
      description: 'Configure security settings for your enterprise solutions.',
      duration: '25 min',
      difficulty: 'Advanced',
      category: 'Security'
    }
  ];

  return (
    <>
      <SEOHead
        title="Tutorials - Zion Tech Group"
        description="Learn how to use Zion Tech Group services with our comprehensive tutorials and guides."
        keywords="tutorials, guides, learning, documentation, how-to, training"
        canonicalUrl="https://ziontechgroup.com/tutorials"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tutorials & Guides
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn how to use Zion Tech Group services with our comprehensive tutorials and guides.
            </p>
          </div>

          {/* Tutorials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-purple-400 font-medium">{tutorial.category}</span>
                  <span className="text-sm text-gray-400">{tutorial.duration}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                <p className="text-gray-300 mb-4">{tutorial.description}</p>
                <div className="flex items-center justify-between">
                  <span className={\`text-sm px-2 py-1 rounded \${
                    tutorial.difficulty === 'Beginner' ? 'bg-green-600' :
                    tutorial.difficulty === 'Intermediate' ? 'bg-yellow-600' :
                    'bg-red-600'
                  }\`}>
                    {tutorial.difficulty}
                  </span>
                  <button className="text-purple-400 hover:text-purple-300 font-medium">
                    Start Tutorial →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold">
              Contact Support
            </button>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}`;
}

// Fix support page
try {
  console.log('Regenerating app/support/page.tsx...');
  const supportContent = createSupportPage();
  fs.writeFileSync('app/support/page.tsx', supportContent);
  console.log('✅ Regenerated app/support/page.tsx');
} catch (error) {
  console.error('❌ Error regenerating app/support/page.tsx:', error.message);
}

// Fix tutorials page
try {
  console.log('Regenerating app/tutorials/page.tsx...');
  const tutorialsContent = createTutorialsPage();
  fs.writeFileSync('app/tutorials/page.tsx', tutorialsContent);
  console.log('✅ Regenerated app/tutorials/page.tsx');
} catch (error) {
  console.error('❌ Error regenerating app/tutorials/page.tsx:', error.message);
}

console.log('Final files regenerated!');