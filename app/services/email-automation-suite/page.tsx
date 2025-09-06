import Link from "next/link";

export const metadata = {
  title: "Email Automation Suite | Zion Tech Group",
  description:
    "AI-powered email marketing automation platform with advanced segmentation, personalization, and analytics.",
};

export default function EmailAutomationSuitePage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Email Automation Suite
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your email marketing with AI-powered automation, advanced
          segmentation, and personalized campaigns that drive 3x higher
          engagement rates.
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
              description="Dynamic content generation based on user behavior, preferences, and engagement history"
            />
            <FeatureItem
              icon="📊"
              title="Advanced Analytics"
              description="Real-time campaign performance tracking with predictive analytics and ROI optimization"
            />
            <FeatureItem
              icon="🎯"
              title="Smart Segmentation"
              description="Automated audience segmentation using machine learning and behavioral triggers"
            />
            <FeatureItem
              icon="⚡"
              title="Workflow Automation"
              description="Drag-and-drop email sequence builder with conditional logic and A/B testing"
            />
            <FeatureItem
              icon="🔒"
              title="GDPR Compliance"
              description="Built-in compliance tools, consent management, and data protection features"
            />
            <FeatureItem
              icon="📱"
              title="Mobile Optimization"
              description="Responsive email templates with mobile-first design and cross-platform testing"
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
              price="$29"
              period="month"
              description="Perfect for small businesses"
              features={[
                "Up to 1,000 contacts",
                "5 email campaigns",
                "Basic automation",
                "Email support",
                "Standard templates",
              ]}
              popular={false}
            />
            <PricingCard
              name="Professional"
              price="$79"
              period="month"
              description="Most popular for growing businesses"
              features={[
                "Up to 10,000 contacts",
                "Unlimited campaigns",
                "Advanced automation",
                "AI personalization",
                "Priority support",
                "A/B testing",
              ]}
              popular={true}
            />
            <PricingCard
              name="Enterprise"
              price="$199"
              period="month"
              description="For large organizations"
              features={[
                "Unlimited contacts",
                "Advanced analytics",
                "Custom integrations",
                "Dedicated support",
                "White-label options",
                "API access",
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our Email Automation Suite?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              3x Higher Engagement
            </h3>
            <p className="text-gray-600">
              Our AI-powered personalization increases email engagement rates by
              300% on average.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ROI Optimization
            </h3>
            <p className="text-gray-600">
              Advanced analytics help you optimize campaigns for maximum return
              on investment.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Time Saving
            </h3>
            <p className="text-gray-600">
              Automate 80% of your email marketing tasks and focus on strategy
              and growth.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Email Marketing?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join 500+ businesses already using our Email Automation Suite to
          increase engagement and drive growth.
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
      className={`border rounded-xl p-6 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}`}
    >
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
