import Link from 'next/link';

<<<<<<< HEAD
<<<<<<< HEAD
=======
import Link from 'next/link';

>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
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
<<<<<<< HEAD
          <Link
            href="/services"
=======
          <Link 
            href="/services" 
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus-visible:focus"
          >
            Explore Services
          </Link>
<<<<<<< HEAD
<<<<<<< HEAD
          <a
            href="https://ziontechgroup.com"
=======
          <a 
            href="https://ziontechgroup.com" 
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
          <a 
            href="https://ziontechgroup.com" 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors focus-visible:focus"
          >
            Visit Main Site
          </a>
        </div>
      </section>

      <section className="py-12">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Micro SaaS"
            href="/services/micro-saas"
            description="End-to-end product engineering with billing, auth, analytics and growth."
            icon="🚀"
<<<<<<< HEAD
=======
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title="Micro SaaS" 
            href="/services/micro-saas" 
            description="End-to-end product engineering with billing, auth, analytics and growth." 
            icon="🚀" 
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          />
          <Card
            title="AI Services"
            href="/services/ai-services"
            description="LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps."
            icon="🤖"
          />
<<<<<<< HEAD
          <Card
            title="IT Services"
            href="/services/it-services"
            description="Cloud migration, DevOps, SRE, security hardening and cost optimization."
            icon="⚙️"
          />
          <Card
            title="Blockchain Solutions"
            href="/services/blockchain-solutions"
            description="DeFi protocols, NFTs, smart contracts, and Web3 applications."
            icon="⛓️"
          />
          <Card
            title="Automation Solutions"
            href="/services/automation-solutions"
            description="RPA, workflow automation, and AI-powered business process optimization."
            icon="⚡"
          />
          <Card
            title="Data Analytics"
            href="/services/data-analytics"
            description="Business intelligence, predictive analytics, and data engineering solutions."
            icon="📊"
=======
          <Card 
            title="IT Services" 
            href="/services/it-services" 
            description="Cloud migration, DevOps, SRE, security hardening and cost optimization." 
            icon="⚙️" 
<<<<<<< HEAD
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
<<<<<<< HEAD
<<<<<<< HEAD
          <FeatureCard
            title="Fast Delivery"
            description="Rapid prototyping and deployment with modern tools and practices."
=======
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          <FeatureCard 
            title="Fast Delivery" 
            description="Rapid prototyping and deployment with modern tools and practices." 
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
          />
          <FeatureCard
            title="Scalable Architecture"
            description="Built for growth with cloud-native, microservices architecture."
          />
          <FeatureCard
            title="24/7 Support"
            description="Round-the-clock monitoring and support for your critical systems."
          />
<<<<<<< HEAD
          <FeatureCard
            title="Cost Effective"
            description="Optimized solutions that reduce operational costs and improve efficiency."
=======
          <FeatureCard 
            title="Cost Effective" 
            description="Optimized solutions that reduce operational costs and improve efficiency." 
<<<<<<< HEAD
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          />
        </div>
      </section>
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
function Card({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) {
  return (
    <Link
      href={href}
=======
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
function Card({ title, description, href, icon }: { 
  title: string; 
  description: string; 
  href: string; 
  icon: string; 
}) {
  return (
    <Link 
      href={href} 
<<<<<<< HEAD
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Link>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
function FeatureCard({ title, description }: { title: string; description: string }) {
=======
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
function FeatureCard({ title, description }: { 
  title: string; 
  description: string; 
}) {
<<<<<<< HEAD
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
