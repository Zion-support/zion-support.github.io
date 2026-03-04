import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Zion Tech Group',
  description:
    'Get in touch with Zion Tech Group. Book a discovery call, request a quote, or ask about our AI implementation and engineering services.',
  alternates: { canonical: '/contact' },
};

type ContactMethod = {
  icon: string;
  title: string;
  description: string;
  action: string;
  href: string;
};

const contactMethods: ContactMethod[] = [
  {
    icon: '📞',
    title: 'Call Us',
    description: 'Speak directly with our team about your project needs.',
    action: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: '📧',
    title: 'Email Us',
    description: 'Send us a detailed message and we will respond within 24 hours.',
    action: 'info@ziontechgroup.com',
    href: 'mailto:info@ziontechgroup.com',
  },
  {
    icon: '📍',
    title: 'Visit Us',
    description: 'Located in the heart of Silicon Valley.',
    action: '123 Tech Street, Silicon Valley, CA',
    href: 'https://maps.google.com/?q=Silicon+Valley+CA',
  },
];

type QuickLink = {
  title: string;
  description: string;
  href: string;
};

const quickLinks: QuickLink[] = [
  {
    title: 'Explore Solutions',
    description: 'Browse our AI applications organized by business outcome.',
    href: '/solutions',
  },
  {
    title: 'View Pricing',
    description: 'See our transparent pricing plans and engagement options.',
    href: '/pricing',
  },
  {
    title: 'Read Case Studies',
    description: 'See real results from organizations like yours.',
    href: '/case-studies',
  },
  {
    title: 'Learn About Us',
    description: 'Discover our mission, approach, and core values.',
    href: '/about',
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-100">
            💬 Get in Touch
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Start Your{' '}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              AI Journey
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Ready to transform your business with AI? Whether you need a discovery sprint,
            a pilot build, or a long-term partnership, we are here to help you get started.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/40"
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="inline-flex rounded-xl border border-slate-700 bg-slate-950/70 p-2.5 text-3xl">
                {method.icon}
              </span>
              <h2 className="mt-4 text-lg font-bold text-white">{method.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{method.description}</p>
              <p className="mt-3 text-sm font-semibold text-purple-300 transition group-hover:text-purple-200">
                {method.action}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Book a Discovery Call
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Tell Us About Your Project
              </h2>
              <p className="mt-4 text-slate-300 leading-7">
                A 30-minute discovery call is the best way to get started. We will discuss your
                goals, audit your current stack, and recommend the right approach for your team.
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-700/70 bg-slate-950/60 px-5 py-4">
                  <p className="text-sm font-semibold text-white">What to expect</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-purple-400">1.</span>
                      We discuss your business challenges and goals
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-purple-400">2.</span>
                      We review your current tools and infrastructure
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-purple-400">3.</span>
                      We recommend a tailored solution path
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-purple-400">4.</span>
                      You get a clear next-step proposal within 48h
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-purple-500/30 bg-purple-900/15 px-5 py-4">
                  <p className="text-sm font-semibold text-white">Quick response guarantee</p>
                  <p className="mt-1 text-sm text-slate-300">
                    We respond to all inquiries within 24 hours on business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">Send Us a Message</h3>
              <p className="mt-2 text-sm text-slate-300">
                Fill out the form below and we will be in touch shortly.
              </p>
              <form className="mt-6 space-y-4" action="mailto:info@ziontechgroup.com" method="GET">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-200">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-1 block w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="body"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
          While you are here
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white">Quick Links</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-slate-700/70 bg-slate-900/65 p-5 transition hover:-translate-y-0.5 hover:border-purple-400/50"
            >
              <h3 className="font-semibold text-white transition group-hover:text-purple-300">
                {link.title}
              </h3>
              <p className="mt-1 text-sm text-slate-300">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
