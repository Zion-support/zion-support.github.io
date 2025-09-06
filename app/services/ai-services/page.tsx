export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Advanced AI services including LLM applications, RAG systems, AI agents, computer vision, natural language processing, and MLOps solutions.'
};

export default function AIPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
          We build production-ready AI solutions that drive real business value.
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
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cutting-edge AI technologies tailored to your business needs and industry requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard
            title="Intelligent Document Processing"
            description="Extract, analyze, and process information from documents using advanced NLP and computer vision"
            features={["OCR & text extraction", "Document classification", "Data validation", "Automated workflows", "Multi-format support"]}
            pricing="$3,500/month"
            icon="📄"
          />
          <AIServiceCard
            title="AI-Powered Chatbots"
            description="Conversational AI agents that understand context and provide intelligent responses"
            features={["Natural language understanding", "Context awareness", "Multi-language support", "Integration APIs", "Analytics dashboard"]}
            pricing="$2,800/month"
            icon="💬"
          />
          <AIServiceCard
            title="Predictive Analytics Engine"
            description="Machine learning models that predict trends, behaviors, and outcomes for business decisions"
            features={["Time series forecasting", "Customer behavior prediction", "Risk assessment", "Real-time scoring", "Model monitoring"]}
            pricing="$4,200/month"
            icon="🔮"
          />
          <AIServiceCard
            title="Computer Vision Solutions"
            description="Image and video analysis for quality control, security, and automation"
            features={["Object detection", "Image classification", "Quality inspection", "Facial recognition", "Video analytics"]}
            pricing="$3,800/month"
            icon="👁️"
          />
          <AIServiceCard
            title="AI Content Generation"
            description="Automated content creation for marketing, documentation, and communication"
            features={["Text generation", "Image creation", "Video production", "Brand consistency", "Multi-platform output"]}
            pricing="$2,500/month"
            icon="🎨"
          />
          <AIServiceCard
            title="Intelligent Process Automation"
            description="AI-driven automation for complex business processes and decision-making"
            features={["Workflow automation", "Decision trees", "Exception handling", "Process optimization", "ROI tracking"]}
            pricing="$3,200/month"
            icon="⚙️"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Technology Stack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We use the latest AI technologies and frameworks to build robust, scalable solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechCategory
            title="Large Language Models"
            technologies={["GPT-4", "Claude", "Llama 2", "PaLM", "Custom Models"]}
          />
          <TechCategory
            title="ML Frameworks"
            technologies={["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Hugging Face"]}
          />
          <TechCategory
            title="Vector Databases"
            technologies={["Pinecone", "Weaviate", "Chroma", "Qdrant", "Milvus"]}
          />
          <TechCategory
            title="MLOps Tools"
            technologies={["MLflow", "Kubeflow", "DVC", "Weights & Biases", "Neptune"]}
          />
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Development Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our systematic approach ensures successful AI implementation and deployment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AIProcessStep
            step="1"
            title="Discovery & Strategy"
            description="AI opportunity assessment, data audit, and solution architecture design."
          />
          <AIProcessStep
            step="2"
            title="Data Preparation"
            description="Data collection, cleaning, labeling, and feature engineering for model training."
          />
          <AIProcessStep
            step="3"
            title="Model Development"
            description="Model selection, training, validation, and optimization for your specific use case."
          />
          <AIProcessStep
            step="4"
            title="Deployment & Monitoring"
            description="Production deployment, performance monitoring, and continuous improvement."
          />
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function AIServiceCard({ title, description, features, pricing, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">•</span> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-lg font-bold text-blue-600 mb-4">{pricing}</div>
      <a
        href="tel:+13024640950"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function TechCategory({ title, technologies }: { title: string; technologies: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function AIProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-12 bg-gray-50 rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Services Pricing</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Flexible pricing options for AI projects of any size. From proof-of-concept to enterprise deployment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <AIPlan 
          name="AI Discovery" 
          price="$5k–$12k" 
          duration="2–3 weeks"
          features={[
            "AI opportunity assessment",
            "Use-case design & validation",
            "Technology selection",
            "Implementation roadmap",
            "ROI projections",
            "Pilot scope definition"
          ]}
          popular={false}
        />
        <AIPlan 
          name="AI Pilot" 
          price="$15k–$45k" 
          duration="4–8 weeks"
          features={[
            "RAG/agent MVP development",
            "Model evaluation & safety",
            "Performance dashboards",
            "Integration testing",
            "User feedback collection",
            "Scalability planning"
          ]}
          popular={true}
        />
        <AIPlan 
          name="AI Production" 
          price="$50k+" 
          duration="8–16 weeks"
          features={[
            "Production-ready infrastructure",
            "Advanced monitoring & alerting",
            "SLA guarantees",
            "Cost optimization",
            "Security hardening",
            "24/7 support & maintenance"
          ]}
          popular={false}
        />
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          All plans include: Model ownership, 6 months support, documentation, training
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
            Get AI Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function AIPlan({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white relative ${popular ? 'border-purple-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-purple-600 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
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