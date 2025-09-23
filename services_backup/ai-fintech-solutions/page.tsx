import React from "react";
import Link from "next/link";

export const metadata = {
  title: "AI Fintech Solutions | Zion Tech Group",
  description:
    "Advanced AI-powered fintech solutions for fraud detection, risk assessment, algorithmic trading, credit scoring, and financial data analysis.",
  keywords:
    "AI fintech, fraud detection, risk assessment, algorithmic trading, credit scoring, financial AI, fintech solutions"};

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta}: PricingTierProps) {
  return (
    <div
      className={`relative p-8 rounded-lg border-2 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"} shadow-lg`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
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
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Fintech Solutions Quote - {name}"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

export default function AIFintechSolutionsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Fintech Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Revolutionize financial services with AI-powered solutions. Detect
          fraud, assess risk, optimize trading, and enhance customer experience
          with cutting-edge machine learning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Fintech Solutions Demo"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Demo
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI-Powered Fintech Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions to transform your financial services and
            operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon="🛡️"
            title="Fraud Detection AI"
            description="Real-time fraud detection using machine learning to identify suspicious transactions and prevent financial crimes"
          />
          <Feature
            icon="📊"
            title="Risk Assessment"
            description="Advanced risk modeling and credit scoring using AI to evaluate borrower creditworthiness and investment risks"
          />
          <Feature
            icon="📈"
            title="Algorithmic Trading"
            description="AI-powered trading algorithms that analyze market data and execute trades for optimal returns"
          />
          <Feature
            icon="💰"
            title="Credit Scoring"
            description="Intelligent credit scoring models that provide more accurate assessments than traditional methods"
          />
          <Feature
            icon="🔍"
            title="Regulatory Compliance"
            description="AI-powered compliance monitoring to ensure adherence to financial regulations and reporting requirements"
          />
          <Feature
            icon="💳"
            title="Payment Optimization"
            description="Smart payment processing with fraud prevention and transaction optimization for better success rates"
          />
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Financial System Integrations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate with your existing financial infrastructure and
            third-party services.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Stripe", icon: "💳", description: "Payment processing" },
            { name: "Plaid", icon: "🔗", description: "Banking data" },
            { name: "Yodlee", icon: "📊", description: "Financial data" },
            { name: "FICO", icon: "📈", description: "Credit scoring" },
            { name: "Experian", icon: "🏦", description: "Credit bureau" },
            { name: "Equifax", icon: "📋", description: "Credit reporting" },
            { name: "TransUnion", icon: "📄", description: "Credit data" },
            { name: "Bloomberg", icon: "📰", description: "Market data" }].map((integration, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="text-3xl mb-3">{integration.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {integration.name}
              </h3>
              <p className="text-xs text-gray-600">{integration.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple 4-step process to implement AI-powered fintech solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Data Integration
            </h3>
            <p className="text-gray-600">
              Connect your financial data sources and configure AI models
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              AI Model Training
            </h3>
            <p className="text-gray-600">
              Train AI models on your historical data for accurate predictions
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Deploy & Monitor
            </h3>
            <p className="text-gray-600">
              Deploy AI solutions and monitor performance with real-time
              analytics
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Optimize & Scale
            </h3>
            <p className="text-gray-600">
              Continuously improve AI models and scale across all financial
              services
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your fintech needs and transaction volume.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Startup"
            price="$1,999"
            period="month"
            description="Perfect for fintech startups"
            features={[
              "Up to 10,000 transactions/month",
              "Basic fraud detection",
              "Credit scoring API",
              "Basic analytics",
              "Email support",
              "5 user accounts"]}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Growth"
            price="$4,999"
            period="month"
            description="Most popular for growing fintechs"
            features={[
              "Up to 100,000 transactions/month",
              "Advanced fraud detection",
              "Risk assessment models",
              "Algorithmic trading",
              "Advanced analytics",
              "Priority support",
              "Unlimited users",
              "API access"]}
            popular={true}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Enterprise"
            price="$19,999"
            period="month"
            description="For large financial institutions"
            features={[
              "Unlimited transactions",
              "Full AI optimization suite",
              "Custom AI models",
              "White-label options",
              "Dedicated account manager",
              "24/7 phone support",
              "Custom integrations",
              "Advanced reporting"]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our AI Fintech Solutions?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proven results and cutting-edge AI technology to transform your
            financial services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              99.9% Fraud Detection
            </h3>
            <p className="text-gray-600">
              Advanced AI models detect fraudulent transactions with high
              accuracy
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              40% Cost Reduction
            </h3>
            <p className="text-gray-600">
              Reduce operational costs through AI automation and optimization
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              25% Better Returns
            </h3>
            <p className="text-gray-600">
              AI-powered trading and investment strategies improve returns
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Bank-Level Security
            </h3>
            <p className="text-gray-600">
              Enterprise-grade security and compliance with financial
              regulations
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Fintech with AI?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start your free trial today and see how AI can revolutionize your
          financial services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Fintech Solutions Demo Request"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}
