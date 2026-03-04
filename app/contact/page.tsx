import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Zion Tech Group. Book a strategy session, request a proposal, or reach our engineering team directly.',
  alternates: { canonical: '/contact' },
};

const contactMethods = [
  {
    title: 'Email',
    value: 'info@ziontechgroup.com',
    href: 'mailto:info@ziontechgroup.com',
    icon: '📧',
    description: 'For general inquiries and partnership requests.',
  },
  {
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    icon: '📞',
    description: 'Available Monday through Friday, 9 AM – 6 PM PT.',
  },
  {
    title: 'Location',
    value: '123 Tech Street, Silicon Valley, CA',
    href: '#',
    icon: '📍',
    description: 'Headquarters with remote teams worldwide.',
  },
];

const reasons = [
  {
    title: 'Book a Strategy Session',
    description: 'Discuss your goals, map priorities, and outline a focused implementation plan.',
    icon: '🗓️',
  },
  {
    title: 'Request a Custom Proposal',
    description: 'Get a detailed scope, timeline, and pricing estimate for your project.',
    icon: '📋',
  },
  {
    title: 'Technical Questions',
    description: 'Ask about integrations, security, deployment, or platform capabilities.',
    icon: '💡',
  },
  {
    title: 'Partnership Opportunities',
    description: 'Explore referral programs, reseller agreements, or technology partnerships.',
    icon: '🤝',
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something Together
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Whether you are exploring your first AI use case or scaling an existing system, we
            are here to help. Reach out and we will respond within one business day.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/40"
            >
              <span className="text-3xl">{method.icon}</span>
              <h2 className="mt-4 text-lg font-semibold text-white">{method.title}</h2>
              <p className="mt-1 text-sm font-medium text-purple-300 group-hover:text-purple-200">
                {method.value}
              </p>
              <p className="mt-2 text-sm text-slate-300">{method.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg sm:p-8">
            <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
            <p className="mt-2 text-sm text-slate-300">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
            <form className="mt-6 space-y-5" action="#" method="POST">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-200">
                    First Name
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    placeholder="Jane"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-200">
                    Last Name
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    placeholder="Doe"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-200">
                  Work Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="jane@company.com"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-200">
                  Company
                </span>
                <input
                  type="text"
                  name="company"
                  className="w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Acme Inc."
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-200">
                  How can we help?
                </span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Tell us about your project, goals, or questions..."
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                What to Expect
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">
                Common Reasons Teams Reach Out
              </h3>
            </div>
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-5 shadow-lg shadow-black/20"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{reason.icon}</span>
                  <h4 className="text-base font-semibold text-white">{reason.title}</h4>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Prefer a Scheduled Call?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Book a 30-minute discovery session with our engineering team to discuss your
            specific requirements.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Browse Solutions First
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Review Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
