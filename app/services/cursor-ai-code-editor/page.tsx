import Link from 'next/link';

export const metadata = {
  title: 'Cursor — AI-First Code Editor for Professional Developers',
  description: 'Cursor is the AI-first code editor built on top of VS Code that integrates large language models directly into the coding workflow. Unlike autocomplete tools, Cursor understands entire codebases, enabling developers to make large-scale changes with natural language prompts, generate functions from docstrings, debug errors with AI context, and navigate unfamiliar code with AI-powered explanations. With 1 million+ developers and $9.9 billion valuation, Cursor has become the fastest-growing developer tool in history. Its features include Cmd+K (inline editing), Cmd+L (AI chat with codebase context), Composer (multi-file AI agent), and automatic import management.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/cursor-ai-code-editor',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Cursor — AI-First Code Editor for Professional Developers</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Cursor is the AI-first code editor built on top of VS Code that integrates large language models directly into the coding workflow. Unlike autocomplete tools, Cursor understands entire codebases, enabling developers to make large-scale changes with natural language prompts, generate functions from docstrings, debug errors with AI context, and navigate unfamiliar code with AI-powered explanations. With 1 million+ developers and $9.9 billion valuation, Cursor has become the fastest-growing developer tool in history. Its features include Cmd+K (inline editing), Cmd+L (AI chat with codebase context), Composer (multi-file AI agent), and automatic import management.</p>
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
            <li>Cmd+K inline editing: select code and describe changes in natural language</li>
            <li>Cmd+L AI chat: ask questions about your codebase with full repository context</li>
            <li>Composer agent: make coordinated multi-file changes from a single prompt</li>
            <li>Auto-import and refactoring: AI manages imports, renames, and structural changes</li>
            <li>VS Code compatible: all extensions, keybindings, and settings work unchanged</li>
            <li>Codebase indexing: AI understands relationships across your entire project</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Write code 2-5x faster with AI that understands your entire codebase</li>
            <li>Make large-scale refactors with natural language — no more find-and-replace</li>
            <li>Onboard to unfamiliar code instantly with AI-powered explanations</li>
            <li>1 million+ developers and $9.9B valuation — the fastest-growing dev tool ever</li>
            <li>Drop-in VS Code replacement: all your extensions and settings work immediately</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (limited AI requests, public repos)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$20/month (unlimited AI requests, private repos, GPT-4/Claude)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (team management, SSO, audit logs, self-hosted models)</p>
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
