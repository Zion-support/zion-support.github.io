import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Build and scale with{' '}
          <span className="text-blue-600">AI</span>,{' '}
          <span className="text-green-600">Micro SaaS</span>{' '}
          and{' '}
          <span className="text-purple-600">Enterprise IT</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We design, build and operate production-grade platforms: AI copilots, data/ML pipelines, 
          automation, cloud infrastructure, and secure micro SaaS products. Trusted by 500+ companies worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
          <Link
            href="/services"
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-7da4
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus-visible:focus"
          >
            Explore Services
          </Link>
<<<<<<< HEAD
          <a
            href="https://ziontechgroup.com"
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-7da4
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors focus-visible:focus"
          >
            Visit Main Site
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-7da4
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-7da4
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real business value. 
            Our team has delivered 1000+ successful projects across various industries.
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
          <div className="mt-6 text-sm text-gray-600">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}

<<<<<<< HEAD
function Card({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) {
  return (
    <Link
      href={href}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-7da4
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Link>
  );
}

<<<<<<< HEAD
function FeatureCard({ title, description }: { title: string; description: string }) {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-7da4
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}