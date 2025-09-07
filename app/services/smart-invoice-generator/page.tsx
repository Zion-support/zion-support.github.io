import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Invoice Generator | Zion Tech Group',
  description: 'Automated invoice creation with AI-powered expense categorization and payment tracking. Streamline your billing process and get paid faster.',
  keywords: 'invoice generator, automated billing, expense tracking, payment management, AI invoicing, financial automation',
};

export default function SmartInvoiceGeneratorPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Smart Invoice Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional smart invoice generator solutions designed to meet your business requirements 
            and drive growth. Our expert team delivers high-quality, scalable solutions.
          </p>
        </div>
=======
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Smart Invoice Generator
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              AI-powered invoice automation with smart templates, payment tracking, and financial analytics. 
              Reduce billing time by 80% and get paid 30% faster.
            </p>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
=======
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Invoice Generator
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Revolutionize your billing process with AI-powered invoice generation. Automatically categorize expenses, 
            track payments, and get paid faster with our intelligent invoicing platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Smart Invoice Generator Inquiry"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-lg"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Powerful Features</h2>
            <div className="space-y-6">
              <FeatureItem
                icon="🤖"
                title="AI-Powered Expense Categorization"
                description="Automatically categorize expenses using machine learning algorithms for accurate financial tracking."
                benefits={["Smart categorization", "Learning algorithms", "Custom rules", "Error reduction"]}
              />
              <FeatureItem
                icon="💳"
                title="Multi-Currency Support"
                description="Handle international clients with support for 150+ currencies and automatic exchange rate updates."
                benefits={["150+ currencies", "Auto exchange rates", "Real-time conversion", "Tax calculations"]}
              />
              <FeatureItem
                icon="📧"
                title="Automated Payment Reminders"
                description="Send intelligent payment reminders based on client behavior and payment history patterns."
                benefits={["Smart timing", "Custom messages", "Multiple channels", "Follow-up automation"]}
              />
              <FeatureItem
                icon="📊"
                title="Advanced Analytics Dashboard"
                description="Comprehensive financial insights with cash flow analysis, payment trends, and client behavior metrics."
                benefits={["Cash flow analysis", "Payment trends", "Client insights", "Financial forecasting"]}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Platform?</h2>
            <div className="space-y-6">
              <BenefitCard
                icon="⚡"
                title="90% Time Savings"
                description="Reduce invoice creation time by 90% with automated generation and smart templates."
              />
              <BenefitCard
                icon="💰"
                title="40% Faster Payments"
                description="Get paid 40% faster with automated reminders and optimized payment processes."
              />
              <BenefitCard
                icon="🔒"
                title="Bank-Grade Security"
                description="Enterprise-level security with encryption, compliance, and secure payment processing."
              />
              <BenefitCard
                icon="📱"
                title="Mobile-First Design"
                description="Create and manage invoices on-the-go with our responsive mobile application."
              />
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Solo"
              price="$149"
              period="month"
              description="Perfect for freelancers and solo entrepreneurs"
              features={[
                "50 invoices/month",
                "Basic AI categorization",
                "2 currencies",
                "Email support",
                "Standard templates",
                "Payment tracking"
              ]}
              popular={false}
            />
            <PricingCard
              title="Business"
              price="$299"
              period="month"
              description="Ideal for small to medium businesses"
              features={[
                "200 invoices/month",
                "Advanced AI features",
                "10 currencies",
                "Priority support",
                "Custom templates",
                "Advanced analytics",
                "Team collaboration",
                "API access"
              ]}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="$599"
              period="month"
              description="For large organizations with complex needs"
              features={[
                "Unlimited invoices",
                "Full AI suite",
                "150+ currencies",
                "24/7 support",
                "White-label options",
                "Custom integrations",
                "Advanced reporting",
                "Dedicated account manager"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Integration Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Seamless Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <IntegrationCard
              icon="💼"
              title="QuickBooks"
              description="Sync with QuickBooks for seamless accounting integration"
            />
            <IntegrationCard
              icon="📊"
              title="Xero"
              description="Connect with Xero for comprehensive financial management"
            />
            <IntegrationCard
              icon="💳"
              title="Stripe"
              description="Accept payments directly through Stripe integration"
            />
            <IntegrationCard
              icon="📧"
              title="Gmail/Outlook"
              description="Send invoices directly from your email client"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Streamline Your Invoicing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join 5,000+ businesses already using Smart Invoice Generator to automate their billing 
            and get paid faster. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Smart Invoice Generator - Free Trial"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
}

function FeatureItem({ icon, title, description, benefits }: { 
  icon: string; 
  title: string; 
  description: string; 
  benefits: string[] 
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { 
  icon: string; 
  title: string; 
  description: string 
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <div className="text-4xl mb-4 text-green-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  popular 
}: { 
  title: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  popular: boolean 
}) {
  return (
    <div className={`p-8 rounded-xl border-2 ${popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Smart Invoice Generator - {title} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function IntegrationCard({ icon, title, description }: { 
  icon: string; 
  title: string; 
  description: string 
}) {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
<<<<<<< HEAD
}
*/

/*
function TestimonialCard({
  quote,
  author,
  role,
  company,
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <p className="text-gray-600 mb-4 italic">&ldquo;{quote}&rdquo;</p>
      <div className="border-t pt-4">
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-sm text-gray-600">{role}</div>
        <div className="text-sm text-gray-500">{company}</div>
      </div>
    </div>
  );
}
*/
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
=======
}
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
