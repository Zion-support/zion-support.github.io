export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Advanced AI solutions including LLM applications, RAG systems, AI agents, fine-tuning, and MLOps. Transform your business with cutting-edge AI technology.'
};

export default function AIPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
          We help you build production-ready AI systems that drive real business value.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard
            title="Custom LLM Applications"
            description="Build intelligent applications powered by large language models"
            features={["Custom model fine-tuning", "Prompt engineering", "Context-aware responses", "Multi-modal capabilities", "Real-time inference"]}
            price="$15k–$50k"
            icon="🧠"
          />
          <AIServiceCard
            title="RAG (Retrieval-Augmented Generation)"
            description="Intelligent document search and question-answering systems"
            features={["Vector database setup", "Document processing", "Semantic search", "Context retrieval", "Answer generation"]}
            price="$10k–$30k"
            icon="🔍"
          />
          <AIServiceCard
            title="AI Agents & Automation"
            description="Autonomous AI agents that can perform complex tasks and workflows"
            features={["Task automation", "Workflow orchestration", "API integrations", "Decision making", "Self-healing systems"]}
            price="$20k–$60k"
            icon="🤖"
          />
          <AIServiceCard
            title="Computer Vision Solutions"
            description="Image and video analysis with state-of-the-art computer vision models"
            features={["Object detection", "Image classification", "OCR & text extraction", "Video analytics", "Real-time processing"]}
            price="$12k–$40k"
            icon="👁️"
          />
          <AIServiceCard
            title="Natural Language Processing"
            description="Advanced text analysis, sentiment analysis, and language understanding"
            features={["Sentiment analysis", "Text classification", "Named entity recognition", "Language translation", "Text summarization"]}
            price="$8k–$25k"
            icon="📝"
          />
          <AIServiceCard
            title="Predictive Analytics & ML"
            description="Machine learning models for forecasting and predictive insights"
            features={["Time series forecasting", "Anomaly detection", "Recommendation systems", "Risk assessment", "Performance optimization"]}
            price="$18k–$45k"
            icon="📈"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Development Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Applied AI" 
            details={[
              "RAG over private data with vector databases",
              "Task-specific AI agents and workflows",
              "Multi-modal AI (vision + speech + text)",
              "Personalization and recommendation engines",
              "Real-time AI inference and streaming",
              "Custom model fine-tuning and optimization"
            ]} 
          />
          <Item 
            title="Model Operations" 
            details={[
              "Comprehensive offline evaluation frameworks",
              "AI safety and guardrails implementation",
              "Batch and streaming inference pipelines",
              "Cost optimization and resource management",
              "A/B testing for AI models",
              "Performance monitoring and alerting"
            ]} 
          />
          <Item 
            title="Data & MLOps" 
            details={[
              "End-to-end ML pipeline automation",
              "Feature stores and data versioning",
              "Vector databases and embeddings",
              "Model drift detection and monitoring",
              "Automated retraining and deployment",
              "Data quality and governance frameworks"
            ]} 
          />
        </div>
      </section>

      <Pricing />
      <ContactSection />
    </div>
  );
}

function AIServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
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