export const metadata = { title: "AI Financial Analyzer | Zion Tech Group" };

export default function AIFinancialAnalyzerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Financial Analyzer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent financial analysis platform with AI-powered insights,
          automated reporting, and predictive modeling to optimize your business
          finances and investment decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Financial Intelligence"
          features={[
            "AI-powered financial forecasting",
            "Cash flow analysis & optimization",
            "Risk assessment & management",
            "Investment opportunity analysis",
            "Market trend predictions",
            "Portfolio optimization"]}
          icon="💰"
        />
        <FeatureCard
          title="Automated Reporting"
          features={[
            "Real-time financial dashboards",
            "Automated report generation",
            "Compliance & regulatory reporting",
            "Custom KPI tracking",
            "Executive summaries",
            "Multi-currency support"]}
          icon="📊"
        />
        <FeatureCard
          title="Smart Analytics"
          features={[
            "Anomaly detection & alerts",
            "Cost optimization recommendations",
            "Revenue growth analysis",
            "Profit margin optimization",
            "Budget variance analysis",
            "Financial health scoring"]}
          icon="🧠"
        />
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Financial Analysis Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              25% Cost Reduction
            </h3>
            <p className="text-gray-600">
              AI identifies cost optimization opportunities
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              95% Accuracy
            </h3>
            <p className="text-gray-600">
              AI predictions with industry-leading precision
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              80% Time Savings
            </h3>
            <p className="text-gray-600">
              Automated analysis eliminates manual work
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Bank-Level Security
            </h3>
            <p className="text-gray-600">
              Enterprise-grade security and compliance
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
            <span className="text-amber-500 mr-2 mt-1">•</span>
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
        Financial Analyzer Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Basic Financial"
          price="$299/mo"
          duration="Up to $1M revenue"
          features={[
            "Basic financial analysis",
            "Standard reporting",
            "Email support",
            "Mobile app access",
            "Basic forecasting",
            "Single currency support"]}
          popular={false}
        />
        <PricingCard
          name="Professional Financial"
          price="$799/mo"
          duration="Up to $10M revenue"
          features={[
            "Everything in Basic Financial",
            "Advanced AI analytics",
            "Multi-currency support",
            "Custom reporting",
            "API access & integrations",
            "Priority support"]}
          popular={true}
        />
        <PricingCard
          name="Enterprise Financial"
          price="$1,999/mo"
          duration="Unlimited revenue"
          features={[
            "Everything in Professional Financial",
            "Custom AI model development",
            "Advanced security & compliance",
            "Dedicated financial analyst",
            "Custom integrations",
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
      className={`relative bg-white border-2 rounded-xl p-8 ${popular ? "border-amber-500 shadow-lg" : "border-gray-200"}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-amber-600 mb-1">{price}</div>
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
            ? "bg-amber-600 text-white hover:bg-amber-700"
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
    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Optimize Your Financial Performance?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your financial analysis needs and create an AI-powered
        solution that drives better financial decisions.
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
      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
