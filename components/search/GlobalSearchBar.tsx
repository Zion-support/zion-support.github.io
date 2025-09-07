<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }
}
  componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
<<<<<<< HEAD
  render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
=======
<<<<<<< HEAD
  render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
  componentDidCatch(error, errorInfo) {console.error(Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
=======
  render() {if (this.state.hasError) ;}
  return <div    />Something went wrong.</div>;}
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    }
    return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD
import { useEffect, useMemo, useRef, useState  } from 'react';
import { useRouter } from 'next/router';
export default function GlobalSearchBar() {
import { useEffect, useMemo, useRef, useState  } from 'react';
import { useRouter } from 'next/router';
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

=======
<<<<<<< HEAD
import { useEffect, useMemo, useRef, useState  } from 'react';
import { useRouter  } from 'next/router';
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
export default function GlobalSearchBar() {useEffect(() => {
if (!query) {setSuggestions([])return;      return;
      setSuggestions([])return;

export default function GlobalSearchBar() {

export default function GlobalSearchBar() {;

const router = useRouter();

const [query, setQuery] = useState('');

const [suggestions, setSuggestions] = useState<string[]    />([]);

const [open, setOpen] = useState(false);

const controller = useRef<AbortController | null    />(null);
  useEffect(() => {

    if (!query) {
      setSuggestions([]);
<<<<<<< HEAD
      return;      return



pr-12243


=======
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


  constructor(props) {

    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {}
    return { hasError: true}
}
  }

  componentDidCatch(error, errorInfo) {}
    console.error(Error caught by boundary:', error, errorInfo);}
=======
      return;      return;
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);}
    this.state = { hasError: false}
};
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true}
};
>>>>>>> origin/chore/fix-lint-and-merge
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);}
  }
  
  render() {
    if (this.state.hasError) {}
      return <div    />Something went wrong.</div>;}
    }
    controller && controller.current?.abort()controller && controller.current = new AbortController()const run = async () => {try {const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {signal: controller && controller.current!.signal})const j = await r && r.json()setSuggestions(j && j.suggestions || [])setOpen(true)} catch {}
   
}

const id = setTimeout(run, 150)return () => clearTimeout(id)}, [query])const j = await r && r.json()setSuggestions(j && j.suggestions || [])setOpen(true)} catch {}
    }

const id = setTimeout(run, 150;
<<<<<<< HEAD

=======
  return () => clearTimeout(id)const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, { signal: controller.current!.signal}
}),const j = await r.json()setSuggestions(j.suggestions || [])setOpen(true)} catch {}
   ;
}

const id = setTimeout(run, 150;
  return () => clearTimeout(id)}, [query])fetch('/api/telemetry/search', { method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
}, body: JSON.stringify({ q: query }) }).catch(() => 
}),router.push(`/search?q=${encodeURIComponent(query)}`)setOpen(false)}
;
  const startVoice = (if (typeof window === 'undefined');
  return;

const Speech: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition,import {;) => {
  return $3;}
}
  useEffect, useMemo, useRef, useState   } from 'react';

export default function GlobalSearchBar() {export default function GlobalSearchBar() {const router = useRouter()const [query, setQuery] =;
  useState('');
  const [suggestions, setSuggestions] = useState<string[]    />([])const [open, setOpen] = useState(false;
  const controller = useRef<AbortController | null    />(null;
  useEffect(() => {}
if (!query) {setSuggestions([])return;      return;}
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }
}
  componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div    />Something went wrong.</div>;}
>>>>>>> origin/chore/fix-lint-and-merge
    }return this.props.children;
  }
}

export default function GlobalSearchBar() {useEffect(() => {
if (!query) {setSuggestions([])return;      return;}
      setSuggestions([])return;}
    }}controller && controller.current?.abort()controller && controller.current = new AbortController()const run = async () => {try {const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {signal: controller && controller.current!.signal})const j = await r && r.json()setSuggestions(j && j.suggestions || [])setOpen(true)} catch {}
   
}

const id = setTimeout(run, 150)return () => clearTimeout(id)}, [query])const j = await r && r.json()setSuggestions(j && j.suggestions || [])setOpen(true;
  return () => clearTimeout(id)}, [query])const j = await r && r.json()setSuggestions(j && j.suggestions || [])setOpen(true)} catch {}
}

const id = setTimeout(run, 150)const router = useRouter()const [query, setQuery] =;
<<<<<<< HEAD

  return;      return;
      setSuggestions([])return;
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
    const run = async () => {
      try {
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {
          signal: controller && controller.current!.signal});
        const j = await r && r.json();
        setSuggestions(j && j.suggestions || []);
>>>>>>> merged-prs-20250907-203621

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
    }
        setOpen(true);
=======
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, { signal: controller.current!.signal }),
        const j = await r.json();
        setSuggestions(j.suggestions || []);
        setOpen(true)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      } catch {}
    }
    const id = setTimeout(run, 150);
<<<<<<< HEAD
=======
    return () => clearTimeout(id)

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }, [query]);
    if (!Speech) return;
    const rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
      <input
=======
  useState('');
  const [suggestions, setSuggestions] = useState<string[]    />([])const [open, setOpen] = useState(false;
  const controller = useRef<AbortController | null    />(null)setSuggestions([];
  return;      return;
      setSuggestions([])return;
    }
        setOpen(true)} catch {}
    }

const id = setTimeout(run, 150)}, [query])if (!Speech);
  return;

const rec = new Speech()rec.lang = 'en-US';
    rec.onresult = (e: any) => {<input;}
