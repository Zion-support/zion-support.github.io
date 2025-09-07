// API endpoint for performance metrics collection;
import type { NextApiRequest, NextApiResponse } from 'next';
import type { PerformanceReport } from '@/utils/performance-monitor';
;
interface PerformanceData {;
  timestamp: string;,;
  url: string;,;
  userAgent: string;,;
  fcp: number;,;
  lcp: number;,;
  fid: number;,;
  cls: number;,;
  ttfb: number;,;
  sessionId:string;
}
interface ErrorData {;
  error: string;,;
  stack?:string,;
// In-memory storage for demo purposes;
// In production, use a proper database;
let performanceMetrics: PerformanceData[] = [];,;
let errorLogs: ErrorData[] = [];,;
export default async function handler(;
  req: NextApiRequest;,;
  res:NextApiResponse;)
):Promise<void> {;
</void>