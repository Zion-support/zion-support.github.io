import Link from "next/link";

export const metadata = {
  title: "AI Chatbot Builder | Zion Tech Group - No-Code Chatbot Platform",
  description: "Create intelligent chatbots without coding. Our AI-powered platform offers drag-and-drop interface, multi-language support, and seamless integration with 50+ platforms. Starting at $299/month.",
};

export default function AIChatbotBuilderPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Chatbot Builder
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Create intelligent chatbots without coding. Our no-code platform makes it easy to build, deploy, and manage AI-powered customer support solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started - Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Request Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, deploy, and manage intelligent chatbots that engage your customers 24/7.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎨"
            title="Drag & Drop Interface"
            description="Build chatbots visually with our intuitive drag-and-drop builder. No coding required."
          />
          <FeatureCard
            icon="🌍"
            title="Multi-Language Support"
            description="Deploy chatbots in 50+ languages with automatic translation and localization."
          />
          <FeatureCard
            icon="🔌"
            title="50+ Integrations"
            description="Connect with your favorite tools including Slack, WhatsApp, Facebook, and more."
          />
          <FeatureCard
            icon="📊"
            title="Advanced Analytics"
            description="Track performance with detailed analytics, conversation insights, and user behavior data."
          />
          <FeatureCard
            icon="🤖"
            title="AI-Powered Responses"
            description="Leverage GPT-4 and custom AI models for natural, contextual conversations."
          />
          <FeatureCard
            icon="⚡"
            title="Real-Time Deployment"
            description="Deploy your chatbot instantly with our cloud infrastructure and CDN."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include 24/7 support and 99.9% uptime guarantee.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Starter"
            price="$299"
            period="month"
            description="Perfect for small businesses"
            features={[
              "Up to 1,000 conversations/month",
              "2 chatbot instances",
              "Basic integrations",
              "Email support",
              "Analytics dashboard"
            ]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$599"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Up to 10,000 conversations/month",
              "10 chatbot instances",
              "All integrations",
              "Priority support",
              "Advanced analytics",
              "Custom AI training"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$1,299"
            period="month"
            description="For large organizations"
            features={[
              "Unlimited conversations",
              "Unlimited chatbot instances",
              "Custom integrations",
              "Dedicated support",
              "White-label solution",
              "On-premise deployment"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how businesses across industries use our AI Chatbot Builder to improve customer experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UseCaseCard
            title="Customer Support"
            description="Handle 80% of customer inquiries automatically with intelligent responses and seamless escalation to human agents."
            icon="🎧"
            benefits={["24/7 availability", "Instant responses", "Reduced support costs", "Improved satisfaction"]}
          />
          <UseCaseCard
            title="Lead Generation"
            description="Qualify leads and capture contact information through engaging conversations and smart forms."
            icon="🎯"
            benefits={["Higher conversion rates", "Qualified leads", "Automated follow-ups", "CRM integration"]}
          />
          <UseCaseCard
            title="E-commerce Assistant"
            description="Help customers find products, answer questions, and guide them through the purchase process."
            icon="🛒"
            benefits={["Increased sales", "Reduced cart abandonment", "Product recommendations", "Order tracking"]}
          />
          <UseCaseCard
            title="Appointment Booking"
            description="Automate appointment scheduling with calendar integration and smart availability management."
            icon="📅"
            benefits={["Reduced no-shows", "24/7 booking", "Calendar sync", "Automated reminders"]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Build Your AI Chatbot?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join 500+ businesses already using our AI Chatbot Builder to improve customer experience and reduce support costs by up to 60%.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Free Trial - Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Schedule Demo
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-600">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  popular 
}: { 
  name: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md border-2 ${popular ? 'border-blue-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function UseCaseCard({ 
  title, 
  description, 
  icon, 
  benefits 
}: { 
  title: string; 
  description: string; 
  icon: string; 
  benefits: string[]; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}