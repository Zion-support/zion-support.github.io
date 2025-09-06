export const metadata = { 
  title: 'AI Predictive Analytics | Zion Tech Group',
  description: 'Advanced predictive analytics platform with machine learning models for forecasting, risk assessment, and business intelligence. Transform data into actionable predictions.'
};

export default function AIPredictiveAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Predictive Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced predictive analytics platform with machine learning models for forecasting, 
            risk assessment, and business intelligence. Transform data into actionable predictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon="🔮"
            title="Forecasting Models"
            description="Accurate predictions for sales, demand, and market trends"
            features={["Time series forecasting", "Seasonal analysis", "Trend prediction", "Confidence intervals"]}
          />
          <FeatureCard
            icon="📊"
            title="Risk Assessment"
            description="Identify and quantify business risks with AI-powered analysis"
            features={["Credit risk modeling", "Fraud detection", "Market risk analysis", "Operational risk"]}
          />
          <FeatureCard
            icon="🎯"
            title="Customer Analytics"
            description="Predict customer behavior and optimize marketing strategies"
            features={["Churn prediction", "Lifetime value", "Purchase propensity", "Segmentation"]}
          />
          <FeatureCard
            icon="⚡"
            title="Real-time Processing"
            description="Process and analyze data in real-time for instant insights"
            features={["Stream processing", "Live dashboards", "Instant alerts", "Auto-scaling"]}
          />
          <FeatureCard
            icon="🧠"
            title="Machine Learning"
            description="Advanced ML algorithms that improve with more data"
            features={["AutoML", "Model training", "A/B testing", "Performance monitoring"]}
          />
          <FeatureCard
            icon="📈"
            title="Business Intelligence"
            description="Comprehensive BI tools for data visualization and reporting"
            features={["Interactive dashboards", "Custom reports", "Data exploration", "Export capabilities"]}
          />
        </div>

        <IndustriesSection />
        <PricingSection />
        <ContactSection />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, features }: { icon: string; title: string; description: string; features: string[] }) {
  return (
    <div className="bg-gradient-to-br from-teal-600 to-cyan-600 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-teal-100 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-teal-100">
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

function IndustriesSection() {
  const industries = [
    {
      title: "Retail & E-commerce",
      description: "Demand forecasting, inventory optimization, and customer analytics",
      icon: "🛍️",
      useCases: ["Sales forecasting", "Inventory management", "Price optimization", "Customer segmentation"]
    },
    {
      title: "Financial Services",
      description: "Risk assessment, fraud detection, and credit scoring",
      icon: "🏦",
      useCases: ["Credit risk modeling", "Fraud prevention", "Market analysis", "Portfolio optimization"]
    },
    {
      title: "Healthcare",
      description: "Patient outcome prediction and resource optimization",
      icon: "🏥",
      useCases: ["Patient risk scoring", "Resource planning", "Treatment outcomes", "Epidemic modeling"]
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance and quality control",
      icon: "🏭",
      useCases: ["Equipment maintenance", "Quality prediction", "Supply chain optimization", "Production planning"]
    },
    {
      title: "Real Estate",
      description: "Property valuation and market trend analysis",
      icon: "🏠",
      useCases: ["Property valuation", "Market forecasting", "Investment analysis", "Rent prediction"]
    },
    {
      title: "Marketing",
      description: "Campaign optimization and customer lifetime value",
      icon: "📢",
      useCases: ["Campaign ROI prediction", "Customer LTV", "Churn prevention", "Ad optimization"]
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Industry Applications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">{industry.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
            <p className="text-gray-600 mb-4">{industry.description}</p>
            <ul className="space-y-2">
              {industry.useCases.map((useCase, useCaseIndex) => (
                <li key={useCaseIndex} className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {useCase}
                </li>
              ))}
            </ul>
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
          price="$399"
          period="month"
          description="Basic predictive analytics for small businesses"
          features={["Up to 1M data points", "5 ML models", "Basic dashboards", "Email support", "API access"]}
          popular={false}
        />
        <PricingCard
          name="Professional"
          price="$999"
          period="month"
          description="Advanced analytics for growing businesses"
          features={["Up to 10M data points", "Unlimited models", "Advanced dashboards", "Priority support", "Real-time processing", "Custom integrations"]}
          popular={true}
        />
        <PricingCard
          name="Enterprise"
          price="Custom"
          period=""
          description="Full-scale solution for large organizations"
          features={["Unlimited data points", "Custom ML models", "White-label solution", "24/7 support", "Dedicated team", "On-premise deployment"]}
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
    <div className={`relative border-2 rounded-xl p-8 ${popular ? 'border-teal-500 bg-teal-50' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
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
            ? 'bg-teal-600 text-white hover:bg-teal-700' 
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
    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 rounded-2xl text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Ready to Predict the Future?</h2>
      <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
        Contact our predictive analytics experts to discuss your data challenges and get a custom solution.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-white text-teal-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-teal-100">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}