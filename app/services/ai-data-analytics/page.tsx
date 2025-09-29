import Link from 'next/link';

export const metadata = {
  title: 'AI Data Analytics | Zion Tech Group',
  description:
    'Advanced AI-powered data analytics platform with predictive modeling, real-time insights, and automated reporting.',
};

export default function AIDataAnalyticsPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Data Analytics
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your data into actionable insights with our AI-powered
          analytics platform. Get predictive modeling, real-time dashboards, and
          automated business intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Analytics Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🧠"
              title="Predictive Modeling"
              description="Machine learning models for forecasting, trend analysis, and predictive insights"
            />
            <FeatureItem
              icon="📊"
              title="Real-Time Dashboards"
              description="Interactive dashboards with live data visualization and customizable KPIs"
            />
            <FeatureItem
              icon="🔍"
              title="Data Mining"
              description="Advanced data mining techniques to discover hidden patterns and correlations"
            />
            <FeatureItem
              icon="📈"
              title="Business Intelligence"
              description="Automated BI reports with natural language insights and recommendations"
            />
            <FeatureItem
              icon="🔄"
              title="Data Integration"
              description="Connect to 100+ data sources including databases, APIs, and cloud platforms"
            />
            <FeatureItem
              icon="🎯"
              title="Anomaly Detection"
              description="AI-powered anomaly detection to identify unusual patterns and potential issues"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h2>
          <div className="space-y-6">
            <PricingCard
              name="Starter"
              price="$199"
              period="month"
              description="Perfect for small teams"
              features={[
                '5 data sources',
                'Basic dashboards',
                'Standard reports',
                'Email support',
                'Monthly insights',
              ]}
              popular={false}
            />
            <PricingCard
              name="Professional"
              price="$499"
              period="month"
              description="Most popular for growing businesses"
              features={[
                '20 data sources',
                'Advanced dashboards',
                'Predictive analytics',
                'Priority support',
                'Real-time monitoring',
                'Custom models',
              ]}
              popular={true}
            />
            <PricingCard
              name="Enterprise"
              price="$1,299"
              period="month"
              description="For large organizations"
              features={[
                'Unlimited data sources',
                'Custom dashboards',
                'Advanced AI models',
                'Dedicated support',
                'White-label solution',
                'API access',
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Analytics Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Revenue Optimization
            </h3>
            <p className="text-gray-600">
              Identify revenue opportunities and optimize pricing strategies
              with predictive analytics
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Customer Insights
            </h3>
            <p className="text-gray-600">
              Understand customer behavior and preferences to improve retention
              and satisfaction
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Operational Efficiency
            </h3>
            <p className="text-gray-600">
              Optimize operations and reduce costs with data-driven process
              improvements
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Unlock Your Data's Potential
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join 800+ businesses using our AI Data Analytics platform to make
          smarter, data-driven decisions.
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
            Get Free Analysis
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
      className={`border rounded-xl p-6 ${popular ? 'border-teal-500 bg-teal-50' : 'border-gray-200 bg-white'}`}
    >
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
