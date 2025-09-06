import Link from 'next/link';

export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. Enterprise-grade AI solutions.',
};

export default function AIPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
          Transform your business with enterprise-grade artificial intelligence solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <AIFeatureCard 
          title="Applied AI" 
          details={[
            "RAG over private data",
            "Task-specific agents",
            "Vision + speech processing",
            "Personalization engines",
            "Multi-modal AI systems"
          ]} 
        />
        <AIFeatureCard 
          title="Model Operations" 
          details={[
            "Offline evaluation frameworks",
            "Safety + guardrails",
            "Batch + streaming inference",
            "Cost optimization",
            "A/B testing for models"
          ]} 
        />
        <AIFeatureCard 
          title="Data & MLOps" 
          details={[
            "End-to-end ML pipelines",
            "Feature stores & catalogs",
            "Vector databases",
            "Model monitoring + drift",
            "Automated retraining"
          ]} 
        />
      </div>

      <AIPricingSection />
      
      <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement AI?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss your AI requirements and create a custom solution that delivers real business value.
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
      </div>
    </div>
  );
}

function AIFeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-purple-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AIPricingSection() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">AI Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AIPricingPlan 
          name="AI Discovery" 
          price="$5k–$12k" 
          features={[
            "2–3 weeks consultation",
            "Use-case design & validation",
            "Technology stack selection",
            "Implementation roadmap",
            "ROI projections"
          ]} 
        />
        <AIPricingPlan 
          name="AI Pilot" 
          price="$15k–$45k" 
          features={[
            "4–8 weeks development",
            "RAG / agent MVP",
            "Evaluation + safety testing",
            "Performance dashboards",
            "Integration support"
          ]} 
          featured={true}
        />
        <AIPricingPlan 
          name="AI Production" 
          price="$50k+" 
          features={[
            "Hardened infrastructure",
            "24/7 monitoring & alerting",
            "SLA guarantees",
            "Cost optimization",
            "Dedicated AI team"
          ]} 
        />
      </div>
    </div>
  );
}

function AIPricingPlan({ 
  name, 
  price, 
  features, 
  featured = false 
}: { 
  name: string; 
  price: string; 
  features: string[]; 
  featured?: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${
      featured 
        ? 'border-purple-500 bg-purple-50 shadow-lg' 
        : 'border-gray-200 bg-white shadow-sm'
    }`}>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-purple-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
