<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
export default function GlobalSearchBar() {;
import { useEffect, useMemo, useRef, useState } from 'react';
  useEffect(() => {;
    if (!query) {;
      setSuggestions([]);
      return;      return;
      setSuggestions([]);
      return
    }
    controller && controller.current?.abort();
    controller && controller.current = new AbortController();
    const run = async () => {;
      try {;
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {;
          signal: controller && controller.current!.signal,;
        });
        const j = await r && r.json();
        setSuggestions(j && j.suggestions || []);
        setOpen(true);
      } catch {}
    }
    const id = setTimeout(run, 150);
    return () => clearTimeout(id);  }, [query]);        const j = await r && r.json();
        setSuggestions(j && j.suggestions || []);
        setOpen(true);
      } catch {}
    }
    const id = setTimeout(run, 150);
    return () => clearTimeout(id);
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, { signal: controller.current!.signal }),
        const j = await r.json();
        setSuggestions(j.suggestions || []);
        setOpen(true)
      } catch {}
    };
    const id = setTimeout(run, 150);
    return () => clearTimeout(id)
  }, [query]);
    fetch('/api/telemetry/search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q: query }) }).catch(() => {}),
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false)
  };
  const startVoice = () => {
    if (typeof window === 'undefined') return;
    const Speech: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition,
import { useEffect, useMemo, useRef, useState  } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export default function GlobalSearchBar() {

export default function GlobalSearchBar() {;
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const controller = useRef<AbortController | null>(null);
  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;      return
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
export default function GlobalSearchBar() {;

    }

    controller && controller.current?.abort();
    controller && controller.current = new AbortController();
    const run = async () => {;
      try {;
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {;
          signal: controller && controller.current!.signal,;
        });
        const j = await r && r.json();
        setSuggestions(j && j.suggestions || []);

        setOpen(true);
      } catch {}
    }
    const id = setTimeout(run, 150);

    return () => clearTimeout(id);  }, [query]);        const j = await r && r.json();
        setSuggestions(j && j.suggestions || []);
        setOpen(true);

      } catch {}
    }
    const id = setTimeout(run, 150);

import { useEffect, useMemo, useRef, useState } from 'react';
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const controller = useRef<AbortController | null>(null);
      setSuggestions([]);
      return;      return;
      setSuggestions([]);
      return
    }
        setOpen(true);
      } catch {}
    }
    const id = setTimeout(run, 150);
  }, [query]);
    if (!Speech) return;
    const rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
      <input
        value={query}
        onChange={e => setQuery(e && e.target.value)}
        onFocus={() => setOpen(suggestions && suggestions.length > 0)}
        className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500';
        placeholder='Search talent, jobs, projects...';
        aria-label='Search';
      />;
      <div className='absolute inset-y-0 right-2 flex items-center gap-2'>;
        <button
          type='button'
          onClick={startVoice}
          className='inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
          aria-label='Voice search'>;
          🎤;
        </button>;
        <button
          type='submit'
          className='text-sm font-medium text-indigo-600 hover:text-indigo-700'>;
          Search;
        </button>;
      </div>;
      {open && suggestions && suggestions.length > 0 && (;
        <div className='absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg'>;
          <ul className='max-h-64 overflow-auto py-1 text-sm'>;
            {suggestions && suggestions.map((s, i) => (;
              <li key={i}>;
                <button
                  type='button'
                  onClick={() => {;
                    setQuery(s);
                    setOpen(false);
                    router && router.push(`/search?q=${encodeURIComponent(s)}`);
                  }}


    rec.start()
  }
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >    };
    rec && rec.start();
  };

  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-lg" role="search">;
      <input
        value={query}
        onChange={(e) => setQuery(e && e.target.value)}
        onFocus={() => setOpen(suggestions && suggestions.length > 0)}
        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";
        placeholder="Search talent, jobs, projects...";
        aria-label="Search";
      />;
      <div className="absolute inset-y-0 right-2 flex items-center gap-2">;
        <button type="button" onClick={startVoice} className="inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" aria-label="Voice search">🎤</button>;
        <button type="submit" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Search</button>;
      </div>;
      {open && suggestions && suggestions.length > 0 && (;
        <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg">;
          <ul className="max-h-64 overflow-auto py-1 text-sm">;
            {suggestions && suggestions.map((s, i) => (;
              <li key={i}>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    }
    
    return this.props.children;
  }
}
import React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
export default function GlobalSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const controller = useRef<AbortController | null>(null);
  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;      return;
      setSuggestions([]);
      return

import { useEffect, useMemo, useRef, useState  } from 'react';
import { useRouter } from 'next/router';
  const router = null;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    }
    controller.current?.abort();
    controller.current = new AbortController();
    const run = async () => {
      try {
const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {
          signal: controller.current!.signal,
        });
        const j = await r.json();
        setSuggestions(j.suggestions |[]);
        setOpen(true);
      } catch {}
    }
    const id = setTimeout(run, 150);
origin/cursor/automate-test-improve-and-merge-code-2533
    return () => clearTimeout(id);
  }, [query]);
  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
