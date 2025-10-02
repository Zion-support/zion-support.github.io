import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Video, 
  Mic, 
  Users, 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap,
  BarChart3,
  MessageSquare,
  Calendar,
  CheckCircle,
  DollarSign,
  Star,
  ArrowRight,
  Brain,
  Target,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Meeting Intelligence Platform - Zion Tech Group',
  description: 'Revolutionary AI-powered meeting platform that records, transcribes, analyzes, and extracts actionable insights from your meetings automatically.',
  keywords: 'AI meeting platform, meeting intelligence, automated transcription, meeting analytics, AI meeting assistant',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIMeetingIntelligencePlatform() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
          <Brain className="w-4 h-4 mr-2" />
          AI-Powered Meeting Intelligence
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Meeting Intelligence Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Transform every meeting into actionable intelligence. Our AI platform automatically records, transcribes, 
          analyzes sentiment, extracts decisions, assigns tasks, and generates comprehensive meeting reports.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="mailto:kleber@ziontechgroup.com?subject=AI Meeting Intelligence Platform Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
          <Link 
            href="tel:+13024640950"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <Video className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Recording</h3>
          <p className="text-gray-600 mb-4">
            Automatically record meetings with AI-powered speaker identification and noise cancellation for crystal-clear audio.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Multi-speaker detection</li>
            <li>• Background noise filtering</li>
            <li>• HD video recording</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
            <FileText className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Transcription</h3>
          <p className="text-gray-600 mb-4">
            Real-time transcription with 99.5% accuracy, speaker attribution, and automatic punctuation.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Real-time transcription</li>
            <li>• Speaker identification</li>
            <li>• Industry-specific terminology</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
            <Brain className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Analysis</h3>
          <p className="text-gray-600 mb-4">
            Extract key decisions, action items, sentiment analysis, and meeting effectiveness metrics.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Decision extraction</li>
            <li>• Sentiment analysis</li>
            <li>• Action item tracking</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Task Management</h3>
          <p className="text-gray-600 mb-4">
            Automatically assign tasks, set deadlines, and integrate with your existing project management tools.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Auto task assignment</li>
            <li>• Deadline tracking</li>
            <li>• Tool integration</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
            <BarChart3 className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive analytics on meeting patterns, productivity metrics, and team collaboration insights.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Meeting effectiveness</li>
            <li>• Team productivity</li>
            <li>• Collaboration insights</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
          <p className="text-gray-600 mb-4">
            Bank-level security with end-to-end encryption, SOC 2 compliance, and GDPR compliance.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• End-to-end encryption</li>
            <li>• SOC 2 compliance</li>
            <li>• GDPR compliant</li>
          </ul>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 rounded-2xl p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600">Choose the plan that fits your team size and needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$29<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600">Perfect for small teams</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Up to 10 users
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                100 hours recording/month
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                AI transcription
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Basic analytics
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Email support
              </li>
            </ul>
            <Link 
              href="mailto:kleber@ziontechgroup.com?subject=Starter Plan - AI Meeting Intelligence"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$79<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600">Ideal for growing teams</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Up to 50 users
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                500 hours recording/month
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Advanced AI analysis
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Custom integrations
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Priority support
              </li>
            </ul>
            <Link 
              href="mailto:kleber@ziontechgroup.com?subject=Professional Plan - AI Meeting Intelligence"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
              <p className="text-gray-600">For large organizations</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Unlimited users
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Unlimited recording
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Custom AI models
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                On-premise deployment
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                24/7 dedicated support
              </li>
            </ul>
            <Link 
              href="mailto:kleber@ziontechgroup.com?subject=Enterprise Plan - AI Meeting Intelligence"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Meeting Platform?</h2>
          <p className="text-lg text-gray-600">Transform your meetings from time-wasters into productivity powerhouses</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">85% Time Savings</h3>
            <p className="text-gray-600">Reduce meeting follow-up time by 85% with automated summaries and task assignments</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">95% Accuracy</h3>
            <p className="text-gray-600">Industry-leading transcription accuracy with AI-powered speaker identification</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">300% ROI</h3>
            <p className="text-gray-600">Average return on investment within 6 months of implementation</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">4.9/5 Rating</h3>
            <p className="text-gray-600">Rated 4.9/5 by over 10,000 satisfied customers worldwide</p>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-xl opacity-90">Works with your existing tools and workflows</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Calendar Apps</h3>
            <p className="text-sm opacity-80">Google Calendar, Outlook, Apple Calendar</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Communication</h3>
            <p className="text-sm opacity-80">Slack, Microsoft Teams, Zoom</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Project Management</h3>
            <p className="text-sm opacity-80">Asana, Trello, Jira, Monday.com</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Security</h3>
            <p className="text-sm opacity-80">SSO, LDAP, Active Directory</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Meetings?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of teams already using our AI Meeting Intelligence Platform to make every meeting count.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="mailto:kleber@ziontechgroup.com?subject=AI Meeting Intelligence Platform Demo Request"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Demo
          </Link>
          <Link 
            href="tel:+13024640950"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 🌐 <Link href="https://ziontechgroup.com" className="text-blue-600 hover:underline">ziontechgroup.com</Link></p>
        </div>
      </div>
    </div>
  );
}