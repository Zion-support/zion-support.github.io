export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Comprehensive micro SaaS solutions including AI-powered tools, automation platforms, and specialized business applications. From MVP to scale with proven pricing models.'
};

export default function MicroSaaSPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Micro SaaS <span className="text-blue-600">Solutions</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From AI-powered automation tools to specialized business applications, we create solutions that solve real problems and generate sustainable revenue.
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
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MicroSaaSCard
            title="AI Content Generator Pro"
            description="Advanced AI-powered content creation platform with multi-language support, SEO optimization, and brand voice customization."
            features={["GPT-4 integration", "SEO optimization", "Multi-language support", "Brand voice training", "Content analytics", "Team collaboration"]}
            pricing="$29-199/month"
            marketSize="$2.1B content marketing market"
            icon="✍️"
          />
          <MicroSaaSCard
            title="Smart Invoice Manager"
            description="Automated invoicing and payment processing with AI-powered expense categorization and financial insights."
            features={["Auto-invoice generation", "Payment tracking", "Expense categorization", "Financial reporting", "Multi-currency support", "Client portal"]}
            pricing="$19-99/month"
            marketSize="$1.8B invoicing software market"
            icon="📊"
          />
          <MicroSaaSCard
            title="Social Media Scheduler"
            description="AI-driven social media management with optimal posting times, hashtag suggestions, and performance analytics."
            features={["Multi-platform posting", "AI scheduling", "Hashtag optimization", "Analytics dashboard", "Content calendar", "Team management"]}
            pricing="$39-149/month"
            marketSize="$3.2B social media management market"
            icon="📱"
          />
          <MicroSaaSCard
            title="Email Marketing Automation"
            description="Advanced email marketing platform with AI-powered segmentation, A/B testing, and behavioral triggers."
            features={["AI segmentation", "Behavioral triggers", "A/B testing", "Template library", "Analytics & reporting", "CRM integration"]}
            pricing="$49-299/month"
            marketSize="$4.2B email marketing market"
            icon="📧"
          />
          <MicroSaaSCard
            title="Project Management AI"
            description="Intelligent project management with AI-powered task prioritization, resource allocation, and deadline prediction."
            features={["AI task prioritization", "Resource optimization", "Deadline prediction", "Team collaboration", "Progress tracking", "Risk assessment"]}
            pricing="$39-199/month"
            marketSize="$6.2B project management market"
            icon="📋"
          />
          <MicroSaaSCard
            title="Customer Support Bot"
            description="AI-powered customer support automation with natural language processing and seamless human handoff."
            features={["NLP processing", "Multi-channel support", "Human handoff", "Knowledge base", "Sentiment analysis", "Performance metrics"]}
            pricing="$79-399/month"
            marketSize="$1.9B customer service software market"
            icon="🤖"
          />
          <MicroSaaSCard
            title="Analytics Dashboard Pro"
            description="Comprehensive business analytics with AI insights, predictive modeling, and custom reporting."
            features={["AI insights", "Predictive analytics", "Custom dashboards", "Real-time data", "Export capabilities", "API integration"]}
            pricing="$59-249/month"
            marketSize="$2.8B business intelligence market"
            icon="📈"
          />
          <MicroSaaSCard
            title="HR Management Suite"
            description="Complete HR solution with AI-powered recruitment, employee onboarding, and performance management."
            features={["AI recruitment", "Employee onboarding", "Performance tracking", "Payroll integration", "Compliance management", "Employee portal"]}
            pricing="$89-399/month"
            marketSize="$3.1B HR software market"
            icon="👥"
          />
          <MicroSaaSCard
            title="E-commerce Optimization"
            description="AI-powered e-commerce tools for inventory management, pricing optimization, and customer behavior analysis."
            features={["Inventory optimization", "Dynamic pricing", "Customer analytics", "Sales forecasting", "Product recommendations", "Multi-channel sync"]}
            pricing="$99-499/month"
            marketSize="$4.9B e-commerce software market"
            icon="🛒"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with market insights to create profitable, scalable micro SaaS products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Market-Validated"
            description="Every solution is based on real market needs and validated business models."
          />
          <FeatureCard
            title="Rapid Development"
            description="From concept to launch in 4-12 weeks with modern development practices."
          />
          <FeatureCard
            title="Revenue-Focused"
            description="Built with monetization in mind, featuring proven pricing strategies and payment integration."
          />
          <FeatureCard
            title="Scalable Architecture"
            description="Cloud-native architecture designed to handle growth from startup to enterprise scale."
          />
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Development Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="MVP Sprint"
            price="$8,000 - $20,000"
            duration="2-4 weeks"
            features={[
              "Core functionality development",
              "Basic UI/UX design",
              "Stripe payment integration",
              "User authentication",
              "Basic analytics",
              "Deployment & hosting setup"
            ]}
            bestFor="Startups and entrepreneurs"
          />
          <PricingCard
            name="Growth Package"
            price="$20,000 - $60,000"
            duration="6-10 weeks"
            features={[
              "Full-featured application",
              "Advanced UI/UX design",
              "SEO-optimized marketing site",
              "Email marketing integration",
              "Advanced analytics & reporting",
              "API development",
              "Mobile responsiveness",
              "Performance optimization"
            ]}
            bestFor="Growing businesses"
            popular={true}
          />
          <PricingCard
            name="Enterprise Scale"
            price="$60,000+"
            duration="Custom timeline"
            features={[
              "Enterprise-grade architecture",
              "Multi-tenant support",
              "Advanced security features",
              "Custom integrations",
              "White-label options",
              "24/7 monitoring & support",
              "SLA guarantees",
              "Custom development"
            ]}
            bestFor="Large enterprises"
          />
        </div>
      </section>

      <section className="py-12 bg-blue-50 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your idea and create a custom solution that generates real revenue. 
            Our team has launched 50+ successful micro SaaS products with combined revenue of $2M+.
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
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}

function MicroSaaSCard({ 
  title, 
  description, 
  features, 
  pricing, 
  marketSize, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  marketSize: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-lg font-semibold text-blue-600 mb-1">{pricing}</div>
        <div className="text-sm text-gray-500">{marketSize}</div>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-blue-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ 
  name, 
  price, 
  duration, 
  features, 
  bestFor, 
  popular = false 
}: { 
  name: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  bestFor: string; 
  popular?: boolean; 
}) {
  return (
    <div className={`relative bg-white border rounded-xl p-8 ${popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-500 mb-4">Best for: {bestFor}</div>
      <a
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}