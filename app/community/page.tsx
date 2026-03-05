import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BookOpen, MessageSquare, Video, FileCode } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Community | Zion Tech Group',
  description:
    'Join the Zion Tech Group community. Access documentation, tutorials, developer resources, and connect with teams building AI-powered solutions.',
  alternates: { canonical: '/community' },
};

const resources = [
  {
    icon: BookOpen,
    title: 'Documentation & Guides',
    description: 'Integration guides, API references, and best practices for deploying Zion AI apps.',
    href: '/blog',
  },
  {
    icon: FileCode,
    title: 'Technical Blog',
    description: 'Deep dives on AI implementation, DevOps, security, and real-world case studies.',
    href: '/blog',
  },
  {
    icon: Video,
    title: 'Implementation Playbooks',
    description: 'Step-by-step guides for common use cases: chatbots, document processing, analytics.',
    href: '/solutions',
  },
  {
    icon: MessageSquare,
    title: 'Discovery & Support',
    description: 'Book a discovery call or reach out for implementation support and custom solutions.',
    href: '/contact',
  },
];

const topics = [
  'AI Chatbot deployment',
  'Document processing workflows',
  'Predictive analytics setup',
  'Security & compliance',
  'Integration architecture',
  'Pilot-to-production scaling',
];

export default function CommunityPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-1/4 h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-6rem] h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Community' }]} className="mb-6" />
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Community & Resources
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Learn, build, and connect
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Access documentation, tutorials, and implementation guides. Connect with our team for
            discovery calls, support, and custom AI solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-purple-700/20 transition hover:-translate-y-0.5"
            >
              Browse Blog & Guides
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-7 py-3 text-base font-semibold text-slate-100 transition hover:border-purple-300/70 hover:text-white"
             data-cta-event="cta_discovery" data-cta-label="page">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg transition hover:-translate-y-1 hover:border-purple-400/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                <resource.icon className="h-5 w-5 text-purple-400" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white group-hover:text-purple-200">
                {resource.title}
              </h2>
              <p className="mt-2 text-sm text-slate-300">{resource.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-purple-300 group-hover:text-purple-200">
                Explore
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Popular topics
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            What teams are building
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Find guides and case studies for common AI implementation scenarios.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {topics.map((topic) => (
              <Link
                key={topic}
                href="/blog"
                className="rounded-full border border-slate-600 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl shadow-purple-900/25 sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need hands-on help?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Book a discovery call or workshop. Our team can help you scope, design, and implement AI solutions.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
           data-cta-event="cta_discovery" data-cta-label="page">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
