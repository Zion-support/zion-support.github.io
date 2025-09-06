import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

export default function AIServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Harness the power of artificial intelligence to automate processes, gain insights, and transform your business with cutting-edge AI solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Services Consultation"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free AI Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs, from chatbots to predictive analytics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIService
            title="Custom LLM Applications"
            description="Build intelligent applications powered by large language models"
            features={["Custom model fine-tuning", "Prompt engineering", "Context-aware responses", "Multi-modal capabilities", "Real-time inference"]}
            price="$15k–$50k"
            icon="🧠"
            href="/services/ai-llm-applications"
          />
          <AIService
            title="RAG (Retrieval-Augmented Generation)"
            description="Intelligent document search and question-answering systems"
            features={["Vector database setup", "Document processing", "Semantic search", "Context retrieval", "Answer generation"]}
            price="$10k–$30k"
            icon="🔍"
            href="/services/ai-rag-systems"
          />
          <AIService
            title="AI Agents & Automation"
            description="Autonomous AI agents that can perform complex tasks and workflows"
            features={["Task automation", "Workflow orchestration", "API integrations", "Decision making", "Self-healing systems"]}
            price="$20k–$60k"
            icon="🤖"
            href="/services/ai-agents"
          />
          <AIService
            title="Computer Vision Solutions"
            description="Image and video analysis with state-of-the-art computer vision models"
            features={["Object detection", "Image classification", "OCR & text extraction", "Video analytics", "Real-time processing"]}
            price="$12k–$40k"
            icon="👁️"
            href="/services/ai-computer-vision"
          />
          <AIService
            title="Natural Language Processing"
            description="Advanced text analysis, sentiment analysis, and language understanding"
            features={["Sentiment analysis", "Text classification", "Named entity recognition", "Language translation", "Text summarization"]}
            price="$8k–$25k"
            icon="📝"
            href="/services/ai-nlp"
          />
          <AIService
            title="Predictive Analytics & ML"
            description="Machine learning models for forecasting and predictive insights"
            features={["Time series forecasting", "Anomaly detection", "Recommendation systems", "Risk assessment", "Performance optimization"]}
            price="$18k–$45k"
            icon="📈"
            href="/services/ai-predictive-analytics"
          />
          <AIService
            title="AI Voice & Speech Processing"
            description="Advanced speech recognition, synthesis, and voice AI applications"
            features={["Speech-to-text", "Text-to-speech", "Voice cloning", "Emotion detection", "Multi-language support", "Real-time processing"]}
            price="$25k–$65k"
            icon="🎤"
            href="/services/ai-voice-processing"
          />
          <AIService
            title="AI-Powered Search & Discovery"
            description="Intelligent search engines with semantic understanding and personalization"
            features={["Semantic search", "Personalization", "Auto-tagging", "Content recommendation", "Search analytics", "Multi-modal search"]}
            price="$18k–$45k"
            icon="🔎"
            href="/services/ai-search"
          />
          <AIService
            title="AI Fraud Detection & Security"
            description="Advanced fraud detection and cybersecurity using machine learning"
            features={["Real-time fraud detection", "Anomaly detection", "Risk scoring", "Behavioral analysis", "Threat intelligence", "Compliance monitoring"]}
            price="$30k–$80k"
            icon="🛡️"
            href="/services/ai-fraud-detection"
          />
          <AIService
            title="AI Content Generation & Moderation"
            description="Automated content creation and intelligent content moderation systems"
            features={["Content generation", "Auto-moderation", "Brand safety", "Content optimization", "Multi-format support", "Quality scoring"]}
            price="$15k–$40k"
            icon="✍️"
            href="/services/ai-content-generation"
          />
          <AIService
            title="AI Supply Chain Optimization"
            description="Intelligent supply chain management with demand forecasting and logistics optimization"
            features={["Demand forecasting", "Route optimization", "Inventory management", "Supplier analytics", "Risk assessment", "Cost optimization"]}
            price="$35k–$90k"
            icon="🚚"
            href="/services/ai-supply-chain"
          />
          <AIService
            title="AI Healthcare & Medical Imaging"
            description="Medical AI solutions for diagnosis, treatment planning, and patient care"
            features={["Medical imaging analysis", "Diagnostic assistance", "Treatment recommendations", "Patient monitoring", "Drug discovery", "Clinical trials"]}
            price="$50k–$150k"
            icon="🏥"
            href="/services/ai-healthcare"
          />
          <AIService
            title="AI Financial Trading & Analysis"
            description="Algorithmic trading and financial analysis using advanced AI models"
            features={["Algorithmic trading", "Market analysis", "Risk management", "Portfolio optimization", "Sentiment analysis", "Real-time alerts"]}
            price="$40k–$120k"
            icon="💹"
            href="/services/ai-financial-trading"
          />
          <AIService
            title="AI Customer Intelligence"
            description="Deep customer insights and behavior analysis using AI and machine learning"
            features={["Customer segmentation", "Behavior prediction", "Churn analysis", "Lifetime value", "Personalization", "Engagement optimization"]}
            price="$20k–$55k"
            icon="👥"
            href="/services/ai-customer-intelligence"
          />
          <AIService
            title="AI Code Generation & Review"
            description="Automated code generation, review, and optimization using advanced AI models"
            features={["Code generation", "Automated testing", "Code review", "Bug detection", "Performance optimization", "Documentation generation"]}
            price="$25k–$70k"
            icon="💻"
            href="/services/ai-code-generation"
          />
          <AIService
            title="AI Marketing Automation"
            description="Intelligent marketing campaigns with personalized content and automated optimization"
            features={["Campaign optimization", "Content personalization", "A/B testing", "Lead scoring", "Email automation", "Social media management"]}
            price="$18k–$50k"
            icon="📢"
            href="/services/ai-marketing-automation"
          />
          <AIService
            title="AI Legal Document Analysis"
            description="Automated legal document review, contract analysis, and compliance monitoring"
            features={["Contract analysis", "Risk assessment", "Compliance checking", "Document summarization", "Legal research", "Due diligence"]}
            price="$35k–$85k"
            icon="⚖️"
            href="/services/ai-legal-analysis"
          />
          <AIService
            title="AI Real Estate Analytics"
            description="Property valuation, market analysis, and investment insights using AI"
            features={["Property valuation", "Market analysis", "Investment recommendations", "Risk assessment", "Price prediction", "Market trends"]}
            price="$22k–$60k"
            icon="🏠"
            href="/services/ai-real-estate"
          />
          <AIService
            title="AI Energy Management"
            description="Smart energy optimization and consumption analysis for buildings and facilities"
            features={["Energy optimization", "Consumption analysis", "Predictive maintenance", "Cost reduction", "Sustainability metrics", "Smart grid integration"]}
            price="$30k–$75k"
            icon="⚡"
            href="/services/ai-energy-management"
          />
          <AIService
            title="AI E-commerce Personalization"
            description="Advanced product recommendations and personalized shopping experiences"
            features={["Product recommendations", "Dynamic pricing", "Inventory optimization", "Customer journey mapping", "Cross-selling", "Retention strategies"]}
            price="$20k–$55k"
            icon="🛒"
            href="/services/ai-ecommerce"
          />
          <AIService
            title="AI Quality Assurance"
            description="Automated testing, quality control, and defect detection using computer vision and ML"
            features={["Automated testing", "Defect detection", "Quality scoring", "Process monitoring", "Predictive maintenance", "Compliance checking"]}
            price="$25k–$65k"
            icon="🔍"
            href="/services/ai-quality-assurance"
          />
          <AIService
            title="AI Talent Acquisition"
            description="Intelligent recruitment, candidate screening, and HR analytics"
            features={["Resume screening", "Candidate matching", "Interview scheduling", "Skills assessment", "Diversity analytics", "Retention prediction"]}
            price="$28k–$70k"
            icon="👔"
            href="/services/ai-talent-acquisition"
          />
          <AIService
            title="AI Environmental Monitoring"
            description="Environmental data analysis, pollution detection, and sustainability reporting"
            features={["Air quality monitoring", "Water quality analysis", "Waste management", "Carbon footprint tracking", "Sustainability reporting", "Compliance monitoring"]}
            price="$35k–$80k"
            icon="🌱"
            href="/services/ai-environmental"
          />
          <AIService
            title="AI Sports Analytics"
            description="Performance analysis, injury prediction, and strategic insights for sports teams"
            features={["Performance analysis", "Injury prediction", "Tactical insights", "Player scouting", "Fan engagement", "Revenue optimization"]}
            price="$40k–$100k"
            icon="⚽"
            href="/services/ai-sports-analytics"
          />
          <AIService
            title="AI Insurance Risk Assessment"
            description="Automated risk evaluation, fraud detection, and claims processing"
            features={["Risk assessment", "Fraud detection", "Claims automation", "Underwriting support", "Customer profiling", "Pricing optimization"]}
            price="$45k–$110k"
            icon="🛡️"
            href="/services/ai-insurance"
          />
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Capabilities & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge AI technologies and frameworks to deliver production-ready solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AICapability
            title="Applied AI"
            description="Production-ready AI applications that solve real business problems"
            technologies={["RAG over private data", "Task-specific agents", "Vision + speech", "Personalization", "Multi-modal AI"]}
            icon="🚀"
          />
          <AICapability
            title="Model Operations"
            description="MLOps and model management for scalable AI deployments"
            technologies={["Offline evals", "Safety + guardrails", "Batch + streaming", "Cost controls", "Model versioning"]}
            icon="⚙️"
          />
          <AICapability
            title="Data & MLOps"
            description="Complete data pipeline and machine learning operations"
            technologies={["Data pipelines", "Feature stores", "Vector DBs", "Monitoring + drift", "AutoML"]}
            icon="📊"
          />
        </div>
      </section>

      {/* Pricing */}
      <Pricing />
      <ContactSection />
    </div>
  );
}

function AIService({ title, description, price, features, icon, href }: {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-lg font-bold text-blue-600">{price}</div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
    </Link>
  );
}

function AICapability({ title, description, technologies, icon }: {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Service Pricing</h2>
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
}

function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Let's discuss how AI can solve your specific business challenges and drive growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:kleber@ziontechgroup.com?subject=AI Services Project Inquiry"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Start Your AI Journey
        </a>
        <a
          href="tel:+13024640950"
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
        >
          Call +1 302 464 0950
        </a>
      </div>
      <div className="mt-8 text-sm">
        <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>Email: kleber@ziontechgroup.com</p>
      </div>
    </section>
  );
}