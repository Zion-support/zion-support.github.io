import React from 'react';
interface CacheItem<T> {


interface CacheConfig {
  "defaultTTL": number;
  maxSize: number;
  cleanupInterval: number;'

class AdvancedCache<T = any> {

  private cache = new Map<string, CacheItem<T>>();
</string>
  constructor(config: Partial<CacheConfig> = {}) {


      "defaultTTL": '5 * 60 * 1000', // 5 minutes
      "maxSize": 100,
      "cleanupInterval": '60 * 1000', // 1 minute
      ...config
    }
    // Start cleanup interval



      active,
      expired,
      "hitRate": 0 // Would need to track hits/misses for accurate rate
    }
// Global cache instance
export const globalCache = new AdvancedCache();
// React hook for caching
export const useCache = <T>("key": string, "fetcher": () => Promise<T>, ttl?: number) => {
  const [data, setDat,
  a



    setLoading(true);
    setError(null);
    try {
      const result = await fetcher();



      setData(result)} catch (err) {
      setError(err as Error)} finally {
      setLoading(false)}
  }, [key, fetcher, tt,
  l
]);



    if (!data && !loading) {
      fetchData()}
  }, [data, loading, fetchDat,
  a
]);





