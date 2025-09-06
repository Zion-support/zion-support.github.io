import React from 'react';

export const metadata = {
  title: 'AI Customer Support Automation | Zion Tech Group',
  description: '24/7 AI-powered customer support with chatbots, sentiment analysis, and multilingual capabilities. Reduce support costs by 60% while improving customer satisfaction.',
  keywords: 'AI customer support, chatbot, customer service automation, sentiment analysis, multilingual support, 24/7 support'
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

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({ name, price, period, description, features, popular = false, cta }: PricingTierProps) {
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
        href="mailto:kleber@ziontechgroup.com?subject=AI Customer Support - {name} Plan"
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

export default function AICustomerSupportPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Customer Support Automation
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your customer support with AI-powered chatbots, sentiment analysis, and multilingual capabilities. Reduce costs by 60% while improving customer satisfaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Customer Support Demo"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Support Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI customer support system provides intelligent, 24/7 assistance that understands context and delivers personalized responses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🤖"
            title="Intelligent Chatbots"
            description="Advanced AI chatbots that understand context, handle complex queries, and provide human-like responses"
            benefits={[
              "95% accuracy rate",
              "Natural language processing",
              "Context awareness",
              "Multi-turn conversations",
              "Intent recognition"
            ]}
          />
          <FeatureCard
            icon="😊"
            title="Sentiment Analysis"
            description="Real-time emotion detection and response optimization to ensure positive customer experiences"
            benefits={[
              "Emotion detection",
              "Tone optimization",
              "Escalation triggers",
              "Mood tracking",
              "Response personalization"
            ]}
          />
          <FeatureCard
            icon="🌍"
            title="Multilingual Support"
            description="Support customers in 50+ languages with accurate translations and cultural context awareness"
            benefits={[
              "50+ languages supported",
              "Cultural context awareness",
              "Real-time translation",
              "Localized responses",
              "Regional customization"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Advanced Analytics"
            description="Comprehensive insights into customer interactions, satisfaction scores, and support performance"
            benefits={[
              "Real-time dashboards",
              "Customer satisfaction tracking",
              "Response time analysis",
              "Issue categorization",
              "Performance metrics"
            ]}
          />
          <FeatureCard
            icon="🔄"
            title="Seamless Escalation"
            description="Intelligent handoff to human agents when AI reaches its limits, with full context preservation"
            benefits={[
              "Smart escalation triggers",
              "Context preservation",
              "Agent handoff notes",
              "Priority assignment",
              "Smooth transitions"
            ]}
          />
          <FeatureCard
            icon="🔗"
            title="CRM Integration"
            description="Deep integration with popular CRM systems for unified customer data and support history"
            benefits={[
              "Salesforce integration",
              "HubSpot compatibility",
              "Zendesk connection",
              "Custom API support",
              "Data synchronization"
            ]}
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI customer support system works seamlessly to provide instant, intelligent assistance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Query</h3>
            <p className="text-gray-600">
              Customer submits a question through chat, email, or phone, and our AI immediately processes the request.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Analysis</h3>
            <p className="text-gray-600">
              Our AI analyzes the query, detects sentiment, identifies intent, and searches for the best response.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Response</h3>
            <p className="text-gray-600">
              AI provides a personalized, contextually appropriate response or escalates to human agents when needed.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning & Optimization</h3>
            <p className="text-gray-600">
              System learns from interactions to continuously improve response accuracy and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored AI customer support solutions for different industries and use cases.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              industry: "E-commerce",
              icon: "🛒",
              description: "Product inquiries, order tracking, returns, and payment support",
              features: ["Order status", "Product recommendations", "Return processing", "Payment issues"]
            },
            {
              industry: "SaaS",
              icon: "💻",
              description: "Technical support, account management, and feature guidance",
              features: ["Technical troubleshooting", "Account setup", "Feature training", "Billing support"]
            },
            {
              industry: "Healthcare",
              icon: "🏥",
              description: "Appointment scheduling, insurance questions, and general inquiries",
              features: ["Appointment booking", "Insurance verification", "General inquiries", "HIPAA compliance"]
            },
            {
              industry: "Financial Services",
              icon: "💳",
              description: "Account inquiries, transaction support, and financial guidance",
              features: ["Account information", "Transaction support", "Fraud prevention", "Compliance"]
            },
            {
              industry: "Education",
              icon: "🎓",
              description: "Student support, course information, and enrollment assistance",
              features: ["Course information", "Enrollment help", "Technical support", "Academic guidance"]
            },
            {
              industry: "Travel & Hospitality",
              icon: "✈️",
              description: "Booking assistance, travel information, and customer service",
              features: ["Booking support", "Travel information", "Cancellation help", "Loyalty programs"]
            }
          ].map((solution, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.industry}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-1">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your customer support needs. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            price="$199"
            period="month"
            description="Perfect for small businesses"
            features={[
              "Up to 1,000 conversations/month",
              "Basic chatbot functionality",
              "Email support",
              "Basic analytics",
              "5 languages supported",
              "Email support"
            ]}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Professional"
            price="$599"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Up to 10,000 conversations/month",
              "Advanced AI features",
              "Sentiment analysis",
              "Comprehensive analytics",
              "25 languages supported",
              "Priority support"
            ]}
            popular={true}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Enterprise"
            price="$1,999"
            period="month"
            description="For large organizations"
            features={[
              "Unlimited conversations",
              "Custom AI models",
              "White-label solution",
              "Advanced reporting",
              "50+ languages supported",
              "Dedicated account manager"
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how businesses have transformed their customer support with our AI automation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              company: "E-commerce Platform",
              industry: "Retail",
              result: "60% cost reduction",
              description: "Reduced support costs by 60% while improving response time to under 30 seconds and increasing customer satisfaction by 40%."
            },
            {
              company: "SaaS Company",
              industry: "Technology",
              result: "95% query resolution",
              description: "Achieved 95% first-contact resolution rate and reduced average response time from 4 hours to 2 minutes."
            },
            {
              company: "Financial Services",
              industry: "Finance",
              result: "24/7 support coverage",
              description: "Implemented 24/7 AI support across 15 languages, handling 80% of inquiries automatically with 98% accuracy."
            }
          ].map((story, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <div className="text-sm text-blue-600 font-semibold mb-2">{story.industry}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{story.company}</h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="text-2xl font-bold text-green-600">{story.result}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Support?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start your free trial today and see how AI can revolutionize your customer support operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Customer Support Free Trial"
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