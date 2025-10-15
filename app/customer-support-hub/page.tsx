import React from 'react';
import { Helmet } from 'react-helmet-async';

const CustomerSupportHubPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Customer Support Hub - Zion Tech Group</title>
        <meta name="description" content="Comprehensive customer support platform with AI-powered ticketing, live chat, knowledge base, and multi-channel communication." />
        <meta name="keywords" content="customer support, helpdesk, ticketing system, live chat, knowledge base, customer service" />
        <link rel="canonical" href="https://ziontechgroup.com/customer-support-hub" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Customer Support Hub
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline your customer support with our all-in-one platform featuring AI-powered ticketing, live chat, and intelligent automation.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Ticketing</h3>
              <p className="text-gray-300 mb-6">Intelligent ticket routing, automatic categorization, and smart response suggestions.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Smart ticket routing</li>
                <li>• Auto-categorization</li>
                <li>• Response suggestions</li>
                <li>• Priority detection</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Live Chat Integration</h3>
              <p className="text-gray-300 mb-6">Real-time customer communication with chatbot assistance and agent handoff.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Real-time messaging</li>
                <li>• Chatbot assistance</li>
                <li>• Agent handoff</li>
                <li>• File sharing</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Knowledge Base</h3>
              <p className="text-gray-300 mb-6">Comprehensive self-service portal with searchable articles and FAQs.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Searchable articles</li>
                <li>• FAQ automation</li>
                <li>• Video tutorials</li>
                <li>• Community forums</li>
              </ul>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Support Dashboard</h2>
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Open Tickets</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">47</div>
                  <div className="text-sm text-gray-400">+12% from yesterday</div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Response Time</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-2">2.3h</div>
                  <div className="text-sm text-gray-400">Average response</div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Satisfaction</h3>
                  <div className="text-3xl font-bold text-green-400 mb-2">4.8/5</div>
                  <div className="text-sm text-gray-400">Customer rating</div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Resolution Rate</h3>
                  <div className="text-3xl font-bold text-purple-400 mb-2">94%</div>
                  <div className="text-sm text-gray-400">First contact</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Tickets</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-600/50 rounded-lg">
                      <div>
                        <div className="text-white font-medium">#1234 - Login Issue</div>
                        <div className="text-gray-400 text-sm">High Priority</div>
                      </div>
                      <span className="text-cyan-400 text-sm">In Progress</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-600/50 rounded-lg">
                      <div>
                        <div className="text-white font-medium">#1233 - Billing Question</div>
                        <div className="text-gray-400 text-sm">Medium Priority</div>
                      </div>
                      <span className="text-green-400 text-sm">Resolved</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-600/50 rounded-lg">
                      <div>
                        <div className="text-white font-medium">#1232 - Feature Request</div>
                        <div className="text-gray-400 text-sm">Low Priority</div>
                      </div>
                      <span className="text-blue-400 text-sm">Pending</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Live Chat</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-slate-600/50 rounded-lg">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-cyan-400 text-sm font-medium">JD</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">John Doe</div>
                        <div className="text-gray-400 text-sm">Waiting for agent</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-slate-600/50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-400 text-sm font-medium">AS</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">Agent Sarah</div>
                        <div className="text-gray-400 text-sm">Active - 2 conversations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Multi-Channel Support</h3>
                    <p className="text-gray-300">Unify all customer communication channels including email, chat, phone, and social media.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">SLA Management</h3>
                    <p className="text-gray-300">Set and track service level agreements with automated escalation and notifications.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Workflow Automation</h3>
                    <p className="text-gray-300">Automate repetitive tasks and create custom workflows to improve efficiency.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Performance Analytics</h3>
                    <p className="text-gray-300">Track team performance, customer satisfaction, and support metrics with detailed reports.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Integration Hub</h3>
                    <p className="text-gray-300">Connect with your existing tools including CRM, email, and third-party applications.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Security & Compliance</h3>
                    <p className="text-gray-300">Enterprise-grade security with data encryption, access controls, and compliance features.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Support?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies who are already using our Customer Support Hub to deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="/pricing"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSupportHubPage;