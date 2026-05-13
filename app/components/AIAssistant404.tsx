'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { Search, Home, Mail, FileText, LayoutGrid, Sparkles, Zap, ArrowRight, Fingerprint, AlertCircle, X, Bot, Send, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace JSX {
  interface IntrinsicElements {
    script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
  }
  type Element = React.ReactElement;
}

interface SiteItem {
  title: string;
  href: string;
  category: string;
}

interface ScoredItem extends SiteItem {
  score: number;
}

// All discoverable site items for fuzzy matching
const SITE_ITEMS: SiteItem[] = [
  { title: 'JSON to TypeScript Converter', href: '/tools/json-to-typescript-converter', category: 'Tools' },
  { title: 'JSON to Zod Converter', href: '/tools/json-to-zod', category: 'Tools' },
  { title: 'JSON Schema Generator', href: '/tools/json-schema-generator', category: 'Tools' },
  { title: 'JSON Schema Validator', href: '/tools/json-schema-validator', category: 'Tools' },
  { title: 'JSON Diff Viewer', href: '/tools/json-diff-viewer', category: 'Tools' },
  { title: 'JSON Path Explorer', href: '/tools/json-path-explorer', category: 'Tools' },
  { title: 'JSON to CSV Converter', href: '/tools/json-to-csv-converter', category: 'Tools' },
  { title: 'CSV JSON Converter', href: '/tools/csv-json-converter', category: 'Tools' },
  { title: 'CSS Minifier Beautifier', href: '/tools/css-minifier-beautifier', category: 'Tools' },
  { title: 'CSS Gradient Generator', href: '/tools/css-gradient-generator', category: 'Tools' },
  { title: 'CSS Box Model Visualizer', href: '/tools/css-box-model', category: 'Tools' },
  { title: 'CSS Specificity Calculator', href: '/tools/css-specificity-calculator', category: 'Tools' },
  { title: 'CSS Unit Converter', href: '/tools/css-unit-converter', category: 'Tools' },
  { title: 'HTML Minifier Beautifier', href: '/tools/html-minifier-beautifier', category: 'Tools' },
  { title: 'HTML Entity Encoder', href: '/tools/html-entity-encoder', category: 'Tools' },
  { title: 'HTML to JSX Converter', href: '/tools/html-to-jsx', category: 'Tools' },
  { title: 'Markdown to HTML', href: '/tools/markdown-to-html', category: 'Tools' },
  { title: 'Markdown Live Editor', href: '/tools/markdown-live-editor', category: 'Tools' },
  { title: 'Markdown Table Generator', href: '/tools/markdown-table-generator', category: 'Tools' },
  { title: 'XML Formatter Validator', href: '/tools/xml-formatter-validator', category: 'Tools' },
  { title: 'Text Diff Checker', href: '/tools/diff-checker', category: 'Tools' },
  { title: 'Regex Generator', href: '/tools/regex-generator', category: 'Tools' },
  { title: 'Regex Tester', href: '/tools/regex-tester', category: 'Tools' },
  { title: 'Base64 Encoder Decoder', href: '/tools/base64-encoder-decoder', category: 'Tools' },
  { title: 'Base32 Encoder Decoder', href: '/tools/base32-encoder-decoder', category: 'Tools' },
  { title: 'URL Encoder Decoder', href: '/tools/url-encoder-decoder', category: 'Tools' },
  { title: 'URL Slug Generator', href: '/tools/url-slug-generator', category: 'Tools' },
  { title: 'Color Converter', href: '/tools/color-converter', category: 'Tools' },
  { title: 'Color Palette Generator', href: '/tools/color-palette-generator', category: 'Tools' },
  { title: 'Color Blindness Simulator', href: '/tools/color-blindness-simulator', category: 'Tools' },
  { title: 'Box Shadow Generator', href: '/tools/box-shadow-generator', category: 'Tools' },
  { title: 'Password Generator', href: '/tools/password-generator', category: 'Tools' },
  { title: 'UUID Generator', href: '/tools/uuid-generator', category: 'Tools' },
  { title: 'Number Base Converter', href: '/tools/number-base-converter', category: 'Tools' },
  { title: 'Timestamp Converter', href: '/tools/timestamp-converter', category: 'Tools' },
  { title: 'HTTP Status Code Lookup', href: '/tools/http-status-lookup', category: 'Tools' },
  { title: 'Lorem Ipsum Generator', href: '/tools/lorem-ipsum-generator', category: 'Tools' },
  { title: 'Curl to JavaScript Converter', href: '/tools/curl-to-javascript', category: 'Tools' },
  { title: 'Mock API Generator', href: '/tools/mock-api-generator', category: 'Tools' },
  { title: 'Env File Parser', href: '/tools/env-file-parser', category: 'Tools' },
  { title: 'JWT Decoder', href: '/tools/jwt-decoder', category: 'Tools' },
  { title: 'JWT Encoder', href: '/tools/jwt-encoder', category: 'Tools' },
  { title: 'Hash Identifier', href: '/tools/hash-identifier', category: 'Tools' },
  { title: 'HMAC Signature Generator', href: '/tools/hmac-generator', category: 'Tools' },
  { title: 'Cron Expression Parser', href: '/tools/cron-expression-parser', category: 'Tools' },
  { title: 'Cron Expression Explainer', href: '/tools/cron-expression-explainer', category: 'Tools' },
  { title: 'Cron Generator', href: '/tools/cron-generator', category: 'Tools' },
  { title: 'String Case Converter', href: '/tools/string-case-converter', category: 'Tools' },
  { title: 'String Entropy Analyzer', href: '/tools/string-entropy-analyzer', category: 'Tools' },
  { title: 'YAML JSON Converter', href: '/tools/yaml-json-converter', category: 'Tools' },
  { title: 'Cookie Decoder Analyzer', href: '/tools/cookie-decoder', category: 'Tools' },
  { title: 'Email Response Generator', href: '/tools/email-response-generator', category: 'Tools' },
  { title: 'Google Workspace Setup', href: '/tools/google-workspace-setup', category: 'Tools' },
  { title: 'API Request Builder', href: '/tools/api-request-builder', category: 'Tools' },
  { title: 'Meeting Cost Calculator', href: '/tools/meeting-cost-calculator', category: 'Tools' },
  { title: 'Productivity Score Calculator', href: '/tools/productivity-score-calculator', category: 'Tools' },
  { title: 'AI ROI Calculator', href: '/tools/roi-calculator', category: 'Tools' },
  { title: 'AI Log Analyzer', href: '/tools/ai-log-analyzer', category: 'Tools' },
  { title: 'AI Document Analyzer', href: '/tools/document-analyzer', category: 'Tools' },
  { title: 'API Response Time Tester', href: '/tools/api-response-tester', category: 'Tools' },
  { title: 'AI Code Complexity Analyzer', href: '/tools/code-complexity-analyzer', category: 'Tools' },
  { title: 'Meta Tag Generator', href: '/tools/meta-tag-generator', category: 'Tools' },
  { title: 'AI Site Evolution Advisor', href: '/ai-lab/ai-site-evolution-advisor', category: 'AI Lab' },
  { title: 'AI Idea to Feature Blueprint', href: '/ai-lab/idea-to-feature-blueprint', category: 'AI Lab' },
  { title: 'AI Rollout Blueprint Generator', href: '/ai-lab/rollout-blueprint', category: 'AI Lab' },
  { title: 'AI ROI & Ops Scorecard', href: '/ai-lab/roi-ops-scorecard', category: 'AI Lab' },
  { title: 'Deployment Readiness Console', href: '/ai-lab/deployment-readiness-console', category: 'AI Lab' },
  { title: 'AI Build Failure Explainer', href: '/ai-lab/build-failure-explainer', category: 'AI Lab' },
  { title: 'Autonomous Security Posture Scanner', href: '/ai-lab/autonomous-security-scanner', category: 'AI Lab' },
  { title: 'Autonomous SEO Audit Agent', href: '/ai-lab/autonomous-seo-audit-agent', category: 'AI Lab' },
  { title: 'Autonomous Incident Commander', href: '/ai-lab/autonomous-incident-commander', category: 'AI Lab' },
  { title: 'Autonomous Competitive Intelligence', href: '/ai-lab/autonomous-competitive-intelligence', category: 'AI Lab' },
  { title: 'Autonomous Code Quality Playground', href: '/ai-lab/autonomous-code-quality-playground', category: 'AI Lab' },
  { title: 'Autonomous ROI Calculator', href: '/ai-lab/autonomous-roi-calculator', category: 'AI Lab' },
  { title: 'Autonomous Revenue Forecast Studio', href: '/ai-lab/autonomous-revenue-forecast-studio', category: 'AI Lab' },
  { title: 'Services & IT Solutions', href: '/services', category: 'Services' },
  { title: 'AI Analytics & BI', href: '/data-analytics', category: 'Services' },
  { title: 'AI Automation', href: '/ai-services/process-automation', category: 'Services' },
  { title: 'Web Development', href: '/web-development', category: 'Services' },
  { title: 'Cloud Infrastructure', href: '/cloud-infrastructure', category: 'Services' },
  { title: 'Cybersecurity', href: '/cybersecurity', category: 'Services' },
  { title: 'Data Engineering', href: '/it-services/data-engineering', category: 'Services' },
  { title: 'API Development', href: '/it-services/api-development', category: 'Services' },
  { title: 'Mobile App Development', href: '/it-services/mobile-development', category: 'Services' },
  { title: 'AI Tools Directory', href: '/ai-tools', category: 'Pages' },
  { title: 'AI Lab', href: '/ai-lab', category: 'Pages' },
  { title: 'Automation', href: '/automation', category: 'Pages' },
  { title: 'Smart Analytics', href: '/smart-analytics', category: 'Pages' },
  { title: 'Home', href: '/', category: 'Pages' },
  { title: 'Solutions', href: '/solutions', category: 'Pages' },
  { title: 'Blog', href: '/blog', category: 'Pages' },
  { title: 'Contact', href: '/contact', category: 'Pages' },
  { title: 'Pricing', href: '/pricing', category: 'Pages' },
];

