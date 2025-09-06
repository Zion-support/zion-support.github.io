export const metadata = { title: 'Micro SaaS Development | Zion Tech Group' };

export default function MicroSaaSPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From MVP to scale, we handle every aspect of your product journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard 
          title="Core Features" 
          features={[
            "Multi-tenant architecture",
            "Authentication (email, OAuth, SSO)",
            "Billing & subscriptions (Stripe, PayPal)",
            "Admin dashboard & analytics",
            "In-app onboarding & tutorials",
            "API development & documentation"
          ]}
          icon="🚀"
        />
        <FeatureCard 
          title="Growth Stack" 
          features={[
            "SEO-optimized marketing site",
            "Blog & documentation system",
            "Email marketing automation",
            "Referral & affiliate programs",
            "A/B testing framework",
            "Analytics & conversion tracking"
          ]}
          icon="📈"
        />
        <FeatureCard 
          title="Operations & Reliability" 
          features={[
            "CI/CD pipelines",
            "Monitoring & observability",
            "Error tracking & budgets",
            "SLOs & performance metrics",
            "24/7 on-call support",
            "Disaster recovery planning"
          ]}
          icon="⚙️"
        />
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Micro SaaS Development?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Time-to-Market</h3>
            <p className="text-gray-600">Launch your MVP in 2-4 weeks with our proven development process</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue-Focused</h3>
            <p className="text-gray-600">Built-in monetization strategies and growth optimization</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
            <p className="text-gray-600">SOC 2 compliance, data encryption, and security best practices</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven Growth</h3>
            <p className="text-gray-600">Advanced analytics and insights to optimize user engagement</p>
          </div>
        </div>
      </div>

      <PricingSection />
      
      <ContactSection />
    </div>
  );
}

function FeatureCard({ title, features, icon }: { title: string; features: string[]; icon: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard 
          name="MVP Sprint" 
          price="$8k–$20k" 
          duration="2–4 weeks"
          features={[
            "Complete MVP development",
            "Stripe billing integration",
            "Basic analytics dashboard",
            "User authentication",
            "Admin panel",
            "Deployment & hosting setup"
          ]}
          popular={false}
        />
        <PricingCard 
          name="Growth Package" 
          price="$20k–$60k" 
          duration="6–10 weeks"
          features={[
            "Everything in MVP Sprint",
            "SEO-optimized marketing site",
            "Content management system",
            "Email marketing automation",
            "Advanced analytics & reporting",
            "A/B testing framework",
            "Referral system",
            "Mobile-responsive design"
          ]}
          popular={true}
        />
        <PricingCard 
          name="Scale & Enterprise" 
          price="$60k+" 
          duration="Custom timeline"
          features={[
            "Everything in Growth Package",
            "Custom feature development",
            "SRE & security hardening",
            "Multi-region deployment",
            "SLA guarantees",
            "24/7 monitoring",
            "Dedicated support team",
            "Custom integrations"
          ]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`relative bg-white border-2 rounded-xl p-8 ${popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your project and create a custom solution that drives revenue and growth for your business.
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
      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
