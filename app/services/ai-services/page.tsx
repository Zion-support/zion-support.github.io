
export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including RAG, agents, fine-tuning, evals, and MLOps. From discovery to production deployment.'
};

export default function AIPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
      <p className="text-xl text-gray-600 mb-12">Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Applied AI" 
          details={[
            "RAG over private data",
            "Task-specific agents",
            "Vision + speech",
            "Personalization"
          ]} 
        />
        <Item 
          title="Model Ops" 
          details={[
            "Offline evals",
            "Safety + guardrails",
            "Batch + streaming",
            "Cost controls"
          ]} 
        />
        <Item 
          title="Data & MLOps" 
          details={[
            "Pipelines",
            "Feature stores",
            "Vector DBs",
            "Monitoring + drift"
          ]} 
        />
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            href="/services/computer-vision-solutions"
            title="Computer Vision"
            description="Transform your business with AI-powered visual analysis and recognition"
            bullets={["Object detection", "Image processing", "Video analytics"]}
            icon="👁️"
          />
          <ServiceCard
            href="/services/natural-language-processing"
            title="Natural Language Processing"
            description="Unlock the power of text with advanced NLP and language understanding"
            bullets={["Text analysis", "Content processing", "Language generation"]}
            icon="📝"
          />
          <ServiceCard
            href="/services/predictive-analytics"
            title="Predictive Analytics"
            description="Forecast the future with AI-powered predictions and trend analysis"
            bullets={["Sales forecasting", "Risk assessment", "Business intelligence"]}
            icon="🔮"
          />
          <ServiceCard
            href="/services/chatbot-development"
            title="Chatbot Development"
            description="Build intelligent chatbots with natural language understanding"
            bullets={["AI conversations", "Multi-platform", "Advanced features"]}
            icon="🤖"
          />
          <ServiceCard
            href="/services/voice-recognition"
            title="Voice Recognition"
            description="Transform speech into actionable data with advanced voice processing"
            bullets={["Speech-to-text", "Voice commands", "Voice analytics"]}
            icon="🎤"
          />
          <ServiceCard
            href="/services/document-processing-automation"
            title="Document Processing"
            description="Automate document workflows with AI-powered processing and extraction"
            bullets={["Data extraction", "Classification", "Process automation"]}
            icon="📄"
          />
        </div>
      </div>
      
      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map(d => (
          <li key={d} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({
  href,
  title,
  description,
  bullets,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}) {
  return (
    <a
      href={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
    </a>
  );
}

function Pricing() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="AI Discovery" 
          price="$5k–$12k" 
          features={[
            "2–3 weeks",
            "Use-case design",
            "Tech selection",
            "Roadmap"
          ]} 
        />
        <Plan 
          name="Pilot" 
          price="$15k–$45k" 
          features={[
            "4–8 weeks",
            "RAG/agent MVP",
            "Evals + safety",
            "Dashboards"
          ]} 
        />
        <Plan 
          name="Production" 
          price="$50k+" 
          features={[
            "Hardened infra",
            "Monitoring",
            "SLAs",
            "Cost optimization"
          ]} 
        />
      </div>
    </div>
  );
}

function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map(f => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

