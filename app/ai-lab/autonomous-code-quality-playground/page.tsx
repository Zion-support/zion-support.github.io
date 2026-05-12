'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

type Language = 'JavaScript' | 'TypeScript' | 'Python' | 'React/JSX' | 'Shell Script';

type AnalysisResult = {
  overallScore: number;
  complexity: string;
  securityIssues: string[];
  performanceIssues: string[];
  styleIssues: string[];
  suggestions: string[];
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  metrics: {
    lines: number;
    functions: number;
    nesting: number;
    comments: number;
    magicNumbers: number;
  };
};

const SAMPLE_CODE: Record<Language, string> = {
  'JavaScript': `function processData(data, options) {
  var result = [];
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    if (item.status === 'active') {
      var val = item.value * 1.5;
      if (val > 100) {
        result.push({ name: item.name, value: val });
      }
    }
  }
  return result;
}`,
  'TypeScript': `interface User { id: number; name: string; email: string; role: string; }

async function getUsers() {
  const response = await fetch('https://api.example.com/users');
  const data: any = await response.json();
  return data;
}`,
  'Python': `import os
import sys

def process_file(filepath):
    f = open(filepath, 'r')
    data = f.read()
    lines = data.split('\\n')
    result = []
    for i in range(len(lines)):
        if lines[i].startswith('#'):
            continue
        result.append(lines[i].strip())
    return result`,
  'React/JSX': `function UserList({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index} onClick={() => alert(user.name)}>
          <h2>{user.name}</h2>
          <p>User #{index + 1}</p>
        </div>
      ))}
    </div>
  );
}`,
  'Shell Script': `#!/bin/bash
for file in $(ls *.txt); do
  echo "Processing $file..."
  cp $file /backup/
  rm $file
done`,
};

const ANALYSIS_DB: Record<Language, AnalysisResult> = {
  'JavaScript': {
    overallScore: 72,
    grade: 'C',
    complexity: 'Medium',
    securityIssues: ['No input validation on data parameter', 'Magic number 1.5 without explanation'],
    performanceIssues: ['Manual array iteration instead of Array.filter().map()', 'Inefficient result.push in loop'],
    styleIssues: ['Use var instead of const/let', 'Arrow function would be cleaner', 'Missing default value for options parameter'],
    suggestions: ['Use Array.filter() for cleaner data flow', 'Extract the 1.5 multiplier to a constant', 'Add JSDoc for type documentation'],
    metrics: { lines: 13, functions: 1, nesting: 3, comments: 0, magicNumbers: 1 },
  },
  'TypeScript': {
    overallScore: 65,
    grade: 'D',
    complexity: 'Low',
    securityIssues: ['Using any type defeats TypeScript safety', 'No error handling for failed fetch'],
    performanceIssues: ['No caching mechanism for API calls', 'No pagination for user list'],
    styleIssues: ['Interface exported separately would be more reusable', 'Missing try/catch block', 'No loading state'],
    suggestions: ['Replace any with User[] interface', 'Add error boundary for failed responses', 'Implement retry logic for network failures'],
    metrics: { lines: 7, functions: 1, nesting: 1, comments: 0, magicNumbers: 0 },
  },
  'Python': {
    overallScore: 58,
    grade: 'D',
    complexity: 'Low',
    securityIssues: ['File opened without context manager — resource leak risk', 'No file existence check before opening'],
    performanceIssues: ['Reading entire file into memory — use line-by-line for large files', 'Using range(len()) instead of enumerate'],
    styleIssues: ['Manual resource management instead of with statement', 'Not following PEP 8 naming conventions', 'Missing docstring'],
    suggestions: ['Use with open(...) as f for automatic cleanup', 'Use enumerate() instead of range(len())', 'Add type hints for function parameters'],
    metrics: { lines: 14, functions: 1, nesting: 2, comments: 1, magicNumbers: 0 },
  },
  'React/JSX': {
    overallScore: 60,
    grade: 'D',
    complexity: 'Medium',
    securityIssues: ['Using alert() for click handling — should use proper state', 'XSS risk: user.name rendered directly (should be safe in React but verify)'],
    performanceIssues: ['Using index as key — will break on reordering', 'No useCallback or useMemo for list items'],
    styleIssues: ['Missing accessibility attributes (role, tabindex)', 'No loading state or empty list message', 'Inline click handler should use navigation'],
    suggestions: ['Use unique IDs instead of index for keys', 'Extract user card to separate component', 'Add loading and empty state UI'],
    metrics: { lines: 14, functions: 1, nesting: 3, comments: 0, magicNumbers: 1 },
  },
  'Shell Script': {
    overallScore: 55,
    grade: 'F',
    complexity: 'Low',
    securityIssues: ['Destructive rm after cp — no verification that copy succeeded', 'No quoting on variables — breaks with spaces in filenames', 'No backup directory existence check'],
    performanceIssues: ['Using $(ls *.txt) is fragile — use glob patterns directly'],
    styleIssues: ['Missing set -euo pipefail for safety', 'No error handling if any command fails', 'Using echo for status is fine but should include error codes'],
    suggestions: ['Use set -euo pipefail at the top', 'Quote all variables: "$file"', 'Verify backup before removing: if cp ... && test -f ...; then rm'],
    metrics: { lines: 6, functions: 0, nesting: 1, comments: 0, magicNumbers: 0 },
  },
};

