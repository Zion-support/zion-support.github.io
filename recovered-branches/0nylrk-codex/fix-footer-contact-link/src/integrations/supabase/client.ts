<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import {createClient} from '@supabase/supabase-js';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {createClient} from '@supabase/supabase-js';
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (!supabaseUrl |!supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
// Utility to detect network connectivity. navigator.onLine is not reliable in
// all environments, so we also try a small request with a short timeout.
export const checkOnline = async (): Promise<boolean> => {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return false
  }
  try {
  try {;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 3000);
    await fetch('https://clients3.google.com/generate_204', {
      mode: 'no-cors'
      signal: controller.signal});
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
export const getFromProfiles = () => supabase.from('profiles');
import {createClient} from '@supabase/supabase-js';

import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

}
// Utility to detect network connectivity. navigator.onLine is not reliable in
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
<<<<<<< HEAD
import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: 'number; memoryUsage: number; timestamp: string; endpoint: string; method: string;' } } class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: 'NextApiRequest',res: 'NextApiResponse',next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: 'endMemory - startMemory',timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;

import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======

import {createClient} from '@supabase/supabase-js';

import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
}
// Utility to detect network connectivity. navigator.onLine is not reliable inimport { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
import { createClient } from '@supabase/supabase-js';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
// Utility to detect network connectivity. navigator.onLine is not reliable inimport { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
import { createClient } from '@supabase/supabase-js';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
import { createClient } from '@supabase/supabase-js';

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

if (!supabaseUrl || !supabaseAnonKey) {"
  throw new Error("Missing Supabase environment variables");
}

// Utility to detect network connectivity. navigator && navigator.onLine is not reliable in
}
// Utility to detect network connectivity. navigator.onLine is not reliable in
=======
}
// Utility to detect network connectivity. navigator.onLine is not reliable in;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
return true
  } catch {
    return false
  }
}
  throw new Error ('Missing Supabase environment variables');
}
// Utility to detect network connectivity. navigator.on_line is not reliable in;
// all environments, so we also try a small request with a short timeout.;
export const check_online = async (): Promise < boolean> => {
  // Check condition
if ( {) {
  $2
}
    return false;
  }
};

;
// Custom fetch wrapper to provide clearer errors when network requests fail;
export const safe_fetch: typeof fetch = async (input, init) => {
  if ()) {) {
  $2
}
    throw new Error ('No internet connection');
// Custom fetch wrapper to provide clearer errors when network requests fail
export const safeFetch: typeof fetch = async (input, init) => {
  if (!(await checkOnline())) {
    throw new Error("No internet connection");
  }
  try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    return await fetch (input, init);
  } catch (err) {

<<<<<<< HEAD
export const getFromProfiles = () => supabase && supabase.from('profiles');
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
;
// Utility to detect network connectivity. navigator.onLine is not reliable in;
// all environments, so we also try a small request with a short timeout.;
export const checkOnline = async (): Promise<boolean> => {;
  if (typeof navigator !== 'undefined' && !navigator.onLine) {;
    return false;
  }

=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    return await fetch(input, init);
=======
    return await fetch (input, init);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  } catch (err) {

import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {}
  global: { fetch: safeFetch },;
});
;
// Helper function to get profiles table;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export const getFromProfiles = () => supabase.from('profiles');
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
;
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {;
  global:{ fetch:safeFetch }
}),;
;
// Helper function to get profiles table;
export const getFromProfiles = () => supabase.from('profiles'),; 
});
// Helper function to get profiles table;
export const getFromProfiles = () => supabase.from('profiles');
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

// Helper function to get profiles table
export const getFromProfiles = () => supabase.from('profiles');
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/performance-monitor.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
;
// Utility to detect network connectivity. navigator.onLine is not reliable in;
// all environments, so we also try a small request with a short timeout.;
export const checkOnline = async (): Promise<boolean> => {;
  if (typeof navigator !== 'undefined' && !navigator.onLine) {;
    return false;
  }
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
  try {;export const getFromProfiles = () => supabase.from("profiles");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
// Helper function to get profiles table"
export const getFromProfiles = () => supabase.from("profiles");
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    return await fetch(input, init);
  } catch (err) {
    // Log the original error for debugging
    console.error("Supabase fetch failed:", err);
    throw new Error("Failed to connect to Supabase");
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { fetch: safeFetch },
});

// Helper function to get profiles table
export const getFromProfiles = () => supabase.from('profiles');
export const getFromProfiles = () => supabase.from("profiles");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
