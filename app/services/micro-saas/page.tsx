import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, analytics platforms, and automation solutions. From MVP to scale.'
};

export default function MicroSaaSPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Micro SaaS Development
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Complete micro SaaS development services including AI-powered tools, productivity apps, 
          analytics platforms, and automation solutions. From MVP to scale.
        </p>
      </section>

      {/* Micro SaaS Solutions Showcase */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MicroSaaSSolution
            title="AI-Powered Tools"
            description="Intelligent automation tools that solve specific business problems with AI"
            features={["Custom AI models", "API integration", "User-friendly interface", "Scalable architecture", "Analytics dashboard"]}
            pricing="$15k-75k"
            icon="🤖"
          />
          <MicroSaaSSolution
            title="Productivity Apps"
            description="Focused productivity applications that streamline specific workflows"
            features={["Task management", "Team collaboration", "Time tracking", "Reporting", "Mobile apps"]}
            pricing="$10k-50k"
            icon="⚡"
          />
          <MicroSaaSSolution
            title="Analytics Platforms"
            description="Data visualization and analytics tools for business insights"
            features={["Real-time dashboards", "Custom reports", "Data integration", "Export capabilities", "User management"]}
            pricing="$20k-100k"
            icon="📊"
          />
          <MicroSaaSSolution
            title="Automation Solutions"
            description="Workflow automation tools that eliminate manual processes"
            features={["Process automation", "Integration APIs", "Custom triggers", "Monitoring", "Error handling"]}
            pricing="$12k-60k"
            icon="🔧"
          />
          <MicroSaaSSolution
            title="Communication Tools"
            description="Specialized communication and collaboration platforms"
            features={["Messaging systems", "Video conferencing", "File sharing", "Notifications", "Mobile support"]}
            pricing="$18k-80k"
            icon="💬"
          />
          <MicroSaaSSolution
            title="E-commerce Tools"
            description="Specialized tools for online businesses and marketplaces"
            features={["Inventory management", "Order processing", "Payment integration", "Customer support", "Analytics"]}
            pricing="$25k-120k"
            icon="🛒"
          />
        </div>
      </section>

      {/* Development Process */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ProcessStep 
            title="Discovery & Planning" 
            details={[
              "Market research",
              "User persona development",
              "Feature prioritization",
              "Technical architecture",
              "Project timeline"
            ]} 
            step="1"
          />
          <ProcessStep 
            title="MVP Development" 
            details={[
              "Core feature development",
              "UI/UX design",
              "Database design",
              "API development",
              "Basic testing"
            ]} 
            step="2"
          />
          <ProcessStep 
            title="Testing & Launch" 
            details={[
              "Quality assurance",
              "User acceptance testing",
              "Performance optimization",
              "Security audit",
              "Production deployment"
            ]} 
            step="3"
          />
          <ProcessStep 
            title="Scale & Maintain" 
            details={[
              "User feedback integration",
              "Feature enhancements",
              "Performance monitoring",
              "Security updates",
              "Ongoing support"
            ]} 
            step="4"
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechCard
            title="Frontend"
            description="React, Next.js, TypeScript, Tailwind CSS"
            icon="🎨"
          />
          <TechCard
            title="Backend"
            description="Node.js, Python, PostgreSQL, Redis"
            icon="⚙️"
          />
          <TechCard
            title="Cloud"
            description="AWS, Vercel, Railway, Supabase"
            icon="☁️"
          />
          <TechCard
            title="AI/ML"
            description="OpenAI API, LangChain, Vector DBs"
            icon="🧠"
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MicroSaaSPricingPlan 
            name="MVP Development" 
            price="$15k–$35k" 
            duration="6–10 weeks"
            features={[
              "Core features only",
              "Basic UI/UX",
              "Single user type",
              "Essential integrations",
              "3 months support"
            ]}
            popular={false}
          />
          <MicroSaaSPricingPlan 
            name="Full SaaS Platform" 
            price="$35k–$75k" 
            duration="12–20 weeks"
            features={[
              "Complete feature set",
              "Advanced UI/UX",
              "Multi-user system",
              "Advanced integrations",
              "Analytics dashboard",
              "6 months support"
            ]}
            popular={true}
          />
          <MicroSaaSPricingPlan 
            name="Enterprise SaaS" 
            price="$75k+" 
            duration="20+ weeks"
            features={[
              "Custom enterprise features",
              "White-label solution",
              "Advanced security",
              "Custom integrations",
              "Dedicated support",
              "12 months support"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

function MicroSaaSSolution({ title, description, features, pricing, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-bold text-blue-600">{pricing}</div>
    </div>
  );
}

function ProcessStep({ title, details, step }: { 
  title: string; 
  details: string[]; 
  step: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-left">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600 text-sm">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function MicroSaaSPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border-2 rounded-xl p-6 ${popular ? 'border-blue-500 relative' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold text-center block transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Build Your Micro SaaS?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your micro SaaS idea and create a profitable, scalable solution. 
        Our team has launched 50+ successful micro SaaS products.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}