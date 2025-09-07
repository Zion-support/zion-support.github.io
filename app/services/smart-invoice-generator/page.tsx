<<<<<<< HEAD
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Invoice Generator | Zion Tech Group',
  description: 'Professional smart invoice generator services for your business needs.',
  keywords: 'smart invoice generator, services, business, technology'
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart Invoice Generator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional smart invoice generator services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-4">Fast & Reliable</h3>
            <p className="text-gray-300">
              High-performance solutions that deliver results quickly and consistently.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
            <p className="text-gray-300">
              Seamlessly integrate with your existing systems and workflows.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
            <p className="text-gray-300">
              Grow with your business with our flexible and scalable platform.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to learn how our smart invoice generator services can transform your business.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}
=======
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service | Zion Tech Group',
  description: 'Professional services for your business needs.',
  keywords: 'services, business, technology',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Service | Zion Tech Group',
    description: 'Professional services for your business needs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
import Link from 'next/link';

export const metadata = {
  title: 'Smart Invoice Generator | Zion Tech Group',
  description: 'AI-powered invoice automation with smart templates, payment tracking, and financial analytics. Reduce billing time by 80% and get paid 30% faster.',
  keywords: 'smart invoice generator, invoice automation, AI billing, payment tracking, financial analytics, invoice templates'
<<<<<<< HEAD
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="text-center p-6 bg-white rounded-xl shadow-md">
    <p className="text-5xl font-bold text-green-600 mb-2">{value}</p>
    <p className="text-lg text-gray-600">{label}</p>
  </div>
);

const ContactSection: React.FC = () => (
  <section className="py-12 bg-green-600 rounded-lg text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Invoicing?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Let's discuss how our Smart Invoice Generator can streamline your billing process and improve cash flow.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Smart Invoice Generator Inquiry"
        className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Free Demo
      </a>
      <a
        href="tel:+13024640950"
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
      >
        Call +1 302 464 0950
      </a>
    </div>
    <div className="mt-8 text-sm">
      <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      <p>📧 kleber@ziontechgroup.com</p>
    </div>
  </section>
);

export default function ServicePage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Professional services for your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            This service page is under development. Please contact us for more information.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Smart Invoice Generator
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          AI-powered invoice automation with smart templates, payment tracking, and financial analytics.
          Reduce billing time by 80% and get paid 30% faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Smart Invoice Generator Inquiry"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get Free Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful automation features that transform your invoicing process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="AI-Powered Templates"
            description="Smart templates that adapt to your business needs and automatically populate invoice data."
            icon="🤖"
          />
          <FeatureCard
            title="Payment Tracking"
            description="Real-time payment status updates and automated follow-up reminders for overdue invoices."
            icon="💳"
          />
          <FeatureCard
            title="Financial Analytics"
            description="Comprehensive insights into your cash flow, payment patterns, and revenue trends."
            icon="📊"
          />
          <FeatureCard
            title="Multi-Channel Delivery"
            description="Send invoices via email, SMS, or integrate with your existing CRM and accounting systems."
            icon="📧"
          />
          <FeatureCard
            title="Automated Recurring Billing"
            description="Set up recurring invoices for subscriptions and regular services with flexible scheduling."
            icon="🔄"
          />
          <FeatureCard
            title="Mobile App"
            description="Create, send, and track invoices on the go with our intuitive mobile application."
            icon="📱"
          />
        </div>
      </section>

      {/* Results Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Proven Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard value="80%" label="Time Reduction" />
          <StatCard value="30%" label="Faster Payments" />
          <StatCard value="95%" label="Accuracy Rate" />
          <StatCard value="50%" label="Cost Savings" />
        </div>
      </div>

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
