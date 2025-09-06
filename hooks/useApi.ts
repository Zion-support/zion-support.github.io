

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      setLoading(false)};
;
  return { data, loading, error, execute }};
};
};
};
=======
      setLoading(false)}
  return { data, loading, error, execute }}
}
}
}


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
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
    error: null,;

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
          data: null
          loading: false
          error: error instanceof Error ? error.message : 'An error occurred'
        });
      }

    }
    fetchData();
  }, [url, JSON.stringify(options)]);
  return state;
}

=======

import { useState,useEffect,useCallback } from &apos;react&apos;; interface UseApiOptions<T = unknown> { immediate?: boolean; onSuccess?: (data: T) => void; onError?: (error: Error) => void} export const useApi = <T = unknown>( apiFunction: (...args: unknown[]) => Promise<T>,options: UseApiOptions<T> = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<Error | null>(null); const execute = useCallback(async (...args: unknown[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options.onSuccess?.(result); return result} catch (err) { const error = err instanceof Error ? err : new Error(String(err)); setError(error); options.onError?.(error); throw error} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;
const { useState,useEffect,useCallback } from "react"; interface UseApiOptions<T = unknown> { immediate?: boolean; onSuccess?: (data: T) => void; onError?: (error: Error) => void} export const useApi = <T = unknown>( apiFunction: (.args: unknown[]) => Promise<T>,options: UseApiOptions<T> = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<Error | null>(null); const execute = useCallback(async (.args: unknown[]) => { try { setLoading(true); setError(null); const result = await apiFunction(.args); setData(result); options.onSuccess?.(result); return result} catch (err) { const error = err instanceof Error ? err : new Error(String(err)); setError(error); options.onError?.(error); throw error} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;''"
import React from 'react';

=======


interface UseApiProps {
  // Add props here as needed
}


=======
interface UseApiProps {
  // Add props here as needed
}


=======
import { useState, useEffect, useCallback } from 'react';




>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
}
interface UseApiProps {
  // Add props here as needed
}


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
interface UseApiOptions {
  immediate?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void}
export const useApi = <T = any>(
  apiFunction: (...args: any[]) => Promise<T>
  options: UseApiOptions = {}
) => {;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const execute = useCallback(async (...args: any[]) => {
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
      setLoading(false);
    }
  }, [apiFunction, options]);
  useEffect(() => {
    if (options.immediate) {
      execute()}
  }, [execute, options.immediate]);
  return { data, loading, error, execute }}
export default useApi;


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
import { useState,useEffect,useCallback } from 'react'; interface UseApiOptions { immediate?: boolean; onSuccess?: (data: any) => void; onError?: (error: any) => void} } export const useApi = <T = any>( apiFunction: (...args: any[]) => Promise<T>,options: UseApiOptions = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<any>(null); const execute = useCallback(async (...args: any[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options.onSuccess?.(result); return result} catch (err) { setError(err); options.onError?.(err); throw err} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;
export default function UseApi({ }: UseApiProps) {
  return (
    <div>
      <h1>UseApi</h1>
      <p>This component is currently under development.</p>
    </div>;
  );


=======
}

>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