>>>>>>> origin/chore/fix-lint-and-merge
        value={query}
        onChange={e =    /> setQuery(e && e.target.value)}
        onFocus={() => setOpen(suggestions && suggestions.length > 0)}
        className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500';
        placeholder='Search talent, jobs, projects...';
        aria-label='Search';
      />;
      <div className='absolute inset-y-0 right-2 flex items-center gap-2'    />;
        <button;
          type='button';
          onClick={startVoice}
          className='inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200';
          aria-label='Voice search'    />;
          🎤;
        </button>;
        <button;
          type='submit';
          className='text-sm font-medium text-indigo-600 hover:text-indigo-700'    />;
          Search;
        </button>;
      </div>;
<<<<<<< HEAD
      {open && suggestions && suggestions.length > 0 && (<div className='absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg'    />;}
          <ul className='max-h-64 overflow-auto py-1 text-sm'    />;}
            {suggestions && suggestions.map((s, i) => (<li key={i}    />;
                <button;
                  type='button';
                  onClick = {() =    /> {setQuery(s)setOpen(false)router && router.push(`/search?q=${encodeURIComponent(s)}`)}}rec.start()}
                  className='w-full text-left px-3 py-2 hover: bg-gray-50 dark:hover:bg-gray-800'                >   
}rec && rec.start();
  return (<form onSubmit={onSubmit} className=\"relative w-full max-w-lg\" role=\"search\"    />;
      <input;
=======
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


                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >    };
    rec && rec.start();
  };

  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-lg" role="search">;
      <input
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        value={query}
<<<<<<< HEAD
        onChange={(e) => setQuery(e && e.target.value)}
        onFocus={() => setOpen(suggestions && suggestions.length > 0)}
        className="w-full rounded-md border border-gray-300 "dark":border-gray-700 bg-white/80 "dark":bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm "focus":outline-none "focus":ring-2 "focus":ring-indigo-500";"
        placeholder="Search talent, jobs, projects...";"
        aria-label="Search";"
      />;
      <div className="absolute inset-y-0 right-2 flex items-center gap-2">;"
        <button type="button" onClick={startVoice} className="inline-flex "sm":hidden text-gray-500 "hover":text-gray-800 "dark":"hover":text-gray-200" aria-label="Voice search">🎤</button>;"
        <button type="submit" className="text-sm font-medium text-indigo-600 "hover":text-indigo-700">Search</button>;"
      </div>;
      {open && suggestions && suggestions.length > 0 && (;
        <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg">;
          <ul className="max-h-64 overflow-auto py-1 text-sm">;
            {suggestions && suggestions.map((s, i) => (;
              <li key={i}>;
<<<<<<< HEAD



    }
    
    return this.props.children;
  }
}
import React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
export default function GlobalSearchBar() {
  const router = useRouter($2);
  const [query, setQuery] = useState($2);
  const [suggestions, setSuggestions] = useState<string[]>([]),
  const [open, setOpen] = useState($2);
  const controller = $2;
  useEffect(() => {
    if (!query) {
      setSuggestions($2);
      return
import { useEffect, useMemo, useRef, useState  } from 'react';
import { useRouter } from 'next/router';
export default function GlobalSearchBar() {
import { useEffect, useMemo, useRef, useState  } from 'react';
import { useRouter } from 'next/router';
export default function GlobalSearchBar() {

origin/cursor/automate-test-improve-and-merge-code-2533
            {suggestions && suggestions.map((s, i) => (<li key={i}>;
=======
        onChange={(e) =    /> setQuery(e && e.target.value)}
        onFocus={() => setOpen(suggestions && suggestions.length > 0)}"
        className=\'w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500\';"
        placeholder=\'Search talent, jobs, projects...\';"
        aria-label=\'Search\';
      />;"
      <div className=\"absolute inset-y-0 right-2 flex items-center gap-2\"    />;"
        <button type=\"button\" onClick={startVoice} className=\"inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200\" aria-label=\"Voice search\"    />🎤</button>;"
        <button type=\"submit\" className=\"text-sm font-medium text-indigo-600 hover:text-indigo-700\"    />Search</button>;
      </div>;"
      {open && suggestions && suggestions.length > 0 && (<div className=\"absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg\"    />;}"
          <ul className=\"max-h-64 overflow-auto py-1 text-sm\"    />;}
            {suggestions && suggestions.map((s, i) => (<li key={i}    />;
>>>>>>> origin/chore/fix-lint-and-merge
    }return this.props.children;
  }
}

export default function GlobalSearchBar() {const router = useRouter()const [query, setQuery] =;
<<<<<<< HEAD

=======
  useState('');
  const [suggestions, setSuggestions] = useState<string[]    />([])const [open, setOpen] = useState(false;
  const controller = useRef<AbortController | null    />(null;
>>>>>>> origin/chore/fix-lint-and-merge
  useEffect(() => {
if (!query) {setSuggestions([])return;      return;
      setSuggestions([])return;}
}
const router  = null;}
    controller.current?.abort()controller.current = new AbortController()const run = async () => {try ;}
  const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {signal: controller.current!.signal;}
}
const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {signal: controller.current!.signal;}
        })const j = await r.json()setSuggestions(j.suggestions |[])setOpen(true)} catch {}
    }

const id = setTimeout(run, 150)return () => clearTimeout(id)}, [query])const j = await r.json()setSuggestions(j.suggestions |[])setOpen(true)} catch {}
    }

<<<<<<< HEAD
      <input;
        value={query}
        onChange={e => setQuery(e.target.value)}
        onFocus={() => setOpen(suggestions.length > 0)}

              <li key={i}>;

    }
    const id = setTimeout(run, 150);

    return () => clearTimeout(id);  }, [query]);        const j = await r && r.json();
        setSuggestions(j && j.suggestions || []);
        setOpen(true);

      } catch {}
    }
'
import { useEffect, useMemo, useRef, useState } from react;
  const router = useRouter();'
  const [query, setQuery] = useState(');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const controller = useRef<AbortController | null>(null);
      setSuggestions([]);
      return;      return;
      setSuggestions([]);
      return;
>>>>>>> merged-prs-20250907-203621
    }
        setOpen(true);
      } catch {}
    }
  }, [query]);
    if (!Speech) return;
    const rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
      <input
        value={query}
        onChange={e => setQuery(e && e.target.value)}
        onFocus={() => setOpen(suggestions && suggestions.length > 0)}
