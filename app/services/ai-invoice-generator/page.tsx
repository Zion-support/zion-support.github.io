<<<<<<< HEAD
import React from 'react';



=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
export const metadata = {
  title: 'AI Invoice Generator | Zion Tech Group',
  description: 'Intelligent invoice generation with AI-powered data extraction, automated billing, payment tracking, and smart expense categorization for streamlined financial management.',
  keywords: 'ai-invoice-generator, services, business, technology'
};

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

<<<<<<< HEAD

function PricingTier({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta,
}: PricingTierProps) {
  return (
    <div
      className={`relative p-8 rounded-lg border-2 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"} shadow-lg`}
    >

=======
function PricingTier({ name, price, period, description, features, popular = false, cta }: PricingTierProps) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
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
        <span className="text-gray-600">/{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
<<<<<<< HEAD

            <svg
              className="w-5 h-5 text-green-500 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />

            </svg>
=======
            <span className="text-green-500 mr-3">✓</span>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
<<<<<<< HEAD
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Invoice Generator Quote - {name}"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular

            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-900 text-white hover:bg-gray-800"

        }`}
      >
=======
      <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
        popular 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
      }`}>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
        {cta}
      </button>
    </div>
  );
}

export default function AIInvoiceGeneratorPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Invoice Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent invoice generation with AI-powered data extraction, automated billing, payment tracking, and smart expense categorization.
        </p>
      </div>

<<<<<<< HEAD
      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI-Powered Invoice Features
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions to streamline your invoicing and financial management processes.
=======
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📄</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Automated Generation
          </h3>
          <p className="text-gray-600">
            AI-powered invoice generation with automatic data extraction and formatting.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">💳</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Payment Tracking
          </h3>
          <p className="text-gray-600">
            Automated payment tracking and follow-up reminders for outstanding invoices.
          </p>
        </div>

<<<<<<< HEAD
      {/* How It Works */}
      <section className="py-12">
        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple 4-step process to automate your invoicing with AI.
=======
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Smart Categorization
          </h3>
          <p className="text-gray-600">
            AI-powered expense categorization and financial reporting for better insights.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
          </p>
        </div>
      </div>

<<<<<<< HEAD
      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your invoicing needs and business size.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
=======
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Pricing Plans
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Choose the plan that fits your invoicing needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
          <PricingTier
            name="Starter"
            price="$29"
            period="month"
            description="Perfect for small businesses getting started with AI invoicing"
            features={[
              "Up to 100 invoices/month",
              "Basic AI features",
              "Payment tracking",
              "Email support"
            ]}
            cta="Get Started"
          />
          
          <PricingTier
            name="Professional"
            price="$99"
            period="month"
            description="Ideal for growing businesses with higher invoice volumes"
            features={[
              "Up to 1,000 invoices/month",
              "Advanced AI features",
              "Custom templates",
              "Priority support",
              "Advanced analytics"
            ]}
            popular={true}
            cta="Get Started"
          />
          
          <PricingTier
            name="Enterprise"
            price="Custom"
            period="month"
            description="Tailored solutions for large organizations"
            features={[
              "Unlimited invoices",
              "Custom AI models",
              "White-label options",
              "24/7 dedicated support",
              "API integration"
            ]}
            cta="Contact Sales"
          />
        </div>
      </div>

<<<<<<< HEAD
      {/* Benefits */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Invoice Generator?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proven results and cutting-edge AI technology to streamline your financial processes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Save 10+ Hours/Week</h3>
            <p className="text-gray-600">Automate invoicing tasks and focus on growing your business</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">30% Faster Payments</h3>
            <p className="text-gray-600">Automated reminders and easy payment options increase collection speed</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">99% Accuracy</h3>
            <p className="text-gray-600">AI reduces human errors and ensures accurate invoicing</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank-Level Security</h3>
            <p className="text-gray-600">Enterprise-grade security to protect your financial data</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Automate Your Invoicing?
        </h2>

        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start your free trial today and see how AI can transform your invoicing process.
=======
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Automate Your Invoicing?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your invoicing needs and implement AI-powered solutions.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}