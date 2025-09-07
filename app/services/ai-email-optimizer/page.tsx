<<<<<<< HEAD
import React from 'react';



=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
export const metadata = {
  title: 'AI Email Optimizer | Zion Tech Group',
  description: 'AI-powered email optimization tool that analyzes, improves, and A/B tests your email campaigns for maximum engagement and conversion rates.',
  keywords: 'ai-email-optimizer, services, business, technology'
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
        href="mailto:kleber@ziontechgroup.com?subject=AI Email Optimizer Quote - {name}"
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

export default function AIEmailOptimizerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Email Optimizer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered email optimization tool that analyzes, improves, and A/B tests your email campaigns for maximum engagement and conversion rates.
        </p>
      </div>

<<<<<<< HEAD
      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful AI Features
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leverage advanced AI to optimize every aspect of your email marketing campaigns.
=======
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📧</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Content Optimization
          </h3>
          <p className="text-gray-600">
            AI analyzes your email content and suggests improvements for better engagement.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
          </p>
        </div>

<<<<<<< HEAD
      {/* How It Works */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple 3-step process to optimize your email campaigns with AI.
=======
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            A/B Testing
          </h3>
          <p className="text-gray-600">
            Automatically test different versions of your emails to find the best performing content.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Performance Analytics
          </h3>
          <p className="text-gray-600">
            Detailed analytics and insights to track and improve your email campaign performance.
          </p>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Pricing Plans
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Choose the plan that fits your email marketing needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Connect Your Email Platform</h3>
            <p className="text-gray-600">Integrate with Mailchimp, Constant Contact, SendGrid, or any email service provider</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Analysis & Optimization</h3>
            <p className="text-gray-600">Our AI analyzes your campaigns and automatically suggests improvements</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Track & Improve Results</h3>
            <p className="text-gray-600">Monitor performance improvements and watch your conversion rates soar</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your email marketing needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
          <PricingTier
            name="Starter"
            price="$99"
            period="month"
            description="Perfect for small businesses starting with email optimization"
            features={[
              "Up to 1,000 emails/month",
              "Basic content optimization",
              "A/B testing (2 variants)",
              "Email support"
            ]}
            cta="Get Started"
          />
          
          <PricingTier
            name="Professional"
            price="$299"
            period="month"
            description="Ideal for growing businesses with higher email volumes"
            features={[
              "Up to 10,000 emails/month",
              "Advanced AI optimization",
              "A/B testing (5 variants)",
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
              "Unlimited emails",
              "Custom AI models",
              "Unlimited A/B testing",
              "24/7 dedicated support",
              "White-label options"
            ]}
            cta="Contact Sales"
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Optimize Your Emails?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your email optimization needs and get started with AI-powered improvements.
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