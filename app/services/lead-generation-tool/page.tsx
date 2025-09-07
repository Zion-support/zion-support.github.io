<<<<<<< HEAD


export const metadata = {
  title: 'Lead Generation Tool | Zion Tech Group',
  description: 'AI-powered lead generation platform. Find, qualify, and nurture leads automatically with advanced targeting and CRM integration.',
};

export default function LeadGenerationToolPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Lead Generation Tool</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered lead generation platform that finds, qualifies, and nurtures leads automatically.
          Boost your sales pipeline with intelligent targeting and CRM integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Lead Discovery"
          details={[
            'AI-powered prospect research',
            'Contact information enrichment',
            'Company data verification',
            'Social media intelligence',
            'Email finder & verification',
          ]}
        />
        <FeatureCard
          title="Qualification & Scoring"
          details={[
            'Lead scoring algorithms',
            'Intent detection',
            'BANT qualification',
            'Behavioral analysis',
            'Custom qualification rules',
          ]}
        />
        <FeatureCard
          title="Outreach & Nurturing"
          details={[
            'Automated email sequences',
            'LinkedIn outreach automation',
            'Personalized messaging',
            'Follow-up scheduling',
            'CRM integration (Salesforce, HubSpot)',
          ]}
        />
      </div>

      <PricingSection />

      <div className="mt-16 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Generate More Leads?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Start generating qualified leads automatically with our AI-powered platform.
          Perfect for sales teams, agencies, and B2B businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
=======
export const metadata = {
  title: 'Lead Generation Tool | Zion Tech Group',
  description: 'Professional lead generation tool services for your business needs.',
  keywords: 'lead-generation-tool, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Lead Generation Tool
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional lead generation tool services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored lead generation tool solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your lead generation tool solutions run smoothly.
            </p>
          </div>
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}

function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-teal-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingPlan
          name="Starter"
          price="$49/mo"
          features={[
            '500 leads/month',
            'Basic contact data',
            'Email verification',
            'Standard CRM integration',
            'Email support',
          ]}
        />
        <PricingPlan
          name="Professional"
          price="$149/mo"
          features={[
            '2,000 leads/month',
            'Advanced contact enrichment',
            'Lead scoring & qualification',
            'Automated outreach sequences',
            'Priority support',
          ]}
          featured={true}
        />
        <PricingPlan
          name="Enterprise"
          price="$399/mo"
          features={[
            '10,000 leads/month',
            'Custom data sources',
            'Advanced AI targeting',
            'White-label solution',
            'Dedicated account manager',
          ]}
        />
      </div>
    </div>
  );
}

function PricingPlan({
  name,
  price,
  features,
  featured = false,
}: {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${
      featured
        ? 'border-teal-500 bg-teal-50 shadow-lg'
        : 'border-gray-200 bg-white shadow-sm'
    }`}>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-teal-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? 'bg-teal-600 text-white hover:bg-teal-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
=======
}
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
