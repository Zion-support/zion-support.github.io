import React from 'react';

export const metadata = {
  title: 'AI Invoice Generator | Zion Tech Group',
  description: 'Automated invoicing with AI data extraction, smart categorization, and payment processing. Save 10+ hours per week with 99% accuracy.',
  keywords: 'AI invoice generator, automated invoicing, invoice automation, payment processing, expense tracking, billing software'
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

function FeatureCard({ icon, title, description, benefits }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
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

function PricingTier({ name, price, period, description, features, popular = false, cta }: PricingTierProps) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
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
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Invoice Generator - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

export default function AIInvoiceGeneratorPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Invoice Generator
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Automate your invoicing process with AI-powered data extraction, smart categorization, and payment processing. Save 10+ hours per week with 99% accuracy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Invoice Generator Demo"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Invoice Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI invoice generator automates every aspect of your billing process, from data extraction to payment collection.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="📄"
            title="Smart Data Extraction"
            description="AI automatically extracts invoice data from emails, PDFs, and documents with 99% accuracy"
            benefits={[
              "99% accuracy rate",
              "Multi-format support",
              "Automatic data entry",
              "Error detection",
              "Validation rules"
            ]}
          />
          <FeatureCard
            icon="🏷️"
            title="Smart Categorization"
            description="Automatically categorize expenses, clients, and projects using AI pattern recognition"
            benefits={[
              "Automatic categorization",
              "Learning algorithms",
              "Custom rules engine",
              "Bulk processing",
              "Exception handling"
            ]}
          />
          <FeatureCard
            icon="💳"
            title="Payment Processing"
            description="Integrated payment processing with multiple payment methods and automated follow-ups"
            benefits={[
              "Multiple payment methods",
              "Automated reminders",
              "Payment tracking",
              "Late fee calculation",
              "Receipt generation"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Financial Analytics"
            description="Comprehensive financial insights and reporting with AI-powered trend analysis"
            benefits={[
              "Revenue tracking",
              "Expense analysis",
              "Cash flow forecasting",
              "Client profitability",
              "Tax preparation"
            ]}
          />
          <FeatureCard
            icon="🔄"
            title="Workflow Automation"
            description="Automated invoice approval workflows, recurring billing, and client notifications"
            benefits={[
              "Approval workflows",
              "Recurring billing",
              "Client notifications",
              "Status tracking",
              "Exception handling"
            ]}
          />
          <FeatureCard
            icon="🔒"
            title="Security & Compliance"
            description="Bank-level security with compliance features for various industries and regulations"
            benefits={[
              "Bank-level encryption",
              "GDPR compliance",
              "Audit trails",
              "Data backup",
              "Access controls"
            ]}
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI invoice generator simplifies your billing process in four easy steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Upload Documents</h3>
            <p className="text-gray-600">
              Upload invoices, receipts, or emails. Our AI automatically extracts all relevant data.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Processing</h3>
            <p className="text-gray-600">
              AI categorizes expenses, validates data, and prepares invoices with smart suggestions.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Review & Send</h3>
            <p className="text-gray-600">
              Review AI-generated invoices, make adjustments if needed, and send to clients automatically.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Track & Collect</h3>
            <p className="text-gray-600">
              Track payment status, send reminders, and collect payments through integrated payment processing.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored invoice generation solutions for different industries and business types.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              industry: "Freelancers",
              icon: "👨‍💻",
              description: "Simple invoicing for individual professionals and consultants",
              features: ["Time tracking", "Project billing", "Expense tracking", "Client management"]
            },
            {
              industry: "Small Business",
              icon: "🏢",
              description: "Comprehensive invoicing for small to medium businesses",
              features: ["Multi-user access", "Inventory management", "Tax calculations", "Reporting"]
            },
            {
              industry: "Agencies",
              icon: "🎯",
              description: "Advanced invoicing for marketing and creative agencies",
              features: ["Retainer billing", "Project tracking", "Team management", "Client portals"]
            },
            {
              industry: "E-commerce",
              icon: "🛒",
              description: "Automated invoicing for online stores and marketplaces",
              features: ["Order integration", "Shipping calculations", "Tax automation", "Multi-currency"]
            },
            {
              industry: "Services",
              icon: "🔧",
              description: "Field service invoicing with mobile capabilities",
              features: ["Mobile invoicing", "GPS tracking", "Photo attachments", "Digital signatures"]
            },
            {
              industry: "Healthcare",
              icon: "🏥",
              description: "Medical billing with insurance and compliance features",
              features: ["Insurance billing", "HIPAA compliance", "Patient portals", "Claim processing"]
            }
          ].map((solution, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.industry}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-1">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your invoicing needs. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            price="$49"
            period="month"
            description="Perfect for freelancers and small businesses"
            features={[
              "Up to 100 invoices/month",
              "Basic AI extraction",
              "Payment processing",
              "Basic reporting",
              "Email support",
              "Mobile app"
            ]}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Professional"
            price="$149"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Up to 1,000 invoices/month",
              "Advanced AI features",
              "Custom workflows",
              "Advanced analytics",
              "Priority support",
              "API access"
            ]}
            popular={true}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Enterprise"
            price="$399"
            period="month"
            description="For large organizations"
            features={[
              "Unlimited invoices",
              "Custom AI models",
              "White-label solution",
              "Advanced reporting",
              "Dedicated support",
              "Custom integrations"
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how businesses have transformed their invoicing process with our AI generator.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              company: "Marketing Agency",
              industry: "Services",
              result: "15 hours saved/week",
              description: "Reduced invoice processing time from 20 hours to 5 hours per week, improving cash flow by 30% and reducing errors by 95%."
            },
            {
              company: "Freelance Designer",
              industry: "Creative",
              result: "40% faster payments",
              description: "Automated invoice generation and payment reminders reduced average payment time from 45 days to 27 days."
            },
            {
              company: "Consulting Firm",
              industry: "Professional",
              result: "99% accuracy rate",
              description: "Eliminated manual data entry errors and improved client satisfaction with professional, consistent invoicing."
            }
          ].map((story, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <div className="text-sm text-blue-600 font-semibold mb-2">{story.industry}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{story.company}</h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="text-2xl font-bold text-green-600">{story.result}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Invoicing?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start your free trial today and see how AI can revolutionize your billing process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Invoice Generator Free Trial"
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