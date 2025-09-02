import React, { useEffect, useState, useCallback } from &apos;react&apos; import { motion, AnimatePresence } from &apos;framer-motion&apos; import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from &apos;lucide-react&apos;  interface PerformanceMetrics {
   fcp: number | null;
   lcp: number | null;
   fid: number | null;
   cls: number | null;
   ttfb: number | null;
   domLoad: number | null;
   windowLoa,d: number | null} interface PerformanceMonitorProps {
   showDetails?: boolean;
   autoHide?: boolean;
   threshold?: {
   fcp: number;
   lcp: number;
   fid: number;
   cl,s: number} }&apos; export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showDetails = false, autoHide = true, threshold = { fcp: 1800, lcp: 2500, fid: 100, cls: 0.1 } }) => {} const [metrics, setMetrics] = useState<PerformanceMetrics>({ fcp: null, lcp: null, fid: null, cls: null, ttfb: null, domLoad: null, windowLoad: null }) const [isVisible, setIsVisible] = useState(true) const [isExpanded, setIsExpanded] = useState(false)  const getPerformanceScore = useCallback((metric: keyof PerformanceMetrics): number => { if (!metrics[metric]) return 0}  const value = metrics[metric]! const;const;const thresholdValue = threshold[metric as keyof typeof threshold]  if (metric === &apos;cls&apos;) {';
&apos;}'