export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI solutions including RAG, agents, fine-tuning, MLOps, and custom AI model development for enterprise applications.'
};

export default function AIPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ship AI features with confidence: RAG, agents, fine-tuning, evals, and MLOps. 
            We help you build, deploy, and scale intelligent applications that drive real business value.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Applied AI Solutions"
              description="Custom AI applications tailored to your business needs"
              features={["RAG over private data", "Task-specific agents", "Vision + speech processing", "Personalization engines", "Chatbot development", "Content generation"]}
              price="Starting at $15k"
              icon="🤖"
            />
            <ServiceCard
              title="Model Operations"
              description="Production-ready AI model management and optimization"
              features={["Offline evaluations", "Safety + guardrails", "Batch + streaming inference", "Cost controls", "A/B testing", "Performance monitoring"]}
              price="Starting at $20k"
              icon="⚙️"
            />
            <ServiceCard
              title="Data & MLOps"
              description="End-to-end machine learning operations and data pipelines"
              features={["Data pipelines", "Feature stores", "Vector databases", "Model monitoring", "Drift detection", "Automated retraining"]}
              price="Starting at $25k"
              icon="📊"
            />
            <ServiceCard
              title="Custom Model Development"
              description="Bespoke AI models trained on your specific data"
              features={["Fine-tuning LLMs", "Custom neural networks", "Transfer learning", "Model optimization", "Edge deployment", "API development"]}
              price="Starting at $30k"
              icon="🧠"
            />
            <ServiceCard
              title="AI Integration"
              description="Seamless integration of AI capabilities into existing systems"
              features={["API development", "Microservices architecture", "Real-time processing", "Cloud deployment", "Security implementation", "Scalability planning"]}
              price="Starting at $18k"
              icon="🔗"
            />
            <ServiceCard
              title="AI Strategy & Consulting"
              description="Strategic guidance for AI adoption and implementation"
              features={["AI readiness assessment", "Technology selection", "ROI analysis", "Change management", "Training programs", "Ongoing support"]}
              price="Starting at $10k"
              icon="💡"
            />
          </div>
        </div>

        <Pricing />
        <ContactSection />
      </section>
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
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <a
        href="mailto:kleber@ziontechgroup.com"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Get Started
      </a>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan
          name="AI Discovery"
          price="$5k–$12k"
          duration="2–3 weeks"
          features={["Use-case design", "Technology selection", "AI roadmap", "Proof of concept", "Risk assessment"]}
          popular={false}
        />
        <Plan
          name="AI Pilot"
          price="$15k–$45k"
          duration="4–8 weeks"
          features={["RAG/agent MVP", "Evaluations + safety", "Performance dashboards", "Integration testing", "Team training"]}
          popular={true}
        />
        <Plan
          name="Production AI"
          price="$50k+"
          duration="8–16 weeks"
          features={["Hardened infrastructure", "Advanced monitoring", "SLA guarantees", "Cost optimization", "24/7 support"]}
          popular={false}
        />
      </div>
    </div>
  );
}

function Plan({
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
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-2 ${
      popular ? 'border-blue-500' : 'border-gray-200'
    } relative`}>
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
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
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

function ContactSection() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business with AI?</h2>
      <p className="text-xl text-gray-600 mb-8">
        Let's discuss how our AI solutions can drive innovation and growth for your organization.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl">📞</span>
          <div>
            <div className="font-semibold text-gray-900">Phone</div>
            <div className="text-gray-600">+1 302 464 0950</div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl">✉️</span>
          <div>
            <div className="font-semibold text-gray-900">Email</div>
            <div className="text-gray-600">kleber@ziontechgroup.com</div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl">📍</span>
          <div>
            <div className="font-semibold text-gray-900">Address</div>
            <div className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</div>
          </div>
        </div>
      </div>
      <a
        href="mailto:kleber@ziontechgroup.com"
        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
      >
        Start Your AI Journey Today
      </a>
    </div>
  );
}