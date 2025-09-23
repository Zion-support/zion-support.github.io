





export const metadata = { 
  title: 'AI Services | Zion Tech Group',

  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'



};


export default function AIPage() {
  return (

    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI solutions including machine learning, natural language processing, 
            computer vision, and intelligent automation. Transform your business with cutting-edge AI technology.
          </p>
        </div>

        {/* AI Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AIServiceCategory
            title="Machine Learning"
            icon="🧠"
            description="Custom ML models and predictive analytics"
            services={[
              "Predictive modeling",
              "Recommendation systems",
              "Anomaly detection",
              "Time series forecasting",
              "Classification algorithms",
              "Regression analysis"
            ]}
          />
          <AIServiceCategory
            title="Natural Language Processing"
            icon="💬"
            description="Text analysis and language understanding"
            services={[
              "Sentiment analysis",
              "Text classification",
              "Named entity recognition",
              "Language translation",
              "Chatbot development",
              "Document processing"
            ]}
          />
          <AIServiceCategory
            title="Computer Vision"
            icon="👁️"
            description="Image and video analysis solutions"
            services={[
              "Object detection",
              "Image classification",
              "Facial recognition",
              "OCR (Optical Character Recognition)",
              "Video analytics",
              "Medical imaging"
            ]}
          />
        </div>

        {/* Real AI Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Solutions We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AISolution
              title="Intelligent Document Processing"
              description="Automated document analysis and data extraction"
              features={[
                "OCR with 99%+ accuracy",
                "Smart data extraction",
                "Document classification",
                "Automated workflows",
                "Multi-language support",
                "API integration"
              ]}
              price="$25k - $60k"
              timeline="8-16 weeks"
              useCase="Legal, finance, healthcare, insurance"
              marketSize="$4.2B"
            />
            <AISolution
              title="Predictive Maintenance System"
              description="AI-powered equipment monitoring and failure prediction"
              features={[
                "IoT sensor integration",
                "Real-time monitoring",
                "Failure prediction algorithms",
                "Maintenance scheduling",
                "Cost optimization",
                "Dashboard analytics"
              ]}
              price="$35k - $80k"
              timeline="12-20 weeks"
              useCase="Manufacturing, utilities, transportation"
              marketSize="$6.8B"
            />
            <AISolution
              title="Customer Service AI Assistant"
              description="Intelligent chatbot with human-like interactions"
              features={[
                "Natural language understanding",
                "Multi-channel support",
                "Sentiment analysis",
                "Escalation to humans",
                "Knowledge base integration",
                "Performance analytics"
              ]}
              price="$20k - $50k"
              timeline="6-12 weeks"
              useCase="E-commerce, SaaS, customer support"
              marketSize="$5.3B"
            />
            <AISolution
              title="Fraud Detection System"
              description="Real-time fraud prevention and risk assessment"
              features={[
                "Real-time monitoring",
                "Pattern recognition",
                "Risk scoring",
                "Alert system",
                "Machine learning models",
                "Compliance reporting"
              ]}
              price="$30k - $70k"
              timeline="10-18 weeks"
              useCase="Banking, fintech, e-commerce"
              marketSize="$8.1B"
            />
            <AISolution
              title="Personalized Recommendation Engine"
              description="AI-driven product and content recommendations"
              features={[
                "Collaborative filtering",
                "Content-based filtering",
                "Real-time recommendations",
                "A/B testing framework",
                "Performance metrics",
                "Scalable architecture"
              ]}
              price="$18k - $45k"
              timeline="8-14 weeks"
              useCase="E-commerce, streaming, content platforms"
              marketSize="$3.7B"
            />
            <AISolution
              title="Medical Image Analysis"
              description="AI-powered medical imaging and diagnosis support"
              features={[
                "Image preprocessing",
                "Disease detection",
                "Segmentation algorithms",
                "Diagnostic support",
                "Radiologist workflow",
                "HIPAA compliance"
              ]}
              price="$50k - $120k"
              timeline="16-24 weeks"
              useCase="Healthcare, medical imaging, diagnostics"
              marketSize="$2.9B"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your business processes and create competitive advantages.
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
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Development Packages</h2>

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



function AISolution({ title, description, features, price, timeline, useCase, marketSize }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  useCase: string;
  marketSize: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {marketSize} market
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
function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Business with AI?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how AI can solve your specific challenges and create competitive advantages. 
          Our AI experts have delivered 100+ successful AI implementations.
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
        <div className="mt-8 text-sm text-gray-500">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
}

