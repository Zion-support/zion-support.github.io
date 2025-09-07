<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'End-to-end micro SaaS development with billing, auth, analytics, and growth features. From MVP to scale.'
};

function PricingTier({ name, price, period, description, features, popular = false, cta }: PricingTierProps) {
  return (
    <div className={`relative bg-white rounded-lg shadow-lg p-8 ${popular ? 'ring-2 ring-blue-500' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
=======
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
          />
        </div>
      </section>

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
          />
        </div>
      </section>

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
>>>>>>> cb8cfb4fb3d771dc157162ef9d8670f2dbe493da
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
<<<<<<< HEAD
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">/{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
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
      <Link
        href="/contact"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {cta}
      </Link>
=======
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
>>>>>>> cb8cfb4fb3d771dc157162ef9d8670f2dbe493da
    </div>
  );
}

<<<<<<< HEAD
export default function MicroSaaSPage() {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          End-to-end micro SaaS development with billing, auth, analytics, and growth features. 
          From MVP to scale, we help you build profitable software products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">MVP Development</h3>
          <p className="text-gray-600 mb-4">
            Rapidly build and launch your minimum viable product with core features.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• User authentication</li>
            <li>• Core functionality</li>
            <li>• Basic UI/UX</li>
            <li>• Database setup</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">💳</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Billing & Payments</h3>
          <p className="text-gray-600 mb-4">
            Complete payment processing with subscription management and invoicing.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Stripe integration</li>
            <li>• Subscription management</li>
            <li>• Invoice generation</li>
            <li>• Payment analytics</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Metrics</h3>
          <p className="text-gray-600 mb-4">
            Track user behavior and business metrics with comprehensive analytics.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• User analytics</li>
            <li>• Revenue tracking</li>
            <li>• Performance metrics</li>
            <li>• Custom dashboards</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">🔐</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Auth</h3>
          <p className="text-gray-600 mb-4">
            Enterprise-grade security with multi-factor authentication and data protection.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• JWT authentication</li>
            <li>• Role-based access</li>
            <li>• Data encryption</li>
            <li>• Security monitoring</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance & Scale</h3>
          <p className="text-gray-600 mb-4">
            Optimized for performance with auto-scaling and CDN integration.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Auto-scaling</li>
            <li>• CDN integration</li>
            <li>• Database optimization</li>
            <li>• Caching strategies</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Features</h3>
          <p className="text-gray-600 mb-4">
            Built-in growth tools including referrals, onboarding, and user engagement.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Referral system</li>
            <li>• Onboarding flows</li>
            <li>• Email automation</li>
            <li>• User engagement</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            name="Starter"
            price="$5,000"
            period="project"
            description="Perfect for MVPs and early-stage products"
            features={[
              "Basic authentication",
              "Core functionality",
              "Simple UI/UX",
              "Basic analytics",
              "1 month support"
            ]}
            cta="Get Started"
          />
          <PricingTier
            name="Professional"
            price="$15,000"
            period="project"
            description="Full-featured SaaS with advanced capabilities"
            features={[
              "Complete authentication",
              "Payment integration",
              "Advanced analytics",
              "Admin dashboard",
              "3 months support"
            ]}
            popular={true}
            cta="Most Popular"
          />
          <PricingTier
            name="Enterprise"
            price="$35,000"
            period="project"
            description="Enterprise-grade solution with custom features"
            features={[
              "Custom development",
              "Advanced security",
              "White-label options",
              "API development",
              "6 months support"
            ]}
            cta="Contact Us"
          />
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss your idea and create a profitable software product together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
=======
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
>>>>>>> cb8cfb4fb3d771dc157162ef9d8670f2dbe493da
      </div>
    </div>
  );
}