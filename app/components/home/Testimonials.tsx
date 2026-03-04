type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Zion Tech Group helped us reduce support ticket resolution time by 60% in the first quarter. Their AI chatbot integration was seamless and exceeded expectations.',
    name: 'Sarah Chen',
    role: 'VP of Operations',
    company: 'NovaBridge Solutions',
  },
  {
    quote:
      'The security audit uncovered critical vulnerabilities we had missed for months. Their team delivered a clear remediation plan and helped us implement every fix.',
    name: 'Marcus Rivera',
    role: 'CTO',
    company: 'DataPulse Analytics',
  },
  {
    quote:
      'We went from idea to production pilot in under three weeks. The engineering quality and delivery speed were unlike anything we experienced with previous vendors.',
    name: 'Emily Takahashi',
    role: 'Head of Product',
    company: 'ScaleForge AI',
  },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '45%', label: 'Avg. Cost Reduction' },
  { value: '<48h', label: 'Discovery Kickoff' },
];

export default function Testimonials() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-purple-500/25 bg-gradient-to-br from-purple-900/30 to-slate-900/70 p-5 text-center backdrop-blur-sm"
          >
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
          Trusted by teams building with AI
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          What our clients say
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-purple-400/40"
          >
            <div className="mb-4 flex gap-1 text-purple-400" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-sm leading-6 text-slate-300">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 border-t border-slate-700/70 pt-4">
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-slate-400">
                {t.role}, {t.company}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
