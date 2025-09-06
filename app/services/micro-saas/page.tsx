export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Comprehensive micro SaaS solutions including productivity tools, analytics platforms, automation services, and specialized business applications.'
};

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
            From productivity tools to specialized business applications.
          </p>
        </div>

        {/* Core Development Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Multi-tenant Architecture" 
              description="Scalable, secure multi-tenant systems with data isolation and custom branding"
              features={["Database per tenant", "Custom domains", "White-label options", "API rate limiting"]}
              icon="🏗️"
            />
            <ServiceCard 
              title="Authentication & Security" 
              description="Enterprise-grade auth with SSO, MFA, and role-based access control"
              features={["OAuth 2.0/OpenID", "SAML SSO", "Multi-factor auth", "Audit logging"]}
              icon="🔐"
            />
            <ServiceCard 
              title="Billing & Subscriptions" 
              description="Flexible billing with usage-based pricing, trials, and automated invoicing"
              features={["Stripe integration", "Usage metering", "Proration handling", "Dunning management"]}
              icon="💳"
            />
          </div>
        </div>

        {/* Specialized Micro SaaS Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Micro SaaS Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              name="TaskFlow Pro"
              description="AI-powered project management with smart scheduling and resource optimization"
              price="$29/month"
              features={["Smart task prioritization", "Team collaboration", "Progress analytics", "Integration hub"]}
              category="Productivity"
            />
            <ProductCard 
              name="DataViz Studio"
              description="Create stunning interactive dashboards and reports from any data source"
              price="$49/month"
              features={["Drag-and-drop builder", "Real-time updates", "Custom themes", "Export options"]}
              category="Analytics"
            />
            <ProductCard 
              name="EmailCraft AI"
              description="AI-powered email marketing with personalization and automation"
              price="$39/month"
              features={["Smart segmentation", "A/B testing", "Deliverability optimization", "ROI tracking"]}
              category="Marketing"
            />
            <ProductCard 
              name="CodeReview Assistant"
              description="Automated code review with security scanning and best practice suggestions"
              price="$79/month"
              features={["Security vulnerability detection", "Performance analysis", "Code quality metrics", "Team insights"]}
              category="Development"
            />
            <ProductCard 
              name="InvoiceGen Pro"
              description="Automated invoice generation with payment tracking and accounting integration"
              price="$19/month"
              features={["Template library", "Payment reminders", "Tax calculations", "QuickBooks sync"]}
              category="Finance"
            />
            <ProductCard 
              name="SocialScheduler"
              description="Multi-platform social media scheduling with content optimization"
              price="$34/month"
              features={["Multi-platform posting", "Optimal timing", "Content calendar", "Performance analytics"]}
              category="Social Media"
            />
            <ProductCard 
              name="LeadTracker CRM"
              description="Lightweight CRM with lead scoring and automated follow-ups"
              price="$24/month"
              features={["Lead scoring", "Email sequences", "Pipeline management", "Mobile app"]}
              category="Sales"
            />
            <ProductCard 
              name="DocuSign Pro"
              description="Electronic signature solution with workflow automation and compliance"
              price="$59/month"
              features={["Digital signatures", "Workflow automation", "Compliance tracking", "Audit trails"]}
              category="Document Management"
            />
            <ProductCard 
              name="TimeTracker Plus"
              description="Advanced time tracking with project billing and team productivity insights"
              price="$29/month"
              features={["Automatic time tracking", "Project billing", "Productivity reports", "Team insights"]}
              category="Time Management"
            />
            <ProductCard 
              name="SurveyBuilder AI"
              description="Create intelligent surveys with AI-powered question suggestions and analytics"
              price="$39/month"
              features={["AI question generation", "Advanced analytics", "Custom branding", "Response management"]}
              category="Research"
            />
            <ProductCard 
              name="PasswordVault"
              description="Enterprise password management with team sharing and security monitoring"
              price="$49/month"
              features={["Secure sharing", "Breach monitoring", "Password generation", "Team policies"]}
              category="Security"
            />
            <ProductCard 
              name="MeetingScheduler"
              description="Smart meeting scheduling with calendar integration and automated reminders"
              price="$19/month"
              features={["Calendar sync", "Smart scheduling", "Reminder automation", "Meeting analytics"]}
              category="Scheduling"
            />
            <ProductCard 
              name="ContentOptimizer"
              description="SEO and content optimization tool with keyword research and performance tracking"
              price="$44/month"
              features={["Keyword research", "Content scoring", "Competitor analysis", "Performance tracking"]}
              category="SEO"
            />
            <ProductCard 
              name="ExpenseTracker"
              description="Automated expense management with receipt scanning and reimbursement workflows"
              price="$29/month"
              features={["Receipt scanning", "Expense categorization", "Approval workflows", "Reporting"]}
              category="Finance"
            />
            <ProductCard 
              name="TeamChat Pro"
              description="Secure team communication with file sharing and video conferencing"
              price="$39/month"
              features={["Secure messaging", "File sharing", "Video calls", "Screen sharing"]}
              category="Communication"
            />
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep 
              step="1"
              title="Discovery & Planning"
              description="We analyze your requirements and create a detailed roadmap"
              features={["Market research", "Technical architecture", "Timeline planning", "Resource allocation"]}
            />
            <ProcessStep 
              step="2"
              title="Development & Testing"
              description="Agile development with continuous testing and feedback"
              features={["Sprint planning", "Code reviews", "Automated testing", "User feedback"]}
            />
            <ProcessStep 
              step="3"
              title="Launch & Support"
              description="Deployment, monitoring, and ongoing maintenance"
              features={["Production deployment", "Performance monitoring", "User training", "24/7 support"]}
            />
          </div>
        </div>

        <Pricing />
        <ContactSection />
      </div>
    </div>
  );
}

function ServiceCard({ title, description, features, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  icon: string; 
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductCard({ name, description, price, features, category }: { 
  name: string; 
  description: string; 
  price: string; 
  features: string[]; 
  category: string; 
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">{category}</span>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="text-2xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-1 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 text-sm">
            <span className="text-green-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  );
}

function ProcessStep({ step, title, description, features }: { 
  step: string; 
  title: string; 
  description: string; 
  features: string[]; 
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
          {step}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h3 style={{fontWeight: 700}}>{title}</h3>
      <ul style={{paddingLeft: 18, color: '#4b5563'}}>{details.map(d => (<li key={d} style={{listStyle: 'disc'}}>{d}</li>))}</ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Development Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="MVP Sprint" 
          price="$8k–$20k" 
          features={["2–4 weeks", "MVP scope", "Stripe billing", "Basic analytics", "Core features only"]} 
          popular={false}
        />
        <Plan 
          name="Growth" 
          price="$20k–$60k" 
          features={["6–10 weeks", "SEO + content", "CRM + email", "Observability", "Advanced features"]} 
          popular={true}
        />
        <Plan 
          name="Scale" 
          price="$60k+" 
          features={["Custom roadmap", "SRE + security", "Multi-region", "SLAs", "Enterprise features"]} 
          popular={false}
        />
      </div>
    </div>
  );
}

function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? 'border-blue-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-4xl font-bold text-gray-900 mb-6">{price}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
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
      <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h3>
      <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
        Let's discuss your project and create a custom solution that drives real business value. 
        Our team of experts is ready to help you launch your next successful micro SaaS product.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">📞 Call Us</h4>
          <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700 font-medium">
            +1 302 464 0950
          </a>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">✉️ Email Us</h4>
          <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 font-medium">
            kleber@ziontechgroup.com
          </a>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">📍 Visit Us</h4>
          <p className="text-gray-600 text-sm">
            364 E Main St STE 1008<br />
            Middletown DE 19709
          </p>
        </div>
      </div>
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
    </div>
  );
}