import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on AI implementation, engineering best practices, and technology strategy from the Zion Tech Group team.',
  alternates: { canonical: '/blog' },
};

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: 'ai-pilot-to-production',
    title: 'From AI Pilot to Production: A Practical Playbook',
    excerpt:
      'Most AI pilots stall before reaching production. Learn the four-phase approach that consistently moves teams from proof-of-concept to scaled operations.',
    category: 'AI Strategy',
    date: 'Feb 28, 2026',
    readTime: '8 min read',
    icon: '🚀',
  },
  {
    slug: 'security-first-ai-deployment',
    title: 'Security-First AI Deployment: What Teams Get Wrong',
    excerpt:
      'Bolting security onto an AI system after launch is costly and risky. Here is how to embed security controls into every phase of your AI delivery pipeline.',
    category: 'Security',
    date: 'Feb 22, 2026',
    readTime: '6 min read',
    icon: '🛡️',
  },
  {
    slug: 'measuring-ai-roi',
    title: 'Measuring AI ROI: Beyond the Hype Metrics',
    excerpt:
      'Vanity metrics won\u2019t justify your next budget cycle. Focus on operational KPIs that connect AI investments to measurable business outcomes.',
    category: 'Business',
    date: 'Feb 15, 2026',
    readTime: '7 min read',
    icon: '📊',
  },
  {
    slug: 'building-resilient-automation',
    title: 'Building Resilient Automation Pipelines',
    excerpt:
      'Automation that breaks under pressure is worse than none at all. Learn patterns for retry logic, circuit breakers, and graceful degradation in production workflows.',
    category: 'Engineering',
    date: 'Feb 8, 2026',
    readTime: '9 min read',
    icon: '⚙️',
  },
  {
    slug: 'ai-customer-support-playbook',
    title: 'The AI Customer Support Playbook',
    excerpt:
      'Automating tier-1 support without frustrating customers requires careful escalation design. Here is a step-by-step guide to getting it right.',
    category: 'AI Strategy',
    date: 'Feb 1, 2026',
    readTime: '6 min read',
    icon: '🎧',
  },
  {
    slug: 'devops-ai-integration',
    title: 'Integrating AI Into Your DevOps Workflow',
    excerpt:
      'From intelligent test generation to automated incident response, AI is reshaping how engineering teams ship and operate software.',
    category: 'Engineering',
    date: 'Jan 25, 2026',
    readTime: '8 min read',
    icon: '🔧',
  },
];

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-100">
            Insights &amp; Strategy
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Blog
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Practical insights on AI implementation, engineering delivery, and technology strategy
            from the Zion Tech Group team.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          <span className="rounded-full border border-purple-400/40 bg-purple-500/15 px-4 py-1.5 text-xs font-medium text-purple-100">
            All
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-slate-700 bg-slate-900/75 px-4 py-1.5 text-xs font-medium text-slate-200"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 transition hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-xl border border-slate-700 bg-slate-950/70 p-2 text-3xl">
                  {post.icon}
                </span>
                <span className="rounded-full border border-slate-600 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                  {post.category}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white transition group-hover:text-purple-300">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-700/70 pt-4">
                <span className="text-xs text-slate-400">{post.date}</span>
                <span className="text-xs text-slate-400">{post.readTime}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-purple-300">
                Read article →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/35 via-fuchsia-900/25 to-pink-900/35 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Stay Updated</h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-200">
            Get practical AI delivery insights and product updates directly in your inbox.
          </p>
          <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              aria-label="Email address"
            />
            <button
              type="button"
              className="rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-700/20 transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
}
