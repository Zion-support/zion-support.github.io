export const metadata = { title: "CRM Solution | Zion Tech Group" };

export default function CRMSolutionPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI-Powered CRM Solution
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent customer relationship management platform with AI-driven
          insights, automated workflows, and predictive analytics to boost sales
          and customer satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Lead Management"
          features={[
            "AI-powered lead scoring & qualification",
            "Automated lead capture & assignment",
            "Lead nurturing campaigns",
            "Pipeline management & forecasting",
            "Lead source tracking & attribution",
            "Conversion optimization insights"]}
          icon="🎯"
        />
        <FeatureCard
          title="Customer Insights"
          features={[
            "360-degree customer view",
            "Behavioral analytics & patterns",
            "Customer lifetime value prediction",
            "Churn risk identification",
            "Personalization recommendations",
            "Sentiment analysis & feedback"]}
          icon="👤"
        />
        <FeatureCard
          title="Sales Automation"
          features={[
            "Automated follow-up sequences",
            "Email & SMS campaign management",
            "Meeting scheduling & reminders",
            "Quote & proposal generation",
            "Contract management & e-signatures",
            "Sales performance analytics"]}
          icon="🤖"
        />
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          CRM Benefits & ROI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              37% Sales Increase
            </h3>
            <p className="text-gray-600">
              AI-driven insights boost conversion rates
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              50% Time Savings
            </h3>
            <p className="text-gray-600">
              Automated workflows reduce manual tasks
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              25% Higher Retention
            </h3>
            <p className="text-gray-600">Predictive analytics prevent churn</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              90% Accuracy
            </h3>
            <p className="text-gray-600">AI predictions and lead scoring</p>
          </div>
        </div>
      </div>

      <PricingSection />

      <ContactSection />
    </div>
  );
}

function FeatureCard({
  title,
  features,
  icon}: {
  title: string;
  features: string[];
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-indigo-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        CRM Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Starter CRM"
          price="$49/mo"
          duration="Up to 5 users"
          features={[
            "Contact & lead management",
            "Basic pipeline tracking",
            "Email integration",
            "Mobile app access",
            "Basic reporting",
            "Email support"]}
          popular={false}
        />
        <PricingCard
          name="Professional CRM"
          price="$99/mo"
          duration="Up to 25 users"
          features={[
            "Everything in Starter CRM",
            "AI-powered lead scoring",
            "Advanced automation",
            "Custom fields & workflows",
            "Advanced analytics & reporting",
            "API access & integrations",
            "Priority support"]}
          popular={true}
        />
        <PricingCard
          name="Enterprise CRM"
          price="$249/mo"
          duration="Unlimited users"
          features={[
            "Everything in Professional CRM",
            "Predictive analytics",
            "Custom AI models",
            "Advanced security & compliance",
            "Dedicated account manager",
            "Custom integrations",
            "24/7 phone support"]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  duration,
  features,
  popular}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`relative bg-white border-2 rounded-xl p-8 ${popular ? "border-indigo-500 shadow-lg" : "border-gray-200"}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-indigo-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Transform Your Sales Process?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your CRM needs and create an intelligent solution that
        drives sales growth and customer satisfaction.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
