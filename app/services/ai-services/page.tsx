<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

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
=======

import React from 'react';'
import Link from 'next/link';

export const metadata = {'
  title: 'AI Services | Zion Tech Group - Comprehensive AI Solutions','
  description: 'Complete AI services including machine learning, natural language processing, computer vision, and AI automation. Transform your business with cutting-edge artificial intelligence.',;
};

export default function AIServicesPage() {}
  return (

        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
          Comprehensive artificial intelligence solutions to transform your business. From machine learning;
          to natural language processing, we deliver cutting-edge AI that drives real results.
        </p>"
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a"
            href="tel:+13024640950""
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get AI Consultation - Free;
          </a>
          <a"
            href="mailto:kleber@ziontechgroup.com""
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Schedule Demo;
          </a>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        </div>

<<<<<<< HEAD
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Advanced AI solutions including machine learning, natural language processing, computer vision, and intelligent automation. Transform your business with cutting-edge AI technology.'
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

export default function AIPage() {
  return (
    <div className="animate-fade-in">
<<<<<<< HEAD
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. 
            We deliver production-ready AI solutions that drive real business value.
          </p>
        </div>

        {/* Core AI Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AIServiceCard
            title="Custom LLM Applications"
            description="Build intelligent applications powered by large language models"
            features={[
              "Custom prompt engineering",
              "Context-aware responses",
              "Multi-modal capabilities",
              "Real-time streaming",
              "Custom fine-tuning",
              "API integration & deployment"
            ]}
            pricing="$15k - $50k"
            timeline="4-10 weeks"
            icon="🧠"
          />
          
          <AIServiceCard
            title="RAG Systems & Knowledge Bases"
            description="Retrieval-Augmented Generation for enterprise knowledge management"
            features={[
              "Document ingestion & processing",
              "Vector database setup",
              "Semantic search capabilities",
              "Context-aware retrieval",
              "Source attribution & citations",
              "Performance optimization"
            ]}
            pricing="$20k - $60k"
            timeline="6-12 weeks"
            icon="🔍"
          />
          
          <AIServiceCard
            title="AI Agent Development"
            description="Intelligent autonomous agents for task automation and decision making"
            features={[
              "Multi-step reasoning",
              "Tool integration & APIs",
              "Memory & context management",
              "Error handling & recovery",
              "Human-in-the-loop workflows",
              "Performance monitoring"
            ]}
            pricing="$25k - $70k"
            timeline="8-16 weeks"
            icon="🤖"
          />
          
          <AIServiceCard
            title="Computer Vision Solutions"
            description="Image and video analysis with deep learning models"
            features={[
              "Object detection & recognition",
              "Image classification",
              "OCR & text extraction",
              "Video analysis & tracking",
              "Custom model training",
              "Real-time processing"
            ]}
            pricing="$18k - $55k"
            timeline="6-14 weeks"
            icon="👁️"
          />
          
          <AIServiceCard
            title="Natural Language Processing"
            description="Advanced text analysis and language understanding systems"
            features={[
              "Sentiment analysis",
              "Named entity recognition",
              "Text summarization",
              "Language translation",
              "Intent classification",
              "Custom model training"
            ]}
            pricing="$12k - $40k"
            timeline="4-10 weeks"
            icon="💬"
          />
          
          <AIServiceCard
            title="MLOps & Model Management"
            description="End-to-end machine learning operations and model lifecycle management"
            features={[
              "Model versioning & tracking",
              "Automated training pipelines",
              "A/B testing frameworks",
              "Model monitoring & drift detection",
              "Automated retraining",
              "Production deployment"
            ]}
            pricing="$30k - $80k"
            timeline="10-20 weeks"
            icon="⚙️"
          />
        </div>

        {/* AI Capabilities */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CapabilityItem
              title="Applied AI"
              capabilities={[
                "RAG over private data",
                "Task-specific agents",
                "Vision + speech processing",
                "Personalization engines",
                "Recommendation systems",
                "Predictive analytics"
              ]}
            />
            <CapabilityItem
              title="Model Operations"
              capabilities={[
                "Offline & online evaluations",
                "Safety & guardrails",
                "Batch & streaming inference",
                "Cost optimization",
                "Performance monitoring",
                "Automated scaling"
              ]}
            />
            <CapabilityItem
              title="Data & MLOps"
              capabilities={[
                "Data pipelines & ETL",
                "Feature stores",
                "Vector databases",
                "Model drift detection",
                "A/B testing",
                "Continuous integration"
              ]}
            />
            <CapabilityItem
              title="Enterprise Integration"
              capabilities={[
                "API development",
                "Security & compliance",
                "Multi-cloud deployment",
                "Legacy system integration",
                "Custom dashboards",
                "24/7 monitoring"
              ]}
            />
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry-Specific AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCard
              title="Healthcare AI"
              description="Medical diagnosis, drug discovery, and patient care optimization"
              features={["Medical image analysis", "Clinical decision support", "Drug interaction detection", "Patient risk assessment"]
              pricing="$40k - $100k"
              icon="🏥"
            />
            <IndustryCard
              title="Financial AI"
              description="Fraud detection, risk assessment, and algorithmic trading"
              features={["Real-time fraud detection", "Credit risk modeling", "Algorithmic trading", "Regulatory compliance"]
              pricing="$35k - $90k"
              icon="💳"
            />
            <IndustryCard
              title="E-commerce AI"
              description="Personalized recommendations, inventory optimization, and customer service"
              features={["Product recommendations", "Demand forecasting", "Chatbot automation", "Price optimization"]
              pricing="$25k - $70k"
              icon="🛒"
            />
            <IndustryCard
              title="Manufacturing AI"
              description="Predictive maintenance, quality control, and supply chain optimization"
              features={["Predictive maintenance", "Quality inspection", "Supply chain optimization", "Energy efficiency"]
              pricing="$30k - $80k"
              icon="🏭"
            />
            <IndustryCard
              title="Education AI"
              description="Personalized learning, automated grading, and student success prediction"
              features={["Adaptive learning paths", "Automated assessment", "Student performance prediction", "Content generation"]
              pricing="$20k - $60k"
              icon="🎓"
            />
            <IndustryCard
              title="Legal AI"
              description="Document analysis, contract review, and legal research automation"
              features={["Contract analysis", "Legal research", "Document classification", "Compliance monitoring"]
              pricing="$35k - $85k"
              icon="⚖️"
            />
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AIPricingCard
              name="AI Discovery"
              price="$5k - $12k"
              duration="2-3 weeks"
              features={[
                "Use-case analysis & design",
                "Technology stack selection",
                "Data requirements assessment",
                "Implementation roadmap",
                "Proof-of-concept development",
                "ROI projections"
              ]}
              recommended={false}
            />
            <AIPricingCard
              name="AI Pilot"
              price="$15k - $45k"
              duration="4-8 weeks"
              features={[
                "RAG/Agent MVP development",
                "Model evaluation & testing",
                "Safety & guardrails implementation",
                "Performance dashboards",
                "Integration with existing systems",
                "User feedback collection"
              ]}
              recommended={true}
            />
            <AIPricingCard
              name="AI Production"
              price="$50k+"
              duration="12+ weeks"
              features={[
                "Production-ready infrastructure",
                "Advanced monitoring & alerting",
                "SLA guarantees & support",
                "Cost optimization",
                "Security & compliance",
                "Scalability & performance tuning"
              ]}
              recommended={false}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your AI needs and create a custom solution that delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function AIServiceCard({ title, description, features, pricing, timeline, icon }: {
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { Metadata } from 'next';
import Link from 'next/link';
=======
import Link from "next/link";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

export const metadata = {
  title: "AI Services | Zion Tech Group - Advanced AI Solutions & Machine Learning",
  description: "Comprehensive AI services including custom LLM development, RAG systems, computer vision, NLP, predictive analytics, and enterprise AI integration. Expert AI solutions with 99.9% accuracy and 24/7 support.",
=======
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "AI Services & Solutions | Zion Tech Group",
  description:
    "Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.",
  keywords: "AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting",
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
=======
import { Metadata } from 'next';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import Link from 'next/link';

export const metadata: Metadata = {
<<<<<<< HEAD
export const metadata = {
  title: 'AI Services | Zion Tech Group',
<<<<<<< HEAD
  description: 'Enterprise-grade AI solutions including RAG systems, conversational AI, predictive analytics, and computer vision applications.'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Services | Zion Tech Group - Comprehensive AI Solutions',
  description: 'Complete AI services including machine learning, natural language processing, computer vision, and AI automation. Transform your business with cutting-edge artificial intelligence.',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};
=======

import React from 'react';
import Link from 'next/link';


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ea63

<<<<<<< HEAD
interface AIServiceProps {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  title: string;
  description: string;
  price: string;
  features: string[];
  useCases: string[];
  icon: string;
  href: string;
}

<<<<<<< HEAD
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
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
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
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Development Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="AI Discovery" 
          price="$5k–$12k" 
          duration="2–3 weeks"
          features={[
            "Use-case analysis & design",
            "Technology stack selection",
            "Data requirements assessment",
            "AI feasibility study",
            "Implementation roadmap",
            "Proof of concept demo"
          ]} 
        />
        <Plan 
          name="AI Pilot" 
          price="$15k–$45k" 
          duration="4–8 weeks"
          features={[
            "RAG/Agent MVP development",
            "Model evaluation & safety",
            "Performance dashboards",
            "Integration testing",
            "User feedback collection",
            "Iteration & optimization"
          ]} 
        />
        <Plan 
          name="Production AI" 
          price="$50k+" 
          duration="12+ weeks"
          features={[
            "Hardened production infrastructure",
            "Advanced monitoring & alerting",
            "SLA guarantees & support",
            "Cost optimization",
            "Security & compliance",
            "Dedicated AI team"
          ]} 
        />
      </div>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
function ContactSection() {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function AITechStack({ title, technologies }: { 
  title: string; 
  technologies: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndustryUseCase({ title, description, examples, icon }: { 
  title: string; 
  description: string; 
  examples: string[]; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
=======
function AIService({ title, description, price, features, useCases, icon, href }: AIServiceProps) {
=======
export default function AIServicesPage() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  return (
<<<<<<< HEAD
    <div className="animate-fade-in">
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
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <ul className="text-gray-600 space-y-2">
        {examples.map((example) => (
          <li key={example} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {example}
          </li>
        ))}
      </ul>
=======
      </section>
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c

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
<<<<<<< HEAD
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
        </div>
      </section>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    </div>
  );
}

function AIServiceCard({
  title,
  description,
  features,
  pricing,
  icon,
  href
}: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
  href: string;
}) {
=======
import React from "react";

export const metadata = {
  title: "AI Services & Solutions | Zion Tech Group",
  description:
    "Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.",
  keywords:
    "AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting",
};

interface AIServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  useCases: string[];
  icon: string;
  href: string;
}

function AIService({
  title,
  description,
  price,
  features,
  useCases,
  icon,
  href,
}: AIServiceProps) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  return (
    <a
      href={href}
<<<<<<< HEAD
      className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
=======
      {/* AI Service Categories */}"
      <section className="py-16">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our AI Service Categories</h2>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard"
            title="AI Code Assistant""
            description="Intelligent code generation, debugging, and optimization powered by advanced AI.""
            href="/services/ai-code-assistant""
            icon="🤖""
            pricing="From $99/month""
            features={["Code generation", "Bug detection", "Performance optimization", "Learning assistance"]
          />
          <AIServiceCard"
            title="AI Social Media Scheduler""
            description="Intelligent social media scheduling with AI-powered content generation and optimal timing.""
            href="/services/ai-social-scheduler""
            icon="📱""
            pricing="From $49/month""
            features={["Content generation", "Optimal timing", "Performance analytics", "Cross-platform management"]
          />
          <AIServiceCard"
            title="AI Project Manager""
            description="Intelligent project management with AI-powered task automation and predictive analytics.""
            href="/services/ai-project-manager""
            icon="📊""
            pricing="From $199/month""
            features={["Task automation", "Predictive analytics", "Team optimization", "Smart scheduling"]
          />
          <AIServiceCard"
            title="AI Customer Support""
            description="Intelligent customer support automation with AI chatbots and sentiment analysis.""
            href="/services/ai-customer-support""
            icon="💬""
            pricing="From $299/month""
            features={["AI chatbots", "Sentiment analysis", "Multilingual support", "Smart routing"]
          />
          <AIServiceCard"
            title="AI Data Analytics""
            description="Advanced AI-powered data analytics with predictive modeling and real-time insights.""
            href="/services/ai-data-analytics""
            icon="📈""
            pricing="From $399/month""
            features={["Predictive analytics", "Real-time dashboards", "Automated insights", "Natural language queries"]
          />
          <AIServiceCard"
            title="AI Content Generator""
            description="AI-powered content creation for blogs, marketing materials, and social media posts.""
            href="/services/ai-content-generator""
            icon="✍️""
            pricing="From $149/month""
            features={["Blog writing", "Marketing copy", "Social media posts", "SEO optimization"]
          />
"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => ("
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            {feature}
          </li>
        ))}
      </ul>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    </div>
  );
}

<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

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
<<<<<<< HEAD
>>>>>>> origin/fix-website-loading-errors-final
=======

function CTASection() {
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">
          Key Features:
        </h4>
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
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {useCase}
            </span>
          ))}
        </div>
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </div>
<<<<<<< HEAD
=======
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    </Link>
  );
}

<<<<<<< HEAD
function IndustryCard({
  title,
  description,
  features,
  icon,
  pricing
}: {
  title: string;
  description: string;
  features: string[];
  icon: string;
  pricing: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3 text-sm">{description}</p>
      <ul className="space-y-1 mb-3">
        {features.map((feature, index) => (
          <li key={index} className="text-xs text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm font-semibold text-blue-600">{pricing}</div>
    </div>
  );
}

function ProcessStep({
  step,
  title,
  description,
  features
}: {
  step: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
            {feature}
=======
    </a>
  );
}

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta,
}: PricingTierProps) {
  return (
    <div
      className={`relative p-8 rounded-lg border-2 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"} shadow-lg`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Services - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

<<<<<<< HEAD
function TechCard({
  name,
  description
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
      <h4 className="font-semibold text-gray-900 mb-1">{name}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

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
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
import React from 'react';
import Link from 'next/link';

export const metadata = {
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default function AIServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
=======
<div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services & Solutions
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-16">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
          Harness the power of artificial intelligence to automate processes,
          gain insights, and transform your business with cutting-edge AI
          solutions.
=======
          Transform your business with cutting-edge artificial intelligence solutions. 
          From custom LLM development to computer vision, we deliver enterprise-grade AI that drives real results.
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
          Comprehensive artificial intelligence solutions to transform your business. From machine learning 
          to natural language processing, we deliver cutting-edge AI that drives real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get AI Consultation - Free
          </a>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
=======
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Schedule Demo
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </a>
        </div>
      </section>

<<<<<<< HEAD
      {/* Core AI Services */}
      <section className="py-12">
        <div className="text-center mb-12">
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our AI Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs, from
            chatbots to predictive analytics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIService
            title="AI Chatbot Platform"
            description="Intelligent conversational AI that understands context and provides human-like responses"
            price="Starting at $2,500"
            features={[
              "Natural language processing",
              "Multi-channel support",
              "Custom training data",
              "Analytics dashboard",
              "Integration APIs",
            ]}
            useCases={[
              "Customer Support",
              "Lead Generation",
              "FAQ Automation",
              "Sales Assistant",
            ]}
            icon="🤖"
            href="/services/ai-chatbot-platform"
          />
          <AIService
            title="AI Content Generator"
            description="Automated content creation using advanced language models for blogs, social media, and marketing"
            price="Starting at $1,500"
            features={[
              "GPT-4 integration",
              "SEO optimization",
              "Brand voice training",
              "Multi-format output",
              "Plagiarism detection",
            ]}
            useCases={[
              "Blog Writing",
              "Social Media",
              "Email Campaigns",
              "Product Descriptions",
            ]}
            icon="✍️"
            href="/services/ai-content-generation"
          />
          <AIService
            title="AI Data Analytics"
            description="Predictive analytics and intelligent insights from your business data using machine learning"
            price="Starting at $3,000"
            features={[
              "Predictive modeling",
              "Anomaly detection",
              "Trend analysis",
              "Custom ML models",
              "Real-time insights",
            ]}
            useCases={[
              "Sales Forecasting",
              "Risk Assessment",
              "Customer Segmentation",
              "Performance Optimization",
            ]}
=======
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI services designed to accelerate your digital transformation and drive innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            icon="🧠"
            title="Custom LLM Development"
            description="Build and deploy large language models tailored to your specific business needs and use cases."
            features={[
              "Custom model training",
              "Fine-tuning for specific domains",
              "API integration",
              "Performance optimization",
<<<<<<< HEAD
              "Best practice recommendations",
              "CI/CD integration",
            ]}
            useCases={[
              "Code Quality",
              "Security Audits",
              "Performance Reviews",
              "Team Training",
            ]}
=======
              "Cost-effective deployment"
            ]}
            price="From $15,000"
          />
          <AIServiceCard
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            icon="🔍"
            title="RAG Systems"
            description="Retrieval-Augmented Generation systems that combine knowledge bases with LLMs for accurate, contextual responses."
            features={[
<<<<<<< HEAD
              "Real-time transcription",
              "Meeting summaries",
              "Action item extraction",
              "Calendar integration",
              "Meeting analytics",
            ]}
            useCases={[
              "Meeting Notes",
              "Action Tracking",
              "Team Collaboration",
              "Client Meetings",
            ]}
            icon="🎤"
            href="/services/ai-meeting-assistant"
=======
              "Knowledge base integration",
              "Vector database setup",
              "Context-aware responses",
              "Real-time data updates",
              "Custom embeddings"
            ]}
            price="From $8,000"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          />
          <AIServiceCard
            icon="🤖"
            title="AI Agents & Automation"
            description="Intelligent agents that automate complex workflows and decision-making processes."
            features={[
<<<<<<< HEAD
              "Customer segmentation",
              "Behavior prediction",
              "Personalized recommendations",
              "Churn prediction",
              "ROI analysis",
            ]}
            useCases={[
              "Customer Retention",
              "Personalization",
              "Marketing Optimization",
              "Sales Enhancement",
            ]}
            icon="👥"
            href="/services/ai-customer-insights"
=======
              "Workflow automation",
              "Decision trees",
              "Multi-agent systems",
              "Integration with existing tools",
              "Continuous learning"
            ]}
            price="From $12,000"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          />
          <AIServiceCard
            icon="👁️"
            title="Computer Vision"
            description="Advanced image and video analysis solutions for object detection, recognition, and processing."
            features={[
              "Object detection",
              "Image classification",
              "Facial recognition",
              "Video analysis",
              "Real-time processing",
            ]}
            useCases={[
              "Quality Control",
              "Security Systems",
              "Medical Imaging",
              "Retail Analytics",
            ]}
<<<<<<< HEAD
            icon="👁️"
            href="/services/computer-vision-solutions"
=======
            price="From $10,000"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          />
          <AIServiceCard
            icon="🔧"
            title="MLOps & Model Deployment"
            description="End-to-end machine learning operations including model training, deployment, and monitoring."
            features={[
<<<<<<< HEAD
              "OCR text extraction",
              "Document classification",
              "Data validation",
              "Workflow automation",
              "Multi-format support",
            ]}
            useCases={[
              "Invoice Processing",
              "Contract Analysis",
              "Data Entry",
              "Compliance",
            ]}
            icon="📄"
            href="/services/ai-document-processor"
=======
              "Model versioning",
              "Automated training pipelines",
              "A/B testing",
              "Performance monitoring",
              "Scalable deployment"
            ]}
            price="From $20,000"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          />
          <AIServiceCard
            icon="💬"
            title="Natural Language Processing"
            description="Text analysis, sentiment analysis, and language understanding solutions for your applications."
            features={[
<<<<<<< HEAD
              "Subject line optimization",
              "Content personalization",
              "Send time optimization",
              "A/B testing automation",
              "Performance analytics",
            ]}
            useCases={[
              "Email Marketing",
              "Campaign Optimization",
              "Personalization",
              "Engagement",
            ]}
            icon="📧"
            href="/services/ai-email-optimizer"
=======
              "Sentiment analysis",
              "Text classification",
              "Named entity recognition",
              "Language translation",
              "Text summarization"
            ]}
            price="From $6,000"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          />
        </div>
      </section>

<<<<<<< HEAD
      {/* AI Technologies */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI Technologies We Use
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge AI technologies and frameworks to deliver
            state-of-the-art solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            {
              name: "OpenAI GPT",
              icon: "🧠",
              description: "Large Language Models",
            },
            { name: "TensorFlow", icon: "🔧", description: "Machine Learning" },
            { name: "PyTorch", icon: "🔥", description: "Deep Learning" },
            { name: "Hugging Face", icon: "🤗", description: "NLP Models" },
            { name: "OpenCV", icon: "👁️", description: "Computer Vision" },
            { name: "LangChain", icon: "⛓️", description: "LLM Applications" },
            { name: "Pinecone", icon: "🌲", description: "Vector Database" },
            { name: "Weaviate", icon: "🔍", description: "Vector Search" },
            { name: "MLflow", icon: "📊", description: "ML Lifecycle" },
            { name: "Kubeflow", icon: "☸️", description: "ML Pipelines" },
            { name: "Ray", icon: "⚡", description: "Distributed ML" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
          ].map((tech, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Process */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our AI Development Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology to ensure your AI solutions are
            robust, scalable, and deliver real business value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery & Strategy",
              description:
                "We analyze your business needs and create a comprehensive AI strategy with clear objectives and success metrics.",
            },
            {
              step: "02",
              title: "Data Preparation",
              description:
                "We assess your data quality, prepare datasets, and implement data pipelines for optimal AI model training.",
            },
            {
              step: "03",
              title: "Model Development",
              description:
                "We develop, train, and validate AI models using state-of-the-art techniques and frameworks.",
            },
            {
              step: "04",
              title: "Deployment & Monitoring",
              description:
                "We deploy your AI solution to production and implement monitoring systems for continuous optimization.",
            },
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {phase.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {phase.title}
              </h3>
              <p className="text-gray-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI Services Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible pricing options for AI services. Choose the plan that fits
            your project needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Discovery"
            price="$5,000"
            period="project"
            description="AI strategy and proof of concept"
            features={[
              "Business analysis",
              "AI strategy development",
              "Proof of concept",
              "Technology selection",
              "Project roadmap",
            ]}
            cta="Get Started"
          />
          <PricingTier
            name="Development"
            price="$25,000"
            period="project"
            description="Most popular for AI implementation"
            features={[
              "Custom AI model development",
              "Data preparation",
              "Model training & validation",
              "Integration & deployment",
              "3 months support",
            ]}
            popular={true}
            cta="Get Started"
          />
          <PricingTier
            name="Enterprise"
            price="$100,000"
            period="project"
            description="Complete AI transformation"
            features={[
              "Custom AI platform",
              "Advanced ML pipelines",
              "Scalable infrastructure",
              "Dedicated AI team",
              "12 months support",
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses transform their operations with AI
            solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              company: "E-commerce Platform",
              industry: "Retail",
              result: "40% increase in conversion",
              description:
                "Implemented AI-powered recommendation engine that increased conversion rates by 40% and average order value by 25%.",
            },
            {
              company: "Financial Services",
              industry: "Finance",
              result: "95% fraud detection accuracy",
              description:
                "Deployed AI fraud detection system that achieved 95% accuracy in identifying fraudulent transactions, reducing losses by $2M annually.",
            },
            {
              company: "Healthcare Provider",
              industry: "Healthcare",
              result: "30% faster diagnosis",
              description:
                "Developed AI diagnostic assistant that reduced diagnosis time by 30% and improved accuracy by 15% for radiology assessments.",
            },
          ].map((story, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <div className="text-sm text-blue-600 font-semibold mb-2">
                {story.industry}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {story.company}
              </h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="text-2xl font-bold text-green-600">
                {story.result}
              </div>
            </div>
          ))}
        </div>
      </section>

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how AI can solve your specific business challenges and
          drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Services Consultation"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com</p>
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

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
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
=======
        </section>
=======
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
          /></IndustryCard>
          <IndustryCard
            icon="🛒"
            title="E-commerce"
            description="AI-powered recommendation engines, inventory optimization, and customer analytics."
            solutions={["Recommendation engines", "Inventory optimization", "Customer analytics", "Price optimization"]
          /></IndustryCard>
          <IndustryCard
            icon="🏥"
            title="Healthcare"
            description="AI solutions for medical diagnosis, drug discovery, and patient care optimization."
            solutions={["Medical diagnosis", "Drug discovery", "Patient monitoring", "Treatment optimization"]
          /></IndustryCard>
          <IndustryCard
            icon="🏭"
            title="Manufacturing"
            description="AI for predictive maintenance, quality control, and supply chain optimization."
            solutions={["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"]
          /></IndustryCard>
          <IndustryCard
            icon="🎓"
            title="Education"
            description="AI-powered personalized learning, student assessment, and educational content generation."
            solutions={["Personalized learning", "Student assessment", "Content generation", "Learning analytics"]
          /></IndustryCard>
          <IndustryCard
            icon="🏠"
            title="Real Estate"
            description="AI solutions for property valuation, market analysis, and investment optimization."
            solutions={["Property valuation", "Market analysis", "Investment optimization", "Property matching"]
          /></IndustryCard>
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 text-gray-600 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            {feature}
          </li>
        ))}
      </ul>
<<<<<<< HEAD
      <div className="text-lg font-semibold text-blue-600 mb-4">{price}</div>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Service: {title}"
        className="w-full block text-center py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Quote
      </a>
    </div>
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
      <div className="text-lg font-semibold text-gray-900">{pricing}</div>
    </div>
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  return ("
    <div className="text-center bg-white p-4 rounded-lg shadow-md border border-gray-200">"
      <div className="text-3xl mb-2">{icon}</div>"
      <div className="text-sm font-semibold text-gray-900">{name}</div>
    </div>
  );

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export default function AIServicesPage() {
  const services = [
    {
      title: 'Custom LLM Development',
      description: 'Build and deploy custom large language models tailored to your specific business needs.',
      features: ['Fine-tuned models', 'Custom training data', 'API integration', 'Performance optimization']
    },
    {
      title: 'RAG Systems',
      description: 'Retrieval-Augmented Generation systems that combine your data with AI for accurate responses.',
      features: ['Vector databases', 'Semantic search', 'Context-aware responses', 'Real-time updates']
    },
    {
      title: 'AI Agents',
      description: 'Intelligent agents that can perform complex tasks and interact with your systems autonomously.',
      features: ['Task automation', 'Multi-step workflows', 'Human-in-the-loop', 'Continuous learning']
    },
    {
      title: 'Computer Vision',
      description: 'Advanced image and video analysis solutions for various business applications.',
      features: ['Object detection', 'Image classification', 'Video analysis', 'Real-time processing']
    },
    {
      title: 'MLOps Solutions',
      description: 'Complete machine learning operations pipeline for model deployment and monitoring.',
      features: ['Model versioning', 'Automated deployment', 'Performance monitoring', 'A/B testing']
    },
    {
      title: 'AI Consulting',
      description: 'Strategic guidance on AI implementation and digital transformation initiatives.',
      features: ['AI strategy', 'Technology assessment', 'Implementation planning', 'Team training']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed for enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Our AI Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Our AI specialists have years of experience in machine learning and deep learning.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">We deliver AI solutions quickly without compromising on quality or performance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Secure & Scalable</h3>
              <p className="text-gray-300">Enterprise-grade security and scalability built into every solution.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss your AI needs and create a custom solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
=======
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


export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI services and solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link href="/services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              View All Services
            </Link>
          </div>
<<<<<<< HEAD

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your ai services requirements 
              and get a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
<<<<<<< HEAD

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