<<<<<<< HEAD
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
=======
        className=w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500';'
        placeholder=Search talent, jobs, projects...;'
        aria-label='Search;
      />;
      <div className='absolute inset-y-0 right-2 flex items-center gap-2'>;
        <button
          type=button'
          onClick={startVoice}'
          className=inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
          aria-label='Voice search>;
>>>>>>> merged-prs-20250907-203621
          🎤;
        </button>;
        <button
          type='submit'
<<<<<<< HEAD
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

    }
    
    return this.props.children;
  }
}
import React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
export default function GlobalSearchBar() {
  const router = useRouter($2);
  const [query, setQuery] = useState($2);
  const [suggestions, setSuggestions] = useState<string[]>([]),
  const [open, setOpen] = useState($2);
  const controller = $2;
  useEffect(() => {
    if (!query) {
      setSuggestions($2);
      return

    }
    controller.current?.abort($2);
    controller.current = new AbortController($2);
    const run = async () => {
      try {
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, { signal: controller.current!.signal }),
        const j = await r.json($2);
        setSuggestions($2);
        setOpen(true)
      } catch {}
    },
    const id = setTimeout($2);
=======
          className=text-sm font-medium text-indigo-600 hover:text-indigo-700'>;
          Search;
        </button>;
      </div>;
      {open && suggestions && suggestions.length > 0 && (;'
        <div className=absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg>;'
          <ul className='max-h-64 overflow-auto py-1 text-sm>;
            {suggestions && suggestions.map((s, i) => (;
              <li key={i}>;
=======
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
    return () => clearTimeout(id)
  }, [query]);

  const onSubmit = (e?: React.FormEvent) => {
<<<<<<< HEAD
    e?.preventDefault($2);
    if (!query.trim()) return,
    fetch('/api/telemetry/search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q: query}) }).catch(() => {}),
    router.push(`/search?q = $2;
=======
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
        <button
          type='button'
          onClick={startVoice}
          className='inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
<<<<<<< HEAD

                <button
                  type="button"
                  onClick={() => {;
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <button
                  type='button'
                  onClick={() => {
                    setQuery(s);
                    setOpen(false);`
                    router && router.push(`/search?q=${encodeURIComponent(s)}`);
                  }}


    rec.start()
  }
                  className=w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >    }
    rec && rec.start();
  }

  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-lg role=search">;
      <input;
        value={query}
        onChange={(e) => setQuery(e && e.target.value)}
        onFocus={() => setOpen(suggestions && suggestions.length > 0)}"
        className=w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500;"
        placeholder="Search talent, jobs, projects...;
        aria-label="Search";
      />;
      <div className=absolute inset-y-0 right-2 flex items-center gap-2">;"
        <button type=button onClick={startVoice} className="inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" aria-label=Voice search>🎤</button>;"
        <button type="submit className=text-sm font-medium text-indigo-600 hover:text-indigo-700">Search</button>;
      </div>;
      {open && suggestions && suggestions.length > 0 && (;"
        <div className=absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg>;"
          <ul className="max-h-64 overflow-auto py-1 text-sm>;
            {suggestions && suggestions.map((s, i) => (;
              <li key={i}>;
pr-12243
    }
    
    return this.props.children;
  }
}
import React from 'react;
import { useEffect, useMemo, useRef, useState } from react';
import { useRouter } from 'next/router;
export default function GlobalSearchBar() {
  const router = useRouter();
  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;      return;
      setSuggestions([]);
      return
import { useEffect, useMemo, useRef, useState  } from 'react;
import { useRouter } from next/router';
  const router = null;
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
=======
const id = setTimeout(run, 150;
  return () => clearTimeout(id)const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, { signal: controller.current!.signal}
}),const j = await r.json()setSuggestions(j.suggestions || [])setOpen(true)} catch {}
   ;
}

const id = setTimeout(run, 150;
  return () => clearTimeout(id)}, [query])fetch('/api/telemetry/search', { method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
}, body: JSON.stringify({ q: query }) }).catch(() => 
}),router.push(`/search?q=${encodeURIComponent(query)}`)setOpen(false)}
;
  const startVoice = (if (typeof window === 'undefined');
  return;

const Speech: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;) => {
  return $3;}
}
  return () => clearTimeout(id)}, [query];
  const onSubmit = (e?.preventDefault()if (!query.trim());
  return;
    fetch('/api/telemetry/search', {method: 'POST';) => {
  return $3;}
}
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ q: query })}).catch(() => {})router.push(`/search?q = ${encodeURIComponent(query)}`)setOpen(false
}
;
  const startVoice = (if (typeof window === 'undefined');
  return;

const Speech: any =;
      (window as any).SpeechRecognition |;
      (window as any).webkitSpeechRecognition;    if (!Speech) return;    fetch('/api/telemetry/search', { method: 'POST',
  headers: { 'Content-Type': 'application/json',) => {
  return $3;}
}
}, body: JSON.stringify({ q: query }) }).catch(() => {})router.push(`/search?q = ${encodeURIComponent(query)}`)setOpen(false
}
;
  const startVoice = (if (typeof window === 'undefined');
  return;

const Speech: any =;
      (window as any).SpeechRecognition |;
      (window as any).webkitSpeechRecognition;

const Speech: any = (window as any).SpeechRecognition |(window as any).webkitSpeechRecognition;
fetch('/api/telemetry/search', {method: 'POST',
  headers: { 'Content-Type': 'application/json',) => {
  return $3;}
}
},body: JSON.stringify({ q: query })}).catch(() => {})router.push(`/search?q = ${encodeURIComponent(query)}`)setOpen(false
}
;
  const startVoice = (if (typeof window === 'undefined');
  return;

const Speech: any =;
      (window as any).SpeechRecognition ||;
      (window as any).webkitSpeechRecognition;
    if (!Speech) return;

const rec = new Speech()rec.lang = 'en-US';
    rec.onresult = (e: any) => ;
  const transcript = e.results?.[0]?.[0]?.transcript || '';) => {
  return $3;}
}
if (transcript) setQuery(q => (q ? q + ' ' + transcript : transcript))}rec.start()}
    >;
      <input;
        value={query}
        onChange={e =    /> setQuery(e.target.value)}
        onFocus={() => setOpen(suggestions.length > 0)}
        className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500';
        placeholder='Search talent, jobs, projects...';
        aria-label='Search';
      />;
      <div className='absolute inset-y-0 right-2 flex items-center gap-2'    />;
        <button;
          type='button';
          onClick={startVoice}
          className='inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200';
          aria-label='Voice search'    />

          🎤;
        </button>;
        <button;
          type='submit';
          className='text-sm font-medium text-indigo-600 hover:text-indigo-700'    />

          Search;
        </button>;
      </div>;
      {open && suggestions.length > 0 && (<div className='absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg'    />;}
          <ul className='max-h-64 overflow-auto py-1 text-sm'    />;}
            {suggestions.map((s, i) => (<li key={i}    />;
                <button;
                  type='button';
                  onClick={() =    /> {setQuery(s)setOpen(false)router.push(`/search?q=${encodeURIComponent(s)}`)}}
            {suggestions && suggestions.map((s, i) => (;}
              <li key={i}    />;
>>>>>>> origin/chore/fix-lint-and-merge
    }
    controller.current?.abort();
    controller.current = new AbortController();

<<<<<<< HEAD
      }
      try {
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {
          signal: controller.current!.signal
const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {
          signal: controller.current!.signal,
        const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {
          signal: controller.current!.signal
        });
        const j = await r.json();
=======
const run = async () => {
      try {}
       ;}
  const r = await fetch(`/api/suggest?q=${encodeURIComponent(query)}`, {
          signal: controller.current!.signal}
       }
});

const j = await r.json();
>>>>>>> origin/chore/fix-lint-and-merge
        setSuggestions(j.suggestions |[]);
        setOpen(true);
      } catch {}
    }
<<<<<<< HEAD
    const id = setTimeout(run, 150);
    return () => clearTimeout(id);  }, [query]);        const j = await r.json();
