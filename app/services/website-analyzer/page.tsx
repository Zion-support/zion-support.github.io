import Link from "next/link";

export const metadata = {
  title: "Website Analyzer | Zion Tech Group",
  description:
    "Comprehensive website analysis tool with SEO audit, performance monitoring, and competitive intelligence.",
};

export default function WebsiteAnalyzerPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Website Analyzer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get comprehensive insights into your website's performance, SEO
          health, and competitive positioning with our advanced analysis
          platform.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Analysis Features
          </h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🔍"
              title="SEO Audit"
              description="Comprehensive SEO analysis including keywords, meta tags, content quality, and technical SEO"
            />
            <FeatureItem
              icon="⚡"
              title="Performance Monitoring"
              description="Page speed analysis, Core Web Vitals tracking, and performance optimization recommendations"
            />
            <FeatureItem
              icon="📊"
              title="Competitive Intelligence"
              description="Analyze competitor websites, track their SEO strategies, and identify opportunities"
            />
            <FeatureItem
              icon="🔒"
              title="Security Analysis"
              description="SSL certificate monitoring, security vulnerability scanning, and compliance checks"
            />
            <FeatureItem
              icon="📱"
              title="Mobile Optimization"
              description="Mobile-friendliness testing, responsive design analysis, and mobile performance metrics"
            />
            <FeatureItem
              icon="📈"
              title="Growth Tracking"
              description="Monitor website growth, traffic trends, and conversion rate optimization opportunities"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h2>
          <div className="space-y-6">
            <PricingCard
              name="Basic"
              price="$19"
              period="month"
              description="Perfect for small websites"
              features={[
                "1 website",
                "Monthly reports",
                "Basic SEO audit",
                "Email support",
                "Standard metrics",
              ]}
              popular={false}
            />
            <PricingCard
              name="Professional"
              price="$49"
              period="month"
              description="Most popular for businesses"
              features={[
                "5 websites",
                "Weekly reports",
                "Advanced analytics",
                "Competitive analysis",
                "Priority support",
                "API access",
              ]}
              popular={true}
            />
            <PricingCard
              name="Agency"
              price="$99"
              period="month"
              description="For marketing agencies"
              features={[
                "Unlimited websites",
                "Real-time monitoring",
                "White-label reports",
                "Custom dashboards",
                "Dedicated support",
                "Bulk analysis",
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          What We Analyze
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">SEO Health</h3>
            <p className="text-gray-600">
              Comprehensive SEO audit covering technical, on-page, and off-page
              factors
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Performance
            </h3>
            <p className="text-gray-600">
              Page speed, Core Web Vitals, and performance optimization
              recommendations
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Security</h3>
            <p className="text-gray-600">
              Security vulnerabilities, SSL status, and compliance monitoring
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Optimize Your Website Today
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join 2,500+ website owners using our Website Analyzer to improve their
          online presence and rankings.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 hover:text-white transition-colors"
          >
            Start Free Analysis
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${popular ? "border-cyan-500 bg-cyan-50" : "border-gray-200 bg-white"}`}
    >
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
