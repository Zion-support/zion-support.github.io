import Link from "next/link";

export const metadata = {
  title: "AI Meeting Assistant | Zion Tech Group",
  description:
    "Transform your meetings with AI-powered transcription, action items, and intelligent insights. Never miss important details again."};

export default function AIMeetingAssistantPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Meeting Assistant
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your meetings with AI-powered transcription, action items,
          and intelligent insights. Never miss important details and make every
          meeting more productive.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🎤"
              title="Real-time Transcription"
              description="Live transcription with 99% accuracy in 50+ languages with speaker identification"
            />
            <FeatureItem
              icon="📝"
              title="Smart Action Items"
              description="Automatically extract and assign action items with due dates and responsible parties"
            />
            <FeatureItem
              icon="🧠"
              title="AI-Powered Summaries"
              description="Intelligent meeting summaries highlighting key decisions, topics, and outcomes"
            />
            <FeatureItem
              icon="📊"
              title="Meeting Analytics"
              description="Insights on meeting effectiveness, participation, and time management"
            />
            <FeatureItem
              icon="🔍"
              title="Search & Discovery"
              description="Search across all meeting transcripts and find specific topics or decisions instantly"
            />
            <FeatureItem
              icon="📱"
              title="Multi-Platform Support"
              description="Works with Zoom, Teams, Google Meet, and in-person meetings"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              title="Basic"
              price="$19"
              period="per month"
              description="Perfect for individuals and small teams"
              features={[
                "Up to 10 hours/month",
                "Basic transcription",
                "Action item extraction",
                "Meeting summaries",
                "Email support"]}
              popular={false}
            />
            <PricingCard
              title="Professional"
              price="$49"
              period="per month"
              description="Ideal for growing teams and departments"
              features={[
                "Up to 50 hours/month",
                "Advanced AI features",
                "Meeting analytics",
                "Custom integrations",
                "Priority support",
                "Team collaboration"]}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="$149"
              period="per month"
              description="For large organizations with advanced needs"
              features={[
                "Unlimited hours",
                "Custom AI models",
                "Advanced analytics",
                "24/7 support",
                "Custom integrations",
                "Compliance features"]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Transform Your Meeting Culture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Save 2+ Hours Weekly
            </h3>
            <p className="text-gray-600">
              Reduce meeting prep and follow-up time by 60% with automated
              summaries and action items
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              95% Action Item Accuracy
            </h3>
            <p className="text-gray-600">
              Never miss important tasks with AI-powered action item detection
              and assignment
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              40% More Productive
            </h3>
            <p className="text-gray-600">
              Teams report 40% increase in meeting productivity and
              follow-through
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Supported Platforms
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <PlatformCard name="Zoom" icon="📹" />
          <PlatformCard name="Microsoft Teams" icon="💼" />
          <PlatformCard name="Google Meet" icon="🎥" />
          <PlatformCard name="Webex" icon="🌐" />
          <PlatformCard name="Slack" icon="💬" />
          <PlatformCard name="In-Person" icon="👥" />
          <PlatformCard name="Phone Calls" icon="📞" />
          <PlatformCard name="Custom APIs" icon="🔌" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UseCaseCard
            icon="💼"
            title="Executive Meetings"
            description="Board meetings, strategy sessions, and leadership discussions with detailed action tracking"
          />
          <UseCaseCard
            icon="👥"
            title="Team Standups"
            description="Daily standups, sprint planning, and retrospectives with progress tracking"
          />
          <UseCaseCard
            icon="🎓"
            title="Training Sessions"
            description="Employee training, workshops, and educational content with knowledge extraction"
          />
          <UseCaseCard
            icon="🤝"
            title="Client Meetings"
            description="Sales calls, project updates, and client consultations with follow-up automation"
          />
          <UseCaseCard
            icon="🔬"
            title="Research Interviews"
            description="User interviews, market research, and feedback sessions with insight extraction"
          />
          <UseCaseCard
            icon="⚖️"
            title="Legal Proceedings"
            description="Legal consultations, depositions, and compliance meetings with accurate documentation"
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
      className={`border rounded-xl p-6 ${popular ? "border-green-500 bg-green-50" : "border-gray-200 bg-white"}`}
    >
      {popular && (
        <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Start Free Trial
      </button>
    </div>
  );
}

function PlatformCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
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
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Transform Your Meetings?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Start your free trial today and experience the power of AI-driven
        meeting intelligence. No setup required - works with your existing
        tools.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
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
