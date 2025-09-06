import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Smart Invoice Generator | Zion Tech Group - AI-Powered Invoice Automation',
  description: 'Revolutionary AI-powered invoice generator with automated data extraction, smart categorization, payment tracking, and intelligent financial insights.',
  keywords: 'invoice generator, invoice automation, AI invoicing, smart invoicing, payment tracking, financial automation, invoice management'
};

export default function SmartInvoiceGeneratorPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Smart Invoice Generator
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Revolutionize your invoicing process with AI-powered automation. 
          Generate, track, and manage invoices intelligently while gaining valuable financial insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Smart Invoice Generator Inquiry"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Free Trial
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Invoice Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered invoice generator automates every aspect of your billing process while providing actionable insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🤖"
            title="AI-Powered Data Extraction"
            description="Automatically extract invoice data from emails, PDFs, and documents with 99.2% accuracy using advanced OCR and NLP."
            features={[
              "Email attachment processing",
              "PDF data extraction",
              "Handwritten text recognition",
              "Multi-language support",
              "Smart field mapping"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Smart Categorization"
            description="AI automatically categorizes expenses, identifies tax-deductible items, and suggests optimal accounting codes."
            features={[
              "Automatic expense categorization",
              "Tax deduction identification",
              "Accounting code suggestions",
              "Custom rule creation",
              "Learning from user behavior"
            ]}
          />
          <FeatureCard
            icon="💰"
            title="Payment Tracking & Reminders"
            description="Intelligent payment tracking with automated reminders, late payment detection, and collection strategies."
            features={[
              "Automated payment reminders",
              "Late payment detection",
              "Collection workflow automation",
              "Payment method preferences",
              "Escalation management"
            ]}
          />
          <FeatureCard
            icon="📈"
            title="Financial Analytics Dashboard"
            description="Comprehensive financial insights with cash flow predictions, revenue trends, and client payment behavior analysis."
            features={[
              "Cash flow forecasting",
              "Revenue trend analysis",
              "Client payment patterns",
              "Aging reports",
              "Custom financial reports"
            ]}
          />
          <FeatureCard
            icon="🔒"
            title="Advanced Security & Compliance"
            description="Enterprise-grade security with SOC 2 compliance, data encryption, and audit trails for financial data protection."
            features={[
              "SOC 2 Type II compliance",
              "End-to-end encryption",
              "Audit trail logging",
              "Role-based access control",
              "GDPR compliance"
            ]}
          />
          <FeatureCard
            icon="🔗"
            title="Seamless Integrations"
            description="Connect with 100+ accounting software, payment processors, and business tools for a unified workflow."
            features={[
              "QuickBooks integration",
              "Xero compatibility",
              "Stripe payment processing",
              "Bank account sync",
              "API for custom integrations"
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden fees, no setup costs. Choose the plan that grows with your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Solo"
            price="$29"
            period="per month"
            description="Perfect for freelancers and solo entrepreneurs"
            features={[
              "Up to 50 invoices/month",
              "Basic AI features",
              "Email support",
              "Standard templates",
              "Payment tracking",
              "Basic reporting"
            ]}
            popular={false}
          />
          <PricingCard
            name="Business"
            price="$79"
            period="per month"
            description="Ideal for small to medium businesses"
            features={[
              "Up to 500 invoices/month",
              "Full AI automation",
              "Priority support",
              "Custom templates",
              "Advanced analytics",
              "Team collaboration",
              "API access"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$199"
            period="per month"
            description="Complete solution for large organizations"
            features={[
              "Unlimited invoices",
              "Custom AI models",
              "Dedicated support",
              "White-label options",
              "Advanced security",
              "Custom integrations",
              "SLA guarantee"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Smart Invoice Generator?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their invoicing process with our AI-powered solution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            icon="⏱️"
            title="Save 15+ Hours Weekly"
            description="Automate repetitive invoicing tasks and focus on growing your business"
          />
          <BenefitCard
            icon="💵"
            title="Get Paid 40% Faster"
            description="Automated reminders and smart payment tracking reduce payment delays"
          />
          <BenefitCard
            icon="📊"
            title="Reduce Errors by 95%"
            description="AI-powered validation and data extraction minimize human errors"
          />
          <BenefitCard
            icon="🔍"
            title="Gain Financial Insights"
            description="Advanced analytics help you make better business decisions"
          />
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your ROI</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how much time and money you can save with our smart invoice generator.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Current Process Costs</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Time spent on invoicing (hours/month):</span>
                  <span className="font-semibold">40 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hourly rate:</span>
                  <span className="font-semibold">$50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Late payment losses:</span>
                  <span className="font-semibold">$2,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Error correction costs:</span>
                  <span className="font-semibold">$500</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Monthly Cost:</span>
                    <span className="text-red-600">$4,500</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">With Smart Invoice Generator</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Time saved (hours/month):</span>
                  <span className="font-semibold text-green-600">35 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Faster payments:</span>
                  <span className="font-semibold text-green-600">+$1,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Error reduction:</span>
                  <span className="font-semibold text-green-600">+$475</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Software cost:</span>
                  <span className="font-semibold text-red-600">-$79</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Monthly Savings:</span>
                    <span className="text-green-600">$3,596</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Invoicing Process?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start your free trial today and experience the power of AI-powered invoice automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Smart Invoice Generator - Free Trial Request"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
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
    </div>
  );
}

function FeatureCard({ icon, title, description, features }: {
  icon: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`p-8 rounded-lg border-2 ${popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={`mailto:kleber@ziontechgroup.com?subject=Smart Invoice Generator - ${name} Plan Inquiry`}
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function BenefitCard({ icon, title, description }: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}