import React from 'react';
interface CacheItem<T> {
<<<<<<< HEAD
  "data": T;
  timestamp: number;
  ttl: number;'
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface CacheConfig {
  "defaultTTL": number;
  maxSize: number;
  cleanupInterval: number;'
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
class AdvancedCache<T = any> {

  private cache = new Map<string, CacheItem<T>>();
</string>
  constructor(config: Partial<CacheConfig> = {}) {
<<<<<<< HEAD
<<<<<<< HEAD
    this.config = {
=======
    this && this.config = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      "defaultTTL": '5 * 60 * 1000', // 5 minutes
      "maxSize": 100,
      "cleanupInterval": '60 * 1000', // 1 minute
      ...config
    }
    // Start cleanup interval
<<<<<<< HEAD
    setInterval(() => this.cleanup(), this.config.cleanupInterval)}
  set("key": string, "data": T, ttl?: number): void {
    const "item": CacheItem<T> = {
      data,
      "timestamp": Date.now(),
      "ttl": ttl || this.config.defaultTTL
    }
    // Remove oldest items if cache is full
    if (this.cache.size >= this.config.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey)}
    this.cache.set(key, item)}
  get("key": string): T | null {
    const item = this.cache.get(key);
    if (!item) {
      return null}
    // Check if item has expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null}
    return item.data}
  has("key": string): boolean {
    return this.get(key) !== null}
  delete("key": string): boolean {
    return this.cache.delete(key)}
  clear(): void {
    this.cache.clear()}
  size(): number {
    return this.cache.size}
  private cleanup(): void {
    const now = Date.now();
    for (const [key, ite,
  m
] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key)}
  // Get cache statistics
  getStats() {
    const now = Date.now();
    let expired = 0;
    let active = 0;
    for (const item of this.cache.values()) {
      if (now - item.timestamp > item.ttl) {
        expired++} else {
        active++}
    return {
      "total": 'this.cache.size',
=======
    setInterval(() => this && this.cleanup(), this && this.config.cleanupInterval)}
  set("key": string, "data": T, ttl?: number): void {
    const "item": CacheItem<T> = {
      data,
      "timestamp": Date && Date.now(),
      "ttl": ttl || this && this.config.defaultTTL
    }
    // Remove oldest items if cache is full
    if (this && this.cache.size >= this && this.config.maxSize) {
      const firstKey = this && this.cache.keys().next().value;
      this && this.cache.delete(firstKey)}
    this && this.cache.set(key, item)}
  get("key": string): T | null {
    const item = this && this.cache.get(key);
    if (!item) {
      return null}
    // Check if item has expired
    if (Date && Date.now() - item && item.timestamp > item && item.ttl) {
      this && this.cache.delete(key);
      return null}
    return item && item.data}
  has("key": string): boolean {
    return this && this.get(key) !== null}
  delete("key": string): boolean {
    return this && this.cache.delete(key)}
  clear(): void {
    this && this.cache.clear()}
  size(): number {
    return this && this.cache.size}
  private cleanup(): void {
    const now = Date && Date.now();
    for (const [key, ite,
  m
] of this && this.cache.entries()) {
      if (now - item && item.timestamp > item && item.ttl) {
        this && this.cache.delete(key)}
  // Get cache statistics
  getStats() {
    const now = Date && Date.now();
    let expired = 0;
    let active = 0;
    for (const item of this && this.cache.values()) {
      if (now - item && item.timestamp > item && item.ttl) {
        expired++} else {
        active++}
    return {
      "total": 'this && this.cache.size',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
] = React.useState<T | null>(() => globalCache.get(key));
  const [loading, setLoadin,
  g
] = React.useState(false);
  const [error, setErro,
  r
] = React.useState<Error | null>(null);
  const fetchData = React.useCallback(async = () => {
=======
] = React && React.useState<T | null>(() => globalCache && globalCache.get(key));
  const [loading, setLoadin,
  g
] = React && React.useState(false);
  const [error, setErro,
  r
] = React && React.useState<Error | null>(null);
  const fetchData = React && React.useCallback(async = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    setLoading(true);
    setError(null);
    try {
      const result = await fetcher();
<<<<<<< HEAD
      globalCache.set(key, result, ttl);
=======
      globalCache && globalCache.set(key, result, ttl);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      setData(result)} catch (err) {
      setError(err as Error)} finally {
      setLoading(false)}
  }, [key, fetcher, tt,
  l
]);
<<<<<<< HEAD
  React.useEffect(() => {
=======
  React && React.useEffect(() => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (!data && !loading) {
      fetchData()}
  }, [data, loading, fetchDat,
  a
]);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: '100',cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: 'string',data: 'T',ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: 'ttl || this.config.defaultTTL' } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: '0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: 'string',fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: 'fetchData' }
  return { data, loading, error, "refetch": fetchData }
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: 100,cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: string,data: T,ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: ttl || this.config.defaultTTL } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: 0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: string,fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: fetchData }
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705

  return { data, loading, error, refetch: fetchData }
import * as React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: '100',cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: 'string',data: 'T',ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: 'ttl || this.config.defaultTTL' } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: '0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: 'string',fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: 'fetchData' }
  return { data, loading, error, "refetch": fetchData }
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: '100',cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: 'string',data: 'T',ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: 'ttl || this.config.defaultTTL' } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: '0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: 'string',fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: 'fetchData' }
  return { data, loading, error, "refetch": fetchData }
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: 100,cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: string,data: T,ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: ttl || this.config.defaultTTL } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: 0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: string,fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: fetchData }
<<<<<<< HEAD
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
  return { data, loading, error, refetch: fetchData }
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: '100',cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: 'string',data: 'T',ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: 'ttl || this.config.defaultTTL' } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: '0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: 'string',fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: 'fetchData' }
  return { data, loading, error, "refetch": fetchData }
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: 100,cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: string,data: T,ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: ttl || this.config.defaultTTL } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: 0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: string,fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: fetchData }
<<<<<<< HEAD
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: '100',cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: 'string',data: 'T',ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: 'ttl || this.config.defaultTTL' } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: '0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: 'string',fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: 'fetchData' }
  return { data, loading, error, "refetch": fetchData }
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: 100,cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: string,data: T,ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: ttl || this.config.defaultTTL } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: 0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: string,fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: fetchData }
  return { data, loading, error, refetch: fetchData }
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: '100',cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: 'string',data: 'T',ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: 'ttl || this.config.defaultTTL' } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: '0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: 'string',fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: 'fetchData' }
  return { data, loading, error, "refetch": fetchData }
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: 100,cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: string,data: T,ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: ttl || this.config.defaultTTL } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: 0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: string,fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: fetchData }
=======
<<<<<<< HEAD
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: '100',cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: 'string',data: 'T',ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: 'ttl || this.config.defaultTTL' } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: '0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: 'string',fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: 'fetchData' }
  return { data, loading, error, "refetch": fetchData }
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: 100,cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: string,data: T,ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: ttl || this.config.defaultTTL } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: 0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: string,fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: fetchData }
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import * as React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: 100,cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: string,data: T,ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: ttl || this.config.defaultTTL } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: 0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: string,fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: fetchData }
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: '100',cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: 'string',data: 'T',ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: 'ttl || this.config.defaultTTL' } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: '0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: 'string',fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: 'fetchData' }
  return { data, loading, error, "refetch": fetchData }
