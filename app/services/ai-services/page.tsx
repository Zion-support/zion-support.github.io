
import Link from 'next/link';

export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including LLM applications, RAG systems, machine learning operations, and custom AI solutions for enterprise.'
};

export default function AIPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
            We help you build production-ready AI solutions that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ServiceCard 
            title="Applied AI Solutions" 
            details={[
              "RAG over private data",
              "Task-specific AI agents", 
              "Computer vision & speech processing",
              "Personalization engines",
              "Natural language processing",
              "Predictive analytics"
            ]} 
            icon="🤖"
          />
          <ServiceCard 
            title="Model Operations" 
            details={[
              "Offline evaluation frameworks",
              "Safety & guardrails implementation", 
              "Batch & streaming inference",
              "Cost optimization strategies",
              "Model versioning & deployment",
              "Performance monitoring"
            ]} 
            icon="⚙️"
          />
          <ServiceCard 
            title="Data & MLOps" 
            details={[
              "Data pipeline automation",
              "Feature store implementation", 
              "Vector database setup",
              "Model drift monitoring",
              "A/B testing frameworks",
              "Continuous integration"
            ]} 
            icon="📊"
          />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SolutionCard
              title="Intelligent Document Processing"
              description="AI-powered document analysis, extraction, and classification for enterprise workflows"
              price="$25k - $60k"
              features={["OCR & text extraction", "Document classification", "Data validation", "Workflow automation"]}
            />
            <SolutionCard
              title="Conversational AI Platform"
              description="Multi-channel chatbot and virtual assistant with natural language understanding"
              price="$30k - $75k"
              features={["Multi-language support", "Context awareness", "Integration APIs", "Analytics dashboard"]}
            />
            <SolutionCard
              title="Predictive Analytics Engine"
              description="Machine learning models for forecasting, risk assessment, and business intelligence"
              price="$35k - $85k"
              features={["Time series forecasting", "Risk modeling", "Real-time predictions", "Custom algorithms"]}
            />
            <SolutionCard
              title="Computer Vision System"
              description="Image and video analysis for quality control, security, and automation"
              price="$40k - $95k"
              features={["Object detection", "Image classification", "Video analysis", "Real-time processing"]}
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard title="Large Language Models" tech={["GPT-4", "Claude", "Llama", "Custom Models"]} />
            <TechCard title="Vector Databases" tech={["Pinecone", "Weaviate", "Chroma", "Qdrant"]} />
            <TechCard title="ML Frameworks" tech={["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"]} />
            <TechCard title="Cloud Platforms" tech={["AWS", "Azure", "GCP", "OpenAI API"]} />
          </div>
        </div>

        <Pricing />
        
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement AI?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your AI requirements and create a custom solution that delivers measurable results. 
            Contact us for a free AI consultation and project assessment.
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
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, details, icon }: { 
  title: string; 
  details: string[]; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="text-gray-600 space-y-2">
        {details.map((detail) => (
          <li key={detail} className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SolutionCard({ title, description, price, features }: {
  title: string;
  description: string;
  price: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-purple-600 mb-4">{price}</div>
      <ul className="text-gray-600 space-y-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechCard({ title, tech }: {
  title: string;
  tech: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white">
      <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="AI Discovery" 
          price="$5k–$12k" 
          duration="2–3 weeks"
          features={[
            "Use-case analysis & design",
            "Technology stack selection", 
            "Data assessment & preparation",
            "Implementation roadmap",
            "Proof of concept development",
            "ROI projections"
          ]} 
        />
        <Plan 
          name="AI Pilot" 
          price="$15k–$45k" 
          duration="4–8 weeks"
          features={[
            "RAG/agent MVP development",
            "Evaluation & safety frameworks", 
            "Performance dashboards",
            "Integration with existing systems",
            "User testing & feedback",
            "Deployment & monitoring setup"
          ]} 
          popular={true}
        />
        <Plan 
          name="AI Production" 
          price="$50k+" 
          duration="Custom timeline"
          features={[
            "Production-grade infrastructure",
            "Advanced monitoring & alerting", 
            "Service level agreements",
            "Cost optimization strategies",
            "Dedicated support team",
            "Continuous improvement"
          ]} 
        />
      </div>
    </div>
  );
}

function Plan({ name, price, duration, features, popular = false }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular?: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 bg-white relative ${popular ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span> 
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="mailto:kleber@ziontechgroup.com?subject=AI Services Inquiry - {name}"
        className={`mt-6 block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
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

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
