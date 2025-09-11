export const metadata = {
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, and security.',
};

function Item({ title, description, price }: { title: string; description: string; price: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-blue-600 font-semibold">{price}</p>
    </div>
  );
}

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions including cloud migration, DevOps, SRE, 
            security hardening, and cost optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Item 
            title="Cloud & Infrastructure" 
            description="Complete cloud migration and infrastructure setup with AWS, Azure, or GCP."
            price="Starting at $20k"
          />
          <Item 
            title="DevOps & CI/CD" 
            description="Automated deployment pipelines and infrastructure as code implementation."
            price="Starting at $15k"
          />
          <Item 
            title="Site Reliability Engineering" 
            description="Monitoring, alerting, and reliability engineering for production systems."
            price="Starting at $25k"
          />
          <Item 
            title="Security Hardening" 
            description="Comprehensive security assessment and hardening of your infrastructure."
            price="Starting at $10k"
          />
          <Item 
            title="Cost Optimization" 
            description="Cloud cost analysis and optimization to reduce your infrastructure spend."
            price="Starting at $5k"
          />
          <Item 
            title="24/7 Support" 
            description="Round-the-clock monitoring and support for your critical systems."
            price="Starting at $2k/month"
          />
        </div>

        <div className="text-center">
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}