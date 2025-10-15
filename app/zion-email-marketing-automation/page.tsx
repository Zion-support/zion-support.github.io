import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionEmailMarketingAutomationPage() {
  return (
    <>
      <Helmet>
        <title>Zion Email Marketing Automation - AI-Powered Email Campaigns</title>
        <meta name="description" content="Advanced email marketing automation platform with AI-powered personalization, behavioral triggers, and comprehensive analytics. Boost your email ROI with intelligent automation." />
        <meta name="keywords" content="email marketing, email automation, marketing automation, email campaigns, AI personalization, email analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Zion Email Marketing Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your email marketing with AI-powered automation, personalized campaigns, and intelligent behavioral triggers that drive engagement and conversions.
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Powerful Email Automation Features</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Personalization</h3>
                    <p className="text-gray-600">Create hyper-personalized email campaigns that adapt content, timing, and offers based on individual customer behavior and preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Behavioral Triggers</h3>
                    <p className="text-gray-600">Set up sophisticated automation workflows that trigger emails based on website visits, purchase history, email engagement, and more.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Segmentation</h3>
                    <p className="text-gray-600">Create dynamic segments using AI-powered customer insights, behavioral data, and demographic information for targeted campaigns.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">A/B Testing & Optimization</h3>
                    <p className="text-gray-600">Automatically test subject lines, content, send times, and design elements to optimize your email performance continuously.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Pricing Plans</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$39/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Up to 5,000 subscribers</li>
                    <li>Basic automation</li>
                    <li>Email templates</li>
                    <li>Basic analytics</li>
                    <li>Email support</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$99/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Up to 25,000 subscribers</li>
                    <li>Advanced AI automation</li>
                    <li>Custom templates</li>
                    <li>Advanced analytics</li>
                    <li>Priority support</li>
                    <li>A/B testing</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$299/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Unlimited subscribers</li>
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
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Pre-Built Automation Workflows</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Welcome Series</h3>
                <p className="text-gray-600 mb-4">Automatically onboard new subscribers with a personalized welcome sequence that introduces your brand and builds engagement.</p>
                <ul className="text-sm text-gray-500">
                  <li>• 5-email sequence</li>
                  <li>• Personalization tokens</li>
                  <li>• Behavioral triggers</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Abandoned Cart Recovery</h3>
                <p className="text-gray-600 mb-4">Recover lost sales with intelligent abandoned cart emails that remind customers to complete their purchase.</p>
                <ul className="text-sm text-gray-500">
                  <li>• 3-email sequence</li>
                  <li>• Dynamic product recommendations</li>
                  <li>• Time-based triggers</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Re-engagement Campaign</h3>
                <p className="text-gray-600 mb-4">Win back inactive subscribers with targeted re-engagement campaigns designed to reactivate dormant email lists.</p>
                <ul className="text-sm text-gray-500">
                  <li>• 4-email sequence</li>
                  <li>• Special offers</li>
                  <li>• Engagement scoring</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Birthday & Anniversary</h3>
                <p className="text-gray-600 mb-4">Celebrate special occasions with personalized birthday and anniversary emails that strengthen customer relationships.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Personalized content</li>
                  <li>• Special discounts</li>
                  <li>• Automated scheduling</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Post-Purchase Follow-up</h3>
                <p className="text-gray-600 mb-4">Nurture customers after purchase with follow-up emails that encourage reviews, cross-sells, and repeat purchases.</p>
                <ul className="text-sm text-gray-500">
                  <li>• 3-email sequence</li>
                  <li>• Review requests</li>
                  <li>• Product recommendations</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Nurturing</h3>
                <p className="text-gray-600 mb-4">Convert leads into customers with educational content and progressive profiling that builds trust and authority.</p>
                <ul className="text-sm text-gray-500">
                  <li>• 7-email sequence</li>
                  <li>• Educational content</li>
                  <li>• Progressive profiling</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Why Choose Our Email Automation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Increase Email ROI by 300%</h3>
                <p className="text-gray-600">Our AI-powered personalization and automation deliver significantly higher open rates, click-through rates, and conversions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Save 15 Hours/Week</h3>
                <p className="text-gray-600">Automate repetitive email tasks and focus on strategy while our platform handles the execution and optimization.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">Get detailed insights into email performance, subscriber behavior, and campaign effectiveness with comprehensive reporting.</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Email Marketing?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of marketers using our AI-powered email automation to drive better results.</p>
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