function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function fuzzyMatch(query: string, items: SiteItem[], maxResults: number = 8): ScoredItem[] {
  if (!query.trim()) return [];
  const q: string = query.toLowerCase().trim();
  const scored = items
    .map((item: SiteItem): ScoredItem | null => {
      const titleLower: string = item.title.toLowerCase();
      const categoryLower: string = item.category.toLowerCase();

      if (titleLower === q) return { ...item, score: 100 };
      if (titleLower.startsWith(q)) return { ...item, score: 90 };
      if (titleLower.includes(q)) return { ...item, score: 80 };

      const words: string[] = q.split(/\s+/);
      const matchingWords: string[] = words.filter((w: string) => titleLower.includes(w));
      if (matchingWords.length > 0) {
        return { ...item, score: 60 + matchingWords.length * 5 };
      }

      if (categoryLower.includes(q)) return { ...item, score: 40 };

      if (q.length <= 12) {
        const dist: number = levenshtein(q, titleLower);
        const similarity: number = 1 - dist / Math.max(titleLower.length, 1);
        if (similarity > 0.55) {
          return { ...item, score: Math.round(similarity * 50) };
        }
      }

      return null;
    })
    .filter((item): item is ScoredItem => Boolean(item))
    .sort((a: ScoredItem, b: ScoredItem) => b.score - a.score)
    .slice(0, maxResults);

  return scored;
}

