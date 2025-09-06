export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, automation platforms, and specialized business solutions.'
}; 

export default function MicroSaaSPage() { 
  return ( 
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Micro SaaS Development
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
            From AI-powered tools to specialized business solutions, we create products that solve real problems.
          </p>
        </div>

        {/* Core Development Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="AI-Powered Tools" 
              description="Intelligent automation tools, chatbots, content generators, and AI assistants"
              features={["GPT-4 integration", "Custom AI models", "Natural language processing", "Automated workflows"]}
              price="Starting at $15k"
              icon="🤖"
            />
            <ServiceCard 
              title="Business Automation" 
              description="Workflow automation, CRM integrations, and process optimization tools"
              features={["Zapier alternatives", "Custom integrations", "Workflow builders", "API development"]}
              price="Starting at $12k"
              icon="⚡"
            />
            <ServiceCard 
              title="Data Analytics Platforms" 
              description="Business intelligence tools, reporting dashboards, and data visualization"
              features={["Real-time dashboards", "Custom reports", "Data connectors", "Visualization tools"]}
              price="Starting at $18k"
              icon="📊"
            />
            <ServiceCard 
              title="Content Management" 
              description="CMS platforms, content creation tools, and digital asset management"
              features={["Headless CMS", "Content scheduling", "Multi-channel publishing", "Asset optimization"]}
              price="Starting at $10k"
              icon="📝"
            />
            <ServiceCard 
              title="E-commerce Solutions" 
              description="Online stores, marketplace platforms, and payment processing systems"
              features={["Multi-vendor support", "Payment gateways", "Inventory management", "Order tracking"]}
              price="Starting at $20k"
              icon="🛒"
            />
            <ServiceCard 
              title="Communication Tools" 
              description="Team collaboration, video conferencing, and messaging platforms"
              features={["Video calls", "Screen sharing", "File sharing", "Team channels"]}
              price="Starting at $14k"
              icon="💬"
            />
          </div>
        </div>

        {/* Specialized Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpecializedCard 
              title="Healthcare SaaS" 
              description="HIPAA-compliant patient management, telemedicine, and medical record systems"
              features={["Patient portals", "Appointment scheduling", "Medical records", "Telehealth integration"]}
              price="$25k - $80k"
              icon="🏥"
            />
            <SpecializedCard 
              title="FinTech Solutions" 
              description="Payment processing, financial planning, and investment tracking platforms"
              features={["Payment APIs", "Financial dashboards", "Investment tracking", "Compliance tools"]}
              price="$30k - $100k"
              icon="💰"
            />
            <SpecializedCard 
              title="EdTech Platforms" 
              description="Learning management systems, online courses, and educational tools"
              features={["Course creation", "Student tracking", "Assessment tools", "Progress analytics"]}
              price="$20k - $60k"
              icon="🎓"
            />
            <SpecializedCard 
              title="Real Estate Tools" 
              description="Property management, listing platforms, and transaction management"
              features={["Property listings", "Lead management", "Document handling", "Commission tracking"]}
              price="$18k - $50k"
              icon="🏠"
            />
          </div>
        </div>

        {/* Technical Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TechStackCard 
              title="Core Features" 
              details={["Multi-tenant architecture", "Auth (email, OAuth, SSO)", "Billing (Stripe, PayPal)", "Admin + analytics", "In-app onboarding", "API documentation"]} 
            />
            <TechStackCard 
              title="Growth Stack" 
              details={["SEO-ready marketing site", "Blog + documentation", "Email campaigns", "Referral + affiliates", "A/B testing", "Analytics tracking"]} 
            />
            <TechStackCard 
              title="Ops & Reliability" 
              details={["CI/CD pipelines", "Observability & monitoring", "Error budgets", "SLOs & SLAs", "On-call setup", "Disaster recovery"]} 
            />
          </div>
        </div>

        <Pricing />
        <ContactSection />
      </section>
    </div>
  ); 
} 

function ServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string;
  icon: string;
}) { 
  return ( 
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">{price}</div>
    </div>
  ); 
} 

function SpecializedCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string;
  icon: string;
}) { 
  return ( 
    <div className="border border-gray-200 rounded-xl p-8 hover:border-green-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-green-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <div className="text-xl font-semibold text-green-600">{price}</div>
    </div>
  ); 
} 

function TechStackCard({ title, details }: { title: string; details: string[] }) { 
  return ( 
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="text-gray-600 space-y-2">
        {details.map((detail) => (
          <li key={detail} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  ); 
} 

function Pricing() { 
  return ( 
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="MVP Sprint" 
          price="$8k–$20k" 
          duration="2–4 weeks"
          features={["MVP scope", "Stripe billing", "Basic analytics", "Core features", "Basic design"]} 
        />
        <Plan 
          name="Growth" 
          price="$20k–$60k" 
          duration="6–10 weeks"
          features={["SEO + content", "CRM + email", "Observability", "Advanced features", "Custom design"]} 
        />
        <Plan 
          name="Scale" 
          price="$60k+" 
          duration="Custom roadmap"
          features={["SRE + security", "Multi-region", "SLAs", "Enterprise features", "White-label options"]} 
        />
      </div>
    </div>
  ); 
} 

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) { 
  return ( 
    <div className="border border-gray-200 rounded-xl p-8 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-200">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="text-gray-600 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="mt-6 block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  ); 
} 

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">
        Ready to Build Your Micro SaaS?
      </h3>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
        Let's discuss your idea and create a custom solution that generates real revenue. 
        Our team has built 50+ successful micro SaaS products across various industries.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-500">
        <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}