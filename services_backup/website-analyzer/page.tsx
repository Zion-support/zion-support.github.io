import Link from "next/link";

export const metadata = {
  title: "Website Analyzer | Zion Tech Group",
  description:
    "Comprehensive website analysis tool. SEO audit, performance monitoring, security scanning, and competitive analysis."};

export default function WebsiteAnalyzerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Website Analyzer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive website analysis tool that provides SEO audits,
          performance monitoring, security scanning, and competitive analysis.
          Optimize your website for maximum impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="SEO Analysis"
          details={[
            "Technical SEO audit",
            "Keyword ranking tracking",
            "Backlink analysis",
            "Content optimization suggestions",
            "Core Web Vitals monitoring"]}
        />
        <FeatureCard
          title="Performance Monitoring"
          details={[
            "Page speed analysis",
            "Mobile performance testing",
            "Uptime monitoring",
            "Load time optimization",
            "Performance alerts"]}
        />
        <FeatureCard
          title="Security & Compliance"
          details={[
            "Security vulnerability scanning",
            "SSL certificate monitoring",
            "GDPR compliance check",
            "Malware detection",
            "Security recommendations"]}
        />
      </div>

      <PricingSection />

      <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Optimize Your Website?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get comprehensive insights into your website's performance, SEO, and
          security. Perfect for web developers, marketers, and business owners.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors"
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
            <span className="text-amber-500 mr-2">•</span> {detail}
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
          name="Basic"
          price="$19/mo"
          features={[
            "5 websites",
            "Monthly SEO reports",
            "Basic performance monitoring",
            "Email support",
            "Standard security scan"]}
        />
        <PricingPlan
          name="Professional"
          price="$79/mo"
          features={[
            "25 websites",
            "Weekly SEO reports",
            "Advanced performance monitoring",
            "Priority support",
            "Comprehensive security analysis"]}
          featured={true}
        />
        <PricingPlan
          name="Agency"
          price="$199/mo"
          features={[
            "Unlimited websites",
            "Real-time monitoring",
            "White-label reports",
            "API access",
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
          ? "border-amber-500 bg-amber-50 shadow-lg"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-amber-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? "bg-amber-600 text-white hover:bg-amber-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
