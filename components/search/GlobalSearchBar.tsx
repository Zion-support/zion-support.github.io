<<<<<<< HEAD
<<<<<<< HEAD

import { useRouter } from 'next/router';

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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, { signal: controller.current!.signal }),
        const j = await r.json();
        setSuggestions(j.suggestions || []);
        setOpen(true)
      } catch {}
    };
    const id = setTimeout(run, 150);
    return () => clearTimeout(id)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }, [query]);

    return () => clearTimeout(id)
  }, [query]);

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

    if (!Speech) return;
    const rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {


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
<<<<<<< HEAD

=======


                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >    };
    rec && rec.start();
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
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
    return () => clearTimeout(id);  }, [query]);        const j = await r.json();
        setSuggestions(j.suggestions |[]);
        setOpen(true)
      } catch {}
    }
    const id = setTimeout(run, 150);
    return () => clearTimeout(id)
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    if (!Speech) return;
    const rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
<<<<<<< HEAD
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
      <input
        value={query}
        onChange={e => setQuery(e && e.target.value)}
        onFocus={() => setOpen(suggestions && suggestions.length > 0)}
        className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500';
        placeholder='Search talent, jobs, projects...';
        aria-label='Search';
      />;
      <div className='absolute inset-y-0 right-2 flex items-center gap-2'>;
=======
      const transcript = e.results?.[0]?.[0]?.transcript |'';
      if (transcript) setQuery(q => (q ? q + ' ' + transcript : transcript));
    }
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <button
          type='button'
          onClick={startVoice}
          className='inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
<<<<<<< HEAD
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
      const transcript = e.results?.[0]?.[0]?.transcript || '';
      if (transcript) setQuery((q) => (q ? q + ' ' + transcript : transcript))
    };
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
                <button
                  type="button"
                  onClick={() => {;
                    setQuery(s);
                    setOpen(false);
                    router && router.push(`/search?q=${encodeURIComponent(s)}`);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800";
                >;
                  {s}
                </button>;
              </li>;
            ))}
          </ul>;
        </div>;
      )}
    </form>;
  );  );
}
                    router.push(`/search?q=${encodeURIComponent(s)}`)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {s}

  useEffect__(() => {
    if (!query) {
      setSuggestions([]),
      return
    }
    controller.current?.abort(),
    controller.current = new AbortController(),
    const run = async () => {
      try {
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, { signal: controller.current!.signal }),
        const j = await r.json()
        setSuggestions(j.suggestions || []),
        setOpen(true)
      } catch {}
    },
    const id = setTimeout(run, 150),
    return () => clearTimeout(id)
  }, [query]),

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault(),
    if (!query.trim()) return,
    fetch('/api/telemetry/search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q: query }) }).catch(() => {}),
    router.push(`/search?q=${encodeURIComponent(query)}`),
    setOpen(false)
  },

  const startVoice = () => {
    if (typeof window === 'undefined') return,
    const Speech: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!Speech) return,
    const rec = new Speech()
    rec.lang = 'en-US',
    rec.onresult = (e: any) => {
      const transcript = e.results?.[0]?.[0]?.transcript || ''
      if (transcript) setQuery((q) => (q ? q + ' ' + transcript : transcript))
    },
    rec.start()
  },

  return (
    <form onSubmit={onSubmit} className=&quot;relative w-full max-w-lg&quot; role=&quot;search&quot;>
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setOpen(suggestions.length > 0)}
<<<<<<< HEAD
        className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500&quot;
        placeholder=&quot;Search talent, jobs, projects...&quot;
        aria-label=&quot;Search&quot;
      />
      <div className=&quot;absolute inset-y-0 right-2 flex items-center gap-2&quot;>
        <button type=&quot;button&quot; onClick={startVoice} className=&quot;inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200&quot; aria-label=&quot;Voice search&quot;>🎤</button>
        <button type=&quot;submit&quot; className=&quot;text-sm font-medium text-indigo-600 hover:text-indigo-700&quot;>Search</button>
      </div>
      {open && suggestions.length > 0 && (
        <div className=&quot;absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg&quot;>
          <ul className=&quot;max-h-64 overflow-auto py-1 text-sm&quot;>
            {suggestions.map((s, i) => (
              <li key={i}>
                <button
                  type=&quot;button&quot;
                  onClick={() => {
                    setQuery(s),
                    setOpen(false),
                    router.push(`/search?q=${encodeURIComponent(s)}`)
      setSuggestions([]);
      return;}
    controller.current?.abort();
    controller.current = new AbortController();
    const _run = async () => {_try {
        const _r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {_signal: controller.current!.signal});
        const _j = await r.json();
        setSuggestions(j.suggestions || []);
        setOpen(true);
      } catch {}
    };
    const _id = setTimeout(run, 150);
    return () => clearTimeout(id);
  }, [query]);

  const _onSubmit = (_e?: React.FormEvent) => {_e?.preventDefault();
    if (!query.trim()) return;
    fetch('/api/telemetry/search', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_q: query}) }).catch__(() => {});
    router.push(`/search?q=${_encodeURIComponent(query)}`);
    setOpen(false);
  };

  const _startVoice = () => {_if (typeof window === 'undefined') return;
    const Speech: unknown = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!Speech) return;
    const _rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (_e: unknown) => {
      const _transcript = e.results?.[0]?.[0]?.transcript || '';
      if (transcript) setQuery(_(q) => (q ? q + ' ' + transcript : transcript));};
    rec.start();
  };

  return (_<form onSubmit={_onSubmit} className="relative w-full max-w-lg" role="search">
      <input
        value={_query}
        onChange={_(e) => setQuery(e.target.value)}
        onFocus={_() => setOpen(suggestions.length > 0)}
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Search talent, jobs, projects..."
        aria-label="Search"
      />
      <div className="absolute inset-y-0 right-2 flex items-center gap-2">
<<<<<<< HEAD
        <button type="button" onClick={_startVoice} className="inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" aria-label="Voice search">🎤</button>
        <button type="submit" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Search</button>
      </div>
      {_open && suggestions.length > 0 && (_<div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg">
          <ul className="max-h-64 overflow-auto py-1 text-sm">
            {suggestions.map((s, _i) => (_<li key={i}>
                <button
                  type="button"
                  onClick={() => {
                    setQuery(s),
                    setOpen(false),
                    router.push(`/search?q=${encodeURIComponent(s)}`)

                  }}
                  className=&quot;w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800&quot;
                >
                  {_s}

=======
        <button type="button" onClick={startVoice} className="inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" aria-label="Voice search">🎤</button>
        <button type="submit" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Search</button>
      </div>
      {open && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg">
          <ul className="max-h-64 overflow-auto py-1 text-sm">
            {suggestions.map((s, i) => (
              <li key={i}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <button
                  type="button"
                  onClick={() => {
                    setQuery(s);
                    setOpen(false);

<<<<<<< HEAD
                    router && router.push(`/search?q=${encodeURIComponent(s)}`);

                  }}
<<<<<<< HEAD
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >

=======
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800";
                >;
                  {s}
                </button>;
              </li>;
            ))}
          </ul>;
        </div>;
      )}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  {s}
=======
                    router.push(`/search?q=${encodeURIComponent(s)}`)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======

  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
);  )
}
=======
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
