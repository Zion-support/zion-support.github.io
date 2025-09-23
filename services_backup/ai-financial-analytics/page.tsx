import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI-Powered Financial Analytics Platform | Zion Tech Group',
  description: 'Advanced financial analytics with AI-driven insights, predictive modeling, risk assessment, and automated reporting. Make data-driven financial decisions with 95% accuracy predictions.',
  keywords: 'AI financial analytics, predictive modeling, risk assessment, financial forecasting, investment analysis, automated reporting'
};

export default function AIFinancialAnalyticsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-emerald-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI-Powered Financial Analytics
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your financial decision-making with AI-driven insights, predictive modeling, and automated risk assessment. 
          Our platform provides 95% accuracy in financial predictions and reduces analysis time by 80%.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Financial Analytics Platform Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Analysis
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Financial Intelligence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform analyzes complex financial data to provide actionable insights and predictions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="📈"
            title="Predictive Financial Modeling"
            description="Advanced machine learning models predict market trends, cash flow, and financial performance with 95% accuracy."
            benefits={[
              "95% prediction accuracy",
              "Real-time market analysis",
              "Cash flow forecasting",
              "Revenue optimization"
            ]}
          />
          <FeatureCard
            icon="⚠️"
            title="AI Risk Assessment"
            description="Comprehensive risk analysis using multiple data sources to identify potential financial threats and opportunities."
            benefits={[
              "Multi-factor risk analysis",
              "Early warning system",
              "Portfolio optimization",
              "Compliance monitoring"
            ]}
          />
          <FeatureCard
            icon="💰"
            title="Investment Intelligence"
            description="AI-powered investment recommendations based on market analysis, risk tolerance, and financial goals."
            benefits={[
              "Personalized recommendations",
              "Portfolio rebalancing",
              "Tax optimization",
              "Performance tracking"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Automated Financial Reporting"
            description="Generate comprehensive financial reports, compliance documents, and stakeholder presentations automatically."
            benefits={[
              "Real-time dashboards",
              "Regulatory compliance",
              "Custom report templates",
              "Automated distribution"
            ]}
          />
          <FeatureCard
            icon="🔍"
            title="Fraud Detection & Prevention"
            description="Advanced anomaly detection algorithms identify suspicious transactions and potential fraud in real-time."
            benefits={[
              "Real-time monitoring",
              "Pattern recognition",
              "False positive reduction",
              "Compliance reporting"
            ]}
          />
          <FeatureCard
            icon="📱"
            title="Mobile Financial Insights"
            description="Access critical financial data and insights on-the-go with our mobile-optimized dashboard."
            benefits={[
              "Real-time notifications",
              "Mobile dashboards",
              "Offline access",
              "Secure authentication"
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your financial analysis needs. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Starter"
            price="$199"
            period="per month"
            description="Perfect for small businesses and individuals"
            features={[
              "Up to $1M portfolio analysis",
              "Basic AI predictions",
              "Monthly reports",
              "Email support",
              "Mobile app access",
              "Standard data sources"
            ]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$499"
            period="per month"
            description="Most popular for growing businesses"
            features={[
              "Up to $10M portfolio analysis",
              "Advanced AI features",
              "Real-time monitoring",
              "Priority support",
              "API access",
              "Custom integrations",
              "Advanced reporting"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$1,299"
            period="per month"
            description="For large organizations and institutions"
            features={[
              "Unlimited portfolio analysis",
              "All AI features",
              "Custom AI models",
              "White-label options",
              "Dedicated support",
              "Custom data sources",
              "SLA guarantee"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Financial Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our AI-powered financial analytics has transformed businesses across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudy
            company="Investment Partners LLC"
            industry="Investment Management"
            result="40% improvement in portfolio returns"
            description="Implemented AI-powered investment recommendations and risk assessment, resulting in 40% better returns and 60% reduction in risk exposure."
            metrics={["40% better returns", "60% risk reduction", "80% faster analysis"]}
          />
          <CaseStudy
            company="Retail Finance Corp"
            industry="Retail Banking"
            result="70% reduction in fraud losses"
            description="Deployed AI fraud detection and risk assessment to identify suspicious transactions and prevent financial losses."
            metrics={["70% fraud reduction", "95% detection accuracy", "50% cost savings"]}
          />
          <CaseStudy
            company="Tech Startup Inc"
            industry="Technology"
            result="50% improvement in cash flow management"
            description="Used AI predictive modeling and automated reporting to optimize cash flow and improve financial planning."
            metrics={["50% better cash flow", "30% cost reduction", "90% accuracy in forecasts"]}
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built with Financial-Grade Security</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform meets the highest security standards for financial data protection and compliance.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "React", icon: "⚛️", description: "Frontend framework" },
            { name: "Python", icon: "🐍", description: "AI/ML backend" },
            { name: "PostgreSQL", icon: "🐘", description: "Primary database" },
            { name: "Redis", icon: "🔴", description: "Caching layer" },
            { name: "TensorFlow", icon: "🧠", description: "ML framework" },
            { name: "AWS", icon: "☁️", description: "Cloud platform" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
            { name: "Stripe", icon: "💳", description: "Payment processing" },
            { name: "Plaid", icon: "🏦", description: "Banking integration" },
            { name: "MongoDB", icon: "🍃", description: "Document store" },
            { name: "Grafana", icon: "📊", description: "Monitoring" }
          ].map((tech, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bank-Grade Security & Compliance</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your financial data is protected with enterprise-grade security and regulatory compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SecurityFeature
            icon="🔒"
            title="SOC 2 Type II"
            description="Certified security controls and processes"
          />
          <SecurityFeature
            icon="🛡️"
            title="256-bit SSL Encryption"
            description="End-to-end data encryption"
          />
          <SecurityFeature
            icon="📋"
            title="GDPR Compliant"
            description="Full data protection compliance"
          />
          <SecurityFeature
            icon="✅"
            title="PCI DSS Level 1"
            description="Highest payment security standard"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Analysis?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 200+ financial professionals using our AI platform to make smarter investment decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Financial Analytics Platform Demo"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Analysis
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
  title: 'AI Financial Analytics Platform | Zion Tech Group',
  description: 'Advanced financial analytics with AI-powered forecasting, risk assessment, and investment insights. Make data-driven financial decisions with 95% accuracy predictions.',
  keywords: 'AI financial analytics, financial forecasting, investment analysis, risk assessment, financial planning, portfolio optimization'
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
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

function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
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

function CaseStudy({ company, industry, result, description, metrics }: {
  company: string;
  industry: string;
  result: string;
  description: string;
  metrics: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{company}</h3>
        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{industry}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        <div className="text-sm">
          <span className="font-semibold text-green-600">Result: </span>
          <span className="text-gray-700">{result}</span>
        </div>
        <div className="space-y-1">
          {metrics.map((metric, index) => (
            <div key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
              {metric}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecurityFeature({ icon, title, description }: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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