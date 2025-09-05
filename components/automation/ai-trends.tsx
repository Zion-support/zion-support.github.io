<<<<<<< HEAD
import fs from 'fs',
import path from 'path',
export type Trend = {
  id: string,
  date: string,
  title: string,
  highlights: string[],
  summary: string,
  tags: string[]
},

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'dataai-trends.json'),
  let items: Trend[] = [],
  try {
    const raw = fs.readFileSync(file, 'utf-8'),
    items = JSON.parse(raw)
  } catch {}
  items.sort((a, b) => (a.date < b.date ? 1 : -1)),
  return { props: { items } }
}

export default function AiTrendsPage({ items }: { items: Trend[] }) {
  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>AI Automation: Trend Watch</h1>
      <p className=&quot;text-gray-600&quot;>Autonomously generated insights on AI, dev tools, and cloud trends.</p>
      <div className=&quot;grid grid-cols-1 gap-4&quot;>
        {items.map((t) => (
          <div key={t.id} className=&quot;border rounded p-4 space-y-2&quot;>
            <div className=&quot;flex items-center justify-between&quot;>
              <div className=&quot;font-medium&quot;>{t.title}</div>
              <div className=&quot;text-xs text-gray-500&quot;>{new Date(t.date).toLocaleDateString()}</div>
            </div>
            <div className=&quot;text-sm text-gray-700&quot;>{t.summary}</div>
            <ul className=&quot;list-disc pl-5 text-sm text-gray-700&quot;>
              {t.highlights.map((h, i) => (<li key={i}>{h}</li>))}
            </ul>
            <div className=&quot;flex flex-wrap gap-2 pt-1&quot;>
              {t.tags.map(tag => (<span key={tag} className=&quot;text-xs px-2 py-0.5 rounded bg-gray-100&quot;>{tag}</span>))}
=======
import fs from 'fs';
import path from 'path';

export type Trend = {_id: string;
  date: string;
  title: string;
  highlights: string[];
  summary: string;
  tags: string[];};

export async function getServerSideProps() {_const _file = path.join(process.cwd(), _'data', _'ai-trends.json');
  let items: Trend[] = [];
  try {
    const _raw = fs.readFileSync(file, _'utf-8');
    items = JSON.parse(raw);} catch {}
  items.sort(_(a, _b) => (a.date < b.date ? 1 : -1));
  return {_props: { items} };
}

export default function AiTrendsPage(_{_items}: {_items: Trend[]}) {_return (_<div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: Trend Watch</h1>
      <p className="text-gray-600">Autonomously generated insights on AI, _dev tools, _and cloud trends.</p>
      <div className="grid grid-cols-1 gap-4">
        {items.map((t) => (
          <div key={t.id} className="border rounded p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="font-medium">{_t.title}</div>
              <div className="text-xs text-gray-500">{_new Date(t.date).toLocaleDateString()}</div>
            </div>
            <div className="text-sm text-gray-700">{_t.summary}</div>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {_t.highlights.map(_(h, _i) => (<li key={i}>{_h}</li>))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-1">
              {_t.tags.map(tag => (<span key={tag} className="text-xs px-2 py-0.5 rounded bg-gray-100">{_tag}</span>))}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}