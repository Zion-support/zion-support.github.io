export const metadata = {
  title: 'AI Project Management Suite | Zion Tech Group',
  description: 'Intelligent project management with AI-powered task automation, resource optimization, risk prediction, and smart scheduling for enhanced team productivity.',
  keywords: 'AI project management, task automation, resource optimization, risk prediction, team productivity, project planning AI'
};

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({ name, price, period, description, features, popular = false, cta }: PricingTierProps) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
        popular 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
      }`}>
        {cta}
      </button>
    </div>
  );
}

export default function AIProjectManagementSuitePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Project Management Suite
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent project management with AI-powered task automation, resource optimization, risk prediction, and smart scheduling for enhanced team productivity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Task Automation
          </h3>
          <p className="text-gray-600">
            AI-powered task automation to streamline workflows and reduce manual effort.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Resource Optimization
          </h3>
          <p className="text-gray-600">
            Optimize resource allocation and team productivity using AI-driven insights.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">⚠️</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Risk Prediction
          </h3>
          <p className="text-gray-600">
            Identify and mitigate project risks before they impact delivery using predictive analytics.
          </p>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Pricing Plans
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Choose the plan that fits your project management needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            name="Starter"
            price="$49"
            period="month"
            description="Perfect for small teams getting started with AI project management"
            features={[
              "Up to 5 projects",
              "Basic AI features",
              "Task automation",
              "Email support"
            ]}
            cta="Get Started"
          />
          
          <PricingTier
            name="Professional"
            price="$149"
            period="month"
            description="Ideal for growing teams with complex project requirements"
            features={[
              "Up to 25 projects",
              "Advanced AI features",
              "Resource optimization",
              "Priority support",
              "Risk prediction"
            ]}
            popular={true}
            cta="Get Started"
          />
          
          <PricingTier
            name="Enterprise"
            price="Custom"
            period="month"
            description="Tailored solutions for large organizations"
            features={[
              "Unlimited projects",
              "Custom AI models",
              "White-label options",
              "24/7 dedicated support",
              "API integration"
            ]}
            cta="Contact Sales"
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Project Management?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your project management needs and implement AI-powered solutions.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}