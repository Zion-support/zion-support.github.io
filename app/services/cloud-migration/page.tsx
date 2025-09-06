export const metadata = { 
  title: 'Cloud Migration Services | Zion Tech Group',
  description: 'Seamlessly migrate your infrastructure to the cloud with our expert migration services, ensuring zero downtime and optimal performance.'
};

export default function CloudMigrationPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Cloud Migration Services</h1>
      <p className="text-xl text-gray-600 mb-12">Seamlessly migrate your infrastructure to the cloud with our expert migration services, ensuring zero downtime and optimal performance.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard 
          title="Migration Planning" 
          features={[
            "Infrastructure assessment",
            "Migration strategy",
            "Cost optimization",
            "Timeline planning"
          ]} 
        />
        <FeatureCard 
          title="Cloud Platforms" 
          features={[
            "AWS migration",
            "Azure migration",
            "Google Cloud migration",
            "Multi-cloud solutions"
          ]} 
        />
        <FeatureCard 
          title="Post-Migration Support" 
          features={[
            "Performance optimization",
            "Cost monitoring",
            "Security hardening",
            "24/7 support"
          ]} 
        />
      </div>
      
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Cloud Migration Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <span className="text-sky-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Zero Downtime Migration</h3>
              <p className="text-gray-600">Minimize business disruption with our proven migration strategies</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-sky-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Cost Reduction</h3>
              <p className="text-gray-600">Average 40% cost savings through optimized cloud architecture</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-sky-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Expert Team</h3>
              <p className="text-gray-600">Certified cloud architects with 500+ successful migrations</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-sky-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Security First</h3>
              <p className="text-gray-600">Ensure data security and compliance throughout the migration</p>
            </div>
          </div>
        </div>
      </div>
      
      <Pricing />
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Move to the Cloud?</h2>
        <p className="text-gray-600 mb-6">Start with a free cloud readiness assessment and migration plan.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-sky-600 text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, features }: { title: string; features: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {features.map(f => (
          <li key={f} className="flex items-center">
            <span className="text-sky-500 mr-2">•</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Assessment" 
          price="$2,999" 
          features={[
            "Cloud readiness audit",
            "Migration strategy",
            "Cost analysis",
            "Timeline planning"
          ]} 
        />
        <Plan 
          name="Small Business" 
          price="$9,999" 
          features={[
            "Up to 10 servers",
            "Basic migration",
            "2 weeks support",
            "Documentation"
          ]} 
          popular={true}
        />
        <Plan 
          name="Enterprise" 
          price="$49,999+" 
          features={[
            "Unlimited servers",
            "Complex migration",
            "6 months support",
            "Dedicated team"
          ]} 
        />
      </div>
    </div>
  );
}

function Plan({ name, price, features, popular = false }: { name: string; price: string; features: string[]; popular?: boolean }) {
  return (
    <div className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? 'border-sky-500 ring-2 ring-sky-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-sky-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-sky-600 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map(f => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950"
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
          popular 
            ? 'bg-sky-600 text-white hover:bg-sky-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}