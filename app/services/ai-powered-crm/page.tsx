import React from 'react';
import Link from 'next/link';
import FeatureCard from '../../components/FeatureCard';
import PricingTier from '../../components/PricingTier';
import TestimonialCard from '../../components/TestimonialCard';

export const metadata = {
  title: 'AI-Powered CRM Platform | Zion Tech Group',
  description: 'Revolutionary CRM with AI-powered lead scoring, automated follow-ups, predictive analytics, and intelligent sales insights. Boost conversion rates by 40% with our smart CRM solution.',
  keywords: 'AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, sales intelligence'
};

export default function AIPoweredCRMPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI-Powered CRM Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your sales process with intelligent automation, predictive analytics, and AI-driven insights. 
          Our CRM platform increases conversion rates by 40% and reduces sales cycle time by 60%.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI CRM Platform Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Demo
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary AI Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered CRM goes beyond traditional customer management to provide intelligent insights and automation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="AI Lead Scoring"
            description="Machine learning algorithms analyze customer behavior, engagement patterns, and demographic data to score leads with 95% accuracy. Features real-time lead prioritization, behavioral pattern analysis, and custom scoring models."
            color="blue"
          />
          <FeatureCard
            icon="🤖"
            title="Automated Follow-ups"
            description="AI-powered email sequences and call scheduling based on customer behavior and optimal timing predictions. Includes personalized email sequences, multi-channel automation, and A/B testing for optimization."
            color="purple"
          />
          <FeatureCard
            icon="📊"
            title="Predictive Analytics"
            description="Advanced analytics predict customer lifetime value, churn risk, and sales opportunities with actionable insights. Delivers churn prediction with 90% accuracy, lifetime value forecasting, and revenue forecasting."
            color="green"
          />
          <FeatureCard
            icon="💬"
            title="AI Chat Assistant"
            description="Intelligent chatbot handles initial customer inquiries, qualifies leads, and schedules meetings automatically. Provides 24/7 customer support, lead qualification, and multi-language support."
            color="red"
          />
          <FeatureCard
            icon="📈"
            title="Sales Intelligence"
            description="AI analyzes sales calls, emails, and meetings to provide insights on customer sentiment and deal progression. Includes call sentiment analysis, deal progression tracking, and performance insights."
            color="yellow"
          />
          <FeatureCard
            icon="🔄"
            title="Workflow Automation"
            description="Smart automation handles repetitive tasks, data entry, and follow-up processes to increase team productivity. Features task automation, data synchronization, and process optimization."
            color="indigo"
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business size and needs. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            price="$299"
            period="per month"
            description="Perfect for small teams and startups"
            features={[
              "Up to 1,000 contacts",
              "AI lead scoring",
              "Basic automation",
              "Email integration",
              "Mobile app access",
              "Email support"
            ]}
            isPopular={false}
            buttonText="Get Started"
            buttonHref="mailto:kleber@ziontechgroup.com?subject=AI CRM Platform - Starter Plan"
          />
          <PricingTier
            name="Professional"
            price="$599"
            period="per month"
            description="Most popular for growing businesses"
            features={[
              "Up to 10,000 contacts",
              "Advanced AI features",
              "Predictive analytics",
              "Custom workflows",
              "API access",
              "Priority support",
              "Advanced reporting"
            ]}
            isPopular={true}
            buttonText="Get Started"
            buttonHref="mailto:kleber@ziontechgroup.com?subject=AI CRM Platform - Professional Plan"
          />
          <PricingTier
            name="Enterprise"
            price="$1,299"
            period="per month"
            description="For large organizations"
            features={[
              "Unlimited contacts",
              "All AI features",
              "Custom AI models",
              "White-label options",
              "Dedicated support",
              "Custom integrations",
              "SLA guarantee"
            ]}
            isPopular={false}
            buttonText="Get Started"
            buttonHref="mailto:kleber@ziontechgroup.com?subject=AI CRM Platform - Enterprise Plan"
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our AI-powered CRM has transformed businesses across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">TechStart Inc.</h3>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">SaaS</span>
            </div>
            <p className="text-gray-600 mb-4">Implemented AI lead scoring and automated follow-ups, resulting in 40% higher conversion rates and 50% reduction in sales cycle time.</p>
            <div className="space-y-2">
              <div className="text-sm">
                <span className="font-semibold text-green-600">Result: </span>
                <span className="text-gray-700">40% increase in conversion rates</span>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  40% conversion increase
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  50% faster sales cycle
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  60% more qualified leads
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">RetailCorp</h3>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">E-commerce</span>
            </div>
            <p className="text-gray-600 mb-4">Used predictive analytics to identify at-risk customers and implemented targeted retention campaigns.</p>
            <div className="space-y-2">
              <div className="text-sm">
                <span className="font-semibold text-green-600">Result: </span>
                <span className="text-gray-700">35% boost in customer retention</span>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  35% retention boost
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  25% increase in LTV
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  45% reduction in churn
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">FinancePro</h3>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Financial Services</span>
            </div>
            <p className="text-gray-600 mb-4">Deployed AI-powered sales intelligence and workflow automation to streamline their sales process.</p>
            <div className="space-y-2">
              <div className="text-sm">
                <span className="font-semibold text-green-600">Result: </span>
                <span className="text-gray-700">60% improvement in sales efficiency</span>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  60% efficiency gain
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  30% more deals closed
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  80% time saved on admin
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built with Modern Technology</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform is built on enterprise-grade technology for reliability, security, and scalability.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "React", icon: "⚛️", description: "Frontend framework" },
            { name: "Node.js", icon: "🟢", description: "Backend runtime" },
            { name: "PostgreSQL", icon: "🐘", description: "Primary database" },
            { name: "Redis", icon: "🔴", description: "Caching layer" },
            { name: "OpenAI GPT-4", icon: "🧠", description: "AI engine" },
            { name: "AWS", icon: "☁️", description: "Cloud platform" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
            { name: "Stripe", icon: "💳", description: "Payment processing" },
            { name: "Twilio", icon: "📱", description: "Communication" },
            { name: "MongoDB", icon: "🍃", description: "Document store" },
            { name: "Elasticsearch", icon: "🔍", description: "Search engine" }
          ].map((tech, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Sales Process?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 500+ companies using our AI-powered CRM to boost sales performance and customer satisfaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI CRM Platform Demo Request"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Free Demo
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
