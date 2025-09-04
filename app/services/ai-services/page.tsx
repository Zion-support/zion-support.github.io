export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including LLM applications, RAG systems, MLOps, and custom AI solutions.',
};

export default function AIServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Ship AI features with confidence: RAG systems, intelligent agents, fine-tuning, 
          evaluations, and MLOps pipelines. From concept to production.
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
            Schedule Workshop
          </a>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our AI Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard 
            title="Custom LLM Applications"
            description="Build intelligent applications powered by large language models with custom training and fine-tuning"
            features={["Custom model training", "Fine-tuning", "Prompt engineering", "API integration"]}
            pricing="$3,000-15,000/month"
            icon="🧠"
          />
          <AIServiceCard 
            title="RAG (Retrieval-Augmented Generation)"
            description="Implement RAG systems to enhance LLMs with your private data and knowledge base"
            features={["Vector databases", "Document processing", "Semantic search", "Context optimization"]}
            pricing="$2,500-12,000/month"
            icon="🔍"
          />
          <AIServiceCard 
            title="AI-Powered Chatbots"
            description="Intelligent conversational agents with multi-turn dialogue and context awareness"
            features={["Multi-turn conversations", "Context awareness", "Intent recognition", "Fallback handling"]}
            pricing="$1,800-8,000/month"
            icon="💬"
          />
          <AIServiceCard 
            title="Computer Vision Solutions"
            description="Image and video analysis with object detection, classification, and real-time processing"
            features={["Object detection", "Image classification", "OCR & text extraction", "Real-time processing"]}
            pricing="$2,200-10,000/month"
            icon="👁️"
          />
          <AIServiceCard 
            title="Natural Language Processing"
            description="Text analysis, sentiment analysis, and language understanding for business applications"
            features={["Sentiment analysis", "Text classification", "Entity extraction", "Language translation"]}
            pricing="$1,500-7,500/month"
            icon="📝"
          />
          <AIServiceCard 
            title="Predictive Analytics"
            description="Machine learning models for forecasting, risk assessment, and business intelligence"
            features={["Time series forecasting", "Risk modeling", "Anomaly detection", "Business intelligence"]}
            pricing="$2,800-12,000/month"
            icon="📈"
          />
        </div>
      </section>

      {/* Applied AI Solutions */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Applied AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <AppliedAIFeature 
              title="RAG over Private Data"
              description="Implement retrieval-augmented generation to enhance LLMs with your proprietary data and documents"
            />
            <AppliedAIFeature 
              title="Task-Specific Agents"
              description="Build specialized AI agents for specific business tasks and workflows"
            />
            <AppliedAIFeature 
              title="Vision + Speech Integration"
              description="Multi-modal AI solutions combining computer vision and natural language processing"
            />
            <AppliedAIFeature 
              title="Personalization Engines"
              description="AI-powered personalization for content, recommendations, and user experiences"
            />
          </div>
          <div className="space-y-6">
            <AppliedAIFeature 
              title="Document Intelligence"
              description="Extract insights and automate processing of complex documents and forms"
            />
            <AppliedAIFeature 
              title="Customer Service AI"
              description="Intelligent customer support with automated responses and escalation"
            />
            <AppliedAIFeature 
              title="Content Generation"
              description="AI-powered content creation for marketing, documentation, and communications"
            />
            <AppliedAIFeature 
              title="Business Process Intelligence"
              description="AI-driven insights into business processes and optimization opportunities"
            />
          </div>
        </div>
      </section>

      {/* Model Operations */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Model Operations (MLOps)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MLOpsFeature 
            title="Offline Evaluations"
            description="Comprehensive model testing with automated evaluation pipelines and performance metrics"
          />
          <MLOpsFeature 
            title="Safety + Guardrails"
            description="Implement safety measures, bias detection, and content filtering for responsible AI"
          />
          <MLOpsFeature 
            title="Batch + Streaming"
            description="Support for both batch processing and real-time streaming inference pipelines"
          />
          <MLOpsFeature 
            title="Cost Controls"
            description="Intelligent cost management and optimization for AI model usage and infrastructure"
          />
        </div>
      </section>

      {/* Data & MLOps */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Data & MLOps Infrastructure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <DataFeature 
              title="Data Pipelines"
              description="Automated data ingestion, processing, and transformation pipelines for AI workloads"
            />
            <DataFeature 
              title="Feature Stores"
              description="Centralized feature management and serving for consistent model training and inference"
            />
            <DataFeature 
              title="Vector Databases"
              description="High-performance vector storage and retrieval for RAG and similarity search applications"
            />
            <DataFeature 
              title="Model Versioning"
              description="Comprehensive model lifecycle management with version control and rollback capabilities"
            />
          </div>
          <div className="space-y-6">
            <DataFeature 
              title="Monitoring + Drift"
              description="Real-time model performance monitoring with data drift detection and alerting"
            />
            <DataFeature 
              title="A/B Testing Platform"
              description="Built-in experimentation framework for model comparison and performance validation"
            />
            <DataFeature 
              title="AutoML Integration"
              description="Automated machine learning workflows for rapid model development and deployment"
            />
            <DataFeature 
              title="Compliance & Governance"
              description="AI governance framework with audit trails, compliance reporting, and risk management"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">AI Services Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AIPricingCard 
            name="AI Discovery Workshop"
            price="$5,000–$12,000"
            duration="2–3 weeks"
            features={[
              "Use-case analysis & design",
              "Technology stack selection",
              "Data assessment & strategy",
              "Implementation roadmap",
              "ROI projections",
              "Risk assessment"
            ]}
            popular={false}
          />
          <AIPricingCard 
            name="AI Pilot Project"
            price="$15,000–$45,000"
            duration="4–8 weeks"
            features={[
              "RAG/Agent MVP development",
              "Model fine-tuning & optimization",
              "Evaluation framework setup",
              "Safety & guardrails implementation",
              "Performance dashboards",
              "Integration & testing"
            ]}
            popular={true}
          />
          <AIPricingCard 
            name="Production AI Platform"
            price="$50,000+"
            duration="8+ weeks"
            features={[
              "Hardened production infrastructure",
              "Advanced monitoring & alerting",
              "Enterprise SLAs & support",
              "Cost optimization & scaling",
              "Security & compliance",
              "Dedicated AI team"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Implement AI?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your AI needs and create a custom solution. We'll help you 
            choose the right approach and technology stack for your business goals.
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
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
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
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>
    </div>
  );
}

function AppliedAIFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
        <span className="text-green-600 text-sm">✓</span>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function MLOpsFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function DataFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
        <span className="text-blue-600 text-sm">✓</span>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function AIPricingCard({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white ${popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="https://ziontechgroup.com" 
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

