import Link from "next/link";

export const metadata = {
  title: "AI Services | Zion Tech Group - Advanced AI Solutions & Machine Learning",
  description: "Comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics. Custom AI solutions for businesses. Starting at $5,000/project.",
};

export default function AIServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge artificial intelligence solutions. From machine learning to natural language processing, we deliver AI that drives real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get AI Consultation - Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Request AI Demo
          </a>
        </div>
      </section>

      {/* AI Capabilities Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Capabilities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in advanced AI technologies that solve complex business problems and drive innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AICapabilityCard
            icon="🧠"
            title="Machine Learning"
            description="Custom ML models for prediction, classification, and pattern recognition"
            applications={["Predictive Analytics", "Recommendation Systems", "Fraud Detection"]}
          />
          <AICapabilityCard
            icon="💬"
            title="Natural Language Processing"
            description="Text analysis, sentiment analysis, and conversational AI solutions"
            applications={["Chatbots", "Text Summarization", "Language Translation"]}
          />
          <AICapabilityCard
            icon="👁️"
            title="Computer Vision"
            description="Image and video analysis for automation and quality control"
            applications={["Object Detection", "Facial Recognition", "Medical Imaging"]}
          />
          <AICapabilityCard
            icon="🤖"
            title="AI Automation"
            description="Intelligent process automation and workflow optimization"
            applications={["RPA", "Document Processing", "Workflow Automation"]}
          />
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Service Categories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your specific business needs and industry requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard
            href="/services/ai-content-generation"
            title="AI Content Generation"
            description="Automated content creation for blogs, social media, and marketing materials"
            icon="✍️"
            pricing="$499/month"
            features={["Multi-format content", "Brand voice customization", "SEO optimization", "Plagiarism detection"]}
          />
          <AIServiceCard
            href="/services/ai-data-analytics"
            title="AI Data Analytics"
            description="Advanced analytics platform with predictive modeling and real-time insights"
            icon="📊"
            pricing="$799/month"
            features={["Predictive analytics", "Real-time dashboards", "Custom ML models", "Data visualization"]}
          />
          <AIServiceCard
            href="/services/ai-customer-support"
            title="AI Customer Support"
            description="Intelligent customer service automation with natural language processing"
            icon="🎧"
            pricing="$599/month"
            features={["24/7 automated support", "Multi-language processing", "Sentiment analysis", "Escalation management"]}
          />
          <AIServiceCard
            href="/services/ai-project-management"
            title="AI Project Management"
            description="Intelligent project planning and resource optimization with predictive insights"
            icon="📋"
            pricing="$699/month"
            features={["Automated task scheduling", "Resource optimization", "Risk prediction", "Progress tracking"]}
          />
          <AIServiceCard
            href="/services/ai-financial-analyzer"
            title="AI Financial Analyzer"
            description="Advanced financial analysis and forecasting with machine learning models"
            icon="💹"
            pricing="$999/month"
            features={["Financial forecasting", "Risk assessment", "Investment analysis", "Compliance monitoring"]}
          />
          <AIServiceCard
            href="/services/ai-testing-automation"
            title="AI Testing Automation"
            description="Intelligent test case generation and automated quality assurance"
            icon="🧪"
            pricing="$799/month"
            features={["Automated test generation", "Bug prediction", "Performance testing", "Code coverage analysis"]}
          />
        </div>
      </section>

      {/* Industry Applications */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI solutions tailored for specific industries with deep domain expertise and compliance requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard
            title="Healthcare"
            description="Medical AI, diagnostic assistance, and patient care optimization"
            icon="🏥"
            solutions={["Medical imaging analysis", "Drug discovery", "Patient monitoring", "Clinical decision support"]}
            pricing="From $50,000/project"
          />
          <IndustryCard
            title="Finance"
            description="Fraud detection, algorithmic trading, and risk management"
            icon="💳"
            solutions={["Fraud detection", "Algorithmic trading", "Credit scoring", "Regulatory compliance"]}
            pricing="From $75,000/project"
          />
          <IndustryCard
            title="E-commerce"
            description="Recommendation engines, inventory optimization, and customer insights"
            icon="🛒"
            solutions={["Product recommendations", "Price optimization", "Demand forecasting", "Customer segmentation"]}
            pricing="From $30,000/project"
          />
          <IndustryCard
            title="Manufacturing"
            description="Predictive maintenance, quality control, and supply chain optimization"
            icon="🏭"
            solutions={["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"]}
            pricing="From $40,000/project"
          />
          <IndustryCard
            title="Education"
            description="Personalized learning, automated grading, and student analytics"
            icon="🎓"
            solutions={["Personalized learning", "Automated grading", "Student analytics", "Curriculum optimization"]}
            pricing="From $25,000/project"
          />
          <IndustryCard
            title="Real Estate"
            description="Property valuation, market analysis, and automated property management"
            icon="🏠"
            solutions={["Property valuation", "Market analysis", "Tenant screening", "Maintenance prediction"]}
            pricing="From $35,000/project"
          />
        </div>
      </section>

      {/* AI Development Process */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Development Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful AI implementation and maximum business value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            step="1"
            title="Discovery & Analysis"
            description="Understand your business needs, data landscape, and AI opportunities"
            duration="1-2 weeks"
          />
          <ProcessStep
            step="2"
            title="Data Preparation"
            description="Clean, validate, and prepare your data for AI model training"
            duration="2-4 weeks"
          />
          <ProcessStep
            step="3"
            title="Model Development"
            description="Build, train, and optimize AI models for your specific use case"
            duration="4-8 weeks"
          />
          <ProcessStep
            step="4"
            title="Deployment & Monitoring"
            description="Deploy AI solutions and monitor performance with continuous improvement"
            duration="Ongoing"
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI solutions deliver measurable business impact across industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <MetricCard
              number="95%"
              label="Accuracy Rate"
              description="Average AI model accuracy across all projects"
            />
            <MetricCard
              number="60%"
              label="Cost Reduction"
              description="Average operational cost savings"
            />
            <MetricCard
              number="300%"
              label="ROI"
              description="Average return on AI investment"
            />
            <MetricCard
              number="24/7"
              label="Availability"
              description="AI systems running continuously"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join 200+ companies already using our AI solutions to drive innovation, reduce costs, and gain competitive advantage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get AI Consultation - Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Schedule AI Demo
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-600">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </section>
    </div>
  );
}

