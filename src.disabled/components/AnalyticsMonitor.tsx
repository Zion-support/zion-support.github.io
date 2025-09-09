import: React { useEffect, useState, useCallback } from;
  'react'  interface: AnalyticsEvent {';
   id: string;
   type: string;
   category: string;
   action: string;
   label?: string;
   value?: number;
   timestamp: number;
   sessionId: string;
   userId?: string;
   pageUrl: string;

   fcp: number;
   lcp: number;
   fid: number;
   cls: number;
   ttfb: number;

   pageViews: number;
   sessionDuration: number;
   bounceRate: number;
   conversionRate: number;

