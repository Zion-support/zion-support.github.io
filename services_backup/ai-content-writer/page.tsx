import Link from "next/link";

export const metadata = {
  title: "AI Content Writer | Zion Tech Group",
  description:
    "AI-powered content creation platform. Generate blog posts, social media content, and marketing copy with advanced AI."};

export default function AIContentWriterPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Content Writer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered content creation platform that generates high-quality blog
          posts, social media content, and marketing copy. Save time while
          maintaining brand voice and SEO optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Content Generation"
          details={[
            "Blog posts & articles",
            "Social media content",
            "Email marketing copy",
            "Product descriptions",
            "SEO-optimized content"]}
        />
        <FeatureCard
          title="AI Features"
          details={[
            "GPT-4 powered writing",
            "Brand voice training",
            "Tone adjustment",
            "Plagiarism detection",
            "Content optimization"]}
        />
        <FeatureCard
          title="Workflow & Collaboration"
          details={[
            "Content calendar",
            "Team collaboration",
            "Approval workflows",
            "Version control",
            "Performance analytics"]}
        />
      </div>

      <PricingSection />

      <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Scale Your Content?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Start creating high-quality content at scale with our AI-powered
          platform. Perfect for marketing teams, agencies, and content creators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
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
            <span className="text-indigo-500 mr-2">•</span> {detail}
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
          name="Creator"
          price="$19/mo"
          features={[
            "50 AI-generated articles/month",
            "Basic templates",
            "Standard AI models",
            "Email support",
            "Basic analytics"]}
        />
        <PricingPlan
          name="Professional"
          price="$79/mo"
          features={[
            "200 AI-generated articles/month",
            "Advanced templates & customization",
            "GPT-4 access",
            "Priority support",
            "Team collaboration (5 users)"]}
          featured={true}
        />
        <PricingPlan
          name="Agency"
          price="$199/mo"
          features={[
            "Unlimited articles",
            "Custom brand voice training",
            "White-label solution",
            "Dedicated account manager",
            "Advanced analytics & reporting"]}
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
          ? "border-indigo-500 bg-indigo-50 shadow-lg"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-indigo-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
