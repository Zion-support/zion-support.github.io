export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Build and scale with{' '}
          <span className="text-blue-600">AI</span>,{' '}
          <span className="text-green-600">Micro SaaS</span>{' '}
          and{' '}
          <span className="text-purple-600">Enterprise IT</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We design, build and operate production-grade platforms: AI copilots, data/ML pipelines, automation, cloud infra, and secure micro SaaS products.
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
            title="AI Services"
            href="/services/ai-services"
            description="LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps."
            icon="🤖"
            title="IT Services"
            href="/services/it-services"
            description="Cloud migration, DevOps, SRE, security hardening and cost optimization."
            icon="⚙️"
            title="Blockchain"
            href="/services/blockchain"
            description="Smart contracts, DeFi protocols, NFT platforms and Web3 solutions."
            icon="⛓️"
            title="Cybersecurity"
            href="/services/cybersecurity"
            description="Penetration testing, security audits, compliance and incident response."
            icon="🔒"
            title="Data Analytics"
            href="/services/data-analytics"
            description="Business intelligence, predictive analytics and data science solutions."
            icon="📊"

            title="Business Automation"
            href="/services/automation-tools"
            description="Intelligent automation tools that streamline operations and boost productivity by 300%."
            icon="⚡"
            title="AI Copilots"
            href="/services/ai-copilots"
            description="Intelligent assistants that enhance productivity and automate complex tasks."
            icon="🧠"
            description="Advanced analytics and BI solutions that transform data into actionable insights."
            title="AI-Powered CRM"
            href="/services/ai-powered-crm"
            description="Revolutionary CRM with AI automation that boosts sales by 300% and predicts customer behavior."
            icon="🎯"
            title="AI Content Optimizer"
            href="/services/ai-content-optimizer"
            description="AI-powered content creation that increases engagement by 400% and automates SEO optimization."
            icon="✍️"
            title="Cybersecurity Suite"
            href="/services/cybersecurity-suite"
            description="Enterprise-grade security solutions with 24/7 monitoring and threat detection."

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Fast Delivery"
            description="Rapid prototyping and deployment with modern tools and practices."
            title="Scalable Architecture"
            description="Built for growth with cloud-native, microservices architecture."
            title="24/7 Support"
            description="Round-the-clock monitoring and support for your critical systems."
            title="Cost Effective"
            description="Optimized solutions that reduce operational costs and improve efficiency."
  );
}

function Card({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) {
      href={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>

function FeatureCard({ title, description }: { title: string; description: string }) {
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