=======

const id = setTimeout(run, 150);
    return () => clearTimeout(id);  }, [query]);

const j = await r.json();
>>>>>>> origin/chore/fix-lint-and-merge
        setSuggestions(j.suggestions |[]);
        setOpen(true)
      } catch {}
    }
<<<<<<< HEAD
    const id = setTimeout(run, 150);
=======

const id = setTimeout(run, 150);
>>>>>>> origin/chore/fix-lint-and-merge
    return () => clearTimeout(id);
  }, [query]);

<<<<<<< HEAD
  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault($2);
    if (!query.trim()) return,
    fetch('/api/telemetry/search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q: query}) }).catch(() => {}),
    router.push(`/search?q = $2;
    setOpen(false)
  }
  const startVoice = () => {
    if (typeof window === 'undefined') return;
    const Speech: any =
=======
const onSubmit = (
    e?.preventDefault();
    if (!query.trim()) return;
    fetch('/api/telemetry/search', {
      method: 'POST') => {
  return $3;}
}
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ q: query })
    }).catch(() => 
});
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false);  }

const startVoice = (
    if (typeof window === 'undefined');
  return;

const Speech: any =
      (window as any).SpeechRecognition |
      (window as any).webkitSpeechRecognition;    if (!Speech) return;    fetch('/api/telemetry/search', { method: 'POST',
  headers: { 'Content-Type': 'application/json',) => {
  return $3;}
}
}, body: JSON.stringify({ q: query }) }).catch(() => {})
    router.push(`/search?q=${encodeURIComponent(query}
}`);
    setOpen(false)
  }

const startVoice = (
    if (typeof window === 'undefined');
  return;

const Speech: any =
>>>>>>> origin/chore/fix-lint-and-merge
      (window as any).SpeechRecognition |
      (window as any).webkitSpeechRecognition;    const Speech: any = (window as any).SpeechRecognition |(window as any).webkitSpeechRecognition
    if (!Speech) return;
    const rec = new Speech();
origin/cursor/automate-test-improve-and-merge-code-2533
    return () => clearTimeout(id);  }, [query]);        const j = await r.json();
        setSuggestions(j.suggestions |[]);
        setOpen(true)
      } catch {}
    }
    const id = setTimeout(run, 150);
    return () => clearTimeout(id);
  }, [query]);
  const onSubmit = (e?: React.FormEvent) => {}
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
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
<<<<<<< HEAD
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
    const rec = new Speech();'
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
        <button
          type='button'
          onClick={startVoice}
          className='inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'

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
    rec.onresult = (e: any) => {}
        <button'
          type='button'
          onClick={startVoice}'
          className='inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
    rec.lang = 'en-US';

        <button
    rec.onresult = (e: any) => {}
        <button
          type=button'
          onClick={startVoice}'
          className=inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200

          aria-label='Voice search'
        >
          🎤
        </button>
        <button
          type=submit
          className='text-sm font-medium text-indigo-600 hover:text-indigo-700'
        >
          Search
        </button>
      </div>
      {open && suggestions.length > 0 && (
        <div className='absolute z-50 mt-1 w-full rounded-md border border-gray-200 "dark":border-gray-800 bg-white "dark":bg-gray-900 shadow-lg'>'
          <ul className='max-h-64 overflow-auto py-1 text-sm'>'
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
  }

  return (
    <form onSubmit={onSubmit} className=relative w-full max-w-lg" role="search>
      <input
=======

const Speech: any = (window as any).SpeechRecognition |(window as any).webkitSpeechRecognition;
if (!Speech);
  return;

const rec = new Speech();
    rec.lang = 'en-US';
    rec.onresult = (e: any) => {
        <button;
type='button'
          onClick={startVoic,) =    /> {
  return $3;}
}
}
          className='inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
          aria-label='Voice search'
         />
          🎤
        </button>
        <button;
type='submit'
          className='text-sm font-medium text-indigo-600 hover:text-indigo-700'
            />
          Search;
        </button>
      </div>
      {open && suggestions.length > 0 && (
        <div className='absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg'    />
          <ul className='max-h-64 overflow-auto py-1 text-sm'    />}
            {suggestions.map((s, i) => (}
              <li key={i}    />
                <button;
type='button'
                  onClick={() =    /> {
                    setQuery(s);}
                    setOpen(false);}
                    router.push(`/search?q=${encodeURIComponent(s)}`);
                  }}
                  className = 'w-full text-left px-3 py-2 hover: bg-gray-50 dark:hover:bg-gray-800'                >    }
    rec.start(
}
  ;"
  return (<form onSubmit={onSubmit} className=\"relative w-full max-w-lg\" role=\"search\"    />;
      <input;
>>>>>>> origin/chore/fix-lint-and-merge
        value={query}
        onChange={(e) =    /> setQuery(e.target.value)}
        onFocus={() => setOpen(suggestions.length > 0)}"
        className=\'w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500\';"
        placeholder=\'Search talent, jobs, projects...\';"
        aria-label=\'Search\';
      />;"
      <div className=\"absolute inset-y-0 right-2 flex items-center gap-2\"    />;"
        <button type=\"button\" onClick={startVoice} className=\"inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200\" aria-label=\"Voice search\"    />🎤</button>;"
        <button type=\"submit\" className=\"text-sm font-medium text-indigo-600 hover:text-indigo-700\"    />Search</button>;
      </div>;"
      {open && suggestions.length > 0 && (<div className=\"absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg\"    />;}"
          <ul className=\"max-h-64 overflow-auto py-1 text-sm\"    />;}
            {suggestions.map((s, i) => (<li key={i}    />;
                <button;"
                  type=\'button\';
                  onClick={() =    /> {setQuery(s)setOpen(false)className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >>
}
                >;}
                    router && router.push(`/search?q=${encodeURIComponent(s)}`)}}>;"
                  className=\"w-full text-left px-3 py-2 hover: bg-gray-50 dark:hover:bg-gray-800\">

                  {}
}
                </button>;
              </li>;
            ))}
          </ul>;
        </div>;
      )}{s}
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800';
<<<<<<< HEAD
                    router.push(`/search?q=${encodeURIComponent(s)}`)}}
        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Search talent, jobs, projects..."
        aria-label="Search"
      />
      <div className="absolute inset-y-0 right-2 flex items-center gap-2>
        <button type=button" onClick={startVoice} className="inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 aria-label=Voice search">🎤</button>
        <button type="submit className=text-sm font-medium text-indigo-600 hover:text-indigo-700">Search</button>
      </div>
      {open && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg>
          <ul className=max-h-64 overflow-auto py-1 text-sm">
            {suggestions.map((s, i) => (
              <li key={i}>
pr-12243
                <button

                <button"
                  type=button
                  onClick={() => {
>>>>>>> merged-prs-20250907-203621
                    setQuery(s);
                    setOpen(false);
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >

<<<<<<< HEAD
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800";
                >;
                  {s}
=======
                    router && router.push(`/search?q=${encodeURIComponent(s)}`);
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
pr-12243
                <button

                <button"
                  type="button"
                  onClick={() => {
                    setQuery(s);
                    setOpen(false);'
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >


                >


                >

                    router && router.push(`/search?q=${encodeURIComponent(s)}`);
=======
                    router.push(`/search?q=${encodeURIComponent(s)}`)}}"
        className=\"w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500\"
        placeholder=\"Search talent, jobs, projects...\"
        aria-label=\"Search\"
      />"
      <div className=\"absolute inset-y-0 right-2 flex items-center gap-2\"    />"
        <button type=\"button\" onClick={startVoice} className=\"inline-flex sm:hidden text-gray-500 hover:text-gray-800 dark:hover:text-gray-200\" aria-label=\"Voice search\"    />🎤</button>"
        <button type=\"submit\" className=\"text-sm font-medium text-indigo-600 hover:text-indigo-700\"    />Search</button>
      </div>
      {open && suggestions.length > 0 && ("
        <div className=\"absolute z-50 mt-1 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg\"    />"
          <ul className=\"max-h-64 overflow-auto py-1 text-sm\"    />}
            {suggestions.map((s, i) => (}
              <li key={i}    />
                <button;"
type=\"button\"
                  onClick={() =    /> {;
                    setQuery(s);
                    setOpen(false);
                  className='w-full text-left px-3 py-2 hover: bg-gray-50 dark:hover:bg-gray-800'                >
}
                    router && router.push(`/search?q=${encodeURIComponent(s}
}`);
>>>>>>> origin/chore/fix-lint-and-merge

                  }}

                >
"
                  className=\"w-full text-left px-3 py-2 hover: bg-gray-50 dark:hover:bg-gray-800\">

<<<<<<< HEAD


                >




                >



                >



                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800";
                >;
                  {s}
"


<<<<<<< HEAD
=======
                    router && router.push(`/search?q=${encodeURIComponent(s)}`);

                  }}
<<<<<<< HEAD

                >

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800";
                >;
                  {s}
=======
>>>>>>> origin/chore/fix-lint-and-merge
                  {}
}
>>>>>>> merged-prs-20250907-203621
                </button>;
              </li>;
            ))}
          </ul>;
        </div>;
      )}
<<<<<<< HEAD
=======
<<<<<<< HEAD


                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'


                  {s}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533

                  {s}
    </form>;
  )})}

if ( {) {$2;
}
      set_suggestions ([])return;      return;

                  {s}
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'
origin/cursor/automate-test-improve-and-merge-code-2533
                    router.push(`/search?q=${encodeURIComponent(s)}`)
                  }}"
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {s}

                    router.push(`/search?q=${encodeURIComponent(s)}`)
                  }}
                  className=w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {s}


                    router.push(`/search?q=${encodeURIComponent(s)}`)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800
                >
                  {s}



                  {s}


                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'

>>>>>>> merged-prs-20250907-203621

                    router.push(`/search?q=${encodeURIComponent(s)}`)
                  }}
                  className=w-full text-left px-3 py-2 hover:bg-gray-50 dark: hover: bg-gray-800"
                >
                  {s}

<<<<<<< HEAD
=======

=======
    </form>;
  )})}
import { use_router  } from 'next / router';

export default /**;
 * GlobalSearchBar - Function description;
 */;
function GlobalSearchBar() {const router = use_router ()const [query, set_query] = useState ('')const [suggestions, set_suggestions] = useState < string[]>([])const [open, set_open] =;
  useState (false;
  const controller = useRef < AbortController | null>(null;
  useEffect (() => {// Check condition;}
if ( {) {$2;}
}
      set_suggestions ([])return;      return;


                  {s}
                    router.push(`/search?q=${encodeURIComponent(s)}`)
                  }}"
                  className=\"w-full text-left px-3 py-2 hover: bg-gray-50 dark:hover:bg-gray-800\"
                >
                  {s}
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
                    router.push(`/search?q=${encodeURIComponent(s)}`)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  className='w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800'                >

                >

                >

                  {s}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
  )
}

<<<<<<< HEAD
  )
}





import { use_router } from 'next / router;
=======

import { use_router}
} from 'next / router';

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  );

);  )
}
  );
=======
import { use_router } from 'next / router';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default /**
 * GlobalSearchBar - Function description;
 */
<<<<<<< HEAD
=======
function GlobalSearchBar() {
  const router = use_router ();
>>>>>>> origin/chore/fix-lint-and-merge

const [query, set_query] = useState ('');

const [suggestions, set_suggestions] = useState < string[]>([]);

const [open, set_open] = useState (false);

const controller = useRef < AbortController | null>(null);
>>>>>>> merged-prs-20250907-203621
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
<<<<<<< HEAD
=======
=======
    // Check condition;
if ( {) {}
  $2}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
}
      set_suggestions ([]);
      return;      return;
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    controller.current?.abort ();
    controller.current = new AbortController ();
    const run = async () => {
      try {
        const r = await fetch (`/api / suggest?q=${encodeURIComponent (query)}`, {
<<<<<<< HEAD
=======
    controller.current?.abort ();
    controller.current = new AbortController ();
    const run = async () => {}
      try {}`
        const r = await fetch (`/api / suggest?q=${encodeURIComponent (query)}`, {}
>>>>>>> merged-prs-20250907-203621
          signal: controller.current!.signal,
        });
        const inner_index = await r.json ();
        set_suggestions (j.suggestions || []);
        set_open (true);
      } catch {}
