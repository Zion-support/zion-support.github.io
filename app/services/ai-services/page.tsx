import Link from "next/link";

export const metadata = {
  title: "AI Services | Zion Tech Group",
  description: "Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.",
  keywords: 'ai-services, services, business, technology'
};

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function AIServiceCard({ icon, title, description, features, price }: {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600 mb-4">{price}</div>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Service: {title}"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

export default function AIServicesPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge artificial intelligence solutions. From custom LLM development to intelligent automation, we deliver AI that drives real business value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureItem
          icon="🧠"
          title="Custom LLM Development"
          description="Build and deploy custom large language models tailored to your specific business needs and use cases."
          benefits={["Custom model training", "Domain-specific optimization", "Cost-effective deployment", "Continuous learning"]}
        />
        <FeatureItem
          icon="🔍"
          title="RAG Systems"
          description="Implement Retrieval-Augmented Generation systems that combine your data with AI for accurate, contextual responses."
          benefits={["Real-time data access", "Context-aware responses", "Automated workflows", "Human-like interactions"]}
        />
        <FeatureItem
          icon="👁️"
          title="Computer Vision"
          description="Develop AI-powered visual recognition systems for image analysis, object detection, and automated quality control."
          benefits={["Image classification", "Object detection", "Facial recognition", "Quality inspection"]}
        />
        <FeatureItem
          icon="⚙️"
          title="MLOps Solutions"
          description="End-to-end machine learning operations including model deployment, monitoring, and continuous improvement."
          benefits={["Automated pipelines", "Model versioning", "Performance monitoring", "Scalable deployment"]}
        />
        <FeatureItem
          icon="🤖"
          title="AI Agents & Automation"
          description="Create intelligent agents that automate complex business processes and decision-making workflows."
          benefits={["API integration", "Workflow automation", "Data processing", "System optimization"]}
        />
        <FeatureItem
          icon="📊"
          title="AI Analytics & Insights"
          description="Leverage AI to extract meaningful insights from your data and make data-driven business decisions."
          benefits={["Predictive analytics", "Pattern recognition", "Trend analysis", "Business intelligence"]}
        />
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our AI Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            icon="🎯"
            title="Business-Focused"
            description="We focus on delivering AI solutions that provide clear, measurable business value and return on investment."
          />
          <BenefitCard
            icon="🔧"
            title="Custom Solutions"
            description="Every AI solution is tailored to your specific business requirements, industry, and use cases."
          />
          <BenefitCard
            icon="🚀"
            title="Rapid Deployment"
            description="Fast implementation and deployment with minimal disruption to your existing business operations."
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            step="1"
            title="Discovery & Analysis"
            description="Understand your business needs, data sources, and AI requirements through comprehensive analysis."
          />
          <ProcessStep
            step="2"
            title="Solution Design"
            description="Design custom AI architecture and select the most appropriate technologies and approaches."
          />
          <ProcessStep
            step="3"
            title="Development & Training"
            description="Build, train, and optimize AI models using your data and business-specific requirements."
          />
          <ProcessStep
            step="4"
            title="Deployment & Support"
            description="Deploy the solution in your environment and provide ongoing support and optimization."
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Service Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard
            icon="🚀"
            title="AI Starter Package"
            description="Perfect for businesses looking to get started with AI. Includes basic AI integration and simple automation."
            features={["Basic AI integration", "Simple automation", "Data analysis", "3 months support"]}
            price="Starting at $5,000"
          />
          <AIServiceCard
            icon="💼"
            title="AI Professional Package"
            description="Comprehensive AI solutions for growing businesses. Includes custom models and advanced automation."
            features={["Custom AI models", "Advanced automation", "RAG systems", "6 months support"]}
            price="Starting at $15,000"
          />
          <AIServiceCard
            icon="🏢"
            title="AI Enterprise Package"
            description="Full-scale AI transformation for large enterprises. Includes complete AI infrastructure and ongoing support."
            features={["Complete AI infrastructure", "Custom development", "24/7 support", "Ongoing optimization"]}
            price="Custom pricing"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl mb-8">
          Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
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
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </div>
    </div>
  );
}