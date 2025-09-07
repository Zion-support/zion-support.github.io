
export const metadata = {
  title: "Micro SaaS Development | Zion Tech Group",
  description: "Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.",
  keywords: "micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence"
};

export default function MicroSAASPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Micro SaaS Development
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build and launch successful micro SaaS products that solve specific business problems. From concept to revenue, we help you create scalable, profitable software solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Micro SaaS Services</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🚀"
              title="Full-Stack Development"
              description="Complete end-to-end development of micro SaaS applications with modern tech stacks and best practices."
              benefits={["React/Next.js frontend", "Node.js/Python backend", "Database design", "API development"]}
            />
            <FeatureItem
              icon="💳"
              title="Payment Integration"
              description="Seamless payment processing with Stripe, PayPal, and other payment gateways for subscription billing."
              benefits={["Subscription management", "Payment processing", "Billing automation", "Revenue tracking"]}
            />
            <FeatureItem
              icon="🔐"
              title="Authentication & Security"
              description="Robust user authentication, authorization, and security measures to protect your users and data."
              benefits={["User management", "Role-based access", "Data encryption", "Security compliance"]}
            />
            <FeatureItem
              icon="📊"
              title="Analytics & Monitoring"
              description="Comprehensive analytics, user tracking, and performance monitoring to optimize your SaaS product."
              benefits={["User analytics", "Performance metrics", "Error tracking", "Business intelligence"]}
            />
            <FeatureItem
              icon="☁️"
              title="Cloud Deployment"
              description="Scalable cloud deployment on AWS, Azure, or GCP with automated CI/CD pipelines and monitoring."
              benefits={["Cloud infrastructure", "Auto-scaling", "CI/CD pipelines", "24/7 monitoring"]}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Zion for Micro SaaS?</h2>
          <div className="space-y-6">
            <BenefitCard
              icon="💰"
              title="Revenue-Focused Development"
              description="We build products that generate revenue from day one, with proven monetization strategies and pricing models."
            />
            <BenefitCard
              icon="⚡"
              title="Rapid Time-to-Market"
              description="Launch your micro SaaS product in 8-12 weeks with our proven development process and pre-built components."
            />
            <BenefitCard
              icon="📈"
              title="Scalable Architecture"
              description="Built to scale from MVP to enterprise, ensuring your product can grow with your business and user base."
            />
            <BenefitCard
              icon="🛠️"
              title="Ongoing Support"
              description="Complete maintenance, updates, and feature additions to keep your micro SaaS product competitive and profitable."
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Development Process</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We follow a proven methodology to deliver successful micro SaaS products that generate revenue.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step="1"
            title="Discovery & Strategy"
            description="Market research, user personas, feature planning, and monetization strategy development."
          />
          <ProcessStep
            step="2"
            title="Development & Testing"
            description="Agile development with regular testing, user feedback, and iterative improvements."
          />
          <ProcessStep
            step="3"
            title="Launch & Growth"
            description="Product launch, marketing support, user onboarding, and ongoing optimization."
          />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4 text-purple-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Build Your Micro SaaS?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Contact us today for a free consultation and let&apos;s turn your micro SaaS idea into a profitable reality.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
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