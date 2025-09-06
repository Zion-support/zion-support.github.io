import Link from "next/link";

export const metadata = {
  title: "AI Services | Zion Tech Group - Advanced AI Solutions & Machine Learning",
  description: "Cutting-edge AI services including LLM development, computer vision, natural language processing, predictive analytics, and enterprise AI integration. Starting from $5,000/project.",
};

export default function AIServicesPage() {
  const aiServices = [
    {
      title: "Custom LLM Development",
      description: "Build and fine-tune large language models for your specific use cases and industry requirements",
      features: ["Model fine-tuning", "Custom training data", "API integration", "Performance optimization"],
      pricing: "$15,000/project",
      icon: "🧠",
      category: "Language Models"
    },
    {
      title: "AI Chatbot & Virtual Assistant",
      description: "Intelligent conversational AI with natural language understanding and multi-channel support",
      features: ["Natural language processing", "Multi-channel deployment", "Context awareness", "Analytics dashboard"],
      pricing: "$8,000/project",
      icon: "🤖",
      category: "Conversational AI"
    },
    {
      title: "Computer Vision Solutions",
      description: "Image and video analysis with object detection, facial recognition, and automated visual inspection",
      features: ["Object detection", "Facial recognition", "Image classification", "Real-time processing"],
      pricing: "$12,000/project",
      icon: "👁️",
      category: "Computer Vision"
    },
    {
      title: "Predictive Analytics Platform",
      description: "Machine learning models for forecasting, risk assessment, and data-driven decision making",
      features: ["Time series forecasting", "Risk modeling", "Anomaly detection", "Real-time predictions"],
      pricing: "$10,000/project",
      icon: "📈",
      category: "Analytics"
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and automated content processing for business intelligence",
      features: ["Sentiment analysis", "Text classification", "Entity extraction", "Language translation"],
      pricing: "$7,000/project",
      icon: "📝",
      category: "NLP"
    },
    {
      title: "AI-Powered Recommendation Engine",
      description: "Personalized recommendations for e-commerce, content, and user experience optimization",
      features: ["Collaborative filtering", "Content-based filtering", "Real-time recommendations", "A/B testing"],
      pricing: "$9,000/project",
      icon: "🎯",
      category: "Recommendations"
    },
    {
      title: "Document Intelligence",
      description: "Automated document processing with OCR, data extraction, and intelligent classification",
      features: ["OCR processing", "Data extraction", "Document classification", "Workflow automation"],
      pricing: "$6,000/project",
      icon: "📄",
      category: "Document AI"
    },
    {
      title: "Voice Recognition & Speech AI",
      description: "Speech-to-text, text-to-speech, and voice command processing for applications",
      features: ["Speech recognition", "Voice synthesis", "Voice commands", "Multi-language support"],
      pricing: "$8,500/project",
      icon: "🎤",
      category: "Speech AI"
    },
    {
      title: "AI-Powered Search Engine",
      description: "Intelligent search with semantic understanding, auto-complete, and personalized results",
      features: ["Semantic search", "Auto-complete", "Personalization", "Search analytics"],
      pricing: "$7,500/project",
      icon: "🔍",
      category: "Search AI"
    },
    {
      title: "Fraud Detection System",
      description: "Real-time fraud detection using machine learning for financial and e-commerce applications",
      features: ["Real-time detection", "Pattern recognition", "Risk scoring", "Alert system"],
      pricing: "$11,000/project",
      icon: "🛡️",
      category: "Security AI"
    },
    {
      title: "AI Content Generation",
      description: "Automated content creation for marketing, social media, and documentation",
      features: ["Content generation", "SEO optimization", "Brand consistency", "Multi-format output"],
      pricing: "$5,500/project",
      icon: "✍️",
      category: "Content AI"
    },
    {
      title: "AI-Powered CRM",
      description: "Intelligent customer relationship management with predictive insights and automation",
      features: ["Lead scoring", "Customer insights", "Automated workflows", "Predictive analytics"],
      pricing: "$13,000/project",
      icon: "👥",
      category: "Business AI"
    },
    {
      title: "Medical AI & Diagnostics",
      description: "Healthcare AI solutions for medical imaging, diagnosis assistance, and patient monitoring",
      features: ["Medical imaging analysis", "Diagnosis assistance", "Patient monitoring", "HIPAA compliance"],
      pricing: "$25,000/project",
      icon: "🏥",
      category: "Healthcare AI"
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent process automation with RPA and machine learning for business workflows",
      features: ["Process automation", "Intelligent routing", "Exception handling", "Performance monitoring"],
      pricing: "$9,500/project",
      icon: "⚡",
      category: "Automation AI"
    },
    {
      title: "AI Data Pipeline",
      description: "End-to-end data processing pipeline with AI/ML model deployment and monitoring",
      features: ["Data ingestion", "Model training", "Deployment pipeline", "Model monitoring"],
      pricing: "$14,000/project",
      icon: "🔄",
      category: "MLOps"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Transform your business with cutting-edge artificial intelligence. From custom LLM development 
          to computer vision solutions, we deliver AI that drives real business value and competitive advantage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get AI Consultation
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Request AI Demo
          </a>
        </div>
      </div>

      {/* AI Capabilities */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our AI Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning</h3>
            <p className="text-gray-600">Custom ML models for your specific business needs and data</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural Language</h3>
            <p className="text-gray-600">Advanced NLP for text analysis, chatbots, and content generation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Computer Vision</h3>
            <p className="text-gray-600">Image and video analysis with object detection and recognition</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
            <p className="text-gray-600">Data-driven insights and forecasting for better decisions</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Services & Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <AIServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* AI Development Process */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Analysis</h3>
            <p className="text-gray-600">Analyze your data and identify AI opportunities</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Model Design</h3>
            <p className="text-gray-600">Design and architect the AI solution</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Training & Testing</h3>
            <p className="text-gray-600">Train models and validate performance</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment</h3>
            <p className="text-gray-600">Deploy to production with monitoring</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
            <p className="text-gray-600">Continuous improvement and scaling</p>
          </div>
        </div>
      </div>

      {/* AI Technologies */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Technologies & Frameworks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <TechItem name="TensorFlow" description="Machine Learning" />
          <TechItem name="PyTorch" description="Deep Learning" />
          <TechItem name="OpenAI GPT" description="Large Language Models" />
          <TechItem name="Hugging Face" description="NLP Models" />
          <TechItem name="OpenCV" description="Computer Vision" />
          <TechItem name="Scikit-learn" description="ML Algorithms" />
          <TechItem name="Apache Spark" description="Big Data Processing" />
          <TechItem name="Kubernetes" description="AI Deployment" />
        </div>
      </div>

      {/* Industry Applications */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard
            title="Healthcare"
            description="Medical imaging, diagnosis assistance, drug discovery"
            icon="🏥"
          />
          <IndustryCard
            title="Finance"
            description="Fraud detection, algorithmic trading, risk assessment"
            icon="💳"
          />
          <IndustryCard
            title="E-commerce"
            description="Recommendation engines, price optimization, inventory"
            icon="🛒"
          />
          <IndustryCard
            title="Manufacturing"
            description="Quality control, predictive maintenance, automation"
            icon="🏭"
          />
          <IndustryCard
            title="Education"
            description="Personalized learning, automated grading, tutoring"
            icon="🎓"
          />
          <IndustryCard
            title="Marketing"
            description="Customer segmentation, content generation, analytics"
            icon="📈"
          />
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Service Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AIPricingCard
            title="AI Consultation"
            price="$5,000"
            period="project"
            description="AI strategy and feasibility analysis"
            features={[
              "AI readiness assessment",
              "Technology recommendations",
              "Implementation roadmap",
              "ROI projections"
            ]}
          />
          <AIPricingCard
            title="AI Development"
            price="$15,000"
            period="project"
            description="Custom AI solution development"
            features={[
              "Custom model development",
              "Data preprocessing",
              "Model training & testing",
              "API integration"
            ]}
            popular={true}
          />
          <AIPricingCard
            title="AI Enterprise"
            price="Custom"
            period=""
            description="Large-scale AI transformation"
            features={[
              "Multi-model AI platform",
              "Enterprise integration",
              "Dedicated AI team",
              "24/7 support & monitoring"
            ]}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform with AI?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Let's discuss your AI needs and create intelligent solutions that drive real business value.
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
        <div className="mt-6 text-sm">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </div>
  );
}

function AIServiceCard({ service }: { service: any }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{service.icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
          <span className="text-sm text-purple-600 font-medium">{service.category}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {service.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center">
            <span className="text-purple-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-purple-600">{service.pricing}</div>
    </div>
  );
}

function TechItem({ name, description }: { name: string; description: string }) {
  return (
    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function IndustryCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function AIPricingCard({ title, price, period, description, features, popular = false }: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`relative p-6 rounded-xl border-2 ${popular ? 'border-purple-500 bg-white' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        {period && <span className="text-gray-600">/{period}</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}