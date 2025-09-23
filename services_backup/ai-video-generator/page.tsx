import Link from "next/link";

export const metadata = {
  title: "AI Video Generator | Zion Tech Group",
  description:
    "Create professional videos with AI. Generate marketing videos, explainer content, and social media videos automatically."};

export default function AIVideoGeneratorPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Video Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create professional videos with AI in minutes. Generate marketing
          videos, explainer content, and social media videos automatically from
          text, images, or scripts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Video Creation"
          details={[
            "Text-to-video generation",
            "Image-to-video conversion",
            "Script-based video creation",
            "Multiple video formats",
            "HD/4K quality output"]}
        />
        <FeatureCard
          title="AI Features"
          details={[
            "Voice synthesis (20+ languages)",
            "Automatic scene generation",
            "Smart transitions & effects",
            "Background music generation",
            "Subtitle generation"]}
        />
        <FeatureCard
          title="Templates & Customization"
          details={[
            "Professional templates",
            "Brand customization",
            "Logo integration",
            "Color scheme matching",
            "Custom animations"]}
        />
      </div>

      <PricingSection />

      <div className="mt-16 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Create Amazing Videos?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Transform your ideas into engaging videos with our AI-powered
          platform. Perfect for marketers, content creators, and businesses of
          all sizes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors"
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
            <span className="text-pink-500 mr-2">•</span> {detail}
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
            "10 videos/month (up to 2 min each)",
            "Basic templates",
            "Standard quality (1080p)",
            "Email support",
            "Basic customization"]}
        />
        <PricingPlan
          name="Professional"
          price="$129/mo"
          features={[
            "50 videos/month (up to 5 min each)",
            "Premium templates",
            "4K quality output",
            "Priority support",
            "Advanced customization & branding"]}
          featured={true}
        />
        <PricingPlan
          name="Enterprise"
          price="$399/mo"
          features={[
            "Unlimited videos",
            "Custom template creation",
            "White-label solution",
            "Dedicated support",
            "API access & integrations"]}
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
          ? "border-pink-500 bg-pink-50 shadow-lg"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-pink-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? "bg-pink-600 text-white hover:bg-pink-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
