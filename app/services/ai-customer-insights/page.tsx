export const metadata = { 
  title: 'AI Customer Insights Platform | Zion Tech Group',
  description: 'Transform customer data into actionable insights with our AI-powered analytics platform. Real-time sentiment analysis, predictive churn modeling, and automated customer journey mapping.'
};

export default function AICustomerInsightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Customer Insights Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform customer data into actionable insights with our AI-powered analytics platform. 
            Real-time sentiment analysis, predictive churn modeling, and automated customer journey mapping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon="🧠"
            title="Predictive Analytics"
            description="AI-powered customer behavior prediction and churn prevention"
            features={["Churn prediction models", "Lifetime value forecasting", "Purchase propensity scoring", "Risk assessment algorithms"]}
          />
          <FeatureCard
            icon="💬"
            title="Sentiment Analysis"
            description="Real-time analysis of customer feedback across all channels"
            features={["Social media monitoring", "Review sentiment tracking", "Support ticket analysis", "Brand mention alerts"]}
          />
          <FeatureCard
            icon="📊"
            title="Customer Journey Mapping"
            description="Automated visualization of customer touchpoints and interactions"
            features={["Journey visualization", "Touchpoint analysis", "Conversion optimization", "Funnel analytics"]}
          />
          <FeatureCard
            icon="🎯"
            title="Personalization Engine"
            description="AI-driven personalization for marketing and product recommendations"
            features={["Dynamic content", "Product recommendations", "Email personalization", "A/B testing automation"]}
          />
          <FeatureCard
            icon="📈"
            title="Real-time Dashboards"
            description="Live customer insights and performance metrics"
            features={["Live dashboards", "Custom reports", "Alert systems", "Mobile app"]}
          />
          <FeatureCard
            icon="🔍"
            title="Advanced Segmentation"
            description="Intelligent customer segmentation and targeting"
            features={["Behavioral segments", "Demographic analysis", "RFM modeling", "Cohort analysis"]}
          />
        </div>

        <PricingSection />
        <ContactSection />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, features }: { icon: string; title: string; description: string; features: string[] }) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-blue-100 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-blue-100">
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

function PricingSection() {
  return (
    <div className="bg-white rounded-2xl p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Starter"
          price="$299"
          period="month"
          description="Perfect for small businesses getting started with customer insights"
          features={["Up to 10,000 customers", "Basic sentiment analysis", "Standard dashboards", "Email support", "API access"]}
          popular={false}
        />
        <PricingCard
          name="Professional"
          price="$799"
          period="month"
          description="Advanced features for growing businesses"
          features={["Up to 100,000 customers", "Advanced AI models", "Custom dashboards", "Priority support", "Advanced segmentation", "Real-time alerts"]}
          popular={true}
        />
        <PricingCard
          name="Enterprise"
          price="Custom"
          period=""
          description="Full-scale solution for large organizations"
          features={["Unlimited customers", "Custom AI models", "White-label solution", "24/7 support", "Dedicated account manager", "On-premise deployment"]}
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
    <div className={`relative border-2 rounded-xl p-8 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
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
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
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
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Customer Insights?</h2>
      <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
        Contact our experts to discuss your specific needs and get a custom solution tailored to your business.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-blue-100">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}