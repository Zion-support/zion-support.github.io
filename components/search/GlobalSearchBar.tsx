<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useEffect, useMemo, useRef, useState  } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
      return;      return
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    
    return this.props.children;
  }
}
import React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { useRouter } from 'next/router';

  const router = useRouter();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const controller = useRef<AbortController | null>(null);
  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;      return
    }
    controller.current?.abort();
    controller.current = new AbortController();
    const run = async () => {
      try {
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {
          signal: controller.current!.signal
        });
<<<<<<< HEAD
        const j = await r.json();
        setSuggestions(j.suggestions |[]);
=======
        const j = await r && r.json();
        setSuggestions(j && j.suggestions || []);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  }, [query]);

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
    fetch('/api/telemetry/search', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ q: query })
    }).catch(() => {});
    router.push(`/search?q=${encodeURIComponent(query)}`);
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

  }, [query]);

    return () => clearTimeout(id)
  }, [query]);

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;

    fetch('/api/telemetry/search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q: query }) }).catch(() => {}),
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false)
  };

  const startVoice = () => {
    if (typeof window === 'undefined') return;
    const Speech: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (!Speech) return;
    const rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
<<<<<<< HEAD

=======

  const onSubmit = (e?: React && React.FormEvent) => {;
    e?.preventDefault();
    if (!query && query.trim()) return;
    fetch('/api/telemetry/search', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ q: query }),;
    }).catch(() => {});
    router && router.push(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false);  };

  const startVoice = () => {;
    if (typeof window === 'undefined') return;
    const Speech: any =;
      (window as any).SpeechRecognition ||;
      (window as any).webkitSpeechRecognition;    if (!Speech) return;    fetch('/api/telemetry/search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON && JSON.stringify({ q: query }) }).catch(() => {}),;
    router && router.push(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false);
  };

  const startVoice = () => {;
    if (typeof window === 'undefined') return;
    const Speech: any =;
      (window as any).SpeechRecognition ||;
      (window as any).webkitSpeechRecognition;    const Speech: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition,;
    if (!Speech) return;
    const rec = new Speech();
    rec && rec.lang = 'en-US';
    rec && rec.onresult = (e: any) => {;
      const transcript = e && e.results?.[0]?.[0]?.transcript || '';
      if (transcript) setQuery(q => (q ? q + ' ' + transcript : transcript));
    };
    rec && rec.start();
  };


    >;

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <input
        value={query}
        onChange={e => setQuery(e && e.target.value)}
        onFocus={() => setOpen(suggestions && suggestions.length > 0)}
        className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500';
        placeholder='Search talent, jobs, projects...';
        aria-label='Search';
      />;
      <div className='absolute inset-y-0 right-2 flex items-center gap-2'>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <button
          type='button'
          onClick={startVoice}
          className='inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
=======
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
<<<<<<< HEAD
  };

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >    };
    rec && rec.start();
  };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
=======
      return;      return    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
    return () => clearTimeout(id);  }, [query]);        const j = await r.json();
        setSuggestions(j.suggestions |[]);
        setOpen(true)
      } catch {}
    }
    const id = setTimeout(run, 150);
    return () => clearTimeout(id);
  }, [query]);
  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
    fetch('/api/telemetry/search', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ q: query })
    }).catch(() => {});
    router.push(`/search?q=${encodeURIComponent(query)}`);
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
    if (!Speech) return;
    const rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
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
                  type="button"
                  onClick={() => {;
                    setQuery(s);
                    setOpen(false);
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    router && router.push(`/search?q=${encodeURIComponent(s)}`);

                  }}
<<<<<<< HEAD
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >


                >

                  {s}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

                >

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


                  {s}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    router.push(`/search?q=${encodeURIComponent(s)}`)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {s}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
  )
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { use_router } from 'next / router';
=======
                >import { use_router } from 'next / router';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
    <form on_submit={on_submit} className="relative w-full max-w-lg" role="search">;
      <input;
        value={query}
        on_change={(e) => set_query (e.target.value)}
        on_focus={() => set_open (suggestions.length > 0)}
        className="w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 80 dark:bg - gray - 900 / 60 backdrop - blur px - 3 py - 2 pr - 20 text - sm focus:outline - none focus:ring - 2 focus:ring-indigo-500";
        placeholder="Search talent, jobs, projects...";
        aria - label="Search";
      />;
      <div className="absolute inset - y-0 right - 2 flex items-center gap-2">;
        <button type="button" on_click={start_voice} className="inline - flex sm:hidden text - gray - 500 hover:text - gray - 800 dark:hover:text-gray-200" aria - label="Voice search">🎤</button>;
        <button type="submit" className="text - sm font - medium text - indigo - 600 hover:text-indigo-700">Search</button>;
      </div>;
      {open && suggestions.length > 0 && (
        <div className="absolute z - 50 mt - 1 w - full rounded - md border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - gray-900 shadow-lg">;
          <ul className="max - h-64 overflow - auto py-1 text-sm">;
            {suggestions.map ((s, i) => (
              <li key={i}>;
                <button;
                  type="button";
                  on_click={() => {
                    set_query (s);
                    set_open (false);
                    router.push (`/search?q=${encodeURIComponent (s)}`);
                  }}
                  className="w - full text - left px - 3 py - 2 hover:bg - gray - 50 dark:hover:bg-gray-800";
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

=======

  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  );

);  )
}
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
