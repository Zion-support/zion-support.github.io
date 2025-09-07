import React from 'react';

export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including RAG, agents, fine-tuning, evals, and MLOps. From discovery to production deployment.'
};

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
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

export default function AIServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps. From discovery to production deployment.
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

      {/* Core AI Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs, from RAG systems to production deployment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </section>

      {/* Specialized AI Solutions */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized AI Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready-to-deploy AI applications that solve real business problems.
          </p>
        </div>
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
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits your AI needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-2">AI Discovery</h4>
            <div className="text-3xl font-bold text-blue-600 mb-4">$5k–$12k</div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> 2–3 weeks
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Use-case design
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Tech selection
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Roadmap
              </li>
            </ul>
            <a 
              href="tel:+13024640950"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
            >
              Get Started
            </a>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Pilot</h4>
            <div className="text-3xl font-bold text-blue-600 mb-4">$15k–$45k</div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> 4–8 weeks
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> RAG/agent MVP
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Evals + safety
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Dashboards
              </li>
            </ul>
            <a 
              href="tel:+13024640950"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
            >
              Get Started
            </a>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Production</h4>
            <div className="text-3xl font-bold text-blue-600 mb-4">$50k+</div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Hardened infra
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Monitoring
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> SLAs
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Cost optimization
              </li>
            </ul>
            <a 
              href="tel:+13024640950"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
            >
              Get Started
            </a>
          </div>
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
