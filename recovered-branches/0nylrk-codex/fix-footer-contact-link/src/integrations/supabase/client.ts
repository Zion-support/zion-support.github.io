<<<<<<< HEAD
import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = $2;
export const supabaseAnonKey = $2;
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (!supabaseUrl |!supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}
// Utility to detect network connectivity. navigator.onLine is not reliable in
// all environments, so we also try a small request with a short timeout.
}
}

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import {createClient} from '@supabase/supabase-js';
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (!supabaseUrl |!supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {createClient} from '@supabase/supabase-js';
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (!supabaseUrl |!supabaseAnonKey) {
<<<<<<< HEAD
}
throw new Error('Missing Supabase environment variables');'
import { createClient } from '@supabase/supabase-js';'
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  }
  throw new Error('Missing Supabase environment variables');'
}
// Utility to detect network connectivity. navigator.onLine is not reliable inimport { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { "responseTime": number; "memoryUsage": number; "timestamp": string; "endpoint": string; "method": string} class PerformanceMonitor { private static "instance": PerformanceMonitor; private "metrics": PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric("metric": PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = ("req": NextApiRequest,"res": NextApiResponse,"next": Function) => { const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ "responseTime": 'endTime - startTime',"memoryUsage": endMemory - startMemory,"timestamp": new Date().toISOString(),"endpoint": req.url || '',"method": req.method || '' })}); next()} export default PerformanceMonitor;'
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
=======
  throw new Error('Missing Supabase environment variables')

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
// Utility to detect network connectivity. navigator.onLine is not reliable in
// all environments, so we also try a small request with a short timeout.
>>>>>>> merged-prs-20250907-203621
export const checkOnline = async (): Promise<boolean> => {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return false
  }
  try {
<<<<<<< HEAD
    const controller = new AbortController($2);
    const id = setTimeout(() => controller.abort(), 3000),
    await fetch($2);
    clearTimeout($2);
    return true
  } catch {
    return false
  }
=======
  try {;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 3000);
    await fetch('https://clients3.google.com/generate_204', {
      mode: 'no-cors'
      signal: controller.signal});
<<<<<<< HEAD
    clearTimeout(id);
    return true
  } catch {
    return false
  }
=======
    clearTimeout(id);
    return true
  } catch {
    return false
  }
}
// Custom fetch wrapper to provide clearer errors when network requests fail
export const safeFetch: typeof fetch = async (input, init) => {
  if (!(await checkOnline())) {
    throw new Error('No internet connection')
  }
  try {
    return await fetch(input, init)
  } catch (err) {
    // Log the original error for debugging;
    console.error('Supabase fetch failed:', err);
    throw new Error('Failed to connect to Supabase')
  }
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { fetch: safeFetch };
});
// Helper function to get profiles table



import {createClient} from '@supabase/supabase-js';


export const getFromProfiles = () => supabase.from('profiles');

import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}
// Utility to detect network connectivity. navigator.onLine is not reliable in
    const id = setTimeout(() => controller && controller.abort(), 3000);
    await fetch('https://clients3 && clients3.google.com/generate_204', {
      mode: 'no-cors',
      signal: controller && controller.signal});
    clearTimeout(id);
    return true
import {create_client} from '@supabase / supabase - js';
export const supabase_url = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
;
// Check condition
if ( {) {
  $2
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
<<<<<<< HEAD
  throw new Error ('Missing Supabase environment variables');'
}
// Utility to detect network connectivity. navigator.on_line is not reliable in;
// all environments, so we also try a small request with a short timeout.;
export const check_online = async (): Promise < boolean> => {
  // Check condition
}
if ( {) {
  $2
}
    return false;
  }
  try {
<<<<<<< HEAD
=======
    const controller = new AbortController ();
    const id = set_timeout (() => controller.abort (), 3000);
    await fetch ('https://clients3.google.com / generate_204', {
      mode: 'no - cors',
      signal: controller.signal});
    clear_timeout (id);
    return true;
  } catch {
    return false;
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
// Custom fetch wrapper to provide clearer errors when network requests fail;
}
export const "safe_fetch": typeof fetch = async (input, init) => {
  }
  if ()) {) {
  $2
}
<<<<<<< HEAD
    throw new Error ('No internet connection');'
