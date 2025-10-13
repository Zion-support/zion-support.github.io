import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Zap, Users, BarChart3, Shield, Clock } from 'lucide-react';

export default function AIEmailAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Email Automation - Zion Tech Group</title>
        <meta name="description" content="Advanced AI email automation solutions by Zion Tech Group. Automate your email marketing with intelligent AI-powered tools." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Email Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your email marketing with AI-powered automation. Send personalized, 
            intelligent emails that engage your audience and drive results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Mail className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Smart Email Campaigns</h3>
            <p className="text-gray-300">
              Create and manage intelligent email campaigns that adapt to user behavior and preferences.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Zap className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Automated Workflows</h3>
            <p className="text-gray-300">
              Set up complex email workflows that trigger based on user actions and engagement patterns.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Users className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Personalization Engine</h3>
            <p className="text-gray-300">
              Deliver highly personalized content that resonates with each individual recipient.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <BarChart3 className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Analytics</h3>
            <p className="text-gray-300">
              Track performance with detailed analytics and AI-powered insights for optimization.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Shield className="h-12 w-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Compliance & Security</h3>
            <p className="text-gray-300">
              Ensure GDPR compliance and data security with built-in protection features.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Clock className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Optimal Send Times</h3>
            <p className="text-gray-300">
              AI determines the best times to send emails for maximum engagement and deliverability.
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Our AI Email Automation?</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Increase email open rates by up to 40% with AI optimization</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Reduce manual work by 80% with intelligent automation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Personalize content for each recipient automatically</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Scale your email marketing without increasing team size</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Implementation Process</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-white">Email Audit</h4>
                  <p className="text-gray-300 text-sm">Analyze your current email strategy and identify optimization opportunities</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-white">AI Setup</h4>
                  <p className="text-gray-300 text-sm">Configure AI models and automation rules for your specific needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-white">Launch & Optimize</h4>
                  <p className="text-gray-300 text-sm">Deploy automation and continuously optimize based on performance data</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your Email Marketing?
            </h2>
            <p className="text-gray-300 mb-6">
              Contact our AI email automation experts to see how we can transform your email marketing strategy.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}