import React from 'react';

export const metadata = {
  title: 'AI Financial Analytics | Zion Tech Group - Intelligent Financial Intelligence Platform',
  description: 'Revolutionary AI-powered financial analytics platform with predictive modeling, risk assessment, investment optimization, and real-time market intelligence.',
  keywords: 'AI financial analytics, financial intelligence, predictive finance, investment AI, risk assessment, financial modeling, market analysis'
};

export default function AIFinancialAnalyticsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Financial Analytics
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your financial decision-making with AI-powered analytics. 
          Predict market trends, optimize investments, and manage risk with unprecedented accuracy and speed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Financial Analytics Inquiry"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Get Financial Intelligence Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Financial Intelligence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform processes millions of data points to deliver actionable financial insights and predictions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="📈"
            title="Predictive Market Analysis"
            description="Advanced machine learning models analyze market data to predict trends, volatility, and investment opportunities with 87% accuracy."
            features={[
              "Real-time market scanning",
              "Trend prediction algorithms",
              "Volatility forecasting",
              "Sector analysis",
              "Risk-return optimization"
            ]}
          />
          <FeatureCard
            icon="🎯"
            title="Portfolio Optimization"
            description="AI-driven portfolio management that automatically rebalances assets based on market conditions and risk tolerance."
            features={[
              "Dynamic rebalancing",
              "Risk-adjusted returns",
              "Diversification optimization",
              "Tax-loss harvesting",
              "Performance attribution"
            ]}
          />
          <FeatureCard
            icon="⚠️"
            title="Risk Assessment Engine"
            description="Comprehensive risk analysis using multiple models to identify potential threats and opportunities in real-time."
            features={[
              "Credit risk modeling",
              "Market risk assessment",
              "Liquidity analysis",
              "Stress testing",
              "Scenario analysis"
            ]}
          />
          <FeatureCard
            icon="💰"
            title="Alternative Data Integration"
            description="Incorporate satellite imagery, social sentiment, news analysis, and other alternative data sources for superior insights."
            features={[
              "Satellite data analysis",
              "Sentiment analysis",
              "News impact scoring",
              "Social media monitoring",
              "Economic indicators"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Automated Trading Signals"
            description="AI-generated trading signals with backtesting capabilities and real-time execution recommendations."
            features={[
              "Signal generation",
              "Backtesting engine",
              "Performance tracking",
              "Risk management",
              "Execution optimization"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Regulatory Compliance"
            description="Automated compliance monitoring and reporting to ensure adherence to financial regulations and standards."
            features={[
              "Regulatory reporting",
              "Compliance monitoring",
              "Audit trail generation",
              "Risk limit tracking",
              "Documentation automation"
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment-Grade Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional-grade financial analytics with transparent pricing and no hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Professional"
            price="$2,500"
            period="per month"
            description="Perfect for financial advisors and wealth managers"
            features={[
              "Up to 100 portfolios",
              "Basic AI analytics",
              "Market predictions",
              "Risk assessment",
              "Email support",
              "Standard reporting"
            ]}
            popular={false}
          />
          <PricingCard
            name="Institutional"
            price="$7,500"
            period="per month"
            description="Ideal for hedge funds and investment firms"
            features={[
              "Unlimited portfolios",
              "Advanced AI models",
              "Alternative data",
              "Custom strategies",
              "Priority support",
              "API access",
              "White-label options"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$25,000"
            period="per month"
            description="Complete solution for large financial institutions"
            features={[
              "Custom AI development",
              "Dedicated support team",
              "On-premise deployment",
              "Advanced security",
              "Custom integrations",
              "SLA guarantee",
              "Training & consulting"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Performance</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI financial analytics platform has consistently outperformed traditional methods across various metrics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <MetricCard
            number="87%"
            label="Prediction Accuracy"
            description="Average accuracy of market trend predictions over 12 months"
          />
          <MetricCard
            number="23%"
            label="Excess Returns"
            description="Average outperformance compared to benchmark indices"
          />
          <MetricCard
            number="45%"
            label="Risk Reduction"
            description="Average reduction in portfolio volatility through optimization"
          />
          <MetricCard
            number="$2.8B"
            label="Assets Under Analysis"
            description="Total assets currently being analyzed by our platform"
          />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI financial analytics platform serves diverse financial institutions and investment professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UseCaseCard
            icon="🏦"
            title="Investment Banks"
            description="Equity research, M&A analysis, and trading desk optimization"
            benefits={[
              "Enhanced research accuracy",
              "Faster deal analysis",
              "Improved trading performance",
              "Risk management"
            ]}
          />
          <UseCaseCard
            icon="💼"
            title="Hedge Funds"
            description="Alpha generation, risk management, and portfolio optimization"
            benefits={[
              "Alpha identification",
              "Risk-adjusted returns",
              "Market timing",
              "Strategy optimization"
            ]}
          />
          <UseCaseCard
            icon="👥"
            title="Wealth Management"
            description="Client portfolio management and financial planning"
            benefits={[
              "Personalized strategies",
              "Goal-based investing",
              "Tax optimization",
              "Client reporting"
            ]}
          />
          <UseCaseCard
            icon="🏢"
            title="Asset Managers"
            description="Fund management and performance attribution"
            benefits={[
              "Performance enhancement",
              "Risk control",
              "Benchmark beating",
              "Cost optimization"
            ]}
          />
          <UseCaseCard
            icon="🏛️"
            title="Central Banks"
            description="Monetary policy analysis and economic forecasting"
            benefits={[
              "Economic modeling",
              "Policy impact analysis",
              "Market stability",
              "Crisis prediction"
            ]}
          />
          <UseCaseCard
            icon="🏪"
            title="Retail Banks"
            description="Credit risk assessment and loan optimization"
            benefits={[
              "Credit scoring",
              "Default prediction",
              "Pricing optimization",
              "Regulatory compliance"
            ]}
          />
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your Investment ROI</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how AI financial analytics can improve your investment performance and reduce costs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Without AI Analytics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Portfolio value:</span>
                  <span className="font-semibold">$10M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual return:</span>
                  <span className="font-semibold">8.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Management fees:</span>
                  <span className="font-semibold">1.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Research costs:</span>
                  <span className="font-semibold">$200K</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Net Annual Return:</span>
                    <span className="text-red-600">6.5%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">With AI Analytics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Portfolio value:</span>
                  <span className="font-semibold">$10M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Enhanced return:</span>
                  <span className="font-semibold text-green-600">11.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI platform cost:</span>
                  <span className="font-semibold text-red-600">$90K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reduced research:</span>
                  <span className="font-semibold text-green-600">-$100K</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Net Annual Return:</span>
                    <span className="text-green-600">10.1%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="bg-emerald-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Additional Annual Value</h3>
              <div className="text-3xl font-bold text-emerald-600">$360,000</div>
              <p className="text-emerald-700">3.6% improvement in net returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Intelligence?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Schedule a personalized demo and discover how AI can revolutionize your financial decision-making.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Financial Analytics - Demo Request"
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
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

function FeatureCard({ icon, title, description, features }: {
  icon: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`p-8 rounded-lg border-2 ${popular ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 bg-white'} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={`mailto:kleber@ziontechgroup.com?subject=AI Financial Analytics - ${name} Plan Inquiry`}
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
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
    <div className="text-center p-6">
      <div className="text-4xl font-bold text-emerald-600 mb-2">{number}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{label}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function UseCaseCard({ icon, title, description, benefits }: {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}