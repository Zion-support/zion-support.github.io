import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BookOpen, MessageSquare, Video, FileCode, HelpCircle } from 'lucide-react';
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
    href: '/faq',
  },
  {
    icon: MessageSquare,
    title: 'Discovery & Support',
    description: 'Book a discovery call or reach out for implementation support and custom solutions.',
    href: '/contact',
  },
];

const communityStats = [
  { value: '150+', label: 'Projects Delivered', note: 'Across industries and use cases' },
  { value: '98%', label: 'Client Satisfaction', note: 'Based on post-engagement surveys' },
  { value: '41', label: 'Industry Verticals', note: 'Tailored playbooks and solutions' },
  { value: '<48h', label: 'Discovery Kickoff', note: 'Typical time to first alignment call' },
];

const gettingStartedSteps = [
  {
    step: 1,
    title: 'Identify your use case',
    description: 'Pinpoint one high-impact workflow: support automation, document processing, lead qualification, or analytics. Our playbooks help you scope and prioritize.',
  },
  {
    step: 2,
    title: 'Explore playbooks and case studies',
    description: 'Match your industry and goal to a step-by-step playbook. See how similar teams achieved measurable outcomes with Zion solutions.',
  },
  {
    step: 3,
    title: 'Book a discovery call',
    description: 'Align your goals with the right apps, integration architecture, and delivery timeline. No commitment required — we help you decide the best path forward.',
  },
];

const playbooks = [
  {
    title: 'AI Chatbot deployment',
    description: 'From discovery to production: scoping, integration, and scaling support automation.',
    href: '/solutions/technology-and-saas',
    tag: 'Growth',
  },
  {
    title: 'Document processing workflows',
    description: 'Automate intake, extraction, and routing for forms, contracts, and invoices.',
    href: '/solutions/legal-professional-services',
    tag: 'Operations',
  },
  {
    title: 'Predictive analytics setup',
    description: 'Forecast demand, churn, or maintenance with historical data and clear KPIs.',
    href: '/solutions/manufacturing-industrial',
    tag: 'Decision Intelligence',
  },
  {
    title: 'Security & compliance',
    description: 'SOC 2, GDPR, and audit readiness with Security Shield and Compliance Manager.',
    href: '/solutions/financial-services',
    tag: 'Security',
  },
  {
    title: 'Pilot-to-production scaling',
    description: 'Move from validated pilot to organization-wide rollout with runbooks and training.',
    href: '/faq',
    tag: 'Delivery',
  },
];

const topics = [
  'AI Chatbot deployment',
  'Document processing workflows',
  'Predictive analytics setup',
  'Security & compliance',
  'Integration architecture',
  'Pilot-to-production scaling',
  'Supply chain optimization',
  'Customer success automation',
  'Fraud detection & risk',
  'Industry-specific AI',
];

const featuredCaseStudies = [
  {
    title: 'SaaS Platform Reduces Support Volume 40%',
    description: 'AI Chatbot Builder and Customer Support Pro for tier-1 automation.',
    href: '/case-studies#industry=Technology',
    icon: '💬',
  },
  {
    title: 'Fintech Passes SOC 2 in 8 Weeks',
    description: 'Compliance Manager and Security Shield for audit readiness.',
    href: '/case-studies#industry=Financial%20Services',
    icon: '🔒',
  },
  {
    title: 'Engineering Team Ships 3x Faster',
    description: 'AI Code Reviewer and DevOps Automation for delivery velocity.',
    href: '/case-studies#industry=Technology',
    icon: '⚙️',
  },
];

