export const metadata = { title: "AI HR Management | Zion Tech Group" };

export default function AIHRManagementPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI HR Management System
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent human resources management with AI-powered recruitment,
          employee analytics, and automated workflows to optimize your workforce
          and improve employee satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="AI Recruitment"
          features={[
            "Intelligent resume screening",
            "Candidate matching & scoring",
            "Automated interview scheduling",
            "Skills assessment & testing",
            "Background check automation",
            "Diversity & inclusion analytics"]}
          icon="👥"
        />
        <FeatureCard
          title="Employee Analytics"
          features={[
            "Performance prediction models",
            "Employee satisfaction tracking",
            "Retention risk analysis",
            "Skills gap identification",
            "Career path recommendations",
            "Engagement trend analysis"]}
          icon="📊"
        />
        <FeatureCard
          title="HR Automation"
          features={[
            "Automated onboarding workflows",
            "Leave management & approval",
            "Performance review automation",
            "Payroll integration",
            "Compliance monitoring",
            "Employee self-service portal"]}
          icon="⚙️"
        />
      </div>

      <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          HR Management Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              60% Faster Hiring
            </h3>
            <p className="text-gray-600">AI streamlines recruitment process</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              40% Better Retention
            </h3>
            <p className="text-gray-600">
              Predictive analytics prevent turnover
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              35% Cost Savings
            </h3>
            <p className="text-gray-600">Automated processes reduce HR costs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">😊</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              85% Satisfaction
            </h3>
            <p className="text-gray-600">Improved employee experience</p>
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
            <span className="text-violet-500 mr-2 mt-1">•</span>
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
        HR Management Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Basic HR"
          price="$49/mo"
          duration="Up to 50 employees"
          features={[
            "Basic employee management",
            "Simple recruitment tools",
            "Standard reporting",
            "Email support",
            "Mobile app access",
            "Basic analytics"]}
          popular={false}
        />
        <PricingCard
          name="Professional HR"
          price="$149/mo"
          duration="Up to 250 employees"
          features={[
            "Everything in Basic HR",
            "AI recruitment features",
            "Advanced analytics",
            "Performance management",
            "API access & integrations",
            "Priority support"]}
          popular={true}
        />
        <PricingCard
          name="Enterprise HR"
          price="$399/mo"
          duration="Unlimited employees"
          features={[
            "Everything in Professional HR",
            "Custom AI model training",
            "Advanced security & compliance",
            "Dedicated HR specialist",
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
      className={`relative bg-white border-2 rounded-xl p-8 ${popular ? "border-violet-500 shadow-lg" : "border-gray-200"}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-violet-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-violet-600 mb-1">{price}</div>
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
            ? "bg-violet-600 text-white hover:bg-violet-700"
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
    <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Transform Your HR Operations?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your HR needs and create an AI-powered solution that
        optimizes your workforce and improves employee satisfaction.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-violet-600 text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-violet-600 hover:text-white transition-colors"
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
