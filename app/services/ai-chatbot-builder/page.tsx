import Link from "next/link";

export const metadata = {
  title: "AI Chatbot Builder | Zion Tech Group",
  description: "No-code AI chatbot platform with advanced NLP, multi-language support, and seamless integrations.",
};

export default function AIChatbotBuilderPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Chatbot Builder
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create intelligent, conversational AI chatbots in minutes with our no-code platform. 
          Boost customer satisfaction and reduce support costs by 60%.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Powerful Features</h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🤖"
              title="No-Code Builder"
              description="Drag-and-drop interface to create sophisticated chatbots without programming knowledge"
            />
            <FeatureItem
              icon="🧠"
              title="Advanced NLP"
              description="Natural language processing powered by GPT-4 and custom training models"
            />
            <FeatureItem
              icon="🌍"
              title="Multi-Language Support"
              description="Deploy chatbots in 50+ languages with automatic translation and cultural adaptation"
            />
            <FeatureItem
              icon="🔗"
              title="Easy Integrations"
              description="Connect with WhatsApp, Facebook Messenger, Slack, Discord, and your website"
            />
            <FeatureItem
              icon="📊"
              title="Analytics Dashboard"
              description="Track conversation metrics, user satisfaction, and identify improvement opportunities"
            />
            <FeatureItem
              icon="🎯"
              title="Lead Generation"
              description="Capture leads automatically with smart forms and qualification workflows"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
          <div className="space-y-6">
            <PricingCard
              name="Starter"
              price="$39"
              period="month"
              description="Perfect for small businesses"
              features={[
                "1 chatbot",
                "1,000 conversations/month",
                "Basic templates",
                "Email support",
                "Standard integrations"
              ]}
              popular={false}
            />
            <PricingCard
              name="Professional"
              price="$99"
              period="month"
              description="Most popular for growing businesses"
              features={[
                "5 chatbots",
                "10,000 conversations/month",
                "Custom training",
                "Priority support",
                "Advanced analytics",
                "API access"
              ]}
              popular={true}
            />
            <PricingCard
              name="Enterprise"
              price="$299"
              period="month"
              description="For large organizations"
              features={[
                "Unlimited chatbots",
                "Unlimited conversations",
                "White-label solution",
                "Dedicated support",
                "Custom integrations",
                "SLA guarantee"
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Proven Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
            <p className="text-gray-600">Reduction in support costs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <p className="text-gray-600">Always available support</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <p className="text-gray-600">Customer satisfaction rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">3x</div>
            <p className="text-gray-600">Faster response times</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Build Your AI Chatbot Today</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join 2,000+ businesses using our AI Chatbot Builder to enhance customer experience and drive growth.
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
            Start Building Free
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

function FeatureItem({ icon, title, description }: {
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

function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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