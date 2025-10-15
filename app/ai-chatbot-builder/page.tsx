import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIChatbotBuilderPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Chatbot Builder - Create Intelligent Chatbots | Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots and virtual assistants without coding. AI-powered customer support, lead generation, and automation solutions." />
        <meta name="keywords" content="AI chatbot builder, virtual assistant, customer support automation, lead generation, chatbot platform, conversational AI" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion AI Chatbot Builder
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create intelligent chatbots and virtual assistants in minutes. No coding required. 
              Boost customer engagement and automate support with AI-powered conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://ziontechgroup.com/ai-chatbot-builder" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center">
                Build Your Bot
              </a>
              <Link to="/contact" className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors text-center">
                See Live Demo
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Powerful Chatbot Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visual Bot Builder</h3>
                <p className="text-gray-600 mb-4">
                  Drag-and-drop interface to create complex conversation flows without any coding knowledge.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Drag-and-drop builder</li>
                  <li>• Visual flow designer</li>
                  <li>• Pre-built templates</li>
                  <li>• Conditional logic</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
                <p className="text-gray-600 mb-4">
                  Advanced NLP capabilities that understand context, intent, and provide human-like responses.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Intent recognition</li>
                  <li>• Context understanding</li>
                  <li>• Multi-language support</li>
                  <li>• Sentiment analysis</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Integrations</h3>
                <p className="text-gray-600 mb-4">
                  Connect with popular platforms and tools including CRM, email, social media, and more.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• CRM integration</li>
                  <li>• Email marketing</li>
                  <li>• Social media platforms</li>
                  <li>• API connections</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Insights</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analytics to track performance, user engagement, and conversation quality.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Conversation analytics</li>
                  <li>• User engagement metrics</li>
                  <li>• Performance tracking</li>
                  <li>• A/B testing</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Branding</h3>
                <p className="text-gray-600 mb-4">
                  Customize the chatbot appearance to match your brand with colors, fonts, and styling options.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Custom themes</li>
                  <li>• Brand colors & fonts</li>
                  <li>• Logo integration</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Workflow Automation</h3>
                <p className="text-gray-600 mb-4">
                  Automate complex business processes with intelligent workflows and decision trees.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Automated workflows</li>
                  <li>• Decision trees</li>
                  <li>• Task automation</li>
                  <li>• Smart routing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Simple Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">$39<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 1,000 conversations/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic templates
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic analytics
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-chatbot-builder/starter" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block">
                  Start Free Trial
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-green-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">$99<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 10,000 conversations/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced templates & NLP
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom branding
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    API access
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Priority support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-chatbot-builder/professional" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">$299<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited conversations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom AI training
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    White-label solution
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced integrations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 dedicated support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-chatbot-builder/enterprise" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perfect For Every Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Support</h3>
                <p className="text-gray-600 text-sm">
                  Provide 24/7 customer support with instant responses to common questions and issues.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Lead Generation</h3>
                <p className="text-gray-600 text-sm">
                  Qualify leads, collect contact information, and schedule appointments automatically.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">E-commerce</h3>
                <p className="text-gray-600 text-sm">
                  Help customers find products, answer questions, and guide them through the purchase process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">SaaS Onboarding</h3>
                <p className="text-gray-600 text-sm">
                  Guide new users through product features and help them get started quickly.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">HR & Recruitment</h3>
                <p className="text-gray-600 text-sm">
                  Screen candidates, answer job-related questions, and schedule interviews.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Healthcare</h3>
                <p className="text-gray-600 text-sm">
                  Provide patient support, appointment scheduling, and basic health information.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Chatbot Builder?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">⚡ No Coding Required</h3>
                <p className="text-gray-600">
                  Build sophisticated chatbots using our visual builder. No technical skills needed - 
                  just drag, drop, and configure your bot's personality and responses.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📈 Increase Engagement</h3>
                <p className="text-gray-600">
                  Boost customer engagement by up to 300% with instant, personalized responses. 
                  Keep visitors on your site longer and convert more leads.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">💰 Reduce Support Costs</h3>
                <p className="text-gray-600">
                  Cut customer support costs by up to 80% by handling common questions automatically. 
                  Free up your team to focus on complex issues.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔄 Easy Integration</h3>
                <p className="text-gray-600">
                  Integrate with your existing tools and platforms in minutes. 
                  Works with websites, mobile apps, social media, and more.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-green-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your First Chatbot?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses using AI chatbots to improve customer experience and boost sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://ziontechgroup.com/ai-chatbot-builder" className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Build Your Bot Now
              </a>
              <Link to="/contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatbotBuilderPage;