import Link from 'next/link';

export const metadata = {
  title: 'Client Testimonials',
  description: 'Read what our clients say about Zion Tech Group AI and IT services.',
};

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, NovaTech Solutions',
    quote: 'Zion Tech Group transformed our entire data pipeline with their AI analytics service. We saw a 40% improvement in decision-making speed within the first quarter.',
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'VP Engineering, CloudScale Inc',
    quote: 'The cybersecurity audit was thorough and actionable. Their team identified vulnerabilities we had missed for years and helped us achieve SOC 2 compliance in record time.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO, FinBridge Capital',
    quote: 'Their AI-powered customer support solution reduced our ticket resolution time by 60%. The ROI was evident within the first month of deployment.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Director of Operations, LogiFlow',
    quote: 'The supply chain optimization service saved us over $2M annually. The team was responsive, professional, and delivered ahead of schedule.',
    rating: 5,
  },
  {
    name: 'Amanda Foster',
    role: 'Head of Product, MedTech Innovations',
    quote: 'Working with Zion Tech Group on our HIPAA-compliant AI platform was seamless. They understood our regulatory constraints and delivered a solution that exceeded expectations.',
    rating: 5,
  },
  {
    name: 'James O\'Brien',
    role: 'Founder, RetailEdge',
    quote: 'Their micro-SaaS products have become essential tools in our daily operations. The quality and support are unmatched in the industry.',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="relative container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ⭐ Client Testimonials
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              See what industry leaders say about working with Zion Tech Group.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-8 hover:border-purple-500/30 transition-colors">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <blockquote className="text-slate-300 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-slate-700/50 pt-4">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Ready to Get Started? Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