// === AI Assistant Quiz Engine ===
interface QuizQuestion {
  id: string;
  question: string;
  options: {
    label: string;
    icon: string;
    nextStep: 'search' | 'category' | 'service' | 'contact' | 'solution';
    searchTerm?: string;
    category?: string;
    serviceHref?: string;
    solutionHref?: string;
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'intent',
    question: 'What are you looking for today?',
    options: [
      { label: 'A specific tool', icon: '🔧', nextStep: 'search', searchTerm: 'tool' },
      { label: 'AI Services', icon: '🤖', nextStep: 'category', category: 'ai' },
      { label: 'IT Solutions', icon: '💻', nextStep: 'category', category: 'it' },
      { label: 'Learn about our company', icon: '🏢', nextStep: 'service', serviceHref: '/about' },
      { label: 'Talk to someone', icon: '📞', nextStep: 'contact' },
    ],
  },
  {
    id: 'domain',
    question: 'Which area interests you most?',
    options: [
      { label: 'Data & Analytics', icon: '📊', nextStep: 'service', serviceHref: '/data-analytics' },
      { label: 'Automation & Workflows', icon: '⚡', nextStep: 'service', serviceHref: '/ai-services/process-automation' },
      { label: 'Cybersecurity', icon: '🔒', nextStep: 'service', serviceHref: '/cybersecurity' },
      { label: 'Cloud & Infrastructure', icon: '☁️', nextStep: 'service', serviceHref: '/cloud-infrastructure' },
      { label: 'AI Development & Tools', icon: '🧪', nextStep: 'category', category: 'ai' },
    ],
  },
  {
    id: 'usecase',
    question: 'What best describes your need?',
    options: [
      { label: 'Boost efficiency & save costs', icon: '💰', nextStep: 'search', searchTerm: 'automation' },
      { label: 'Make better decisions with data', icon: '🧠', nextStep: 'search', searchTerm: 'analytics' },
      { label: 'Build or deploy an AI solution', icon: '🚀', nextStep: 'search', searchTerm: 'AI services' },
      { label: 'Protect my organization', icon: '🛡️', nextStep: 'service', serviceHref: '/cybersecurity' },
      { label: 'I need help, contact support', icon: '📞', nextStep: 'contact' },
    ],
  },
];

