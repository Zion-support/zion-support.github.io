import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Fintech Solutions | Zion Tech Group',
  description: 'AI-powered financial services including fraud detection, risk assessment, and algorithmic trading. Bank-level security with 99.9% fraud detection accuracy. Starting at $1,999/month.',
  keywords: 'AI fintech, fraud detection, risk assessment, algorithmic trading, financial AI, banking technology, payment processing'
};

export default function AIFintechSolutionsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Fintech Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Revolutionize financial services with AI-powered fraud detection, risk assessment, and algorithmic trading. Bank-level security with 99.9% fraud detection accuracy and 40% cost reduction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Fintech Solutions Demo"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get Free Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Financial Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI technology designed specifically for financial institutions to enhance security, reduce risk, and improve customer experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🛡️"
            title="Fraud Detection"
            description="Real-time AI-powered fraud detection with 99.9% accuracy and instant response"
            benefits={[
              "Real-time monitoring",
              "Pattern recognition",
              "Anomaly detection",
              "Instant alerts"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Risk Assessment"
            description="Comprehensive risk analysis using machine learning and predictive modeling"
            benefits={[
              "Credit risk scoring",
              "Market risk analysis",
              "Operational risk assessment",
              "Regulatory compliance"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Algorithmic Trading"
            description="AI-driven trading algorithms for optimal investment decisions and portfolio management"
            benefits={[
              "Market analysis",
              "Trade execution",
              "Portfolio optimization",
              "Risk management"
            ]}
          />
          <FeatureCard
            icon="💳"
            title="Payment Processing"
            description="Secure and efficient payment processing with AI-powered fraud prevention"
            benefits={[
              "Multi-currency support",
              "Instant settlements",
              "Chargeback prevention",
              "Compliance monitoring"
            ]}
          />
          <FeatureCard
            icon="📈"
            title="Investment Analytics"
            description="AI-powered investment insights and market trend analysis for better decision making"
            benefits={[
              "Market predictions",
              "Portfolio analysis",
              "Performance tracking",
              "Investment recommendations"
            ]}
          />
          <FeatureCard
            icon="🔐"
            title="Regulatory Compliance"
            description="Automated compliance monitoring and reporting for financial regulations"
            benefits={[
              "KYC/AML automation",
              "Regulatory reporting",
              "Audit trails",
              "Compliance alerts"
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Fintech Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored pricing for financial institutions with enterprise-grade security and compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Startup"
            price="$1,999"
            period="month"
            description="Perfect for fintech startups and small financial institutions"
            features={[
              "Basic fraud detection",
              "Payment processing",
              "Basic analytics",
              "Email support",
              "Standard security",
              "API access"
            ]}
            cta="Start Free Trial"
            popular={false}
          />
          <PricingCard
            name="Enterprise"
            price="$9,999"
            period="month"
            description="Most popular for established financial institutions"
            features={[
              "Advanced AI features",
              "Real-time fraud detection",
              "Risk assessment tools",
              "Algorithmic trading",
              "Priority support",
              "Custom integrations",
              "Compliance monitoring"
            ]}
            cta="Start Free Trial"
            popular={true}
          />
          <PricingCard
            name="Banking"
            price="$29,999"
            period="month"
            description="For large banks and financial networks"
            features={[
              "Full AI suite",
              "Custom AI models",
              "White-label solutions",
              "Dedicated support",
              "Advanced security",
              "Regulatory compliance",
              "Custom development"
            ]}
            cta="Contact Sales"
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Financial Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI Fintech Solutions deliver measurable improvements in security, efficiency, and customer satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <MetricCard
            number="99.9%"
            label="Fraud Detection"
            description="Accuracy in fraud detection and prevention"
          />
          <MetricCard
            number="40%"
            label="Cost Reduction"
            description="Average operational cost savings"
          />
          <MetricCard
            number="60%"
            label="Faster Processing"
            description="Reduction in transaction processing time"
          />
          <MetricCard
            number="95%"
            label="Customer Satisfaction"
            description="User satisfaction with AI features"
          />
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bank-Level Security & Compliance</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade security and compliance designed for financial institutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SecurityCard
            title="PCI DSS Level 1"
            description="Highest level of payment card industry security standards"
            icon="💳"
          />
          <SecurityCard
            title="SOC 2 Type II"
            description="Certified security controls and data protection"
            icon="🔒"
          />
          <SecurityCard
            title="ISO 27001"
            description="International standard for information security"
            icon="🌐"
          />
          <SecurityCard
            title="GDPR Compliant"
            description="Full compliance with European data protection regulations"
            icon="🛡️"
          />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Use Cases</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world applications of AI in financial services across different sectors.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UseCaseCard
            title="Digital Banking"
            description="AI-powered digital banking solutions with fraud detection and personalized services"
            benefits={[
              "Account security",
              "Personalized recommendations",
              "Automated customer service",
              "Risk assessment"
            ]}
            icon="🏦"
          />
          <UseCaseCard
            title="Payment Processing"
            description="Secure payment processing with real-time fraud detection and compliance monitoring"
            benefits={[
              "Real-time fraud detection",
              "Multi-currency support",
              "Instant settlements",
              "Chargeback prevention"
            ]}
            icon="💸"
          />
          <UseCaseCard
            title="Investment Management"
            description="AI-driven investment strategies and portfolio optimization for better returns"
            benefits={[
              "Market analysis",
              "Portfolio optimization",
              "Risk management",
              "Performance tracking"
            ]}
            icon="📈"
          />
          <UseCaseCard
            title="Insurance"
            description="AI-powered underwriting and claims processing for faster and more accurate decisions"
            benefits={[
              "Risk assessment",
              "Claims processing",
              "Fraud detection",
              "Customer segmentation"
            ]}
            icon="🛡️"
          />
          <UseCaseCard
            title="Lending"
            description="Intelligent credit scoring and loan processing with reduced risk and faster approvals"
            benefits={[
              "Credit scoring",
              "Risk assessment",
              "Automated underwriting",
              "Default prediction"
            ]}
            icon="💰"
          />
          <UseCaseCard
            title="Trading"
            description="Algorithmic trading and market analysis for optimal investment decisions"
            benefits={[
              "Market analysis",
              "Trade execution",
              "Portfolio management",
              "Risk control"
            ]}
            icon="📊"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-green-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Services?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join leading financial institutions using AI to enhance security, reduce risk, and improve customer experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Fintech Solutions - Free Demo"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, benefits }: {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, cta, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-green-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Fintech Solutions - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function MetricCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-green-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function SecurityCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function UseCaseCard({ title, description, benefits, icon }: {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}