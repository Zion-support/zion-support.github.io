import Link from "next/link";

export const metadata = {
  title: "Social Media Scheduler | Zion Tech Group",
  description:
    "AI-powered social media management platform. Schedule, analyze, and optimize social media content across all platforms."};

export default function SocialMediaSchedulerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Social Media Scheduler
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered social media management platform that schedules, analyzes,
          and optimizes social media content across all major platforms with
          intelligent automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Content Management"
          details={[
            "Multi-platform posting",
            "Content calendar",
            "Bulk upload & scheduling",
            "Content library",
            "Hashtag optimization"]}
        />
        <FeatureCard
          title="AI Optimization"
          details={[
            "Optimal posting times",
            "Content performance prediction",
            "Audience engagement analysis",
            "Trend identification",
            "Content recommendation engine"]}
        />
        <FeatureCard
          title="Analytics & Insights"
          details={[
            "Cross-platform analytics",
            "Engagement tracking",
            "ROI measurement",
            "Competitor analysis",
            "Custom reporting"]}
        />
      </div>

      <PricingSection />

      <div className="mt-16 bg-gradient-to-r from-fuchsia-50 to-purple-50 border border-fuchsia-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Master Social Media?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Streamline your social media strategy with AI-powered scheduling and
          optimization. Perfect for influencers, agencies, and businesses of all
          sizes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-fuchsia-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-fuchsia-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-fuchsia-600 text-fuchsia-600 px-8 py-3 rounded-lg font-semibold hover:bg-fuchsia-600 hover:text-white transition-colors"
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
            <span className="text-fuchsia-500 mr-2">•</span> {detail}
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
          name="Individual"
          price="$19/mo"
          features={[
            "3 social media accounts",
            "30 posts/month",
            "Basic scheduling",
            "Email support",
            "Standard analytics"]}
        />
        <PricingPlan
          name="Professional"
          price="$79/mo"
          features={[
            "10 social media accounts",
            "Unlimited posts",
            "AI optimization",
            "Priority support",
            "Advanced analytics & insights"]}
          featured={true}
        />
        <PricingPlan
          name="Agency"
          price="$199/mo"
          features={[
            "Unlimited accounts",
            "Team collaboration",
            "White-label solution",
            "Dedicated support",
            "Custom reporting & API access"]}
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
          ? "border-fuchsia-500 bg-fuchsia-50 shadow-lg"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-fuchsia-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? "bg-fuchsia-600 text-white hover:bg-fuchsia-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
