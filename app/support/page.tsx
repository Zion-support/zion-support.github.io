import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for all Zion Tech Group services. Find answers, contact support, and access our knowledge base." />
        <meta name="keywords" content="support, help, customer service, technical support, knowledge base" />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you succeed. Get the support you need for all our services 
              and solutions with our comprehensive support resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">FAQ</h3>
              <p className="text-gray-300 mb-6">
                Find quick answers to the most commonly asked questions about our services, 
                pricing, and technical requirements.
              </p>
              <a href="#faq" className="text-blue-400 hover:text-blue-300 font-semibold">
                Browse FAQ →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Documentation</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive guides, API documentation, and technical resources 
                to help you get the most out of our services.
              </p>
              <a href="/api-docs" className="text-blue-400 hover:text-blue-300 font-semibold">
                View Docs →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Support</h3>
              <p className="text-gray-300 mb-6">
                Get in touch with our support team for personalized assistance 
                with your specific needs and technical issues.
              </p>
              <a href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
                Contact Us →
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-white mb-3">What services do you offer?</h3>
                <p className="text-gray-300">
                  We offer comprehensive AI and IT solutions including AI services, cloud infrastructure, 
                  web development, mobile development, data analytics, and more. Check our 
                  <a href="/services" className="text-blue-400 hover:text-blue-300"> services page</a> for a complete list.
                </p>
              </div>
              
              <div className="border-b border-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-white mb-3">How do I get started?</h3>
                <p className="text-gray-300">
                  Getting started is easy! Contact us through our 
                  <a href="/contact" className="text-blue-400 hover:text-blue-300"> contact page</a> or call us at 
                  <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300"> +1 (302) 464-0950</a> 
                  to discuss your needs and get a customized solution.
                </p>
              </div>
              
              <div className="border-b border-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-white mb-3">What are your pricing options?</h3>
                <p className="text-gray-300">
                  We offer flexible pricing options tailored to your needs. Check our 
                  <a href="/pricing" className="text-blue-400 hover:text-blue-300"> pricing page</a> for detailed 
                  information about our service packages and pricing tiers.
                </p>
              </div>
              
              <div className="border-b border-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Do you provide ongoing support?</h3>
                <p className="text-gray-300">
                  Yes! We provide comprehensive ongoing support for all our services, including 
                  technical support, maintenance, updates, and optimization to ensure your 
                  solutions continue to perform at their best.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">How can I track my project progress?</h3>
                <p className="text-gray-300">
                  We provide regular updates and progress reports throughout your project. 
                  You'll have access to our project management portal where you can track 
                  milestones, communicate with our team, and review deliverables.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you with any questions or issues. 
              Contact us today for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="tel:+13024640950" 
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;