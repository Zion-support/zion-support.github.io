import Link from "next/link";

export const metadata = {
  title: "Email Automation Suite | Zion Tech Group",
  description:
    "Advanced email marketing automation platform. Create, send, and track personalized email campaigns with AI-powered optimization."};

export default function EmailAutomationSuitePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Email Automation Suite
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced email marketing automation platform that creates, sends, and
          tracks personalized email campaigns with AI-powered optimization and
          behavioral targeting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Campaign Management"
          details={[
            "Drag-and-drop email builder",
            "Template library",
            "A/B testing tools",
            "Send time optimization",
            "Multi-channel campaigns"]}
        />
        <FeatureCard
          title="AI Automation"
          details={[
            "Behavioral trigger automation",
            "Personalization engine",
            "Content optimization",
            "Send frequency optimization",
            "Predictive analytics"]}
        />
        <FeatureCard
          title="Analytics & Insights"
          details={[
            "Real-time campaign tracking",
            "Advanced segmentation",
            "ROI analysis",
            "Customer journey mapping",
            "Performance recommendations"]}
        />
      </div>

      <PricingSection />

      <div className="mt-16 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Automate Your Email Marketing?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Transform your email marketing with AI-powered automation and
          personalization. Perfect for e-commerce, SaaS, and marketing teams.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-sky-600 text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 hover:text-white transition-colors"
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
            <span className="text-sky-500 mr-2">•</span> {detail}
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
            "Up to 5,000 subscribers",
            "10,000 emails/month",
            "Basic automation",
            "Email support",
            "Standard templates"]}
        />
        <PricingPlan
          name="Professional"
          price="$99/mo"
          features={[
            "Up to 25,000 subscribers",
            "100,000 emails/month",
            "Advanced automation",
            "Priority support",
            "AI-powered optimization"]}
          featured={true}
        />
        <PricingPlan
          name="Enterprise"
          price="$299/mo"
          features={[
            "Unlimited subscribers",
            "Unlimited emails",
            "Custom automation workflows",
            "White-label solution",
            "Dedicated account manager"]}
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
          ? "border-sky-500 bg-sky-50 shadow-lg"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-sky-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? "bg-sky-600 text-white hover:bg-sky-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
