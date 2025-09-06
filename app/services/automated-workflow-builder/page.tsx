export const metadata = { 
  title: 'Automated Workflow Builder | Zion Tech Group',
  description: 'Build powerful business automation workflows without coding. Drag-and-drop interface, 500+ integrations, and AI-powered workflow optimization.'
};

export default function AutomatedWorkflowBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Automated Workflow Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build powerful business automation workflows without coding. Drag-and-drop interface, 
            500+ integrations, and AI-powered workflow optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon="🎨"
            title="Visual Workflow Designer"
            description="Drag-and-drop interface for creating complex business processes"
            features={["No-code workflow builder", "Conditional logic", "Parallel processing", "Error handling"]}
          />
          <FeatureCard
            icon="🔗"
            title="500+ Integrations"
            description="Connect with all your favorite tools and services"
            features={["CRM systems", "Email platforms", "Database connections", "API integrations"]}
          />
          <FeatureCard
            icon="🤖"
            title="AI-Powered Optimization"
            description="Machine learning algorithms optimize your workflows automatically"
            features={["Performance analysis", "Bottleneck detection", "Auto-optimization", "Predictive scaling"]}
          />
          <FeatureCard
            icon="📊"
            title="Real-time Monitoring"
            description="Track workflow performance and identify issues instantly"
            features={["Live dashboards", "Performance metrics", "Error tracking", "Success rates"]}
          />
          <FeatureCard
            icon="🔒"
            title="Enterprise Security"
            description="Bank-level security for your automated processes"
            features={["End-to-end encryption", "Role-based access", "Audit logs", "Compliance tools"]}
          />
          <FeatureCard
            icon="⚡"
            title="High Performance"
            description="Process thousands of workflows simultaneously"
            features={["Scalable infrastructure", "99.9% uptime", "Global CDN", "Auto-scaling"]}
          />
        </div>

        <UseCasesSection />
        <PricingSection />
        <ContactSection />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, features }: { icon: string; title: string; description: string; features: string[] }) {
  return (
    <div className="bg-gradient-to-br from-green-600 to-blue-600 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-green-100 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-green-100">
            <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function UseCasesSection() {
  const useCases = [
    {
      title: "Sales Automation",
      description: "Automate lead scoring, follow-ups, and deal progression",
      icon: "💼"
    },
    {
      title: "Customer Support",
      description: "Auto-route tickets, send responses, and escalate issues",
      icon: "🎧"
    },
    {
      title: "Marketing Campaigns",
      description: "Trigger personalized campaigns based on user behavior",
      icon: "📢"
    },
    {
      title: "Data Processing",
      description: "Automate data collection, cleaning, and reporting",
      icon: "📈"
    },
    {
      title: "HR Operations",
      description: "Streamline onboarding, approvals, and employee management",
      icon: "👥"
    },
    {
      title: "Financial Workflows",
      description: "Automate invoicing, payments, and financial reporting",
      icon: "💰"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Popular Use Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">{useCase.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
            <p className="text-gray-600">{useCase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="bg-white rounded-2xl p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Starter"
          price="$49"
          period="month"
          description="Perfect for small teams getting started with automation"
          features={["Up to 100 workflows", "10 integrations", "Basic templates", "Email support", "1,000 executions/month"]}
          popular={false}
        />
        <PricingCard
          name="Professional"
          price="$149"
          period="month"
          description="Advanced features for growing businesses"
          features={["Unlimited workflows", "All integrations", "Custom templates", "Priority support", "10,000 executions/month", "Advanced analytics"]}
          popular={true}
        />
        <PricingCard
          name="Enterprise"
          price="Custom"
          period=""
          description="Full-scale solution for large organizations"
          features={["Unlimited everything", "Custom integrations", "White-label solution", "24/7 support", "Dedicated account manager", "On-premise option"]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, popular }: { 
  name: string; price: string; period: string; description: string; features: string[]; popular: boolean 
}) {
  return (
    <div className={`relative border-2 rounded-xl p-8 ${popular ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        {period && <span className="text-gray-600">/{period}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
      <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
        Contact our automation experts to discuss your workflow needs and get a custom solution.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-white text-green-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-green-100">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}