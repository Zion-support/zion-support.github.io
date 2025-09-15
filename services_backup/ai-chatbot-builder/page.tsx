import Link from "next/link";

export const metadata = {
  title: "AI Chatbot Builder | Zion Tech Group",
  description:
    "Build intelligent chatbots with no-code platform. Custom AI assistants for customer support, sales, and engagement."};

export default function AIChatbotBuilderPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Chatbot Builder
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build intelligent chatbots with our no-code platform. Create custom AI
          assistants for customer support, sales, and engagement that understand
          context and provide human-like responses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="No-Code Builder"
          details={[
            "Drag-and-drop interface",
            "Pre-built conversation flows",
            "Multi-language support",
            "Visual flow designer",
            "Template library"]}
        />
        <FeatureCard
          title="AI Intelligence"
          details={[
            "GPT-4 integration",
            "Context-aware responses",
            "Sentiment analysis",
            "Intent recognition",
            "Learning from conversations"]}
        />
        <FeatureCard
          title="Integration & Analytics"
          details={[
            "CRM integration (Salesforce, HubSpot)",
            "Live chat handoff",
            "Conversation analytics",
            "Performance metrics",
            "A/B testing tools"]}
        />
      </div>

      <PricingSection />

      <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Build Your AI Chatbot?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Start building your intelligent chatbot today. No technical skills
          required - just drag, drop, and deploy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
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
            <span className="text-orange-500 mr-2">•</span> {detail}
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
          price="$29/mo"
          features={[
            "Up to 1,000 conversations/month",
            "Basic AI responses",
            "Email support",
            "Standard integrations",
            "Basic analytics"]}
        />
        <PricingPlan
          name="Professional"
          price="$99/mo"
          features={[
            "Up to 10,000 conversations/month",
            "Advanced AI with context",
            "Priority support",
            "All integrations",
            "Advanced analytics & A/B testing"]}
          featured={true}
        />
        <PricingPlan
          name="Enterprise"
          price="$299/mo"
          features={[
            "Unlimited conversations",
            "Custom AI training",
            "Dedicated support",
            "White-label solution",
            "Custom integrations & SLA"]}
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
          ? "border-orange-500 bg-orange-50 shadow-lg"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-orange-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? "bg-orange-600 text-white hover:bg-orange-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
