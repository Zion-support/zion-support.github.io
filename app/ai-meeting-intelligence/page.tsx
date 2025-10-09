'use client';
import React from 'react';
import { ArrowLeft, CheckCircle, Star, Users, Clock, TrendingUp, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const AIMeetingIntelligencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Meeting Intelligence Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your meetings with AI-powered transcription, action item extraction, and intelligent follow-up automation. 
            Never miss important details again.
          </p>
          <div className="text-3xl font-bold text-cyan-400 mb-4">$79/month</div>
          <div className="text-gray-300 mb-8">Starting price - No setup fees</div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6 text-center">
            <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Real-time Transcription</h3>
            <p className="text-gray-300">Accurate, real-time meeting transcription with speaker identification</p>
          </div>
          <div className="cyber-card p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Action Item Extraction</h3>
            <p className="text-gray-300">Automatically identify and track action items from meetings</p>
          </div>
          <div className="cyber-card p-6 text-center">
            <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Meeting ROI Tracking</h3>
            <p className="text-gray-300">Measure meeting effectiveness and productivity metrics</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="cyber-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose AI Meeting Intelligence Pro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">90% Time Saved on Notes</h3>
                  <p className="text-gray-300">Automatically generate comprehensive meeting summaries and action items</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">100% Action Item Capture</h3>
                  <p className="text-gray-300">Never miss important tasks or decisions from your meetings</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">50% Better Follow-through</h3>
                  <p className="text-gray-300">Automated follow-up reminders and progress tracking</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Meeting ROI Insights</h3>
                  <p className="text-gray-300">Understand which meetings drive the most value for your organization</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sentiment Analysis</h3>
                  <p className="text-gray-300">Track team sentiment and engagement during meetings</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Integration Ready</h3>
                  <p className="text-gray-300">Seamlessly integrate with your existing calendar and productivity tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Meetings?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 500+ companies already using AI Meeting Intelligence Pro to make their meetings more productive and effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMeetingIntelligencePage;