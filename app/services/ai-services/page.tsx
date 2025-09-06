export const metadata = { title: 'AI Services | Zion Tech Group' };

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

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">AI Technologies We Work With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Large Language Models</h3>
            <p className="text-gray-600">GPT-4, Claude, LLaMA, and custom fine-tuned models</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Vector Search</h3>
            <p className="text-gray-600">Pinecone, Weaviate, Chroma, and custom vector stores</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Computer Vision</h3>
            <p className="text-gray-600">Image classification, object detection, and OCR</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">ML Frameworks</h3>
            <p className="text-gray-600">TensorFlow, PyTorch, Scikit-learn, and Hugging Face</p>
          </div>
        </div>
      </div>

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
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard 
          name="AI Discovery" 
          price="$5k–$12k" 
          duration="2–3 weeks"
          features={[
            "AI use-case analysis & design",
            "Technology stack selection",
            "Data assessment & preparation",
            "Implementation roadmap",
            "Proof of concept development",
            "ROI projections & business case"
          ]}
          popular={false}
        />
        <PricingCard 
          name="AI Pilot" 
          price="$15k–$45k" 
          duration="4–8 weeks"
          features={[
            "Everything in AI Discovery",
            "RAG/agent MVP development",
            "Model evaluation & safety testing",
            "Performance dashboards",
            "Integration with existing systems",
            "User testing & feedback collection",
            "Deployment & monitoring setup"
          ]}
          popular={true}
        />
        <PricingCard 
          name="AI Production" 
          price="$50k+" 
          duration="8+ weeks"
          features={[
            "Everything in AI Pilot",
            "Production-grade infrastructure",
            "Advanced monitoring & alerting",
            "SLA guarantees & support",
            "Cost optimization & scaling",
            "Security hardening & compliance",
            "Dedicated AI engineering team"
          ]}
          popular={false}
        />
      </div>
    </div>
  );
}

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
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-purple-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
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
      </div>
    </div>
  );
}