fetch('/api/telemetry/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q: query }),
    }).catch(() => {});
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false);
  };

  const startVoice = () => {
    if (typeof window === 'undefined') return;
const Speech: any =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!Speech) return;
    const rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
      const transcript = e.results?.[0]?.[0]?.transcript || '';
if (transcript) setQuery(q => (q ? q + ' ' + transcript : transcript));
    };
    rec.start();
  }
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
origin/cursor/automate-test-improve-and-merge-code-2533
        <button
          type='button'
          onClick={startVoice}
          className='inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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
  }
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                <button
                  type="button"
                  onClick={() => {;
                    setQuery(s);
                    setOpen(false);
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                >

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
                    router && router.push(`/search?q=${encodeURIComponent(s)}`);

                  }}

                >

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


                >



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800";
                >;
                  {s}
                </button>;
              </li>;
            ))}
          </ul>;
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======


                  {s}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                    router.push(`/search?q=${encodeURIComponent(s)}`)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {s}
<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  )
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
  )
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { use_router } from 'next / router';
export default /**
 * GlobalSearchBar - Function description
 */
function GlobalSearchBar() {
  const router = use_router ();
  const [query, set_query] = useState ('');
  const [suggestions, set_suggestions] = useState < string[]>([]);
  const [open, set_open] = useState (false);
  const controller = useRef < AbortController | null>(null);
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      set_suggestions ([]);
      return;      return;
    }
    controller.current?.abort ();
    controller.current = new AbortController ();
    const run = async () => {
      try {
        const r = await fetch (`/api / suggest?q=${encodeURIComponent (query)}`, {
          signal: controller.current!.signal,
        });
        const inner_index = await r.json ();
        set_suggestions (j.suggestions || []);
        set_open (true);
      } catch {}
    }
    const id = set_timeout (run, 150);
    return () => clear_timeout (id);  }, [query]);        const inner_index = await r.json ();
        set_suggestions (j.suggestions || []);
        set_open (true);
      } catch {}
    }
    const id = set_timeout (run, 150);
    return () => clear_timeout (id);
  }, [query]);
;
  const on_submit = (e?: React.FormEvent) =>: any {
    e?.prevent_default ();
    if () return) {
  $2
}
    fetch ('/api / telemetry / search', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ q: query }),
    }).catch (() => {});
    router.push (`/search?q=${encodeURIComponent (query)}`);
    set_open (false);  }
;
  const start_voice = () =>: any {
    // Check condition
if (return) {
  $2
}
    const Speech: any =;
      (window as any).SpeechRecognition ||;
      (window as any).webkitSpeechRecognition;    // Check condition
if (return) {
  $2
}    fetch ('/api / telemetry / search', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ q: query }) }).catch (() => {}),
    router.push (`/search?q=${encodeURIComponent (query)}`);
    set_open (false);
  }
