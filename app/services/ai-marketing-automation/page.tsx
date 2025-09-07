<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
import React from 'react';

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
export const metadata = {
  title: 'AI Marketing Automation | Zion Tech Group',
  description: 'Professional AI marketing automation services for your business needs.',
  keywords: 'ai-marketing-automation, services, business, technology'
};

export default function AIMarketingAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
<<<<<<< HEAD
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Marketing Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your marketing with intelligent automation. AI-powered campaigns that adapt, learn, and deliver results.
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
=======
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Marketing Automation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your marketing with AI-powered automation that delivers personalized experiences, 
            optimizes campaigns, and drives measurable results.
          </p>
        </div>
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">AI-powered customer segmentation and targeting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">Automated email marketing campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">Social media content generation and scheduling</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">Predictive analytics for campaign optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">Multi-channel marketing orchestration</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">→</span>
                <span className="text-gray-700">Increase marketing ROI by up to 300%</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">→</span>
                <span className="text-gray-700">Reduce manual work by 80%</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">→</span>
                <span className="text-gray-700">Improve customer engagement by 150%</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">→</span>
                <span className="text-gray-700">Scale campaigns across multiple channels</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">→</span>
                <span className="text-gray-700">Real-time performance optimization</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$299/month</div>
              <ul className="space-y-3 mb-8">
                <li>Up to 10,000 contacts</li>
                <li>5 automated campaigns</li>
                <li>Basic AI content generation</li>
                <li>Email support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
<<<<<<< HEAD
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
            <p className="text-gray-300 mb-6">Seamlessly coordinate campaigns across email, social, and web channels.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Email automation</li>
              <li>• Social media management</li>
              <li>• Web personalization</li>
              <li>• Cross-platform analytics</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Marketing?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI marketing automation platform transform your campaigns and drive better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View All Services
            </a>
          </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$799/month</div>
              <ul className="space-y-3 mb-8">
                <li>Up to 50,000 contacts</li>
                <li>Unlimited campaigns</li>
                <li>Advanced AI features</li>
                <li>Multi-channel automation</li>
                <li>Priority support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li>Unlimited contacts</li>
                <li>Custom integrations</li>
                <li>Dedicated account manager</li>
                <li>24/7 support</li>
                <li>Custom AI models</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Transform Your Marketing?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our team to discuss your marketing automation needs and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email Us
            </a>
          </div>
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
        </div>
      </div>
    </div>
  );
}