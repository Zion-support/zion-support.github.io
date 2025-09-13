import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Zap, Users, Shield, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI 2025: Enterprise Automation Revolution - Transform Your Business',
  description: 'Discover how AI automation is revolutionizing enterprise operations in 2025. Learn about cutting-edge technologies, implementation strategies, and real-world success stories.',
  keywords: 'AI automation, enterprise transformation, business automation, AI implementation, digital transformation, 2025 trends',
};

export default function AI2025EnterpriseAutomationRevolution() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Revolutionary AI Trends 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI 2025: Enterprise Automation 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Revolution</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your enterprise with cutting-edge AI automation technologies. Discover how leading companies are achieving unprecedented efficiency, cost savings, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                View Success Stories
              </Link>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
              <div className="text-gray-600">Productivity Increase</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Automated Operations</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolution Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The AI Revolution is Here
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise automation has reached unprecedented levels with AI-powered solutions that transform every aspect of business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Process Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate complex business processes with AI that learns and adapts to your organization's unique workflows.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Workflow optimization</li>
                <li>• Decision automation</li>
                <li>• Exception handling</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Experience Revolution</h3>
              <p className="text-gray-600 mb-4">
                Deliver personalized, intelligent customer interactions at scale with AI-powered automation.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Intelligent chatbots</li>
                <li>• Predictive analytics</li>
                <li>• Personalized recommendations</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Security & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Protect your enterprise with AI-driven security solutions that adapt to emerging threats.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Threat detection</li>
                <li>• Compliance monitoring</li>
                <li>• Risk assessment</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data-Driven Insights</h3>
              <p className="text-gray-600 mb-4">
                Transform raw data into actionable insights with AI-powered analytics and reporting.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Real-time analytics</li>
                <li>• Predictive modeling</li>
                <li>• Business intelligence</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Supply Chain Optimization</h3>
              <p className="text-gray-600 mb-4">
                Optimize your supply chain with AI that predicts demand, manages inventory, and reduces costs.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Demand forecasting</li>
                <li>• Inventory optimization</li>
                <li>• Route planning</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Human-AI Collaboration</h3>
              <p className="text-gray-600 mb-4">
                Enhance human capabilities with AI assistants that augment decision-making and productivity.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• AI assistants</li>
                <li>• Collaborative workflows</li>
                <li>• Skill augmentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your AI Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our proven methodology to successfully implement AI automation in your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">Analyze current processes and identify automation opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">Develop a comprehensive AI automation strategy aligned with business goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Deploy AI solutions with minimal disruption to existing operations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">Continuously monitor and optimize AI systems for maximum ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your AI Revolution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of enterprises already transforming their operations with AI automation. Get started today with our expert consulting services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/resources" className="inline-flex items-center px-8 py-4 border border-blue-300 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Download Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}