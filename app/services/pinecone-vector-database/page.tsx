import Link from 'next/link';

export const metadata = {
  title: 'Pinecone — Managed Vector Database for AI Applications | Zion Tech Group',
  description: 'Pinecone is the leading purpose-built vector database that provides long-term memory for AI applications at scale. It enables organizations to store, search, and retrieve high-dimensional embeddings with millisecond latency, powering semantic search, RAG (retrieval-augmented generation), recommendation engines, and AI chatbots. Pinecone handles infrastructure, scaling, and indexing automatically so teams can focus on building AI features. With 5,000+ customers including Notion, Gong, and HubSpot, Pinecone stores billions of vectors and serves over 1 billion queries per month with 99.99% uptime.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/pinecone-vector-database',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Pinecone — Managed Vector Database for AI Applications</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Pinecone is the leading purpose-built vector database that provides long-term memory for AI applications at scale. It enables organizations to store, search, and retrieve high-dimensional embeddings with millisecond latency, powering semantic search, RAG (retrieval-augmented generation), recommendation engines, and AI chatbots. Pinecone handles infrastructure, scaling, and indexing automatically so teams can focus on building AI features. With 5,000+ customers including Notion, Gong, and HubSpot, Pinecone stores billions of vectors and serves over 1 billion queries per month with 99.99% uptime.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Book a Consultation
            </a>
            <Link href="/services" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Browse All Services
            </Link>
            <Link href="/contact" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Similarity search: find the most relevant vectors in milliseconds across billions of embeddings</li>
            <li>Metadata filtering: combine vector similarity with structured filters for precise retrieval</li>
            <li>Hybrid search: merge sparse (keyword) and dense (semantic) vectors for best-of-both retrieval</li>
            <li>Namespace isolation: partition data by tenant, user, or use case within a single index</li>
            <li>Zero-downtime scaling: resize indexes without downtime or data migration</li>
            <li>Serverless and pod-based tiers: choose elastic scaling or predictable dedicated capacity</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Add AI memory to any LLM application — RAG, chatbots, and semantic search in hours</li>
            <li>Eliminate infrastructure management: Pinecone handles indexing, replication, and scaling</li>
            <li>Search billions of embeddings with single-digit millisecond latency globally</li>
            <li>Hybrid search delivers 15-30% better retrieval accuracy than pure semantic search</li>
            <li>Trusted by 5,000+ companies including Notion, Gong, HubSpot, and Salesforce</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (100K vectors, 2 indexes)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$70/month (unlimited indexes, Enterprise features)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (VPC, dedicated infrastructure, SOC 2)</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Need a tailored rollout? Call{' '}
          <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a>
          {' '}or email{' '}
          <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>.
        </p>
      </section>
    </main>
  );
}
