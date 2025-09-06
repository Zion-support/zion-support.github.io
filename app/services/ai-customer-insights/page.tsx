import Link from 'next/link';

export const metadata = { 
  title: 'AI Customer Insights | Zion Tech Group',
  description: 'AI-powered customer analytics platform. Understand customer behavior, predict churn, and optimize customer experience.',
};

export default function AICustomerInsightsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Customer Insights</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered customer analytics platform that helps you understand customer behavior, 
          predict churn, and optimize customer experience with actionable insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard 
          title="Behavioral Analytics" 
          details={[
            "Customer journey mapping",
            "Behavior pattern analysis",
            "Engagement scoring",
            "Cohort analysis",
            "Real-time activity tracking"
          ]} 
        />
        <FeatureCard 
          title="Predictive Intelligence" 
          details={[
            "Churn prediction models",
            "Lifetime value forecasting",
            "Purchase probability scoring",
            "Next best action recommendations",
            "Risk assessment algorithms"
          ]} 
        />
        <FeatureCard 
          title="Insights & Actions" 
          details={[
            "Automated insights generation",
            "Personalization recommendations",
            "A/B testing suggestions",
            "Retention campaign triggers",
            "ROI optimization guidance"
          ]} 
        />
      </div>

      <PricingSection />
      
      <div className="mt-16 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Understand Your Customers?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Unlock the power of AI to understand your customers better and drive growth. 
          Perfect for e-commerce, SaaS, and customer-centric businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+13024640950" 
            className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            className="border-2 border-violet-600 text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-violet-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-violet-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingPlan 
          name="Starter" 
          price="$99/mo" 
          features={[
            "Up to 10,000 customers",
            "Basic behavioral analytics",
            "Monthly insights reports",
            "Email support",
            "Standard integrations"
          ]} 
        />
        <PricingPlan 
          name="Professional" 
          price="$299/mo" 
          features={[
            "Up to 100,000 customers",
            "Advanced predictive models",
            "Real-time insights dashboard",
            "Priority support",
            "Custom model training"
          ]} 
          featured={true}
        />
        <PricingPlan 
          name="Enterprise" 
          price="$799/mo" 
          features={[
            "Unlimited customers",
            "Custom AI models",
            "White-label solution",
            "Dedicated data scientist",
            "API access & custom integrations"
          ]} 
        />
      </div>
    </div>
  );
}

function PricingPlan({ 
  name, 
  price, 
  features, 
  featured = false 
}: { 
  name: string; 
  price: string; 
  features: string[]; 
  featured?: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${
      featured 
        ? 'border-violet-500 bg-violet-50 shadow-lg' 
        : 'border-gray-200 bg-white shadow-sm'
    }`}>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-violet-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? 'bg-violet-600 text-white hover:bg-violet-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}