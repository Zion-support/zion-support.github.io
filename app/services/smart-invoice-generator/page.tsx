<<<<<<< HEAD
export const metadata = {
  title: 'Smart Invoice Generator | Zion Tech Group',
  description: 'Professional smart invoice generator services for your business needs.',
  keywords: 'smart-invoice-generator, services, business, technology'
=======
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Smart Invoice Generator | Zion Tech Group',
  description: 'AI-powered invoice automation with smart templates, payment tracking, and financial analytics. Reduce billing time by 80% and get paid 30% faster.',
  keywords: 'invoice automation, smart invoicing, AI billing, payment tracking, financial analytics, invoice generator'
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
};

export default function ServicePage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart Invoice Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional smart invoice generator services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Feature 1</h3>
            <p className="text-gray-300 mb-6">Description of the first key feature.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Benefit 1</li>
              <li>• Benefit 2</li>
              <li>• Benefit 3</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Feature 2</h3>
            <p className="text-gray-300 mb-6">Description of the second key feature.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Benefit 1</li>
              <li>• Benefit 2</li>
              <li>• Benefit 3</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Feature 3</h3>
            <p className="text-gray-300 mb-6">Description of the third key feature.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Benefit 1</li>
              <li>• Benefit 2</li>
              <li>• Benefit 3</li>
            </ul>
          </div>
        </div>
      </div>
=======
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Smart Invoice Generator
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your billing process with AI-powered invoice automation. Create professional invoices in seconds, 
          track payments intelligently, and get paid 30% faster with our smart financial platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Smart Invoice Generator Demo"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Try Free Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Invoice Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform automates every aspect of invoicing, from creation to payment collection.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🤖"
            title="AI Invoice Creation"
            description="Automatically generate professional invoices from project data, time tracking, and client information"
            benefits={[
              "Auto-populate from projects",
              "Smart template selection",
              "Multi-currency support",
              "Custom branding"
            ]}
          />
          <FeatureCard
            icon="💳"
            title="Smart Payment Processing"
            description="Accept payments instantly with integrated payment gateways and automated payment reminders"
            benefits={[
              "Stripe & PayPal integration",
              "Auto payment reminders",
              "Recurring billing",
              "Payment analytics"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Financial Analytics"
            description="Track revenue, outstanding payments, and financial health with intelligent dashboards and reports"
            benefits={[
              "Real-time revenue tracking",
              "Outstanding payment alerts",
              "Cash flow forecasting",
              "Tax preparation tools"
            ]}
          />
          <FeatureCard
            icon="🔄"
            title="Automated Workflows"
            description="Set up automated invoice generation, sending, and follow-up sequences based on project milestones"
            benefits={[
              "Milestone-based billing",
              "Auto-send schedules",
              "Follow-up sequences",
              "Approval workflows"
            ]}
          />
          <FeatureCard
            icon="📱"
            title="Mobile App"
            description="Create, send, and track invoices on the go with our fully-featured mobile application"
            benefits={[
              "iOS & Android apps",
              "Offline functionality",
              "Photo receipt capture",
              "Push notifications"
            ]}
          />
          <FeatureCard
            icon="🔗"
            title="Seamless Integrations"
            description="Connect with your favorite tools including accounting software, project management, and CRM systems"
            benefits={[
              "QuickBooks integration",
              "Xero compatibility",
              "Project management sync",
              "API access"
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden fees, no setup costs. Choose the plan that fits your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Solo"
            price="$29"
            period="per month"
            description="Perfect for freelancers and solo entrepreneurs"
            features={[
              "Up to 50 invoices/month",
              "Basic AI features",
              "Payment processing",
              "Mobile app",
              "Email support",
              "Basic reporting"
            ]}
            cta="Start Free Trial"
            popular={false}
          />
          <PricingCard
            name="Business"
            price="$79"
            period="per month"
            description="Most popular for small to medium businesses"
            features={[
              "Up to 500 invoices/month",
              "Advanced AI features",
              "Team collaboration",
              "Custom branding",
              "Priority support",
              "Advanced analytics",
              "API access"
            ]}
            cta="Start Free Trial"
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$199"
            period="per month"
            description="For large organizations with complex needs"
            features={[
              "Unlimited invoices",
              "Custom AI models",
              "White-label options",
              "Dedicated support",
              "Custom integrations",
              "Advanced security",
              "SLA guarantee"
            ]}
            cta="Contact Sales"
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our clients consistently see dramatic improvements in their billing efficiency and cash flow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            number="80%"
            label="Time Saved"
            description="Average reduction in invoice creation time"
          />
          <MetricCard
            number="30%"
            label="Faster Payments"
            description="Clients get paid 30% faster on average"
          />
          <MetricCard
            number="95%"
            label="Accuracy Rate"
            description="AI-powered error detection and prevention"
          />
          <MetricCard
            number="$50K+"
            label="Revenue Recovered"
            description="Average additional revenue from better tracking"
          />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For Every Business</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From freelancers to enterprise teams, our smart invoicing adapts to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UseCaseCard
            icon="👨‍💼"
            title="Freelancers & Consultants"
            description="Streamline your billing process and focus on what you do best"
            benefits={[
              "Quick invoice creation",
              "Time tracking integration",
              "Professional templates",
              "Mobile invoicing"
            ]}
          />
          <UseCaseCard
            icon="🏢"
            title="Small Businesses"
            description="Scale your billing operations as your business grows"
            benefits={[
              "Team collaboration",
              "Client management",
              "Automated workflows",
              "Financial reporting"
            ]}
          />
          <UseCaseCard
            icon="🏭"
            title="Enterprise Teams"
            description="Handle complex billing requirements with advanced automation"
            benefits={[
              "Custom integrations",
              "Advanced analytics",
              "Multi-currency support",
              "Compliance features"
            ]}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Smart Invoice Generator has revolutionized our billing process. We're saving 10 hours per week and getting paid 40% faster."
            author="Sarah Johnson"
            role="CEO, Creative Agency"
            company="Design Studio Pro"
          />
          <TestimonialCard
            quote="The AI features are incredible. It automatically detects errors and suggests improvements. Our invoice accuracy is now 99%."
            author="Michael Chen"
            role="CFO, Tech Startup"
            company="InnovateTech Solutions"
          />
          <TestimonialCard
            quote="As a freelancer, this tool has been a game-changer. I can create professional invoices in seconds and track everything easily."
            author="Emily Rodriguez"
            role="Freelance Designer"
            company="Independent Contractor"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-green-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Billing?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of businesses using our smart invoicing platform to get paid faster and work more efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Smart Invoice Generator Demo Request"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
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
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-green-600 mb-2">
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
        href="mailto:kleber@ziontechgroup.com?subject=Smart Invoice Generator - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
    </div>
  );
}

function MetricCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-green-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function UseCaseCard({ icon, title, description, benefits }: {
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
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TestimonialCard({ quote, author, role, company }: {
  quote: string;
  author: string;
  role: string;
  company: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <p className="text-gray-600 mb-4 italic">"{quote}"</p>
      <div className="border-t pt-4">
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-sm text-gray-600">{role}</div>
        <div className="text-sm text-gray-500">{company}</div>
      </div>
    </div>
  );
}