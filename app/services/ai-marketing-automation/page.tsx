import React from 'react'
import { Metadata } from 'next'

export const metadata = {
  title: 'AI Marketing Automation | Zion Tech Group',
  description: 'Professional AI marketing automation services for your business needs.',
  keywords: 'ai-marketing-automation, services, business, technology'
};

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
        href={`mailto:kleber@ziontechgroup.com?subject=AI Marketing Automation - ${name} Plan`}
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
    </div>
  );
}

export default function AiMarketingAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Marketing Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your marketing with intelligent automation. AI-powered campaigns that adapt, learn, and deliver results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Smart Campaigns</h3>
            <p className="text-gray-300 mb-6">AI-driven marketing campaigns that automatically optimize for better performance.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Automated A/B testing</li>
              <li>• Dynamic content optimization</li>
              <li>• Predictive analytics</li>
              <li>• Real-time adjustments</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Customer Segmentation</h3>
            <p className="text-gray-300 mb-6">Intelligent customer segmentation and personalized messaging at scale.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Behavioral analysis</li>
              <li>• Demographic targeting</li>
              <li>• Purchase prediction</li>
              <li>• Lifecycle management</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Multi-Channel Integration</h3>
            <p className="text-gray-300 mb-6">Seamlessly connect all your marketing channels for unified campaigns.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Email marketing automation</li>
              <li>• Social media management</li>
              <li>• SMS and push notifications</li>
              <li>• Cross-platform analytics</li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              name="Starter"
              price="$299"
              period="month"
              description="Perfect for small businesses getting started with AI marketing"
              features={[
                "Up to 1,000 contacts",
                "Basic automation workflows",
                "Email marketing campaigns",
                "Basic analytics dashboard",
                "Email support"
              ]}
              popular={false}
            />
            <PricingCard
              name="Professional"
              price="$799"
              period="month"
              description="Advanced features for growing businesses"
              features={[
                "Up to 10,000 contacts",
                "Advanced automation workflows",
                "Multi-channel campaigns",
                "Advanced analytics & reporting",
                "A/B testing tools",
                "Priority support"
              ]}
              popular={true}
            />
            <PricingCard
              name="Enterprise"
              price="$1,999"
              period="month"
              description="Complete solution for large organizations"
              features={[
                "Unlimited contacts",
                "Custom automation workflows",
                "Advanced AI features",
                "Custom integrations",
                "Dedicated account manager",
                "24/7 phone support"
              ]}
              popular={false}
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudy
              company="TechStart Inc"
              industry="SaaS"
              result="300% increase in lead conversion"
              description="Implemented AI-powered email sequences that automatically adapt to user behavior, resulting in significantly higher engagement rates."
              metrics={[
                "300% increase in lead conversion",
                "45% improvement in email open rates",
                "60% reduction in manual campaign management"
              ]}
            />
            <CaseStudy
              company="RetailPlus"
              industry="E-commerce"
              result="250% ROI in 6 months"
              description="Deployed intelligent customer segmentation and personalized product recommendations across all marketing channels."
              metrics={[
                "250% ROI in 6 months",
                "35% increase in average order value",
                "50% improvement in customer retention"
              ]}
            />
            <CaseStudy
              company="FinanceFlow"
              industry="FinTech"
              result="400% increase in qualified leads"
              description="Created sophisticated lead scoring and nurturing campaigns that identify and convert high-value prospects automatically."
              metrics={[
                "400% increase in qualified leads",
                "70% reduction in cost per acquisition",
                "85% improvement in sales team efficiency"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}