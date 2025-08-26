import React from 'react';
import Head from 'next/head';

export default function HelpCenterPage() {
  return (
    <>
      <Head>
        <title>Help Center | Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's services. Find answers to FAQs, documentation, and contact our support team." />
        <meta property="og:title" content="Help Center | Zion Tech Group" />
        <meta property="og:description" content="Get help and support for Zion Tech Group's services." />
        <link rel="canonical" href="https://ziontechgroup.com/help-center" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Help Center
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Find answers to your questions, access documentation, and get the support you need for our technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#faq" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                Browse FAQ
              </a>
              <a href="/contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Contact Support
              </a>
            </div>
          </section>

          {/* Search Section */}
          <section className="mb-16">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 text-lg"
                />
                <button className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                  Search
                </button>
              </div>
            </div>
          </section>

          {/* Quick Help Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Getting Started */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
                <p className="text-white/60 text-sm mb-4">New to our services? Start here</p>
                <a href="/help/getting-started" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                  View Guides →
                </a>
              </div>

              {/* AI Solutions */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Solutions</h3>
                <p className="text-white/60 text-sm mb-4">Help with AI and ML services</p>
                <a href="/help/ai-solutions" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors text-sm">
                  View Guides →
                </a>
              </div>

              {/* Cybersecurity */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
                <p className="text-white/60 text-sm mb-4">Security and compliance help</p>
                <a href="/help/cybersecurity" className="text-red-400 hover:text-red-300 transition-colors text-sm">
                  View Guides →
                </a>
              </div>

              {/* API & Integration */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">API & Integration</h3>
                <p className="text-white/60 text-sm mb-4">Technical integration support</p>
                <a href="/help/api-integration" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                  View Guides →
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">How do I get started with Zion Tech Group's services?</h3>
                <p className="text-white/70 mb-4">
                  Getting started is easy! Simply contact our team through our contact form or email us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business.
                </p>
                <a href="/help/getting-started" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                  Read Full Guide →
                </a>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3 text-fuchsia-400">What AI solutions do you offer?</h3>
                <p className="text-white/70 mb-4">
                  We offer comprehensive AI solutions including machine learning models, natural language processing, computer vision, predictive analytics, and AI automation. Our solutions are customized to meet your specific business requirements.
                </p>
                <a href="/help/ai-solutions" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors text-sm">
                  Learn More →
                </a>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3 text-green-400">How secure are your cybersecurity solutions?</h3>
                <p className="text-white/70 mb-4">
                  Our cybersecurity solutions follow industry best practices and comply with major standards including SOC2, ISO 27001, GDPR, and HIPAA. We implement zero-trust architecture and provide 24/7 threat monitoring.
                </p>
                <a href="/help/cybersecurity" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                  Security Details →
                </a>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Do you provide ongoing support after implementation?</h3>
                <p className="text-white/70 mb-4">
                  Yes! We provide comprehensive ongoing support including monitoring, maintenance, updates, and 24/7 technical support. Our team is always available to help ensure your solutions continue to perform optimally.
                </p>
                <a href="/help/support" className="text-orange-400 hover:text-orange-300 transition-colors text-sm">
                  Support Details →
                </a>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3 text-purple-400">Can you work with existing systems and infrastructure?</h3>
                <p className="text-white/70 mb-4">
                  Absolutely! We specialize in integrating with existing systems and infrastructure. Our team will assess your current setup and design solutions that work seamlessly with your existing technology stack.
                </p>
                <a href="/help/integration" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
                  Integration Guide →
                </a>
              </div>
            </div>
          </section>

          {/* Documentation & Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Documentation & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* User Guides */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">User Guides</h3>
                <p className="text-white/70 mb-4">Step-by-step guides for using our services</p>
                <a href="/help/user-guides" className="text-blue-400 hover:text-blue-300 transition-colors">Browse Guides →</a>
              </div>

              {/* API Documentation */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-teal-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">API Documentation</h3>
                <p className="text-white/70 mb-4">Technical documentation and code examples</p>
                <a href="/help/api-docs" className="text-teal-400 hover:text-teal-300 transition-colors">View Docs →</a>
              </div>

              {/* Video Tutorials */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Video Tutorials</h3>
                <p className="text-white/70 mb-4">Visual guides and walkthroughs</p>
                <a href="/help/video-tutorials" className="text-pink-400 hover:text-pink-300 transition-colors">Watch Videos →</a>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl p-12 border border-cyan-500/30">
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Our support team is here to help. Contact us for personalized assistance with any questions or issues.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                  Contact Support
                </a>
                <a href="/help/live-chat" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                  Live Chat
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}