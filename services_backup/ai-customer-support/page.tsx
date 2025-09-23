import React from 'react';

export const metadata = {
  title: 'AI Customer Support | Zion Tech Group',
  description: 'Intelligent customer support automation with AI chatbots, sentiment analysis, and 24/7 multilingual support. Reduce support costs by 70% while improving satisfaction.'};

export default function AICustomerSupportPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Customer Support
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your customer support with AI-powered chatbots, intelligent ticket routing, 
          and automated responses. Reduce costs by 70% while improving customer satisfaction by 85%.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Start Free Trial - $299/month
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
          >
            Schedule Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Intelligent Support Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🤖"
            title="AI Chatbots"
            description="Advanced conversational AI that understands context and provides accurate, helpful responses."
            features={[
              "Natural language processing",
              "Context-aware conversations",
              "Multi-turn dialogue support",
              "Intent recognition"
            ]}
          />
          <FeatureCard
            icon="🎯"
            title="Smart Ticket Routing"
            description="Automatically categorize and route tickets to the right agent based on content and urgency."
            features={[
              "Automatic categorization",
              "Priority detection",
              "Skill-based routing",
              "Escalation management"
            ]}
          />
          <FeatureCard
            icon="🌍"
            title="Multilingual Support"
            description="Support customers in 50+ languages with real-time translation and cultural adaptation."
            features={[
              "50+ language support",
              "Real-time translation",
              "Cultural context awareness",
              "Regional customization"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Sentiment Analysis"
            description="Monitor customer emotions and satisfaction in real-time to prevent escalations."
            features={[
              "Real-time sentiment tracking",
              "Emotion detection",
              "Satisfaction prediction",
              "Alert system"
            ]}
          />
          <FeatureCard
            icon="🔍"
            title="Knowledge Base AI"
            description="Intelligent search and retrieval from your knowledge base with context-aware responses."
            features={[
              "Semantic search",
              "Context-aware retrieval",
              "Auto-updating knowledge",
              "Source attribution"
            ]}
          />
          <FeatureCard
            icon="📈"
            title="Analytics & Insights"
            description="Comprehensive analytics to track performance, identify trends, and optimize support processes."
            features={[
              "Performance metrics",
              "Trend analysis",
              "Agent productivity",
              "Customer journey mapping"
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Flexible Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Starter"
            price="$299"
            period="month"
            description="Perfect for small businesses"
            features={[
              "Up to 1,000 conversations/month",
              "Basic AI chatbot",
              "Email support",
              "Standard analytics",
              "5 languages supported"
            ]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$799"
            period="month"
            description="Ideal for growing businesses"
            features={[
              "Up to 10,000 conversations/month",
              "Advanced AI features",
              "Priority support",
              "Detailed analytics",
              "25 languages supported",
              "Custom integrations"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$1,999"
            period="month"
            description="For large organizations"
            features={[
              "Unlimited conversations",
              "Custom AI training",
              "White-label solution",
              "24/7 dedicated support",
              "50+ languages supported",
              "API access & custom development"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proven Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            number="70%"
            label="Cost Reduction"
            description="Average reduction in support costs"
          />
          <MetricCard
            number="85%"
            label="Satisfaction Increase"
            description="Improvement in customer satisfaction"
          />
          <MetricCard
            number="90%"
            label="First Contact Resolution"
            description="Issues resolved in first interaction"
          />
          <MetricCard
            number="24/7"
            label="Availability"
            description="Round-the-clock customer support"
          />
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industry-Specific Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard
            icon="🏦"
            title="Financial Services"
            description="Bank-grade security with compliance features for financial institutions."
            features={["PCI DSS compliance", "Fraud detection", "Account verification", "Regulatory reporting"]
          />
          <IndustryCard
            icon="🛒"
            title="E-commerce"
            description="Optimized for online retail with order tracking and product recommendations."
            features={["Order management", "Product recommendations", "Return processing", "Inventory queries"]
          />
          <IndustryCard
            icon="🏥"
            title="Healthcare"
            description="HIPAA-compliant support for healthcare providers and patients."
            features={["HIPAA compliance", "Appointment scheduling", "Medical queries", "Insurance support"]
          />
          <IndustryCard
            icon="🎓"
            title="Education"
            description="Student and parent support for educational institutions."
            features={["Student queries", "Parent communication", "Enrollment support", "Academic guidance"]
          />
          <IndustryCard
            icon="🏠"
            title="Real Estate"
            description="Property inquiries and client support for real estate professionals."
            features={["Property searches", "Client matching", "Document support", "Market information"]
          />
          <IndustryCard
            icon="🚗"
            title="Automotive"
            description="Vehicle support and service scheduling for automotive businesses."
            features={["Service scheduling", "Warranty support", "Parts ordering", "Technical assistance"]
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Jennifer Martinez"
            role="Customer Success Director"
            company="TechCorp Solutions"
            content="Our support costs dropped by 65% while customer satisfaction increased to 94%. The AI chatbot handles 80% of inquiries perfectly."
            avatar="👩‍💼"
          />
          <TestimonialCard
            name="David Kim"
            role="VP of Operations"
            company="E-commerce Plus"
            content="The multilingual support is incredible. We can now serve customers in 15 languages without hiring additional staff."
            avatar="👨‍💻"
          />
          <TestimonialCard
            name="Sarah Johnson"
            role="Head of Support"
            company="HealthTech Inc."
            content="HIPAA compliance was our biggest concern, but this solution handles it perfectly. Our healthcare clients love the security features."
            avatar="👩‍⚕️"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Customer Support?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 2,000+ businesses that have transformed their customer support with our AI-powered platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-6 text-sm text-orange-100">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, features }: { icon: string; title: string; description: string; features: string[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
            {feature}
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
    <div className={`bg-white p-8 rounded-lg shadow-md border-2 ${popular ? 'border-orange-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
        popular 
          ? 'bg-orange-600 text-white hover:bg-orange-700' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}>
        Start Free Trial
      </button>
    </div>
  );
}

function MetricCard({ number, label, description }: { number: string; label: string; description: string }) {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-orange-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function IndustryCard({ icon, title, description, features }: { 
  icon: string; 
  title: string; 
  description: string; 
  features: string[]; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TestimonialCard({ name, role, company, content, avatar }: { 
  name: string; 
  role: string; 
  company: string; 
  content: string; 
  avatar: string; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{avatar}</div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{content}"</p>
    </div>
  );
}