export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI solutions including machine learning, natural language processing, computer vision, and intelligent automation services.'
};

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Services & Solutions</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
            We help businesses leverage artificial intelligence to drive innovation and efficiency.
          </p>
        </div>

        {/* Core AI Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Machine Learning Development"
              description="Custom ML models for predictive analytics, classification, and regression tasks"
              features={["Predictive modeling", "Data preprocessing", "Model training", "Performance optimization"]}
              price="$25k - $50k"
              icon="🧠"
            />
            <ServiceCard
              title="Natural Language Processing"
              description="Text analysis, sentiment analysis, chatbots, and language understanding systems"
              features={["Text classification", "Sentiment analysis", "Chatbot development", "Language translation"]}
              price="$20k - $45k"
              icon="💬"
            />
            <ServiceCard
              title="Computer Vision Solutions"
              description="Image recognition, object detection, and visual analysis systems"
              features={["Image classification", "Object detection", "Facial recognition", "OCR systems"]}
              price="$30k - $60k"
              icon="👁️"
            />
            <ServiceCard
              title="RAG (Retrieval-Augmented Generation)"
              description="Intelligent document search and question-answering systems"
              features={["Document indexing", "Semantic search", "Context-aware responses", "Knowledge base integration"]}
              price="$35k - $70k"
              icon="🔍"
            />
            <ServiceCard
              title="AI Agents & Automation"
              description="Intelligent agents for task automation and decision-making"
              features={["Task automation", "Decision trees", "Workflow optimization", "API integrations"]}
              price="$40k - $80k"
              icon="🤖"
            />
            <ServiceCard
              title="Recommendation Systems"
              description="Personalized recommendation engines for e-commerce and content platforms"
              features={["Collaborative filtering", "Content-based filtering", "Hybrid approaches", "Real-time recommendations"]}
              price="$25k - $55k"
              icon="⭐"
            />
          </div>
        </div>

        {/* Industry-Specific AI Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry-Specific AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Healthcare AI"
              description="Medical image analysis, drug discovery, and patient care optimization"
              features={["Medical imaging", "Diagnostic assistance", "Drug discovery", "Patient monitoring"]}
              price="$50k - $100k"
              icon="🏥"
            />
            <ServiceCard
              title="Financial AI"
              description="Fraud detection, algorithmic trading, and risk assessment systems"
              features={["Fraud detection", "Algorithmic trading", "Risk assessment", "Credit scoring"]}
              price="$45k - $90k"
              icon="💰"
            />
            <ServiceCard
              title="E-commerce AI"
              description="Product recommendation, price optimization, and customer behavior analysis"
              features={["Product recommendations", "Price optimization", "Customer segmentation", "Inventory management"]}
              price="$30k - $65k"
              icon="🛒"
            />
            <ServiceCard
              title="Manufacturing AI"
              description="Predictive maintenance, quality control, and supply chain optimization"
              features={["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"]}
              price="$40k - $85k"
              icon="🏭"
            />
            <ServiceCard
              title="Marketing AI"
              description="Customer targeting, content generation, and campaign optimization"
              features={["Customer targeting", "Content generation", "Campaign optimization", "Lead scoring"]}
              price="$25k - $55k"
              icon="📈"
            />
            <ServiceCard
              title="Legal AI"
              description="Document analysis, contract review, and legal research automation"
              features={["Document analysis", "Contract review", "Legal research", "Compliance monitoring"]}
              price="$35k - $75k"
              icon="⚖️"
            />
          </div>
        </div>

        {/* AI Infrastructure & MLOps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Infrastructure & MLOps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="MLOps Pipeline Setup"
              description="Complete machine learning operations pipeline for model deployment and monitoring"
              features={["Model versioning", "Automated deployment", "Performance monitoring", "A/B testing"]}
              price="$30k - $60k"
              icon="⚙️"
            />
            <ServiceCard
              title="Model Fine-tuning"
              description="Custom fine-tuning of pre-trained models for specific use cases"
              features={["Model selection", "Data preparation", "Fine-tuning process", "Performance evaluation"]}
              price="$15k - $35k"
              icon="🎯"
            />
            <ServiceCard
              title="AI Model Evaluation"
              description="Comprehensive evaluation and testing of AI models for accuracy and bias"
              features={["Accuracy testing", "Bias detection", "Performance metrics", "Validation reports"]}
              price="$10k - $25k"
              icon="📊"
            />
            <ServiceCard
              title="Vector Database Setup"
              description="Implementation of vector databases for similarity search and embeddings"
              features={["Database selection", "Embedding generation", "Index optimization", "Query optimization"]}
              price="$20k - $40k"
              icon="🗄️"
            />
            <ServiceCard
              title="AI Security & Compliance"
              description="Security hardening and compliance for AI systems"
              features={["Data encryption", "Access controls", "Audit logging", "Compliance reporting"]}
              price="$25k - $50k"
              icon="🔒"
            />
            <ServiceCard
              title="AI Cost Optimization"
              description="Optimization of AI infrastructure costs and resource utilization"
              features={["Resource monitoring", "Cost analysis", "Optimization strategies", "Budget planning"]}
              price="$15k - $30k"
              icon="💡"
            />
          </div>
        </div>

        {/* AI Consulting & Strategy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Consulting & Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="AI Strategy Consulting"
              description="Strategic planning and roadmap development for AI implementation"
              features={["Use case identification", "Technology assessment", "ROI analysis", "Implementation roadmap"]}
              price="$15k - $35k"
              icon="📋"
            />
            <ServiceCard
              title="AI Readiness Assessment"
              description="Evaluation of organizational readiness for AI adoption"
              features={["Data quality assessment", "Infrastructure review", "Skill gap analysis", "Recommendations"]}
              price="$10k - $25k"
              icon="🔍"
            />
            <ServiceCard
              title="AI Training & Education"
              description="Custom training programs for teams on AI technologies and best practices"
              features={["Custom curriculum", "Hands-on workshops", "Certification programs", "Ongoing support"]}
              price="$5k - $15k"
              icon="🎓"
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              name="AI Discovery"
              price="$5k - $12k"
              duration="2-3 weeks"
              features={[
                "Use-case analysis",
                "Technology selection",
                "Data assessment",
                "Proof of concept",
                "Implementation roadmap"
              ]}
              popular={false}
            />
            <PricingCard
              name="AI Pilot"
              price="$15k - $45k"
              duration="4-8 weeks"
              features={[
                "MVP development",
                "Model training",
                "Basic evaluation",
                "Simple deployment",
                "Performance monitoring",
                "3 months support"
              ]}
              popular={true}
            />
            <PricingCard
              name="AI Production"
              price="$50k+"
              duration="Custom timeline"
              features={[
                "Production-ready system",
                "Advanced MLOps",
                "Security & compliance",
                "24/7 monitoring",
                "SLA guarantees",
                "Dedicated support team",
                "6 months support"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </div>
  );
}

function ServiceCard({ 
  title, 
  description, 
  features, 
  price, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-lg font-bold text-blue-600 mb-4">{price}</div>
      <a 
        href="tel:+13024640950" 
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Quote
      </a>
    </div>
  );
}

function PricingCard({ 
  name, 
  price, 
  duration, 
  features, 
  popular 
}: { 
  name: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${popular ? 'border-blue-500' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
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

function ContactCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white">
      <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto">
        Let's discuss how AI can drive innovation and efficiency in your organization. 
        Our AI experts are ready to help you implement cutting-edge solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a
          href="tel:+13024640950"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          📞 Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
        >
          ✉️ Email Us
        </a>
        <div className="text-center">
          <div className="text-sm opacity-90">Visit us at:</div>
          <div className="font-semibold">364 E Main St STE 1008</div>
          <div className="font-semibold">Middletown, DE 19709</div>
        </div>
      </div>
    </div>
  );
}