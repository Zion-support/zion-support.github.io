import Link from "next/link";

export const metadata = {
  title: "AI Predictive Analytics | Zion Tech Group",
  description:
    "Advanced predictive analytics platform. Forecast trends, predict outcomes, and make data-driven decisions with AI."};

export default function AIPredictiveAnalyticsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Predictive Analytics
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced predictive analytics platform that forecasts trends, predicts
          outcomes, and enables data-driven decision making with cutting-edge AI
          and machine learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Forecasting Models"
          details={[
            "Time series forecasting",
            "Demand prediction",
            "Revenue forecasting",
            "Market trend analysis",
            "Seasonal pattern detection"]}
        />
        <FeatureCard
          title="Machine Learning"
          details={[
            "Automated model selection",
            "Feature engineering",
            "Model performance optimization",
            "A/B testing for predictions",
            "Continuous learning algorithms"]}
        />
        <FeatureCard
          title="Business Intelligence"
          details={[
            "Interactive dashboards",
            "Automated insights generation",
            "Alert systems",
            "Scenario planning tools",
            "ROI impact analysis"]}
        />
      </div>

      <PricingSection />

      <div className="mt-16 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Predict the Future?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Harness the power of AI to make accurate predictions and drive
          business growth. Perfect for finance, retail, manufacturing, and
          data-driven organizations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-rose-600 text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-600 hover:text-white transition-colors"
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
            <span className="text-rose-500 mr-2">•</span> {detail}
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
          price="$199/mo"
          features={[
            "Up to 5 prediction models",
            "Basic forecasting algorithms",
            "Monthly model updates",
            "Email support",
            "Standard data connectors"]}
        />
        <PricingPlan
          name="Professional"
          price="$599/mo"
          features={[
            "Up to 20 prediction models",
            "Advanced ML algorithms",
            "Real-time model updates",
            "Priority support",
            "Custom model development"]}
          featured={true}
        />
        <PricingPlan
          name="Enterprise"
          price="$1,999/mo"
          features={[
            "Unlimited prediction models",
            "Custom AI model training",
            "White-label solution",
            "Dedicated data scientist",
            "API access & custom integrations"]}
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
          ? "border-rose-500 bg-rose-50 shadow-lg"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-rose-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? "bg-rose-600 text-white hover:bg-rose-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
