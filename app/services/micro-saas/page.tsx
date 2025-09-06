export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS solutions including productivity tools, automation platforms, analytics dashboards, and specialized business applications. From MVP to scale.'
};

<<<<<<< HEAD
export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete micro SaaS solutions including productivity tools, automation platforms, 
            analytics dashboards, and specialized business applications. From MVP to scale.
          </p>
        </div>
=======
import Link from 'next/link';

export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Comprehensive micro SaaS development services with real-world solutions, innovative features, and competitive pricing.'
};

export default function MicroSaaSPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Micro SaaS Development Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
            From MVP to scale, we deliver production-ready solutions that drive real business value.
          </p>
        </div>

        {/* Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI-Powered Analytics Dashboard"
            description="Real-time business intelligence with predictive analytics and automated insights"
            features={[
              "Custom data visualization",
              "Machine learning predictions",
              "Real-time alerts & notifications",
              "Multi-source data integration",
              "Custom reporting & exports",
              "White-label branding"
            ]}
            pricing="$15k - $45k"
            timeline="4-8 weeks"
            icon="📊"
          />
          
          <ServiceCard
            title="Automated Workflow Builder"
            description="No-code automation platform for business processes and integrations"
            features={[
              "Drag-and-drop workflow designer",
              "200+ pre-built integrations",
              "Custom trigger & action creation",
              "Team collaboration tools",
              "Advanced analytics & monitoring",
              "API access & webhooks"
            ]}
            pricing="$12k - $35k"
            timeline="3-6 weeks"
            icon="⚡"
          />
          
          <ServiceCard
            title="Smart Document Management"
            description="AI-powered document processing with OCR, classification, and search"
            features={[
              "Intelligent document scanning",
              "Auto-categorization & tagging",
              "Advanced search capabilities",
              "Version control & audit trails",
              "Collaborative editing",
              "Compliance & security features"
            ]}
            pricing="$18k - $50k"
            timeline="5-10 weeks"
            icon="📄"
          />
          
          <ServiceCard
            title="Customer Success Platform"
            description="Comprehensive customer lifecycle management with engagement automation"
            features={[
              "Customer health scoring",
              "Automated engagement campaigns",
              "Success metrics tracking",
              "Integration with CRM systems",
              "Custom dashboard creation",
              "Advanced reporting suite"
            ]}
            pricing="$20k - $55k"
            timeline="6-12 weeks"
            icon="🎯"
          />
          
          <ServiceCard
            title="Financial Analytics Suite"
            description="Advanced financial reporting and forecasting for small to medium businesses"
            features={[
              "Real-time financial dashboards",
              "Automated forecasting models",
              "Expense categorization & tracking",
              "Tax preparation assistance",
              "Investment analysis tools",
              "Regulatory compliance reporting"
            ]}
            pricing="$25k - $60k"
            timeline="8-14 weeks"
            icon="💰"
          />
          
          <ServiceCard
            title="Team Productivity Hub"
            description="All-in-one collaboration platform with project management and communication tools"
            features={[
              "Project & task management",
              "Team chat & video calls",
              "File sharing & collaboration",
              "Time tracking & reporting",
              "Goal setting & tracking",
              "Performance analytics"
            ]}
            pricing="$10k - $30k"
            timeline="3-7 weeks"
            icon="👥"
          />
        </div>

        {/* Technical Stack */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Technical Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechStackItem
              title="Frontend"
              technologies={["React/Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
            />
            <TechStackItem
              title="Backend"
              technologies={["Node.js/Python", "PostgreSQL/MongoDB", "Redis", "GraphQL/REST"]}
            />
            <TechStackItem
              title="Cloud & DevOps"
              technologies={["AWS/Azure/GCP", "Docker/Kubernetes", "CI/CD Pipelines", "Monitoring"]}
            />
            <TechStackItem
              title="AI/ML"
              technologies={["OpenAI/Anthropic", "Vector Databases", "LangChain", "Custom Models"]}
            />
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              name="MVP Sprint"
              price="$8k - $20k"
              duration="2-4 weeks"
              features={[
                "Core functionality development",
                "Basic authentication & billing",
                "Simple admin dashboard",
                "Basic analytics",
                "Stripe integration",
                "Deployment & hosting setup"
              ]}
              recommended={false}
            />
            <PricingCard
              name="Growth Package"
              price="$20k - $60k"
              duration="6-10 weeks"
              features={[
                "Full-featured application",
                "Advanced analytics & reporting",
                "Email marketing integration",
                "SEO-optimized marketing site",
                "Advanced user management",
                "API development & documentation",
                "Performance optimization",
                "Security hardening"
              ]}
              recommended={true}
            />
            <PricingCard
              name="Enterprise Scale"
              price="$60k+"
              duration="12+ weeks"
              features={[
                "Custom architecture design",
                "Multi-tenant infrastructure",
                "Advanced AI/ML integration",
                "Enterprise security features",
                "Multi-region deployment",
                "24/7 monitoring & support",
                "Custom integrations",
                "SLA guarantees"
              ]}
              recommended={false}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Micro SaaS?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, features, pricing, timeline, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  timeline: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="text-sm font-semibold text-blue-600">Pricing: {pricing}</span>
        <span className="text-sm text-gray-500 ml-2">• Timeline: {timeline}</span>
      </div>
      <ul className="text-sm text-gray-600 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechStackItem({ title, technologies }: { title: string; technologies: string[] }) {
  return (
    <div className="text-center">
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="space-y-2">
        {technologies.map((tech, index) => (
          <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function PricingCard({ name, price, duration, features, recommended }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${recommended ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {recommended && (
        <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
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
    </div>
  );
}
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840

        {/* Micro SaaS Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <MicroSaaSCategory
            title="Productivity Tools"
            icon="⚡"
            description="Tools that enhance team productivity and workflow efficiency"
            services={[
              "Task management systems",
              "Time tracking applications",
              "Project collaboration tools",
              "Note-taking platforms",
              "Calendar scheduling apps",
              "Workflow automation tools"
            ]}
          />
          <MicroSaaSCategory
            title="Business Analytics"
            icon="📊"
            description="Data-driven insights and reporting solutions"
            services={[
              "Custom dashboards",
              "KPI monitoring tools",
              "Financial reporting apps",
              "Customer analytics platforms",
              "Sales tracking systems",
              "Performance metrics tools"
            ]}
          />
          <MicroSaaSCategory
            title="Marketing Automation"
            icon="🎯"
            description="Marketing tools and automation platforms"
            services={[
              "Email marketing platforms",
              "Social media schedulers",
              "Lead generation tools",
              "Content management systems",
              "A/B testing platforms",
              "Campaign analytics tools"
            ]}
          />
        </div>

        {/* Real Micro SaaS Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Micro SaaS Solutions We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MicroSaaSSolution
              title="Team Productivity Hub"
              description="All-in-one workspace for remote teams"
              features={[
                "Task management & kanban boards",
                "Time tracking & reporting",
                "Team chat & video calls",
                "File sharing & collaboration",
                "Project templates",
                "Mobile app"
              ]}
              price="$15k - $35k"
              timeline="8-12 weeks"
              useCase="Remote teams, agencies, startups"
              marketSize="$2.5B"
            />
            <MicroSaaSSolution
              title="E-commerce Analytics Dashboard"
              description="Advanced analytics for online stores"
              features={[
                "Real-time sales tracking",
                "Customer behavior analysis",
                "Inventory management",
                "Revenue forecasting",
                "Multi-store support",
                "Custom reports"
              ]}
              price="$12k - $28k"
              timeline="6-10 weeks"
              useCase="E-commerce, retail, online stores"
              marketSize="$1.8B"
            />
            <MicroSaaSSolution
              title="Social Media Scheduler"
              description="Multi-platform social media management"
              features={[
                "Content calendar",
                "Auto-posting to all platforms",
                "Analytics & insights",
                "Team collaboration",
                "Content library",
                "Hashtag optimization"
              ]}
              price="$10k - $25k"
              timeline="6-8 weeks"
              useCase="Marketing agencies, influencers, brands"
              marketSize="$3.2B"
            />
            <MicroSaaSSolution
              title="Invoice & Payment Tracker"
              description="Streamlined invoicing and payment management"
              features={[
                "Automated invoicing",
                "Payment tracking",
                "Client portal",
                "Recurring billing",
                "Tax calculations",
                "Financial reporting"
              ]}
              price="$8k - $20k"
              timeline="4-8 weeks"
              useCase="Freelancers, consultants, small businesses"
              marketSize="$1.2B"
            />
            <MicroSaaSSolution
              title="Customer Support Ticketing"
              description="Help desk and customer service platform"
              features={[
                "Ticket management system",
                "Knowledge base",
                "Live chat integration",
                "Automated responses",
                "Performance analytics",
                "Multi-channel support"
              ]}
              price="$18k - $40k"
              timeline="8-14 weeks"
              useCase="SaaS companies, e-commerce, service businesses"
              marketSize="$4.1B"
            />
            <MicroSaaSSolution
              title="Lead Generation Platform"
              description="Automated lead capture and nurturing"
              features={[
                "Lead capture forms",
                "Email sequences",
                "Lead scoring",
                "CRM integration",
                "Analytics dashboard",
                "A/B testing"
              ]}
              price="$14k - $32k"
              timeline="6-12 weeks"
              useCase="B2B companies, agencies, consultants"
              marketSize="$2.8B"
            />
            <MicroSaaSSolution
              title="Employee Onboarding System"
              description="Streamlined new hire experience"
              features={[
                "Digital forms & documents",
                "Task checklists",
                "Training modules",
                "Progress tracking",
                "Manager dashboard",
                "Compliance tracking"
              ]}
              price="$16k - $38k"
              timeline="8-12 weeks"
              useCase="HR departments, growing companies"
              marketSize="$1.5B"
            />
            <MicroSaaSSolution
              title="Inventory Management System"
              description="Smart inventory tracking and optimization"
              features={[
                "Real-time stock levels",
                "Automated reordering",
                "Barcode scanning",
                "Supplier management",
                "Cost tracking",
                "Analytics & forecasting"
              ]}
              price="$20k - $45k"
              timeline="10-16 weeks"
              useCase="Retail, manufacturing, warehouses"
              marketSize="$2.1B"
            />
            <MicroSaaSSolution
              title="Event Management Platform"
              description="Complete event planning and management solution"
              features={[
                "Event registration",
                "Payment processing",
                "Attendee management",
                "Event analytics",
                "Mobile check-in",
                "Post-event surveys"
              ]}
              price="$22k - $50k"
              timeline="10-18 weeks"
              useCase="Event planners, venues, organizations"
              marketSize="$1.9B"
            />
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Features We Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoreFeature
              title="Multi-tenant Architecture"
              description="Secure, scalable architecture for multiple customers"
              features={["Data isolation", "Custom branding", "Scalable infrastructure", "Security compliance"]}
            />
            <CoreFeature
              title="Authentication & Security"
              description="Enterprise-grade security and user management"
              features={["SSO integration", "2FA support", "Role-based access", "Audit logs"]}
            />
            <CoreFeature
              title="Payment & Billing"
              description="Flexible billing and subscription management"
              features={["Stripe integration", "Multiple plans", "Proration", "Dunning management"]}
            />
            <CoreFeature
              title="Analytics & Reporting"
              description="Comprehensive insights and business intelligence"
              features={["Usage analytics", "Revenue tracking", "User behavior", "Custom reports"]}
            />
            <CoreFeature
              title="API & Integrations"
              description="Connect with existing tools and workflows"
              features={["RESTful APIs", "Webhook support", "Third-party integrations", "Custom connectors"]}
            />
            <CoreFeature
              title="Mobile & Responsive"
              description="Native mobile apps and responsive web design"
              features={["iOS & Android apps", "Progressive Web App", "Offline support", "Push notifications"]}
            />
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechStack
              category="Frontend"
              technologies={["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
            />
            <TechStack
              category="Backend"
              technologies={["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"]}
            />
            <TechStack
              category="Cloud & DevOps"
              technologies={["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]}
            />
            <TechStack
              category="Integrations"
              technologies={["Stripe", "SendGrid", "Auth0", "Zapier", "Webhooks"]}
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MicroSaaSPricingPlan
              name="MVP Sprint"
              price="$8k - $20k"
              duration="4-8 weeks"
              features={[
                "Core functionality",
                "Basic authentication",
                "Stripe billing",
                "Admin dashboard",
                "Mobile responsive",
                "Basic analytics"
              ]}
              popular={false}
            />
            <MicroSaaSPricingPlan
              name="Growth Platform"
              price="$25k - $60k"
              duration="8-16 weeks"
              features={[
                "Full feature set",
                "Advanced analytics",
                "API integrations",
                "Mobile apps",
                "Advanced billing",
                "Customer support"
              ]}
              popular={true}
            />
            <MicroSaaSPricingPlan
              name="Enterprise Scale"
              price="$60k+"
              duration="12+ weeks"
              features={[
                "Custom architecture",
                "Advanced security",
                "Multi-tenant",
                "White-label options",
                "SLA guarantees",
                "Ongoing maintenance"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SuccessStory
              title="TaskFlow Pro"
              description="Project management tool for remote teams"
              metrics={["$50k MRR", "2,500+ users", "95% retention"]}
              industry="SaaS"
            />
            <SuccessStory
              title="AnalyticsHub"
              description="E-commerce analytics dashboard"
              metrics={["$35k MRR", "1,800+ stores", "40% growth"]}
              industry="E-commerce"
            />
            <SuccessStory
              title="SocialScheduler"
              description="Multi-platform social media tool"
              metrics={["$28k MRR", "3,200+ users", "85% satisfaction"]}
              industry="Marketing"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Micro SaaS?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your micro SaaS idea and create a profitable, scalable solution that generates recurring revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
=======
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Micro SaaS Development
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From MVP to scale, we handle everything so you can focus on growth.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MicroSaaSCard
            title="AI-Powered Analytics Dashboard"
            description="Real-time business intelligence with AI insights and predictive analytics"
            features={["Custom dashboards", "AI-powered insights", "Real-time data", "Export capabilities", "Team collaboration"]}
            price="$2,999/month"
            icon="📊"
          />
          <MicroSaaSCard
            title="Automated Social Media Manager"
            description="AI-driven social media scheduling, content creation, and engagement optimization"
            features={["AI content generation", "Multi-platform posting", "Analytics & insights", "Auto-engagement", "Brand voice training"]}
            price="$1,999/month"
            icon="📱"
          />
          <MicroSaaSCard
            title="Smart Email Marketing Platform"
            description="Advanced email automation with AI personalization and behavioral triggers"
            features={["AI personalization", "Behavioral triggers", "A/B testing", "Advanced segmentation", "Deliverability optimization"]}
            price="$1,499/month"
            icon="📧"
          />
          <MicroSaaSCard
            title="Project Management AI Assistant"
            description="Intelligent project tracking with predictive timelines and resource optimization"
            features={["AI task prioritization", "Predictive timelines", "Resource optimization", "Risk assessment", "Team productivity insights"]}
            price="$2,499/month"
            icon="📋"
          />
          <MicroSaaSCard
            title="Customer Support Automation"
            description="AI-powered chatbot and ticket management with sentiment analysis"
            features={["AI chatbot", "Sentiment analysis", "Ticket routing", "Knowledge base", "Multi-language support"]}
            price="$1,799/month"
            icon="🤖"
          />
          <MicroSaaSCard
            title="Financial Analytics & Forecasting"
            description="AI-driven financial planning, budgeting, and cash flow forecasting"
            features={["AI forecasting", "Budget optimization", "Cash flow analysis", "Investment insights", "Risk assessment"]}
            price="$3,499/month"
            icon="💰"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Development Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Core Features" 
            details={[
              "Multi-tenant architecture with data isolation",
              "Advanced authentication (OAuth, SSO, MFA)",
              "Stripe billing with subscription management",
              "Real-time admin dashboard & analytics",
              "Progressive web app (PWA) capabilities",
              "API-first architecture with webhooks"
            ]} 
          />
          <Item 
            title="Growth & Marketing" 
            details={[
              "SEO-optimized marketing website",
              "Content management system (CMS)",
              "Email marketing automation",
              "Referral & affiliate program",
              "A/B testing framework",
              "Conversion tracking & analytics"
            ]} 
          />
          <Item 
            title="Operations & Reliability" 
            details={[
              "CI/CD pipeline with automated testing",
              "Comprehensive monitoring & alerting",
              "Error tracking & performance metrics",
              "Automated backups & disaster recovery",
              "Security hardening & compliance",
              "24/7 uptime monitoring"
            ]} 
          />
        </div>
      </section>

      <Pricing />
      <ContactSection />
    </div>
  );
}

function MicroSaaSCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
>>>>>>> main
    </div>
  );
}

function MicroSaaSCategory({ title, icon, description, services }: {
  title: string;
  icon: string;
  description: string;
  services: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-2">•</span>
            {service}
          </li>
        ))}
      </ul>
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Development Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="MVP Sprint" 
          price="$8k–$20k" 
          duration="2–4 weeks"
          features={[
            "Core MVP features",
            "Stripe billing integration", 
            "Basic analytics dashboard",
            "User authentication",
            "Admin panel",
            "Mobile responsive design"
          ]} 
        />
        <Plan 
          name="Growth Ready" 
          price="$20k–$60k" 
          duration="6–10 weeks"
          features={[
            "Full feature set",
            "SEO-optimized marketing site",
            "Email marketing automation",
            "Advanced analytics",
            "API documentation",
            "Performance optimization"
          ]} 
        />
        <Plan 
          name="Enterprise Scale" 
          price="$60k+" 
          duration="12+ weeks"
          features={[
            "Custom enterprise features",
            "Advanced security & compliance",
            "Multi-region deployment",
            "24/7 monitoring & support",
            "SLA guarantees",
            "Dedicated success manager"
          ]} 
        />
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
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
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

function MicroSaaSSolution({ title, description, features, price, timeline, useCase, marketSize }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  useCase: string;
  marketSize: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {marketSize} market
        </span>
      </div>
      <ul className="space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div>
          <div className="font-bold text-blue-600">{price}</div>
          <div className="text-sm text-gray-500">{timeline}</div>
        </div>
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}

function CoreFeature({ title, description, features }: {
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-blue-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechStack({ category, technologies }: { category: string; technologies: string[] }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
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
    <div className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? 'border-blue-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 rounded-lg font-semibold text-center block transition-colors ${
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

function SuccessStory({ title, description, metrics, industry }: {
  title: string;
  description: string;
  metrics: string[];
  industry: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          {industry}
        </span>
      </div>
      <div className="space-y-1">
        {metrics.map((metric, index) => (
          <div key={index} className="text-sm font-semibold text-green-600">
            {metric}
          </div>
        ))}
      </div>
    </div>
function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Build Your Micro SaaS?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
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
        <div className="mt-8 text-sm text-gray-500">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
}