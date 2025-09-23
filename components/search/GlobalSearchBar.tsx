<<<<<<< HEAD
"use client";
import { useEffectuseMemouseRefuseState } from 'react';
=======
import { useEffect, useMemo, useRef, useState } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import { useRouter } from 'next/router';

export default function GlobalSearchBar() {
  const router = useRouter();
<<<<<<< HEAD
  const [querysetQuery] = useState('');
  const [suggestionsetSuggestions] = useState<string[]>([]);
  const [opensetOpen] = useState(false);
=======
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616
  const controller = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    controller.current?.abort();
    controller.current = new AbortController();
    const run = async () => {
      try {
<<<<<<< HEAD
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`{ signal: controller.current!.signal });
=======
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, { signal: controller.current!.signal });
>>>>>>> origin/auto/autonomy-17186719616
        const j = await r.json();
        setSuggestions(j.suggestions || []);
        setOpen(true);
      } catch {}
    };
<<<<<<< HEAD
    const id = setTimeout(run150);
    return () => clearTimeout(id);
  }[query]);
=======
    const id = setTimeout(run, 150);
    return () => clearTimeout(id);
  }, [query]);
>>>>>>> origin/auto/autonomy-17186719616

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
<<<<<<< HEAD
    fetch('/api/telemetry/search'{ method: ''POST', 'headers: { 'Content-Type': 'application/json' }body: JSON.stringify({ q: query }) }).catch(() => {});
=======
    fetch('/api/telemetry/search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q: query }) }).catch(() => {});
>>>>>>> origin/auto/autonomy-17186719616
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false);
  };

  const startVoice = () => {
    if (typeof window === 'undefined') return;
    const Speech: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!Speech) return;
    const rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
<<<<<<< HEAD
      const transcript = e.results?.[0]?.[0]?.transcript || ', ';
=======
      const transcript = e.results?.[0]?.[0]?.transcript || '';
>>>>>>> origin/auto/autonomy-17186719616
      if (transcript) setQuery((q) => (q ? q + ' ' + transcript : transcript));
    };
    rec.start();
  };

  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-lg" role="search">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setOpen(suggestions.length > 0)}
        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
<<<<<<< HEAD
        placeholder="Search talentjobsprojects..."
=======
        placeholder="Search talent, jobs, projects..."
>>>>>>> origin/auto/autonomy-17186719616
        aria-label="Search"
      />
      <div className="absolute inset-y-0 right-2 flex items-center gap-2">
        <button type="button" onClick={startVoice} className="inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" aria-label="Voice search">🎤</button>
        <button type="submit" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Search</button>
      </div>
      {open && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg">
          <ul className="max-h-64 overflow-auto py-1 text-sm">
<<<<<<< HEAD
            {suggestions.map((si) => (
=======
            {suggestions.map((s, i) => (
>>>>>>> origin/auto/autonomy-17186719616
              <li key={i}>
                <button
                  type="button"
                  onClick={() => {
                    setQuery(s);
                    setOpen(false);
                    router.push(`/search?q=${encodeURIComponent(s)}`);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}