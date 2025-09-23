import Link from "next/link";

export const metadata = {
  title: "Automated Workflow Builder | Zion Tech Group",
  description:
    "Visual workflow automation platform. Create, manage, and optimize business processes with drag-and-drop automation."};

export default function AutomatedWorkflowBuilderPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Automated Workflow Builder
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Visual workflow automation platform that helps you create, manage, and
          optimize business processes with drag-and-drop automation and
          intelligent triggers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Visual Builder"
          details={[
            "Drag-and-drop interface",
            "Pre-built workflow templates",
            "Conditional logic",
            "Multi-step processes",
            "Real-time testing"]}
        />
        <FeatureCard
          title="Integration Hub"
          details={[
            "500+ app integrations",
            "API connectors",
            "Custom webhooks",
            "Database connections",
            "Third-party services"]}
        />
        <FeatureCard
          title="Intelligence & Analytics"
          details={[
            "Performance monitoring",
            "Bottleneck identification",
            "Optimization suggestions",
            "Success rate tracking",
            "Cost analysis"]}
        />
      </div>

      <PricingSection />

      <div className="mt-16 bg-gradient-to-r from-lime-50 to-green-50 border border-lime-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Automate Your Business?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Streamline your business processes with powerful workflow automation.
          Perfect for operations teams, HR, finance, and any process-heavy
          department.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-lime-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-lime-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-lime-600 text-lime-600 px-8 py-3 rounded-lg font-semibold hover:bg-lime-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-lime-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingPlan
          name="Starter"
          price="$39/mo"
          features={[
            "5 active workflows",
            "1,000 executions/month",
            "Basic integrations",
            "Email support",
            "Standard templates"]}
        />
        <PricingPlan
          name="Professional"
          price="$129/mo"
          features={[
            "25 active workflows",
            "10,000 executions/month",
            "All integrations",
            "Priority support",
            "Advanced analytics"]}
          featured={true}
        />
        <PricingPlan
          name="Enterprise"
          price="$399/mo"
          features={[
            "Unlimited workflows",
            "Unlimited executions",
            "Custom integrations",
            "White-label solution",
            "Dedicated support"]}
        />
      </div>
    </div>
  );
}

function PricingPlan({
  name,
  price,
  features,
  featured = false}: {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${
        featured
          ? "border-lime-500 bg-lime-50 shadow-lg"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-lime-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? "bg-lime-600 text-white hover:bg-lime-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
