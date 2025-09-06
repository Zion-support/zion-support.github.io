import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI-Powered CRM Platform | Zion Tech Group - Intelligent Customer Relationship Management',
  description: 'Revolutionary AI-powered CRM platform with predictive analytics, automated lead scoring, intelligent customer insights, and personalized engagement strategies.',
  keywords: 'AI CRM, customer relationship management, predictive analytics, lead scoring, customer insights, sales automation, marketing automation'
};

export default function AIPoweredCRMPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI-Powered CRM Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your customer relationships with our intelligent CRM platform. 
          Leverage AI to predict customer behavior, automate sales processes, and deliver personalized experiences at scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI-Powered CRM Platform Inquiry"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Demo & Pricing
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary AI Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered CRM goes beyond traditional customer management to deliver intelligent insights and automation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="Predictive Lead Scoring"
            description="AI algorithms analyze customer behavior patterns to score leads with 95% accuracy, helping your sales team focus on high-value prospects."
            features={[
              "Behavioral pattern analysis",
              "Real-time lead scoring",
              "Custom scoring models",
              "Integration with existing data",
              "Automated follow-up triggers"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Intelligent Automation"
            description="Automate repetitive tasks, email sequences, and follow-ups with AI that learns from your team's best practices."
            features={[
              "Smart email sequences",
              "Automated task creation",
              "Intelligent scheduling",
              "Workflow optimization",
              "Performance learning"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Advanced Analytics Dashboard"
            description="Comprehensive analytics with AI-powered insights, forecasting, and actionable recommendations for sales growth."
            features={[
              "Revenue forecasting",
              "Customer lifetime value",
              "Churn prediction",
              "Sales performance insights",
              "Custom reporting"
            ]}
          />
          <FeatureCard
            icon="💬"
            title="AI Chat Assistant"
            description="Intelligent chatbot that handles customer inquiries, qualifies leads, and provides instant support 24/7."
            features={[
              "Natural language processing",
              "Lead qualification",
              "Customer support automation",
              "Multi-language support",
              "Integration with knowledge base"
            ]}
          />
          <FeatureCard
            icon="🎨"
            title="Personalized Engagement"
            description="AI-driven personalization engine that creates tailored content, offers, and communication for each customer."
            features={[
              "Dynamic content generation",
              "Personalized recommendations",
              "Behavioral triggers",
              "A/B testing automation",
              "Cross-channel consistency"
            ]}
          />
          <FeatureCard
            icon="🔮"
            title="Predictive Analytics"
            description="Advanced machine learning models predict customer behavior, sales trends, and market opportunities."
            features={[
              "Customer behavior prediction",
              "Sales trend analysis",
              "Market opportunity identification",
              "Risk assessment",
              "Strategic recommendations"
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include our core AI features and 24/7 support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Starter"
            price="$99"
            period="per month"
            description="Perfect for small businesses getting started with AI-powered CRM"
            features={[
              "Up to 1,000 contacts",
              "Basic AI lead scoring",
              "Email automation",
              "Standard analytics",
              "Email support",
              "Mobile app access"
            ]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$299"
            period="per month"
            description="Ideal for growing businesses that need advanced AI features"
            features={[
              "Up to 10,000 contacts",
              "Advanced AI analytics",
              "Predictive lead scoring",
              "AI chat assistant",
              "Custom integrations",
              "Priority support",
              "Advanced reporting"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$799"
            period="per month"
            description="Complete solution for large organizations with custom requirements"
            features={[
              "Unlimited contacts",
              "Full AI suite",
              "Custom AI models",
              "White-label options",
              "Dedicated support",
              "Custom integrations",
              "Advanced security",
              "SLA guarantee"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our clients see significant improvements in sales performance and customer satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatCard
            number="47%"
            label="Increase in Sales Conversion"
            description="Average improvement in lead-to-customer conversion rates"
          />
          <StatCard
            number="35%"
            label="Reduction in Sales Cycle"
            description="Faster deal closure with AI-powered insights"
          />
          <StatCard
            number="89%"
            label="Customer Satisfaction Score"
            description="Higher satisfaction through personalized experiences"
          />
          <StatCard
            number="$2.3M"
            label="Average Revenue Increase"
            description="Additional revenue generated per client annually"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Sales Process?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Schedule a personalized demo and see how our AI-powered CRM can revolutionize your customer relationships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI-Powered CRM Demo Request"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Free Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
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
    <div className={`p-8 rounded-lg border-2 ${popular ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={`mailto:kleber@ziontechgroup.com?subject=AI-Powered CRM - ${name} Plan Inquiry`}
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function StatCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl font-bold text-purple-600 mb-2">{number}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{label}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}