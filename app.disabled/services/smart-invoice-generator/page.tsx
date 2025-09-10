export const metadata = {
  title: 'Smart Invoice Generator | Zion Tech Group',
  description: 'Intelligent invoice generation with AI capabilities.',
  keywords: 'smart-invoice-generator, services, business, technology'
}
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart Invoice Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Intelligent invoice generation with AI capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored smart-invoice-generator solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your smart-invoice-generator solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

};

export default function SmartInvoiceGeneratorPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Smart Invoice Generator</h1>
      <p className="text-xl text-gray-600 mb-12">Automate your invoicing process with AI-powered generation, intelligent payment tracking, and comprehensive financial analytics.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="AI-Powered Generation"
          features={[
            'Auto-populate from contracts',
            'Smart line item suggestions',
            'Tax calculation automation',
            'Multi-currency support',
          ]}
        />
        <FeatureCard
          title="Payment Management"
          features={[
            'Automated payment reminders',
            'Online payment processing',
            'Late fee calculations',
            'Payment status tracking',
          ]}
        />
        <FeatureCard
          title="Financial Analytics"
          features={[
            'Revenue forecasting',
            'Cash flow analysis',
            'Client payment patterns',
            'Tax reporting',
          ]}
        />
      </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
            <p className="text-gray-600 mb-4">
              Transform your business with our cutting-edge solutions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Increased efficiency</li>
              <li>• Cost savings</li>
              <li>• Better results</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive support and maintenance services.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Expert consultation</li>
              <li>• Training and documentation</li>
              <li>• Ongoing maintenance</li>
            </ul>
          </div>
        </div>
      </div>
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
            'Up to 50 invoices/month',
            'Basic templates',
            'Payment tracking',
            'Email support',
          ]}
        />
        <Plan
          name="Business"
          price="$79/mo"
          features={[
            'Unlimited invoices',
            'Custom branding',
            'Advanced analytics',
            'Priority support',
            'API access',
          ]}
          popular={true}
        />
        <Plan
          name="Enterprise"
          price="$199/mo"
          features={[
            'Multi-user access',
            'Custom integrations',
            'Dedicated support',
            'Advanced reporting',
            'White-label solution',
          ]}
        />
      </div>
    </div>
  );
}

function Plan({
  name,
  price,
  features,
  popular = false,
}: {
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
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

