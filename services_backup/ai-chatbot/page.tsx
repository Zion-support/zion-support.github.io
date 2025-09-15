export const metadata = {
  title: "AI Chatbot Development | Zion Tech Group",
  description:
    "Build intelligent AI chatbots with natural language processing, multi-channel support, and custom integrations. Professional chatbot solutions starting at $8k."};

export default function AIChatbotPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Chatbot Development
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build intelligent AI chatbots with natural language processing,
          multi-channel support, and seamless human handoff capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Natural Language Processing"
            details={[
              "Intent recognition",
              "Entity extraction",
              "Context understanding",
              "Multi-language support",
              "Sentiment analysis",
              "Conversation flow",
              "Fallback handling"]}
          />
          <Item
            title="Multi-Channel Integration"
            details={[
              "Website chat widget",
              "Facebook Messenger",
              "WhatsApp Business",
              "Slack integration",
              "Telegram support",
              "Voice interfaces",
              "Mobile apps"]}
          />
          <Item
            title="Advanced Features"
            details={[
              "Human handoff",
              "Knowledge base integration",
              "API connections",
              "Analytics dashboard",
              "A/B testing",
              "Custom training",
              "White-label options"]}
          />
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            AI Chatbot Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Conversational AI
              </h3>
              <p className="text-gray-600">
                Advanced NLP models understand context, maintain conversation
                flow, and provide human-like responses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Custom Training
              </h3>
              <p className="text-gray-600">
                Train chatbots on your specific data, industry terminology, and
                business processes for better accuracy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Seamless Handoff
              </h3>
              <p className="text-gray-600">
                Intelligent routing to human agents when the chatbot cannot
                resolve complex queries.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Analytics & Insights
              </h3>
              <p className="text-gray-600">
                Track conversation metrics, user satisfaction, and identify
                areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        AI Chatbot Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan
          name="Basic Chatbot"
          price="$8k–$15k"
          duration="4–6 weeks"
          features={[
            "Basic NLP capabilities",
            "Single channel integration",
            "Pre-built responses",
            "Simple analytics",
            "Basic customization",
            "Email support",
            "Standard hosting"]}
        />
        <Plan
          name="Professional Chatbot"
          price="$15k–$35k"
          duration="6–10 weeks"
          features={[
            "Everything in Basic",
            "Multi-channel support",
            "Custom training",
            "Advanced analytics",
            "API integrations",
            "Human handoff",
            "Priority support"]}
        />
        <Plan
          name="Enterprise Chatbot"
          price="$35k+"
          duration="8–16 weeks"
          features={[
            "Everything in Professional",
            "Custom development",
            "Advanced AI models",
            "White-label options",
            "Dedicated support",
            "SLA guarantees",
            "On-premise deployment"]}
        />
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Build Your AI Chatbot?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's create an intelligent chatbot that enhances customer experience
          and reduces support workload.
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
      </div>
    </section>
  );
}

function Plan({
  name,
  price,
  duration,
  features}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Chatbot Development Inquiry"
        className="block w-full mt-6 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}
