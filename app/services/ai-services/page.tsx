import Link from 'next/link';

export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including LLM applications, RAG systems, custom AI models, and MLOps solutions for enterprise-grade AI implementation.'
};

export default function AIServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services & Solutions</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
          We build production-ready AI systems that deliver measurable business value.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AIServiceCard
            title="Custom LLM Applications"
            description="Build intelligent applications powered by large language models with custom training and fine-tuning"
            features={["Custom model training", "Fine-tuning for specific domains", "API integration", "Performance optimization"]}
            price="$25k-$75k"
            timeline="6-16 weeks"
            icon="🧠"
          />
          <AIServiceCard
            title="RAG (Retrieval-Augmented Generation) Systems"
            description="Advanced knowledge retrieval systems that combine your data with AI for accurate, contextual responses"
            features={["Vector database setup", "Document processing", "Semantic search", "Context-aware responses"]}
            price="$15k-$45k"
            timeline="4-12 weeks"
            icon="🔍"
          />
          <AIServiceCard
            title="AI-Powered Chatbots & Virtual Assistants"
            description="Intelligent conversational agents that understand context and provide human-like interactions"
            features={["Natural language processing", "Multi-channel deployment", "Sentiment analysis", "Escalation handling"]}
            price="$12k-$35k"
            timeline="3-8 weeks"
            icon="💬"
          />
          <AIServiceCard
            title="Computer Vision & Image Processing"
            description="AI solutions for image recognition, object detection, and visual content analysis"
            features={["Object detection", "Image classification", "OCR & text extraction", "Real-time processing"]}
            price="$20k-$60k"
            timeline="5-14 weeks"
            icon="👁️"
          />
          <AIServiceCard
            title="Predictive Analytics & Forecasting"
            description="Machine learning models for business forecasting, trend analysis, and predictive insights"
            features={["Time series analysis", "Demand forecasting", "Risk assessment", "Automated reporting"]}
            price="$18k-$50k"
            timeline="4-10 weeks"
            icon="📈"
          />
          <AIServiceCard
            title="AI Automation & Workflow Optimization"
            description="Intelligent automation systems that streamline business processes and reduce manual work"
            features={["Process automation", "Decision trees", "Workflow optimization", "Integration APIs"]}
            price="$16k-$40k"
            timeline="3-9 weeks"
            icon="⚡"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechCard
            title="Large Language Models"
            technologies={["GPT-4", "Claude", "Llama", "Custom Models", "Fine-tuning"]}
            description="Advanced language understanding and generation"
          />
          <TechCard
            title="Vector Databases"
            technologies={["Pinecone", "Weaviate", "Chroma", "Qdrant", "Milvus"]}
            description="High-performance similarity search and retrieval"
          />
          <TechCard
            title="ML Frameworks"
            technologies={["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain"]}
            description="Production-ready machine learning development"
          />
          <TechCard
            title="AI Infrastructure"
            technologies={["AWS SageMaker", "Google AI Platform", "Azure ML", "Kubernetes", "Docker"]}
            description="Scalable AI deployment and management"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Implementation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep
            step="1"
            title="Discovery & Strategy"
            description="Analyze your business needs and design AI solutions that deliver real value"
            duration="1-2 weeks"
          />
          <ProcessStep
            step="2"
            title="Data Preparation"
            description="Clean, process, and prepare your data for AI model training and deployment"
            duration="2-4 weeks"
          />
          <ProcessStep
            step="3"
            title="Model Development"
            description="Build, train, and optimize AI models tailored to your specific requirements"
            duration="3-8 weeks"
          />
          <ProcessStep
            step="4"
            title="Deployment & Monitoring"
            description="Deploy AI solutions to production with continuous monitoring and optimization"
            duration="1-3 weeks"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing & Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AIPricingCard
            name="AI Discovery"
            price="$5k–$12k"
            duration="2–3 weeks"
            features={[
              "AI use-case analysis",
              "Technology selection",
              "Data assessment",
              "Implementation roadmap",
              "ROI projections"
            ]}
            recommended={false}
          />
          <AIPricingCard
            name="AI Pilot"
            price="$15k–$45k"
            duration="4–8 weeks"
            features={[
              "MVP AI solution",
              "Basic model training",
              "API development",
              "Testing & validation",
              "Performance metrics"
            ]}
            recommended={true}
          />
          <AIPricingCard
            name="Production AI"
            price="$50k+"
            duration="8+ weeks"
            features={[
              "Enterprise-grade AI",
              "Advanced model training",
              "MLOps pipeline",
              "Monitoring & alerts",
              "24/7 support"
            ]}
            recommended={false}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Use Cases & Industries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UseCaseCard
            industry="Healthcare"
            useCases={["Medical diagnosis", "Drug discovery", "Patient monitoring", "Treatment optimization"]}
            icon="🏥"
          />
          <UseCaseCard
            industry="Finance"
            useCases={["Fraud detection", "Risk assessment", "Algorithmic trading", "Credit scoring"]}
            icon="💳"
          />
          <UseCaseCard
            industry="E-commerce"
            useCases={["Recommendation engines", "Price optimization", "Inventory management", "Customer service"]}
            icon="🛍️"
          />
          <UseCaseCard
            industry="Manufacturing"
            useCases={["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"]}
            icon="🏭"
          />
          <UseCaseCard
            industry="Education"
            useCases={["Personalized learning", "Automated grading", "Student analytics", "Content generation"]}
            icon="🎓"
          />
          <UseCaseCard
            industry="Real Estate"
            useCases={["Property valuation", "Market analysis", "Lead scoring", "Virtual tours"]}
            icon="🏠"
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ready to Transform Your Business with AI?</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Let's discuss how AI can solve your specific business challenges. 
          Our team has implemented AI solutions for 100+ companies, generating over $50M in value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-center"
          >
            Email Us
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}

function AIServiceCard({ title, description, features, price, timeline, icon }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-purple-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-purple-600">{price}</span>
        <span className="text-sm text-gray-500">{timeline}</span>
      </div>
    </div>
  );
}

function TechCard({ title, technologies, description }: {
  title: string;
  technologies: string[];
  description: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProcessStep({ step, title, description, duration }: {
  step: string;
  title: string;
  description: string;
  duration: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2 text-sm">{description}</p>
      <span className="text-purple-600 text-sm font-semibold">{duration}</span>
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
    <div className={`border rounded-xl p-8 relative ${recommended ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'}`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-purple-600 mb-2">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-purple-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
        recommended 
          ? 'bg-purple-600 text-white hover:bg-purple-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
}

function UseCaseCard({ industry, useCases, icon }: {
  industry: string;
  useCases: string[];
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{industry}</h3>
      <ul className="space-y-2">
        {useCases.map((useCase, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-purple-500 mr-2">•</span> {useCase}
          </li>
        ))}
      </ul>
    </div>
  );
}