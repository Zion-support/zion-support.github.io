import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIProjectManagementPlatformPage() {
  return (
    <>
      <Helmet>
        <title>AI Project Management Platform | Zion Tech Group - Intelligent Task Automation</title>
        <meta name="description" content="AI-powered project management platform with intelligent task assignment, resource optimization, and automated workflow management for teams." />
        <meta name="keywords" content="AI project management, task automation, resource optimization, team collaboration, workflow management, project analytics" />
      </Helmet>
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Project Management Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your project management with AI-powered task automation, intelligent resource allocation, and predictive analytics for optimal team performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/case-studies" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Task Assignment</h3>
              <p className="text-gray-600 mb-4">Intelligently assign tasks based on team member skills, workload, and availability for optimal productivity.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Skill-based matching</li>
                <li>• Workload balancing</li>
                <li>• Priority optimization</li>
                <li>• Deadline management</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">AI predicts project risks, resource needs, and completion timelines to help you stay ahead of challenges.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Risk prediction</li>
                <li>• Timeline forecasting</li>
                <li>• Resource planning</li>
                <li>• Budget optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Workflows</h3>
              <p className="text-gray-600 mb-4">Create intelligent workflows that automatically trigger actions based on project milestones and team activities.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Milestone automation</li>
                <li>• Approval workflows</li>
                <li>• Status updates</li>
                <li>• Notification management</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resource Optimization</h3>
              <p className="text-gray-600 mb-4">AI analyzes team capacity and project requirements to optimize resource allocation and prevent bottlenecks.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Capacity planning</li>
                <li>• Bottleneck detection</li>
                <li>• Skill gap analysis</li>
                <li>• Resource reallocation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Insights</h3>
              <p className="text-gray-600 mb-4">Comprehensive analytics and AI insights to track team performance, project health, and productivity trends.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Team performance metrics</li>
                <li>• Project health scores</li>
                <li>• Productivity trends</li>
                <li>• Efficiency recommendations</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Collaboration</h3>
              <p className="text-gray-600 mb-4">AI-powered collaboration tools that facilitate communication, knowledge sharing, and decision-making across teams.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Intelligent notifications</li>
                <li>• Knowledge management</li>
                <li>• Decision support</li>
                <li>• Meeting optimization</li>
              </ul>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Pricing for Every Team</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Team</h3>
                <div className="text-3xl font-bold mb-4">$12<span className="text-lg">/user/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Up to 10 team members</li>
                  <li>• Basic AI features</li>
                  <li>• Project templates</li>
                  <li>• Standard analytics</li>
                  <li>• Email support</li>
                </ul>
              </div>
              <div className="bg-white/20 rounded-lg p-6 border-2 border-white">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <div className="text-3xl font-bold mb-4">$25<span className="text-lg">/user/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Up to 50 team members</li>
                  <li>• Advanced AI automation</li>
                  <li>• Custom workflows</li>
                  <li>• Detailed analytics</li>
                  <li>• Priority support</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-4">$45<span className="text-lg">/user/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Unlimited team members</li>
                  <li>• Full AI suite</li>
                  <li>• White-label options</li>
                  <li>• Custom integrations</li>
                  <li>• Dedicated support</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-blue-100">* Market average: $15-50/user/month for AI project management tools</p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AI Project Management?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">40% Faster Project Delivery</h3>
                    <p className="text-gray-600">AI optimization reduces project timelines and improves delivery efficiency across all teams.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">25% Reduction in Project Costs</h3>
                    <p className="text-gray-600">Intelligent resource allocation and risk prediction help minimize project overruns and costs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">90% Team Satisfaction</h3>
                    <p className="text-gray-600">AI-powered task management improves team productivity and job satisfaction significantly.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Research</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-600">"AI project management tools increase team productivity by 35%"</p>
                  <p className="text-xs text-gray-500 mt-1">- PMI Project Management Institute</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-sm text-gray-600">"Organizations using AI see 28% fewer project failures"</p>
                  <p className="text-xs text-gray-500 mt-1">- Gartner Project Management Research</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-sm text-gray-600">"AI-driven resource optimization saves 20% on project costs"</p>
                  <p className="text-xs text-gray-500 mt-1">- McKinsey Project Management Study</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Revolutionize Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams using AI to streamline their project management and achieve better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}