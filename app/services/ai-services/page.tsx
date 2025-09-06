export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI solutions including RAG systems, intelligent agents, machine learning pipelines, and custom AI applications for business automation.'
};

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services & Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ship AI features with confidence: RAG systems, intelligent agents, fine-tuning, evaluations, and MLOps. 
            Transform your business with cutting-edge artificial intelligence.
          </p>
        </div>

        {/* Core AI Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AIServiceCard 
              title="Applied AI Solutions" 
              description="Custom AI applications tailored to your business needs"
              features={["RAG over private data", "Task-specific agents", "Vision + speech processing", "Personalization engines"]}
              icon="🤖"
              price="Starting at $15k"
            />
            <AIServiceCard 
              title="Model Operations" 
              description="Production-ready AI model deployment and management"
              features={["Offline evaluations", "Safety + guardrails", "Batch + streaming", "Cost optimization"]}
              icon="⚙️"
              price="Starting at $25k"
            />
            <AIServiceCard 
              title="Data & MLOps" 
              description="End-to-end machine learning infrastructure and pipelines"
              features={["Data pipelines", "Feature stores", "Vector databases", "Monitoring + drift detection"]}
              icon="📊"
              price="Starting at $20k"
            />
          </div>
        </div>

        {/* Specialized AI Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AISolutionCard 
              name="Intelligent Document Processing"
              description="Extract insights from documents using NLP and computer vision"
              features={["OCR + text extraction", "Entity recognition", "Document classification", "Automated workflows"]}
              category="Document AI"
              price="$12k–$35k"
            />
            <AISolutionCard 
              name="Predictive Analytics Platform"
              description="Build forecasting models for business intelligence and decision making"
              features={["Time series forecasting", "Anomaly detection", "Risk assessment", "Real-time predictions"]}
              category="Analytics"
              price="$18k–$45k"
            />
            <AISolutionCard 
              name="Conversational AI Assistant"
              description="Deploy intelligent chatbots and virtual assistants for customer service"
              features={["Natural language understanding", "Multi-channel support", "Context awareness", "Human handoff"]}
              category="Conversational AI"
              price="$15k–$40k"
            />
            <AISolutionCard 
              name="Computer Vision System"
              description="Implement image and video analysis for quality control and automation"
              features={["Object detection", "Image classification", "Video analytics", "Real-time processing"]}
              category="Computer Vision"
              price="$20k–$50k"
            />
            <AISolutionCard 
              name="Recommendation Engine"
              description="Build personalized recommendation systems for e-commerce and content"
              features={["Collaborative filtering", "Content-based filtering", "Real-time recommendations", "A/B testing"]}
              category="Recommendations"
              price="$16k–$38k"
            />
            <AISolutionCard 
              name="Fraud Detection System"
              description="Advanced fraud detection using machine learning and behavioral analysis"
              features={["Real-time scoring", "Pattern recognition", "Risk assessment", "Alert management"]}
              category="Security"
              price="$22k–$55k"
            />
            <AISolutionCard 
              name="Natural Language Processing"
              description="Text analysis and language understanding for business applications"
              features={["Sentiment analysis", "Text summarization", "Language translation", "Named entity recognition"]}
              category="NLP"
              price="$14k–$32k"
            />
            <AISolutionCard 
              name="Supply Chain Optimization"
              description="AI-powered optimization for inventory, logistics, and demand planning"
              features={["Demand forecasting", "Route optimization", "Inventory management", "Cost reduction"]}
              category="Operations"
              price="$25k–$60k"
            />
            <AISolutionCard 
              name="Content Generation Platform"
              description="Automated content creation using generative AI for marketing and communications"
              features={["Text generation", "Image creation", "Video production", "Brand consistency"]}
              category="Content AI"
              price="$18k–$42k"
            />
          </div>
        </div>

        {/* AI Implementation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Implementation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AIProcessStep 
              step="1"
              title="Discovery & Strategy"
              description="Analyze your data and define AI objectives"
              features={["Data assessment", "Use case identification", "ROI analysis", "Technical feasibility"]}
            />
            <AIProcessStep 
              step="2"
              title="Model Development"
              description="Build and train custom AI models"
              features={["Data preprocessing", "Model training", "Validation", "Performance optimization"]}
            />
            <AIProcessStep 
              step="3"
              title="Integration & Testing"
              description="Deploy models and integrate with existing systems"
              features={["API development", "System integration", "Testing", "Performance monitoring"]}
            />
            <AIProcessStep 
              step="4"
              title="Monitoring & Optimization"
              description="Continuous monitoring and model improvement"
              features={["Performance tracking", "Model updates", "A/B testing", "Continuous learning"]}
            />
          </div>
        </div>

        {/* AI Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TechCard name="OpenAI GPT" description="Large language models" />
            <TechCard name="Anthropic Claude" description="Advanced AI assistant" />
            <TechCard name="TensorFlow" description="Machine learning framework" />
            <TechCard name="PyTorch" description="Deep learning library" />
            <TechCard name="Hugging Face" description="Transformers and models" />
            <TechCard name="LangChain" description="LLM application framework" />
            <TechCard name="Pinecone" description="Vector database" />
            <TechCard name="Weaviate" description="Vector search engine" />
            <TechCard name="MLflow" description="ML lifecycle management" />
            <TechCard name="Kubeflow" description="ML workflows on Kubernetes" />
            <TechCard name="Ray" description="Distributed ML training" />
            <TechCard name="Docker" description="Containerization" />
          </div>
        </div>

        <Pricing />
        <ContactSection />
      </div>
    </div>
  );
}

function AIServiceCard({ title, description, features, icon, price }: { 
  title: string; 
  description: string; 
  features: string[]; 
  icon: string; 
  price: string; 
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AISolutionCard({ name, description, features, category, price }: { 
  name: string; 
  description: string; 
  features: string[]; 
  category: string; 
  price: string; 
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">{category}</span>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="text-2xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-1 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 text-sm">
            <span className="text-purple-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
        Learn More
      </button>
    </div>
  );
}

function AIProcessStep({ step, title, description, features }: { 
  step: string; 
  title: string; 
  description: string; 
  features: string[]; 
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
          {step}
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 text-sm">
            <span className="text-purple-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
      <h4 className="font-semibold text-gray-900 mb-2">{name}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h3 style={{fontWeight: 700}}>{title}</h3>
      <ul style={{paddingLeft: 18, color: '#4b5563'}}>{details.map(d => (<li key={d} style={{listStyle: 'disc'}}>{d}</li>))}</ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="AI Discovery" 
          price="$5k–$12k" 
          features={["2–3 weeks", "Use-case design", "Tech selection", "Roadmap", "Proof of concept"]} 
          popular={false}
        />
        <Plan 
          name="AI Pilot" 
          price="$15k–$45k" 
          features={["4–8 weeks", "RAG/agent MVP", "Evals + safety", "Dashboards", "Integration"]} 
          popular={true}
        />
        <Plan 
          name="AI Production" 
          price="$50k+" 
          features={["Hardened infrastructure", "Monitoring", "SLAs", "Cost optimization", "24/7 support"]} 
          popular={false}
        />
      </div>
    </div>
  );
}

function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? 'border-purple-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-4xl font-bold text-gray-900 mb-6">{price}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-purple-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-purple-600 text-white hover:bg-purple-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8 text-center">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business with AI?</h3>
      <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
        Let's discuss how AI can solve your specific business challenges and create a competitive advantage. 
        Our AI experts are ready to help you implement cutting-edge solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">📞 Call Us</h4>
          <a href="tel:+13024640950" className="text-purple-600 hover:text-purple-700 font-medium">
            +1 302 464 0950
          </a>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">✉️ Email Us</h4>
          <a href="mailto:kleber@ziontechgroup.com" className="text-purple-600 hover:text-purple-700 font-medium">
            kleber@ziontechgroup.com
          </a>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">📍 Visit Us</h4>
          <p className="text-gray-600 text-sm">
            364 E Main St STE 1008<br />
            Middletown DE 19709
          </p>
        </div>
      </div>
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
  );
}