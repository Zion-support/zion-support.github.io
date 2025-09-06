<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';

<<<<<<< HEAD
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Link from 'next/link';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
=======
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Build and scale with{' '}
          <span className="text-blue-600">AI</span>,{' '}
          <span className="text-green-600">Micro SaaS</span>{' '}
          and{' '}
          <span className="text-purple-600">Enterprise IT</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
<<<<<<< HEAD
          We design, build and operate production-grade platforms: AI copilots, data/ML pipelines, 
          automation, cloud infrastructure, and secure micro SaaS products. Trusted by 500+ companies worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-7da4
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
}

<<<<<<< HEAD
function Card({ title, href, description, bullets, icon }: CardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
=======
function Card({ title, href, description, bullets = [], icon }: CardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
<<<<<<< HEAD
      <p className="text-gray-600 mb-4">{description}</p>
      {bullets && (
        <ul className="space-y-2 mb-6">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600 text-sm">{bullet}</span>
=======
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-1">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {bullet}
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
            </li>
          ))}
        </ul>
      )}
<<<<<<< HEAD
      <Link
        href={href}
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Learn More
      </Link>
    </div>
=======
    </Link>
  );
}

function ServiceCard({ title, href, description, bullets = [], icon }: CardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-1">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </Link>
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
  );
}

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with our comprehensive suite of intelligent services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 85f2cf8c8c24056eae9f08c57d2439681dc591f1
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
          We design, build and operate production-grade platforms: AI copilots, data/ML pipelines, automation, cloud infra, and secure micro SaaS products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/services" 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus-visible:focus"
          >
            Get Started
          </Link>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
          <a 
            href="https://ziontechgroup.com" 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          <a
            href="https://ziontechgroup.com"
            target="_blank"
            rel="noopener noreferrer"
<<<<<<< HEAD
>>>>>>> 85f2cf8c8c24056eae9f08c57d2439681dc591f1
=======
          <a
            href="https://ziontechgroup.com"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
          <a 
            href="https://ziontechgroup.com" 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors focus-visible:focus"
          >
            View Services
          </a>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-12">
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD

=======
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          <Card
            title="Micro SaaS"
            href="/services/micro-saas"
            description="End-to-end product engineering with billing, auth, analytics and growth."
            icon="🚀"
<<<<<<< HEAD
=======
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
          <Card 
            title="Micro SaaS" 
            href="/services/micro-saas" 
            description="End-to-end product engineering with billing, auth, analytics and growth." 
            icon="🚀" 
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
          />
          <Card
            title="Business Automation"
            href="/services/automation-tools"
            description="Intelligent automation tools that streamline operations and boost productivity by 300%."
            icon="⚡"
          />
<<<<<<< HEAD
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      {/* Featured Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for modern businesses, from AI-powered tools to complete IT infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Micro SaaS Solutions"
            href="/services/micro-saas"
            description="End-to-end product development with billing, auth, analytics and growth optimization"
            bullets={[
              "Custom SaaS development",
              "Payment integration",
              "User authentication",
              "Analytics dashboard",
              "API development"
            ]}
            icon="🚀"
          />
          <ServiceCard
            title="AI Services"
            href="/services/ai-services"
            description="Cutting-edge AI solutions for automation, analytics, and intelligent decision making"
            bullets={[
              "AI chatbots & assistants",
              "Machine learning models",
              "Natural language processing",
              "Computer vision",
              "Predictive analytics"
            ]}
            icon="🤖"
          />
          <ServiceCard
            title="IT Services"
            href="/services/it-services"
            description="Complete IT infrastructure, cloud migration, and digital transformation solutions"
            bullets={[
              "Cloud migration",
              "DevOps & CI/CD",
              "Infrastructure management",
              "Security solutions",
              "24/7 support"
            ]}
            icon="💻"
          />
          <Card
            title="Blockchain"
            href="/services/blockchain"
            description="Smart contracts, DeFi protocols, NFT platforms and Web3 solutions."
            icon="⛓️"
          />
          <Card
            title="Cybersecurity"
            href="/services/cybersecurity"
            description="Penetration testing, security audits, compliance and incident response."
            icon="🔒"
          />
          <Card
            title="Cloud Services"
            href="/services/cloud-services"
            description="Cloud migration, architecture, and optimization across AWS, Azure, and GCP."
            icon="☁️"
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
          <Card 
            title="IT Services" 
            href="/services/it-services" 
            description="Cloud migration, DevOps, SRE, security hardening and cost optimization." 
            icon="⚙️" 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
          <FeatureCard 
            title="Fast Delivery" 
            description="Rapid prototyping and deployment with modern tools and practices." 
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 85f2cf8c8c24056eae9f08c57d2439681dc591f1
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          <FeatureCard
            title="Fast Delivery"
            description="Rapid prototyping and deployment with modern tools and practices."
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-7da4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          <FeatureCard 
            title="Cost Effective" 
            description="Optimized solutions that reduce operational costs and improve efficiency." 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
          />
=======
          />
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Rapid development and deployment with agile methodologies</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Enterprise-grade security and 99.9% uptime guarantee</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
            <p className="text-gray-600">Tailored solutions that fit your specific business needs</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you achieve your technology goals
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
<<<<<<< HEAD
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 85f2cf8c8c24056eae9f08c57d2439681dc591f1
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
function Card({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) {
  return (
    <Link
      href={href}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-7da4
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
>>>>>>> 85f2cf8c8c24056eae9f08c57d2439681dc591f1
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Link>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
function FeatureCard({ title, description }: { 
  title: string; 
  description: string; 
}) {
<<<<<<< HEAD
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
<<<<<<< HEAD
<<<<<<< HEAD
function FeatureCard({ title, description }: { title: string; description: string }) {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-7da4
=======
function FeatureCard({ title, description }: { title: string; description: string }) {
>>>>>>> 85f2cf8c8c24056eae9f08c57d2439681dc591f1
=======
function FeatureCard({ title, description }: { title: string; description: string }) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
<<<<<<< HEAD
>>>>>>> origin/fix-website-loading-errors-final
=======
=======
=======
}
>>>>>>> 85f2cf8c8c24056eae9f08c57d2439681dc591f1
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
