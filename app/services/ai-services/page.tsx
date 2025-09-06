export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI solutions including LLM applications, RAG systems, computer vision, natural language processing, and MLOps. From concept to production with enterprise-grade AI services.'
};

export default function AIPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
          We help businesses integrate cutting-edge AI technologies to solve real-world problems and drive innovation.
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
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard
            title="Large Language Model (LLM) Applications"
            description="Custom LLM solutions using GPT-4, Claude, and open-source models for content generation, analysis, and automation."
            features={["Custom prompt engineering", "Fine-tuning services", "API integration", "Cost optimization", "Performance monitoring", "Multi-model support"]}
            pricing="$5,000 - $50,000"
            marketSize="$15.2B LLM market"
            icon="🧠"
          />
          <AIServiceCard
            title="Retrieval-Augmented Generation (RAG)"
            description="Build intelligent systems that combine your data with LLMs for accurate, contextual responses."
            features={["Vector database setup", "Embedding optimization", "Context retrieval", "Response generation", "Accuracy monitoring", "Custom knowledge bases"]}
            pricing="$8,000 - $75,000"
            marketSize="$2.1B RAG market"
            icon="🔍"
          />
          <AIServiceCard
            title="AI Agents & Automation"
            description="Intelligent agents that can perform complex tasks, make decisions, and interact with multiple systems."
            features={["Task automation", "Decision making", "Multi-step workflows", "API integrations", "Error handling", "Performance optimization"]}
            pricing="$10,000 - $100,000"
            marketSize="$3.8B AI automation market"
            icon="🤖"
          />
          <AIServiceCard
            title="Computer Vision Solutions"
            description="Image and video analysis using state-of-the-art computer vision models for various business applications."
            features={["Object detection", "Image classification", "OCR processing", "Video analysis", "Real-time processing", "Custom model training"]}
            pricing="$12,000 - $120,000"
            marketSize="$4.2B computer vision market"
            icon="👁️"
          />
          <AIServiceCard
            title="Natural Language Processing"
            description="Advanced NLP solutions for text analysis, sentiment analysis, language translation, and content processing."
            features={["Sentiment analysis", "Language translation", "Text summarization", "Named entity recognition", "Topic modeling", "Custom NLP models"]}
            pricing="$6,000 - $60,000"
            marketSize="$2.8B NLP market"
            icon="💬"
          />
          <AIServiceCard
            title="Predictive Analytics & ML"
            description="Machine learning models for forecasting, pattern recognition, and data-driven decision making."
            features={["Predictive modeling", "Time series analysis", "Anomaly detection", "Feature engineering", "Model validation", "Deployment & monitoring"]}
            pricing="$15,000 - $150,000"
            marketSize="$8.1B ML market"
            icon="📊"
          />
          <AIServiceCard
            title="AI Chatbots & Virtual Assistants"
            description="Intelligent conversational AI for customer service, sales, and internal operations."
            features={["Multi-channel support", "Intent recognition", "Context management", "Human handoff", "Analytics & insights", "Custom training"]}
            pricing="$8,000 - $80,000"
            marketSize="$1.9B chatbot market"
            icon="💬"
          />
          <AIServiceCard
            title="AI-Powered Search & Discovery"
            description="Intelligent search systems with semantic understanding, recommendations, and personalized results."
            features={["Semantic search", "Recommendation engines", "Personalization", "Faceted search", "Auto-complete", "Search analytics"]}
            pricing="$10,000 - $100,000"
            marketSize="$3.2B search market"
            icon="🔎"
          />
          <AIServiceCard
            title="AI Data Pipeline & MLOps"
            description="End-to-end AI infrastructure for data processing, model training, deployment, and monitoring."
            features={["Data pipelines", "Model training", "A/B testing", "Model deployment", "Performance monitoring", "Automated retraining"]}
            pricing="$20,000 - $200,000"
            marketSize="$5.1B MLOps market"
            icon="⚙️"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Development Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful AI implementation from concept to production.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep
            step="1"
            title="Discovery & Strategy"
            description="Analyze your needs, define AI use cases, and create a comprehensive implementation roadmap."
          />
          <ProcessStep
            step="2"
            title="Data Preparation"
            description="Clean, process, and prepare your data for AI model training and deployment."
          />
          <ProcessStep
            step="3"
            title="Model Development"
            description="Build, train, and optimize AI models tailored to your specific requirements."
          />
          <ProcessStep
            step="4"
            title="Deployment & Monitoring"
            description="Deploy models to production with comprehensive monitoring and maintenance."
          />
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">AI Service Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AIPricingCard
            name="AI Discovery"
            price="$5,000 - $12,000"
            duration="2-3 weeks"
            features={[
              "AI use-case analysis",
              "Technology selection",
              "Proof of concept",
              "Implementation roadmap",
              "ROI projections",
              "Technical feasibility study"
            ]}
            bestFor="Businesses exploring AI"
          />
          <AIPricingCard
            name="AI Pilot"
            price="$15,000 - $45,000"
            duration="4-8 weeks"
            features={[
              "MVP AI solution",
              "Data integration",
              "Model training",
              "Testing & validation",
              "Performance metrics",
              "User feedback integration"
            ]}
            bestFor="Pilot implementations"
            popular={true}
          />
          <AIPricingCard
            name="Production AI"
            price="$50,000+"
            duration="8-16 weeks"
            features={[
              "Production-grade AI system",
              "Scalable architecture",
              "Advanced monitoring",
              "Security & compliance",
              "24/7 support",
              "Continuous optimization"
            ]}
            bestFor="Enterprise deployment"
          />
        </div>
      </section>

      <section className="py-12 bg-blue-50 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our AI experts have delivered 100+ successful AI implementations across industries. 
            Let's discuss how AI can solve your specific challenges and drive growth.
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

function AIServiceCard({ 
  title, 
  description, 
  features, 
  pricing, 
  marketSize, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  marketSize: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-lg font-semibold text-blue-600 mb-1">{pricing}</div>
        <div className="text-sm text-gray-500">{marketSize}</div>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-blue-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessStep({ 
  step, 
  title, 
  description 
}: { 
  step: string; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function AIPricingCard({ 
  name, 
  price, 
  duration, 
  features, 
  bestFor, 
  popular = false 
}: { 
  name: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  bestFor: string; 
  popular?: boolean; 
}) {
  return (
    <div className={`relative bg-white border rounded-xl p-8 ${popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-500 mb-4">Best for: {bestFor}</div>
      <a
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}