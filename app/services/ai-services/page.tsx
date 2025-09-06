export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Professional AI development services including LLM integration, RAG systems, custom AI models, and MLOps. Expert AI consulting and implementation.'
};

export default function AIPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
          We help you build production-ready AI solutions that drive real business value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Item 
          title="Applied AI" 
          details={[
            "RAG over private data",
            "Task-specific agents",
            "Vision + speech processing",
            "Personalization engines",
            "Chatbot development",
            "Document processing"
          ]} 
        />
        <Item 
          title="Model Operations" 
          details={[
            "Offline evaluation systems",
            "Safety + guardrails",
            "Batch + streaming inference",
            "Cost optimization",
            "Model monitoring",
            "A/B testing frameworks"
          ]} 
        />
        <Item 
          title="Data & MLOps" 
          details={[
            "Data pipeline development",
            "Feature stores",
            "Vector databases",
            "Model drift monitoring",
            "Automated retraining",
            "Model versioning"
          ]} 
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AISolution
            title="Custom ChatGPT Assistant"
            description="Build intelligent chatbots with your company's knowledge base"
            features={["RAG implementation", "Custom training", "Multi-language support", "API integration"]}
            pricing="$5,000–$15,000"
            icon="🤖"
          />
          <AISolution
            title="Document AI Processor"
            description="Extract insights and automate document processing workflows"
            features={["OCR + NLP", "Data extraction", "Workflow automation", "Custom models"]}
            pricing="$8,000–$25,000"
            icon="📄"
          />
          <AISolution
            title="Predictive Analytics Engine"
            description="Build ML models for forecasting and business intelligence"
            features={["Time series analysis", "Feature engineering", "Model deployment", "Real-time predictions"]}
            pricing="$12,000–$35,000"
            icon="📊"
          />
          <AISolution
            title="AI-Powered Search"
            description="Semantic search and recommendation systems"
            features={["Vector embeddings", "Similarity search", "Recommendation engine", "Search analytics"]}
            pricing="$6,000–$18,000"
            icon="🔍"
          />
          <AISolution
            title="Computer Vision System"
            description="Image and video analysis for automation and insights"
            features={["Object detection", "Image classification", "Video analysis", "Real-time processing"]}
            pricing="$10,000–$30,000"
            icon="👁️"
          />
          <AISolution
            title="AI Content Generator"
            description="Automated content creation for marketing and documentation"
            features={["Multi-format output", "Brand voice training", "Quality control", "Workflow integration"]}
            pricing="$4,000–$12,000"
            icon="✍️"
          />
          <AISolution
            title="Voice AI Assistant"
            description="Speech-to-text and voice command systems"
            features={["Speech recognition", "Natural language processing", "Voice synthesis", "Multi-language"]}
            pricing="$7,000–$20,000"
            icon="🎤"
          />
          <AISolution
            title="AI Data Pipeline"
            description="Automated data processing and ML pipeline orchestration"
            features={["ETL automation", "Feature engineering", "Model training", "Monitoring"]}
            pricing="$9,000–$28,000"
            icon="⚙️"
          />
          <AISolution
            title="AI Security Monitor"
            description="Intelligent threat detection and security analysis"
            features={["Anomaly detection", "Threat classification", "Real-time alerts", "Incident response"]}
            pricing="$11,000–$32,000"
            icon="🛡️"
          />
        </div>
      </div>

      <Pricing />
      
      <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement AI?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss your AI needs and create a custom solution that delivers measurable business results.
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
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail) => (
          <li key={detail} className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AISolution({ 
  title, 
  description, 
  features, 
  pricing, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2 mb-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center text-sm text-gray-600">
            <span className="text-purple-500 mr-2">✓</span>
            {feature}
          </div>
        ))}
      </div>
      <div className="text-2xl font-bold text-purple-600">{pricing}</div>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Development Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="AI Discovery" 
          price="$5k–$12k" 
          duration="2–3 weeks"
          features={[
            "Use-case analysis",
            "Technology selection",
            "Data assessment",
            "Implementation roadmap",
            "Proof of concept",
            "ROI projections"
          ]} 
        />
        <Plan 
          name="AI Pilot" 
          price="$15k–$45k" 
          duration="4–8 weeks"
          features={[
            "MVP development",
            "RAG/agent implementation",
            "Evaluation framework",
            "Safety guardrails",
            "Performance dashboards",
            "Integration testing"
          ]} 
          popular={true}
        />
        <Plan 
          name="AI Production" 
          price="$50k+" 
          duration="8+ weeks"
          features={[
            "Production deployment",
            "Hardened infrastructure",
            "Advanced monitoring",
            "SLA guarantees",
            "Cost optimization",
            "Dedicated support",
            "Continuous improvement"
          ]} 
        />
      </div>
    </div>
  );
}

function Plan({ 
  name, 
  price, 
  duration, 
  features, 
  popular = false 
}: { 
  name: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  popular?: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white relative ${popular ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <span className="text-purple-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Services Inquiry"
        className={`mt-6 w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-purple-600 text-white hover:bg-purple-700' 
            : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}