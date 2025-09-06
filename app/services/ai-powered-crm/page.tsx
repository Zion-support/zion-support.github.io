import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI-Powered CRM Platform | Zion Tech Group',
  description: 'Revolutionary CRM with AI-powered lead scoring, automated follow-ups, predictive analytics, and intelligent sales insights. Boost conversion rates by 40% with our smart CRM solution.',
  keywords: 'AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, sales intelligence'
  description: 'Revolutionary CRM with AI-driven insights, predictive analytics, and automated lead scoring. Boost sales by 40% with intelligent customer relationship management.',
  keywords: 'AI CRM, customer relationship management, sales automation, lead scoring, predictive analytics, sales intelligence'
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
        href="mailto:kleber@ziontechgroup.com?subject=AI CRM Platform - {name} Plan"
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
          Revolutionize your sales process with intelligent CRM that learns from your data, predicts customer behavior, 
          and automates follow-ups. Boost sales by 40% with AI-driven insights and automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI CRM Platform Demo"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary AI Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered CRM goes beyond traditional customer management to provide intelligent insights and automation.
            Our AI-powered CRM goes beyond traditional customer management with intelligent automation and predictive insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="AI Lead Scoring"
            description="Machine learning algorithms analyze customer behavior, engagement patterns, and demographic data to score leads with 95% accuracy."
            benefits={[
              "95% scoring accuracy",
              "Real-time lead prioritization",
              "Behavioral pattern analysis",
            icon="🧠"
            title="AI Lead Scoring"
            description="Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns and engagement history."
            benefits={[
              "Real-time lead scoring",
              "Behavioral pattern analysis",
              "Engagement prediction",
              "Priority recommendations",
              "Custom scoring models"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Automated Follow-ups"
            description="AI-powered email sequences and call scheduling based on customer behavior and optimal timing predictions."
            benefits={[
              "Personalized email sequences",
              "Optimal timing predictions",
              "Multi-channel automation",
              "A/B testing for optimization"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Predictive Analytics"
            description="Advanced analytics predict customer lifetime value, churn risk, and sales opportunities with actionable insights."
            benefits={[
              "Churn prediction (90% accuracy)",
              "Lifetime value forecasting",
              "Sales opportunity scoring",
              "Revenue forecasting"
            icon="📊"
            title="Predictive Analytics"
            description="Forecast sales outcomes, identify upsell opportunities, and predict customer churn with advanced AI models."
            benefits={[
              "Sales forecasting",
              "Churn prediction",
              "Upsell identification",
              "Revenue optimization",
              "Trend analysis"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Automated Follow-ups"
            description="AI-powered email sequences and task automation that adapts to customer responses and engagement levels."
            benefits={[
              "Smart email sequences",
              "Response-based automation",
              "Optimal timing detection",
              "Personalized content",
              "A/B testing automation"
            ]}
          />
          <FeatureCard
            icon="💬"
            title="AI Chat Assistant"
            description="Intelligent chatbot handles initial customer inquiries, qualifies leads, and schedules meetings automatically."
            benefits={[
              "24/7 customer support",
              "Lead qualification",
              "Meeting scheduling",
              "Multi-language support"
            ]}
          />
          <FeatureCard
            icon="📈"
            title="Sales Intelligence"
            description="AI analyzes sales calls, emails, and meetings to provide insights on customer sentiment and deal progression."
            benefits={[
              "Call sentiment analysis",
              "Deal progression tracking",
            title="Conversation Intelligence"
            description="Analyze call recordings, emails, and meetings to extract insights and improve sales performance."
            benefits={[
              "Call transcription & analysis",
              "Sentiment analysis",
              "Key phrase detection",
              "Coaching recommendations",
              "Performance insights"
            ]}
          />
          <FeatureCard
            icon="🔄"
            title="Workflow Automation"
            description="Smart automation handles repetitive tasks, data entry, and follow-up processes to increase team productivity."
            benefits={[
              "Task automation",
              "Data synchronization",
              "Process optimization",
              "Team productivity boost"
            icon="🎯"
            title="Smart Segmentation"
            description="Automatically segment customers based on behavior, preferences, and predicted lifetime value."
            benefits={[
              "Dynamic segmentation",
              "Behavioral clustering",
              "Value-based grouping",
              "Custom segment rules",
              "Real-time updates"
            ]}
          />
          <FeatureCard
            icon="📈"
            title="Performance Optimization"
            description="AI-driven recommendations to improve sales processes, team performance, and customer satisfaction."
            benefits={[
              "Process optimization",
              "Team performance insights",
              "Best practice recommendations",
              "ROI tracking",
              "Success metrics"
            ]}
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
          <PricingCard
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
            popular={false}
          />
          <PricingCard
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
            popular={true}
          />
          <PricingCard
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
            popular={false}
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
          <CaseStudy
            company="TechStart Inc."
            industry="SaaS"
            result="40% increase in conversion rates"
            description="Implemented AI lead scoring and automated follow-ups, resulting in 40% higher conversion rates and 50% reduction in sales cycle time."
            metrics={["40% conversion increase", "50% faster sales cycle", "60% more qualified leads"]}
          />
          <CaseStudy
            company="RetailCorp"
            industry="E-commerce"
            result="35% boost in customer retention"
            description="Used predictive analytics to identify at-risk customers and implemented targeted retention campaigns."
            metrics={["35% retention boost", "25% increase in LTV", "45% reduction in churn"]}
          />
          <CaseStudy
            company="FinancePro"
            industry="Financial Services"
            result="60% improvement in sales efficiency"
            description="Deployed AI-powered sales intelligence and workflow automation to streamline their sales process."
            metrics={["60% efficiency gain", "30% more deals closed", "80% time saved on admin"]}
          />
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

function FeatureCard({ icon, title, description, benefits }: {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
<div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
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
href="mailto:kleber@ziontechgroup.com?subject=AI CRM Platform - {name} Plan"
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

      {/* ROI Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered CRM delivers measurable improvements across all key sales metrics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Increase in Sales</div>
            <div className="text-sm text-gray-600">Average improvement in sales performance</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Faster Lead Response</div>
            <div className="text-sm text-gray-600">Reduction in response time to leads</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">35%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Higher Conversion</div>
            <div className="text-sm text-gray-600">Improvement in lead-to-customer conversion</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">50%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Time Saved</div>
            <div className="text-sm text-gray-600">Reduction in manual administrative tasks</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your team size and business needs. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            price="$99"
            period="user/month"
            description="Perfect for small teams getting started with AI CRM"
            features={[
              "Up to 5 users",
              "AI lead scoring",
              "Basic automation",
              "Email integration",
              "Mobile app access",
              "Standard support"
            ]}
          />
          <PricingTier
            name="Professional"
            price="$199"
            period="user/month"
            description="Most popular for growing sales teams"
            features={[
              "Up to 25 users",
              "Advanced AI features",
              "Predictive analytics",
              "Conversation intelligence",
              "Custom integrations",
              "Priority support",
              "Advanced reporting"
            ]}
            popular={true}
          />
          <PricingTier
            name="Enterprise"
            price="$399"
            period="user/month"
            description="For large organizations with complex needs"
            features={[
              "Unlimited users",
              "Full AI suite",
              "Custom AI models",
              "Dedicated support",
              "White-label options",
              "Advanced security",
              "Custom development"
            ]}
          />
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with your existing tools and workflows for a unified sales experience.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "Salesforce", icon: "☁️" },
            { name: "HubSpot", icon: "🟠" },
            { name: "Slack", icon: "💬" },
            { name: "Microsoft Teams", icon: "🔵" },
            { name: "Gmail", icon: "📧" },
            { name: "Outlook", icon: "📮" },
            { name: "Zoom", icon: "📹" },
            { name: "Calendly", icon: "📅" },
            { name: "Stripe", icon: "💳" },
            { name: "QuickBooks", icon: "📊" },
            { name: "Mailchimp", icon: "📬" },
            { name: "Zapier", icon: "⚡" }
          ].map((integration, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">{integration.icon}</div>
              <h3 className="font-semibold text-gray-900 text-sm">{integration.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Sales Process?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join hundreds of companies already using our AI-powered CRM to boost sales and improve customer relationships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI CRM Platform Inquiry"
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
