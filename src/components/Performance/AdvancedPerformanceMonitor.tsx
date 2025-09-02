import React, { useEffect, useState } from &apos;react&apos; import { motion } from &apos;framer-motion&apos; interface PerformanceMetrics {
  fcp: number;
   lcp: number;
   fid: number;
   cls: number;
   ttfb: number;
   fm,p: number}&apos; const AdvancedPerformanceMonitor: React.FC = () => {} const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null) const;const [isVisible, setIsVisible] = useState(false) useEffect(() => {&apos;&apos;';}'