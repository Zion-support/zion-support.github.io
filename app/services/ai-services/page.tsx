};

export default function AIPage() {
  return (
    </div>
  );
}

function AIServiceCategory({ title, icon, description, services }: {
  title: string;
  icon: string;
  description: string;
  services: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-purple-500 mr-2">•</span>
            {service}
          </li>
        ))}
      </ul>
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Development Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="AI Discovery" 
          price="$5k–$12k" 
          duration="2–3 weeks"
          features={[
            "Use-case analysis & design",
            "Technology stack selection",
            "Data requirements assessment",
            "AI feasibility study",
            "Implementation roadmap",
            "Proof of concept demo"
          ]} 
        />
        <Plan 
          name="AI Pilot" 
          price="$15k–$45k" 
          duration="4–8 weeks"
          features={[
            "RAG/Agent MVP development",
            "Model evaluation & safety",
            "Performance dashboards",
            "Integration testing",
            "User feedback collection",
            "Iteration & optimization"
          ]} 
        />
        <Plan 
          name="Production AI" 
          price="$50k+" 
          duration="12+ weeks"
          features={[
            "Hardened production infrastructure",
            "Advanced monitoring & alerting",
            "SLA guarantees & support",
            "Cost optimization",
            "Security & compliance",
            "Dedicated AI team"
          ]} 
        />
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

function AISolution({ title, description, features, price, timeline, useCase, marketSize }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  useCase: string;
  marketSize: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {marketSize} market
        </span>
      </div>
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
          <div className="font-bold text-purple-600">{price}</div>
          <div className="text-sm text-gray-500">{timeline}</div>
        </div>
        <a
          href="tel:+13024640950"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
        >
          Get Quote
        </a>
      </div>
    </div>
function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Business with AI?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how AI can solve your specific challenges and create competitive advantages. 
          Our AI experts have delivered 100+ successful AI implementations.
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
        <div className="mt-8 text-sm text-gray-500">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
}
