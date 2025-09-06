<<<<<<< HEAD
export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

export default function AIPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
          We help you build, deploy, and scale AI solutions that drive real business value.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard
            title="Custom LLM Development"
            description="Build and fine-tune large language models for your specific use case"
            features={["GPT-4 fine-tuning", "Custom model training", "Domain adaptation", "Performance optimization", "API integration"]}
            price="$15,000-50,000"
            icon="🧠"
          />
          <AIServiceCard
            title="RAG Systems"
            description="Retrieval-Augmented Generation systems for knowledge-intensive applications"
            features={["Vector databases", "Semantic search", "Document processing", "Context optimization", "Real-time updates"]}
            price="$8,000-25,000"
=======
<<<<<<< HEAD
export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Advanced AI solutions including machine learning, natural language processing, computer vision, and intelligent automation. Transform your business with cutting-edge AI technology.'
};
=======
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD
export default function AIPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI solutions including machine learning, natural language processing, 
            computer vision, and intelligent automation. Transform your business with cutting-edge AI technology.
          </p>
        </div>
=======
<<<<<<< HEAD
import Link from 'next/link';

export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including LLM applications, RAG systems, custom model training, and MLOps solutions.'
};

export default function AIPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
            We deliver production-ready AI solutions that drive real business value.
          </p>
        </div>

        {/* Core AI Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AIServiceCard
            title="Custom LLM Applications"
            description="Build intelligent applications powered by large language models"
            features={[
              "Custom prompt engineering",
              "Context-aware responses",
              "Multi-modal capabilities",
              "Real-time streaming",
              "Custom fine-tuning",
              "API integration & deployment"
            ]}
            pricing="$15k - $50k"
            timeline="4-10 weeks"
            icon="🧠"
          />
          
          <AIServiceCard
            title="RAG Systems & Knowledge Bases"
            description="Retrieval-Augmented Generation for enterprise knowledge management"
            features={[
              "Document ingestion & processing",
              "Vector database setup",
              "Semantic search capabilities",
              "Context-aware retrieval",
              "Source attribution & citations",
              "Performance optimization"
            ]}
            pricing="$20k - $60k"
            timeline="6-12 weeks"
            icon="🔍"
          />
          
          <AIServiceCard
            title="AI Agent Development"
            description="Intelligent autonomous agents for task automation and decision making"
            features={[
              "Multi-step reasoning",
              "Tool integration & APIs",
              "Memory & context management",
              "Error handling & recovery",
              "Human-in-the-loop workflows",
              "Performance monitoring"
            ]}
            pricing="$25k - $70k"
            timeline="8-16 weeks"
            icon="🤖"
          />
          
          <AIServiceCard
            title="Computer Vision Solutions"
            description="Image and video analysis with deep learning models"
            features={[
              "Object detection & recognition",
              "Image classification",
              "OCR & text extraction",
              "Video analysis & tracking",
              "Custom model training",
              "Real-time processing"
            ]}
            pricing="$18k - $55k"
            timeline="6-14 weeks"
            icon="👁️"
          />
          
          <AIServiceCard
            title="Natural Language Processing"
            description="Advanced text analysis and language understanding systems"
            features={[
              "Sentiment analysis",
              "Named entity recognition",
              "Text summarization",
              "Language translation",
              "Intent classification",
              "Custom model training"
            ]}
            pricing="$12k - $40k"
            timeline="4-10 weeks"
            icon="💬"
          />
          
          <AIServiceCard
            title="MLOps & Model Management"
            description="End-to-end machine learning operations and model lifecycle management"
            features={[
              "Model versioning & tracking",
              "Automated training pipelines",
              "A/B testing frameworks",
              "Model monitoring & drift detection",
              "Automated retraining",
              "Production deployment"
            ]}
            pricing="$30k - $80k"
            timeline="10-20 weeks"
            icon="⚙️"
          />
        </div>

        {/* AI Capabilities */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CapabilityItem
              title="Applied AI"
              capabilities={[
                "RAG over private data",
                "Task-specific agents",
                "Vision + speech processing",
                "Personalization engines",
                "Recommendation systems",
                "Predictive analytics"
              ]}
            />
            <CapabilityItem
              title="Model Operations"
              capabilities={[
                "Offline & online evaluations",
                "Safety & guardrails",
                "Batch & streaming inference",
                "Cost optimization",
                "Performance monitoring",
                "Automated scaling"
              ]}
            />
            <CapabilityItem
              title="Data & MLOps"
              capabilities={[
                "Data pipelines & ETL",
                "Feature stores",
                "Vector databases",
                "Model drift detection",
                "A/B testing",
                "Continuous integration"
              ]}
            />
            <CapabilityItem
              title="Enterprise Integration"
              capabilities={[
                "API development",
                "Security & compliance",
                "Multi-cloud deployment",
                "Legacy system integration",
                "Custom dashboards",
                "24/7 monitoring"
              ]}
            />
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry-Specific AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCard
              title="Healthcare AI"
              description="Medical diagnosis, drug discovery, and patient care optimization"
              features={["Medical image analysis", "Clinical decision support", "Drug interaction detection", "Patient risk assessment"]
              pricing="$40k - $100k"
              icon="🏥"
            />
            <IndustryCard
              title="Financial AI"
              description="Fraud detection, risk assessment, and algorithmic trading"
              features={["Real-time fraud detection", "Credit risk modeling", "Algorithmic trading", "Regulatory compliance"]
              pricing="$35k - $90k"
              icon="💳"
            />
            <IndustryCard
              title="E-commerce AI"
              description="Personalized recommendations, inventory optimization, and customer service"
              features={["Product recommendations", "Demand forecasting", "Chatbot automation", "Price optimization"]
              pricing="$25k - $70k"
              icon="🛒"
            />
            <IndustryCard
              title="Manufacturing AI"
              description="Predictive maintenance, quality control, and supply chain optimization"
              features={["Predictive maintenance", "Quality inspection", "Supply chain optimization", "Energy efficiency"]
              pricing="$30k - $80k"
              icon="🏭"
            />
            <IndustryCard
              title="Education AI"
              description="Personalized learning, automated grading, and student success prediction"
              features={["Adaptive learning paths", "Automated assessment", "Student performance prediction", "Content generation"]
              pricing="$20k - $60k"
              icon="🎓"
            />
            <IndustryCard
              title="Legal AI"
              description="Document analysis, contract review, and legal research automation"
              features={["Contract analysis", "Legal research", "Document classification", "Compliance monitoring"]
              pricing="$35k - $85k"
              icon="⚖️"
            />
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AIPricingCard
              name="AI Discovery"
              price="$5k - $12k"
              duration="2-3 weeks"
              features={[
                "Use-case analysis & design",
                "Technology stack selection",
                "Data requirements assessment",
                "Implementation roadmap",
                "Proof-of-concept development",
                "ROI projections"
              ]}
              recommended={false}
            />
            <AIPricingCard
              name="AI Pilot"
              price="$15k - $45k"
              duration="4-8 weeks"
              features={[
                "RAG/Agent MVP development",
                "Model evaluation & testing",
                "Safety & guardrails implementation",
                "Performance dashboards",
                "Integration with existing systems",
                "User feedback collection"
              ]}
              recommended={true}
            />
            <AIPricingCard
              name="AI Production"
              price="$50k+"
              duration="12+ weeks"
              features={[
                "Production-ready infrastructure",
                "Advanced monitoring & alerting",
                "SLA guarantees & support",
                "Cost optimization",
                "Security & compliance",
                "Scalability & performance tuning"
              ]}
              recommended={false}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your AI needs and create a custom solution that delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function AIServiceCard({ title, description, features, pricing, timeline, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  timeline: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="text-sm font-semibold text-purple-600">Pricing: {pricing}</span>
        <span className="text-sm text-gray-500 ml-2">• Timeline: {timeline}</span>
      </div>
      <ul className="text-sm text-gray-600 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CapabilityItem({ title, capabilities }: { title: string; capabilities: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="space-y-2">
        {capabilities.map((capability, index) => (
          <li key={index} className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">•</span>
            <span className="text-gray-600 text-sm">{capability}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IndustryCard({ title, description, features, pricing, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="text-sm font-semibold text-purple-600 mb-3">Pricing: {pricing}</div>
      <ul className="text-xs text-gray-600 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AIPricingCard({ name, price, duration, features, recommended }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${recommended ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'}`}>
      {recommended && (
        <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840

        {/* AI Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AIServiceCategory
            title="Machine Learning"
            icon="🧠"
            description="Custom ML models and predictive analytics"
            services={[
              "Predictive modeling",
              "Recommendation systems",
              "Anomaly detection",
              "Time series forecasting",
              "Classification algorithms",
              "Regression analysis"
            ]}
          />
          <AIServiceCategory
            title="Natural Language Processing"
            icon="💬"
            description="Text analysis and language understanding"
            services={[
              "Sentiment analysis",
              "Text classification",
              "Named entity recognition",
              "Language translation",
              "Chatbot development",
              "Document processing"
            ]}
          />
          <AIServiceCategory
            title="Computer Vision"
            icon="👁️"
            description="Image and video analysis solutions"
            services={[
              "Object detection",
              "Image classification",
              "Facial recognition",
              "OCR (Optical Character Recognition)",
              "Video analytics",
              "Medical imaging"
            ]}
          />
        </div>

        {/* Real AI Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Solutions We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AISolution
              title="Intelligent Document Processing"
              description="Automated document analysis and data extraction"
              features={[
                "OCR with 99%+ accuracy",
                "Smart data extraction",
                "Document classification",
                "Automated workflows",
                "Multi-language support",
                "API integration"
              ]}
              price="$25k - $60k"
              timeline="8-16 weeks"
              useCase="Legal, finance, healthcare, insurance"
              marketSize="$4.2B"
            />
            <AISolution
              title="Predictive Maintenance System"
              description="AI-powered equipment monitoring and failure prediction"
              features={[
                "IoT sensor integration",
                "Real-time monitoring",
                "Failure prediction algorithms",
                "Maintenance scheduling",
                "Cost optimization",
                "Dashboard analytics"
              ]}
              price="$35k - $80k"
              timeline="12-20 weeks"
              useCase="Manufacturing, utilities, transportation"
              marketSize="$6.8B"
            />
            <AISolution
              title="Customer Service AI Assistant"
              description="Intelligent chatbot with human-like interactions"
              features={[
                "Natural language understanding",
                "Multi-channel support",
                "Sentiment analysis",
                "Escalation to humans",
                "Knowledge base integration",
                "Performance analytics"
              ]}
              price="$20k - $50k"
              timeline="6-12 weeks"
              useCase="E-commerce, SaaS, customer support"
              marketSize="$5.3B"
            />
            <AISolution
              title="Fraud Detection System"
              description="Real-time fraud prevention and risk assessment"
              features={[
                "Real-time monitoring",
                "Pattern recognition",
                "Risk scoring",
                "Alert system",
                "Machine learning models",
                "Compliance reporting"
              ]}
              price="$30k - $70k"
              timeline="10-18 weeks"
              useCase="Banking, fintech, e-commerce"
              marketSize="$8.1B"
            />
            <AISolution
              title="Personalized Recommendation Engine"
              description="AI-driven product and content recommendations"
              features={[
                "Collaborative filtering",
                "Content-based filtering",
                "Real-time recommendations",
                "A/B testing framework",
                "Performance metrics",
                "Scalable architecture"
              ]}
              price="$18k - $45k"
              timeline="8-14 weeks"
              useCase="E-commerce, streaming, content platforms"
              marketSize="$3.7B"
            />
            <AISolution
              title="Medical Image Analysis"
              description="AI-powered medical imaging and diagnosis support"
              features={[
                "Image preprocessing",
                "Disease detection",
                "Segmentation algorithms",
                "Diagnostic support",
                "Radiologist workflow",
                "HIPAA compliance"
              ]}
              price="$50k - $120k"
              timeline="16-24 weeks"
              useCase="Healthcare, medical imaging, diagnostics"
              marketSize="$2.9B"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your business processes and create competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
=======
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
            icon="🔍"
          />
          <AIServiceCard
            title="AI Agents & Automation"
<<<<<<< HEAD
            description="Intelligent agents that can perform complex tasks autonomously"
            features={["Multi-step reasoning", "Tool integration", "Workflow automation", "Decision making", "Learning capabilities"]}
            price="$12,000-35,000"
            icon="🤖"
          />
          <AIServiceCard
            title="Computer Vision"
            description="Image and video analysis solutions for various industries"
            features={["Object detection", "Image classification", "OCR/ICR", "Video analytics", "Real-time processing"]}
            price="$10,000-30,000"
=======
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
            icon="👁️"
          />
          <AIServiceCard
            title="Natural Language Processing"
<<<<<<< HEAD
            description="Text analysis, sentiment analysis, and language understanding solutions"
            features={["Sentiment analysis", "Text classification", "Entity extraction", "Language translation", "Text generation"]}
            price="$6,000-20,000"
            icon="💬"
          />
          <AIServiceCard
            title="Predictive Analytics"
            description="Machine learning models for forecasting and predictive insights"
            features={["Time series forecasting", "Anomaly detection", "Risk assessment", "Demand prediction", "Performance monitoring"]}
            price="$8,000-25,000"
            icon="📊"
=======
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
          />
        </div>
      </section>

<<<<<<< HEAD
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AIProcessStep
            step="1"
            title="Data Assessment"
            description="Analyze your data quality, volume, and structure for AI readiness"
          />
          <AIProcessStep
            step="2"
            title="Model Selection"
            description="Choose the right AI approach and algorithms for your specific use case"
          />
          <AIProcessStep
            step="3"
            title="Development & Training"
            description="Build, train, and optimize AI models with continuous iteration"
          />
          <AIProcessStep
            step="4"
            title="Deployment & Monitoring"
            description="Deploy to production with monitoring, maintenance, and scaling"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AITechStack
            title="Machine Learning"
            technologies={["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Hugging Face"]}
          />
          <AITechStack
            title="LLM & NLP"
            technologies={["OpenAI GPT-4", "Anthropic Claude", "LangChain", "LlamaIndex", "Transformers"]}
          />
          <AITechStack
            title="MLOps & Infrastructure"
            technologies={["MLflow", "Kubeflow", "Docker", "Kubernetes", "AWS SageMaker"]}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Use Cases by Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryUseCase
            title="Healthcare"
            description="Medical diagnosis, drug discovery, patient monitoring, and treatment optimization"
            examples={["Medical image analysis", "Drug interaction prediction", "Patient risk assessment", "Treatment recommendation"]}
            icon="🏥"
          />
          <IndustryUseCase
            title="Finance"
            description="Fraud detection, algorithmic trading, risk assessment, and customer service"
            examples={["Fraud detection", "Credit scoring", "Algorithmic trading", "Chatbot support"]}
            icon="💰"
          />
          <IndustryUseCase
            title="E-commerce"
            description="Recommendation systems, demand forecasting, and customer experience optimization"
            examples={["Product recommendations", "Price optimization", "Inventory management", "Customer segmentation"]}
            icon="🛒"
          />
          <IndustryUseCase
            title="Manufacturing"
            description="Predictive maintenance, quality control, and supply chain optimization"
            examples={["Predictive maintenance", "Quality inspection", "Supply chain optimization", "Process optimization"]}
            icon="🏭"
          />
          <IndustryUseCase
            title="Education"
            description="Personalized learning, automated grading, and educational content generation"
            examples={["Personalized tutoring", "Automated grading", "Content generation", "Learning analytics"]}
            icon="🎓"
          />
          <IndustryUseCase
            title="Legal"
            description="Document analysis, contract review, and legal research automation"
            examples={["Contract analysis", "Legal research", "Document classification", "Compliance monitoring"]}
            icon="⚖️"
=======
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
          />
        </div>
      </section>

      <Pricing />
<<<<<<< HEAD
      
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our AI Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIBenefitCard
            title="Expert AI Team"
            description="PhD-level AI researchers and engineers with deep industry experience"
            icon="👨‍🔬"
          />
          <AIBenefitCard
            title="Production-Ready"
            description="AI solutions built for scale, reliability, and real-world deployment"
            icon="🚀"
          />
          <AIBenefitCard
            title="Custom Solutions"
            description="Tailored AI implementations that fit your specific business needs"
            icon="🎯"
          />
          <AIBenefitCard
            title="Continuous Learning"
            description="AI models that improve over time with new data and feedback"
            icon="📈"
          />
          <AIBenefitCard
            title="Ethical AI"
            description="Responsible AI development with bias detection and fairness measures"
            icon="⚖️"
          />
          <AIBenefitCard
            title="24/7 Support"
            description="Round-the-clock monitoring and support for your AI systems"
            icon="🛡️"
          />
        </div>
      </section>

      <CTASection />
=======
      <ContactSection />
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
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
<<<<<<< HEAD
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-2xl font-bold text-blue-600 mb-2">{price}</div>
        <div className="text-sm text-gray-500">Starting price</div>
      </div>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function AIProcessStep({ step, title, description }: { 
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

function AITechStack({ title, technologies }: { 
  title: string; 
  technologies: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndustryUseCase({ title, description, examples, icon }: { 
  title: string; 
  description: string; 
  examples: string[]; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {examples.map((example) => (
          <li key={example} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {example}
=======
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
          </li>
        ))}
      </ul>
    </div>
<<<<<<< HEAD
  );
}

function AIBenefitCard({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string; 
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
=======
=======
export const metadata = { title: 'AI Services | Zion Tech Group' } export default /**
 * AIPage - Function description
 */
function AIPage() { return ( <section> <h1 style={{font_size: 26, font_weight: 800}}>AI Services</h1> <p style={{margin_top: 8, color: '#374151'}}>Ship AI features with confidence: RAG, agents, fine - tuning, evals and MLOps.</p> <div style={{display: 'grid', gap: 12, margin_top: 16}}> <Item title="Applied AI" details={["RAG over private data", "Task - specific agents", "Vision + speech", "Personalization"]} /> <Item title="Model Ops" details={["Offline evals", "Safety + guardrails", "Batch + streaming", "Cost controls"]} /> <Item title="Data & MLOps" details={["Pipelines", "Feature stores", "Vector DBs", "Monitoring + drift"]} /> </div> <Pricing /> </section> )} /**
 * Item - Function description
 */
function Item() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h3 style={{font_weight: 700}}>{title}</h3> <ul style={{padding_left: 18, color: '#4b5563'}}>{details.map (d => (<li key={d} style={{list_style: 'disc'}}>{d}</li>))}</ul> </div> )} /**
 * Pricing - Function description
 */
function Pricing() { return ( <div style={{margin_top: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat (auto - fit, minmax (260px, 1fr))'}}> <Plan name="AI Discovery" price="$5k–$12k" features={["2–3 weeks", "Use - case design", "Tech selection", "Roadmap"]} /> <Plan name="Pilot" price="$15k–$45k" features={["4–8 weeks", "RAG / agent MVP", "Evals + safety", "Dashboards"]} /> <Plan name="Production" price="$50k+" features={["Hardened infra", "Monitoring", "SLAs", "Cost optimization"]} /> </div> )} /**
 * Plan - Function description
 */
function Plan() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h4 style={{font_weight: 700}}>{name}</h4> <div style={{color: '#111827', font_weight: 800, margin_top: 4}}>{price}</div> <ul style={{padding_left: 18, color: '#4b5563', margin_top: 8}}>{features.map (function => (<li key={f} style={{list_style: 'disc'}}>{f}</li>))}</ul> <a href="https: </div> )}
=======
export const metadata = { title: 'AI Services | Zion Tech Group' };

export default function AIPage() {
  return (
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>AI Services</h1>
      <p style={{marginTop: 8, color: '#374151'}}>Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps.</p>
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item title="Applied AI" details={["RAG over private data", "Task-specific agents", "Vision + speech", "Personalization"]} />
        <Item title="Model Ops" details={["Offline evals", "Safety + guardrails", "Batch + streaming", "Cost controls"]} />
        <Item title="Data & MLOps" details={["Pipelines", "Feature stores", "Vector DBs", "Monitoring + drift"]} />
      </div>
      <Pricing />
    </section>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
<<<<<<< HEAD
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
>>>>>>> main
=======
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h3 style={{fontWeight: 700}}>{title}</h3>
      <ul style={{paddingLeft: 18, color: '#4b5563'}}>{details.map(d => (<li key={d} style={{listStyle: 'disc'}}>{d}</li>))}</ul>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
    </div>
  );
}

<<<<<<< HEAD
function Pricing() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Service Pricing</h2>
=======
<<<<<<< HEAD
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="AI Discovery" 
          price="$5k–$12k" 
<<<<<<< HEAD
          features={["2–3 weeks", "Use-case design", "Tech selection", "Roadmap", "Proof of concept"]} 
          popular={false}
        />
        <Plan 
          name="Pilot" 
          price="$15k–$45k" 
          features={["4–8 weeks", "RAG/agent MVP", "Evals + safety", "Dashboards", "Basic monitoring"]} 
          popular={true}
        />
        <Plan 
          name="Production" 
          price="$50k+" 
          features={["Hardened infra", "Monitoring", "SLAs", "Cost optimization", "24/7 support"]} 
          popular={false}
=======
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
        />
      </div>
    </section>
  );
}

<<<<<<< HEAD
function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span> {feature}
=======
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
<<<<<<< HEAD
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
=======
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
=======
function Pricing() {
  return (
    <div style={{marginTop: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'}}>
      <Plan name="AI Discovery" price="$5k–$12k" features={["2–3 weeks", "Use-case design", "Tech selection", "Roadmap"]} />
      <Plan name="Pilot" price="$15k–$45k" features={["4–8 weeks", "RAG/agent MVP", "Evals + safety", "Dashboards"]} />
      <Plan name="Production" price="$50k+" features={["Hardened infra", "Monitoring", "SLAs", "Cost optimization"]} />
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
    </div>
  );
}

<<<<<<< HEAD
function CTASection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Transform Your Business with AI?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your AI needs and create a custom solution that drives real business value. 
        Our team of AI experts is ready to help you implement cutting-edge AI solutions.
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
      <div className="mt-6 text-sm text-gray-600">
        <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
      </div>
    </div>
  );
}
=======
<<<<<<< HEAD
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
=======
function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h4 style={{fontWeight: 700}}>{name}</h4>
      <div style={{color: '#111827', fontWeight: 800, marginTop: 4}}>{price}</div>
      <ul style={{paddingLeft: 18, color: '#4b5563', marginTop: 8}}>{features.map(f => (<li key={f} style={{listStyle: 'disc'}}>{f}</li>))}</ul>
      <a href="https://ziontechgroup.com" style={{display: 'inline-block', marginTop: 12, padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: 6}}>Get Started</a>
    </div>
  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-2140
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
