export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Comprehensive micro SaaS solutions including productivity tools, business automation, analytics platforms, and specialized industry applications.'
};

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Micro SaaS Solutions</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
            From productivity tools to specialized business applications, we create solutions that solve real problems.
          </p>
        </div>

        {/* Core Development Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Multi-tenant Architecture"
              description="Scalable, secure multi-tenant systems with data isolation and custom branding"
              features={["Tenant isolation", "Custom domains", "White-label options", "Resource quotas"]}
              price="Starting at $15k"
              icon="🏗️"
            />
            <ServiceCard
              title="Authentication & Security"
              description="Enterprise-grade auth with SSO, MFA, and role-based access control"
              features={["OAuth 2.0/OpenID", "SAML SSO", "Multi-factor auth", "API security"]}
              price="Starting at $8k"
              icon="🔐"
            />
            <ServiceCard
              title="Billing & Subscriptions"
              description="Complete billing system with Stripe integration and subscription management"
              features={["Stripe integration", "Usage-based billing", "Proration handling", "Invoice automation"]}
              price="Starting at $12k"
              icon="💳"
            />
          </div>
        </div>

        {/* Productivity & Business Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Productivity & Business Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Project Management Suite"
              description="Comprehensive project tracking with Gantt charts, time tracking, and team collaboration"
              features={["Task management", "Time tracking", "Resource planning", "Team collaboration"]}
              price="$25k - $45k"
              icon="📋"
            />
            <ServiceCard
              title="CRM & Sales Pipeline"
              description="Customer relationship management with automated workflows and sales analytics"
              features={["Lead management", "Sales pipeline", "Email automation", "Analytics dashboard"]}
              price="$20k - $35k"
              icon="📈"
            />
            <ServiceCard
              title="Document Management System"
              description="Secure document storage with version control, collaboration, and approval workflows"
              features={["Version control", "Collaborative editing", "Approval workflows", "Search & indexing"]}
              price="$18k - $30k"
              icon="📄"
            />
            <ServiceCard
              title="Inventory Management"
              description="Real-time inventory tracking with automated reordering and analytics"
              features={["Real-time tracking", "Automated reordering", "Multi-location support", "Analytics"]}
              price="$22k - $40k"
              icon="📦"
            />
            <ServiceCard
              title="Employee Scheduling"
              description="Smart scheduling system with shift management and time-off tracking"
              features={["Shift scheduling", "Time-off management", "Labor cost tracking", "Mobile app"]}
              price="$15k - $28k"
              icon="⏰"
            />
            <ServiceCard
              title="Expense Management"
              description="Automated expense tracking with receipt scanning and approval workflows"
              features={["Receipt scanning", "Expense categorization", "Approval workflows", "Reporting"]}
              price="$12k - $25k"
              icon="💰"
            />
          </div>
        </div>

        {/* Analytics & Data Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Analytics & Data Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Business Intelligence Dashboard"
              description="Custom BI dashboards with real-time data visualization and reporting"
              features={["Custom dashboards", "Real-time data", "Interactive charts", "Export capabilities"]}
              price="$30k - $55k"
              icon="📊"
            />
            <ServiceCard
              title="Website Analytics Platform"
              description="Advanced web analytics with user behavior tracking and conversion optimization"
              features={["User behavior tracking", "Conversion funnels", "A/B testing", "Heatmaps"]}
              price="$20k - $40k"
              icon="🌐"
            />
            <ServiceCard
              title="Social Media Analytics"
              description="Comprehensive social media monitoring and analytics across all platforms"
              features={["Multi-platform monitoring", "Sentiment analysis", "Engagement metrics", "Reporting"]}
              price="$18k - $35k"
              icon="📱"
            />
            <ServiceCard
              title="Email Marketing Analytics"
              description="Advanced email campaign tracking with open rates, click tracking, and ROI analysis"
              features={["Open/click tracking", "A/B testing", "ROI analysis", "Automation"]}
              price="$15k - $30k"
              icon="📧"
            />
          </div>
        </div>

        {/* Industry-Specific Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry-Specific Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Healthcare Management"
              description="Patient management system with appointment scheduling and medical records"
              features={["Patient records", "Appointment scheduling", "HIPAA compliance", "Billing integration"]}
              price="$40k - $70k"
              icon="🏥"
            />
            <ServiceCard
              title="Restaurant POS System"
              description="Complete point-of-sale system with inventory management and analytics"
              features={["Order management", "Inventory tracking", "Staff management", "Analytics"]}
              price="$25k - $50k"
              icon="🍽️"
            />
            <ServiceCard
              title="Real Estate CRM"
              description="Property management and client relationship system for real estate professionals"
              features={["Property listings", "Lead management", "Document management", "Commission tracking"]}
              price="$30k - $55k"
              icon="🏠"
            />
            <ServiceCard
              title="Fitness Studio Management"
              description="Complete gym and fitness studio management with class scheduling and member tracking"
              features={["Class scheduling", "Member management", "Payment processing", "Equipment tracking"]}
              price="$20k - $40k"
              icon="💪"
            />
            <ServiceCard
              title="Legal Case Management"
              description="Case management system for law firms with document automation and billing"
              features={["Case tracking", "Document automation", "Time tracking", "Billing integration"]}
              price="$35k - $60k"
              icon="⚖️"
            />
            <ServiceCard
              title="E-learning Platform"
              description="Online learning management system with course creation and student tracking"
              features={["Course creation", "Student progress", "Certification", "Payment processing"]}
              price="$30k - $55k"
              icon="🎓"
            />
          </div>
        </div>

        {/* Communication & Collaboration */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Communication & Collaboration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Team Chat & Video"
              description="Internal communication platform with video conferencing and file sharing"
              features={["Instant messaging", "Video calls", "File sharing", "Screen sharing"]}
              price="$25k - $45k"
              icon="💬"
            />
            <ServiceCard
              title="Customer Support Portal"
              description="Multi-channel customer support with ticketing and knowledge base"
              features={["Ticket management", "Live chat", "Knowledge base", "Analytics"]}
              price="$20k - $40k"
              icon="🎧"
            />
            <ServiceCard
              title="Internal Wiki & Knowledge Base"
              description="Company knowledge management with search and collaboration features"
              features={["Documentation", "Search functionality", "Version control", "Collaboration"]}
              price="$15k - $30k"
              icon="📚"
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              name="MVP Sprint"
              price="$8k - $20k"
              duration="2-4 weeks"
              features={[
                "Core functionality only",
                "Basic UI/UX design",
                "Stripe billing integration",
                "Basic analytics",
                "Single tenant",
                "2 weeks support"
              ]}
              popular={false}
            />
            <PricingCard
              name="Growth Package"
              price="$20k - $60k"
              duration="6-10 weeks"
              features={[
                "Full feature set",
                "Professional UI/UX",
                "Multi-tenant architecture",
                "Advanced analytics",
                "SEO-optimized marketing site",
                "Email automation",
                "3 months support"
              ]}
              popular={true}
            />
            <PricingCard
              name="Enterprise Scale"
              price="$60k+"
              duration="Custom timeline"
              features={[
                "Custom enterprise features",
                "Advanced security & compliance",
                "Multi-region deployment",
                "24/7 monitoring",
                "Dedicated support team",
                "SLA guarantees",
                "6 months support"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </div>
  );
}

function ServiceCard({ 
  title, 
  description, 
  features, 
  price, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-lg font-bold text-blue-600 mb-4">{price}</div>
      <a 
        href="tel:+13024640950" 
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Quote
      </a>
    </div>
  );
}

function PricingCard({ 
  name, 
  price, 
  duration, 
  features, 
  popular 
}: { 
  name: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${popular ? 'border-blue-500' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
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

function ContactCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white">
      <h2 className="text-4xl font-bold mb-6">Ready to Build Your Micro SaaS?</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto">
        Let's discuss your project and create a custom solution that drives real business value. 
        Our team of experts is ready to help you launch your next successful micro SaaS product.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a
          href="tel:+13024640950"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          📞 Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
        >
          ✉️ Email Us
        </a>
        <div className="text-center">
          <div className="text-sm opacity-90">Visit us at:</div>
          <div className="font-semibold">364 E Main St STE 1008</div>
          <div className="font-semibold">Middletown, DE 19709</div>
        </div>
      </div>
    </div>
  );
}