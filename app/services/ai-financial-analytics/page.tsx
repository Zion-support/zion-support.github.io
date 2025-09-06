import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Financial Analytics Platform | Zion Tech Group',
  description: 'Advanced financial analytics with AI-powered forecasting, risk assessment, and investment insights. Make data-driven financial decisions with 95% accuracy predictions.',
  keywords: 'AI financial analytics, financial forecasting, investment analysis, risk assessment, financial planning, portfolio optimization'
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

function FeatureCard({ icon, title, description, benefits }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingTier({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  popular = false 
}: { 
  name: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  popular?: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
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
        href="mailto:kleber@ziontechgroup.com?subject=AI Financial Analytics - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

export default function AIFinancialAnalyticsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Financial Analytics Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your financial decision-making with AI-powered analytics, forecasting, and risk assessment. 
          Achieve 95% accuracy in financial predictions and optimize your investment strategies with intelligent insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Financial Analytics Demo"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Request Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced AI Financial Intelligence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform provides comprehensive financial analysis with unprecedented accuracy and speed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="📈"
            title="Predictive Financial Modeling"
            description="Advanced machine learning models that forecast revenue, expenses, and cash flow with 95% accuracy."
            benefits={[
              "Revenue forecasting",
              "Expense prediction",
              "Cash flow analysis",
              "Scenario modeling",
              "Risk-adjusted projections"
            ]}
          />
          <FeatureCard
            icon="🎯"
            title="Investment Optimization"
            description="AI-driven portfolio optimization and investment recommendations based on risk tolerance and market conditions."
            benefits={[
              "Portfolio optimization",
              "Risk assessment",
              "Asset allocation",
              "Rebalancing alerts",
              "Performance tracking"
            ]}
          />
          <FeatureCard
            icon="🔍"
            title="Risk Assessment & Management"
            description="Comprehensive risk analysis including market risk, credit risk, and operational risk with mitigation strategies."
            benefits={[
              "Market risk analysis",
              "Credit risk assessment",
              "Operational risk monitoring",
              "Stress testing",
              "Risk mitigation strategies"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Real-time Market Analysis"
            description="Continuous monitoring of market conditions, news sentiment, and economic indicators for informed decisions."
            benefits={[
              "Market sentiment analysis",
              "News impact assessment",
              "Economic indicator tracking",
              "Real-time alerts",
              "Trend identification"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Automated Reporting"
            description="AI-generated financial reports, insights, and recommendations tailored to your specific needs and goals."
            benefits={[
              "Custom report generation",
              "Automated insights",
              "Executive summaries",
              "Compliance reporting",
              "Performance dashboards"
            ]}
          />
          <FeatureCard
            icon="💡"
            title="Smart Recommendations"
            description="Personalized financial advice and recommendations based on your financial goals, risk profile, and market conditions."
            benefits={[
              "Personalized advice",
              "Goal-based planning",
              "Action recommendations",
              "Opportunity identification",
              "Strategy optimization"
            ]}
          />
        </div>
      </section>

      {/* Accuracy Metrics */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Accuracy</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI models have been trained on decades of financial data and continuously improve through machine learning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Prediction Accuracy</div>
            <div className="text-sm text-gray-600">Financial forecasting accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Better Returns</div>
            <div className="text-sm text-gray-600">Average improvement in investment returns</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Risk Reduction</div>
            <div className="text-sm text-gray-600">Reduction in portfolio volatility</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">80%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Time Saved</div>
            <div className="text-sm text-gray-600">Reduction in analysis time</div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI financial analytics platform serves a wide range of financial professionals and organizations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">🏦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Institutions</h3>
            <p className="text-gray-600 mb-4">Banks, credit unions, and financial services companies managing complex portfolios and risk.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Credit risk assessment
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Regulatory compliance
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Portfolio management
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Firms</h3>
            <p className="text-gray-600 mb-4">Hedge funds, asset managers, and investment advisors optimizing client portfolios.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Portfolio optimization
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Market analysis
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Client reporting
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Finance</h3>
            <p className="text-gray-600 mb-4">Large corporations managing treasury operations, financial planning, and risk management.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Treasury management
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Financial planning
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Risk management
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise-Grade Security</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your financial data is protected with bank-level security and regulatory compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-gray-900 mb-2">256-bit Encryption</h3>
            <p className="text-sm text-gray-600">End-to-end encryption for all data</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-semibold text-gray-900 mb-2">SOC 2 Compliant</h3>
            <p className="text-sm text-gray-600">Certified security standards</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-semibold text-gray-900 mb-2">GDPR Ready</h3>
            <p className="text-sm text-gray-600">Full data privacy compliance</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-3">🔐</div>
            <h3 className="font-semibold text-gray-900 mb-2">Multi-Factor Auth</h3>
            <p className="text-sm text-gray-600">Advanced authentication</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your organization's size and financial analysis needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Professional"
            price="$299"
            period="month"
            description="Perfect for individual financial advisors and small firms"
            features={[
              "Up to 5 users",
              "Basic AI analytics",
              "Portfolio optimization",
              "Risk assessment",
              "Standard reporting",
              "Email support"
            ]}
          />
          <PricingTier
            name="Enterprise"
            price="$799"
            period="month"
            description="Most popular for mid-size financial institutions"
            features={[
              "Up to 25 users",
              "Advanced AI models",
              "Custom analytics",
              "Real-time data feeds",
              "API access",
              "Priority support",
              "Custom integrations"
            ]}
            popular={true}
          />
          <PricingTier
            name="Institutional"
            price="$1,999"
            period="month"
            description="For large financial institutions and corporations"
            features={[
              "Unlimited users",
              "Custom AI development",
              "White-label options",
              "Dedicated support",
              "On-premise deployment",
              "Advanced security",
              "Custom compliance"
            ]}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Analysis?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join leading financial institutions already using our AI-powered analytics platform to make smarter, data-driven decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Financial Analytics Inquiry"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}