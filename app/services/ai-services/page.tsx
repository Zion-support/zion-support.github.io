import Link from "next/link";

export const metadata = {
  title: "AI Services | Zion Tech Group - Advanced AI Solutions & Machine Learning",
  description: "Comprehensive AI services including custom LLM development, RAG systems, computer vision, NLP, predictive analytics, and enterprise AI integration. Expert AI solutions with 99.9% accuracy and 24/7 support.",
};

export default function AIServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your business with cutting-edge artificial intelligence. From custom LLM development to enterprise AI platforms, 
            we deliver intelligent solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get AI Consultation
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Discuss Your AI Project
            </a>
          </div>
        </div>
      </section>

      {/* AI Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Service Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions across multiple domains, from natural language processing to computer vision and predictive analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Natural Language Processing */}
            <AIServiceCard
              title="Natural Language Processing"
              description="Advanced NLP solutions for text analysis, sentiment analysis, and language understanding"
              features={[
                "Custom language models",
                "Sentiment analysis",
                "Text classification",
                "Named entity recognition",
                "Language translation",
                "Text summarization"
              ]}
              pricing="From $3,500/month"
              icon="🗣️"
              href="/services/ai-services/natural-language-processing"
            />

            {/* Computer Vision */}
            <AIServiceCard
              title="Computer Vision"
              description="Image and video analysis solutions for object detection, recognition, and processing"
              features={[
                "Object detection & recognition",
                "Facial recognition systems",
                "Image classification",
                "Video analysis",
                "OCR & document processing",
                "Medical image analysis"
              ]}
              pricing="From $4,200/month"
              icon="👁️"
              href="/services/ai-services/computer-vision"
            />

            {/* Machine Learning */}
            <AIServiceCard
              title="Machine Learning Models"
              description="Custom ML models for predictive analytics, recommendation systems, and data insights"
              features={[
                "Predictive modeling",
                "Recommendation engines",
                "Anomaly detection",
                "Time series forecasting",
                "Clustering algorithms",
                "Model optimization"
              ]}
              pricing="From $2,800/month"
              icon="🧠"
              href="/services/ai-services/machine-learning"
            />

            {/* AI Chatbots */}
            <AIServiceCard
              title="AI Chatbots & Assistants"
              description="Intelligent conversational AI for customer support, sales, and internal operations"
              features={[
                "Multi-channel chatbots",
                "Voice assistants",
                "Intent recognition",
                "Context management",
                "Integration APIs",
                "Analytics dashboard"
              ]}
              pricing="From $1,500/month"
              icon="💬"
              href="/services/ai-services/ai-chatbot"
            />

            {/* RAG Systems */}
            <AIServiceCard
              title="RAG Systems"
              description="Retrieval-Augmented Generation systems for intelligent document processing and Q&A"
              features={[
                "Document indexing",
                "Semantic search",
                "Knowledge base integration",
                "Context-aware responses",
                "Source citation",
                "Real-time updates"
              ]}
              pricing="From $5,000/month"
              icon="📚"
              href="/services/ai-services/rag-systems"
            />

            {/* Predictive Analytics */}
            <AIServiceCard
              title="Predictive Analytics"
              description="Advanced analytics and forecasting for business intelligence and decision making"
              features={[
                "Demand forecasting",
                "Risk assessment",
                "Customer behavior prediction",
                "Market trend analysis",
                "Real-time dashboards",
                "Automated reporting"
              ]}
              pricing="From $3,800/month"
              icon="📊"
              href="/services/ai-services/predictive-analytics"
            />
          </div>
        </div>
      </section>

      {/* Industry-Specific AI Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific AI Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored AI solutions designed for specific industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard
              title="Healthcare AI"
              description="Medical diagnosis, drug discovery, and patient care optimization"
              features={["Medical imaging analysis", "Drug interaction prediction", "Patient risk assessment"]}
              icon="🏥"
              pricing="From $8,000/month"
            />
            <IndustryCard
              title="Financial AI"
              description="Fraud detection, algorithmic trading, and risk management"
              features={["Fraud detection", "Credit scoring", "Algorithmic trading"]}
              icon="💰"
              pricing="From $6,500/month"
            />
            <IndustryCard
              title="E-commerce AI"
              description="Product recommendations, inventory optimization, and customer insights"
              features={["Product recommendations", "Price optimization", "Customer segmentation"]}
              icon="🛒"
              pricing="From $2,200/month"
            />
            <IndustryCard
              title="Manufacturing AI"
              description="Predictive maintenance, quality control, and process optimization"
              features={["Predictive maintenance", "Quality control", "Supply chain optimization"]}
              icon="🏭"
              pricing="From $4,500/month"
            />
          </div>
        </div>
      </section>

      {/* AI Development Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering successful AI solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="Discovery & Analysis"
              description="Understanding your business needs, data sources, and success metrics"
              features={["Requirements gathering", "Data assessment", "Success metrics definition"]}
            />
            <ProcessStep
              step="2"
              title="Model Development"
              description="Building and training custom AI models tailored to your specific use case"
              features={["Data preprocessing", "Model training", "Performance optimization"]}
            />
            <ProcessStep
              step="3"
              title="Integration & Testing"
              description="Seamlessly integrating AI solutions into your existing systems and workflows"
              features={["API development", "System integration", "Comprehensive testing"]}
            />
            <ProcessStep
              step="4"
              title="Deployment & Support"
              description="Launching your AI solution with ongoing monitoring, maintenance, and optimization"
              features={["Production deployment", "Performance monitoring", "Continuous improvement"]}
            />
          </div>
        </div>
      </section>
}
      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge AI technologies and frameworks to deliver state-of-the-art solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TechCard name="TensorFlow" description="Open-source ML platform" />
            <TechCard name="PyTorch" description="Deep learning framework" />
            <TechCard name="OpenAI GPT" description="Large language models" />
            <TechCard name="Hugging Face" description="Transformers library" />
            <TechCard name="LangChain" description="LLM application framework" />
            <TechCard name="Pinecone" description="Vector database" />
            <TechCard name="AWS SageMaker" description="ML platform" />
            <TechCard name="Google Cloud AI" description="AI services" />
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI solutions deliver measurable business impact across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <MetricCard
              number="95%"
              label="Accuracy Rate"
              description="Average model accuracy across all AI solutions"
            />
            <MetricCard
              number="60%"
              label="Cost Reduction"
              description="Average operational cost savings for clients"
            />
            <MetricCard
              number="3x"
              label="Efficiency Gain"
              description="Average productivity improvement"
            />
            <MetricCard
              number="24/7"
              label="Availability"
              description="Round-the-clock AI system monitoring"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your AI project and discover how our solutions can drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-blue-100">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function AIServiceCard({
  title,
  description,
  features,
  pricing,
  icon,
  href
}: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>
    </Link>
  );
}

function IndustryCard({
  title,
  description,
  features,
  icon,
  pricing
}: {
  title: string;
  description: string;
  features: string[];
  icon: string;
  pricing: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3 text-sm">{description}</p>
      <ul className="space-y-1 mb-3">
        {features.map((feature, index) => (
          <li key={index} className="text-xs text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm font-semibold text-blue-600">{pricing}</div>
    </div>
  );
}

function ProcessStep({
  step,
  title,
  description,
  features
}: {
  step: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechCard({
  name,
  description
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
      <h4 className="font-semibold text-gray-900 mb-1">{name}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function MetricCard({
  number,
  label,
  description
}: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}