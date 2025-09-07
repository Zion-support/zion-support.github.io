<<<<<<< HEAD
<<<<<<< HEAD
export const metadata = { title: 'AI Marketing Automation | Zion Tech Group' };

export default function AIMarketingAutomationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Marketing Automation Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent marketing automation with AI-powered personalization,
          predictive analytics, and automated campaign optimization to maximize
          ROI and customer engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="AI-Powered Campaigns"
          features={[
            'Automated email marketing sequences',
            'Social media content generation',
            'Personalized ad targeting',
            'A/B testing optimization',
            'Cross-channel campaign orchestration',
            'Real-time campaign adjustments',
          ]}
          icon="📧"
        />
        <FeatureCard
          title="Customer Segmentation"
          features={[
            'AI-driven customer profiling',
            'Behavioral segmentation',
            'Predictive customer scoring',
            'Dynamic audience creation',
            'Lifecycle stage identification',
            'Churn prediction & prevention',
          ]}
          icon="🎯"
        />
        <FeatureCard
          title="Analytics & Optimization"
          features={[
            'Real-time performance tracking',
            'ROI analysis & attribution',
            'Predictive analytics & forecasting',
            'Automated optimization recommendations',
            'Customer journey mapping',
            'Competitive intelligence',
          ]}
          icon="📊"
        />
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Marketing Automation Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              300% ROI Increase
            </h3>
            <p className="text-gray-600">
              AI optimization boosts marketing returns
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              75% Time Savings
            </h3>
            <p className="text-gray-600">
              Automated workflows reduce manual tasks
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              45% Higher Engagement
            </h3>
            <p className="text-gray-600">
              Personalized content drives better results
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              50% Cost Reduction
            </h3>
            <p className="text-gray-600">
              Efficient automation reduces ad spend waste
            </p>
          </div>
        </div>
      </div>

      <PricingSection />

      <ContactSection />
=======
import React from 'react';

