import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10"></div>
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            🚀 Trusted by 500+ companies worldwide
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Build and scale with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI</span>,{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Micro SaaS</span>{' '}
            and{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Enterprise IT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            We design, build and operate production-grade platforms: AI copilots, data/ML pipelines, automation, cloud infra, and secure micro SaaS products that drive real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/services"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Services
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/contact"
              className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              title="Micro SaaS"
              href="/services/micro-saas"
              description="End-to-end product engineering with billing, auth, analytics and growth."
              icon="🚀"
              features={["Full-stack development", "Payment integration", "User management", "Analytics dashboard"]}
            />
            <Card
              title="AI Services"
              href="/services/ai-services"
              description="LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps."
              icon="🤖"
              features={["Custom AI models", "RAG systems", "ML pipelines", "Model deployment"]}
            />
            <Card
              title="IT Services"
              href="/services/it-services"
              description="Cloud migration, DevOps, SRE, security hardening and cost optimization."
              icon="⚙️"
              features={["Cloud migration", "DevOps automation", "Security audits", "Cost optimization"]}
            />
            <Card
              title="Emerging Tech"
              href="/services/emerging-tech"
              description="Quantum Computing, IoT, AR/VR, and next-generation solutions."
              icon="⚛️"
              features={["Quantum computing", "IoT platforms", "AR/VR apps", "Blockchain solutions"]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results and measurable impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="⚡"
              title="Fast Delivery"
              description="Rapid prototyping and deployment with modern tools and practices. Get to market 3x faster."
            />
            <FeatureCard
              icon="🏗️"
              title="Scalable Architecture"
              description="Built for growth with cloud-native, microservices architecture that scales with your business."
            />
            <FeatureCard
              icon="🛡️"
              title="24/7 Support"
              description="Round-the-clock monitoring and support for your critical systems with 99.9% uptime SLA."
            />
            <FeatureCard
              icon="💰"
              title="Cost Effective"
              description="Optimized solutions that reduce operational costs by up to 40% while improving efficiency."
            />
          </div>
          
          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300% and reduced costs by 40%."
                author="Sarah Johnson"
                role="CEO, TechStart Inc."
                avatar="SJ"
              />
              <TestimonialCard
                quote="The cybersecurity implementation was flawless. We've had zero security incidents since working with Zion Tech."
                author="Michael Chen"
                role="CTO, DataFlow Systems"
                avatar="MC"
              />
              <TestimonialCard
                quote="Outstanding service and technical expertise. They delivered our micro SaaS platform ahead of schedule and under budget."
                author="Emily Rodriguez"
                role="VP Operations, CloudFirst"
                avatar="ER"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ title, description, href, icon, features }: { 
  title: string; 
  description: string; 
  href: string; 
  icon: string; 
  features?: string[] 
}) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-2"
    >
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
        Learn more →
      </div>
    </Link>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role, avatar }: { 
  quote: string; 
  author: string; 
  role: string; 
  avatar: string 
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="text-gray-600 italic mb-4 leading-relaxed">"{quote}"</div>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
          {avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  );
}