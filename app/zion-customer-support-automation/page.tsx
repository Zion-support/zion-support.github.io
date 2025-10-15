import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionCustomerSupportAutomationPage() {
  return (
    <>
      <Helmet>
        <title>Zion Customer Support Automation - AI-Powered Support Solutions</title>
        <meta name="description" content="Advanced customer support automation platform with AI chatbots, ticket routing, and intelligent responses. Improve customer satisfaction while reducing support costs." />
        <meta name="keywords" content="customer support automation, AI chatbot, ticket management, customer service, support automation, AI support" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Zion Customer Support Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionize your customer support with AI-powered automation, intelligent chatbots, and smart ticket routing. Deliver exceptional customer experiences while reducing costs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Free Trial
              </a>
              <a href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Pricing
              </a>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Intelligent Support Features</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Chatbots</h3>
                    <p className="text-gray-600">Deploy intelligent chatbots that understand context, provide accurate answers, and escalate complex issues to human agents seamlessly.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Ticket Routing</h3>
                    <p className="text-gray-600">Automatically categorize and route tickets to the right agents based on content analysis, priority, and agent expertise.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Base Integration</h3>
                    <p className="text-gray-600">Connect your knowledge base to provide instant, accurate answers and suggestions to both customers and support agents.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Sentiment Analysis</h3>
                    <p className="text-gray-600">Monitor customer sentiment in real-time and prioritize urgent or frustrated customers for immediate attention.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Pricing Plans</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$59/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Up to 1,000 tickets/month</li>
                    <li>Basic chatbot</li>
                    <li>Email support</li>
                    <li>Basic analytics</li>
                    <li>Knowledge base</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$149/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Up to 10,000 tickets/month</li>
                    <li>Advanced AI chatbot</li>
                    <li>Smart routing</li>
                    <li>Advanced analytics</li>
                    <li>Priority support</li>
                    <li>Multi-channel support</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$399/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Unlimited tickets</li>
                    <li>Custom AI models</li>
                    <li>White-label options</li>
                    <li>24/7 support</li>
                    <li>Custom integrations</li>
                    <li>Dedicated account manager</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Automation Workflows Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Automation Workflows</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Auto-Response System</h3>
                <p className="text-gray-600 mb-4">Automatically respond to common questions and provide instant solutions using your knowledge base.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Instant responses</li>
                  <li>• 24/7 availability</li>
                  <li>• Consistent answers</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ticket Prioritization</h3>
                <p className="text-gray-600 mb-4">Automatically prioritize tickets based on urgency, customer value, and issue complexity.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Smart categorization</li>
                  <li>• SLA management</li>
                  <li>• Escalation rules</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow-up Automation</h3>
                <p className="text-gray-600 mb-4">Automatically follow up on resolved tickets to ensure customer satisfaction and gather feedback.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Satisfaction surveys</li>
                  <li>• Feedback collection</li>
                  <li>• Re-engagement campaigns</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Agent Assistance</h3>
                <p className="text-gray-600 mb-4">Provide agents with AI-powered suggestions and solutions to resolve tickets faster and more effectively.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Solution suggestions</li>
                  <li>• Knowledge recommendations</li>
                  <li>• Response templates</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Channel Support</h3>
                <p className="text-gray-600 mb-4">Manage support across email, chat, social media, and phone from one unified platform.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Unified inbox</li>
                  <li>• Cross-channel history</li>
                  <li>• Consistent experience</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Analytics</h3>
                <p className="text-gray-600 mb-4">Track and analyze support performance with detailed metrics and AI-powered insights.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Response time tracking</li>
                  <li>• Customer satisfaction</li>
                  <li>• Agent performance</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Transform Your Customer Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Increase Satisfaction by 40%</h3>
                <p className="text-gray-600">Faster response times and accurate answers lead to significantly higher customer satisfaction scores.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduce Costs by 60%</h3>
                <p className="text-gray-600">Automate routine tasks and reduce the need for additional support staff while maintaining quality service.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Provide round-the-clock support with AI chatbots that never sleep and always provide consistent service.</p>
              </div>
            </div>
          </div>
          
          {/* Integration Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Seamless Integrations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Zendesk</span>
                </div>
                <p className="text-sm text-gray-600">Support Platform</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Freshdesk</span>
                </div>
                <p className="text-sm text-gray-600">Support Platform</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Intercom</span>
                </div>
                <p className="text-sm text-gray-600">Live Chat</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Slack</span>
                </div>
                <p className="text-sm text-gray-600">Team Communication</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Salesforce</span>
                </div>
                <p className="text-sm text-gray-600">CRM</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Zapier</span>
                </div>
                <p className="text-sm text-gray-600">Automation</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-semibold mb-4">Ready to Automate Your Support?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of companies using our AI-powered support automation to deliver better customer experiences.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Free Trial
              </a>
              <a href="/contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}