import Link from "next/link";

export const metadata = {
  title: "AI Services | Zion Tech Group - Advanced AI Solutions & Machine Learning",
  description: "Comprehensive AI services including custom LLM development, RAG systems, computer vision, NLP, predictive analytics, and enterprise AI integration. Expert AI solutions with 99.9% accuracy and 24/7 support.",
};

export default function AIServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your business with cutting-edge artificial intelligence. From custom LLM development to enterprise AI platforms, 
            we deliver intelligent solutions that drive real results.
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
              Discuss Your AI Project
            </a>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Service Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs, from development to deployment and maintenance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom LLM Development */}
            <AIServiceCard
              title="Custom LLM Development"
              description="Build and deploy custom large language models tailored to your specific use case and data"
              features={[
                "Fine-tuned models for your domain",
                "Custom training on your data",
                "API integration and deployment",
                "Performance optimization"
              ]}
              pricing="From $15,000/project"
              icon="🧠"
              href="/services/ai-services/custom-llm"
            />

            {/* RAG Systems */}
            <AIServiceCard
              title="RAG Systems & Knowledge Bases"
              description="Retrieval-Augmented Generation systems that combine your data with AI for accurate, contextual responses"
              features={[
                "Document processing & indexing",
                "Vector database setup",
                "Context-aware responses",
                "Real-time knowledge updates"
              ]}
              pricing="From $8,000/project"
              icon="🔍"
              href="/services/ai-services/rag-systems"
            />

            {/* Computer Vision */}
            <AIServiceCard
              title="Computer Vision Solutions"
              description="Image and video analysis, object detection, and visual recognition systems"
              features={[
                "Object detection & classification",
                "Facial recognition systems",
                "Medical image analysis",
                "Real-time video processing"
              ]}
              pricing="From $12,000/project"
              icon="👁️"
              href="/services/ai-services/computer-vision"
            />

            {/* Natural Language Processing */}
            <AIServiceCard
              title="Natural Language Processing"
              description="Text analysis, sentiment analysis, and language understanding solutions"
              features={[
                "Sentiment analysis",
                "Text classification",
                "Named entity recognition",
                "Language translation"
              ]}
              pricing="From $6,000/project"
              icon="💬"
              href="/services/ai-services/nlp"
            />

            {/* Predictive Analytics */}
            <AIServiceCard
              title="Predictive Analytics & ML Models"
              description="Machine learning models for forecasting, risk assessment, and business intelligence"
              features={[
                "Demand forecasting",
                "Risk prediction models",
                "Customer behavior analysis",
                "Fraud detection systems"
              ]}
              pricing="From $10,000/project"
              icon="📊"
              href="/services/ai-services/predictive-analytics"
            />

            {/* AI Chatbots */}
            <AIServiceCard
              title="AI Chatbots & Virtual Assistants"
              description="Intelligent conversational AI for customer support, sales, and internal operations"
              features={[
                "Multi-channel integration",
                "Context-aware conversations",
                "Human handoff capabilities",
                "Analytics & insights"
              ]}
              pricing="From $3,000/month"
              icon="🤖"
              href="/services/ai-services/chatbots"
            />

            {/* AI Automation */}
            <AIServiceCard
              title="AI Process Automation"
              description="Intelligent automation for repetitive tasks and complex workflows"
              features={[
                "Document processing automation",
                "Email classification & routing",
                "Data entry automation",
                "Workflow optimization"
              ]}
              pricing="From $5,000/month"
              icon="⚡"
              href="/services/ai-services/automation"
            />

            {/* AI Content Generation */}
            <AIServiceCard
              title="AI Content Generation"
              description="Automated content creation for marketing, documentation, and creative writing"
              features={[
                "Blog & article writing",
                "Social media content",
                "Product descriptions",
                "Technical documentation"
              ]}
              pricing="From $2,000/month"
              icon="✍️"
              href="/services/ai-services/content-generation"
            />

            {/* AI Analytics */}
            <AIServiceCard
              title="AI-Powered Analytics"
              description="Intelligent data analysis and business intelligence with AI insights"
              features={[
                "Automated report generation",
                "Anomaly detection",
                "Trend analysis",
                "Custom dashboards"
              ]}
              pricing="From $4,000/month"
              icon="📈"
              href="/services/ai-services/analytics"
            />
          </div>
        </div>
      </section>

      {/* Industry-Specific AI Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific AI Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized AI solutions designed for specific industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard
              title="Healthcare AI"
              description="Medical diagnosis, drug discovery, and patient care optimization"
              icon="🏥"
              pricing="From $25,000/project"
            />
            <IndustryCard
              title="Financial AI"
              description="Fraud detection, algorithmic trading, and risk assessment"
              icon="💳"
              pricing="From $20,000/project"
            />
            <IndustryCard
              title="E-commerce AI"
              description="Recommendation engines, price optimization, and inventory management"
              icon="🛒"
              pricing="From $15,000/project"
            />
            <IndustryCard
              title="Manufacturing AI"
              description="Predictive maintenance, quality control, and supply chain optimization"
              icon="🏭"
              pricing="From $18,000/project"
            />
          </div>
        </div>
      </section>

      {/* AI Development Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering successful AI solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="Discovery & Analysis"
              description="Understanding your business needs, data landscape, and AI opportunities"
              icon="🔍"
            />
            <ProcessStep
              step="2"
              title="Data Preparation"
              description="Cleaning, processing, and preparing your data for AI model training"
              icon="📊"
            />
            <ProcessStep
              step="3"
              title="Model Development"
              description="Building, training, and optimizing AI models for your specific use case"
              icon="⚙️"
            />
            <ProcessStep
              step="4"
              title="Deployment & Monitoring"
              description="Deploying models to production and continuous monitoring for optimal performance"
              icon="🚀"
            />
          </div>
        </div>
      </section>

      {/* AI Capabilities & Technologies */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Technologies & Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with the latest AI technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TechCard name="OpenAI GPT" />
            <TechCard name="Anthropic Claude" />
            <TechCard name="Google Gemini" />
            <TechCard name="TensorFlow" />
            <TechCard name="PyTorch" />
            <TechCard name="Hugging Face" />
            <TechCard name="LangChain" />
            <TechCard name="Pinecone" />
            <TechCard name="Weaviate" />
            <TechCard name="OpenAI API" />
            <TechCard name="Azure AI" />
            <TechCard name="AWS Bedrock" />
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Service Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to fit your budget and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter AI"
              price="$5,000"
              period="per project"
              description="Perfect for small businesses getting started with AI"
              features={[
                "Basic AI model development",
                "Simple chatbot implementation",
                "Data analysis & insights",
                "2 weeks delivery",
                "30 days support"
              ]}
              popular={false}
            />
            <PricingCard
              title="Professional AI"
              price="$15,000"
              period="per project"
              description="Comprehensive AI solutions for growing businesses"
              features={[
                "Custom AI model development",
                "Advanced RAG systems",
                "Multi-channel integration",
                "4-6 weeks delivery",
                "90 days support",
                "Performance optimization"
              ]}
              popular={true}
            />
            <PricingCard
              title="Enterprise AI"
              price="$50,000+"
              period="per project"
              description="Full-scale AI transformation for large organizations"
              features={[
                "Complex AI platform development",
                "Custom LLM training",
                "Enterprise integration",
                "8-12 weeks delivery",
                "6 months support",
                "Dedicated AI team",
                "Ongoing optimization"
              ]}
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free AI consultation and discover how artificial intelligence can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-blue-100">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
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
  icon,
  href
}: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-sm">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">
        {pricing}
      </div>
    </Link>
  );
}

function IndustryCard({
  title,
  description,
  icon,
  pricing
}: {
  title: string;
  description: string;
  icon: string;
  pricing: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="text-blue-600 font-semibold">{pricing}</div>
    </div>
  );
}

function ProcessStep({
  step,
  title,
  description,
  icon
}: {
  step: string;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function TechCard({ name }: { name: string }) {
  return (
    <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="text-sm font-medium text-gray-900">{name}</div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  popular
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`relative border rounded-xl p-8 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-1">{price}</div>
        <div className="text-gray-600">{period}</div>
        <p className="text-gray-600 mt-4">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}