import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI-Powered CRM | Zion Tech Group',
  description: 'Revolutionary AI-powered CRM platform that automates customer interactions, predicts sales opportunities, and delivers personalized experiences at scale.',
  keywords: 'AI CRM, customer relationship management, sales automation, lead scoring, customer insights, AI-powered sales'
};

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

}: { 
}) {
  return (
    <div className={`relative p-8 bg-white rounded-xl border-2 ${popular ? 'border-blue-500' : 'border-gray-200'} hover:shadow-lg transition-shadow`}>
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
          <li key={index} className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      </a>
    </div>
  );
}

}: { 
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
          <span className="text-blue-600 font-semibold">{author.charAt(0)}</span>
        </div>
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{role}</div>
          <div className="text-sm text-gray-500">{company}</div>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI-Powered CRM
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your customer relationships with our AI-powered CRM platform.
          Automate interactions, predict opportunities, and deliver personalized
          experiences at scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI CRM Inquiry"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
          >
            Watch Demo
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leverage cutting-edge AI technology to automate and optimize your sales processes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="Intelligent Lead Scoring"
            description="AI-powered lead qualification with 95% accuracy"
            benefits={[
              "Predictive customer lifetime value analysis",
              "Automated lead nurturing sequences",
              "Real-time conversion probability scoring",
              "Behavioral pattern recognition"
            ]}
          <FeatureCard
            icon="🤖"
            title="Smart Sales Automation"
            description="Automated follow-up sequences based on behavior"
            benefits={[
              "AI-generated personalized email campaigns",
              "Intelligent meeting scheduling and reminders",
              "Dynamic pricing optimization",
              "Automated task assignment"
            ]}
          <FeatureCard
            icon="📊"
            title="Predictive Analytics"
            description="Advanced forecasting with machine learning"
            benefits={[
              "Churn prediction and prevention strategies",
              "Revenue optimization recommendations",
              "Customer segmentation and targeting",
              "Sales pipeline forecasting"
            ]}
          <FeatureCard
            icon="💡"
            title="Sales Intelligence"
            description="Real-time customer insights and behavior tracking"
            benefits={[
              "Competitive analysis and market intelligence",
              "Performance analytics and reporting",
              "Custom dashboard and KPI monitoring",
              "AI-powered sales coaching"
            ]}
          <FeatureCard
            icon="🔄"
            title="Workflow Automation"
            description="Streamline repetitive tasks and processes"
            benefits={[
              "Automated data entry and updates",
              "Smart document generation",
              "Integration with existing tools",
              "Custom workflow creation"
            ]}
          <FeatureCard
            icon="📱"
            title="Mobile-First Design"
            description="Access your CRM anywhere, anytime"
            benefits={[
              "Native mobile applications",
              "Offline data synchronization",
              "Push notifications and alerts",
              "Voice-to-text data entry"
            ]}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            price="$99"
            period="month"
            description="Perfect for small teams getting started with AI CRM"
            features={[
              "Up to 1,000 contacts",
              "Basic AI lead scoring",
              "Email automation",
              "Standard support",
              "Mobile app access"
            ]}
          <PricingTier
            name="Professional"
            price="$299"
            period="month"
            description="Ideal for growing businesses with advanced needs"
            features={[
              "Up to 10,000 contacts",
              "Advanced AI analytics",
              "Custom workflows",
              "Priority support",
              "API access",
              "Advanced reporting"
            ]}
            popular={true}
          <PricingTier
            name="Enterprise"
            price="$999"
            period="month"
            description="Complete solution for large organizations"
            features={[
              "Unlimited contacts",
              "Full AI suite",
              "Custom integrations",
              "Dedicated support",
              "White-label options",
              "Advanced security"
            ]}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how AI-powered CRM has transformed businesses across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The AI lead scoring has increased our conversion rates by 40%. It's like having a sales expert working 24/7."
            author="Sarah Johnson"
            role="Sales Director"
            company="TechCorp Solutions"
          />
          <TestimonialCard
            quote="The predictive analytics helped us identify high-value prospects we would have missed. ROI increased by 300%."
            author="Michael Chen"
            role="VP of Sales"
            company="GrowthTech Inc"
          />
          <TestimonialCard
            quote="Automation features saved us 20 hours per week. Our team can now focus on building relationships instead of data entry."
            author="Emily Rodriguez"
            role="Sales Manager"
            company="InnovateLabs"
          />
        </div>
      </section>

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
      <h3 style={{ fontWeight: 700 }}>{title}</h3>
      <ul style={{ paddingLeft: 18, color: '#4b5563' }}>{details.map(d => (<li key={d} style={{ listStyle: 'disc' }}>{d}</li>))}</ul>
    </div>
  );
}

  return (
    <div style={{ marginTop: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
      <Plan
        name="Starter CRM"
        price="$2,500/month"
        features={[
          'Up to 1,000 contacts',
          'Basic AI lead scoring',
          'Email automation',
          'Standard analytics',
          'Email support',
        ]}
      <Plan
        name="Professional CRM"
        price="$5,000/month"
        features={[
          'Up to 10,000 contacts',
          'Advanced AI predictions',
          'Custom automation workflows',
          'Advanced analytics & reporting',
          'Priority support',
          'API integrations',
        ]}
      <Plan
        name="Enterprise CRM"
        price="$12,000/month"
        features={[
          'Unlimited contacts',
          'Full AI suite',
          'Custom AI model training',
          'White-label solution',
          'Dedicated support',
          'Custom integrations',
          'SLA guarantee',
        ]}
    </div>
  );
}

function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
      <h4 style={{ fontWeight: 700 }}>{name}</h4>
      <div style={{ color: '#111827', fontWeight: 800, marginTop: 4, fontSize: 18 }}>{price}</div>
      <ul style={{ paddingLeft: 18, color: '#4b5563', marginTop: 8 }}>{features.map(f => (<li key={f} style={{ listStyle: 'disc' }}>{f}</li>))}</ul>
      <a href="tel:+13024640950" style={{ display: 'inline-block', marginTop: 12, padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: 6 }}>Call +1 302 464 0950</a>
    </div>
  );
}
      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using AI to accelerate their sales growth. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI CRM Demo Request"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            >
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
