=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Advanced AI solutions including machine learning, natural language processing, computer vision, and intelligent automation. Transform your business with cutting-edge AI technology.'
};

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

export default function AIPage() {
  return (
    <div className="animate-fade-in">
<<<<<<< HEAD
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
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    </div>
  );
}

function AIServiceCategory({ title, icon, description, services }: {
  title: string;
  icon: string;
  description: string;
  services: string[];
}) {
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
function ContactSection() {
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
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
