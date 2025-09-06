import Link from "next/link";

export const metadata = {
  title: "Smart Invoice Generator | Zion Tech Group - AI-Powered Invoicing",
  description: "Automate invoice creation with AI-powered Smart Invoice Generator. Features automated follow-ups, payment tracking, multi-currency support, and tax compliance. Starting at $199/month.",
};

export default function SmartInvoiceGeneratorPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Smart Invoice Generator
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Automate your invoicing process with AI-powered invoice generation, automated follow-ups, and intelligent payment tracking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Free Trial - Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Request Demo
          </a>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Smart Invoice Generator?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Streamline your billing process and get paid faster with our intelligent invoicing solution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            icon="⚡"
            title="Save 10+ Hours/Week"
            description="Automate invoice creation and follow-ups, freeing up time for your core business activities."
          />
          <BenefitCard
            icon="💰"
            title="Get Paid 40% Faster"
            description="Automated payment reminders and multiple payment options reduce average payment time."
          />
          <BenefitCard
            icon="🌍"
            title="Multi-Currency Support"
            description="Invoice clients worldwide with automatic currency conversion and local tax compliance."
          />
          <BenefitCard
            icon="📊"
            title="Real-Time Analytics"
            description="Track payment status, overdue invoices, and cash flow with comprehensive reporting."
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, send, and track professional invoices efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🤖"
            title="AI-Powered Generation"
            description="Automatically generate invoices from project data, time tracking, and client information."
          />
          <FeatureCard
            icon="📧"
            title="Automated Follow-ups"
            description="Set up smart payment reminders that adapt based on client payment history and behavior."
          />
          <FeatureCard
            icon="💳"
            title="Multiple Payment Options"
            description="Accept payments via credit cards, bank transfers, PayPal, and cryptocurrency."
          />
          <FeatureCard
            icon="📋"
            title="Tax Compliance"
            description="Automatic tax calculations for different regions with support for VAT, GST, and sales tax."
          />
          <FeatureCard
            icon="🔒"
            title="Secure & Encrypted"
            description="Bank-grade security with end-to-end encryption and secure data storage."
          />
          <FeatureCard
            icon="📱"
            title="Mobile App"
            description="Create and manage invoices on the go with our iOS and Android mobile applications."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business size and invoicing needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Starter"
            price="$199"
            period="month"
            description="Perfect for freelancers and small businesses"
            features={[
              "Up to 100 invoices/month",
              "5 client accounts",
              "Basic templates",
              "Email support",
              "Payment tracking"
            ]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$399"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Up to 500 invoices/month",
              "Unlimited clients",
              "Custom templates",
              "Priority support",
              "Advanced analytics",
              "API access"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$799"
            period="month"
            description="For large organizations"
            features={[
              "Unlimited invoices",
              "Multi-user accounts",
              "White-label solution",
              "Dedicated support",
              "Custom integrations",
              "Advanced reporting"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how businesses have transformed their invoicing process with our solution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="Smart Invoice Generator reduced our invoicing time by 80% and improved our cash flow significantly. The automated follow-ups are a game-changer."
            author="Sarah Johnson"
            company="Digital Marketing Agency"
            results="80% time reduction, 40% faster payments"
          />
          <TestimonialCard
            quote="The multi-currency support and tax compliance features made it easy to expand our business internationally. Highly recommended!"
            author="Michael Chen"
            company="Consulting Firm"
            results="Expanded to 15 countries, 100% tax compliance"
          />
        </div>
      </section>

      {/* Integration Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with your favorite business tools and streamline your workflow.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <IntegrationCard name="QuickBooks" icon="📊" />
          <IntegrationCard name="Xero" icon="💼" />
          <IntegrationCard name="Stripe" icon="💳" />
          <IntegrationCard name="PayPal" icon="🅿️" />
          <IntegrationCard name="Slack" icon="💬" />
          <IntegrationCard name="Zapier" icon="⚡" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Invoicing?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join 1,000+ businesses already using Smart Invoice Generator to streamline their billing process and get paid faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Free Trial - Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Schedule Demo
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-600">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </section>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  popular 
}: { 
  name: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md border-2 ${popular ? 'border-green-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
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

function TestimonialCard({ 
  quote, 
  author, 
  company, 
  results 
}: { 
  quote: string; 
  author: string; 
  company: string; 
  results: string; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <p className="text-gray-600 mb-4 italic">"{quote}"</p>
      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">{company}</p>
        <p className="text-sm text-green-600 font-semibold mt-2">{results}</p>
      </div>
    </div>
  );
}

function IntegrationCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-sm font-semibold text-gray-900">{name}</p>
    </div>
  );
}