import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdvancedAITransformation2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🔍' },
    { id: 'solutions', label: 'AI Solutions', icon: '🤖' },
    { id: 'case-studies', label: 'Case Studies', icon: '📊' },
    { id: 'pricing', label: 'Pricing', icon: '💰' }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              🚀 ADVANCED AI TRANSFORMATION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Advanced AI Transformation
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge AI solutions that deliver measurable results, 
              automate complex processes, and unlock unprecedented growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg">
                Watch Demo
          </div>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
            ))}
      {/* Tab Content */}
      <div className="container mx-auto px-4 py-16">
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* Key Features */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our advanced AI transformation platform combines machine learning, natural language processing, 
                and predictive analytics to deliver intelligent automation that drives real business value.
              </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4 text-center">🧠</div>
                <h3 className="text-2xl font-bold text-center mb-4">Intelligent Automation</h3>
                <p className="text-gray-600 text-center mb-6">
                  Automate complex business processes with AI that learns and adapts to your specific needs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Process optimization</li>
                  <li>• Workflow automation</li>
                  <li>• Decision support systems</li>
                  <li>• Predictive maintenance</li>
                </ul>
              </div>
                <div className="text-5xl mb-4 text-center">📊</div>
                <h3 className="text-2xl font-bold text-center mb-4">Advanced Analytics</h3>
                  Unlock insights from your data with powerful AI-driven analytics and visualization tools.
                  <li>• Real-time dashboards</li>
                  <li>• Predictive modeling</li>
                  <li>• Anomaly detection</li>
                  <li>• Trend analysis</li>
                <div className="text-5xl mb-4 text-center">🔒</div>
                <h3 className="text-2xl font-bold text-center mb-4">Enterprise Security</h3>
                  Built with enterprise-grade security and compliance standards to protect your data.
                  <li>• End-to-end encryption</li>
                  <li>• GDPR compliance</li>
                  <li>• SOC 2 Type II</li>
                  <li>• Multi-factor authentication</li>
            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
                <p className="text-xl opacity-90">See the impact of AI transformation on our clients</p>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">300%</div>
                  <div className="text-lg font-semibold mb-1">Efficiency Gain</div>
                  <div className="text-sm opacity-80">Average productivity increase</div>
                </div>
                  <div className="text-5xl font-bold mb-2">$2.5M</div>
                  <div className="text-lg font-semibold mb-1">Cost Savings</div>
                  <div className="text-sm opacity-80">Average annual savings</div>
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-lg font-semibold mb-1">Accuracy</div>
                  <div className="text-sm opacity-80">AI prediction accuracy</div>
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <div className="text-lg font-semibold mb-1">Monitoring</div>
                  <div className="text-sm opacity-80">Continuous optimization</div>
        )}
        {activeTab === 'solutions' && (
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Solution Portfolio</h2>
                Comprehensive AI solutions designed to address every aspect of your business transformation journey.
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4">AI-Powered Chatbots</h3>
                <p className="text-gray-600 mb-6">
                  Intelligent conversational AI that provides 24/7 customer support and sales assistance.
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Natural language processing</div>
                  <div>• Multi-language support</div>
                  <div>• Integration with CRM systems</div>
                  <div>• Real-time learning capabilities</div>
                <div className="mt-6">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Starting at $299/month
                  </span>
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
                  Advanced machine learning models that predict trends and optimize business decisions.
                  <div>• Demand forecasting</div>
                  <div>• Risk assessment</div>
                  <div>• Customer behavior analysis</div>
                  <div>• Market trend prediction</div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Starting at $599/month
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold mb-4">Process Automation</h3>
                  Intelligent automation that streamlines workflows and eliminates manual tasks.
                  <div>• Document processing</div>
                  <div>• Email automation</div>
                  <div>• Data entry automation</div>
                  <div>• Workflow optimization</div>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Starting at $799/month
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Personalization Engine</h3>
                  AI-driven personalization that delivers tailored experiences to every customer.
                  <div>• Content personalization</div>
                  <div>• Product recommendations</div>
                  <div>• Dynamic pricing</div>
                  <div>• Behavioral targeting</div>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Starting at $999/month
        {activeTab === 'case-studies' && (
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
                Real-world examples of how our AI solutions have transformed businesses across industries.
            <div className="space-y-12">
                <div className="flex items-start space-x-6">
                  <div className="text-6xl">🏦</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Financial Services Transformation</h3>
                    <p className="text-gray-600 mb-6">
                      A major bank implemented our AI-powered fraud detection system, reducing false positives by 85% 
                      while improving detection accuracy by 95%.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">85%</div>
                        <div className="text-sm text-gray-600">Reduction in false positives</div>
                      </div>
                        <div className="text-3xl font-bold text-blue-600">95%</div>
                        <div className="text-sm text-gray-600">Detection accuracy</div>
                        <div className="text-3xl font-bold text-purple-600">$5M</div>
                        <div className="text-sm text-gray-600">Annual savings</div>
                    </div>
                  </div>
                  <div className="text-6xl">🛒</div>
                    <h3 className="text-2xl font-bold mb-4">E-commerce Personalization</h3>
                      An online retailer deployed our personalization engine, resulting in a 40% increase in 
                      conversion rates and 60% improvement in customer engagement.
                        <div className="text-3xl font-bold text-green-600">40%</div>
                        <div className="text-sm text-gray-600">Increase in conversions</div>
                        <div className="text-3xl font-bold text-blue-600">60%</div>
                        <div className="text-sm text-gray-600">Better engagement</div>
                        <div className="text-3xl font-bold text-purple-600">25%</div>
                        <div className="text-sm text-gray-600">Higher AOV</div>
        {activeTab === 'pricing' && (
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Flexible Pricing Plans</h2>
                Choose the perfect plan for your business needs. All plans include 24/7 support and regular updates.
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$299</div>
                  <div className="text-gray-600">per month</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Basic AI chatbot</span>
                  </li>
                    <span>Up to 1,000 conversations/month</span>
                    <span>Email support</span>
                    <span>Basic analytics</span>
                <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
                  Get Started
                </button>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  <h3 className="text-2xl font-bold mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$799</div>
                    <span>Advanced AI chatbot</span>
                    <span>Up to 10,000 conversations/month</span>
                    <span>Predictive analytics</span>
                    <span>Process automation</span>
                    <span>Priority support</span>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
                  <div className="text-gray-600">pricing</div>
                    <span>Full AI suite</span>
                    <span>Unlimited conversations</span>
                    <span>Custom integrations</span>
                    <span>Dedicated support</span>
                    <span>On-premise deployment</span>
                  Contact Sales
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
            >
              Schedule Demo
            </Link>
              to="/pages/ComprehensiveServices2025" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
              View All Services
    </div>
  );
};
export default AdvancedAITransformation2025;
