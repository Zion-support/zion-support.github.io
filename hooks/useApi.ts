<<<<<<< HEAD
<<<<<<< HEAD
import { useState,useEffect,useCallback } from &apos;react&apos;; interface UseApiOptions<T = unknown> { immediate?: boolean; onSuccess?: (data: T) => void; onError?: (error: Error) => void} export const useApi = <T = unknown>( apiFunction: (...args: unknown[]) => Promise<T>,options: UseApiOptions<T> = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<Error | null>(null); const execute = useCallback(async (...args: unknown[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options.onSuccess?.(result); return result} catch (err) { const error = err instanceof Error ? err : new Error(String(err)); setError(error); options.onError?.(error); throw error} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;
const { useState,useEffect,useCallback } from "react"; interface UseApiOptions<T = unknown> { immediate?: boolean; onSuccess?: (data: T) => void; onError?: (error: Error) => void} export const useApi = <T = unknown>( apiFunction: (.args: unknown[]) => Promise<T>,options: UseApiOptions<T> = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<Error | null>(null); const execute = useCallback(async (.args: unknown[]) => { try { setLoading(true); setError(null); const result = await apiFunction(.args); setData(result); options.onSuccess?.(result); return result} catch (err) { const error = err instanceof Error ? err : new Error(String(err)); setError(error); options.onError?.(error); throw error} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;''"
import React from 'react';
=======
      setLoading(false)};
;
  return { data, loading, error, execute }};
};
};
};
};import { useState, useEffect } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
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
>>>>>>> origin/main
<<<<<<< HEAD
};

interface UseApiProps {
  // Add props here as needed
}

<<<<<<< HEAD
=======
interface UseApiProps {
  // Add props here as needed
}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
=======
import { useState, useEffect, useCallback } from 'react';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
interface UseApiOptions {
  immediate?: boolean;
  onSuccess?: (data: any) => void, onError?: (error: Error) => void,
}

interface UseApiResult<T> {
  data: T | null, loading: boolean,
  error: Error | null, execute: (...args: any[]) => Promise<void>,
}

export function useApi<T = any>(
  apiFunction: (...args: any[]) => Promise<T>,
  options: UseApiOptions = {}
): UseApiResult<T> {
interface UseApiOptions<T = unknown> {
  immediate?: boolean;
  onSuccess?: (data: T) => void, onError?: (error: Error) => void,
}

export const useApi = <T = unknown>(
  apiFunction: (...args: unknown[]) => Promise<T>,
  options: UseApiOptions<T> = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (...args: unknown[]) => {
=======
interface UseApiOptions {
=======
};interface UseApiOptions {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
  immediate?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void}
export const useApi = <T = any>(
  apiFunction: (...args: any[]) => Promise<T>,
  options: UseApiOptions = {}
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const execute = useCallback(async (...args: any[]) => {
>>>>>>> origin/main
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...args);
      setData(result);
      options.onSuccess?.(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      options.onError?.(error);
      throw error;
<<<<<<< HEAD
    } finally {
      setLoading(false);
    }
  }, [apiFunction, options]);

  useEffect(() => {
    if (options.immediate) {
      execute();
    }
  }, [execute, options.immediate]);

  return { data, loading, error, execute };
};

export default useApi;
<<<<<<< HEAD
=======
      setLoading(false);
    }
  }, [apiFunction, options]);
  useEffect(() => {
    if (options.immediate) {
      execute()}
  }, [execute, options.immediate]);
  return { data, loading, error, execute }};
export default useApi;
>>>>>>> origin/main
import { useState,useEffect,useCallback } from 'react'; interface UseApiOptions { immediate?: boolean; onSuccess?: (data: any) => void; onError?: (error: any) => void} } export const useApi = <T = any>( apiFunction: (...args: any[]) => Promise<T>,options: UseApiOptions = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<any>(null); const execute = useCallback(async (...args: any[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options.onSuccess?.(result); return result} catch (err) { setError(err); options.onError?.(err); throw err} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;
export default function UseApi({ }: UseApiProps) {
  return (
    <div>
      <h1>UseApi</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
=======
interface ApiState<T> {
  data: T | null, loading: boolean,
  error: string | null,
}

interface UseApiOptions {
  immediate?: boolean;
=======
>>>>>>> origin/main
}

export function useApi<T>(
  apiCall: () => Promise<T>,
  options: UseApiOptions = {}
): ApiState<T> & { refetch: () => void } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
    const result = await apiCall(),
    setData(result)
  } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [apiCall]);

  useEffect(() => {
    if (options.immediate !== false) {
      fetchData();
    }
  }, [fetchData, options.immediate]);


    fetchData();
  }, [url, options]);

  return state;

}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/main