<<<<<<< HEAD
=======
=======
    controller.current?.abort ()controller.current = new AbortController ()const run = async () => {try ;}
  const r = await fetch (`/api / suggest?q=${encodeURIComponent (query)}`, {signal: controller.current!.signal;}
          signal: controller.current!.signal;}
        })const inner_index = await r.json ()set_suggestions (j.suggestions || [])set_open (true)} catch {}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
;
  const on_submit = (e?: React.FormEvent) =>: any {
    e?.prevent_default ();
    if () return) {
  $2
=======
}
<<<<<<< HEAD
    fetch ('/api / telemetry / search', {method: 'POST';}
  headers: { 'Content - Type': 'application / json';}
},body: JSON.stringify ({ q: query ;})body: JSON.stringify ({ q: query ;})}).catch (() => {})router.push (`/search?q = ${encodeURIComponent (query)}`)set_open (false
=======

const id = set_timeout (run, 150;
  return () => clear_timeout (id)}, [query];
  const on_submit = (e?: React.FormEvent) =>: any {e?.prevent_default ()if ();}
  return) {$2;}
}
    fetch ('/api / telemetry / search', {method: 'POST'}
  headers: { 'Content - Type': 'application / json'}
},body: JSON.stringify ({ q: query })body: JSON.stringify ({ q: query })}).catch (() => {})router.push (`/search?q = ${encodeURIComponent (query)}`)set_open (false
>>>>>>> origin/chore/fix-lint-and-merge
}
;
  const start_voice = () =>: any {// Check condition;}
if (return) {$2;}
}
<<<<<<< HEAD
if (return) {$2;
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
}
    const Speech: any =;
