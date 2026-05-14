'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, HelpCircle, Zap, Code, Server, Lock, Database, Brain, Rocket, MessageCircle, Home, FileText, ChevronRight } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace JSX {
  interface IntrinsicElements {
    script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
  }
  type Element = React.ReactElement;
}

interface HelpLink {
  label: string;
  href: string;
  icon: JSX.Element;
  description: string;
}

const helpCategories = [
  {
    title: 'AI Solutions',
    color: 'text-purple-400',
    links: [
      { label: 'AI Services', href: '/ai-services', icon: <Brain className="h-4 w-4" />, description: 'Explore all AI services' },
      { label: 'Automation', href: '/automation', icon: <Zap className="h-4 w-4" />, description: 'Workflow automation' },
      { label: 'AI Tools', href: '/ai-tools', icon: <Code className="h-4 w-4" />, description: 'Free AI tools directory' },
      { label: 'AI Lab', href: '/ai-lab', icon: <Rocket className="h-4 w-4" />, description: 'Experimental tools' },
    ] as HelpLink[],
  },
  {
    title: 'IT & Infrastructure',
    color: 'text-blue-400',
    links: [
      { label: 'Cloud & Infra', href: '/cloud-infrastructure', icon: <Server className="h-4 w-4" />, description: 'Cloud solutions' },
      { label: 'Data Engineering', href: '/it-services/data-engineering', icon: <Database className="h-4 w-4" />, description: 'Pipelines & warehouses' },
      { label: 'Cybersecurity', href: '/cybersecurity', icon: <Lock className="h-4 w-4" />, description: 'Security & compliance' },
      { label: 'Web Dev', href: '/web-development', icon: <Code className="h-4 w-4" />, description: 'Modern web apps' },
    ] as HelpLink[],
  },
  {
    title: 'Resources',
    color: 'text-emerald-400',
    links: [
      { label: 'Pricing', href: '/pricing', icon: <FileText className="h-4 w-4" />, description: 'Transparent pricing' },
      { label: 'Case Studies', href: '/case-studies', icon: <FileText className="h-4 w-4" />, description: 'Real results' },
      { label: 'Blog', href: '/blog', icon: <FileText className="h-4 w-4" />, description: 'Latest insights' },
      { label: 'Contact', href: '/contact', icon: <MessageCircle className="h-4 w-4" />, description: 'Get in touch' },
    ] as HelpLink[],
  },
];

export default function QuickHelpWidget(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:from-emerald-400 hover:to-teal-400 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        aria-label="Quick help navigation"
      >
        {isOpen ? <X className="h-5 w-5" /> : <HelpCircle className="h-5 w-5" />}
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="fixed bottom-40 right-6 z-40 w-80 rounded-2xl border border-slate-700/70 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-emerald-400" />
            <h3 className="font-semibold text-white">Quick Navigation</h3>
          </div>

          <div className="space-y-4">
            {helpCategories.map((category) => (
              <div key={category.title}>
                <h4 className={`mb-2 text-xs font-semibold uppercase tracking-wider ${category.color}`}>
                  {category.title}
                </h4>
                <ul className="space-y-1">
                  {category.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
                      >
                        <span className={category.color}>{link.icon}</span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-medium">{link.label}</p>
                          <p className="truncate text-xs text-slate-500">{link.description}</p>
                        </div>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-600 transition group-hover:text-slate-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t border-slate-700/70 pt-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:from-emerald-500 hover:to-teal-500"
            >
              <MessageCircle className="h-4 w-4" />
              Need More Help?
            </Link>
            <p className="mt-2 text-center text-xs text-slate-500">
              Or call <span className="text-emerald-400">+1 302 464 0950</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
