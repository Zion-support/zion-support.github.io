import Link from "next/link";

export const metadata = {
  title: "Customer Support Automation | Zion Tech Group",
  description:
    "AI-powered customer support automation with intelligent chatbots, ticket routing, and sentiment analysis for exceptional customer experience."};

export default function CustomerSupportAutomationPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Customer Support Automation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered customer support automation with intelligent chatbots,
          ticket routing, and sentiment analysis for exceptional customer
          experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Features & Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              title="Intelligent Chatbots"
              description="Advanced AI chatbots with natural language processing, context awareness, and seamless human handoff capabilities."
            />
            <FeatureItem
              title="Smart Ticket Routing"
              description="AI-powered ticket classification and routing to the right agent based on expertise, workload, and customer priority."
            />
            <FeatureItem
              title="Sentiment Analysis"
              description="Real-time sentiment analysis to identify frustrated customers and prioritize urgent issues for immediate attention."
            />
            <FeatureItem
              title="Knowledge Base Integration"
              description="Seamless integration with knowledge bases and documentation for instant access to relevant information and solutions."
            />
            <FeatureItem
              title="Multi-Channel Support"
              description="Unified support across email, chat, phone, social media, and messaging platforms with consistent experience."
            />
            <FeatureItem
              title="Performance Analytics"
              description="Comprehensive analytics and reporting on support metrics, customer satisfaction, and agent performance."
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
              price="$49/month"
              description="Perfect for small businesses and startups"
              features={[
                "Up to 1,000 conversations/month",
                "Basic chatbot functionality",
                "Email support",
                "Standard integrations",
                "Basic analytics"]}
            />
            <PricingCard
              plan="Professional"
              price="$149/month"
              description="Ideal for growing businesses"
              features={[
                "Up to 10,000 conversations/month",
                "Advanced AI features",
                "Priority support",
                "All integrations",
                "Advanced analytics",
                "Custom workflows"]}
            />
            <PricingCard
              plan="Enterprise"
              price="$399/month"
              description="For large organizations with complex support needs"
              features={[
                "Unlimited conversations",
                "Custom AI models",
                "24/7 dedicated support",
                "On-premise deployment",
                "Custom integrations",
                "SLA guarantees",
                "Advanced security"]}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our Customer Support Automation?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="80% Faster Resolution"
            description="AI-powered automation and intelligent routing reduce average resolution time by 80% while improving customer satisfaction."
          />
          <BenefitCard
            title="24/7 Availability"
            description="Round-the-clock customer support with intelligent chatbots that never sleep and always provide helpful responses."
          />
          <BenefitCard
            title="Proactive Support"
            description="Predictive analytics and sentiment analysis enable proactive support to prevent issues before they escalate."
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Customer Support?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Elevate your customer experience with AI-powered support automation
          that provides instant, accurate, and personalized assistance.
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
      <div className="flex-shrink-0 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mt-1">
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
      <div className="text-3xl font-bold text-pink-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-pink-500 mr-2">•</span> {feature}
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
