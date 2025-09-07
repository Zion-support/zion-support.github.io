<<<<<<< HEAD
<<<<<<< HEAD
export const metadata = { 
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
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From AI-powered tools to productivity apps, we create solutions that solve real problems and generate sustainable revenue.
        </p>
      </section>

      {/* Featured Micro SaaS Solutions */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MicroSaaSProduct
            title="AI Content Generator"
            description="AI-powered content creation tool with templates, brand voice training, and multi-platform publishing"
            features={["GPT-4 integration", "Brand voice training", "SEO optimization", "Multi-platform publishing", "Analytics dashboard"]}
            pricing="$29-199/month"
            icon="✍️"
          />
          <MicroSaaSProduct
            title="Social Media Scheduler"
            description="Advanced social media management with AI-powered optimal posting times and content suggestions"
            features={["Multi-platform posting", "AI timing optimization", "Content calendar", "Analytics & insights", "Team collaboration"]}
            pricing="$19-149/month"
            icon="📱"
          />
          <MicroSaaSProduct
            title="Email Marketing Automation"
            description="Intelligent email marketing platform with behavioral triggers and advanced segmentation"
            features={["Behavioral triggers", "Advanced segmentation", "A/B testing", "Template library", "Deliverability optimization"]}
            pricing="$39-299/month"
            icon="📧"
          />
          <MicroSaaSProduct
            title="Project Management AI"
            description="AI-enhanced project management with predictive analytics and automated resource allocation"
            features={["AI task prioritization", "Resource optimization", "Risk prediction", "Time tracking", "Team performance insights"]}
            pricing="$49-249/month"
            icon="📊"
          />
          <MicroSaaSProduct
            title="Customer Support Bot"
            description="Intelligent customer support automation with multi-language support and escalation management"
            features={["Multi-language support", "Ticket routing", "Knowledge base", "Sentiment analysis", "Performance metrics"]}
            pricing="$79-399/month"
            icon="🤖"
          />
          <MicroSaaSProduct
            title="Analytics Dashboard"
            description="Custom business intelligence platform with real-time data visualization and predictive insights"
            features={["Real-time dashboards", "Custom metrics", "Data integration", "Predictive analytics", "Export capabilities"]}
            pricing="$99-499/month"
            icon="📈"
          />
        </div>
      </section>

      {/* Core Development Services */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceItem 
            title="Core Features" 
            details={[
              "Multi-tenant architecture",
              "Authentication (email, OAuth, SSO)",
              "Payment processing (Stripe, PayPal)",
              "Admin dashboard & analytics",
              "In-app onboarding & tutorials",
              "API development & documentation"
            ]} 
          />
          <ServiceItem 
            title="Growth Stack" 
            details={[
              "SEO-optimized marketing site",
              "Blog & documentation system",
              "Email marketing automation",
              "Referral & affiliate programs",
              "A/B testing framework",
              "User feedback collection"
            ]} 
          />
          <ServiceItem 
            title="Operations & Reliability" 
            details={[
              "CI/CD pipeline setup",
              "Monitoring & observability",
              "Error tracking & alerting",
              "Performance optimization",
              "Security hardening",
              "Backup & disaster recovery"
            ]} 
=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.',
  keywords: 'micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence'
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full text-xl font-bold mb-4">
      {step}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactSection: React.FC = () => (
  <section className="py-12 bg-green-600 rounded-lg text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Micro SaaS?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Let's build your next revenue-generating micro SaaS product together.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Development Inquiry"
        className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Free Consultation
      </a>
      <a
        href="tel:+13024640950"
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
      >
        Call +1 302 464 0950
      </a>
    </div>
    <div className="mt-8 text-sm">
      <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      <p>📧 kleber@ziontechgroup.com</p>
    </div>
  </section>
);

export default function MicroSaaSPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Micro SaaS Development
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Build and launch your next micro SaaS product with our comprehensive development services.
          From AI-powered tools to productivity apps, we help you create revenue-generating solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Development Inquiry"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Your SaaS Project
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Development Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology to deliver successful micro SaaS products that generate revenue.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step={1}
            title="Idea Validation & Strategy"
            description="Refining your micro SaaS idea, market research, and business model development."
          />
          <ProcessStep
            step={2}
            title="Development & MVP Launch"
            description="Agile development, rapid prototyping, and launching a Minimum Viable Product."
          />
          <ProcessStep
            step={3}
            title="Growth & Optimization"
            description="User feedback integration, feature expansion, and continuous performance optimization."
<<<<<<< HEAD
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
          />
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan 
            name="MVP Sprint" 
            price="$8k–$20k" 
            duration="2–4 weeks"
            features={[
              "MVP scope definition",
              "Core functionality development",
              "Stripe billing integration",
              "Basic analytics dashboard",
              "Deployment & hosting setup",
              "30 days post-launch support"
            ]}
            popular={false}
          />
          <PricingPlan 
            name="Growth Platform" 
            price="$20k–$60k" 
            duration="6–10 weeks"
            features={[
              "Full feature development",
              "SEO-optimized marketing site",
              "Advanced analytics & reporting",
              "Email marketing integration",
              "User management system",
              "3 months post-launch support"
            ]}
            popular={true}
          />
          <PricingPlan 
            name="Enterprise Scale" 
            price="$60k+" 
            duration="Custom timeline"
            features={[
              "Custom roadmap development",
              "Advanced security features",
              "Multi-region deployment",
              "SLA guarantees",
              "Dedicated support team",
              "Ongoing maintenance & updates"
            ]}
            popular={false}
=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Micro SaaS We Build</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized tools designed to solve specific problems for niche markets.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="AI-Powered Tools"
            description="Leveraging AI for automation, content generation, and intelligent insights."
            icon="🤖"
          />
          <FeatureCard
            title="Productivity Apps"
            description="Streamlining workflows, task management, and team collaboration."
            icon="🚀"
          />
          <FeatureCard
            title="Marketing Automation"
            description="Automating email campaigns, social media, and lead generation processes."
            icon="📧"
          />
          <FeatureCard
            title="Business Intelligence"
            description="Providing dashboards and reports for data-driven decision making."
            icon="📊"
          />
          <FeatureCard
            title="Niche Utilities"
            description="Solving specific, underserved problems for targeted audiences."
            icon="🛠️"
          />
          <FeatureCard
            title="Integration Tools"
            description="Connecting disparate systems and automating data flow between applications."
            icon="🔗"
<<<<<<< HEAD
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
          />
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

function MicroSaaSProduct({ title, description, features, pricing, icon }: {
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

function ServiceItem({ title, details }: { 
  title: string; 
  details: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingPlan({ name, price, duration, features, popular }: {
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
        Let's discuss your idea and create a custom solution that generates revenue from day one. 
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
=======
      <ContactSection />
    </div>
  );
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
      <ContactSection />
    </div>
  );
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
}