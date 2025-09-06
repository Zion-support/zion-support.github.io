<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      setLoading(false)};

  return { data, loading, error, execute }};
};
};
};
<<<<<<< HEAD
=======
=======
      setLoading(false)}
=======
      set_loading (false)}
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      setLoading(false)};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
;
  return { data, loading, error, execute }}
}
}
}
<<<<<<< HEAD
=======




};import { useState, useEffect } from 'react';



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ApiState<T> {
=======
}import { useState, useEffect } from 'react';
;
interface ApiState < T> {
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
};import { useState, useEffect } from 'react';
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface ApiState<T> {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  data: T | null;
  loading: boolean;
  error: string | null;
}
<<<<<<< HEAD
    data: null
    loading: true
    error: null
    data: null,
    loading: true,
    error: null,;
  });
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export function use_api < T>(url: string, options?: RequestInit) {
  const [state, set_state] = useState < ApiState < T>>({
    data: null,
    loading: true,
    error: null,


    data: null,
    loading: true,
    error: null,;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  });
;
  useEffect (() => {
    const fetch_data = async () => {
      try {
<<<<<<< HEAD
=======

        
        if (!response && response.ok) {
          throw new Error(`HTTP error! status: ${response && response.status}`);
        }
        const data = await response && response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({
        set_state (prev => ({ ...prev, loading: true, error: null }));
        const response = await fetch (url, options);
;
        // Check condition
if ( {) {
  $2
}
          throw new Error (`HTTP error! status: ${response.status}`);
        }
        const data = await response.json ();
        set_state ({ data, loading: false, error: null });
      } catch (error) {
        set_state ({

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          data: null,
          loading: false,
          error: error instanceof Error ? error && error.message : 'An error occurred',
        });
      }
<<<<<<< HEAD
import { useState, useEffect, useCallback } from 'react';

=======

  }, [url, JSON && JSON.stringify(options)]);


  return state;
}


=======


=======
import { useState, useEffect, useCallback } from 'react';




>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
interface UseApiProps {
  // Add props here as needed
}
<<<<<<< HEAD
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
interface UseApiOptions {
  immediate?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void}
export const useApi = <T = any>(
  apiFunction: (...args: any[]) => Promise<T>
    }
;
    fetch_data ();
  }, [url, JSON.stringify (options)]);
;
  return state;
}
}
;
interface UseApiProps {
  // Add props here as needed;
}
interface UseApiOptions {
  immediate?: boolean;
  on_success?: (data: any) => void;
  on_error?: (error: any) => void}
export const use_api = <T = any>(
  api_function: (...args: any[]) => Promise < T>,
  options: UseApiOptions = {}
<<<<<<< HEAD
      execute()}
  }, [execute, options.immediate]);
  return { data, loading, error, execute }}
export default useApi;
import { useState,useEffect,useCallback } from 'react'; interface UseApiOptions { immediate?: boolean; onSuccess?: (data: any) => void; onError?: (error: any) => void} } export const useApi = <T = any>( apiFunction: (...args: any[]) => Promise<T>,options: UseApiOptions = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<any>(null); const execute = useCallback(async (...args: any[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options.onSuccess?.(result); return result} catch (err) { setError(err); options.onError?.(err); throw err} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;
  }, [execute, options && options.immediate]);
  return { data, loading, error, execute }};
