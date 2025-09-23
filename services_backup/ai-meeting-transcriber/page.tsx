import Link from "next/link";

export const metadata = {
  title: "AI Meeting Transcriber | Zion Tech Group",
  description:
    "Transform your meetings into actionable insights with AI-powered transcription, summarization, and analysis."};

export default function AIMeetingTranscriberPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Meeting Transcriber
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your meetings into actionable insights with AI-powered
          transcription, summarization, and intelligent analysis. Never miss
          important details again.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🎤"
              title="Real-time Transcription"
              description="Live transcription with 99% accuracy in 50+ languages, including technical jargon and industry-specific terms."
            />
            <FeatureItem
              icon="📝"
              title="Smart Summarization"
              description="AI-powered meeting summaries that extract key decisions, action items, and important discussion points."
            />
            <FeatureItem
              icon="👥"
              title="Speaker Identification"
              description="Automatically identify and label different speakers, even in large group meetings with multiple participants."
            />
            <FeatureItem
              icon="🔍"
              title="Search & Analytics"
              description="Search through all your meeting transcripts and get insights on discussion patterns, sentiment, and key topics."
            />
            <FeatureItem
              icon="📊"
              title="Action Item Tracking"
              description="Automatically extract and track action items, deadlines, and follow-up tasks from your meetings."
            />
            <FeatureItem
              icon="🔗"
              title="Integrations"
              description="Seamlessly integrate with Zoom, Teams, Google Meet, and other popular meeting platforms."
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              plan="Basic"
              price="$19"
              period="per month"
              description="Perfect for individuals and small teams"
              features={[
                "Up to 10 hours of transcription",
                "Basic summarization",
                "Speaker identification",
                "Email support",
                "Standard integrations"]}
              popular={false}
            />
            <PricingCard
              plan="Professional"
              price="$49"
              period="per month"
              description="Ideal for growing teams and regular meetings"
              features={[
                "Up to 50 hours of transcription",
                "Advanced AI summarization",
                "Action item extraction",
                "Search & analytics",
                "Priority support",
                "All integrations"]}
              popular={true}
            />
            <PricingCard
              plan="Enterprise"
              price="$149"
              period="per month"
              description="For large organizations with extensive meeting needs"
              features={[
                "Unlimited transcription",
                "Custom AI models",
                "Advanced analytics",
                "Dedicated support",
                "Custom integrations",
                "On-premise deployment"]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            step="1"
            title="Start Your Meeting"
            description="Connect your meeting platform or upload audio files. Our AI starts transcribing in real-time."
          />
          <StepCard
            step="2"
            title="AI Processing"
            description="Advanced AI analyzes the conversation, identifies speakers, and extracts key information."
          />
          <StepCard
            step="3"
            title="Get Insights"
            description="Receive transcripts, summaries, action items, and analytics to maximize meeting productivity."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Use Cases</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Client meetings and consultations
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Team standups and retrospectives
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Board meetings and presentations
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Training sessions and workshops
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">Sales calls and demos</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Save 2-3 hours per week on note-taking
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Never miss important details or decisions
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Improve meeting follow-through by 40%
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Create searchable knowledge base
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Enhance team collaboration</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Meetings?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who use our AI meeting transcriber to
          maximize productivity and never miss important details.
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
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  plan,
  price,
  period,
  description,
  features,
  popular}: {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
    >
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

function StepCard({
  step,
  title,
  description}: {
  step: string;
  title: string;
  description: string;
}) {
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
