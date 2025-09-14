import Link from "next/link";

export const metadata = {
  title: "AI Testing Automation | Zion Tech Group",
  description:
    "Intelligent test automation with AI-powered test generation, execution, and maintenance for faster, more reliable software delivery."};

export default function AITestingAutomationPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Testing Automation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent test automation with AI-powered test generation,
          execution, and maintenance for faster, more reliable software
          delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Features & Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              title="AI Test Generation"
              description="Automatically generate comprehensive test cases based on code analysis, user behavior patterns, and business requirements."
            />
            <FeatureItem
              title="Self-Healing Tests"
              description="AI-powered test maintenance that automatically updates tests when UI elements change, reducing maintenance overhead by 90%."
            />
            <FeatureItem
              title="Intelligent Test Execution"
              description="Smart test prioritization and parallel execution based on risk analysis and code changes."
            />
            <FeatureItem
              title="Visual Testing AI"
              description="Advanced visual regression testing with AI-powered image comparison and layout analysis."
            />
            <FeatureItem
              title="API Testing Automation"
              description="Comprehensive API testing with automatic schema validation, performance testing, and security scanning."
            />
            <FeatureItem
              title="Cross-Platform Support"
              description="Test across web, mobile, desktop, and API platforms with unified reporting and management."
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
              price="$49/month"
              description="Perfect for small teams starting with test automation"
              features={[
                "Up to 1,000 test executions per month",
                "Basic AI test generation",
                "Web testing support",
                "Email support",
                "Basic reporting"]}
            />
            <PricingCard
              plan="Professional"
              price="$149/month"
              description="Ideal for growing development teams"
              features={[
                "Up to 10,000 test executions per month",
                "Advanced AI test generation",
                "All platform support",
                "Self-healing tests",
                "Priority support",
                "Advanced analytics"]}
            />
            <PricingCard
              plan="Enterprise"
              price="$399/month"
              description="For large organizations with complex testing needs"
              features={[
                "Unlimited test executions",
                "Custom AI model training",
                "24/7 dedicated support",
                "On-premise deployment",
                "Custom integrations",
                "SLA guarantees",
                "Advanced security testing"]}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our AI Testing Automation?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="90% Faster Test Creation"
            description="AI generates comprehensive test suites in minutes instead of weeks, covering edge cases and scenarios you might miss."
          />
          <BenefitCard
            title="Self-Maintaining Tests"
            description="Tests automatically adapt to UI changes, reducing maintenance time and keeping your test suite always up-to-date."
          />
          <BenefitCard
            title="Higher Test Coverage"
            description="AI analyzes your application to identify untested areas and generates targeted tests for maximum coverage."
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Testing?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience the future of testing with AI-powered automation that
          adapts, learns, and scales with your needs.
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
      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
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
      <div className="text-3xl font-bold text-green-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">•</span> {feature}
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
