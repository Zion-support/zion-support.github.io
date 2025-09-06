



export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'

};


export default function AIPage() {
  return (

    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ship AI features with confidence: RAG systems, intelligent agents, custom model training, 
              and production-ready MLOps. We help you harness AI to solve real business problems.
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
                Email kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our AI Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI solutions that transform your business operations and drive innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AIServiceCard
              title="Large Language Model (LLM) Applications"
              description="Custom LLM applications built with GPT-4, Claude, or open-source models for specific business use cases."
              features={[
                "Custom prompt engineering",
                "Fine-tuned model training",
                "Multi-model integration",
                "Context-aware responses",
                "Cost optimization",
                "API development"
              ]}
              pricing="$5,000-25,000"
              marketSize="$15.2B LLM market"
              icon="🧠"
            />
            <AIServiceCard
              title="Retrieval-Augmented Generation (RAG)"
              description="Intelligent systems that combine knowledge retrieval with generative AI for accurate, contextual responses."
              features={[
                "Vector database integration",
                "Semantic search capabilities",
                "Knowledge base management",
                "Real-time data ingestion",
                "Context optimization",
                "Performance monitoring"
              ]}
              pricing="$8,000-40,000"
              marketSize="$2.8B RAG market"
              icon="🔍"
            />
            <AIServiceCard
              title="AI Agents & Automation"
              description="Intelligent agents that automate complex workflows, decision-making, and business processes."
              features={[
                "Workflow automation",
                "Decision tree logic",
                "Multi-step task execution",
                "Human-in-the-loop integration",
                "Error handling & recovery",
                "Performance analytics"
              ]}
              pricing="$10,000-50,000"
              marketSize="$4.1B AI automation market"
              icon="🤖"
            />
            <AIServiceCard
              title="Computer Vision Solutions"
              description="Advanced image and video analysis for quality control, security, and automated inspection systems."
              features={[
                "Object detection & recognition",
                "Image classification",
                "Video analytics",
                "Real-time processing",
                "Custom model training",
                "Edge deployment"
              ]}
              pricing="$6,000-30,000"
              marketSize="$3.2B computer vision market"
              icon="👁️"
            />
            <AIServiceCard
              title="Natural Language Processing (NLP)"
              description="Text analysis, sentiment analysis, language translation, and content generation solutions."
              features={[
                "Sentiment analysis",
                "Text classification",
                "Language translation",
                "Named entity recognition",
                "Content summarization",
                "Multi-language support"
              ]}
              pricing="$4,000-20,000"
              marketSize="$5.7B NLP market"
              icon="📝"
            />
            <AIServiceCard
              title="Predictive Analytics & ML"
              description="Machine learning models for forecasting, risk assessment, and data-driven business intelligence."
              features={[
                "Time series forecasting",
                "Anomaly detection",
                "Risk modeling",
                "Real-time predictions",
                "Model monitoring",
                "A/B testing framework"
              ]}
              pricing="$7,000-35,000"
              marketSize="$8.9B ML market"
              icon="📊"
            />
            <AIServiceCard
              title="Conversational AI & Chatbots"
              description="Intelligent chatbots and virtual assistants with natural language understanding and context awareness."
              features={[
                "Multi-channel support",
                "Context retention",
                "Intent recognition",
                "Integration APIs",
                "Analytics dashboard",
                "Custom training"
              ]}
              pricing="$3,000-15,000"
              marketSize="$6.3B chatbot market"
              icon="💬"
            />
            <AIServiceCard
              title="AI-Powered Search & Discovery"
              description="Intelligent search systems with semantic understanding, personalization, and recommendation engines."
              features={[
                "Semantic search",
                "Personalization algorithms",
                "Recommendation engines",
                "Search analytics",
                "Auto-complete & suggestions",
                "Multi-modal search"
              ]}
              pricing="$5,000-25,000"
              marketSize="$4.5B search market"
              icon="🔎"
            />
            <AIServiceCard
              title="MLOps & AI Infrastructure"
              description="Production-ready AI infrastructure with model deployment, monitoring, and continuous integration."
              features={[
                "Model deployment pipelines",
                "A/B testing infrastructure",
                "Performance monitoring",
                "Auto-scaling systems",
                "Data versioning",
                "Model governance"
              ]}
              pricing="$8,000-40,000"
              marketSize="$3.8B MLOps market"
              icon="⚙️"
            />
            <AIServiceCard
              title="AI-Powered Fraud Detection"
              description="Advanced fraud detection systems using machine learning to identify and prevent fraudulent activities in real-time."
              features={[
                "Real-time fraud scoring",
                "Behavioral pattern analysis",
                "Anomaly detection algorithms",
                "Multi-channel fraud prevention",
                "Risk assessment models",
                "Compliance reporting"
              ]}
              pricing="$12,000-60,000"
              marketSize="$2.1B fraud detection market"
              icon="🛡️"
            />
            <AIServiceCard
              title="Voice AI & Speech Recognition"
              description="Advanced voice AI solutions including speech-to-text, text-to-speech, and voice command processing."
              features={[
                "Multi-language speech recognition",
                "Natural language understanding",
                "Voice biometrics",
                "Real-time transcription",
                "Custom voice synthesis",
                "Voice analytics & insights"
              ]}
              pricing="$6,000-35,000"
              marketSize="$4.3B voice AI market"
              icon="🎤"
            />
            <AIServiceCard
              title="AI-Powered Recommendation Engine"
              description="Intelligent recommendation systems for e-commerce, content, and personalized user experiences."
              features={[
                "Collaborative filtering",
                "Content-based recommendations",
                "Real-time personalization",
                "A/B testing framework",
                "Performance analytics",
                "Multi-domain recommendations"
              ]}
              pricing="$8,000-45,000"
              marketSize="$3.6B recommendation engine market"
              icon="🎯"
            />
            <AIServiceCard
              title="AI Content Moderation"
              description="Automated content moderation using AI to detect and filter inappropriate content across text, images, and videos."
              features={[
                "Multi-modal content analysis",
                "Real-time content filtering",
                "Custom moderation rules",
                "Human-in-the-loop workflows",
                "Compliance monitoring",
                "Detailed reporting & analytics"
              ]}
              pricing="$5,000-30,000"
              marketSize="$1.7B content moderation market"
              icon="🔍"
            />
            <AIServiceCard
              title="AI-Powered Supply Chain Optimization"
              description="Intelligent supply chain management with demand forecasting, route optimization, and inventory management."
              features={[
                "Demand forecasting models",
                "Route optimization algorithms",
                "Inventory optimization",
                "Supplier risk assessment",
                "Cost optimization",
                "Real-time monitoring & alerts"
              ]}
              pricing="$15,000-80,000"
              marketSize="$5.2B supply chain AI market"
              icon="🚚"
            />
            <AIServiceCard
              title="AI-Powered Healthcare Analytics"
              description="Medical AI solutions for diagnosis assistance, treatment recommendations, and healthcare data analysis."
              features={[
                "Medical image analysis",
                "Diagnostic assistance",
                "Treatment recommendation",
                "Patient risk stratification",
                "Drug interaction analysis",
                "HIPAA-compliant processing"
              ]}
              pricing="$20,000-100,000"
              marketSize="$7.8B healthcare AI market"
              icon="🏥"
            />
            <AIServiceCard
              title="AI-Powered Financial Trading"
              description="Algorithmic trading systems with market analysis, risk management, and automated trading strategies."
              features={[
                "Market sentiment analysis",
                "Algorithmic trading strategies",
                "Risk management models",
                "Real-time market monitoring",
                "Portfolio optimization",
                "Regulatory compliance"
              ]}
              pricing="$25,000-150,000"
              marketSize="$9.1B fintech AI market"
              icon="📈"
            />
            <AIServiceCard
              title="AI-Powered Legal Document Analysis"
              description="Intelligent legal document processing with contract analysis, compliance checking, and legal research assistance."
              features={[
                "Contract analysis & review",
                "Legal document classification",
                "Compliance checking",
                "Legal research assistance",
                "Risk assessment",
                "Document summarization"
              ]}
              pricing="$10,000-50,000"
              marketSize="$2.4B legal AI market"
              icon="⚖️"
            />
            <AIServiceCard
              title="AI-Powered Real Estate Analytics"
              description="Property valuation, market analysis, and investment recommendations using AI and machine learning."
              features={[
                "Property valuation models",
                "Market trend analysis",
                "Investment recommendations",
                "Risk assessment",
                "Price prediction",
                "Market forecasting"
              ]}
              pricing="$8,000-40,000"
              marketSize="$1.9B proptech AI market"
              icon="🏠"
            />
            <AIServiceCard
              title="AI-Powered Energy Management"
              description="Smart energy management systems with consumption optimization, predictive maintenance, and sustainability analytics."
              features={[
                "Energy consumption optimization",
                "Predictive maintenance",
                "Renewable energy integration",
                "Carbon footprint tracking",
                "Cost optimization",
                "Sustainability reporting"
              ]}
              pricing="$12,000-60,000"
              marketSize="$3.1B energy AI market"
              icon="⚡"
            />
            <AIServiceCard
              title="AI-Powered Quality Assurance"
              description="Automated quality testing and assurance systems for software, manufacturing, and service delivery."
              features={[
                "Automated test generation",
                "Defect prediction models",
                "Quality metrics analysis",
                "Process optimization",
                "Root cause analysis",
                "Continuous improvement"
              ]}
              pricing="$6,000-35,000"
              marketSize="$2.7B QA automation market"
              icon="✅"
            />
            <AIServiceCard
              title="AI-Powered Customer Churn Prediction"
              description="Predictive analytics to identify customers at risk of churning and implement retention strategies."
              features={[
                "Churn prediction models",
                "Risk scoring algorithms",
                "Retention strategy recommendations",
                "Customer segmentation",
                "Lifetime value prediction",
                "Intervention automation"
              ]}
              pricing="$7,000-40,000"
              marketSize="$1.8B customer analytics market"
              icon="📉"
            />
            <AIServiceCard
              title="AI-Powered Cybersecurity"
              description="Advanced threat detection and response systems using AI to protect against cyber attacks and security breaches."
              features={[
                "Threat detection & analysis",
                "Behavioral anomaly detection",
                "Automated incident response",
                "Vulnerability assessment",
                "Security orchestration",
                "Compliance monitoring"
              ]}
              pricing="$15,000-75,000"
              marketSize="$6.8B AI cybersecurity market"
              icon="🔐"
            />
            <AIServiceCard
              title="AI-Powered Personalization Engine"
              description="Dynamic personalization platform that adapts user experiences based on behavior, preferences, and context."
              features={[
                "Real-time personalization",
                "Behavioral analysis",
                "Context-aware recommendations",
                "A/B testing framework",
                "Performance optimization",
                "Multi-channel consistency"
              ]}
              pricing="$9,000-50,000"
              marketSize="$4.2B personalization market"
              icon="🎨"
            />
          </div>
        </div>
      </section>

      {/* AI Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI implementation from concept to production.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="Discovery & Strategy"
              description="Analyze your business needs, define AI objectives, and create a comprehensive implementation roadmap."
            />
            <ProcessStep
              step="2"
              title="Data Preparation"
              description="Clean, validate, and prepare your data for AI model training with proper data governance practices."
            />
            <ProcessStep
              step="3"
              title="Model Development"
              description="Build, train, and optimize AI models using cutting-edge algorithms and best practices."
            />
            <ProcessStep
              step="4"
              title="Deployment & Monitoring"
              description="Deploy models to production with continuous monitoring, performance tracking, and iterative improvements."
            />
          </div>
        </div>
      </section>

      {/* AI Service Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Service Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect AI package for your business needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AIPricingCard
              name="AI Discovery"
              price="$5,000 - $15,000"
              duration="2-4 weeks"
              features={[
                "AI readiness assessment",
                "Use case identification",
                "Technical feasibility study",
                "ROI projections",
                "Implementation roadmap",
                "Proof of concept development"
              ]}
              bestFor="Businesses exploring AI"
            />
            <AIPricingCard
              name="AI Pilot"
              price="$15,000 - $50,000"
              duration="6-12 weeks"
              features={[
                "Custom AI solution development",
                "Data preparation & cleaning",
                "Model training & optimization",
                "Integration with existing systems",
                "User training & documentation",
                "3 months support & monitoring"
              ]}
              bestFor="Pilot AI implementations"
              popular={true}
            />
            <AIPricingCard
              name="Production AI"
              price="$50,000+"
              duration="12+ weeks"
              features={[
                "Enterprise-grade AI platform",
                "Advanced model architectures",
                "Real-time processing capabilities",
                "Comprehensive monitoring & alerting",
                "24/7 support & maintenance",
                "Continuous improvement & updates"
              ]}
              bestFor="Enterprise AI solutions"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can solve your specific business challenges and drive real results. 
            Our team has delivered 100+ successful AI implementations across various industries.
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
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-lg font-semibold text-purple-600 mb-1">{pricing}</div>
        <div className="text-sm text-gray-500">{marketSize}</div>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-purple-500 mr-2">✓</span>
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
    <div className="text-center">
      <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
    <div className={`relative bg-white border rounded-xl p-8 ${popular ? 'border-purple-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-purple-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-purple-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-500 mb-4">Best for: {bestFor}</div>
      <a
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
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

          </li>
        ))}
      </ul>
    </div>
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
    </div>
  );
}

function Pricing() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Service Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="AI Discovery" 
          price="$5k–$12k" 
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
        />
      </div>
    </section>
  );

