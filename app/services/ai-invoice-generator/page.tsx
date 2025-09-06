import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Invoice Generator | Zion Tech Group',
  description: 'Automated invoicing platform with AI data extraction, smart categorization, and payment processing. Save 10+ hours per week with 99% accuracy. Starting at $49/month.',
  keywords: 'AI invoice generator, automated invoicing, invoice automation, payment processing, expense tracking'
};

export default function AIInvoiceGeneratorPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Invoice Generator
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Automate your invoicing process with AI-powered data extraction, smart categorization, and seamless payment processing. Save 10+ hours per week with 99% accuracy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Invoice Generator Demo"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI technology that automates every aspect of your invoicing workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="📄"
            title="Smart Data Extraction"
            description="AI automatically extracts data from receipts, contracts, and documents with 99% accuracy"
            benefits={[
              "OCR technology",
              "Multi-format support",
              "Automatic categorization",
              "Error detection"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="AI Invoice Generation"
            description="Automatically generate professional invoices based on project data and client information"
            benefits={[
              "Template customization",
              "Brand integration",
              "Multi-currency support",
              "Tax calculations"
            ]}
          />
          <FeatureCard
            icon="💳"
            title="Payment Processing"
            description="Integrated payment processing with multiple payment methods and automated follow-ups"
            benefits={[
              "Stripe integration",
              "Multiple payment methods",
              "Automated reminders",
              "Payment tracking"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Expense Tracking"
            description="Comprehensive expense tracking with AI-powered categorization and reporting"
            benefits={[
              "Receipt scanning",
              "Category suggestions",
              "Expense reports",
              "Budget tracking"
            ]}
          />
          <FeatureCard
            icon="🔄"
            title="Workflow Automation"
            description="Automate your entire invoicing workflow from creation to payment collection"
            benefits={[
              "Automated scheduling",
              "Client notifications",
              "Follow-up sequences",
              "Status tracking"
            ]}
          />
          <FeatureCard
            icon="📈"
            title="Analytics & Insights"
            description="Detailed analytics and insights to optimize your invoicing and cash flow"
            benefits={[
              "Payment analytics",
              "Client insights",
              "Cash flow forecasting",
              "Performance metrics"
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business size and invoicing needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Starter"
            price="$49"
            period="month"
            description="Perfect for freelancers and small businesses"
            features={[
              "Up to 50 invoices/month",
              "Basic AI extraction",
              "Payment processing",
              "Email support",
              "Basic templates",
              "Expense tracking"
            ]}
            cta="Start Free Trial"
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$149"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Up to 200 invoices/month",
              "Advanced AI features",
              "Custom templates",
              "Priority support",
              "API access",
              "Advanced analytics",
              "Team collaboration"
            ]}
            cta="Start Free Trial"
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$399"
            period="month"
            description="For large organizations and agencies"
            features={[
              "Unlimited invoices",
              "Full AI suite",
              "White-label options",
              "Dedicated support",
              "Custom integrations",
              "Advanced reporting",
              "Multi-user access"
            ]}
            cta="Contact Sales"
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI Invoice Generator delivers measurable time and cost savings.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <MetricCard
            number="10+"
            label="Hours Saved/Week"
            description="Average time savings per user"
          />
          <MetricCard
            number="99%"
            label="Accuracy Rate"
            description="AI data extraction accuracy"
          />
          <MetricCard
            number="30%"
            label="Faster Payments"
            description="Reduction in payment collection time"
          />
          <MetricCard
            number="95%"
            label="User Satisfaction"
            description="Clients who see significant improvement"
          />
        </div>
      </section>

      {/* Integration Support */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with your favorite tools and platforms for a complete workflow.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <IntegrationCard
            name="QuickBooks"
            icon="📊"
            description="Sync invoices and payments"
          />
          <IntegrationCard
            name="Xero"
            icon="📈"
            description="Automatic accounting sync"
          />
          <IntegrationCard
            name="Stripe"
            icon="💳"
            description="Payment processing"
          />
          <IntegrationCard
            name="PayPal"
            icon="💰"
            description="Alternative payment method"
          />
          <IntegrationCard
            name="Slack"
            icon="💬"
            description="Team notifications"
          />
          <IntegrationCard
            name="Zapier"
            icon="🔗"
            description="Workflow automation"
          />
          <IntegrationCard
            name="Google Drive"
            icon="📁"
            description="Document storage"
          />
          <IntegrationCard
            name="API"
            icon="⚙️"
            description="Custom integrations"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with AI-powered invoicing in just 3 simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            step="1"
            title="Upload Documents"
            description="Upload receipts, contracts, or project data. Our AI extracts all relevant information automatically."
          />
          <StepCard
            step="2"
            title="AI Generates Invoice"
            description="AI creates professional invoices with accurate calculations, tax handling, and your branding."
          />
          <StepCard
            step="3"
            title="Send & Track"
            description="Send invoices automatically and track payments with integrated payment processing and follow-ups."
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how businesses are saving time and improving cash flow with our AI Invoice Generator.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            company="Freelance Designer"
            result="15 hours saved per week"
            description="The AI Invoice Generator has completely transformed my invoicing process. I save 15 hours per week and get paid 30% faster."
            industry="Design"
          />
          <TestimonialCard
            company="Consulting Firm"
            result="99% accuracy rate"
            description="The AI data extraction is incredibly accurate. We've eliminated manual data entry errors and reduced processing time by 80%."
            industry="Consulting"
          />
          <TestimonialCard
            company="Digital Agency"
            result="$50K+ in time savings"
            description="Our team can now focus on client work instead of administrative tasks. The ROI has been incredible."
            industry="Marketing"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-green-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Invoicing?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of businesses saving time and improving cash flow with AI-powered invoicing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Invoice Generator - Free Trial"
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
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, benefits }: {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
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

function PricingCard({ name, price, period, description, features, cta, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-green-600 mb-2">
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
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function MetricCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-green-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function IntegrationCard({ name, icon, description }: {
  name: string;
  icon: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ step, title, description }: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ company, result, description, industry }: {
  company: string;
  result: string;
  description: string;
  industry: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-green-600 font-bold text-lg">{company.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{company}</h4>
          <p className="text-sm text-gray-600">{industry}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-lg font-bold text-green-600">{result}</div>
    </div>
  );
}