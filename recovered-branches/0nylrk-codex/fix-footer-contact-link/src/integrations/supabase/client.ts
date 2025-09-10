import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
import { createClient } from "@supabase/supabase-js";
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/integrations/supabase/client.ts
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

import {createClient} from '@supabase/supabase-js';

import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
}
// Utility to detect network connectivity. navigator.onLine is not reliable inimport { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { responseTime: number; memoryUsage: number; timestamp: string; endpoint: string; method: string} class PerformanceMonitor { private static instance: PerformanceMonitor; private metrics: PerformanceMetrics[] = []; static getInstance(): PerformanceMonitor { if (!PerformanceMonitor.instance) { PerformanceMonitor.instance = new PerformanceMonitor()} return PerformanceMonitor.instance} recordMetric(metric: PerformanceMetrics) { this.metrics.push(metric); if (this.metrics.length > 1000) { this.metrics = this.metrics.slice(-1000)} getMetrics(): PerformanceMetrics[] { return [...this.metric,s ]} getAverageResponseTime(): number { if (this.metrics.length === 0) { return 0} const total = this.metrics.reduce((sum,metric) => sum + metric.responseTime,0); return total / this.metrics.length} getMemoryUsage(): number { if (this.metrics.length === 0) { return 0} const latest = this.metrics[this.metrics.length - 1]; return latest ? latest.memoryUsage : 0} export const performanceMiddleware = (req: NextApiRequest,res: NextApiResponse,next: Function) => { const startTime = Date.now(); const startMemory = process.memoryUsage().heapUsed; res.on('finish',() => { const endTime = Date.now(); const endMemory = process.memoryUsage().heapUsed; const monitor = PerformanceMonitor.getInstance(); monitor.recordMetric({ responseTime: 'endTime - startTime',memoryUsage: endMemory - startMemory,timestamp: new Date().toISOString(),endpoint: req.url || '',method: req.method || '' })}); next()} export default PerformanceMonitor;
import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {"
  throw new Error("Missing Supabase environment variables");
}

// Utility to detect network connectivity. navigator && navigator.onLine is not reliable in
}
// Utility to detect network connectivity. navigator.onLine is not reliable in
// all environments, so we also try a small request with a short timeout.
export const checkOnline = async (): Promise<boolean> => {"
  if (typeof navigator !== "undefined" && !navigator.onLine) {};
    return false;
  }

  try {;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 3000);
    await fetch("https://clients3.google.com/generate_204", {
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
  try {

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
    return await fetch (input, init);
  } catch (err) {

import { createClient } from '@supabase/supabase-js',;
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL,;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY,;
if (!supabaseUrl || !supabaseAnonKey) {;
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { fetch: safeFetch },
});

// Helper function to get profiles table
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/performance-monitor.ts
export const getFromProfiles = () => supabase.from("profiles");
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/integrations/supabase/client.ts
