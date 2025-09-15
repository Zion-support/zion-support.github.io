import Link from "next/link";

export const metadata = {
  title: "Invoice Automation | Zion Tech Group",
  description:
    "AI-powered invoice processing, automated billing, and financial workflow automation to streamline your accounting operations."};

export default function InvoiceAutomationPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Invoice Automation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered invoice processing, automated billing, and financial
          workflow automation to streamline your accounting operations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Features & Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              title="AI Invoice Processing"
              description="Automatically extract data from invoices using OCR and AI, supporting 50+ languages and various formats."
            />
            <FeatureItem
              title="Automated Approval Workflows"
              description="Smart routing and approval workflows based on amount, vendor, and department with customizable rules."
            />
            <FeatureItem
              title="Real-time Payment Processing"
              description="Integrated payment processing with multiple payment methods, automated reconciliation, and fraud detection."
            />
            <FeatureItem
              title="Expense Management"
              description="Comprehensive expense tracking, categorization, and reporting with receipt scanning and mobile app support."
            />
            <FeatureItem
              title="Financial Reporting"
              description="Advanced analytics and reporting with real-time dashboards, budget tracking, and predictive insights."
            />
            <FeatureItem
              title="Integration Ecosystem"
              description="Seamless integration with QuickBooks, Xero, SAP, and 100+ accounting and ERP systems."
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pricing & Plans
          </h2>
          <div className="space-y-4">
            <PricingCard
              plan="Starter"
              price="$39/month"
              description="Perfect for small businesses and freelancers"
              features={[
                "Up to 100 invoices per month",
                "Basic AI processing",
                "Email support",
                "Basic reporting",
                "Mobile app access"]}
            />
            <PricingCard
              plan="Professional"
              price="$99/month"
              description="Ideal for growing businesses"
              features={[
                "Up to 1,000 invoices per month",
                "Advanced AI processing",
                "Priority support",
                "Advanced reporting",
                "Custom workflows",
                "API access"]}
            />
            <PricingCard
              plan="Enterprise"
              price="$299/month"
              description="For large organizations with complex needs"
              features={[
                "Unlimited invoices",
                "Custom AI training",
                "24/7 dedicated support",
                "On-premise deployment",
                "Custom integrations",
                "SLA guarantees",
                "Advanced security"]}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our Invoice Automation?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="95% Time Savings"
            description="Automated invoice processing reduces manual work by 95%, freeing up your team for strategic tasks."
          />
          <BenefitCard
            title="99.5% Accuracy Rate"
            description="AI-powered data extraction achieves 99.5% accuracy, reducing errors and improving financial accuracy."
          />
          <BenefitCard
            title="Real-time Insights"
            description="Get instant visibility into your financial data with real-time dashboards and predictive analytics."
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Automate Your Invoicing?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your accounting operations with AI-powered invoice
          automation that saves time, reduces errors, and provides real-time
          insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  title,
  description}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  plan,
  price,
  description,
  features}: {
  plan: string;
  price: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan}</h3>
      <div className="text-3xl font-bold text-orange-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-orange-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({
  title,
  description}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
