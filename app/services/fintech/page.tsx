export const metadata = {
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
        </div>

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
      </div>
    </div>
  );
}

function FinTechService({
  title,
  description,
  features,
  pricing,
  icon,
}: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
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
