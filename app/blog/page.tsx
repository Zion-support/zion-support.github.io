import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on AI implementation, engineering best practices, and operational automation from the Zion Tech Group team.',
  alternates: { canonical: '/blog' },
};

const posts = [
  {
    title: 'How to Scope Your First AI Pilot in 5 Steps',
    excerpt:
      'A practical framework for identifying the right use case, defining success criteria, and launching a measurable pilot in weeks.',
    category: 'Strategy',
    date: 'Feb 2026',
    readTime: '6 min',
  },
  {
    title: 'Security-First AI: Building Compliance Into Your Delivery Pipeline',
    excerpt:
      'Why security controls should be part of your AI implementation plan from day one, not bolted on later.',
    category: 'Security',
    date: 'Jan 2026',
    readTime: '8 min',
  },
  {
    title: 'The Real Cost of Manual Workflows: An ROI Framework',
    excerpt:
      'How to quantify the business impact of manual processes and build a case for intelligent automation.',
    category: 'Operations',
    date: 'Jan 2026',
    readTime: '5 min',
  },
  {
    title: 'AI Code Review at Scale: Lessons from Production Teams',
    excerpt:
      'Patterns and anti-patterns we have observed in teams using AI-assisted code review across large codebases.',
    category: 'Engineering',
    date: 'Dec 2025',
    readTime: '7 min',
  },
  {
    title: 'From CRM to Revenue Engine: Automating the Sales Pipeline',
    excerpt:
      'How AI-powered lead scoring, email automation, and CRM workflows combine to accelerate qualified pipeline.',
    category: 'Growth',
    date: 'Dec 2025',
    readTime: '6 min',
  },
  {
    title: 'Choosing the Right Cloud Architecture for AI Workloads',
    excerpt:
      'GPU instances, serverless inference, and hybrid patterns — a decision framework for AI infrastructure.',
    category: 'Infrastructure',
    date: 'Nov 2025',
    readTime: '9 min',
  },
];

const categories = ['All', 'Strategy', 'Engineering', 'Security', 'Operations', 'Growth', 'Infrastructure'];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-8 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Blog
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Insights for AI-Driven Teams
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Practical articles on AI implementation, engineering patterns, and operational
            automation from the Zion Tech Group team.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-slate-700 bg-slate-900/75 px-4 py-1.5 text-xs font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/40"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-100">
                  {post.category}
                </span>
                <span className="text-xs text-slate-400">{post.date}</span>
                <span className="text-xs text-slate-400">{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white transition group-hover:text-purple-300">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{post.excerpt}</p>
              <p className="mt-4 text-sm font-semibold text-purple-300">Read article →</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Stay Up to Date
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            New articles on AI delivery, engineering patterns, and operational automation —
            delivered to your inbox.
          </p>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-xl border border-slate-500/60 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
            />
            <button
              type="button"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
