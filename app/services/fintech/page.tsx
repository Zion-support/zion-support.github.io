export const metadata = {
<<<<<<< HEAD
  title: 'FinTech Solutions | Zion Tech Group',
  description: 'Complete financial technology solutions including digital banking, payment processing, trading platforms, and blockchain financial services. Bank-grade security and compliance.',
};

export default function FinTechPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">FinTech Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete financial technology solutions including digital banking, payment processing,
            trading platforms, and blockchain financial services. Bank-grade security and compliance.
          </p>
=======
  title:
    "FinTech Solutions | Zion Tech Group - Digital Banking & Financial Technology",
  description:
    "Complete FinTech solutions including digital banking, payment processing, trading platforms, and financial analytics. Bank-grade security and compliance. Starting from $25,000/project.",
};

export default function FinTechPage() {
  const fintechServices = [
    {
      title: "Digital Banking Platform",
      description:
        "Complete digital banking solution with account management, transfers, and mobile banking",
      features: [
        "Account management",
        "Money transfers",
        "Mobile banking",
        "Bill payments",
      ],
      pricing: "$50,000/project",
      icon: "🏦",
      category: "Banking",
    },
    {
      title: "Payment Processing System",
      description:
        "Secure payment gateway with multiple payment methods and fraud detection",
      features: [
        "Multiple payment methods",
        "Fraud detection",
        "PCI compliance",
        "Real-time processing",
      ],
      pricing: "$35,000/project",
      icon: "💳",
      category: "Payments",
    },
    {
      title: "Trading Platform",
      description:
        "Advanced trading platform with real-time data, charts, and order management",
      features: [
        "Real-time data",
        "Trading charts",
        "Order management",
        "Risk management",
      ],
      pricing: "$75,000/project",
      icon: "📈",
      category: "Trading",
    },
    {
      title: "Cryptocurrency Exchange",
      description:
        "Secure cryptocurrency exchange with wallet management and trading features",
      features: [
        "Multi-coin support",
        "Wallet management",
        "Trading pairs",
        "Security protocols",
      ],
      pricing: "$100,000/project",
      icon: "₿",
      category: "Crypto",
    },
    {
      title: "Lending Platform",
      description:
        "Peer-to-peer lending platform with risk assessment and automated underwriting",
      features: [
        "Risk assessment",
        "Automated underwriting",
        "Loan management",
        "Credit scoring",
      ],
      pricing: "$60,000/project",
      icon: "💰",
      category: "Lending",
    },
    {
      title: "Insurance Technology",
      description:
        "InsurTech platform with policy management, claims processing, and risk assessment",
      features: [
        "Policy management",
        "Claims processing",
        "Risk assessment",
        "Customer portal",
      ],
      pricing: "$45,000/project",
      icon: "🛡️",
      category: "Insurance",
    },
    {
      title: "Wealth Management",
      description:
        "Digital wealth management platform with portfolio management and robo-advisory",
      features: [
        "Portfolio management",
        "Robo-advisory",
        "Goal tracking",
        "Performance analytics",
      ],
      pricing: "$55,000/project",
      icon: "📊",
      category: "Wealth",
    },
    {
      title: "RegTech Solutions",
      description:
        "Regulatory technology for compliance monitoring and reporting automation",
      features: [
        "Compliance monitoring",
        "Automated reporting",
        "Risk management",
        "Audit trails",
      ],
      pricing: "$40,000/project",
      icon: "📜",
      category: "Compliance",
    },
    {
      title: "Blockchain Solutions",
      description:
        "Blockchain-based financial solutions with smart contracts and DeFi protocols",
      features: [
        "Smart contracts",
        "DeFi protocols",
        "Tokenization",
        "Cross-chain support",
      ],
      pricing: "$65,000/project",
      icon: "⛓️",
      category: "Blockchain",
    },
    {
      title: "Financial Analytics",
      description:
        "Advanced financial analytics with AI-powered insights and predictive modeling",
      features: [
        "AI insights",
        "Predictive modeling",
        "Risk analytics",
        "Custom dashboards",
      ],
      pricing: "$30,000/project",
      icon: "📈",
      category: "Analytics",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          FinTech Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Transform financial services with cutting-edge technology. From
          digital banking to cryptocurrency exchanges, we build secure, scalable
          FinTech solutions that meet the highest industry standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get FinTech Consultation
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Request Demo
          </a>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        </div>

<<<<<<< HEAD
        {/* FinTech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FinTechCategory
            title="Digital Banking"
            icon="🏦"
            description="Complete digital banking platforms and core banking systems"
            services={[
              'Core banking systems',
              'Mobile banking apps',
              'Online banking portals',
              'Account management',
              'Transaction processing',
              'Customer onboarding',
            ]}
            pricing="$50,000 - $300,000"
            marketSize="$1.2T"
=======
      {/* FinTech Capabilities */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          FinTech Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Bank-Grade Security
            </h3>
            <p className="text-gray-600">
              Enterprise-level security with encryption and compliance
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Real-Time Processing
            </h3>
            <p className="text-gray-600">
              High-performance systems for real-time transactions
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Advanced Analytics
            </h3>
            <p className="text-gray-600">
              AI-powered insights and predictive analytics
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Global Compliance
            </h3>
            <p className="text-gray-600">
              Multi-jurisdiction compliance and regulatory support
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          FinTech Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fintechServices.map((service, index) => (
            <FinTechServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* Compliance & Security */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Compliance & Security Standards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComplianceCard
            title="PCI DSS"
            description="Payment Card Industry Data Security Standard compliance"
            icon="💳"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          />
          <FinTechCategory
            title="Payment Processing"
            icon="💳"
            description="Payment gateways, processing systems, and digital wallets"
            services={[
              'Payment gateways',
              'Mobile payments',
              'Cryptocurrency payments',
              'Cross-border payments',
              'Subscription billing',
              'Fraud detection',
            ]}
            pricing="$25,000 - $150,000"
            marketSize="$2.1T"
          />
          <FinTechCategory
            title="Trading Platforms"
            icon="📈"
            description="Trading platforms, market data, and investment management"
            services={[
              'Stock trading platforms',
              'Cryptocurrency exchanges',
              'Forex trading systems',
              'Market data feeds',
              'Portfolio management',
              'Risk management',
            ]}
            pricing="$80,000 - $400,000"
            marketSize="$1.8T"
          />
          <FinTechCategory
            title="Lending & Credit"
            icon="💰"
            description="Peer-to-peer lending, credit scoring, and loan management"
            services={[
              'P2P lending platforms',
              'Credit scoring systems',
              'Loan origination',
              'Risk assessment',
              'Collection management',
              'Credit monitoring',
            ]}
            pricing="$40,000 - $250,000"
            marketSize="$900B"
          />
          <FinTechCategory
            title="Insurance Technology"
            icon="🛡️"
            description="InsurTech solutions and digital insurance platforms"
            services={[
              'Policy management systems',
              'Claims processing',
              'Underwriting automation',
              'Customer portals',
              'Risk assessment',
              'Digital distribution',
            ]}
            pricing="$60,000 - $350,000"
            marketSize="$1.1T"
          />
          <FinTechCategory
            title="RegTech & Compliance"
            icon="⚖️"
            description="Regulatory technology and compliance management"
            services={[
              'KYC/AML systems',
              'Regulatory reporting',
              'Compliance monitoring',
              'Audit trails',
              'Risk management',
              'Regulatory updates',
            ]}
            pricing="$30,000 - $180,000"
            marketSize="$400B"
          />
        </div>

        {/* Additional FinTech Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FinTechService
            title="Wealth Management Platform"
            description="Comprehensive wealth management and financial planning solutions"
            features={[
              'Portfolio management',
              'Financial planning tools',
              'Client relationship management',
              'Performance analytics',
              'Tax optimization',
              'Estate planning',
            ]}
            pricing="$45,000 - $250,000"
            icon="💎"
          />
          <FinTechService
            title="Digital Wallet & Mobile Payments"
            description="Secure digital wallet and mobile payment solutions"
            features={[
              'Multi-currency support',
              'QR code payments',
              'NFC payments',
              'P2P transfers',
              'Bill payments',
              'Loyalty programs',
            ]}
            pricing="$35,000 - $200,000"
            icon="📱"
          />
          <FinTechService
            title="Blockchain Financial Services"
            description="Blockchain-based financial services and DeFi solutions"
            features={[
              'Smart contracts',
              'DeFi protocols',
              'Tokenization',
              'Cross-chain bridges',
              'Yield farming',
              'Liquidity pools',
            ]}
            pricing="$50,000 - $300,000"
            icon="⛓️"
          />
          <FinTechService
            title="Financial Analytics & BI"
            description="Advanced financial analytics and business intelligence"
            features={[
              'Real-time dashboards',
              'Predictive analytics',
              'Risk modeling',
              'Performance metrics',
              'Custom reports',
              'Data visualization',
            ]}
            pricing="$25,000 - $150,000"
            icon="📊"
          />
          <FinTechService
            title="Financial Planning & Advisory"
            description="AI-powered financial planning and advisory platforms"
            features={[
              'Goal-based planning',
              'Retirement planning',
              'Investment advice',
              'Tax planning',
              'Estate planning',
              'Risk assessment',
            ]}
            pricing="$30,000 - $180,000"
            icon="🎯"
          />
          <FinTechService
            title="Cross-Border Payments"
            description="International payment and remittance solutions"
            features={[
              'Multi-currency support',
              'Real-time transfers',
              'Compliance management',
              'Exchange rate optimization',
              'Transaction tracking',
              'Regulatory reporting',
            ]}
            pricing="$60,000 - $350,000"
            icon="🌍"
          />
        </div>

<<<<<<< HEAD
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Build Your FinTech Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our FinTech experts will help you build secure, scalable, and compliant financial solutions
            that meet the highest industry standards.
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
=======
      {/* Technology Stack */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          FinTech Technology Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <TechStackItem
            name="Java/Spring Boot"
            description="Backend Development"
          />
          <TechStackItem
            name="React/Angular"
            description="Frontend Development"
          />
          <TechStackItem
            name="PostgreSQL/Oracle"
            description="Database Systems"
          />
          <TechStackItem
            name="Redis/Hazelcast"
            description="Caching & Messaging"
          />
          <TechStackItem name="Apache Kafka" description="Event Streaming" />
          <TechStackItem
            name="Docker/Kubernetes"
            description="Containerization"
          />
          <TechStackItem name="AWS/Azure" description="Cloud Infrastructure" />
          <TechStackItem
            name="Stripe/PayPal"
            description="Payment Processing"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Your FinTech Solution?
        </h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Let's discuss your financial technology needs and create a secure,
          scalable solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-6 text-sm">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        </div>
      </div>
    </div>
  );
}

function FinTechCategory({
  title,
  icon,
  description,
  services,
  pricing,
  marketSize,
}: {
  title: string;
  icon: string;
  description: string;
  services: string[];
  pricing: string;
  marketSize: string;
}) {
  return (
<<<<<<< HEAD
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {services.map(service => (
          <li key={service} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {service}
          </li>
        ))}
      </ul>
      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-blue-600">{pricing}</span>
          <span className="text-sm text-gray-500">Market: {marketSize}</span>
        </div>
=======
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{service.icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {service.title}
          </h3>
          <span className="text-sm text-green-600 font-medium">
            {service.category}
          </span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {service.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-green-600">
        {service.pricing}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      </div>
    </div>
  );
}

<<<<<<< HEAD
function FinTechService({
  title,
  description,
  features,
  pricing,
=======
function ComplianceCard({
  title,
  description,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  icon,
}: {
  title: string;
  description: string;
<<<<<<< HEAD
  features: string[];
  pricing: string;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="text-gray-600 space-y-1 mb-3">
        {features.map(feature => (
          <li key={feature} className="flex items-center text-sm">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>
    </div>
  );
}
<<<<<<< HEAD
=======

function TechStackItem({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
