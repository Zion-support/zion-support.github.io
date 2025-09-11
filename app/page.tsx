import Link from 'next/link';

function Card({ title, href, description, icon }: { title: string; href: string; description: string; icon: string }) {
  return (
    <Link
      href={href}
      className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Enterprise-Grade AI & Technology Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We deliver intelligent solutions that transform how businesses operate. 
            From AI-powered automation to custom micro SaaS applications, we drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive technology solutions for modern businesses</p>
          </div>
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
              description="Transform raw data into actionable insights with advanced analytics and visualization."
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">We deliver results that matter</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our technology solutions can drive your business forward.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}