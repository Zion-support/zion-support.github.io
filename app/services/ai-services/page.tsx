<<<<<<< HEAD
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Services | Zion Tech Group - Comprehensive AI Solutions',
  description: 'Complete AI services including machine learning, natural language processing, computer vision, and AI automation. Transform your business with cutting-edge artificial intelligence.',
=======
import Link from 'next/link';

export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Enterprise-grade AI solutions including RAG systems, conversational AI, predictive analytics, and computer vision applications.'
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
};

export default function AIServicesPage() {
  return (
    <div className="animate-fade-in">
<<<<<<< HEAD
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive artificial intelligence solutions to transform your business. From machine learning 
          to natural language processing, we deliver cutting-edge AI that drives real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get AI Consultation - Free
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Schedule Demo
=======
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
            We help you build, deploy, and scale AI solutions that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ServiceCard 
            title="Applied AI Solutions" 
            details={[
              "RAG over private data",
              "Task-specific agents",
              "Vision + speech processing",
              "Personalization engines",
              "Content generation",
              "Intelligent automation"
            ]} 
            icon="🤖"
          />
          <ServiceCard 
            title="Model Operations" 
            details={[
              "Offline evaluation systems",
              "Safety + guardrails",
              "Batch + streaming inference",
              "Cost optimization",
              "Performance monitoring",
              "A/B testing frameworks"
            ]} 
            icon="⚙️"
          />
          <ServiceCard 
            title="Data & MLOps" 
            details={[
              "Data pipeline automation",
              "Feature store management",
              "Vector database setup",
              "Model drift detection",
              "Continuous integration",
              "Monitoring + alerting"
            ]} 
            icon="📊"
          />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">AI Solutions Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SolutionCard
              title="Intelligent Document Processing"
              description="Extract, analyze, and process information from documents using advanced NLP and computer vision."
              features={[
                "OCR + text extraction",
                "Document classification",
                "Data validation",
                "API integration"
              ]}
              pricing="Starting at $25,000"
            />
            <SolutionCard
              title="Conversational AI Platform"
              description="Build intelligent chatbots and virtual assistants with natural language understanding."
              features={[
                "Multi-channel support",
                "Context awareness",
                "Intent recognition",
                "Human handoff"
              ]}
              pricing="Starting at $30,000"
            />
            <SolutionCard
              title="Predictive Analytics Engine"
              description="Leverage machine learning to predict trends, behaviors, and outcomes for better decision making."
              features={[
                "Time series forecasting",
                "Anomaly detection",
                "Risk assessment",
                "Real-time predictions"
              ]}
              pricing="Starting at $35,000"
            />
            <SolutionCard
              title="Computer Vision System"
              description="Implement image and video analysis solutions for automation and quality control."
              features={[
                "Object detection",
                "Image classification",
                "Video analytics",
                "Quality assurance"
              ]}
              pricing="Starting at $40,000"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechCard
              title="Large Language Models"
              description="GPT-4, Claude, Llama, and custom fine-tuned models"
              icon="🧠"
            />
            <TechCard
              title="Vector Databases"
              description="Pinecone, Weaviate, Chroma for semantic search"
              icon="🔍"
            />
            <TechCard
              title="ML Frameworks"
              description="TensorFlow, PyTorch, Scikit-learn, Hugging Face"
              icon="⚡"
            />
            <TechCard
              title="Cloud Platforms"
              description="AWS, GCP, Azure with GPU acceleration"
              icon="☁️"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Plan
              name="AI Discovery"
              price="$5k–$12k"
              features={[
                "2–3 weeks consultation",
                "Use case design",
                "Technology selection",
                "Implementation roadmap",
                "Proof of concept"
              ]}
            />
            <Plan
              name="Pilot"
              price="$15k–$45k"
              features={[
                "4–8 weeks development",
                "RAG / agent MVP",
                "Evaluation framework",
                "Safety guardrails",
                "Performance dashboards"
              ]}
              popular={true}
            />
            <Plan
              name="Production"
              price="$50k+"
              features={[
                "Hardened infrastructure",
                "Monitoring & alerting",
                "SLA guarantees",
                "Cost optimization",
                "Ongoing maintenance"
              ]}
            />
          </div>
        </div>

        <section className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to implement AI in your business?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let's discuss your AI needs and create a solution that delivers measurable results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
          </a>
        </section>
      </section>

      {/* AI Service Categories */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our AI Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard
            title="AI Code Assistant"
            description="Intelligent code generation, debugging, and optimization powered by advanced AI."
            href="/services/ai-code-assistant"
            icon="🤖"
            pricing="From $99/month"
            features={["Code generation", "Bug detection", "Performance optimization", "Learning assistance"]
          />
          <AIServiceCard
            title="AI Social Media Scheduler"
            description="Intelligent social media scheduling with AI-powered content generation and optimal timing."
            href="/services/ai-social-scheduler"
            icon="📱"
            pricing="From $49/month"
            features={["Content generation", "Optimal timing", "Performance analytics", "Cross-platform management"]
          />
          <AIServiceCard
            title="AI Project Manager"
            description="Intelligent project management with AI-powered task automation and predictive analytics."
            href="/services/ai-project-manager"
            icon="📊"
            pricing="From $199/month"
            features={["Task automation", "Predictive analytics", "Team optimization", "Smart scheduling"]
          />
          <AIServiceCard
            title="AI Customer Support"
            description="Intelligent customer support automation with AI chatbots and sentiment analysis."
            href="/services/ai-customer-support"
            icon="💬"
            pricing="From $299/month"
            features={["AI chatbots", "Sentiment analysis", "Multilingual support", "Smart routing"]
          />
          <AIServiceCard
            title="AI Data Analytics"
            description="Advanced AI-powered data analytics with predictive modeling and real-time insights."
            href="/services/ai-data-analytics"
            icon="📈"
            pricing="From $399/month"
            features={["Predictive analytics", "Real-time dashboards", "Automated insights", "Natural language queries"]
          />
          <AIServiceCard
            title="AI Content Generator"
            description="AI-powered content creation for blogs, marketing materials, and social media posts."
            href="/services/ai-content-generator"
            icon="✍️"
            pricing="From $149/month"
            features={["Blog writing", "Marketing copy", "Social media posts", "SEO optimization"]
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
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

<<<<<<< HEAD
function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
=======
function ServiceCard({ title, details, icon }: { 
  title: string; 
  details: string[]; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

<<<<<<< HEAD
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
=======
function SolutionCard({ title, description, features, pricing }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 text-gray-600 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-gray-900">{pricing}</div>
    </div>
  );
}

function TechCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function Plan({ name, price, features, popular = false }: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${
      popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
    }`}>
      {popular && (
        <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
        }`}
      >
        Get Started
      </a>
    </div>
  );
<<<<<<< HEAD
}

function CTASection() {
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Use Cases:</h4>
        <div className="flex flex-wrap gap-1">
          {useCases.map((useCase, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {useCase}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function AIServicesPage() {
  return (
    <div className="text-center bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-semibold text-gray-900">{name}</div>
    </div>
  );
export const metadata = { title: 'AI Services | Zion Tech Group' } export default /**
 * AIPage - Function description
 */
function AIPage() { return ( <section> <h1 style={{font_size: 26, font_weight: 800}}>AI Services</h1> <p style={{margin_top: 8, color: '#374151'}}>Ship AI features with confidence: RAG, agents, fine - tuning, evals and MLOps.</p> <div style={{display: 'grid', gap: 12, margin_top: 16}}> <Item title="Applied AI" details={["RAG over private data", "Task - specific agents", "Vision + speech", "Personalization"]} /> <Item title="Model Ops" details={["Offline evals", "Safety + guardrails", "Batch + streaming", "Cost controls"]} /> <Item title="Data & MLOps" details={["Pipelines", "Feature stores", "Vector DBs", "Monitoring + drift"]} /> </div> <Pricing /> </section> )} /**
 * Item - Function description
 */
function Item() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h3 style={{font_weight: 700}}>{title}</h3> <ul style={{padding_left: 18, color: '#4b5563'}}>{details.map (d => (<li key={d} style={{list_style: 'disc'}}>{d}</li>))}</ul> </div> )} /**
 * Pricing - Function description
 */
function Pricing() { return ( <div style={{margin_top: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat (auto - fit, minmax (260px, 1fr))'}}> <Plan name="AI Discovery" price="$5k–$12k" features={["2–3 weeks", "Use - case design", "Tech selection", "Roadmap"]} /> <Plan name="Pilot" price="$15k–$45k" features={["4–8 weeks", "RAG / agent MVP", "Evals + safety", "Dashboards"]} /> <Plan name="Production" price="$50k+" features={["Hardened infra", "Monitoring", "SLAs", "Cost optimization"]} /> </div> )} /**
 * Plan - Function description
 */
function Plan() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h4 style={{font_weight: 700}}>{name}</h4> <div style={{color: '#111827', font_weight: 800, margin_top: 4}}>{price}</div> <ul style={{padding_left: 18, color: '#4b5563', margin_top: 8}}>{features.map (function => (<li key={f} style={{list_style: 'disc'}}>{f}</li>))}</ul> <a href="https: </div> )}
}
}
=======
}
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
