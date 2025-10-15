import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIVoiceAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Voice Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice assistant with natural language processing, voice recognition, and intelligent conversation capabilities." />
        <meta name="keywords" content="AI voice assistant, voice recognition, natural language processing, chatbot, voice AI" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎤</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Voice Assistant <span className="text-blue-600">Pro</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Build intelligent voice interfaces with our advanced AI voice assistant platform. 
              Features natural language processing, voice recognition, and multi-language support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
              <Link to="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🗣️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Voice Recognition</h3>
              <p className="text-gray-600">Advanced speech-to-text with 99% accuracy across multiple languages and accents.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Language Understanding</h3>
              <p className="text-gray-600">Context-aware conversation processing with intent recognition and entity extraction.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-language Support</h3>
              <p className="text-gray-600">Support for 50+ languages with automatic language detection and translation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Processing</h3>
              <p className="text-gray-600">Low-latency voice processing with sub-200ms response times.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Commands</h3>
              <p className="text-gray-600">Create custom voice commands and workflows tailored to your business needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-platform</h3>
              <p className="text-gray-600">Works seamlessly across web, mobile, and desktop applications.</p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$199<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Up to 1,000 voice interactions</li>
                  <li>✓ 5 languages supported</li>
                  <li>✓ Basic voice commands</li>
                  <li>✓ Email support</li>
                </ul>
                <Link to="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Get Started
                </Link>
              </div>
              <div className="border-2 border-blue-500 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$499<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Up to 10,000 voice interactions</li>
                  <li>✓ 25 languages supported</li>
                  <li>✓ Custom voice commands</li>
                  <li>✓ API access</li>
                  <li>✓ Priority support</li>
                </ul>
                <Link to="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Get Started
                </Link>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$1,299<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Unlimited voice interactions</li>
                  <li>✓ 50+ languages supported</li>
                  <li>✓ Advanced customization</li>
                  <li>✓ White-label solution</li>
                  <li>✓ 24/7 dedicated support</li>
                </ul>
                <Link to="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Service</h3>
                <p className="text-gray-600">Automate customer support with intelligent voice assistants that can handle common queries and escalate complex issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Home Control</h3>
                <p className="text-gray-600">Control IoT devices and smart home systems through natural voice commands.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Voice Commerce</h3>
                <p className="text-gray-600">Enable voice-based shopping and transactions with secure payment processing.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility Solutions</h3>
                <p className="text-gray-600">Provide voice interfaces for users with disabilities to access digital services.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Voice Assistant?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start building intelligent voice interfaces today with our AI Voice Assistant Pro platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>✉️ kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;