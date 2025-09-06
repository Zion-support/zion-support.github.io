<<<<<<< HEAD
<<<<<<< HEAD
export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including LLM applications, RAG systems, custom AI agents, and MLOps solutions for enterprise-grade AI implementation.'
}; export default function AIPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Ship AI features with confidence: RAG systems, intelligent agents, custom model training, 
          and production-ready MLOps. We help you harness AI to solve real business problems.
        </p>
      </section>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

export const metadata = { title: 'AI Services | Zion Tech Group' }; export default function AIPage() { return ( <section> <h1 style={{fontSize: 26,fontWeight: 800}}>AI Services</h1> <p style={{marginTop: 8,color: '#374151'}}>Ship AI features with confidence: RAG,agents,fine-tuning,evals and MLOps.</p> <div style={{display: 'grid',gap: 12,marginTop: 16}}> <Item title="Applied AI" details={["RAG over private data","Task-specific agents","Vision + speech","Personalization"]} /> <Item title="Model Ops" details={["Offline evals","Safety + guardrails","Batch + streaming","Cost controls"]} /> <Item title="Data & MLOps" details={["Pipelines","Feature stores","Vector DBs","Monitoring + drift"]} /> </div> <Pricing /> </section> )} function Item(): any ({ title,details }: { title: string; details: string[] }) { return ( <div style={{border: '1px solid #e5e7eb',borderRadius: 12,padding: 16}}> <h3 style={{fontWeight: 700}}>{title}</h3> <ul style={{paddingLeft: 18,color: '#4b5563'}}>{details && details.map(d => (<li key={d} style={{listStyle: 'disc'}}>{d}</li>))}</ul> </div> )} function Pricing() { return ( <div style={{marginTop: 20,display: 'grid',gap: 12,gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))'}}> <Plan name="AI Discovery" price="$5k–$12k" features={["2–3 weeks","Use-case design","Tech selection","Roadmap"]} /> <Plan name="Pilot" price="$15k–$45k" features={["4–8 weeks","RAG/agent MVP","Evals + safety","Dashboards"]} /> <Plan name="Production" price="$50k+" features={["Hardened infra","Monitoring","SLAs","Cost optimization"]} /> </div> )} function Plan(): any ({ name,price,features }: { name: string; price: string; features: string[] }) { return ( <div style={{border: '1px solid #e5e7eb',borderRadius: 12,padding: 16}}> <h4 style={{fontWeight: 700}}>{name}</h4> <div style={{color: '#111827',fontWeight: 800,marginTop: 4}}>{price}</div> <ul style={{paddingLeft: 18,color: '#4b5563',marginTop: 8}}>{features && features.map(f => (<li key={f} style={{listStyle: 'disc'}}>{f}</li>))}</ul> <a href="https: </div> )}

<<<<<<< HEAD
      {/* Core AI Services */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Core AI Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AIServiceItem 
            title="Applied AI Development" 
            details={[
              "RAG over private data",
              "Task-specific AI agents",
              "Computer vision applications",
              "Natural language processing",
              "Personalization engines",
              "Real-time AI inference"
            ]} 
          />
          <AIServiceItem 
            title="Model Operations (MLOps)" 
            details={[
              "Model training & fine-tuning",
              "Offline & online evaluations",
              "Safety & bias testing",
              "Batch & streaming pipelines",
              "Cost optimization",
              "Performance monitoring"
            ]} 
          />
          <AIServiceItem 
            title="Data & Infrastructure" 
            details={[
              "Data pipeline development",
              "Feature store implementation",
              "Vector database setup",
              "Model drift monitoring",
              "A/B testing frameworks",
              "Scalable AI infrastructure"
            ]} 
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          AI Development Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AIPricingPlan 
            name="AI Discovery & Strategy" 
            price="$5,000 - $12,000" 
            duration="2-3 weeks"
            features={[
              "AI use-case analysis",
              "Technology selection",
              "Data assessment",
              "Implementation roadmap",
              "ROI projections",
              "Proof of concept"
            ]}
            popular={false}
          />
          <AIPricingPlan 
            name="AI Pilot Development" 
            price="$15,000 - $45,000" 
            duration="4-8 weeks"
            features={[
              "RAG/Agent MVP development",
              "Model fine-tuning",
              "Evaluation & safety testing",
              "Analytics dashboard",
              "Integration setup",
              "Performance optimization"
            ]}
            popular={true}
          />
          <AIPricingPlan 
            name="Production AI System" 
            price="$50,000+" 
            duration="12+ weeks"
            features={[
              "Hardened AI infrastructure",
              "Advanced monitoring",
              "SLA guarantees",
              "Cost optimization",
              "Security hardening",
              "24/7 support"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
}

function AISolutionCard({ title, description, features, pricing, category, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-4">
        <div className="text-2xl font-bold text-gray-900 mb-2">{pricing}</div>
        <a 
          href="tel:+13024640950"
          className="w-full bg-purple-600 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors block"
        >
          Get Started
        </a>
      </div>
=======
export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Advanced AI solutions including RAG systems, custom agents, MLOps, and production-ready AI applications.'
};

export default function AIPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ship AI features with confidence: RAG systems, intelligent agents, fine-tuning, 
          evaluations, and production MLOps. We build AI that works in the real world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Applied AI" 
          details={[
            "RAG over private data",
            "Task-specific agents",
            "Computer vision + speech",
            "Personalization engines",
            "Chatbots & virtual assistants",
            "Document processing & OCR"
          ]} 
        />
        <Item 
          title="Model Operations" 
          details={[
            "Offline evaluations",
            "Safety + guardrails",
            "Batch + streaming inference",
            "Cost optimization",
            "A/B testing frameworks",
            "Model versioning & rollback"
          ]} 
        />
        <Item 
          title="Data & MLOps" 
          details={[
            "Data pipelines",
            "Feature stores",
            "Vector databases",
            "Monitoring + drift detection",
            "Model serving infrastructure",
            "Automated retraining"
          ]} 
        />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Intelligent Document Processing"
            description="Extract insights from documents using OCR, NLP, and computer vision"
            price="Starting at $15k"
            features={["OCR + text extraction", "Entity recognition", "Document classification", "Automated workflows"]
          />
          <ServiceCard
            title="Conversational AI"
            description="Build intelligent chatbots and virtual assistants for customer service"
            price="Starting at $12k"
            features={["Multi-channel support", "Context awareness", "Integration APIs", "Analytics dashboard"]
          />
          <ServiceCard
            title="Predictive Analytics"
            description="Machine learning models for forecasting and business intelligence"
            price="Starting at $20k"
            features={["Time series forecasting", "Anomaly detection", "Risk assessment", "Real-time predictions"]
          />
          <ServiceCard
            title="Computer Vision"
            description="Image and video analysis for quality control and automation"
            price="Starting at $18k"
            features={["Object detection", "Image classification", "Video analysis", "Real-time processing"]
          />
          <ServiceCard
            title="Natural Language Processing"
            description="Text analysis, sentiment analysis, and language understanding"
            price="Starting at $10k"
            features={["Sentiment analysis", "Text summarization", "Language translation", "Content moderation"]
          />
          <ServiceCard
            title="Recommendation Systems"
            description="Personalized recommendations for e-commerce and content platforms"
            price="Starting at $16k"
            features={["Collaborative filtering", "Content-based filtering", "Real-time updates", "A/B testing"]
          />
        </div>
      </div>

      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
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

function ServiceCard({ title, description, price, features }: { 
  title: string; 
  description: string; 
  price: string; 
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>
  );
}

function AIServiceItem({ title, details }: { title: string; details: string[] }) {
  return (
<<<<<<< HEAD
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
=======
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">AI Development Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="AI Discovery" 
          price="$5k–$12k" 
          duration="2–3 weeks"
          features={[
            "Use-case analysis & design",
            "Technology selection",
            "Data assessment",
            "Implementation roadmap",
            "Proof of concept",
            "ROI projections"
          ]} 
        />
        <Plan 
          name="AI Pilot" 
          price="$15k–$45k" 
          duration="4–8 weeks"
          features={[
            "RAG/agent MVP development",
            "Evaluation framework",
            "Safety & guardrails",
            "Performance dashboards",
            "Integration testing",
            "User feedback collection"
          ]} 
        />
        <Plan 
          name="AI Production" 
          price="$50k+" 
          duration="8+ weeks"
          features={[
            "Hardened infrastructure",
            "Advanced monitoring",
            "SLA guarantees",
            "Cost optimization",
            "Scalability planning",
            "24/7 support"
          ]} 
        />
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          Ready to implement AI in your business? Let's discuss your AI requirements.
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
      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>
  );
}

<<<<<<< HEAD
function AIPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-6 ${popular ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-purple-600 text-white text-center py-1 px-3 rounded-full text-sm font-medium mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors block ${
          popular 
            ? 'bg-purple-600 text-white hover:bg-purple-700' 
            : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
        }`}
      >
        Contact Us
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Implement AI in Your Business?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your AI needs and create a custom solution that drives real business value. 
        Our team has deployed 100+ AI solutions across various industries.
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
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-sm text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
