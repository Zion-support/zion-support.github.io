import Link from "next/link";

export const metadata = {
  title: "AI Email Campaign Manager | Zion Tech Group",
  description:
    "Intelligent email marketing platform with AI-powered personalization, automation, and analytics. Boost engagement and drive conversions."};

export default function EmailCampaignManagerPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Email Campaign Manager
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent email marketing platform with AI-powered personalization,
          automation, and analytics. Boost engagement and drive conversions with
          smart email campaigns.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🤖"
              title="AI-Powered Personalization"
              description="Dynamic content personalization based on user behavior, preferences, and demographics"
            />
            <FeatureItem
              icon="📊"
              title="Advanced Analytics"
              description="Comprehensive campaign analytics with open rates, click-through rates, and conversion tracking"
            />
            <FeatureItem
              icon="⚡"
              title="Automated Workflows"
              description="Create complex email sequences with triggers, conditions, and multi-step automation"
            />
            <FeatureItem
              icon="🎯"
              title="Smart Segmentation"
              description="AI-driven audience segmentation based on behavior, engagement, and demographic data"
            />
            <FeatureItem
              icon="📱"
              title="Responsive Templates"
              description="Beautiful, mobile-optimized email templates with drag-and-drop editor"
            />
            <FeatureItem
              icon="🔍"
              title="A/B Testing"
              description="Advanced A/B testing for subject lines, content, send times, and audience segments"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              title="Starter"
              price="$29"
              period="per month"
              description="Perfect for small businesses and entrepreneurs"
              features={[
                "Up to 1,000 contacts",
                "Basic automation",
                "Email templates",
                "Basic analytics",
                "Email support"]}
              popular={false}
            />
            <PricingCard
              title="Professional"
              price="$99"
              period="per month"
              description="Ideal for growing businesses and marketing teams"
              features={[
                "Up to 10,000 contacts",
                "Advanced automation",
                "AI personalization",
                "Advanced analytics",
                "Priority support",
                "A/B testing"]}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="$299"
              period="per month"
              description="For large organizations with complex needs"
              features={[
                "Unlimited contacts",
                "Custom automation",
                "Advanced AI features",
                "24/7 support",
                "Custom integrations",
                "Dedicated account manager"]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Campaign Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CampaignType
            icon="🎉"
            title="Welcome Series"
            description="Onboard new subscribers with automated welcome email sequences"
          />
          <CampaignType
            icon="🛒"
            title="Abandoned Cart"
            description="Recover lost sales with intelligent abandoned cart email campaigns"
          />
          <CampaignType
            icon="🎂"
            title="Birthday Campaigns"
            description="Celebrate customer birthdays with personalized offers and messages"
          />
          <CampaignType
            icon="📰"
            title="Newsletter"
            description="Regular newsletters with AI-curated content and personalized recommendations"
          />
          <CampaignType
            icon="🔥"
            title="Re-engagement"
            description="Win back inactive subscribers with targeted re-engagement campaigns"
          />
          <CampaignType
            icon="💎"
            title="Upsell/Cross-sell"
            description="Increase revenue with intelligent product recommendations and offers"
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
            title="40% Higher Open Rates"
            description="AI-optimized subject lines and send times increase engagement"
          />
          <BenefitCard
            icon="🎯"
            title="60% Better Targeting"
            description="Smart segmentation delivers relevant content to the right audience"
          />
          <BenefitCard
            icon="⚡"
            title="80% Time Savings"
            description="Automated workflows reduce manual campaign management time"
          />
          <BenefitCard
            icon="💰"
            title="25% More Revenue"
            description="Personalized campaigns drive higher conversion rates and revenue"
          />
          <BenefitCard
            icon="📊"
            title="Real-time Insights"
            description="Comprehensive analytics help optimize campaigns in real-time"
          />
          <BenefitCard
            icon="🔒"
            title="GDPR Compliant"
            description="Built-in compliance features ensure data protection and privacy"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-pink-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Integration Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <IntegrationCard name="Shopify" icon="🛍️" />
          <IntegrationCard name="WooCommerce" icon="🛒" />
          <IntegrationCard name="Salesforce" icon="☁️" />
          <IntegrationCard name="HubSpot" icon="🎯" />
          <IntegrationCard name="Zapier" icon="⚡" />
          <IntegrationCard name="Slack" icon="💬" />
          <IntegrationCard name="Facebook" icon="📘" />
          <IntegrationCard name="Google Analytics" icon="📊" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Perfect For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UseCaseCard
            icon="🛍️"
            title="E-commerce Stores"
            description="Online retailers looking to increase sales and customer lifetime value"
          />
          <UseCaseCard
            icon="🏢"
            title="SaaS Companies"
            description="Software companies needing to nurture leads and retain customers"
          />
          <UseCaseCard
            icon="🎓"
            title="Educational Institutions"
            description="Schools and universities managing student and alumni communications"
          />
          <UseCaseCard
            icon="🏥"
            title="Healthcare Providers"
            description="Medical practices and healthcare organizations managing patient communications"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Success Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <MetricCard
            metric="40%"
            description="Average increase in open rates with AI optimization"
          />
          <MetricCard
            metric="60%"
            description="Improvement in click-through rates with personalization"
          />
          <MetricCard
            metric="25%"
            description="Boost in conversion rates with targeted campaigns"
          />
          <MetricCard
            metric="80%"
            description="Reduction in campaign management time with automation"
          />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description}: {
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
  popular}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${popular ? "border-pink-500 bg-pink-50" : "border-gray-200 bg-white"}`}
    >
      {popular && (
        <div className="bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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
            <span className="text-pink-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-pink-600 text-white hover:bg-pink-700"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Start Free Trial
      </button>
    </div>
  );
}

function CampaignType({
  icon,
  title,
  description}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-pink-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  description}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-pink-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function IntegrationCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-pink-300 transition-colors">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium text-gray-700">{name}</div>
    </div>
  );
}

function UseCaseCard({
  icon,
  title,
  description}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:border-pink-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function MetricCard({
  metric,
  description}: {
  metric: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-pink-600 mb-2">{metric}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Transform Your Email Marketing?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Start your free trial today and experience the power of AI-driven email
        marketing. Send your first 1,000 emails for free.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
