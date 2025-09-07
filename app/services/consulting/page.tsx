export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Strategic Technology Consulting
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with our expert consultants to transform your business through 
            strategic technology adoption, digital transformation, and innovation 
            acceleration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ConsultingService
            title="Digital Transformation"
            description="Guide your organization through comprehensive digital transformation"
            features={["Strategy development", "Technology assessment", "Change management", "Implementation planning"]}
            pricing="Starting at $5,999/month"
            icon="🚀"
          />
          <ConsultingService
            title="AI Strategy"
            description="Develop and implement AI strategies that drive business value"
            features={["AI readiness assessment", "Use case identification", "ROI analysis", "Implementation roadmap"]}
            pricing="Starting at $7,999/month"
            icon="🤖"
          />
          <ConsultingService
            title="Cloud Migration"
            description="Plan and execute seamless cloud migration strategies"
            features={["Cloud assessment", "Migration planning", "Security design", "Cost optimization"]}
            pricing="Starting at $6,999/month"
            icon="☁️"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Consulting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ConsultingServiceItem
              title="Technology Strategy"
              details={[
                "Technology roadmap development",
                "Vendor evaluation and selection",
                "Architecture design and planning",
                "Technology risk assessment"
              ]}
            />
            <ConsultingServiceItem
              title="Process Optimization"
              details={[
                "Business process analysis",
                "Workflow optimization",
                "Efficiency improvement",
                "Performance measurement"
              ]}
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard
              title="Healthcare"
              description="Digital health solutions, telemedicine, and healthcare data analytics"
              icon="🏥"
            />
            <IndustryCard
              title="Finance"
              description="Fintech solutions, regulatory compliance, and risk management"
              icon="💰"
            />
            <IndustryCard
              title="Manufacturing"
              description="Industry 4.0, smart manufacturing, and supply chain optimization"
              icon="🏭"
            />
            <IndustryCard
              title="Retail"
              description="E-commerce transformation, customer experience, and omnichannel strategies"
              icon="🛍️"
            />
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Consulting Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              title="Expert Knowledge"
              description="Access to industry-leading experts with proven track records"
              icon="👨‍💼"
            />
            <BenefitCard
              title="Proven Results"
              description="Deliver measurable business outcomes and ROI improvements"
              icon="📊"
            />
            <BenefitCard
              title="Ongoing Support"
              description="Continuous support and guidance throughout your transformation journey"
              icon="🤝"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ConsultingPricingPlan
              name="Starter"
              price="$5,999"
              duration="per month"
              features={[
                "Basic consulting services",
                "Up to 20 hours/month",
                "Email support",
                "Monthly reports"
              ]}
              popular={false}
            />
            <ConsultingPricingPlan
              name="Professional"
              price="$9,999"
              duration="per month"
              features={[
                "Comprehensive consulting",
                "Up to 40 hours/month",
                "Priority support",
                "Custom solutions",
                "Weekly check-ins"
              ]}
              popular={true}
            />
            <ConsultingPricingPlan
              name="Enterprise"
              price="$19,999"
              duration="per month"
              features={[
                "Full consulting suite",
                "Unlimited hours",
                "24/7 support",
                "Dedicated team",
                "Executive advisory"
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsultingService({ title, description, features, pricing, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
}) {
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
}

function ConsultingServiceItem({ title, details }: {
  title: string;
  details: string[];
}) {
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

function IndustryCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function BenefitCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ConsultingPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-6 ${popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full text-center mb-4">
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