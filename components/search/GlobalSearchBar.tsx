import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function GlobalSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const controller = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
    controller.current?.abort();
    controller.current = new AbortController();
    const run = async () => {
      try {
<<<<<<< HEAD
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {
          signal: controller.current!.signal,
        });
=======
<<<<<<< HEAD
<<<<<<< HEAD
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {
          signal: controller.current!.signal,
        });
=======
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, { signal: controller.current!.signal }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        const j = await r.json();
        setSuggestions(j.suggestions || []);
        setOpen(true);
      } catch {}
    };
    const id = setTimeout(run, 150);
<<<<<<< HEAD
    return () => clearTimeout(id);  }, [query]);
=======
<<<<<<< HEAD
    return () => clearTimeout(id);
=======
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, { signal: controller.current!.signal }),
        const j = await r.json();
        setSuggestions(j.suggestions || []);
        setOpen(true)
      } catch {}
    };
    const id = setTimeout(run, 150);
    return () => clearTimeout(id)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return () => clearTimeout(id)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [query]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    fetch('/api/telemetry/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q: query }),
    }).catch(() => {});
    router.push(`/search?q=${encodeURIComponent(query)}`);
<<<<<<< HEAD
    setOpen(false);  };

  const startVoice = () => {
    if (typeof window === 'undefined') return;
    const Speech: any =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;    if (!Speech) return;
=======
    setOpen(false);
=======
    fetch('/api/telemetry/search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q: query }) }).catch(() => {}),
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    fetch('/api/telemetry/search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q: query }) }).catch(() => {}),
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const startVoice = () => {
    if (typeof window === 'undefined') return;
<<<<<<< HEAD
<<<<<<< HEAD
    const Speech: any =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
=======
    const Speech: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const Speech: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    if (!Speech) return;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
      const transcript = e.results?.[0]?.[0]?.transcript || '';
<<<<<<< HEAD
      if (transcript) setQuery(q => (q ? q + ' ' + transcript : transcript));
=======
<<<<<<< HEAD
<<<<<<< HEAD
      if (transcript) setQuery(q => (q ? q + ' ' + transcript : transcript));
=======
      if (transcript) setQuery((q) => (q ? q + ' ' + transcript : transcript))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };
    rec.start();
  };

  
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
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >
=======
<<<<<<< HEAD
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'
=======
      if (transcript) setQuery((q) => (q ? q + ' ' + transcript : transcript))
    };
    rec.start()
  };

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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
