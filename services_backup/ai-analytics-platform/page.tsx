export const metadata = { title: "AI Analytics Platform | Zion Tech Group" };

export default function AIAnalyticsPlatformPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Analytics Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced business intelligence platform powered by AI and machine
          learning. Transform your data into actionable insights with predictive
          analytics and automated reporting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Data Integration & Processing"
          features={[
            "Connect to 100+ data sources",
            "Real-time data ingestion & ETL",
            "Data cleaning & transformation",
            "Data quality monitoring",
            "Automated data pipelines",
            "Cloud & on-premise support"]}
          icon="📊"
        />
        <FeatureCard
          title="AI-Powered Analytics"
          features={[
            "Predictive modeling & forecasting",
            "Anomaly detection & alerts",
            "Natural language query interface",
            "Automated insight generation",
            "Machine learning model deployment",
            "Custom algorithm development"]}
          icon="🧠"
        />
        <FeatureCard
          title="Visualization & Reporting"
          features={[
            "Interactive dashboards & charts",
            "Automated report generation",
            "Mobile-responsive design",
            "Real-time data visualization",
            "Custom KPI tracking",
            "Scheduled report delivery"]}
          icon="📈"
        />
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Platform Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Real-time Processing
            </h3>
            <p className="text-gray-600">
              Process millions of data points in seconds
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              95% Accuracy
            </h3>
            <p className="text-gray-600">
              AI predictions with industry-leading accuracy
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Enterprise Security
            </h3>
            <p className="text-gray-600">
              SOC 2 compliant with end-to-end encryption
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Mobile Access
            </h3>
            <p className="text-gray-600">
              Access insights anywhere with mobile apps
            </p>
          </div>
        </div>
      </div>

      <PricingSection />

      <ContactSection />
    </div>
  );
}

function FeatureCard({
  title,
  features,
  icon}: {
  title: string;
  features: string[];
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-teal-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Analytics Platform Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Starter Analytics"
          price="$199/mo"
          duration="Up to 5 users"
          features={[
            "Basic data visualization",
            "5 data source connections",
            "Standard reporting",
            "Email support",
            "Mobile app access",
            "Basic AI insights"]}
          popular={false}
        />
        <PricingCard
          name="Professional Analytics"
          price="$499/mo"
          duration="Up to 25 users"
          features={[
            "Everything in Starter Analytics",
            "Advanced AI & ML models",
            "Unlimited data sources",
            "Custom dashboards",
            "API access & integrations",
            "Predictive analytics",
            "Priority support"]}
          popular={true}
        />
        <PricingCard
          name="Enterprise Analytics"
          price="$1,299/mo"
          duration="Unlimited users"
          features={[
            "Everything in Professional Analytics",
            "Custom AI model development",
            "Advanced security & compliance",
            "Dedicated data scientist",
            "Custom integrations",
            "White-label options",
            "24/7 phone support"]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  duration,
  features,
  popular}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`relative bg-white border-2 rounded-xl p-8 ${popular ? "border-teal-500 shadow-lg" : "border-gray-200"}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-teal-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-teal-600 text-white hover:bg-teal-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Unlock Your Data's Potential?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your analytics needs and create an AI-powered platform
        that transforms your data into competitive advantage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
