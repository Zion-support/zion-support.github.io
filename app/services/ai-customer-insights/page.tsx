export const metadata = {
  title: 'AI Customer Insights | Zion Tech Group',
  description:
    'Unlock customer behavior insights with AI-powered analytics, sentiment analysis, and predictive modeling. Drive growth with data-driven decisions.',
};

export default function AICustomerInsightsPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Customer Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Unlock customer behavior insights with AI-powered analytics, sentiment
          analysis, and predictive modeling. Drive growth with data-driven
          decisions and personalized customer experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🧠"
              title="Predictive Analytics"
              description="AI-powered customer lifetime value prediction, churn risk analysis, and purchase behavior forecasting"
            />
            <FeatureItem
              icon="😊"
              title="Sentiment Analysis"
              description="Real-time sentiment analysis from reviews, social media, and customer feedback across all channels"
            />
            <FeatureItem
              icon="🎯"
              title="Customer Segmentation"
              description="Advanced AI clustering to identify high-value customer segments and personalized targeting strategies"
            />
            <FeatureItem
              icon="📊"
              title="Behavioral Analytics"
              description="Deep insights into customer journey, engagement patterns, and conversion optimization opportunities"
            />
            <FeatureItem
              icon="🔮"
              title="Churn Prediction"
              description="Early warning system to identify at-risk customers and trigger retention campaigns"
            />
            <FeatureItem
              icon="📈"
              title="ROI Optimization"
              description="AI recommendations for marketing spend allocation and customer acquisition strategies"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              title="Starter"
              price="$79"
              period="per month"
              description="Perfect for small businesses and startups"
              features={[
                'Up to 10,000 customers',
                'Basic analytics',
                'Sentiment analysis',
                'Email support',
                'Standard reports',
              ]}
              popular={false}
            />
            <PricingCard
              title="Professional"
              price="$199"
              period="per month"
              description="Ideal for growing businesses and marketing teams"
              features={[
                'Up to 100,000 customers',
                'Advanced AI features',
                'Predictive modeling',
                'Priority support',
                'Custom dashboards',
                'API access',
              ]}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="$599"
              period="per month"
              description="For large organizations with complex customer data"
              features={[
                'Unlimited customers',
                'Custom AI models',
                'Real-time processing',
                '24/7 support',
                'Custom integrations',
                'Dedicated analyst',
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Insight Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InsightCategory
            icon="💰"
            title="Revenue Insights"
            description="Customer lifetime value, purchase patterns, and revenue optimization opportunities"
          />
          <InsightCategory
            icon="🎯"
            title="Engagement Insights"
            description="Customer engagement levels, content preferences, and interaction patterns"
          />
          <InsightCategory
            icon="😊"
            title="Satisfaction Insights"
            description="Customer satisfaction scores, sentiment trends, and feedback analysis"
          />
          <InsightCategory
            icon="🔄"
            title="Retention Insights"
            description="Churn risk factors, retention strategies, and loyalty program effectiveness"
          />
          <InsightCategory
            icon="📱"
            title="Behavioral Insights"
            description="Customer journey mapping, touchpoint analysis, and conversion optimization"
          />
          <InsightCategory
            icon="🔮"
            title="Predictive Insights"
            description="Future behavior predictions, market trends, and growth opportunities"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard
            icon="📈"
            title="30% Revenue Increase"
            description="Data-driven strategies typically increase revenue by 30% within 6 months"
          />
          <BenefitCard
            icon="🎯"
            title="50% Better Targeting"
            description="AI-powered segmentation improves marketing campaign effectiveness by 50%"
          />
          <BenefitCard
            icon="💰"
            title="25% Cost Reduction"
            description="Optimized marketing spend and reduced churn lower customer acquisition costs"
          />
          <BenefitCard
            icon="⚡"
            title="Real-time Insights"
            description="Instant access to customer insights for immediate decision making"
          />
          <BenefitCard
            icon="🔍"
            title="Deep Understanding"
            description="Comprehensive view of customer behavior across all touchpoints"
          />
          <BenefitCard
            icon="🚀"
            title="Competitive Advantage"
            description="Stay ahead with predictive insights and proactive customer management"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-teal-50 border border-purple-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Data Sources
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <DataSourceCard name="CRM Systems" icon="👥" />
          <DataSourceCard name="E-commerce" icon="🛒" />
          <DataSourceCard name="Social Media" icon="📱" />
          <DataSourceCard name="Email Marketing" icon="📧" />
          <DataSourceCard name="Website Analytics" icon="🌐" />
          <DataSourceCard name="Customer Support" icon="🎧" />
          <DataSourceCard name="Mobile Apps" icon="📱" />
          <DataSourceCard name="Surveys" icon="📋" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UseCaseCard
            icon="🛍️"
            title="E-commerce Optimization"
            description="Online retailers optimizing product recommendations, pricing, and customer experience"
          />
          <UseCaseCard
            icon="🏢"
            title="SaaS Customer Success"
            description="Software companies improving user onboarding, feature adoption, and retention"
          />
          <UseCaseCard
            icon="🏦"
            title="Financial Services"
            description="Banks and fintech companies managing customer relationships and risk"
          />
          <UseCaseCard
            icon="🏥"
            title="Healthcare Analytics"
            description="Healthcare providers improving patient engagement and outcomes"
          />
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
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  popular,
}: {
  title: string;
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
        <div className="bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-teal-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-teal-600 text-white hover:bg-teal-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Start Free Trial
      </button>
    </div>
  );
}

function InsightCategory({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function DataSourceCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium text-gray-700">{name}</div>
    </div>
  );
}

function UseCaseCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
