export const metadata = {
  title: "Smart Invoice Generator | Zion Tech Group",
  description:
    "Automate your invoicing process with AI-powered smart invoice generation, payment tracking, and financial analytics."};

export default function SmartInvoiceGeneratorPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Smart Invoice Generator
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Automate your invoicing process with AI-powered generation, intelligent
        payment tracking, and comprehensive financial analytics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="AI-Powered Generation"
          features={[
            "Auto-populate from contracts",
            "Smart line item suggestions",
            "Tax calculation automation",
            "Multi-currency support"]}
        />
        <FeatureCard
          title="Payment Management"
          features={[
            "Automated payment reminders",
            "Online payment processing",
            "Late fee calculations",
            "Payment status tracking"]}
        />
        <FeatureCard
          title="Financial Analytics"
          features={[
            "Revenue forecasting",
            "Cash flow analysis",
            "Client payment patterns",
            "Tax reporting"]}
        />
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Transform Your Invoicing Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Reduce Processing Time by 80%
              </h3>
              <p className="text-gray-600">
                Automate invoice creation, sending, and follow-ups
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Get Paid 30% Faster
              </h3>
              <p className="text-gray-600">
                Automated reminders and easy payment options increase collection
                rates
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Professional Branding
              </h3>
              <p className="text-gray-600">
                Customizable templates that reflect your brand identity
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Compliance & Security
              </h3>
              <p className="text-gray-600">
                GDPR compliant with bank-level security and audit trails
              </p>
            </div>
          </div>
        </div>
      </div>

      <Pricing />

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Streamline Your Invoicing?
        </h2>
        <p className="text-gray-600 mb-6">
          Start with a free trial and see how much time and money you can save.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  features}: {
  title: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {features.map((f) => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">•</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan
          name="Solo"
          price="$29/mo"
          features={[
            "Up to 50 invoices/month",
            "Basic templates",
            "Payment tracking",
            "Email support"]}
        />
        <Plan
          name="Business"
          price="$79/mo"
          features={[
            "Unlimited invoices",
            "Custom branding",
            "Advanced analytics",
            "Priority support",
            "API access"]}
          popular={true}
        />
        <Plan
          name="Enterprise"
          price="$199/mo"
          features={[
            "Multi-user access",
            "Custom integrations",
            "Dedicated support",
            "Advanced reporting",
            "White-label solution"]}
        />
      </div>
    </div>
  );
}

function Plan({
  name,
  price,
  features,
  popular = false}: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? "border-green-500 ring-2 ring-green-200" : "border-gray-200"}`}
    >
      {popular && (
        <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-green-600 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
          popular
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
