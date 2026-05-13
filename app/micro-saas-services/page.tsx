import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Zap, Layers, Shield, BarChart3 } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { microSaasCatalog, groupMicroSaaSByCategory, microSaasCategories, microSaasTotal } from '../data/microSaasCatalog';

export const metadata: Metadata = {
  title: 'Micro SAAS Services | Zion Tech Group',
  description:
    'Browse ' + microSaasTotal + ' AI-powered micro-SaaS products. Rapid development, white-label solutions, and scalable deployment for startups and enterprises.',
  alternates: { canonical: '/micro-saas-services' },
};

const offerings = [
  {
    icon: Zap,
    title: 'Rapid Product Development',
    description:
      'Go from idea to launch in weeks, not months. We use proven frameworks, pre-built AI modules, and agile delivery to ship production-ready micro-SaaS products fast.',
  },
  {
    icon: Layers,
    title: 'AI-Powered Modules',
    description:
      'Integrate ready-made AI capabilities: chatbots, document processing, analytics, automation. No need to build from scratch — customize and deploy.',
  },
  {
    icon: Shield,
    title: 'White-Label & Custom Branding',
    description:
      'Deploy under your brand with full control over UX, pricing, and customer experience. We handle infrastructure, security, and compliance so you focus on growth.',
  },
  {
    icon: BarChart3,
    title: 'Scalable Architecture',
    description:
      'Built for growth from day one. Auto-scaling, multi-tenant design, and observability built in so your product scales with your customer base.',
  },
];

export default function MicroSaaSServicesPage() {
  const categories = groupMicroSaaSByCategory();

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Micro SAAS Services' }]} className="mb-6" />
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            {microSaasTotal}+ Products Available
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI-Powered Micro-SaaS Catalog
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Production-ready software products with AI built in. Choose from our catalog or request a custom solution tailored to your business.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Discuss Your Product Idea
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-xl border border-slate-500/70 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-purple-300/60 hover:text-white"
            >
              View AI Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg transition hover:-translate-y-1 hover:border-purple-400/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                <item.icon className="h-5 w-5 text-purple-400" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Catalog by Category — dynamically generated */}
      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-8">
          Full Product Catalog
          <span className="ml-3 text-base font-normal text-slate-400">
            {microSaasTotal} products across {microSaasCategories.length} categories
          </span>
        </h2>
        {microSaasCategories.map((category) => (
          <div key={category} className="mb-10">
            <h3 className="text-lg font-semibold text-purple-300 mb-4 pb-2 border-b border-purple-500/20 flex items-center justify-between">
              <span>{category}</span>
              <span className="text-sm font-normal text-slate-500">
                {categories[category]?.length || 0} product{categories[category]?.length !== 1 ? 's' : ''}
              </span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {(categories[category] || []).map((product) => (
                <Link
                  key={product.slug}
                  href={`/micro-saas/${product.slug}`}
                  className="group rounded-xl border border-slate-700/60 bg-slate-900/50 p-4 transition hover:border-purple-400/50 hover:bg-slate-900/70 hover:-translate-y-0.5"
                >
                  <span className="text-2xl">{product.icon}</span>
                  <h4 className="mt-2 text-sm font-semibold text-white group-hover:text-purple-200 transition-colors truncate">
                    {product.name}
                  </h4>
                  <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <h2 className="text-xl font-bold text-white">Why Choose Zion for Micro-SaaS</h2>
          <ul className="mt-6 space-y-3">
            {['Faster time to market with pre-built AI modules', 'Lower development cost than custom builds', 'Full ownership — no vendor lock-in', 'Security and compliance built in', 'Ongoing support and feature expansion', 'Contact: +1 302 464 0950 | kleber@ziontechgroup.com', 'Address: 364 E Main St STE 1008, Middletown DE 19709'].map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-slate-200">
                <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Build Your Micro-SaaS?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Share your product vision and we will outline a practical build plan and timeline within 48 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              📞 +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              📧 kleber@ziontechgroup.com
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}