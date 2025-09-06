
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {


interface AIServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  useCases: string[];
  icon: string;
  href: string;
}

function AIService({ title, description, price, features, useCases, icon, href }: AIServiceProps) {
  return (

    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
          We help you build production-ready AI systems that drive real business value.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard
            title="Custom LLM Applications"
            description="Build intelligent applications powered by large language models"
            features={["Custom model fine-tuning", "Prompt engineering", "Context-aware responses", "Multi-modal capabilities", "Real-time inference"]}
            price="$15k–$50k"
            icon="🧠"
          />
          <AIServiceCard
            title="RAG (Retrieval-Augmented Generation)"
            description="Intelligent document search and question-answering systems"
            features={["Vector database setup", "Document processing", "Semantic search", "Context retrieval", "Answer generation"]}
            price="$10k–$30k"
            icon="🔍"
          />
          <AIServiceCard
            title="AI Agents & Automation"
            description="Autonomous AI agents that can perform complex tasks and workflows"
            features={["Task automation", "Workflow orchestration", "API integrations", "Decision making", "Self-healing systems"]}
            price="$20k–$60k"
            icon="🤖"
          />
          <AIServiceCard
            title="Computer Vision Solutions"
            description="Image and video analysis with state-of-the-art computer vision models"
            features={["Object detection", "Image classification", "OCR & text extraction", "Video analytics", "Real-time processing"]}
            price="$12k–$40k"
            icon="👁️"
          />
          <AIServiceCard
            title="Natural Language Processing"
            description="Advanced text analysis, sentiment analysis, and language understanding"
            features={["Sentiment analysis", "Text classification", "Named entity recognition", "Language translation", "Text summarization"]}
            price="$8k–$25k"
            icon="📝"
          />
          <AIServiceCard
            title="Predictive Analytics & ML"
            description="Machine learning models for forecasting and predictive insights"
            features={["Time series forecasting", "Anomaly detection", "Recommendation systems", "Risk assessment", "Performance optimization"]}
            price="$18k–$45k"
            icon="📈"
          />
          <AIServiceCard
            title="AI Voice & Speech Processing"
            description="Advanced speech recognition, synthesis, and voice AI applications"
            features={["Speech-to-text", "Text-to-speech", "Voice cloning", "Emotion detection", "Multi-language support", "Real-time processing"]}
            price="$25k–$65k"
            icon="🎤"
          />
          <AIServiceCard
            title="AI-Powered Search & Discovery"
            description="Intelligent search engines with semantic understanding and personalization"
            features={["Semantic search", "Personalization", "Auto-tagging", "Content recommendation", "Search analytics", "Multi-modal search"]}
            price="$18k–$45k"
            icon="🔎"
          />
          <AIServiceCard
            title="AI Fraud Detection & Security"
            description="Advanced fraud detection and cybersecurity using machine learning"
            features={["Real-time fraud detection", "Anomaly detection", "Risk scoring", "Behavioral analysis", "Threat intelligence", "Compliance monitoring"]}
            price="$30k–$80k"
            icon="🛡️"
          />
          <AIServiceCard
            title="AI Content Generation & Moderation"
            description="Automated content creation and intelligent content moderation systems"
            features={["Content generation", "Auto-moderation", "Brand safety", "Content optimization", "Multi-format support", "Quality scoring"]}
            price="$15k–$40k"
            icon="✍️"
          />
          <AIServiceCard
            title="AI Supply Chain Optimization"
            description="Intelligent supply chain management with demand forecasting and logistics optimization"
            features={["Demand forecasting", "Route optimization", "Inventory management", "Supplier analytics", "Risk assessment", "Cost optimization"]}
            price="$35k–$90k"
            icon="🚚"
          />
          <AIServiceCard
            title="AI Healthcare & Medical Imaging"
            description="Medical AI solutions for diagnosis, treatment planning, and patient care"
            features={["Medical imaging analysis", "Diagnostic assistance", "Treatment recommendations", "Patient monitoring", "Drug discovery", "Clinical trials"]}
            price="$50k–$150k"
            icon="🏥"
          />
          <AIServiceCard
            title="AI Financial Trading & Analysis"
            description="Algorithmic trading and financial analysis using advanced AI models"
            features={["Algorithmic trading", "Market analysis", "Risk management", "Portfolio optimization", "Sentiment analysis", "Real-time alerts"]}
            price="$40k–$120k"
            icon="💹"
          />
          <AIServiceCard
            title="AI Customer Intelligence"
            description="Deep customer insights and behavior analysis using AI and machine learning"
            features={["Customer segmentation", "Behavior prediction", "Churn analysis", "Lifetime value", "Personalization", "Engagement optimization"]}
            price="$20k–$55k"
            icon="👥"
          />
          <AIServiceCard
            title="AI Code Generation & Review"
            description="Automated code generation, review, and optimization using advanced AI models"
            features={["Code generation", "Automated testing", "Code review", "Bug detection", "Performance optimization", "Documentation generation"]}
            price="$25k–$70k"
            icon="💻"
          />
          <AIServiceCard
            title="AI Marketing Automation"
            description="Intelligent marketing campaigns with personalized content and automated optimization"
            features={["Campaign optimization", "Content personalization", "A/B testing", "Lead scoring", "Email automation", "Social media management"]}
            price="$18k–$50k"
            icon="📢"
          />
          <AIServiceCard
            title="AI Legal Document Analysis"
            description="Automated legal document review, contract analysis, and compliance monitoring"
            features={["Contract analysis", "Risk assessment", "Compliance checking", "Document summarization", "Legal research", "Due diligence"]}
            price="$35k–$85k"
            icon="⚖️"
          />
          <AIServiceCard
            title="AI Real Estate Analytics"
            description="Property valuation, market analysis, and investment insights using AI"
            features={["Property valuation", "Market analysis", "Investment recommendations", "Risk assessment", "Price prediction", "Market trends"]}
            price="$22k–$60k"
            icon="🏠"
          />
          <AIServiceCard
            title="AI Energy Management"
            description="Smart energy optimization and consumption analysis for buildings and facilities"
            features={["Energy optimization", "Consumption analysis", "Predictive maintenance", "Cost reduction", "Sustainability metrics", "Smart grid integration"]}
            price="$30k–$75k"
            icon="⚡"
          />
          <AIServiceCard
            title="AI E-commerce Personalization"
            description="Advanced product recommendations and personalized shopping experiences"
            features={["Product recommendations", "Dynamic pricing", "Inventory optimization", "Customer journey mapping", "Cross-selling", "Retention strategies"]}
            price="$20k–$55k"
            icon="🛒"
          />
          <AIServiceCard
            title="AI Quality Assurance"
            description="Automated testing, quality control, and defect detection using computer vision and ML"
            features={["Automated testing", "Defect detection", "Quality scoring", "Process monitoring", "Predictive maintenance", "Compliance checking"]}
            price="$25k–$65k"
            icon="🔍"
          />
          <AIServiceCard
            title="AI Talent Acquisition"
            description="Intelligent recruitment, candidate screening, and HR analytics"
            features={["Resume screening", "Candidate matching", "Interview scheduling", "Skills assessment", "Diversity analytics", "Retention prediction"]}
            price="$28k–$70k"
            icon="👔"
          />
          <AIServiceCard
            title="AI Environmental Monitoring"
            description="Environmental data analysis, pollution detection, and sustainability reporting"
            features={["Air quality monitoring", "Water quality analysis", "Waste management", "Carbon footprint tracking", "Sustainability reporting", "Compliance monitoring"]}
            price="$35k–$80k"
            icon="🌱"
          />
          <AIServiceCard
            title="AI Sports Analytics"
            description="Performance analysis, injury prediction, and strategic insights for sports teams"
            features={["Performance analysis", "Injury prediction", "Tactical insights", "Player scouting", "Fan engagement", "Revenue optimization"]}
            price="$40k–$100k"
            icon="⚽"
          />
          <AIServiceCard
            title="AI Insurance Risk Assessment"
            description="Automated risk evaluation, fraud detection, and claims processing"
            features={["Risk assessment", "Fraud detection", "Claims automation", "Underwriting support", "Customer profiling", "Pricing optimization"]}
            price="$45k–$110k"
            icon="🛡️"
          />

        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>

    </div>
  );
}


function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
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


function Pricing() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Service Pricing</h2>
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


function CTASection() {



