import { useState, useEffect, useCallback } from 'react';
interface UseApiOptions {
  // TODO: Implement
}
  immediate?: boolean;

interface UseApiResult<T> {

  execute: () => Promise<void>;
</void>
export const useApi = <T>(
)
  apiFunction: () => Promise<T>,

): UseApiResult<T> => {

  const [data, setData] = useState<T | null>(null);

  const [error, setError] = useState<Error | null>(null);

interface ApiState<T> {

interface ApiState < T> {
};import { useState, useEffect } from 'react';

export function use_api < T>(url: string, options?: RequestInit) {
  const [state, set_state] = useState < ApiState < T>>({
    data: null,
    loading: true,
    error: null,


    error: null,;
  });
;
  useEffect (() => {
    const fetch_data = async () => {
      try {
  // TODO: Implement
          loading: false,
          error: error instanceof Error ? error && error.message : 'An error occurred',
interface UseApiProps {
  // TODO: Implement
  // Add props here as needed;
  // TODO: Implement
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void}
export const useApi = <T = any>(
  apiFunction: (...args: any[]) => Promise<T>

export const use_api = <T = any>(
  api_function: (...args: any[]) => Promise < T>,
  options: UseApiOptions = {}
      execute()}
  }, [execute, options.immediate]);
  return { data, loading, error, execute }}
export default useApi;
import { useState,useEffect,useCallback } from 'react'; interface UseApiOptions { immediate?: boolean; onSuccess?: (data: any) => void; onError?: (error: any) => void} } export const useApi = <T = any>( apiFunction: (...args: any[]) => Promise<T>,options: UseApiOptions = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<any>(null); const execute = useCallback(async (...args: any[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options.onSuccess?.(result); return result} catch (err) { setError(err); options.onError?.(err); throw err} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;

  const [error, set_error] = useState < any>(null);
  const execute = useCallback (async (...args: any[]) => {
  // TODO: Implement
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



import { useState,useEffect,useCallback } from 'react'; interface UseApiOptions { immediate?: boolean; onSuccess?: (data: any) => void; onError?: (error: any) => void} } export const useApi = <T = any>( apiFunction: (...args: any[]) => Promise<T>,options: UseApiOptions = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<any>(null); const execute = useCallback(async (...args: any[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options && options.onSuccess?.(result); return result} catch (err) { setError(err); options && options.onError?.(err); throw err} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options && options.immediate) { execute()} },[execute,options && options.immediate]); return { data,loading,error,execute }}; export default useApi;


import { useState,useEffect,useCallback } from &apos;react&apos;; interface UseApiOptions<T = unknown> { immediate?: boolean; onSuccess?: (data: T) => void; onError?: (error: Error) => void} export const useApi = <T = unknown>( apiFunction: (...args: unknown[]) => Promise<T>,options: UseApiOptions<T> = {} ) => { const [data,setData] = useState<T | null>(null); const [loading,setLoading] = useState(false); const [error,setError] = useState<Error | null>(null); const execute = useCallback(async (...args: unknown[]) => { try { setLoading(true); setError(null); const result = await apiFunction(...args); setData(result); options.onSuccess?.(result); return result} catch (err) { const error = err instanceof Error ? err : new Error(String(err)); setError(error); options.onError?.(error); throw error} finally { setLoading(false)} },[apiFunction,options]); useEffect(() => { if (options.immediate) { execute()} },[execute,options.immediate]); return { data,loading,error,execute }}; export default useApi;


export function useApi<T>(
  apiCall: () => Promise<T>,

): ApiState<T> & { refetch: () => void } {


  const [error, setError] = useState<string | null>(null);
</string>

    <div>
</div>
      <h1>UseApi</h1>
      <p>This component is currently under development.</p>


