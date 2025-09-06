import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Email Optimizer | Zion Tech Group',
  description: 'AI-powered email optimization platform that increases open rates by 40% with smart subject lines, content personalization, and automated A/B testing. Starting at $99/month.',
  keywords: 'AI email optimization, email marketing, subject line optimization, A/B testing, email personalization'
};

export default function AIEmailOptimizerPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Email Optimizer
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your email marketing with AI-powered optimization. Increase open rates by 40% and boost engagement with intelligent subject lines, content personalization, and automated A/B testing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Email Optimizer Demo Request"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI technology that learns from your audience to optimize every email campaign.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="Smart Subject Lines"
            description="AI generates compelling subject lines that increase open rates by up to 40%"
            benefits={[
              "A/B testing automation",
              "Emotional tone analysis",
              "Length optimization",
              "Personalization tokens"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Content Personalization"
            description="Dynamic content that adapts to each recipient's preferences and behavior"
            benefits={[
              "Behavioral targeting",
              "Dynamic product recommendations",
              "Personalized CTAs",
              "Segmentation intelligence"
            ]}
          />
          <FeatureCard
            icon="⚡"
            title="Send Time Optimization"
            description="AI determines the optimal send time for each recipient to maximize engagement"
            benefits={[
              "Individual timing analysis",
              "Timezone optimization",
              "Engagement pattern learning",
              "Automated scheduling"
            ]}
          />
          <FeatureCard
            icon="🔍"
            title="Performance Analytics"
            description="Comprehensive insights and recommendations to continuously improve your campaigns"
            benefits={[
              "Real-time performance tracking",
              "ROI analysis",
              "Engagement heatmaps",
              "Predictive analytics"
            ]}
          />
          <FeatureCard
            icon="🛡️"
            title="Spam Prevention"
            description="AI-powered content analysis to avoid spam filters and improve deliverability"
            benefits={[
              "Spam score analysis",
              "Content optimization",
              "Deliverability monitoring",
              "ISP compliance"
            ]}
          />
          <FeatureCard
            icon="🔄"
            title="Automated A/B Testing"
            description="Continuous testing and optimization without manual intervention"
            benefits={[
              "Multi-variant testing",
              "Statistical significance",
              "Automatic winner selection",
              "Learning algorithms"
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your email volume and business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Starter"
            price="$99"
            period="month"
            description="Perfect for small businesses and startups"
            features={[
              "Up to 10,000 emails/month",
              "Basic AI optimization",
              "Subject line testing",
              "Email templates",
              "Basic analytics",
              "Email support"
            ]}
            cta="Start Free Trial"
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$299"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Up to 50,000 emails/month",
              "Advanced AI optimization",
              "Content personalization",
              "A/B testing automation",
              "Advanced analytics",
              "Priority support",
              "API access"
            ]}
            cta="Start Free Trial"
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$999"
            period="month"
            description="For large organizations with high volume"
            features={[
              "Unlimited emails",
              "Full AI suite",
              "Custom integrations",
              "Dedicated account manager",
              "White-label options",
              "24/7 phone support",
              "Custom reporting"
            ]}
            cta="Contact Sales"
            popular={false}
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our clients have transformed their email marketing with AI optimization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            company="E-commerce Store"
            result="45% increase in open rates"
            description="Our AI Email Optimizer helped increase our email open rates from 18% to 26% in just 3 months, resulting in $50K additional revenue."
            industry="E-commerce"
          />
          <TestimonialCard
            company="SaaS Platform"
            result="60% higher click-through rates"
            description="The personalized content recommendations and optimal send times increased our CTR by 60% and reduced unsubscribe rates by 30%."
            industry="SaaS"
          />
          <TestimonialCard
            company="Marketing Agency"
            result="$100K+ saved in costs"
            description="Automated A/B testing and optimization saved us 20 hours per week while improving campaign performance across all clients."
            industry="Marketing"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with AI email optimization in just 3 simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            step="1"
            title="Connect Your Email Platform"
            description="Integrate with your existing email marketing platform (Mailchimp, Klaviyo, SendGrid, etc.) in minutes."
          />
          <StepCard
            step="2"
            title="AI Learns Your Audience"
            description="Our AI analyzes your historical email data and audience behavior to understand what works best."
          />
          <StepCard
            step="3"
            title="Optimize & Scale"
            description="Watch as AI automatically optimizes your campaigns, tests variations, and improves performance over time."
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Email Performance?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 500+ businesses already using AI to optimize their email marketing. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Email Optimizer - Free Trial Request"
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
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
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

function PricingCard({ name, price, period, description, features, cta, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
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
        href="mailto:kleber@ziontechgroup.com?subject=AI Email Optimizer - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function TestimonialCard({ company, result, description, industry }: {
  company: string;
  result: string;
  description: string;
  industry: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-blue-600 font-bold text-lg">{company.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{company}</h4>
          <p className="text-sm text-gray-600">{industry}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-lg font-bold text-green-600">{result}</div>
    </div>
  );
}

function StepCard({ step, title, description }: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}