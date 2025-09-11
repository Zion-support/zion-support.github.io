


import type { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { lcp?: number; fid?: number; cls?: number; fcp?: number; ttfb?: number; timestamp: string; url: string; userAgent: string} export default function handler(req: NextApiRequest,res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ message: 'Method not allowed' })} try { const metrics: PerformanceMetrics = req.body; console.log('Performance Metrics:',{ lcp: metrics.lcp,fid: metrics.fid,cls: metrics.cls,fcp: metrics.fcp,ttfb: metrics.ttfb,timestamp: metrics.timestamp,url: metrics.url,userAgent: metrics.userAgent }); res.status(200).json({ message: 'Performance metrics recorded successfully' })} catch (error) { console.error('Error processing performance metrics:',error); res.status(500).json({ message: 'Internal server error' })} }



import type { NextApiRequest, NextApiResponse } from 'next';
interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  "timestamp": string;
  url: string;
  userAgent: string}
export default function handler("req": NextApiRequest, "res": NextApiResponse) {
  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ message: 'Method not allowed' })}
  try {
    const "metrics": PerformanceMetrics = req && req.body;
    // Log the performance metrics (in production, you might want to send this to analytics)
    console && console.log('Performance "Metrics": ', {
      "lcp": metrics && metrics.lcp,
      "fid": metrics && metrics.fid,
      "cls": metrics && metrics.cls,
      "fcp": metrics && metrics.fcp,
      "ttfb": metrics && metrics.ttfb,
      "timestamp": metrics && metrics.timestamp,
      "url": metrics && metrics.url,
      "userAgent": metrics && metrics.userAgent
    });
    // In a real application, you "would": // 1. Send to analytics service (Google Analytics, Mixpanel, etc.)
    // 2. Store in database for performance monitoring
    // 3. Set up alerts for poor performance metrics

import type { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { lcp?: number; fid?: number; cls?: number; fcp?: number; ttfb?: number; timestamp: string; url: string; userAgent: string} export default function handler(req: NextApiRequest,res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ message: 'Method not allowed' })} try { const metrics: PerformanceMetrics = req.body; console.log('Performance Metrics:',{ lcp: metrics.lcp,fid: metrics.fid,cls: metrics.cls,fcp: metrics.fcp,ttfb: metrics.ttfb,timestamp: metrics.timestamp,url: metrics.url,userAgent: metrics.userAgent }); res.status(200).json({ message: 'Performance metrics recorded successfully' })} catch (error) { console.error('Error processing performance metrics:',error); res.status(500).json({ message: 'Internal server error' })} }
import type { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { lcp?: number; fid?: number; cls?: number; fcp?: number; ttfb?: number; timestamp: string; url: string; userAgent: string} export default function handler(req: NextApiRequest,res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ message: 'Method not allowed' })} try { const metrics: PerformanceMetrics = req.body; console.log('Performance Metrics:',{ lcp: metrics.lcp,fid: metrics.fid,cls: metrics.cls,fcp: metrics.fcp,ttfb: metrics.ttfb,timestamp: metrics.timestamp,url: metrics.url,userAgent: metrics.userAgent }); res.status(200).json({ message: 'Performance metrics recorded successfully' })} catch (error) { console.error('Error processing performance metrics:',error); res.status(500).json({ message: 'Internal server error' })} }
import type { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { lcp?: number; fid?: number; cls?: number; fcp?: number; ttfb?: number; timestamp: string; url: string; userAgent: string} export default function handler(req: NextApiRequest,res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ message: 'Method not allowed' })} try { const metrics: PerformanceMetrics = req.body; console.log('Performance Metrics:',{ lcp: metrics.lcp,fid: metrics.fid,cls: metrics.cls,fcp: metrics.fcp,ttfb: metrics.ttfb,timestamp: metrics.timestamp,url: metrics.url,userAgent: metrics.userAgent }); res.status(200).json({ message: 'Performance metrics recorded successfully' })} catch (error) { console.error('Error processing performance metrics:',error); res.status(500).json({ message: 'Internal server error' })} }
import type { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { lcp?: number; fid?: number; cls?: number; fcp?: number; ttfb?: number; timestamp: string; url: string; userAgent: string} export default function handler(req: NextApiRequest,res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ message: 'Method not allowed' })} try { const metrics: PerformanceMetrics = req.body; console.log('Performance Metrics:',{ lcp: metrics.lcp,fid: metrics.fid,cls: metrics.cls,fcp: metrics.fcp,ttfb: metrics.ttfb,timestamp: metrics.timestamp,url: metrics.url,userAgent: metrics.userAgent }); res.status(200).json({ message: 'Performance metrics recorded successfully' })} catch (error) { console.error('Error processing performance metrics:',error); res.status(500).json({ message: 'Internal server error' })} }