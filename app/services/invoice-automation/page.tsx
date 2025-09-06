import Link from "next/link";

export const metadata = {
  title: "Invoice Automation | Zion Tech Group",
  description: "Automate invoice processing, approval workflows, and payment tracking. Reduce manual work by 80% and improve cash flow management.",
};

export default function InvoiceAutomationPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Invoice Automation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Automate invoice processing, approval workflows, and payment tracking. 
          Reduce manual work by 80% and improve cash flow management with intelligent automation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="space-y-6">
            <FeatureItem
              icon="📄"
              title="Smart Invoice Capture"
              description="Automatically extract data from invoices via email, upload, or API with 99% accuracy"
            />
            <FeatureItem
              icon="✅"
              title="Automated Approval Workflows"
              description="Configure custom approval chains based on amount, vendor, and department rules"
            />
            <FeatureItem
              icon="💰"
              title="Payment Processing"
              description="Integrated payment processing with ACH, wire transfers, and check printing"
            />
            <FeatureItem
              icon="📊"
              title="Real-time Analytics"
              description="Comprehensive dashboards showing cash flow, payment trends, and vendor performance"
            />
            <FeatureItem
              icon="🔍"
              title="Duplicate Detection"
              description="AI-powered duplicate detection prevents duplicate payments and fraud"
            />
            <FeatureItem
              icon="🔗"
              title="ERP Integration"
              description="Seamless integration with QuickBooks, SAP, Oracle, and other accounting systems"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              title="Starter"
              price="$49"
              period="per month"
              description="Perfect for small businesses"
              features={[
                "Up to 100 invoices/month",
                "Basic approval workflows",
                "Email integration",
                "Standard reporting",
                "Email support"
              ]}
              popular={false}
            />
            <PricingCard
              title="Professional"
              price="$149"
              period="per month"
              description="Ideal for growing businesses"
              features={[
                "Up to 1,000 invoices/month",
                "Advanced workflows",
                "API integration",
                "Advanced analytics",
                "Priority support",
                "Custom fields"
              ]}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="$399"
              period="per month"
              description="For large organizations"
              features={[
                "Unlimited invoices",
                "Custom workflows",
                "Multi-currency support",
                "24/7 support",
                "Custom integrations",
                "Advanced security"
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Process Flow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <ProcessStep
            step="1"
            title="Capture"
            description="Invoices automatically captured via email, upload, or API"
            icon="📥"
          />
          <ProcessStep
            step="2"
            title="Extract"
            description="AI extracts vendor, amount, date, and line items with 99% accuracy"
            icon="🔍"
          />
          <ProcessStep
            step="3"
            title="Approve"
            description="Automated routing to approvers based on configured rules"
            icon="✅"
          />
          <ProcessStep
            step="4"
            title="Pay"
            description="Automated payment processing and reconciliation"
            icon="💳"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard
            icon="⏰"
            title="80% Time Savings"
            description="Reduce manual invoice processing time from hours to minutes"
          />
          <BenefitCard
            icon="💰"
            title="15% Cost Reduction"
            description="Lower processing costs and take advantage of early payment discounts"
          />
          <BenefitCard
            icon="🎯"
            title="99% Accuracy"
            description="Eliminate human errors in data entry and calculations"
          />
          <BenefitCard
            icon="🔒"
            title="Fraud Prevention"
            description="Advanced duplicate detection and approval controls prevent fraud"
          />
          <BenefitCard
            icon="📊"
            title="Better Visibility"
            description="Real-time insights into cash flow and spending patterns"
          />
          <BenefitCard
            icon="⚡"
            title="Faster Payments"
            description="Streamlined approval process reduces payment cycle time"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Integration Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <IntegrationCard name="QuickBooks" icon="📊" />
          <IntegrationCard name="SAP" icon="🏢" />
          <IntegrationCard name="Oracle" icon="🔮" />
          <IntegrationCard name="Xero" icon="📈" />
          <IntegrationCard name="NetSuite" icon="☁️" />
          <IntegrationCard name="Microsoft Dynamics" icon="🪟" />
          <IntegrationCard name="Sage" icon="🌿" />
          <IntegrationCard name="Custom APIs" icon="🔌" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UseCaseCard
            icon="🏢"
            title="Enterprise AP Automation"
            description="Large organizations processing thousands of invoices monthly with complex approval hierarchies"
          />
          <UseCaseCard
            icon="🏪"
            title="Small Business Efficiency"
            description="Small businesses looking to streamline invoice processing and improve cash flow"
          />
          <UseCaseCard
            icon="🏥"
            title="Healthcare Billing"
            description="Healthcare organizations managing complex billing and reimbursement processes"
          />
          <UseCaseCard
            icon="🏗️"
            title="Construction & Contracting"
            description="Construction companies managing project-based invoicing and vendor payments"
          />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({ title, price, period, description, features, popular }: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-colors ${
        popular 
          ? 'bg-green-600 text-white hover:bg-green-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}>
        Start Free Trial
      </button>
    </div>
  );
}

function ProcessStep({ step, title, description, icon }: { step: string; title: string; description: string; icon: string }) {
  return (
    <div className="text-center">
      <div className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
        {step}
      </div>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function IntegrationCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium text-gray-700">{name}</div>
    </div>
  );
}

function UseCaseCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Automate Your Invoice Processing?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Start your free trial today and see how automation can transform your accounts payable process. 
        Process your first 50 invoices for free.
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
      <div className="mt-4 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}