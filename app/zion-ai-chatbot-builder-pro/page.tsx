import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIChatbotBuilderProPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Chatbot Builder Pro",
    "description": "No-code chatbot creation platform with advanced AI capabilities and multi-channel deployment",
    "url": "https://ziontechgroup.com/zion-ai-chatbot-builder-pro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "49",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Zion AI Chatbot Builder Pro - Build Intelligent Chatbots Without Coding</title>
        <meta name="description" content="No-code chatbot creation platform with advanced AI capabilities and multi-channel deployment. Build intelligent chatbots without coding." />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, chatbot platform, customer support automation" />
        <meta property="og:title" content="Zion AI Chatbot Builder Pro - Build Intelligent Chatbots Without Coding" />
        <meta property="og:description" content="No-code chatbot creation platform with advanced AI capabilities and multi-channel deployment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-chatbot-builder-pro" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion AI Chatbot Builder Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build intelligent chatbots without coding. Deploy across multiple channels with advanced AI capabilities and natural language processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center">
                Start Building Free
              </a>
              <a href="#demo" className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors text-center">
                Watch Demo
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Drag-and-Drop Builder</h3>
                <p className="text-gray-600">
                  Create complex conversation flows with our intuitive visual builder. No coding required.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
                <p className="text-gray-600">
                  Advanced NLP capabilities that understand context and provide intelligent responses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-channel Deployment</h3>
                <p className="text-gray-600">
                  Deploy your chatbot on websites, social media, messaging apps, and more.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🔌</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration APIs</h3>
                <p className="text-gray-600">
                  Connect with your existing tools and systems through powerful APIs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
                <p className="text-gray-600">
                  Track performance, user interactions, and optimize your chatbot with detailed analytics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">A/B Testing</h3>
                <p className="text-gray-600">
                  Test different conversation flows and optimize for better performance.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Simple Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$49<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1,000 conversations/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic templates</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 2 channels</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-green-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$149<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10,000 conversations/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Premium templates</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 5 channels</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> A/B testing</li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$499<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited conversations</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom templates</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited channels</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label solution</li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Support</h3>
                <p className="text-gray-600">Provide 24/7 customer support with intelligent chatbots that can handle common queries.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Qualification</h3>
                <p className="text-gray-600">Qualify leads automatically and route them to the right sales team members.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sales Assistance</h3>
                <p className="text-gray-600">Guide customers through the sales process and answer product questions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">FAQ Automation</h3>
                <p className="text-gray-600">Automate frequently asked questions and reduce support workload.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Appointment Booking</h3>
                <p className="text-gray-600">Allow customers to book appointments and manage schedules automatically.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">E-commerce Support</h3>
                <p className="text-gray-600">Help customers with orders, returns, and product recommendations.</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Platform?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">No Coding Required</h3>
                <p className="text-gray-600">Build sophisticated chatbots using our drag-and-drop interface. No technical knowledge needed.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Deployment</h3>
                <p className="text-gray-600">Deploy your chatbot in minutes across multiple channels with our one-click deployment.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Availability</h3>
                <p className="text-gray-600">Provide round-the-clock customer support without additional staffing costs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solution</h3>
                <p className="text-gray-600">Handle thousands of conversations simultaneously without performance issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data-Driven Insights</h3>
                <p className="text-gray-600">Get detailed analytics and insights to improve your chatbot's performance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Better Customer Experience</h3>
                <p className="text-gray-600">Provide instant responses and improve customer satisfaction with intelligent automation.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Ready to Build Your Chatbot?</h2>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">
                Contact us today to learn more about Zion AI Chatbot Builder Pro and start building your intelligent chatbot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center">
                  Call +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors text-center">
                  Email Us
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                <p>364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>Visit us at <a href="https://ziontechgroup.com" className="text-green-600 hover:text-green-800">ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIChatbotBuilderProPage;