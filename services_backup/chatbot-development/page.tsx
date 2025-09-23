export const metadata = {
  title: "Chatbot Development | Zion Tech Group",
  description:
    "Build intelligent chatbots with AI-powered natural language understanding, multi-platform deployment, and seamless human handoff."};

export default function ChatbotDevelopmentPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Chatbot Development
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Build intelligent chatbots with AI-powered natural language
        understanding, multi-platform deployment, and seamless human handoff.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="AI-Powered Conversations"
          features={[
            "Natural language understanding",
            "Context-aware responses",
            "Multi-language support",
            "Sentiment analysis"]}
        />
        <FeatureCard
          title="Multi-Platform Deployment"
          features={[
            "Website integration",
            "Mobile app integration",
            "Social media platforms",
            "Voice assistants"]}
        />
        <FeatureCard
          title="Advanced Features"
          features={[
            "Human handoff",
            "Analytics & insights",
            "Custom integrations",
            "A/B testing"]}
        />
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose Our Chatbot Development?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <span className="text-amber-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600">
                Provide instant responses to customer queries around the clock
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-amber-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Reduce Support Costs by 60%
              </h3>
              <p className="text-gray-600">
                Handle common queries automatically, freeing up human agents
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-amber-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Improve Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Instant responses and 24/7 availability boost customer
                experience
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-amber-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Easy Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate with your existing systems and workflows
              </p>
            </div>
          </div>
        </div>
      </div>

      <Pricing />

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Build Your Intelligent Chatbot?
        </h2>
        <p className="text-gray-600 mb-6">
          Start with a free consultation to design the perfect chatbot for your
          business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  features}: {
  title: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {features.map((f) => (
          <li key={f} className="flex items-center">
            <span className="text-amber-500 mr-2">•</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan
          name="Basic"
          price="$1,999/mo"
          features={[
            "Simple Q&A chatbot",
            "Up to 1,000 conversations/month",
            "Basic integrations",
            "Email support"]}
        />
        <Plan
          name="Professional"
          price="$4,999/mo"
          features={[
            "Advanced AI capabilities",
            "Up to 10,000 conversations/month",
            "Custom integrations",
            "Priority support",
            "Analytics dashboard"]}
          popular={true}
        />
        <Plan
          name="Enterprise"
          price="$12,999/mo"
          features={[
            "Unlimited conversations",
            "Custom AI training",
            "White-label solution",
            "Dedicated support",
            "Multi-platform deployment"]}
        />
      </div>
    </div>
  );
}

function Plan({
  name,
  price,
  features,
  popular = false}: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? "border-amber-500 ring-2 ring-amber-200" : "border-gray-200"}`}
    >
      {popular && (
        <div className="bg-amber-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-amber-600 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
          popular
            ? "bg-amber-600 text-white hover:bg-amber-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