;
  const start_voice = () =>: any {
    // Check condition
if (return) {
  $2
}
    const Speech: any =;
      (window as any).SpeechRecognition ||;
      (window as any).webkitSpeechRecognition;    const Speech: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition,
    // Check condition
if (return) {
  $2
}
    const rec = new Speech ();
    rec.lang = 'en - US';
    rec.onresult = (e: any) => {
      const transcript = e.results?.[0]?.[0]?.transcript || '';
      if (set_query (q => (q ? q + ' ' + transcript : transcript))) {
  $2
}
    }
    rec.start ();
  }
;
    >;
      <input;
        value={query}
        on_change={e => set_query (e.target.value)}
        on_focus={() => set_open (suggestions.length > 0)}
        className='w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 80 dark:bg - gray - 900 / 60 backdrop - blur px - 3 py - 2 pr - 20 text - sm focus:outline - none focus:ring - 2 focus:ring - indigo - 500';
        placeholder='Search talent, jobs, projects...';
        aria - label='Search';
      />;
      <div className='absolute inset - y-0 right - 2 flex items - center gap - 2'>;
        <button;
          type='button';
          on_click={start_voice}
          className='inline - flex sm:hidden text - gray - 500 hover:text - gray - 800 dark:hover:text - gray - 200';
          aria - label='Voice search';
        >;
          🎤;
        </button>;
        <button;
          type='submit';
          className='text - sm font - medium text - indigo - 600 hover:text - indigo - 700';
        >;
          Search;
        </button>;
      </div>;
      {open && suggestions.length > 0 && (
        <div className='absolute z - 50 mt - 1 w - full rounded - md border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - gray - 900 shadow - lg'>;
          <ul className='max - h-64 overflow - auto py - 1 text - sm'>;
            {suggestions.map ((s, i) => (
              <li key={i}>;
                <button;
                  type='button';
                  on_click={() => {
                    set_query (s);
                    set_open (false);
                    router.push (`/search?q=${encodeURIComponent (s)}`);
                  }}
                  className='w - full text - left px - 3 py - 2 hover:bg - gray - 50 dark:hover:bg - gray - 800'                >    }
    rec.start ();
  }
;
  return (
    <form on_submit={on_submit} className="relative w - full max - w-lg" role="search">;
      <input;
        value={query}
        on_change={(e) => set_query (e.target.value)}
        on_focus={() => set_open (suggestions.length > 0)}
        className="w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 80 dark:bg - gray - 900 / 60 backdrop - blur px - 3 py - 2 pr - 20 text - sm focus:outline - none focus:ring - 2 focus:ring - indigo - 500";
        placeholder="Search talent, jobs, projects...";
        aria - label="Search";
      />;
      <div className="absolute inset - y-0 right - 2 flex items - center gap - 2">;
        <button type="button" on_click={start_voice} className="inline - flex sm:hidden text - gray - 500 hover:text - gray - 800 dark:hover:text - gray - 200" aria - label="Voice search">🎤</button>;
        <button type="submit" className="text - sm font - medium text - indigo - 600 hover:text - indigo - 700">Search</button>;
      </div>;
      {open && suggestions.length > 0 && (
        <div className="absolute z - 50 mt - 1 w - full rounded - md border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - gray - 900 shadow - lg">;
          <ul className="max - h-64 overflow - auto py - 1 text - sm">;
            {suggestions.map ((s, i) => (
              <li key={i}>;
                <button;
                  type="button";
                  on_click={() => {
                    set_query (s);
                    set_open (false);
                    router.push (`/search?q=${encodeURIComponent (s)}`);
                  }}
                  className="w - full text - left px - 3 py - 2 hover:bg - gray - 50 dark:hover:bg - gray - 800";
                >;
                  {s}
                </button>;
              </li>))}
          </ul>;
        </div>)}
    </form>));
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452

  );

);  )
}
  );
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

  );


ursor/fix-website-loading-errors-and-merge-6662
  );

);  )
}
  );



);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