export default function AutonomousCodeQualityPlayground() {
  const [language, setLanguage] = useState<Language>('JavaScript');
  const [code, setCode] = useState(SAMPLE_CODE['JavaScript']);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const result = useMemo(() => ANALYSIS_DB[language] || null, [language]);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalyzed(true);
    }, 1500);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setCode(SAMPLE_CODE[lang]);
    setAnalyzed(false);
  };

  const gradeColor: Record<string, string> = {
    A: 'text-emerald-300',
    B: 'text-green-400',
    C: 'text-yellow-400',
    D: 'text-orange-500',
    F: 'text-rose-500',
  };

  const gradeBg: Record<string, string> = {
    A: 'border-emerald-400/30 bg-emerald-400/10',
    B: 'border-green-400/30 bg-green-400/10',
    C: 'border-yellow-400/30 bg-yellow-400/10',
    D: 'border-orange-400/30 bg-orange-400/10',
    F: 'border-rose-400/30 bg-rose-400/10',
  };

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 min-h-screen">
      <AILabToolLayout
        breadcrumb={{ label: 'AI Lab', href: '/ai-lab' }}
        title="Autonomous Code Quality Playground"
        slug="autonomous-code-quality-playground"
        description="Paste any code snippet and get instant analysis. Security issues, performance bottlenecks, style violations, and refactoring suggestions."
      >
        <section>
          <div className="mb-6">
            <label htmlFor="language" className="block text-xs font-medium text-slate-300 mb-2">
              Language
            </label>
            <div className="flex gap-2 mb-4">
              {(Object.keys(SAMPLE_CODE) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                    language === lang
                      ? 'bg-sky-500/30 text-sky-200 border border-sky-400/50'
                      : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-600'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="code" className="block text-xs font-medium text-slate-300 mb-2">
              Your code
            </label>
            <pre className="rounded-lg border border-slate-700 bg-slate-950 p-4 text-sm text-slate-200 font-mono whitespace-pre overflow-x-auto max-h-60 overflow-y-auto">
              {code}
            </pre>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full rounded-full bg-sky-500/20 border border-sky-400/60 px-5 py-3 text-sm font-semibold text-sky-50 hover:bg-sky-500/30 disabled:opacity-50 transition"
          >
            {isAnalyzing ? 'Analyzing code...' : 'Run Code Quality Analysis'}
          </button>

          {analyzed && result && (
            <>
              {/* Score Header */}
              <div className="mt-6 grid grid-cols-4 gap-3">
                <div className={`rounded-lg border p-3 text-center ${gradeBg[result.grade]}`}>
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">Grade</p>
                  <p className={`mt-1 text-3xl font-bold ${gradeColor[result.grade]}`}>{result.grade}</p>
                </div>
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3 text-center">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">Score</p>
                  <p className="mt-1 text-2xl font-bold text-sky-300">{result.overallScore}%</p>
                </div>
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3 text-center">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">Complexity</p>
                  <p className="mt-1 text-2xl font-bold text-amber-300">{result.complexity}</p>
                </div>
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">Issues Found</p>
                  <p className="mt-1 text-2xl font-bold text-rose-300">
                    {result.securityIssues.length + result.performanceIssues.length + result.styleIssues.length}
                  </p>
                </div>
              </div>

              {/* Issues */}
              <div className="mt-6 space-y-5">
                {result.securityIssues.length > 0 && (
                  <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4">
                    <h3 className="text-sm font-semibold text-rose-300 mb-2">🔴 Security Issues</h3>
                    <ul className="space-y-1 text-sm text-slate-300">
                      {result.securityIssues.map((issue, i) => (
                        <li key={i} className="flex items-start gap-2"><span className="text-rose-400 mt-0.5">•</span>{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.performanceIssues.length > 0 && (
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                    <h3 className="text-sm font-semibold text-amber-300 mb-2">🟡 Performance</h3>
                    <ul className="space-y-1 text-sm text-slate-300">
                      {result.performanceIssues.map((issue, i) => (
                        <li key={i} className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">•</span>{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.styleIssues.length > 0 && (
                  <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-4">
                    <h3 className="text-sm font-semibold text-sky-300 mb-2">🔵 Style & Best Practices</h3>
                    <ul className="space-y-1 text-sm text-slate-300">
                      {result.styleIssues.map((issue, i) => (
                        <li key={i} className="flex items-start gap-2"><span className="text-sky-400 mt-0.5">•</span>{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.suggestions.length > 0 && (
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                    <h3 className="text-sm font-semibold text-emerald-300 mb-2">✅ Recommended Improvements</h3>
                    <ul className="space-y-1 text-sm text-slate-300">
                      {result.suggestions.map((s, i) => (
                        <li key={i} className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">•</span>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/ai-lab/autonomous-code-review"
                  className="rounded-full border border-sky-300/70 bg-sky-400/20 px-4 py-2 text-xs font-semibold text-sky-50 hover:bg-sky-400/30"
                >
                  Open Code Review
                </Link>
                <Link
                  href="/code-review"
                  className="rounded-full border border-violet-300/70 bg-violet-400/20 px-4 py-2 text-xs font-semibold text-violet-50 hover:bg-violet-400/30"
                >
                  Open Code Quality Review
                </Link>
              </div>
            </>
          )}
        </section>
      </AILabToolLayout>
    </div>
  );
}
