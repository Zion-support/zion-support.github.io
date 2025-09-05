import { useState, useEffect } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Type definitions for fetch API
type HeadersInit = Headers | string[][] | Record<string, string>;
type BodyInit = Blob | BufferSource | FormData | URLSearchParams | string;
type RequestMode = 'cors' | 'navigate' | 'no-cors' | 'same-origin';
type RequestCredentials = 'include' | 'omit' | 'same-origin';
type RequestCache = 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
type RequestRedirect = 'error' | 'follow' | 'manual';
type ReferrerPolicy = 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';

interface RequestInit {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
  keepalive?: boolean;
  signal?: AbortSignal | null;
  window?: any;
}

export function useApi<T>(url: string, options?: RequestInit) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : 'An error occurred',
        });
      }
    };

    fetchData();
  }, [url, JSON.stringify(options)]);

  return state;
}