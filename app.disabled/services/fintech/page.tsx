import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FinTech Solutions | Zion Tech Group',
  description: 'Professional FinTech solutions for your business needs.',
  keywords: 'FinTech, financial technology, payment solutions, banking technology',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'FinTech Solutions | Zion Tech Group',
    description: 'Professional FinTech solutions for your business needs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinTech Solutions | Zion Tech Group',
    description: 'Professional FinTech solutions for your business needs.',
  },
};

export default function FinTechPage() {
  return (
<div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              FinTech Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your financial services with cutting-edge FinTech solutions.
              From payment processing to digital banking, we build secure, scalable financial technology that drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our FinTech Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our FinTech Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial technology solutions that modernize banking, payments, and financial services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FinTechServiceCard
              title="Digital Banking Platform"
              description="Complete digital banking solution with account management, transfers, and financial planning tools."
              features={[
                'Multi-account management',
                'Real-time transfers & payments',
                'Financial planning tools',
                'Mobile banking app',
                'Fraud detection & prevention',
                'Regulatory compliance (PCI DSS, SOX)',
              ]}
              pricing="$50,000-300,000"
              marketSize="$8.2B digital banking market"
              icon="🏦"
            />
            <FinTechServiceCard
              title="Payment Processing Gateway"
              description="Secure payment processing with support for multiple payment methods, currencies, and global transactions."
              features={[
                'Multi-payment method support',
                'Global currency processing',
                'Fraud prevention & detection',
                'PCI DSS compliance',
                'Real-time transaction monitoring',
                'API integration & webhooks',
              ]}
              pricing="$25,000-150,000"
              marketSize="$89.2B payment processing market"
              icon="💳"
            />
            <FinTechServiceCard
              title="Cryptocurrency Exchange"
              description="Secure cryptocurrency trading platform with advanced security, liquidity management, and regulatory compliance."
              features={[
                'Multi-cryptocurrency support',
                'Advanced trading features',
                'Cold storage security',
                'KYC/AML compliance',
                'Liquidity management',
                'Real-time market data',
              ]}
              pricing="$100,000-500,000"
              marketSize="$1.2T cryptocurrency market"
              icon="₿"
            />
            <FinTechServiceCard
              title="Peer-to-Peer Lending Platform"
              description="P2P lending marketplace connecting borrowers and lenders with automated risk assessment and loan management."
              features={[
                'Automated risk assessment',
                'Loan origination system',
                'Payment processing',
                'Credit scoring algorithms',
                'Investor dashboard',
                'Regulatory compliance',
              ]}
              pricing="$75,000-400,000"
              marketSize="$67.9B P2P lending market"
              icon="🤝"
            />
            <FinTechServiceCard
              title="Investment Management Platform"
              description="Robo-advisor and investment management platform with portfolio optimization and automated rebalancing."
              features={[
                'Robo-advisory algorithms',
                'Portfolio optimization',
                'Automated rebalancing',
                'Risk assessment tools',
                'Tax-loss harvesting',
                'Performance analytics',
              ]}
              pricing="$40,000-200,000"
              marketSize="$1.4T robo-advisor market"
              icon="📈"
            />
            <FinTechServiceCard
              title="Insurance Technology (InsurTech)"
              description="Digital insurance platform with automated underwriting, claims processing, and risk assessment."
              features={[
                'Automated underwriting',
                'Claims processing automation',
                'Risk assessment algorithms',
                'Policy management system',
                'Customer portal',
                'Regulatory compliance',
              ]}
              pricing="$60,000-350,000"
              marketSize="$5.4B InsurTech market"
              icon="🛡️"
            />
            <FinTechServiceCard
              title="RegTech & Compliance"
              description="Regulatory technology solutions for compliance monitoring, reporting, and risk management."
              features={[
                'Automated compliance monitoring',
                'Regulatory reporting',
                'Risk assessment tools',
                'Audit trail management',
                'Policy management',
                'Real-time alerts',
              ]}
              pricing="$30,000-180,000"
              marketSize="$6.3B RegTech market"
              icon="📋"
            />
            <FinTechServiceCard
              title="Wealth Management Platform"
              description="Comprehensive wealth management solution with client onboarding, portfolio management, and reporting."
              features={[
                'Client onboarding automation',
                'Portfolio management tools',
                'Performance reporting',
                'Client communication portal',
                'Document management',
                'Compliance monitoring',
              ]}
              pricing="$45,000-250,000"
              marketSize="$1.1T wealth management market"
              icon="💎"
            />
            <FinTechServiceCard
              title="Digital Wallet & Mobile Payments"
              description="Secure digital wallet with mobile payment capabilities, loyalty programs, and merchant integration."
              features={[
                'Mobile payment processing',
                'Digital wallet management',
                'Loyalty program integration',
                'Merchant payment solutions',
                'Biometric authentication',
                'Transaction history & analytics',
              ]}
              pricing="$35,000-200,000"
              marketSize="$2.1T mobile payments market"
              icon="📱"
            />
            <FinTechServiceCard
              title="Trading & Market Data Platform"
              description="Real-time trading platform with market data feeds, charting tools, and algorithmic trading capabilities."
              features={[
                'Real-time market data',
                'Advanced charting tools',
                'Algorithmic trading',
                'Order management system',
                'Risk management tools',
                'Market analysis tools',
              ]}
              pricing="$80,000-400,000"
              marketSize="$25.6B trading platform market"
              icon="📊"
            />
            <FinTechServiceCard
              title="Financial Analytics & BI"
              description="Advanced financial analytics platform with predictive modeling, risk analysis, and business intelligence."
              features={[
                'Predictive financial modeling',
                'Risk analysis & assessment',
                'Business intelligence dashboards',
                'Real-time reporting',
                'Data visualization',
                'Custom analytics development',
              ]}
              pricing="$25,000-150,000"
              marketSize="$4.2B financial analytics market"
              icon="📊"
            />
            <FinTechServiceCard
              title="Blockchain Financial Services"
              description="Blockchain-based financial services including DeFi protocols, smart contracts, and tokenization."
              features={[
                'DeFi protocol development',
                'Smart contract implementation',
                'Tokenization services',
                'Cross-chain integration',
                'Decentralized identity',
                'Yield farming platforms',
              ]}
              pricing="$50,000-300,000"
              marketSize="$13.6B DeFi market"
              icon="⛓️"
            />
            <FinTechServiceCard
              title="Credit Scoring & Lending"
              description="AI-powered credit scoring and lending platform with automated decision-making and risk assessment."
              features={[
                'AI credit scoring models',
                'Automated loan decisions',
                'Risk assessment algorithms',
                'Alternative data analysis',
                'Fraud detection',
                'Regulatory compliance',
              ]}
              pricing="$40,000-250,000"
              marketSize="$3.8B credit scoring market"
              icon="🎯"
            />
            <FinTechServiceCard
              title="Financial Planning & Advisory"
              description="Digital financial planning platform with goal setting, budgeting, and investment advice."
              features={[
                'Goal-based financial planning',
                'Budgeting & expense tracking',
                'Investment recommendations',
                'Retirement planning tools',
                'Tax optimization',
                'Client communication tools',
              ]}
              pricing="$30,000-180,000"
              marketSize="$2.7B financial planning market"
              icon="🎯"
            />
            <FinTechServiceCard
              title="Cross-Border Payments"
              description="International payment processing with currency conversion, compliance, and real-time settlement."
              features={[
                'Multi-currency support',
                'Real-time settlement',
                'Regulatory compliance (AML, KYC)',
                'Exchange rate optimization',
                'Transaction tracking',
                'Risk management',
              ]}
              pricing="$60,000-350,000"
              marketSize="$156B cross-border payments market"
              icon="🌍"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Our FinTech Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our FinTech Solutions?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine financial expertise with cutting-edge technology to deliver secure, compliant, and scalable FinTech solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Bank-Grade Security"
              description="Enterprise-level security with encryption, fraud detection, and compliance with financial regulations."
            />
            <FeatureCard
              title="Regulatory Compliance"
              description="Full compliance with PCI DSS, SOX, GDPR, and other financial regulations across multiple jurisdictions."
            />
            <FeatureCard
              title="Scalable Architecture"
              description="Cloud-native architecture designed to handle high transaction volumes and rapid business growth."
            />
            <FeatureCard
              title="24/7 Support"
              description="Round-the-clock monitoring and support to ensure continuous operation of critical financial systems."
            />
          </div>
        </div>
      </section>

      {/* FinTech Service Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FinTech Service Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect FinTech package for your financial services needs and compliance requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FinTechPricingCard
              name="FinTech MVP"
              price="$25,000 - $75,000"
              duration="8-16 weeks"
              features={[
                'Core financial functionality',
                'Basic security implementation',
                'Payment processing integration',
                'User authentication & authorization',
                'Compliance framework setup',
                'Mobile-responsive design',
              ]}
              bestFor="Startups and new FinTech ventures"
            />
            <FinTechPricingCard
              name="Enterprise FinTech"
              price="$75,000 - $300,000"
              duration="16-32 weeks"
              features={[
                'Full-featured financial platform',
                'Advanced security & compliance',
                'Multi-currency support',
                'Real-time processing',
                'Advanced analytics & reporting',
                'Third-party integrations',
                '24/7 monitoring & support',
              ]}
              bestFor="Established financial institutions"
              popular={true}
            />
            <FinTechPricingCard
              name="Custom FinTech Solution"
              price="$300,000+"
              duration="Custom timeline"
              features={[
                'Bespoke financial solution',
                'Advanced AI & ML integration',
                'Blockchain & DeFi features',
                'White-label customization',
                'Multi-tenant architecture',
                'Custom compliance requirements',
                'Dedicated support team',
              ]}
              bestFor="Large enterprises and banks"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Financial Services?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our FinTech solutions can modernize your financial services, improve efficiency, and drive growth.
            Our team has delivered 100+ successful FinTech projects with combined transaction volume of $50B+.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>

function FinTechServiceCard({
  title,
  description,
  features,
  pricing,
  marketSize,
  icon,
}: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  marketSize: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-lg font-semibold text-emerald-600 mb-1">{pricing}</div>
        <div className="text-sm text-gray-500">{marketSize}</div>
      </div>

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
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <p className="text-gray-600 mb-4">
              Advanced features and capabilities for your business needs.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Professional solutions</li>
              <li>• 24/7 support</li>
              <li>• Scalable architecture</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
            <p className="text-gray-600 mb-4">
              Transform your business with our cutting-edge solutions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Increased efficiency</li>
              <li>• Cost savings</li>
              <li>• Better results</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive support and maintenance services.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Expert consultation</li>
              <li>• Training and documentation</li>
              <li>• Ongoing maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinTechServiceCard({ service }: { service: any }) {
  return (
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
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FinTechPricingCard({
  name,
  price,
  duration,
  features,
  bestFor,
  popular = false,
}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  bestFor: string;
  popular?: boolean;
}) {
  return (
    <div className={`relative bg-white border rounded-xl p-8 ${popular ? 'border-emerald-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-emerald-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-emerald-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-500 mb-4">Best for: {bestFor}</div>
      <a
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
            : 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
