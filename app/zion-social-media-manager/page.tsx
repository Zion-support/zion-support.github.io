import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionSocialMediaManagerPage() {
  return (
    <>
      <Helmet>
        <title>Zion Social Media Manager - AI-Powered Social Media Management</title>
        <meta name="description" content="Comprehensive social media management platform with AI-powered content creation, scheduling, analytics, and engagement tools. Manage all your social channels from one dashboard." />
        <meta name="keywords" content="social media management, social media scheduling, content creation, social media analytics, AI social media, social media automation" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Zion Social Media Manager
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The ultimate social media management platform with AI-powered content creation, intelligent scheduling, and comprehensive analytics. Manage all your social channels from one powerful dashboard.
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Comprehensive Social Media Features</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Content Creation</h3>
                    <p className="text-gray-600">Generate engaging posts, captions, and hashtags using AI that understands your brand voice and audience preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
                    <p className="text-gray-600">Automatically schedule posts at optimal times based on your audience's activity patterns and engagement history.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Platform Management</h3>
                    <p className="text-gray-600">Manage Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube from one unified dashboard with platform-specific optimizations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Engagement Automation</h3>
                    <p className="text-gray-600">Automatically respond to comments, DMs, and mentions with AI-powered responses that maintain your brand voice.</p>
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
                    <li>Up to 3 social accounts</li>
                    <li>Basic AI content creation</li>
                    <li>30 posts per month</li>
                    <li>Basic analytics</li>
                    <li>Email support</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$149/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Up to 10 social accounts</li>
                    <li>Advanced AI content creation</li>
                    <li>Unlimited posts</li>
                    <li>Advanced analytics</li>
                    <li>Priority support</li>
                    <li>Team collaboration</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$399/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Unlimited social accounts</li>
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
          
          {/* Platform Support Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Supported Platforms</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold text-lg">f</span>
                </div>
                <p className="text-sm text-gray-600">Facebook</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-pink-600 font-bold text-lg">IG</span>
                </div>
                <p className="text-sm text-gray-600">Instagram</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold text-lg">T</span>
                </div>
                <p className="text-sm text-gray-600">Twitter</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold text-lg">in</span>
                </div>
                <p className="text-sm text-gray-600">LinkedIn</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-bold text-lg">TT</span>
                </div>
                <p className="text-sm text-gray-600">TikTok</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-red-600 font-bold text-lg">YT</span>
                </div>
                <p className="text-sm text-gray-600">YouTube</p>
              </div>
            </div>
          </div>
          
          {/* Content Creation Tools Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">AI-Powered Content Creation Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Post Generator</h3>
                <p className="text-gray-600 mb-4">Generate engaging posts for any platform with AI that understands your brand voice and audience preferences.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Multiple content types</li>
                  <li>• Brand voice training</li>
                  <li>• Hashtag suggestions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Image Creator</h3>
                <p className="text-gray-600 mb-4">Create stunning visuals for your social media posts using AI-powered image generation and editing tools.</p>
                <ul className="text-sm text-gray-500">
                  <li>• AI image generation</li>
                  <li>• Brand template library</li>
                  <li>• Auto-resizing for platforms</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Video Editor</h3>
                <p className="text-gray-600 mb-4">Create engaging video content with AI-powered editing, auto-captions, and platform-optimized formatting.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Auto-caption generation</li>
                  <li>• Platform optimization</li>
                  <li>• Template library</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hashtag Optimizer</h3>
                <p className="text-gray-600 mb-4">Find the best hashtags for your posts using AI analysis of trending topics and engagement patterns.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Trending hashtag discovery</li>
                  <li>• Engagement prediction</li>
                  <li>• Competitor analysis</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Calendar</h3>
                <p className="text-gray-600 mb-4">Plan and organize your content with AI-suggested posting schedules and content themes.</p>
                <ul className="text-sm text-gray-500">
                  <li>• AI scheduling suggestions</li>
                  <li>• Content theme planning</li>
                  <li>• Holiday calendar integration</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Engagement Analyzer</h3>
                <p className="text-gray-600 mb-4">Analyze your content performance and get AI-powered recommendations for improving engagement.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Performance analysis</li>
                  <li>• Engagement optimization</li>
                  <li>• Competitor benchmarking</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Why Choose Our Social Media Manager?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Increase Engagement by 250%</h3>
                <p className="text-gray-600">Our AI-powered content creation and optimal scheduling significantly boost your social media engagement rates.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Save 20 Hours/Week</h3>
                <p className="text-gray-600">Automate content creation, scheduling, and engagement to focus on strategy while our platform handles execution.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Analytics</h3>
                <p className="text-gray-600">Get detailed insights into your social media performance with advanced analytics and AI-powered recommendations.</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-semibold mb-4">Ready to Master Social Media?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of brands using our AI-powered social media management to grow their online presence.</p>
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