export const metadata = {
  title: "Financial Services Technology | Zion Tech Group",
  description:
    "Secure financial technology solutions including trading platforms, payment processing, fraud detection, risk management, and regulatory compliance systems.",
  keywords:
    "fintech, financial technology, trading platforms, payment processing, fraud detection, risk management, financial compliance"};

export default function FinancialServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Financial Services Technology
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Secure, compliant financial technology solutions that power modern
          banking, trading, and payment systems. Built with enterprise-grade
          security and regulatory compliance.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Financial Technology Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FinanceServiceCard
            title="Trading Platform"
            description="High-frequency trading platform with real-time market data and algorithmic trading capabilities"
            features={[
              "Real-time trading",
              "Algorithmic trading",
              "Risk management",
              "Market data feeds",
              "Order management",
              "Compliance reporting"]}
            price="$100,000-500,000"
            icon="📈"
          />
          <FinanceServiceCard
            title="Payment Processing System"
            description="Secure payment gateway with support for multiple payment methods and currencies"
            features={[
              "Multi-currency support",
              "PCI DSS compliance",
              "Fraud detection",
              "Recurring payments",
              "Mobile payments",
              "Analytics dashboard"]}
            price="$50,000-200,000"
            icon="💳"
          />
          <FinanceServiceCard
            title="Fraud Detection AI"
            description="AI-powered fraud detection system with real-time transaction monitoring"
            features={[
              "Real-time monitoring",
              "Machine learning models",
              "Risk scoring",
              "Alert system",
              "Pattern recognition",
              "False positive reduction"]}
            price="$75,000-250,000"
            icon="🛡️"
          />
          <FinanceServiceCard
            title="Digital Banking Platform"
            description="Complete digital banking solution with mobile app and web interface"
            features={[
              "Account management",
              "Mobile banking",
              "Bill payment",
              "Transfer services",
              "Investment tracking",
              "Customer support"]}
            price="$150,000-400,000"
            icon="🏦"
          />
          <FinanceServiceCard
            title="Risk Management System"
            description="Comprehensive risk assessment and management platform for financial institutions"
            features={[
              "Credit risk analysis",
              "Market risk assessment",
              "Operational risk",
              "Regulatory reporting",
              "Stress testing",
              "Portfolio analysis"]}
            price="$80,000-300,000"
            icon="⚖️"
          />
          <FinanceServiceCard
            title="Cryptocurrency Exchange"
            description="Secure cryptocurrency trading platform with advanced security features"
            features={[
              "Multi-crypto support",
              "Cold storage",
              "KYC/AML compliance",
              "Trading engine",
              "API integration",
              "Security monitoring"]}
            price="$200,000-600,000"
            icon="₿"
          />
          <FinanceServiceCard
            title="Wealth Management Platform"
            description="Comprehensive wealth management solution for advisors and clients"
            features={[
              "Portfolio management",
              "Client onboarding",
              "Performance tracking",
              "Reporting tools",
              "Goal planning",
              "Tax optimization"]}
            price="$60,000-180,000"
            icon="💰"
          />
          <FinanceServiceCard
            title="Regulatory Compliance System"
            description="Automated compliance monitoring for financial regulations and reporting"
            features={[
              "Regulatory reporting",
              "Compliance monitoring",
              "Audit trails",
              "Policy management",
              "Alert system",
              "Documentation"]}
            price="$40,000-120,000"
            icon="📋"
          />
          <FinanceServiceCard
            title="Insurance Technology Platform"
            description="Complete insurance management system with claims processing and underwriting"
            features={[
              "Policy management",
              "Claims processing",
              "Underwriting tools",
              "Customer portal",
              "Agent dashboard",
              "Analytics"]}
            price="$70,000-220,000"
            icon="🛡️"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Financial Compliance & Security
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ComplianceCard
            title="PCI DSS Compliance"
            description="Payment Card Industry Data Security Standard compliance for payment processing"
            icon="💳"
          />
          <ComplianceCard
            title="SOX Compliance"
            description="Sarbanes-Oxley Act compliance for financial reporting and controls"
            icon="📊"
          />
          <ComplianceCard
            title="AML/KYC"
            description="Anti-Money Laundering and Know Your Customer compliance systems"
            icon="🔍"
          />
          <ComplianceCard
            title="GDPR Compliance"
            description="General Data Protection Regulation compliance for financial data"
            icon="🌍"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Financial AI Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AICard
            title="Algorithmic Trading"
            description="AI-powered trading algorithms for automated market analysis and execution"
            applications={[
              "Market analysis",
              "Pattern recognition",
              "Risk assessment",
              "Portfolio optimization",
              "Execution algorithms"]}
            icon="🤖"
          />
          <AICard
            title="Credit Scoring"
            description="Advanced credit risk assessment using machine learning and alternative data"
            applications={[
              "Credit scoring",
              "Default prediction",
              "Risk segmentation",
              "Alternative data analysis",
              "Real-time decisions"]}
            icon="📊"
          />
          <AICard
            title="Customer Analytics"
            description="AI-driven customer insights and personalized financial services"
            applications={[
              "Customer segmentation",
              "Churn prediction",
              "Product recommendations",
              "Behavioral analysis",
              "Lifetime value"]}
            icon="👥"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Financial Technology Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechStack
            title="Trading & Markets"
            technologies={[
              "FIX Protocol",
              "WebSocket",
              "Redis",
              "Kafka",
              "PostgreSQL"]}
          />
          <TechStack
            title="Security & Compliance"
            technologies={[
              "OAuth 2.0",
              "JWT",
              "HSM",
              "Encryption",
              "Audit Logging"]}
          />
          <TechStack
            title="AI/ML"
            technologies={[
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "Pandas",
              "NumPy"]}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Implementation Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep
            step="1"
            title="Compliance Review"
            description="Assess regulatory requirements and security standards"
          />
          <ProcessStep
            step="2"
            title="Architecture Design"
            description="Design secure, scalable financial system architecture"
          />
          <ProcessStep
            step="3"
            title="Development & Testing"
            description="Build and thoroughly test all financial applications"
          />
          <ProcessStep
            step="4"
            title="Deployment & Monitoring"
            description="Deploy with continuous monitoring and compliance validation"
          />
        </div>
      </section>

      <Pricing />

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Choose Our Financial Solutions?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard
            title="Regulatory Compliant"
            description="All solutions built with financial regulations and compliance in mind"
            icon="⚖️"
          />
          <BenefitCard
            title="Enterprise Security"
            description="Bank-grade security with encryption, monitoring, and access controls"
            icon="🔒"
          />
          <BenefitCard
            title="High Performance"
            description="Low-latency systems designed for high-frequency trading and real-time processing"
            icon="⚡"
          />
          <BenefitCard
            title="Scalable Architecture"
            description="Solutions that scale with your business growth and transaction volume"
            icon="📈"
          />
          <BenefitCard
            title="24/7 Support"
            description="Round-the-clock support for critical financial systems"
            icon="🛡️"
          />
          <BenefitCard
            title="AI-Powered"
            description="Advanced AI and machine learning for better decision making and automation"
            icon="🧠"
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function FinanceServiceCard({
  title,
  description,
  features,
  price,
  icon}: {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-2xl font-bold text-blue-600 mb-2">{price}</div>
        <div className="text-sm text-gray-500">Starting price</div>
      </div>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function ComplianceCard({
  title,
  description,
  icon}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function AICard({
  title,
  description,
  applications,
  icon}: {
  title: string;
  description: string;
  applications: string[];
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {applications.map((app) => (
          <li key={app} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {app}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechStack({
  title,
  technologies}: {
  title: string;
  technologies: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProcessStep({
  step,
  title,
  description}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitCard({
  title,
  description,
  icon}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Financial Technology Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan
          name="Compliance Assessment"
          price="$10k–$25k"
          features={[
            "Regulatory review",
            "Security audit",
            "Risk assessment",
            "Compliance roadmap",
            "Recommendations"]}
          popular={false}
        />
        <Plan
          name="Solution Development"
          price="$50k–$300k"
          features={[
            "Custom development",
            "Security implementation",
            "Compliance integration",
            "Testing",
            "Training"]}
          popular={true}
        />
        <Plan
          name="Managed Services"
          price="$5k+/mo"
          features={[
            "24/7 monitoring",
            "Compliance management",
            "Security updates",
            "Support",
            "Maintenance"]}
          popular={false}
        />
      </div>
    </section>
  );
}

function Plan({
  name,
  price,
  features,
  popular}: {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-8 relative ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function CTASection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Build Secure Financial Technology?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your financial technology needs and create a secure,
        compliant solution that powers your financial services. Our fintech
        experts are ready to help.
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
      <div className="mt-6 text-sm text-gray-600">
        <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
      </div>
    </div>
  );
}
