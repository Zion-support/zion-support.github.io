export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Comprehensive micro SaaS development services including AI-powered tools, automation platforms, and specialized business solutions.'
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
          From AI-powered tools to specialized business solutions, we create products that solve real problems.
        </p>
      </section>

      {/* Featured Micro SaaS Services */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Micro SaaS Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MicroSaaSCard
            title="AI Content Generator Pro"
            description="Advanced AI-powered content creation with brand voice training, multi-channel distribution, and performance analytics"
            features={["GPT-4 & Claude integration", "Brand voice training", "Multi-language support", "SEO optimization", "Social media scheduling", "Performance analytics"]}
            pricing="$2,999/month"
            category="AI Tools"
            icon="🤖"
          />
          <MicroSaaSCard
            title="Invoice Automation Pro"
            description="Intelligent invoice processing with OCR, approval workflows, and seamless accounting integration"
            features={["Advanced OCR processing", "Smart categorization", "Approval workflows", "QuickBooks/Xero integration", "Mobile app", "Fraud detection"]}
            pricing="$1,999/month"
            category="Business Automation"
            icon="📄"
          />
          <MicroSaaSCard
            title="Social Media Command Center"
            description="Comprehensive social media management with AI content suggestions, scheduling, and detailed analytics"
            features={["Multi-platform posting", "AI content suggestions", "Advanced analytics", "Team collaboration", "Bulk upload", "Influencer tracking"]}
            pricing="$1,499/month"
            category="Marketing Tools"
            icon="📱"
          />
          <MicroSaaSCard
            title="Smart Time Tracker"
            description="Intelligent time tracking with productivity analytics, project management, and automated reporting"
            features={["AI-powered time tracking", "Project categorization", "Team dashboards", "Client reporting", "Integrations", "Productivity insights"]}
            pricing="$999/month"
            category="Productivity"
            icon="⏱️"
          />
          <MicroSaaSCard
            title="Email Marketing Automation Suite"
            description="Advanced email marketing platform with AI-powered automation, segmentation, and deliverability optimization"
            features={["Drag-drop builder", "AI automation workflows", "Advanced segmentation", "A/B testing", "Deliverability tools", "Revenue attribution"]}
            pricing="$1,299/month"
            category="Marketing Tools"
            icon="📧"
          />
          <MicroSaaSCard
            title="AI Customer Support Hub"
            description="Next-generation customer support with AI chatbots, intelligent routing, and comprehensive analytics"
            features={["Advanced AI chatbots", "Smart ticket routing", "Knowledge base", "Multi-channel support", "Sentiment analysis", "Performance metrics"]}
            pricing="$2,499/month"
            category="Customer Service"
            icon="🎧"
          />
          <MicroSaaSCard
            title="Lead Generation Engine"
            description="Automated lead generation and qualification platform with AI-powered prospecting and CRM integration"
            features={["AI prospecting", "Lead scoring", "Email sequences", "CRM integration", "LinkedIn automation", "Lead nurturing"]}
            pricing="$1,799/month"
            category="Sales Tools"
            icon="🎯"
          />
          <MicroSaaSCard
            title="Website Performance Optimizer"
            description="AI-powered website optimization tool for speed, SEO, and conversion rate improvement"
            features={["Speed optimization", "SEO analysis", "Conversion tracking", "A/B testing", "Core Web Vitals", "Mobile optimization"]}
            pricing="$1,199/month"
            category="Web Tools"
            icon="⚡"
          />
          <MicroSaaSCard
            title="HR Management Suite"
            description="Complete HR management platform with recruitment, onboarding, performance tracking, and payroll integration"
            features={["Recruitment automation", "Employee onboarding", "Performance reviews", "Payroll integration", "Time off management", "Compliance tracking"]}
            pricing="$2,299/month"
            category="HR Tools"
            icon="👥"
          />
          <MicroSaaSCard
            title="Financial Analytics Dashboard"
            description="Comprehensive financial analytics and reporting platform for small to medium businesses"
            features={["Real-time reporting", "Cash flow analysis", "Budget tracking", "Tax preparation", "Investment tracking", "Financial forecasting"]}
            pricing="$1,599/month"
            category="Finance Tools"
            icon="💰"
          />
          <MicroSaaSCard
            title="Inventory Management Pro"
            description="Smart inventory management with AI demand forecasting, automated reordering, and multi-location support"
            features={["AI demand forecasting", "Automated reordering", "Multi-location support", "Barcode scanning", "Supplier management", "Cost optimization"]}
            pricing="$1,399/month"
            category="Inventory Tools"
            icon="📦"
          />
          <MicroSaaSCard
            title="Project Management AI"
            description="Intelligent project management with AI-powered resource allocation, risk prediction, and automated reporting"
            features={["AI resource allocation", "Risk prediction", "Automated reporting", "Team collaboration", "Gantt charts", "Budget tracking"]}
            pricing="$1,699/month"
            category="Project Management"
            icon="📊"
          />
          <MicroSaaSCard
            title="E-commerce Analytics Pro"
            description="Advanced e-commerce analytics platform with customer behavior insights, conversion optimization, and revenue forecasting"
            features={["Customer behavior analysis", "Conversion optimization", "Revenue forecasting", "A/B testing", "Cart abandonment recovery", "Customer lifetime value"]}
            pricing="$1,899/month"
            category="E-commerce Tools"
            icon="🛒"
          />
          <MicroSaaSCard
            title="API Management Gateway"
            description="Enterprise-grade API management platform with security, monitoring, and developer portal features"
            features={["API security", "Rate limiting", "Developer portal", "Analytics & monitoring", "Documentation", "Version management"]}
            pricing="$2,199/month"
            category="Developer Tools"
            icon="🔌"
          />
          <MicroSaaSCard
            title="Data Visualization Studio"
            description="Powerful data visualization and business intelligence platform with interactive dashboards and real-time analytics"
            features={["Interactive dashboards", "Real-time analytics", "Custom visualizations", "Data connectors", "Collaborative features", "Mobile access"]}
            pricing="$1,499/month"
            category="Data Tools"
            icon="📈"
          />
          <MicroSaaSCard
            title="Security Monitoring Center"
            description="Comprehensive cybersecurity monitoring platform with threat detection, compliance reporting, and incident response"
            features={["Threat detection", "Compliance reporting", "Incident response", "Vulnerability scanning", "Security training", "24/7 monitoring"]}
            pricing="$2,799/month"
            category="Security Tools"
            icon="🔒"
          />
          <MicroSaaSCard
            title="Workflow Automation Engine"
            description="No-code workflow automation platform for business process optimization and task automation"
            features={["No-code builder", "Process optimization", "Task automation", "Integration hub", "Custom triggers", "Performance analytics"]}
            pricing="$1,299/month"
            category="Automation Tools"
            icon="⚙️"
          />
          <MicroSaaSCard
            title="Customer Feedback Analytics"
            description="AI-powered customer feedback analysis platform with sentiment analysis, trend identification, and action recommendations"
            features={["Sentiment analysis", "Trend identification", "Action recommendations", "Multi-channel collection", "Real-time alerts", "ROI tracking"]}
            pricing="$1,399/month"
            category="Analytics Tools"
            icon="💬"
          />
        </div>
      </section>

      {/* Core Development Services */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceItem 
            title="Core Platform Development" 
            details={[
              "Multi-tenant architecture",
              "Authentication & authorization",
              "Payment processing (Stripe)",
              "Admin dashboard & analytics",
              "In-app onboarding flows",
              "API development & documentation"
            ]} 
          />
          <ServiceItem 
            title="Growth & Marketing Stack" 
            details={[
              "SEO-optimized marketing site",
              "Blog & documentation system",
              "Email marketing automation",
              "Referral & affiliate programs",
              "A/B testing framework",
              "Analytics & conversion tracking"
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
              "24/7 support setup"
            ]} 
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Development Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan 
            name="MVP Sprint" 
            price="$8,000 - $20,000" 
            duration="2-4 weeks"
            features={[
              "Core MVP features",
              "Basic authentication",
              "Stripe integration",
              "Simple admin panel",
              "Basic analytics",
              "Deployment & hosting"
            ]}
            popular={false}
          />
          <PricingPlan 
            name="Growth Platform" 
            price="$20,000 - $60,000" 
            duration="6-10 weeks"
            features={[
              "Full feature set",
              "Advanced analytics",
              "SEO optimization",
              "Email automation",
              "Team collaboration",
              "Mobile responsiveness"
            ]}
            popular={true}
          />
          <PricingPlan 
            name="Enterprise Scale" 
            price="$60,000+" 
            duration="12+ weeks"
            features={[
              "Custom architecture",
              "Advanced security",
              "Multi-region deployment",
              "SLA guarantees",
              "Dedicated support",
              "Custom integrations"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
}

function MicroSaaSCard({ title, description, features, pricing, category, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-4">
        <div className="text-2xl font-bold text-gray-900 mb-2">{pricing}</div>
        <a 
          href="tel:+13024640950"
          className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors block"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

function ServiceItem({ title, details }: { title: string; details: string[] }) {
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
    <div className={`bg-white border rounded-xl p-6 ${popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-blue-600 text-white text-center py-1 px-3 rounded-full text-sm font-medium mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors block ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        Contact Us
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Build Your Micro SaaS?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your idea and create a custom solution that drives real revenue. 
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