import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We build AI-powered micro SaaS solutions and provide comprehensive IT services 
          to help businesses scale, automate, and succeed in the digital age.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/services" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus-visible:focus"
          >
            Explore Services
          </Link>
          <a 
            href="https://ziontechgroup.com" 
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors focus-visible:focus"
          >
            Visit Main Site
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Micro SaaS"
            href="/services/micro-saas"
            description="End-to-end product engineering with billing, auth, analytics and growth."
            icon="🚀"
          />
          <Card 
            title="AI Services" 
            href="/services/ai-services" 
            description="LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps." 
            icon="🤖" 
          />
          <Card 
            title="IT Services" 
            href="/services/it-services" 
            description="Cloud migration, DevOps, SRE, security hardening and cost optimization." 
            icon="⚙️" 
          />
          <Card
            title="Business Automation"
            href="/services/automation-tools"
            description="Intelligent automation tools that streamline operations and boost productivity by 300%."
            icon="⚡"
          />
          <Card
            title="AI Copilots"
            href="/services/ai-copilots"
            description="Intelligent assistants that enhance productivity and automate complex tasks."
            icon="🧠"
          />
          <Card
            title="Data Analytics"
            href="/services/data-analytics"
            description="Advanced analytics and BI solutions that transform data into actionable insights."
            icon="📊"
          />
          <Card
            title="AI Code Reviewer"
            href="/services/ai-code-reviewer"
            description="Automated code review and quality analysis powered by AI with 99% accuracy."
            icon="🔍"
          />
          <Card
            title="Invoice Automation"
            href="/services/invoice-automation"
            description="Automate invoice processing, approval workflows, and payment tracking."
            icon="🧾"
          />
          <Card
            title="AI Meeting Assistant"
            href="/services/ai-meeting-assistant"
            description="Transform meetings with AI transcription, action items, and intelligent insights."
            icon="🎤"
          />
          <Card
            title="API Testing Suite"
            href="/services/api-testing-suite"
            description="Comprehensive API testing platform with automated testing and monitoring."
            icon="🧪"
          />
          <Card
            title="AI Customer Insights"
            href="/services/ai-customer-insights"
            description="Unlock customer behavior insights with AI-powered analytics and predictive modeling."
            icon="🧠"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            title="Fast Delivery" 
            description="Rapid prototyping and deployment with modern tools and practices." 
          />
          <FeatureCard 
            title="Scalable Architecture" 
            description="Built for growth with cloud-native, microservices architecture." 
          />
          <FeatureCard 
            title="24/7 Support" 
            description="Round-the-clock monitoring and support for your critical systems." 
          />
          <FeatureCard 
            title="Cost Effective" 
            description="Optimized solutions that reduce operational costs and improve efficiency." 
          />
        </div>
      </section>
    </div>
  );
}

function Card({ title, description, href, icon }: { 
  title: string; 
  description: string; 
  href: string; 
  icon: string; 
}) {
  return (
    <Link 
      href={href} 
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Link>
  );
}

function FeatureCard({ title, description }: { 
  title: string; 
  description: string; 
}) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}