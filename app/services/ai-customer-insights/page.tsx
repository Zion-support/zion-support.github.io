import Link from "next/link";

export const metadata = {
  title: "AI Customer Insights | Zion Tech Group",
  description: "Transform customer data into actionable insights with AI-powered analytics. Understand customer behavior, preferences, and trends.",
};

export default function AICustomerInsightsPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Customer Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform customer data into actionable insights with AI-powered analytics. 
          Understand customer behavior, preferences, and trends to drive business growth.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🧠"
              title="Behavioral Analysis"
              description="AI-powered analysis of customer interactions, purchase patterns, and engagement metrics across all touchpoints."
            />
            <FeatureItem
              icon="📊"
              title="Predictive Analytics"
              description="Machine learning models to predict customer lifetime value, churn risk, and future purchase behavior."
            />
            <FeatureItem
              icon="🎯"
              title="Segmentation Intelligence"
              description="Automated customer segmentation based on behavior, demographics, and preferences for targeted marketing."
            />
            <FeatureItem
              icon="💬"
              title="Sentiment Analysis"
              description="Real-time analysis of customer feedback, reviews, and social media mentions to understand satisfaction levels."
            />
            <FeatureItem
              icon="📈"
              title="Trend Detection"
              description="Identify emerging trends, seasonal patterns, and market shifts that impact customer behavior."
            />
            <FeatureItem
              icon="🔮"
              title="Recommendation Engine"
              description="Personalized product and content recommendations based on individual customer preferences and behavior."
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              plan="Starter"
              price="$199"
              period="per month"
              description="Perfect for small businesses getting started with customer analytics"
              features={[
                "Up to 10,000 customer records",
                "Basic behavioral analysis",
                "Standard segmentation",
                "Email support",
                "Monthly reports"
              ]}
              popular={false}
            />
            <PricingCard
              plan="Professional"
              price="$599"
              period="per month"
              description="Ideal for growing businesses with complex customer data"
              features={[
                "Up to 100,000 customer records",
                "Advanced AI analytics",
                "Predictive modeling",
                "Real-time insights",
                "Priority support",
                "Custom dashboards"
              ]}
              popular={true}
            />
            <PricingCard
              plan="Enterprise"
              price="$1,999"
              period="per month"
              description="For large organizations with extensive customer data needs"
              features={[
                "Unlimited customer records",
                "Custom AI models",
                "Advanced predictive analytics",
                "Dedicated support",
                "Custom integrations",
                "On-premise deployment"
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            step="1"
            title="Data Integration"
            description="Connect your CRM, website, social media, and other data sources for comprehensive customer view."
          />
          <StepCard
            step="2"
            title="AI Processing"
            description="Advanced AI algorithms analyze customer data to identify patterns, trends, and insights."
          />
          <StepCard
            step="3"
            title="Actionable Insights"
            description="Receive detailed reports, recommendations, and real-time dashboards to drive business decisions."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Data Sources We Analyze</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">CRM and sales data</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">Website and app analytics</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">Social media interactions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">Email marketing data</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">Customer support tickets</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">Survey and feedback data</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Business Impact</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Increase customer retention by 25%</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Boost conversion rates by 40%</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Reduce customer acquisition costs by 30%</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Improve customer satisfaction scores</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Identify high-value customer segments</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">AI-Powered Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-semibold text-gray-900 mb-2">Personalization</h3>
            <p className="text-gray-600">Hyper-personalized experiences based on individual customer behavior</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="font-semibold text-gray-900 mb-2">Predictions</h3>
            <p className="text-gray-600">Accurate predictions of customer actions and preferences</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-semibold text-gray-900 mb-2">Real-time</h3>
            <p className="text-gray-600">Instant insights and recommendations as customer behavior changes</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Unlock Customer Insights?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your customer data into competitive advantage with AI-powered insights and analytics.
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
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({ plan, price, period, description, features, popular }: {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-1">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}