=======
if (return) {}
  $2'
}    fetch ('/api / telemetry / search', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ q: query }) }).catch (() => {}),`
    router.push (`/search?q=${encodeURIComponent (query)}`);
    set_open (false);
  }
;
  const start_voice = () =>: any {}
    // Check condition;
if (return) {}
  $2;
}
if (return) {$2;
=======

const Speech: any =;
      (window as any).SpeechRecognition ||;
      (window as any).webkitSpeechRecognition;    // Check condition;
if (return) {$2;}
}    fetch ('/api / telemetry / search', { method: 'POST'}
  headers: { 'Content - Type': 'application / json'}
}, body: JSON.stringify ({ q: query }) }).catch (() => 
}),router.push (`/search?q = ${encodeURIComponent (query)}`)set_open (false)}
;
  const start_voice = () =>: any {// Check condition;}
if (return) {$2;}
>>>>>>> origin/chore/fix-lint-and-merge
}

const Speech: any =;
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
      (window as any).webkitSpeechRecognition;    const Speech: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition,
    // Check condition;
if (return) {}
  $2;
}
    const rec = new Speech ();'
    rec.lang = 'en - US';
    rec.onresult = (e: any) => {'
      const transcript = e.results?.[0]?.[0]?.transcript || '';'
      if (set_query (q => (q ? q + ' ' + transcript : transcript))) {}
  $2;
>>>>>>> merged-prs-20250907-203621
}
    }
    rec.start ();
  }
    >;
      <input;
        value={query}
        on_change={e => set_query (e.target.value)}
<<<<<<< HEAD
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
=======
        on_change={e => set_query (e.target.value)}
        on_focus={() => set_open (suggestions.length > 0)}'
        className='w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 80 dark:bg - gray - 900 / 60 backdrop - blur px - 3 py - 2 pr - 20 text - sm focus:outline - none focus:ring - 2 focus:ring - indigo - 500';'
        placeholder='Search talent, jobs, projects...';'
=======
      (window as any).webkitSpeechRecognition;

const Speech: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition,// Check condition;
if (return) {$2;}
}

const rec = new Speech ()rec.lang = 'en - US';
    rec.onresult = (e: any) => ;
  const transcript = e.results?.[0]?.[0]?.transcript || '';
      if (set_query (q => (q ? q + ' ' + transcript : transcript))) {$2;}
}
    }
    rec.start ()}>;
      <input;
        value={query}
        on_change={e =    /> set_query (e.target.value)}
        on_focus={() => set_open (suggestions.length > 0)}
        className='w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 80 dark:bg - gray - 900 / 60 backdrop - blur px - 3 py - 2 pr - 20 text - sm focus:outline - none focus:ring - 2 focus:ring - indigo - 500';
        placeholder='Search talent, jobs, projects...';
>>>>>>> origin/chore/fix-lint-and-merge
        aria - label='Search';
      />;
      <div className='absolute inset - y-0 right - 2 flex items - center gap - 2'    />;
        <button;
          type='button';
<<<<<<< HEAD
          on_click={start_voice}'
          className='inline - flex sm:hidden text - gray - 500 hover:text - gray - 800 dark:hover:text - gray - 200';'
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
                </button>;
=======
        on_focus={() => set_open (suggestions.length > 0)}
        className='w - full rounded - md border border - gray - 300 "dark":border - gray - 700 bg - white / 80 "dark":bg - gray - 900 / 60 backdrop - blur px - 3 py - 2 pr - 20 text - sm "focus":outline - none "focus":ring - 2 "focus":ring - indigo - 500';'
        placeholder='Search talent, jobs, projects...';'
        aria - label='Search';'
      />;
      <div className='absolute inset - y-0 right - 2 flex items - center gap - 2'>;'
        <button;
          type='button';'
=======
>>>>>>> origin/chore/fix-lint-and-merge
          on_click={start_voice}
          className='inline - flex sm:hidden text - gray - 500 hover:text - gray - 800 dark:hover:text - gray - 200';
          aria - label='Voice search'    />

          🎤;
        </button>;
        <button;
          type='submit';
          className='text - sm font - medium text - indigo - 600 hover:text - indigo - 700'    />

          Search;
        </button>;
      </div>;
      {open && suggestions.length > 0 && (<div className='absolute z - 50 mt - 1 w - full rounded - md border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - gray - 900 shadow - lg'    />;}
          <ul className='max - h-64 overflow - auto py - 1 text - sm'    />;}
            {suggestions.map ((s, i) => (<li key={i}    />;
                <button;
                  type='button';
<<<<<<< HEAD
                  on_click={() => {
                    set_query (s);
                    set_open (false);
                    router.push (`/search?q=${encodeURIComponent (s)}`);
                  }}
                  className='w - full text - left px - 3 py - 2 hover:bg - gray - 50 dark:hover:bg - gray - 800'                >    }
    rec.start ();
  return (<form on_submit={on_submit} className="relative w - full max - w-lg" role="search">;"
      <input;
        value={query}
        on_change={(e) => set_query (e.target.value)}
        on_focus={() => set_open (suggestions.length > 0)}
        className="w - full rounded - md border border - gray - 300 "dark":border - gray - 700 bg - white / 80 "dark":bg - gray - 900 / 60 backdrop - blur px - 3 py - 2 pr - 20 text - sm "focus":outline - none "focus":ring - 2 "focus":ring - indigo - 500";"
        placeholder="Search talent, jobs, projects...";"
        aria - label="Search";"
      />;
      <div className="absolute inset - y-0 right - 2 flex items - center gap - 2">;"
        <button type="button" on_click={start_voice} className="inline - flex "sm":hidden text - gray - 500 "hover":text - gray - 800 "dark":"hover":text - gray - 200" aria - label="Voice search">🎤</button>;"
        <button type="submit" className="text - sm font - medium text - indigo - 600 "hover":text - indigo - 700">Search</button>;"
      </div>;
      {open && suggestions.length > 0 && (<div className="absolute z - 50 mt - 1 w - full rounded - md border border - gray - 200 "dark":border - gray - 800 bg - white "dark":bg - gray - 900 shadow - lg">;"
          <ul className="max - h-64 overflow - auto py - 1 text - sm">;"
            {suggestions.map ((s, i) => (<li key={i}>;
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

        on_focus={() => set_open (suggestions.length > 0)}
        className='w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 80 dark:bg - gray - 900 / 60 backdrop - blur px - 3 py - 2 pr - 20 text - sm focus:outline - none focus:ring - 2 focus:ring - indigo - 500;
        placeholder=Search talent, jobs, projects...';
        aria - label='Search;
      />;
      <div className=absolute inset - y-0 right - 2 flex items - center gap - 2'>;
        <button;
          type='button;
          on_click={start_voice}
          className=inline - flex sm:hidden text - gray - 500 hover:text - gray - 800 dark:hover:text - gray - 200';
          aria - label='Voice search;
        >;
          🎤;
        </button>;
        <button;
          type=submit';
          className='text - sm font - medium text - indigo - 600 hover:text - indigo - 700;
        >;
          Search;
        </button>;
      </div>;
      {open && suggestions.length > 0 && (
        <div className=absolute z - 50 mt - 1 w - full rounded - md border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - gray - 900 shadow - lg'>;
          <ul className='max - h-64 overflow - auto py - 1 text - sm>;
            {suggestions.map ((s, i) => (
              <li key={i}>;
                <button;
                  type=button';

                </button>;
const Speech: any =
      (window as any).SpeechRecognition ||
    rec.start ()}>
      <input
        value={query}

                </button>
=======
                  on_click = {() =    /> {set_query (s)set_open (false)router.push (`/search?q=${encodeURIComponent (s)}`)}}
                  className='w - full text - left px - 3 py - 2 hover: bg - gray - 50 dark:hover:bg - gray - 800'                >   
}
    rec.start ();"
  return (<form on_submit={on_submit} className=\"relative w - full max - w-lg\" role=\"search\"    />;
      <input;
        value={query}
        on_change={(e) =    /> set_query (e.target.value)}
        on_focus={() => set_open (suggestions.length > 0)}"
        className=\'w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 80 dark:bg - gray - 900 / 60 backdrop - blur px - 3 py - 2 pr - 20 text - sm focus:outline - none focus:ring - 2 focus:ring - indigo - 500\';"
        placeholder=\'Search talent, jobs, projects...\';"
        aria - label=\'Search\';
      />;"
      <div className=\"absolute inset - y-0 right - 2 flex items - center gap - 2\"    />;"
        <button type=\"button\" on_click={start_voice} className=\"inline - flex sm:hidden text - gray - 500 hover:text - gray - 800 dark:hover:text - gray - 200\" aria - label=\"Voice search\"    />🎤</button>;"
        <button type=\"submit\" className=\"text - sm font - medium text - indigo - 600 hover:text - indigo - 700\"    />Search</button>;
      </div>;"
      {open && suggestions.length > 0 && (<div className=\"absolute z - 50 mt - 1 w - full rounded - md border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - gray - 900 shadow - lg\"    />;}"
          <ul className=\"max - h-64 overflow - auto py - 1 text - sm\"    />;}
            {suggestions.map ((s, i) => (<li key={i}    />;
                <button;"
                  type=\'button\';
                  on_click={() =    /> {set_query (s)set_open (false)router.push (`/search?q=${encodeURIComponent (s)}`)}}"
                  className=\"w - full text - left px - 3 py - 2 hover: bg - gray - 50 dark:hover:bg - gray - 800\">

                  {}
}
                </button>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              </li>))}
          </ul>
    </div>
  );
}
    </form>))})ursor/fix-website-loading-errors-and-merge-6662;
  )))}
  ))
    </form>));
}

<<<<<<< HEAD
=======
<<<<<<< HEAD


pr-12243


  );

<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
);
pr-12243

  );

  );

);  )
}
  );
);

  );


ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/chore/fix-lint-and-merge
  );

);  )
}
  );
<<<<<<< HEAD
);
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243



);
origin/cursor/automate-test-improve-and-merge-code-2533





);


);
  );
);
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
"
=======
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