function AICapabilityCard({ 
  icon, 
  title, 
  description, 
  applications 
}: { 
  icon: string; 
  title: string; 
  description: string; 
  applications: string[]; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {applications.map((app, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
            {app}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AIServiceCard({ 
  href, 
  title, 
  description, 
  icon, 
  pricing, 
  features 
}: { 
  href: string; 
  title: string; 
  description: string; 
  icon: string; 
  pricing: string; 
  features: string[]; 
}) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-purple-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-purple-600">
        {pricing}
      </div>
    </Link>
  );
}

function IndustryCard({ 
  title, 
  description, 
  icon, 
  solutions, 
  pricing 
}: { 
  title: string; 
  description: string; 
  icon: string; 
  solutions: string[]; 
  pricing: string; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {solutions.map((solution, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
            {solution}
          </li>
        ))}
      </ul>
      <div className="text-sm font-semibold text-purple-600">
        {pricing}
      </div>
    </div>
  );
}

function ProcessStep({ 
  step, 
  title, 
  description, 
  duration 
}: { 
  step: string; 
  title: string; 
  description: string; 
  duration: string; 
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl font-bold text-purple-600">{step}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-purple-600 font-semibold">{duration}</p>
    </div>
  );
}

function MetricCard({ 
  number, 
  label, 
  description 
}: { 
  number: string; 
  label: string; 
  description: string; 
}) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-purple-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}