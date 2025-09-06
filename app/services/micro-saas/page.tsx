export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS solutions from concept to revenue. We build, launch, and scale profitable software products with modern tech stacks.'
}; 

export default function MicroSaaSPage() { 
  return ( 
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
            From MVP to scale, we handle everything so you can focus on growth.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCategory
            title="Core Development"
            icon="🚀"
            services={[
              "Multi-tenant architecture",
              "Authentication & authorization",
              "Payment processing (Stripe)",
              "Admin dashboard & analytics",
              "API development & documentation",
              "Database design & optimization"
            ]}
          />
          <ServiceCategory
            title="Growth & Marketing"
            icon="📈"
            services={[
              "SEO-optimized landing pages",
              "Content management systems",
              "Email marketing automation",
              "Referral & affiliate systems",
              "A/B testing frameworks",
              "Analytics & conversion tracking"
            ]}
          />
          <ServiceCategory
            title="Operations & Scale"
            icon="⚙️"
            services={[
              "CI/CD pipelines",
              "Monitoring & observability",
              "Error tracking & alerting",
              "Performance optimization",
              "Security hardening",
              "24/7 support systems"
            ]}
          />
        </div>

        {/* Real Micro SaaS Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Ready-to-Deploy Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MicroSaaSProduct
              title="Content Management SaaS"
              description="Multi-tenant CMS with advanced features"
              features={["Rich text editor", "Media library", "User roles", "API access", "Webhooks"]}
              price="$12k - $25k"
              timeline="4-6 weeks"
            />
            <MicroSaaSProduct
              title="Analytics Dashboard"
              description="Real-time business intelligence platform"
              features={["Custom dashboards", "Data visualization", "Export capabilities", "Scheduled reports", "White-label options"]}
              price="$15k - $30k"
              timeline="5-8 weeks"
            />
            <MicroSaaSProduct
              title="Project Management Tool"
              description="Team collaboration and task management"
              features={["Kanban boards", "Time tracking", "Team chat", "File sharing", "Mobile app"]}
              price="$18k - $35k"
              timeline="6-10 weeks"
            />
            <MicroSaaSProduct
              title="Customer Support System"
              description="Helpdesk and ticketing solution"
              features={["Ticket management", "Knowledge base", "Live chat", "SLA tracking", "Reporting"]}
              price="$10k - $20k"
              timeline="3-5 weeks"
            />
            <MicroSaaSProduct
              title="E-commerce Platform"
              description="Multi-vendor marketplace solution"
              features={["Product catalog", "Order management", "Payment processing", "Inventory tracking", "Vendor portal"]}
              price="$25k - $50k"
              timeline="8-12 weeks"
            />
            <MicroSaaSProduct
              title="Learning Management System"
              description="Online course and training platform"
              features={["Course creation", "Video streaming", "Progress tracking", "Certificates", "Mobile learning"]}
              price="$20k - $40k"
              timeline="6-10 weeks"
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingPlan
              name="MVP Sprint"
              price="$8k - $20k"
              duration="2-4 weeks"
              features={[
                "Core functionality only",
                "Basic authentication",
                "Stripe payment integration",
                "Simple admin panel",
                "Basic analytics",
                "Deployment & hosting setup"
              ]}
              popular={false}
            />
            <PricingPlan
              name="Growth Ready"
              price="$20k - $60k"
              duration="6-10 weeks"
              features={[
                "Full feature set",
                "Advanced user management",
                "Comprehensive analytics",
                "Email marketing integration",
                "SEO optimization",
                "Mobile responsiveness",
                "API documentation"
              ]}
              popular={true}
            />
            <PricingPlan
              name="Enterprise Scale"
              price="$60k+"
              duration="10+ weeks"
              features={[
                "Custom architecture",
                "Advanced security",
                "Multi-region deployment",
                "24/7 monitoring",
                "SLA guarantees",
                "Dedicated support",
                "White-label options"
              ]}
              popular={false}
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
              technologies={["AWS", "Vercel", "Docker", "Kubernetes", "Terraform"]}
            />
            <TechStack
              category="Integrations"
              technologies={["Stripe", "SendGrid", "Auth0", "Analytics", "Webhooks"]}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Micro SaaS?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your idea and create a custom solution that generates revenue from day one.
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
    </div>
  );
}

function ServiceCategory({ title, icon, services }: { title: string; icon: string; services: string[] }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-2">•</span>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MicroSaaSProduct({ title, description, features, price, timeline }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
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

function PricingPlan({ name, price, duration, features, popular }: {
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