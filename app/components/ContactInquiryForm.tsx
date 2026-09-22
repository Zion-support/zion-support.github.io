'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { siteContact } from '../lib/siteContact';

export type ContactInquiryMode = 'inquiry' | 'newsletter';

const NEEDS = [
  'AI implementation',
  'Managed IT / support',
  'Cloud and FinOps',
  'Security and compliance',
  'Partnership',
  'Something else',
];

export default function ContactInquiryForm({
  mode = 'inquiry',
  heading,
}: {
  mode?: ContactInquiryMode;
  heading?: string;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [need, setNeed] = useState(NEEDS[0]);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const subject =
    mode === 'newsletter'
      ? `Newsletter signup — ${name || email}`
      : `Inquiry — ${need} — ${company || name || 'Zion Tech Group'}`;

  const body = useMemo(() => {
    if (mode === 'newsletter') {
      return [`Name: ${name}`, `Email: ${email}`, `Company: ${company}`].join('\n');
    }
    return [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Need: ${need}`,
      '',
      message || 'Please follow up with a short discovery call.',
    ].join('\n');
  }, [mode, name, email, company, need, message]);

  const mailto = `mailto:${siteContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
    window.location.href = mailto;
  }

  if (submitted) {
    return (
      <div className="page-card">
        <h2 className="text-xl font-semibold text-white">Message ready</h2>
        <p className="mt-2 text-sm text-slate-400">
          Your email client should open with the details filled in. If it does not, use the buttons below.
        </p>
        <div className="page-actions mt-6">
          <a href={mailto} className="btn-primary">Open email draft</a>
          <a href={siteContact.calendly} target="_blank" rel="noreferrer" className="btn-secondary">
            Book a 30-minute call
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="page-card space-y-4">
      <h2 className="text-xl font-semibold text-white">
        {heading || (mode === 'newsletter' ? 'Get the briefing' : 'Send a project brief')}
      </h2>
      <p className="text-sm text-slate-400">
        {mode === 'newsletter'
          ? 'One practical note a month on AI, IT operations, and what we are shipping. No spam.'
          : `${siteContact.response}. Share enough context for a useful first reply.`}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Name
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-white outline-none focus:border-purple-500/60"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Work email
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-white outline-none focus:border-purple-500/60"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="block text-sm text-slate-300">
        Company
        <input
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-white outline-none focus:border-purple-500/60"
          autoComplete="organization"
        />
      </label>
      {mode === 'inquiry' ? (
        <>
          <label className="block text-sm text-slate-300">
            What do you need?
            <select
              value={need}
              onChange={(event) => setNeed(event.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-white outline-none focus:border-purple-500/60"
            >
              {NEEDS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm text-slate-300">
            Scope, systems, and timeline
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={5}
              className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-white outline-none focus:border-purple-500/60"
              placeholder="Current stack, the outcome you want, and any constraints."
            />
          </label>
        </>
      ) : null}
      <button type="submit" className="btn-primary w-full sm:w-auto">
        {mode === 'newsletter' ? 'Subscribe' : 'Send inquiry'}
      </button>
    </form>
  );
}
