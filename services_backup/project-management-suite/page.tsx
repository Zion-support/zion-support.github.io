export const metadata = { title: "Project Management Suite | Zion Tech Group" };

export default function ProjectManagementSuitePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Project Management Suite
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          All-in-one project management platform with AI-powered insights, team
          collaboration, and advanced analytics to keep your projects on track
          and profitable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Project Planning & Tracking"
          features={[
            "Gantt charts & timeline management",
            "Task dependencies & critical path analysis",
            "Resource allocation & capacity planning",
            "Milestone tracking & progress monitoring",
            "Risk assessment & mitigation planning",
            "Budget tracking & cost management"]}
          icon="📋"
        />
        <FeatureCard
          title="Team Collaboration"
          features={[
            "Real-time team communication",
            "File sharing & document management",
            "Comment threads & @mentions",
            "Video conferencing integration",
            "Team calendars & scheduling",
            "Activity feeds & notifications"]}
          icon="👥"
        />
        <FeatureCard
          title="AI-Powered Insights"
          features={[
            "Predictive project completion times",
            "Resource optimization recommendations",
            "Risk prediction & early warnings",
            "Performance analytics & reporting",
            "Automated status updates",
            "Smart task prioritization"]}
          icon="🤖"
        />
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our Project Management Suite?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              30% Faster Delivery
            </h3>
            <p className="text-gray-600">
              AI-optimized workflows reduce project completion time
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              25% Cost Savings
            </h3>
            <p className="text-gray-600">
              Better resource allocation and risk management
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Real-time Analytics
            </h3>
            <p className="text-gray-600">
              Comprehensive dashboards and reporting
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Easy Integrations
            </h3>
            <p className="text-gray-600">
              Connect with 100+ popular business tools
            </p>
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
            <span className="text-orange-500 mr-2 mt-1">•</span>
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
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Starter"
          price="$29/mo"
          duration="Up to 10 users"
          features={[
            "Basic project management",
            "Task tracking & assignments",
            "Team collaboration tools",
            "Mobile app access",
            "Basic reporting",
            "Email support"]}
          popular={false}
        />
        <PricingCard
          name="Professional"
          price="$79/mo"
          duration="Up to 50 users"
          features={[
            "Everything in Starter",
            "Advanced Gantt charts",
            "Resource management",
            "Time tracking & billing",
            "Advanced analytics",
            "API access & integrations",
            "Priority support"]}
          popular={true}
        />
        <PricingCard
          name="Enterprise"
          price="$199/mo"
          duration="Unlimited users"
          features={[
            "Everything in Professional",
            "AI-powered insights",
            "Custom workflows",
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
      className={`relative bg-white border-2 rounded-xl p-8 ${popular ? "border-orange-500 shadow-lg" : "border-gray-200"}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-orange-600 mb-1">{price}</div>
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
            ? "bg-orange-600 text-white hover:bg-orange-700"
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
    <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Streamline Your Project Management?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your project management needs and create a solution that
        boosts team productivity and project success.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
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
