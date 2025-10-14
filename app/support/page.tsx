<<<<<<< HEAD

import { Helmet } from "react-helmet-async";
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/main

<<<<<<< HEAD
    }
  ];

  const benefits = [{
      question: 'How do I get started with your AI services?',''
      answer: 'Getting started is easy! Contact our team for a consultation, and we\'ll help you identify the best AI solutions for your business needs.''},'
    {
      question: 'What is your response time for support requests?',''
      answer: 'We typically respond to support requests within 2-4 hours during business hours, and within 24 hours for non-urgent matters.'},'
    {
      question: 'Do you offer training for your solutions?',''
      answer: 'Yes! We provide comprehensive training programs for all our solutions, including documentation, video tutorials, and live training sessions.'},'
    {
      question: 'What if I need custom development?',''
      answer: 'We offer custom development services for unique requirements. Contact our team to discuss your specific needs and get a quote.'}'
  ]
=======
export default function Page() {
>>>>>>> origin/main
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Learn more about page" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Page</h1>
          <p className="text-gray-300 text-xl mb-8">Learn more about page</p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                This page is currently under development. We're working hard to bring you the best experience.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="/" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Go Home
                </a>
                <a 
                  href="/contact" 
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
export default FiveGSolutionsPage;
=======
>>>>>>> origin/main
