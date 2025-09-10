export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including LLM applications, RAG systems, custom AI agents, and MLOps solutions for enterprise-grade AI implementation.'
}; export default function AIPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Ship AI features with confidence: RAG systems, intelligent agents, custom model training, 
          and production-ready MLOps. We help you harness AI to solve real business problems.
        </p>
      </section>

      {/* Featured AI Solutions */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our AI Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AISolutionCard
            title="Intelligent Document Processing"
            description="Advanced AI-powered document analysis, extraction, and intelligent routing for enterprise workflows"
            features={["Advanced OCR & NLP", "Smart data extraction", "Automated routing", "Compliance checking", "Multi-format support", "Real-time processing"]}
            pricing="$3,500/month"
            category="Document AI"
            icon="📄"
          />
          <AISolutionCard
            title="Conversational AI Assistant"
            description="Next-generation chatbots and virtual assistants with advanced natural language understanding and context awareness"
            features={["Multi-language support", "Context retention", "Integration APIs", "Analytics dashboard", "Custom training", "Emotion recognition"]}
            pricing="$2,800/month"
            category="Conversational AI"
            icon="💬"
          />
          <AISolutionCard
            title="Predictive Analytics Engine"
            description="Advanced machine learning models for forecasting, risk assessment, and business intelligence"
            features={["Time series forecasting", "Anomaly detection", "Risk modeling", "Real-time predictions", "Custom algorithms", "AutoML capabilities"]}
            pricing="$4,200/month"
            category="Predictive AI"
            icon="📊"
          />
          <AISolutionCard
            title="Computer Vision Platform"
            description="Advanced image and video analysis for quality control, security, and automated inspection"
            features={["Object detection", "Quality inspection", "Facial recognition", "Video analytics", "Real-time processing", "Edge deployment"]}
            pricing="$3,800/month"
            category="Computer Vision"
            icon="👁️"
          />
          <AISolutionCard
            title="AI-Powered Search & RAG"
            description="Intelligent search with retrieval-augmented generation for knowledge management and enterprise search"
            features={["Semantic search", "Vector databases", "Knowledge graphs", "Context-aware responses", "Multi-source integration", "Real-time indexing"]}
            pricing="$2,200/month"
            category="Search AI"
            icon="🔍"
          />
          <AISolutionCard
            title="Automated Content Generation"
            description="AI content creation for marketing, documentation, and personalized communications with brand consistency"
            features={["Multi-format content", "Brand voice training", "SEO optimization", "A/B testing", "Content scheduling", "Plagiarism detection"]}
            pricing="$1,900/month"
            category="Content AI"
            icon="✍️"
          />
          <AISolutionCard
            title="AI Fraud Detection System"
            description="Advanced fraud detection and prevention using machine learning for financial transactions and identity verification"
            features={["Real-time fraud detection", "Behavioral analysis", "Risk scoring", "Identity verification", "Transaction monitoring", "Adaptive learning"]}
            pricing="$4,500/month"
            category="Security AI"
            icon="🛡️"
          />
          <AISolutionCard
            title="Intelligent Process Automation"
            description="AI-powered business process automation with cognitive capabilities and decision-making intelligence"
            features={["Process mining", "Cognitive automation", "Decision intelligence", "Exception handling", "Process optimization", "ROI tracking"]}
            pricing="$3,200/month"
            category="Process AI"
            icon="⚙️"
          />
          <AISolutionCard
            title="AI Customer Insights Platform"
            description="Advanced customer analytics and insights platform with behavioral prediction and personalization"
            features={["Customer segmentation", "Behavioral prediction", "Personalization engine", "Churn prediction", "Lifetime value analysis", "Real-time insights"]}
            pricing="$2,600/month"
            category="Customer AI"
            icon="👤"
          />
          <AISolutionCard
            title="AI Supply Chain Optimizer"
            description="Intelligent supply chain optimization with demand forecasting, inventory management, and logistics optimization"
            features={["Demand forecasting", "Inventory optimization", "Route optimization", "Supplier risk analysis", "Cost optimization", "Sustainability tracking"]}
            pricing="$3,900/month"
            category="Supply Chain AI"
            icon="🚚"
          />
          <AISolutionCard
            title="AI Code Assistant & Generator"
            description="Advanced AI-powered code generation, review, and optimization for software development teams"
            features={["Code generation", "Code review", "Bug detection", "Performance optimization", "Documentation generation", "Test case generation"]}
            pricing="$2,400/month"
            category="Developer AI"
            icon="💻"
          />
          <AISolutionCard
            title="AI Medical Diagnosis Assistant"
            description="AI-powered medical diagnosis support with image analysis, symptom checking, and treatment recommendations"
            features={["Medical image analysis", "Symptom analysis", "Treatment recommendations", "Drug interaction checking", "Clinical decision support", "HIPAA compliance"]}
            pricing="$5,500/month"
            category="Healthcare AI"
            icon="🏥"
          />
          <AISolutionCard
            title="AI Legal Document Analyzer"
            description="Intelligent legal document analysis with contract review, compliance checking, and risk assessment"
            features={["Contract analysis", "Compliance checking", "Risk assessment", "Legal research", "Document summarization", "Clause extraction"]}
            pricing="$3,600/month"
            category="Legal AI"
            icon="⚖️"
          />
          <AISolutionCard
            title="AI Marketing Attribution Engine"
            description="Advanced marketing attribution and optimization using AI for multi-channel campaign analysis and ROI optimization"
            features={["Multi-touch attribution", "Campaign optimization", "ROI analysis", "Customer journey mapping", "Budget allocation", "Performance prediction"]}
            pricing="$2,800/month"
            category="Marketing AI"
            icon="📈"
          />
          <AISolutionCard
            title="AI Voice & Speech Analytics"
            description="Advanced voice and speech analysis for customer service, sentiment analysis, and voice biometrics"
            features={["Voice biometrics", "Sentiment analysis", "Call transcription", "Quality monitoring", "Emotion detection", "Real-time analysis"]}
            pricing="$2,200/month"
            category="Voice AI"
            icon="🎤"
          />
          <AISolutionCard
            title="AI Recommendation Engine"
            description="Advanced recommendation system with collaborative filtering, content-based filtering, and hybrid approaches"
            features={["Collaborative filtering", "Content-based filtering", "Hybrid recommendations", "Real-time updates", "A/B testing", "Cold start handling"]}
            pricing="$2,000/month"
            category="Recommendation AI"
            icon="🎯"
          />
          <AISolutionCard
            title="AI Data Quality & Cleansing"
            description="Intelligent data quality management with automated cleansing, validation, and enrichment capabilities"
            features={["Data cleansing", "Quality validation", "Data enrichment", "Duplicate detection", "Format standardization", "Quality scoring"]}
            pricing="$1,800/month"
            category="Data AI"
            icon="🧹"
          />
          <AISolutionCard
            title="AI Translation & Localization"
            description="Advanced AI translation and localization services with context awareness and cultural adaptation"
            features={["Multi-language translation", "Context awareness", "Cultural adaptation", "Real-time translation", "Quality assessment", "Custom glossaries"]}
            pricing="$2,100/month"
            category="Translation AI"
            icon="🌐"
          />
        </div>
      </section>

      {/* Core AI Services */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Core AI Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AIServiceItem 
            title="Applied AI Development" 
            details={[
              "RAG over private data",
              "Task-specific AI agents",
              "Computer vision applications",
              "Natural language processing",
              "Personalization engines",
              "Real-time AI inference"
            ]} 
          />
          <AIServiceItem 
            title="Model Operations (MLOps)" 
            details={[
              "Model training & fine-tuning",
              "Offline & online evaluations",
              "Safety & bias testing",
              "Batch & streaming pipelines",
              "Cost optimization",
              "Performance monitoring"
            ]} 
          />
          <AIServiceItem 
            title="Data & Infrastructure" 
            details={[
              "Data pipeline development",
              "Feature store implementation",
              "Vector database setup",
              "Model drift monitoring",
              "A/B testing frameworks",
              "Scalable AI infrastructure"
            ]} 
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          AI Development Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AIPricingPlan 
            name="AI Discovery & Strategy" 
            price="$5,000 - $12,000" 
            duration="2-3 weeks"
            features={[
              "AI use-case analysis",
              "Technology selection",
              "Data assessment",
              "Implementation roadmap",
              "ROI projections",
              "Proof of concept"
            ]}
            popular={false}
          />
          <AIPricingPlan 
            name="AI Pilot Development" 
            price="$15,000 - $45,000" 
            duration="4-8 weeks"
            features={[
              "RAG/Agent MVP development",
              "Model fine-tuning",
              "Evaluation & safety testing",
              "Analytics dashboard",
              "Integration setup",
              "Performance optimization"
            ]}
            popular={true}
          />
          <AIPricingPlan 
            name="Production AI System" 
            price="$50,000+" 
            duration="12+ weeks"
            features={[
              "Hardened AI infrastructure",
              "Advanced monitoring",
              "SLA guarantees",
              "Cost optimization",
              "Security hardening",
              "24/7 support"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
}

function AISolutionCard({ title, description, features, pricing, category, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-4">
        <div className="text-2xl font-bold text-gray-900 mb-2">{pricing}</div>
        <a 
          href="tel:+13024640950"
          className="w-full bg-purple-600 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors block"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

function AIServiceItem({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AIPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-6 ${popular ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-purple-600 text-white text-center py-1 px-3 rounded-full text-sm font-medium mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors block ${
          popular 
            ? 'bg-purple-600 text-white hover:bg-purple-700' 
            : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
        }`}
      >
        Contact Us
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Implement AI in Your Business?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your AI needs and create a custom solution that drives real business value. 
        Our team has deployed 100+ AI solutions across various industries.
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
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}