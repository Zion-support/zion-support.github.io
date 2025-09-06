
export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Advanced AI solutions including RAG systems, custom agents, MLOps, and production-ready AI applications.'
};

export default function AIPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ship AI features with confidence: RAG systems, intelligent agents, fine-tuning, 
          evaluations, and production MLOps. We build AI that works in the real world.
        </p>
      </div>

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
    </div>
  );
}

function ServiceCard({ title, description, price, features }: { 
  title: string; 
  description: string; 
  price: string; 
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>

    </div>
  );
}

function Pricing() {
  return (

    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">AI Development Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="AI Discovery" 
          price="$5k–$12k" 
          duration="2–3 weeks"
          features={[
            "Use-case analysis & design",
            "Technology selection",
            "Data assessment",
            "Implementation roadmap",
            "Proof of concept",
            "ROI projections"
          ]} 
        />
        <Plan 
          name="AI Pilot" 
          price="$15k–$45k" 
          duration="4–8 weeks"
          features={[
            "RAG/agent MVP development",
            "Evaluation framework",
            "Safety & guardrails",
            "Performance dashboards",
            "Integration testing",
            "User feedback collection"
          ]} 
        />
        <Plan 
          name="AI Production" 
          price="$50k+" 
          duration="8+ weeks"
          features={[
            "Hardened infrastructure",
            "Advanced monitoring",
            "SLA guarantees",
            "Cost optimization",
            "Scalability planning",
            "24/7 support"
          ]} 
        />
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          Ready to implement AI in your business? Let's discuss your AI requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>

    </div>
  );
}


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
    </div>
  );
}

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
