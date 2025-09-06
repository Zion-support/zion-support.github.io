import Link from 'next/link';

export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Comprehensive micro SaaS development services including AI-powered tools, automation platforms, and revenue-generating applications.'
};

export default function MicroSaaSPage() {
  return (
    <div className="animate-fade-in">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From AI-powered tools to automation platforms, we create innovative solutions that drive real business value.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ServiceCard
            title="AI-Powered Analytics Dashboard"
            description="Real-time business intelligence with predictive analytics and automated insights"
            features={["Custom data visualization", "Predictive modeling", "Automated reporting", "Multi-source integration"]}
            price="$15k-$35k"
            timeline="4-8 weeks"
            icon="📊"
          />
          <ServiceCard
            title="Customer Success Automation Platform"
            description="Automate customer onboarding, support, and retention with intelligent workflows"
            features={["Smart onboarding flows", "Automated support tickets", "Churn prediction", "Success metrics tracking"]}
            price="$12k-$28k"
            timeline="3-6 weeks"
            icon="🎯"
          />
          <ServiceCard
            title="Content Management & SEO Suite"
            description="AI-driven content creation, optimization, and distribution platform"
            features={["AI content generation", "SEO optimization", "Social media automation", "Performance analytics"]}
            price="$18k-$42k"
            timeline="5-10 weeks"
            icon="📝"
          />
          <ServiceCard
            title="Financial Planning & Budgeting Tool"
            description="Personal and business finance management with AI-powered recommendations"
            features={["Expense tracking", "Budget forecasting", "Investment analysis", "Tax optimization"]}
            price="$20k-$45k"
            timeline="6-12 weeks"
            icon="💰"
          />
          <ServiceCard
            title="Project Management & Collaboration Hub"
            description="Advanced project tracking with AI-powered resource allocation and timeline optimization"
            features={["Smart task assignment", "Resource optimization", "Timeline prediction", "Team collaboration tools"]}
            price="$16k-$38k"
            timeline="4-9 weeks"
            icon="📋"
          />
          <ServiceCard
            title="E-commerce Analytics & Optimization"
            description="Comprehensive e-commerce insights with conversion optimization and customer behavior analysis"
            features={["Conversion tracking", "A/B testing platform", "Customer journey mapping", "Revenue optimization"]}
            price="$22k-$50k"
            timeline="6-14 weeks"
            icon="🛒"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Development Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechStack
            title="Frontend & UI/UX"
            technologies={["React/Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"]}
            description="Modern, responsive interfaces with exceptional user experience"
          />
          <TechStack
            title="Backend & APIs"
            technologies={["Node.js/Express", "Python/FastAPI", "GraphQL", "REST APIs", "Microservices"]}
            description="Scalable, secure backend infrastructure with robust APIs"
          />
          <TechStack
            title="Database & Storage"
            technologies={["PostgreSQL", "MongoDB", "Redis", "AWS S3", "Vector Databases"]}
            description="Optimized data storage and retrieval for high performance"
          />
          <TechStack
            title="AI & Machine Learning"
            technologies={["OpenAI API", "LangChain", "Pinecone", "TensorFlow", "Custom Models"]}
            description="Cutting-edge AI integration for intelligent features"
          />
          <TechStack
            title="DevOps & Deployment"
            technologies={["Docker", "Kubernetes", "AWS/GCP", "CI/CD", "Monitoring"]}
            description="Reliable deployment and monitoring infrastructure"
          />
          <TechStack
            title="Payment & Billing"
            technologies={["Stripe", "PayPal", "Subscription Management", "Invoicing", "Analytics"]}
            description="Secure payment processing and subscription management"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing & Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="MVP Sprint"
            price="$8k–$20k"
            duration="2–4 weeks"
            features={[
              "Core functionality development",
              "Basic authentication & billing",
              "Simple admin dashboard",
              "Mobile-responsive design",
              "Basic analytics",
              "Deployment & hosting setup"
            ]}
            recommended={false}
          />
          <PricingCard
            name="Growth Platform"
            price="$20k–$60k"
            duration="6–10 weeks"
            features={[
              "Advanced features & integrations",
              "SEO-optimized marketing site",
              "Email marketing automation",
              "Advanced analytics & reporting",
              "API development",
              "Third-party integrations",
              "Performance optimization"
            ]}
            recommended={true}
          />
          <PricingCard
            name="Enterprise Scale"
            price="$60k+"
            duration="12+ weeks"
            features={[
              "Custom enterprise features",
              "Multi-tenant architecture",
              "Advanced security & compliance",
              "SLA guarantees",
              "Dedicated support",
              "Custom integrations",
              "White-label options"
            ]}
            recommended={false}
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ready to Build Your Micro SaaS?</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Let's discuss your idea and create a custom solution that drives real revenue. 
          Our team has launched 50+ successful micro SaaS products with over $2M in combined ARR.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
          >
            Email Us
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, features, price, timeline, icon }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">{price}</span>
        <span className="text-sm text-gray-500">{timeline}</span>
      </div>
    </div>
  );
}

function TechStack({ title, technologies, description }: {
  title: string;
  technologies: string[];
  description: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
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

function PricingCard({ name, price, duration, features, recommended }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${recommended ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
        recommended 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
}