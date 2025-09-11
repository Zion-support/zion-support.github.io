export default function AIPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
          We help you build intelligent applications that drive real business value.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard 
          title="Applied AI Solutions" 
          features={[
            "RAG over private data & documents",
            "Task-specific AI agents & workflows",
            "Computer vision & image processing",
            "Natural language processing (NLP)",
            "Speech recognition & synthesis",
            "Personalization & recommendation engines"
          ]}
          icon="🤖"
        />
        <FeatureCard 
          title="Model Operations" 
          features={[
            "Offline evaluation & testing",
            "Safety guardrails & content filtering",
            "Batch & real-time inference",
            "Cost optimization & monitoring",
            "A/B testing for AI models",
            "Performance benchmarking"
          ]}
          icon="⚙️"
        />
        <FeatureCard 
          title="Data & MLOps" 
          features={[
            "Data pipelines & ETL processes",
            "Feature stores & data versioning",
            "Vector databases & embeddings",
            "Model monitoring & drift detection",
            "Automated retraining pipelines",
            "MLOps CI/CD workflows"
          ]}
          icon="📊"
        />
      </div>

export default function AIPage() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Applied AI" 
          details={[
            "RAG over private data",
            "Task-specific agents",
            "Computer vision + speech",
            "Personalization engines",
            "Chatbots & virtual assistants",
            "Document processing & OCR"
          ]} 
        />
        <Item 
          title="Model Operations" 
          details={[
            "Offline evaluations",
            "Safety + guardrails",
            "Batch + streaming inference",
            "Cost optimization",
            "A/B testing frameworks",
            "Model versioning & rollback"
          ]} 
        />
        <Item 
          title="Data & MLOps" 
          details={[
            "Data pipelines",
            "Feature stores",
            "Vector databases",
            "Monitoring + drift detection",
            "Model serving infrastructure",
            "Automated retraining"
          ]} 
        />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Intelligent Document Processing"
            description="Extract insights from documents using OCR, NLP, and computer vision"
            price="Starting at $15k"
            features={["OCR + text extraction", "Entity recognition", "Document classification", "Automated workflows"]
          />
          <ServiceCard
            title="Conversational AI"
            description="Build intelligent chatbots and virtual assistants for customer service"
            price="Starting at $12k"
            features={["Multi-channel support", "Context awareness", "Integration APIs", "Analytics dashboard"]
          />
          <ServiceCard
            title="Predictive Analytics"
            description="Machine learning models for forecasting and business intelligence"
            price="Starting at $20k"
            features={["Time series forecasting", "Anomaly detection", "Risk assessment", "Real-time predictions"]
          />
          <ServiceCard
            title="Computer Vision"
            description="Image and video analysis for quality control and automation"
            price="Starting at $18k"
            features={["Object detection", "Image classification", "Video analysis", "Real-time processing"]
          />
          <ServiceCard
            title="Natural Language Processing"
            description="Text analysis, sentiment analysis, and language understanding"
            price="Starting at $10k"
            features={["Sentiment analysis", "Text summarization", "Language translation", "Content moderation"]
          />
          <ServiceCard
            title="Recommendation Systems"
            description="Personalized recommendations for e-commerce and content platforms"
            price="Starting at $16k"
            features={["Collaborative filtering", "Content-based filtering", "Real-time updates", "A/B testing"]
          />
        </div>
      </div>

      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Advanced AI services including RAG systems, intelligent agents, machine learning pipelines, and MLOps. Transform your business with cutting-edge artificial intelligence solutions.'
}; 

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI services including RAG systems, intelligent agents, machine learning pipelines, 
            and MLOps. Transform your business with cutting-edge artificial intelligence solutions.
          </p>
        </div>

        {/* AI Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AIServiceCategory
            title="Applied AI"
            icon="🤖"
            description="Production-ready AI applications and intelligent systems"
            services={[
              "RAG over private data",
              "Task-specific agents",
              "Computer vision solutions",
              "Speech recognition & NLP",
              "Personalization engines",
              "Predictive analytics"
            ]}
          />
          <AIServiceCategory
            title="Model Operations"
            icon="⚙️"
            description="MLOps and model lifecycle management"
            services={[
              "Offline evaluation systems",
              "Safety & guardrails",
              "Batch & streaming inference",
              "Cost optimization",
              "Model versioning",
              "A/B testing frameworks"
            ]}
          />
          <AIServiceCategory
            title="Data & MLOps"
            icon="📊"
            description="Data pipelines and machine learning infrastructure"
            services={[
              "ETL/ELT pipelines",
              "Feature stores",
              "Vector databases",
              "Model monitoring",
              "Data drift detection",
              "Automated retraining"
            ]}
          />
        </div>

        {/* Featured AI Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AISolution
              title="Intelligent Document Processor"
              description="AI-powered document analysis and data extraction system"
              features={[
                "OCR with 99.5% accuracy",
                "Smart data extraction",
                "Document classification",
                "Automated workflows",
                "Multi-format support",
                "API integration"
              ]}
              price="$25k - $75k"
              timeline="8-16 weeks"
              useCase="Legal, healthcare, finance, insurance"
              techStack={["OpenAI GPT-4", "Tesseract OCR", "Python", "FastAPI"]}
            />
            <AISolution
              title="Customer Service AI Agent"
              description="Intelligent chatbot with natural language understanding"
              features={[
                "Natural language processing",
                "Context-aware responses",
                "Multi-language support",
                "Integration with CRM",
                "Sentiment analysis",
                "Escalation management"
              ]}
              price="$30k - $80k"
              timeline="10-20 weeks"
              useCase="E-commerce, SaaS, customer support"
              techStack={["LangChain", "OpenAI", "Vector DB", "React"]}
            />
            <AISolution
              title="Predictive Analytics Platform"
              description="Machine learning platform for business forecasting"
              features={[
                "Time series forecasting",
                "Customer churn prediction",
                "Demand forecasting",
                "Risk assessment",
                "Real-time predictions",
                "Interactive dashboards"
              ]}
              price="$40k - $100k"
              timeline="12-24 weeks"
              useCase="Retail, finance, manufacturing, logistics"
              techStack={["Scikit-learn", "XGBoost", "TensorFlow", "Streamlit"]}
            />
          </div>
        </div>

        {/* AI Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Technologies & Frameworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AITechnology
              category="Large Language Models"
              technologies={["GPT-4", "Claude", "Gemini", "Llama 2", "Custom Models"]}
            />
            <AITechnology
              category="Machine Learning"
              technologies={["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM"]}
            />
            <AITechnology
              category="NLP & Processing"
              technologies={["spaCy", "NLTK", "Transformers", "BERT", "RoBERTa"]}
            />
            <AITechnology
              category="Computer Vision"
              technologies={["OpenCV", "YOLO", "ResNet", "EfficientNet", "Vision Transformers"]}
            />
          </div>
        </div>

        {/* AI Implementation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Implementation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AIProcessStep
              step="1"
              title="Discovery & Assessment"
              description="AI readiness assessment and use case identification"
              duration="1-2 weeks"
            />
            <AIProcessStep
              step="2"
              title="Data Preparation"
              description="Data collection, cleaning, and preprocessing"
              duration="2-4 weeks"
            />
            <AIProcessStep
              step="3"
              title="Model Development"
              description="Model training, validation, and optimization"
              duration="4-12 weeks"
            />
            <AIProcessStep
              step="4"
              title="Deployment & Monitoring"
              description="Production deployment and continuous monitoring"
              duration="2-4 weeks"
            />
          </div>
        </div>

        {/* AI Use Cases by Industry */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Use Cases by Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryUseCase
              title="Healthcare AI"
              description="Medical diagnosis, drug discovery, and patient care"
              useCases={[
                "Medical image analysis",
                "Drug discovery",
                "Patient risk assessment",
                "Clinical decision support",
                "Electronic health records",
                "Telemedicine"
              ]}
              icon="🏥"
            />
            <IndustryUseCase
              title="Financial AI"
              description="Fraud detection, risk assessment, and trading"
              useCases={[
                "Fraud detection",
                "Credit scoring",
                "Algorithmic trading",
                "Risk management",
                "Regulatory compliance",
                "Customer service"
              ]}
              icon="🏦"
            />
            <IndustryUseCase
              title="E-commerce AI"
              description="Personalization, recommendation, and optimization"
              useCases={[
                "Product recommendations",
                "Price optimization",
                "Inventory management",
                "Customer segmentation",
                "Search optimization",
                "Chatbots"
              ]}
              icon="🛒"
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AIPricingPlan
              name="AI Discovery"
              price="$5k - $12k"
              duration="2-3 weeks"
              features={[
                "AI readiness assessment",
                "Use case identification",
                "Technology selection",
                "Proof of concept",
                "Implementation roadmap",
                "ROI analysis"
              ]}
              popular={false}
            />
            <AIPricingPlan
              name="AI Pilot"
              price="$15k - $45k"
              duration="4-8 weeks"
              features={[
                "RAG/agent MVP",
                "Data pipeline setup",
                "Model training",
                "Evaluation framework",
                "Basic monitoring",
                "User testing"
              ]}
              popular={true}
            />
            <AIPricingPlan
              name="AI Production"
              price="$50k+"
              duration="8+ weeks"
              features={[
                "Production-ready system",
                "Advanced monitoring",
                "Security & compliance",
                "Scalable infrastructure",
                "SLA guarantees",
                "Ongoing optimization"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Proven AI Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AIMetricCard
              metric="85%"
              description="Average accuracy improvement"
              icon="🎯"
            />
            <AIMetricCard
              metric="60%"
              description="Cost reduction achieved"
              icon="💰"
            />
            <AIMetricCard
              metric="3x"
              description="Faster processing times"
              icon="⚡"
            />
            <AIMetricCard
              metric="95%"
              description="Client satisfaction rate"
              icon="⭐"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Harness AI Power?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your business with cutting-edge AI solutions. Let's discuss how artificial intelligence can revolutionize your operations.
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
            icon="🔍"
          />
          <AIServiceCard
            title="AI Agents & Automation"
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
            icon="👁️"
          />
          <AIServiceCard
            title="Natural Language Processing"
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
          />
          <AIServiceCard
            title="AI Voice & Speech Processing"
            description="Advanced speech recognition, synthesis, and voice AI applications"
            features={["Speech-to-text", "Text-to-speech", "Voice cloning", "Emotion detection", "Multi-language support", "Real-time processing"]}
            price="$25k–$65k"
            icon="🎤"
          />
          <AIServiceCard
            title="AI-Powered Search & Discovery"
            description="Intelligent search engines with semantic understanding and personalization"
            features={["Semantic search", "Personalization", "Auto-tagging", "Content recommendation", "Search analytics", "Multi-modal search"]}
            price="$18k–$45k"
            icon="🔎"
          />
          <AIServiceCard
            title="AI Fraud Detection & Security"
            description="Advanced fraud detection and cybersecurity using machine learning"
            features={["Real-time fraud detection", "Anomaly detection", "Risk scoring", "Behavioral analysis", "Threat intelligence", "Compliance monitoring"]}
            price="$30k–$80k"
            icon="🛡️"
          />
          <AIServiceCard
            title="AI Content Generation & Moderation"
            description="Automated content creation and intelligent content moderation systems"
            features={["Content generation", "Auto-moderation", "Brand safety", "Content optimization", "Multi-format support", "Quality scoring"]}
            price="$15k–$40k"
            icon="✍️"
          />
          <AIServiceCard
            title="AI Supply Chain Optimization"
            description="Intelligent supply chain management with demand forecasting and logistics optimization"
            features={["Demand forecasting", "Route optimization", "Inventory management", "Supplier analytics", "Risk assessment", "Cost optimization"]}
            price="$35k–$90k"
            icon="🚚"
          />
          <AIServiceCard
            title="AI Healthcare & Medical Imaging"
            description="Medical AI solutions for diagnosis, treatment planning, and patient care"
            features={["Medical imaging analysis", "Diagnostic assistance", "Treatment recommendations", "Patient monitoring", "Drug discovery", "Clinical trials"]}
            price="$50k–$150k"
            icon="🏥"
          />
          <AIServiceCard
            title="AI Financial Trading & Analysis"
            description="Algorithmic trading and financial analysis using advanced AI models"
            features={["Algorithmic trading", "Market analysis", "Risk management", "Portfolio optimization", "Sentiment analysis", "Real-time alerts"]}
            price="$40k–$120k"
            icon="💹"
          />
          <AIServiceCard
            title="AI Customer Intelligence"
            description="Deep customer insights and behavior analysis using AI and machine learning"
            features={["Customer segmentation", "Behavior prediction", "Churn analysis", "Lifetime value", "Personalization", "Engagement optimization"]}
            price="$20k–$55k"
            icon="👥"
          />
        </div>
      </section>

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
          />
        </div>
      </section>

      <Pricing />
      
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

      <CTASection />    </div>
  );
}

      <PricingSection />
      
      <ContactSection />
    </div>
  );
}

function FeatureCard({ title, features, icon }: { title: string; features: string[]; icon: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{feature}</span>          </li>
        ))}
      </ul>
=======
function AIServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
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
      </a>    </div>
  );
}

function IndustryUseCase({ title, description, useCases, icon }: {
  title: string;
  description: string;
  useCases: string[];
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <ul className="space-y-1">
        {useCases.map((useCase, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-purple-500 mr-2">•</span>
            {useCase}
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
    <div className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? 'border-purple-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
=======
function PricingCard({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`relative bg-white border-2 rounded-xl p-8 ${popular ? 'border-purple-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-purple-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
<<<<<<< HEAD
function AIMetricCard({ metric, description, icon }: { metric: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-purple-600 mb-2">{metric}</div>
      <div className="text-gray-600">{description}</div>
    </div>
  );
}

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
function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-sm text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            {feature}
          </li>
        ))}
      </ul>
=======
function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement AI in Your Business?</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your AI needs and create intelligent solutions that transform your business operations.
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
      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>    </div>
  );
}
=======
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