interface QuizState {
  currentStep: number;
  answers: { [key: string]: string };
  resolved?: { type: string; href: string; label: string };
}

const REDIRECT_MAP: Record<string, { href: string; label: string }> = {
  ai: { href: '/ai-services', label: 'AI Services' },
  it: { href: '/it-services/data-engineering', label: 'IT Services' },
  tool: { href: '/ai-tools', label: 'AI Tools Directory' },
  automation: { href: '/ai-services/process-automation', label: 'AI Automation' },
  analytics: { href: '/data-analytics', label: 'AI Analytics & BI' },
  'AI services': { href: '/ai-services', label: 'AI Services Overview' },
  cybersecurity: { href: '/cybersecurity', label: 'Cybersecurity Services' },
};

export default function AIAssistant404(): JSX.Element {
  const [quiz, setQuiz] = useState<QuizState>({ currentStep: 0, answers: {} });
  const [customSearch, setCustomSearch] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const currentQuestion = quizQuestions[quiz.currentStep];
  const isLastStep = quiz.currentStep >= quizQuestions.length - 1;

  const handleOption = (option: QuizQuestion['options'][0]) => {
    const newAnswers = { ...quiz.answers, [currentQuestion.id]: option.label };

    if (option.nextStep === 'contact') {
      setQuiz({ ...quiz, answers: newAnswers, resolved: { type: 'contact', href: '/contact', label: 'Contact Our Team' } });
      return;
    }

    if (option.nextStep === 'service' && option.serviceHref) {
      setQuiz({ ...quiz, answers: newAnswers, resolved: { type: 'service', href: option.serviceHref, label: option.label } });
      return;
    }

    if (option.nextStep === 'solution' && option.solutionHref) {
      setQuiz({ ...quiz, answers: newAnswers, resolved: { type: 'solution', href: option.solutionHref, label: option.label } });
      return;
    }

    if (option.nextStep === 'search' && option.searchTerm) {
      setQuiz({ ...quiz, answers: newAnswers });
      setCustomSearch(option.searchTerm);
      setShowSearch(true);
      return;
    }

    if (option.nextStep === 'category' && option.category) {
      const redirect = REDIRECT_MAP[option.category];
      if (redirect) {
        setQuiz({ ...quiz, answers: newAnswers, resolved: { type: 'category', href: redirect.href, label: redirect.label } });
      }
      return;
    }

    // Advance to next step
    setQuiz({ ...quiz, answers: newAnswers, currentStep: quiz.currentStep + 1 });
  };

  const handleRestart = () => {
    setQuiz({ currentStep: 0, answers: {} });
    setCustomSearch('');
    setShowSearch(false);
  };

  const suggestions = useMemo(() => {
    if (showSearch && customSearch) {
      return fuzzyMatch(customSearch, SITE_ITEMS, 6);
    }
    return [];
  }, [showSearch, customSearch]);

  const progressPercent = ((quiz.currentStep + 1) / quizQuestions.length) * 100;

  return (
    <main className="flex min-h-[85vh] flex-col items-center bg-slate-950 px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Page Not Found — AI Assistant',
            description: 'Page not found? Our AI assistant will help you navigate to the right page, service, or solution.',
            url: typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com',
          }),
        }}
      />

      <div className="w-full max-w-3xl space-y-10">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
            <AlertCircle className="h-8 w-8" />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            <br />
            Let our AI assistant help you find what you need.
          </p>
        </div>

        {/* === AI Assistant Quiz === */}
        <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-slate-900 via-slate-900/95 to-purple-900/20 p-6 shadow-2xl shadow-purple-500/10">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-purple-200">AI Assistant</h2>
              <p className="text-xs text-slate-500">Answering a few questions helps me find exactly what you need</p>
            </div>
            <div className="ml-auto">
              <button
                onClick={handleRestart}
                className="text-xs text-slate-500 hover:text-purple-400 transition-colors flex items-center gap-1"
                aria-label="Restart quiz"
              >
                <X className="h-3.5 w-3.5" /> Restart
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {!quiz.resolved ? (
            <div className="space-y-5">
              <p className="text-sm text-slate-300">
                <span className="text-purple-400 font-medium">Step {quiz.currentStep + 1}</span>
                {' · '}
                {currentQuestion.question}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOption(option)}
                    className="group flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-900/60 px-5 py-3.5 text-sm font-medium text-slate-200 transition hover:border-purple-400/60 hover:bg-purple-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                  >
                    <span className="text-lg">{option.icon}</span>
                    <span className="truncate">{option.label}</span>
                    <ArrowRight className="ml-auto h-4 w-4 text-purple-400 opacity-0 transition-opacity group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Resolved — show result */
            <div className="text-center py-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-green-300">Found it!</h3>
              <p className="mt-2 text-sm text-slate-400">Based on your answers, we recommend:</p>
              <Link
                href={quiz.resolved.href}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-500 hover:-translate-y-0.5 hover:shadow-xl"
              >
                {quiz.resolved.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-4 text-xs text-slate-500">
                Not what you were looking for?{' '}
                <button onClick={handleRestart} className="text-purple-400 hover:underline">
                  Try again
                </button>
              </p>
            </div>
          )}
        </div>

        {/* === Manual Search === */}
        <div className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Or search directly
          </p>
          <div className="relative">
            <div className="relative flex items-center rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 shadow-lg focus-within:border-purple-400/50 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
              <Search className="h-5 w-5 flex-shrink-0 text-slate-500" />
              <input
                type="text"
                placeholder="Search for a tool, service, or page..."
                className="w-full bg-transparent pl-3 pr-4 text-base text-white placeholder-slate-400 outline-none"
                value={customSearch}
                onChange={(e) => {
                  setCustomSearch(e.target.value);
                  setShowSearch(true);
                }}
                onFocus={() => setShowSearch(true)}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
              {customSearch && (
                <button
                  onClick={() => {
                    setCustomSearch('');
                    setShowSearch(false);
                  }}
                  className="flex-shrink-0 rounded-full p-1 text-slate-500 hover:bg-slate-700 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {showSearch && customSearch && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/95 shadow-2xl backdrop-blur-sm">
                <ul className="py-2" role="listbox">
                  {suggestions.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-800/70 transition-colors"
                        onClick={() => {
                          setCustomSearch('');
                          setShowSearch(false);
                        }}
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-medium text-white">{item.title}</p>
                          <p className="truncate text-xs text-slate-500">{item.category}</p>
                        </div>
                        {item.score >= 80 && (
                          <span className="flex-shrink-0 rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">
                            {item.score >= 90 ? 'Exact' : 'Match'}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {showSearch && customSearch && suggestions.length === 0 && (
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/30 p-4 text-center mt-2">
                <p className="text-sm text-slate-400">
                  No matching pages found for &ldquo;<span className="text-slate-200">{customSearch}</span>&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Popular destinations */}
        <div className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-300">
            Popular destinations
          </p>
          <p className="mt-1 text-sm text-slate-500">Jump to the page you need</p>
          <nav className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5" aria-label="Popular pages">
            {[
              { title: 'AI Tools', href: '/ai-tools', icon: <Zap className="h-4 w-4" /> },
              { title: 'AI Lab', href: '/ai-lab', icon: <Sparkles className="h-4 w-4" /> },
              { title: 'Services', href: '/services', icon: <LayoutGrid className="h-4 w-4" /> },
              { title: 'Automation', href: '/automation', icon: <Zap className="h-4 w-4" /> },
              { title: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-950/70 px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:border-purple-400/40 hover:text-white"
              >
                {link.icon}
                <span className="truncate">{link.title}</span>
                <ArrowRight className="ml-auto h-3.5 w-3.5 flex-shrink-0 text-slate-600" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact footer */}
        <div className="text-center">
          <p className="text-sm text-slate-500">
            Still lost? Contact us at{' '}
            <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:underline">
              kleber@ziontechgroup.com
            </a>{' '}
            or call{' '}
            <span className="text-purple-400 font-medium">+1 302 464 0950</span>
          </p>
          <address className="mt-3 text-xs text-slate-600 not-italic">
            364 E Main St STE 1008, Middletown, DE 19709
          </address>
        </div>
      </div>
    </main>
  );
}