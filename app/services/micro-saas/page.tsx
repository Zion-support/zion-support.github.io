import React from 'react';
import Link from 'next/link';

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'End-to-end micro SaaS development with billing, auth, analytics, and growth features. From MVP to scale.'
};

function PricingTier({ name, price, period, description, features, popular = false, cta }: PricingTierProps) {
  return (
    <div className={`relative bg-white rounded-lg shadow-lg p-8 ${popular ? 'ring-2 ring-blue-500' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">/{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}

export default function MicroSaaSPage() {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          End-to-end micro SaaS development with billing, auth, analytics, and growth features. 
          From MVP to scale, we help you build profitable software products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">MVP Development</h3>
          <p className="text-gray-600 mb-4">
            Rapidly build and launch your minimum viable product with core features.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• User authentication</li>
            <li>• Core functionality</li>
            <li>• Basic UI/UX</li>
            <li>• Database setup</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">💳</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Billing & Payments</h3>
          <p className="text-gray-600 mb-4">
            Complete payment processing with subscription management and invoicing.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Stripe integration</li>
            <li>• Subscription management</li>
            <li>• Invoice generation</li>
            <li>• Payment analytics</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Metrics</h3>
          <p className="text-gray-600 mb-4">
            Track user behavior and business metrics with comprehensive analytics.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• User analytics</li>
            <li>• Revenue tracking</li>
            <li>• Performance metrics</li>
            <li>• Custom dashboards</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">🔐</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Auth</h3>
          <p className="text-gray-600 mb-4">
            Enterprise-grade security with multi-factor authentication and data protection.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• JWT authentication</li>
            <li>• Role-based access</li>
            <li>• Data encryption</li>
            <li>• Security monitoring</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance & Scale</h3>
          <p className="text-gray-600 mb-4">
            Optimized for performance with auto-scaling and CDN integration.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Auto-scaling</li>
            <li>• CDN integration</li>
            <li>• Database optimization</li>
            <li>• Caching strategies</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Features</h3>
          <p className="text-gray-600 mb-4">
            Built-in growth tools including referrals, onboarding, and user engagement.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Referral system</li>
            <li>• Onboarding flows</li>
            <li>• Email automation</li>
            <li>• User engagement</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            name="Starter"
            price="$5,000"
            period="project"
            description="Perfect for MVPs and early-stage products"
            features={[
              "Basic authentication",
              "Core functionality",
              "Simple UI/UX",
              "Basic analytics",
              "1 month support"
            ]}
            cta="Get Started"
          />
          <PricingTier
            name="Professional"
            price="$15,000"
            period="project"
            description="Full-featured SaaS with advanced capabilities"
            features={[
              "Complete authentication",
              "Payment integration",
              "Advanced analytics",
              "Admin dashboard",
              "3 months support"
            ]}
            popular={true}
            cta="Most Popular"
          />
          <PricingTier
            name="Enterprise"
            price="$35,000"
            period="project"
            description="Enterprise-grade solution with custom features"
            features={[
              "Custom development",
              "Advanced security",
              "White-label options",
              "API development",
              "6 months support"
            ]}
            cta="Contact Us"
          />
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss your idea and create a profitable software product together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </div>
    </div>
  );
}