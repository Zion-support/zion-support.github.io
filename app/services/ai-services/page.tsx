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
};

export default function AIServicesPage() {
  return (
<div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services & Solutions
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Services
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
          </a>
        </div>
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
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">AI Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <TechCard name="Machine Learning" icon="🧠" />
          <TechCard name="Natural Language Processing" icon="💬" />
          <TechCard name="Computer Vision" icon="👁️" />
          <TechCard name="Deep Learning" icon="🔬" />
          <TechCard name="Neural Networks" icon="🕸️" />
          <TechCard name="Reinforcement Learning" icon="🎯" />
        </div>
      </section>

      {/* AI Solutions by Industry */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">AI Solutions by Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard
            icon="🏦"
            title="Financial Services"
            description="AI solutions for fraud detection, risk assessment, and algorithmic trading."
            solutions={["Fraud detection", "Risk modeling", "Algorithmic trading", "Credit scoring"]
          />
          <IndustryCard
            icon="🛒"
            title="E-commerce"
            description="AI-powered recommendation engines, inventory optimization, and customer analytics."
            solutions={["Recommendation engines", "Inventory optimization", "Customer analytics", "Price optimization"]
          />
          <IndustryCard
            icon="🏥"
            title="Healthcare"
            description="AI solutions for medical diagnosis, drug discovery, and patient care optimization."
            solutions={["Medical diagnosis", "Drug discovery", "Patient monitoring", "Treatment optimization"]
          />
          <IndustryCard
            icon="🏭"
            title="Manufacturing"
            description="AI for predictive maintenance, quality control, and supply chain optimization."
            solutions={["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"]
          />
          <IndustryCard
            icon="🎓"
            title="Education"
            description="AI-powered personalized learning, student assessment, and educational content generation."
            solutions={["Personalized learning", "Student assessment", "Content generation", "Learning analytics"]
          />
          <IndustryCard
            icon="🏠"
            title="Real Estate"
            description="AI solutions for property valuation, market analysis, and investment optimization."
            solutions={["Property valuation", "Market analysis", "Investment optimization", "Property matching"]
          />
        </div>
      </section>

      {/* AI Development Process */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our AI Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            step="1"
            title="Discovery & Analysis"
            description="Understand your business needs and data requirements for optimal AI solution design."
          />
          <ProcessStep
            step="2"
            title="Data Preparation"
            description="Clean, process, and prepare your data for AI model training and optimization."
          />
          <ProcessStep
            step="3"
            title="Model Development"
            description="Develop and train custom AI models tailored to your specific use case and requirements."
          />
          <ProcessStep
            step="4"
            title="Deployment & Monitoring"
            description="Deploy your AI solution and provide ongoing monitoring, maintenance, and optimization."
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proven AI Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            number="500+"
            label="AI Projects Delivered"
            description="Successfully completed AI implementations"
          />
          <MetricCard
            number="95%"
            label="Accuracy Rate"
            description="Average accuracy of our AI models"
          />
          <MetricCard
            number="300%"
            label="ROI Improvement"
            description="Average return on investment for clients"
          />
          <MetricCard
            number="24/7"
            label="Support Available"
            description="Round-the-clock AI model monitoring"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 1,000+ businesses that have revolutionized their operations with our AI solutions.
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
        <div className="mt-6 text-sm text-blue-100">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </section>
    </div>
  );
}

function AIServiceCard({ title, description, href, icon, pricing, features }: {
  title: string;
  description: string;
  href: string;
  icon: string;
  pricing: string;
  features: string[];
}) {
  return (
    <Link
      href={href}
      className="group bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="text-4xl mb-4">{icon}</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
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
      <div className="text-lg font-semibold text-blue-600">
        {pricing}
      </div>
    </Link>
  );
}

export default function AIServicesPage() {
function TechCard({ name, icon }: { name: string; icon: string }) {
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
}

function IndustryCard({ icon, title, description, solutions }: {
  icon: string;
  title: string;
  description: string;
  solutions: string[];
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {solutions.map((solution, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {solution}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessStep({ step, title, description }: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function MetricCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}
