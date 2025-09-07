import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import Link from 'next/link';

export const metadata = {
  title: 'Ai Meeting Assistant | Zion Tech Group',
  description: 'Professional ai meeting assistant services for your business needs.',
  keywords: 'ai-meeting-assistant, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Meeting Assistant
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform every meeting into actionable insights with our AI-powered
          assistant. Get real-time transcription, intelligent summaries, and
          automatic action item extraction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="#demo"
            className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Watch Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI assistant handles every aspect of your meetings, from
            real-time transcription to intelligent follow-ups.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🎤</div>
            <h3 className="text-xl font-semibold mb-3">Real-time Transcription</h3>
            <p className="text-gray-600">
              Get instant, accurate transcription of all your meetings with 95% accuracy in multiple languages.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ai meeting assistant solutions run smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Meetings?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of teams already using our AI Meeting Assistant to make their meetings more productive and actionable.
          </p>
          <Link
            href="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <blockquote className="text-gray-600 mb-4">
              &ldquo;The AI Meeting Assistant has transformed our client meetings. We never miss important details and our follow-up is 100% accurate.&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">Jennifer Martinez</p>
              <p className="text-sm text-gray-500">Account Director, Marketing Agency Pro</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <blockquote className="text-gray-600 mb-4">
              &ldquo;Our team meetings are now 50% more productive. The action item extraction is incredibly accurate and saves us hours of manual work.&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">David Kim</p>
              <p className="text-sm text-gray-500">Engineering Manager, TechCorp Solutions</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <blockquote className="text-gray-600 mb-4">
              &ldquo;As a consultant, this tool is invaluable. I can focus on the conversation knowing that every detail is being captured perfectly.&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">Lisa Thompson</p>
              <p className="text-sm text-gray-500">Management Consultant, Strategic Insights LLC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-purple-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Meetings?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of professionals using our AI Meeting Assistant to make
          every meeting more productive and actionable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Meeting Assistant Demo Request"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
          </a>
        </div>
      </section>
    </div>
  );
}
