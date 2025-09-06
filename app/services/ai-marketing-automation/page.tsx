import React from 'react';
import Link from 'next/link';


export const metadata = {
  title: 'AI Marketing Automation Platform | Zion Tech Group',
  description: 'Intelligent marketing automation with AI-driven personalization, predictive analytics, and automated campaign optimization. Increase conversion rates by 65% with smart marketing AI.',
  keywords: 'AI marketing automation, personalized marketing, campaign optimization, lead nurturing, marketing analytics, customer segmentation'
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
        href="mailto:kleber@ziontechgroup.com?subject=AI Marketing Automation - {name} Plan"
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


export default function AIMarketingAutomationPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-pink-50 to-purple-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Marketing Automation Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Revolutionize your marketing with AI-powered automation that personalizes every customer interaction, 
          optimizes campaigns in real-time, and increases conversion rates by 65% with intelligent insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Marketing Automation Demo"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Marketing Automation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform transforms your marketing with smart automation and personalized customer experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="AI Customer Segmentation"
            description="Automatically segment customers based on behavior, preferences, and predicted lifetime value using machine learning."
            benefits={[
              "Behavioral segmentation",
              "Predictive modeling",
              "Dynamic segments",
              "Custom criteria",
              "Real-time updates"
            ]}
          />
          <FeatureCard
            icon="📧"
            title="Smart Email Campaigns"
            description="AI-powered email marketing with personalized content, optimal send times, and automated A/B testing."
            benefits={[
              "Personalized content",
              "Send time optimization",
              "Subject line testing",
              "Content optimization",
              "Performance tracking"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Automated Lead Nurturing"
            description="Intelligent lead nurturing sequences that adapt based on customer behavior and engagement patterns."
            benefits={[
              "Behavioral triggers",
              "Multi-channel nurturing",
              "Content personalization",
              "Lead scoring",
              "Conversion optimization"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Predictive Analytics"
            description="Advanced analytics that predict customer behavior, campaign performance, and optimal marketing strategies."
            benefits={[
              "Behavior prediction",
              "Campaign forecasting",
              "ROI optimization",
              "Trend analysis",
              "Performance insights"
            ]}
          />
          <FeatureCard
            icon="🎨"
            title="AI Content Generation"
            description="Automated content creation for ads, emails, and social media with brand voice consistency and optimization."
            benefits={[
              "Content automation",
              "Brand voice training",
              "Multi-format generation",
              "SEO optimization",
              "Performance testing"
            ]}
          />
          <FeatureCard
            icon="📱"
            title="Cross-Channel Orchestration"
            description="Seamlessly coordinate marketing campaigns across email, social media, SMS, and web channels."
            benefits={[
              "Multi-channel campaigns",
              "Unified customer journey",
              "Channel optimization",
              "Message consistency",
              "Performance tracking"
            ]}
          />
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Marketing Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI marketing automation platform delivers measurable improvements across all key marketing metrics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">65%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Higher Conversion</div>
            <div className="text-sm text-gray-600">Average increase in conversion rates</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">More Leads</div>
            <div className="text-sm text-gray-600">Increase in qualified lead generation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Cost Reduction</div>
            <div className="text-sm text-gray-600">Reduction in cost per acquisition</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">80%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Time Saved</div>
            <div className="text-sm text-gray-600">Reduction in manual marketing tasks</div>
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Multi-Channel Marketing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach your customers across all touchpoints with intelligent, coordinated campaigns.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Marketing</h3>
            <p className="text-gray-600 mb-4">AI-powered email campaigns with personalization and optimization.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Personalized content
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Send time optimization
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                A/B testing automation
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Media</h3>
            <p className="text-gray-600 mb-4">Automated social media management with AI content creation and scheduling.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Content generation
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Optimal posting times
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Engagement optimization
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">SMS Marketing</h3>
            <p className="text-gray-600 mb-4">Intelligent SMS campaigns with personalization and compliance management.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Personalized messages
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Compliance automation
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Delivery optimization
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your marketing needs and team size. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            price="$199"
            period="month"
            description="Perfect for small businesses and startups"
            features={[
              "Up to 5,000 contacts",
              "Basic AI automation",
              "Email marketing",
              "Social media posting",
              "Basic analytics",
              "Email support"
            ]}
          />
          <PricingTier
            name="Professional"
            price="$499"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Up to 25,000 contacts",
              "Advanced AI features",
              "Multi-channel campaigns",
              "Predictive analytics",
              "A/B testing",
              "Priority support",
              "API access"
            ]}
            popular={true}
          />
          <PricingTier
            name="Enterprise"
            price="$1,299"
            period="month"
            description="For large organizations with complex needs"
            features={[
              "Unlimited contacts",
              "Custom AI models",
              "White-label options",
              "Dedicated support",
              "Advanced integrations",
              "Custom development",
              "On-premise deployment"
            ]}
          />
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with your existing marketing tools and platforms for a unified marketing experience.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "HubSpot", icon: "🟠" },
            { name: "Salesforce", icon: "☁️" },
            { name: "Mailchimp", icon: "📬" },
            { name: "Facebook Ads", icon: "📘" },
            { name: "Google Ads", icon: "🔍" },
            { name: "LinkedIn", icon: "💼" },
            { name: "Twitter", icon: "🐦" },
            { name: "Instagram", icon: "📷" },
            { name: "Shopify", icon: "🛍️" },
            { name: "WooCommerce", icon: "🛒" },
            { name: "Zapier", icon: "⚡" },
            { name: "Webhooks", icon: "🔗" }
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
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using our AI-powered marketing automation platform to boost conversions and grow revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Marketing Automation Inquiry"
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