import Head from 'next/head';
import Link from 'next/link';

export default function AIDataPipelineOptimizer() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>AI Data Pipeline Optimizer — Services — Zion</title>
        <meta name="description" content="Reduce spend and latency in ETL/ELT and LLM RAG pipelines with AI tuning." />
      </Head>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 beams opacity-[0.06]" />
      </div>
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text">AI Data Pipeline Optimizer</h1>
        <p className="mt-4 text-white/80">Profile and optimize data/AI pipelines across Spark, Snowflake, Airflow, dbt, Kafka, and RAG stores.</p>
        <ul className="mt-6 space-y-2 text-white/80 list-disc pl-5">
          <li>Workload-aware cluster sizing and autoscaling</li>
          <li>RAG relevance tuning: chunking, embeddings, retrieval</li>
          <li>End-to-end lineage with cost and SLO tracking</li>
        </ul>
        <div className="mt-8 flex gap-3">
          <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Back to Services</a></Link>
          <Link href="/contact"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>
        </div>
      </main>
    </div>
  );
}

