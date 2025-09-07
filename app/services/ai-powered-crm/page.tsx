import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI-Powered CRM | Zion Tech Group',
  description: 'Revolutionary AI-powered CRM platform that automates customer interactions, predicts sales opportunities, and delivers personalized experiences at scale.',
  keywords: 'AI CRM, customer relationship management, sales automation, lead scoring, customer insights, AI-powered sales'
};

function FeatureCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingTier({ name, price, features, popular = false }: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${popular ? 'ring-2 ring-blue-500' : ''}`}>
      {popular && (
        <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
        popular 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
}

function TestimonialCard({ quote, author, role, company }: {
  quote: string;
  author: string;
  role: string;
  company: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-gray-600 mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}, {company}</p>
      </div>
    </div>
  );
}

export default function AIPoweredCRMPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI-Powered CRM
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your customer relationships with our AI-powered CRM platform.
          Automate interactions, predict opportunities, and deliver personalized
          experiences at scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="#demo"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Watch Demo
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leverage cutting-edge AI technology to automate and optimize your sales processes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="Intelligent Lead Scoring"
            description="AI-powered lead qualification with 95% accuracy"
            benefits={[
              "Predictive customer lifetime value analysis",
              "Automated lead nurturing sequences",
              "Real-time conversion probability scoring",
              "Behavioral pattern recognition"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Smart Sales Automation"
            description="Automated follow-up sequences based on behavior"
            benefits={[
              "AI-generated personalized email campaigns",
              "Intelligent meeting scheduling and reminders",
              "Dynamic pricing optimization",
              "Automated task assignment"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Predictive Analytics"
            description="Advanced forecasting with machine learning"
            benefits={[
              "Churn prediction and prevention strategies",
              "Revenue optimization recommendations",
              "Customer segmentation and targeting",
              "Sales pipeline forecasting"
            ]}
          />
          <FeatureCard
            icon="💡"
            title="Sales Intelligence"
            description="Real-time customer insights and behavior tracking"
            benefits={[
              "Competitive analysis and market intelligence",
              "Performance analytics and reporting",
              "Custom dashboard and KPI monitoring",
              "AI-powered sales coaching"
            ]}
          />
          <FeatureCard
            icon="🔄"
            title="Workflow Automation"
            description="Streamline repetitive tasks and processes"
            benefits={[
              "Automated data entry and updates",
              "Smart document generation",
              "Integration with existing tools",
              "Custom workflow creation"
            ]}
          />
          <FeatureCard
            icon="📱"
            title="Mobile-First Design"
            description="Access your CRM anywhere, anytime"
            benefits={[
              "Native mobile applications",
              "Offline data synchronization",
              "Push notifications and alerts",
              "Voice-to-text data entry"
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            price="$99"
            period="month"
            description="Perfect for small teams getting started with AI CRM"
            features={[
              "Up to 1,000 contacts",
              "Basic AI lead scoring",
              "Email automation",
              "Standard support",
              "Mobile app access"
            ]}
          />
          <PricingTier
            name="Professional"
            price="$299"
            period="month"
            description="Ideal for growing businesses with advanced needs"
            features={[
              "Up to 10,000 contacts",
              "Advanced AI analytics",
              "Custom workflows",
              "Priority support",
              "API access",
              "Advanced reporting"
            ]}
            popular={true}
          />
          <PricingTier
            name="Enterprise"
            price="$999"
            period="month"
            description="Complete solution for large organizations"
            features={[
              "Unlimited contacts",
              "Full AI suite",
              "Custom integrations",
              "Dedicated support",
              "White-label options",
              "Advanced security"
            ]}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how AI-powered CRM has transformed businesses across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The AI lead scoring has increased our conversion rates by 40%. It's like having a sales expert working 24/7."
            author="Sarah Johnson"
            role="Sales Director"
            company="TechCorp Solutions"
          />
          <TestimonialCard
            quote="The predictive analytics helped us identify high-value prospects we would have missed. ROI increased by 300%."
            author="Michael Chen"
            role="VP of Sales"
            company="GrowthTech Inc"
          />
          <TestimonialCard
            quote="Automation features saved us 20 hours per week. Our team can now focus on building relationships instead of data entry."
            author="Emily Rodriguez"
            role="Sales Manager"
            company="InnovateLabs"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Sales Process?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of businesses using our AI-powered CRM to boost sales and accelerate growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI CRM Demo Request"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Get Free Demo
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </section>
    </div>
  );
}
