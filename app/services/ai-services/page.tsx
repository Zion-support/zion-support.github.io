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

      <CTASection />
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