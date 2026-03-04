import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, ArrowRight, Clock, MessageSquare, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Zion Tech Group',
  description:
    'Get in touch with Zion Tech Group. Start a project, book a discovery call, or reach out for AI implementation support.',
};

const contactMethods = [
  {
    icon: Phone,
    label: 'Book a call',
    value: 'Schedule a discovery call',
    href: '/contact#engagement',
    description: '30-min strategy session',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ziontechgroup.com',
    href: 'mailto:info@ziontechgroup.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'São Paulo, Brazil',
    href: '/contact',
    description: 'Global delivery across 6 continents',
  },
];

const engagementOptions = [
  {
    icon: MessageSquare,
    title: 'Discovery Call',
    description: 'Walk through your goals and current stack with a Zion specialist. No pressure, just clarity.',
    cta: 'Book a 30-min call',
    duration: '30 min',
  },
  {
    icon: Zap,
    title: 'Quick Start Workshop',
    description: 'A focused session to identify your highest-value AI use case and draft an implementation plan.',
    cta: 'Request a workshop',
    duration: '2 hrs',
  },
  {
    icon: Clock,
    title: 'Full Roadmap Engagement',
    description: 'End-to-end discovery, pilot scoping, and delivery planning with a dedicated Zion team.',
    cta: 'Start roadmap planning',
    duration: '1-2 weeks',
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Get in touch
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Start Your AI Journey
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Whether you need a discovery call, a technical workshop, or a full delivery roadmap, our team is ready to help.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 text-center transition hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15">
                <method.icon className="h-6 w-6 text-purple-400" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-purple-300">
                {method.label}
              </p>
              <p className="mt-2 text-base font-medium text-white group-hover:text-purple-200">
                {method.value}
              </p>
              <p className="mt-1 text-xs text-slate-400">{method.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="engagement" className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-3xl border border-purple-500/30 bg-slate-900/70 p-6 shadow-2xl shadow-purple-900/20 backdrop-blur-md sm:p-8">
            <h2 className="text-2xl font-bold text-white">Send us a message</h2>
            <p className="mt-2 text-sm text-slate-300">
              Tell us about your project and we will get back to you within one business day.
            </p>

            <form className="mt-8 space-y-5" action="#" method="POST">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-200">First name</span>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    placeholder="Jane"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-200">Last name</span>
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    className="block w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    placeholder="Doe"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-200">Work email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="block w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="jane@company.com"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-200">Company</span>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  className="block w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Acme Inc."
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-200">How can we help?</span>
                <textarea
                  name="message"
                  rows={4}
                  className="block w-full rounded-xl border border-slate-600/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-700/20 transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500 sm:w-auto"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Engagement options
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Choose the right starting point
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Pick the engagement that fits your timeline and decision stage.
              </p>
            </div>

            {engagementOptions.map((option) => (
              <div
                key={option.title}
                className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-5 transition hover:border-purple-400/40"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/15">
                    <option.icon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{option.title}</h3>
                      <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-300">
                        {option.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{option.description}</p>
                    <p className="mt-3 text-sm font-semibold text-purple-300 transition group-hover:text-purple-200">
                      {option.cta} →
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl shadow-purple-900/25 sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to explore what AI can do for your team?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            No commitment required. Start with a quick discovery conversation and see where it leads.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Explore Solutions
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