// Custom fetch wrapper to provide clearer errors when network requests fail,
export const "safeFetch": typeof fetch = async (input, init) => {
  }
  if (!(await checkOnline())) {
    }
    throw new Error("No internet connection");"
=======
    throw new Error ('No internet connection');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
  try {
    }
    return await fetch (input, init);
  } catch (err) {
<<<<<<< HEAD
}
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  }
  throw new Error('Missing Supabase environment variables');'
}
;
// Utility to detect network connectivity. navigator.onLine is not reliable in;
// all environments, so we also try a small request with a short timeout.;
export const checkOnline = async (): Promise<boolean> => {;
  }
  if (typeof navigator !== 'undefined' && !navigator.onLine) {;'
    }
    return false;
  }
  try {;
    }
    const controller = new AbortController(),;
    const id = setTimeout(() => controller.abort(), 3000),;
    await fetch('"https"://clients3.google.com/generate_204', {;'
      }
      "mode": 'no-cors',;'
      "signal": controller.signal}),;
    clearTimeout(id),;
    return true;
  } catch {;
    }
    return false;
  }
},;
// Custom fetch wrapper to provide clearer errors when network requests fail;
export const "safeFetch": typeof fetch = async (input, init) => {;
  }
  if (!(await checkOnline())) {;
    }
    throw new Error('No internet connection');'
  }
  try {;export const getFromProfiles = () => supabase.from("profiles");
>>>>>>> merged-prs-20250907-203621
},
=======

<<<<<<< HEAD
=======
export const getFromProfiles = () => supabase && supabase.from('profiles');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

=======
>>>>>>> origin/chore/fix-lint-and-merge
// Custom fetch wrapper to provide clearer errors when network requests fail
export const safeFetch: typeof fetch = async (input, init) => {
  if (!(await checkOnline())) {
    throw new Error('No internet connection')
  }
  try {
    return await fetch(input, init)
  } catch (err) {
    // Log the original error for debugging;
    console.error('Supabase fetch failed:', err);
    throw new Error('Failed to connect to Supabase')
  }
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { fetch: safeFetch };
});
// Helper function to get profiles table
<<<<<<< HEAD
export const getFromProfiles = () => supabase.from($2);
=======

import {createClient} from '@supabase/supabase-js';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
<<<<<<< HEAD

interface PerformanceMetrics {
  "responseTime": number;
  memoryUsage: number;
  timestamp: string;
  endpoint: string;
  method: string}
class PerformanceMonitor {
  private static "instance": PerformanceMonitor;
  private metrics: PerformanceMetrics[] = [];
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()}
    return PerformanceMonitor.instance}
  recordMetric("metric": PerformanceMetrics) {
    this.metrics.push(metric);
    // Keep only last 1000 metrics to prevent memory leaks
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-1000)}
  getMetrics(): PerformanceMetrics[] {
    return [...this.metric,
  s
]}
  getAverageResponseTime(): number {
    if (this.metrics.length === 0) {
      return 0}
    const total = this.metrics.reduce((sum, metric) => sum + metric.responseTime, 0);
    return total / this.metrics.length}
  getMemoryUsage(): number {
    if (this.metrics.length === 0) {
      return 0}
    const latest = this.metrics[this.metrics.length - 1];
    return latest ? latest.memoryUsage : 0}
export const performanceMiddleware = ("req": NextApiRequest, "res": NextApiResponse, "next": Function) => {
  const startTime = Date.now();
  const startMemory = process.memoryUsage().heapUsed;
  res.on('finish', () => {
    const endTime = Date.now();
    const endMemory = process.memoryUsage().heapUsed;
    const monitor = PerformanceMonitor.getInstance();
    monitor.recordMetric({
      "responseTime": 'endTime - startTime',
      "memoryUsage": endMemory - startMemory,
      "timestamp": new Date().toISOString(),
      "endpoint": req.url || '',
      "method": req.method || ''
    })});
  next()}
export default PerformanceMonitor;

