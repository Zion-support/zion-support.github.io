export const metadata = {
  title: 'Technology Consulting | Zion Tech Group',
  description: 'Strategic technology consulting services including digital transformation, technology strategy, architecture design, and digital innovation. Expert guidance for your technology journey.'
}
export default function ConsultingPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Technology Consulting
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Strategic technology consulting services including digital transformation, technology strategy,
          architecture design, and digital innovation. Get expert guidance for your technology journey.
        </p>
      </section>
      {/* Consulting Solutions Showcase */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Consulting Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ConsultingSolution
            title="Digital Transformation"
            description="Comprehensive digital transformation strategy and implementation to modernize your business operations"
            features={["Current state assessment", "Digital strategy development", "Technology roadmap", "Change management", "Implementation support"]}
            pricing="$25k-200k"
            icon="🔄"
          />
          <ConsultingSolution
            title="Technology Strategy"
            description="Strategic technology planning and architecture design to align technology with business goals"
            features={["Technology assessment", "Architecture design", "Vendor evaluation", "Risk analysis", "Implementation planning"]}
            pricing="$15k-100k"
            icon="📋"
          />
          <ConsultingSolution
            title="Cloud Strategy & Migration"
            description="Cloud adoption strategy, migration planning, and optimization for maximum efficiency and cost savings"
            features={["Cloud readiness assessment", "Migration strategy", "Cost optimization", "Security planning", "Performance tuning"]}
            pricing="$20k-150k"
            icon="☁️"
          />
          <ConsultingSolution
            title="AI & Data Strategy"
            description="AI adoption strategy, data governance, and analytics implementation for data-driven decision making"
            features={["AI readiness assessment", "Data strategy development", "ML/AI roadmap", "Governance framework", "Implementation support"]}
            pricing="$30k-250k"
            icon="🤖"
          />
          <ConsultingSolution
            title="Cybersecurity Consulting"
            description="Comprehensive security assessment, strategy development, and implementation of security best practices"
            features={["Security assessment", "Compliance audit", "Security strategy", "Implementation planning", "Training & awareness"]}
            pricing="$20k-120k"
            icon="🔒"
          />
          <ConsultingSolution
            title="Technology Due Diligence"
            description="Technical due diligence for M&A, investments, and partnerships to assess technology risks and opportunities"
            features={["Technology assessment", "Risk analysis", "Integration planning", "Cost analysis", "Recommendations"]}
            pricing="$15k-75k"
            icon="🔍"
          />
        </div>
      </section>
      {/* Core Consulting Services */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Consulting Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ConsultingServiceItem
            title="Strategic Planning"
            details={[
              "Technology roadmap development",
              "Digital transformation strategy",
              "Innovation planning and execution",
              "Technology investment prioritization",
              "Competitive analysis and benchmarking",
              "Future technology trends analysis"
            ]}
          />
          <ConsultingServiceItem
            title="Architecture & Design"
            details={[
              "System architecture design",
              "Cloud architecture planning",
              "Integration strategy and design",
              "Scalability and performance planning",
              "Security architecture design",
              "Technology stack recommendations"
            ]}
          />
          <ConsultingServiceItem
            title="Implementation Support"
            details={[
              "Project management and oversight",
              "Vendor selection and management",
              "Implementation planning and execution",
              "Change management and training",
              "Quality assurance and testing",
              "Post-implementation support"
            ]}
          />
        </div>
      </section>
      {/* Industry Expertise */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industry Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <IndustryCard
            title="Financial Services"
            description="Banking, insurance, and fintech technology consulting"
            icon="🏦"
          />
          <IndustryCard
            title="Healthcare"
            description="Healthcare IT, telemedicine, and medical device integration"
            icon="🏥"
          />
          <IndustryCard
            title="Manufacturing"
            description="Industry 4.0, IoT, and smart manufacturing solutions"
            icon="🏭"
          />
          <IndustryCard
            title="Retail & E-commerce"
            description="Omnichannel retail, e-commerce platforms, and customer experience"
            icon="🛒"
          />
        </div>
      </section>
      {/* Consulting Process */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Consulting Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <ProcessStep
            step="1"
            title="Discovery & Assessment"
            description="Understand your current state, challenges, and objectives"
            icon="🔍"
          />
          <ProcessStep
            step="2"
            title="Strategy Development"
            description="Create a comprehensive technology strategy and roadmap"
            icon="📋"
          />
          <ProcessStep
            step="3"
            title="Implementation Planning"
            description="Develop detailed implementation plans and timelines"
            icon="⚙️"
          />
          <ProcessStep
            step="4"
            title="Execution & Support"
            description="Support implementation and provide ongoing guidance"
            icon="🚀"
          />
        </div>
      </section>
      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ConsultingPricingPlan
            name="Strategy Workshop"
            price="$5k–$15k"
            duration="1–2 weeks"
            features={[
              "Current state assessment",
              "Strategy workshop sessions",
              "Technology recommendations",
              "Implementation roadmap",
              "Executive presentation"
            ]}
            popular={false}
          />
          <ConsultingPricingPlan
            name="Full Consulting Engagement"
            price="$25k–$150k"
            duration="4–16 weeks"
            features={[
              "Comprehensive strategy development",
              "Architecture design",
              "Implementation planning",
              "Vendor evaluation",
              "Ongoing support"
            ]}
            popular={true}
          />
          <ConsultingPricingPlan
            name="Retainer Consulting"
            price="$10k+/mo"
            duration="Ongoing"
            features={[
              "Monthly strategy sessions",
              "Technology advisory",
              "Implementation oversight",
              "Vendor management",
              "Regular reporting"
            ]}
            popular={false}
          />
        </div>
      </section>
      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );


function ConsultingSolution({ title, description, features, pricing, icon }: {
  title: string
  description: string
  features: string[]
  pricing: string
  icon: string;
}) {;
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-bold text-blue-600">{pricing}</div>
    </div>
  );
function ConsultingServiceItem({ title, details }: {
  title: string
  details: string[];
}) {;
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
function IndustryCard({ title, description, icon }: {
  title: string
  description: string
  icon: string;
}) {;
  return (
    <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
function ProcessStep({ step, title, description, icon }: {
  step: string
  title: string
  description: string
  icon: string;
}) {;
  return (
    <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
function ConsultingPricingPlan({ name, price, duration, features, popular }: {
  name: string
  price: string
  duration: string
  features: string[]
  popular: boolean;
}) {;
  return (
    <div className={`bg-white border-2 rounded-xl p-6 ${popular ? 'border-blue-500 relative' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
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

