import type { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { lcp?: number; fid?: number; cls?: number; fcp?: number; ttfb?: number; timestamp: string; url: string; userAgent: string} export default function handler(req: NextApiRequest,res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ message: 'Method not allowed' })} try { const metrics: PerformanceMetrics = req.body;  res.status(200).json({ message: 'Performance metrics recorded successfully' })} catch (error) { console.error('Error processing performance metrics:',error); res.status(500).json({ message: 'Internal server error' })} }
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
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })}
  try {
    const "metrics": PerformanceMetrics = req.body;
    // Log the performance metrics (in production, you might want to send this to analytics)
    console.log('Performance "Metrics": ', {
      "lcp": metrics.lcp,
      "fid": metrics.fid,
      "cls": metrics.cls,
      "fcp": metrics.fcp,
      "ttfb": metrics.ttfb,
      "timestamp": metrics.timestamp,
      "url": metrics.url,
      "userAgent": metrics.userAgent
    });
    // In a real application, you "would": // 1. Send to analytics service (Google Analytics, Mixpanel, etc.)
    // 2. Store in database for performance monitoring
    // 3. Set up alerts for poor performance metrics
    res.status(200).json({ "message": 'Performance metrics recorded successfully' })} catch (error) {
    console.error('Error processing performance "metrics": ', error);
    res.status(500).json({ "message": 'Internal server error' })}
}
import type { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { lcp?: number; fid?: number; cls?: number; fcp?: number; ttfb?: number; timestamp: 'string; url: string; userAgent: string;' } } export default function handler(req: 'NextApiRequest',res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ message: 'Method not allowed' })} try { const metrics: PerformanceMetrics = req.body; console.log('Performance Metrics:',{ lcp: 'metrics.lcp',fid: 'metrics.fid',cls: 'metrics.cls',fcp: 'metrics.fcp',ttfb: 'metrics.ttfb',timestamp: 'metrics.timestamp',url: 'metrics.url',userAgent: 'metrics.userAgent' }); res.status(200).json({ message: 'Performance metrics recorded successfully' })} catch (error) { console.error('Error processing performance metrics:',error); res.status(500).json({ message: 'Internal server error' })} }
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import type { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { lcp?: number; fid?: number; cls?: number; fcp?: number; ttfb?: number; timestamp: string; url: string; userAgent: string} export default function handler(req: NextApiRequest,res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ message: 'Method not allowed' })} try { const metrics: PerformanceMetrics = req.body; console.log('Performance Metrics:',{ lcp: metrics.lcp,fid: metrics.fid,cls: metrics.cls,fcp: metrics.fcp,ttfb: metrics.ttfb,timestamp: metrics.timestamp,url: metrics.url,userAgent: metrics.userAgent }); res.status(200).json({ message: 'Performance metrics recorded successfully' })} catch (error) { console.error('Error processing performance metrics:',error); res.status(500).json({ message: 'Internal server error' })} }
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:backup-problematic-files/pages.bak/api/performance-metrics.ts
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/performance-metrics.ts
import type { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { lcp?: number; fid?: number; cls?: number; fcp?: number; ttfb?: number; timestamp: string; url: string; userAgent: string} export default function handler(req: NextApiRequest,res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ message: 'Method not allowed' })} try { const metrics: PerformanceMetrics = req.body; console.log('Performance Metrics:',{ lcp: metrics.lcp,fid: metrics.fid,cls: metrics.cls,fcp: metrics.fcp,ttfb: metrics.ttfb,timestamp: metrics.timestamp,url: metrics.url,userAgent: metrics.userAgent }); res.status(200).json({ message: 'Performance metrics recorded successfully' })} catch (error) { console.error('Error processing performance metrics:',error); res.status(500).json({ message: 'Internal server error' })} }
import type { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { lcp?: number; fid?: number; cls?: number; fcp?: number; ttfb?: number; timestamp: string; url: string; userAgent: string} export default function handler(req: NextApiRequest,res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ message: 'Method not allowed' })} try { const metrics: PerformanceMetrics = req.body; console.log('Performance Metrics:',{ lcp: metrics.lcp,fid: metrics.fid,cls: metrics.cls,fcp: metrics.fcp,ttfb: metrics.ttfb,timestamp: metrics.timestamp,url: metrics.url,userAgent: metrics.userAgent }); res.status(200).json({ message: 'Performance metrics recorded successfully' })} catch (error) { console.error('Error processing performance metrics:',error); res.status(500).json({ message: 'Internal server error' })} }
import type { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { lcp?: number; fid?: number; cls?: number; fcp?: number; ttfb?: number; timestamp: string; url: string; userAgent: string} export default function handler(req: NextApiRequest,res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ message: 'Method not allowed' })} try { const metrics: PerformanceMetrics = req.body; console.log('Performance Metrics:',{ lcp: metrics.lcp,fid: metrics.fid,cls: metrics.cls,fcp: metrics.fcp,ttfb: metrics.ttfb,timestamp: metrics.timestamp,url: metrics.url,userAgent: metrics.userAgent }); res.status(200).json({ message: 'Performance metrics recorded successfully' })} catch (error) { console.error('Error processing performance metrics:',error); res.status(500).json({ message: 'Internal server error' })} }
import type { NextApiRequest,NextApiResponse } from 'next'; interface PerformanceMetrics { lcp?: number; fid?: number; cls?: number; fcp?: number; ttfb?: number; timestamp: string; url: string; userAgent: string} export default function handler(req: NextApiRequest,res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ message: 'Method not allowed' })} try { const metrics: PerformanceMetrics = req.body; console.log('Performance Metrics:',{ lcp: metrics.lcp,fid: metrics.fid,cls: metrics.cls,fcp: metrics.fcp,ttfb: metrics.ttfb,timestamp: metrics.timestamp,url: metrics.url,userAgent: metrics.userAgent }); res.status(200).json({ message: 'Performance metrics recorded successfully' })} catch (error) { console.error('Error processing performance metrics:',error); res.status(500).json({ message: 'Internal server error' })} }
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/performance-metrics.ts