import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: 'number; memoryUsage: number; timestamp: string; endpoint: string; method: string;' } } class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: 'NextApiRequest',res: 'NextApiResponse',next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: 'endMemory - startMemory',timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;

import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {"
  throw new Error("Missing Supabase environment variables");
}

// all environments, so we also try a small request with a short timeout.
export const checkOnline = async (): Promise<boolean> => {"
  if (typeof navigator !== "undefined" && !navigator.onLine) {};
    return false;
  }

  try {;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 3000);"
    await fetch("https://clients3.google.com/generate_204", {"
      mode: "no-cors",
      signal: controller.signal,
    });
    clearTimeout(id);

    return false;
  }
};

// Custom fetch wrapper to provide clearer errors when network requests fail
export const safeFetch: typeof fetch = async (input, init) => {
  if (!(await checkOnline())) {
    throw new Error("No internet connection");
  }
  try {

    return await fetch (input, init);
  } catch (err) {

import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');

=======
export const getFromProfiles = () => supabase && supabase.from('profiles');
    // Log the original error for debugging;
    console.error ('Supabase fetch failed:', err);
    throw new Error ('Failed to connect to Supabase');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
}
;
export const supabase = create_client (supabase_url, supabaseAnonKey, {
  global: { fetch: safe_fetch }
});
;
// Helper function to get profiles table;
export const getFromProfiles = () =>: any supabase.from ('profiles');
;
import { createClient } from '@supabase/supabase-js',;
;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables'),;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
;
// Utility to detect network connectivity. navigator.onLine is not reliable in;
// all environments, so we also try a small request with a short timeout.;
export const checkOnline = async (): Promise<boolean> => {;
  if (typeof navigator !== 'undefined' && !navigator.onLine) {;
    return false;
  }
<<<<<<< HEAD
export const checkOnline = async ():Promise<boolean> => {;
  if (typeof navigator !== 'undefined' && !navigator.onLine) {;
    return false,;
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  try {;
    const controller = new AbortController(),;
    const id = setTimeout(() => controller.abort(), 3000),;
    await fetch('https://clients3.google.com/generate_204', {;
      mode: 'no-cors',;
      signal: controller.signal}),;
    clearTimeout(id),;
    return true;
  } catch {;
    return false;
  }
},;
// Custom fetch wrapper to provide clearer errors when network requests fail;
export const safeFetch: typeof fetch = async (input, init) => {;
  if (!(await checkOnline())) {;
    throw new Error('No internet connection');
  }
  try {;

    return await fetch(input, init);

  } catch (err) {

import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
}

  }
},;
;
// Custom fetch wrapper to provide clearer errors when network requests fail;
export const safeFetch:typeof fetch = async (input, init) => {;
  if (!(await checkOnline())) {;
    throw new Error('No internet connection'),;
  }
  try {;
    return await fetch(input, init),;
  } catch (err) {;
    // Log the original error for debugging;
    console.error('Supabase fetch failed:', err),;
    throw new Error('Failed to connect to Supabase'),;
  }
},;
<<<<<<< HEAD
=======
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {;
  global: { fetch: safeFetch }



export const getFromProfiles = () => supabase.from('profiles');
      mode:'no-cors',;
      signal:controller.signal}),;
    clearTimeout(id),;
    return true,;
  } catch {;
    return false,;
  }
},;
;
// Custom fetch wrapper to provide clearer errors when network requests fail;
export const safeFetch:typeof fetch = async (input, init) => {;
  if (!(await checkOnline())) {;
    throw new Error('No internet connection'),;
  }
  try {;
    return await fetch(input, init),;
  } catch (err) {;
    // Log the original error for debugging;
    console.error('Supabase fetch failed:', err),;
    throw new Error('Failed to connect to Supabase'),;
  }
},;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {;
  global:{ fetch:safeFetch }
}),;
;
<<<<<<< HEAD
// Helper function to get profiles table;
=======
// Helper function to get profiles table;
export const getFromProfiles = () => supabase.from('profiles'),; 
});
// Helper function to get profiles table;
export const getFromProfiles = () => supabase.from('profiles');
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
