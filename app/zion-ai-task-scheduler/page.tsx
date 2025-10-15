import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionaitaskschedulerPage() {
  return (
    <>
      <Helmet>
        <title>Zion AI Task Manager Pro - Advanced Task Management SaaS | Zion Tech Group</title>
        <meta name="description" content="Zion AI Task Manager Pro - Intelligent task management with AI-powered prioritization, team collaboration, and automated workflows. Boost productivity with our advanced SaaS solution." />
        <meta name="keywords" content="task management, AI task scheduler, project management, team collaboration, productivity software, workflow automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 rounded-full p-4">
                  <svg className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Zion AI Task Manager Pro
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Intelligent task management powered by AI. Streamline your workflow with smart prioritization, 
                team collaboration, and automated project tracking that adapts to your work style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage tasks efficiently and boost team productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'AI Task Prioritization',
                description: 'Smart algorithms automatically prioritize tasks based on deadlines, importance, and team capacity'
              },
              {
                icon: '👥',
                title: 'Team Collaboration',
                description: 'Real-time collaboration with comments, mentions, and shared workspaces for seamless teamwork'
              },
              {
                icon: '⏰',
                title: 'Time Tracking',
                description: 'Built-in time tracking with detailed reports and productivity analytics'
              },
              {
                icon: '📊',
                title: 'Progress Monitoring',
                description: 'Visual dashboards and progress tracking to keep projects on schedule'
              },
              {
                icon: '🔄',
                title: 'Workflow Automation',
                description: 'Automate repetitive tasks and create custom workflows to save time'
              },
              {
                icon: '📱',
                title: 'Mobile Access',
                description: 'Full-featured mobile app to manage tasks on the go'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your team size and needs. All plans include a 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Basic',
                  price: '$29',
                  period: '/month',
                  description: 'Perfect for small teams',
                  features: [
                    'Up to 5 team members',
                    'Unlimited tasks',
                    'Basic AI prioritization',
                    'Email support',
                    '1GB file storage',
                    'Mobile app access'
                  ],
                  popular: false
                },
                {
                  name: 'Pro',
                  price: '$79',
                  period: '/month',
                  description: 'Ideal for growing businesses',
                  features: [
                    'Up to 25 team members',
                    'Advanced AI features',
                    'Time tracking & reporting',
                    'Priority support',
                    '10GB file storage',
                    'API access',
                    'Custom workflows',
                    'Team analytics'
                  ],
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: '$199',
                  period: '/month',
                  description: 'For large organizations',
                  features: [
                    'Unlimited team members',
                    'Full AI capabilities',
                    'Advanced analytics',
                    '24/7 support',
                    'Unlimited storage',
                    'Custom integrations',
                    'Dedicated account manager',
                    'SSO & security features'
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-gray-900 mb-6">
                      {plan.price}<span className="text-lg text-gray-600">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href={`mailto:kleber@ziontechgroup.com?subject=Free Trial Request - ${plan.name} Plan`}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        plan.popular 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Start Free Trial
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion AI Task Manager Pro?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join thousands of teams who have transformed their productivity with our AI-powered task management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { stat: '40%', description: 'Average productivity increase' },
                { stat: '60%', description: 'Reduction in missed deadlines' },
                { stat: '85%', description: 'User satisfaction rate' },
                { stat: '50%', description: 'Time saved on task management' }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Task Management?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Start your free 14-day trial today. No credit card required. Experience the power of AI-driven task management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