import React from 'react'; interface CacheItem<T> { data: T; timestamp: number; ttl: number;' } interface CacheConfig { defaultTTL: number; maxSize: number; cleanupInterval: number;' } class AdvancedCache<T = any> { private cache = new Map<string,CacheItem<T>>(); private config: CacheConfig; constructor(config: Partial<CacheConfig> = {}) { this.config = { defaultTTL: '5 * 60 * 1000',maxSize: 100,cleanupInterval: '60 * 1000',...config } setInterval(() => this.cleanup(),this.config.cleanupInterval)} set(key: string,data: T,ttl?: number): void { const item: CacheItem<T> = { data,timestamp: Date.now(),ttl: ttl || this.config.defaultTTL } if (this.cache.size >= this.config.maxSize) { const firstKey = this.cache.keys().next().value; this.cache.delete(firstKey)} this.cache.set(key,item)} get(key: string): T | null { const item = this.cache.get(key); if (!item) { return null} if (Date.now() - item.timestamp > item.ttl) { this.cache.delete(key); return null} return item.data} has(key: string): boolean { return this.get(key) !== null} delete(key: string): boolean { return this.cache.delete(key)} clear(): void { this.cache.clear()} size(): number { return this.cache.size} private cleanup(): void { const now = Date.now(); for (const [key,ite,m ] of this.cache.entries()) { if (now - item.timestamp > item.ttl) { this.cache.delete(key)} getStats() { const now = Date.now(); let expired = 0; let active = 0; for (const item of this.cache.values()) { if (now - item.timestamp > item.ttl) { expired++} else { active++} return { total: 'this.cache.size',active,expired,hitRate: 0 } export const globalCache = new AdvancedCache(); export const useCache = <T>(key: string,fetcher: () => Promise<T>,ttl?: number) => { const [data,setDat,a ] = React.useState<T | null>(() => globalCache.get(key)); const [loading,setLoadin,g ] = React.useState(false); const [error,setErro,r ] = React.useState<Error | null>(null); const fetchData = React.useCallback(async = () => { setLoading(true); setError(null); try { const result = await fetcher(); globalCache.set(key,result,ttl); setData(result)} catch (err) { setError(err as Error)} finally { setLoading(false)} },[key,fetcher,tt,l ]); React.useEffect(() => { if (!data && !loading) { fetchData()} },[data,loading,fetchDat,a ]); return { data,loading,error,refetch: fetchData }
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    const "item": CacheItem<T> = {"
"
export const useCache = <T>("key": string, "fetcher": () => Promise<T>, ttl?: number) => {"

] = React && React.useState<T | null>(() => globalCache && globalCache.get(key));

] = React && React.useState<Error | null>(null);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
