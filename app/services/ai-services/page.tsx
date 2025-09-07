import Link from 'next/link';


// Simple ServiceCard component
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Enterprise-grade AI solutions including RAG systems, conversational AI, predictive analytics, and computer vision applications.'
};

export default function AIServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
            We help you build, deploy, and scale AI solutions that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ServiceCard 
            title="Applied AI Solutions" 
            details={[
              "RAG over private data",
              "Task-specific agents",
              "Vision + speech processing",
              "Personalization engines",
              "Content generation",
              "Intelligent automation"
            ]} 
            icon="🤖"
          />
          <ServiceCard 
            title="Model Operations" 
            details={[
              "Offline evaluation systems",
              "Safety + guardrails",
              "Batch + streaming inference",
              "Cost optimization",
              "Performance monitoring",
              "A/B testing frameworks"
            ]} 
            icon="⚙️"
          />
          <ServiceCard 
            title="Data & MLOps" 
            details={[
              "Data pipeline automation",
              "Feature store management",
              "Vector database setup",
              "Model drift detection",
              "Continuous integration",
              "Monitoring + alerting"
            ]} 
            icon="📊"
          />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">AI Solutions Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SolutionCard
              title="Intelligent Document Processing"
              description="Extract, analyze, and process information from documents using advanced NLP and computer vision."
              features={[
                "OCR + text extraction",
                "Document classification",
                "Data validation",
                "API integration"
              ]}
              pricing="Starting at $25,000"
            />
            <SolutionCard
              title="Conversational AI Platform"
              description="Build intelligent chatbots and virtual assistants with natural language understanding."
              features={[
                "Multi-channel support",
                "Context awareness",
                "Intent recognition",
                "Human handoff"
              ]}
              pricing="Starting at $30,000"
            />
            <SolutionCard
              title="Predictive Analytics Engine"
              description="Leverage machine learning to predict trends, behaviors, and outcomes for better decision making."
              features={[
                "Time series forecasting",
                "Anomaly detection",
                "Risk assessment",
                "Real-time predictions"
              ]}
              pricing="Starting at $35,000"
            />
            <SolutionCard
              title="Computer Vision System"
              description="Implement image and video analysis solutions for automation and quality control."
              features={[
                "Object detection",
                "Image classification",
                "Video analytics",
                "Quality assurance"
              ]}
              pricing="Starting at $40,000"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechCard
              title="Large Language Models"
              description="GPT-4, Claude, Llama, and custom fine-tuned models"
              icon="🧠"
            />
            <TechCard
              title="Vector Databases"
              description="Pinecone, Weaviate, Chroma for semantic search"
              icon="🔍"
            />
            <TechCard
              title="ML Frameworks"
              description="TensorFlow, PyTorch, Scikit-learn, Hugging Face"
              icon="⚡"
            />
            <TechCard
              title="Cloud Platforms"
              description="AWS, GCP, Azure with GPU acceleration"
              icon="☁️"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Plan
              name="AI Discovery"
              price="$5k–$12k"
              features={[
                "2–3 weeks consultation",
                "Use case design",
                "Technology selection",
                "Implementation roadmap",
                "Proof of concept"
              ]}
            />
            <Plan
              name="Pilot"
              price="$15k–$45k"
              features={[
                "4–8 weeks development",
                "RAG / agent MVP",
                "Evaluation framework",
                "Safety guardrails",
                "Performance dashboards"
              ]}
              popular={true}
            />
            <Plan
              name="Production"
              price="$50k+"
              features={[
                "Hardened infrastructure",
                "Monitoring & alerting",
                "SLA guarantees",
                "Cost optimization",
                "Ongoing maintenance"
              ]}
            />
          </div>
        </div>

        <section className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to implement AI in your business?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let's discuss your AI needs and create a solution that delivers measurable results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </section>
      </section>
    </div>
  );
}


function SolutionCard({ title, description, features, pricing }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 text-gray-600 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-gray-900">{pricing}</div>
    </div>
  );
}

function TechCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function Plan({ name, price, features, popular = false }: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${
      popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
    }`}>
      {popular && (
        <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}