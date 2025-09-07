<<<<<<< HEAD
export const metadata = {
  title: 'AI Project Management Tool | Zion Tech Group',
  description: 'Streamline your projects with AI-powered project management, automated task assignment, and intelligent resource optimization.',
};
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Project Management Demo"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Request Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Project Management</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform goes beyond traditional project management with smart automation and predictive insights.
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ai Project Management | Zion Tech Group',
  description: 'Professional ai project management services for your business needs.',
  keywords: 'ai, project, management'
};

export default function AiprojectmanagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Project Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ai project management services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert aiprojectmanagement solutions tailored to your business needs.
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

function Pricing() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan
          name="Team"
          price="$99/mo"
          features={[
            'Up to 10 team members',
            'Basic AI features',
            'Project templates',
            'Email support',
          ]}
        />
        <Plan
          name="Professional"
          price="$299/mo"
          features={[
            'Up to 50 team members',
            'Advanced AI optimization',
            'Custom workflows',
            'Priority support',
            'API integrations',
          ]}
          popular={true}
        />
        <Plan
          name="Enterprise"
          price="$799/mo"
          features={[
            'Unlimited team members',
            'Custom AI models',
            'White-label solution',
            'Dedicated support',
            'On-premise deployment',
          ]}
        />
      </div>
    </div>
  );
}

function Plan({ name, price, features, popular = false }: { name: string; price: string; features: string[]; popular?: boolean }) {
  return (
    <div className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-indigo-600 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map(f => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
          popular
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
=======
      </div>
    </div>
  );
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
