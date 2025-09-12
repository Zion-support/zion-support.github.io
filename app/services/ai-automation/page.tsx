import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export const metadata: Metadata = {
  title: 'AI Automation Services - Transform Your Business with Intelligent Automation',
  description: 'Expert AI automation services to streamline operations, reduce costs, and boost efficiency. Custom solutions for every industry. Get started today!',
  keywords: 'AI automation services, business process automation, intelligent automation, AI consulting, automation solutions',
  openGraph: {
    title: 'AI Automation Services - Transform Your Business',
    description: 'Expert AI automation services to streamline operations and boost efficiency',
    type: 'website',
  },
};

export default function AIAutomationServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <SEO 
        title="AI Automation Services - Transform Your Business"
        description="Expert AI automation services to streamline operations and boost efficiency"
        keywords="AI automation services, business process automation, intelligent automation, AI consulting"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Automation Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business operations with cutting-edge AI automation solutions. 
            Reduce costs, increase efficiency, and scale your success with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">90% Faster Processing</h3>
            <p className="text-gray-600">
              Automate repetitive tasks and processes to achieve unprecedented speed and efficiency.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">60% Cost Reduction</h3>
            <p className="text-gray-600">
              Significantly reduce operational costs while maintaining or improving quality.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">99.9% Accuracy</h3>
            <p className="text-gray-600">
              Eliminate human errors and ensure consistent, reliable results every time.
            </p>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our AI Automation Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Process Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate complex business processes with intelligent workflow management and decision-making systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Workflow automation</li>
                <li>• Document processing</li>
                <li>• Data entry automation</li>
                <li>• Approval workflows</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service AI</h3>
              <p className="text-gray-600 mb-4">
                Deploy intelligent chatbots and virtual assistants to provide 24/7 customer support.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI chatbots</li>
                <li>• Voice assistants</li>
                <li>• Ticket routing</li>
                <li>• Sentiment analysis</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Analytics AI</h3>
              <p className="text-gray-600 mb-4">
                Transform raw data into actionable insights with advanced AI analytics and reporting.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Predictive analytics</li>
                <li>• Real-time reporting</li>
                <li>• Anomaly detection</li>
                <li>• Trend analysis</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security Automation</h3>
              <p className="text-gray-600 mb-4">
                Protect your business with AI-powered security monitoring and threat detection systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fraud detection</li>
                <li>• Threat monitoring</li>
                <li>• Access control</li>
                <li>• Compliance automation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Automation</h3>
              <p className="text-gray-600 mb-4">
                Optimize your marketing campaigns with AI-driven personalization and automation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Email automation</li>
                <li>• Lead scoring</li>
                <li>• Content personalization</li>
                <li>• Campaign optimization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing AI</h3>
              <p className="text-gray-600 mb-4">
                Optimize production processes with intelligent manufacturing and quality control systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Predictive maintenance</li>
                <li>• Quality control</li>
                <li>• Supply chain optimization</li>
                <li>• Production scheduling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry-Specific Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-green-900 mb-3">Healthcare</h3>
              <p className="text-green-800 text-sm">
                Patient scheduling, medical imaging analysis, and diagnostic assistance.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Financial Services</h3>
              <p className="text-blue-800 text-sm">
                Fraud detection, risk assessment, and automated trading systems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-purple-900 mb-3">Retail</h3>
              <p className="text-purple-800 text-sm">
                Inventory management, personalized recommendations, and demand forecasting.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-orange-900 mb-3">Manufacturing</h3>
              <p className="text-orange-800 text-sm">
                Predictive maintenance, quality control, and supply chain optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Implementation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-600 text-sm">
                Analyze your current processes and identify automation opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600 text-sm">
                Create custom AI automation solutions tailored to your specific needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Deploy</h3>
              <p className="text-gray-600 text-sm">
                Implement and integrate AI solutions with your existing systems.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Optimize</h3>
              <p className="text-gray-600 text-sm">
                Monitor performance and continuously improve your AI automation systems.
              </p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Proven Results Across Industries
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-indigo-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-indigo-200">Client Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-indigo-200">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-indigo-200">Support Available</div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Flexible Pricing Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$5,000<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic process automation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 5 workflows
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Email support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Monthly reporting
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$15,000<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced AI automation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 20 workflows
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Real-time monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom integrations
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Full AI transformation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited workflows
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedicated support team
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom AI models
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  On-site training
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of companies already benefiting from our AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}