=======
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
export const metadata = {
  title: 'Ai Marketing Automation | Zion Tech Group',
  description: 'Professional ai marketing automation services for your business needs.',
  keywords: 'ai-marketing-automation, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ai Marketing Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional ai marketing automation services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
          <FeatureCard
            icon="🎯"
            title="AI-Powered Personalization"
            description="Machine learning algorithms analyze customer behavior to deliver highly personalized content, offers, and experiences."
            benefits={[
              "Real-time personalization",
              "Behavioral analysis",
              "Dynamic content",
              "Cross-channel consistency"
            ]}
          />
          <FeatureCard
            icon="📧"
            title="Smart Email Campaigns"
            description="AI optimizes email timing, subject lines, content, and send frequency for maximum engagement and conversion."
            benefits={[
              "Optimal send timing",
              "Subject line optimization",
              "Content personalization",
              "A/B testing automation"
            ]}
          />
          <FeatureCard
            icon="📱"
            title="Social Media Automation"
            description="Intelligent social media management with AI-generated content, optimal posting times, and engagement optimization."
            benefits={[
              "Content generation",
              "Optimal posting times",
              "Engagement optimization",
              "Multi-platform management"
            ]}
          />
          <FeatureCard
            icon="🔍"
            title="Advanced Lead Scoring"
            description="AI analyzes lead behavior, demographics, and engagement to score and prioritize leads for maximum conversion."
            benefits={[
              "Behavioral scoring",
              "Predictive analytics",
              "Lead prioritization",
              "Conversion optimization"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Predictive Analytics"
            description="Advanced analytics predict customer lifetime value, churn risk, and optimal marketing spend allocation."
            benefits={[
              "Lifetime value prediction",
              "Churn prevention",
              "Budget optimization",
              "ROI forecasting"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Chatbot & AI Assistants"
            description="Intelligent chatbots handle customer inquiries, qualify leads, and provide personalized recommendations 24/7."
            benefits={[
              "24/7 availability",
              "Lead qualification",
              "Personalized responses",
              "Multi-language support"
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that scales with your marketing needs. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Starter"
            price="$199"
            period="per month"
            description="Perfect for small businesses and startups"
            features={[
              "Up to 10,000 contacts",
              "Basic AI personalization",
              "Email automation",
              "Social media scheduling",
              "Basic analytics",
              "Email support"
            ]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$499"
            period="per month"
            description="Most popular for growing businesses"
            features={[
              "Up to 50,000 contacts",
              "Advanced AI features",
              "Multi-channel campaigns",
              "Lead scoring",
              "Priority support",
              "API access",
              "Advanced analytics"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Marketing Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our AI-powered marketing automation has transformed businesses across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudy
            company="E-commerce Plus"
            industry="E-commerce"
            result="60% increase in conversion rates"
            description="Implemented AI personalization and automated email campaigns, resulting in 60% higher conversion rates and 45% increase in average order value."
            metrics={["60% conversion increase", "45% higher AOV", "50% more engaged users"]}
          />
          <CaseStudy
            company="SaaS Startup"
            industry="Software"
            result="70% improvement in lead quality"
            description="Used AI lead scoring and automated nurturing to improve lead quality and reduce sales cycle time by 40%."
            metrics={["70% better lead quality", "40% faster sales cycle", "80% more qualified leads"]}
          />
          <CaseStudy
            company="Retail Chain"
            industry="Retail"
            result="50% reduction in marketing costs"
            description="Deployed AI budget optimization and predictive analytics to reduce marketing costs while maintaining the same level of performance."
            metrics={["50% cost reduction", "35% better ROI", "60% more efficient campaigns"]}
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Marketing Scale</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform is built on enterprise-grade technology for maximum performance and reliability.
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
            { name: "SendGrid", icon: "📧", description: "Email delivery" },
            { name: "HubSpot", icon: "🔗", description: "CRM integration" },
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

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 400+ marketers using our AI platform to create more effective campaigns and drive better results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Marketing Automation Platform Demo"
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
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
    </div>
  );
}

<<<<<<< HEAD
function FeatureCard({
  title,
  features,
  icon,
}: {
  title: string;
  features: string[];
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-yellow-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{feature}</span>
=======
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
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
          </li>
        ))}
      </ul>
    </div>
  );
}

<<<<<<< HEAD
function PricingSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Marketing Automation Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Starter Marketing"
          price="$149/mo"
          duration="Up to 10,000 contacts"
          features={[
            'Basic email automation',
            'Simple segmentation',
            'Standard templates',
            'Basic analytics',
            'Email support',
            'Mobile app access',
          ]}
          popular={false}
        />
        <PricingCard
          name="Professional Marketing"
          price="$399/mo"
          duration="Up to 50,000 contacts"
          features={[
            'Everything in Starter Marketing',
            'AI-powered personalization',
            'Advanced automation workflows',
            'Multi-channel campaigns',
            'Advanced analytics & reporting',
            'API access & integrations',
            'Priority support',
          ]}
          popular={true}
        />
        <PricingCard
          name="Enterprise Marketing"
          price="$999/mo"
          duration="Unlimited contacts"
          features={[
            'Everything in Professional Marketing',
            'Custom AI model development',
            'Advanced security & compliance',
            'Dedicated marketing strategist',
            'Custom integrations',
            'White-label options',
            '24/7 phone support',
          ]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  duration,
  features,
  popular,
}: {
  name: string;
  price: string;
  duration: string;
=======
function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
  features: string[];
  popular: boolean;
}) {
  return (
<<<<<<< HEAD
    <div
      className={`relative bg-white border-2 rounded-xl p-8 ${popular ? 'border-yellow-500 shadow-lg' : 'border-gray-200'}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
=======
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
            Most Popular
          </span>
        </div>
      )}
<<<<<<< HEAD
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-yellow-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
=======
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
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
          </li>
        ))}
      </ul>
      <a
<<<<<<< HEAD
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-yellow-600 text-white hover:bg-yellow-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
=======
        href="mailto:kleber@ziontechgroup.com?subject=AI Marketing Automation - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

<<<<<<< HEAD
function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Automate Your Marketing?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let&apos;s discuss your marketing needs and create an AI-powered automation
        platform that drives growth and engagement.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
=======
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
=======
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored ai marketing automation solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ai marketing automation solutions run smoothly.
            </p>
          </div>
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
        </div>
      </div>
    </div>
  );
}
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
