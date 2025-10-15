import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionCRMProPage() {
  return (
    <>
      <Helmet>
        <title>Zion CRM Pro - AI-Powered Customer Relationship Management</title>
        <meta name="description" content="Advanced CRM solution with AI-powered lead scoring, automated follow-ups, and comprehensive customer analytics. Boost your sales with intelligent customer relationship management." />
        <meta name="keywords" content="CRM, customer relationship management, sales automation, lead scoring, customer analytics, AI CRM" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Zion CRM Pro
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most intelligent CRM solution powered by AI. Automate your sales process, nurture leads, and build stronger customer relationships with advanced analytics and automation.
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Revolutionary CRM Features</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Lead Scoring</h3>
                    <p className="text-gray-600">Automatically score and prioritize leads using machine learning algorithms that analyze customer behavior and engagement patterns.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Follow-ups</h3>
                    <p className="text-gray-600">Set up intelligent email sequences, task reminders, and follow-up campaigns that adapt based on customer interactions and responses.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">360° Customer View</h3>
                    <p className="text-gray-600">Get a complete picture of each customer with integrated communication history, purchase patterns, and interaction analytics.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Pipeline Management</h3>
                    <p className="text-gray-600">Visualize and manage your sales pipeline with customizable stages, automated progression, and performance tracking.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Pricing Plans</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$49/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Up to 1,000 contacts</li>
                    <li>Basic AI lead scoring</li>
                    <li>Email automation</li>
                    <li>Mobile app access</li>
                    <li>Email support</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$149/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Up to 10,000 contacts</li>
                    <li>Advanced AI insights</li>
                    <li>Custom automation workflows</li>
                    <li>Advanced reporting</li>
                    <li>Priority support</li>
                    <li>API access</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$399/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Unlimited contacts</li>
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
          
          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Transform Your Sales Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Increase Sales by 35%</h3>
                <p className="text-gray-600">Our AI-powered lead scoring and automation help you close more deals and identify high-value prospects faster.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Save 20 Hours/Week</h3>
                <p className="text-gray-600">Automate repetitive tasks, follow-ups, and data entry to focus on what matters most - building relationships.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">Get deep insights into customer behavior, sales performance, and team productivity with comprehensive reporting.</p>
              </div>
            </div>
          </div>
          
          {/* Integration Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Seamless Integrations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Gmail</span>
                </div>
                <p className="text-sm text-gray-600">Email Integration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Slack</span>
                </div>
                <p className="text-sm text-gray-600">Team Communication</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Zoom</span>
                </div>
                <p className="text-sm text-gray-600">Video Calls</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">HubSpot</span>
                </div>
                <p className="text-sm text-gray-600">Marketing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Salesforce</span>
                </div>
                <p className="text-sm text-gray-600">Sales Platform</p>
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
            <h2 className="text-3xl font-semibold mb-4">Ready to Revolutionize Your CRM?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of sales teams using Zion CRM Pro to close more deals and build stronger relationships.</p>
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