import Link from "next/link";

export const metadata = {
  title: "Real-time Data Processing | Zion Tech Group",
  description:
    "High-performance real-time data processing with stream analytics, event processing, and instant insights for data-driven decision making."};

export default function RealTimeDataProcessingPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Real-time Data Processing
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          High-performance real-time data processing with stream analytics,
          event processing, and instant insights for data-driven decision
          making.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Features & Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              title="Stream Processing Engine"
              description="Ultra-fast stream processing capable of handling millions of events per second with sub-millisecond latency."
            />
            <FeatureItem
              title="Real-time Analytics"
              description="Live dashboards and analytics that update in real-time, providing instant insights into your business metrics."
            />
            <FeatureItem
              title="Event-driven Architecture"
              description="Reactive event processing with intelligent routing, filtering, and transformation of data streams."
            />
            <FeatureItem
              title="Machine Learning Integration"
              description="Real-time ML model inference and training on streaming data for predictive analytics and anomaly detection."
            />
            <FeatureItem
              title="Multi-source Integration"
              description="Connect to any data source including databases, APIs, IoT devices, social media, and custom applications."
            />
            <FeatureItem
              title="Scalable Infrastructure"
              description="Auto-scaling infrastructure that handles traffic spikes and grows with your data processing needs."
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
              price="$89/month"
              description="Perfect for small applications and proof of concepts"
              features={[
                "Up to 1M events per day",
                "Basic stream processing",
                "Email support",
                "Standard dashboards",
                "5 data sources"]}
            />
            <PricingCard
              plan="Professional"
              price="$249/month"
              description="Ideal for growing businesses with real-time needs"
              features={[
                "Up to 10M events per day",
                "Advanced stream processing",
                "Priority support",
                "Custom dashboards",
                "Unlimited data sources",
                "ML integration"]}
            />
            <PricingCard
              plan="Enterprise"
              price="$699/month"
              description="For large organizations with high-volume data processing"
              features={[
                "Unlimited events",
                "Custom stream processing",
                "24/7 dedicated support",
                "On-premise deployment",
                "Custom integrations",
                "SLA guarantees",
                "Advanced ML features"]}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our Real-time Data Processing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="Sub-millisecond Latency"
            description="Process and analyze data streams with ultra-low latency for real-time decision making and instant responses."
          />
          <BenefitCard
            title="99.99% Uptime"
            description="Enterprise-grade reliability with 99.99% uptime guarantee and automatic failover capabilities."
          />
          <BenefitCard
            title="Infinite Scalability"
            description="Auto-scaling infrastructure that handles any volume of data, from thousands to billions of events per day."
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Process Data in Real-time?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your data into real-time insights with our high-performance
          stream processing platform that scales with your needs.
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
      <div className="flex-shrink-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mt-1">
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
      <div className="text-3xl font-bold text-cyan-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-cyan-500 mr-2">•</span> {feature}
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
