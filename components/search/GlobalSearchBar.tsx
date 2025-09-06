<<<<<<< HEAD
import { useEffect, useMemo, useRef, useState  } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function GlobalSearchBar() {
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
import { useEffect, useMemo, useRef, useState  } from 'react';
=======
import { useEffect, useMemo, useRef, useState } from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { useRouter } from 'next/router';
<<<<<<< HEAD
export default function GlobalSearchBar() {

=======
export default function GlobalSearchBar() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const controller = useRef<AbortController | null>(null);
  useEffect(() => {
    if (!query) {
      setSuggestions([]);
<<<<<<< HEAD
      return;      return
=======
      return;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
    controller.current?.abort();
    controller.current = new AbortController();
    const run = async () => {
      try {
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {
          signal: controller.current!.signal
        });
        const j = await r.json();
        setSuggestions(j.suggestions |[]);
        setOpen(true);
      } catch {}
    }
    const id = setTimeout(run, 150);
<<<<<<< HEAD
    return () => clearTimeout(id);  }, [query]);        const j = await r.json();
        setSuggestions(j.suggestions |[]);
        setOpen(true)
      } catch {}
    }
    const id = setTimeout(run, 150);
    return () => clearTimeout(id)
=======
    return () => clearTimeout(id);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }, [query]);
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
    fetch('/api/telemetry/search', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ q: query })
    }).catch(() => {});
    router.push(`/search?q=${encodeURIComponent(query)}`);
<<<<<<< HEAD
    setOpen(false);  }
  const startVoice = () => {
    if (typeof window === 'undefined') return;
    const Speech: any =
      (window as any).SpeechRecognition |
      (window as any).webkitSpeechRecognition;    if (!Speech) return;    fetch('/api/telemetry/search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q: query }) }).catch(() => {})
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false)
  }
  const startVoice = () => {
    if (typeof window === 'undefined') return;
    const Speech: any =
      (window as any).SpeechRecognition |
      (window as any).webkitSpeechRecognition;    const Speech: any = (window as any).SpeechRecognition |(window as any).webkitSpeechRecognition
=======
    setOpen(false);
  };

  const startVoice = () => {
    if (typeof window === 'undefined') return;
    const Speech: any =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    if (!Speech) return;
    const rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
<<<<<<< HEAD
      const transcript = e.results?.[0]?.[0]?.transcript |'';
=======
      const transcript = e.results?.[0]?.[0]?.transcript || '';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      if (transcript) setQuery(q => (q ? q + ' ' + transcript : transcript));
    }
    rec.start();
<<<<<<< HEAD
  }
=======
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    >
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        onFocus={() => setOpen(suggestions.length > 0)}
        className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
        placeholder='Search talent, jobs, projects...'
        aria-label='Search'
      />
      <div className='absolute inset-y-0 right-2 flex items-center gap-2'>
        <button
          type='button'
          onClick={startVoice}
          className='inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
          aria-label='Voice search'
        >
          🎤
        </button>
        <button
          type='submit'
          className='text-sm font-medium text-indigo-600 hover:text-indigo-700'
        >
          Search
        </button>
      </div>
      {open && suggestions.length > 0 && (
        <div className='absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg'>
          <ul className='max-h-64 overflow-auto py-1 text-sm'>
            {suggestions.map((s, i) => (
              <li key={i}>
                <button
                  type='button'
                  onClick={() => {
                    setQuery(s);
                    setOpen(false);
                    router.push(`/search?q=${encodeURIComponent(s)}`);
                  }}
<<<<<<< HEAD
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >    }
    rec.start()
<<<<<<< HEAD
  }
=======
  };

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-lg" role="search">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setOpen(suggestions.length > 0)}
        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Search talent, jobs, projects..."
        aria-label="Search"
      />
      <div className="absolute inset-y-0 right-2 flex items-center gap-2">
        <button type="button" onClick={startVoice} className="inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" aria-label="Voice search">🎤</button>
        <button type="submit" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Search</button>
      </div>
      {open && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg">
          <ul className="max-h-64 overflow-auto py-1 text-sm">
            {suggestions.map((s, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => {
                    setQuery(s);
                    setOpen(false);

                    router.push(`/search?q=${encodeURIComponent(s)}`)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
=======
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                >
=======
<<<<<<< HEAD
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >

                >

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
                >

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
<<<<<<< HEAD
);  )
}
=======
  );
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