const communityFaq = [
  {
    q: 'Where do I find API documentation?',
    a: 'Technical documentation and integration guides are available on our blog and linked from individual product pages. For enterprise API access and custom integrations, book a discovery call to get tailored documentation and support.',
  },
  {
    q: 'Can I try a Zion app before committing?',
    a: 'Yes. We run scoped pilots (typically 2–4 weeks) with clear KPIs so you can validate impact before scaling. Discovery calls help define pilot scope and success criteria.',
  },
  {
    q: 'How do I get implementation support?',
    a: 'Use the contact form to request a discovery call or implementation support. Our team responds within 48 hours and can connect you with playbooks, runbooks, and hands-on assistance based on your use case.',
  },
  {
    q: 'Is there a developer or partner program?',
    a: 'Yes. Technology, implementation, and reseller partners get access to certification, documentation, and co-sell opportunities. Visit the Partners page for details and how to apply.',
  },
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
          <p className="mt-4 text-base leading-7 text-slate-400">
            Whether you are evaluating AI for the first time or scaling production deployments,
            our playbooks, case studies, and technical blog help you scope, design, and deploy
            with confidence. Use this hub to find the right resources for your role and use case.
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
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Community at a glance
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Trusted by teams building with AI
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Our community spans engineering leads, product managers, and executives across 41 industries — all focused on deploying AI that delivers measurable outcomes.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {communityStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5 text-center"
              >
                <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-200">{stat.label}</p>
                <p className="mt-0.5 text-xs text-slate-400">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Getting started
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Three steps to your first AI rollout
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            New to Zion? Follow this path to scope, validate, and launch your first production AI workflow.
          </p>
          <div className="mt-8 space-y-6">
            {gettingStartedSteps.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-300">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Who this is for
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Built for practitioners and decision-makers
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Our community resources serve engineering leads scoping integrations, product managers
            prioritizing AI use cases, and executives evaluating ROI. Content is organized by
            use case (chatbots, document processing, security, analytics) and by industry so
            you can jump straight to what matters for your team.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3 text-slate-200">
              <span className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-purple-400" />
              <span><strong className="text-white">Engineering & DevOps:</strong> API guides, deployment patterns, and pilot-to-production playbooks.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-200">
              <span className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-purple-400" />
              <span><strong className="text-white">Product & GTM:</strong> Use-case prioritization, bundle fit, and launch roadmaps.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-200">
              <span className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-purple-400" />
              <span><strong className="text-white">Security & Compliance:</strong> SOC 2, GDPR, and audit-ready implementation guidance.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-200">
              <span className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-purple-400" />
              <span><strong className="text-white">Industry verticals:</strong> Healthcare, fintech, manufacturing, and 40+ tailored solution pages.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Implementation playbooks
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Step-by-step guides by use case
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Follow these playbooks to scope, design, and deploy AI solutions. Each links to industry-specific
            solutions and FAQs.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {playbooks.map((playbook) => (
              <Link
                key={playbook.title}
                href={playbook.href}
                className="group rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5 transition hover:border-purple-400/50 hover:bg-slate-900/80"
              >
                <span className="rounded-full border border-slate-600 bg-slate-800/70 px-2.5 py-1 text-xs font-medium text-slate-300">
                  {playbook.tag}
                </span>
                <h3 className="mt-3 font-semibold text-white group-hover:text-purple-200">{playbook.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{playbook.description}</p>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-purple-300 group-hover:text-purple-200">
                  View playbook
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-12 text-sm font-semibold uppercase tracking-wide text-purple-300">
          Resources
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Documentation and support
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Featured case studies
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Real outcomes from teams like yours
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            See how organizations across industries deploy Zion AI solutions for measurable impact.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <Link
                key={study.title}
                href={study.href}
                className="group rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5 transition hover:border-purple-400/50 hover:bg-slate-900/80"
              >
                <span className="text-2xl">{study.icon}</span>
                <h3 className="mt-3 font-semibold text-white group-hover:text-purple-200">{study.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{study.description}</p>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-purple-300 group-hover:text-purple-200">
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Stay updated
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            New guides, case studies, and product updates
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            We publish implementation guides, security best practices, and industry-specific
            case studies on our blog. Bookmark this page and the blog for the latest playbooks,
            ROI tools, and release notes. For hands-on help, book a discovery call or reach
            out for implementation support.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg border border-slate-600 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Browse the blog
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center rounded-lg border border-slate-600 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Case studies
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-slate-600 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Request a workshop
            </Link>
          </div>
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

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-8 w-8 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Community FAQ</h2>
          </div>
          <p className="mt-3 max-w-2xl text-slate-300">
            Common questions about documentation, pilots, and getting support.
          </p>
          <dl className="mt-6 space-y-6">
            {communityFaq.map((faq) => (
              <div key={faq.q} className="border-b border-slate-700/50 pb-6 last:border-0 last:pb-0">
                <dt className="text-base font-semibold text-white">{faq.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-slate-300">{faq.a}</dd>
              </div>
            ))}
          </dl>
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
