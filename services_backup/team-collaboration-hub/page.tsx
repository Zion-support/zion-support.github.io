import Link from "next/link";

export const metadata = {
  title: "Team Collaboration Hub | Zion Tech Group",
  description:
    "AI-powered team collaboration platform with intelligent project management, communication tools, and productivity analytics for remote and hybrid teams."};

export default function TeamCollaborationHubPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Team Collaboration Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered team collaboration platform with intelligent project
          management, communication tools, and productivity analytics for remote
          and hybrid teams.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Features & Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              title="AI-Powered Project Management"
              description="Intelligent task assignment, deadline prediction, and resource optimization using machine learning algorithms."
            />
            <FeatureItem
              title="Smart Communication Tools"
              description="AI-enhanced messaging, video conferencing, and collaboration features with automatic translation and transcription."
            />
            <FeatureItem
              title="Productivity Analytics"
              description="Advanced analytics and insights into team performance, productivity patterns, and collaboration effectiveness."
            />
            <FeatureItem
              title="Virtual Workspaces"
              description="Immersive virtual workspaces with customizable environments for different project types and team preferences."
            />
            <FeatureItem
              title="Document Collaboration"
              description="Real-time document editing, version control, and AI-powered content suggestions for better collaboration."
            />
            <FeatureItem
              title="Integration Ecosystem"
              description="Seamless integration with 200+ tools including Slack, Microsoft Teams, Google Workspace, and project management platforms."
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
              price="$19/month"
              description="Perfect for small teams and startups"
              features={[
                "Up to 10 team members",
                "Basic project management",
                "Email support",
                "Standard integrations",
                "5GB storage"]}
            />
            <PricingCard
              plan="Professional"
              price="$49/month"
              description="Ideal for growing teams"
              features={[
                "Up to 50 team members",
                "Advanced AI features",
                "Priority support",
                "All integrations",
                "100GB storage",
                "Advanced analytics"]}
            />
            <PricingCard
              plan="Enterprise"
              price="$149/month"
              description="For large organizations"
              features={[
                "Unlimited team members",
                "Custom AI models",
                "24/7 dedicated support",
                "On-premise deployment",
                "Unlimited storage",
                "Custom integrations",
                "SLA guarantees"]}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our Team Collaboration Hub?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="40% Productivity Boost"
            description="AI-powered features and intelligent automation help teams achieve 40% higher productivity and better collaboration."
          />
          <BenefitCard
            title="Seamless Remote Work"
            description="Comprehensive tools and features designed specifically for remote and hybrid teams to work effectively from anywhere."
          />
          <BenefitCard
            title="Data-Driven Insights"
            description="Advanced analytics provide actionable insights into team performance and collaboration patterns for continuous improvement."
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Team Collaboration?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Empower your team with AI-powered collaboration tools that enhance
          productivity, improve communication, and drive better results.
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
      <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mt-1">
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
      <div className="text-3xl font-bold text-indigo-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-indigo-500 mr-2">•</span> {feature}
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