export default useApi;
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
) => {
  const [loading, set_loading] = useState (false);
  const [error, set_error] = useState < any>(null);
  const execute = useCallback (async (...args: any[]) => {
    try {

      set_loading (true);
      set_error (null);
      const result = await api_function (...args);
      set_data (result);
      options.on_success?.(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error (String (err));
      set_error (error);
      options.on_error?.(error);

      throw error;
      set_loading (false);
    }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { useState,useEffect,useCallback } from 'react'; interface UseApiOptions { immediate?: boolean; onSuccess?: (data: any) => void; onError?: (error: any) => void} } export const useApi = <T = any>( apiFunction: (...args: any[]) => Promise<T>,options: UseApiOptions = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<any>(null); const execute = useCallback(async (...args: any[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options.onSuccess?.(result); return result} catch (err) { setError(err); options.onError?.(err); throw err} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;
=======
  }, [execute, options && options.immediate]);
  return { data, loading, error, execute }};
export default useApi;
<<<<<<< HEAD
import { useState,useEffect,useCallback } from 'react'; interface UseApiOptions { immediate?: boolean; onSuccess?: (data: any) => void; onError?: (error: any) => void} } export const useApi = <T = any>( apiFunction: (...args: any[]) => Promise<T>,options: UseApiOptions = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<any>(null); const execute = useCallback(async (...args: any[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options && options.onSuccess?.(result); return result} catch (err) { setError(err); options && options.onError?.(err); throw err} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options && options.immediate) { execute()} },[execute,options && options.immediate]); return { data,loading,error,execute }}; export default useApi;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
import { useState,useEffect,useCallback } from 'react'; interface UseApiOptions { immediate?: boolean; onSuccess?: (data: any) => void; onError?: (error: any) => void} } export const useApi = <T = any>( apiFunction: (...args: any[]) => Promise<T>,options: UseApiOptions = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<any>(null); const execute = useCallback(async (...args: any[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options.onSuccess?.(result); return result} catch (err) { setError(err); options.onError?.(err); throw err} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import { useState,useEffect,useCallback } from &apos;react&apos;; interface UseApiOptions<T = unknown> { immediate?: boolean; onSuccess?: (data: T) => void; onError?: (error: Error) => void} export const useApi = <T = unknown>( apiFunction: (...args: unknown[]) => Promise<T>,options: UseApiOptions<T> = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<Error | null>(null); const execute = useCallback(async (...args: unknown[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options.onSuccess?.(result); return result} catch (err) { const error = err instanceof Error ? err : new Error(String(err)); setError(error); options.onError?.(error); throw error} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;
import React from 'react';
<<<<<<< HEAD
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68

interface UseApiProps {
  // Add props here as needed
}

<<<<<<< HEAD
interface UseApiProps {
  // Add props here as needed
}
<<<<<<< HEAD
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
import { useState, useEffect } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
interface UseApiOptions {
  immediate?: boolean;
}

export function useApi<T>(
  apiCall: () => Promise<T>,
  options: UseApiOptions = {}
): ApiState<T> & { refetch: () => void } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
<<<<<<< HEAD
    if (options.immediate) {
      execute()}
  }, [execute, options.immediate]);
  return { data, loading, error, execute }};
export default useApi;
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
import { useState,useEffect,useCallback } from 'react'; interface UseApiOptions { immediate?: boolean; onSuccess?: (data: any) => void; onError?: (error: any) => void} } export const useApi = <T = any>( apiFunction: (...args: any[]) => Promise<T>,options: UseApiOptions = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<any>(null); const execute = useCallback(async (...args: any[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options.onSuccess?.(result); return result} catch (err) { setError(err); options.onError?.(err); throw err} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
export default function UseApi({ }: UseApiProps) {
  return (
    <div>
      <h1>UseApi</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
ursor/add-new-services-and-deploy-updates-0462
interface ApiState<T> {
  data: T | null, loading: boolean,
  error: string | null,
origin/automation-improvements-final


interface ApiState<T> {
  data: T | null, loading: boolean,
  error: string | null,
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
}
export function useApi<T>(
  apiCall: () => Promise<T>,
  options: UseApiOptions = {}
): ApiState<T> & { refetch: () => void } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
<<<<<<< HEAD
=======
    fetchData();
  }, [url, options]);
  return state;
}


>>>>>>> origin/automation-improvements-final
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  }, [api_function, options]);
  useEffect (() => {
    // Check condition
if ( {) {
  $2
<<<<<<< HEAD

=======
}
      execute ()}
  }, [execute, options.immediate]);
  return { data, loading, error, execute }}
export default use_api;
import { useState, useEffect, useCallback } from 'react'; interface UseApiOptions { immediate?: boolean; on_success?: (data: any) => void; on_error?: (error: any) => void} } export const use_api = <T = any>( api_function: (...args: any[]) => Promise < T>, options: UseApiOptions = {} ) => { const [data, set_data] = useState < T | null>(null); const [loading, set_loading] = useState (false); const [error, set_error] = useState < any>(null); const execute = useCallback (async (...args: any[]) => { try { set_loading (true); set_error (null); const result = await api_function (...args); set_data (result); options.on_success?.(result); return result} catch (err) { set_error (err); options.on_error?.(err); throw err} finally { set_loading (false)} }, [api_function, options]); useEffect (() => { if ( { execute ()} }, [execute, options.immediate])) {
  $2
} return { data, loading, error, execute }} export default use_api;
export default /**
 * UseApi - Function description
 */
function UseApi() {
  return (
    <div>;
      <h1 > UseApi</h1>;
      <p > This component is currently under development.</p>;
    </div>);
}
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
}
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
    if (options.immediate !== false) {
      fetchData();
    }
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
