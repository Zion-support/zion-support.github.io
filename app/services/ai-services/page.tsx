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
    </div>
  );
}

function AISolution({ title, description, features, price, timeline, useCase, techStack }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  useCase: string;
  techStack: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
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
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">Tech Stack:</p>
        <div className="flex flex-wrap gap-1">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
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
  );
}

function AITechnology({ category, technologies }: { category: string; technologies: string[] }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function AIProcessStep({ step, title, description, duration }: {
  step: string;
  title: string;
  description: string;
  duration: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {step}
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2 text-sm">{description}</p>
      <div className="text-purple-600 font-semibold text-sm">{duration}</div>
    </div>
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
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-purple-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 rounded-lg font-semibold text-center block transition-colors ${
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

function AIMetricCard({ metric, description, icon }: { metric: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-purple-600 mb-2">{metric}</div>
      <div className="text-gray-600">{description}</div>
    </div>
  );
}