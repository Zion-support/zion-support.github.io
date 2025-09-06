export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Advanced AI solutions including RAG systems, intelligent agents, computer vision, and MLOps. Transform your business with cutting-edge artificial intelligence.'
}; 

export default function AIPage() { 
  return ( 
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ship AI features with confidence: RAG systems, intelligent agents, computer vision, 
            and MLOps. Transform your business with cutting-edge artificial intelligence.
          </p>
        </div>

        {/* AI Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AIServiceCategory
            title="Applied AI Solutions"
            icon="🤖"
            description="Production-ready AI applications that solve real business problems"
            services={[
              "RAG over private data",
              "Intelligent chatbots & agents",
              "Computer vision & image analysis",
              "Natural language processing",
              "Predictive analytics",
              "Personalization engines"
            ]}
          />
          <AIServiceCategory
            title="Model Operations"
            icon="⚙️"
            description="Complete MLOps infrastructure for reliable AI deployment"
            services={[
              "Model evaluation & testing",
              "Safety & bias detection",
              "A/B testing frameworks",
              "Cost optimization",
              "Performance monitoring",
              "Automated retraining"
            ]}
          />
          <AIServiceCategory
            title="Data & Infrastructure"
            icon="📊"
            description="Robust data pipelines and AI infrastructure"
            services={[
              "Data preprocessing pipelines",
              "Feature stores & engineering",
              "Vector databases",
              "Model versioning",
              "Drift detection",
              "Scalable inference"
            ]}
          />
        </div>

        {/* Real AI Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Solutions We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AISolution
              title="Intelligent Document Processing"
              description="Extract insights from documents with 99%+ accuracy"
              features={[
                "OCR & text extraction",
                "Document classification",
                "Data validation",
                "Automated workflows",
                "Multi-language support"
              ]}
              price="$15k - $35k"
              timeline="6-10 weeks"
              useCase="Legal, healthcare, finance"
            />
            <AISolution
              title="Customer Service AI"
              description="24/7 intelligent customer support system"
              features={[
                "Natural language understanding",
                "Intent recognition",
                "Escalation management",
                "Sentiment analysis",
                "Multi-channel support"
              ]}
              price="$12k - $28k"
              timeline="4-8 weeks"
              useCase="E-commerce, SaaS, support"
            />
            <AISolution
              title="Predictive Analytics Platform"
              description="Forecast trends and optimize business decisions"
              features={[
                "Time series forecasting",
                "Anomaly detection",
                "Risk assessment",
                "Real-time predictions",
                "Interactive dashboards"
              ]}
              price="$20k - $45k"
              timeline="8-12 weeks"
              useCase="Finance, retail, manufacturing"
            />
            <AISolution
              title="Computer Vision System"
              description="Automated visual inspection and analysis"
              features={[
                "Object detection & recognition",
                "Quality control automation",
                "Real-time processing",
                "Custom model training",
                "Edge deployment"
              ]}
              price="$18k - $40k"
              timeline="6-10 weeks"
              useCase="Manufacturing, security, retail"
            />
            <AISolution
              title="Content Generation AI"
              description="Automated content creation and optimization"
              features={[
                "Blog & article generation",
                "SEO optimization",
                "Multi-language content",
                "Brand voice consistency",
                "Content performance tracking"
              ]}
              price="$10k - $25k"
              timeline="4-6 weeks"
              useCase="Marketing, content, e-commerce"
            />
            <AISolution
              title="Recommendation Engine"
              description="Personalized product and content recommendations"
              features={[
                "Collaborative filtering",
                "Content-based filtering",
                "Real-time updates",
                "A/B testing",
                "Performance analytics"
              ]}
              price="$16k - $32k"
              timeline="6-8 weeks"
              useCase="E-commerce, streaming, social"
            />
          </div>
        </div>

        {/* AI Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Technologies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AITechnology
              category="Large Language Models"
              technologies={["GPT-4", "Claude", "Llama", "Custom fine-tuned models", "Embeddings"]}
            />
            <AITechnology
              category="Computer Vision"
              technologies={["YOLO", "ResNet", "Vision Transformers", "OpenCV", "TensorFlow"]}
            />
            <AITechnology
              category="ML Frameworks"
              technologies={["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Hugging Face"]}
            />
            <AITechnology
              category="Infrastructure"
              technologies={["AWS SageMaker", "Google AI Platform", "Azure ML", "Kubernetes", "Docker"]}
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
                "Use-case analysis & design",
                "Technology selection",
                "Data assessment",
                "Proof of concept",
                "Implementation roadmap",
                "ROI projections"
              ]}
              popular={false}
            />
            <AIPricingPlan
              name="AI Pilot"
              price="$15k - $45k"
              duration="4-8 weeks"
              features={[
                "MVP development",
                "RAG/agent implementation",
                "Model evaluation & safety",
                "Performance dashboards",
                "Integration testing",
                "User feedback collection"
              ]}
              popular={true}
            />
            <AIPricingPlan
              name="AI Production"
              price="$50k+"
              duration="8+ weeks"
              features={[
                "Production-ready deployment",
                "Advanced monitoring",
                "SLA guarantees",
                "Cost optimization",
                "24/7 support",
                "Continuous improvement"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              metric="95%"
              description="Average accuracy improvement"
              icon="🎯"
            />
            <MetricCard
              metric="60%"
              description="Cost reduction achieved"
              icon="💰"
            />
            <MetricCard
              metric="3x"
              description="Faster processing times"
              icon="⚡"
            />
            <MetricCard
              metric="24/7"
              description="Automated operations"
              icon="🔄"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your business processes and drive measurable results.
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

function AISolution({ title, description, features, price, timeline, useCase }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  useCase: string;
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

function MetricCard({ metric, description, icon }: { metric: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-purple-600 mb-2">{metric}</div>
      <div className="text-gray-600">{description}</div>
    </div>
  );
}