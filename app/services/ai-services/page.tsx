
export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Professional AI services including RAG systems, LLM applications, MLOps, and custom AI solutions. Expert AI development starting at $5k.'
};

export default function AIPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
        <p className="text-xl text-gray-600 mb-8">
          Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item 
            title="Applied AI" 
            details={[
              "RAG over private data",
              "Task-specific agents",
              "Vision + speech processing",
              "Personalization engines",
              "Chatbot development",
              "Document processing",
              "Code generation tools"
            ]} 
          />
          <Item 
            title="Model Ops" 
            details={[
              "Offline evals & testing",
              "Safety + guardrails",
              "Batch + streaming inference",
              "Cost controls & optimization",
              "Model versioning",
              "A/B testing frameworks",
              "Performance monitoring"
            ]} 
          />
          <Item 
            title="Data & MLOps" 
            details={[
              "Data pipelines",
              "Feature stores",
              "Vector databases",
              "Monitoring + drift detection",
              "Model deployment",
              "Automated retraining",
              "Data quality assurance"
            ]} 
          />
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our AI Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Large Language Models</h3>
              <p className="text-gray-600">GPT-4, Claude, Llama, and custom fine-tuned models for your specific use cases.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Vector Databases</h3>
              <p className="text-gray-600">Pinecone, Weaviate, Chroma, and custom vector search solutions for RAG applications.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">MLOps & Deployment</h3>
              <p className="text-gray-600">Kubernetes, Docker, MLflow, and cloud-native AI model deployment strategies.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom AI Solutions</h3>
              <p className="text-gray-600">From computer vision to NLP, we build AI solutions tailored to your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Services Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan 
          name="AI Discovery" 
          price="$5k–$12k" 
          duration="2–3 weeks"
          features={[
            "Use-case analysis & design",
            "Technology stack selection",
            "Data assessment",
            "Implementation roadmap",
            "Proof of concept",
            "ROI projections",
            "Risk assessment"
          ]} 
        />
        <Plan 
          name="AI Pilot" 
          price="$15k–$45k" 
          duration="4–8 weeks"
          features={[
            "RAG/agent MVP development",
            "Evals + safety implementation",
            "Real-time dashboards",
            "Data pipeline setup",
            "Model fine-tuning",
            "API development",
            "Integration testing"
          ]} 
        />
        <Plan 
          name="AI Production" 
          price="$50k+" 
          duration="Custom timeline"
          features={[
            "Hardened infrastructure",
            "Advanced monitoring",
            "SLA guarantees",
            "Cost optimization",
            "Scalability planning",
            "Security hardening",
            "24/7 support"
          ]} 
        />
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement AI?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss your AI requirements and create a custom solution that drives real business value.
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

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-purple-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="mailto:kleber@ziontechgroup.com?subject=AI Services Inquiry"
        className="block w-full mt-6 bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

