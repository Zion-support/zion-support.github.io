import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Generator Pro | Zion Tech Group',
  description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials. Generate high-quality, SEO-optimized content at scale.',
  keywords: 'AI content generator, content creation, blog writing, social media content, marketing automation, SEO content'
};

export default function AIContentGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">AI Content Generator Pro</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Transform your content marketing with our advanced AI-powered platform. Generate high-quality, 
            SEO-optimized content for blogs, social media, and marketing materials at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:kleber@ziontechgroup.com?subject=AI Content Generator Inquiry"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Start Free Trial
            </a>
            <a href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Powerful Features</h2>
            <div className="space-y-6">
              <FeatureItem icon="✍️"
                title="Multi-Language Support"
                description="Generate content in 50+ languages with native-level quality and cultural context."
                benefits={["50+ languages", "Cultural adaptation", "Native-level quality", "Real-time translation"]}
              />
              <FeatureItem icon="🔍"
                title="SEO Optimization"
                description="AI-powered SEO optimization with keyword research, meta descriptions, and content structure."
                benefits={["Keyword research", "Meta optimization", "Content structure", "Ranking analysis"]}
              />
              <FeatureItem icon="🎨"
                title="Brand Voice Consistency"
                description="Maintain consistent brand voice across all content with custom tone and style settings."
                benefits={["Custom tone settings", "Brand guidelines", "Style consistency", "Voice training"]}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Platform?</h2>
            <div className="space-y-6">
              <BenefitCard icon="⚡"
                title="10x Faster Content Creation"
                description="Generate high-quality content 10x faster than traditional methods, saving hours of work."
              />
              <BenefitCard icon="📈"
                title="300% Higher Engagement"
                description="AI-optimized content achieves 300% higher engagement rates compared to manually written content."
              />
              <BenefitCard icon="🎯"
                title="Perfect for All Industries"
                description="From tech startups to Fortune 500 companies
            our AI adapts to any industry and use case."
              />
            </div>
          </div>
        </div>

        {/* Pricing Section */
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard title="Starter"
              price="$199"
              period="month"
              description="Perfect for small businesses and content creators"
              features={[
                "10,000 words/month"}
            "5 languages"
            "Basic SEO optimization"
            "Email support"
            "Standard templates"
              popular={false
            />
            <PricingCard title="Professional"
              price="$399"
              period="month"
              description="Ideal for growing businesses and agencies"
              features={[
                "50,000 words/month",
                "25 languages"}
            "Advanced SEO optimization"
            "Priority support"
            "Custom templates"
            "Brand voice training"
            "Analytics dashboard"
              popular={true
            />
            <PricingCard title="Enterprise"
              price="$799"
              period="month"
              description="For large organizations with high-volume needs"
              features={[
                "Unlimited words",
                "50+ languages",
                "Full SEO suite"}
            "24/7 support"
            "Custom integrations"
            "Advanced analytics"
            "API access"
            "White-label options"
              popular={false
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Content Strategy?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join 10,000+ businesses already using AI Content Generator Pro to create
            high-quality content at scale. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:kleber@ziontechgroup.com?subject=AI Content Generator Inquiry"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Start Free Trial
            </a>
            <a href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, description,
  benefits }: {
  icon: string;
  title: string,
  description: string,
  benefits: string[];,,
  }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit,,,
  index) => (
          <li key={index}
            className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit
          </li>
        ))
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title,
  description }: {
  icon: string,
  title: string,
  description: string;,,
  }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  popular
}: {
  title: string;
  price: string;
  period: string;
  description: string,
  features: string[],
  popular: boolean;,,
  }) {
  return (
    <div className={`p-8 rounded-xl border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index className="flex items-center text-gray-600">
            <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" / />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a href={`mailto:kleber@ziontechgroup.com?subject=AI Content Generator - ${title}
            Plan`
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        `}
      >
        Get Started
      </a>
    </div>
  );
}