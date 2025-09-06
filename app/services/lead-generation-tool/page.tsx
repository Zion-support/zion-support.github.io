import Link from "next/link";

export const metadata = {
  title: "Lead Generation Tool | Zion Tech Group",
  description:
    "AI-powered lead generation platform with automated prospecting, qualification, and CRM integration.",
};

export default function LeadGenerationToolPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Lead Generation Tool
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Automate your lead generation process with AI-powered prospecting,
          qualification, and nurturing. Generate 5x more qualified leads in half
          the time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Core Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🎯"
              title="AI-Powered Prospecting"
              description="Automatically identify and qualify prospects using advanced AI algorithms and data analysis"
            />
            <FeatureItem
              icon="📧"
              title="Automated Outreach"
              description="Personalized email sequences, LinkedIn messages, and follow-up campaigns"
            />
            <FeatureItem
              icon="📊"
              title="Lead Scoring"
              description="Intelligent lead scoring based on behavior, engagement, and fit indicators"
            />
            <FeatureItem
              icon="🔗"
              title="CRM Integration"
              description="Seamless integration with Salesforce, HubSpot, Pipedrive, and 50+ other CRMs"
            />
            <FeatureItem
              icon="📈"
              title="Analytics & Reporting"
              description="Comprehensive dashboards showing conversion rates, pipeline health, and ROI"
            />
            <FeatureItem
              icon="🤖"
              title="Smart Nurturing"
              description="Automated lead nurturing workflows with personalized content and timing"
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
              price="$49"
              period="month"
              description="Perfect for small sales teams"
              features={[
                "1,000 leads/month",
                "Basic prospecting",
                "Email automation",
                "Standard CRM integration",
                "Email support",
              ]}
              popular={false}
            />
            <PricingCard
              name="Professional"
              price="$149"
              period="month"
              description="Most popular for growing teams"
              features={[
                "5,000 leads/month",
                "Advanced AI prospecting",
                "Multi-channel outreach",
                "Lead scoring",
                "Priority support",
                "Advanced analytics",
              ]}
              popular={true}
            />
            <PricingCard
              name="Enterprise"
              price="$399"
              period="month"
              description="For large sales organizations"
              features={[
                "Unlimited leads",
                "Custom AI models",
                "White-label solution",
                "Dedicated support",
                "API access",
                "Custom integrations",
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Success Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">5x</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              More Qualified Leads
            </h3>
            <p className="text-gray-600">
              Our AI identifies and qualifies prospects 5x more effectively than
              manual methods.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">50%</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Time Savings
            </h3>
            <p className="text-gray-600">
              Automate repetitive tasks and focus on closing deals instead of
              finding prospects.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">300%</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ROI Increase
            </h3>
            <p className="text-gray-600">
              Average customer sees 300% increase in lead generation ROI within
              90 days.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Start Generating More Leads Today
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join 1,500+ sales teams using our Lead Generation Tool to accelerate
          their pipeline and close more deals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
          >
            Get Free Demo
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
      className={`border rounded-xl p-6 ${popular ? "border-orange-500 bg-orange-50" : "border-gray-200 bg-white"}`}
    >
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
