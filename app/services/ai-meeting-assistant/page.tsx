import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Meeting Assistant | Zion Tech Group',
  description: 'Intelligent meeting assistant powered by AI to enhance productivity and collaboration.',
  keywords: 'AI meeting assistant, meeting automation, productivity, collaboration, AI assistant'
};

export default function AimeetingassistantPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Meeting Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligent meeting assistant powered by AI to enhance productivity and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert aimeetingassistant solutions tailored to your business needs.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Solutions</h3>
            <p className="text-gray-600">
              Personalized approach to meet your specific requirements and goals.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Support</h3>
            <p className="text-gray-600">
              Dedicated support team to ensure your success and satisfaction.
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
              Round-the-clock support to ensure your ai-meeting-assistant solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
=======
import React from 'react';
import { Metadata } from 'next';
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834

export const metadata: Metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Professional page solutions for your business needs.',
  keywords: 'page',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Page | Zion Tech Group',
    description: 'Professional page solutions for your business needs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page | Zion Tech Group',
    description: 'Professional page solutions for your business needs.',
  },
};

<<<<<<< HEAD
export default function AIMeetingAssistantPage() {
  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">

=======
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional page solutions for your business needs.
          </p>
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
          <UseCaseCard
            icon="💼"
            title="Executive Meetings"
            description="Board meetings, strategy sessions, and leadership discussions with detailed action tracking"
          />
          <UseCaseCard
            icon="👥"
            title="Team Standups"
            description="Daily standups, sprint planning, and retrospectives with progress tracking"
          />
          <UseCaseCard
            icon="🎓"
            title="Training Sessions"
            description="Employee training, workshops, and educational content with knowledge extraction"
          />
          <UseCaseCard
            icon="🤝"
            title="Client Meetings"
            description="Sales calls, project updates, and client consultations with follow-up automation"
          />
          <UseCaseCard
            icon="🔬"
            title="Research Interviews"
            description="User interviews, market research, and feedback sessions with insight extraction"
          />
          <UseCaseCard
            icon="⚖️"
            title="Legal Proceedings"
            description="Legal consultations, depositions, and compliance meetings with accurate documentation"
          />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  popular,
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}
    >
      {popular && (
        <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
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
=======
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <p className="text-gray-600 mb-4">
              Advanced features and capabilities for your business needs.
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Professional solutions</li>
              <li>• 24/7 support</li>
              <li>• Scalable architecture</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
            <p className="text-gray-600 mb-4">
              Transform your business with our cutting-edge solutions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Increased efficiency</li>
              <li>• Cost savings</li>
              <li>• Better results</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive support and maintenance services.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Expert consultation</li>
              <li>• Training and documentation</li>
              <li>• Ongoing maintenance</li>
            </ul>
          </div>
        </div>
<<<<<<< HEAD
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
              "The AI Meeting Assistant has transformed our client meetings. We never miss important details and our follow-up is 100% accurate."
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">Jennifer Martinez</p>
              <p className="text-sm text-gray-500">Account Director, Marketing Agency Pro</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <blockquote className="text-gray-600 mb-4">
              "Our team meetings are now 50% more productive. The action item extraction is incredibly accurate and saves us hours of manual work."
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">David Kim</p>
              <p className="text-sm text-gray-500">Engineering Manager, TechCorp Solutions</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <blockquote className="text-gray-600 mb-4">
              "As a consultant, this tool is invaluable. I can focus on the conversation knowing that every detail is being captured perfectly."
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">Lisa Thompson</p>
              <p className="text-sm text-gray-500">Management Consultant, Strategic Insights LLC</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}