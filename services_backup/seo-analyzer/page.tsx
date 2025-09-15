import Link from "next/link";

export const metadata = {
  title: "SEO Analyzer | Zion Tech Group",
  description:
    "Advanced SEO analysis with AI-powered optimization recommendations, competitor analysis, and automated reporting for maximum search visibility."};

export default function SEOAnalyzerPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">SEO Analyzer</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced SEO analysis with AI-powered optimization recommendations,
          competitor analysis, and automated reporting for maximum search
          visibility.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Features & Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              title="AI-Powered SEO Analysis"
              description="Advanced AI algorithms analyze your website's SEO performance and provide intelligent optimization recommendations."
            />
            <FeatureItem
              title="Competitor Intelligence"
              description="Comprehensive competitor analysis with keyword gap analysis, backlink monitoring, and content strategy insights."
            />
            <FeatureItem
              title="Technical SEO Audits"
              description="Deep technical SEO audits covering page speed, mobile optimization, structured data, and Core Web Vitals."
            />
            <FeatureItem
              title="Keyword Research & Tracking"
              description="Advanced keyword research tools with search volume analysis, difficulty scoring, and ranking tracking."
            />
            <FeatureItem
              title="Content Optimization"
              description="AI-powered content analysis and optimization suggestions for better search rankings and user engagement."
            />
            <FeatureItem
              title="Automated Reporting"
              description="Customizable reports with actionable insights, performance tracking, and ROI measurement for SEO efforts."
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
              price="$29/month"
              description="Perfect for small websites and blogs"
              features={[
                "Up to 5 websites",
                "Basic SEO analysis",
                "Email support",
                "Monthly reports",
                "100 keyword tracking"]}
            />
            <PricingCard
              plan="Professional"
              price="$79/month"
              description="Ideal for growing businesses"
              features={[
                "Up to 25 websites",
                "Advanced AI analysis",
                "Priority support",
                "Weekly reports",
                "1,000 keyword tracking",
                "Competitor analysis"]}
            />
            <PricingCard
              plan="Enterprise"
              price="$199/month"
              description="For large organizations and agencies"
              features={[
                "Unlimited websites",
                "Custom AI models",
                "24/7 dedicated support",
                "Real-time monitoring",
                "Unlimited keyword tracking",
                "White-label reporting",
                "API access"]}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our SEO Analyzer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="300% Traffic Increase"
            description="Our AI-powered recommendations help businesses achieve an average 300% increase in organic traffic within 6 months."
          />
          <BenefitCard
            title="Comprehensive Analysis"
            description="Complete SEO analysis covering technical, content, and off-page factors for maximum search visibility."
          />
          <BenefitCard
            title="Competitive Advantage"
            description="Advanced competitor analysis gives you the insights needed to outperform your competition in search results."
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Dominate Search Results?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Boost your search rankings with our advanced SEO analyzer that
          provides intelligent insights and automated optimization
          recommendations.
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
      <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
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
      <div className="text-3xl font-bold text-yellow-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-yellow-500 mr-2">•</span> {feature}
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
