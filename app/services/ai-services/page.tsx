<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

interface AIServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  useCases: string[];
  icon: string;
  href: string;
}
=======

export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including RAG, agents, fine-tuning, evals, and MLOps. From discovery to production deployment.'
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef

function AIService({ title, description, price, features, useCases, icon, href }: AIServiceProps) {
  return (
<<<<<<< HEAD
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-lg font-bold text-blue-600">{price}</div>
=======
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
      <p className="text-xl text-gray-600 mb-12">Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Applied AI" 
          details={[
            "RAG over private data",
            "Task-specific agents",
            "Vision + speech",
            "Personalization"
          ]} 
        />
        <Item 
          title="Model Ops" 
          details={[
            "Offline evals",
            "Safety + guardrails",
            "Batch + streaming",
            "Cost controls"
          ]} 
        />
        <Item 
          title="Data & MLOps" 
          details={[
            "Pipelines",
            "Feature stores",
            "Vector DBs",
            "Monitoring + drift"
          ]} 
        />
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            href="/services/computer-vision-solutions"
            title="Computer Vision"
            description="Transform your business with AI-powered visual analysis and recognition"
            bullets={["Object detection", "Image processing", "Video analytics"]}
            icon="👁️"
          />
          <ServiceCard
            href="/services/natural-language-processing"
            title="Natural Language Processing"
            description="Unlock the power of text with advanced NLP and language understanding"
            bullets={["Text analysis", "Content processing", "Language generation"]}
            icon="📝"
          />
          <ServiceCard
            href="/services/predictive-analytics"
            title="Predictive Analytics"
            description="Forecast the future with AI-powered predictions and trend analysis"
            bullets={["Sales forecasting", "Risk assessment", "Business intelligence"]}
            icon="🔮"
          />
          <ServiceCard
            href="/services/chatbot-development"
            title="Chatbot Development"
            description="Build intelligent chatbots with natural language understanding"
            bullets={["AI conversations", "Multi-platform", "Advanced features"]}
            icon="🤖"
          />
          <ServiceCard
            href="/services/voice-recognition"
            title="Voice Recognition"
            description="Transform speech into actionable data with advanced voice processing"
            bullets={["Speech-to-text", "Voice commands", "Voice analytics"]}
            icon="🎤"
          />
          <ServiceCard
            href="/services/document-processing-automation"
            title="Document Processing"
            description="Automate document workflows with AI-powered processing and extraction"
            bullets={["Data extraction", "Classification", "Process automation"]}
            icon="📄"
          />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
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
<<<<<<< HEAD
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
            title="AI Chatbot Platform"
            description="Intelligent conversational AI that understands context and provides human-like responses"
            price="Starting at $2,500"
            features={[
              "Natural language processing",
              "Multi-channel support",
              "Custom training data",
              "Analytics dashboard",
              "Integration APIs"
            ]}
            useCases={["Customer Support", "Lead Generation", "FAQ Automation", "Sales Assistant"]}
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
              "Plagiarism detection"
            ]}
            useCases={["Blog Writing", "Social Media", "Email Campaigns", "Product Descriptions"]}
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
              "Real-time insights"
            ]}
            useCases={["Sales Forecasting", "Risk Assessment", "Customer Segmentation", "Performance Optimization"]}
            icon="🧠"
            href="/services/ai-data-analytics"
          />
          <AIService
            title="AI Code Reviewer"
            description="Automated code analysis and quality assurance with AI-powered suggestions and security scanning"
            price="Starting at $1,000"
            features={[
              "Code quality analysis",
              "Security vulnerability detection",
              "Performance optimization",
              "Best practice recommendations",
              "CI/CD integration"
            ]}
            useCases={["Code Quality", "Security Audits", "Performance Reviews", "Team Training"]}
            icon="🔍"
            href="/services/ai-code-reviewer"
          />
          <AIService
            title="AI Meeting Assistant"
            description="Intelligent meeting transcription, summarization, and action item extraction"
            price="Starting at $2,000"
            features={[
              "Real-time transcription",
              "Meeting summaries",
              "Action item extraction",
              "Calendar integration",
              "Meeting analytics"
            ]}
            useCases={["Meeting Notes", "Action Tracking", "Team Collaboration", "Client Meetings"]}
            icon="🎤"
            href="/services/ai-meeting-assistant"
          />
          <AIService
            title="AI Customer Insights"
            description="Customer behavior analysis and personalized recommendations using advanced AI algorithms"
            price="Starting at $2,500"
            features={[
              "Customer segmentation",
              "Behavior prediction",
              "Personalized recommendations",
              "Churn prediction",
              "ROI analysis"
            ]}
            useCases={["Customer Retention", "Personalization", "Marketing Optimization", "Sales Enhancement"]}
            icon="👥"
            href="/services/ai-customer-insights"
          />
        </div>
      </section>

      {/* Contact CTA */}
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
    </div>
  );
}
=======
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map(d => (
          <li key={d} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({
  href,
  title,
  description,
  bullets,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}) {
  return (
    <a
      href={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
    </a>
  );
}

function Pricing() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="AI Discovery" 
          price="$5k–$12k" 
          features={[
            "2–3 weeks",
            "Use-case design",
            "Tech selection",
            "Roadmap"
          ]} 
        />
        <Plan 
          name="Pilot" 
          price="$15k–$45k" 
          features={[
            "4–8 weeks",
            "RAG/agent MVP",
            "Evals + safety",
            "Dashboards"
          ]} 
        />
        <Plan 
          name="Production" 
          price="$50k+" 
          features={[
            "Hardened infra",
            "Monitoring",
            "SLAs",
            "Cost optimization"
          ]} 
        />
      </div>
    </div>
  );
}

function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map(f => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
